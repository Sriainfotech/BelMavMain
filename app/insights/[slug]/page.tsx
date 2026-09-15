import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import TransformationArc from "@/components/TransformationArc";
import ScrollReveal from "@/components/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import ClosingCta from "@/components/ClosingCta";
import { InsightCard } from "@/components/cards";
import { insights, getInsightBySlug } from "@/lib/insights";

export function generateStaticParams() {
  return insights.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = getInsightBySlug(params.slug);
  if (!item) return {};
  return { title: item.title, description: item.excerpt };
}

export default function InsightDetailPage({ params }: { params: { slug: string } }) {
  const item = getInsightBySlug(params.slug);
  if (!item) notFound();

  const more = insights.filter((a) => a.slug !== item.slug).slice(0, 3);

  return (
    <div>
      <section className="relative bg-belmav-black text-belmav-white pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 opacity-40">
          <TransformationArc className="w-full h-40" animate={false} />
        </div>
        <div className="container-xl relative z-10 max-w-3xl">
          <Link href="/insights" className="inline-flex items-center gap-2 text-sm text-belmav-white/60 hover:text-belmav-gold mb-8">
            <ArrowLeft size={15} /> All insights
          </Link>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-belmav-gold">{item.category}</span>
          <h1 className="mt-5 text-3xl md:text-5xl font-extrabold leading-[1.1] text-balance">{item.title}</h1>
          <div className="mt-6 flex items-center gap-4 text-sm text-belmav-white/60">
            <span>{item.author}</span>
            <span>·</span>
            <span>{item.readTime}</span>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-xl max-w-3xl">
          {item.sections.map((s, i) => (
            <ScrollReveal key={s.heading} delay={i * 0.05} className="mb-14 last:mb-0">
              <h2 className="text-2xl font-extrabold text-belmav-black mb-4">{s.heading}</h2>
              {s.paragraphs.map((p, j) => (
                <p key={j} className="text-belmav-black/70 leading-relaxed mb-4 last:mb-0">
                  {p}
                </p>
              ))}
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-24 bg-belmav-mist">
        <div className="container-xl">
          <SectionHeading kicker="Continue Reading" title="Keep Reading" />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {more.map((a) => (
              <InsightCard key={a.slug} item={a} />
            ))}
          </div>
        </div>
      </section>

      <ClosingCta
        headline="Discuss This Topic With an Expert."
        outro="Articles inform. Conversations transform."
      />
    </div>
  );
}
