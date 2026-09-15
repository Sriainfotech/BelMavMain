import { DetailPage } from "./types";

export const expertiseAreas: DetailPage[] = [
  {
    slug: "sap-finance",
    title: "SAP Finance",
    shortTitle: "Finance",
    summary:
      "Design and run a finance core that gives the business clarity, control, and confidence.",
    heroKicker: "Expertise",
    headline: "Build a Finance Core Ready for What's Next.",
    overview:
      "SAP Finance is the backbone of the enterprise. We help you design, implement, and modernize financial accounting so closing is faster, reporting is clearer, and the finance core is ready for S/4HANA.",
    opportunitiesHeading: "Transformation Opportunities",
    challenge:
      "Whether you are stabilizing an ECC landscape or preparing for S/4HANA, we identify where simplification creates the most value: chart of accounts rationalization, closing acceleration, integration clean-up, and reporting modernization. Every recommendation is grounded in business outcomes, not technology for its own sake.",
    whatWeDo: [
      {
        title: "Financial Accounting",
        description:
          "A clean, well-structured financial accounting foundation aligned with how your business actually runs.",
      },
      {
        title: "General Ledger",
        description:
          "Ledger design that simplifies structures and prepares you for real-time reporting.",
      },
      {
        title: "Accounts Payable",
        description:
          "Streamlined supplier processes with better visibility and control over outgoing cash.",
      },
      {
        title: "Accounts Receivable",
        description:
          "Faster, clearer receivables processes that support healthy working capital.",
      },
      {
        title: "Asset Accounting",
        description:
          "Transparent asset lifecycles, from acquisition to retirement, across valuations.",
      },
      {
        title: "Bank Accounting",
        description:
          "Connected, automated bank processes with reliable reconciliation.",
      },
      {
        title: "Closing",
        description:
          "A disciplined, faster close—locally and across the group.",
      },
      {
        title: "Reporting",
        description:
          "Financial reporting that decision-makers can trust, without manual rework.",
      },
      {
        title: "Finance Integration",
        description:
          "Finance connected to logistics, projects, and revenue processes end to end.",
      },
    ],
    approach: [
      { phase: "Assess", description: "Review current financial processes, pain points, and data structures against target-state ambitions." },
      { phase: "Design", description: "Define ledger strategy, chart of accounts, and process flows with finance stakeholders, not just IT." },
      { phase: "Build", description: "Configure and test the solution against realistic close and reporting scenarios." },
      { phase: "Stabilize", description: "Support the first close cycles and refine based on how the process actually runs." },
    ],
    capabilities: [
      "New General Ledger & Universal Journal",
      "Document splitting & parallel ledgers",
      "Accounts Payable & Accounts Receivable",
      "Asset Accounting",
      "Bank Accounting & Treasury integration",
      "Intercompany reconciliation",
      "Financial close orchestration",
    ],
    businessValue: [
      "A shorter, more predictable close",
      "Fewer manual reconciliations and workarounds",
      "Financial data that finance teams trust",
      "A chart of accounts built for reporting, not just posting",
    ],
    faq: [
      {
        q: "Do you work with existing chart of accounts structures?",
        a: "Yes. We assess whether an existing structure can be extended or whether a redesign is warranted, and we make that trade-off explicit before committing to an approach.",
      },
      {
        q: "Can SAP Finance work be scoped independently of a full transformation?",
        a: "Yes. Finance design work is often the starting point of a broader transformation, but it can also be scoped as a focused engagement on its own.",
      },
    ],
    relatedSlugs: ["sap-controlling", "sap-rar", "sap-brim", "s4hana-finance"],
  },
  {
    slug: "sap-controlling",
    title: "SAP Controlling",
    shortTitle: "Controlling",
    summary:
      "Management accounting that turns financial data into better business decisions.",
    heroKicker: "Expertise",
    headline: "Turn Financial Data Into Better Decisions.",
    overview:
      "Controlling is where finance meets the business. We design cost and profitability structures that give leaders the insight they need—without unnecessary complexity.",
    opportunitiesHeading: "From Data to Decisions",
    challenge:
      "Many organizations have controlling structures that grew organically and no longer match the business. We help you simplify allocations, clarify ownership, and redesign profitability reporting—so controlling becomes a decision engine, not an administrative burden.",
    whatWeDo: [
      {
        title: "Management Accounting",
        description:
          "A controlling architecture aligned with how decisions are actually made.",
      },
      {
        title: "Cost Center Accounting",
        description:
          "Clear cost ownership and transparency across the organization.",
      },
      {
        title: "Profit Center Accounting",
        description:
          "Responsibility structures that reflect your business model.",
      },
      {
        title: "Internal Orders",
        description:
          "Controlled tracking of initiatives, projects, and one-off costs.",
      },
      {
        title: "Product Costing",
        description:
          "Cost structures that support pricing, margin, and make-or-buy decisions.",
      },
      {
        title: "Profitability Analysis",
        description:
          "Margin visibility by product, customer, channel, and market.",
      },
      {
        title: "Planning",
        description:
          "Planning and forecasting processes connected to actuals.",
      },
      {
        title: "Reporting",
        description:
          "Management reporting that is fast, consistent, and trusted.",
      },
      {
        title: "Integration",
        description:
          "Controlling integrated with finance, logistics, and revenue processes.",
      },
    ],
    approach: [
      { phase: "Assess", description: "Understand current cost and profitability reporting, and where trust breaks down." },
      { phase: "Design", description: "Define controlling structures and allocation logic with finance and operations together." },
      { phase: "Build", description: "Configure and validate against real cost and margin scenarios." },
      { phase: "Stabilize", description: "Support the first management reporting cycles and tune the model." },
    ],
    capabilities: [
      "Cost Center Accounting",
      "Internal Orders",
      "Profitability Analysis (margin analysis)",
      "Product Costing & standard costing",
      "Overhead allocation & settlement",
      "Management reporting alignment with FI",
    ],
    businessValue: [
      "Profitability insight management actually trusts",
      "Cost allocations that reconcile to the ledger",
      "Faster, more confident margin decisions",
      "Fewer offline spreadsheets replacing the system",
    ],
    faq: [
      {
        q: "How does controlling relate to SAP Finance in S/4HANA?",
        a: "In S/4HANA, controlling and finance share the Universal Journal, so a well-designed controlling model reconciles naturally with financial accounting rather than requiring separate reconciliation.",
      },
      {
        q: "Can you help redesign an existing profitability analysis model?",
        a: "Yes. We frequently review and re-architect margin analysis models that have grown inconsistent over time.",
      },
    ],
    relatedSlugs: ["sap-finance", "sap-rar", "sap-brim", "s4hana-finance"],
  },
  {
    slug: "sap-rar",
    title: "SAP Revenue Accounting and Reporting (RAR)",
    shortTitle: "RAR",
    summary:
      "Structured, transparent revenue recognition for modern contract models.",
    heroKicker: "Expertise",
    headline: "Make Revenue Recognition More Transparent.",
    overview:
      "SAP Revenue Accounting and Reporting brings structure to complex revenue processes. We help you design and implement RAR so recognition is transparent, auditable, and aligned with your contract landscape.",
    opportunitiesHeading: "A Practical Path to RAR",
    challenge:
      "RAR projects succeed when contract data, process design, and finance requirements are aligned early. We start from your contract reality, define a pragmatic target design, and deliver in controlled increments—so transparency improves without disrupting the close.",
    whatWeDo: [
      {
        title: "Revenue Accounting",
        description:
          "A structured approach to recognizing revenue across contract types.",
      },
      {
        title: "Contracts",
        description:
          "Revenue contracts modeled clearly from source systems.",
      },
      {
        title: "Performance Obligations",
        description:
          "Obligations identified, priced, and tracked with discipline.",
      },
      {
        title: "Revenue Allocation",
        description:
          "Transparent allocation logic that finance teams can explain.",
      },
      {
        title: "Recognition Processes",
        description:
          "Automated recognition over time or at a point in time.",
      },
      {
        title: "Reporting",
        description:
          "Clear visibility into recognized and deferred revenue.",
      },
      {
        title: "Integration",
        description:
          "RAR connected to SD, FI, and your upstream contract sources.",
      },
      {
        title: "Transformation Considerations",
        description:
          "How RAR fits into your ECC-to-S/4HANA journey.",
      },
    ],
    approach: [
      { phase: "Assess", description: "Review current revenue recognition processes and contract complexity." },
      { phase: "Design", description: "Model performance obligations and integration points with sales and billing." },
      { phase: "Build", description: "Configure RAR and test against representative contract scenarios." },
      { phase: "Stabilize", description: "Support the first recognition cycles and refine edge cases." },
    ],
    capabilities: [
      "IFRS 15 / ASC 606 aligned configuration",
      "Performance obligation & contract combination modeling",
      "Price allocation logic",
      "Integration with SD, CS, and third-party billing",
      "Disclosure & reconciliation reporting",
    ],
    businessValue: [
      "Auditable, standards-aligned revenue recognition",
      "Less manual spreadsheet-based compliance work",
      "Faster period-end revenue close",
      "Confidence in disclosures presented to auditors and the board",
    ],
    faq: [
      {
        q: "Do we need SAP RAR if our contracts are simple?",
        a: "Not necessarily. RAR earns its complexity when contracts involve multiple performance obligations, bundling, or recognition that differs from billing. We assess this honestly rather than defaulting to 'yes'.",
      },
      {
        q: "Can RAR integrate with non-SAP billing systems?",
        a: "Yes, RAR is commonly integrated with third-party billing and subscription platforms through standard or custom interfaces.",
      },
    ],
    relatedSlugs: ["sap-finance", "sap-controlling", "sap-brim", "s4hana-finance"],
  },
  {
    slug: "sap-brim",
    title: "SAP Billing and Revenue Innovation Management (BRIM)",
    shortTitle: "BRIM",
    summary:
      "Modernize billing and revenue for subscription and usage-based models.",
    heroKicker: "Expertise",
    headline: "Modernize Revenue and Billing.",
    overview:
      "SAP BRIM powers high-volume, subscription, and usage-based business models. We help you design and deliver billing architectures that scale with your commercial ambition.",
    opportunitiesHeading: "Billing as a Business Capability",
    challenge:
      "New commercial models fail when billing cannot keep up. We treat BRIM as a business capability program—aligning product, sales, finance, and IT—so new offerings can launch on a billing architecture that is flexible, accurate, and built to scale.",
    whatWeDo: [
      {
        title: "Subscription Billing",
        description:
          "Recurring models implemented cleanly, from order to invoice.",
      },
      {
        title: "Usage-Based Models",
        description:
          "Rating and charging for consumption-driven offerings.",
      },
      {
        title: "Convergent Charging",
        description:
          "High-volume charging designed for performance and accuracy.",
      },
      {
        title: "Convergent Invoicing",
        description:
          "One clear invoice across services, subscriptions, and usage.",
      },
      {
        title: "Billing",
        description:
          "Reliable, automated billing cycles that scale.",
      },
      {
        title: "Revenue Management",
        description:
          "From billing to revenue accounting, connected end to end.",
      },
      {
        title: "Integration",
        description:
          "BRIM integrated with CRM, finance, and revenue recognition.",
      },
      {
        title: "Transformation",
        description:
          "Modernizing legacy billing landscapes without disruption.",
      },
    ],
    approach: [
      { phase: "Assess", description: "Understand current commercial models, pricing structures, and billing pain points." },
      { phase: "Design", description: "Define subscription, charging, and invoicing structures aligned to the business model." },
      { phase: "Build", description: "Configure and test across representative subscription and usage scenarios." },
      { phase: "Stabilize", description: "Support the first billing cycles and refine rating and invoicing logic." },
    ],
    capabilities: [
      "Subscription Order Management (SOM)",
      "Convergent Charging (CC)",
      "Convergent Invoicing (CI)",
      "Integration with SAP RAR",
      "High-volume usage & consumption billing",
    ],
    businessValue: [
      "Billing that keeps pace with flexible commercial models",
      "Fewer manual invoice corrections",
      "Faster, cleaner revenue-to-cash cycles",
      "A platform that scales with subscription growth",
    ],
    faq: [
      {
        q: "Is BRIM only for telecom and utilities?",
        a: "No. While BRIM originated in telecom, it is now used across industries with subscription, consumption, or usage-based commercial models — including manufacturing, media, and professional services.",
      },
      {
        q: "How does BRIM relate to SAP RAR?",
        a: "BRIM typically integrates with SAP RAR so that billing events are correctly translated into revenue recognition in line with IFRS 15 / ASC 606.",
      },
    ],
    relatedSlugs: ["sap-finance", "sap-controlling", "sap-rar", "s4hana-finance"],
  },
  {
    slug: "s4hana-finance",
    title: "S/4HANA Finance",
    shortTitle: "S/4HANA Finance",
    summary:
      "A smarter finance core with real-time insight and simplified structures.",

    heroKicker: "Expertise",
    headline: "Build a Smarter Finance Core.",
    overview:
      "S/4HANA Finance is more than a technical upgrade—it is an opportunity to simplify structures and give finance real-time visibility. We help you capture that opportunity with a clear, predictable path.",
    opportunitiesHeading: "Transformation, Not Just Migration",
    challenge:
      "The organizations that gain the most from S/4HANA Finance treat the move as a finance transformation, not an IT project. We help you decide where to adopt standard, where to differentiate, and how to sequence the journey so value lands early and risk stays controlled.",
    whatWeDo: [
      {
        title: "Why S/4HANA Finance",
        description:
          "Understand what changes for finance—and what becomes possible.",
      },
      {
        title: "Finance Transformation",
        description:
          "Use the move to redesign processes where it creates value.",
      },
      {
        title: "Real-Time Information",
        description:
          "From batch thinking to continuous insight.",
      },
      {
        title: "Simplification",
        description:
          "Fewer structures, less reconciliation, clearer reporting.",
      },
      {
        title: "Integration",
        description:
          "Finance connected end to end across the S/4HANA landscape.",
      },
      {
        title: "Migration Considerations",
        description:
          "Data, custom code, and cutover—planned with discipline.",
      },
      {
        title: "Optimization",
        description:
          "Keep improving after go-live, release by release.",
      },
      {
        title: "Post-Go-Live",
        description:
          "Support and continuous improvement that protect your investment.",
      },
    ],
    approach: [
      { phase: "Assess", description: "Evaluate current finance architecture against S/4HANA Finance capabilities." },
      { phase: "Design", description: "Define the target Universal Journal, reporting, and close design." },
      { phase: "Build", description: "Configure, migrate, and test the finance foundation." },
      { phase: "Stabilize", description: "Support go-live close cycles and optimize based on real usage." },
    ],
    capabilities: [
      "Universal Journal (ACDOCA) design",
      "Embedded analytics & real-time reporting",
      "Central Finance",
      "New Asset Accounting",
      "Group reporting integration",
      "Close process redesign",
    ],
    businessValue: [
      "Real-time financial visibility, not end-of-period",
      "A single source of truth across FI and CO",
      "Reduced reconciliation and manual adjustment work",
      "A finance platform ready for future transformation",
    ],
    faq: [
      {
        q: "Do we have to redesign our processes to move to S/4HANA Finance?",
        a: "You don't have to, but a like-for-like migration captures little of the platform's value. We help clients decide, deliberately, how much redesign is worth doing.",
      },
      {
        q: "How does this relate to ECC to S/4HANA transformation more broadly?",
        a: "S/4HANA Finance is the financial core of a broader transformation. See our ECC to S/4HANA transformation pathways for the full picture.",
      },
    ],
    relatedSlugs: ["sap-finance", "sap-controlling", "sap-rar", "sap-brim"],
  },
];

export function getExpertiseBySlug(slug: string) {
  return expertiseAreas.find((e) => e.slug === slug);
}
