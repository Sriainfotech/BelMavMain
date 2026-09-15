import { Metadata } from "next";
import { Suspense } from "react";
import InsightsListClient from "@/components/InsightsListClient";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspectives on SAP Finance transformation: S/4HANA, Controlling, RAR, BRIM, and the ECC-to-S/4HANA journey.",
};

export default function InsightsPage() {
  return (
    <Suspense fallback={null}>
      <InsightsListClient />
    </Suspense>
  );
}
