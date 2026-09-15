"use client";

import Link from "next/link";
import { NavItem } from "@/lib/nav";
import { ArrowRight } from "lucide-react";

export default function MegaMenu({ item }: { item: NavItem }) {
  if (!item.columns) return null;
  return (
    <div
      className="absolute left-1/2 top-full z-40 w-[min(90vw,820px)] -translate-x-1/2 pt-4"
      role="menu"
    >
      <div className="bg-belmav-black text-belmav-white shadow-2xl border-t-2 border-belmav-gold">
        <div className="grid gap-8 p-8" style={{ gridTemplateColumns: `repeat(${item.columns.length}, minmax(0,1fr))` }}>
          {item.columns.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-belmav-gold mb-4">
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      role="menuitem"
                      className="group flex items-start justify-between gap-2 text-belmav-white/90 hover:text-belmav-white"
                    >
                      <span>
                        <span className="block font-medium">{link.label}</span>
                        {link.description && (
                          <span className="block text-xs text-belmav-white/50 mt-0.5">{link.description}</span>
                        )}
                      </span>
                      <ArrowRight size={14} className="mt-1 shrink-0 opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 text-belmav-red" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="h-1 w-full bg-arc-full" />
      </div>
    </div>
  );
}
