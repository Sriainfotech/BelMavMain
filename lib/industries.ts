import { DetailPage } from "./types";

export const industries: DetailPage[] = [
  {
    slug: "manufacturing",
    title: "Manufacturing",
    shortTitle: "Manufacturing",
    summary: "How SAP Finance can support manufacturing organizations—where product costing, inventory valuation, and margin transparency define competitiveness.",
    heroKicker: "Industry",
    headline: "Finance That Keeps Pace With Production.",
    overview:
      "Manufacturers run on cost: product costing, overhead allocation, and plant-level profitability all need to be visible and reliable. SAP Finance and Controlling, properly designed, give manufacturing finance teams a clear, real-time view of where cost and margin actually sit — across plants, product lines, and cost centers.",
    challenge:
      "Multi-plant, multi-entity manufacturing environments often carry inconsistent costing methodologies and allocation logic that make plant-to-plant comparison unreliable, undermining confidence in margin reporting.",
    whatWeDo: [
      { title: "Product costing alignment", description: "Consistent standard and actual costing methodology across plants and product lines." },
      { title: "Plant & cost center structuring", description: "Cost structures that reflect actual manufacturing operations and support meaningful comparison." },
      { title: "Intercompany & multi-entity finance", description: "Clean intercompany flows for organizations manufacturing and transferring across entities." },
      { title: "S/4HANA finance transformation", description: "Modernizing the finance core to support real-time margin and cost visibility." },
    ],
    approach: [
      { phase: "Assess", description: "Review current costing methodology and plant-level reporting consistency." },
      { phase: "Design", description: "Define target costing and cost center structures across the manufacturing footprint." },
      { phase: "Deliver", description: "Implement and validate against real production scenarios." },
      { phase: "Optimize", description: "Refine allocation and reporting based on operational feedback." },
    ],
    capabilities: ["Product costing (standard & actual)", "Cost center & plant structuring", "Intercompany manufacturing flows", "Profitability analysis by plant/product", "S/4HANA Finance for manufacturing"],
    businessValue: ["Comparable margin visibility across plants", "Costing methodology finance and operations both trust", "Cleaner intercompany manufacturing accounting", "A finance core ready for real-time cost insight"],
    faq: [
      { q: "Can you support multi-plant costing harmonization without a full re-implementation?", a: "Often yes — costing methodology alignment can frequently be delivered as a focused optimization engagement." },
    ],
    relatedSlugs: ["sap-controlling", "s4hana-finance"],
  },
  {
    slug: "retail",
    title: "Retail",
    shortTitle: "Retail",
    summary: "How SAP Finance can support retail organizations—where transaction volume, thin margins, and fast-changing commercial models set the pace.",
    heroKicker: "Industry",
    headline: "Finance Built for Volume and Velocity.",
    overview:
      "Retail finance operates at volume and speed — high transaction counts, frequent price and promotion changes, and the need for margin visibility down to product and channel level. SAP Finance and Controlling designed for retail give finance teams a reliable, granular view of profitability without drowning in manual reconciliation.",
    challenge:
      "High-volume, high-frequency retail transactions can strain finance processes not designed for the data volume, leading to slow closes and margin analysis that lags actual business performance.",
    whatWeDo: [
      { title: "Profitability analysis by channel & product", description: "Margin visibility structured around how retail businesses actually segment performance." },
      { title: "High-volume close design", description: "Close processes engineered to handle retail transaction volumes without extending close timelines." },
      { title: "Omnichannel finance integration", description: "Clean integration between point-of-sale, e-commerce, and the finance core." },
      { title: "S/4HANA Finance for retail", description: "Real-time reporting suited to fast-moving retail decision cycles." },
    ],
    approach: [
      { phase: "Assess", description: "Review current close timelines and profitability reporting granularity." },
      { phase: "Design", description: "Define margin analysis structures and high-volume close processes." },
      { phase: "Deliver", description: "Implement and validate against peak-volume scenarios." },
      { phase: "Optimize", description: "Tune performance and reporting based on actual trading patterns." },
    ],
    capabilities: ["Profitability analysis by channel/product", "High-volume transaction processing design", "Omnichannel finance integration", "Real-time margin reporting", "S/4HANA Finance for retail"],
    businessValue: ["Margin visibility that keeps pace with trading decisions", "Closes that scale with transaction volume", "Cleaner omnichannel financial integration", "Faster access to channel-level profitability"],
    faq: [
      { q: "Can SAP Finance handle peak trading volumes such as promotional periods?", a: "Yes, with close and reporting processes designed and tested specifically for peak-volume scenarios." },
    ],
    relatedSlugs: ["sap-finance", "sap-brim"],
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    shortTitle: "Professional Services",
    summary: "How SAP Finance can support professional services organizations—where revenue, cost, and profitability live at project level.",
    heroKicker: "Industry",
    headline: "Finance That Follows the Project.",
    overview:
      "Professional services finance is built on projects and people — revenue tied to milestones or time, cost tied to resourcing, and margin that needs to be visible at the engagement level. SAP Finance, Controlling, and RAR together give services firms a clear view of project profitability and compliant revenue recognition.",
    challenge:
      "Complex billing arrangements — fixed fee, time and materials, milestone-based — often require revenue recognition logic that standard billing was never designed to carry, leading to manual, spreadsheet-based workarounds.",
    whatWeDo: [
      { title: "Project profitability structuring", description: "Cost and revenue structures that give visibility at the engagement or project level." },
      { title: "Revenue recognition for services contracts", description: "SAP RAR configuration for complex, milestone-based, or hybrid billing arrangements." },
      { title: "Resource cost allocation", description: "Controlling structures that reflect how services firms actually allocate people cost to projects." },
      { title: "Finance transformation for scaling firms", description: "Finance process redesign to support firms scaling headcount and engagement volume." },
    ],
    approach: [
      { phase: "Assess", description: "Review current project profitability visibility and revenue recognition approach." },
      { phase: "Design", description: "Define project costing and revenue recognition structures." },
      { phase: "Deliver", description: "Implement and validate against representative engagement types." },
      { phase: "Optimize", description: "Refine based on actual project and billing patterns." },
    ],
    capabilities: ["Project-based profitability analysis", "SAP RAR for services contracts", "Resource & cost allocation", "Time & billing integration", "Finance transformation for growth"],
    businessValue: ["Clear project-level profitability", "Compliant, auditable revenue recognition", "Reduced manual billing workarounds", "A finance function that scales with the firm"],
    faq: [
      { q: "Do professional services firms need SAP RAR?", a: "It depends on billing complexity — firms with milestone-based or hybrid contracts typically benefit most from formal revenue recognition support." },
    ],
    relatedSlugs: ["sap-rar", "sap-controlling"],
  },
  {
    slug: "life-sciences",
    title: "Life Sciences",
    shortTitle: "Life Sciences",
    summary: "How SAP Finance can support life sciences organizations—where validated environments, compliance expectations, and global structures shape every change.",
    heroKicker: "Industry",
    headline: "Finance With Discipline Built In.",
    overview:
      "Life sciences finance operates under significant regulatory and audit scrutiny, with complex cost structures spanning R&D, manufacturing, and commercial operations. SAP Finance and Controlling designed with this rigor in mind give finance teams reporting they can defend under audit, not just reporting that closes on time.",
    challenge:
      "Regulatory reporting and audit requirements in life sciences demand a level of traceability that generic finance configuration often fails to provide, resulting in manual documentation to bridge the gap.",
    whatWeDo: [
      { title: "Auditable financial architecture", description: "Chart of accounts and process design built with traceability and audit defense in mind." },
      { title: "R&D and cost center structuring", description: "Cost structures that reflect research, development, and commercial operations distinctly." },
      { title: "Revenue recognition for complex arrangements", description: "SAP RAR support for licensing, milestone, and royalty-based revenue models." },
      { title: "S/4HANA finance transformation", description: "Modernizing finance with regulatory reporting requirements built into the design." },
    ],
    approach: [
      { phase: "Assess", description: "Review current audit and regulatory reporting traceability." },
      { phase: "Design", description: "Define financial architecture with auditability as a design principle." },
      { phase: "Deliver", description: "Implement and validate against audit and regulatory scenarios." },
      { phase: "Optimize", description: "Refine based on audit feedback and evolving requirements." },
    ],
    capabilities: ["Audit-ready financial architecture", "R&D and cost center design", "Revenue recognition for licensing/royalty models", "Regulatory reporting alignment", "S/4HANA Finance transformation"],
    businessValue: ["Financial reporting that holds up under audit", "Clear separation of R&D, manufacturing, and commercial cost", "Compliant revenue recognition for complex arrangements", "Reduced manual audit documentation effort"],
    faq: [
      { q: "Can SAP Finance support royalty and milestone-based revenue models?", a: "Yes, typically through SAP RAR configuration designed for licensing and milestone-based arrangements." },
    ],
    relatedSlugs: ["sap-rar", "sap-finance"],
  },
  {
    slug: "energy",
    title: "Energy & Utilities",
    shortTitle: "Energy",
    summary: "How SAP Finance can support energy and utility organizations—where billing volume, regulation, and infrastructure investment define the finance agenda.",
    heroKicker: "Industry",
    headline: "Finance for High-Volume, Regulated Business.",
    overview:
      "Energy sector finance combines asset-intensive operations, long project lifecycles, and often complex regulatory and joint-venture reporting requirements. SAP Finance and Controlling, designed around these realities, give finance teams reliable visibility across capital projects, joint operations, and regulatory obligations.",
    challenge:
      "Asset-heavy, joint-venture-structured energy businesses often struggle with allocation and reporting complexity that generic finance configuration wasn't designed to carry cleanly.",
    whatWeDo: [
      { title: "Asset accounting for capital-intensive operations", description: "Asset structures and depreciation logic suited to long-lived, capital-intensive assets." },
      { title: "Joint venture & cost-sharing accounting", description: "Structures to support joint operating agreements and cost-sharing arrangements." },
      { title: "Regulatory & statutory reporting alignment", description: "Chart of accounts and reporting design aligned to sector-specific regulatory obligations." },
      { title: "S/4HANA finance transformation", description: "Modernizing the finance core for asset-intensive, project-driven operations." },
    ],
    approach: [
      { phase: "Assess", description: "Review current asset accounting and joint venture reporting structures." },
      { phase: "Design", description: "Define target asset, cost-sharing, and regulatory reporting structures." },
      { phase: "Deliver", description: "Implement and validate against representative project and JV scenarios." },
      { phase: "Optimize", description: "Refine based on regulatory feedback and operational needs." },
    ],
    capabilities: ["Asset accounting for capital projects", "Joint venture & cost-sharing structures", "Regulatory & statutory reporting alignment", "Project-based cost controlling", "S/4HANA Finance transformation"],
    businessValue: ["Reliable visibility across capital projects", "Cleaner joint venture and cost-sharing accounting", "Reporting aligned to regulatory obligations", "A finance core suited to asset-intensive operations"],
    faq: [
      { q: "Can SAP Finance support joint operating agreement accounting?", a: "Yes, through cost-sharing and settlement structures designed around your specific joint venture agreements." },
    ],
    relatedSlugs: ["sap-finance", "sap-controlling"],
  },
  {
    slug: "consumer-products",
    title: "Consumer Products",
    shortTitle: "Consumer Products",
    summary: "How SAP Finance can support consumer products organizations—where brand, channel, and customer profitability drive decisions.",
    heroKicker: "Industry",
    headline: "Finance That Sees the Whole Shelf.",
    overview:
      "Consumer products finance needs to answer questions at the brand and SKU level — profitability, trade spend effectiveness, and promotional cost — while still closing the books on time. SAP Finance and Controlling designed for this give finance teams that granularity without adding manual reporting burden.",
    challenge:
      "Trade spend and promotional activity are often tracked outside the core finance system, creating reconciliation gaps between what marketing reports and what finance can substantiate.",
    whatWeDo: [
      { title: "Brand & SKU-level profitability", description: "Profitability analysis structured to answer brand and SKU-level performance questions." },
      { title: "Trade spend & promotional cost integration", description: "Bringing trade spend visibility into core financial reporting rather than parallel tracking." },
      { title: "Intercompany & multi-market finance", description: "Clean intercompany structures for multi-market consumer products businesses." },
      { title: "S/4HANA finance transformation", description: "Real-time margin visibility to support fast-moving consumer products decision cycles." },
    ],
    approach: [
      { phase: "Assess", description: "Review current brand-level reporting and trade spend visibility." },
      { phase: "Design", description: "Define profitability and trade spend integration structures." },
      { phase: "Deliver", description: "Implement and validate against representative brand/market scenarios." },
      { phase: "Optimize", description: "Refine based on actual trading and promotional patterns." },
    ],
    capabilities: ["Brand & SKU profitability analysis", "Trade spend integration", "Multi-market intercompany finance", "Real-time margin reporting", "S/4HANA Finance transformation"],
    businessValue: ["Brand-level profitability finance can defend", "Trade spend visible inside core financial reporting", "Cleaner multi-market intercompany accounting", "Faster access to margin insight"],
    faq: [
      { q: "Can trade spend be integrated directly into SAP Finance?", a: "Yes, through integration design that brings trade spend and promotional cost data into core financial and profitability reporting." },
    ],
    relatedSlugs: ["sap-controlling", "sap-finance"],
  },
  {
    slug: "financial-services",
    title: "Financial Services",
    shortTitle: "Financial Services",
    summary: "How SAP Finance can support financial services organizations—where precision, control, and transparency are the product itself.",
    heroKicker: "Industry",
    headline: "Finance That Matches the Business of Finance.",
    overview:
      "Financial services finance operates under some of the highest regulatory scrutiny of any sector, with product structures that can be genuinely complex to model. SAP Finance and Controlling, configured with this rigor in mind, give finance teams reporting that is both operationally efficient and regulator-ready.",
    challenge:
      "Regulatory and product complexity in financial services can outstrip what generic finance configuration handles cleanly, leading to heavy reliance on manual reconciliation and offline models.",
    whatWeDo: [
      { title: "Regulatory-aligned financial architecture", description: "Chart of accounts and process design built around regulatory reporting obligations." },
      { title: "Complex product & fee structuring", description: "Financial structures that reflect complex financial product and fee arrangements." },
      { title: "Revenue recognition for financial products", description: "SAP RAR support where product or service revenue recognition is non-trivial." },
      { title: "S/4HANA finance transformation", description: "Modernizing finance with regulatory and audit requirements built into the design." },
    ],
    approach: [
      { phase: "Assess", description: "Review current regulatory reporting traceability and product structure complexity." },
      { phase: "Design", description: "Define financial architecture aligned to regulatory and product needs." },
      { phase: "Deliver", description: "Implement and validate against regulatory and audit scenarios." },
      { phase: "Optimize", description: "Refine based on regulatory feedback and evolving product structures." },
    ],
    capabilities: ["Regulatory-aligned financial architecture", "Complex product & fee structuring", "Revenue recognition for financial products", "Audit-ready reporting design", "S/4HANA Finance transformation"],
    businessValue: ["Reporting built around regulatory obligations", "Reduced manual reconciliation for complex products", "Compliant, auditable revenue recognition", "A finance core that scales with product complexity"],
    faq: [
      { q: "Can SAP Finance be configured to support specific regulatory reporting regimes?", a: "Yes, financial architecture and reporting structures can be designed around the specific regulatory obligations relevant to your business." },
    ],
    relatedSlugs: ["sap-finance", "sap-rar"],
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug);
}
