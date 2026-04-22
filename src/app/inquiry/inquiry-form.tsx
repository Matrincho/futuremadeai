"use client";

import { useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

const industries = [
  "",
  "Technology",
  "Professional services",
  "Finance",
  "Healthcare",
  "E-commerce",
  "Manufacturing",
  "Media & marketing",
  "Education",
  "Other",
] as const;

const companySizes = ["", "1–10", "11–50", "51–200", "201–1000", "1000+"] as const;

const primaryGoals = [
  "",
  "Reduce manual work",
  "Improve decision quality / speed",
  "Customer-facing AI product",
  "Internal copilot / knowledge",
  "Data extraction & routing",
  "Not sure yet",
] as const;

const budgetRanges = [
  "",
  "Under $15k",
  "$15k–$50k",
  "$50k–$150k",
  "$150k–$500k",
  "$500k+",
  "Prefer to discuss",
] as const;

const timelines = [
  "",
  "ASAP / already blocked",
  "Within 4 weeks",
  "1–3 months",
  "3–6 months",
  "6+ months",
  "Exploring / no fixed date",
] as const;

const referralSources = [
  "",
  "Search",
  "LinkedIn",
  "Referral",
  "Conference / event",
  "Used your product / saw case study",
  "Other",
] as const;

const preferredContact = ["", "Email", "Phone", "Either"] as const;

const serviceOptions = [
  "Workflow & ops automation",
  "LLM / agent systems",
  "Custom internal tools",
  "Integrations (CRM, ERP, data)",
  "Retrieval / knowledge bases",
  "Analytics & reporting",
] as const;

const sectionEase = [0.22, 1, 0.36, 1] as const;

function Section({
  title,
  description,
  children,
  index,
}: {
  title: string;
  description?: string;
  children: ReactNode;
  index: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.section
      initial={reduceMotion ? false : { y: 14 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: reduceMotion ? 0 : 0.45, delay: index * 0.05, ease: sectionEase }}
      className="rounded-xl border border-border bg-surface/60 p-5 shadow-sm sm:p-6"
    >
      <h2 className="text-lg font-semibold tracking-tight text-foreground">{title}</h2>
      {description ? (
        <p className="mt-1 text-sm text-muted">{description}</p>
      ) : null}
      <div className="mt-5 space-y-4">{children}</div>
    </motion.section>
  );
}

function Label({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-foreground">
      {children}
      {required ? <span className="text-accent"> *</span> : null}
    </label>
  );
}

const inputClass =
  "mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-[border-color,box-shadow] placeholder:text-subtle focus:border-accent/70 focus:ring-2 focus:ring-accent/25";

export function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const reduceMotion = useReducedMotion();

  const [services, setServices] = useState<Record<string, boolean>>(
    () => Object.fromEntries(serviceOptions.map((s) => [s, false])),
  );

  function toggleService(key: string) {
    setServices((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={reduceMotion ? false : { y: 8 }}
        animate={{ y: 0 }}
        className="mt-10 rounded-xl border border-accent/30 bg-surface/80 p-8 text-center"
      >
        <p className="text-lg font-semibold text-foreground">Thanks — you&apos;re all set.</p>
        <p className="mt-2 text-sm text-muted">
          This form does not send data yet. When you connect a backend, you can
          replace this message with a confirmation email flow.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 space-y-8">
      <Section
        index={0}
        title="Contact"
        description="Who we should talk to and how to reach you."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Label htmlFor="fullName" required>
              Full name
            </Label>
            <input id="fullName" name="fullName" className={inputClass} required autoComplete="name" />
          </div>
          <div>
            <Label htmlFor="email" required>
              Work email
            </Label>
            <input
              id="email"
              name="email"
              type="email"
              className={inputClass}
              required
              autoComplete="email"
            />
          </div>
          <div>
            <Label htmlFor="phone">Phone</Label>
            <input id="phone" name="phone" type="tel" className={inputClass} autoComplete="tel" />
          </div>
          <div>
            <Label htmlFor="preferredContact">Preferred contact</Label>
            <select id="preferredContact" name="preferredContact" className={inputClass}>
              {preferredContact.map((o) => (
                <option key={o || "empty"} value={o}>
                  {o || "Select…"}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Section>

      <Section index={1} title="Company" description="Context about the organization.">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Label htmlFor="company" required>
              Company name
            </Label>
            <input id="company" name="company" className={inputClass} required autoComplete="organization" />
          </div>
          <div>
            <Label htmlFor="jobTitle">Role / title</Label>
            <input id="jobTitle" name="jobTitle" className={inputClass} autoComplete="organization-title" />
          </div>
          <div>
            <Label htmlFor="website">Company website</Label>
            <input id="website" name="website" type="url" className={inputClass} placeholder="https://" />
          </div>
          <div>
            <Label htmlFor="companySize">Company size</Label>
            <select id="companySize" name="companySize" className={inputClass}>
              {companySizes.map((o) => (
                <option key={o || "empty"} value={o}>
                  {o || "Select…"}
                </option>
              ))}
            </select>
          </div>
          <div>
            <Label htmlFor="industry">Industry</Label>
            <select id="industry" name="industry" className={inputClass}>
              {industries.map((o) => (
                <option key={o || "empty"} value={o}>
                  {o || "Select…"}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Section>

      <Section
        index={2}
        title="Project"
        description="What you want, where you are today, and what good looks like."
      >
        <div>
          <Label htmlFor="primaryGoal">Primary goal</Label>
          <select id="primaryGoal" name="primaryGoal" className={inputClass}>
            {primaryGoals.map((o) => (
              <option key={o || "empty"} value={o}>
                {o || "Select…"}
              </option>
            ))}
          </select>
        </div>

        <fieldset>
          <legend className="text-sm font-medium text-foreground">Services of interest</legend>
          <p className="mt-1 text-sm text-muted">Select any that apply.</p>
          <ul className="mt-3 space-y-2">
            {serviceOptions.map((label) => {
              const id = `svc-${label.replace(/\W+/g, "-")}`;
              return (
                <li key={label} className="flex items-start gap-3">
                  <input
                    id={id}
                    type="checkbox"
                    checked={services[label] ?? false}
                    onChange={() => toggleService(label)}
                    className="mt-1 size-4 rounded border-border text-accent focus:ring-accent/30"
                  />
                  <label htmlFor={id} className="text-sm text-foreground">
                    {label}
                  </label>
                </li>
              );
            })}
          </ul>
        </fieldset>

        <div>
          <Label htmlFor="projectSummary" required>
            Project summary
          </Label>
          <textarea
            id="projectSummary"
            name="projectSummary"
            rows={4}
            className={inputClass}
            required
            placeholder="What are you trying to ship in the next 90 days?"
          />
        </div>

        <div>
          <Label htmlFor="currentWorkflow">Current workflow / pain</Label>
          <textarea
            id="currentWorkflow"
            name="currentWorkflow"
            rows={3}
            className={inputClass}
            placeholder="How is the work done today? Where does it break?"
          />
        </div>

        <div>
          <Label htmlFor="toolsAndStack">Tools, stack, and constraints</Label>
          <textarea
            id="toolsAndStack"
            name="toolsAndStack"
            rows={3}
            className={inputClass}
            placeholder="CRMs, data warehouses, security requirements, on-prem vs cloud, etc."
          />
        </div>

        <div>
          <Label htmlFor="successMetrics">Success metrics</Label>
          <textarea
            id="successMetrics"
            name="successMetrics"
            rows={3}
            className={inputClass}
            placeholder="What numbers or outcomes would make this a win?"
          />
        </div>
      </Section>

      <Section index={3} title="Commercial & logistics">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="budgetRange">Budget range</Label>
            <select id="budgetRange" name="budgetRange" className={inputClass}>
              {budgetRanges.map((o) => (
                <option key={o || "empty"} value={o}>
                  {o || "Select…"}
                </option>
              ))}
            </select>
          </div>
          <div>
            <Label htmlFor="timeline">Timeline</Label>
            <select id="timeline" name="timeline" className={inputClass}>
              {timelines.map((o) => (
                <option key={o || "empty"} value={o}>
                  {o || "Select…"}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="referralSource">How did you hear about us?</Label>
            <select id="referralSource" name="referralSource" className={inputClass}>
              {referralSources.map((o) => (
                <option key={o || "empty"} value={o}>
                  {o || "Select…"}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="additionalNotes">Anything else we should know?</Label>
            <textarea id="additionalNotes" name="additionalNotes" rows={3} className={inputClass} />
          </div>
        </div>
      </Section>

      <Section index={4} title="Consent">
        <div className="flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            required
            className="mt-1 size-4 rounded border-border text-accent focus:ring-accent/30"
          />
          <label htmlFor="consent" className="text-sm leading-relaxed text-muted">
            I agree to be contacted about this inquiry.
            <span className="text-accent"> *</span>
          </label>
        </div>
      </Section>

      <motion.div
        initial={reduceMotion ? false : { y: 10 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: reduceMotion ? 0 : 0.4, ease: sectionEase }}
      >
        <button
          type="submit"
          className="inline-flex h-12 w-full items-center justify-center rounded-lg bg-accent text-sm font-semibold text-white transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[#2563eb] hover:shadow-[0_0_36px_-8px_var(--color-accent-glow)] active:translate-y-0 sm:w-auto sm:min-w-[200px]"
        >
          Submit inquiry
        </button>
      </motion.div>
    </form>
  );
}
