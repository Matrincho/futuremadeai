export type Locale = "en" | "bg";

export type InquirySelectOption = { value: string; label: string };

/** Minimal inquiry form copy (aligned fields across locales). */
export type InquiryCopy = {
  back: string;
  title: string;
  lead: string;
  submit: string;
  successTitle: string;
  successBody: string;
  labels: {
    firstName: string;
    lastName: string;
    workEmail: string;
    company: string;
    companyWebsite: string;
    role: string;
    companySize: string;
    projectDescription: string;
  };
  placeholders: {
    firstName: string;
    lastName: string;
    workEmail: string;
    company: string;
    companyWebsite: string;
    roleSelect: string;
    companySizeSelect: string;
    projectDescription: string;
  };
  roles: InquirySelectOption[];
  companySizes: InquirySelectOption[];
};

export type MarketingCopy = {
  nav: { services: string; process: string; work: string; contact: string; cta: string };
  hero: {
    kicker: string;
    title: string;
    body: string;
    ctaPrimary: string;
  };
  pain: {
    title: string;
    intro: string;
    problemLabel: string;
    resultLabel: string;
    cards: { title: string; problem: string; result: string }[];
  };
  services: {
    title: string;
    subtitle: string;
    items: { name: string; problem: string; solution: string; method: string }[];
  };
  process: {
    title: string;
    subtitle: string;
    steps: { title: string; bullets: string[] }[];
  };
  caseStudy: {
    eyebrow: string;
    title: string;
    lead: string;
    challengeTitle: string;
    challenge: string;
    approachTitle: string;
    approach: string;
    outcomeTitle: string;
    outcome: string;
    metrics: { label: string; value: string }[];
    quote: string;
    attribution: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
  };
  footer: {
    brand: string;
    social: string;
    langLabel: string;
  };
  inquiry: InquiryCopy;
};
