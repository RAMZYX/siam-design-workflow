---
name: motion-review
description: Critically review implemented animations - web UI, Lottie files, Figma motion - for premium quality, timing, easing, hierarchy, performance, accessibility, and unnecessary motion, by actually watching the rendered frames. Use after implementing any significant animation, and after every Lottie build.
---

# Motion Review

Act as a strict senior motion designer reviewing another designer's work.

Do not praise the animation automatically.

Find problems.

## 0. Watch it first

Never review motion only by reading code. Capture what actually renders.

**Web (CSS, WAAPI, Motion)**
- Open the page in the browser and slow everything down:
  `document.getAnimations().forEach(a => a.playbackRate = 0.1)`
- To freeze a moment: `document.getAnimations().forEach(a => { a.pause(); a.currentTime = 150 })`, then screenshot. Step through start, each stagger step, peak and settle.
- JavaScript-driven springs may not appear in `getAnimations()`. For those, record a video (Playwright `recordVideo`) and pull frames with `ffmpeg -i video.webm -vf fps=20 frame_%03d.png` if ffmpeg is installed, or screenshot rapidly after triggering.
- Trigger the interaction twice quickly to check that it retargets smoothly instead of jumping or restarting.

**Lottie**
- Run lottie-animator's `scripts/validate-lottie.mjs` first.
- Render frames 0, the midpoint, `op - 1` and each major keyframe (lottie-web `anim.goToAndStop(frame, true)`, or the text-to-lottie player at `?frame=N`). For loops, compare the first and last frames.

**Figma**
- Use `export_video` and sample frames, as described in figma-use-motion.

**Reduced motion**
- Emulate it (Playwright `page.emulateMedia({ reducedMotion: "reduce" })` or the DevTools Rendering panel) and watch again.

If you could not watch the animation, write "Not watched: reviewed from code only" at the top of the review.

Review:

## 1. Timing

Is anything too slow?

Is anything too fast?

Do durations, curves and springs match motion-system (or the project's own tokens)? List every hard-coded value that doesn't.

Are transitions appropriately sequenced?

## 2. Easing

Does movement feel physical?

Are there too many identical easing curves?

## 3. Hierarchy

What does the eye notice first?

Is that intentional?

## 4. Choreography

Does one movement cause another?

Or do things simply appear independently?

## 5. Restraint

Identify anything unnecessary.

Ask:

"Would this animation become better if this movement were removed?"

## 6. Brand

Does motion feel appropriate for the product?

## 7. Performance

Check:

- layout thrashing
- excessive DOM updates
- unnecessary re-renders
- expensive filters
- oversized assets
- animation frame drops

## 8. Mobile

Check the animation at:

320px
375px
390px
430px

## 9. Accessibility

Check reduced motion.

## Output

Return:

### KEEP
What already works.

### FIX
What needs refinement.

### REMOVE
What is unnecessary.

### POLISH
Small details that would make it feel premium.

Then implement the improvements.