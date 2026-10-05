import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GlarePanel } from "@/components/site/GlarePanel";
import { Hero } from "@/components/site/Hero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SiteButton } from "@/components/site/SiteButton";
import { serviceNote } from "@/lib/service-notes";
import { getPillar, pillars, relatedPillars } from "@/lib/services";

const scenes: Record<string, { src: string; alt: string }[]> = {
  development: [
    { src: "/about-studio.jpg", alt: "A dim studio desk with monitors glowing blue" },
    { src: "/vision-sell.jpg", alt: "A quiet desk with a phone and a laptop" },
  ],
  design: [
    { src: "/vision-brand.jpg", alt: "A design desk with colour swatches and a sketchbook" },
    { src: "/about-studio.jpg", alt: "A dim studio desk with monitors glowing blue" },
  ],
  video: [
    { src: "/vision-market.jpg", alt: "An editing desk with a monitor and headphones" },
    { src: "/vision-brand.jpg", alt: "A design desk with colour swatches and a sketchbook" },
  ],
  marketing: [
    { src: "/vision-market.jpg", alt: "An editing desk with a monitor and headphones" },
    { src: "/vision-sell.jpg", alt: "A quiet desk with a phone and a laptop" },
  ],
  sales: [
    { src: "/vision-sell.jpg", alt: "A quiet desk with a phone and a laptop" },
    { src: "/about-studio.jpg", alt: "A dim studio desk with monitors glowing blue" },
  ],
  content: [
    { src: "/vision-brand.jpg", alt: "A design desk with colour swatches and a sketchbook" },
    { src: "/vision-market.jpg", alt: "An editing desk with a monitor and headphones" },
  ],
};

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return pillars.map((pillar) => ({ slug: pillar.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pillar = getPillar(slug);
  if (!pillar) return { title: "Service" };
  return { title: pillar.title, description: pillar.summary };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const pillar = getPillar(slug);
  if (!pillar) notFound();

  const related = relatedPillars(pillar.related);
  const shots = scenes[pillar.slug] ?? scenes.development;
  const services = pillar.clusters.flatMap((cluster) =>
    cluster.items.map((item) => ({ cluster: cluster.title, item })),
  );

  return (
    <>
      <Hero
        eyebrow={`Services / ${pillar.index}`}
        title={pillar.title}
        accent="Tell us the brief."
        lede={pillar.lede}
        formId={pillar.slug}
        primaryHref="#services"
        primaryLabel="See the work"
      />
      <div id="services">
        {services.map((service, index) => {
          const imageFirst = index % 2 === 0;
          const shot = shots[index % shots.length];
          return (
            <section
              key={service.item}
              className="grid min-h-[100vh] w-full lg:grid-cols-2"
            >
              <div className={`relative min-h-[46vh] lg:min-h-[100vh] ${imageFirst ? "" : "lg:order-2"}`}>
                <Image src={shot.src} alt={shot.alt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
              </div>
              <div
                className={`flex items-center px-6 py-16 md:px-14 lg:px-16 ${
                  imageFirst ? "bg-inkwell" : "bg-navy lg:order-1"
                }`}
              >
                <div className="mx-auto w-full max-w-xl">
                  <p className="text-xs font-medium uppercase tracking-[0.22em] text-sky">
                    {String(index + 1).padStart(2, "0")} / {service.cluster}
                  </p>
                  <SectionHeading text={service.item} className="mt-3" />
                  <p className="mt-4 text-base leading-7 text-ink/75">{serviceNote(service.item)}</p>
                  <div className="mt-8">
                    <SiteButton href="/contact">Ask about this</SiteButton>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="border-t border-white/10 bg-navy">
        <div className="mx-auto w-full max-w-[1180px] px-5 py-16 md:px-8">
          <p className="text-xs uppercase tracking-[0.18em] text-ink/45">Related</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {related.map((item) => (
              <GlarePanel key={item.slug}>
                <Link href={`/services/${item.slug}`} className="block p-6">
                  <p className="text-xs tracking-[0.16em] text-sky">{item.index}</p>
                  <h3 className="mt-3 font-display text-2xl tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/70">{item.summary}</p>
                </Link>
              </GlarePanel>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-inkwell">
        <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start justify-between gap-6 px-5 py-16 md:flex-row md:items-end md:px-8">
          <SectionHeading text="Tell us what to ship." className="max-w-xl" />
          <SiteButton href="/contact">Get a quote</SiteButton>
        </div>
      </section>
    </>
  );
}
