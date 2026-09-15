import { DetailPage } from "./types";

// The eight-stage transformation map (id/title/description) matches the
// reference site's stage data exactly (array `wh`), shown on the SAP
// Transformation hub page.
export const transformationStages: { id: string; title: string; description: string }[] = [
  { id: "assessment", title: "Assessment", description: "Understand the current landscape—systems, data, custom code, and readiness." },
  { id: "strategy", title: "Strategy", description: "Choose the pathway and sequence that fits your business ambition." },
  { id: "architecture", title: "Architecture", description: "Design the target finance architecture before building anything." },
  { id: "migration", title: "Migration", description: "Plan and rehearse data migration with reconciliation discipline." },
  { id: "testing", title: "Testing", description: "Prove business scenarios with structured, risk-based testing." },
  { id: "cutover", title: "Cutover", description: "Execute a rehearsed, minute-by-minute cutover plan." },
  { id: "go-live", title: "Go-Live", description: "A controlled start, with support standing by." },
  { id: "optimization", title: "Optimization", description: "Keep improving after go-live—value beyond day one." },
];

export const transformationPathways: DetailPage[] = [
  {
    slug: "greenfield",
    title: "Greenfield Transformation",
    shortTitle: "Greenfield",
    summary: "A new implementation on a clean S/4HANA system—maximum freedom to redesign, with selective data carry-over.",
    heroKicker: "SAP Transformation Pathway",
    headline: "Start Clean. Design for What’s Next.",
    overview:
      "Greenfield transformation starts from a clean sheet: new architecture, new chart of accounts, new processes designed against S/4HANA best practice rather than inherited from ECC. It is the highest-effort, highest-potential-value pathway — well suited to organizations whose current landscape carries more complexity than value.",
    challenge:
      "Greenfield's biggest risk is not technical — it's organizational. Without disciplined scope control, a clean-slate design can slide into scope creep as every stakeholder asks for their legacy exception to be preserved, eroding the very simplification that justified the approach.",
    whatWeDo: [
      { title: "Fit-to-standard design", description: "Design workshops that default to S/4HANA best practice and treat deviation as a deliberate, justified exception." },
      { title: "Chart of accounts redesign", description: "A financial architecture built for the target state, not constrained by legacy structures." },
      { title: "Selective data migration", description: "Migration of master data and, where relevant, historical transactional data into the new environment." },
      { title: "Process redesign & change management", description: "Redesigning finance processes to take full advantage of a clean architecture." },
    ],
    approach: [
      { phase: "Discover", description: "Understand current pain points and the ambition for the target design." },
      { phase: "Align", description: "Agree fit-to-standard principles and scope governance upfront." },
      { phase: "Design", description: "Design the target financial architecture and processes." },
      { phase: "Deliver", description: "Build, migrate, test, and go live on the new foundation." },
      { phase: "Optimize", description: "Stabilize and refine the new landscape post go-live." },
    ],
    capabilities: ["Fit-to-standard design methodology", "Chart of accounts & financial architecture redesign", "Master & historical data migration", "Process redesign for S/4HANA", "Scope governance"],
    businessValue: ["A finance landscape unconstrained by legacy complexity", "Best-practice processes built in from day one", "A clean foundation for future transformation", "Reduced long-term technical debt"],
    faq: [
      { q: "Is greenfield always the right approach for S/4HANA migration?", a: "No — it depends on how much value your current landscape holds versus how much complexity it carries. We help assess this honestly before recommending an approach." },
      { q: "How do you prevent scope creep in a greenfield design?", a: "Through explicit fit-to-standard governance agreed at the outset, with any deviation from standard requiring a documented business justification." },
    ],
    relatedSlugs: ["brownfield", "selective-data-transition"],
  },
  {
    slug: "brownfield",
    title: "Brownfield Transformation",
    shortTitle: "Brownfield",
    summary: "A system conversion of your existing ECC landscape to S/4HANA—preserving processes, configuration, and history.",
    heroKicker: "SAP Transformation Pathway",
    headline: "Keep What Works. Modernize the Core.",
    overview:
      "Brownfield transformation (system conversion) moves your existing ECC landscape onto S/4HANA with configuration, customizations, and historical data largely intact. It is typically faster and less disruptive than greenfield, at the cost of carrying forward whatever complexity — good and bad — already exists in your current system.",
    challenge:
      "Brownfield's core risk is inheriting legacy problems into a new platform: custom code that no longer fits S/4HANA's simplified data model, and processes that were never optimal but now become harder to change once migrated.",
    whatWeDo: [
      { title: "System conversion readiness assessment", description: "Assessment of custom code, configuration, and data readiness for conversion." },
      { title: "Custom code remediation", description: "Adapting custom developments for compatibility with the S/4HANA data model." },
      { title: "Technical conversion execution", description: "Managed technical conversion with structured testing and cutover." },
      { title: "Selective process improvement", description: "Targeted process improvements delivered alongside the technical conversion where they add clear value." },
    ],
    approach: [
      { phase: "Discover", description: "Assess technical readiness, custom code footprint, and data quality." },
      { phase: "Align", description: "Decide which known issues are worth fixing during conversion versus after." },
      { phase: "Design", description: "Plan the technical conversion approach and remediation scope." },
      { phase: "Deliver", description: "Execute conversion, testing, and cutover." },
      { phase: "Optimize", description: "Stabilize and address deferred improvements post go-live." },
    ],
    capabilities: ["System conversion readiness assessment", "Custom code (ABAP) remediation", "Technical conversion execution", "Regression testing", "Selective process improvement"],
    businessValue: ["Faster path to S/4HANA than a full rebuild", "Lower business disruption during transition", "Preserved institutional process knowledge", "A pragmatic stepping stone to future optimization"],
    faq: [
      { q: "Does brownfield mean we can't improve any processes?", a: "No — brownfield is primarily a technical conversion, but it's common to bundle selective process improvements where the business case is clear." },
      { q: "How much custom code typically needs remediation?", a: "This varies significantly by landscape age and complexity, which is why a readiness assessment is the essential first step." },
    ],
    relatedSlugs: ["greenfield", "selective-data-transition"],
  },
  {
    slug: "selective-data-transition",
    title: "Selective Data Transition",
    shortTitle: "Selective Data Transition",
    summary: "Move to S/4HANA with a deliberate selection of data, organizational scope, and process redesign—between Greenfield and Brownfield.",
    heroKicker: "SAP Transformation Pathway",
    headline: "Continuity Where It Counts. Change Where It Pays.",
    overview:
      "Selective Data Transition (SDT) sits between greenfield and brownfield: it allows organizations to redesign specific processes or organizational units while selectively migrating historical data, avoiding both the full rebuild cost of greenfield and the legacy carry-over risk of a pure technical conversion.",
    challenge:
      "SDT's complexity lies in its flexibility — deciding what to redesign, what to preserve, and how to selectively migrate historical data requires careful scoping discipline, or the pathway can end up with the drawbacks of both other approaches rather than the benefits.",
    whatWeDo: [
      { title: "Scope & pathway assessment", description: "Assessing which parts of the landscape and organization warrant redesign versus preservation." },
      { title: "Selective historical data migration", description: "Migrating chosen historical data sets without requiring a full data reload." },
      { title: "Targeted process redesign", description: "Redesigning specific processes or entities while leaving stable areas largely untouched." },
      { title: "Phased delivery planning", description: "Sequencing selective changes across entities or process areas in manageable phases." },
    ],
    approach: [
      { phase: "Discover", description: "Assess landscape maturity area by area to identify redesign versus preserve candidates." },
      { phase: "Align", description: "Agree scope boundaries and data transition criteria." },
      { phase: "Design", description: "Design targeted redesign and selective migration approach." },
      { phase: "Deliver", description: "Execute phased redesign and migration." },
      { phase: "Optimize", description: "Stabilize each phase and carry lessons into the next." },
    ],
    capabilities: ["Pathway & scope assessment", "Selective historical data migration", "Targeted process redesign", "Phased/entity-based delivery", "Hybrid greenfield-brownfield governance"],
    businessValue: ["Redesign effort focused where it adds the most value", "Historical data preserved without a full reload", "A pragmatic middle path for complex landscapes", "Phased delivery that reduces big-bang risk"],
    faq: [
      { q: "How do you decide what to redesign versus preserve under SDT?", a: "Through a structured landscape assessment that evaluates each process area or entity against complexity, value, and legacy debt." },
      { q: "Is Selective Data Transition suitable for multi-entity organizations?", a: "Yes — it is often particularly well suited to multi-entity organizations where maturity and complexity vary significantly by entity." },
    ],
    relatedSlugs: ["greenfield", "brownfield"],
  },
];

export function getPathwayBySlug(slug: string) {
  return transformationPathways.find((p) => p.slug === slug);
}
