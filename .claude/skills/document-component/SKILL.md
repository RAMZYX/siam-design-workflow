---
name: document-component
description: Write a component specification from 03-design-system/Design Foundation/_component-template.md — purpose, anatomy, variants, state matrix, interaction contract, keyboard behavior, token mapping and accessibility. Use when the user asks to document, spec or define a component (button, input, modal, table, card, etc.), optionally from a Figma link.
---

# Document a component

## Read first
- `CLAUDE.md`
- `03-design-system/Design Foundation/_component-template.md` — the template (never edit it directly)
- The relevant token files in `03-design-system/Design Foundation/` (colour, type, spacing, radius, icons, motion)
- `02-foundation/ux-standards.md` — the section matching the component (forms, tables, overlays…)
- `02-foundation/accessibility.md` — §2 keyboard/focus, §4 labels, §7 dynamic content

## Steps

1. **Check it doesn't already exist.** Search `03-design-system/` for an existing spec of the same component. Prefer updating it over creating a duplicate. Do not create a component just because the template exists.

2. **Get the source.** Figma component set link (use Figma tools if available), code component path, or the user's description.

3. **Create** `03-design-system/Design Foundation/[component-name].md` from the template with the next `CMP-` ID.

4. **Fill every section:**
   - Purpose, when to use / when not to use.
   - Anatomy with parts and token references.
   - Every variant and size.
   - State matrix: default, hover, focus-visible, pressed, disabled, loading, error/success/selected — `N/A` with reason when not applicable.
   - Interaction contract and keyboard interaction (follow WAI-ARIA patterns for the widget type).
   - Token mapping — semantic tokens only; flag hard-coded values.
   - Content and accessibility: role/name, focus, target size (44×44 px recommended), screen-reader behaviour, contrast evidence.
   - Do / don't examples.
   Unknown values stay `TBD`.

5. **Link usage.** Fill *Used on screens* with `SCR-` IDs; add the component to `04-development/dev-handoff.md` §4 inventory if a handoff exists.

## Finish
Give the file path, list `TBD`s, and note any accessibility gaps found.
