"use client";

import { useRef, type CSSProperties, type MouseEventHandler, type ReactNode, type Ref } from "react";
import Link from "next/link";

type ButtonSize = "sm" | "md" | "lg";

export interface SpecularButtonProps {
  children?: ReactNode;
  size?: ButtonSize;
  radius?: number;
  tint?: string;
  tintOpacity?: number;
  blur?: number;
  textColor?: string;
  lineColor?: string;
  baseColor?: string;
  intensity?: number;
  shineSize?: number;
  shineFade?: number;
  thickness?: number;
  speed?: number;
  followMouse?: boolean;
  proximity?: number;
  autoAnimate?: boolean;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: "button" | "submit" | "reset";
  href?: string;
}

const sizes: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

function shine(event: React.PointerEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 100;
  const y = ((event.clientY - rect.top) / rect.height) * 100;
  event.currentTarget.style.setProperty("--shine-x", `${x}%`);
  event.currentTarget.style.setProperty("--shine-y", `${y}%`);
}

export default function SpecularButton({
  children = "Get Started",
  size = "md",
  radius = 12,
  tint = "#2563eb",
  tintOpacity = 1,
  textColor = "#f8fafc",
  lineColor = "#bfdbfe",
  disabled = false,
  onClick,
  className = "",
  type = "button",
  href,
}: SpecularButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const classNameValue = `specular-face inline-flex cursor-pointer items-center justify-center border border-white/15 font-medium leading-none outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky disabled:cursor-default disabled:opacity-55 ${sizes[size]} ${className}`;
  const style = {
    borderRadius: radius,
    color: textColor,
    backgroundColor: tint,
    opacity: tintOpacity === 0 ? undefined : undefined,
    ["--shine" as string]: lineColor,
    background: `color-mix(in srgb, ${tint} ${Math.round(tintOpacity * 100)}%, transparent)`,
  } as CSSProperties;

  if (href) {
    return (
      <Link
        href={href}
        ref={ref as Ref<HTMLAnchorElement>}
        className={classNameValue}
        style={style}
        onPointerMove={shine}
      >
        <span className="relative z-[1]">{children}</span>
      </Link>
    );
  }

  return (
    <button
      ref={ref as Ref<HTMLButtonElement>}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classNameValue}
      style={style}
      onPointerMove={shine}
    >
      <span className="relative z-[1]">{children}</span>
    </button>
  );
}
