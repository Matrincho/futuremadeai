"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLocaleContext } from "@/context/locale-context";
import { INQUIRY_PATH } from "@/lib/routes";
import { sectionShell, ctaPrimaryButton, ctaPrimaryButtonIcon } from "@/lib/styles";

/**
 * Dedicated full-width CTA band (anchor `#cta`).
 */
export function CtaSection() {
  const { t } = useLocaleContext();
  const reduceMotion = useReducedMotion();
  const { contact } = t;

  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="relative border-y border-border/80 bg-[radial-gradient(ellipse_90%_80%_at_50%_0%,rgba(59,130,246,0.12),transparent_55%)] py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_80%_100%,rgba(29,78,216,0.08),transparent_50%)]"
        aria-hidden
      />

      <div className={`${sectionShell} relative text-center`}>
        <motion.div
          initial={reduceMotion ? false : { y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl"
        >
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-subtle sm:text-sm">
            {contact.eyebrow}
          </p>
          <h2
            id="cta-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            {contact.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted sm:text-xl">{contact.body}</p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <Link href={INQUIRY_PATH} className={ctaPrimaryButton}>
              {contact.cta}
              <ArrowRight className={ctaPrimaryButtonIcon} aria-hidden />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
