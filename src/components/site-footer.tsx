"use client";

import Link from "next/link";
import { AtSign, Share2, Mail } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useLocaleContext } from "@/context/locale-context";
import { INQUIRY_PATH } from "@/lib/routes";

export function SiteFooter() {
  const { t } = useLocaleContext();
  const reduceMotion = useReducedMotion();
  const { footer } = t;

  return (
    <motion.footer
      initial={reduceMotion ? false : { y: 12 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-5%" }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="mt-auto border-t border-border/80 bg-background"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="text-sm font-semibold tracking-tight text-foreground">{footer.brand}</p>

        <div className="flex flex-col gap-4 sm:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-subtle">
              {footer.social}
            </p>
            <ul className="mt-2 flex items-center gap-3">
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-[color,border-color,transform,box-shadow] hover:-translate-y-0.5 hover:border-accent/40 hover:text-foreground hover:shadow-[0_0_20px_-6px_var(--color-accent-glow)]"
                  aria-label="LinkedIn (replace URL)"
                >
                  <AtSign className="size-5" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-10 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-[color,border-color,transform,box-shadow] hover:-translate-y-0.5 hover:border-accent/40 hover:text-foreground hover:shadow-[0_0_20px_-6px_var(--color-accent-glow)]"
                  aria-label="GitHub (replace URL)"
                >
                  <Share2 className="size-5" />
                </a>
              </li>
              <li>
                <Link
                  href={INQUIRY_PATH}
                  className="flex size-10 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-[color,border-color,transform,box-shadow] hover:-translate-y-0.5 hover:border-accent/40 hover:text-foreground hover:shadow-[0_0_20px_-6px_var(--color-accent-glow)]"
                  aria-label="Inquiry"
                >
                  <Mail className="size-5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border/60 py-3 text-center text-xs text-subtle">
        © {new Date().getFullYear()} {footer.brand}
      </div>
    </motion.footer>
  );
}
