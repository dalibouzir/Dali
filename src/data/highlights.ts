export type Highlight = {
  metric: string;
  label: string;
  subLabel: string;
  caption: string;
};

export const highlights: Highlight[] = [
  {
    metric: "20/20",
    label: "Executed audit cases",
    subLabel: "WeeFarm validation baseline",
    caption: "Structured validation of assistant behavior across operational decision paths.",
  },
  {
    metric: "17 / 3 / 0",
    label: "PASS / PARTIAL / FAIL",
    subLabel: "Validation outcomes",
    caption: "Validation-backed prototype results with no failed audited case in baseline run.",
  },
  {
    metric: "100%",
    label: "Route accuracy",
    subLabel: "Evidence-first assistant routing",
    caption: "All audited prompts followed expected orchestration routes during baseline.",
  },
  {
    metric: "0",
    label: "Runtime errors",
    subLabel: "Baseline execution",
    caption: "No runtime failures during the validated WeeFarm assistant session.",
  },
  {
    metric: "0.8412",
    label: "High-risk recall",
    subLabel: "Readiness-gated ML advisory",
    caption: "Advisory ML signal quality measured with strict train/test gating.",
  },
];
