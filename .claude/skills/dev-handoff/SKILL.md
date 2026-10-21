---
name: dev-handoff
description: Build or update the developer handoff document for a release in 04-development/dev-handoff.md — source links, screen list, component inventory, tokens, interaction notes, responsive and accessibility specs, assets, dependencies and open questions — compiled from memory.md, flows, IA and the design system. Use when the user asks to prepare a handoff, hand over to developers, or package a release for engineering.
---

# Developer handoff

The handoff is an **index** that links approved sources. It does not replace the FRD or the design system.

## Read first
- `CLAUDE.md`
- `04-development/dev-handoff.md` — the template
- `02-foundation/memory.md` — screens, interactions, validations, states, dependencies, open questions
- `01-research/information-architecture.md` and `01-research/flow-*.md`
- `03-design-system/Design Foundation/` — token and component files
- `05-testing/ui-qa-checklist.md` — for the QA plan link

Note: the template mentions `01-flows/`; in this repo flows and IA live in `01-research/`. Use the real paths.

## Steps

1. **Confirm scope:** project, release, platforms, roles, included/excluded modules. If the user wants to keep the template clean, write to `04-development/dev-handoff-[release].md`.

2. **Fill each section from the sources** (do not re-derive behaviour):
   - §1 Summary and §2 Source links (real paths and Figma links).
   - §3 Screen list — every `SCR-` in scope, including overlays, responsive variants, error/empty states. *Ready?* = `Yes` only if the screen is FRD-ready in `memory.md`.
   - §4 Component inventory — existing vs. new; new components need approval noted.
   - §5 Tokens — link the design-foundation files.
   - §6 Interaction notes — reference `INT-`/`VAL-` IDs from `memory.md`; unknown = `TBD`.
   - §7 Responsive and accessibility specs.
   - §8 Assets, §9 Dependencies (no invented API paths).
   - §10 Open questions — carry over unresolved `memory.md` §8 items as `H-` rows with owners.

3. **Gaps are blockers, not guesses.** List screens that are not ready and why in §1 *Blockers*.

4. **Check** against the *Designer handoff checklist*; tick only what is true.

## Finish
Report the file path, blockers, open questions, and checklist items still unticked.
