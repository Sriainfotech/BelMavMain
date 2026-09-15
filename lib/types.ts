export type DetailPage = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  heroKicker: string;
  /** Punchy marketing headline (spec H1), distinct from the plain `title`. Falls back to `title` if omitted. */
  headline?: string;
  overview: string;
  challenge: string;
  /** Sub-heading for the "opportunities" block on expertise pages (e.g. "Transformation Opportunities"). */
  opportunitiesHeading?: string;
  whatWeDo: { title: string; description: string }[];
  approach: { phase: string; description: string }[];
  capabilities: string[];
  businessValue: string[];
  faq: { q: string; a: string }[];
  relatedSlugs?: string[];
};
