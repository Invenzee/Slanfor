"use client";

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import {
  defaultRegionId,
  getRegion,
  isRegionId,
  type Region,
  type RegionId,
} from "@/lib/regions";

type RegionContextValue = {
  region: Region;
};

const RegionContext = createContext<RegionContextValue | null>(null);

export function RegionProvider({
  children,
  initialRegionId = defaultRegionId,
  detected = false,
}: {
  children: ReactNode;
  initialRegionId?: RegionId;
  detected?: boolean;
}) {
  const [regionId, setRegionId] = useState<RegionId>(initialRegionId);

  useEffect(() => {
    if (detected) return;

    let cancelled = false;
    fetch("/api/geo")
      .then((response) => (response.ok ? response.json() : null))
      .then((data: { region?: string } | null) => {
        if (cancelled || !data?.region || !isRegionId(data.region)) return;
        setRegionId(data.region);
      })
      .catch(() => {
        /* keep default */
      });

    return () => {
      cancelled = true;
    };
  }, [detected]);

  const value = useMemo(() => ({ region: getRegion(regionId) }), [regionId]);

  return <RegionContext.Provider value={value}>{children}</RegionContext.Provider>;
}

export function useRegion() {
  const context = useContext(RegionContext);
  if (!context) {
    throw new Error("useRegion must be used within RegionProvider");
  }
  return context;
}
