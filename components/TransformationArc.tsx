"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Props = {
  progress?: number; // 0 - 1
  className?: string;
  strokeWidth?: number;
  showSquares?: boolean;
  animate?: boolean;
  /** Seconds the draw + square entrance choreography is based on (matches reference `duration` prop). */
  duration?: number;
};

// Reference reproduces 4 solid squares clustered near the top-right of the
// arc's endpoint (source: ecc-to-modern.emergent.host bundle, component `Ph`,
// array `Eh`). Positions below are proportionally re-mapped from the
// reference's 700x290 viewBox onto this component's 1000x300 viewBox.
const SQUARES = [
  { x: 851, y: 27, s: 40 },
  { x: 926, y: 12, s: 22 },
  { x: 934, y: 64, s: 14 },
  { x: 857, y: 79, s: 19 },
];

/**
 * The BelMav Arc — signature transformation motif.
 * Sweeps BLACK -> GOLD -> RED, parameterized by progress (0-1).
 */
export default function TransformationArc({
  progress = 1,
  className = "",
  strokeWidth = 6,
  showSquares = true,
  animate = true,
  duration = 1.6,
}: Props) {
  const pathLength = 1000;
  const offset = pathLength - pathLength * Math.max(0, Math.min(1, progress));

  // Wherever the arc appears on the site, it should draw in — black to gold to
  // red, with the red squares landing at the end — the moment it scrolls into
  // view, not just once on initial page load. `useInView` retriggers the draw
  // choreography (via a fresh key on the animated bits) each time the arc
  // enters the viewport for the first time.
  const ref = useRef<SVGSVGElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const shouldDraw = animate && isInView;

  return (
    <svg
      ref={ref}
      viewBox="0 0 1000 300"
      fill="none"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        {/* Gradient stops match the reference site's arc gradient exactly:
            black holds through 42%, transitions to gold at 58%, to red by 80%. */}
        <linearGradient id="belmavArcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#000000" />
          <stop offset="42%" stopColor="#000000" />
          <stop offset="58%" stopColor="#FEC802" />
          <stop offset="80%" stopColor="#DD161C" />
        </linearGradient>
      </defs>
      <path
        d="M 20 250 C 250 250, 300 50, 500 50 C 700 50, 750 250, 980 250"
        stroke="url(#belmavArcGradient)"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={pathLength}
        style={{ strokeDashoffset: animate ? (isInView ? undefined : pathLength) : offset }}
      >
        {shouldDraw && (
          <animate
            attributeName="stroke-dashoffset"
            from={pathLength}
            to={offset}
            dur={`${duration}s`}
            fill="freeze"
            calcMode="spline"
            keySplines="0.16 1 0.3 1"
            keyTimes="0;1"
          />
        )}
      </path>
      {showSquares &&
        SQUARES.map((sq, i) =>
          animate ? (
            <motion.rect
              key={i}
              x={sq.x}
              y={sq.y}
              width={sq.s}
              height={sq.s}
              fill="#DD161C"
              style={{ originX: `${sq.x + sq.s / 2}px`, originY: `${sq.y + sq.s / 2}px` }}
              initial={{ scale: 0, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
              transition={{ delay: duration * 0.75 + i * 0.09, type: "spring", stiffness: 300, damping: 16 }}
            />
          ) : (
            <rect key={i} x={sq.x} y={sq.y} width={sq.s} height={sq.s} fill="#DD161C" />
          )
        )}
    </svg>
  );
}
