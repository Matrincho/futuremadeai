"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLocaleContext } from "@/context/locale-context";
import { cardInteractive, sectionShell } from "@/lib/styles";

export function CaseStudySection() {
  const { t } = useLocaleContext();
  const reduceMotion = useReducedMotion();
  const cs = t.caseStudy;

  return (
    <section id="work" className="border-t border-border/80 py-20 sm:py-28">
      <div className={sectionShell}>
        <motion.div
          initial={reduceMotion ? false : { y: 16 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-subtle">{cs.eyebrow}</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {cs.title}
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">{cs.lead}</p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className={`${cardInteractive} mt-12 p-6 sm:p-10`}
        >
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="space-y-8 lg:col-span-7">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-subtle">
                  {cs.challengeTitle}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {cs.challenge}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-subtle">
                  {cs.approachTitle}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {cs.approach}
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-subtle">
                  {cs.outcomeTitle}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {cs.outcome}
                </p>
              </div>
            </div>

            <aside className="flex flex-col justify-between gap-8 lg:col-span-5">
              <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {cs.metrics.map((m) => (
                  <li
                    key={m.label}
                    className="rounded-lg border border-border bg-background/80 px-4 py-4"
                  >
                    <p className="text-2xl font-semibold tracking-tight text-foreground">
                      {m.value}
                    </p>
                    <p className="mt-1 text-xs text-muted">{m.label}</p>
                  </li>
                ))}
              </ul>
              <blockquote className="rounded-lg border border-border/80 bg-background/50 p-5">
                <p className="text-sm italic leading-relaxed text-foreground">{cs.quote}</p>
                <footer className="mt-3 text-xs text-subtle">{cs.attribution}</footer>
              </blockquote>
            </aside>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
