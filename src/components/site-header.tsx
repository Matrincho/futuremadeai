"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocaleContext } from "@/context/locale-context";
import { INQUIRY_PATH } from "@/lib/routes";
import { Logo } from "@/components/logo";
import { LanguageToggle } from "@/components/language-toggle";

export function SiteHeader() {
  const { t } = useLocaleContext();
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: t.nav.services, href: "/#services" },
    { label: t.nav.process, href: "/#process" },
    { label: t.nav.work, href: "/#work" },
    { label: t.nav.contact, href: "/#cta" },
  ] as const;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <motion.header
      initial={reduceMotion ? false : { y: -10 }}
      animate={{ y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md"
    >
      {/* Same bar heights as before; py-1 keeps a larger logo inside without growing the row */}
      <div className="relative mx-auto flex min-h-[4.5rem] max-w-6xl items-center justify-between gap-3 px-4 py-1 sm:min-h-[4.75rem] sm:gap-4 sm:px-6 md:min-h-[5.25rem] md:gap-5 lg:min-h-[6.5rem] lg:px-8">
        <div className="flex shrink-0 items-center">
          <Logo />
        </div>

        <nav
          className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-4 md:flex lg:gap-5"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap text-xs text-muted transition-colors hover:text-foreground sm:text-sm"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
          <LanguageToggle className="hidden sm:inline-flex" />

          <Link
            href={INQUIRY_PATH}
            className="hidden min-h-11 max-w-[11rem] shrink-0 items-center justify-center rounded-lg bg-accent px-4 text-center text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[#2563eb] hover:shadow-[0_0_40px_-8px_var(--color-accent-glow)] active:translate-y-0 md:inline-flex"
          >
            {t.nav.cta}
          </Link>

          <LanguageToggle className="inline-flex sm:hidden" compact />

          <button
            type="button"
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-md border border-border bg-surface text-foreground md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0.96 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0.96 }}
            transition={{
              duration: reduceMotion ? 0.01 : 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="border-t border-border/80 bg-background/95 md:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-3" aria-label="Mobile">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={INQUIRY_PATH}
                onClick={() => setOpen(false)}
                className="mt-1 inline-flex min-h-11 items-center justify-center rounded-lg bg-accent px-4 text-center text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] transition-[transform,box-shadow,background-color] hover:bg-[#2563eb] hover:shadow-[0_0_40px_-8px_var(--color-accent-glow)] active:translate-y-0"
              >
                {t.nav.cta}
              </Link>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
