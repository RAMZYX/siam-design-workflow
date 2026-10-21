# Typography — [PROJECT]

**Owner:** `[DESIGNER]` · **Version:** `[VERSION]` · **Figma text styles:** `[LINK]`

## 1. Font family inventory
| Role | Font family | Fallback stack | Source/license | Platforms | Notes |
|---|---|---|---|---|---|
| Primary UI | `[FONT NAME]` | `[FALLBACKS]` | `[LICENSE LINK]` | `[WEB/MOBILE]` | `[NOTES]` |
| Display / heading | `[FONT OR SAME]` | `[FALLBACKS]` | `[LINK]` | `[PLATFORMS]` | `[NOTES]` |
| Monospace / code | `[FONT]` | `[FALLBACKS]` | `[LINK]` | `[PLATFORMS]` | `[NOTES]` |

## 2. Font weights and available styles
| Weight token | Numeric weight | Font file/style available? | Allowed use |
|---|---|---|---|
| `[font.weight.regular]` | `[400 OR ACTUAL]` | `[YES/NO]` | `[BODY]` |
| `[font.weight.medium]` | `[VALUE]` | `[YES/NO]` | `[LABEL]` |
| `[font.weight.bold]` | `[VALUE]` | `[YES/NO]` | `[HEADING]` |

## 3. Complete responsive type scale
Document **every actual Figma text style** (not just headings). Use px/rem or platform units consistently.

| Style token | Purpose | Desktop size | Tablet size | Mobile size | Weight | Line height | Letter spacing | Case | Figma link |
|---|---|---|---|---|---|---|---|---|---|
| `[type.display.lg]` | `[HERO]` | `[VALUE]` | `[VALUE]` | `[VALUE]` | `[TOKEN]` | `[VALUE]` | `[VALUE]` | `[RULE]` | `[LINK]` |
| `[type.heading.h1]` | `[PAGE TITLE]` | `[VALUE]` | `[VALUE]` | `[VALUE]` | `[TOKEN]` | `[VALUE]` | `[VALUE]` | `[RULE]` | `[LINK]` |
| `[type.heading.h2]` | `[SECTION]` | `[VALUE]` | `[VALUE]` | `[VALUE]` | `[TOKEN]` | `[VALUE]` | `[VALUE]` | `[RULE]` | `[LINK]` |
| `[type.body.md]` | `[BODY]` | `[VALUE]` | `[VALUE]` | `[VALUE]` | `[TOKEN]` | `[VALUE]` | `[VALUE]` | `[RULE]` | `[LINK]` |
| `[type.label.md]` | `[FORM LABEL]` | `[VALUE]` | `[VALUE]` | `[VALUE]` | `[TOKEN]` | `[VALUE]` | `[VALUE]` | `[RULE]` | `[LINK]` |
| `[type.caption]` | `[HELPER]` | `[VALUE]` | `[VALUE]` | `[VALUE]` | `[TOKEN]` | `[VALUE]` | `[VALUE]` | `[RULE]` | `[LINK]` |
| `[type.button.md]` | `[CTA]` | `[VALUE]` | `[VALUE]` | `[VALUE]` | `[TOKEN]` | `[VALUE]` | `[VALUE]` | `[RULE]` | `[LINK]` |

## 4. Semantic usage and hierarchy
| Context | Required style | Max lines / truncation | Alignment | Responsive exception |
|---|---|---|---|---|
| Page title | `[TOKEN]` | `[RULE]` | `[LEFT/CENTER]` | `[RULE]` |
| Section heading | `[TOKEN]` | `[RULE]` | `[RULE]` | `[RULE]` |
| Table body | `[TOKEN]` | `[RULE]` | `[RULE]` | `[RULE]` |
| Form label / error | `[TOKEN]` | `[RULE]` | `[RULE]` | `[RULE]` |

**Heading semantics:** `[H1–H6 AND VISUAL STYLE MAPPING]`  
**Paragraph widths:** `[MAX CHARS / PX]`  
**Wrapping / hyphenation / ellipsis:** `[RULES]`  
**Text resizing / zoom:** `[TESTED BEHAVIOR]`  
**Localization / multilingual font fallback:** `[RULES]`

## 5. Numbers and specialized text
| Use case | Font feature / style | Format / alignment | Example from project |
|---|---|---|---|
| Table numbers | `[TABULAR NUMERALS OR N/A]` | `[RIGHT / DECIMAL]` | `[EXAMPLE]` |
| Currency | `[STYLE]` | `[LOCALE + SYMBOL]` | `[EXAMPLE]` |
| Dates / times | `[STYLE]` | `[LOCALE / TIME ZONE]` | `[EXAMPLE]` |
| Codes / IDs | `[MONOSPACE OR OTHER]` | `[WRAP/COPY]` | `[EXAMPLE]` |

## 6. Do / don't and approval
**Approved typography specimens:** `[FIGMA LINKS]`  
**Disallowed overrides:** `[UNAPPROVED SIZES, SYNTHETIC WEIGHTS, ETC.]`

- [ ] Font families, licenses, weights and fallbacks recorded.
- [ ] Every text style has desktop/mobile dimensions and exact line height.
- [ ] Heading hierarchy, truncation and number formatting defined.
- [ ] Accessibility at zoom and on narrow viewports reviewed.
- [ ] All values match approved Figma styles.
