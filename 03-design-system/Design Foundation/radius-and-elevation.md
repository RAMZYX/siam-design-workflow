# Radius and Elevation — [PROJECT]

**Owner:** `[DESIGNER]` · **Version:** `[VERSION]` · **Figma effects:** `[LINK]`

## 1. Corner radius scale
| Token | Value | Shape / meaning | Approved component usage | Figma link |
|---|---|---|---|---|
| `[radius.none]` | `[VALUE]` | `[SQUARE]` | `[USAGE]` | `[LINK]` |
| `[radius.sm]` | `[VALUE]` | `[SMALL]` | `[USAGE]` | `[LINK]` |
| `[radius.md]` | `[VALUE]` | `[MEDIUM]` | `[USAGE]` | `[LINK]` |
| `[radius.lg]` | `[VALUE]` | `[LARGE]` | `[USAGE]` | `[LINK]` |
| `[radius.full]` | `[VALUE]` | `[PILL/CIRCLE]` | `[USAGE]` | `[LINK]` |

**Per-corner exceptions:** `[TOKEN / COMPONENT / RATIONALE]`

## 2. Shadow/elevation scale (levels 0–4)
| Level | Token | X | Y | Blur | Spread | Color / opacity | Theme variant | Intended use |
|---|---|---|---|---|---|---|---|---|
| 0 | `[shadow.0]` | `[0]` | `[0]` | `[0]` | `[0]` | `[NONE]` | `[LIGHT/DARK]` | `[FLAT]` |
| 1 | `[shadow.1]` | `[VALUE]` | `[VALUE]` | `[VALUE]` | `[VALUE]` | `[TOKEN]` | `[RULE]` | `[SUBTLE SURFACE]` |
| 2 | `[shadow.2]` | `[VALUE]` | `[VALUE]` | `[VALUE]` | `[VALUE]` | `[TOKEN]` | `[RULE]` | `[RAISED]` |
| 3 | `[shadow.3]` | `[VALUE]` | `[VALUE]` | `[VALUE]` | `[VALUE]` | `[TOKEN]` | `[RULE]` | `[OVERLAY]` |
| 4 | `[shadow.4]` | `[VALUE]` | `[VALUE]` | `[VALUE]` | `[VALUE]` | `[TOKEN]` | `[RULE]` | `[HIGHEST LAYER]` |

> These are documentation levels, not prescribed visual values. If the project uses a different scale, record its existing scale and mapping.

## 3. Elevation-to-component mapping
| Component / surface | Rest | Hover | Active | Modal/open | Dark mode | Reason |
|---|---|---|---|---|---|---|
| `[CARD]` | `[LEVEL]` | `[LEVEL]` | `[LEVEL]` | `N/A` | `[RULE]` | `[WHY]` |
| `[DROPDOWN]` | `[LEVEL]` | `N/A` | `N/A` | `[LEVEL]` | `[RULE]` | `[WHY]` |
| `[DIALOG]` | `N/A` | `N/A` | `N/A` | `[LEVEL]` | `[RULE]` | `[WHY]` |

## 4. Layering / stacking rules
| Layer | Z-index token (if used) | Above/below | Example |
|---|---|---|---|
| `[BASE]` | `[TOKEN]` | `[RELATION]` | `[PAGE]` |
| `[POPOVER]` | `[TOKEN]` | `[RELATION]` | `[MENU]` |
| `[MODAL]` | `[TOKEN]` | `[RELATION]` | `[DIALOG]` |

## 5. Usage and sign-off
**Do:** `[FIGMA EXAMPLES]`  
**Don't:** `[FIGMA EXAMPLES]`  
**Borders versus shadows:** `[RULES]`  
**Dark theme surface separation:** `[RULES]`

- [ ] Radius values and intended use defined.
- [ ] Elevation levels 0–4 documented or mapped to existing system.
- [ ] Shadow geometry and theme variants captured.
- [ ] Components and stacking behavior cross-referenced.
