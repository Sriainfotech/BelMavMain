"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

// Hub-and-spoke node positions (percent, on a 100x100 grid) and copy match the
// reference site's Finance Transformation Canvas exactly (component `lm`, node
// array `om`), default-active node "sap-finance".
const spokes = [
  { id: "sap-finance", label: "SAP Finance", x: 50, y: 8, desc: "A finance core designed for clarity, control, and speed.", href: "/expertise/sap-finance", linkLabel: "Explore SAP Finance" },
  { id: "controlling", label: "Controlling", x: 88, y: 26, desc: "Cost and profitability insight that steers decisions.", href: "/expertise/sap-controlling", linkLabel: "Explore Controlling" },
  { id: "rar", label: "RAR", x: 88, y: 70, desc: "Transparent, structured revenue recognition.", href: "/expertise/sap-rar", linkLabel: "Explore SAP RAR" },
  { id: "brim", label: "BRIM", x: 50, y: 90, desc: "Billing and revenue for subscription and usage models.", href: "/expertise/sap-brim", linkLabel: "Explore SAP BRIM" },
  { id: "s4hana", label: "S/4HANA", x: 12, y: 70, desc: "The modern finance core your transformation targets.", href: "/expertise/s4hana-finance", linkLabel: "Explore S/4HANA Finance" },
  { id: "integration", label: "Integration", x: 12, y: 26, desc: "Finance connected end to end across the landscape.", href: "/services/integration", linkLabel: "Explore Integration" },
];

export default function FinanceCanvas() {
  const [active, setActive] = useState("sap-finance");
  const activeSpoke = spokes.find((s) => s.id === active) || spokes[0];

  return (
    <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="relative aspect-square w-full max-w-[620px] mx-auto">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {spokes.map((s) => (
            <line
              key={s.id}
              x1="50"
              y1="49"
              x2={s.x}
              y2={s.y}
              stroke={active === s.id ? "#DD161C" : "#FEC802"}
              strokeOpacity={active === s.id ? 1 : 0.3}
              strokeWidth={active === s.id ? 0.7 : 0.35}
              strokeDasharray="2 2"
              className={active === s.id ? "animate-dash-flow" : ""}
            />
          ))}
        </svg>

        <div className="absolute left-1/2 top-[49%] z-10 flex h-28 w-28 md:h-36 md:w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 border-belmav-gold bg-belmav-black text-center">
          <span className="px-2 text-[10px] md:text-xs font-extrabold uppercase leading-tight tracking-[0.16em] text-belmav-white">
            Finance
            <br />
            <span className="text-belmav-gold">Transformation</span>
          </span>
        </div>

        {spokes.map((s) => (
          <button
            key={s.id}
            onMouseEnter={() => setActive(s.id)}
            onFocus={() => setActive(s.id)}
            onClick={() => setActive(s.id)}
            aria-pressed={active === s.id}
            style={{ left: `${s.x}%`, top: `${s.y}%` }}
            className={`absolute z-10 -translate-x-1/2 -translate-y-1/2 border-2 px-3 py-2 md:px-4 md:py-2.5 text-[10px] md:text-xs font-extrabold uppercase tracking-[0.12em] transition-all duration-300 ${
              active === s.id
                ? "scale-110 border-belmav-red bg-belmav-red text-belmav-white"
                : "border-belmav-white/30 bg-belmav-black text-belmav-white hover:border-belmav-gold"
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSpoke.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="border-l-2 border-belmav-gold pl-8"
          >
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-belmav-red">{activeSpoke.label}</p>
            <p className="mt-4 max-w-md text-xl md:text-2xl font-semibold leading-relaxed text-belmav-white">{activeSpoke.desc}</p>
            <Link
              href={activeSpoke.href}
              className="group mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-belmav-gold transition-colors hover:text-belmav-white"
            >
              {activeSpoke.linkLabel}
              <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
