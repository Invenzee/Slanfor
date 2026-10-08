import Image from "next/image";

const sizes = {
  sm: { className: "h-9 w-auto", width: 139, height: 36 },
  lg: { className: "h-12 w-auto", width: 185, height: 48 },
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
