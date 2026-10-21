# FRD Generation Standard — `frd-template.md`

> Reusable instruction file for Claude Code. Read this together with the project's `memory.md` **only when the user explicitly asks to generate an FRD**.

## 1. Goal and activation
Create a complete, developer-ready **Functional Requirements Document** after the user has completed the relevant screens and requests it. The FRD must communicate **what every screen, element, action, validation, business rule, and flow does**, enabling developers and QA to implement and test without guessing.

**Do not generate the final FRD automatically while screens are being designed.** During normal design/development, update `memory.md` instead.

## 2. Reference presentation and observed structure
Reference: [Capital Ambulance FRD](https://docs.google.com/presentation/d/1d1LGpCdmTyrHA7o6zWJ5tP7sA9NXk1ekUL4Whk6pXJI/edit?usp=sharing)

The example presentation is organized around:
1. **Executive Summary** and product capabilities.
2. **List of Users and Roles**.
3. **Platform/role divisions** (end-user mobile, super admin web, corporate admin web, CSR/nurse/doctor web).
4. **Screen-by-screen / flow-by-flow sections**, using clear screen names.
5. **User Flow** describing entry, interactions, system reactions, and destinations.
6. **Screen Elements** and UI controls when applicable.
7. **Validations and Functionalities**, including field requirements, conditional actions, and business rules.
8. **Field validation tables**, status-based logic, role handoffs, notifications, and multi-screen processes.

Preserve this functional, sequential documentation style. The accessible presentation text was reviewed; its complete visual slide layouts and embedded design images were not independently verified. **Never copy example-project business logic into another product.**

## 3. Required rules
**MUST**
- Read `memory.md` in full and use it as the primary functional input.
- Review latest approved designs, requirements, existing project design system, and verified code where available.
- Cover every in-scope screen, modal, drawer, bottom sheet, wizard step, and role-specific variant.
- Organize by **platform → role → module/flow → screen**, as in the reference presentation.
- Describe **user action → system validation → system response → visible feedback → next state/navigation**.
- Specify all functional buttons, icons, cards, tabs, menus, forms, filters, pagination, and conditional controls.
- Document required fields, format constraints, validation timing, CTA enablement, and errors.
- Document loading, empty, success, failure, permission, and status-dependent states where relevant.
- Include cross-screen workflows, role permissions, business rules, notifications, and data dependencies.
- Link each requirement to screen IDs, rule IDs, and sources.
- Add testable acceptance criteria and a coverage/open-questions report.

**MUST NOT**
- Infer functionality solely from screenshots.
- Invent API paths, time limits, password rules, error copy, permissions, integrations, or state transitions.
- Treat observed code as approved intent when it conflicts with requirements.
- Omit critical gaps or quietly choose between contradictory sources.
- Introduce new components or patterns inconsistent with the project's approved design system merely to complete documentation.
- Declare the FRD final while critical product decisions are unresolved.

## 4. Generation process
1. **Scope:** Confirm project, release, platforms, roles, modules, and completed screens.
2. **Read:** `memory.md`, approved requirements, designs, design-system docs, and relevant verified implementation.
3. **Inventory:** Match every screen and flow against the screen inventory; identify missing views and variants.
4. **Reconcile:** Check every element, validation, state, navigation, permission, and cross-screen dependency; separate approved expected behavior from observed implementation.
5. **Draft:** Follow the document outline below, with one complete screen specification per screen and dedicated sections for complex flows.
6. **Verify:** Run the quality gate; mark unresolved items `TBD — Decision Required`.
7. **Deliver:** Use the requested output format (Markdown by default; slide-ready sections if requested), with document version and references.

## 5. Required output outline

```markdown
# [PRODUCT NAME] — Functional Requirements Document
Version: [VERSION] | Date: [DATE] | Status: Draft / Review / Approved
Platforms: [PLATFORMS] | Release scope: [SCOPE]
Sources: [MEMORY VERSION, DESIGN LINKS, REQUIREMENTS]

## 1. Executive Summary
### 1.1 Product Overview
### 1.2 Product Purpose and Target Users
### 1.3 Core Capabilities
### 1.4 In Scope / Out of Scope

## 2. Users and Roles
### 2.1 Role Descriptions
### 2.2 Role Access and Permission Matrix

## 3. Product Structure
### 3.1 Platforms and Modules
### 3.2 Screen Inventory
### 3.3 Global Navigation and Shared Behavior

## 4. Global Functionalities and Rules
### 4.1 Authentication / Session / Access
### 4.2 Shared UI Interaction Rules
### 4.3 Common Validations and Business Rules
### 4.4 Notifications and Dependencies

## 5. [PLATFORM] — [ROLE] — [MODULE]
### 5.1 [SCREEN NAME] ([SCR-ID])
[Use full per-screen template below]
### 5.2 [NEXT SCREEN] ([SCR-ID])
[Repeat for EVERY screen]

## 6. End-to-End and Cross-Role Flows
## 7. Business Rules and Status Transitions
## 8. Data / APIs / Integrations / Side Effects
## 9. Acceptance Criteria and QA Scenarios
## 10. Open Questions, Conflicts and TBDs
## 11. References, Glossary and Change History
```

For presentation output: use overview slides, role slides, platform/role section dividers, one or more slides per screen/flow, and validation/state tables. Split complex screens over multiple slides rather than compressing the text.

## 6. Per-screen FRD template — repeat for EVERY screen

### Screen: [SCREEN NAME] — [SCR-ID]
**Platform / module:** `[VALUE]`  
**User role(s):** `[ROLES]`  
**Purpose:** `[GOAL]`  
**Preconditions / entry point:** `[WHEN AND FROM WHERE]`  
**Design reference:** `[LINK]`

#### A. Screen Elements
| Element | Type | Default / displayed data | Visibility or enablement rule | Action / outcome |
|---|---|---|---|---|
| `[ELEMENT]` | `[INPUT/CTA/ICON/CARD/TAB]` | `[VALUE]` | `[CONDITION]` | `[RESULT]` |

Include secondary icons, floating buttons, three-dot menus, overlays, and conditional controls.

#### B. User Flow
1. When `[PRECONDITION]`, the user lands on `[SCREEN]` and sees `[INITIAL UI]`.
2. The user `[CLICKS / TAPS / TYPES / SELECTS]`.
3. The system `[CHECKS / PROCESSES / UPDATES]`.
4. If successful, `[FEEDBACK, SAVED DATA, NEXT SCREEN]`.
5. If invalid or unsuccessful, `[ERROR, RETRY OR RECOVERY]`.
6. If the user cancels, navigates back, or returns later, `[BEHAVIOR]`.

Write separate flows for major secondary actions such as Edit, Delete, Reschedule, Filter, Download, Logout, or Submit.

#### C. Functionalities and Interaction Logic
| Rule ID | Trigger / condition | System behavior | Visible feedback | Result / navigation |
|---|---|---|---|---|
| `[INT/BR-ID]` | `[WHEN/IF]` | `[REQUIRED ACTION]` | `[UI RESPONSE]` | `[NEXT STATE]` |

Document disabled/hidden/read-only states, conditional CTAs, dialogs, loading, prevention of duplicate submission, and persistence where applicable.

#### D. Validations
| Field | Required | Input type / format | Exact rule and timing | Error behavior / message |
|---|---|---|---|---|
| `[FIELD]` | `[YES/NO]` | `[FORMAT]` | `[RULE]` | `[RESULT]` |

Include cross-field validation, server checks, uniqueness, submit-button rules, and conditional requirements. If unknown, write `TBD` rather than inventing a rule.

#### E. States and Exceptions
For each applicable state, specify **trigger → visible UI → available actions → exit/recovery**:
- Initial / default
- Loading / submitting
- Empty / no data
- Success / confirmation
- Validation failure
- Server/network failure
- Unauthorized / restricted
- Domain-specific status (pending, approved, rejected, completed, etc.)

#### F. Navigation and Dependencies
- Previous screens / entry points: `[SCR-IDs]`
- Next screens / conditional branches: `[SCR-IDs]`
- Linked cross-screen flows: `[FLOW-IDs]`
- Data passed or retained: `[DATA AND DURATION]`
- Role-based differences: `[RULES]`
- API / notification / persistence dependencies: `[CONFIRMED DETAILS OR TBD]`

#### G. Acceptance Criteria
- **AC-001:** Given `[CONDITION]`, when `[ACTION]`, then `[OBSERVABLE OUTCOME]`.
- **AC-002:** Given `[INVALID OR EDGE CONDITION]`, when `[ACTION]`, then `[ERROR / RECOVERY]`.

#### H. Traceability
**Source:** `[MEMORY SCREEN ID, DESIGN, REQUIREMENT]`  
**Requirement status:** `Confirmed / Open`  
**Implementation verification:** `Verified / Not verified`  
**Unresolved questions:** `[QUESTION IDs / NONE]`

## 7. Cross-screen / cross-role flow template
### [FLOW-ID] — [FLOW NAME]
**Actors:** `[ROLES]` | **Entry:** `[PRECONDITION]` | **Goal:** `[OUTCOME]`

| Step | Actor | Screen/state | Action | System response | Next screen/state/role |
|---|---|---|---|---|---|
| 1 | `[ROLE]` | `[SCR-ID]` | `[ACTION]` | `[VALIDATION, DATA CHANGE, FEEDBACK]` | `[NEXT]` |

Include happy path, alternate paths, errors, cancellation, role handoffs, state transitions, notifications, and recovery. Where status changes affect buttons/cards, explicitly state which controls appear in each status.

## 8. Writing style
Use **specific, observable requirements**, not marketing adjectives.

**Good:** “When all required fields pass validation, the Submit button becomes enabled. Selecting Submit starts the request; on success the user sees a confirmation and returns to the list.”

**Bad:** “The user can easily submit the form.”

Use **MUST**, **MUST NOT**, **WHEN**, **IF**, **THEN**, and exact sourced values. Approved text may be quoted; unknown copy must be `[COPY TBD]`. Explain how the system behaves, not only how the interface looks.

## 9. Conflict and evidence policy
Sources, in priority order: explicit current approved decisions → current approved requirements/designs → verified code observations → confirmed memory entries → old drafts/reference examples. If two sources disagree, document the expected behavior, observed difference, affected screen IDs, owner, and required decision. Do not silently guess. `memory.md` is a living input, not proof that old notes override newer approved requirements.

## 10. FRD quality gate
- [ ] Every in-scope screen, role variant and meaningful overlay is included.
- [ ] Every actionable element has a specified outcome.
- [ ] All user flows include entry, success, failure, back/cancel and relevant re-entry.
- [ ] Field rules, validation timing, conditional CTA behavior and error states are clear.
- [ ] Loading, empty, success, permission and domain states are addressed.
- [ ] Role permissions and cross-screen state transitions agree.
- [ ] Notifications, filters, sorting, pagination, uploads/downloads and integrations are covered when present.
- [ ] Every requirement is traceable to memory and approved sources.
- [ ] No product-specific rules were copied from the reference example.
- [ ] Developers can implement and QA can test without guessing consequential behavior.
- [ ] Open decisions are listed with impact and owner.
- [ ] Version, scope, status and source references are included.

**Ready for approval:** All critical rules confirmed.  
**Draft — decisions required:** Some critical requirements unresolved.  
**Incomplete:** Missing core screens or flows; never call final.

## 11. Reusable Claude Code command
> All screens for `[PROJECT/RELEASE]` are complete. Read `frd-template.md` and `memory.md` in full, along with approved designs and relevant verified implementation. Generate a complete developer-ready FRD for `[PLATFORMS/ROLES]`. Organize by platform, role, module, and screen. Cover every control, interaction, validation, state, navigation path, business rule, permission, dependency, notification, and acceptance criterion. Do not invent behavior; flag missing decisions as TBD. Include screen coverage and outstanding questions. Output as `[MARKDOWN / PRESENTATION / DOCUMENT]`.

## 12. Maintenance
- Update `memory.md` continuously while building screens.
- Change `frd-template.md` only when the reusable documentation standard changes.
- Generate or regenerate the final FRD **only when the user asks**.
- Keep stable screen, flow, rule, and acceptance-criteria IDs across revisions.
