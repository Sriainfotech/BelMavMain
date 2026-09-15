import { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailTemplate from "@/components/DetailTemplate";
import { expertiseAreas, getExpertiseBySlug } from "@/lib/expertise";

export function generateStaticParams() {
  return expertiseAreas.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = getExpertiseBySlug(params.slug);
  if (!item) return {};
  return { title: item.title, description: item.summary };
}

export default function ExpertiseDetailPage({ params }: { params: { slug: string } }) {
  const item = getExpertiseBySlug(params.slug);
  if (!item) notFound();

  const related = (item.relatedSlugs || [])
    .map(getExpertiseBySlug)
    .filter(Boolean)
    .map((r) => ({ slug: r!.slug, title: r!.title, summary: r!.summary }));

  return <DetailTemplate item={item} basePath="/expertise" relatedItems={related} relatedLabel="Related Expertise" />;
}
