"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TEXT =
  "Complex SAP transformation doesn't have to feel complex. BelMav brings deep functional expertise, disciplined delivery and a business-first approach to finance transformation—so every step creates business value.";

const GOLD_WORDS = new Set(["Complex"]);
const RED_WORDS = new Set(["business", "value."]);

function Word({ word, index, total, progress }: { word: string; index: number; total: number; progress: any }) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.15, 1]);
  const color = GOLD_WORDS.has(word) ? "text-belmav-gold" : RED_WORDS.has(word.toLowerCase()) ? "text-belmav-red" : "text-belmav-black";
  return (
    <motion.span style={{ opacity }} className={`${color} mr-[0.28em] inline-block`}>
      {word}
    </motion.span>
  );
}

export default function BeliefReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.4"],
  });
  const words = TEXT.split(" ");

  return (
    <div ref={ref}>
      <p className="text-3xl md:text-5xl font-extrabold leading-tight max-w-4xl text-balance">
        {words.map((w, i) => (
          <Word key={`${w}-${i}`} word={w} index={i} total={words.length} progress={scrollYProgress} />
        ))}
      </p>
    </div>
  );
}
