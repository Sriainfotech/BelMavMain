import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import { PrimaryButton } from "@/components/buttons";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build what's next in SAP Finance. Join BelMav Info Tech — SAP Finance & Transformation consulting in Belgium.",
};

const values = [
  { title: "Depth over breadth", description: "We hire and grow specialists in SAP Finance and transformation — and give them room to go deep." },
  { title: "Honesty as default", description: "With clients and with each other: straight answers, early signals, no theatre." },
  { title: "Craft in delivery", description: "Predictable outcomes come from disciplined work. We take pride in the unglamorous details." },
  { title: "Value beyond go-live", description: "We build things meant to last, and we stay accountable after day one." },
];

export default function CareersPage() {
  return (
    <div>
      <PageHero
        kicker="Careers"
        title="Build What's Next in SAP Finance"
        description="Join a consultancy where SAP Finance expertise is the main event — not a practice area between others."
      />
      <section className="py-24">
        <div className="container-xl">
          <SectionHeading kicker="Working With Us" title="A culture built for people who take finance transformation seriously." />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.08}>
                <div className="border-l-2 border-belmav-gold pl-6 py-1">
                  <h3 className="text-lg font-bold text-belmav-black">{v.title}</h3>
                  <p className="mt-2 text-sm text-belmav-black/65 leading-relaxed">{v.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-belmav-mist">
        <div className="container-xl max-w-2xl">
          <SectionHeading kicker="Open Roles" title="Coming soon" />
          <p className="mt-6 text-belmav-black/70 leading-relaxed">
            We don't currently have specific vacancies published on this page. If you have deep SAP Finance,
            Controlling, RAR, or BRIM experience and are interested in what we're building, send us your profile
            at{" "}
            <a href={`mailto:${SITE.email}`} className="font-semibold text-belmav-red hover:underline">
              {SITE.email}
            </a>{" "}
            and we'll keep you in mind as our team grows.
          </p>
        </div>
      </section>

      <section className="py-24 bg-belmav-black text-belmav-white text-center">
        <div className="container-xl max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold">Interested in what we're building?</h2>
          <div className="mt-8 flex justify-center">
            <PrimaryButton href="/contact">Get In Touch</PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
