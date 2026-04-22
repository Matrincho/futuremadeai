"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLocaleContext } from "@/context/locale-context";
import { INQUIRY_PATH } from "@/lib/routes";
import { ctaPrimaryButton, ctaPrimaryButtonIcon } from "@/lib/styles";

const easeOut = [0.22, 1, 0.36, 1] as const;

function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {/* Soft top spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-15%,rgba(59,130,246,0.14),transparent_55%)]" />
      {/* Diffused blue bloom — center-left */}
      <div className="absolute left-[10%] top-[20%] h-[min(55vw,420px)] w-[min(55vw,420px)] -translate-x-1/3 rounded-full bg-accent/[0.09] blur-[100px]" />
      {/* Cool secondary pool — bottom-right */}
      <div className="absolute bottom-[-10%] right-[-5%] h-[min(70vw,520px)] w-[min(70vw,520px)] rounded-full bg-[#1d4ed8]/[0.12] blur-[110px]" />
      {/* Subtle lift near bottom center */}
      <div className="absolute bottom-[5%] left-1/2 h-[min(45vw,320px)] w-[min(90vw,640px)] -translate-x-1/2 rounded-full bg-accent/[0.05] blur-[90px]" />
      {/* Edge vignette for depth (no grid lines) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_75%_at_50%_55%,transparent_35%,rgba(10,10,10,0.55)_100%)]" />
    </div>
  );
}

export function Hero() {
  const { t } = useLocaleContext();
  const { hero } = t;
  const reduceMotion = useReducedMotion();

  const child = (delay: number) => ({
    initial: reduceMotion ? false : { y: 18 },
    animate: { y: 0 },
    transition: { duration: reduceMotion ? 0 : 0.55, delay, ease: easeOut },
  });

  return (
    <section className="relative flex min-h-[calc(100dvh-4.5rem)] flex-1 flex-col overflow-hidden sm:min-h-[calc(100dvh-4.75rem)] md:min-h-[calc(100dvh-5.25rem)] lg:min-h-[calc(100dvh-6.5rem)]">
      <HeroBackdrop />

      <div className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-4 py-20 text-center sm:px-6 sm:py-28 lg:max-w-6xl lg:px-8 lg:py-32">
        <motion.p
          {...child(0)}
          className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-subtle sm:text-base"
        >
          {hero.kicker}
        </motion.p>

        <motion.h1
          {...child(reduceMotion ? 0 : 0.06)}
          className="max-w-5xl text-balance text-5xl font-bold leading-[1.04] tracking-[-0.02em] text-foreground sm:text-6xl sm:leading-[1.03] lg:text-7xl lg:leading-[1.02]"
        >
          {hero.title}
        </motion.h1>

        <motion.p
          {...child(reduceMotion ? 0 : 0.12)}
          className="mt-8 max-w-3xl text-pretty text-lg leading-relaxed text-muted sm:text-xl sm:leading-relaxed lg:text-2xl lg:leading-snug"
        >
          {hero.body}
        </motion.p>

        <motion.div
          {...child(reduceMotion ? 0 : 0.18)}
          className="mt-12 flex justify-center"
        >
          <div className="relative inline-flex">
            {!reduceMotion && (
              <motion.div
                className="pointer-events-none absolute -inset-8 rounded-full bg-gradient-to-r from-accent/50 via-blue-400/30 to-accent/20 blur-2xl"
                animate={{
                  opacity: [0.45, 0.75, 0.45],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                aria-hidden
              />
            )}
            <Link href={INQUIRY_PATH} className={ctaPrimaryButton}>
              {hero.ctaPrimary}
              <ArrowRight className={ctaPrimaryButtonIcon} aria-hidden />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
