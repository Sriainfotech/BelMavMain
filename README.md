# BelMav Info Tech — Website

A full Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion marketing website for **BelMav Info Tech**,
an SAP Finance & Transformation consultancy.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To produce a production build:

```bash
npm run build
npm run start
```

`npm run build` completes with no TypeScript errors and statically generates all routes.

## Project structure

```
app/                     Next.js App Router routes (one folder per route)
  expertise/[slug]        Dynamic detail pages for the 5 expertise areas
  services/[slug]         Dynamic detail pages for the 10 services
  sap-transformation/[slug]  Dynamic detail pages for the 3 transformation pathways
  industries/[slug]       Dynamic detail pages for the 7 industries
  insights/[slug]         Dynamic detail pages for the 6 editorial articles
  success-stories/[slug]  Dynamic detail pages for the 3 case studies
  about/...                About, Vision, Why BelMav, Approach, Leadership
  careers/, contact/, privacy-policy/, cookie-policy/, terms-and-conditions/
  not-found.tsx            Custom 404 with a "broken arc" visual
  layout.tsx                Root layout: fonts, metadata, JSON-LD Organization schema
  page.tsx                  Homepage (all 19 sections from the brief)
components/               Shared, reusable UI (Navbar, MegaMenu, MobileMenu, Footer,
                           TransformationArc, buttons, cards, FAQAccordion, ContactForm,
                           Timeline, AnimatedCounter, DetailTemplate, ScrollReveal, ...)
components/home/          Homepage-only interactive pieces (Finance Ecosystem diagram,
                           ECC→S/4HANA toggle, Transformation Navigator wizard, Finance
                           Transformation Canvas)
lib/                      Central, CMS-ready content/data files:
  constants.ts             Company facts (name, vision, description, contact details)
  nav.ts                    Navigation / mega menu structure
  expertise.ts, services.ts, industries.ts, transformation.ts   DetailPage-shaped content
  insights.ts               6 editorial articles
  success-stories.ts        3 anonymized case studies
  faq.ts                    The 10 FAQ items used on the homepage and elsewhere
  types.ts                  Shared `DetailPage` content type
```

### Why a shared `DetailPage` type + `<DetailTemplate />`

Expertise areas, services, transformation pathways, and industries all follow the same
editorial shape (overview, challenge, what we do, approach, capabilities, business value, FAQ).
Rather than hand-building near-duplicate page layouts, each of these sections is a small,
dynamic `[slug]/page.tsx` that reads from its data file and renders the shared
`<DetailTemplate />` component. This is what makes the site genuinely CMS-ready: editing or
adding a service/expertise/industry/pathway is a matter of editing an array in `/lib`, not
building a new page.

## Brand system

Only four colors are used anywhere in the UI: `#000000` (black), `#FEC802` (gold),
`#DD161C` (red), `#FFFFFF` (white), plus black/white tints for depth
(`#0A0A0A`, `#171717`, `#F5F5F5`). These are defined as Tailwind theme tokens under the
`belmav` namespace in `tailwind.config.ts`. The signature **BelMav Arc** motif
(`components/TransformationArc.tsx`) sweeps black → gold → red and is reused across the hero,
section dividers, CTAs, the footer accent, and the custom 404 page.

Typography is Manrope, loaded via `next/font/google` in `app/layout.tsx`.

## What's real vs. placeholder content

- **Real, verbatim:** company name, tagline, positioning, vision statement, description,
  email, phone, and address (see `lib/constants.ts`), and the 10 FAQ questions.
- **Genuine draft copy (not fabricated facts):** all service/expertise/industry/pathway
  descriptions, the 6 Insights articles, and the 3 Success Stories. These are original,
  professionally written content — no invented statistics, client names, or claims.
- **Explicitly placeholder, pending real input before launch:**
  - `/about/leadership` — no leadership names are published; the page describes practice
    functions instead and should be replaced with real bios/photos before launch.
  - `/careers` — no fabricated job openings; states there are no listed vacancies and
    invites direct contact.
  - `/success-stories` — case studies use anonymized descriptors (e.g. "A European
    manufacturing group") and qualitative outcomes only, by design. Replace with real,
    approved client stories if/when available.
  - `/privacy-policy`, `/cookie-policy`, `/terms-and-conditions` — clearly labeled draft
    legal text pending review by qualified legal counsel. Do not treat as binding until
    reviewed.

## Known gaps / TODOs

- **Dependency security advisories:** `npm audit` flags advisories in `next@14.2.x` and its
  transitive `postcss`/`glob` dependencies that are only fully resolved by upgrading to
  Next.js 16, which is a breaking change out of scope for this build. Before production
  launch, plan and test a Next.js 15/16 upgrade.
  Also apply real backend handling to the contact form (currently a client-side simulated
  submission — no data is sent anywhere).
- Contact form is intentionally **front-end only** (client-side validation + simulated
  submission). Wire it to a real backend/email service (e.g. an API route, form service, or
  CRM integration) before launch.
- Leadership bios, real case studies with client permission, and legal pages all need
  real content and legal sign-off before go-live, as noted above.
- No analytics/consent-management tooling is wired in; add before launch if required for
  compliance in target markets.

## Tech stack

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion · lucide-react icons ·
next/font (Manrope) · JSON-LD Organization schema in the root layout.
