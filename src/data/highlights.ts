export type Highlight = {
  metric: string;
  label: string;
  subLabel: string;
  caption: string;
};

export const highlights: Highlight[] = [
  {
    metric: "35k+",
    label: "LLM-backed answers shipped",
    subLabel: "AI Business Agent",
    caption: "Multi-route orchestration and hybrid retrieval powering decision support for business users.",
  },
  {
    metric: "±2 pts",
    label: "Fantasy lineup accuracy",
    subLabel: "AFFA engine, 15+ gameweeks",
    caption: "ML pipeline that cut prediction error by over 70% across multiple seasons.",
  },
  {
    metric: "7,000+",
    label: "Players managed",
    subLabel: "MyMatch admin platform",
    caption: "Centralized back office to control players, complexes, and operations from a single dashboard.",
  },
  {
    metric: "30%+",
    label: "Efficiency lift",
    subLabel: "Gym & scheduling systems",
    caption: "Digitized memberships, scheduling, and workflows to reduce manual coordination time.",
  },
  {
    metric: "1,200+",
    label: "Candidates matched",
    subLabel: "QuirkHire talent platform",
    caption: "Hybrid NLP/LLM recommendations that helped career centers place candidates faster.",
  },
];
