"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLocaleContext } from "@/context/locale-context";
import { cardInteractive, sectionShell } from "@/lib/styles";
import { SectionCtaFooter } from "@/components/sections/section-cta-footer";

export function ServicesSection() {
  const { t, locale } = useLocaleContext();
  const reduceMotion = useReducedMotion();
  const { services } = t;

  const labels =
    locale === "bg"
      ? { problem: "Проблем", solution: "Решение", method: "Метод" }
      : { problem: "Problem", solution: "Solution", method: "Method" };

  return (
    <section id="services" className="border-t border-border/80 py-20 sm:py-28">
      <div className={sectionShell}>
        <motion.div
          initial={reduceMotion ? false : { y: 16 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {services.title}
          </h2>
          <p className="mt-4 text-lg text-muted">{services.subtitle}</p>
        </motion.div>

        <ul className="mt-14 flex flex-col gap-6">
          {services.items.map((item, i) => (
            <motion.li
              key={item.name}
              initial={reduceMotion ? false : { y: 18 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.45, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <article className={`${cardInteractive} p-0 overflow-hidden md:flex`}>
                <div className="flex flex-col items-center justify-center border-b border-border p-6 text-center md:w-[28%] md:border-b-0 md:border-r md:p-8">
                  <ArrowRight className="size-4 shrink-0 text-accent" aria-hidden />
                  <h3 className="mt-2 text-lg font-semibold tracking-tight text-foreground">
                    {item.name}
                  </h3>
                </div>
                <div className="grid flex-1 gap-6 p-6 sm:grid-cols-3 md:p-8">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-subtle">
                      {labels.problem}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-subtle">
                      {labels.solution}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-subtle">
                      {labels.method}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.method}</p>
                  </div>
                </div>
              </article>
            </motion.li>
          ))}
        </ul>

        <SectionCtaFooter />
      </div>
    </section>
  );
}
