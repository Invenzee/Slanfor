import type { Metadata } from "next";
import { Check } from "lucide-react";
import CountUp from "@/components/react-bits/CountUp";
import { GlarePanel } from "@/components/site/GlarePanel";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { QuoteButton } from "@/components/site/EnquiryPopup";
import { freeWebsite } from "@/lib/services";

export const metadata: Metadata = {
  title: "Free website",
  description:
    "A standard four-to-five-page business website built at no charge. Hosting, upkeep, and form notifications are £200 a year.",
};

export default function FreeWebsitePage() {
  return (
    <>
      <PageHero
        eyebrow="Slanfor free website package"
        title="Free website package"
        lede="If you need a standard four-to-five-page site (home, about, services, and contact), Slanfor designs and builds it at no charge. Hosting, basic upkeep, and an email when someone uses the form are £200 a year, billed once. It is a real website, not a holding page with a logo on it."
      />
      <section className="bg-inkwell py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-5 md:px-8">
          <div className="grid gap-4 md:grid-cols-2">
            <GlarePanel>
              <div className="p-8 md:p-10">
                <p className="text-sm text-ink/65">Professional website development</p>
                <p className="mt-5 font-display text-7xl tracking-tight">
                  £<CountUp to={0} from={80} duration={1.2} />
                </p>
                <p className="mt-4 max-w-sm text-sm leading-6 text-ink/70">
                  No build fee for a standard four-to-five-page business website, written and designed around your offer.
                </p>
              </div>
            </GlarePanel>
            <GlarePanel>
              <div className="p-8 md:p-10">
                <p className="text-sm text-ink/65">Hosting and website management</p>
                <p className="mt-5 font-display text-7xl tracking-tight">
                  £<CountUp to={200} duration={1.2} />
                  <span className="ml-2 align-baseline text-2xl text-ink/70">/year</span>
                </p>
                <p className="mt-4 max-w-sm text-sm leading-6 text-ink/70">
                  Hosting, certificates, basic maintenance, and a working inbox for the contact form, for the year.
                </p>
              </div>
            </GlarePanel>
          </div>

          <SectionHeading text="What the package includes" className="mt-16" />
          <ul className="mt-4 grid gap-x-10 sm:grid-cols-2">
            {freeWebsite.includes.map((item) => (
              <li key={item} className="flex items-start gap-3 border-b border-white/10 py-4">
                <Check size={16} className="mt-1 shrink-0 text-sky" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <aside className="mt-12 rounded-xl border border-white/10 bg-panel p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-sky">Quoted separately</p>
            <p className="mt-3 max-w-2xl text-base leading-7 text-ink/75">{freeWebsite.exclusion}</p>
          </aside>

          <div className="mt-12">
            <QuoteButton>Ask about the package</QuoteButton>
          </div>
        </div>
      </section>
    </>
  );
}
