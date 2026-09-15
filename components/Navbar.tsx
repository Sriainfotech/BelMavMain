"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { mainNav, utilityNav } from "@/lib/nav";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import { PrimaryButton } from "./buttons";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          !isHome
            ? "bg-belmav-white shadow-sm"
            : scrolled
            ? "bg-belmav-white/95 backdrop-blur shadow-sm"
            : "bg-belmav-white/0"
        }`}
      >
        <div className="container-xl flex items-center justify-between h-20">
          <Link href="/" className="flex flex-col leading-none">
            <span className="flex items-center gap-2 font-extrabold text-xl tracking-tight">
              <span className="inline-block h-3 w-3 bg-belmav-red" />
              <span className="text-belmav-black">Bel</span>
              <span className="-ml-2 text-belmav-gold">Mav</span>
            </span>
            <span className="mt-1 pl-5 text-[9px] font-semibold uppercase tracking-[0.22em] text-belmav-black/60">
              IT Consulting <span className="text-belmav-red">and</span> Services
            </span>
          </Link>

          <nav
            className="hidden lg:flex items-center gap-1"
            onMouseLeave={() => setActiveItem(null)}
          >
            {mainNav.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveItem(item.label)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center px-4 py-2 text-sm font-semibold text-belmav-black hover:text-belmav-red transition-colors ${
                    activeItem === item.label ? "text-belmav-red" : ""
                  }`}
                >
                  {item.label}
                </Link>
                <AnimatePresence>
                  {activeItem === item.label && <MegaMenu item={item} />}
                </AnimatePresence>
              </div>
            ))}
            {utilityNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-semibold text-belmav-black hover:text-belmav-red transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <PrimaryButton href="/contact" className="hidden md:inline-flex" icon={false}>
              Talk to an SAP Expert
            </PrimaryButton>
            <button
              className="lg:hidden p-2 text-belmav-black"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>
      <AnimatePresence>
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
