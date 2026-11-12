# Spacing — [PROJECT]

> Authoritative file for the spacing scale, component internal spacing and vertical rhythm. Layout grids, columns, margins and layout templates live in [`grid.md`](grid.md).

## Specification metadata
| Field | Value |
|---|---|
| Source type | `[figma / markdown / code / hybrid / none]` |
| Figma URL — layout styles (optional) | `[URL / N/A]` |
| Specification status | `[approved / draft / proposed / missing / conflicting]` |
| Owner | `[DESIGNER]` |
| Version | `[VERSION]` |
| Last reviewed | `[YYYY-MM-DD]` |
| Related specifications | [`grid.md`](grid.md), [`03-responsiveness.md`](03-responsiveness.md) |
| Inspiration / moodboard (non-binding, optional) | `[LINKS / N/A]` |
| Open decisions | `[IDs / NONE]` |

Field rules: [design-system index](../README.md#specification-metadata). Columns named "Figma variable" or "link" are optional — use a Markdown or code reference, or `N/A`.

## 1. Base unit and spacing philosophy
**Base unit:** `[e.g. 4px — REPLACE WITH ACTUAL]`  
**Allowed exceptions:** `[VALUE / REASON / APPROVAL]`  
**Measurement unit:** `[px / rem / dp / pt]`

## 2. Spacing token scale
| Token | Value | Base-unit multiple | Typical usage | Figma variable |
|---|---|---|---|---|
| `[space.0]` | `[VALUE]` | `[MULTIPLE]` | `[NONE]` | `[LINK]` |
| `[space.1]` | `[VALUE]` | `[MULTIPLE]` | `[ICON GAP]` | `[LINK]` |
| `[space.2]` | `[VALUE]` | `[MULTIPLE]` | `[CONTROL GAP]` | `[LINK]` |
| `[space.3]` | `[VALUE]` | `[MULTIPLE]` | `[GROUP GAP]` | `[LINK]` |
| `[space.4]` | `[VALUE]` | `[MULTIPLE]` | `[SECTION GAP]` | `[LINK]` |

## 3. Component internal spacing
| Component / size | Horizontal padding | Vertical padding | Child gap | Minimum height | Token reference |
|---|---|---|---|---|---|
| `[BUTTON / MD]` | `[TOKEN]` | `[TOKEN]` | `[TOKEN]` | `[VALUE]` | `[LINK]` |
| `[INPUT / MD]` | `[TOKEN]` | `[TOKEN]` | `[TOKEN]` | `[VALUE]` | `[LINK]` |
| `[CARD]` | `[TOKEN]` | `[TOKEN]` | `[TOKEN]` | `[VALUE]` | `[LINK]` |
| `[TABLE ROW]` | `[TOKEN]` | `[TOKEN]` | `[TOKEN]` | `[VALUE]` | `[LINK]` |

Once a component has its own specification in `../components/`, that file is authoritative for its spacing; keep this table as a summary that links to it.

## 4. Alignment, rhythm and density
**Alignment rules:** `[BASELINES, EDGES, CENTERING]`  
**Vertical rhythm:** `[HEADING → BODY → SECTION]`  
**Density modes:** `[COMFORTABLE / COMPACT / N/A]`  
**RTL considerations:** `[RULES]`

## 5. Review checklist
- [ ] Token scale and base unit match the approved source.
- [ ] Component paddings specified.
- [ ] Overflow, long content and responsive spacing checked.
- [ ] Exceptions have approval and rationale.
- [ ] Unknown values marked `TBD`; nothing taken from inspiration without approval.
