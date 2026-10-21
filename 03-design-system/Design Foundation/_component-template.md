# Component — [COMPONENT NAME]

> **Duplicate this file** as `[component-name].md`. Designer fills values from the approved Figma component. Do not create a new component merely because this template exists.

| Metadata | Value |
|---|---|
| Component ID / name | `[CMP-001 / NAME]` |
| Category | `[ACTION / INPUT / NAVIGATION / DATA / FEEDBACK / OVERLAY]` |
| Owner / reviewer | `[NAMES]` |
| Status | `Draft / Review / Approved / Deprecated` |
| Version / updated | `[VERSION / DATE]` |
| Figma component set | `[LINK]` |
| Code component / story | `[LINK / TBD]` |
| Used on screens | `[SCR-IDs]` |

## 1. Purpose and usage
**What it does:** `[PURPOSE]`  
**When to use:** `[USE CASES]`  
**When not to use:** `[ALTERNATIVE COMPONENT / RULE]`

## 2. Anatomy
| Part ID | Part / slot | Required? | Content rule | Token / component reference |
|---|---|---|---|---|
| A | `[LABEL]` | `[YES/NO]` | `[RULE]` | `[TOKEN]` |
| B | `[ICON]` | `[YES/NO]` | `[RULE]` | `[TOKEN]` |

**Annotated anatomy image / Figma:** `[LINK]`

## 3. Variants and sizes
| Variant | Size | Height / width | Padding / gap | Typography | Icon size | Radius | Figma variant |
|---|---|---|---|---|---|---|---|
| `[PRIMARY]` | `[MD]` | `[VALUES]` | `[TOKENS]` | `[TOKEN]` | `[TOKEN]` | `[TOKEN]` | `[LINK]` |

## 4. State matrix
| State | Visual treatment / tokens | Behavior | Accessibility / announcement | Figma link |
|---|---|---|---|---|
| Default | `[TOKENS]` | `[RULE]` | `[RULE]` | `[LINK]` |
| Hover | `[TOKENS]` | `[RULE]` | `[N/A OR RULE]` | `[LINK]` |
| Focus visible | `[TOKENS]` | `[RULE]` | `[KEYBOARD]` | `[LINK]` |
| Pressed/active | `[TOKENS]` | `[RULE]` | `[RULE]` | `[LINK]` |
| Disabled | `[TOKENS]` | `[RULE]` | `[RULE]` | `[LINK]` |
| Loading | `[TOKENS]` | `[RULE]` | `[ANNOUNCEMENT]` | `[LINK]` |
| Error / success / selected | `[TOKENS / N/A]` | `[RULE]` | `[RULE]` | `[LINK]` |

## 5. Interaction contract
| Trigger | Preconditions | UI reaction | Data/action result | Next focus / state | Error/recovery |
|---|---|---|---|---|---|
| `[CLICK / TAP / KEY]` | `[RULE]` | `[FEEDBACK]` | `[ACTION]` | `[FOCUS/STATE]` | `[RULE]` |

**Keyboard interaction:** `[TAB / ENTER / SPACE / ARROWS / ESC AS APPLICABLE]`  
**Validation behavior:** `[RULE OR N/A]`  
**Responsive changes:** `[RULES / LINK]`  
**Motion:** `[TOKEN / REDUCED MOTION / N/A]`

## 6. Token mapping
| Property | Semantic token | Raw value source | Overrides / theme variants |
|---|---|---|---|
| Fill | `[color.*]` | `[LINK]` | `[LIGHT/DARK]` |
| Text | `[type.* / color.*]` | `[LINK]` | `[VARIANT]` |
| Padding / gap | `[space.*]` | `[LINK]` | `[SIZE]` |
| Radius / shadow | `[radius.* / shadow.*]` | `[LINK]` | `[STATE]` |

## 7. Content and accessibility
**Accessible role/name:** `[RULE]`  
**Labels and helper/error text:** `[RULE]`  
**Focus visibility/order:** `[RULE]`  
**Target size:** `[VALUE / STANDARD]`  
**Screen reader behavior:** `[RULE]`  
**Color contrast:** `[VERIFICATION LINK]`  
**RTL/localization:** `[RULES]`

## 8. Do / don't examples
| Do | Don't | Why | Design examples |
|---|---|---|---|
| `[APPROVED PATTERN]` | `[ANTI-PATTERN]` | `[REASON]` | `[LINK]` |

## 9. Implementation and lifecycle
**Existing component to reuse:** `[NAME / PATH]`  
**Dependencies / subcomponents:** `[LIST]`  
**Known limitations:** `[DETAILS]`  
**Deprecation / migration:** `[N/A OR PLAN]`

- [ ] Purpose and anatomy approved.
- [ ] Every variant, size and applicable state represented.
- [ ] All visual properties mapped to approved tokens.
- [ ] Behavior, keyboard and accessibility specified.
- [ ] Responsive variants and Figma links included.
- [ ] Inventory status and owner updated.

## Change history
| Date | Version | Change | Approval |
|---|---|---|---|
| `[DATE]` | `[VERSION]` | `[DETAILS]` | `[NAME]` |
