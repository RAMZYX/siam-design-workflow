# 13 · Tokens and setup

Every value in this book is a token. Code uses token names, never raw values.

_Cura42 Brand Book v2.2 · generated from index.html_

## Files

| File | What it is |
| --- | --- |
| `tokens/tokens.json` | Primitives, semantic tokens and scales, as data. |
| `tokens/tokens.css` | The same values as CSS variables, light and dark. |
| `tokens/components.css` | Styles for every component (`ds-` classes). |
| `assets/icons/` | Every icon as an SVG file, plus a sprite. |

## Install

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600;700&display=swap">
<link rel="stylesheet" href="tokens/tokens.css">
<link rel="stylesheet" href="tokens/components.css">
```

Switch any section to dark with `data-theme="dark"`.

## Primitive and semantic tokens

Primitives hold raw values. Semantic tokens point to primitives and describe a job. Only semantic tokens appear in components.

## Token naming

Name a token by its job, not its colour.

| Family | Pattern | Example | Don't |
| --- | --- | --- | --- |
| Primitive | `<scale>-<step>` | `rose-500` | Use primitives directly in components |
| Surface | `<role>` | `card` | Hard-code white or black |
| Text | `ink, ink-<level>` | `ink-muted` | Use text tokens as backgrounds |
| Brand | `brand, brand-<variant>` | `brand-deep` | Name a token after its colour |
| Status | `<status>, <status>-tint` | `danger-tint` | Use status colours for decoration |
| Spacing | `space-<step>` | `space-4` | Use one-off pixel values |
| Radius | `radius-<size>` | `radius-xl` | Mix radius sizes inside one component |
| Shadow | `shadow-<purpose>` | `shadow-lift` | Rest a card on a shadow |

## Keep in mind

- Text stays readable on its background in both themes (aim for 4.5:1); use the approved pairs in the colour chapter.
- Every interactive element shows a visible focus ring.
- Touch targets are at least 44 × 44 px.
- Fields keep a visible label; errors are written in words next to the field.
- Status, selection and validation never rely on colour alone.
- Icon-only controls have an accessible name, and reading order follows the visual order.
- Check each component at 200% text size and at phone width before it ships.

## Updating the book

1. Edit the `BRAND` block in `index.html`.
2. Run `node tools/build.js`.
3. Add a row to the change log in `BRAND.changes` and rebuild.
