"use client";

import CountUp from "@/components/react-bits/CountUp";
import { formatMoney } from "@/lib/regions";
import { useRegion } from "./RegionProvider";

export function Money({
  amount,
  from,
  className = "",
}: {
  amount: number;
  from?: number;
  className?: string;
}) {
  const { region } = useRegion();
  const wide = region.symbol.length > 1;

  return (
    <span className={className}>
      <span className={wide ? "mr-1.5 align-baseline text-[0.42em] text-ink/80" : undefined}>
        {region.symbol}
      </span>
      <CountUp
        key={`${region.id}-${amount}`}
        to={amount}
        from={from}
        duration={1.2}
        separator={amount >= 1000 ? "," : ""}
      />
    </span>
  );
}

export function HostingAmount() {
  const { region } = useRegion();
  return <>{formatMoney(region, region.hosting)}</>;
}
