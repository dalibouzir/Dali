export const LOCALE_COOKIE_NAME = "portfolio_locale";

export const SUPPORTED_LOCALES = ["en", "fr", "ar"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export function normalizeLocale(value?: string | null): Locale {
  if (!value) {
    return DEFAULT_LOCALE;
  }

  const normalized = value.toLowerCase();
  if ((SUPPORTED_LOCALES as readonly string[]).includes(normalized)) {
    return normalized as Locale;
  }

  return DEFAULT_LOCALE;
}

export function isRtl(locale: Locale) {
  return locale === "ar";
}

export const LOCALE_LABELS: Record<Locale, { short: string; name: string }> = {
  en: { short: "EN", name: "English" },
  fr: { short: "FR", name: "Français" },
  ar: { short: "AR", name: "العربية" },
};

export type NavCopy = {
  homeLinks: {
    about: string;
    skills: string;
    bestWorks: string;
    contacts: string;
  };
  pageLinks: {
    home: string;
    projects: string;
    contact: string;
  };
  currentLanguageAria: string;
  openLanguageMenuAria: string;
  selectLanguageAria: string;
  menuAria: string;
};

export const NAV_COPY: Record<Locale, NavCopy> = {
  en: {
    homeLinks: {
      about: "ABOUT ME",
      skills: "SKILLS",
      bestWorks: "BEST WORKS",
      contacts: "CONTACTS",
    },
    pageLinks: {
      home: "HOME",
      projects: "PROJECTS",
      contact: "CONTACT",
    },
    currentLanguageAria: "Current language",
    openLanguageMenuAria: "Open language menu",
    selectLanguageAria: "Select language",
    menuAria: "Primary",
  },
  fr: {
    homeLinks: {
      about: "À PROPOS",
      skills: "COMPÉTENCES",
      bestWorks: "MEILLEURS PROJETS",
      contacts: "CONTACT",
    },
    pageLinks: {
      home: "ACCUEIL",
      projects: "PROJETS",
      contact: "CONTACT",
    },
    currentLanguageAria: "Langue actuelle",
    openLanguageMenuAria: "Ouvrir le menu des langues",
    selectLanguageAria: "Choisir la langue",
    menuAria: "Navigation principale",
  },
  ar: {
    homeLinks: {
      about: "من أنا",
      skills: "المهارات",
      bestWorks: "أفضل الأعمال",
      contacts: "تواصل",
    },
    pageLinks: {
      home: "الرئيسية",
      projects: "المشاريع",
      contact: "تواصل",
    },
    currentLanguageAria: "اللغة الحالية",
    openLanguageMenuAria: "فتح قائمة اللغات",
    selectLanguageAria: "اختيار اللغة",
    menuAria: "التنقل الرئيسي",
  },
};

export type ProjectsPageCopy = {
  badge: string;
  title: string;
  description: string;
  explorer: {
    searchLabel: string;
    searchPlaceholder: string;
    sortLabel: string;
    sortFeatured: string;
    sortAlphabetical: string;
    categoryLabel: string;
    stackLabel: string;
    showing: string;
    of: string;
    projectsWord: string;
    resetFilters: string;
    noMatchTitle: string;
    noMatchBody: string;
  };
};

export const PROJECTS_PAGE_COPY: Record<Locale, ProjectsPageCopy> = {
  en: {
    badge: "Portfolio Explorer",
    title: "Project Case Studies",
    description:
      "Browse deep dives covering architecture, implementation decisions, and measured outcomes across AI, backend, and full-stack delivery projects.",
    explorer: {
      searchLabel: "Search projects",
      searchPlaceholder: "Try: RAG, FastAPI, dashboard, recommendation...",
      sortLabel: "Sort",
      sortFeatured: "Featured first",
      sortAlphabetical: "A to Z",
      categoryLabel: "Category",
      stackLabel: "Stack focus",
      showing: "Showing",
      of: "of",
      projectsWord: "projects",
      resetFilters: "Reset filters",
      noMatchTitle: "No projects match these filters.",
      noMatchBody: "Try clearing one filter or searching with broader keywords.",
    },
  },
  fr: {
    badge: "Explorateur Portfolio",
    title: "Études de Cas Projets",
    description:
      "Parcourez des analyses détaillées: architecture, décisions d’implémentation et résultats mesurés sur des projets IA, backend et full-stack.",
    explorer: {
      searchLabel: "Rechercher des projets",
      searchPlaceholder: "Exemple : RAG, FastAPI, dashboard, recommandation...",
      sortLabel: "Tri",
      sortFeatured: "Mise en avant d’abord",
      sortAlphabetical: "A à Z",
      categoryLabel: "Catégorie",
      stackLabel: "Technologies",
      showing: "Affichage",
      of: "sur",
      projectsWord: "projets",
      resetFilters: "Réinitialiser",
      noMatchTitle: "Aucun projet ne correspond à ces filtres.",
      noMatchBody: "Essayez de supprimer un filtre ou d’élargir la recherche.",
    },
  },
  ar: {
    badge: "مستكشف الأعمال",
    title: "دراسات حالة المشاريع",
    description:
      "تصفح صفحات تفصيلية تعرض المعمارية وقرارات التنفيذ والنتائج المقاسة عبر مشاريع الذكاء الاصطناعي والباكند والتطوير الشامل.",
    explorer: {
      searchLabel: "ابحث في المشاريع",
      searchPlaceholder: "مثال: RAG أو FastAPI أو dashboard...",
      sortLabel: "الترتيب",
      sortFeatured: "المميزة أولًا",
      sortAlphabetical: "أبجديًا",
      categoryLabel: "التصنيف",
      stackLabel: "التقنيات",
      showing: "عرض",
      of: "من",
      projectsWord: "مشاريع",
      resetFilters: "إعادة ضبط",
      noMatchTitle: "لا توجد مشاريع مطابقة لهذه الفلاتر.",
      noMatchBody: "جرّب حذف فلتر أو توسيع كلمات البحث.",
    },
  },
};

export type ProjectDetailCopy = {
  backToProjects: string;
  sectionLabels: {
    overview: string;
    problem: string;
    impact: string;
    architecture: string;
    features: string;
    validation: string;
    media: string;
    limitations: string;
  };
  headings: {
    projectContext: string;
    problemToSolve: string;
    deliveryOutcomes: string;
    executionFlow: string;
    executionFlowLead: string;
    featuresShipped: string;
    measuredEvidence: string;
    mediaTitle: string;
    scopeBoundaries: string;
    moreProjects: string;
    quickFacts: string;
    techStack: string;
  };
  labels: {
    role: string;
    status: string;
    stackItems: string;
    step: string;
    previous: string;
    next: string;
    category: string;
    validationItems: string;
    onThisPage: string;
  };
};

export const PROJECT_DETAIL_COPY: Record<Locale, ProjectDetailCopy> = {
  en: {
    backToProjects: "Back to projects",
    sectionLabels: {
      overview: "Overview",
      problem: "Problem",
      impact: "Impact",
      architecture: "Architecture",
      features: "Features",
      validation: "Validation",
      media: "Media",
      limitations: "Limitations",
    },
    headings: {
      projectContext: "Project context",
      problemToSolve: "What needed to be solved",
      deliveryOutcomes: "Delivery outcomes",
      executionFlow: "Execution flow",
      executionFlowLead: "Step-by-step implementation path used to deliver this project.",
      featuresShipped: "Capabilities shipped",
      measuredEvidence: "Measured evidence",
      mediaTitle: "Screenshots and recordings",
      scopeBoundaries: "Scope boundaries",
      moreProjects: "More projects",
      quickFacts: "Quick facts",
      techStack: "Tech stack",
    },
    labels: {
      role: "Role",
      status: "Status",
      stackItems: "Stack Items",
      step: "Step",
      previous: "Previous",
      next: "Next",
      category: "Category",
      validationItems: "Validation items",
      onThisPage: "On this page",
    },
  },
  fr: {
    backToProjects: "Retour aux projets",
    sectionLabels: {
      overview: "Vue d’ensemble",
      problem: "Problème",
      impact: "Impact",
      architecture: "Architecture",
      features: "Fonctionnalités",
      validation: "Validation",
      media: "Médias",
      limitations: "Limites",
    },
    headings: {
      projectContext: "Contexte du projet",
      problemToSolve: "Le problème à résoudre",
      deliveryOutcomes: "Résultats livrés",
      executionFlow: "Flux d’exécution",
      executionFlowLead: "Chemin d’implémentation utilisé pour livrer ce projet.",
      featuresShipped: "Fonctionnalités livrées",
      measuredEvidence: "Preuves mesurées",
      mediaTitle: "Captures et vidéos",
      scopeBoundaries: "Limites du périmètre",
      moreProjects: "Autres projets",
      quickFacts: "Infos rapides",
      techStack: "Stack technique",
    },
    labels: {
      role: "Rôle",
      status: "Statut",
      stackItems: "Éléments stack",
      step: "Étape",
      previous: "Précédent",
      next: "Suivant",
      category: "Catégorie",
      validationItems: "Éléments de validation",
      onThisPage: "Sur cette page",
    },
  },
  ar: {
    backToProjects: "العودة للمشاريع",
    sectionLabels: {
      overview: "نظرة عامة",
      problem: "المشكلة",
      impact: "الأثر",
      architecture: "المعمارية",
      features: "المزايا",
      validation: "التحقق",
      media: "الوسائط",
      limitations: "القيود",
    },
    headings: {
      projectContext: "سياق المشروع",
      problemToSolve: "ما الذي كان يجب حله",
      deliveryOutcomes: "نتائج التنفيذ",
      executionFlow: "تدفق التنفيذ",
      executionFlowLead: "مسار التنفيذ خطوة بخطوة المستخدم لتسليم هذا المشروع.",
      featuresShipped: "المزايا المنجزة",
      measuredEvidence: "أدلة مقاسة",
      mediaTitle: "صور وفيديوهات",
      scopeBoundaries: "حدود النطاق",
      moreProjects: "مشاريع أخرى",
      quickFacts: "حقائق سريعة",
      techStack: "التقنيات",
    },
    labels: {
      role: "الدور",
      status: "الحالة",
      stackItems: "عدد التقنيات",
      step: "الخطوة",
      previous: "السابق",
      next: "التالي",
      category: "التصنيف",
      validationItems: "عناصر التحقق",
      onThisPage: "في هذه الصفحة",
    },
  },
};

export type HomeCopy = {
  hero: {
    primary: string;
    secondary: string;
    tertiary: string;
    subtitle: string;
    ctaStart: string;
    ctaPortfolio: string;
  };
  about: {
    title: string;
    subtitle: string;
    availability: string;
    headingLineOne: string;
    headingLineTwo: string;
    loadCv: string;
    p1: string;
    p2: string;
  };
  sectionTitles: {
    bestWorks: string;
    bestWorksSubtitle: string;
    portfolio: string;
    portfolioSubtitle: string;
  };
  filters: Record<"All" | "Flagship" | "LLM/RAG" | "ML" | "Backend" | "Full-stack", string>;
  contact: {
    systemOnline: string;
    headingOne: string;
    headingTwo: string;
    paragraph: string;
    transmissionData: string;
    secureChannel: string;
    encrypted: string;
    submit: string;
    statusDefault: string;
    statusInvalidName: string;
    statusInvalidEmail: string;
    statusInvalidMessage: string;
    statusSuccess: string;
    placeholders: {
      name: string;
      email: string;
      budget: string;
      message: string;
    };
    projectTypeOptions: readonly string[];
  };
  footer: {
    line: string;
    copyrightSuffix: string;
  };
};

export const HOME_COPY: Record<Locale, HomeCopy> = {
  en: {
    hero: {
      primary: "Creative.",
      secondary: "Efficient.",
      tertiary: "Advanced.",
      subtitle: "Design · Full Stack Development · AI Integration",
      ctaStart: "INITIATE SYSTEM",
      ctaPortfolio: "VIEW PORTFOLIO",
    },
    about: {
      title: "About Me",
      subtitle: "This portfolio was rebuilt to mirror the exact visual language you requested.",
      availability: "AVAILABLE FOR HIRE",
      headingLineOne: "Architecting the",
      headingLineTwo: "Intelligent Web",
      loadCv: "LOAD CV",
      p1: "I am a Junior AI Engineer, Full Stack Developer, and builder of evidence-first digital systems focused on production-grade AI orchestration.",
      p2: "I work across Python and React ecosystems to deliver platforms that combine reliable backend foundations, assistant intelligence layers, and clear user experiences.",
    },
    sectionTitles: {
      bestWorks: "Best Works",
      bestWorksSubtitle: "Curated Portfolio Selection",
      portfolio: "Portfolio",
      portfolioSubtitle: "Complete Project Gallery",
    },
    filters: {
      All: "All",
      Flagship: "Flagship",
      "LLM/RAG": "AI / ML",
      ML: "ML",
      Backend: "Backend",
      "Full-stack": "Full-stack",
    },
    contact: {
      systemOnline: "SYSTEM ONLINE",
      headingOne: "Let's",
      headingTwo: "Sync.",
      paragraph:
        "Bridging human intent with artificial intelligence. Send a signal to initiate collaboration on your next breakthrough.",
      transmissionData: "Transmission Data",
      secureChannel: "SECURE CHANNEL:",
      encrypted: "ENCRYPTED",
      submit: "TRANSMIT SIGNAL",
      statusDefault: "256-bit AES encryption active",
      statusInvalidName: "Transmission blocked: identify yourself first.",
      statusInvalidEmail: "Transmission blocked: invalid email address.",
      statusInvalidMessage: "Transmission blocked: include more project details.",
      statusSuccess: "Signal transmitted. Expect response within 24 hours.",
      placeholders: {
        name: "Identify Yourself / Entity",
        email: "Email Address",
        budget: "Est. Budget (USD)",
        message: "Message Payload",
      },
      projectTypeOptions: ["AI Integration", "Web Development", "Automation", "Consulting", "Other"],
    },
    footer: {
      line: "AI · FULL STACK · DESIGN",
      copyrightSuffix: "All systems operational.",
    },
  },
  fr: {
    hero: {
      primary: "Créatif.",
      secondary: "Efficace.",
      tertiary: "Avancé.",
      subtitle: "Design · Développement Full Stack · Intégration IA",
      ctaStart: "LANCER LE SYSTÈME",
      ctaPortfolio: "VOIR LE PORTFOLIO",
    },
    about: {
      title: "À Propos",
      subtitle: "Ce portfolio a été retravaillé pour reproduire exactement le style visuel demandé.",
      availability: "DISPONIBLE",
      headingLineOne: "Concevoir le",
      headingLineTwo: "Web Intelligent",
      loadCv: "CHARGER LE CV",
      p1: "Je suis ingénieur IA junior, développeur full stack, et créateur de systèmes numériques orientés preuve et orchestration IA.",
      p2: "Je travaille avec les écosystèmes Python et React pour livrer des plateformes robustes, lisibles et prêtes pour la production.",
    },
    sectionTitles: {
      bestWorks: "Meilleurs Projets",
      bestWorksSubtitle: "Sélection de projets",
      portfolio: "Portfolio",
      portfolioSubtitle: "Galerie complète des projets",
    },
    filters: {
      All: "Tous",
      Flagship: "Phare",
      "LLM/RAG": "IA / ML",
      ML: "ML",
      Backend: "Backend",
      "Full-stack": "Full-stack",
    },
    contact: {
      systemOnline: "SYSTÈME EN LIGNE",
      headingOne: "Restons",
      headingTwo: "Synchronisés.",
      paragraph:
        "Relier l’intention humaine à l’intelligence artificielle. Envoyez un signal pour lancer votre prochain projet.",
      transmissionData: "Données de transmission",
      secureChannel: "CANAL SÉCURISÉ :",
      encrypted: "CHIFFRÉ",
      submit: "ENVOYER LE SIGNAL",
      statusDefault: "Chiffrement AES 256 bits actif",
      statusInvalidName: "Transmission bloquée : identifiez-vous d’abord.",
      statusInvalidEmail: "Transmission bloquée : adresse email invalide.",
      statusInvalidMessage: "Transmission bloquée : ajoutez plus de détails sur le projet.",
      statusSuccess: "Signal transmis. Réponse sous 24h.",
      placeholders: {
        name: "Nom / Entité",
        email: "Adresse email",
        budget: "Budget estimé (USD)",
        message: "Message",
      },
      projectTypeOptions: ["Intégration IA", "Développement Web", "Automatisation", "Conseil", "Autre"],
    },
    footer: {
      line: "IA · FULL STACK · DESIGN",
      copyrightSuffix: "Tous les systèmes sont opérationnels.",
    },
  },
  ar: {
    hero: {
      primary: "إبداع.",
      secondary: "كفاءة.",
      tertiary: "تطور.",
      subtitle: "تصميم · تطوير شامل · دمج الذكاء الاصطناعي",
      ctaStart: "ابدأ النظام",
      ctaPortfolio: "عرض الأعمال",
    },
    about: {
      title: "من أنا",
      subtitle: "تم إعادة بناء هذا البورتفوليو ليطابق اللغة البصرية التي طلبتها.",
      availability: "متاح للعمل",
      headingLineOne: "بناء",
      headingLineTwo: "ويب ذكي",
      loadCv: "تحميل السيرة",
      p1: "أنا مهندس ذكاء اصطناعي مبتدئ ومطور Full Stack أبني أنظمة رقمية تعتمد على الأدلة وتنفيذ عملي.",
      p2: "أعمل عبر منظومتي Python وReact لتقديم منصات تجمع بين بنية خلفية قوية وتجربة استخدام واضحة.",
    },
    sectionTitles: {
      bestWorks: "أفضل الأعمال",
      bestWorksSubtitle: "مشاريع مختارة",
      portfolio: "المشاريع",
      portfolioSubtitle: "معرض المشاريع الكامل",
    },
    filters: {
      All: "الكل",
      Flagship: "المميزة",
      "LLM/RAG": "ذكاء اصطناعي / تعلم آلي",
      ML: "تعلم آلي",
      Backend: "خلفية",
      "Full-stack": "متكامل",
    },
    contact: {
      systemOnline: "النظام متصل",
      headingOne: "لنبدأ",
      headingTwo: "التزامن.",
      paragraph: "نحوّل النية البشرية إلى حلول ذكاء اصطناعي عملية. أرسل رسالة لبدء تعاونك القادم.",
      transmissionData: "بيانات الإرسال",
      secureChannel: "قناة آمنة:",
      encrypted: "مشفرة",
      submit: "إرسال الإشارة",
      statusDefault: "تشفير AES 256-بت مفعل",
      statusInvalidName: "تم حظر الإرسال: الرجاء إدخال الاسم أولًا.",
      statusInvalidEmail: "تم حظر الإرسال: البريد الإلكتروني غير صالح.",
      statusInvalidMessage: "تم حظر الإرسال: أضف تفاصيل أكثر عن المشروع.",
      statusSuccess: "تم إرسال الرسالة. متوقع الرد خلال 24 ساعة.",
      placeholders: {
        name: "الاسم / الجهة",
        email: "البريد الإلكتروني",
        budget: "الميزانية التقديرية (USD)",
        message: "محتوى الرسالة",
      },
      projectTypeOptions: ["دمج ذكاء اصطناعي", "تطوير ويب", "أتمتة", "استشارة", "أخرى"],
    },
    footer: {
      line: "ذكاء اصطناعي · تطوير شامل · تصميم",
      copyrightSuffix: "جميع الأنظمة تعمل.",
    },
  },
};
