"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const COL_CLASSES: Record<number, string> = {
  4: "md:grid-cols-2 lg:grid-cols-4",
  5: "md:grid-cols-5",
  6: "md:grid-cols-3 lg:grid-cols-6",
  7: "md:grid-cols-4 lg:grid-cols-7",
  8: "md:grid-cols-4 lg:grid-cols-8",
};

function ArcStep({
  step,
  i,
  dark,
  progress,
  total,
}: {
  step: { phase: string; description: string };
  i: number;
  dark: boolean;
  progress: MotionValue<number>;
  total: number;
}) {
  const start = i / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.3, 1]);
  return (
    <motion.div style={{ opacity }} className="relative">
      <div
        className={`hidden md:flex h-6 w-6 border-4 ${dark ? "border-belmav-black bg-belmav-gold" : "border-belmav-white bg-belmav-red"} mb-6`}
      />
      <span className={`text-xs font-semibold uppercase tracking-wide ${dark ? "text-belmav-gold" : "text-belmav-red"}`}>
        {`0${i + 1}`}
      </span>
      <h4 className={`mt-1 text-lg font-bold ${dark ? "text-belmav-white" : "text-belmav-black"}`}>{step.phase}</h4>
      <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-belmav-white/65" : "text-belmav-black/65"}`}>
        {step.description}
      </p>
    </motion.div>
  );
}

export default function Timeline({
  steps,
  dark = false,
  scrollArc = false,
}: {
  steps: { phase: string; description: string }[];
  dark?: boolean;
  /** Opt-in: ties the connecting line and per-step reveal to scroll progress
   * through this section, instead of the default fade-up-on-view behavior. */
  scrollArc?: boolean;
}) {
  const colClass = COL_CLASSES[steps.length] || "md:grid-cols-5";
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.35"],
  });

  if (scrollArc) {
    return (
      <div ref={ref} className="relative">
        <div className="hidden md:block absolute top-6 left-0 right-0 h-[3px] bg-belmav-black/10" />
        <motion.div
          className="hidden md:block absolute top-6 left-0 h-[3px] origin-left bg-arc-full"
          style={{ scaleX: scrollYProgress }}
        />
        <div className={`grid grid-cols-1 ${colClass} gap-10 md:gap-6`}>
          {steps.map((step, i) => (
            <ArcStep key={step.phase} step={step} i={i} dark={dark} progress={scrollYProgress} total={steps.length} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className={`hidden md:block absolute top-6 left-0 right-0 h-[3px] bg-arc-full`} />
      <div className={`grid grid-cols-1 ${colClass} gap-10 md:gap-6`}>
        {steps.map((step, i) => (
          <ScrollReveal key={step.phase} delay={i * 0.08}>
            <div className="relative">
              <div
                className={`hidden md:flex h-6 w-6 border-4 ${dark ? "border-belmav-black bg-belmav-gold" : "border-belmav-white bg-belmav-red"} mb-6`}
              />
              <span className={`text-xs font-semibold uppercase tracking-wide ${dark ? "text-belmav-gold" : "text-belmav-red"}`}>
                {`0${i + 1}`}
              </span>
              <h4 className={`mt-1 text-lg font-bold ${dark ? "text-belmav-white" : "text-belmav-black"}`}>{step.phase}</h4>
              <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-belmav-white/65" : "text-belmav-black/65"}`}>
                {step.description}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
