"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState, useSyncExternalStore } from "react";
import { navLinks, pillars } from "@/lib/services";
import { GlarePanel } from "./GlarePanel";
import { QuoteButton } from "./EnquiryPopup";
import { LogoMark } from "./LogoMark";

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const open = menuPath === pathname;
  const scrolled = useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener("scroll", onStoreChange, { passive: true });
      return () => window.removeEventListener("scroll", onStoreChange);
    },
    () => window.scrollY > 12,
    () => false,
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-ink transition-colors duration-300 ${
        scrolled || open || servicesOpen
          ? "border-b border-white/10 bg-inkwell/95 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 w-full max-w-[1180px] items-center justify-between px-5 md:h-[4.5rem] md:px-8">
        <Link href="/" className="flex items-center" aria-label="Slanfor, home">
          <LogoMark />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((link) =>
            link.href === "/services" ? (
              <div
                key={link.href}
                className="flex h-16 items-center self-stretch md:h-[4.5rem]"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  aria-current={isCurrent(pathname, link.href) ? "page" : undefined}
                  aria-expanded={servicesOpen}
                  className={`inline-flex items-center gap-1 text-sm transition-opacity hover:opacity-100 ${
                    isCurrent(pathname, link.href) || servicesOpen ? "opacity-100" : "opacity-70"
                  }`}
                >
                  Services
                  <ChevronDown size={14} className={servicesOpen ? "rotate-180" : ""} />
                </Link>
                {servicesOpen ? (
                  <div className="absolute inset-x-0 top-full z-50 border-t border-white/10 bg-[#071422] px-5 py-6 shadow-2xl before:absolute before:inset-x-0 before:-top-8 before:h-8 before:content-['']">
                    <div className="mx-auto grid w-full max-w-[1180px] gap-3 md:grid-cols-2 xl:grid-cols-3">
                      {pillars.map((pillar) => (
                        <GlarePanel key={pillar.slug}>
                          <Link
                            href={`/services/${pillar.slug}`}
                            className="block p-5"
                            onClick={() => setServicesOpen(false)}
                          >
                            <span className="text-xs tracking-[0.16em] text-sky">{pillar.index}</span>
                            <span className="mt-2 block font-display text-xl tracking-tight">{pillar.short}</span>
                            <span className="mt-2 block text-sm leading-6 text-ink/70">{pillar.summary}</span>
                          </Link>
                        </GlarePanel>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isCurrent(pathname, link.href) ? "page" : undefined}
                className={`text-sm transition-opacity hover:opacity-100 ${
                  isCurrent(pathname, link.href) ? "opacity-100" : "opacity-70"
                }`}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <QuoteButton />
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-xl lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setMenuPath(open ? null : pathname)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-white/10 bg-inkwell lg:hidden">
          <nav className="mx-auto flex w-full max-w-[1180px] flex-col px-5 py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link href={link.href} className="block border-b border-white/10 py-3 font-display text-2xl tracking-tight">
                  {link.label}
                </Link>
                {link.href === "/services" ? (
                  <div className="grid gap-1 py-2 pl-2">
                    {pillars.map((pillar) => (
                      <Link
                        key={pillar.slug}
                        href={`/services/${pillar.slug}`}
                        className="py-1 text-sm text-ink/75"
                      >
                        {pillar.short}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <div className="mt-4">
              <QuoteButton onClick={() => setMenuPath(null)} />
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
