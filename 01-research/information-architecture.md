---
project: "[PROJECT NAME]"
owner: "[DESIGNER]"
status: Draft
version: "0.1"
last_updated: "[YYYY-MM-DD]"
---
# Information Architecture — [Project Name]

**Designer instructions:** Replace the example hierarchy and all placeholders with the project's actual app/site structure. Maintain this file when screens, navigation, labels, or roles change. Align screen IDs with user flows and FRD.

## 1. Context
| Attribute | Designer input |
|---|---|
| Project / release | `[PROJECT / RELEASE]` |
| Platforms | `[WEB / MOBILE / ADMIN]` |
| Audiences / roles | `[ROLES]` |
| Top user tasks | `[TASKS]` |
| Figma / visual sitemap | `[LINK]` |
| Flows / FRD | `[LINKS]` |
| In / out of scope | `[BOUNDARIES]` |

## 2. Sitemap / hierarchy
```text
[APP ROOT]
├── [PRIMARY SECTION A] (NAV-01)
│   ├── [PAGE A1] (SCR-001)
│   └── [PAGE A2] (SCR-002)
└── [PRIMARY SECTION B] (NAV-02)
    └── [PAGE B1] (SCR-003)
```
**Diagram link:** `[LINK]`

## 3. Page inventory
| Screen ID | Page name | Parent | Navigation depth | Route / URL | Purpose | Visible to roles | Design |
|---|---|---|---|---|---|---|---|
| SCR-001 | `[NAME]` | `[NAV-01]` | `2` | `[ROUTE / N/A]` | `[PURPOSE]` | `[ROLES]` | `[LINK]` |

**Overlays and non-page views:** `[MODALS / DRAWERS / SHEETS WITH SCREEN IDS]`

## 4. Navigation levels
| Level | Pattern | Items | Placement | Active state | Responsive behavior |
|---|---|---|---|---|---|
| Primary | `[SIDEBAR / TOP / BOTTOM]` | `[ITEMS]` | `[POSITION]` | `[RULE]` | `[RULE]` |
| Secondary | `[TABS / SUBNAV]` | `[ITEMS]` | `[POSITION]` | `[RULE]` | `[RULE]` |
| Contextual | `[BACK / BREADCRUMBS / MENU]` | `[ITEMS]` | `[POSITION]` | `[RULE]` | `[RULE]` |

### Navigation behavior
- Default landing page by role: `[RULE]`
- Back, close, and browser history: `[RULE]`
- Direct URLs / deep links: `[RULE]`
- Unauthorized / nonexistent routes: `[RULE]`
- Unsaved changes on navigation: `[RULE]`
- Navigation collapse / mobile adaptation: `[RULE]`

## 5. Role visibility and access
Visibility and authorization are separate; document both.
| Page / nav ID | Role A | Role B | Role C | View/edit permission | Direct-link behavior |
|---|---|---|---|---|---|
| `[ID]` | `Visible / Hidden` | `Visible / Hidden` | `Visible / Hidden` | `[PERMISSION]` | `[ALLOW / DENY / REDIRECT]` |

## 6. Naming and content grouping
| Group / label | Child pages | Why grouped | Approved label | Status |
|---|---|---|---|---|
| `[NAV-ID]` | `[SCREENS]` | `[RATIONALE]` | `[LABEL]` | `[CONFIRMED / TBD]` |

## 7. Cross-navigation and exceptions
| From screen | Trigger | Destination | Conditions | Back behavior | Flow ID |
|---|---|---|---|---|---|
| `[SCR-ID]` | `[ACTION]` | `[SCR-ID]` | `[RULE]` | `[RULE]` | `[FLOW-ID]` |

## 8. Open IA questions
| ID | Question | Impact | Owner | Status |
|---|---|---|---|---|
| IA-Q01 | `[QUESTION]` | `[IMPACT]` | `[OWNER]` | `Open` |

## Designer checklist
- [ ] All screens have a parent, purpose, and clear entry path.
- [ ] No orphan pages, dead ends, or contradictory routes.
- [ ] Primary, secondary, and contextual navigation documented.
- [ ] Role-based visibility and direct-link access documented.
- [ ] Responsive navigation specified.
- [ ] Labels are clear and consistent with product microcopy.
- [ ] Sitemap, flow files, design screens, and FRD agree.
- [ ] Unconfirmed navigation or permission rules marked TBD.

## Change history
| Date | Version | Changed hierarchy / navigation | Approval |
|---|---|---|---|
| `[DATE]` | `[VERSION]` | `[DETAILS]` | `[SOURCE]` |
