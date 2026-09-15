import { Metadata } from "next";
import TransformationArc from "@/components/TransformationArc";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import ClosingCta from "@/components/ClosingCta";
import { CaseStudyCard } from "@/components/cards";
import { successStories } from "@/lib/success-stories";

export const metadata: Metadata = {
  title: "Success Stories",
  description:
    "BelMav client success stories: challenge, approach, solution, outcome — told with evidence once client-approved.",
};

export default function SuccessStoriesPage() {
  return (
    <div>
      <section className="relative bg-belmav-black text-belmav-white pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 opacity-40">
          <TransformationArc className="w-full h-40" animate={false} />
        </div>
        <div className="container-xl relative z-10">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-belmav-gold">Success Stories</span>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold max-w-3xl leading-[1.05]">
            Transformations, Told With Evidence.
          </h1>
          <p className="mt-6 text-lg text-belmav-white/70 max-w-2xl leading-relaxed">
            Client-approved stories are being prepared. Until then, this is the framework every BelMav story
            will follow.
          </p>
        </div>
      </section>
      <section className="py-24">
        <div className="container-xl grid grid-cols-1 md:grid-cols-2 gap-6">
          {successStories.map((s, i) => (
            <ScrollReveal key={s.slug} delay={i * 0.08}>
              <CaseStudyCard item={s} />
            </ScrollReveal>
          ))}
        </div>
        <div className="container-xl">
          <ScrollReveal delay={0.15}>
            <p className="mt-12 max-w-2xl border-l-2 border-belmav-gold pl-5 text-sm leading-relaxed text-belmav-black/55">
              BelMav publishes case studies only with client approval—real names, real context, real
              outcomes. No invented logos, metrics, or quotes.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <ClosingCta
        headline="Your Story Could Be Next."
        outro="Every success story starts the same way: with an honest conversation about the landscape as it is."
      />
    </div>
  );
}
