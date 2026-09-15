import Link from "next/link";

const SECTION_LABELS: Record<string, string> = {
  "/expertise": "Expertise",
  "/services": "Services",
  "/sap-transformation": "SAP Transformation",
  "/industries": "Industries",
  "/insights": "Insights",
  "/success-stories": "Success Stories",
  "/about": "About",
};

export default function Breadcrumb({ basePath, page }: { basePath: string; page: string }) {
  const section = SECTION_LABELS[basePath] || basePath.replace("/", "");
  return (
    <nav aria-label="Breadcrumb" className="container-xl">
      <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-belmav-white/45">
        <Link href="/" className="hover:text-belmav-white">
          Home
        </Link>
        <span aria-hidden="true">/</span>
        <Link href={basePath} className="hover:text-belmav-white">
          {section}
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-belmav-white/80">{page.toUpperCase()}</span>
      </div>
    </nav>
  );
}
