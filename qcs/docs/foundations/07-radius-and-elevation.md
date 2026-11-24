# 07 · Radius and elevation

Corner radius, borders and shadows, and the rule for when to use each.

_QCS Brand Book v1.0 · generated from index.html_

## Radius

| Token | Value | Use |
| --- | --- | --- |
| `radius-none` | 0px | Tables, header bar |
| `radius-sm` | 8px | Buttons, inputs, selects, menus |
| `radius-md` | 12px | Segmented control, choice cards, callouts |
| `radius-lg` | 20px | Cards, modals |
| `radius-pill` | 9999px | Pills, bars, avatars, switches |

## Surface rule

White surfaces, shadow for depth. Cards are white with a 20 px radius, 20 px padding and shadow-card, with hairline dividers inside and no border. A surface stays white as it rises: depth comes from the shadow, never a darker fill. Dropdowns and modals get shadow-overlay. Table rows stay flat; striping and hairlines carry their structure. Never nest a card in a card. Only two layers are set explicitly: the sidebar (z-index 9999) and the care plan audit overlay (10000).

## Shadows

| Token | QCS | CareBrain | Use |
| --- | --- | --- | --- |
| `shadow-card` | `0 2px 10px 2px rgba(110,110,110,.06)` | `0 2px 10px 2px rgba(110,110,110,.06)` | Cards, the active view-as pill · code: --careco-shadow-card |
| `shadow-navigation` | `0 4px 4px 3px rgba(110,110,110,.06)` | `0 4px 4px 3px rgba(110,110,110,.06)` | The sidebar · code: --careco-shadow-navigation |
| `shadow-overlay` | `0 2px 10px 0 rgba(0,0,0,.10)` | `0 2px 10px 0 rgba(0,0,0,.10)` | Dropdowns, modals, the top header · code: --careco-shadow-overlay |
| `shadow-tooltip` | `4px 4px 29px rgba(15,61,60,.12)` | `4px 4px 29px rgba(19,69,186,.086)` | Tooltip bubble: teal-tinted in QCS, blue in CareBrain · code: --careco-shadow-tooltip |
| `shadow-cta` | `0 1px 2px rgba(15,61,60,.14)` | `0 1px 2px rgba(19,69,186,.14)` | Action-teal buttons only |

## Borders

| Use | Token | Width |
| --- | --- | --- |
| Card edge | `ring` | 1 px |
| Divider | `line` | 1 px |
| Controls | `line-strong` | 1 px |
| Focus ring | `focus` | 2 px, 2–3 px offset |
