/* Scroll progress measured directly from layout geometry each frame.
   motion's useScroll delegates to the browser's native ScrollTimeline /
   ViewTimeline where available; on real-device iOS Safari that machinery
   misreports pinned sections (scene layers vanish, story compresses), so
   these helpers read getBoundingClientRect instead — the value can never
   disagree with what is actually rendered. */

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

/** Progress of a pinned (sticky-inside) section: 0 when its top reaches the
    viewport top, 1 when its bottom meets the viewport bottom.
    Equivalent to useScroll offset ["start start", "end end"].
    Pass a stable viewportH (useStableVh) so mobile toolbar churn cannot
    wobble the progress mid-scroll. */
export function pinProgress(el: HTMLElement, viewportH?: number): number {
  const vh = viewportH || window.innerHeight;
  const r = el.getBoundingClientRect();
  const span = r.height - vh;
  if (span <= 0) return 0;
  return clamp01(-r.top / span);
}

/** Progress of a passing section: 0 as its top enters at the viewport bottom,
    1 as its bottom leaves at the viewport top.
    Equivalent to useScroll offset ["start end", "end start"]. */
export function passProgress(el: HTMLElement, viewportH?: number): number {
  const vh = viewportH || window.innerHeight;
  const r = el.getBoundingClientRect();
  const span = r.height + vh;
  if (span <= 0) return 0;
  return clamp01((vh - r.top) / span);
}
