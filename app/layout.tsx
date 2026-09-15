import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import LoadingScreen from "@/components/LoadingScreen";
import PageTransition from "@/components/PageTransition";
import { SITE } from "@/lib/constants";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.positioning}`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "SAP Finance consulting",
    "SAP Controlling",
    "SAP RAR",
    "SAP BRIM",
    "S/4HANA Finance",
    "ECC to S/4HANA transformation",
    "SAP finance transformation",
  ],
  openGraph: {
    title: `${SITE.name} | ${SITE.positioning}`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    alternateName: SITE.shortName,
    description: SITE.description,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Streoykensstraat 12",
      postalCode: "3071",
      addressLocality: "Kortenberg",
      addressCountry: "BE",
    },
  };

  return (
    <html lang="en" className={lato.variable}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LoadingScreen />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
