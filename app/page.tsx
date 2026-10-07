import { Hero } from "@/components/site/Hero";
import { HomeAbout } from "@/components/site/HomeAbout";
import { HomeContact } from "@/components/site/HomeContact";
import { HomeCta } from "@/components/site/HomeCta";
import { OfferStrip } from "@/components/site/OfferStrip";
import { Pillars } from "@/components/site/Pillars";

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Slanfor"
        title="Websites, brands, and growth for your business"
        lede="Slanfor designs, builds, and markets the digital side of a company, then staffs the outreach that turns interest into meetings. You brief once. The site, the brand, the films, the campaigns, and the follow-up stay in the same hands."
        formId="hero"
      />
      <HomeAbout />
      <Pillars />
      <OfferStrip />
      <HomeContact />
      <HomeCta />
    </>
  );
}
