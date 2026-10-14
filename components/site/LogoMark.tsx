import Image from "next/image";

const sizes = {
  sm: { className: "h-9 w-auto", width: 121, height: 36 },
  lg: { className: "h-11 w-auto", width: 148, height: 44 },
};

export function LogoMark({ size = "lg" }: { size?: "sm" | "lg" }) {
  const { className, width, height } = sizes[size];

  return (
    <Image
      src="/Slanfor.png"
      alt=""
      width={width}
      height={height}
      className={`shrink-0 object-contain object-left ${className}`}
      aria-hidden="true"
      priority
    />
  );
}
