# Elevation and Layering — [PROJECT]

> Authoritative file for shadows, elevation levels and stacking (z-index) rules. Corner radius lives in [`radius.md`](radius.md).

## Specification metadata
| Field | Value |
|---|---|
| Source type | `[figma / markdown / code / hybrid / none]` |
| Figma URL — effects (optional) | `[URL / N/A]` |
| Specification status | `[approved / draft / proposed / missing / conflicting]` |
| Owner | `[DESIGNER]` |
| Version | `[VERSION]` |
| Last reviewed | `[YYYY-MM-DD]` |
| Related specifications | [`radius.md`](radius.md), [`color-system.md`](color-system.md) |
| Inspiration / moodboard (non-binding, optional) | `[LINKS / N/A]` |
| Open decisions | `[IDs / NONE]` |

Field rules: [design-system index](../README.md#specification-metadata).

## 1. Shadow/elevation scale (levels 0–4)
| Level | Token | X | Y | Blur | Spread | Color / opacity | Theme variant | Intended use |
|---|---|---|---|---|---|---|---|---|
| 0 | `[shadow.0]` | `[0]` | `[0]` | `[0]` | `[0]` | `[NONE]` | `[LIGHT/DARK]` | `[FLAT]` |
| 1 | `[shadow.1]` | `[VALUE]` | `[VALUE]` | `[VALUE]` | `[VALUE]` | `[TOKEN]` | `[RULE]` | `[SUBTLE SURFACE]` |
| 2 | `[shadow.2]` | `[VALUE]` | `[VALUE]` | `[VALUE]` | `[VALUE]` | `[TOKEN]` | `[RULE]` | `[RAISED]` |
| 3 | `[shadow.3]` | `[VALUE]` | `[VALUE]` | `[VALUE]` | `[VALUE]` | `[TOKEN]` | `[RULE]` | `[OVERLAY]` |
| 4 | `[shadow.4]` | `[VALUE]` | `[VALUE]` | `[VALUE]` | `[VALUE]` | `[TOKEN]` | `[RULE]` | `[HIGHEST LAYER]` |

> These are documentation levels, not prescribed visual values. If the project uses a different scale, record its existing scale and mapping.

## 2. Elevation-to-component mapping
| Component / surface | Rest | Hover | Active | Modal/open | Dark mode | Reason |
|---|---|---|---|---|---|---|
| `[CARD]` | `[LEVEL]` | `[LEVEL]` | `[LEVEL]` | `N/A` | `[RULE]` | `[WHY]` |
| `[DROPDOWN]` | `[LEVEL]` | `N/A` | `N/A` | `[LEVEL]` | `[RULE]` | `[WHY]` |
| `[DIALOG]` | `N/A` | `N/A` | `N/A` | `[LEVEL]` | `[RULE]` | `[WHY]` |

## 3. Layering / stacking rules
| Layer | Z-index token (if used) | Above/below | Example |
|---|---|---|---|
| `[BASE]` | `[TOKEN]` | `[RELATION]` | `[PAGE]` |
| `[POPOVER]` | `[TOKEN]` | `[RELATION]` | `[MENU]` |
| `[MODAL]` | `[TOKEN]` | `[RELATION]` | `[DIALOG]` |

## 4. Usage and sign-off
**Do:** `[APPROVED EXAMPLES — FIGMA, MARKDOWN OR CODE REFERENCE]`  
**Don't:** `[PROHIBITED EXAMPLES]`  
**Borders versus shadows:** `[RULES]`  
**Dark theme surface separation:** `[RULES]`

- [ ] Elevation levels 0–4 documented or mapped to existing system.
- [ ] Shadow geometry and theme variants captured.
- [ ] Components and stacking behavior cross-referenced.
- [ ] Unknown values marked `TBD`; nothing taken from inspiration without approval.
