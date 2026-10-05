"use client";

import type { CSSProperties } from "react";

export interface SilkProps {
  speed?: number;
  scale?: number;
  color?: string;
  noiseIntensity?: number;
  rotation?: number;
  lightMode?: boolean;
}

export default function Silk({ color = "#2563eb", speed = 5 }: SilkProps) {
  return (
    <div
      className="silk-field"
      style={
        {
          "--silk": color,
          animationDuration: `${Math.max(8, 22 - speed)}s`,
        } as CSSProperties
      }
    />
  );
}
