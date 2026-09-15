export type NavLink = { label: string; href: string; description?: string };
export type NavColumn = { heading: string; links: NavLink[] };
export type NavItem = {
  label: string;
  href: string;
  columns?: NavColumn[];
};

// Labels, order, and descriptions match the reference site's mega-menu data
// exactly (array `rh`).
export const mainNav: NavItem[] = [
  {
    label: "About",
    href: "/about",
    columns: [
      {
        heading: "Company",
        links: [
          { label: "About BelMav", href: "/about", description: "Who we are and what we believe" },
          { label: "Our Vision", href: "/about/vision", description: "Simpler. Smarter. More predictable." },
          { label: "Why BelMav", href: "/about/why-belmav", description: "What makes our approach different" },
          { label: "Our Approach", href: "/about/approach", description: "A disciplined way to transform" },
          { label: "Leadership", href: "/about/leadership", description: "The people behind BelMav" },
          { label: "Careers", href: "/careers", description: "Build what's next in SAP Finance" },
        ],
      },
    ],
  },
  {
    label: "Expertise",
    href: "/expertise",
    columns: [
      {
        heading: "SAP Finance Expertise",
        links: [
          { label: "SAP Finance", href: "/expertise/sap-finance", description: "A finance core ready for what is next" },
          { label: "SAP Controlling", href: "/expertise/sap-controlling", description: "Turn financial data into decisions" },
          { label: "SAP RAR", href: "/expertise/sap-rar", description: "Transparent revenue recognition" },
          { label: "SAP BRIM", href: "/expertise/sap-brim", description: "Modern revenue and billing" },
          { label: "S/4HANA Finance", href: "/expertise/s4hana-finance", description: "A smarter finance core" },
        ],
      },
    ],
  },
  {
    label: "Services",
    href: "/services",
    columns: [
      {
        heading: "Advisory & Delivery",
        links: [
          { label: "SAP Advisory", href: "/services/advisory", description: "Independent guidance for confident decisions" },
          { label: "SAP Implementation", href: "/services/implementation", description: "From blueprint to go-live" },
          { label: "SAP Rollouts", href: "/services/rollouts", description: "Consistent templates, local fit" },
          { label: "Finance Transformation", href: "/services/finance-transformation", description: "Reimagine the finance function" },
          { label: "SAP Testing", href: "/services/testing", description: "Quality engineered into delivery" },
        ],
      },
      {
        heading: "Run & Evolve",
        links: [
          { label: "SAP Upgrades", href: "/services/upgrades", description: "Stay current, stay supported" },
          { label: "SAP Migration", href: "/services/migration", description: "Move landscapes with confidence" },
          { label: "SAP Integration", href: "/services/integration", description: "Connect the finance ecosystem" },
          { label: "SAP Optimization", href: "/services/optimization", description: "More value from what you run" },
          { label: "SAP Support", href: "/services/support", description: "Reliable operations after go-live" },
        ],
      },
    ],
  },
  {
    label: "SAP Transformation",
    href: "/sap-transformation",
    columns: [
      {
        heading: "ECC to S/4HANA Pathways",
        links: [
          { label: "ECC → S/4HANA", href: "/sap-transformation", description: "Your journey, mapped end to end" },
          { label: "Greenfield", href: "/sap-transformation/greenfield", description: "Reimagine the finance landscape" },
          { label: "Brownfield", href: "/sap-transformation/brownfield", description: "Transform while preserving what works" },
          { label: "Selective Data Transition", href: "/sap-transformation/selective-data-transition", description: "The right balance of continuity and change" },
        ],
      },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    columns: [
      {
        heading: "Industries",
        links: [
          { label: "Manufacturing", href: "/industries/manufacturing" },
          { label: "Retail", href: "/industries/retail" },
          { label: "Professional Services", href: "/industries/professional-services" },
          { label: "Life Sciences", href: "/industries/life-sciences" },
          { label: "Energy & Utilities", href: "/industries/energy" },
          { label: "Consumer Products", href: "/industries/consumer-products" },
          { label: "Financial Services", href: "/industries/financial-services" },
        ],
      },
    ],
  },
];

export const utilityNav: NavLink[] = [
  { label: "Insights", href: "/insights" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Contact", href: "/contact" },
];

// Footer columns match the reference site's footer exactly: Company,
// Expertise, Services, Transformation, Insights (5 columns) — legal links
// live in the bottom bar, not as a footer column (see Footer.tsx).
export const footerNav = [
  {
    heading: "Company",
    links: [
      { label: "About BelMav", href: "/about" },
      { label: "Our Vision", href: "/about/vision" },
      { label: "Why BelMav", href: "/about/why-belmav" },
      { label: "Our Approach", href: "/about/approach" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    heading: "Expertise",
    links: [
      { label: "SAP Finance", href: "/expertise/sap-finance" },
      { label: "SAP Controlling", href: "/expertise/sap-controlling" },
      { label: "SAP RAR", href: "/expertise/sap-rar" },
      { label: "SAP BRIM", href: "/expertise/sap-brim" },
      { label: "S/4HANA Finance", href: "/expertise/s4hana-finance" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "SAP Advisory", href: "/services/advisory" },
      { label: "SAP Implementation", href: "/services/implementation" },
      { label: "SAP Rollouts", href: "/services/rollouts" },
      { label: "SAP Upgrades", href: "/services/upgrades" },
      { label: "SAP Migration", href: "/services/migration" },
      { label: "SAP Integration", href: "/services/integration" },
      { label: "SAP Optimization", href: "/services/optimization" },
      { label: "SAP Support", href: "/services/support" },
      { label: "Finance Transformation", href: "/services/finance-transformation" },
    ],
  },
  {
    heading: "Transformation",
    links: [
      { label: "ECC → S/4HANA", href: "/sap-transformation" },
      { label: "Greenfield", href: "/sap-transformation/greenfield" },
      { label: "Brownfield", href: "/sap-transformation/brownfield" },
      { label: "Selective Data Transition", href: "/sap-transformation/selective-data-transition" },
    ],
  },
  {
    heading: "Insights",
    links: [
      { label: "All Insights", href: "/insights" },
      { label: "SAP Finance", href: "/insights?category=SAP%20Finance" },
      { label: "S/4HANA", href: "/insights?category=S%2F4HANA" },
      { label: "Controlling", href: "/insights?category=Controlling" },
      { label: "RAR", href: "/insights?category=RAR" },
      { label: "BRIM", href: "/insights?category=BRIM" },
    ],
  },
];

// Legal links shown in the footer bottom bar (reference: footer-legal-*).
export const legalNav: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];
