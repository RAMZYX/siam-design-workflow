---
name: view-transitions
description: Build page, route and shared-element transitions on the web with the View Transitions API (same-document and cross-document), Motion layout animations (layoutId), and FLIP - so elements that exist on both screens move in place instead of disappearing and reappearing. Use for route changes in SPAs and multi-page sites, list-to-detail and card-to-modal expansions, tab and step changes, theme switches, and whenever the user mentions page transitions, shared element transitions, morphing between screens or "make navigation feel smooth". For native apps use native-motion instead.
---

# View Transitions

Spatial continuity: when an element exists on both screens, it should travel from where it was to where it is going. The user's eye follows it and never loses their place.

## 1. Choose the technique

| Situation | Use |
|---|---|
| Route change in an SPA (React Router, Next.js App Router, Vue, Svelte, Astro islands) | Same-document View Transitions (`document.startViewTransition`) |
| Multi-page site with full page loads (static sites, server-rendered, Astro) | Cross-document View Transitions (`@view-transition { navigation: auto; }`) |
| Component-level morph inside React (card expands to modal, tab underline, reorder) | Motion `layout` / `layoutId` |
| Framework with no support, or full control needed | FLIP (measure First and Last, Invert, Play) |

Browser support (October 2026): same-document transitions work in Chrome, Edge, Safari 18+ and Firefox 144+. Cross-document transitions work in Chrome/Edge 126+ and Safari 18.2+; treat Firefox as unsupported and let it navigate normally. Always feature-detect and treat the transition as an enhancement.

## 2. Same-document transitions

```js
function navigate(update) {
  if (!document.startViewTransition || matchMedia("(prefers-reduced-motion: reduce)").matches) {
    update();
    return;
  }
  document.startViewTransition(() => update());
}
```

`update` must change the DOM synchronously or return a promise that resolves once the new state is rendered. In React, wrap the state change in `flushSync` inside the callback, or use the framework's built-in support where it exists (for example React Router's `viewTransition` prop on `Link`, or Astro's `<ClientRouter />`). Check the installed framework version for current support before hand-rolling.

Give shared elements the same `view-transition-name` on both screens:

```css
.product-card img { view-transition-name: var(--vt-name); }   /* set per item, e.g. style="--vt-name: product-42" */
.product-hero img  { view-transition-name: var(--vt-name); }
```

Each name must be unique on the page at the moment of the snapshot. For lists, set the name only on the clicked item, or use `view-transition-name: match-element` where supported.

## 3. Cross-document transitions

On both pages:

```css
@view-transition { navigation: auto; }
```

Then use the same `view-transition-name` on matching elements across the two pages. The transition runs only for same-origin navigations. Keep the new page fast: a slow load delays the transition.

## 4. Styling the transition

The browser builds a pseudo-element tree:

```
::view-transition
  ::view-transition-group(name)
    ::view-transition-image-pair(name)
      ::view-transition-old(name)
      ::view-transition-new(name)
```

Default is a cross-fade of the whole page (`root`) plus position/size morph for named groups. Customize with motion-system tokens:

```css
::view-transition-group(*) {
  animation-duration: var(--duration-slow, 400ms);
  animation-timing-function: var(--ease-move, cubic-bezier(0.25, 1, 0.5, 1));
}

/* Quicker, quieter page cross-fade so the shared element leads */
::view-transition-old(root) { animation: 150ms ease-out both fade-out; }
::view-transition-new(root) { animation: 220ms var(--ease-enter) 60ms both fade-in; }

@keyframes fade-out { to { opacity: 0; } }
@keyframes fade-in { from { opacity: 0; } }
```

Group styling for many elements at once with `view-transition-class`:

```css
.card { view-transition-class: card; }
::view-transition-group(*.card) { animation-duration: 300ms; }
```

Direction-aware transitions (forward vs back): set a class or data attribute on `<html>` before starting the transition (for example `data-nav="back"`) and select on it, or use view transition types where supported (`document.startViewTransition({ update, types: ["back"] })` with `:active-view-transition-type(back)`).

## 5. Motion layout animations (React)

```tsx
import { motion, AnimatePresence } from "motion/react";

<motion.div layoutId={`card-${item.id}`} onClick={() => setOpen(item.id)}>
  <motion.img layoutId={`img-${item.id}`} src={item.src} />
</motion.div>

<AnimatePresence>
  {open && (
    <motion.div layoutId={`card-${open}`} transition={{ type: "spring", visualDuration: 0.4, bounce: 0 }}>
      <motion.img layoutId={`img-${open}`} src={...} />
    </motion.div>
  )}
</AnimatePresence>
```

Use `layout` on an element whose size or position changes; `layoutId` to connect two different elements. Wrap siblings that should animate together in `<LayoutGroup>`. Text inside a scaling container can distort; give text its own `layout="position"`.

## 6. FLIP (fallback)

```js
const first = el.getBoundingClientRect();
applyNewLayout();                                  // move the element in the DOM
const last = el.getBoundingClientRect();
const dx = first.left - last.left, dy = first.top - last.top;
const sx = first.width / last.width, sy = first.height / last.height;
el.animate(
  [{ transformOrigin: "top left", transform: `translate(${dx}px, ${dy}px) scale(${sx}, ${sy})` },
   { transformOrigin: "top left", transform: "none" }],
  { duration: 300, easing: "cubic-bezier(0.25, 1, 0.5, 1)" },
);
```

## 7. Design rules

- **One hero per transition.** Name the element the user tapped and let everything else cross-fade quietly. Many named elements moving at once reads as chaos.
- **Share only what is really the same.** An image, logo or label that appears on both pages can travel. Two different sentences (a card teaser and a page headline) can't: morphing between them looks like a glitch. Check the actual content on both sides before naming elements.
- **Don't animate twice.** If the destination already has its own entrance (for example a word-by-word headline reveal), don't also make that element a shared element. Let it keep its entrance and start it as the shared element lands.
- **Direction matches space.** Forward moves content left or up; back reverses it. Tabs move toward the selected tab's side.
- **Emerge from the trigger.** A modal or detail page grows from the card that opened it, and returns there on close.
- **Fast enough not to block.** Page transitions use `duration-slow` (400ms) at most; the page must be usable immediately after.
- **Aspect ratio changes** distort snapshots. For images that change ratio, use `object-fit: cover` on both and animate the group, or crop with `overflow: clip` on the group.
- **Reduced motion**: skip the transition (instant update) or keep only a short root cross-fade:
  ```css
  @media (prefers-reduced-motion: reduce) {
    ::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*) { animation: none !important; }
  }
  ```

## 8. Verify

- Test back and forward buttons, not just links.
- Test interrupting: click a second link mid-transition. It should finish or skip cleanly, never freeze.
- Slow it down in DevTools (Animations panel, 10% speed) and step through it.
- Check that focus moves to the new content and screen readers announce the new page; the visual transition doesn't do this for you.
- Run motion-review.
