# Product Functional Memory — `memory.md`

> Reusable living template. Populate this for EACH project from approved requirements, designs, decisions, and verified implementation. Do not import rules from another product.

## Purpose and activation
This file stores the product's evolving functional truth: screen behavior, UI interactions, validations, user journeys, permissions, business logic, state transitions, data dependencies, and open decisions.

**Claude Code MUST read this file before changing any relevant screen or flow, and MUST update affected entries after each confirmed change.** This is a project file, not automatic persistent memory. **Do not create a final FRD until the user explicitly requests it after completing screens.**

## Rules
- MUST document what every interactive element does, not merely what it looks like.
- MUST respect the project's existing design system, approved design files, component patterns, and architecture.
- MUST capture entry, success, failure, retry, back, cancel, and re-entry behavior where applicable.
- MUST distinguish `Confirmed`, `Proposed`, `Open`, `Implemented (verified)`, and `Deprecated`.
- MUST distinguish approved expected behavior from observed code behavior when they differ.
- MUST link requirements to sources and preserve changes in the log.
- MUST NOT invent validation thresholds, messages, role permissions, timers, API behavior, persistence, or navigation.
- MUST NOT mark a screen FRD-ready if critical logic is unknown.

## 1. Project profile
| Item | Value |
|---|---|
| Project / release | `[NAME / VERSION]` |
| Platforms | `[WEB / MOBILE / ADMIN / OTHER]` |
| Product purpose | `[PURPOSE]` |
| Approved design / design system | `[LINKS]` |
| Requirements / decisions | `[LINKS]` |
| Owner | `[OWNER]` |
| Last updated | `[DATE]` |
| FRD status | `Not requested` |

## 2. Users and roles
| Role ID | Name | Screens accessible | Allowed actions | Forbidden actions | Source/status |
|---|---|---|---|---|---|
| ROLE-001 | `[ROLE]` | `[SCREENS]` | `[ACTIONS]` | `[ACTIONS]` | `[SOURCE]` |

Document role-specific data access, edit rights, restrictions, and authorization failures.

## 3. Global business rules
| Rule ID | Rule: condition → behavior | Applies to | Exceptions | Source | Status |
|---|---|---|---|---|---|
| BR-001 | `[EXACT RULE]` | `[SCREENS]` | `[EXCEPTIONS]` | `[SOURCE]` | `Open` |

Record shared rules for sessions, navigation, notifications, pagination, search/filter/sort, time zones, persistence, access, and other cross-screen behavior only when applicable.

## 4. Screen inventory
List every page, meaningful modal, drawer, bottom sheet, wizard step, and role variant.

| Screen ID | Screen | Platform/role | Entry point | Design link | Design status | Logic completeness | Implementation verification |
|---|---|---|---|---|---|---|---|
| SCR-001 | `[SCREEN]` | `[PLATFORM / ROLE]` | `[FROM]` | `[LINK]` | `[STATUS]` | `Open` | `Not checked` |

## 5. Per-screen logic — DUPLICATE FOR EVERY SCREEN

### SCR-001 — [SCREEN NAME]
**Purpose:** `[USER GOAL]`  
**Role/platform:** `[ROLE / PLATFORM]`  
**Preconditions:** `[LOGIN, ELIGIBILITY, DATA]`  
**Entry points:** `[SOURCE SCREENS / ACTIONS]`  
**Design/code references:** `[LINKS / PATHS]`  
**Requirement status:** `Open / Confirmed`  
**Implementation status:** `Not checked / In progress / Verified`

#### A. Screen elements
| Element ID | UI element | Type | Default/display data | Visibility/enablement conditions | Interaction and outcome |
|---|---|---|---|---|---|
| SCR-001-E01 | `[LABEL]` | `[INPUT / BUTTON / ICON / CARD / TAB]` | `[VALUE]` | `[WHEN SHOWN OR ENABLED]` | `[ACTION]` |

Include icons, secondary CTAs, menus, overlays, floating actions, filters, and all conditional elements.

#### B. User flow
1. **Entry:** When `[CONDITION]`, user sees `[INITIAL STATE]`.
2. **Action:** User `[ACTION]`; system `[VALIDATION / PROCESS]`.
3. **Success:** System `[DATA CHANGE / FEEDBACK]`, navigates to `[DESTINATION]`.
4. **Failure:** System `[ERROR]`; user may `[RETRY / RECOVER]`.
5. **Back/cancel/re-entry:** `[STATE RETAINED OR RESET, NAVIGATION]`.

#### C. Interaction rules
| ID | Trigger | Preconditions | System response | UI feedback | Next screen/state | Status |
|---|---|---|---|---|---|---|
| INT-001 | `[CLICK/TAP/CHANGE]` | `[CONDITION]` | `[RESULT]` | `[FEEDBACK]` | `[DESTINATION]` | `Open` |

Document double-submit handling, disabled/hidden/read-only behavior, confirmation, and interruption where relevant.

#### D. Fields and validations
| Field ID | Field | Required | Input format | Exact rule | When validated | Invalid behavior / approved message |
|---|---|---|---|---|---|---|
| VAL-001 | `[FIELD]` | `[YES/NO/CONDITIONAL]` | `[TYPE]` | `[RULE OR TBD]` | `[INPUT/BLUR/SUBMIT/SERVER]` | `[MESSAGE OR TBD]` |

Include cross-field checks, uniqueness, server validation, conditional requirements, and CTA gating. Never invent a password policy, OTP duration, phone format, or numeric threshold.

#### E. Screen states
| State | Trigger | Visible UI | Available actions | Exit/recovery |
|---|---|---|---|---|
| Initial | `[WHEN]` | `[UI]` | `[ACTIONS]` | `[NEXT]` |
| Loading | `[WHEN]` | `[UI]` | `[ACTIONS]` | `[NEXT]` |
| Empty | `[WHEN]` | `[UI]` | `[ACTIONS]` | `[NEXT]` |
| Success | `[WHEN]` | `[UI]` | `[ACTIONS]` | `[NEXT]` |
| Validation error | `[WHEN]` | `[UI]` | `[ACTIONS]` | `[NEXT]` |
| Network/server error | `[WHEN]` | `[UI]` | `[ACTIONS]` | `[RETRY]` |
| Permission denied | `[WHEN]` | `[UI]` | `[ACTIONS]` | `[NEXT]` |
| Domain-specific | `[WHEN]` | `[UI]` | `[ACTIONS]` | `[NEXT]` |

Mark irrelevant states `N/A` and explain why.

#### F. Data, dependencies and side effects
| Dependency ID | API/data/event | Trigger | Inputs/outputs | Failure handling | Persistence/notification |
|---|---|---|---|---|---|
| DEP-001 | `[DEPENDENCY]` | `[WHEN]` | `[DATA]` | `[HANDLING]` | `[EFFECT]` |

Use `TBD` for unverified endpoints, schemas, integrations, or persistence rules.

#### G. Business rules, permissions and edge cases
- **Global rules:** `[BR-IDs]`
- **Screen-specific rules:** `[CONDITIONS → OUTCOMES]`
- **Role variations:** `[WHO CAN SEE / ACT]`
- **Edge cases:** `[NO DATA, DUPLICATES, STALE STATE, INTERRUPTION, ETC.]`
- **Notifications:** `[TRIGGER, CHANNEL, RECIPIENT]`
- **Open questions:** `[QUESTION IDs]`

#### H. Acceptance criteria
- **AC-001:** Given `[PRECONDITION]`, when `[ACTION]`, then `[OBSERVABLE RESULT]`.
- **AC-002:** Given `[INVALID OR EDGE CASE]`, when `[ACTION]`, then `[ERROR/RECOVERY]`.

#### I. Verification
**Design checked:** `[SOURCE/DATE]`  
**Code checked:** `[FILES/COMMIT/DATE OR NOT CHECKED]`  
**Tests:** `[REFERENCES]`  
**FRD-ready:** `Yes / No — [REASON]`

## 6. Cross-screen journeys
### FLOW-001 — [FLOW NAME]
- Actors: `[ROLES]`
- Entry condition: `[CONDITION]`
- Happy path: `SCR-001 → SCR-002 → SCR-003`
- Alternate routes: `[BRANCHES]`
- Errors/cancellation: `[RECOVERY]`
- Shared data/state: `[WHAT IS CARRIED]`
- Completion condition: `[OUTCOME]`
- Linked rules/dependencies: `[IDs]`
- Source/status: `[REFERENCE]`

## 7. Entity status transitions
| Entity | From | Trigger / actor | Guard | To | UI changes | Notifications/side effects |
|---|---|---|---|---|---|---|
| `[ENTITY]` | `[STATE]` | `[ACTION]` | `[CONDITION]` | `[STATE]` | `[VISIBLE ACTIONS]` | `[EFFECT]` |

Document illegal transitions and pending/approved/rejected/completed cases where relevant.

## 8. Open questions and conflicts
| Question ID | Screen/flow | Missing or contradictory rule | Impact | Decision owner | Status / resolution |
|---|---|---|---|---|---|
| Q-001 | `[ID]` | `[QUESTION]` | `[IMPACT]` | `[OWNER]` | `Open` |

Never silently resolve a disagreement between approved requirements, designs, and code.

## 9. Change log
| Date | Affected IDs | Before → after | Reason / source | Approval | FRD impact |
|---|---|---|---|---|---|
| `[DATE]` | `[IDs]` | `[CHANGE]` | `[SOURCE]` | `[STATUS]` | `[SECTION]` |

## 10. Claude Code operating procedure
**Before each relevant UI/UX task:** Read project instructions, design system, affected code/design, and this file; identify affected screen/flow IDs.

**During work:** Use existing approved patterns; implement confirmed logic; record unanswered questions instead of inventing behavior.

**After work:** Update screen elements, flows, validations, states, dependencies, acceptance criteria, statuses, and change log. Verify only what was actually checked. **Do not generate an FRD automatically.**

**Only when the user says “Create the FRD”:** Read `frd-template.md` and this entire file; inspect latest approved designs and implementation; reconcile every in-scope screen; create the FRD and mark unresolved requirements explicitly.

## 11. FRD readiness checklist
- [ ] All in-scope screens and role variants are inventoried.
- [ ] Every interactive control has behavior.
- [ ] All required validations and CTA conditions are specified.
- [ ] Navigation, back/cancel, alternate flows and persistence are documented.
- [ ] Loading, empty, success, error and relevant domain states are addressed.
- [ ] Business rules, status transitions and permissions are consistent.
- [ ] Acceptance criteria are testable.
- [ ] Critical unknowns are resolved or flagged.
- [ ] Expected behavior is distinguished from verified implementation.
