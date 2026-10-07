import { Check } from "lucide-react";
import CountUp from "@/components/react-bits/CountUp";
import { freeWebsite } from "@/lib/services";
import { GlarePanel } from "./GlarePanel";
import { SectionHeading } from "./SectionHeading";
import { SiteButton } from "./SiteButton";

export function OfferStrip() {
  return (
    <section className="bg-inkwell py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1180px] px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-sky">Offer</p>
            <SectionHeading text="Free website package" className="mt-3" />
            <p className="mt-3 max-w-xl text-base leading-7 text-ink/70">
              A standard business website is included. Hosting and looking after it is
              £200 a year. Shops, booking systems, and custom software are quoted on
              their own.
            </p>
          </div>
          <SiteButton href="/free-website" variant="line">
            See what is included
          </SiteButton>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <GlarePanel>
            <div className="p-7 md:p-9">
              <p className="text-sm text-ink/65">Professional website development</p>
              <p className="mt-4 font-display text-6xl tracking-tight md:text-7xl">
                £<CountUp to={0} from={80} duration={1.2} />
              </p>
            </div>
          </GlarePanel>
          <GlarePanel>
            <div className="p-7 md:p-9">
              <p className="text-sm text-ink/65">Hosting and website management</p>
              <p className="mt-4 font-display text-6xl tracking-tight md:text-7xl">
                £<CountUp to={200} duration={1.2} />
                <span className="ml-2 text-2xl text-ink/70">/year</span>
              </p>
            </div>
          </GlarePanel>
        </div>

        <ul className="mt-8 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {freeWebsite.includes.map((item) => (
            <li key={item} className="flex items-start gap-3 border-b border-white/10 py-3 text-sm">
              <Check size={16} className="mt-0.5 shrink-0 text-sky" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
