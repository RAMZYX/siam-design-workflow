---
name: map-ia
description: Build or update the project's information architecture — sitemap, page inventory, navigation levels, role visibility and cross-navigation — in 01-research/information-architecture.md. Use when the user asks for a sitemap, IA, navigation structure, page list, or to add/move/rename screens.
---

# Map the information architecture

## Read first
- `CLAUDE.md`
- `01-research/information-architecture.md` (the file you will edit)
- `02-foundation/memory.md` — §1 Project profile, §2 Roles, §4 Screen inventory
- `02-foundation/design-principles.md` — §4.5 Navigation and information architecture
- `02-foundation/ux-standards.md` — §3 Navigation
- `02-foundation/content-and-microcopy.md` — §2 Writing rules (for labels)

## Steps

1. **Gather inputs.** Use the context already in the IA file and `memory.md`. If the user gave a list of screens, features or a Figma link, use those. Ask only for what blocks the structure (e.g. which roles exist, primary platform).

2. **Propose the structure first.** Show the user a draft sitemap tree (section 2 format) with `NAV-` and `SCR-` IDs, and the primary/secondary/contextual navigation pattern. Wait for approval or changes before writing the full file.

3. **Write the IA file**, section by section:
   - §2 Sitemap tree — replace the example.
   - §3 Page inventory — every page, plus overlays (modals, drawers, sheets) with their own `SCR-` IDs.
   - §4 Navigation levels and behaviour — rules the user did not confirm stay `TBD`.
   - §5 Role visibility and access — visibility and authorisation are separate; fill both.
   - §6 Naming and grouping — labels must be clear, consistent and match microcopy rules.
   - §7 Cross-navigation — links between screens with `FLOW-` IDs where known.
   - §8 Open questions — `IA-Q0X` for every unresolved decision.
   - Change history row.

4. **Keep IDs in sync.** Add any new screens to `memory.md` §4 Screen inventory with the same `SCR-` IDs (logic completeness `Open`). Reuse existing IDs; never renumber.

5. **Check** against the IA file's *Designer checklist*: no orphan pages, no dead ends, every screen has a parent, purpose and entry path.

## Finish
Report the checklist result, list open IA questions, and suggest `/user-flow` for the top tasks.
