"use client";

import GradientText from "@/components/react-bits/GradientText";

const headingClass =
  "font-display text-[clamp(2.5rem,4.6vw,4rem)] leading-[1.05] tracking-[-0.04em]";

export function SectionHeading({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <h2 className={className}>
      <GradientText
        as="span"
        className={headingClass}
        colors={["#3bb2f6", "#f8fafc", "#2563eb"]}
        animationSpeed={8}
      >
        {text}
      </GradientText>
    </h2>
  );
}
