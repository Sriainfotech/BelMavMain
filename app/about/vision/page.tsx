import { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { PrimaryButton } from "@/components/buttons";
import { SITE } from "@/lib/constants";
import VisionPillars from "@/components/VisionPillars";

export const metadata: Metadata = {
  title: "Our Vision",
  description: SITE.vision,
};

export default function VisionPage() {
  return (
    <div>
      <PageHero
        kicker="Our Vision"
        title="Make SAP Transformation Simpler. Smarter. More Predictable."
        description="Three words that shape how BelMav designs every engagement, every deliverable, and every conversation."
      />
      <VisionPillars />
      <section className="py-24 bg-belmav-black text-belmav-white text-center">
        <div className="container-xl max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold">See how this vision plays out in practice</h2>
          <div className="mt-8 flex justify-center">
            <PrimaryButton href="/about/approach">See Our Approach</PrimaryButton>
          </div>
        </div>
      </section>
    </div>
  );
}
