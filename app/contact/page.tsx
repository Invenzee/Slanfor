import type { Metadata } from "next";
import { ContactForm } from "@/components/site/ContactForm";
import { PageHero } from "@/components/site/PageHero";
import { contactDetails } from "@/lib/services";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell Slanfor what you are trying to build, brand, market, or sell.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you need built, branded, or sold."
        lede="Share a short brief. We will reply once an inbox is connected to this form. Until then, the details below are placeholders."
      />
      <section className="bg-inkwell py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-[1180px] items-start gap-14 px-5 md:px-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <aside>
            <p className="text-xs uppercase tracking-[0.18em] text-ink/45">Details</p>
            <dl className="mt-6 space-y-6">
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-ink/45">Email</dt>
                <dd className="mt-1 text-lg">{contactDetails.email}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-ink/45">Phone</dt>
                <dd className="mt-1 text-lg">{contactDetails.phone}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.16em] text-ink/45">Social</dt>
                <dd className="mt-1 text-lg">{contactDetails.socials.join(", ")}</dd>
              </div>
            </dl>
            <p className="mt-6 text-xs uppercase tracking-[0.16em] text-ink/40">Placeholders</p>
          </aside>
          <div className="rounded-xl border border-white/10 bg-panel p-5 md:p-6">
            <ContactForm idPrefix="contact" />
          </div>
        </div>
      </section>
    </>
  );
}
