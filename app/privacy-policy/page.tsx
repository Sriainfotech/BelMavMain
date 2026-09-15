import { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How BelMav Info Tech handles personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdatedNote="Draft policy — pending legal review."
      sections={[
        {
          heading: "Status of This Document",
          body: [
            `This is placeholder text, provided to define the structure of the page. It must be reviewed and replaced by ${SITE.name}'s legal counsel before publication. Nothing on this page constitutes a binding policy yet.`,
          ],
        },
        {
          heading: "Scope",
          body: [
            "Placeholder — this section will define what this document covers: the website, contact enquiries, and related communications.",
          ],
        },
        {
          heading: "Data & Responsibilities",
          body: [
            "Placeholder — this section will describe responsibilities, legal bases, retention, and the rights of visitors and enquirers, in line with applicable Belgian and European regulation.",
          ],
        },
        {
          heading: "Contact for Questions",
          body: [`Placeholder — questions about this document can be directed to ${SITE.email} until the final reviewed text is published.`],
        },
      ]}
    />
  );
}
