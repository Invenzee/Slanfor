import type { Metadata } from "next";
import { ContactForm } from "@/components/site/ContactForm";
import { PageHero } from "@/components/site/PageHero";
import { contactDetails } from "@/lib/services";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Send Slanfor a short brief: a site that needs building, a brand that never landed, a campaign that is not earning, or a list that nobody is working.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        lede="A half-built site, a brand that never quite landed, a channel that costs money and brings little, or a list that sits in a spreadsheet. Send a few lines. We read it as a piece of work, not as a form dump. A messy brief is enough to start."
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
            <p className="mt-8 max-w-sm text-sm leading-6 text-ink/55">
              Phone and email here are placeholders until they are added. Use the form
              for now; it stores the brief on this side until an inbox is connected.
            </p>
          </aside>
          <div className="rounded-xl border border-white/10 bg-panel p-5 md:p-6">
            <ContactForm idPrefix="contact" />
          </div>
        </div>
      </section>
    </>
  );
}
