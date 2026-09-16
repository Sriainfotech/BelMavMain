"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useAnimationControls } from "framer-motion";

/**
 * A truly seamless infinite ticker, driven by JS pixel measurement instead of
 * CSS percentage math.
 *
 * Root-cause fix: rendering exactly 2 copies of the content only loops
 * seamlessly if a single copy's width is already ≥ the container's width.
 * The ticker spans the full viewport, but a short set of tags (e.g. the
 * 3-word "SIMPLER / SMARTER / MORE PREDICTABLE" row) can easily be narrower
 * than that — so the track runs out of duplicated content before the reset
 * point, and the loop visibly jumps/snaps once per cycle. Fix: measure both
 * the container and a single copy's width, and render however many copies
 * are needed so the total track is always at least 2× the container width —
 * then translate by exactly one copy-width per loop, repeating forever.
 */
export default function Marquee({
  children,
  pxPerSecond = 45,
  reverse = false,
}: {
  children: ReactNode;
  pxPerSecond?: number;
  reverse?: boolean;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLDivElement>(null);
  const [setWidth, setSetWidth] = useState(0);
  const [copies, setCopies] = useState(2);
  const controls = useAnimationControls();
  // NOTE: deliberately NOT gating on prefers-reduced-motion here. A slow,
  // purely decorative label ticker (no large-amplitude motion, no flashing)
  // is generally fine to keep running per WCAG guidance, and gating it
  // silently disabled the whole component with zero visible error for any
  // visitor whose OS has "reduce motion" / "animation effects" turned off.

  useEffect(() => {
    function measure() {
      const containerWidth = containerRef.current?.offsetWidth ?? 0;
      const oneCopyWidth = setRef.current?.scrollWidth ?? 0;
      if (!oneCopyWidth) return;
      setSetWidth(oneCopyWidth);
      // Always render at least one extra full copy beyond what's strictly
      // needed to cover the container, so translating by exactly one
      // copy-width still leaves a full container's worth of content ahead —
      // no gap, regardless of how narrow a single copy is relative to the
      // (full-bleed, viewport-wide) container.
      const needed = Math.max(2, Math.ceil(containerWidth / oneCopyWidth) + 2);
      setCopies(needed);
    }
    measure();
    const ro = new ResizeObserver(measure);
    if (containerRef.current) ro.observe(containerRef.current);
    if (setRef.current) ro.observe(setRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    if (!setWidth) return;
    const from = reverse ? -setWidth : 0;
    const to = reverse ? 0 : -setWidth;
    controls.set({ x: from });
    controls.start({
      x: to,
      transition: { duration: setWidth / pxPerSecond, ease: "linear", repeat: Infinity },
    });
  }, [setWidth, controls, reverse, pxPerSecond]);

  return (
    <div ref={containerRef} className="relative flex overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-belmav-black to-transparent sm:w-28" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-belmav-black to-transparent sm:w-28" aria-hidden="true" />
      <motion.div className="flex w-max shrink-0" animate={controls} initial={false}>
        {Array.from({ length: copies }).map((_, i) => (
          <div
            key={i}
            ref={i === 0 ? setRef : undefined}
            className="flex shrink-0 items-center"
            aria-hidden={i > 0}
          >
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
