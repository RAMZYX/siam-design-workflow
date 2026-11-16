---
name: scroll-storytelling
description: Create premium scroll-driven storytelling experiences using progressive reveals, pinned scenes, horizontal transitions, choreography, and spatial continuity. Use for editorial websites, landing pages, hero sections, problem sections, product storytelling, and Awwwards-style experiences.
---

# Scroll Storytelling Skill

Treat scrolling as a timeline.

Do not treat scroll as simply:

"element enters viewport → fade in."

## Scroll should control narrative.

Structure:

INTRODUCTION
→ CONTEXT
→ PROBLEM
→ TENSION
→ TRANSFORMATION
→ SOLUTION
→ RESOLUTION

## Pinned sections

Use pinned sections when the story needs time to unfold.

Example:

Section stays fixed.

Scroll progress controls:

text
→ image
→ transformation
→ next message
→ transition

## Horizontal movement

Use horizontal motion when content represents:

- progression
- sequence
- journey
- comparison
- timeline

Do not use horizontal scrolling simply because it looks trendy.

## Progressive reveal

Reveal information in layers.

Example:

background
→ visual
→ headline
→ supporting copy
→ CTA

Never reveal everything simultaneously.

## Scroll-linked motion

Use scroll progress carefully.

Prefer:

subtle translation
opacity
scale
clip-path
mask
horizontal movement

Avoid excessive:

parallax
rotation
blur
3D transforms

## Choreography

Scroll should feel like:

user moves
→ interface responds
→ story advances

Not:

user scrolls
→ website throws animations everywhere.

## Performance

Use transform and opacity where possible.

Avoid scroll handlers that cause excessive React re-renders.

Prefer requestAnimationFrame or appropriate animation libraries.

## Mobile

Always create a mobile-specific motion strategy.

Do not simply scale desktop scroll choreography down to mobile.

## Quality test

Ask:

"If the animation were removed, would the story become less understandable?"

If not, consider removing it.