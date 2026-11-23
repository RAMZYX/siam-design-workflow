# 07 · Radius and elevation

Corner radius, borders and shadows, and the rule for when to use each.

_Koach Brand Book v1.0 · generated from index.html_

## Radius

| Token | Value | Use |
| --- | --- | --- |
| `radius-xs` | 4px | Checkboxes |
| `radius-sm` | 6px | Buttons, inputs, menus (the default) |
| `radius-md` | 8px | Tiles, dropdowns |
| `radius-lg` | 10px | Cards (12 px in Learner) |
| `radius-xl` | 12px | Large cards, slides, learner list rows |
| `radius-2xl` | 24px | Role-picker shell |
| `radius-pill` | 9999px | Status tags, avatars, switches, progress bars |

## Surface rule

Hairlines first, shadow second. Cards rest on a hairline border with shadow-xs. Interactive cards add shadow-md on hover and scale to 0.995 when pressed. Only floating layers (menus, popovers, dialogs, drawers) get shadow-lg. Never nest a card in a card: group inside with spacing and hairline dividers.

## Shadows

| Token | Console | Learner | Use |
| --- | --- | --- | --- |
| `shadow-xs` | `0 1px 2px 0 rgba(0,0,0,.05)` | `0 1px 2px 0 rgba(0,0,0,.05)` | Cards at rest · code: shadow-xs |
| `shadow-lift` | `0 4px 12px -2px rgba(0,0,0,.08), 0 2px 6px -2px rgba(0,0,0,.05)` | `0 4px 12px -2px rgba(0,0,0,.08), 0 2px 6px -2px rgba(0,0,0,.05)` | Interactive card hover · code: shadow-md |
| `shadow-float` | `0 12px 32px -8px rgba(0,0,0,.14), 0 4px 12px -4px rgba(0,0,0,.08)` | `0 12px 32px -8px rgba(0,0,0,.14), 0 4px 12px -4px rgba(0,0,0,.08)` | Menus, popovers, dialogs, drawers · code: shadow-lg |
| `shadow-halo` | `inset 0 0 0 .5px #962067` | `inset 0 0 0 .5px #962067` | Focused inputs, with the 1 px border · code: focus-within ring |

## Borders

| Use | Token | Width |
| --- | --- | --- |
| Card edge | `ring` | 1 px |
| Divider | `line` | 1 px |
| Controls | `line-strong` | 1 px |
| Focus ring | `focus` | 2 px, 2–3 px offset |
