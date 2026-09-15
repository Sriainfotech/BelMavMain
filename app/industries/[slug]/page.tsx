import { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailTemplate from "@/components/DetailTemplate";
import { industries, getIndustryBySlug } from "@/lib/industries";
import { getExpertiseBySlug } from "@/lib/expertise";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = getIndustryBySlug(params.slug);
  if (!item) return {};
  return { title: item.title, description: item.summary };
}

export default function IndustryDetailPage({ params }: { params: { slug: string } }) {
  const item = getIndustryBySlug(params.slug);
  if (!item) notFound();

  const related = (item.relatedSlugs || [])
    .map(getExpertiseBySlug)
    .filter(Boolean)
    .map((r) => ({ slug: r!.slug, title: r!.title, summary: r!.summary, href: `/expertise/${r!.slug}` }));

  return <DetailTemplate item={item} basePath="/industries" relatedItems={related} relatedLabel="Related Expertise" />;
}
