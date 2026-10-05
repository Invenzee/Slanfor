"use client";

import dynamic from "next/dynamic";
import GradientText from "@/components/react-bits/GradientText";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { ContactForm } from "./ContactForm";
import { SiteButton } from "./SiteButton";

const Silk = dynamic(() => import("@/components/react-bits/Silk"), { ssr: false });

const heading =
  "font-display text-[clamp(2.5rem,4.6vw,4rem)] leading-[1.05] tracking-[-0.04em]";

export function Hero({
  eyebrow,
  title,
  accent,
  lede,
  formId,
  primaryHref = "/services",
  primaryLabel = "View services",
}: {
  eyebrow: string;
  title: string;
  accent: string;
  lede: string;
  formId: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  const showSilk = !useReducedMotion();

  return (
    <section className="band-navy relative overflow-hidden">
      {showSilk ? (
        <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true">
          <Silk speed={3.2} scale={1.15} color="#2563eb" noiseIntensity={1.1} rotation={0.18} />
        </div>
      ) : null}
      <div className="relative mx-auto grid w-full max-w-[1180px] items-center gap-10 px-5 pt-28 pb-16 md:px-8 md:pt-32 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-12 lg:pb-20">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-sky">{eyebrow}</p>
          <h1 className="mt-4 flex flex-col items-start text-ink">
            <GradientText
              as="span"
              className={heading}
              colors={["#3bb2f6", "#f8fafc", "#2563eb"]}
              animationSpeed={8}
            >
              {title}
            </GradientText>
            <GradientText
              as="span"
              className={`mt-1 ${heading}`}
              colors={["#f8fafc", "#3bb2f6", "#2563eb"]}
              animationSpeed={8}
            >
              {accent}
            </GradientText>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-ink/78">{lede}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <SiteButton href={primaryHref}>{primaryLabel}</SiteButton>
            <SiteButton href="/free-website" variant="ghost">
              Free website
            </SiteButton>
          </div>
        </div>

        <div>
          <div className="rounded-xl border border-white/10 bg-[#0c2038]/85 p-5 backdrop-blur md:p-6">
            <p className="font-display text-xl tracking-tight">Tell us about the work</p>
            <p className="mt-1 mb-4 text-sm text-ink/65">
              A short brief is enough. Email delivery is not connected yet.
            </p>
            <ContactForm idPrefix={formId} compact />
          </div>
        </div>
      </div>
    </section>
  );
}
