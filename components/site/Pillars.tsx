import { ArrowRight } from "lucide-react";
import { pillars } from "@/lib/services";
import { GlarePanel } from "./GlarePanel";
import { SectionHeading } from "./SectionHeading";
import { SiteButton } from "./SiteButton";

export function Pillars() {
  return (
    <section className="bg-navy py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1180px] px-5 md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-sky">Services</p>
        <SectionHeading text="Six practices. One team." className="mt-3" />
        <p className="mt-2 max-w-2xl text-base leading-7 text-ink/75">
          Development, design, video, marketing, sales, and content. Related work stays
          on the same page, so you are not sent through a catalogue of one-line services.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {pillars.map((pillar) => (
            <GlarePanel key={pillar.slug}>
              <div className="flex h-full flex-col p-7">
                <span className="text-xs tracking-[0.18em] text-sky">{pillar.index}</span>
                <h3 className="mt-5 font-display text-[1.7rem] leading-none tracking-tight">
                  {pillar.short}
                </h3>
                <p className="mt-4 line-clamp-4 text-sm leading-6 text-ink/70">{pillar.detail}</p>
                <ul className="mt-5 space-y-2">
                  {pillar.preview.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-ink/85">
                      <ArrowRight size={14} className="mt-1 shrink-0 text-sky" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <SiteButton href={`/services/${pillar.slug}`}>Read more</SiteButton>
                </div>
              </div>
            </GlarePanel>
          ))}
        </div>
      </div>
    </section>
  );
}
