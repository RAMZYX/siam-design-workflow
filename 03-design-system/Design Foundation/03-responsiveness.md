# Responsiveness and Platform Behavior — [PROJECT]

> Authoritative file for supported platforms, breakpoint ranges and responsive adaptation. Columns, margins, gutters and containers per breakpoint live in [`grid.md`](grid.md).

## Specification metadata
| Field | Value |
|---|---|
| Source type | `[figma / markdown / code / hybrid / none]` |
| Figma URL — responsive frames (optional) | `[URL / N/A]` |
| Specification status | `[approved / draft / proposed / missing / conflicting]` |
| Owner | `[DESIGNER]` |
| Version | `[VERSION]` |
| Last reviewed | `[YYYY-MM-DD]` |
| Related specifications | [`grid.md`](grid.md), [`spacing.md`](spacing.md) |
| Inspiration / moodboard (non-binding, optional) | `[LINKS / N/A]` |
| Open decisions | `[IDs / NONE]` |

Field rules: [design-system index](../README.md#specification-metadata). Columns named "Design link", "Design frame" or "Design reference" are optional — use a Markdown or code reference, or `N/A`.

## 1. Supported platforms
| Platform | Supported? | Min viewport/device | Input modes | Browser/OS scope | Design link |
|---|---|---|---|---|---|
| Desktop web | `[YES/NO]` | `[WIDTH]` | `[MOUSE/KEYBOARD]` | `[SCOPE]` | `[LINK]` |
| Mobile web | `[YES/NO]` | `[WIDTH]` | `[TOUCH/KEYBOARD]` | `[SCOPE]` | `[LINK]` |
| Native mobile | `[YES/NO]` | `[DEVICE]` | `[TOUCH]` | `[IOS/ANDROID]` | `[LINK]` |
| PWA | `[YES/NO]` | `[DEVICE]` | `[TOUCH/KEYBOARD]` | `[SCOPE]` | `[LINK]` |

## 2. Breakpoints
Container width, grid columns, margins and gutters for each breakpoint are specified in [`grid.md`](grid.md) §1.

| Breakpoint token | Min width | Max width | Design frame |
|---|---|---|---|
| `[breakpoint.sm]` | `[VALUE]` | `[VALUE]` | `[LINK]` |
| `[breakpoint.md]` | `[VALUE]` | `[VALUE]` | `[LINK]` |
| `[breakpoint.lg]` | `[VALUE]` | `[VALUE]` | `[LINK]` |

## 3. Navigation transformation
| Pattern | Desktop | Tablet | Mobile | Change trigger / rule | Design reference |
|---|---|---|---|---|---|
| Primary navigation | `[SIDEBAR/TOP]` | `[PATTERN]` | `[PATTERN]` | `[WIDTH/RULE]` | `[LINK]` |
| Secondary navigation | `[TABS]` | `[PATTERN]` | `[PATTERN]` | `[RULE]` | `[LINK]` |
| Breadcrumb / back | `[RULE]` | `[RULE]` | `[RULE]` | `[RULE]` | `[LINK]` |

## 4. Component and content adaptation
| Component / region | Desktop | Tablet | Mobile | Hide/stack/reorder rule | Preserved information/actions |
|---|---|---|---|---|---|
| Data table | `[FULL TABLE]` | `[RULE]` | `[CARDS/SCROLL/OTHER]` | `[RULE]` | `[SORT/FILTER/ACTIONS]` |
| Filters | `[SIDEBAR/INLINE]` | `[RULE]` | `[DRAWER/OTHER]` | `[RULE]` | `[ALL FILTERS]` |
| Forms | `[COLUMNS]` | `[COLUMNS]` | `[COLUMNS]` | `[FIELD ORDER]` | `[VALIDATION]` |
| Cards | `[GRID]` | `[GRID]` | `[STACK]` | `[ORDER]` | `[ACTIONS]` |
| Dialog / drawer | `[PATTERN]` | `[PATTERN]` | `[PATTERN]` | `[RULE]` | `[FOCUS/ESCAPE]` |

## 5. Responsive visibility and reading order
| Screen ID | Element | Hide/show/stack/reorder | Trigger | Visual order | Keyboard/screen-reader order | Reason |
|---|---|---|---|---|---|---|
| `[SCR-001]` | `[ELEMENT]` | `[RULE]` | `[BREAKPOINT]` | `[ORDER]` | `[ORDER]` | `[WHY]` |

**Rules for hidden content:** `[MUST NOT HIDE CRITICAL ACTIONS / APPROVED EXCEPTIONS]`  
**Long content / localization:** `[WRAP/SCROLL RULES]`  
**Zoom and text scaling:** `[REQUIREMENTS]`

## 6. PWA-specific behavior (complete only if supported)
| Scenario | UX requirement | Screen/state link | Owner |
|---|---|---|---|
| Offline landing | `[OFFLINE CONTENT / MESSAGE]` | `[LINK]` | `[OWNER]` |
| Offline mutation | `[BLOCK/QUEUE/RETRY]` | `[LINK]` | `[OWNER]` |
| Reconnection / sync | `[CONFLICT/STATUS]` | `[LINK]` | `[OWNER]` |
| Install prompt | `[WHEN/HOW/DISMISS]` | `[LINK]` | `[OWNER]` |
| Update available | `[REFRESH/DEFER]` | `[LINK]` | `[OWNER]` |
| Safe areas / cutouts | `[INSETS/STICKY UI]` | `[LINK]` | `[OWNER]` |

## 7. Responsive QA matrix
| Screen | Viewport/device | Orientation | Zoom/text scale | Tested states | Result | Evidence |
|---|---|---|---|---|---|---|
| `[SCR-001]` | `[VALUE]` | `[PORTRAIT/LANDSCAPE]` | `[VALUE]` | `[DEFAULT/ERROR/EMPTY]` | `TBD` | `[LINK]` |

- [ ] Breakpoints and platform support explicit.
- [ ] Navigation, tables, forms and overlays have adaptation rules.
- [ ] Content remains available and logical after reordering.
- [ ] Touch, safe areas and offline behavior covered where applicable.
- [ ] Tested across approved device and viewport matrix.
