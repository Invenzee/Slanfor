import Image from "next/image";

const sizes = {
  sm: { className: "h-10 w-auto", width: 164, height: 40 },
  lg: { className: "h-14 w-auto", width: 230, height: 56 },
};

export function LogoMark({ size = "sm" }: { size?: "sm" | "lg" }) {
  const { className, width, height } = sizes[size];

  return (
    <Image
      src="/Slanfor.png"
      alt=""
      width={width}
      height={height}
      className={`shrink-0 object-contain object-left ${className}`}
      aria-hidden="true"
      priority={size === "sm"}
    />
  );
}
