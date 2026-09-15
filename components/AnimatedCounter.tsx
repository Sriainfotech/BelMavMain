"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/**
 * AnimatedCounter — for qualitative / labeled counters only.
 * Never used to display fabricated statistics.
 */
export default function AnimatedCounter({
  value,
  suffix = "",
  label,
  dark = false,
}: {
  value: number;
  suffix?: string;
  label: string;
  dark?: boolean;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame: number;
    const duration = 1200;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min(1, (now - start) / duration);
      setDisplay(Math.round(progress * value));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5 }}>
      <span className={`text-4xl md:text-5xl font-extrabold ${dark ? "text-belmav-white" : "text-belmav-black"}`}>
        {display}
        {suffix}
      </span>
      <p className={`mt-2 text-sm ${dark ? "text-belmav-white/60" : "text-belmav-black/60"}`}>{label}</p>
    </motion.div>
  );
}
