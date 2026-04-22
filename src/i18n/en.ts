import type { MarketingCopy } from "./types";
import { inquiryEn } from "./inquiry-en";

export const en: MarketingCopy = {
  nav: {
    services: "Services",
    process: "Method",
    work: "Experience",
    cta: "Contact us",
    contact: "Contact",
  },
  hero: {
    kicker: "AI agency",
    title: "Your business, powered by AI.",
    body: "We design and implement AI systems and workflows that fit naturally into your business. No overcomplicated explanations—just automation that works.",
    ctaPrimary: "Contact us",
  },
  pain: {
    title: "Why automate your business?",
    intro:
      "Manual work is the invisible drag on your growth. While your team re-enters data, your competitors are shipping innovations.",
    problemLabel: "Problem",
    resultLabel: "Result",
    cards: [
      {
        title: "Time is your most expensive resource",
        problem:
          "Skilled people lose hours to copy-paste, email threads, and admin work.",
        result:
          "Automation gives those hours back—so you focus on strategy, not the process.",
      },
      {
        title: "Human error is inevitable",
        problem:
          "As volume grows, small mistakes in data turn into expensive failures.",
        result:
          "AI systems run with consistent precision 24/7, cutting the risk of omissions and technical incidents.",
      },
      {
        title: "Scale without chaos",
        problem:
          "More clients usually means more headcount—and more cost.",
        result:
          "With the right AI workflows, you can double capacity without growing the team or operational stress.",
      },
    ],
  },
  services: {
    title: "Services",
    subtitle: "Problem → solution → outcome. In plain language.",
    items: [
      {
        name: "Process automation",
        problem: "Data scattered across spreadsheets and email. Manual information handoffs.",
        solution: "One ecosystem that connects your tools (CRM, databases).",
        method: "Process analysis and full automation—from inquiry to transaction.",
      },
      {
        name: "AI assistants & chatbots",
        problem: "Slow support and time lost answering the same questions.",
        solution: "Smart AI that answers, qualifies leads, and books appointments 24/7.",
        method: "Model training on your data for precise communication and sales.",
      },
      {
        name: "Next-gen web platforms",
        problem: "Static brochure sites that don’t deliver real results.",
        solution: "Fast platforms built to turn traffic into clients.",
        method: "Modern design wired straight to your backend and workflows.",
      },
    ],
  },
  process: {
    title: "How we work",
    subtitle: "From idea to real results. Without unnecessary complexity.",
    steps: [
      {
        title: "Conversation",
        bullets: [
          "We review how your business runs and where revenue is left on the table.",
          "We align on exactly what the finished solution will look like for you.",
          "We set clear goals so you know what to expect.",
        ],
      },
      {
        title: "Plan",
        bullets: [
          "We outline execution steps tailored to your needs.",
          "We schedule rollout so it does not disrupt your day-to-day work.",
          "We agree a target launch date for the system.",
        ],
      },
      {
        title: "Execution",
        bullets: [
          "We build and configure everything needed for reliable operation.",
          "We test the system under real conditions before go-live.",
          "We keep you updated on progress at every step.",
        ],
      },
      {
        title: "Result",
        bullets: [
          "We launch, then verify everything is working as it should.",
          "We show your team how to work with the new tools.",
          "We stay available for support and new ideas.",
        ],
      },
    ],
  },
  caseStudy: {
    eyebrow: "Real experience",
    title: "From data chaos to full automation",
    lead: "How one business stopped losing time in spreadsheets and chats so it could focus on the work that actually matters.",
    challengeTitle: "The challenge",
    challenge:
      "Schedules, inventory, and customer inquiries were scattered across dozens of spreadsheets and chat threads. Managers had no clear picture of how the business was doing without polling the whole team.",
    approachTitle: "The solution",
    approach:
      "We unified everything into one system, automated every repeatable step, and added smart notifications only where a human decision still belongs.",
    outcomeTitle: "The result",
    outcome:
      "No more lost inquiries or data mistakes. Leadership sees everything in real time while the system keeps running quietly in the background.",
    metrics: [
      { label: "Time saved on manual work", value: "40%+" },
      { label: "Handling new inquiries", value: "3× faster" },
      { label: "Missed data or forgotten clients", value: "0%" },
    ],
    quote:
      "“We stopped losing hours moving data around. Our processes are finally under control.”",
    attribution: "Client · operations team",
  },
  contact: {
    eyebrow: "Next step",
    title: "Tell us about your project.",
    body: "Share your goal and the challenges you are facing. We will reply with concrete next steps—or an honest “no” if we are not the right partner for you.",
    cta: "Contact us",
  },
  footer: {
    brand: "FutureMadeAI",
    social: "Connect",
    langLabel: "Language",
  },
  inquiry: inquiryEn,
};
