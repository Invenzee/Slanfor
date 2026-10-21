import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { REGION_COOKIE, REGION_HEADER, regionFromCountryCode } from "@/lib/regions";

export function proxy(request: NextRequest) {
  const country =
    request.headers.get("x-vercel-ip-country") ||
    request.headers.get("cf-ipcountry") ||
    request.headers.get("x-country-code");

  if (!country) {
    return NextResponse.next();
  }

  const region = regionFromCountryCode(country);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(REGION_HEADER, region);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  response.cookies.set(REGION_COOKIE, region, {
    path: "/",
    maxAge: 60 * 60 * 24,
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)"],
};
