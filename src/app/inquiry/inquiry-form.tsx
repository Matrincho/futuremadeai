"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLocaleContext } from "@/context/locale-context";
import { inquiryEn } from "@/i18n/inquiry-en";
import { inquiryBg } from "@/i18n/inquiry-bg";

function FieldLabel({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="block text-xs font-medium uppercase tracking-wider text-subtle">
      {children}
      {required ? <span className="text-accent"> *</span> : null}
    </label>
  );
}

const inputClass =
  "mt-2 w-full rounded-lg border border-border bg-background/90 px-3 py-2.5 text-sm text-foreground outline-none transition-[border-color,box-shadow] placeholder:text-subtle/80 focus:border-accent/60 focus:ring-2 focus:ring-accent/20";

export function InquiryForm() {
  const { locale } = useLocaleContext();
  const inq = locale === "bg" ? inquiryBg : inquiryEn;
  const [submitted, setSubmitted] = useState(false);
  const reduceMotion = useReducedMotion();

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={reduceMotion ? false : { y: 8, opacity: 0.96 }}
        animate={{ y: 0, opacity: 1 }}
        className="mt-8 rounded-2xl border border-accent/25 bg-surface/50 p-8 text-center shadow-sm"
      >
        <p className="text-lg font-semibold text-foreground">{inq.successTitle}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">{inq.successBody}</p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={reduceMotion ? false : { y: 12, opacity: 0.97 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      onSubmit={onSubmit}
      className="mt-8 rounded-2xl border border-border/80 bg-surface/50 p-6 shadow-sm backdrop-blur-sm sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="firstName" required>
            {inq.labels.firstName}
          </FieldLabel>
          <input
            id="firstName"
            name="firstName"
            className={inputClass}
            required
            autoComplete="given-name"
            placeholder={inq.placeholders.firstName}
          />
        </div>
        <div>
          <FieldLabel htmlFor="lastName" required>
            {inq.labels.lastName}
          </FieldLabel>
          <input
            id="lastName"
            name="lastName"
            className={inputClass}
            required
            autoComplete="family-name"
            placeholder={inq.placeholders.lastName}
          />
        </div>
        <div>
          <FieldLabel htmlFor="email" required>
            {inq.labels.workEmail}
          </FieldLabel>
          <input
            id="email"
            name="email"
            type="email"
            className={inputClass}
            required
            autoComplete="email"
            placeholder={inq.placeholders.workEmail}
          />
        </div>
        <div>
          <FieldLabel htmlFor="company" required>
            {inq.labels.company}
          </FieldLabel>
          <input
            id="company"
            name="company"
            className={inputClass}
            required
            autoComplete="organization"
            placeholder={inq.placeholders.company}
          />
        </div>
      </div>

      <div className="mt-5">
        <FieldLabel htmlFor="website">{inq.labels.companyWebsite}</FieldLabel>
        <input
          id="website"
          name="website"
          type="url"
          className={inputClass}
          autoComplete="url"
          placeholder={inq.placeholders.companyWebsite}
        />
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <FieldLabel htmlFor="role">{inq.labels.role}</FieldLabel>
          <select id="role" name="role" className={inputClass} defaultValue="">
            <option value="">{inq.placeholders.roleSelect}</option>
            {inq.roles.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <FieldLabel htmlFor="companySize">{inq.labels.companySize}</FieldLabel>
          <select id="companySize" name="companySize" className={inputClass} defaultValue="">
            <option value="">{inq.placeholders.companySizeSelect}</option>
            {inq.companySizes.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <FieldLabel htmlFor="projectDescription" required>
          {inq.labels.projectDescription}
        </FieldLabel>
        <textarea
          id="projectDescription"
          name="projectDescription"
          rows={5}
          className={`${inputClass} min-h-[8.5rem] resize-y`}
          required
          placeholder={inq.placeholders.projectDescription}
        />
      </div>

      <div className="mt-8">
        <button
          type="submit"
          className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[#2563eb] hover:shadow-[0_0_40px_-8px_var(--color-accent-glow)] active:translate-y-0"
        >
          {inq.submit}
          <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </button>
      </div>
    </motion.form>
  );
}
