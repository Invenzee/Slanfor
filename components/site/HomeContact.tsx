import { contactDetails } from "@/lib/services";
import { ContactForm } from "./ContactForm";
import { SectionHeading } from "./SectionHeading";

export function HomeContact() {
  return (
    <section className="bg-navy py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-[1180px] items-start gap-12 px-5 md:px-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-sky">Contact</p>
          <SectionHeading text="Get in touch" className="mt-3" />
          <p className="mt-4 max-w-md text-base leading-7 text-ink/75">
            Tell us what needs building, rewriting, filming, advertising, or
            selling. Name the company, the problem, and the deadline if there is
            one. We do not need a polished deck to start a conversation.
          </p>
          <p className="mt-4 max-w-md text-base leading-7 text-ink/65">
            Email and phone below are still placeholders until an inbox is
            connected. The form checks what you send in the meantime.
          </p>
          <dl className="mt-8 space-y-5 text-sm">
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-ink/45">Email</dt>
              <dd className="mt-1 text-base">{contactDetails.email}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-ink/45">Phone</dt>
              <dd className="mt-1 text-base">{contactDetails.phone}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-ink/45">Social</dt>
              <dd className="mt-1 text-base">{contactDetails.socials.join(", ")}</dd>
            </div>
          </dl>
        </div>
        <div className="rounded-xl border border-white/10 bg-panel p-5 md:p-6">
          <ContactForm idPrefix="home" />
        </div>
      </div>
    </section>
  );
}
