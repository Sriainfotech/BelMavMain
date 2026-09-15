"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { transformationStages } from "@/lib/transformation";

/**
 * The SAP Transformation hub's eight-stage map: a grid of stage buttons on
 * the left driving a detail panel on the right. Stage 1 (Assessment) is
 * expanded/active by default. Structure and copy match the reference
 * site's transformation-map section (stage data `wh`).
 */
export default function TransformationMap() {
  const [active, setActive] = useState(0);
  const stage = transformationStages[active];

  return (
    <div className="mt-14 grid gap-10 lg:grid-cols-[0.55fr_0.45fr]">
      <div className="grid grid-cols-2 gap-[2px] bg-belmav-black/10 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
        {transformationStages.map((s, i) => (
          <button
            key={s.id}
            id={s.id}
            data-testid={`stage-${s.id}`}
            onClick={() => setActive(i)}
            aria-pressed={active === i}
            className={`flex min-h-[130px] scroll-mt-32 flex-col justify-between p-5 text-left transition-all duration-300 ${
              active === i ? "bg-belmav-black text-belmav-white" : "bg-belmav-white text-belmav-black hover:bg-belmav-gold"
            }`}
          >
            <span className={`text-xs font-extrabold ${active === i ? "text-belmav-gold" : "text-belmav-red"}`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-base font-extrabold tracking-tight">{s.title}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={stage.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          data-testid="stage-detail"
          className="flex flex-col justify-center border-2 border-belmav-black p-9"
        >
          <span className="text-6xl font-extrabold text-belmav-black/10">{String(active + 1).padStart(2, "0")}</span>
          <h3 className="mt-4 text-3xl font-extrabold uppercase tracking-tight text-belmav-black">{stage.title}</h3>
          <p className="mt-4 text-base leading-relaxed text-belmav-black/65">{stage.description}</p>
          <div className="mt-6 h-[3px] w-full bg-belmav-black/10">
            <motion.div
              className="h-full bg-arc-full"
              initial={{ width: 0 }}
              animate={{ width: `${((active + 1) / transformationStages.length) * 100}%` }}
              transition={{ duration: 0.6 }}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
