import { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Let's talk about your transformation. Contact BelMav Info Tech — SAP Finance & Transformation consulting in Kortenberg, Belgium.",
};

export default function ContactPage() {
  return (
    <div>
      <PageHero
        kicker="Contact"
        title="Talk to an SAP Expert"
        description="Tell us where you are and where you want to go. An SAP Finance expert will respond—with substance."
      />
      <section className="py-24">
        <div className="container-xl grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div>
            <div className="border border-belmav-black/10 p-8 bg-belmav-mist">
              <h3 className="text-lg font-bold text-belmav-black mb-6">Direct contact</h3>
              <div className="space-y-5 text-sm">
                <a href={`mailto:${SITE.email}`} className="flex items-start gap-3 text-belmav-black/80 hover:text-belmav-red">
                  <Mail size={18} className="text-belmav-red shrink-0 mt-0.5" /> {SITE.email}
                </a>
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="flex items-start gap-3 text-belmav-black/80 hover:text-belmav-red">
                  <Phone size={18} className="text-belmav-red shrink-0 mt-0.5" /> {SITE.phone}
                </a>
                <p className="flex items-start gap-3 text-belmav-black/80">
                  <MapPin size={18} className="text-belmav-red shrink-0 mt-0.5" /> {SITE.address}
                </p>
              </div>
              <p className="mt-6 text-xs leading-relaxed text-belmav-black/45">
                Based in Kortenberg, Belgium. Engagements across Belgium and Europe.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
