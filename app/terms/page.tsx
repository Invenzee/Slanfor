import type { Metadata } from "next";
import { LegalPage } from "@/components/site/LegalPage";
import { termsAndConditions } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms and conditions",
  description:
    "How Slanfor takes on work, quotes fees, handles approvals and ownership, and limits liability.",
};

export default function TermsPage() {
  return <LegalPage {...termsAndConditions} />;
}
