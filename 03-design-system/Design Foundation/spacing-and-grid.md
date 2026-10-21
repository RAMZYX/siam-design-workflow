# Spacing and Grid — [PROJECT]

**Owner:** `[DESIGNER]` · **Version:** `[VERSION]` · **Figma layout styles:** `[LINK]`

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

## 3. Breakpoint and layout grid definitions
| Breakpoint / platform | Width range | Columns | Margin | Gutter | Max content width | Container behavior | Figma reference |
|---|---|---|---|---|---|---|---|
| `[MOBILE]` | `[MIN–MAX]` | `[COUNT]` | `[VALUE]` | `[VALUE]` | `[VALUE]` | `[FLUID/FIXED]` | `[LINK]` |
| `[TABLET]` | `[MIN–MAX]` | `[COUNT]` | `[VALUE]` | `[VALUE]` | `[VALUE]` | `[FLUID/FIXED]` | `[LINK]` |
| `[DESKTOP]` | `[MIN–MAX]` | `[COUNT]` | `[VALUE]` | `[VALUE]` | `[VALUE]` | `[FLUID/FIXED]` | `[LINK]` |

## 4. Layout templates
| Template | Page width | Sidebar | Header | Content columns | Section gap | Design link |
|---|---|---|---|---|---|---|
| `[DASHBOARD]` | `[TOKEN]` | `[WIDTH]` | `[HEIGHT]` | `[COUNT]` | `[TOKEN]` | `[LINK]` |
| `[FORM PAGE]` | `[TOKEN]` | `[RULE]` | `[RULE]` | `[COUNT]` | `[TOKEN]` | `[LINK]` |

## 5. Component internal spacing
| Component / size | Horizontal padding | Vertical padding | Child gap | Minimum height | Token reference |
|---|---|---|---|---|---|
| `[BUTTON / MD]` | `[TOKEN]` | `[TOKEN]` | `[TOKEN]` | `[VALUE]` | `[LINK]` |
| `[INPUT / MD]` | `[TOKEN]` | `[TOKEN]` | `[TOKEN]` | `[VALUE]` | `[LINK]` |
| `[CARD]` | `[TOKEN]` | `[TOKEN]` | `[TOKEN]` | `[VALUE]` | `[LINK]` |
| `[TABLE ROW]` | `[TOKEN]` | `[TOKEN]` | `[TOKEN]` | `[VALUE]` | `[LINK]` |

## 6. Alignment, density and exceptions
**Alignment rules:** `[BASELINES, EDGES, CENTERING]`  
**Vertical rhythm:** `[HEADING → BODY → SECTION]`  
**Density modes:** `[COMFORTABLE / COMPACT / N/A]`  
**Scrolling / sticky areas:** `[RULES]`  
**RTL considerations:** `[RULES]`

## 7. Review checklist
- [ ] Token scale and base unit match design source.
- [ ] Every supported breakpoint has grid dimensions.
- [ ] Layout templates and component paddings specified.
- [ ] Overflow, long content and responsive spacing checked.
- [ ] Exceptions have approval and rationale.
