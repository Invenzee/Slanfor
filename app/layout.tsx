import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import { EnquiryPopupProvider } from "@/components/site/EnquiryPopup";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${unbounded.variable} ${inter.variable} h-full`}>
      <body className="min-h-full bg-inkwell font-sans text-ink antialiased">
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
        </EnquiryPopupProvider>
      </body>
    </html>
  );
}
