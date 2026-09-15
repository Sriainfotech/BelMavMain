"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import TransformationArc from "@/components/TransformationArc";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import ClosingCta from "@/components/ClosingCta";
import { InsightCard } from "@/components/cards";
import { insights } from "@/lib/insights";
import { Search } from "lucide-react";

const categories = ["All", "SAP Finance", "S/4HANA", "Controlling", "RAR", "BRIM", "Transformation"] as const;

export default function InsightsListClient() {
  const searchParams = useSearchParams();
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fromUrl = searchParams.get("category");
    if (fromUrl && (categories as readonly string[]).includes(fromUrl)) {
      setCategory(fromUrl as (typeof categories)[number]);
    }
    // Only sync from the URL once, on initial load — the buttons then own state.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = useMemo(() => {
    return insights.filter((a) => {
      const matchesCategory = category === "All" || a.category === category;
      const matchesQuery =
        query.trim() === "" ||
        a.title.toLowerCase().includes(query.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  return (
    <div>
      <section className="relative bg-belmav-black text-belmav-white pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 opacity-40">
          <TransformationArc className="w-full h-40" animate={false} />
        </div>
        <div className="container-xl relative z-10">
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-belmav-gold">Insights</span>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold max-w-3xl leading-[1.05]">
            Perspectives on SAP Finance Transformation.
          </h1>
          <p className="mt-6 text-lg text-belmav-white/70 max-w-2xl leading-relaxed">
            Thinking from the field: honest, practical, and free of invented benchmarks.
          </p>
        </div>
      </section>

      <section className="py-16 border-b border-belmav-black/10">
        <div className="container-xl flex flex-col md:flex-row md:items-center gap-6 justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-4 py-2 text-xs font-semibold uppercase tracking-wide border transition-colors ${
                  category === c ? "bg-belmav-black text-belmav-white border-belmav-black" : "border-belmav-black/20 text-belmav-black/60 hover:border-belmav-black"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-belmav-black/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search insights..."
              aria-label="Search insights"
              className="w-full border border-belmav-black/20 pl-9 pr-4 py-2.5 text-sm focus:outline-none focus:border-belmav-black"
            />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-xl">
          {filtered.length === 0 ? (
            <p className="text-belmav-black/60">No insights match your search. Try a different term or category.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filtered.map((a, i) => (
                <ScrollReveal key={a.slug} delay={(i % 3) * 0.06}>
                  <InsightCard item={a} index={i} />
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <ClosingCta
        headline="Prefer a Conversation Over an Article?"
        outro="The best insight is the one applied to your landscape."
      />
    </div>
  );
}
