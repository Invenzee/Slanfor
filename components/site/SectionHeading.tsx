export const headingClass =
  "font-display text-[clamp(calc(2.5rem+4px),calc(4.6vw+4px),calc(4rem+4px))] leading-[1.08] tracking-[-0.03em] text-white";

export function SectionHeading({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return <h2 className={`${headingClass} ${className}`}>{text}</h2>;
}
