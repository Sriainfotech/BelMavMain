"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import TransformationArc from "./TransformationArc";

/**
 * Initial-load splash screen — reproduces the reference site's `Fh` component:
 * a white/paper overlay showing the BelMav arc (black -> gold -> red draw)
 * followed by the wordmark, then sliding up out of view.
 *
 * Timing recovered from the reference bundle:
 * - overlay is shown for 1900ms before it starts exiting
 * - arc draws over 1.1s (strokeWidth 14)
 * - wordmark fades/slides in at delay .7s over .5s
 * - exit: slides up (y: -100%) over .7s, ease [.76,0,.24,1]
 */
export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          data-testid="loading-screen"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="w-[280px] md:w-[380px]">
            <TransformationArc animate duration={1.1} strokeWidth={14} />
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="mt-2 text-xs font-bold uppercase tracking-[0.4em] text-belmav-ink"
          >
            Bel
            <span className="text-belmav-gold">M</span>
            <span className="text-belmav-red">av</span>
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
