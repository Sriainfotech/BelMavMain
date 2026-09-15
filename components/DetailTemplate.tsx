"use client";

import { DetailPage } from "@/lib/types";
import Breadcrumb from "./Breadcrumb";
import ClosingCta from "./ClosingCta";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import Timeline from "./Timeline";
import FAQAccordion from "./FAQAccordion";
import TransformationArc from "./TransformationArc";
import { PrimaryButton, SecondaryButton } from "./buttons";
import { Check } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Stagger-reveal variants for bullet lists (capabilities / business value) —
// each item fades/slides in with a slight delay after the one before it,
// once the list scrolls into view. Mirrors this project's existing
// ScrollReveal viewport settings.
const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const listItem = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

export default function DetailTemplate({
  item,
  basePath,
  relatedItems,
  relatedLabel = "Related",
}: {
  item: DetailPage;
  basePath: string;
  relatedItems?: { slug: string; title: string; summary: string; href?: string }[];
  relatedLabel?: string;
}) {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-belmav-black text-belmav-white pt-28 pb-24 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 opacity-40">
          <TransformationArc className="w-full h-40" animate={false} progress={1} />
        </div>
        <div className="relative z-10">
          <Breadcrumb basePath={basePath} page={item.shortTitle || item.title} />
        </div>
        <div className="container-xl relative z-10 pt-10">
          <ScrollReveal>
            <div className="flex items-center gap-2 mb-5">
              <span className="arc-red-square" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-belmav-gold">{item.heroKicker}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] max-w-4xl text-balance">{item.headline || item.title}</h1>
            <p className="mt-6 text-lg text-belmav-white/70 max-w-2xl leading-relaxed">{item.summary}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <PrimaryButton href="/contact">Talk to an SAP Expert</PrimaryButton>
              <SecondaryButton href={basePath} className="border-belmav-white text-belmav-white hover:bg-belmav-white hover:text-belmav-black">
                Back to overview
              </SecondaryButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview + Challenge */}
      <section className="py-24">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ScrollReveal>
            <SectionHeading kicker="Overview" title="What this means for your organization" />
            <p className="mt-6 text-belmav-black/70 leading-relaxed">{item.overview}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <SectionHeading
              kicker={basePath === "/expertise" ? "Opportunities" : "The Challenge"}
              title={
                basePath === "/expertise"
                  ? item.opportunitiesHeading || "Where the opportunity lies"
                  : "Why this is harder than it looks"
              }
            />
            <p className="mt-6 text-belmav-black/70 leading-relaxed">{item.challenge}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-belmav-mist">
        <div className="container-xl">
          <SectionHeading
            kicker={basePath === "/expertise" ? "What This Covers" : "What We Do"}
            title={basePath === "/expertise" ? "Where our expertise runs deep" : "How we help"}
            align="left"
          />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            {item.whatWeDo.map((w, i) => (
              <ScrollReveal key={w.title} delay={i * 0.08}>
                <div className="group border-l-2 border-belmav-red pl-6 pr-4 py-4 transition-colors duration-300 hover:bg-belmav-black">
                  <h3 className="text-lg font-bold text-belmav-black transition-colors duration-300 group-hover:text-belmav-gold">{w.title}</h3>
                  {w.description && (
                    <p className="mt-2 text-sm text-belmav-black/65 leading-relaxed transition-colors duration-300 group-hover:text-belmav-white/60">{w.description}</p>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24">
        <div className="container-xl">
          <SectionHeading kicker="Our Approach" title="A disciplined, predictable way to transform" align="left" />
          <div className="mt-16">
            <Timeline steps={item.approach} />
          </div>
        </div>
      </section>

      {/* Capabilities + Business Value */}
      <section className="py-24 bg-belmav-black text-belmav-white">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ScrollReveal>
            <SectionHeading kicker="Capabilities" title="What we bring" dark />
            <motion.ul
              className="mt-8 space-y-4"
              variants={listContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              {item.capabilities.map((c) => (
                <motion.li key={c} variants={listItem} className="flex items-start gap-3 text-belmav-white/80">
                  <Check size={18} className="text-belmav-gold mt-0.5 shrink-0" />
                  {c}
                </motion.li>
              ))}
            </motion.ul>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <SectionHeading kicker="Business Value" title="What you should expect" dark />
            <motion.ul
              className="mt-8 space-y-4"
              variants={listContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
            >
              {item.businessValue.map((c) => (
                <motion.li key={c} variants={listItem} className="flex items-start gap-3 text-belmav-white/80">
                  <Check size={18} className="text-belmav-red mt-0.5 shrink-0" />
                  {c}
                </motion.li>
              ))}
            </motion.ul>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container-xl max-w-3xl">
          <SectionHeading kicker="FAQ" title="Common questions" />
          <div className="mt-10">
            <FAQAccordion items={item.faq} />
          </div>
        </div>
      </section>

      {/* Related */}
      {relatedItems && relatedItems.length > 0 && (
        <section className="py-24 bg-belmav-mist">
          <div className="container-xl">
            <SectionHeading kicker={relatedLabel} title="You may also be interested in" />
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedItems.map((r) => (
                <Link
                  key={r.slug}
                  href={r.href || `${basePath}/${r.slug}`}
                  className="group border border-belmav-black/10 p-8 bg-belmav-white hover:border-belmav-black transition-colors"
                >
                  <h3 className="text-lg font-bold text-belmav-black group-hover:text-belmav-red">{r.title}</h3>
                  <p className="mt-2 text-sm text-belmav-black/60 leading-relaxed">{r.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <ClosingCta
        headline={basePath === "/services" ? `Let's Talk About ${item.title}.` : "Ready to talk this through?"}
        outro="Tell us about your landscape and goals — we'll help you find the clearest path forward."
        primaryLabel={basePath === "/sap-transformation" ? "Discuss Your Transformation" : "Talk to an SAP Expert"}
      />
    </div>
  );
}
