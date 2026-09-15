import { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailTemplate from "@/components/DetailTemplate";
import { transformationPathways, getPathwayBySlug } from "@/lib/transformation";

export function generateStaticParams() {
  return transformationPathways.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = getPathwayBySlug(params.slug);
  if (!item) return {};
  return { title: item.title, description: item.summary };
}

export default function PathwayDetailPage({ params }: { params: { slug: string } }) {
  const item = getPathwayBySlug(params.slug);
  if (!item) notFound();

  const related = (item.relatedSlugs || [])
    .map(getPathwayBySlug)
    .filter(Boolean)
    .map((r) => ({ slug: r!.slug, title: r!.title, summary: r!.summary }));

  return <DetailTemplate item={item} basePath="/sap-transformation" relatedItems={related} relatedLabel="Other Pathways" />;
}
