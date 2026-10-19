"use client";

import { GlarePanel } from "./GlarePanel";
import { Money } from "./Money";
import { useRegion } from "./RegionProvider";

export function FreeWebsitePrices() {
  const { region } = useRegion();

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <GlarePanel>
        <div className="p-8 md:p-10">
          <p className="text-sm text-ink/65">Professional website development</p>
          <p className="mt-5 font-display text-7xl tracking-tight">
            <Money amount={0} from={80} />
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
            <Money amount={region.hosting} />
            <span className="ml-2 align-baseline text-2xl text-ink/70">/ annually</span>
          </p>
          <p className="mt-4 max-w-sm text-sm leading-6 text-ink/70">
            Hosting, certificates, basic maintenance, and a working inbox for the contact form, for the year.
          </p>
        </div>
      </GlarePanel>
    </div>
  );
}
