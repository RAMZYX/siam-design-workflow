# 09 · Motion

Motion is feedback, not decoration. Short, functional, and off when people ask for reduced motion.

_QCS Brand Book v1.0 · generated from index.html_

## Easing

| Name | Value | Use |
| --- | --- | --- |
| `ease` | cubic-bezier(0.25,0.1,0.25,1) | Every transition in QCS today: hover, selection and the action-teal lift. |
| `linear` | linear | Only for continuous loops such as spinners. |

## Durations

| Duration | Use |
| --- | --- |
| 120 ms | Segmented control and view toggle |
| 140 ms | Action-teal button: colour, shadow and 1 px lift |
| 160 ms | Link hover (opacity .72) and the sidebar box |
| 180 ms | Sidebar Home and Back to QCS box, upper bound |

Under reduced motion, everything renders in its final state.

## Patterns

- Functional only: a transition confirms an action or a change of state.
- Hover: neutral surfaces shift to sand; a translucent white on the dark sidebar; action teal darkens and lifts 1 px. Disabled is 45% opacity and keeps its shape.
- Reduced motion is honoured on the audit screen only; there is no global rule yet. Any new motion must respect it.
- No entrance animation is defined for modals yet.
