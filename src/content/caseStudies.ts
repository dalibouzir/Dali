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
    heroEyebrow: "Decision Support Case Study",
    heroIntro:
      "A validation-backed prototype combining retrieval, orchestration, and simulation-oriented assistant flows for business operators.",
    summary: `${SITE.name} designed a structured assistant workflow that separates factual evidence, contextual retrieval, and response composition for human-reviewed operational decisions.`,
    seoDescription:
      "AI Business Agent case study covering SQL-grounded retrieval, assistant orchestration, and validation-aware decision-support delivery.",
    metrics: [
      {
        label: "Assistant framing",
        value: "Evidence-first",
        detail: "Responses are composed from explicit evidence layers rather than direct free-form generation.",
      },
      {
        label: "Operational mode",
        value: "Human-reviewed",
        detail: "Recommendations remain advisory and are reviewed by an operator before action.",
      },
      {
        label: "Workflow scope",
        value: "Multi-route",
        detail: "Assistant can route between retrieval-heavy, analytics, and simulation-style paths.",
      },
    ],
    beforeAfter: [
      {
        metric: "Information access",
        before: "Manual report lookup and fragmented documents",
        after: "Unified assistant workflow with traceable evidence context",
      },
      {
        metric: "Decision narrative",
        before: "Ad-hoc explanations without structured sourcing",
        after: "Response composition tied to explicit retrieval and data layers",
      },
      {
        metric: "Operational confidence",
        before: "Opaque outputs and low traceability",
        after: "Validation-backed prototype behavior with review checkpoints",
      },
    ],
    architecture: {
      src: "/diagrams/ai-business-agent-architecture.svg",
      alt: "Architecture diagram showing retrieval, orchestration, and assistant response composition",
      caption:
        "Data ingestion and retrieval feed a guarded orchestration layer, then response composition is surfaced to operators with evidence context.",
    },
    sections: [
      {
        id: "problem",
        title: "Problem",
        summary:
          "Business users needed faster operational answers without sacrificing evidence traceability and review controls.",
        bullets: [
          "Knowledge was spread across structured tables and semi-structured documents.",
          "Decision support required explainability for operational confidence.",
          "The workflow needed to remain advisory with human approval gates.",
        ],
      },
      {
        id: "constraints",
        title: "Constraints",
        summary: "Accuracy posture and transparency were prioritized over automation volume.",
        bullets: [
          "Outputs required clear evidence context.",
          "Response composition had to separate data and narrative responsibilities.",
          "Operator review remained mandatory for sensitive decision paths.",
        ],
      },
      {
        id: "options",
        title: "Options considered",
        summary: "Several alternatives were compared before final architecture selection.",
        bullets: [
          "Single-model direct answering without retrieval boundaries.",
          "Rules-only approach without assistant composition.",
          "Hybrid retrieval + orchestration + advisory response composition.",
        ],
      },
      {
        id: "approach",
        title: "Why this approach worked",
        summary: "A layered assistant architecture aligned with evidence-first goals.",
        bullets: [
          "Structured and contextual retrieval are handled separately.",
          "Assistant route selection keeps response paths explicit.",
          "Advisory outputs remain human-reviewed before operational use.",
        ],
      },
      {
        id: "failures",
        title: "Failure modes & mitigations",
        summary: "Expected weak points were handled through guardrails and review loops.",
        bullets: [
          "Low-confidence responses trigger clarification-oriented behavior.",
          "Missing context prompts retrieval fallback checks.",
          "Operator notes are fed back into refinement cycles.",
        ],
      },
      {
        id: "next-steps",
        title: "Next steps",
        summary: "Future iterations focus on validation breadth and workflow depth.",
        bullets: [
          "Expand scenario coverage in validation scripts.",
          "Improve retrieval explainability for edge-case queries.",
          "Formalize feedback loops for stakeholder review sessions.",
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((entry) => entry.slug === slug);
}

export const featuredCaseStudy = caseStudies[0];
