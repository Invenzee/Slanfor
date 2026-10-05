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
        eyebrow="Digital growth and technology"
        title="Build your brand."
        accent="Grow your business."
        lede="Slanfor helps businesses build their digital presence, create strong brands, generate qualified leads, and turn opportunities into customers."
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
