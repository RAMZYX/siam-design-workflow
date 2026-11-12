---
name: document-tokens
description: Fill in a design-foundation file — colors, typography, spacing, grid, radius, elevation, iconography, responsiveness or motion — in 03-design-system/Design Foundation/, from Figma, code, approved Markdown or values the user provides (Figma is optional), and verify color contrast. Use when the user asks to document design tokens, colors, type scale, spacing, grid, breakpoints, radius, shadows, icons or motion.
---

# Document design tokens

## Read first
- `CLAUDE.md`
- `03-design-system/README.md` — project type, metadata fields, status definitions, missing-spec rules
- The target file in `03-design-system/Design Foundation/` (one authoritative file per topic):
  | Topic | File |
  |---|---|
  | Colour | `color-system.md` |
  | Type | `typography.md` |
  | Spacing scale, component padding, rhythm | `spacing.md` |
  | Grid, columns, margins, layout templates | `grid.md` |
  | Corner radius | `radius.md` |
  | Shadows, elevation, z-index layering | `elevation.md` |
  | Icons | `02-iconography.md` |
  | Platforms, breakpoint ranges, adaptation | `03-responsiveness.md` |
  | Motion | `motion.md` |
  Never write to `spacing-and-grid.md` or `radius-and-elevation.md`; they are redirect stubs.
- `02-foundation/accessibility.md` — §1 contrast rules (for colour, type, icons)

## Steps

1. **Confirm the topic and source.** Ask which file(s) and where the real values come from. Any of these is valid; Figma is not required:
   - **Figma:** if a link is given and Figma tools are available, read variables and styles (`get_variable_defs`, `get_design_context`) and record the link.
   - **Code:** read the token source (e.g. `:root` / `@theme` block) and record file paths.
   - **Approved Markdown or values the user types:** record where the approval came from.
   - **Moodboard / inspiration only** (foundation-only project): you may draft values from it, but every value is `proposed`, never `approved`.

2. **Fill the metadata table** (source type, Figma URL or `N/A`, status, owner, version, last reviewed, related specs, inspiration, open decisions). Set *Specification status* to `approved` only if the user confirms the owner approved it.

3. **Fill the file with actual values only.** Replace placeholder rows; keep the table structure. Never invent a colour, size, duration or breakpoint. Missing values stay `TBD`. If two sources disagree (e.g. Figma vs code), record both, set the status to `conflicting`, and add an open decision.

4. **Use semantic layers.** Raw palette → semantic tokens → component/state mapping. Flag places where components use raw values instead of semantic tokens.

5. **Verify contrast (colour, type, icons).** For each real foreground/background pair in `color-system.md` §6, compute the WCAG contrast ratio and record it with Pass/Fail against 4.5:1 (normal text), 3:1 (large text, UI boundaries). Check every state and theme in use. Calculate — never estimate.

6. **Tick the file's sign-off checklist** only for items actually completed. Breakpoint ranges go in `03-responsiveness.md` only; grid values per breakpoint go in `grid.md` only.

## Rules
- Record the project's existing scale; do not impose a new one.
- Contrast failures are reported, not silently "fixed" — propose alternatives and let the designer decide.

## Finish
List files updated, tokens still `TBD`, and every contrast failure with the pair and ratio.
