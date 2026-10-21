import { NextRequest, NextResponse } from "next/server";
import { REGION_COOKIE, defaultRegionId, regionFromCountryCode, type RegionId } from "@/lib/regions";

function clientIp(request: NextRequest) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "";
  return request.headers.get("x-real-ip") ?? request.headers.get("cf-connecting-ip") ?? "";
}

function isLoopback(ip: string) {
  return !ip || ip === "::1" || ip === "127.0.0.1" || ip.startsWith("127.") || ip.startsWith("::ffff:127.");
}

export async function GET(request: NextRequest) {
  const headerCountry =
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("cf-ipcountry") ||
    request.headers.get("x-country-code");

  let region: RegionId = headerCountry ? regionFromCountryCode(headerCountry) : defaultRegionId;

  if (!headerCountry) {
    const ip = clientIp(request);
    try {
      const url = isLoopback(ip)
        ? "https://ipwho.is/?fields=country_code,success"
        : `https://ipwho.is/${encodeURIComponent(ip)}?fields=country_code,success`;
      const lookup = await fetch(url, { cache: "no-store" });
      if (lookup.ok) {
        const data = (await lookup.json()) as { success?: boolean; country_code?: string };
        if (data.success && data.country_code) {
          region = regionFromCountryCode(data.country_code);
        }
      }
    } catch {
      /* keep default */
    }
  }

  const response = NextResponse.json({ region });
  response.cookies.set(REGION_COOKIE, region, {
    path: "/",
    maxAge: 60 * 60 * 24,
    sameSite: "lax",
  });
  return response;
}
