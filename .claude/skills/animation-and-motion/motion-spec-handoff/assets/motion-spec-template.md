# [Feature name] - Motion Spec

| | |
|---|---|
| Owner | [Designer] |
| Engineering | [Engineer / team] |
| Platforms | [Web / iOS / Android / React Native] |
| Source | [Figma link, prototype, video, .riv or .json file] |
| Status | Draft / Ready for build / Built / Verified |
| Last updated | [Date] |

## 1. Purpose

[One or two sentences: what this motion communicates and why it exists. Example: "Shows the sheet comes from the button the user tapped, and keeps the list visible behind it so they don't lose their place."]

## 2. Trigger

[What starts it: tap, load, data change, scroll position, gesture threshold.]

## 3. Elements

| Element | Code name | Role (hero / supporting / detail) |
|---|---|---|
| | | |

## 4. Timing diagram

```
Scale: 1 char = 20ms          0ms       200ms     400ms
[Element] ([what it does])    |========|
```

## 5. Property table

| Element | Property | From | To | Delay | Duration | Easing / spring | Notes |
|---|---|---|---|---|---|---|---|
| | | | | | | | |

Tokens used: [list motion-system tokens]. Exceptions: [any value outside the tokens, with the reason, or "None"].

## 6. Exit / reverse

[The closing animation, with its own table if it differs.]

## 7. Interaction behavior

- Interruption: [retarget from current value / ignore / restart]
- Gesture: [follows finger 1:1; release velocity carried; dismiss threshold: X px or Y px/s]
- Repeated triggers: [what happens on rapid taps]

## 8. Reduced motion

[The exact alternative. Example: "150ms opacity fade, no translation; celebration replaced with a still badge."]

## 9. Haptics and sound

| Moment | Haptic | Sound | Fires on |
|---|---|---|---|
| | | | |

## 10. Delivery format

[Code / Lottie / Rive / video, and why.]

## 11. Performance

- Animated properties: [transform, opacity only?]
- Target: 60fps on [reference device]
- Asset budget: [e.g. Lottie under 250 KB]

## 12. Acceptance criteria

- [ ] [Checkable statement]
- [ ] [Checkable statement]
- [ ] Reduced motion behaves as in section 8
- [ ] Interrupting mid-animation behaves as in section 7
