import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import { PrimaryButton } from "@/components/buttons";

export const metadata: Metadata = {
  title: "Why BelMav",
  description:
    "Deep SAP Finance expertise, business-first thinking, disciplined delivery, and sustainable value — why organizations choose BelMav.",
};

const pillars = [
  {
    title: "Deep SAP Finance Expertise",
    description:
      "We specialize deliberately: Finance, Controlling, RAR, BRIM, S/4HANA. Depth beats breadth when the stakes are your finance core.",
  },
  {
    title: "Business-First Approach",
    description:
      "We start from the outcome the business needs and design the technology to serve it — not the other way around.",
  },
  {
    title: "Disciplined Delivery",
    description:
      "Structured phases, rehearsed migrations, honest status. Predictability is a method we practice, not a word we print.",
  },
  {
    title: "Transparent Communication",
    description:
      "You will always know where things stand — including when the honest answer is uncomfortable.",
  },
  {
    title: "Practical Transformation",
    description:
      "We design for what your organization can absorb. Ambition sequenced into steps that land.",
  },
  {
    title: "Long-Term Value",
    description:
      "Go-live is the midpoint, not the finish line. We build for value that compounds after day one.",
  },
];

export default function WhyBelMavPage() {
  return (
    <div>
      <PageHero kicker="Why BelMav" title="Six commitments that shape every BelMav engagement" />
      <section className="py-24">
        <div className="container-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.title} delay={i * 0.06}>
              <span className="text-5xl font-extrabold text-belmav-black/10">{`0${i + 1}`}</span>
              <h2 className="mt-3 text-2xl font-bold text-belmav-black">{p.title}</h2>
              <p className="mt-3 text-belmav-black/70 leading-relaxed">{p.description}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>
      <section className="py-24 bg-belmav-mist">
        <div className="container-xl">
          <SectionHeading kicker="See It In Practice" title="These principles, applied through a structured method" />
          <div className="mt-8">
            <PrimaryButton href="/about/approach">See Our Approach</PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
