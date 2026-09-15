import { Metadata } from "next";
import TransformationArc from "@/components/TransformationArc";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import { ServiceCard } from "@/components/cards";
import { PrimaryButton } from "@/components/buttons";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "SAP Finance Services",
  description: "Advisory, implementation, rollouts, upgrades, migration, integration, optimization, support, finance transformation, and testing services.",
};

export default function ServicesPage() {
  return (
    <div>
      <section className="relative bg-belmav-black text-belmav-white pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 opacity-40">
          <TransformationArc className="w-full h-40" animate={false} />
        </div>
        <div className="container-xl relative z-10">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-belmav-gold">Services</span>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold max-w-3xl leading-[1.05]">
            Full-lifecycle SAP Finance services
          </h1>
          <p className="mt-6 text-lg text-belmav-white/70 max-w-2xl leading-relaxed">
            Ten services, one thread: predictable delivery across the full SAP finance lifecycle.
          </p>
        </div>
      </section>
      <section className="py-24">
        <div className="container-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
          {services.map((s, i) => (
            <ScrollReveal key={s.slug} delay={(i % 3) * 0.06}>
              <ServiceCard item={s} />
            </ScrollReveal>
          ))}
        </div>
      </section>
      <section className="py-24 bg-belmav-mist text-center">
        <div className="container-xl">
          <SectionHeading align="center" className="mx-auto" kicker="Next Step" title="Let's scope the right service mix for you" />
          <div className="mt-8 flex justify-center">
            <PrimaryButton href="/contact">Talk to an SAP Expert</PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
