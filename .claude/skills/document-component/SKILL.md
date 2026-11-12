---
name: document-component
description: Write a component specification from 03-design-system/components/_component-template.md and register it in component-registry.md — purpose, anatomy, variants, state matrix, interaction contract, keyboard behavior, token mapping and accessibility. Works from Figma, code, approved Markdown or a proposal when Figma is unavailable. Use when the user asks to document, spec or define a component (button, input, modal, pagination, table, card, etc.).
---

# Document a component

## Read first
- `CLAUDE.md`
- `03-design-system/README.md` — project type, metadata fields, status definitions, missing-spec rules
- `03-design-system/component-registry.md`
- `03-design-system/components/_component-template.md` — the template (never edit it directly)
- The relevant foundation files linked from the index (colour, type, spacing, radius, elevation, icons, motion)
- `02-foundation/ux-standards.md` — the section matching the component (forms, tables, overlays…)
- `02-foundation/accessibility.md` — §2 keyboard/focus, §4 labels, §7 dynamic content

## Steps

1. **Resolve context first** with the `/design-context` workflow for this component: what specs, Figma, code and related components exist, and what is approved, missing or conflicting.

2. **Check it doesn't already exist.** Look in the registry and `03-design-system/components/`. Prefer updating an existing spec over creating a duplicate. Create a spec only for a component the project uses or has decided to build.

3. **Choose the source** (Figma is optional):
   - **Figma** — if a link is given and Figma tools are available.
   - **Code** — an existing implementation; record the path. Code shows current behaviour, not approved intent.
   - **Approved Markdown** — decisions the owner already approved.
   - **None** (partial or foundation-only design system) — draft the spec from approved foundations and related approved components. Every value you derive is `proposed`; mark the spec `proposed` and list what needs approval.

4. **Create** `03-design-system/components/[component-name].md` from the template with the next free `CMP-` ID (check the registry).

5. **Fill every applicable section:**
   - Metadata — source type, Figma URL or `N/A`, status (`approved` only if the owner approved), owner, last reviewed, related specs, open decisions.
   - Purpose, when to use / when not to use.
   - Anatomy with parts and token references.
   - Every variant and size that actually exists — do not invent variants.
   - State matrix: default, hover, focus-visible, pressed, disabled, loading, error/success/selected — `N/A` with reason when not applicable.
   - Interaction contract and keyboard interaction (follow WAI-ARIA patterns for the widget type).
   - Token mapping — semantic tokens only; flag hard-coded values.
   - Content and accessibility: role/name, focus, target size (44×44 px recommended), screen-reader behaviour, contrast evidence.
   - Do / don't examples.
   Unknown values stay `TBD`. Where sources disagree, record both, set status `conflicting`, and add an open decision.

6. **Register it.** Add or update the row in `component-registry.md` (ID, spec path, Figma or `N/A`, implementation path or `N/A`, documentation status, approval status = spec status, owner, open decisions).

7. **Link usage.** Fill *Used on screens* with `SCR-` IDs; add the component to a release's `dev-handoff` §4 inventory if one exists.

## Finish
Give the file path, its status, the `TBD`s, items needing owner approval, and any accessibility gaps found.
