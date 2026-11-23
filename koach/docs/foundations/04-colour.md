# 04 · Colour

Primitives are the raw palette. Semantic tokens give each colour a job. Designs and code use semantic tokens only.

_Koach Brand Book v1.0 · generated from index.html_

## Core colours

| Name | Token | Value |
| --- | --- | --- |
| Kauvery magenta | `brand` | #962067 |
| Page | `paper` | #FAFAFA |
| Ink | `ink` | #212121 |

## Semantic tokens

### Surface

| Token | Console | Learner | Use |
| --- | --- | --- | --- |
| `paper` | grey-50 (#FAFAFA) | grey-50 (#FAFAFA) | Page background · code: surface-page |
| `paper-deep` | grey-100 (#F5F5F5) | grey-100 (#F5F5F5) | Tracks, footers, muted fills · code: surface-muted |
| `card` | white (#FFFFFF) | white (#FFFFFF) | Cards, panels, inputs · code: surface-card |
| `sand` | grey-150 (#F4F4F5) | grey-150 (#F4F4F5) | Secondary buttons, quiet fills · code: color-secondary |
| `overview` | magenta-200 (#F4E9F0) | magenta-200 (#F4E9F0) | Strip behind stat cards · code: surface-overview |
| `scrim` | rgba(0,0,0,.2) | rgba(0,0,0,.2) | Behind dialogs and drawers · code: surface-overlay-subtle |

### Text

| Token | Console | Learner | Use |
| --- | --- | --- | --- |
| `ink` | grey-800 (#212121) | grey-800 (#212121) | Headings, labels, values (16.1:1) · code: text-primary |
| `ink-soft` | #737373 | #737373 | Body and meta (4.7:1) · code: text-secondary |
| `ink-muted` | #797A7C | #797A7C | Hints, section subtitles (4.3:1) · code: text-hint. Never use text-tertiary #B3B3B3 (2.1:1) for information |

### Border

| Token | Console | Learner | Use |
| --- | --- | --- | --- |
| `line` | grey-200 (#E0E0E0) | grey-200 (#E0E0E0) | Dividers inside cards · code: border-subtle |
| `line-strong` | #DEDEDE | #DEDEDE | Control outlines (below 3:1; always paired with a label) · code: border-chrome |
| `ring` | #E4E4E7 | #E8E8EC | Card and input edge, softer in Learner · code: border-default |

### Brand

| Token | Console | Learner | Use |
| --- | --- | --- | --- |
| `brand` | magenta-700 (#962067) | magenta-700 (#962067) | The one primary action colour, and focus · code: color-primary |
| `brand-deep` | #841A59 | #841A59 | Primary hover · code: color-primary-hover |
| `brand-text` | magenta-700 (#962067) | magenta-700 (#962067) | Links and brand-coloured text · code: text-link |
| `brand-tint` | magenta-100 (#FBF6F9) | magenta-100 (#FBF6F9) | Icon chips, soft active nav, selected tiles · code: surface-brand-tint |
| `brand-tint-text` | magenta-700 (#962067) | magenta-700 (#962067) | Text on brand-tint |
| `on-brand` | #FEFEFE | #FEFEFE | Text on primary (7.7:1) · code: color-primary-fg |
| `focus` | magenta-700 (#962067) | magenta-700 (#962067) | 2 px focus ring, offset 2 px (7.8:1) · code: focus-ring |

### Status

| Token | Console | Learner | Use |
| --- | --- | --- | --- |
| `success` | green-dark (#0C7453) | #1D6B4C | Success text and icons · code: status-success-fg |
| `success-tint` | green-light (#DAFFF3) | #ECF6F1 | Success wash · code: status-success-bg |
| `warning` | yellow-dark (#D88C0C) | #8A5A06 | Warning text · code: status-warning-fg (2.5:1 in Console, 5.4:1 in Learner) |
| `warning-tint` | yellow-light (#FFF5E6) | #FBF3E2 | Warning wash · code: status-warning-bg |
| `danger` | red-dark (#991B1B) | #A32B2E | Error text · code: status-error-fg |
| `danger-tint` | red-light (#FFEDED) | #FCEFEF | Error wash · code: status-error-bg |
| `danger-solid` | red-strong (#EF4444) | red-strong (#EF4444) | Destructive button fill · code: color-destructive |
| `danger-line` | red (#DC2626) | red (#DC2626) | Inline form errors and error outline (4.8:1) · code: status-error-strong |
| `on-danger` | #FEFEFE | #FEFEFE | Text on destructive (3.7:1; button size and weight only) |
| `info` | blue-500 (#007FFF) | #2F5D9F | Info text · code: status-info-fg (3.2:1 in Console, 5.9:1 in Learner) |
| `info-tint` | blue-100 (#DDEEFF) | #EDF2FB | Info wash · code: status-info-bg |

### Journey and account status

| Token | Console | Learner | Use |
| --- | --- | --- | --- |
| `live` | #0068D1 | #0068D1 | Live · code: status-live-fg |
| `live-tint` | blue-100 (#DDEEFF) | blue-100 (#DDEEFF) | Live wash |
| `pilot` | #C01F57 | #C01F57 | Pilot (4.4:1) · code: status-pilot-fg |
| `pilot-tint` | pink-100 (#FCD5E1) | pink-100 (#FCD5E1) | Pilot wash |
| `discontinued` | #663300 | #663300 | Discontinued · code: status-discontinued-fg |
| `discontinued-tint` | #FFE5CC | #FFE5CC | Discontinued wash |
| `active` | #059669 | #059669 | Active account (3.5:1) · code: status-active-fg |
| `active-tint` | green-light (#DAFFF3) | green-light (#DAFFF3) | Active wash |
| `inactive` | #212121 | #212121 | Inactive account · code: status-inactive-fg |
| `inactive-tint` | grey-100 (#F5F5F5) | grey-100 (#F5F5F5) | Inactive wash |
| `archived` | #3C1995 | #3C1995 | Archived · code: status-archived-fg |
| `archived-tint` | #E3D8FF | #E3D8FF | Archived wash |
| `unassigned` | magenta-900 (#660033) | magenta-900 (#660033) | Unassigned · code: status-unassigned-fg |
| `unassigned-tint` | magenta-300 (#FFCCE5) | magenta-300 (#FFCCE5) | Unassigned wash |

### Course states

| Token | Console | Learner | Use |
| --- | --- | --- | --- |
| `course-new` | magenta-700 (#962067) | magenta-700 (#962067) | New programme text · code: course-new-fg |
| `course-new-wash` | magenta-100 (#FBF6F9) | magenta-100 (#FBF6F9) | New wash |
| `course-progress-line` | orange-500 (#F26522) | magenta-700 (#962067) | In-progress line · brand in Learner |
| `course-progress` | orange-500 (#F26522) | #8A5A06 | In-progress text |
| `course-progress-wash` | yellow-light (#FFF5E6) | #FBF3E2 | In-progress wash |
| `course-overdue-line` | red-strong (#EF4444) | #D0453F | Overdue line |
| `course-overdue` | red-dark (#991B1B) | #A32B2E | Overdue text |
| `course-overdue-wash` | red-light (#FFEDED) | red-light (#FFEDED) | Overdue wash |
| `course-done-line` | green (#00B079) | #2F9E72 | Done line |
| `course-done` | green-dark (#0C7453) | #1D6B4C | Done text |
| `course-done-wash` | green-lighter (#EDFFF9) | green-lighter (#EDFFF9) | Done wash |
| `course-track` | grey-200 (#E0E0E0) | grey-200 (#E0E0E0) | Progress track |

### Metric tones

| Token | Console | Learner | Use |
| --- | --- | --- | --- |
| `metric-violet` | #A3238E | #A3238E | Stat-card icon, violet |
| `metric-violet-tint` | violet-100 (#EDD3E8) | violet-100 (#EDD3E8) | Violet chip |
| `metric-red` | #EC1C24 | #EC1C24 | Stat-card icon, red |
| `metric-red-tint` | #FBD2D3 | #FBD2D3 | Red chip |
| `metric-orange` | #F26522 | #F26522 | Stat-card icon, orange |
| `metric-orange-tint` | #FCE0D3 | #FDF0E8 | Orange chip, quieter in Learner |
| `metric-pink` | pink-500 (#EE2D67) | pink-500 (#EE2D67) | Stat-card icon, pink |
| `metric-pink-tint` | pink-100 (#FCD5E1) | pink-100 (#FCD5E1) | Pink chip |
| `metric-amber` | amber-400 (#FDB913) | amber-400 (#FDB913) | Stat-card icon, amber |
| `metric-amber-tint` | #FFF1D0 | #FFF1D0 | Amber chip |
| `metric-green` | green-dark (#0C7453) | green-dark (#0C7453) | Stat-card icon, green |
| `metric-green-tint` | green-lighter (#EDFFF9) | green-lighter (#EDFFF9) | Green chip |
| `metric-grey` | #58595B | #58595B | Stat-card icon, grey |
| `metric-grey-tint` | #E9EAEA | #E9EAEA | Grey chip |
| `metric-delta` | #059669 | #059669 | The +N change · code: metric-delta-fg |

## Primitive palette

### Grey

| Primitive | Hex |
| --- | --- |
| `white` | #FFFFFF |
| `grey-50` | #FAFAFA |
| `grey-100` | #F5F5F5 |
| `grey-150` | #F4F4F5 |
| `grey-200` | #E0E0E0 |
| `grey-300` | #BDBDBD |
| `grey-400` | #8E8E8E |
| `grey-500` | #757575 |
| `grey-600` | #616161 |
| `grey-700` | #424242 |
| `grey-800` | #212121 |
| `grey-900` | #151515 |

### Magenta

| Primitive | Hex |
| --- | --- |
| `magenta-100` | #FBF6F9 |
| `magenta-200` | #F4E9F0 |
| `magenta-300` | #FFCCE5 |
| `magenta-500` | #C25C98 |
| `magenta-600` | #A93A7C |
| `magenta-700` | #962067 |
| `magenta-800` | #7A1A55 |
| `magenta-900` | #660033 |

### Red

| Primitive | Hex |
| --- | --- |
| `red-light` | #FFEDED |
| `red-strong` | #EF4444 |
| `red` | #DC2626 |
| `red-dark` | #991B1B |

### Green

| Primitive | Hex |
| --- | --- |
| `green-lighter` | #EDFFF9 |
| `green-light` | #DAFFF3 |
| `green` | #00B079 |
| `green-dark` | #0C7453 |

### Yellow

| Primitive | Hex |
| --- | --- |
| `yellow-light` | #FFF5E6 |
| `yellow` | #F59E0B |
| `yellow-dark` | #D88C0C |

### Blue

| Primitive | Hex |
| --- | --- |
| `blue-50` | #EDF0F5 |
| `blue-100` | #DDEEFF |
| `blue-500` | #007FFF |
| `blue-600` | #1E5CC5 |
| `blue-700` | #1851AE |

### Accent (login and marketing only)

| Primitive | Hex |
| --- | --- |
| `violet-700` | #A3238E |
| `violet-100` | #EDD3E8 |
| `pink-500` | #EE2D67 |
| `pink-100` | #FCD5E1 |
| `orange-500` | #F26522 |
| `amber-400` | #FDB913 |
| `amber-100` | #FEEEDF |
| `amber-50` | #FFF8ED |

## Rules

**Do**

- Use magenta for the one primary action per view, for links and for focus. It is the only primary action colour.
- Pair status text with its own wash: success with success-tint, and so on.
- Use brand-tint behind icon chips, the soft active nav item and selected tiles.
- Use the Learner theme for anything a learner sees and the Console theme for admin, trainer and HOD screens.

**Don't**

- Use the accent colours (violet, pink, orange, amber) in product UI. They belong to the login and marketing creative.
- Use text-tertiary (2.1:1) for anything that carries information.
- Use hero colours for text or interface chrome.
- Rely on colour alone. Every status has a word, and every rating has a label.
