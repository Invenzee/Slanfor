import { QuoteButton } from "./EnquiryPopup";
import { SectionHeading } from "./SectionHeading";

export function HomeCta() {
  return (
    <section className="bg-inkwell">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start justify-between gap-6 px-5 py-16 md:flex-row md:items-end md:px-8 md:py-20">
        <div className="max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-sky">Next step</p>
          <SectionHeading text="Ready to get started?" className="mt-3" />
          <p className="mt-4 max-w-md text-base leading-7 text-ink/70">
            A few lines on what is broken, missing, or overdue is enough. We will
            tell you which practice it sits in, and what a first piece of work
            would look like.
          </p>
        </div>
        <QuoteButton />
      </div>
    </section>
  );
}
