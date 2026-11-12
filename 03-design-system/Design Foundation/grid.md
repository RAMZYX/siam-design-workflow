# Grid and Layout — [PROJECT]

> Authoritative file for layout grids (columns, margins, gutters, containers) and page layout templates. Breakpoint ranges are defined in [`03-responsiveness.md`](03-responsiveness.md); the spacing scale is in [`spacing.md`](spacing.md).

## Specification metadata
| Field | Value |
|---|---|
| Source type | `[figma / markdown / code / hybrid / none]` |
| Figma URL — layout grids (optional) | `[URL / N/A]` |
| Specification status | `[approved / draft / proposed / missing / conflicting]` |
| Owner | `[DESIGNER]` |
| Version | `[VERSION]` |
| Last reviewed | `[YYYY-MM-DD]` |
| Related specifications | [`spacing.md`](spacing.md), [`03-responsiveness.md`](03-responsiveness.md) |
| Inspiration / moodboard (non-binding, optional) | `[LINKS / N/A]` |
| Open decisions | `[IDs / NONE]` |

Field rules: [design-system index](../README.md#specification-metadata). Columns named "Figma reference" or "Design link" are optional — use a Markdown or code reference, or `N/A`.

## 1. Layout grid per breakpoint
Use the breakpoint tokens from `03-responsiveness.md` §2; do not redefine their width ranges here.

| Breakpoint token / platform | Columns | Margin | Gutter | Max content width | Container behavior | Figma reference |
|---|---|---|---|---|---|---|
| `[breakpoint.sm / MOBILE]` | `[COUNT]` | `[VALUE]` | `[VALUE]` | `[VALUE]` | `[FLUID/FIXED]` | `[LINK]` |
| `[breakpoint.md / TABLET]` | `[COUNT]` | `[VALUE]` | `[VALUE]` | `[VALUE]` | `[FLUID/FIXED]` | `[LINK]` |
| `[breakpoint.lg / DESKTOP]` | `[COUNT]` | `[VALUE]` | `[VALUE]` | `[VALUE]` | `[FLUID/FIXED]` | `[LINK]` |

## 2. Layout templates
| Template | Page width | Sidebar | Header | Content columns | Section gap | Design link |
|---|---|---|---|---|---|---|
| `[DASHBOARD]` | `[TOKEN]` | `[WIDTH]` | `[HEIGHT]` | `[COUNT]` | `[TOKEN]` | `[LINK]` |
| `[FORM PAGE]` | `[TOKEN]` | `[RULE]` | `[RULE]` | `[COUNT]` | `[TOKEN]` | `[LINK]` |

## 3. Scrolling and sticky areas
**Scrolling / sticky areas:** `[RULES]`

## 4. Review checklist
- [ ] Every supported breakpoint has grid dimensions.
- [ ] Grid values match the approved source.
- [ ] Layout templates specified.
- [ ] Exceptions have approval and rationale.
- [ ] Unknown values marked `TBD`; nothing taken from inspiration without approval.
