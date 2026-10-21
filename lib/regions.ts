export const regions = [
  {
    id: "gb",
    name: "United Kingdom",
    short: "UK (£)",
    symbol: "£",
    hosting: 200,
  },
  {
    id: "us",
    name: "United States",
    short: "USA ($)",
    symbol: "$",
    hosting: 250,
  },
] as const;

export type RegionId = (typeof regions)[number]["id"];
export type Region = (typeof regions)[number];

export const defaultRegionId: RegionId = "gb";

export const REGION_COOKIE = "slanfor-region";
export const REGION_HEADER = "x-slanfor-region";

export function isRegionId(value: string): value is RegionId {
  return regions.some((region) => region.id === value);
}

export function regionFromCountryCode(code?: string | null): RegionId {
  return code?.trim().toUpperCase() === "US" ? "us" : "gb";
}

export function getRegion(id: RegionId): Region {
  return regions.find((region) => region.id === id) ?? regions[0];
}

export function formatMoney(region: Region, amount: number) {
  const formatted = amount.toLocaleString("en-GB");
  return region.symbol.length > 1 ? `${region.symbol} ${formatted}` : `${region.symbol}${formatted}`;
}
