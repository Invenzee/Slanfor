export function LogoMark({ size = "sm" }: { size?: "sm" | "lg" }) {
  const box = size === "lg" ? "h-16 w-16 text-[11px]" : "h-9 w-9 text-[9px]";
  const color = "border-white/40 text-white/80";

  return (
    <span
      aria-hidden="true"
      className={`grid shrink-0 place-items-center rounded-xl border font-sans uppercase tracking-[0.16em] ${box} ${color}`}
    >
      Logo
    </span>
  );
}
