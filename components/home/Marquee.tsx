"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useAnimationControls, useReducedMotion, useInView } from "framer-motion";

/**
 * A truly seamless infinite ticker, driven by JS pixel measurement instead of
 * CSS percentage math — removes the whole class of "loop point doesn't land
 * exactly on the duplicate boundary" bugs. Renders `children` twice back to
 * back (second copy `aria-hidden`), measures the real rendered width of the
 * first copy, and animates the track from x=0 to x=-thatExactWidth on a
 * continuous linear loop — so at the instant it resets, the two copies are
 * pixel-identical and the reset is invisible. Speed is constant regardless of
 * content width (pxPerSecond), so it never "looks stuck" on wide screens.
 *
 * Deliberately has no pause-on-hover / stop-start toggling: restarting a
 * Framer Motion tween mid-flight snaps it back to its captured start value,
 * which is exactly the kind of visible jump this component exists to avoid.
 * Keeping it to a single uninterrupted animation is what makes the loop
 * actually seamless.
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
  const wrapperRef = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLDivElement>(null);
  const [setWidth, setSetWidth] = useState(0);
  const controls = useAnimationControls();
  const prefersReducedMotion = useReducedMotion();
  // Only start (or restart) the loop once the ticker actually scrolls into
  // view — so what a visitor sees first is genuinely the beginning of the
  // sequence, not wherever a background-running loop happened to be.
  const isInView = useInView(wrapperRef, { amount: 0.4 });

  useEffect(() => {
    function measure() {
      if (setRef.current) setSetWidth(setRef.current.scrollWidth);
    }
    measure();
    const ro = new ResizeObserver(measure);
    if (setRef.current) ro.observe(setRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    if (!setWidth || prefersReducedMotion || !isInView) return;
    const from = reverse ? -setWidth : 0;
    const to = reverse ? 0 : -setWidth;
    controls.set({ x: from });
    controls.start({
      x: to,
      transition: { duration: setWidth / pxPerSecond, ease: "linear", repeat: Infinity },
    });
  }, [setWidth, controls, prefersReducedMotion, reverse, pxPerSecond, isInView]);

  return (
    <div ref={wrapperRef} className="relative flex overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-belmav-black to-transparent sm:w-28" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-belmav-black to-transparent sm:w-28" aria-hidden="true" />
      <motion.div className="flex w-max shrink-0" animate={controls} initial={false}>
        <div ref={setRef} className="flex shrink-0 items-center">
          {children}
        </div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
