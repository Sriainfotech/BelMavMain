import { Metadata } from "next";
import TransformationArc from "@/components/TransformationArc";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import { ExpertiseCard } from "@/components/cards";
import { PrimaryButton } from "@/components/buttons";
import { expertiseAreas } from "@/lib/expertise";

export const metadata: Metadata = {
  title: "SAP Finance Expertise",
  description: "Deep, specialist expertise across SAP Finance, Controlling, RAR, BRIM, and S/4HANA Finance.",
};

export default function ExpertisePage() {
  return (
    <div>
      <section className="relative bg-belmav-black text-belmav-white pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 opacity-40">
          <TransformationArc className="w-full h-40" animate={false} />
        </div>
        <div className="container-xl relative z-10">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-belmav-gold">Expertise</span>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold max-w-3xl leading-[1.05]">
            Deep Expertise. Focused on Finance.
          </h1>
          <p className="mt-6 text-lg text-belmav-white/70 max-w-2xl leading-relaxed">
            Five disciplines, practiced deeply. This is where BelMav&apos;s knowledge is concentrated—and where your
            transformation draws from.
          </p>
        </div>
      </section>
      <section className="py-24">
        <div className="container-xl grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertiseAreas.map((e, i) => (
            <ScrollReveal key={e.slug} delay={i * 0.06}>
              <ExpertiseCard item={e} basePath="/expertise" />
            </ScrollReveal>
          ))}
        </div>
      </section>
      <section className="py-24 bg-belmav-mist text-center">
        <div className="container-xl">
          <SectionHeading align="center" className="mx-auto" kicker="Next Step" title="Not sure where to start?" />
          <p className="mx-auto mt-6 max-w-xl text-belmav-black/65 leading-relaxed">
            Unsure which expertise your challenge needs? Most transformations touch several at once. Let&apos;s map
            yours together.
          </p>
          <div className="mt-8 flex justify-center">
            <PrimaryButton href="/contact">Talk to an SAP Expert</PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
