"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// Tab labels, taglines, and short copy match the reference site's
// transformation-pathway data (`kh`) exactly, reused from lib/transformation.ts
// wording. `note` captions match the reference's `Xp` object.
const pathways = [
  {
    slug: "greenfield",
    title: "Greenfield",
    tagline: "Reimagine the finance landscape.",
    short: "A new implementation on a clean S/4HANA system—maximum freedom to redesign, with selective data carry-over.",
    note: "New design. Clean core. Selected data.",
  },
  {
    slug: "brownfield",
    title: "Brownfield",
    tagline: "Transform while preserving what works.",
    short: "A system conversion of your existing ECC landscape to S/4HANA—preserving processes, configuration, and history.",
    note: "Convert the core. Preserve what works.",
  },
  {
    slug: "selective-data-transition",
    title: "Selective Data Transition",
    tagline: "Choose the right balance of continuity and change.",
    short: "Move to S/4HANA with a deliberate selection of data, organizational scope, and process redesign—between Greenfield and Brownfield.",
    note: "Carry over deliberately. Redesign selectively.",
  },
];

export default function EccS4Toggle() {
  const [active, setActive] = useState(pathways[0].slug);
  const current = pathways.find((p) => p.slug === active)!;

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Transformation pathways">
        {pathways.map((p) => (
          <button
            key={p.slug}
            role="tab"
            aria-selected={active === p.slug}
            onClick={() => setActive(p.slug)}
            className={`border-2 px-5 py-3 text-xs font-extrabold uppercase tracking-[0.16em] transition-all duration-300 ${
              active === p.slug
                ? "border-belmav-gold bg-belmav-gold text-belmav-black"
                : "border-belmav-white/25 text-belmav-white/70 hover:border-belmav-white hover:text-belmav-white"
            }`}
          >
            {p.title}
          </button>
        ))}
      </div>

      <motion.div
        key={current.slug}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 border-2 border-belmav-white/15 p-8 md:p-12"
      >
        <svg viewBox="0 0 480 120" className="mb-10 w-full" fill="none" aria-hidden="true">
          <rect x="8" y="40" width="110" height="44" stroke="#FFFFFF" strokeOpacity="0.5" strokeWidth="2" />
          <text x="63" y="67" textAnchor="middle" fill="#FFFFFF" style={{ fontSize: 13, fontWeight: 800 }}>
            ECC
          </text>
          <motion.line
            x1="126"
            y1="62"
            x2="226"
            y2="62"
            stroke="#FEC802"
            strokeWidth="3"
            strokeDasharray="8 8"
            className="animate-dash-flow"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <rect x="234" y="40" width="128" height="44" fill="#FEC802" />
          <text x="298" y="67" textAnchor="middle" fill="#000000" style={{ fontSize: 12, fontWeight: 800 }}>
            {current.title.toUpperCase()}
          </text>
          <motion.line
            x1="370"
            y1="62"
            x2="452"
            y2="62"
            stroke="#DD161C"
            strokeWidth="3"
            strokeDasharray="8 8"
            className="animate-dash-flow"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <rect x="416" y="20" width="14" height="14" fill="#DD161C" />
          <rect x="440" y="8" width="9" height="9" fill="#DD161C" />
          <text x="415" y="105" textAnchor="end" fill="#DD161C" style={{ fontSize: 13, fontWeight: 800 }}>
            S/4HANA →
          </text>
        </svg>

        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-belmav-white">{current.tagline}</h3>
        <p className="mt-4 max-w-md text-sm md:text-base leading-relaxed text-belmav-white/65">{current.short}</p>
        <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-belmav-gold">{current.note}</p>
        <div className="mt-8">
          <Link
            href={`/sap-transformation/${current.slug}`}
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em] text-belmav-white border-b-2 border-belmav-gold pb-1 transition-colors hover:text-belmav-gold"
          >
            Explore {current.title}
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
