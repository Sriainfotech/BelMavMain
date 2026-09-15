"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import { mainNav, utilityNav } from "@/lib/nav";
import { PrimaryButton } from "./buttons";

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-belmav-black text-belmav-white overflow-y-auto"
    >
      <div className="container-xl flex items-center justify-between py-6">
        <span className="text-lg font-extrabold">BelMav</span>
        <button
          aria-label="Close menu"
          onClick={onClose}
          className="p-2 text-belmav-white hover:text-belmav-gold"
        >
          <X size={28} />
        </button>
      </div>
      <div className="container-xl pb-16">
        <nav>
          <div className="border-b border-belmav-white/10">
            <Link
              href="/"
              onClick={onClose}
              className="block w-full py-5 text-left text-2xl font-bold"
            >
              Home
            </Link>
          </div>
          {mainNav.map((item) => (
            <div key={item.label} className="border-b border-belmav-white/10">
              <button
                className="flex w-full items-center justify-between py-5 text-left text-2xl font-bold"
                onClick={() => setOpen(open === item.label ? null : item.label)}
                aria-expanded={open === item.label}
              >
                {item.label}
                <ChevronDown
                  size={22}
                  className={`transition-transform duration-300 ${open === item.label ? "rotate-180 text-belmav-gold" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === item.label && item.columns && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 grid grid-cols-1 gap-6">
                      {item.columns.map((col) => (
                        <div key={col.heading}>
                          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-belmav-gold mb-3">
                            {col.heading}
                          </p>
                          <ul className="space-y-3">
                            {col.links.map((l) => (
                              <li key={l.href}>
                                <Link href={l.href} onClick={onClose} className="text-belmav-white/85 hover:text-belmav-gold">
                                  {l.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <div className="pt-6 flex flex-col gap-4">
            {utilityNav.map((l) => (
              <Link key={l.href} href={l.href} onClick={onClose} className="text-xl font-semibold">
                {l.label}
              </Link>
            ))}
          </div>
          <div className="pt-8">
            <PrimaryButton href="/contact" className="w-full justify-center">
              Talk to an SAP Expert
            </PrimaryButton>
          </div>
        </nav>
      </div>
    </motion.div>
  );
}
