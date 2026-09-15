"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

// Spec behavior: visible at all scroll positions on desktop; on small
// screens (where it would otherwise cover on-screen content immediately) it
// still appears only after a short scroll, hidden on /contact.
export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const hidden = pathname === "/contact";

  useEffect(() => {
    const isDesktop = () => window.innerWidth >= 768;
    const onScroll = () => setVisible(isDesktop() || window.scrollY > 240);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && !hidden && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.95 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-4 bottom-4 z-40 md:inset-x-auto md:bottom-8 md:right-8"
        >
          <Link
            href="/contact"
            className="group flex items-center justify-center gap-2 bg-belmav-red px-6 py-4 text-sm font-bold text-belmav-white shadow-[0_18px_40px_-12px_rgba(221,22,28,0.55)] transition-colors duration-300 hover:bg-belmav-black"
          >
            Talk to an SAP Expert
            <ArrowRight size={16} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
