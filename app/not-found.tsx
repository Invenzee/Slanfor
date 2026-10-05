import GradientText from "@/components/react-bits/GradientText";
import { SiteButton } from "@/components/site/SiteButton";

export default function NotFound() {
  return (
    <section className="band-navy">
      <div className="mx-auto flex min-h-[70svh] w-full max-w-[1180px] flex-col justify-center px-5 pt-28 pb-20 md:px-8">
        <p className="text-xs uppercase tracking-[0.22em] text-sky">404</p>
        <h1 className="mt-4 max-w-xl">
          <GradientText
            as="span"
            className="font-display text-[clamp(2.5rem,4.6vw,4rem)] leading-[1.05] tracking-[-0.04em]"
            colors={["#3bb2f6", "#f8fafc", "#2563eb"]}
            animationSpeed={8}
          >
            That page is not on the site.
          </GradientText>
        </h1>
        <div className="mt-8">
          <SiteButton href="/">Back home</SiteButton>
        </div>
      </div>
    </section>
  );
}
