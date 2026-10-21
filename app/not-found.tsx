import { headingClass } from "@/components/site/SectionHeading";
import { SiteButton } from "@/components/site/SiteButton";

export default function NotFound() {
  return (
    <section className="band-navy">
      <div className="mx-auto flex min-h-[70svh] w-full max-w-[1180px] flex-col justify-center px-5 pt-28 pb-20 md:px-8">
        <p className="text-xs uppercase tracking-[0.22em] text-sky">404</p>
        <h1 className={`mt-4 max-w-xl ${headingClass}`}>
          Page not found
        </h1>
        <p className="mt-5 max-w-md text-base leading-7 text-ink/70">
          The link may be old, or the work may live under one of the six practices. Start from home, or go straight to services.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <SiteButton href="/">Back home</SiteButton>
          <SiteButton href="/services" variant="ghost">
            See services
          </SiteButton>
        </div>
      </div>
    </section>
  );
}
