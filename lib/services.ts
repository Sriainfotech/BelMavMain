import { DetailPage } from "./types";

export const services: DetailPage[] = [
  {
    slug: "advisory",
    title: "SAP Advisory",
    shortTitle: "Advisory",
    summary: "Independent, business-first guidance for confident SAP decisions.",
    heroKicker: "Service",
    headline: "Clarity Before Commitment.",
    overview:
      "Transformation decisions are expensive to reverse. Our advisory gives you an honest, expert view of your options—before you commit budget, timeline, and organization.",
    challenge:
      "Many SAP programs start with unclear scope, unrealistic timelines, or a strategy written by the party selling the implementation. The result: surprises, overruns, and lost trust.",
    whatWeDo: [
      { title: "Independent landscape and readiness assessments", description: "" },
      { title: "Transformation strategy and pathway selection", description: "" },
      { title: "Business case and roadmap definition", description: "" },
      { title: "Architecture and design review", description: "" },
    ],
    approach: [
      { phase: "Understand", description: "We map your landscape, processes, and ambitions as they are—not as slides describe them." },
      { phase: "Advise", description: "We present clear options with trade-offs, effort, and risk in business language." },
      { phase: "Enable", description: "You decide with confidence, backed by a roadmap your teams can actually execute." },
    ],
    capabilities: ["Transformation strategy", "Business case modeling", "Readiness assessment", "Roadmap sequencing", "Approach selection (greenfield/brownfield/SDT)"],
    businessValue: ["Decisions grounded in facts, not sales material", "A roadmap the business and IT both understand", "Risk surfaced early, when it is still cheap"],
    faq: [
      { q: "When should we involve an advisor?", a: "Ideally before committing to a pathway or partner. Early independent advice is the cheapest risk reduction in any SAP program." },
      { q: "Do you also deliver what you advise?", a: "Yes. Advisory and delivery are both core to BelMav—but advice stays honest regardless of who executes." },
    ],
    relatedSlugs: ["implementation", "rollouts", "upgrades"],
  },
  {
    slug: "implementation",
    title: "SAP Implementation",
    shortTitle: "Implementation",
    summary: "From blueprint to go-live with disciplined, predictable delivery.",
    heroKicker: "Service",
    headline: "Implementation Without the Drama.",
    overview:
      "We implement SAP Finance, Controlling, RAR, and BRIM with structured governance, clear priorities, and a business-first mindset—so go-live is a milestone, not a gamble.",
    challenge:
      "Implementations fail quietly first: scope creeps, design drifts from business needs, and testing is compressed at the end. Predictability is designed in—or it is absent.",
    whatWeDo: [
      { title: "SAP Finance and Controlling implementation", description: "" },
      { title: "SAP RAR and BRIM implementation", description: "" },
      { title: "Fit-to-standard and design workshops", description: "" },
      { title: "Data migration, testing, and cutover execution", description: "" },
    ],
    approach: [
      { phase: "Design", description: "A blueprint rooted in your business processes, with fit-to-standard as the default." },
      { phase: "Build", description: "Iterative delivery with working software early, reviewed by your business owners." },
      { phase: "Prove", description: "Structured testing and rehearsal cutovers so go-live holds no surprises." },
    ],
    capabilities: ["Full-lifecycle implementation", "Blueprint & fit-to-standard workshops", "Configuration & unit testing", "Integration & UAT support", "Cutover & hypercare"],
    businessValue: ["A solution the business recognizes as its own", "Predictable timeline and transparent progress", "A finance core ready to evolve"],
    faq: [
      { q: "Which modules do you implement?", a: "Our focus is SAP Finance, Controlling, RAR, BRIM, and S/4HANA Finance—the areas where our expertise is deepest." },
      { q: "How do you keep implementations predictable?", a: "Clear scope, disciplined governance, early business involvement, and honest status reporting. Predictability is a method, not a promise." },
    ],
    relatedSlugs: ["advisory", "rollouts", "upgrades"],
  },
  {
    slug: "rollouts",
    title: "SAP Rollouts",
    shortTitle: "Rollouts",
    summary: "Global templates delivered locally—consistently and with respect for local reality.",
    heroKicker: "Service",
    headline: "One Template. Every Country.",
    overview:
      "We roll out SAP finance templates across entities and countries, balancing global consistency with local legal, fiscal, and business requirements.",
    challenge:
      "Rollouts fail when the template is treated as fixed truth or when every country is allowed to deviate. The art is knowing what must be standard and what must be local.",
    whatWeDo: [
      { title: "Global template design and governance", description: "" },
      { title: "Country localization for finance", description: "" },
      { title: "Rollout planning and wave management", description: "" },
      { title: "Local data migration and go-live support", description: "" },
    ],
    approach: [
      { phase: "Template", description: "Define a strong global core with explicit localization points." },
      { phase: "Localize", description: "Adapt only where law, tax, or genuine business need requires it." },
      { phase: "Repeat", description: "Industrialize the rollout so each wave is faster and cheaper than the last." },
    ],
    capabilities: ["Global template design & governance", "Multi-country rollout planning", "Local statutory & tax integration", "Wave-based delivery management", "Local enablement & training"],
    businessValue: ["Consistent finance processes across the group", "Faster, lower-risk country deployments", "Local compliance without template erosion"],
    faq: [
      { q: "How do you handle local requirements?", a: "Through structured localization: legal and fiscal requirements are built in, while business preferences are challenged against the template." },
      { q: "Can you take over an existing template?", a: "Yes. We can assess, stabilize, and roll out existing templates—including those built by other partners." },
    ],
    relatedSlugs: ["advisory", "implementation", "upgrades"],
  },
  {
    slug: "upgrades",
    title: "SAP Upgrades",
    shortTitle: "Upgrades",
    summary: "Stay current, stay supported, and unlock new capability—without disruption.",
    heroKicker: "Service",
    headline: "Current Software. Calm Upgrade.",
    overview:
      "We plan and execute SAP upgrades with rigorous testing and minimal business disruption—turning a technical necessity into an opportunity to simplify.",
    challenge:
      "Upgrades are often postponed until they become urgent, then executed under pressure. Delayed upgrades accumulate technical debt and make every future change harder.",
    whatWeDo: [
      { title: "Upgrade assessment and planning", description: "" },
      { title: "Custom code analysis and remediation", description: "" },
      { title: "Regression testing and cutover", description: "" },
      { title: "Post-upgrade stabilization and optimization", description: "" },
    ],
    approach: [
      { phase: "Assess", description: "Inventory custom code, interfaces, and business-critical processes." },
      { phase: "Execute", description: "Upgrade in controlled steps with rehearsed cutover and fallback plans." },
      { phase: "Improve", description: "Use the upgrade to retire unused customizations and simplify." },
    ],
    capabilities: ["Upgrade impact & readiness assessment", "Custom code compatibility review", "Regression & integration testing", "Cutover & downtime planning", "Post-upgrade stabilization"],
    businessValue: ["A supported, current landscape", "Minimal disruption to finance operations", "Reduced technical debt going forward"],
    faq: [
      { q: "How disruptive is an upgrade?", a: "With proper testing and a rehearsed cutover, business disruption is typically limited to a planned weekend window." },
      { q: "Should we upgrade or move to S/4HANA?", a: "It depends on your landscape and ambitions. Our advisory assessment gives you an honest comparison of both paths." },
    ],
    relatedSlugs: ["advisory", "implementation", "rollouts"],
  },
  {
    slug: "migration",
    title: "SAP Migration",
    shortTitle: "Migration",
    summary: "Move systems and data to their new home—safely, completely, and verifiably.",
    heroKicker: "Service",
    headline: "Migration Without the Leap of Faith.",
    overview:
      "From ECC to S/4HANA, to the cloud, or between landscapes—we migrate data and systems with reconciliation discipline so nothing is lost and everything is proven.",
    challenge:
      "Data migration is where programs quietly fail: discovered too late, reconciled too loosely, and fixed manually under go-live pressure.",
    whatWeDo: [
      { title: "Migration strategy and data scoping", description: "" },
      { title: "Data cleansing and readiness", description: "" },
      { title: "Migration execution with reconciliation", description: "" },
      { title: "Mock migrations and cutover planning", description: "" },
    ],
    approach: [
      { phase: "Scope", description: "Decide what data the future actually needs—and what can be archived." },
      { phase: "Rehearse", description: "Run mock migrations early and often, measuring quality each time." },
      { phase: "Prove", description: "Reconcile every object so the business signs off on facts, not hope." },
    ],
    capabilities: ["Legacy data assessment & cleansing", "Migration object design", "Balance & transaction reconciliation", "Mock load cycles & dress rehearsals", "Cutover execution"],
    businessValue: ["Complete, verified data in the new system", "Cutover windows the business can plan around", "No post-go-live data firefighting"],
    faq: [
      { q: "How early should migration start?", a: "Much earlier than most programs plan. Data readiness work should begin in parallel with design, not after it." },
      { q: "How do you prove migration completeness?", a: "Through object-level reconciliation and business sign-off on defined quality criteria—after every mock run." },
    ],
    relatedSlugs: ["advisory", "implementation", "rollouts"],
  },
  {
    slug: "integration",
    title: "SAP Integration",
    shortTitle: "Integration",
    summary: "Connect SAP finance with the systems around it—reliably and observably.",
    heroKicker: "Service",
    headline: "Finance, Connected End to End.",
    overview:
      "We design and build integrations between SAP finance and the surrounding landscape—CRM, banking, reporting, and operational systems—so data flows once and correctly.",
    challenge:
      "Finance depends on data from everywhere. Point-to-point connections built over years create fragility, manual rework, and numbers nobody fully trusts.",
    whatWeDo: [
      { title: "Integration architecture and interface design", description: "" },
      { title: "SAP and non-SAP connectivity", description: "" },
      { title: "Interface monitoring and error handling", description: "" },
      { title: "Integration modernization during transformation", description: "" },
    ],
    approach: [
      { phase: "Map", description: "Document the real data flows, not the assumed ones." },
      { phase: "Design", description: "Define clean interfaces with clear ownership and error handling." },
      { phase: "Operate", description: "Build monitoring so issues are found by systems, not by month-end." },
    ],
    capabilities: ["Banking & payment integration", "Tax engine integration", "Treasury & cash management integration", "Third-party billing integration", "API & middleware strategy"],
    businessValue: ["One version of financial truth across systems", "Less manual reconciliation", "Interfaces that fail loudly and recover cleanly"],
    faq: [
      { q: "Can you integrate non-SAP systems?", a: "Yes. Most finance landscapes are hybrid—we connect SAP with the platforms around it using appropriate integration technology." },
      { q: "What happens to interfaces during S/4HANA transformation?", a: "They are assessed, rationalized, and redesigned where needed—transformation is the right moment to simplify the interface landscape." },
    ],
    relatedSlugs: ["advisory", "implementation", "rollouts"],
  },
  {
    slug: "optimization",
    title: "SAP Optimization",
    shortTitle: "Optimization",
    summary: "More value from the SAP landscape you already run.",
    heroKicker: "Service",
    headline: "Your SAP Can Do More.",
    overview:
      "We analyze how finance actually uses SAP today and remove friction: faster closing, fewer manual steps, better reports—without a transformation program.",
    challenge:
      "Many organizations use a fraction of what their SAP finance system offers, while working around it in spreadsheets. Value leaks quietly, month after month.",
    whatWeDo: [
      { title: "Finance process and system health checks", description: "" },
      { title: "Closing and reporting acceleration", description: "" },
      { title: "Automation of manual finance work", description: "" },
      { title: "User adoption and process improvements", description: "" },
    ],
    approach: [
      { phase: "Measure", description: "Observe how processes actually run—in the system and around it." },
      { phase: "Improve", description: "Target the friction points with the highest business impact first." },
      { phase: "Embed", description: "Make improvements stick with training, ownership, and measurement." },
    ],
    capabilities: ["Close cycle diagnostics", "Configuration & process health review", "Reporting & reconciliation simplification", "Quick-win identification & delivery", "Continuous improvement planning"],
    businessValue: ["A faster, calmer closing cycle", "Less spreadsheet shadow-finance", "Visible value without a major program"],
    faq: [
      { q: "Is optimization only for ECC systems?", a: "No. Both ECC and S/4HANA landscapes accumulate friction. Optimization applies wherever finance runs on SAP." },
      { q: "How do we start?", a: "With a focused health check: we observe, quantify friction, and propose improvements ranked by business value." },
    ],
    relatedSlugs: ["support", "integration", "advisory"],
  },
  {
    slug: "support",
    title: "SAP Support",
    shortTitle: "Support",
    summary: "Reliable, expert support for your SAP finance landscape after go-live.",
    heroKicker: "Service",
    headline: "Calm Operations, Expert Backup.",
    overview:
      "We keep your SAP finance landscape running smoothly—resolving issues, guiding users, and improving the system continuously, not just maintaining it.",
    challenge:
      "After go-live, knowledge walks out the door. Tickets bounce between teams, month-end becomes stressful, and small issues quietly compound into risk.",
    whatWeDo: [
      { title: "Application support for SAP Finance, CO, RAR, and BRIM", description: "" },
      { title: "Month-end and year-end closing assistance", description: "" },
      { title: "Incident resolution and problem management", description: "" },
      { title: "Continuous improvement and minor enhancements", description: "" },
    ],
    approach: [
      { phase: "Stabilize", description: "Understand your landscape, document critical processes, and fix recurring issues at the root." },
      { phase: "Support", description: "Responsive expert support aligned to your finance calendar." },
      { phase: "Improve", description: "Turn recurring tickets into permanent fixes and improvements." },
    ],
    capabilities: ["Functional AMS for Finance, Controlling, RAR, BRIM", "Period-end close support", "Minor enhancement delivery", "Issue diagnosis & root-cause analysis", "Knowledge documentation"],
    businessValue: ["A calm, predictable finance operation", "Expert access without full-time cost", "A system that improves month over month"],
    faq: [
      { q: "Do you support systems built by other partners?", a: "Yes. We take over existing landscapes with a structured onboarding that captures the knowledge before we operate." },
      { q: "Can support scale with our needs?", a: "Yes. Engagements scale from targeted expert backup to broader application management." },
    ],
    relatedSlugs: ["optimization", "advisory", "implementation"],
  },
  {
    slug: "finance-transformation",
    title: "Finance Transformation",
    shortTitle: "Finance Transformation",
    summary: "Reimagine the finance function—processes, systems, and operating model together.",
    heroKicker: "Service",
    headline: "Transform Finance, Not Just Systems.",
    overview:
      "We help CFOs redesign finance for the next decade: simplified processes, a modern SAP core, and an operating model built for insight and control.",
    challenge:
      "Finance is asked for more insight, faster closing, and tighter control—often with the same structures and systems designed a decade ago. Incremental fixes no longer suffice.",
    whatWeDo: [
      { title: "Finance target operating model design", description: "" },
      { title: "Process simplification and harmonization", description: "" },
      { title: "SAP S/4HANA Finance transformation", description: "" },
      { title: "Reporting and insight modernization", description: "" },
    ],
    approach: [
      { phase: "Envision", description: "Define what finance must deliver for the business—and what must change." },
      { phase: "Design", description: "Blueprint processes, organization, and systems as one coherent target." },
      { phase: "Transform", description: "Deliver in sequenced waves that land value early and build momentum." },
    ],
    capabilities: ["Target operating model design", "Finance process redesign", "Change management & training strategy", "Value realization frameworks", "Cross-workstream program coordination"],
    businessValue: ["A finance function built around insight", "Simplified, standardized core processes", "Transformation the organization can absorb"],
    faq: [
      { q: "Where does finance transformation start?", a: "With the business question, not the system: what must finance deliver, and what stops it today? Technology follows that answer." },
      { q: "How does this relate to S/4HANA?", a: "S/4HANA is often the enabler. We align the finance ambition with the system journey so they reinforce each other." },
    ],
    relatedSlugs: ["advisory", "optimization", "implementation"],
  },
  {
    slug: "testing",
    title: "SAP Testing",
    shortTitle: "Testing",
    summary: "Quality engineered into delivery—so go-live is a confirmation, not a discovery.",
    heroKicker: "Service",
    headline: "Tested. Proven. Ready.",
    overview:
      "We bring structure and rigor to SAP testing: clear scope, business-driven scenarios, and disciplined execution across unit, integration, and acceptance testing.",
    challenge:
      "Testing is where compressed timelines take their revenge. Undiscovered defects surface after go-live—when they are most expensive and most visible.",
    whatWeDo: [
      { title: "Test strategy and planning", description: "" },
      { title: "Business scenario and test case design", description: "" },
      { title: "Test execution and defect management", description: "" },
      { title: "Cutover rehearsal and go-live verification", description: "" },
    ],
    approach: [
      { phase: "Plan", description: "Define risk-based scope: test what matters most to the business, first." },
      { phase: "Execute", description: "Run structured cycles with clear entry and exit criteria." },
      { phase: "Prove", description: "Go-live only when evidence says the business is ready." },
    ],
    capabilities: ["Test strategy & governance", "Finance & controlling scenario testing", "Integration & regression testing", "UAT coordination", "Defect management"],
    businessValue: ["Defects found when they are cheap", "Business confidence at go-live", "A calm, rehearsed cutover"],
    faq: [
      { q: "Can you test implementations delivered by others?", a: "Yes. Independent testing is often the most valuable kind—we bring fresh eyes and no conflict of interest." },
      { q: "How much testing is enough?", a: "Enough to cover business-critical scenarios with evidence. We define that scope with you, based on risk." },
    ],
    relatedSlugs: ["implementation", "upgrades"],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
