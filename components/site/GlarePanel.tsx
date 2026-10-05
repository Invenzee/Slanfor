"use client";

import GlareHover from "@/components/react-bits/GlareHover";

export function GlarePanel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <GlareHover
      width="100%"
      height="auto"
      background="#10243f"
      borderRadius="0.75rem"
      borderColor="rgba(248,250,252,0.14)"
      glareColor="#7dd3fc"
      glareOpacity={0.45}
      glareAngle={-35}
      glareSize={260}
      className={`h-full rounded-xl ${className}`}
    >
      {children}
    </GlareHover>
  );
}
