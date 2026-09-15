"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    word: "SIMPLER",
    bg: "bg-belmav-black",
    text: "text-belmav-white",
    sub: "text-belmav-white/60",
    description:
      "Reduce unnecessary complexity. Transformation fails when complexity is accepted as inevitable. We simplify structures, processes, and decisions — so the path forward is one people actually understand.",
    from: -60,
  },
  {
    word: "SMARTER",
    bg: "bg-belmav-gold",
    text: "text-belmav-black",
    sub: "text-belmav-black/70",
    description:
      "Make better decisions with better architecture and insight. Smarter means evidence over opinion, design over drift, and technology choices anchored in business outcomes.",
    from: 60,
  },
  {
    word: "PREDICTABLE",
    bg: "bg-belmav-red",
    text: "text-belmav-white",
    sub: "text-belmav-white/75",
    description:
      "Create a disciplined transformation journey. Predictable means rehearsed cutovers, honest status, surfaced risks, and go-lives that feel like confirmations — not gambles.",
    from: -60,
  },
];

export default function VisionPillars() {
  return (
    <>
      {pillars.map((p) => (
        <section key={p.word} className={`${p.bg} overflow-hidden`}>
          <div className="container-xl py-24 md:py-32">
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <motion.h2
                initial={{ opacity: 0, x: p.from }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`text-5xl md:text-7xl font-extrabold tracking-tight ${p.text}`}
              >
                {p.word}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -p.from }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`text-lg md:text-xl leading-relaxed ${p.sub}`}
              >
                {p.description}
              </motion.p>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
