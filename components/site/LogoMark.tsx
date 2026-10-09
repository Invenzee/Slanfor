import Image from "next/image";

const sizes = {
  sm: { className: "h-11 w-auto", width: 135, height: 44 },
  lg: { className: "h-14 w-auto", width: 172, height: 56 },
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
