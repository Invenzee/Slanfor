import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SiteButton } from "@/components/site/SiteButton";
import { focusChapters } from "@/lib/services";

export const metadata: Metadata = {
  title: "About",
  description:
    "Slanfor combines development, design, video, marketing, and outbound sales under one roof.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Slanfor"
        title="One team for the site, the brand, and the next customer."
        lede="We help businesses build their digital presence, create strong brands, generate qualified leads, and turn opportunities into customers."
      />
      {focusChapters.map((chapter, index) => {
        const imageFirst = index % 2 === 0;
        return (
          <section key={chapter.word} className={index % 2 === 0 ? "bg-inkwell" : "bg-navy"}>
            <div className="mx-auto grid w-full max-w-[1180px] items-center gap-10 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2 lg:gap-14">
              <div className={imageFirst ? "" : "lg:order-2"}>
                <div className="overflow-hidden rounded-xl border border-white/10">
                  <Image
                    src={chapter.image}
                    alt={chapter.imageAlt}
                    width={1200}
                    height={900}
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </div>
              <div className={imageFirst ? "" : "lg:order-1"}>
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-sky">
                  {chapter.index} / Vision
                </p>
                <SectionHeading text={chapter.word} className="mt-3" />
                <p className="mt-4 text-base leading-7 text-ink/80">{chapter.text}</p>
                <p className="mt-4 text-base leading-7 text-ink/70">{chapter.body}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <SiteButton href={chapter.href}>{chapter.label}</SiteButton>
                  {chapter.also?.map((item) => (
                    <SiteButton key={item.href} href={item.href} variant="ghost">
                      {item.label}
                    </SiteButton>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
