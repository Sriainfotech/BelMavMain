"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

/**
 * Route-change transition — reproduces the reference site's `lx` wrapper:
 * the routed content fades/slides up on every pathname change.
 * (Reference has no exit animation on route change, only an enter animation
 * keyed by pathname — reproduced here the same way via React's `key` prop.)
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <motion.main
      key={pathname}
      id="main-content"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
}
