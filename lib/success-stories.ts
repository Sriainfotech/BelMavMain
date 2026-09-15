export type SuccessStory = {
  slug: string;
  title: string;
  descriptor: string;
  industry: string;
  summary: string;
  challenge: string[];
  approach: string[];
  outcome: string[];
};

// Client-approved case studies are being prepared. Until then, this is the
// framework every BelMav story will follow — challenge, approach, solution,
// outcome — told with evidence once client-approved. No invented logos,
// metrics, or quotes.
export const successStories: SuccessStory[] = [
  {
    slug: "finance-transformation-story",
    title: "A Finance Transformation Story",
    descriptor: "Placeholder — pending client & legal review",
    industry: "Finance Transformation",
    summary:
      "A BelMav client story will live here: the challenge, the approach, the solution, and the outcome—approved and attributable.",
    challenge: [
      "Placeholder — the client's business challenge will be described here once an approved story is available.",
      "Placeholder — the business context: landscape, organization, and ambition.",
    ],
    approach: [
      "Placeholder — how BelMav structured the engagement, from assessment through delivery.",
      "Placeholder — the solution design and what was delivered.",
    ],
    outcome: [
      "Placeholder — the outcome, in approved client terms.",
      "Placeholder — the qualitative outcome, described in the client's approved words. No invented metrics.",
      "Placeholder — what this engagement teaches about predictable transformation.",
    ],
  },
  {
    slug: "rar-implementation-story",
    title: "A Practical Path to RAR",
    descriptor: "Placeholder — pending client & legal review",
    industry: "SAP RAR",
    summary:
      "A BelMav RAR story will live here: contracts, obligations, recognition—and the clarity that followed.",
    challenge: [
      "Placeholder — the client's revenue recognition challenge will be described here.",
      "Placeholder — the contract landscape and finance organization context.",
    ],
    approach: [
      "Placeholder — the pragmatic delivery approach, from contract analysis to increments.",
      "Placeholder — the RAR design and integration delivered.",
    ],
    outcome: [
      "Placeholder — the outcome, in approved client terms.",
      "Placeholder — lessons for organizations considering RAR.",
    ],
  },
  {
    slug: "brim-modernization-story",
    title: "Billing, Modernized for New Models",
    descriptor: "Placeholder — pending client & legal review",
    industry: "SAP BRIM",
    summary:
      "A BelMav BRIM story will live here: subscription and usage models on a billing architecture built to scale.",
    challenge: [
      "Placeholder — the billing and revenue challenge will be described here.",
      "Placeholder — the commercial model ambition and legacy constraints.",
    ],
    approach: [
      "Placeholder — how business and billing design came together.",
      "Placeholder — the BRIM architecture delivered.",
    ],
    outcome: [
      "Placeholder — the outcome, in approved client terms.",
      "Placeholder — lessons for billing modernization programs.",
    ],
  },
];

export function getSuccessStoryBySlug(slug: string) {
  return successStories.find((s) => s.slug === slug);
}
