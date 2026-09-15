import PageHero from "./PageHero";

export default function LegalPage({
  title,
  lastUpdatedNote,
  sections,
}: {
  title: string;
  lastUpdatedNote: string;
  sections: { heading: string; body: string[] }[];
}) {
  return (
    <div>
      <PageHero kicker="Legal" title={title} description={lastUpdatedNote} />
      <section className="py-20">
        <div className="container-xl max-w-3xl">
          <div className="mb-12 inline-block border-2 border-belmav-red bg-belmav-red/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-belmav-red">
            Placeholder — pending client &amp; legal review
          </div>
          {sections.map((s, idx) => (
            <div key={s.heading} className="border-b border-belmav-black/10 py-8 first:pt-0">
              <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-belmav-black">
                <span className="mr-3 text-belmav-gold">{String(idx + 1).padStart(2, "0")}</span>
                {s.heading}
              </h2>
              {s.body.map((p, i) => (
                <p key={i} className="mt-4 max-w-2xl text-belmav-black/60 leading-relaxed mb-3 last:mb-0">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
