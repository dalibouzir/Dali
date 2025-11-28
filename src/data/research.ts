export type ResearchItem = {
  id: string;
  title: string;
  summary: string;
  details: string[];
  stack: string[];
};

export const researchItems: ResearchItem[] = [
  {
    id: "speech-emotion",
    title: "Speech Emotion Recognition · VAE & Diffusion",
    summary:
      "Reproduced and extended a 2024 paper on enhancing speech emotion recognition using variational autoencoders and diffusion models.",
    details: [
      "Worked with EmoDB and RAVDESS datasets to generate higher-clarity emotional signals in synthetic audio.",
      "Followed a CRISP-DM-style workflow from data preparation to evaluation with loss and accuracy metrics.",
      "Implemented the pipeline in PyTorch with notebook-driven experimentation and reproducible runs.",
    ],
    stack: ["PyTorch", "VAE", "Diffusion models", "Jupyter Notebook", "CRISP-DM"],
  },
  {
    id: "ligament-cnn",
    title: "Medical Imaging · VGG vs CNN",
    summary: "Compared VGG-based architectures and custom CNNs on a ligament classification dataset.",
    details: [
      "Analyzed tradeoffs in accuracy, overfitting behavior, and model complexity.",
      "Used visualization tools to interpret learning curves and misclassifications.",
    ],
    stack: ["Python", "TensorFlow", "Keras", "Matplotlib", "Google Colab"],
  },
  {
    id: "powergym",
    title: "PowerGym – AI-Driven Workout Companion",
    summary:
      "Web app for gym enthusiasts with AI-assisted workout recommendations, BMI calculator, and simple analytics dashboards.",
    details: [
      "Combined Laravel and Flask-based ML services with MySQL to deliver personalized workout plans.",
      "Integrated plots and charts to visualize progress and training intensity over time.",
    ],
    stack: ["Laravel", "Python", "Flask", "MySQL", "Plotly"],
  },
];
