"use client";

import { X } from "lucide-react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { usePathname } from "next/navigation";
import { ContactForm } from "./ContactForm";
import { SiteButton } from "./SiteButton";

const SEEN_KEY = "slanfor-enquiry-popup";

type EnquiryPopupContextValue = {
  open: () => void;
  close: () => void;
};

const EnquiryPopupContext = createContext<EnquiryPopupContextValue | null>(null);

export function useEnquiryPopup() {
  const context = useContext(EnquiryPopupContext);
  if (!context) {
    throw new Error("useEnquiryPopup must be used within EnquiryPopupProvider");
  }
  return context;
}

export function EnquiryPopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (pathname !== "/") {
      setIsOpen(false);
      return;
    }
    try {
      if (sessionStorage.getItem(SEEN_KEY) === "1") return;
    } catch {
      return;
    }

    const timer = window.setTimeout(() => {
      setIsOpen(true);
      try {
        sessionStorage.setItem(SEEN_KEY, "1");
      } catch {
        /* ignore quota / private mode */
      }
    }, 3500);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return (
    <EnquiryPopupContext.Provider value={{ open, close }}>
      {children}
      <EnquiryDialog open={isOpen} onClose={close} />
    </EnquiryPopupContext.Provider>
  );
}

export function QuoteButton({
  children = "Get a quote",
  variant = "blue",
  onClick,
}: {
  children?: ReactNode;
  variant?: "blue" | "ghost" | "line";
  onClick?: () => void;
}) {
  const { open } = useEnquiryPopup();
  return (
    <SiteButton
      variant={variant}
      onClick={() => {
        onClick?.();
        open();
      }}
    >
      {children}
    </SiteButton>
  );
}

function EnquiryDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
      previous?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-4 sm:items-center">
      <button
        type="button"
        className="absolute inset-0 bg-inkwell/80 backdrop-blur-sm"
        aria-label="Close enquiry form"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-md rounded-xl border border-white/10 bg-panel p-5 shadow-2xl md:p-6"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-sky">Enquiry</p>
            <h2 id={titleId} className="mt-2 font-display text-2xl tracking-tight">
              Get a quote
            </h2>
            <p className="mt-2 text-sm leading-6 text-ink/70">
              A few lines on what you need is enough. We will come back with questions, not a generic pitch.
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 text-ink/80 hover:text-ink"
          >
            <span className="sr-only">Close</span>
            <X size={18} />
          </button>
        </div>
        <div className="mt-5">
          <ContactForm idPrefix="popup" compact />
        </div>
      </div>
    </div>
  );
}
