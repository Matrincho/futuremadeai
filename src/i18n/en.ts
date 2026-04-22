import type { MarketingCopy } from "./types";

export const en: MarketingCopy = {
  nav: {
    services: "Services",
    process: "Process",
    work: "Work",
    cta: "Contact us",
    contact: "Contact",
  },
  hero: {
    kicker: "AI agency",
    title: "Systems that think with you - not instead of you.",
    body: "We design, build, and ship automation and AI workflows that feel inevitable: calm interfaces, reliable backends, and measurable lift. Replace this with your final positioning when ready.",
    ctaPrimary: "Contact us",
  },
  pain: {
    title: "Why automation?",
    subtitle:
      "Manual glue work compounds quietly—until velocity, quality, and morale all take a hit.",
    cards: [
      {
        title: "Time leaks everywhere",
        body: "Teams re-key data, chase approvals, and context-switch across tools. High-skill people spend their week on low-skill repetition.",
      },
      {
        title: "Errors scale with volume",
        body: "Humans are brilliant at judgment calls—and brittle at rote precision. As throughput grows, small mistakes become expensive incidents.",
      },
      {
        title: "Opportunity cost is real",
        body: "Every sprint spent babysitting spreadsheets is a sprint not spent shipping product, serving customers, or tightening the core loop.",
      },
    ],
  },
  services: {
    title: "Services",
    subtitle: "Problem → solution → method, in plain language.",
    items: [
      {
        name: "Workflow automation",
        problem: "Critical paths live in inboxes and side channels.",
        solution: "Durable pipelines with clear ownership and observability.",
        method: "Map the real process, instrument it, then automate the boring middle.",
      },
      {
        name: "AI copilots & retrieval",
        problem: "Knowledge is scattered; answers are slow or inconsistent.",
        solution: "Grounded assistants with citations, permissions, and guardrails.",
        method: "Start from trusted sources, evaluate quality continuously, tighten the loop.",
      },
      {
        name: "Custom internal tools",
        problem: "Off-the-shelf tools force awkward workarounds.",
        solution: "Focused interfaces that match how your team actually works.",
        method: "Prototype fast on real data, harden for edge cases, ship incrementally.",
      },
    ],
  },
  process: {
    title: "How we work",
    subtitle: "A tight loop from first conversation to production leverage.",
    steps: [
      {
        title: "Audit",
        bullets: [
          "Map workflows, systems, and failure modes",
          "Quantify time, risk, and upside",
          "Agree on success metrics and scope",
        ],
      },
      {
        title: "Design",
        bullets: [
          "Information architecture + UX for operators",
          "Safety, permissions, and rollback paths",
          "Milestone plan with visible checkpoints",
        ],
      },
      {
        title: "Build",
        bullets: [
          "Implement integrations and core logic",
          "Automated checks + staging environments",
          "Weekly demos so surprises die early",
        ],
      },
      {
        title: "Scale",
        bullets: [
          "Hardening, monitoring, and runbooks",
          "Training and adoption support",
          "Iterate on the next bottleneck",
        ],
      },
    ],
  },
  caseStudy: {
    eyebrow: "Featured engagement",
    title: "From weekly chaos to a calm operating rhythm",
    lead: "A multi-site operator needed reliability without hiring another coordination layer. Placeholder narrative—swap in your real story, metrics, and quotes.",
    challengeTitle: "Challenge",
    challenge:
      "Scheduling, inventory checks, and customer follow-ups lived in a patchwork of chats and spreadsheets. Managers could not see what was true without asking three people.",
    approachTitle: "Approach",
    approach:
      "We consolidated the source of truth, automated the repetitive sync steps, and added lightweight approvals where judgment mattered. Operators kept familiar surfaces; the system did the carrying.",
    outcomeTitle: "Outcome",
    outcome:
      "Fewer missed handoffs, faster end-of-day reconciliation, and a leadership view that updates itself. Exact numbers go here when you have permission to publish them.",
    metrics: [
      { label: "Manual hours reduced", value: "40%+" },
      { label: "Time-to-close (internal)", value: "3× faster" },
      { label: "Incident rate (ops)", value: "↓ materially" },
    ],
    quote:
      "“We stopped playing telephone with our own data. The week finally feels under control.”",
    attribution: "Placeholder quote · Operations lead",
  },
  contact: {
    eyebrow: "Next step",
    title: "Tell us what you are building",
    body: "Share context, constraints, and what “winning” looks like. We will respond with next steps—or a clear no if we are not the right fit.",
    cta: "Contact us",
    secondary: "Prefer email later? You can still start here.",
  },
  footer: {
    tagline: "Automation and AI systems for serious operators.",
    social: "Connect",
    langLabel: "Language",
  },
};
