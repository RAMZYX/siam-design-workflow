# 04 · Colour

Primitives are the raw palette. Semantic tokens give each colour a job. Designs and code use semantic tokens only.

_QCS Brand Book v1.0 · generated from index.html_

## Core colours

| Name | Token | Value |
| --- | --- | --- |
| Deep teal | `brand` | #0F3D3C |
| Action teal | `cta` | #326668 |
| Canvas | `paper` | #F4F6F5 |
| Ink | `ink` | #2E2E32 |

## Semantic tokens

### Surface

| Token | QCS | CareBrain | Use |
| --- | --- | --- | --- |
| `paper` | neutral-100 (#F4F6F5) | cb-bg (#F6F9FD) | Page canvas · code: --careco-bg |
| `paper-deep` | neutral-150 (#EEF3F2) | cb-row-alt (#E8F4FC) | Alternate rows, quiet fills · code: --careco-row-alt |
| `card` | white (#FFFFFF) | white (#FFFFFF) | Cards, header, modals, dropdowns · code: --careco-surface |
| `sand` | neutral-50 (#FAFBFA) | cb-row (#F7FAFE) | Default row and neutral hover · code: --careco-row-default |
| `overview` | neutral-100 (#F4F6F5) | cb-bg (#F6F9FD) | Behind dashboard cards: the canvas itself, no tinted strip |
| `scrim` | rgba(0,0,0,.5) | rgba(0,0,0,.5) | Behind modals (value to confirm in the app) |

### Text

| Token | QCS | CareBrain | Use |
| --- | --- | --- | --- |
| `ink` | ink-900 (#2E2E32) | ink-900 (#2E2E32) | Titles, headings, values (13.52:1) · code: --careco-text-primary |
| `ink-soft` | ink-600 (#616581) | ink-600 (#616581) | Labels, table body, descriptions (5.70:1) · code: --careco-text-secondary |
| `ink-muted` | ink-400 (#888888) | ink-400 (#888888) | Placeholders and optional hints only (3.54:1, below AA) · code: --careco-text-muted |

### Border

| Token | QCS | CareBrain | Use |
| --- | --- | --- | --- |
| `line` | neutral-200 (#E8ECEB) | cb-divider (#EBEBEB) | Hairlines inside cards, bar tracks · code: --careco-divider |
| `line-strong` | neutral-300 (#DCE4E2) | cb-border (#E2E8F0) | Input, table and dropdown outlines (1.29:1; always paired with a label) · code: --careco-border |
| `ring` | neutral-300 (#DCE4E2) | cb-border (#E2E8F0) | Table and menu edge · code: --careco-border. Cards have no border; they rest on shadow-card |

### Brand

| Token | QCS | CareBrain | Use |
| --- | --- | --- | --- |
| `brand` | teal-900 (#0F3D3C) | cb-blue-600 (#2A90CB) | Sidebar, primary buttons, selected states, focus · code: --careco-primary |
| `brand-deep` | teal-850 (#155150) | cb-blue-700 (#227DB2) | Primary hover and pressed · code: --careco-primary-hover |
| `brand-text` | teal-900 (#0F3D3C) | cb-blue-700 (#227DB2) | Links and row actions (Manage, Review) |
| `brand-tint` | teal-100 (#E4EFED) | cb-blue-100 (#E3F5FF) | Selected rows, active segment, icon chips · code: --careco-primary-light |
| `brand-tint-text` | teal-900 (#0F3D3C) | cb-blue-700 (#227DB2) | Text on brand-tint (10.19:1) |
| `on-brand` | white (#FFFFFF) | white (#FFFFFF) | Text on the teal fill (11.98:1) |
| `focus` | teal-900 (#0F3D3C) | cb-blue-600 (#2A90CB) | 2 px focus outline, offset 2 px |
| `cta` | teal-600 (#326668) | cb-blue-600 (#2A90CB) | Action teal: Care plan audit and the Supervision shortcut (component-local today) |
| `cta-deep` | teal-700 (#244D4F) | cb-blue-700 (#227DB2) | Action teal hover |

### Status

| Token | QCS | CareBrain | Use |
| --- | --- | --- | --- |
| `success` | green-700 (#2F7D32) | cb-green (#489B00) | Active, ready, completed · code: --careco-success |
| `success-tint` | green-100 (#E6F2E6) | cb-green-100 (#EAF8DD) | Success pill fill · code: --careco-success-light |
| `warning` | amber-600 (#B77714) | cb-amber (#A5691B) | Archived, gated, running low, Gold tier. Deliberately not red (3.71:1; pair with a word) · code: --careco-status-inactive |
| `warning-tint` | amber-100 (#FBF1E1) | cb-amber-100 (#FAF1E4) | Amber pill fill · code: --careco-status-inactive-light |
| `danger` | red-600 (#C1431C) | cb-red (#BA0000) | Failed, allowance spent, blocked · code: --careco-error |
| `danger-tint` | red-100 (#FBEAE4) | cb-red-100 (#FBE7E7) | Error pill fill · code: --careco-error-light |
| `danger-solid` | red-600 (#C1431C) | cb-red (#BA0000) | Destructive button fill |
| `danger-line` | red-600 (#C1431C) | cb-red (#BA0000) | Inline form errors and error outline |
| `on-danger` | white (#FFFFFF) | white (#FFFFFF) | Text on destructive |
| `info` | ink-600 (#616581) | ink-600 (#616581) | QCS has no info blue: neutral text for pending and not set |
| `info-tint` | neutral-200 (#E8ECEB) | cb-divider (#EBEBEB) | Neutral pill fill |

### Navigation

| Token | QCS | CareBrain | Use |
| --- | --- | --- | --- |
| `nav-bg` | teal-900 (#0F3D3C) | cb-blue-500 (#1B9CD8) | Sidebar rail. Flat in QCS, no gradient · code: --careco-nav-bg |
| `nav-active` | teal-800 (#17514F) | cb-blue-550 (#0090CC) | Active item block · code: --careco-nav-active |
| `nav-item` | rgba(255,255,255,.88) | rgba(255,255,255,.82) | Sidebar labels and icons (9.66:1) · code: --careco-nav-item-inactive |
| `nav-item-hover` | rgba(255,255,255,.14) | rgba(255,255,255,.24) | Sidebar hover · code: --careco-nav-item-active-bg |

### Allowance and tier

| Token | QCS | CareBrain | Use |
| --- | --- | --- | --- |
| `usage-normal` | teal-900 (#0F3D3C) | cb-blue-600 (#2A90CB) | Usage meter: the allowance is in good shape |
| `usage-warning` | amber-600 (#B77714) | cb-amber (#A5691B) | Usage meter: running low. A warning, not a failure |
| `usage-spent` | red-600 (#C1431C) | cb-red (#BA0000) | Usage meter: used up; the action is blocked |
| `tier-platinum` | teal-900 (#0F3D3C) | cb-blue-700 (#227DB2) | Platinum tier pill text, on brand-tint |
| `tier-gold` | amber-600 (#B77714) | cb-amber (#A5691B) | Gold tier pill text, on warning-tint |
| `tier-basic` | ink-600 (#616581) | ink-600 (#616581) | Basic tier pill text, on info-tint |

### Dashboard card tones

| Token | QCS | CareBrain | Use |
| --- | --- | --- | --- |
| `metric-teal` | teal-900 (#0F3D3C) | cb-blue-600 (#2A90CB) | Dashboard card icon |
| `metric-teal-tint` | teal-100 (#E4EFED) | cb-blue-100 (#E3F5FF) | Dashboard card icon circle |
| `metric-amber` | amber-600 (#B77714) | cb-amber (#A5691B) | Card icon for something that needs action |
| `metric-amber-tint` | amber-100 (#FBF1E1) | cb-amber-100 (#FAF1E4) | Its icon circle |

## Primitive palette

### Teal (QCS brand)

| Primitive | Hex |
| --- | --- |
| `teal-900` | #0F3D3C |
| `teal-850` | #155150 |
| `teal-800` | #17514F |
| `teal-700` | #244D4F |
| `teal-600` | #326668 |
| `teal-100` | #E4EFED |

### Warm neutral

| Primitive | Hex |
| --- | --- |
| `white` | #FFFFFF |
| `neutral-50` | #FAFBFA |
| `neutral-100` | #F4F6F5 |
| `neutral-150` | #EEF3F2 |
| `neutral-200` | #E8ECEB |
| `neutral-300` | #DCE4E2 |
| `grey-100` | #F5F5F5 |

### Ink (shared)

| Primitive | Hex |
| --- | --- |
| `ink-900` | #2E2E32 |
| `ink-600` | #616581 |
| `ink-400` | #888888 |

### Amber

| Primitive | Hex |
| --- | --- |
| `amber-100` | #FBF1E1 |
| `amber-600` | #B77714 |

### Red

| Primitive | Hex |
| --- | --- |
| `red-100` | #FBEAE4 |
| `red-600` | #C1431C |

### Green

| Primitive | Hex |
| --- | --- |
| `green-100` | #E6F2E6 |
| `green-700` | #2F7D32 |

### CareBrain (second theme only)

| Primitive | Hex |
| --- | --- |
| `cb-blue-100` | #E3F5FF |
| `cb-blue-500` | #1B9CD8 |
| `cb-blue-550` | #0090CC |
| `cb-blue-600` | #2A90CB |
| `cb-blue-700` | #227DB2 |
| `cb-bg` | #F6F9FD |
| `cb-row` | #F7FAFE |
| `cb-row-alt` | #E8F4FC |
| `cb-border` | #E2E8F0 |
| `cb-divider` | #EBEBEB |
| `cb-green` | #489B00 |
| `cb-green-100` | #EAF8DD |
| `cb-amber` | #A5691B |
| `cb-amber-100` | #FAF1E4 |
| `cb-red` | #BA0000 |
| `cb-red-100` | #FBE7E7 |

## Rules

**Do**

- Use deep teal for the frame and the page’s one main action; use action teal for audits and the Supervision shortcut. Never swap them.
- Pair status text with its own tint: success with success-tint, and so on.
- Use amber for archived, gated and running low. An archived account is inactive, not failed.
- Keep screens neutral first: about 90% neutral, 8% teal, 2% status.
- Put white cards on the warm canvas and show depth with the card shadow.

**Don't**

- Use red for archived. Red is only for failed or spent.
- Use the legacy colours still on some screens: #3A3F62 titles, #EBEBEB dividers, the lavender Review pill #F2EDFC, tier purple #6C5CE7.
- Use text-muted (3.54:1) for anything a person must read to act.
- Darken a fill to fake elevation.
- Rely on colour alone. Every status has a word.
