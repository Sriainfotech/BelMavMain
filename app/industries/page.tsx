import { Metadata } from "next";
import TransformationArc from "@/components/TransformationArc";
import ScrollReveal from "@/components/ScrollReveal";
import ClosingCta from "@/components/ClosingCta";
import { IndustryCard } from "@/components/cards";
import { industries } from "@/lib/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "How SAP Finance can support manufacturing, retail, professional services, life sciences, energy, consumer products, and financial services.",
};

export default function IndustriesPage() {
  return (
    <div>
      <section className="relative bg-belmav-black text-belmav-white pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 opacity-40">
          <TransformationArc className="w-full h-40" animate={false} />
        </div>
        <div className="container-xl relative z-10">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-belmav-gold">Industries</span>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold max-w-3xl leading-[1.05]">
            Where SAP Expertise Meets Your Reality.
          </h1>
          <p className="mt-6 text-lg text-belmav-white/70 max-w-2xl leading-relaxed">
            How SAP Finance can support your industry — explored honestly, without borrowed claims.
          </p>
        </div>
      </section>
      <section className="py-24">
        <div className="container-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind.slug} delay={(i % 3) * 0.06}>
                <IndustryCard item={ind} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={0.1}>
            <p className="mt-10 max-w-2xl text-xs leading-relaxed text-belmav-black/45">
              Industry perspectives describe how SAP Finance can support each context. They are not claims of client
              engagements.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <ClosingCta
        headline="Your Industry. Your Finance Reality."
        outro="Let's discuss how SAP Finance transformation fits your specific context."
      />
    </div>
  );
}
