"use client";

import dynamic from "next/dynamic";
import GradientText from "@/components/react-bits/GradientText";
import { useReducedMotion } from "@/lib/use-reduced-motion";

const Silk = dynamic(() => import("@/components/react-bits/Silk"), { ssr: false });

export function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede: string;
}) {
  const showSilk = !useReducedMotion();

  return (
    <section className="band-navy relative flex min-h-[90vh] items-center overflow-hidden">
      {showSilk ? (
        <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true">
          <Silk speed={3.2} scale={1.15} color="#2563eb" noiseIntensity={1.1} rotation={0.18} />
        </div>
      ) : null}
      <div className="relative mx-auto flex w-full max-w-[860px] flex-col items-center px-5 py-28 text-center md:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-sky">{eyebrow}</p>
        <h1 className="mt-5">
          <GradientText
            as="span"
            className="w-full justify-center text-center font-display text-[clamp(2.5rem,4.6vw,4rem)] leading-[1.05] tracking-[-0.04em]"
            colors={["#3bb2f6", "#f8fafc", "#2563eb"]}
            animationSpeed={8}
          >
            {title}
          </GradientText>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-ink/75">{lede}</p>
      </div>
    </section>
  );
}
