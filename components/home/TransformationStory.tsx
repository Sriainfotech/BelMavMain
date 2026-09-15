"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import ScrollReveal from "../ScrollReveal";

// Matches the reference site's horizontal transformation-story strip exactly
// (component `Qp`, step array `Sh`): 8 steps, color-coded ink -> gold -> crimson.
const steps = [
  { n: "01", t: "Assess", c: "Understand the landscape as it is." },
  { n: "02", t: "Align", c: "Align technology and business priorities." },
  { n: "03", t: "Design", c: "Create the transformation blueprint." },
  { n: "04", t: "Transform", c: "Build and configure the target." },
  { n: "05", t: "Migrate", c: "Move data with reconciliation." },
  { n: "06", t: "Validate", c: "Prove readiness with evidence." },
  { n: "07", t: "Go Live", c: "A controlled, rehearsed start." },
  { n: "08", t: "Optimize", c: "Improve beyond go-live." },
];

function toneFor(i: number) {
  return i < 3 ? "ink" : i < 6 ? "gold" : "red";
}

function StepCard({ step, i }: { step: (typeof steps)[number]; i: number }) {
  const tone = toneFor(i);
  return (
    <div
      className={`relative flex h-[280px] w-[250px] md:w-[270px] shrink-0 flex-col justify-between border-2 p-7 ${
        tone === "ink"
          ? "border-belmav-black bg-belmav-black text-belmav-white"
          : tone === "gold"
          ? "border-belmav-gold bg-belmav-gold text-belmav-black"
          : "border-belmav-red bg-belmav-red text-belmav-white"
      }`}
    >
      <span className={`text-5xl font-extrabold ${tone === "gold" ? "text-belmav-black/25" : "text-belmav-white/25"}`}>
        {step.n}
      </span>
      <div>
        <h3 className="text-2xl font-extrabold tracking-tight">{step.t}</h3>
        <p className={`mt-3 text-sm leading-relaxed ${tone === "gold" ? "text-belmav-black/70" : "text-white/70"}`}>
          {step.c}
        </p>
      </div>
      {i < steps.length - 1 && (
        <ArrowRight
          className={`absolute -right-5 top-1/2 hidden h-5 w-5 -translate-y-1/2 lg:block ${
            tone === "red" ? "text-belmav-red" : "text-belmav-gold"
          }`}
          strokeWidth={3}
          aria-hidden="true"
        />
      )}
    </div>
  );
}

function ChapterCard() {
  return (
    <div className="flex h-[280px] w-[270px] shrink-0 flex-col items-start justify-center border-2 border-dashed border-belmav-black/25 p-7">
      <p className="text-lg font-extrabold text-belmav-black">Your chapter</p>
      <p className="mt-2 text-sm text-belmav-black/60">Every transformation story starts with a conversation.</p>
      <Link
        href="/contact"
        className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-belmav-red hover:text-belmav-black"
      >
        Start yours <ArrowRight size={15} />
      </Link>
    </div>
  );
}

const Header = () => (
  <ScrollReveal>
    <p className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.35em] text-belmav-red">
      <span className="h-[2px] w-10 bg-belmav-red" aria-hidden="true" />
      The Journey
    </p>
    <h2 className="max-w-3xl text-4xl sm:text-5xl font-extrabold leading-[1.04] tracking-tight text-belmav-black">
      From Legacy Complexity to <span className="text-belmav-red">Intelligent Finance.</span>
    </h2>
  </ScrollReveal>
);

/**
 * Desktop/large-screen behavior: the section pins to the viewport and vertical
 * scroll input drives the card row horizontally — the reference site's
 * scroll-jacked "journey" carousel — with a thin gradient line beneath
 * tracking progress instead of a native scrollbar.
 */
function PinnedJourney() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [extraScroll, setExtraScroll] = useState(0);

  useEffect(() => {
    function measure() {
      const track = trackRef.current;
      if (!track) return;
      // The track already ends in a spacer div matching the container's right
      // padding, so no extra buffer is added here — otherwise the carousel
      // over-scrolls and leaves dead space after the last card.
      const overflow = track.scrollWidth - window.innerWidth;
      setExtraScroll(Math.max(overflow, 0));
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -extraScroll]);

  return (
    <div ref={sectionRef} style={{ height: `calc(100vh + ${extraScroll}px)` }} className="relative">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-10">
        <div className="container-xl">
          <Header />
        </div>
        <motion.div ref={trackRef} style={{ x }} className="mt-14 flex w-max gap-6 pl-[max(4rem,calc((100vw-1440px)/2+4rem))]">
          {/* First pass through the journey */}
          {steps.map((step, i) => (
            <StepCard key={`a-${step.n}`} step={step} i={i} />
          ))}
          {/* The sequence loops once — Optimize flows straight back into Assess
              before the section releases to normal page scroll, echoing the
              ticker's seamless-loop technique instead of just stopping dead. */}
          <div aria-hidden="true" className="flex shrink-0 items-center gap-6">
            {steps.map((step, i) => (
              <StepCard key={`b-${step.n}`} step={step} i={i} />
            ))}
          </div>
          <ChapterCard />
          <div className="w-[max(4rem,calc((100vw-1440px)/2+4rem))] shrink-0" aria-hidden="true" />
        </motion.div>
        {/* Thin progress line — replaces the native scrollbar */}
        <div className="container-xl mt-8">
          <div className="h-[2px] w-full bg-belmav-black/10">
            <motion.div
              className="h-full origin-left"
              style={{
                scaleX: scrollYProgress,
                background: "linear-gradient(90deg, #000000 0%, #000000 40%, #FEC802 65%, #DD161C 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/** Mobile/touch fallback: a plain swipeable row, no scroll-jacking. */
function SwipeableJourney() {
  return (
    <div className="container-xl">
      <Header />
      <div className="mt-14 flex w-max max-w-full gap-6 overflow-x-auto pb-4">
        {steps.map((step, i) => (
          <StepCard key={step.n} step={step} i={i} />
        ))}
        <ChapterCard />
      </div>
    </div>
  );
}

export default function TransformationStory() {
  const [isDesktop, setIsDesktop] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mq.matches);
    const onChange = () => setIsDesktop(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <section className="bg-belmav-white">
      {isDesktop && !prefersReducedMotion ? <PinnedJourney /> : <SwipeableJourney />}
    </section>
  );
}
