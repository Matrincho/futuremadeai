"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Clock, AlertTriangle, TrendingUp } from "lucide-react";
import { useLocaleContext } from "@/context/locale-context";
import { cardInteractive, sectionShell } from "@/lib/styles";

const icons = [Clock, AlertTriangle, TrendingUp];

export function PainSection() {
  const { t } = useLocaleContext();
  const reduceMotion = useReducedMotion();
  const { pain } = t;

  return (
    <section id="why" className="border-t border-border/80 py-20 sm:py-28">
      <div className={sectionShell}>
        <motion.div
          initial={reduceMotion ? false : { y: 16 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {pain.title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted sm:text-xl">{pain.intro}</p>
        </motion.div>

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {pain.cards.map((card, i) => {
            const Icon = icons[i] ?? Clock;
            return (
              <motion.li
                key={card.title}
                initial={reduceMotion ? false : { y: 20 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-8%" }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <article className={`${cardInteractive} flex h-full flex-col gap-4`}>
                  <div className="flex size-10 items-center justify-center rounded-lg border border-border bg-background text-accent">
                    <Icon className="size-5" aria-hidden />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{card.title}</h3>
                  <div className="space-y-3 text-sm leading-relaxed">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-subtle">
                        {pain.problemLabel}
                      </p>
                      <p className="mt-1.5 text-muted">{card.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-subtle">
                        {pain.resultLabel}
                      </p>
                      <p className="mt-1.5 text-muted">{card.result}</p>
                    </div>
                  </div>
                </article>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
