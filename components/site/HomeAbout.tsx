import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { SiteButton } from "./SiteButton";

export function HomeAbout() {
  return (
    <section className="bg-inkwell py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-[1180px] items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-sky">About us</p>
          <SectionHeading text="One team. Four motions." className="mt-3" />
          <p className="mt-4 max-w-xl text-base leading-7 text-ink/75">
            Slanfor combines development, design, video, marketing, and outbound sales
            under one roof. Build the presence, shape the brand, take it to market, and
            turn the interest into customers, with one team instead of five suppliers.
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-ink/75">
            The order is simple. Build. Brand. Market. Sell. The site and the identity
            come first, then the campaigns and the conversations that follow.
          </p>
          <div className="mt-7">
            <SiteButton href="/about" variant="ghost">
              More about us
            </SiteButton>
          </div>
        </div>
        <div className="overflow-hidden rounded-xl border border-white/10">
          <Image
            src="/about-studio.jpg"
            alt="A dim studio desk with monitors glowing blue"
            width={1200}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
