import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Timeline from "@/components/Timeline";
import { PrimaryButton } from "@/components/buttons";

export const metadata: Metadata = {
  title: "Our Approach",
  description:
    "A disciplined, predictable way to transform: Discover, Assess, Align, Design, Deliver, Validate, Optimize.",
};

const phases = [
  { phase: "Discover", description: "Understand the current landscape: systems, processes, data, and the people who run them." },
  { phase: "Assess", description: "Measure readiness honestly — custom code, data quality, process variation, and risk." },
  { phase: "Align", description: "Bring technology options and business priorities to one table, with trade-offs in the open." },
  { phase: "Design", description: "Create the transformation blueprint: target architecture, pathway, and sequence." },
  { phase: "Deliver", description: "Execute with disciplined governance, working software early, and honest status." },
  { phase: "Validate", description: "Prove readiness with rehearsed migrations and evidence-based testing." },
  { phase: "Optimize", description: "Continue improving after go-live — value that compounds release by release." },
];

export default function ApproachPage() {
  return (
    <div>
      <PageHero
        kicker="Our Approach"
        title="A More Predictable Way to Transform."
        description="Seven stages. One discipline. The BelMav arc — from understanding your reality to optimizing your future."
      />
      <section className="py-28">
        <div className="container-xl">
          <Timeline steps={phases} scrollArc />
        </div>
      </section>
      <section className="py-24 bg-belmav-black text-belmav-white text-center">
        <div className="container-xl max-w-2xl mx-auto">
          <SectionHeading dark align="center" className="mx-auto" kicker="Get Started" title="Ready to discuss your Discover phase?" />
          <div className="mt-8 flex justify-center">
            <PrimaryButton href="/contact">Talk to an SAP Expert</PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
