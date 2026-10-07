import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GlarePanel } from "@/components/site/GlarePanel";
import { Hero } from "@/components/site/Hero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { SiteButton } from "@/components/site/SiteButton";
import { serviceNoteLines } from "@/lib/service-notes";
import { getPillar, pillars, relatedPillars, serviceImage } from "@/lib/services";

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
  const services = pillar.clusters.flatMap((cluster) => cluster.items);

  return (
    <>
      <Hero
        title={pillar.title}
        lede={pillar.lede}
        formId={pillar.slug}
        primaryHref="#services"
        primaryLabel="View services"
      />
      <div id="services">
        {services.map((service, index) => {
          const imageFirst = index % 2 === 0;
          const shot = serviceImage(service);
          return (
            <section
              key={service}
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
                  <SectionHeading text={service} />
                  <div className="mt-5 space-y-4">
                    {serviceNoteLines(service).map((line, index) => (
                      <p key={index} className="text-base leading-7 text-ink/75">
                        {line}
                      </p>
                    ))}
                  </div>
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
                  <h3 className="font-display text-2xl tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/70">{item.summary}</p>
                </Link>
              </GlarePanel>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-inkwell">
        <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start justify-between gap-6 px-5 py-16 md:flex-row md:items-end md:px-8">
          <SectionHeading text="Request a quote" className="max-w-xl" />
          <SiteButton href="/contact">Get a quote</SiteButton>
        </div>
      </section>
    </>
  );
}
