"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  defaultRegionId,
  getRegion,
  isRegionId,
  type Region,
  type RegionId,
} from "@/lib/regions";

const STORAGE_KEY = "slanfor-region";

type RegionContextValue = {
  region: Region;
  setRegionId: (id: RegionId) => void;
};

const RegionContext = createContext<RegionContextValue | null>(null);

export function RegionProvider({ children }: { children: ReactNode }) {
  const [regionId, setRegionIdState] = useState<RegionId>(defaultRegionId);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved && isRegionId(saved)) setRegionIdState(saved);
    } catch {
      /* ignore quota / private mode */
    }
  }, []);

  const setRegionId = useCallback((id: RegionId) => {
    setRegionIdState(id);
    try {
      window.localStorage.setItem(STORAGE_KEY, id);
    } catch {
      /* ignore quota / private mode */
    }
  }, []);

  const value = useMemo(
    () => ({ region: getRegion(regionId), setRegionId }),
    [regionId, setRegionId],
  );

  return <RegionContext.Provider value={value}>{children}</RegionContext.Provider>;
}

export function useRegion() {
  const context = useContext(RegionContext);
  if (!context) {
    throw new Error("useRegion must be used within RegionProvider");
  }
  return context;
}
