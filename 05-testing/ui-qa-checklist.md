---
project: "[PROJECT NAME]"
release: "[RELEASE]"
owner: "[DESIGNER / QA]"
status: Not started
last_updated: "[YYYY-MM-DD]"
---
# UI QA Checklist — [Project / Release]

**Designer instructions:** Use this to compare built UI with the approved design, FRD, and interaction standards. Duplicate the screen/state matrix for every relevant viewport, role, and state. Never mark Pass without actually testing.

## 1. Test setup
| Attribute | Value |
|---|---|
| Build / commit | `[BUILD]` |
| Platform / browser / device | `[VALUES]` |
| Screen ID / name | `[SCR-ID / NAME]` |
| Viewport / zoom | `[WIDTH × HEIGHT / ZOOM]` |
| Design baseline / version | `[FIGMA LINK / DATE]` |
| FRD / user flow / memory | `[LINKS]` |
| Design tokens / system | `[LINK]` |
| Tester / test date | `[NAME / DATE]` |

**Statuses:** `Pass`, `Fail`, `Not tested`, `N/A`, `Blocked`. Add a reason for N/A, and evidence/defect ID for Fail.

## 2. Spacing, layout, and visual fidelity
| ID | Check | Status | Evidence / defect |
|---|---|---|---|
| V01 | Alignment, grid, hierarchy, and positioning match design | Not tested | `[LINK]` |
| V02 | Margins, padding, gaps, and spacing tokens match | Not tested | `[LINK]` |
| V03 | Typography: family, size, weight, line height, wrapping | Not tested | `[LINK]` |
| V04 | Colors, borders, radii, shadows, and semantic tokens match | Not tested | `[LINK]` |
| V05 | Icons, image assets, crop, resolution, and aspect ratios match | Not tested | `[LINK]` |
| V06 | Long/short content does not clip, overlap, or overflow | Not tested | `[LINK]` |

## 3. Components, interactions, and states
| ID | Check | Status | Evidence / defect |
|---|---|---|---|
| C01 | Approved design-system components and variants used | Not tested | `[LINK]` |
| C02 | Default, hover, focus, active, pressed, selected, disabled states | Not tested | `[LINK]` |
| C03 | Loading, skeleton, empty, success, error, and permission states | Not tested | `[LINK]` |
| C04 | Form labels, required fields, validation, and error feedback | Not tested | `[LINK]` |
| C05 | Buttons, icons, navigation, back, cancel, and deep links work | Not tested | `[LINK]` |
| C06 | Search, filters, sorting, pagination, bulk actions work | Not tested | `[LINK]` |
| C07 | Dialogs/drawers, close behavior, destructive confirmations | Not tested | `[LINK]` |
| C08 | Copy, dates, numbers, and units match approved content | Not tested | `[LINK]` |
| C09 | Behavior matches FRD and user flow | Not tested | `[LINK]` |

## 4. Responsiveness
| ID | Check | Status | Evidence / defect |
|---|---|---|---|
| R01 | All specified mobile/tablet/desktop viewports tested | Not tested | `[DEVICES]` |
| R02 | Reflow without unintended horizontal scrolling | Not tested | `[LINK]` |
| R03 | Navigation, tables, grids, and overlays adapt correctly | Not tested | `[LINK]` |
| R04 | Zoom, text resizing, long localization, and orientation | Not tested | `[LINK]` |
| R05 | Touch controls, sticky areas, and mobile keyboard behavior | Not tested | `[LINK]` |

## 5. Accessibility
Use project accessibility requirements, with WCAG 2.1 AA as the default target where applicable.
| ID | Check | Status | Evidence / defect |
|---|---|---|---|
| A01 | Text/non-text contrast meets target | Not tested | `[MEASUREMENT]` |
| A02 | Keyboard access and logical focus order | Not tested | `[LINK]` |
| A03 | Visible focus, no traps, correct modal focus handling | Not tested | `[LINK]` |
| A04 | Labels, accessible names, alt text, error associations | Not tested | `[LINK]` |
| A05 | Meaning never conveyed by color alone | Not tested | `[LINK]` |
| A06 | Screen-reader order and dynamic announcements | Not tested | `[TEST DEVICE]` |
| A07 | Touch target sizing, zoom/reflow, reduced motion | Not tested | `[LINK]` |

## 6. Screen / state coverage
| Screen ID | Role | Device / viewport | State | Design frame | Result | Defects |
|---|---|---|---|---|---|---|
| `[SCR-001]` | `[ROLE]` | `[DEVICE]` | Default | `[LINK]` | Not tested | `—` |
| `[SCR-001]` | `[ROLE]` | `[DEVICE]` | Error | `[LINK]` | Not tested | `—` |

## 7. Defect log
| Defect ID | Screen / state | Severity | Expected | Actual | Evidence | Owner | Status |
|---|---|---|---|---|---|---|---|
| UI-001 | `[SCR-ID]` | `[CRITICAL/HIGH/MEDIUM/LOW]` | `[DESIGN / FRD]` | `[OBSERVED]` | `[SCREENSHOT]` | `[OWNER]` | Open |

## 8. Sign-off
**Retest build/date:** `[VALUE]`  
**Outstanding blocking defects:** `[IDS / NONE]`  
**Designer approval:** `[NAME / DATE / PENDING]`  
**QA approval:** `[NAME / DATE / PENDING]`  
**Release recommendation:** `Ready / Approved exceptions / Not ready`

### Final gate
- [ ] All in-scope screens, roles, viewports, and important states tested.
- [ ] Visual differences and behavioral failures logged with evidence.
- [ ] Accessibility tests completed.
- [ ] Blocking defects resolved/retested or formally accepted.
- [ ] Results match actual testing, not assumptions.
- [ ] Handoff reflects known exceptions and remaining defects.

## Change history
| Date | Build | Change / retest | Reviewer |
|---|---|---|---|
| `[DATE]` | `[BUILD]` | `[DETAILS]` | `[NAME]` |
