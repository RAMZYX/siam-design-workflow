# Color System — [PROJECT]

**Owner:** `[DESIGNER]` · **Version:** `[VERSION]` · **Status:** `Draft / Review / Approved` · **Figma variables:** `[LINK]`

> Enter **actual project colors**. The rows below illustrate what must be documented; token names and values are placeholders.

## 1. Color foundations / raw palette
| Palette | Token | Shade/step | HEX | RGB/HSL (optional) | Figma variable | Notes |
|---|---|---|---|---|---|---|
| Primary | `[color.palette.primary.500]` | `[500]` | `[#XXXXXX]` | `[VALUE]` | `[LINK]` | `[BRAND USE]` |
| Secondary | `[TOKEN]` | `[STEP]` | `[#XXXXXX]` | `[VALUE]` | `[LINK]` | `[USE]` |
| Neutral | `[TOKEN]` | `[STEP]` | `[#XXXXXX]` | `[VALUE]` | `[LINK]` | `[USE]` |

**Palette steps / naming:** `[50–900 OR EXISTING SCHEME]`  
**Brand restrictions:** `[APPROVED / PROHIBITED COMBINATIONS]`

## 2. Semantic / functional colors
| Semantic role | Token | Light alias/value | Dark alias/value | Usage | Do not use for |
|---|---|---|---|---|---|
| Success | `[color.status.success]` | `[ALIAS]` | `[ALIAS]` | `[CONFIRMATION]` | `[OTHER MEANINGS]` |
| Warning | `[TOKEN]` | `[ALIAS]` | `[ALIAS]` | `[CAUTION]` | `[RULE]` |
| Error / danger | `[TOKEN]` | `[ALIAS]` | `[ALIAS]` | `[FAILURE / DESTRUCTIVE]` | `[RULE]` |
| Info | `[TOKEN]` | `[ALIAS]` | `[ALIAS]` | `[INFORMATION]` | `[RULE]` |

## 3. Surface, text, border and overlay roles
| Role | Semantic token | Light | Dark | Used in / examples |
|---|---|---|---|---|
| Page background | `[color.surface.page]` | `[ALIAS]` | `[ALIAS]` | `[PAGE]` |
| Card / raised surface | `[TOKEN]` | `[ALIAS]` | `[ALIAS]` | `[CARDS]` |
| Overlay / scrim | `[TOKEN]` | `[ALIAS/OPACITY]` | `[ALIAS/OPACITY]` | `[MODALS]` |
| Primary text | `[color.text.primary]` | `[ALIAS]` | `[ALIAS]` | `[HEADINGS/BODY]` |
| Secondary / muted text | `[TOKEN]` | `[ALIAS]` | `[ALIAS]` | `[METADATA]` |
| Inverse text | `[TOKEN]` | `[ALIAS]` | `[ALIAS]` | `[ON STRONG FILL]` |
| Default border | `[color.border.default]` | `[ALIAS]` | `[ALIAS]` | `[DIVIDERS/FIELDS]` |
| Focus ring | `[TOKEN]` | `[ALIAS]` | `[ALIAS]` | `[KEYBOARD FOCUS]` |

## 4. Interactive color-state matrix
| Component/role | Default | Hover | Pressed | Focus | Selected | Disabled | Loading |
|---|---|---|---|---|---|---|---|
| Primary action fill | `[TOKEN]` | `[TOKEN]` | `[TOKEN]` | `[TOKEN]` | `[N/A]` | `[TOKEN]` | `[TOKEN]` |
| Primary action label | `[TOKEN]` | `[TOKEN]` | `[TOKEN]` | `[TOKEN]` | `[N/A]` | `[TOKEN]` | `[TOKEN]` |
| Link | `[TOKEN]` | `[TOKEN]` | `[TOKEN]` | `[TOKEN]` | `[N/A]` | `[TOKEN]` | `[N/A]` |
| Input border | `[TOKEN]` | `[TOKEN]` | `[TOKEN]` | `[TOKEN]` | `[TOKEN]` | `[TOKEN]` | `[N/A]` |

## 5. Themes and modes
**Supported themes:** `[LIGHT / DARK / HIGH-CONTRAST / BRAND THEMES]`  
**Theme selection:** `[SYSTEM / USER / FIXED]`  
**Theme switching behavior:** `[PERSISTENCE AND TRANSITION]`

| Semantic token | Light mapping | Dark mapping | High-contrast mapping if applicable |
|---|---|---|---|
| `[color.text.primary]` | `[RAW TOKEN]` | `[RAW TOKEN]` | `[TOKEN OR N/A]` |

## 6. Contrast verification
Target project accessibility standard: `[WCAG 2.1 AA OR APPROVED STANDARD]`. WCAG 2.1 AA commonly requires **4.5:1** normal text, **3:1** large text, and **3:1** for essential non-text UI boundaries/states; verify exceptions and actual combinations.

| Foreground token | Background token | Theme | Contrast ratio | Content type | Required ratio | Pass/fail | Evidence |
|---|---|---|---|---|---|---|---|
| `[TEXT]` | `[SURFACE]` | `Light` | `[X:1]` | `[NORMAL/LARGE/UI]` | `[RATIO]` | `TBD` | `[LINK]` |

## 7. Usage guidance and exceptions
**Do:** `[APPROVED EXAMPLES WITH FIGMA LINKS]`  
**Don't:** `[PROHIBITED EXAMPLES WITH FIGMA LINKS]`  
**Color-blind-safe status communication:** `[ICON/TEXT/SHAPE RULES; NEVER COLOR ALONE]`  
**Deprecated colors:** `[TOKEN → REPLACEMENT / N/A]`

## 8. Sign-off
- [ ] Primary, secondary and neutral palettes complete.
- [ ] Semantic, surface, text and border roles mapped.
- [ ] Every required state and theme mapped.
- [ ] Contrast checked for real foreground/background pairs.
- [ ] No hard-coded values where semantic tokens exist.
- [ ] Approved Figma references and owner provided.
