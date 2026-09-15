import { Metadata } from "next";
import { notFound } from "next/navigation";
import DetailTemplate from "@/components/DetailTemplate";
import { services, getServiceBySlug } from "@/lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const item = getServiceBySlug(params.slug);
  if (!item) return {};
  return { title: item.title, description: item.summary };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const item = getServiceBySlug(params.slug);
  if (!item) notFound();

  const related = (item.relatedSlugs || [])
    .map(getServiceBySlug)
    .filter(Boolean)
    .map((r) => ({ slug: r!.slug, title: r!.title, summary: r!.summary }));

  return <DetailTemplate item={item} basePath="/services" relatedItems={related} relatedLabel="Related Services" />;
}
