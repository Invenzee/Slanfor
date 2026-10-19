"use client";

import { ChevronDown, Mail, Phone } from "lucide-react";
import { contactDetails } from "@/lib/services";
import { isRegionId, regions } from "@/lib/regions";
import { useRegion } from "./RegionProvider";

export function TopBar() {
  const { region, setRegionId } = useRegion();
  const { email, phone, phoneTel } = contactDetails;

  return (
    <div className="text-ink">
      <div className="mx-auto flex h-10 w-full max-w-[1180px] items-center justify-between gap-3 px-5 md:px-8">
        <div className="flex min-w-0 items-center gap-1.5 md:gap-5">
          <a
            href={`tel:${phoneTel}`}
            className="grid h-8 w-8 place-items-center rounded-md text-ink/85 hover:text-sky md:hidden"
            aria-label={`Call ${phone}`}
          >
            <Phone size={16} strokeWidth={1.75} />
          </a>
          <a
            href={`mailto:${email}`}
            className="grid h-8 w-8 place-items-center rounded-md text-ink/85 hover:text-sky md:hidden"
            aria-label={`Email ${email}`}
          >
            <Mail size={16} strokeWidth={1.75} />
          </a>
          <a href={`tel:${phoneTel}`} className="hidden text-xs text-ink/80 hover:text-sky md:inline">
            {phone}
          </a>
          <a href={`mailto:${email}`} className="hidden text-xs text-ink/80 hover:text-sky md:inline">
            {email}
          </a>
        </div>

        <label className="relative inline-flex shrink-0 items-center">
          <span className="sr-only">Region</span>
          <select
            value={region.id}
            onChange={(event) => {
              const next = event.target.value;
              if (isRegionId(next)) setRegionId(next);
            }}
            className="h-8 max-w-[11rem] cursor-pointer appearance-none rounded-md border border-white/15 bg-transparent py-0 pl-2.5 pr-7 text-xs text-ink outline-none hover:border-sky/50 focus:border-sky"
          >
            {regions.map((item) => (
              <option key={item.id} value={item.id}>
                {item.short}
              </option>
            ))}
          </select>
          <ChevronDown
            size={12}
            className="pointer-events-none absolute right-2 text-ink/70"
            aria-hidden="true"
          />
        </label>
      </div>
    </div>
  );
}
