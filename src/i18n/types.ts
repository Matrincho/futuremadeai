export type Locale = "en" | "bg";

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
    subtitle: string;
    cards: { title: string; body: string }[];
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
    secondary: string;
  };
  footer: {
    tagline: string;
    social: string;
    langLabel: string;
  };
};
