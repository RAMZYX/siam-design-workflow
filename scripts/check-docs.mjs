#!/usr/bin/env node
// Lightweight documentation checks for the Siam Design Workflow repo.
// Usage: node scripts/check-docs.mjs   (Node 18+, no dependencies)

import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, dirname, relative, resolve, basename, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const errors = [];
const fail = (file, msg) => errors.push(`${relative(root, file).split(sep).join('/')}: ${msg}`);

// Paths written in backticks that start with one of these are checked against the repo root.
const ROOT_ENTRIES = ['.claude', '01-research', '02-foundation', '03-design-system', '04-development', '05-testing', 'scripts', 'CLAUDE.md', 'README.md'];
// Bare filenames used as examples of files a project creates later.
const EXAMPLE_FILES = new Set(['button.md', 'input.md', 'modal.md', 'pagination.md']);
const METADATA_FIELDS = ['Source type', 'Specification status', 'Owner', 'Last reviewed', 'Open decisions'];

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    if (name === '.git' || name === 'node_modules') continue;
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else if (name.endsWith('.md')) out.push(full);
  }
  return out;
}

// Remove fenced code blocks so example commands and snippets are not checked.
const stripFences = (text) => text.replace(/^(```|~~~)[\s\S]*?^\1/gm, '');

// GitHub-style heading anchor.
const slug = (heading) =>
  heading.trim().toLowerCase().replace(/[`*_~]/g, '').replace(/[^\p{L}\p{N}\s-]/gu, '').replace(/\s/g, '-');

const anchorCache = new Map();
function anchors(file) {
  if (!anchorCache.has(file)) {
    const set = new Set();
    for (const m of stripFences(readFileSync(file, 'utf8')).matchAll(/^#{1,6}\s+(.+)$/gm)) set.add(slug(m[1]));
    anchorCache.set(file, set);
  }
  return anchorCache.get(file);
}

const files = walk(root);
const basenames = new Set(files.map((f) => basename(f)));

// 1. Markdown links and 2. backtick path references.
for (const file of files) {
  const text = stripFences(readFileSync(file, 'utf8'));

  for (const m of text.matchAll(/\]\((<[^>]+>|[^)\s]+)\)/g)) {
    let target = m[1].replace(/^<|>$/g, '');
    if (/^(https?:|mailto:)/.test(target)) continue;
    const [pathPart, anchor] = target.split('#');
    const dest = pathPart ? resolve(dirname(file), decodeURIComponent(pathPart)) : file;
    if (!existsSync(dest)) { fail(file, `broken link → ${target}`); continue; }
    if (anchor && dest.endsWith('.md') && !anchors(dest).has(anchor.toLowerCase())) fail(file, `missing anchor → ${target}`);
  }

  for (const m of text.matchAll(/`([^`\n]+)`/g)) {
    const ref = m[1].trim();
    if (/[\[\]*<>{}|]|\s/.test(ref)) continue; // placeholders, globs, prose
    const top = ref.split('/')[0];
    if (ROOT_ENTRIES.includes(top)) {
      if (!existsSync(join(root, ref))) fail(file, `referenced path does not exist → ${ref}`);
    } else if (/^[\w.-]+\.md$/.test(ref) && !basenames.has(ref) && !EXAMPLE_FILES.has(ref)) {
      fail(file, `referenced file not found anywhere in repo → ${ref}`);
    }
  }
}

// 3. Skills are well formed.
const skillsDir = join(root, '.claude', 'skills');
for (const name of existsSync(skillsDir) ? readdirSync(skillsDir) : []) {
  const file = join(skillsDir, name, 'SKILL.md');
  if (!existsSync(file)) { fail(join(skillsDir, name), 'skill folder has no SKILL.md'); continue; }
  const fm = readFileSync(file, 'utf8').match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fm) { fail(file, 'missing front matter'); continue; }
  const skillName = fm[1].match(/^name:\s*(.+)$/m)?.[1].trim();
  if (skillName !== name) fail(file, `front matter name "${skillName}" does not match folder "${name}"`);
  if (!/^description:\s*\S/m.test(fm[1])) fail(file, 'missing description');
}

// 4. Design-system discoverability, stubs and metadata.
const ds = join(root, '03-design-system');
const index = join(ds, 'README.md');
const indexText = existsSync(index) ? readFileSync(index, 'utf8') : '';
const indexTargets = new Set(
  [...indexText.matchAll(/\]\(([^)#\s]+)/g)].map((m) => resolve(ds, decodeURIComponent(m[1])))
);
const foundationDir = join(ds, 'Design Foundation');
const componentsDir = join(ds, 'components');
const dsFiles = [foundationDir, componentsDir].filter(existsSync).flatMap((d) => walk(d));

for (const file of dsFiles) {
  const text = readFileSync(file, 'utf8');
  const isStub = /^#\s.*—\s*moved\s*$/m.test(text);
  // Foundations (and the component template) are found via the index; component specs via the registry (check 6).
  const isComponentSpec = dirname(file) === componentsDir && !basename(file).startsWith('_');
  if (!isComponentSpec && !indexTargets.has(file)) fail(file, 'not linked from 03-design-system/README.md');
  if (isStub) {
    if (/^\|\s*-/m.test(text)) fail(file, 'deprecated redirect stub must not contain specification tables');
    continue;
  }
  for (const field of METADATA_FIELDS) {
    if (!new RegExp(`^\\|\\s*${field}\\b`, 'm').test(text)) fail(file, `metadata field missing: ${field}`);
  }
}

// 5. Figma is optional wherever a Figma URL field exists.
for (const file of files) {
  for (const line of readFileSync(file, 'utf8').split(/\r?\n/)) {
    if (/^\|\s*Figma URL/.test(line) && !/optional/i.test(line)) fail(file, `Figma URL field not marked optional: ${line.slice(0, 60)}`);
  }
}

// 6. Component registry matches component specs.
const registry = join(ds, 'component-registry.md');
if (existsSync(registry)) {
  const regText = readFileSync(registry, 'utf8');
  const specPaths = [...regText.matchAll(/`(components\/[^`\[\]]+\.md)`/g)].map((m) => m[1]);
  for (const p of specPaths) if (!existsSync(join(ds, p))) fail(registry, `specification path does not exist → ${p}`);
  if (existsSync(componentsDir)) {
    for (const name of readdirSync(componentsDir).filter((n) => n.endsWith('.md') && !n.startsWith('_'))) {
      if (!specPaths.includes(`components/${name}`)) fail(join(componentsDir, name), 'component spec has no row in component-registry.md');
    }
  }
}

if (errors.length) {
  console.error(`✗ ${errors.length} problem(s) found:\n`);
  for (const e of errors) console.error(`  - ${e}`);
  process.exit(1);
}
console.log(`✓ Docs check passed (${files.length} Markdown files).`);
