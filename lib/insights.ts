export type InsightArticle = {
  slug: string;
  title: string;
  category: "SAP Finance" | "Controlling" | "RAR" | "BRIM" | "Transformation" | "S/4HANA";
  excerpt: string;
  author: string;
  readTime: string;
  sections: { heading: string; paragraphs: string[] }[];
};

export const insights: InsightArticle[] = [
  {
    slug: "ecc-to-s4hana-where-a-predictable-journey-actually-starts",
    title: "ECC to S/4HANA: Where a Predictable Journey Actually Starts",
    category: "Transformation",
    excerpt:
      "The most important transformation decisions happen before any system is touched. Here is how to create clarity first.",
    author: "BelMav Editorial Team",
    readTime: "6 min read",
    sections: [
      {
        heading: "Before the system, the decisions",
        paragraphs: [
          "The most important decisions in an ECC to S/4HANA journey are made before any system is touched: what the target operating model looks like, which transformation pathway fits your landscape, and what 'done' actually means for finance.",
          "Getting this sequence right—clarity before configuration—is what separates a predictable journey from one that discovers its real scope midway through.",
        ],
      },
      {
        heading: "What a predictable start looks like",
        paragraphs: [
          "A structured assessment of your current landscape, an honest view of your data and process complexity, and a deliberate choice of pathway—greenfield, brownfield, or selective data transition—give the project team something real to plan against.",
        ],
      },
    ],
  },
  {
    slug: "greenfield-brownfield-or-selective-choosing-with-evidence",
    title: "Greenfield, Brownfield, or Selective: Choosing With Evidence",
    category: "Transformation",
    excerpt:
      "Three pathways to S/4HANA, three different balances of continuity and change. How to choose based on evidence, not fashion.",
    author: "BelMav Editorial Team",
    readTime: "6 min read",
    sections: [
      {
        heading: "The question underneath the question",
        paragraphs: [
          "The pathway decision is really a question about your current system: how much of what exists today is genuinely valuable, and how much is complexity that accumulated by accident rather than by design.",
        ],
      },
      {
        heading: "Choosing with evidence",
        paragraphs: [
          "A short, structured assessment of your chart of accounts, custom code, and process variation gives a far more reliable basis for choosing greenfield, brownfield, or selective data transition than timeline pressure or vendor preference.",
        ],
      },
    ],
  },
  {
    slug: "what-real-time-finance-actually-means-for-your-closing",
    title: 'What "Real-Time Finance" Actually Means for Your Closing',
    category: "S/4HANA",
    excerpt:
      "Beyond the slogan: what changes in your actual closing calendar when finance and controlling share one data model.",
    author: "BelMav Editorial Team",
    readTime: "5 min read",
    sections: [
      {
        heading: "Not just faster—different",
        paragraphs: [
          "'Real-time finance' is often used as a slogan. In practice, it means specific close activities—reconciliation between FI and CO chief among them—simply stop being necessary once both report from the Universal Journal.",
        ],
      },
      {
        heading: "What this means for your calendar",
        paragraphs: [
          "The benefit only shows up in your actual closing calendar if the underlying chart of accounts and controlling structures are redesigned for it—carrying over old structures largely forfeits the gain.",
        ],
      },
    ],
  },
  {
    slug: "controlling-that-drives-decisions-not-administration",
    title: "Controlling That Drives Decisions, Not Administration",
    category: "Controlling",
    excerpt:
      "A controlling function that produces trusted insight, not just reports nobody quite trusts without manual adjustment.",
    author: "BelMav Editorial Team",
    readTime: "5 min read",
    sections: [
      {
        heading: "From reports to decisions",
        paragraphs: [
          "Controlling exists to inform decisions—what did this cost, what did it earn, where should attention go next. When allocations don't reconcile to the ledger and margin reports need manual adjustment, controlling drifts into producing reports instead of insight.",
        ],
      },
      {
        heading: "Designing for decisions",
        paragraphs: [
          "Cost center, profit center, and profitability structures that reflect how the business actually manages performance—reconciled cleanly to the general ledger—turn controlling back into a decision engine rather than an administrative burden.",
        ],
      },
    ],
  },
  {
    slug: "why-finance-transformation-fails-before-first-line-of-config",
    title: "Why Finance Transformation Fails Before the First Line of Configuration",
    category: "Transformation",
    excerpt:
      "Most SAP Finance transformation risk is created — or avoided — before any system work begins. Here's where it actually gets decided.",
    author: "BelMav Editorial Team",
    readTime: "6 min read",
    sections: [
      {
        heading: "Configuration is not where transformation starts",
        paragraphs: [
          "It is tempting to think of SAP Finance transformation as a technical exercise that begins when the project team opens the configuration guide. In practice, the outcome of most transformations is substantially determined earlier — in how scope is framed, who is in the room for design decisions, and whether the organization has agreed on what 'done' actually means.",
          "Projects that struggle later frequently share an early symptom: the business case was written to justify a decision already made, rather than to test whether that decision was right.",
        ],
      },
      {
        heading: "Three decisions that carry outsized weight",
        paragraphs: [
          "First, the choice of transformation pathway — greenfield, brownfield, or selective data transition — is often made based on timeline pressure rather than a clear-eyed look at how much value the current landscape actually holds versus how much complexity it carries.",
          "Second, who owns the chart of accounts and process design decisions. When these are left primarily to IT, the resulting system tends to be technically sound but operationally awkward for finance. When finance leadership is engaged from the start, the design reflects how the business actually needs to close, report, and analyze performance.",
          "Third, how 'success' is defined. Vague ambitions like 'modernize finance' are hard to design against and harder to measure. Specific, business-owned outcomes — a shorter close, fewer manual reconciliations, real-time margin visibility — give the project team something concrete to design toward.",
        ],
      },
      {
        heading: "What this means in practice",
        paragraphs: [
          "Before any configuration begins, it is worth investing real time in a structured assessment: what does the current landscape actually cost the business in manual effort and risk, what does the organization actually need from the target state, and which transformation pathway genuinely fits that need. This is advisory work, not a formality — and it is far cheaper to get wrong on paper than in a live system.",
        ],
      },
    ],
  },
  {
    slug: "universal-journal-explained",
    title: "The Universal Journal, Explained: What Actually Changes in S/4HANA Finance",
    category: "S/4HANA",
    excerpt:
      "Beyond the slogan: how S/4HANA Finance changes the rhythm of closing, reporting, and decision-making.",
    author: "BelMav Editorial Team",
    readTime: "7 min read",
    sections: [
      {
        heading: "One table, not many",
        paragraphs: [
          "In classic ECC, financial accounting and controlling data lived in separate tables, updated by separate processes, and reconciled — often manually — to keep them aligned. The Universal Journal (technically, the ACDOCA table) merges these into a single line-item table that both FI and CO post to and read from.",
          "This is not a cosmetic change. It removes an entire category of reconciliation work that exists purely to compensate for having two data models trying to describe the same business events.",
        ],
      },
      {
        heading: "What this enables",
        paragraphs: [
          "Because every posting carries both financial and controlling dimensions simultaneously, reporting can pull real-time views that combine general ledger and management accounting perspectives without waiting for period-end reconciliation jobs to run.",
          "It also means margin and profitability data live closer to the ledger, rather than in a parallel structure that needs to be independently trusted.",
        ],
      },
      {
        heading: "Why this doesn't happen automatically",
        paragraphs: [
          "None of this benefit is automatic simply by moving to S/4HANA. A migration that carries forward a chart of accounts and controlling structure designed for the old two-table model will not naturally produce a clean Universal Journal. Realizing the benefit requires deliberately designing the target data model — which is precisely why the process design work around a migration matters as much as the technical conversion itself.",
        ],
      },
    ],
  },
  {
    slug: "greenfield-vs-brownfield-honest-comparison",
    title: "Greenfield vs. Brownfield: An Honest Comparison, Not a Sales Pitch",
    category: "Transformation",
    excerpt:
      "Three pathways to S/4HANA, three different balances of continuity and change. How to choose with facts instead of fashion.",
    author: "BelMav Editorial Team",
    readTime: "6 min read",
    sections: [
      {
        heading: "The question underneath the question",
        paragraphs: [
          "The greenfield-versus-brownfield decision is often framed as a technology choice, but it is really a question about your current system: how much of what exists today is genuinely valuable, and how much is complexity that accumulated by accident rather than by design.",
          "If your chart of accounts, processes, and customizations reflect deliberate, still-relevant business decisions, a brownfield conversion lets you carry that value forward efficiently. If they reflect years of unexamined workarounds, a greenfield rebuild may be the faster route to a system that's actually easier to run.",
        ],
      },
      {
        heading: "Greenfield's real cost",
        paragraphs: [
          "Greenfield is not simply 'more thorough' — it is a different kind of project, with a different kind of risk. The redesign work requires significant time from finance stakeholders, and without disciplined scope governance, a clean-slate project can slowly reabsorb the same complexity it was meant to eliminate, one 'special case' at a time.",
        ],
      },
      {
        heading: "Brownfield's real cost",
        paragraphs: [
          "Brownfield is faster and less disruptive, but it is honest to say it does not fix what was already broken. Custom code that barely fit the old data model, processes that nobody loved but everybody tolerated — these come along for the ride unless explicitly addressed as part of the conversion.",
        ],
      },
      {
        heading: "A third option worth considering",
        paragraphs: [
          "Selective Data Transition exists precisely because most organizations' answer to 'how much of our current system is worth keeping' is 'some of it, not all of it.' It allows a more surgical approach — redesigning where it matters, preserving where it doesn't.",
        ],
      },
    ],
  },
  {
    slug: "sap-rar-when-do-you-actually-need-it",
    title: "SAP RAR: When Do You Actually Need It?",
    category: "RAR",
    excerpt:
      "SAP RAR projects succeed when they deliver recognition logic that finance can explain—not just numbers the system produces.",
    author: "BelMav Editorial Team",
    readTime: "5 min read",
    sections: [
      {
        heading: "The compliance requirement is universal; the tooling isn't",
        paragraphs: [
          "IFRS 15 and ASC 606 apply broadly, regardless of company size or system landscape. But the complexity of applying them varies enormously — and so does the case for implementing a dedicated revenue accounting engine like SAP RAR versus managing recognition through simpler means.",
        ],
      },
      {
        heading: "Signals that point toward SAP RAR",
        paragraphs: [
          "Contracts that bundle multiple performance obligations with different recognition patterns. Revenue that needs to be recognized on a different timeline than it is billed — subscriptions, milestone-based services, multi-year licenses. A volume of contracts that has outgrown what a spreadsheet-based recognition model can handle without significant manual risk.",
        ],
      },
      {
        heading: "Signals that suggest you may not need it yet",
        paragraphs: [
          "If your revenue is recognized essentially at the point of billing, with few or no multi-element arrangements, the operational complexity of RAR may outweigh its benefit. This is a legitimate answer, and one we're comfortable giving — not every organization needs every SAP capability, and the right advice sometimes points away from a bigger project, not toward one.",
        ],
      },
    ],
  },
  {
    slug: "what-is-sap-brim-beyond-telecom",
    title: "What SAP BRIM Is — and Why It's No Longer Just for Telecom",
    category: "BRIM",
    excerpt:
      "New commercial models succeed or fail in the billing engine. Why SAP BRIM belongs in the business model conversation.",
    author: "BelMav Editorial Team",
    readTime: "6 min read",
    sections: [
      {
        heading: "The problem BRIM was built to solve",
        paragraphs: [
          "Traditional order-to-cash processes assume a relatively simple relationship: an order, a delivery, an invoice. Subscription and usage-based business models break that assumption — pricing can be tiered, usage-dependent, bundled, or renegotiated mid-contract, and billing volume can be enormous.",
          "SAP BRIM — combining Subscription Order Management, Convergent Charging, and Convergent Invoicing — was originally built for telecom operators facing exactly this problem at scale.",
        ],
      },
      {
        heading: "Why the same problem now shows up everywhere",
        paragraphs: [
          "Subscription and consumption-based pricing has spread well beyond telecom: software, industrial equipment sold as a service, energy and utilities, media, and increasingly manufacturing businesses moving toward outcome-based commercial models all face variations of the same billing complexity telecom solved for first.",
        ],
      },
      {
        heading: "The finance angle, not just the billing angle",
        paragraphs: [
          "BRIM implementations are sometimes scoped as pure billing projects, which underestimates the work. Getting revenue recognition right — typically through integration with SAP RAR — is what turns a billing platform into a compliant, auditable finance capability, and it deserves the same design attention as the charging and invoicing logic itself.",
        ],
      },
    ],
  },
  {
    slug: "measuring-finance-transformation-without-vanity-metrics",
    title: "Measuring Finance Transformation Without Vanity Metrics",
    category: "SAP Finance",
    excerpt:
      "Generic industry benchmarks make for good slide decks and bad decisions. Here's how to define success measures that actually mean something for your organization.",
    author: "BelMav Editorial Team",
    readTime: "5 min read",
    sections: [
      {
        heading: "The problem with borrowed benchmarks",
        paragraphs: [
          "It is common to see finance transformation business cases built around industry-average statistics — a generic close-cycle benchmark, a generic percentage cost reduction. These numbers are rarely sourced from a comparable organization, and they tend to quietly become the target, even though nobody can fully explain where they came from.",
        ],
      },
      {
        heading: "A better starting point: your own baseline",
        paragraphs: [
          "Before defining what 'better' looks like, it's worth precisely measuring what 'now' looks like: how long does the close actually take, broken down by activity; how many manual reconciliations exist and why; how much reporting is produced outside the core system because nobody fully trusts what's inside it.",
          "This baseline, specific to your organization, is a far more useful foundation for a business case than an externally sourced statistic — and it gives the project team something real to design against.",
        ],
      },
      {
        heading: "Qualitative outcomes are legitimate outcomes",
        paragraphs: [
          "Not every meaningful outcome reduces neatly to a percentage. 'Finance trusts the numbers without manual adjustment' or 'the close no longer depends on two specific people' are real, valuable outcomes — and honest ones, since they can be verified rather than merely asserted.",
        ],
      },
    ],
  },
];

export function getInsightBySlug(slug: string) {
  return insights.find((i) => i.slug === slug);
}
