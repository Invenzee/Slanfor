import SpecularButton from "@/components/react-bits/SpecularButton";

const tones = {
  blue: {
    tint: "#2563eb",
    tintOpacity: 1,
    lineColor: "#bfdbfe",
    baseColor: "#1d4ed8",
  },
  ghost: {
    tint: "#0b1e3a",
    tintOpacity: 0.45,
    lineColor: "#3bb2f6",
    baseColor: "#3bb2f6",
  },
  line: {
    tint: "#071422",
    tintOpacity: 0.55,
    lineColor: "#f8fafc",
    baseColor: "#64748b",
  },
};

export function SiteButton({
  href,
  children,
  variant = "blue",
}: {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof tones;
}) {
  return (
    <SpecularButton href={href} size="md" radius={12} textColor="#f8fafc" followMouse {...tones[variant]}>
      {children}
    </SpecularButton>
  );
}
