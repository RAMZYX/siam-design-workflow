# 13 · Tokens and setup

Every value in this book is a token. Code uses token names, never raw values.

_QCS Brand Book v1.0 · generated from index.html_

## Files

| File | What it is |
| --- | --- |
| `tokens/tokens.json` | Primitives, semantic tokens and scales, as data. |
| `tokens/tokens.css` | The same values as CSS variables, light and dark. |
| `tokens/components.css` | Styles for every component (`ds-` classes). |
| `assets/icons/` | Every icon as an SVG file, plus a sprite. |

## Install

```html
<link rel="stylesheet" href="tokens/tokens.css">
<link rel="stylesheet" href="tokens/components.css">
```

Switch any section to CareBrain with `data-theme="carebrain"`.

## Primitive and semantic tokens

Primitives hold raw values. Semantic tokens point to primitives and describe a job. Only semantic tokens appear in components.

## Token naming

Name a token by its job, not its colour.

| Family | Pattern | Example | Don't |
| --- | --- | --- | --- |
| Primitive | `<scale>-<step>` | `teal-900` | Use primitives directly in components |
| Surface | `<role>` | `card` | Hard-code white or black |
| Text | `ink, ink-<level>` | `ink-soft` | Use text tokens as backgrounds |
| Brand | `brand, brand-<variant>` | `brand-tint` | Name a token after its colour |
| Status | `<status>, <status>-tint` | `warning-tint` | Use status colours for decoration |
| Spacing | `space-<size>` | `space-md` | Use one-off pixel values |
| Radius | `radius-<size>` | `radius-lg` | Mix radius sizes inside one component |
| Shadow | `shadow-<purpose>` | `shadow-card` | Invent a heavier shadow |
| App token | `--careco-<role>` | `--careco-primary-light` | Read QCS_PALETTE directly in a component |

## Rules in the codebase

- Change a QCS colour in QCS_PALETTE (src/constants/qcsTheme.js) only. It is the one place a QCS colour is defined; every QCS screen updates.
- Components read --careco-* tokens, redefined for QCS under :root[data-brand="qcs"] in globalStyles.js. Never hard-code a hex in a component.
- applyBrandTheme sets data-brand on the root element, so portalled surfaces (modals, popovers, tooltips) re-theme with the page behind them.
- The legacy --color-primary is an “R, G, B” triplet. Use rgb(var(--color-primary)); a bare var breaks every alpha variant.
- Structure tokens (radius, spacing, shadow, type) are never overridden by a brand.
- Lift component-local values such as the action teal #326668 into tokens when the component is next touched.
- This book’s tokens.css uses data-theme="carebrain" for the second theme; the app uses data-brand.

## Keep in mind

- Text stays readable on its background: aim for 4.5:1, and use the approved pairs in the colour chapter.
- Amber (3.71:1) and muted text (3.54:1) never carry information on their own; pair them with a word.
- Every interactive element shows the 2 px teal focus outline, offset 2 px. Never set outline: none without an equal replacement.
- Fields keep a visible label; errors are written in words next to the field.
- Status, selection and validation never rely on colour alone.
- Icon-only controls have an accessible name; disabled controls say why.
- Modals trap focus, close on Escape and return focus to the trigger.
- Check every screen at 1280, 1440, 1600, 1920 and 2560 px, with no sideways scroll.

## Updating the book

1. Edit the `BRAND` block in `index.html`.
2. Run `node tools/build.js`.
3. Add a row to the change log in `BRAND.changes` and rebuild.
