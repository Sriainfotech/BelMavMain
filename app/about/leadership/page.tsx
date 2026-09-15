import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import { PrimaryButton } from "@/components/buttons";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "The people behind BelMav Info Tech — SAP Finance & Transformation consulting from Belgium.",
};

const placeholders = [1, 2, 3];

export default function LeadershipPage() {
  return (
    <div>
      <PageHero
        kicker="Leadership"
        title="Led by Practitioners."
        description="BelMav leadership profiles are being finalized. This page is CMS-ready: portraits, names, roles, and messages will appear here once approved."
      />
      <section className="py-24">
        <div className="container-xl">
          <p className="max-w-2xl text-sm leading-relaxed text-belmav-black/50 mb-14">
            BelMav publishes real people, not stock leadership. Profiles appear here only when they are accurate
            and approved.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {placeholders.map((n) => (
              <ScrollReveal key={n} delay={n * 0.08}>
                <div className="border-2 border-dashed border-belmav-black/20 p-14 text-center text-sm font-semibold text-belmav-black/50">
                  Placeholder — name, role, and a short message will be published once finalized.
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 bg-belmav-mist text-center">
        <div className="container-xl max-w-2xl mx-auto">
          <SectionHeading align="center" className="mx-auto" kicker="Get In Touch" title="Talk Directly With an Expert." />
          <p className="mt-4 text-belmav-black/70">No layers, no handoffs. Start the conversation with the people who do the work.</p>
          <div className="mt-8 flex justify-center">
            <PrimaryButton href="/contact">Talk to an SAP Expert</PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
