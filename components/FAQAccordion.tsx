"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQAccordion({
  items,
  dark = false,
}: {
  items: { q: string; a: string }[];
  dark?: boolean;
}) {
  // Multiple items can be open at once — not a single-open accordion.
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set([0]));

  return (
    <div className={`divide-y ${dark ? "divide-belmav-white/15" : "divide-belmav-black/10"}`}>
      {items.map((item, i) => {
        const isOpen = openIndexes.has(i);
        const toggle = () =>
          setOpenIndexes((prev) => {
            const next = new Set(prev);
            if (next.has(i)) next.delete(i);
            else next.add(i);
            return next;
          });
        return (
          <div key={item.q}>
            <button
              className="flex w-full items-center justify-between gap-4 py-6 text-left"
              onClick={toggle}
              aria-expanded={isOpen}
            >
              <span className={`text-base md:text-lg font-semibold ${isOpen ? (dark ? "text-belmav-white" : "text-belmav-black") : dark ? "text-belmav-white/70" : "text-belmav-black/70"}`}>
                {item.q}
              </span>
              <span
                className={`shrink-0 flex items-center justify-center h-8 w-8 border transition-transform duration-300 ${
                  dark ? "border-belmav-white/30" : "border-belmav-black/20"
                } ${isOpen ? "rotate-45 bg-belmav-red border-belmav-red" : ""}`}
              >
                <Plus size={16} className={isOpen ? "text-belmav-white" : dark ? "text-belmav-white" : "text-belmav-black"} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className={`pb-6 text-sm md:text-base leading-relaxed max-w-3xl ${dark ? "text-belmav-white/70" : "text-belmav-black/70"}`}>
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
