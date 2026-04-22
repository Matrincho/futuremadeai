"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useLocaleContext } from "@/context/locale-context";
import { cardInteractive, sectionShell } from "@/lib/styles";

export function ProcessSection() {
  const { t } = useLocaleContext();
  const reduceMotion = useReducedMotion();
  const { process } = t;

  return (
    <section id="process" className="border-t border-border/80 py-20 sm:py-28">
      <div className={sectionShell}>
        <motion.div
          initial={reduceMotion ? false : { y: 16 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {process.title}
          </h2>
          <p className="mt-4 text-lg text-muted">{process.subtitle}</p>
        </motion.div>

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, i) => (
            <motion.li
              key={step.title}
              initial={reduceMotion ? false : { y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <article className={`${cardInteractive} flex h-full flex-col`}>
                <span className="text-xs font-medium tabular-nums text-accent">0{i + 1}</span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{step.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted">
                  {step.bullets.map((b, j) => (
                    <li key={`${step.title}-${j}`} className="flex gap-2 leading-relaxed">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-accent/80" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
