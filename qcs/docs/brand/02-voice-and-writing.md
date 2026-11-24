# 02 · Voice and writing

Clear, direct, concise, professional and action-oriented. Match what the product already says, in British English. QCS does not need a new brand voice; it needs the same words every time.

_QCS Brand Book v1.0 · generated from index.html_

## Our voice

| Trait | What it means |
| --- | --- |
| Clear | Say what is happening and what the person can do next. |
| Direct | Short imperative buttons. No explanatory copy inside compact controls. |
| Honest | Never imply certainty the system does not have. Unread is “—”, not 0. |

## Tone by situation

The voice stays the same. The tone changes with what the reader is doing.

| Situation | How it sounds | Example | Why it works |
| --- | --- | --- | --- |
| Guiding | Plain, names the next step | Start by pressing Add service users. | Tells the manager exactly what to do. |
| Informing | Factual, no extra words | Read from Service users | Says where the data comes from. |
| Warning | Factual, never alarming, amber | 2 care plan audits left this month | States the fact before it becomes a problem. |
| Blocking | States the count and the reason | No care plan audits left this month. You have used all 10. | Explains why the action is unavailable. |
| Responding to a problem | What happened, then what to do | Something went wrong. Please try again later. | Calm, with a way forward. |
| Confirming | Past tense, plain | AI model updated successfully | Closes the loop. |
| Disabled reason | One short line in a tooltip | Upload a care plan first | Explains why a control is unavailable. |

## Writing principles

**Do**

- Use sentence case everywhere: titles, buttons, tabs, table headers and menu items.
- Start buttons with a verb: “Add service users”, “Request increase”, “Run audit”.
- Use product words: organisation, service user, care professional, care plan.
- Write errors that say what happened and what to do next.
- Spell out allowance counts: “7 of 10 used”.
- Write in British English: organisation, colour, centre.

**Don't**

- Use code words in visible copy: bot, patient, user ID.
- Write “Click here” or “OK” for an action.
- Use exclamation marks or filler such as “Oops!”.
- Use Title Case for titles, buttons or headers.
- Show 0 for a value that has not loaded; show “—”.
- Let colour alone carry a status; every status has a word.

## Writing for care

- Call a person receiving care a service user, never a patient or client.
- Call staff care professionals: carers and managers.
- Keep care terms as the provider writes them. Don’t reword a care plan or a clinical term.
- PAL audit: say “care plans to update”, “areas to update” and “Not covered”; write “Date of last review”, and date-stamp every review.
- State what the audit found, never more: “It fully covers 4 of 11 PAL areas, partly covers 4 and misses 3.”
- Never imply a clinical judgement the system has not made.

## UI writing patterns

| Element | Pattern | Write | Not | Why it works |
| --- | --- | --- | --- | --- |
| Button | Verb first, sentence case | Add service users | Click here | Says exactly what happens. |
| Field label | A noun, sentence case | Email address | Enter Your Email: | Short labels scan faster. |
| Helper text | One line that helps before the mistake | We send the invitation to this address. | Required | Explains what to enter, not that it is needed. |
| Validation message | What went wrong and how to fix it | Enter a valid email address, like name@organisation.co.uk. | Invalid email | Tells people how to fix it. |
| Empty state | What is missing and the next step | You have no service users yet. Start by pressing Add service users. | No data | Explains the blank and what fills it. |
| Loading message | Name what is loading | Loading service users… | Please wait | Names the thing instead of being vague. |
| Error | What happened, plus an action | Something went wrong. Please try again later. | Error 500 | States the problem and the way forward. |
| Confirmation | Ask the question, then state the consequence; negative left, affirmative right | Archive Tom Hughes? Tom will move to Archived. No, cancel / Yes, archive | Are you sure? OK | Names the person and what will happen. |
| Modal title | A noun phrase | Request a higher limit | Limit Increase Request Form | Short and in sentence case. |
| Disabled reason | A tooltip that says why | Upload a care plan first | Disabled | Explains what unlocks the control. |

## Formats

| Thing | Write it as |
| --- | --- |
| Allowance use | 7 of 10 · 70% · 8 of 10 used this month |
| Counts | Tabular figures, so numbers do not jitter between refreshes |
| Unknown or not loaded | — (an em dash, never 0) |
| Dates | Not decided. The app shows “Renews on Nov 28, 2026”; “28 Nov 2026” in prose and 28/11/2026 in tables is proposed |
| Pagination | Rows per page · 1–10 of 48 |
| Spelling | British English: organisation, colour, licence (noun), centre |
| Case | Sentence case everywhere; keep acronyms in capitals: QCS, PAL, AI |

## Word list

| Use | Avoid | Why |
| --- | --- | --- |
| Organisation | Bot, organization | “Bot” is legacy code vocabulary; British spelling. |
| Service user | Patient, client | The person receiving care. |
| Care professional | Staff, employee | A carer or a manager. |
| Care plan audit | Scan, check | The product name for the monthly audit. |
| Care plans to update | Plans to fix | PAL audit wording agreed with QCS. |
| Areas to update | What’s missing | PAL audit wording agreed with QCS. |
| Not covered | Missing | PAL audit area status. |
| Date of last review | Review due | Each review is date-stamped. |
| Request increase | Upgrade, buy more | The allowance action. |
| — | 0, N/A | For values that have not loaded. |

## Length guide

| Element | Aim for | Limit |
| --- | --- | --- |
| Button | 2–3 words | 25 characters |
| Field label | 1–3 words | 30 characters |
| Helper text | One sentence | 90 characters |
| Validation message | One sentence | 110 characters |
| Toast | Title and one line | 40 and 80 characters |
| Dialog title | A question or an action | 8 words |
| Empty state | Title and one line | 40 and 100 characters |

## Before you publish

- Accessibility: write link and button text that makes sense on its own; don’t refer to colour or position (“the red button”); give meaningful images alt text.
- Readability: use familiar words and sentences under 20 words. Read it aloud once.
- Length: stay within the length guide. Text can grow by up to 40% when translated.
- Localisation: write whole sentences instead of joining fragments; avoid idioms and puns; keep text out of images; format dates, times and numbers by locale.
