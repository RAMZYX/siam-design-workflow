# 04 · Colour

Primitives are the raw palette. Semantic tokens give each colour a job. Designs and code use semantic tokens only.

_Cura42 Brand Book v2.2 · generated from index.html_

## Core colours

| Name | Token | Value |
| --- | --- | --- |
| Brand red | `brand` | #C7335A |
| Paper | `paper` | #FAF6F0 |
| Ink | `ink` | #1A1612 |

## Semantic tokens

### Surface

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `paper` | neutral-50 (#FAF6F0) | neutral-900 (#1A1612) | Page background |
| `paper-deep` | neutral-100 (#F4EDE1) | neutral-950 (#120F0C) | App shell, alternate bands |
| `card` | neutral-0 (#FFFFFF) | neutral-850 (#241C18) | Cards, panels, inputs |
| `sand` | neutral-150 (#F2E9E1) | neutral-800 (#2E2621) | Quiet fills, disabled |
| `scrim` | rgba(26,22,18,.45) | rgba(0,0,0,.6) | Behind dialogs |

### Text

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `ink` | neutral-900 (#1A1612) | neutral-50 (#FAF6F0) | Headlines, body |
| `ink-soft` | neutral-700 (#423A32) | neutral-300 (#B7B3AD) | Secondary text, labels |
| `ink-muted` | neutral-600 (#6B6157) | neutral-450 (#958C82) | Meta, placeholders, help |

### Border

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `line` | neutral-200 (#E7DCCB) | neutral-750 (#3A322B) | Dividers (decorative) |
| `line-strong` | neutral-400 (#968775) | neutral-500 (#7D7266) | Control borders |
| `ring` | rgba(26,22,18,.06) | rgba(250,246,240,.08) | 1 px card ring |

### Brand

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `brand` | rose-500 (#C7335A) | rose-500 (#C7335A) | Primary action, progress |
| `brand-deep` | rose-600 (#A32A4A) | rose-600 (#A32A4A) | Hover, pressed |
| `brand-text` | rose-500 (#C7335A) | rose-300 (#EE7A97) | Brand-coloured text, links |
| `brand-tint` | rose-50 (#FCE6EC) | rose-900 (#3A1B25) | Selected, hover wash |
| `brand-tint-text` | rose-600 (#A32A4A) | rose-300 (#EE7A97) | Text on brand-tint |
| `on-brand` | neutral-0 (#FFFFFF) | neutral-0 (#FFFFFF) | Text on brand |
| `focus` | rose-500 (#C7335A) | rose-300 (#EE7A97) | Focus ring |

### Status

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `success` | green-700 (#276B43) | green-300 (#7FCB9C) | Success text, icons |
| `success-tint` | green-50 (#E5F3EA) | green-950 (#16271D) | Success background |
| `warning` | amber-700 (#8A5100) | amber-300 (#F2B54A) | Warning text, icons |
| `warning-tint` | amber-50 (#FFF1D6) | amber-950 (#2E2410) | Warning background |
| `danger` | red-700 (#B42318) | red-300 (#F38A7E) | Error, destructive |
| `danger-tint` | red-50 (#FDE7E4) | red-950 (#33191A) | Error background |
| `on-danger` | neutral-0 (#FFFFFF) | neutral-900 (#1A1612) | Text on danger |
| `info` | blue-700 (#2D6A9F) | blue-300 (#86BCEB) | Information |
| `info-tint` | blue-50 (#E3F0FA) | blue-950 (#152433) | Info background |

## Primitive palette

### Neutral

| Primitive | Hex |
| --- | --- |
| `neutral-0` | #FFFFFF |
| `neutral-50` | #FAF6F0 |
| `neutral-100` | #F4EDE1 |
| `neutral-150` | #F2E9E1 |
| `neutral-200` | #E7DCCB |
| `neutral-300` | #B7B3AD |
| `neutral-400` | #968775 |
| `neutral-450` | #958C82 |
| `neutral-500` | #7D7266 |
| `neutral-600` | #6B6157 |
| `neutral-700` | #423A32 |
| `neutral-750` | #3A322B |
| `neutral-800` | #2E2621 |
| `neutral-850` | #241C18 |
| `neutral-900` | #1A1612 |
| `neutral-950` | #120F0C |

### Rose

| Primitive | Hex |
| --- | --- |
| `rose-50` | #FCE6EC |
| `rose-300` | #EE7A97 |
| `rose-500` | #C7335A |
| `rose-600` | #A32A4A |
| `rose-900` | #3A1B25 |

### Green

| Primitive | Hex |
| --- | --- |
| `green-50` | #E5F3EA |
| `green-300` | #7FCB9C |
| `green-700` | #276B43 |
| `green-950` | #16271D |

### Amber

| Primitive | Hex |
| --- | --- |
| `amber-50` | #FFF1D6 |
| `amber-300` | #F2B54A |
| `amber-700` | #8A5100 |
| `amber-950` | #2E2410 |

### Red

| Primitive | Hex |
| --- | --- |
| `red-50` | #FDE7E4 |
| `red-300` | #F38A7E |
| `red-700` | #B42318 |
| `red-950` | #33191A |

### Blue

| Primitive | Hex |
| --- | --- |
| `blue-50` | #E3F0FA |
| `blue-300` | #86BCEB |
| `blue-700` | #2D6A9F |
| `blue-950` | #152433 |

### Accent

| Primitive | Hex |
| --- | --- |
| `accent-yellow` | #FFD76A |
| `accent-orange` | #FFB36A |
| `accent-lavender` | #CFA9F5 |
| `accent-sky` | #BEE7FF |
| `accent-mint` | #BFECCF |
| `accent-pink` | #F7D9E5 |

## Rules

**Do**

- Use semantic tokens in design and code, never primitives or hex.
- Use brand for fills and brand-text for brand-coloured words.
- Use line-strong for anything people operate.

**Don't**

- Use accents for buttons, text or large areas.
- Put two brand-red focal points in one view.
- Communicate status with colour alone.
