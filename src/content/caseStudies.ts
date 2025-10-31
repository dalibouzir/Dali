import { SITE } from "@/config/site";

export type CaseStudySection = {
  id:
    | "problem"
    | "constraints"
    | "options"
    | "approach"
    | "failures"
    | "next-steps";
  title: string;
  summary: string;
  bullets: string[];
};

export type CaseStudyMetric = {
  label: string;
  value: string;
  detail: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  heroEyebrow: string;
  heroIntro: string;
  summary: string;
  seoDescription: string;
  metrics: CaseStudyMetric[];
  beforeAfter: { metric: string; before: string; after: string }[];
  architecture: {
    src: string;
    alt: string;
    caption: string;
  };
  sections: CaseStudySection[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-business-agent",
    title: "AI Business Agent",
    heroEyebrow: "Decision Intelligence Case Study",
    heroIntro:
      "An internal SaaS that fuses RAG, analytics, and simulation to answer operator questions in seconds.",
    summary: `${SITE.name} modernized weekly insight delivery by orchestrating ingestion, retrieval, and guardrailed reasoning so business operators can self-serve answers with audit trails.`,
    seoDescription: `How ${SITE.name} shipped an AI Business Agent that processes 35k+ questions with 2.7 s responses, 92% accuracy, and Monte Carlo-backed decisions.`,
    metrics: [
      {
        label: "Queries answered",
        value: "35k+",
        detail: "LLM-backed responses shipped across 7 internal teams.",
      },
      {
        label: "Median latency",
        value: "2.7 s",
        detail: "Down from an 8.9 s prototype and 12 h human turnaround.",
      },
      {
        label: "Answer accuracy",
        value: "92%",
        detail: "Validated against finance and operations benchmarks (↑14%).",
      },
    ],
    beforeAfter: [
      {
        metric: "Insight turnaround",
        before: "Manual analyst reports in ~12 hours",
        after: "Operator Q&A resolved in 2.7 s median",
      },
      {
        metric: "Forecast confidence",
        before: "Single-point spreadsheets, no scenarios",
        after: "Monte Carlo 10k runs w/ P95 bands + alerting",
      },
      {
        metric: "Traceability",
        before: "Email threads & screenshots",
        after: "Versioned narratives with Grafana dashboards",
      },
    ],
    architecture: {
      src: "/diagrams/ai-business-agent-architecture.svg",
      alt: "Architecture diagram showing ingestion, retrieval, agent, simulation, and delivery surfaces",
      caption:
        "Ingestion normalizes PDFs, spreadsheets, and images into pgVector + OpenSearch. An orchestration layer routes prompts through guardrails, Monte Carlo simulations, and Grafana instrumentation before pushing signed responses back to the operator UI.",
    },
    sections: [
      {
        id: "problem",
        title: "Problem",
        summary:
          "Operations, finance, and risk teams relied on analysts for every question, producing a 12-hour turnaround and inconsistent narratives.",
        bullets: [
          "35+ recurring weekly questions across forecasting, scenario planning, and ad-hoc audits.",
          "Fragmented knowledge in PDFs, Sheets, and image captures with no unified retrieval layer.",
          "Exec stakeholders wanted explainability, not just a chat bubble output.",
        ],
      },
      {
        id: "constraints",
        title: "Constraints",
        summary: "Accuracy, auditability, and privacy requirements shaped the approach.",
        bullets: [
          "Data residency mandated private inference (Ollama 3B) and local embeddings.",
          "Responses required source citations and scenario numbers for finance sign-off.",
          "Latency budget of <3 seconds to outperform analyst turnaround dramatically.",
        ],
      },
      {
        id: "options",
        title: "Options considered",
        summary: "Multiple prototypes were evaluated before landing on the final stack.",
        bullets: [
          "Fine-tuned GPT-4 w/ hosted embeddings — rejected due to vendor lock-in + PII risk.",
          "Rules-based DSL feeding BI dashboards — accurate but could not handle ambiguity.",
          "Notebook-powered analyst copilot — fast to build but required deep analyst adoption.",
        ],
      },
      {
        id: "approach",
        title: "Why this approach worked",
        summary: "Hybrid architecture aligned with privacy, guardrails, and performance goals.",
        bullets: [
          "Dual-store retrieval (pgVector + OpenSearch) keeps structured + semi-structured content searchable.",
          "Agentic planner chooses between direct retrieval, simulation jobs, or report generation workflows.",
          "Monte Carlo simulator (10k runs) writes metrics to Redis + Grafana for visual QA before surfacing to the operator.",
        ],
      },
      {
        id: "failures",
        title: "Failure modes & mitigations",
        summary: "Anticipating breakdowns was key to sustaining trust.",
        bullets: [
          "Hallucination guardrails catch missing citations and escalate to an analyst queue.",
          "RAG freshness alerts trigger when ingestion jobs miss a scheduled window.",
          "Simulation divergence reports compare live telemetry vs. Monte Carlo distributions to flag drift.",
        ],
      },
      {
        id: "next-steps",
        title: "Next steps",
        summary: "Roadmap items keep accuracy and adoption trending upward.",
        bullets: [
          "Expand ingestion to S3 image archives with OCR quality scoring.",
          "Add reinforcement learning loop based on operator satisfaction ratings.",
          "Roll out sandbox mode so analysts can stage new guardrails before production.",
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((entry) => entry.slug === slug);
}

export const featuredCaseStudy = caseStudies[0];

// @improvement: case study content centralised for pages + homepage card
