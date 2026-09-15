import { Metadata } from "next";
import Link from "next/link";
import TransformationArc from "@/components/TransformationArc";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import { PrimaryButton, SecondaryButton } from "@/components/buttons";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About BelMav Info Tech",
  description:
    "BelMav Info Tech is a Belgian SAP Finance & Transformation consultancy built on deep expertise, disciplined delivery, and honest advice.",
};

const subLinks = [
  { title: "Our Vision", href: "/about/vision", description: "Why we exist and what we're working toward." },
  { title: "Why BelMav", href: "/about/why-belmav", description: "What sets our approach apart." },
  { title: "Our Approach", href: "/about/approach", description: "How we deliver transformation, phase by phase." },
  { title: "Leadership", href: "/about/leadership", description: "The people behind BelMav." },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative bg-belmav-black text-belmav-white pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 opacity-40">
          <TransformationArc className="w-full h-40" animate={false} />
        </div>
        <div className="container-xl relative z-10">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-belmav-gold">About BelMav</span>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold max-w-3xl leading-[1.05]">
            Transformation Starts With <span className="text-belmav-gold">Clarity.</span>
          </h1>
          <p className="mt-6 text-lg text-belmav-white/70 max-w-2xl leading-relaxed">{SITE.description}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal>
            <SectionHeading kicker="Who We Are" title="A specialist consultancy, by design" />
            <p className="mt-6 text-belmav-black/70 leading-relaxed">
              BelMav Info Tech is an IT consulting and services company built around a deliberately narrow focus:
              SAP Finance and Transformation. We chose depth over breadth — believing that organizations undertaking
              finance-critical SAP work are better served by specialists who live in this domain every day than by
              generalist teams covering the entire SAP landscape.
            </p>
            <p className="mt-4 text-belmav-black/70 leading-relaxed">
              That focus spans SAP Finance, Controlling, Revenue Accounting and Reporting (RAR), and Billing and
              Revenue Innovation Management (BRIM) — from initial advisory through implementation, transformation,
              and long-term support.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <SectionHeading kicker="Our Vision" title={SITE.vision} />
            <p className="mt-6 text-belmav-black/70 leading-relaxed">
              We believe SAP transformation has earned an unfair reputation for being slow, opaque, and risky. Much
              of that risk is avoidable — with the right design discipline, honest scoping, and a finance-first lens
              applied from the very first conversation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-belmav-mist">
        <div className="container-xl">
          <SectionHeading kicker="Explore" title="Learn more about BelMav" />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {subLinks.map((l) => (
              <Link key={l.href} href={l.href} className="group border border-belmav-black/10 p-8 bg-belmav-white hover:border-belmav-black transition-colors">
                <h3 className="text-xl font-bold text-belmav-black group-hover:text-belmav-red">{l.title}</h3>
                <p className="mt-2 text-sm text-belmav-black/60 leading-relaxed">{l.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-belmav-black text-belmav-white text-center">
        <div className="container-xl max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold">Built Around a Simple Belief.</h2>
          <p className="mt-4 text-belmav-white/70">Transformation should create clarity, not complexity. Let&apos;s talk about yours.</p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <PrimaryButton href="/contact">Talk to an SAP Expert</PrimaryButton>
            <SecondaryButton href="/careers" className="border-belmav-white text-belmav-white hover:bg-belmav-white hover:text-belmav-black">
              View Careers
            </SecondaryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
