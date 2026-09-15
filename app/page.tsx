import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Check } from "lucide-react";
import TransformationArc from "@/components/TransformationArc";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import { PrimaryButton, SecondaryButton, GhostLightButton } from "@/components/buttons";
import { ExpertiseCard, ServiceCard, IndustryCard, InsightCard, CaseStudyCard } from "@/components/cards";
import Timeline from "@/components/Timeline";
import FAQAccordion from "@/components/FAQAccordion";
import FinanceEcosystem from "@/components/home/FinanceEcosystem";
import BeliefReveal from "@/components/home/BeliefReveal";
import TransformationStory from "@/components/home/TransformationStory";
import EccS4Toggle from "@/components/home/EccS4Toggle";
import { NavigatorProvider, NavigatorSteps, NavigatorPanel } from "@/components/home/TransformationNavigator";
import FinanceCanvas from "@/components/home/FinanceCanvas";
import { expertiseAreas } from "@/lib/expertise";
import { services } from "@/lib/services";
import { industries } from "@/lib/industries";
import { transformationPathways } from "@/lib/transformation";
import { insights } from "@/lib/insights";
import { successStories } from "@/lib/success-stories";
import { faqs } from "@/lib/faq";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE.name} | ${SITE.positioning}`,
  description: SITE.description,
};

// Homepage teaser is a condensed 5-phase version, distinct from the fuller
// 7-stage version used on /about/approach.
const homeApproachPhases = [
  { phase: "Discover", description: "Understand your landscape, constraints, and ambition before proposing an approach." },
  { phase: "Align", description: "Agree scope, success criteria, and governance with finance and IT together." },
  { phase: "Design", description: "Translate requirements into a clear, defensible functional design." },
  { phase: "Deliver", description: "Build, test, and go live with structured cutover and hypercare." },
  { phase: "Optimize", description: "Stabilize, measure, and continuously improve after go-live." },
];

const whyPillars = [
  { title: "Deep Expertise", description: "Functional SAP Finance knowledge grounded in transformation." },
  { title: "Business-First Thinking", description: "Technology decisions aligned with business outcomes." },
  { title: "Predictable Delivery", description: "Structured transformation with clear priorities and disciplined execution." },
  { title: "Sustainable Value", description: "Solutions designed to deliver value beyond go-live." },
];

// Matches the reference site's Business Outcomes section exactly (array `xh`).
const outcomeWords = [
  "Greater Financial Visibility",
  "Better Process Control",
  "Reduced Complexity",
  "More Predictable Transformation",
  "Improved Scalability",
  "Sustainable Business Value",
];

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero — split layout: copy on the left, transformation diagram on the right */}
      <section className="relative min-h-screen flex items-center bg-belmav-white text-belmav-black overflow-hidden pt-24 pb-20">
        <div className="container-xl relative z-10 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: copy */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="arc-red-square" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-belmav-red">
                SAP Finance &amp; Transformation Consulting
              </span>
            </div>
            <h1 className="font-extrabold leading-[0.98] text-balance">
              <span className="block text-3xl sm:text-4xl md:text-5xl text-belmav-black">
                Make SAP Transformation
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl text-belmav-gold">SIMPLER.</span>
              <span className="block text-5xl sm:text-6xl md:text-7xl text-belmav-black">SMARTER.</span>
              <span className="block text-5xl sm:text-6xl md:text-7xl text-belmav-red">MORE PREDICTABLE.</span>
            </h1>
            <p className="mt-8 text-lg text-belmav-black/65 max-w-xl leading-relaxed">
              BelMav Info Tech helps organizations transform their finance landscape through deep expertise in SAP
              Finance, Controlling, RAR, and BRIM—from implementation and upgrades to ECC-to-S/4HANA transformation.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <PrimaryButton href="/contact">Talk to an SAP Expert</PrimaryButton>
              <SecondaryButton href="/expertise">Explore Our Expertise</SecondaryButton>
            </div>
          </div>

          {/* Right: abstract transformation diagram */}
          <div className="relative hidden min-h-[420px] lg:block">
            <div className="absolute inset-0 flex items-center justify-center opacity-80">
              <TransformationArc className="h-full w-full" progress={1} strokeWidth={4} />
            </div>
            <div className="absolute top-[8%] right-[6%] h-2.5 w-2.5 bg-belmav-red animate-pulse-square" />
            <div className="absolute bottom-[24%] left-[10%] h-2.5 w-2.5 bg-belmav-gold animate-pulse-square" />
            <div className="absolute top-[12%] right-[12%] h-2 w-2 rotate-45 bg-belmav-black" />

            {/* Diagram chips along the arc */}
            <div className="pointer-events-none absolute inset-0">
              <span className="absolute left-[2%] top-[42%] text-[11px] font-extrabold uppercase tracking-[0.14em] text-belmav-black bg-belmav-white/90 px-3 py-1.5 border border-belmav-black/15">
                ECC
              </span>
              <span className="absolute left-[10%] top-[58%] text-[11px] font-extrabold uppercase tracking-[0.14em] text-belmav-black bg-belmav-white/90 px-3 py-1.5 border border-belmav-black/15">
                Legacy FI
              </span>
              <span className="absolute left-[14%] top-[74%] text-[11px] font-extrabold uppercase tracking-[0.14em] text-belmav-black bg-belmav-white/90 px-3 py-1.5 border border-belmav-black/15">
                CO
              </span>
              <span className="absolute left-1/2 top-[18%] -translate-x-1/2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-belmav-black bg-belmav-gold px-3 py-1.5">
                Transformation
              </span>
              <span className="absolute right-[8%] top-[46%] text-[11px] font-extrabold uppercase tracking-[0.14em] text-belmav-white bg-belmav-red px-3 py-1.5">
                Intelligent Finance
              </span>
              <span className="absolute right-[4%] top-[64%] text-[11px] font-extrabold uppercase tracking-[0.14em] text-belmav-black bg-belmav-white/90 px-3 py-1.5 border border-belmav-black/15">
                S/4HANA
              </span>
            </div>
          </div>

          {/* Compact diagram for smaller screens, stacked beneath the copy */}
          <div className="relative mx-auto block h-64 w-full max-w-md lg:hidden">
            <TransformationArc className="h-full w-full opacity-80" progress={1} strokeWidth={4} />
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-belmav-black/40">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll</span>
          <span className="h-8 w-[1px] bg-belmav-black/25" aria-hidden="true" />
        </div>
      </section>

      {/* 2. Marquee / ticker strip */}
      <section className="border-y-2 border-belmav-black bg-belmav-black py-6 overflow-hidden">
        <div className="container-xl mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-belmav-gold">
          <span className="h-[2px] w-8 bg-belmav-gold" aria-hidden="true" />
          SAP Finance Transformation, Built Around Business Value
        </div>
        <div className="group relative flex overflow-hidden">
          {/* Edge fade overlays — sit above the track so tags dissolve into the
              section background instead of being hard-cropped mid-tag. */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-belmav-black to-transparent sm:w-28" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-belmav-black to-transparent sm:w-28" aria-hidden="true" />
          <div className="flex w-max shrink-0 animate-marquee group-hover:[animation-play-state:paused]">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
                {["SAP Finance", "Controlling", "RAR", "BRIM", "S/4HANA"].map((t) => (
                  <span
                    key={t}
                    className="mr-4 shrink-0 border border-belmav-white/20 px-5 py-2 text-sm font-bold uppercase tracking-wide text-belmav-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="group relative mt-3 flex overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-belmav-black to-transparent sm:w-28" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-belmav-black to-transparent sm:w-28" aria-hidden="true" />
          <div className="flex w-max shrink-0 animate-marquee group-hover:[animation-play-state:paused]">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
                {["SIMPLER", "SMARTER", "MORE PREDICTABLE"].map((t, i) => (
                  <span
                    key={t}
                    className={`mr-4 shrink-0 px-5 py-2 text-sm font-extrabold uppercase tracking-wide ${
                      i === 0 ? "bg-belmav-gold text-belmav-black" : i === 1 ? "bg-belmav-white text-belmav-black" : "bg-belmav-red text-belmav-white"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2b. Trust strip */}
      <section className="border-y-2 border-belmav-black bg-belmav-white">
        <div className="container-xl flex flex-col items-stretch gap-0 py-2 md:flex-row md:items-center">
          <p className="shrink-0 py-4 pr-8 text-[11px] font-bold uppercase tracking-[0.22em] text-belmav-black/55 md:max-w-[220px]">
            SAP Finance Transformation, Built Around Business Value
          </p>
          <div className="grid flex-1 grid-cols-2 md:grid-cols-4">
            {["SAP Finance", "Controlling", "RAR", "BRIM"].map((t) => (
              <div key={t} className="flex items-center gap-3 border-l-2 border-belmav-gold px-5 py-5">
                <span className="h-2 w-2 bg-belmav-red" />
                <span className="text-sm font-extrabold tracking-wide text-belmav-black">{t}</span>
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="group hidden items-center gap-2 py-4 pl-8 text-xs font-bold uppercase tracking-[0.2em] text-belmav-red md:flex"
          >
            Start <ArrowRight size={16} strokeWidth={2.5} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* 3. The BelMav Belief — light-gray section, scroll-linked per-word reveal */}
      <section className="py-28 bg-belmav-mist">
        <div className="container-xl">
          <p className="mb-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-belmav-red">
            <span className="h-[2px] w-8 bg-belmav-red" aria-hidden="true" />
            The BelMav Belief
          </p>
          <BeliefReveal />
        </div>
      </section>

      {/* 4. Core Expertise — dark section, 5 numbered rows */}
      <section className="py-24 bg-belmav-black text-belmav-white">
        <div className="container-xl">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <ScrollReveal>
              <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-belmav-gold">
                <span className="h-[2px] w-8 bg-belmav-gold" aria-hidden="true" />
                Core Expertise
              </p>
              <h2 className="max-w-3xl text-3xl md:text-5xl font-extrabold leading-[1.05] text-belmav-white">
                Where SAP Expertise Meets <span className="text-belmav-gold">Finance Transformation.</span>
              </h2>
            </ScrollReveal>
            <Link
              href="/expertise"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-belmav-white/70 hover:text-belmav-gold"
            >
              View All Expertise <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-16 divide-y divide-belmav-white/10 border-t border-belmav-white/10">
            {expertiseAreas.map((e, i) => (
              <ScrollReveal key={e.slug} delay={i * 0.06}>
                <Link
                  href={`/expertise/${e.slug}`}
                  className="group flex flex-col gap-3 py-7 md:flex-row md:items-center md:gap-10"
                >
                  <span className="text-3xl font-extrabold text-belmav-white/20 md:w-16 shrink-0">{`0${i + 1}`}</span>
                  <span className="text-lg font-bold text-belmav-white md:w-56 shrink-0 group-hover:text-belmav-gold transition-colors">
                    {e.title}
                  </span>
                  <span className="text-sm text-belmav-white/60 leading-relaxed">{e.summary}</span>
                  <ArrowRight size={18} className="ml-auto hidden shrink-0 text-belmav-white/40 group-hover:text-belmav-gold md:block" />
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Finance Ecosystem diagram */}
      <section className="py-28">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <SectionHeading kicker="Interactive" title="One Finance Core. Every Process Connected." description="Explore the SAP Finance ecosystem. Select a process to see how each part of the finance core connects to the whole." />
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <FinanceEcosystem />
          </ScrollReveal>
        </div>
      </section>

      {/* 5b. Transformation Story (The Journey) */}
      <div className="py-28">
        <TransformationStory />
      </div>

      {/* 6. ECC to S/4HANA black section */}
      <section className="py-28 bg-belmav-black text-belmav-white">
        <div className="container-xl">
          <SectionHeading kicker="ECC → S/4HANA" title="Your ECC Landscape Has a Future." description="Move from legacy complexity to a modern finance architecture with a transformation strategy designed around your business." dark />
          <div className="mt-10">
            <PrimaryButton href="/sap-transformation">Explore S/4HANA Transformation</PrimaryButton>
          </div>
          <div className="mt-14">
            <EccS4Toggle />
          </div>
        </div>
      </section>

      {/* 7b. Three Pathways recap */}
      <section className="py-24">
        <div className="container-xl">
          <SectionHeading kicker="Three Pathways" title="Choose the Path That Fits Your Reality." />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
            {transformationPathways.map((p, i) => (
              <ScrollReveal key={p.slug} delay={i * 0.1}>
                <div className="flex items-start gap-4 border border-belmav-black/10 p-6">
                  <span className="text-3xl font-extrabold text-belmav-black/15 shrink-0">{`0${i + 1}`}</span>
                  <ExpertiseCard item={p} basePath="/sap-transformation" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Why BelMav — dark section, scroll-linked one-at-a-time reveal */}
      <section className="py-24 bg-belmav-black text-belmav-white">
        <div className="container-xl">
          <SectionHeading kicker="The Difference" title="Why BelMav?" dark />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyPillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.15}>
                <div>
                  <span className="text-4xl font-extrabold text-belmav-white/10">{`0${i + 1}`}</span>
                  <h3 className="mt-3 text-lg font-bold text-belmav-white">{p.title}</h3>
                  <p className="mt-2 text-sm text-belmav-white/60 leading-relaxed">{p.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-14">
            <SecondaryButton href="/about/approach" className="border-belmav-white text-belmav-white hover:bg-belmav-white hover:text-belmav-black">
              Discover the BelMav Approach
            </SecondaryButton>
          </div>
        </div>
      </section>

      {/* 9. Services grid — light-gray section */}
      <section className="py-24 bg-belmav-mist">
        <div className="container-xl">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <SectionHeading
              kicker="Services"
              title={
                <>
                  From Strategy to <span className="text-[#E2544F]">Sustainable SAP Operations.</span>
                </>
              }
            />
            <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-belmav-black hover:text-belmav-red">
              All Services <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {services.map((s, i) => (
              <ScrollReveal key={s.slug} delay={(i % 3) * 0.08}>
                <ServiceCard item={s} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Business Outcomes along the arc */}
      <section className="relative py-28 bg-belmav-black text-belmav-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <TransformationArc className="w-full h-full" animate={false} />
        </div>
        <div className="container-xl relative z-10">
          <p className="mb-14 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.35em] text-belmav-gold">
            <span className="h-[2px] w-10 bg-belmav-gold" aria-hidden="true" />
            What Transformation Delivers
          </p>
          <div className="flex flex-col gap-6">
            {outcomeWords.map((w, i) => (
              <ScrollReveal key={w} delay={i * 0.1}>
                <span className="flex items-center gap-5">
                  <span
                    className={`inline-block h-3.5 w-3.5 shrink-0 ${i % 2 === 0 ? "bg-belmav-red" : "bg-belmav-gold"}`}
                    aria-hidden="true"
                  />
                  <span className="text-2xl sm:text-4xl font-extrabold tracking-tight text-belmav-white">{w}</span>
                </span>
              </ScrollReveal>
            ))}
          </div>
          <p className="mt-14 max-w-xl text-sm leading-relaxed text-belmav-white/50">
            No invented percentages. No borrowed benchmarks. These are the outcomes BelMav transformations are designed
            to deliver—and the ones we discuss honestly, in your context.
          </p>
        </div>
      </section>

      {/* 11. Transformation Navigator wizard — white section, split: heading/steps left, active question right */}
      <section className="py-28 bg-belmav-white">
        <div className="container-xl">
          <NavigatorProvider>
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
              <div>
                <SectionHeading
                  kicker="Interactive Guidance"
                  title="Where Are You in Your SAP Journey?"
                  description="Answer three questions and see how a BelMav transformation path could take shape for your landscape."
                />
                <div className="mt-10">
                  <NavigatorSteps />
                </div>
                <p className="mt-8 max-w-xl text-xs leading-relaxed text-belmav-black/45">
                  This is a BelMav interactive guidance experience, designed to start a conversation. It is not an
                  official SAP assessment tool.
                </p>
              </div>
              <div>
                <NavigatorPanel />
              </div>
            </div>
          </NavigatorProvider>
        </div>
      </section>

      {/* 12. Finance Transformation Canvas */}
      <section className="py-28 bg-belmav-black text-belmav-white">
        <div className="container-xl">
          <SectionHeading kicker="Finance Transformation Canvas" title="Every Capability. One Transformation." dark />
          <div className="mt-14">
            <FinanceCanvas />
          </div>
        </div>
      </section>

      {/* 13. Our Approach — condensed 5-phase homepage teaser (fuller 7-stage version lives on /about/approach) */}
      <section className="py-28">
        <div className="container-xl">
          <SectionHeading kicker="Our Approach" title="A More Predictable Way to Transform." />
          <div className="mt-16">
            <Timeline steps={homeApproachPhases} />
          </div>
          <div className="mt-14">
            <SecondaryButton href="/about/approach">Explore Our Approach</SecondaryButton>
          </div>
        </div>
      </section>

      {/* 14. Industries grid — dark section, staggered scroll reveal */}
      <section className="py-24 bg-belmav-black text-belmav-white">
        <div className="container-xl">
          <SectionHeading
            kicker="Industries"
            title="SAP Finance Across Business Contexts."
            description="How SAP Finance can support your industry — explored honestly, without borrowed claims."
            dark
          />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind.slug} delay={i * 0.09}>
                <IndustryCard item={ind} />
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-14">
            <Link href="/industries" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-belmav-white/70 hover:text-belmav-gold">
              All industries <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* 15. Insights preview */}
      <section className="py-24">
        <div className="container-xl">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <SectionHeading kicker="Insights" title="Perspectives on SAP Finance Transformation." />
            <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-semibold text-belmav-black hover:text-belmav-red">
              All Insights <ArrowRight size={15} />
            </Link>
          </div>
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ScrollReveal className="lg:col-span-2">
              <Link
                href={`/insights/${insights[0].slug}`}
                className="group relative flex h-full min-h-[420px] flex-col justify-end overflow-hidden bg-belmav-black p-9 md:p-12"
              >
                <div className="pointer-events-none absolute inset-0 opacity-25 transition-opacity duration-500 group-hover:opacity-40">
                  <TransformationArc className="h-full w-full" progress={1} strokeWidth={3} showSquares={false} />
                </div>
                <span
                  className="pointer-events-none absolute -right-4 -top-8 select-none text-[160px] font-extrabold leading-none text-belmav-white/[0.06]"
                  aria-hidden="true"
                >
                  01
                </span>
                <div className="relative z-10">
                  <span className="inline-flex w-fit items-center bg-belmav-gold px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-belmav-black">
                    {insights[0].category}
                  </span>
                  <h3 className="mt-5 max-w-2xl text-2xl md:text-4xl font-extrabold leading-[1.08] text-belmav-white">
                    {insights[0].title}
                  </h3>
                  <p className="mt-5 max-w-xl text-belmav-white/65 leading-relaxed">{insights[0].excerpt}</p>
                  <div className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-belmav-white">
                    Read Article
                    <ArrowRight size={15} className="text-belmav-red transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>
                </div>
              </Link>
            </ScrollReveal>
            <div className="flex flex-col gap-6">
              {insights.slice(1, 4).map((a, i) => (
                <ScrollReveal key={a.slug} delay={i * 0.08}>
                  <InsightCard item={a} index={i + 1} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 16. Success Stories preview — reference is border-y-2 border-ink bg-paper (white) */}
      <section className="py-24 border-y-2 border-belmav-black bg-belmav-white">
        <div className="container-xl">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <SectionHeading kicker="Success Stories" title="Stories of Transformation, Told With Evidence." />
            <Link href="/success-stories" className="inline-flex items-center gap-2 text-sm font-semibold text-belmav-black hover:text-belmav-red">
              All stories <ArrowRight size={15} />
            </Link>
          </div>
          <p className="mt-6 max-w-2xl text-belmav-black/65 leading-relaxed">
            Client-approved case studies are being prepared. Until then, explore the framework—challenge, approach,
            solution, outcome—and imagine your story here.
          </p>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
            {successStories.slice(0, 2).map((s, i) => (
              <ScrollReveal key={s.slug} delay={i * 0.08}>
                <CaseStudyCard item={s} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 16b. About preview */}
      <section className="py-24 md:py-32">
        <div className="container-xl grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <SectionHeading kicker="About BelMav" title="Built Around a Simple Belief." />
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-xl md:text-2xl font-semibold leading-relaxed text-belmav-black">
              Transformation should create <span className="text-belmav-red">clarity</span>, not complexity.
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-belmav-black/60">
              BelMav Info Tech is a Belgian SAP Finance &amp; Transformation consultancy built on deep expertise,
              disciplined delivery, and honest advice.
            </p>
            <div className="mt-8">
              <PrimaryButton href="/about">Discover BelMav</PrimaryButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 17. FAQ */}
      <section className="py-28">
        <div className="container-xl max-w-3xl">
          <SectionHeading kicker="FAQ" title="Questions, Answered Honestly." description="The questions we hear most from CFOs, CIOs, and transformation leaders." />
          <div className="mt-10">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* 18. Final cinematic CTA */}
      <section className="relative py-32 bg-belmav-black text-belmav-white overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-40">
          <TransformationArc className="w-full h-full" animate={false} />
        </div>
        <div className="container-xl relative z-10 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight text-balance">
            Your SAP Transformation Deserves Clarity.
          </h2>
          <p className="mt-6 text-belmav-white/70 text-lg">
            Let&apos;s make the next step simpler, smarter and more predictable.
          </p>
          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <PrimaryButton href="/contact">Talk to an SAP Expert</PrimaryButton>
            <GhostLightButton href="/expertise">Explore Our Expertise</GhostLightButton>
          </div>
        </div>
      </section>
    </div>
  );
}
