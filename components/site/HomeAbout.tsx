import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { SiteButton } from "./SiteButton";

export function HomeAbout() {
  return (
    <section className="bg-inkwell py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-[1180px] items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-sky">About us</p>
          <SectionHeading text="Who we are" className="mt-3" />
          <p className="mt-4 max-w-xl text-base leading-7 text-ink/75">
            Most companies do not stall online because they lack ideas. They stall
            because the website was built by one firm, the brand by another, the ads
            by a freelancer, and the inbox by nobody. Slanfor exists so those jobs
            sit in one studio.
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-ink/75">
            We design and develop websites and software, shape the identity they
            live in, produce the video and copy that explain the offer, run search
            and paid campaigns, and staff outbound sales when traffic alone is not
            enough. You do not have to project-manage five suppliers.
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
