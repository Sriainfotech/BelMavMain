import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { footerNav, legalNav } from "@/lib/nav";
import { SITE } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-belmav-black text-belmav-white">
      <div className="h-1 w-full bg-arc-full" />
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-3">
            <Link href="/" className="flex items-center gap-2 font-extrabold text-xl">
              <span className="inline-block h-3 w-3 bg-belmav-red" />
              <span className="text-belmav-white">Bel</span>
              <span className="-ml-2 text-belmav-gold">Mav</span>
            </Link>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-belmav-white/50">
              IT Consulting <span className="text-belmav-red">and</span> Services
            </p>
            <p className="mt-4 text-lg font-medium leading-relaxed max-w-sm">
              Making SAP transformation <span className="text-belmav-white">simpler</span>,{" "}
              <span className="text-belmav-gold">smarter</span> and{" "}
              <span className="text-belmav-red">more predictable</span>.
            </p>
            <div className="mt-6 space-y-3 text-sm text-belmav-white/70">
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-belmav-gold">
                <Mail size={16} className="text-belmav-gold shrink-0" /> {SITE.email}
              </a>
              <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-belmav-gold">
                <Phone size={16} className="text-belmav-gold shrink-0" /> {SITE.phone}
              </a>
              <p className="flex items-start gap-2">
                <MapPin size={16} className="text-belmav-gold shrink-0 mt-0.5" /> {SITE.address}
              </p>
            </div>
          </div>
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {footerNav.map((col) => (
              <div key={col.heading}>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-belmav-gold mb-4">
                  {col.heading}
                </p>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sm text-belmav-white/70 hover:text-belmav-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[2px] w-full bg-gradient-to-r from-belmav-gold to-belmav-red" />
      <div className="container-xl py-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <p className="text-xs text-belmav-white/45">© 2026 BelMav Info Tech. All rights reserved.</p>
        <div className="flex flex-wrap gap-x-7 gap-y-2">
          {legalNav.map((l) => (
            <Link key={l.href} href={l.href} className="text-xs text-belmav-white/60 hover:text-belmav-white">
              {l.label}
            </Link>
          ))}
        </div>
        <p className="text-xs tracking-[0.15em] uppercase text-belmav-white/45">
          BELGIUM — EUROPE — WORLDWIDE DELIVERY
        </p>
      </div>
    </footer>
  );
}
