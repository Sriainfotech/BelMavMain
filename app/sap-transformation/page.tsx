import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import TransformationArc from "@/components/TransformationArc";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import TransformationMap from "@/components/TransformationMap";
import ClosingCta from "@/components/ClosingCta";
import EccS4Toggle from "@/components/home/EccS4Toggle";
import { transformationPathways } from "@/lib/transformation";

export const metadata: Metadata = {
  title: "SAP Transformation: ECC to S/4HANA",
  description: "Greenfield, Brownfield, and Selective Data Transition — the three pathways from ECC to S/4HANA, explained.",
};

export default function SapTransformationPage() {
  return (
    <div>
      <section className="relative bg-belmav-black text-belmav-white pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 opacity-40">
          <TransformationArc className="w-full h-40" animate={false} />
        </div>
        <div className="container-xl relative z-10">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-belmav-gold">SAP Transformation</span>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold max-w-3xl leading-[1.05]">
            Your Journey From ECC to <span className="text-belmav-gold">S/4HANA.</span>
          </h1>
          <p className="mt-6 text-lg text-belmav-white/70 max-w-2xl leading-relaxed">
            An end-to-end transformation map—eight stages, three pathways, one discipline: predictability.
          </p>
          <div className="mt-14">
            <EccS4Toggle />
          </div>
        </div>
      </section>

      {/* Transformation Map — eight stages, stage 1 (Assessment) active by default */}
      <section className="py-24">
        <div className="container-xl">
          <SectionHeading kicker="The Transformation Map" title="Eight stages. Zero improvisation." />
          <TransformationMap />
        </div>
      </section>

      {/* Three Pathways recap */}
      <section className="py-24 bg-belmav-black text-belmav-white">
        <div className="container-xl">
          <SectionHeading
            dark
            kicker="Three Pathways"
            title={
              <>
                The route matters as much as <span className="text-belmav-gold">the destination.</span>
              </>
            }
          />
          <div className="mt-14 grid grid-cols-1 gap-[2px] bg-belmav-white/10 md:grid-cols-3">
            {transformationPathways.map((p, i) => (
              <ScrollReveal key={p.slug} delay={i * 0.1} className="h-full">
                <Link
                  href={`/sap-transformation/${p.slug}`}
                  className="group flex h-full flex-col justify-between bg-belmav-black p-9 transition-colors duration-300 hover:bg-belmav-white"
                >
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-[0.3em] text-belmav-red">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 text-2xl font-extrabold uppercase tracking-tight transition-colors group-hover:text-belmav-black">
                      {p.shortTitle}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-belmav-white/60 transition-colors group-hover:text-belmav-black/60">
                      {p.summary}
                    </p>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-belmav-gold transition-colors group-hover:text-belmav-red">
                    Explore
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ClosingCta
        headline="Understand Your Transformation Path."
        outro="A structured assessment turns pathway debates into evidence-based decisions."
        primaryLabel="Discuss Your Transformation"
      />
    </div>
  );
}
