---
title: Content and Microcopy Standards
version: 1.0
scope: Reusable product writing rules
applies_to: UI labels, forms, actions, errors, empty states, notifications, and help content
---

# Content and Microcopy Standards (`content-and-microcopy.md`)

## Purpose

Define **how the product speaks** so interface text is clear, useful, consistent, accessible, and action-oriented. These are reusable defaults. Product-specific brand voice, legal language, terminology, localization, and approved copy take precedence when explicitly documented.

**MUST:** Follow the approved brand voice and product glossary, if available. Keep copy consistent with actual behavior and `memory.md`. Do not invent promises, policies, availability, timings, fees, or data outcomes.

## 1. Voice and tone

### Default voice
- **Clear:** Use familiar words and concrete descriptions.
- **Concise:** Say what is needed to decide or act; remove filler.
- **Helpful:** Explain the next step or recovery path.
- **Respectful:** Do not blame, shame, or patronize users.
- **Confident but accurate:** Do not overpromise or imply success before confirmation.
- **Inclusive:** Avoid stereotypes, unnecessary jargon, and assumptions about users.

### Tone by situation

| Situation | Tone | Example |
|---|---|---|
| Routine action | Direct and neutral | “Save changes” |
| First-time guidance | Welcoming and instructional | “Add your first project to get started.” |
| Success | Brief and specific | “Project created.” |
| Validation error | Calm and actionable | “Enter a valid email address.” |
| System failure | Transparent and helpful | “We couldn't save your changes. Try again.” |
| Destructive action | Serious and explicit | “Delete this project? This can't be undone.” |
| Sensitive or high-stakes action | Precise, reassuring without promises | “Review the details before submitting.” |

Do not use jokes, emoji, exclamation marks, or celebratory language in serious error, financial, medical, security, or destructive contexts unless explicitly approved.

## 2. Writing rules

- MUST write for the user, not the implementation team.
- MUST use active voice and concrete verbs.
- MUST front-load the most important information.
- MUST use consistent terms for the same object, role, state, and action.
- MUST match the user's mental model and the product's established terminology.
- SHOULD use sentence case for buttons, labels, messages, and headings unless brand rules specify otherwise.
- SHOULD avoid unnecessary punctuation on short labels and buttons; use complete sentences for explanatory messages.
- MUST keep visible labels and accessible names aligned.
- MUST write scannable, plain-language content; split complex instructions into steps.
- MUST distinguish actions from navigation and statuses from instructions.
- MUST NOT use copy to conceal a broken or ambiguous flow; fix the interaction and wording together.

## 3. Buttons, links, and actions

- **Button labels MUST describe the action or outcome**, usually starting with a verb: “Create project,” “Save changes,” “Send invitation,” “Download report.”
- Avoid ambiguous labels such as “Submit,” “Proceed,” “OK,” and “Click here” when a more specific verb is available.
- Use “Continue” only when moving to the next step is the meaningful action and context makes it clear.
- Use “Cancel” to abandon an operation and “Back” to return; define whether edits are discarded or preserved.
- For destructive confirmations, name the action and object: “Delete project,” “Remove 4 users.”
- For links, describe the destination: “View billing details,” not “Read more” without context.
- Keep the same action name across the initiating control, dialog, success message, and documentation.
- MUST NOT label an action “Saved” or “Sent” until the system confirms success.

## 4. Field labels, placeholders, and helper text

- Labels MUST be persistent, descriptive, and as short as possible without ambiguity.
- Placeholders MAY show an example but MUST NOT replace a label.
- Required/optional wording MUST match actual validation logic.
- Helper text SHOULD state constraints before the user encounters them, when known: “Use 8–20 characters” **only if that range is an approved requirement**.
- Use examples appropriate to the product's locale and privacy expectations.
- Avoid unnecessary “Please enter your…” repetition; “Email address” is often enough for a label.
- If a field has units, include them in the label or adjacent text: “Weight (kg).”
- Do not expose technical field names, stack traces, or database terms to end users.

## 5. Error-message formula

**Formula:** **What happened + how to fix it / what happens next**.

For inline validation, a concise correction alone is acceptable when the problem is obvious from the field context.

| Type | Avoid | Prefer |
|---|---|---|
| Required field | “Error: invalid input” | “Enter your email address.” |
| Format | “Invalid email” | “Enter a valid email address.” |
| Network | “Something went wrong” | “We couldn't load your projects. Check your connection and try again.” |
| Save failure | “Save failed (500)” | “Your changes weren't saved. Try again.” |
| Permission | “Access denied” | “You don't have permission to edit this project.” |
| Search | “Error” | “Search isn't available right now. Try again.” |

**MUST**
- Explain the problem accurately without assigning blame.
- State whether user input or previous work was saved when that matters and is known.
- Offer a realistic next step (correct, retry, contact support, return) when possible.
- Match the message to the actual system state; do not claim “offline” unless known.
- Avoid exposing sensitive account existence, private data, or security details in errors.
- Avoid internal codes in primary UI copy; if needed for support, place them separately and clearly.

**MUST NOT** invent reasons for failures, guaranteed recovery times, or support channels.

## 6. Empty-state formula

**Formula:** **What is missing + why (if useful) + next useful action**.

| Situation | Example headline | Example supporting text / action |
|---|---|---|
| First use | “No projects yet” | “Create a project to organize your work.” → **Create project** |
| No search matches | “No matching results” | “Try a different search term.” → **Clear search** |
| Filtered list empty | “No results for these filters” | “Change or clear your filters.” → **Clear filters** |
| No notifications | “You're all caught up” | “New notifications will appear here.” |
| No access | “This content isn't available” | “Ask an administrator for access.” **Only if that path exists.** |

- MUST distinguish “nothing exists” from “nothing matches current filters.”
- SHOULD offer one clear next action, not a cluster of unrelated CTAs.
- MUST NOT imply users have permission to create or access items when they do not.
- MUST NOT use generic “No data” when a useful explanation is available.

## 7. Success and confirmation messages

**Formula:** **Completed action + relevant outcome / next step**.

- “Changes saved.”
- “Invitation sent to [recipient].” **Only if delivery/submission semantics support that claim.**
- “Report is ready to download.”
- “Project deleted.”

- MUST use past tense only for confirmed completed actions.
- MUST specify partial success or queued/pending status instead of saying “Done.”
- SHOULD avoid redundant success messages when the new state itself clearly confirms the outcome, unless accessibility or risk warrants one.
- SHOULD keep transient messages concise; provide persistent information for consequences users may need to revisit.

## 8. Destructive-action microcopy

**Formula:** **Action + affected item + consequence + explicit action labels**.

Example:

```text
Title: Delete this project?
Body: This will permanently remove the project and its associated data. This can't be undone.
Primary destructive action: Delete project
Secondary action: Keep project
```

This example is valid **only if** the operation truly removes associated data permanently. Otherwise, rewrite the consequence to match the approved behavior. Do not use “Are you sure?” without specifying what will happen.

## 9. Dates, times, numbers, currencies, and units

- MUST follow the product's selected locale, language, time zone, and formatting rules.
- MUST disambiguate dates where day/month order could be misunderstood; use month names or ISO format when appropriate.
- MUST identify time zones for cross-region scheduling and avoid ambiguous “today” or “tomorrow” when context crosses time zones.
- MUST format times consistently (12-hour or 24-hour) according to locale/product settings.
- MUST use locale-appropriate digit grouping, decimal separators, and currency symbols/codes.
- MUST include units with values: “12 km,” “5 MB,” “30 min”; do not mix units without conversion or explanation.
- MUST use exact quantities only when sourced from product data; do not invent totals, percentages, or time estimates.
- MUST handle singular/plural correctly: “1 result,” “2 results.”
- SHOULD prefer relative time (“5 minutes ago”) only where clarity is not lost; show an absolute timestamp when precision matters.

## 10. Notifications and status language

- Status labels MUST be unambiguous and consistent: e.g., “Pending,” “Approved,” “Rejected,” “Completed,” **only when those states exist in the product**.
- Notifications SHOULD say what changed, what it affects, and whether the user needs to act.
- MUST distinguish “Request submitted” from “Request approved,” and “Upload started” from “Upload complete.”
- MUST avoid notifications that expose sensitive information on shared devices unless approved by product/security requirements.
- MUST define when a notification appears, disappears, persists, and links to a destination in `memory.md`.

## 11. Words and patterns to avoid

| Avoid | Why | Prefer |
|---|---|---|
| “Click here” | Vague; mouse-specific | Descriptive link/action |
| “Invalid input” | No recovery guidance | Specific correction |
| “Something went wrong” | Too vague by itself | Known failure + next step |
| “Obviously,” “Simply,” “Just” | Can sound dismissive | Direct instruction |
| “ASAP” | Ambiguous | Approved time or priority |
| “Success!” for queued work | Overstates completion | “Request submitted” |
| “Are you sure?” alone | Hides consequences | Action + consequence |
| “User error” | Blames users | Neutral problem description |
| “Master/slave,” “whitelist/blacklist” | Often outdated/unclear | Context-appropriate technical terms such as primary/replica, allowlist/blocklist |
| Unexplained acronyms | Adds cognitive load | Plain term or first-use expansion |
| “Guaranteed,” “instant,” “100% secure” | Unverifiable promise | Approved, factual description |

Avoid jargon, sarcasm, excessive enthusiasm, blame, and unnecessary legalese. Do not replace legally required terms without approval.

## 12. Accessibility and localization of copy

- MUST ensure icon-only actions have meaningful accessible names.
- MUST avoid directions based only on color, position, or shape.
- MUST write link text and labels that remain understandable out of context when practical.
- MUST leave room for translation expansion and different plural/gender rules.
- MUST avoid embedding dynamic values into strings in ways that break localization.
- MUST use approved terminology consistently across languages.
- MUST provide meaningful alt text for informative images and accessible chart descriptions where applicable; see `accessibility.md`.

## 13. Microcopy specification in functional memory

For each screen or meaningful interaction, record:

```markdown
- Screen / element ID:
- User intent:
- Visible label or message:
- Trigger and display conditions:
- Dynamic values / pluralization:
- State (loading, success, error, empty, restricted):
- Next action or link:
- Approved exact copy or COPY TBD:
- Localization / accessibility notes:
- Source / owner:
```

Do not turn example wording from this file into an approved product requirement. If exact copy is undecided, mark `[COPY TBD]`.

## 14. Content QA checklist

- [ ] Labels and actions accurately describe outcomes.
- [ ] Terms are consistent across screens and roles.
- [ ] Errors state the problem and a useful correction or next step.
- [ ] Empty states explain context and offer a relevant action when possible.
- [ ] Success messages reflect confirmed outcomes, not pending operations.
- [ ] Destructive confirmations identify consequences and affected items.
- [ ] Dates, currencies, numbers, and units follow the selected locale.
- [ ] Copy is concise, inclusive, and free from avoidable jargon.
- [ ] Visible and accessible labels are aligned.
- [ ] Dynamic strings and pluralization are localization-ready.
- [ ] No unapproved promises, limits, fees, or product rules are invented.
- [ ] Approved copy and unresolved copy decisions are recorded in `memory.md`.

## 15. Claude Code operating rules

Before writing or changing UI copy, read the project's brand/content guidelines, this file, `ux-standards.md`, `accessibility.md`, and relevant functional memory. Implement exact approved copy when available; otherwise propose clearly labeled copy for review. After changes, update `memory.md` with message triggers, states, and approval status. When an FRD is explicitly requested, use `frd-template.md` and `memory.md` to document functional messaging and conditions.
