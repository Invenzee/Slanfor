import Link from "next/link";
import { contactDetails, navLinks, pillars } from "@/lib/services";
import { LogoMark } from "./LogoMark";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy">
      <div className="mx-auto grid w-full max-w-[1180px] gap-12 px-5 py-16 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="flex items-center">
            <LogoMark size="lg" />
          </div>
          <p className="mt-5 max-w-xs text-sm leading-6 text-ink/70">
            A digital studio that builds websites and software, designs brands,
            produces video and copy, runs campaigns, and works the sales list,
            so the next customer has somewhere to land.
          </p>
        </div>

        <div className="lg:col-span-2">
          <p className="text-xs uppercase tracking-[0.18em] text-ink/45">Navigate</p>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-sky">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-xs uppercase tracking-[0.18em] text-ink/45">Services</p>
          <ul className="mt-4 space-y-2 text-sm">
            {pillars.map((pillar) => (
              <li key={pillar.slug}>
                <Link href={`/services/${pillar.slug}`} className="hover:text-sky">
                  {pillar.short}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <p className="text-xs uppercase tracking-[0.18em] text-ink/45">Contact</p>
          <ul className="mt-4 space-y-2 text-sm text-ink/70">
            <li>{contactDetails.email}</li>
            <li>{contactDetails.phone}</li>
            <li>{contactDetails.socials.join(" · ")}</li>
          </ul>
          <p className="mt-3 text-xs uppercase tracking-[0.16em] text-ink/40">Placeholders</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-2 px-5 py-5 text-xs text-ink/50 md:flex-row md:justify-between md:px-8">
          <p>Slanfor. Digital studio for websites, brands, campaigns, and sales.</p>
          <p>Development, design, marketing, and sales.</p>
        </div>
      </div>
    </footer>
  );
}
