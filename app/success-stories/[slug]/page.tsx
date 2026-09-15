import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import TransformationArc from "@/components/TransformationArc";
import ScrollReveal from "@/components/ScrollReveal";
import ClosingCta from "@/components/ClosingCta";
import { successStories, getSuccessStoryBySlug } from "@/lib/success-stories";

export function generateStaticParams() {
  return successStories.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = getSuccessStoryBySlug(params.slug);
  if (!item) return {};
  return { title: item.title, description: item.summary };
}

export default function SuccessStoryDetailPage({ params }: { params: { slug: string } }) {
  const item = getSuccessStoryBySlug(params.slug);
  if (!item) notFound();

  const more = successStories.filter((s) => s.slug !== item.slug);

  return (
    <div>
      <section className="relative bg-belmav-black text-belmav-white pt-40 pb-20 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 opacity-40">
          <TransformationArc className="w-full h-40" animate={false} />
        </div>
        <div className="container-xl relative z-10 max-w-3xl">
          <Link href="/success-stories" className="inline-flex items-center gap-2 text-sm text-belmav-white/60 hover:text-belmav-gold mb-8">
            <ArrowLeft size={15} /> All Success Stories
          </Link>
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-belmav-gold">{item.industry} · {item.descriptor}</span>
          <h1 className="mt-5 text-3xl md:text-5xl font-extrabold leading-[1.1] text-balance">{item.title}</h1>
          <p className="mt-6 text-lg text-belmav-white/70 leading-relaxed">{item.summary}</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-xl max-w-3xl grid grid-cols-1 gap-14">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-belmav-black mb-4">The Challenge</h2>
            <ul className="space-y-3">
              {item.challenge.map((c, i) => (
                <li key={i} className="text-belmav-black/70 leading-relaxed border-l-2 border-belmav-red pl-5">
                  {c}
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2 className="text-2xl font-extrabold text-belmav-black mb-4">Our Approach</h2>
            <ul className="space-y-3">
              {item.approach.map((c, i) => (
                <li key={i} className="text-belmav-black/70 leading-relaxed border-l-2 border-belmav-gold pl-5">
                  {c}
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal delay={0.16}>
            <h2 className="text-2xl font-extrabold text-belmav-black mb-4">Outcome</h2>
            <ul className="space-y-3">
              {item.outcome.map((c, i) => (
                <li key={i} className="text-belmav-black/70 leading-relaxed border-l-2 border-belmav-black pl-5">
                  {c}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {more.length > 0 && (
        <section className="py-16 border-t-2 border-belmav-black">
          <div className="container-xl">
            <p className="mb-8 text-xs font-bold uppercase tracking-[0.3em] text-belmav-black/45">
              More frameworks
            </p>
            <div className="flex flex-wrap gap-3">
              {more.map((s) => (
                <Link
                  key={s.slug}
                  href={`/success-stories/${s.slug}`}
                  className="group inline-flex items-center gap-2 border-2 border-belmav-black px-5 py-3 text-sm font-bold text-belmav-black transition-colors duration-300 hover:bg-belmav-black hover:text-belmav-white"
                >
                  {s.title}
                  <ArrowLeft size={14} className="rotate-180 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ClosingCta
        headline="Ready to Write the Real Version?"
        outro="The best case studies begin as honest first conversations."
      />
    </div>
  );
}
