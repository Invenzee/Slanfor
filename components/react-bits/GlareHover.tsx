"use client";

import { useRef, type CSSProperties, type ReactNode } from "react";

interface GlareHoverProps {
  width?: string;
  height?: string;
  background?: string;
  borderRadius?: string;
  borderColor?: string;
  children?: ReactNode;
  glareColor?: string;
  glareOpacity?: number;
  glareAngle?: number;
  glareSize?: number;
  transitionDuration?: number;
  playOnce?: boolean;
  className?: string;
  style?: CSSProperties;
}

export default function GlareHover({
  width = "100%",
  height = "auto",
  background = "#10243f",
  borderRadius = "0.75rem",
  borderColor = "rgba(248,250,252,0.14)",
  children,
  glareColor = "#7dd3fc",
  glareOpacity = 0.45,
  className = "",
  style = {},
}: GlareHoverProps) {
  const glareRef = useRef<HTMLDivElement>(null);

  const move = (event: React.MouseEvent<HTMLDivElement>) => {
    const node = glareRef.current;
    const rect = event.currentTarget.getBoundingClientRect();
    if (!node) return;
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    node.style.background = `radial-gradient(220px circle at ${x}px ${y}px, ${glareColor}, transparent 60%)`;
    node.style.opacity = String(glareOpacity);
  };

  return (
    <div
      className={`relative overflow-hidden border ${className}`}
      style={{ width, height, background, borderRadius, borderColor, ...style }}
      onMouseMove={move}
      onMouseLeave={() => {
        if (glareRef.current) glareRef.current.style.opacity = "0";
      }}
    >
      <div
        ref={glareRef}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300"
      />
      <div className="relative z-[1] h-full w-full">{children}</div>
    </div>
  );
}
