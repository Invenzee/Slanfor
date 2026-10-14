import type { Metadata } from "next";
import { LegalPage } from "@/components/site/LegalPage";
import { privacyPolicy } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy policy",
  description:
    "How Slanfor collects, uses, and holds the details you send through the website or an enquiry.",
};

export default function PrivacyPage() {
  return <LegalPage {...privacyPolicy} />;
}
