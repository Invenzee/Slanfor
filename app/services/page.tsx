import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GlarePanel } from "@/components/site/GlarePanel";
import { Hero } from "@/components/site/Hero";
import { pillars } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Services we provide: development, design, video, marketing, sales, and content. Open one and every related service sits on the same page, written out in full.",
};

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Services we provide"
        lede="Development, design, video, marketing, sales, and content. Open a practice and you will find the work that belongs with it, described properly, not reduced to a slogan. Choose the desk that matches the brief, or send the brief and we will tell you which one it is."
        formId="services"
        primaryHref="#practices"
        primaryLabel="Browse services"
      />
      <section id="practices" className="bg-inkwell py-16 md:py-24">
        <div className="mx-auto grid w-full max-w-[1180px] gap-4 px-5 md:grid-cols-2 md:px-8 xl:grid-cols-3">
          {pillars.map((pillar) => (
            <GlarePanel key={pillar.slug}>
              <Link href={`/services/${pillar.slug}`} className="flex h-full flex-col p-7">
                <h2 className="font-display text-3xl tracking-tight">{pillar.short}</h2>
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
