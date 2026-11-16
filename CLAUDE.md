# CLAUDE.md — Siam Design Workflow

Instructions and routing for Claude Code. Detailed requirements live in the topic files linked below; this file says **where to look and how to decide**, not the rules themselves.

The repo is a reusable template: most files contain `[PLACEHOLDER]` values that each project fills with its own approved information.

## 1. Project principles
- Design for the user's task first; follow [`design-principles.md`](02-foundation/design-principles.md).
- Document what every screen and component **does**, not only how it looks.
- **Never invent** product rules, tokens, component variants, validation limits, copy, permissions, API paths, Figma links, owners or approval statuses. Write `TBD` and open a question.
- Accessibility (WCAG 2.1 AA baseline) is a requirement, not polish.
- Design every relevant state (loading, empty, error, success, disabled, permission), per [`ux-standards.md`](02-foundation/ux-standards.md) §7.
- Before calling work done, check it against the checklist in each topic file you used.
- Report honestly: never mark anything tested, approved, verified or `Pass` without evidence.

## 2. Source-of-truth rules
Order of authority when sources disagree:
1. Explicit task requirements and approved product decisions
2. Approved project specs: design system (`03-design-system/`), `memory.md`, flows, IA
3. Platform conventions and the standards in `02-foundation/`
4. Universal principles in `design-principles.md`
5. Preference or trends

- **One topic, one authoritative file.** The [design-system index](03-design-system/README.md) lists them. Summaries elsewhere link to the authoritative file and lose to it.
- Specification statuses (`approved`, `draft`, `proposed`, `missing`, `conflicting`, `deprecated`) are defined in the [index](03-design-system/README.md#specification-statuses). Only `approved` specs can be built from without reporting a gap.
- Functional requirements in `memory.md` use their own statuses (`Confirmed`, `Proposed`, `Open`, `Implemented (verified)`, `Deprecated`).
- **Inspiration and moodboards are never approved rules.**
- **Motion numbers:** the project's approved `motion.md` wins over the built-in defaults in the `motion-system` and `ui-animation` skills. Those defaults are `proposed` until the owner approves them.

## 3. Documentation discovery
| Need | Start here |
|---|---|
| Design-system topics and components | [`03-design-system/README.md`](03-design-system/README.md) |
| Component list and status | [`03-design-system/component-registry.md`](03-design-system/component-registry.md) |
| Screen and flow logic | [`02-foundation/memory.md`](02-foundation/memory.md) |
| Sitemap and navigation | [`01-research/information-architecture.md`](01-research/information-architecture.md) |
| User flows | `01-research/flow-*.md` (template: [`user-flow.md`](01-research/user-flow.md)) |
| Workflow overview | [`README.md`](README.md) |

`02-foundation/` files refer to each other by bare filename (e.g. `accessibility.md`); they are all in `02-foundation/`.

## 4. Task-to-file routing
| Task | Read | Skill |
|---|---|---|
| Any screen or component work | Resolve context first | `/design-context` |
| New project setup | `memory.md`, `information-architecture.md`, `03-design-system/README.md` | `/start-project` |
| Sitemap / navigation | `information-architecture.md`, `ux-standards.md` §3 | `/map-ia` |
| User flow | `user-flow.md`, `memory.md`, `ux-standards.md` | `/user-flow` |
| Record screen logic | `memory.md`, `ux-standards.md` §10, `content-and-microcopy.md` §13 | `/update-memory` |
| Foundations (colour, type, spacing, grid, radius, elevation, icons, responsive, motion) | The topic file from the index, `accessibility.md` §1 | `/document-tokens` |
| Component spec | `components/_component-template.md`, `component-registry.md`, token files | `/document-component` |
| Review a design against standards | All of `02-foundation/` | `/design-review` |
| Test a built UI against approved specs | `ui-qa-checklist.md`, `memory.md`, specs | `/ui-qa` |
| Animation and motion (timing, UI motion, transitions, Lottie, Rive, native, haptics, motion specs and reviews) | `motion.md`, `accessibility.md`, then the [animation-and-motion guide](.claude/skills/animation-and-motion/README.md) | Not slash commands: read the matching `SKILL.md` in `.claude/skills/animation-and-motion/<skill>/` |
| UI copy | `content-and-microcopy.md` | — |
| New prototype / app | [`PROTOTYPE-STACK.md`](04-development/PROTOTYPE-STACK.md) | `/scaffold-prototype` |
| Developer handoff | `dev-handoff.md`, `memory.md`, registry | `/dev-handoff` |
| FRD | `frd-template.md` + all of `memory.md` — **only when the user explicitly asks** | — |

`/design-review` critiques a design against the standards; `/ui-qa` tests a build against approved specs and logs defects.

## 5. Missing Figma handling
Figma is optional everywhere. When there is no Figma link, or Figma tools are unavailable:
1. Use approved Markdown specs, then existing code, then related approved components.
2. Check the project type in the [index](03-design-system/README.md#project-design-system-type): `foundation-only`, `partial` or `complete`.
3. Proceed only with what is `approved`. For anything missing, write a proposal marked `proposed` and ask the owner.
4. Say in your report that Figma was not checked.

## 6. Component reuse requirements
- Check the [component registry](03-design-system/component-registry.md) and existing code before creating anything.
- Reuse and extend approved components and tokens; do not introduce a new component, variant, pattern or dependency without justification and approval.
- Components use semantic tokens, never raw values.
- Create a component spec only for a component the project actually uses.

## 7. Approval and conflict handling
- Ask before removing or contradicting approved content, and before any destructive or ambiguous change.
- When Figma, Markdown, code or `memory.md` disagree: mark the item `conflicting`, record both values and the affected IDs, add an open decision with the owner, and do not pick one silently.
- Never change a status to `approved` yourself.

## 8. Documentation update rules
- After a confirmed screen or flow change, update `memory.md` (elements, interactions, validations, states, acceptance criteria, change log).
- After creating or changing a component spec, update its row in the registry.
- Keep IDs stable (`SCR-`, `FLOW-`, `NAV-`, `ROLE-`, `INT-`, `VAL-`, `BR-`, `DEP-`, `AC-`, `CMP-`, `AST-`, `UI-`, `Q-`, `IA-Q`, `H-`). Never renumber or reuse.
- Edit a rule only in its authoritative file; link to it from elsewhere instead of copying it.
- Deprecated paths (`spacing-and-grid.md`, `radius-and-elevation.md`) are redirect stubs; do not add content to them.
- Keep this template generic: project data belongs in each project's own copy. Placeholders use the form `` `[UPPERCASE PLACEHOLDER]` ``.
- Run `node scripts/check-docs.mjs` after changing files or paths.
