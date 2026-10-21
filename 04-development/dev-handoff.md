---
project: "[PROJECT NAME]"
release: "[RELEASE]"
owner: "[DESIGNER]"
status: Draft
version: "0.1"
last_updated: "[YYYY-MM-DD]"
---
# Developer Handoff — [Project / Release]

**Designer instructions:** This is the project-specific handoff index. Replace placeholders and link approved source files; keep updated after design changes. Do not substitute this document for the FRD or design system.

## 1. Summary
| Attribute | Value |
|---|---|
| Project / feature / release | `[VALUES]` |
| Platforms and roles | `[PLATFORMS / ROLES]` |
| Designer / product owner / tech lead | `[NAMES]` |
| Handoff date and version | `[DATE / VERSION]` |
| Included / excluded modules | `[SCOPE]` |
| Approval status | `[DRAFT / REVIEW / APPROVED]` |
| Blockers | `[IDS / NONE]` |

## 2. Source links
| Resource | Link / path | Version / owner | Purpose |
|---|---|---|---|
| Approved design and screen images | `[FIGMA / EXPORT LINK]` | `[VERSION]` | Visual specification |
| Interactive prototype | `[LINK]` | `[VERSION]` | Interactions |
| FRD | `[LINK]` | `[VERSION]` | Functional requirements |
| Functional memory | `[memory.md PATH]` | `[VERSION]` | Logic and decisions |
| User flows | `[01-flows/ LINKS]` | `[VERSION]` | Task journeys |
| Information architecture | `[01-flows/information-architecture.md]` | `[VERSION]` | Navigation |
| Design system / tokens | `[LINK]` | `[VERSION]` | UI components and styles |
| Assets and icon library | `[FOLDER LINK]` | `[VERSION]` | Export files |
| Content and microcopy | `[LINK]` | `[VERSION]` | Approved strings |
| UI QA checklist | `[05-testing/ui-qa-checklist.md]` | `[VERSION]` | Verification |

## 3. Screen list
| Screen ID | Screen / variant | Platform / role | Design frame/image | Flow ID | FRD section | Priority | Ready? |
|---|---|---|---|---|---|---|---|
| SCR-001 | `[NAME]` | `[ROLE]` | `[LINK]` | `[FLOW-ID]` | `[SECTION]` | `[P0/P1/P2]` | `[YES/NO]` |

Include important modals, drawers, responsive variants, and error/empty states.

## 4. Component inventory
| Component | Existing in design system? | Variants / states | Token/spec link | Used on screens | Gap / approval |
|---|---|---|---|---|---|
| `[COMPONENT]` | `[YES/NO/UNKNOWN]` | `[STATES]` | `[LINK]` | `[SCR-IDS]` | `[DETAILS]` |

**Reuse policy:** Prefer existing approved components, typography, colors, and patterns. Any new component or exception requires explicit project approval.

## 5. Layout and design tokens
| Area | Source / token link | Project exception |
|---|---|---|
| Typography | `[LINK]` | `[NONE / DETAILS]` |
| Colors | `[LINK]` | `[NONE / DETAILS]` |
| Spacing / grid | `[LINK]` | `[NONE / DETAILS]` |
| Borders / radii / shadows | `[LINK]` | `[NONE / DETAILS]` |
| Breakpoints | `[LINK]` | `[NONE / DETAILS]` |
| Icons / imagery / motion | `[LINK]` | `[NONE / DETAILS]` |

## 6. Interaction notes
| ID | Screen / element | Trigger | Behavior | Validation / state | Navigation / side effect | FRD / memory reference |
|---|---|---|---|---|---|---|
| INT-001 | `[SCR-ID / ELEMENT]` | `[ACTION]` | `[EXPECTED]` | `[RULE]` | `[RESULT]` | `[ID/LINK]` |

Cover forms, CTA conditions, search, filtering, sorting, pagination, dialogs/drawers, loading/empty/error states, back/cancel, confirmations, and role-based actions when applicable. Unknown logic is `TBD`, not an implementation guess.

## 7. Responsive and accessibility specifications
| Screen / component | Desktop | Tablet | Mobile | Keyboard / screen reader / focus notes |
|---|---|---|---|---|
| `[SCR-ID]` | `[LINK/RULE]` | `[LINK/RULE]` | `[LINK/RULE]` | `[NOTES]` |

**Accessibility target:** `[WCAG 2.1 AA / PROJECT TARGET]`  
**Text resizing / reflow / reduced motion:** `[LINK OR NOTES]`

## 8. Asset delivery
| Asset ID | Asset / usage | Format | Export link | Size / density / naming | Notes / rights |
|---|---|---|---|---|---|
| AST-001 | `[ASSET]` | `[SVG/PNG/WEBP]` | `[LINK]` | `[SPEC]` | `[NOTES]` |

Provide appropriate light/dark variants, crops/focal points, and approved copy/alt-text guidance where needed.

## 9. Dependencies
| Dependency | Screens | Inputs / outputs | Failure behavior | Source / owner | Status |
|---|---|---|---|---|---|
| `[API / EVENT / DATA]` | `[SCR-IDS]` | `[DATA]` | `[RULE]` | `[LINK]` | `[CONFIRMED/TBD]` |

Do not invent API paths or backend contracts; link technical specs if available.

## 10. Open questions and change control
| ID | Topic | Decision / exception | Impact | Owner | Status |
|---|---|---|---|---|---|
| H-001 | `[TOPIC]` | `[QUESTION]` | `[IMPACT]` | `[OWNER]` | Open |

**Walkthrough date:** `[DATE]`  
**Developer acknowledgement:** `[NAME / DATE / PENDING]`  
**Questions channel:** `[LINK / CONTACT]`  
**Change notification process:** `[PROCESS]`  
**UI QA owner:** `[NAME]`

## Designer handoff checklist
- [ ] Screen images and design links accessible and versioned.
- [ ] FRD, user flows, IA, and functional memory linked.
- [ ] All screens, states, and variants accounted for.
- [ ] Existing components and design tokens identified.
- [ ] Interaction, validation, navigation, and role rules documented.
- [ ] Responsive and accessibility behavior covered.
- [ ] Assets, export specs, and approved microcopy supplied.
- [ ] Open questions have owners and are visible.
- [ ] Developer walkthrough, acceptance, and UI QA plan agreed.
- [ ] Post-handoff changes tracked and communicated.

## Change history
| Date | Version | Changed screens / assets / rules | Reason / notified |
|---|---|---|---|
| `[DATE]` | `[VERSION]` | `[DETAILS]` | `[SOURCE]` |
