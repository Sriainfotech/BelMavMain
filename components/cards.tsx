import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { DetailPage } from "@/lib/types";
import { InsightArticle } from "@/lib/insights";
import { SuccessStory } from "@/lib/success-stories";

export function ExpertiseCard({ item, basePath }: { item: DetailPage; basePath: string }) {
  return (
    <Link
      href={`${basePath}/${item.slug}`}
      className="group relative flex flex-col justify-between border border-belmav-black/10 p-8 min-h-[260px] transition-colors duration-300 hover:border-belmav-black bg-belmav-white"
    >
      <div>
        <span className="arc-red-square mb-6 inline-block" />
        <h3 className="text-xl font-bold text-belmav-black">{item.shortTitle}</h3>
        <p className="mt-3 text-sm text-belmav-black/65 leading-relaxed">{item.summary}</p>
      </div>
      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-belmav-black group-hover:text-belmav-red">
        Learn more <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
      </div>
      <span className="absolute left-0 bottom-0 h-1 w-0 bg-arc-gold-red transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}

export function ServiceCard({ item }: { item: DetailPage }) {
  return (
    <Link
      href={`/services/${item.slug}`}
      className="group flex flex-col justify-between border-t-2 border-belmav-black/10 pt-6 transition-colors duration-300 hover:border-belmav-red"
    >
      <div>
        <h3 className="text-lg font-bold text-belmav-black group-hover:text-belmav-red transition-colors">{item.shortTitle}</h3>
        <p className="mt-2 text-sm text-belmav-black/60 leading-relaxed">{item.summary}</p>
      </div>
      <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-belmav-black/50 group-hover:text-belmav-red">
        View service <ArrowRight size={13} />
      </div>
    </Link>
  );
}

export function IndustryCard({ item }: { item: DetailPage }) {
  return (
    <Link
      href={`/industries/${item.slug}`}
      className="group relative overflow-hidden border border-belmav-black/10 p-8 flex flex-col justify-end min-h-[220px] bg-belmav-black text-belmav-white transition-transform duration-300 hover:-translate-y-1"
    >
      <span className="absolute inset-0 bg-arc-black-red opacity-0 group-hover:opacity-90 transition-opacity duration-300" />
      <div className="relative z-10">
        <h3 className="text-xl font-bold">{item.shortTitle}</h3>
        <p className="mt-2 text-sm text-belmav-white/70 leading-relaxed line-clamp-2">{item.summary}</p>
        <div className="mt-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide">
          Explore <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}

const CATEGORY_ACCENT: Record<InsightArticle["category"], "gold" | "red"> = {
  "SAP Finance": "gold",
  Controlling: "red",
  RAR: "gold",
  BRIM: "red",
  Transformation: "red",
  "S/4HANA": "gold",
};

export function InsightCard({ item, index }: { item: InsightArticle; index?: number }) {
  const accent = CATEGORY_ACCENT[item.category];
  return (
    <Link
      href={`/insights/${item.slug}`}
      className="group relative flex h-full flex-col overflow-hidden border border-belmav-black/10 bg-belmav-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-belmav-black hover:shadow-[0_16px_40px_-20px_rgba(0,0,0,0.35)]"
    >
      {/* Top accent bar — sweeps in on hover */}
      <span
        className={`absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 ${
          accent === "gold" ? "bg-belmav-gold" : "bg-belmav-red"
        }`}
        aria-hidden="true"
      />
      {/* Large ghost index number — part of the site's 01/02 numbering motif */}
      {typeof index === "number" && (
        <span
          className="pointer-events-none absolute -right-2 -top-3 select-none text-[72px] font-extrabold leading-none text-belmav-black/[0.05]"
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      )}

      <div className="relative z-10 flex h-full flex-col">
        <span
          className={`inline-flex w-fit items-center px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.16em] ${
            accent === "gold" ? "bg-belmav-gold text-belmav-black" : "bg-belmav-red text-belmav-white"
          }`}
        >
          {item.category}
        </span>
        <h3 className="mt-4 text-lg font-bold leading-snug text-belmav-black">
          <span className="bg-gradient-to-r from-belmav-red to-belmav-red bg-[length:0%_2px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_2px]">
            {item.title}
          </span>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-belmav-black/60">{item.excerpt}</p>
        <div className="mt-6 flex items-center justify-between border-t border-belmav-black/10 pt-4 text-xs text-belmav-black/45">
          <span className="truncate">{item.author}</span>
          <span className="flex shrink-0 items-center gap-1.5 font-bold uppercase tracking-[0.1em] text-belmav-black group-hover:text-belmav-red">
            {item.readTime}
            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function CaseStudyCard({ item }: { item: SuccessStory }) {
  return (
    <Link
      href={`/success-stories/${item.slug}`}
      className="group flex flex-col justify-between border border-belmav-black/10 p-8 h-full bg-belmav-mist transition-colors duration-300 hover:bg-belmav-black hover:text-belmav-white"
    >
      <div>
        <span className="text-xs font-semibold uppercase tracking-wide text-belmav-red">{item.industry}</span>
        <h3 className="mt-3 text-xl font-bold leading-snug">{item.title}</h3>
        <p className="mt-3 text-sm opacity-70 leading-relaxed">{item.descriptor}</p>
      </div>
      <div className="mt-6 flex items-center gap-2 text-sm font-semibold">
        Read the story <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
