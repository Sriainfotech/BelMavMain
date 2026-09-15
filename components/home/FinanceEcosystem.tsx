"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Labels, order, and descriptions match the reference site's Finance
// Ecosystem diagram exactly (component `fp`, node array `mp`). Order runs
// clockwise starting at 12 o'clock: General Ledger, Accounts Payable,
// Accounts Receivable, Asset Accounting, Bank Accounting, Closing,
// Reporting, Controlling, Profitability.
const nodes = [
  { label: "General Ledger", desc: "One ledger, simplified structures, real-time insight." },
  { label: "Accounts Payable", desc: "Supplier processes with control over outgoing cash." },
  { label: "Accounts Receivable", desc: "Faster receivables, healthier working capital." },
  { label: "Asset Accounting", desc: "Transparent asset lifecycles across valuations." },
  { label: "Bank Accounting", desc: "Connected, automated bank processes." },
  { label: "Closing", desc: "A disciplined, faster close—locally and group-wide." },
  { label: "Reporting", desc: "Numbers decision-makers trust, without rework." },
  { label: "Controlling", desc: "Cost and profitability insight that steers the business." },
  { label: "Profitability", desc: "Margin visibility by product, customer, and channel." },
];

const RADIUS = 35; // % of container, from center — leaves room for the larger 22%-diameter node circles
const STEP = 360 / nodes.length;

// 0° = 12 o'clock, increasing clockwise — matches the reference layout.
function positionOf(index: number) {
  const rad = (index * STEP * Math.PI) / 180;
  return {
    x: 50 + RADIUS * Math.sin(rad),
    y: 50 - RADIUS * Math.cos(rad),
  };
}

export default function FinanceEcosystem() {
  const [active, setActive] = useState(0);
  const current = nodes[active];

  return (
    <div>
      <div className="relative mx-auto aspect-square w-full max-w-xl" role="group" aria-label="SAP Finance ecosystem diagram">
        {/* Connecting lines — dashed gold by default, dashed red + brighter to the active node */}
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
          {nodes.map((n, i) => {
            const { x, y } = positionOf(i);
            const isActive = active === i;
            return (
              <line
                key={n.label}
                x1="50"
                y1="50"
                x2={x}
                y2={y}
                stroke={isActive ? "#DD161C" : "#FEC802"}
                strokeOpacity={isActive ? 1 : 0.55}
                strokeWidth={isActive ? 0.7 : 0.35}
                strokeDasharray="1.6 1.6"
                className={isActive ? "animate-dash-flow" : ""}
              />
            );
          })}
        </svg>

        {/* Hub */}
        <div
          className="absolute flex h-[26%] w-[26%] flex-col items-center justify-center rounded-full border-2 border-dashed border-belmav-gold bg-belmav-black text-center"
          style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
        >
          <span className="text-[11px] font-extrabold tracking-wide text-belmav-white sm:text-sm">SAP</span>
          <span className="text-[11px] font-extrabold tracking-wide text-belmav-gold sm:text-sm">FINANCE</span>
        </div>

        {/* Spokes */}
        {nodes.map((n, i) => {
          const { x, y } = positionOf(i);
          const isActive = active === i;
          return (
            <button
              key={n.label}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              aria-label={`${n.label}: ${n.desc}`}
              aria-pressed={isActive}
              className={`absolute flex h-[22%] w-[22%] items-center justify-center rounded-full border-2 p-1 text-center outline-none transition-colors duration-200 ${
                isActive
                  ? "border-belmav-red bg-belmav-red text-belmav-white"
                  : "border-belmav-black bg-belmav-white text-belmav-black hover:border-belmav-red"
              }`}
              style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -50%)" }}
            >
              <span className="text-[9px] font-extrabold uppercase leading-[1.15] tracking-tight sm:text-[11px] md:text-xs">
                {n.label}
              </span>
            </button>
          );
        })}
      </div>
      <div className="mt-10 border-l-2 border-belmav-gold pl-6" data-testid="ecosystem-detail">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-belmav-red">{current.label}</p>
        <motion.p
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-3 max-w-md text-lg font-semibold leading-relaxed text-belmav-black"
        >
          {current.desc}
        </motion.p>
      </div>
    </div>
  );
}
