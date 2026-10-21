import type { Metadata } from "next";
import { cookies, headers } from "next/headers";
import { Inter, Unbounded } from "next/font/google";
import { EnquiryPopupProvider } from "@/components/site/EnquiryPopup";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { RegionProvider } from "@/components/site/RegionProvider";
import { TawkChat } from "@/components/site/TawkChat";
import { REGION_COOKIE, REGION_HEADER, defaultRegionId, isRegionId } from "@/lib/regions";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Slanfor | Digital studio for websites, brands, campaigns, and sales",
    template: "%s | Slanfor",
  },
  description:
    "Slanfor is a digital studio that designs and builds websites, shapes brands, produces video and copy, runs campaigns, and works the sales list so the next customer has somewhere to land.",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const headerStore = await headers();
  const cookieStore = await cookies();
  const fromHeader = headerStore.get(REGION_HEADER);
  const fromCookie = cookieStore.get(REGION_COOKIE)?.value;
  const resolved = [fromHeader, fromCookie].find((value): value is NonNullable<typeof value> =>
    Boolean(value && isRegionId(value)),
  );
  const initialRegionId = resolved && isRegionId(resolved) ? resolved : defaultRegionId;
  const detected = Boolean(resolved && isRegionId(resolved));

  return (
    <html lang="en-GB" className={`${unbounded.variable} ${inter.variable} h-full`}>
      <body className="min-h-full bg-inkwell font-sans text-ink antialiased">
        <RegionProvider initialRegionId={initialRegionId} detected={detected}>
          <EnquiryPopupProvider>
            <a
              href="#content"
              className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-panel focus:px-3 focus:py-2"
            >
              Skip to content
            </a>
            <Header />
            <main id="content">{children}</main>
            <Footer />
            <TawkChat />
          </EnquiryPopupProvider>
        </RegionProvider>
      </body>
    </html>
  );
}
