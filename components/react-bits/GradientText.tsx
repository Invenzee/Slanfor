"use client";

import type { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
  direction?: "horizontal" | "vertical" | "diagonal";
  pauseOnHover?: boolean;
  yoyo?: boolean;
  as?: "div" | "span";
}

export default function GradientText({
  children,
  className = "",
  colors = ["#3bb2f6", "#f8fafc", "#2563eb"],
  animationSpeed = 8,
  as = "div",
}: GradientTextProps) {
  const Tag = as;
  const stops = [...colors, colors[0]].join(", ");

  return (
    <Tag
      className={`slanfor-gradient-text inline-flex max-w-full ${className}`}
      style={{
        backgroundImage: `linear-gradient(90deg, ${stops})`,
        animationDuration: `${animationSpeed}s`,
      }}
    >
      {children}
    </Tag>
  );
}
