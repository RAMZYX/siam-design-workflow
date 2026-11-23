# 09 · Motion

Smooth and unhurried. Motion guides the eye and never performs.

_Koach Brand Book v1.0 · generated from index.html_

## Easing

| Name | Value | Use |
| --- | --- | --- |
| `ease-standard` | cubic-bezier(0.4,0,0.2,1) | Hover, colour and small state changes. |
| `ease-out-soft` | cubic-bezier(0.16,1,0.3,1) | Surfaces arriving: dialogs, sheets, pages. |
| `linear` | linear | Only for continuous loops such as spinners. |

## Durations

| Duration | Use |
| --- | --- |
| 120 ms | Small state changes (dur-fast) |
| 140 ms | Overlays leaving (dur-exit) |
| 180 ms | Hover and colour (dur-base) |
| 240 ms | Overlays entering (dur-slow) |

Under reduced motion, everything renders in its final state.

## Patterns

- Dialogs rise 8 px and scale from 0.98. Sheets slide in from the right edge. Learner pages fade up 4 px.
- Pressed cards scale to 0.995.
- Under reduced motion all transform motion collapses; opacity fades remain.
