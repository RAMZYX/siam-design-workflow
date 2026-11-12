# Iconography — [PROJECT]

## Specification metadata
| Field | Value |
|---|---|
| Source type | `[figma / markdown / code / hybrid / none]` |
| Figma URL — icon library (optional) | `[URL / N/A]` |
| Icon package (if code-based) | `[PACKAGE / VERSION / N/A]` |
| Specification status | `[approved / draft / proposed / missing / conflicting]` |
| Owner | `[DESIGNER]` |
| Version | `[VERSION]` |
| Last reviewed | `[YYYY-MM-DD]` |
| Related specifications | [`color-system.md`](color-system.md), [`spacing.md`](spacing.md), [`accessibility.md`](../../02-foundation/accessibility.md) |
| Inspiration / moodboard (non-binding, optional) | `[LINKS / N/A]` |
| Open decisions | `[IDs / NONE]` |

Field rules: [design-system index](../README.md#specification-metadata). Columns named "Figma link" are optional — use a Markdown or code reference, or `N/A`.

## 1. Icon source and visual language
| Attribute | Approved decision | Source |
|---|---|---|
| Icon library / version | `[NAME / VERSION]` | `[LINK]` |
| Style | `[OUTLINED / FILLED / DUOTONE / MIX]` | `[LINK]` |
| Stroke width / caps / joins | `[VALUES]` | `[LINK]` |
| Viewbox / optical alignment | `[VALUES / RULE]` | `[LINK]` |
| Fill / stroke color token | `[TOKEN]` | `[LINK]` |
| Licensing / attribution | `[REQUIREMENTS]` | `[LINK]` |

## 2. Size and placement tokens
| Token | Icon canvas size | Stroke width | Recommended placement | Touch/click target | Figma link |
|---|---|---|---|---|---|
| `[icon.size.sm]` | `[VALUE]` | `[VALUE]` | `[TABLE/INPUT]` | `[VALUE]` | `[LINK]` |
| `[icon.size.md]` | `[VALUE]` | `[VALUE]` | `[BUTTON]` | `[VALUE]` | `[LINK]` |
| `[icon.size.lg]` | `[VALUE]` | `[VALUE]` | `[NAV]` | `[VALUE]` | `[LINK]` |

**Icon-to-label spacing:** `[SPACE TOKEN]`  
**Alignment / optical corrections:** `[RULES]`  
**Touch target reference:** `[PROJECT ACCESSIBILITY STANDARD]`

## 3. Icon color and interaction states
| Use | Default | Hover | Pressed | Disabled | Selected | Error |
|---|---|---|---|---|---|---|
| `[ICON BUTTON]` | `[TOKEN]` | `[TOKEN]` | `[TOKEN]` | `[TOKEN]` | `[TOKEN]` | `[TOKEN]` |

## 4. Semantic icon map
| Meaning / action | Approved icon name | Library reference | Filled/outline | Label / accessible name | Allowed contexts |
|---|---|---|---|---|---|
| Search | `[ICON NAME]` | `[LINK]` | `[STYLE]` | `[SEARCH]` | `[CONTEXTS]` |
| Close | `[ICON NAME]` | `[LINK]` | `[STYLE]` | `[CLOSE]` | `[CONTEXTS]` |
| Edit | `[ICON NAME]` | `[LINK]` | `[STYLE]` | `[EDIT]` | `[CONTEXTS]` |
| Delete | `[ICON NAME]` | `[LINK]` | `[STYLE]` | `[DELETE]` | `[CONTEXTS]` |
| Success / warning / error | `[ICONS]` | `[LINKS]` | `[STYLES]` | `[LABELS]` | `[CONTEXTS]` |

## 5. Accessibility and usage
**Decorative icon:** `[HIDE FROM SCREEN READER WHEN REDUNDANT]`  
**Icon-only button:** `[REQUIRED ACCESSIBLE NAME / TOOLTIP RULE]`  
**Never color alone:** `[TEXT/SHAPE ACCOMPANIMENT]`  
**RTL mirroring:** `[WHICH ICONS MIRROR]`  
**Do/don't examples:** `[FIGMA, MARKDOWN OR CODE REFERENCES]`

## 6. Requesting/adding an icon
| Step | Owner / action |
|---|---|
| Check existing library | `[DESIGNER SEARCH PROCESS]` |
| Document missing need | `[REQUEST LINK]` |
| Review consistency/license | `[APPROVER]` |
| Assign name and variants | `[NAMING RULE]` |
| Publish to library | `[PROCESS / VERSION]` |
| Notify development | `[CHANNEL]` |

- [ ] Every icon used has an approved source and meaning.
- [ ] Sizes, strokes and interactive states match library.
- [ ] Icon-only actions have accessible names and adequate targets.
- [ ] New icons are approved before implementation.
