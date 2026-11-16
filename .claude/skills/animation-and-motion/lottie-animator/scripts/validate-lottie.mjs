#!/usr/bin/env node
// Validates a Lottie JSON file against the lottie-animator Golden Rules.
// Usage: node validate-lottie.mjs <file.json> [--json]
// Exit code: 0 = no errors (warnings allowed), 1 = errors found, 2 = unreadable file.

import { readFileSync, statSync } from "node:fs";

const [, , file, flag] = process.argv;
if (!file) {
  console.error("Usage: node validate-lottie.mjs <file.json> [--json]");
  process.exit(2);
}

let anim;
try {
  anim = JSON.parse(readFileSync(file, "utf8"));
} catch (e) {
  console.error(`Cannot read ${file}: ${e.message}`);
  process.exit(2);
}

const errors = [];
const warnings = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const warn = (where, msg) => warnings.push(`${where}: ${msg}`);
const isNum = (v) => typeof v === "number" && Number.isFinite(v);
const EMOJI = /\p{Extended_Pictographic}/u;
const GENERIC_NAME = /^(Shape Layer|Layer|Rectangle|Ellipse|Group|Path|Polystar)\s*\d*$/i;

// Root
for (const k of ["v", "fr", "ip", "op", "w", "h", "layers"]) {
  if (anim[k] === undefined) err("root", `missing "${k}"`);
}
if (isNum(anim.ip) && isNum(anim.op) && anim.op <= anim.ip) err("root", `op (${anim.op}) must be greater than ip (${anim.ip})`);

const assets = Array.isArray(anim.assets) ? anim.assets : [];
const assetIds = new Set(assets.map((a) => a.id));
for (const a of assets) {
  if (Array.isArray(a.layers)) {
    for (const k of ["w", "h", "fr"]) {
      if (!isNum(a[k])) err(`asset "${a.id}"`, `precomp missing "${k}" (silent white screen in many players)`);
    }
  }
}

// Animated property checks: easing on keyframes, normalized colors
function checkProp(prop, where, { color = false } = {}) {
  if (!prop || typeof prop !== "object") return;
  if (prop.a === 1 && Array.isArray(prop.k)) {
    const kfs = prop.k;
    if (kfs.length < 2) warn(where, "animated property has fewer than 2 keyframes");
    kfs.forEach((kf, i) => {
      if (!isNum(kf.t)) err(where, `keyframe ${i} missing time "t"`);
      if (i < kfs.length - 1 && kf.h !== 1 && (!kf.i || !kf.o)) {
        warn(where, `keyframe ${i} has no easing ("i"/"o"); it will play linear`);
      }
      if (i > 0 && isNum(kf.t) && isNum(kfs[i - 1].t) && kf.t < kfs[i - 1].t) err(where, `keyframes out of order at index ${i}`);
      if (color && Array.isArray(kf.s) && kf.s.some((c) => c > 1)) err(where, `color values must be 0-1, got [${kf.s.join(", ")}]`);
    });
  } else if (color && Array.isArray(prop.k) && prop.k.some((c) => typeof c === "number" && c > 1)) {
    err(where, `color values must be 0-1, got [${prop.k.join(", ")}]`);
  }
}

function checkTransform(tr, where, { requireSkew }) {
  for (const k of ["p", "a", "s", "r", "o"]) {
    if (tr[k] === undefined) err(where, `transform missing "${k}"`);
    else checkProp(tr[k], `${where} ${k}`);
  }
  if (requireSkew) for (const k of ["sk", "sa"]) if (tr[k] === undefined) warn(where, `transform missing "${k}" (add {"a":0,"k":0})`);
}

function checkShapes(items, where, inGroup) {
  if (!Array.isArray(items)) return;
  items.forEach((s, i) => {
    const w = `${where} > ${s.nm ? `"${s.nm}"` : `[${i}]`}(${s.ty})`;
    if (s.ty === "fl" || s.ty === "st") checkProp(s.c, `${w} color`, { color: true });
    if (s.ty === "gf" || s.ty === "gs") { /* gradients: values are normalized too, skipped for brevity */ }
    if (["rc", "el", "sr"].includes(s.ty)) {
      const need = s.ty === "rc" ? ["p", "s", "r"] : s.ty === "el" ? ["p", "s"] : ["p", "or", "pt"];
      for (const k of need) if (s[k] === undefined) err(w, `missing "${k}"`);
    }
    if (s.ty === "gr") {
      const it = s.it || [];
      if (!it.length) err(w, "empty group");
      const last = it[it.length - 1];
      if (!last || last.ty !== "tr") err(w, `last item of "it" must be the transform {"ty":"tr"} (found "${last?.ty}")`);
      else checkTransform(last, `${w} tr`, { requireSkew: true });
      const trCount = it.filter((x) => x.ty === "tr").length;
      if (trCount > 1) err(w, `group has ${trCount} transforms; only one, last`);
      const hasStroke = it.some((x) => x.ty === "st" || x.ty === "gs");
      const hasFill = it.some((x) => x.ty === "fl" || x.ty === "gf");
      const hasGeometry = it.some((x) => ["rc", "el", "sr", "sh"].includes(x.ty));
      if (hasStroke && !hasFill && hasGeometry) warn(w, "stroke-only group; add a transparent fill for cross-player safety");
      checkShapes(it, w, true);
    }
    if (s.ty === "tr" && !inGroup) warn(w, "transform outside a group");
  });
}

function checkLayers(layers, where) {
  if (!Array.isArray(layers)) return;
  const inds = new Map();
  for (const l of layers) {
    if (isNum(l.ind)) {
      if (inds.has(l.ind)) err(where, `duplicate layer ind ${l.ind}`);
      inds.set(l.ind, l);
    }
  }
  layers.forEach((l, i) => {
    const w = `${where} > layer ${l.nm ? `"${l.nm}"` : `[${i}]`}`;
    for (const k of ["ip", "op", "st"]) if (!isNum(l[k])) err(w, `missing "${k}"`);
    if (l.ty === undefined) err(w, `missing "ty"`);
    if (!l.nm) warn(w, "layer has no name");
    else if (GENERIC_NAME.test(l.nm)) warn(w, `generic layer name "${l.nm}"; use a descriptive name`);
    if (l.parent !== undefined && !inds.has(l.parent)) err(w, `parent ${l.parent} does not exist`);
    if (!l.ks) err(w, `missing layer transform "ks"`);
    else checkTransform(l.ks, `${w} ks`, { requireSkew: false });
    if (l.ty === 0) {
      if (!assetIds.has(l.refId)) err(w, `precomp refId "${l.refId}" not found in assets`);
      for (const k of ["w", "h"]) if (!isNum(l[k])) err(w, `precomp layer missing "${k}"`);
    }
    if (l.ty === 2 && !assetIds.has(l.refId)) err(w, `image refId "${l.refId}" not found in assets`);
    if (l.ty === 4) checkShapes(l.shapes, w, false);
    if (l.ty === 5) {
      const docs = l.t?.d?.k || [];
      for (const d of docs) {
        const text = d?.s?.t || "";
        if (EMOJI.test(text)) err(w, `text contains emoji "${text}"; text layers can't render emoji`);
      }
    }
  });
}

checkLayers(anim.layers, "root");
for (const a of assets) if (Array.isArray(a.layers)) checkLayers(a.layers, `asset "${a.id}"`);

// Summary
const bytes = statSync(file).size;
const seconds = isNum(anim.op) && isNum(anim.ip) && isNum(anim.fr) ? (anim.op - anim.ip) / anim.fr : null;
const summary = {
  file,
  sizeKB: +(bytes / 1024).toFixed(1),
  canvas: `${anim.w}x${anim.h}`,
  fps: anim.fr,
  durationSeconds: seconds !== null ? +seconds.toFixed(2) : null,
  layers: Array.isArray(anim.layers) ? anim.layers.length : 0,
  errors,
  warnings,
};
const budgetKB = seconds !== null && seconds > 3 ? 500 : 250; // UI pieces vs. story sequences
if (bytes > budgetKB * 1024) warnings.push(`file is ${summary.sizeKB} KB; aim for under ${budgetKB} KB at this length (minify, cut keyframes, drop hidden layers)`);

if (flag === "--json") {
  console.log(JSON.stringify(summary, null, 2));
} else {
  console.log(`${file}\n  ${summary.canvas} @ ${summary.fps}fps, ${summary.durationSeconds}s, ${summary.layers} layers, ${summary.sizeKB} KB`);
  console.log(`  ${errors.length} error(s), ${warnings.length} warning(s)`);
  for (const e of errors) console.log(`  ERROR  ${e}`);
  for (const w of warnings) console.log(`  warn   ${w}`);
  if (!errors.length) console.log("  OK: no structural errors");
}
process.exit(errors.length ? 1 : 0);
