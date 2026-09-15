import Link from "next/link";
import { PrimaryButton, SecondaryButton } from "@/components/buttons";

export default function NotFound() {
  return (
    <div className="relative min-h-[85vh] flex items-center bg-belmav-black text-belmav-white overflow-hidden pt-24">
      <svg
        viewBox="0 0 1000 300"
        className="absolute inset-0 w-full h-full opacity-40"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="brokenArc" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="50%" stopColor="#FEC802" />
            <stop offset="100%" stopColor="#DD161C" />
          </linearGradient>
        </defs>
        <path
          d="M 20 250 C 250 250, 300 50, 480 50"
          stroke="url(#brokenArc)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 540 50 C 700 50, 750 250, 980 250"
          stroke="url(#brokenArc)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />
        <rect x="500" y="30" width="12" height="12" fill="#DD161C" transform="rotate(20 506 36)" />
      </svg>
      <div className="container-xl relative z-10 text-center max-w-2xl mx-auto">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-belmav-gold">404 — Page Not Found</span>
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight text-balance">
          Looks like this process took an unexpected turn.
        </h1>
        <p className="mt-6 text-belmav-white/70 text-lg">
          One node is missing from this path. Let&apos;s route you back to solid ground.
        </p>
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          <PrimaryButton href="/">Back to Home</PrimaryButton>
          <SecondaryButton href="/contact" className="border-belmav-white text-belmav-white hover:bg-belmav-white hover:text-belmav-black">
            Talk to an SAP Expert
          </SecondaryButton>
        </div>
        <p className="mt-8 text-sm text-belmav-white/40">
          Or explore <Link href="/services" className="underline hover:text-belmav-gold">Services</Link>,{" "}
          <Link href="/expertise" className="underline hover:text-belmav-gold">Expertise</Link>, or{" "}
          <Link href="/insights" className="underline hover:text-belmav-gold">Insights</Link>.
        </p>
      </div>
    </div>
  );
}
