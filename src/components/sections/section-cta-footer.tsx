"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLocaleContext } from "@/context/locale-context";
import { INQUIRY_PATH } from "@/lib/routes";
import { ctaPrimaryButton, ctaPrimaryButtonIcon } from "@/lib/styles";

export function SectionCtaFooter() {
  const { t } = useLocaleContext();
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { y: 14 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="mt-16 flex justify-center border-t border-border/60 pt-14"
    >
      <Link href={INQUIRY_PATH} className={ctaPrimaryButton}>
        {t.hero.ctaPrimary}
        <ArrowRight className={ctaPrimaryButtonIcon} aria-hidden />
      </Link>
    </motion.div>
  );
}
