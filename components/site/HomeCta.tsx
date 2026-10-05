import { SectionHeading } from "./SectionHeading";
import { SiteButton } from "./SiteButton";

export function HomeCta() {
  return (
    <section className="bg-inkwell">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start justify-between gap-6 px-5 py-16 md:flex-row md:items-end md:px-8 md:py-20">
        <div className="max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-sky">Next step</p>
          <SectionHeading text="Start with a conversation." className="mt-3" />
        </div>
        <SiteButton href="/contact">Get a quote</SiteButton>
      </div>
    </section>
  );
}
