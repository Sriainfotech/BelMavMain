import TransformationArc from "./TransformationArc";

export default function PageHero({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative bg-belmav-black text-belmav-white pt-40 pb-24 overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 opacity-40">
        <TransformationArc className="w-full h-40" animate={false} />
      </div>
      <div className="container-xl relative z-10">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-belmav-gold">{kicker}</span>
        <h1 className="mt-5 text-4xl md:text-6xl font-extrabold max-w-3xl leading-[1.05] text-balance">{title}</h1>
        {description && <p className="mt-6 text-lg text-belmav-white/70 max-w-2xl leading-relaxed">{description}</p>}
      </div>
    </section>
  );
}
