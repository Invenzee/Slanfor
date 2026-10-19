import { headingClass } from "./SectionHeading";
import type { LegalSection } from "@/lib/legal";

export function LegalPage({
  eyebrow,
  title,
  lede,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <section className="band-navy">
        <div className="mx-auto w-full max-w-[860px] px-5 pt-40 pb-14 md:px-8 md:pt-44 md:pb-16">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-sky">{eyebrow}</p>
          <h1 className={`mt-4 ${headingClass}`}>{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-ink/75">{lede}</p>
          <p className="mt-4 text-xs uppercase tracking-[0.16em] text-ink/45">Updated {updated}</p>
        </div>
      </section>
      <section className="bg-inkwell py-16 md:py-24">
        <article className="mx-auto grid w-full max-w-[860px] gap-12 px-5 md:px-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="font-display text-[calc(1.5rem-2px)] tracking-tight">{section.title}</h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-base leading-7 text-ink/75">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </article>
      </section>
    </>
  );
}
