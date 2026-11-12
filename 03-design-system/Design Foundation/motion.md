# Motion — [PROJECT] (Optional)

## Specification metadata
| Field | Value |
|---|---|
| Applicability | `[applicable / not applicable]` — if not applicable, stop here |
| Source type | `[figma / markdown / code / hybrid / none]` |
| Figma URL — motion prototype (optional) | `[URL / N/A]` |
| Specification status | `[approved / draft / proposed / missing / conflicting]` |
| Owner | `[DESIGNER]` |
| Version | `[VERSION]` |
| Last reviewed | `[YYYY-MM-DD]` |
| Related specifications | [`accessibility.md`](../../02-foundation/accessibility.md) |
| Inspiration / moodboard (non-binding, optional) | `[LINKS / N/A]` |
| Open decisions | `[IDs / NONE]` |

Field rules: [design-system index](../README.md#specification-metadata).

## 1. Motion principles
**Why motion is used:** `[FEEDBACK / ORIENTATION / HIERARCHY]`  
**When not to animate:** `[RULES]`  
**Motion prototype:** `[LINK]`

## 2. Duration tokens
| Token | Duration (ms) | Usage | Examples |
|---|---|---|---|
| `[motion.duration.fast]` | `[VALUE]` | `[MICROINTERACTION]` | `[LINK]` |
| `[motion.duration.standard]` | `[VALUE]` | `[STATE CHANGE]` | `[LINK]` |
| `[motion.duration.slow]` | `[VALUE]` | `[LARGE TRANSITION]` | `[LINK]` |

## 3. Easing tokens
| Token | CSS curve / platform equivalent | Intended use | Reference |
|---|---|---|---|
| `[motion.easing.standard]` | `[cubic-bezier(...)]` | `[GENERAL]` | `[LINK]` |
| `[motion.easing.enter]` | `[VALUE]` | `[ENTER]` | `[LINK]` |
| `[motion.easing.exit]` | `[VALUE]` | `[EXIT]` | `[LINK]` |

## 4. Interaction motion specifications
| Trigger / component | Property animated | From → to | Duration | Easing | Interrupt/reverse behavior | Design link |
|---|---|---|---|---|---|---|
| `[DIALOG OPEN]` | `[OPACITY/TRANSFORM]` | `[VALUES]` | `[TOKEN]` | `[TOKEN]` | `[RULE]` | `[LINK]` |
| `[TAB CHANGE]` | `[PROPERTY]` | `[VALUES]` | `[TOKEN]` | `[TOKEN]` | `[RULE]` | `[LINK]` |
| `[LOADING]` | `[PROPERTY]` | `[VALUES]` | `[TOKEN]` | `[TOKEN]` | `[RULE]` | `[LINK]` |

## 5. Reduced-motion and accessibility
**User preference detection:** `[PLATFORM / prefers-reduced-motion]`  
**Reduced-motion alternative per animation:** `[INSTANT / FADE / STATIC INDICATOR]`  
**Essential animation exception:** `[RATIONALE / N/A]`  
**Autoplay, flashing, parallax and vestibular triggers:** `[RESTRICTIONS]`

## 6. Review
- [ ] All animations specify property, timing and easing.
- [ ] No motion blocks task completion.
- [ ] Reduced-motion alternatives documented and tested.
- [ ] Optional motion section marked N/A if project has no motion system.
