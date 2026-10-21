---
name: document-tokens
description: Fill in a design-foundation file — color, typography, spacing and grid, radius and elevation, iconography, responsiveness or motion — in 03-design-system/Design Foundation/, from Figma variables/styles or values the user provides, and verify color contrast. Use when the user asks to document design tokens, colors, type scale, spacing, breakpoints, icons or motion.
---

# Document design tokens

## Read first
- `CLAUDE.md`
- The target file in `03-design-system/Design Foundation/`:
  | Topic | File |
  |---|---|
  | Colour | `color-system.md` |
  | Type | `typography.md` |
  | Spacing / grid | `spacing-and-grid.md` |
  | Radius / shadows | `radius-and-elevation.md` |
  | Icons | `02-iconography.md` |
  | Breakpoints / platforms | `03-responsiveness.md` |
  | Motion | `motion.md` |
- `02-foundation/accessibility.md` — §1 contrast rules (for colour, type, icons)

## Steps

1. **Confirm the topic and source.** Ask which file(s) and where the real values come from: a Figma file link, an existing codebase (CSS variables, Tailwind theme), or values the user types.
   - **Figma:** if Figma tools are available, read variables and styles (`get_variable_defs`, `get_design_context`). Record the Figma link for each token.
   - **Code:** read the token source (e.g. `:root` / `@theme` block) and record file paths.

2. **Fill the file with actual values only.** Replace placeholder rows; keep the table structure. Never invent a colour, size, duration or breakpoint. Missing values stay `TBD`.

3. **Use semantic layers.** Raw palette → semantic tokens → component/state mapping. Flag places where components use raw values instead of semantic tokens.

4. **Verify contrast (colour, type, icons).** For each real foreground/background pair in `color-system.md` §6, compute the WCAG contrast ratio and record it with Pass/Fail against 4.5:1 (normal text), 3:1 (large text, UI boundaries). Check every state and theme in use. Calculate — never estimate.

5. **Update header metadata** (owner, version, status) and tick the file's sign-off checklist only for items actually completed.

## Rules
- Record the project's existing scale; do not impose a new one.
- Contrast failures are reported, not silently "fixed" — propose alternatives and let the designer decide.

## Finish
List files updated, tokens still `TBD`, and every contrast failure with the pair and ratio.
