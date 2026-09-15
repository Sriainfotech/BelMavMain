import TransformationArc from "./TransformationArc";
import { PrimaryButton, SecondaryButton } from "./buttons";

export default function ClosingCta({
  headline,
  outro,
  primaryLabel = "Talk to an SAP Expert",
  primaryHref = "/contact",
}: {
  headline: string;
  outro: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="relative py-24 bg-belmav-black text-belmav-white overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <TransformationArc className="w-full h-full" animate={false} />
      </div>
      <div className="container-xl relative z-10 text-center max-w-2xl mx-auto">
        <p className="mb-5 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-belmav-gold">
          <span className="h-[2px] w-8 bg-belmav-gold" aria-hidden="true" />
          Start the Conversation
        </p>
        <h2 className="text-3xl md:text-4xl font-extrabold">{headline}</h2>
        <p className="mt-4 text-belmav-white/70">{outro}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <PrimaryButton href={primaryHref}>{primaryLabel}</PrimaryButton>
          <SecondaryButton
            href="/expertise"
            className="border-belmav-white text-belmav-white hover:bg-belmav-white hover:text-belmav-black"
          >
            Explore Our Expertise
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
}
