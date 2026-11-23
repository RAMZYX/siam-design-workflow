# 06 · Spacing and layout

A 2 px-based spacing scale, page padding of 16, 24 and 32 px, and a 248 px sidebar with a 64 px top bar.

_Koach Brand Book v1.0 · generated from index.html_

## Spacing scale

| Token | Value |
| --- | --- |
| `space-1` | 2 px |
| `space-2` | 4 px |
| `space-3` | 6 px |
| `space-4` | 8 px |
| `space-5` | 10 px |
| `space-6` | 12 px |
| `space-7` | 14 px |
| `space-8` | 16 px |
| `space-9` | 18 px |
| `space-10` | 20 px |
| `space-12` | 24 px |
| `space-14` | 28 px |
| `space-15` | 30 px |
| `space-16` | 32 px |
| `space-18` | 36 px |
| `space-20` | 40 px |
| `space-24` | 48 px |
| `space-28` | 56 px |

## Page layout

Every screen works from 720 to 2880 px wide, because browser zoom changes the viewport too. Lay out with flex or grid and a gap, not margins.

| Breakpoint | From | Page padding | Notes |
| --- | --- | --- | --- |
| Phones | 0 | 16 px | Single column; drawers go full width |
| sm | 640 px | 24 px | — |
| lg | 1024 px | 32 px | Collapse 3+ column grids, and their skeletons, at lg or xl |

| Measure | Value |
| --- | --- |
| Sidebar | 248 px (72 px collapsed) |
| Top bar | 64 px |
| Console content | up to 2560 px |
| Learner content | up to 1440 px |
| Learner single-column pages | up to 1040 px |
| Onboarding | up to 720 px |
| Drawer | 560 px (600 px wide variant) |
| Running text | about 72 characters |

## Web and mobile

What is shared across platforms, and what is intentionally different.

| Area | Shared | Web | Mobile |
| --- | --- | --- | --- |
| Foundations | Tokens, type, voice, status colours | — | — |
| Navigation | Role-owned sections and labels | Sidebar (248 px, 72 px collapsed) with a top bar | Bottom tab bar with a centre QR button |
| Attendance | Same states and wording | Captured in the app with location | QR attendance |
| Layout | Spacing scale, card and surface rule | 720–2880 px wide; drops mobile chrome | Phone screens |
