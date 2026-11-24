# 06 · Spacing and layout

A base-4 spacing scale, a 100 px teal sidebar and a 64 px header, on desktop screens from 1180 px up.

_QCS Brand Book v1.0 · generated from index.html_

## Spacing scale

| Token | Value |
| --- | --- |
| `space-xxs` | 4 px |
| `space-xs` | 8 px |
| `space-sm` | 12 px |
| `space-md` | 16 px |
| `space-lg` | 20 px |
| `space-xl` | 24 px |
| `space-xxl` | 28 px |
| `space-section` | 48 px |

## Page layout

QCS is a desktop product, fluid across desktop widths. The shell is at least 1180 px wide and content is capped at 1820 px and centred. Check every screen at 1280, 1440 (the reference), 1600, 1920 and 2560 px. Reduce columns before cards get narrower than about 270 px.

| Width | What changes | Where |
| --- | --- | --- |
| 1501 px and up | Overview card flexes; Service users card fixed at 300 px | Dashboard |
| 1261–1500 px | Service users card narrows to 220 px; cards use 18 × 16 px padding | Dashboard |
| 1200 px and below | Stat columns go from 3 to 2, with a 24 px row gap | Dashboard |
| 1180 px and below | Sections stack and the gap becomes 20 px | Dashboard |
| 1024 px and below | Stat cell dividers are removed | Dashboard |

| Measure | Value |
| --- | --- |
| Sidebar | 100 px, full height |
| Sidebar item | 75 px tall, 23 px icon over a 12 px label |
| Top header | 64 px, sticky |
| Shell minimum | 1180 px |
| Content maximum | 1820 px, centred |
| Control heights | 38 px actions · 42 px list search and filters · 48 px form fields and the main add button |
| Card padding | 20 px (usage meter 20 × 22 px) |
| Card header to content | 30 px |
| Between dashboard cards | 16 px |
| Modal | 520 px wide |
| Audit screen | 62 px top bar, 300 px sticky sidebar, report up to 1360 px |

## Web and mobile

What is shared across platforms, and what is intentionally different.

| Area | Shared | Web | Mobile |
| --- | --- | --- | --- |
| Foundations | Tokens, type, icons, voice, status colours | Admin panel, 1180 px and up | No mobile layout |
| Brands | Every component and structure token | QCS and CareBrain differ only in colour tokens | — |
| Navigation | Labels and their order | 100 px teal sidebar and 64 px header | — |
| Layout | Spacing scale, card rule | Fluid from 1180 to 1820 px | — |
