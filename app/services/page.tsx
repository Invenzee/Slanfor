import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GlarePanel } from "@/components/site/GlarePanel";
import { Hero } from "@/components/site/Hero";
import { pillars } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Development, design, video, marketing, sales, and content. Every Slanfor service lives on one of six pages.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Services"
        title="The work, grouped properly."
        accent="Six practices."
        lede="Open a practice and the related services sit beside it. There is not a separate page for every line."
        formId="services"
        primaryHref="#practices"
        primaryLabel="Browse the six"
      />
      <section id="practices" className="bg-inkwell py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-[1180px] gap-4 px-5 md:grid-cols-2 md:px-8 xl:grid-cols-3">
          {pillars.map((pillar) => (
            <GlarePanel key={pillar.slug}>
              <Link href={`/services/${pillar.slug}`} className="flex h-full flex-col p-7">
                <span className="text-xs tracking-[0.18em] text-sky">{pillar.index}</span>
                <h2 className="mt-5 font-display text-3xl tracking-tight">{pillar.short}</h2>
                <span className="mt-3 flex-1 text-sm leading-6 text-ink/70">{pillar.summary}</span>
                <span className="mt-6 inline-flex items-center gap-2 text-sm text-sky">
                  Open
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </GlarePanel>
          ))}
        </div>
      </section>
    </>
  );
}
