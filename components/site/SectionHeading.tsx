export const headingClass =
  "font-display text-[clamp(calc(2.5rem-2px),calc(4.6vw-2px),calc(4rem-2px))] leading-[1.08] tracking-[-0.03em] text-white";

export function SectionHeading({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return <h2 className={`${headingClass} ${className}`}>{text}</h2>;
}
