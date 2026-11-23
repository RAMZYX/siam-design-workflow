# 07 · Radius and elevation

Corner radius, borders and shadows, and the rule for when to use each.

_Cura42 Brand Book v2.2 · generated from index.html_

## Radius

| Token | Value | Use |
| --- | --- | --- |
| `radius-xs` | 2px | Dark-band boxes |
| `radius-sm` | 8px | Small chips |
| `radius-md` | 12px | Inputs, alerts |
| `radius-lg` | 18px | Menus, tables |
| `radius-xl` | 28px | Cards |
| `radius-2xl` | 32px | Feature panels |
| `radius-pill` | 9999px | Buttons, tags |

## Surface rule

Cards rest with a 1 px ring and no shadow. A shadow appears only on hover for linked cards and on floating layers (menus, toasts). Never combine a border and a resting shadow.

## Shadows

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `shadow-xs` | `0 1px 2px rgba(26,22,18,.04)` | `0 1px 2px rgba(0,0,0,.3)` | Resting chips |
| `shadow-lift` | `0 30px 60px -34px rgba(26,22,18,.4)` | `0 40px 80px -40px rgba(0,0,0,.6)` | Card hover |
| `shadow-float` | `0 24px 48px -24px rgba(26,22,18,.35)` | `0 24px 48px -24px rgba(0,0,0,.6)` | Menus, toasts |
| `shadow-halo` | `0 0 0 4px rgba(199,51,90,.14)` | `0 0 0 4px rgba(238,122,151,.2)` | Focused inputs |

## Borders

| Use | Token | Width |
| --- | --- | --- |
| Card edge | `ring` | 1 px |
| Divider | `line` | 1 px |
| Controls | `line-strong` | 1 px |
| Focus ring | `focus` | 2 px, 2–3 px offset |
