"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { selectedProjects, type HomeProjectCategory } from "@/content/homeContent";
import { owner, siteLinks } from "@/content/siteMeta";
import { SITE } from "@/config/site";
import { HOME_COPY, type Locale } from "@/lib/i18n";
import { localizeHomeProjects } from "@/lib/localizedProjects";

type PortfolioFilter = "All" | "Flagship" | "LLM/RAG" | "ML" | "Backend" | "Full-stack";

type ContactState = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
};

const PORTFOLIO_FILTERS: readonly PortfolioFilter[] = [
  "All",
  "Flagship",
  "LLM/RAG",
  "ML",
  "Backend",
  "Full-stack",
] as const;

type ServiceCard = {
  badge: string;
  title: string;
  description: string;
  features: string[];
  tone: "primary" | "secondary";
};

type SkillGroup = {
  label: string;
  tone: "primary" | "secondary";
  items: string[];
};

const LOCALIZED_SERVICE_CARDS: Record<Locale, readonly ServiceCard[]> = {
  en: [
    {
      badge: "WEB",
      title: "Full Stack Engineering",
      description:
        "Building robust web systems from polished frontend experiences to production-ready backend architecture.",
      features: ["Next.js Apps", "API Integration", "Database Design"],
      tone: "primary",
    },
    {
      badge: "CORE",
      title: "AI Solutions",
      description:
        "Integrating LLM, RAG, and advisory ML workflows into practical products with clear evidence boundaries.",
      features: ["LLM / RAG", "AI Agents", "Evaluation Loops"],
      tone: "primary",
    },
    {
      badge: "OPS",
      title: "Automation",
      description:
        "Designing workflow automations and orchestration services that reduce repetitive manual operations.",
      features: ["Workflow Automation", "Data Pipelines", "Orchestration APIs"],
      tone: "secondary",
    },
    {
      badge: "UI/UX",
      title: "Design",
      description:
        "Creating intentional interfaces focused on clarity, speed, and technical storytelling for product teams.",
      features: ["Product UI", "Design Systems", "Motion Layers"],
      tone: "secondary",
    },
  ],
  fr: [
    {
      badge: "WEB",
      title: "Ingénierie Full Stack",
      description:
        "Conception de systèmes web robustes, du frontend soigné jusqu’à l’architecture backend prête production.",
      features: ["Apps Next.js", "Intégration API", "Design de base de données"],
      tone: "primary",
    },
    {
      badge: "CORE",
      title: "Solutions IA",
      description:
        "Intégration de workflows LLM, RAG et ML consultatif dans des produits concrets avec frontières de preuve claires.",
      features: ["LLM / RAG", "AI Agents", "Boucles d’évaluation"],
      tone: "primary",
    },
    {
      badge: "OPS",
      title: "Automatisation",
      description:
        "Création d’automatisations et de services d’orchestration qui réduisent les tâches manuelles répétitives.",
      features: ["Workflow Automation", "Data Pipelines", "APIs d’orchestration"],
      tone: "secondary",
    },
    {
      badge: "UI/UX",
      title: "Design",
      description:
        "Interfaces intentionnelles axées sur la clarté, la vitesse et le storytelling technique pour les équipes produit.",
      features: ["Product UI", "Design Systems", "Motion Layers"],
      tone: "secondary",
    },
  ],
  ar: [
    {
      badge: "WEB",
      title: "هندسة Full Stack",
      description:
        "بناء أنظمة ويب قوية من واجهات Frontend مصقولة إلى معمارية Backend جاهزة للإنتاج.",
      features: ["تطبيقات Next.js", "دمج API", "تصميم قواعد البيانات"],
      tone: "primary",
    },
    {
      badge: "CORE",
      title: "حلول الذكاء الاصطناعي",
      description:
        "دمج مسارات LLM وRAG وإشارات ML الاستشارية داخل منتجات عملية بحدود أدلة واضحة.",
      features: ["LLM / RAG", "AI Agents", "دورات تقييم"],
      tone: "primary",
    },
    {
      badge: "OPS",
      title: "الأتمتة",
      description:
        "تصميم أتمتة workflows وخدمات Orchestration تقلّل العمليات اليدوية المتكررة.",
      features: ["Workflow Automation", "Data Pipelines", "واجهات Orchestration API"],
      tone: "secondary",
    },
    {
      badge: "UI/UX",
      title: "التصميم",
      description:
        "بناء واجهات مقصودة تركز على الوضوح والسرعة وسرد القصة التقنية لفرق المنتج.",
      features: ["Product UI", "Design Systems", "Motion Layers"],
      tone: "secondary",
    },
  ],
};

const LOCALIZED_SKILL_GROUPS: Record<Locale, readonly SkillGroup[]> = {
  en: [
    {
      label: "FRONTEND SYSTEMS",
      tone: "primary",
      items: ["React / Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"],
    },
    {
      label: "BACKEND LOGIC",
      tone: "secondary",
      items: ["Python / FastAPI", "Django", "Node.js", "PostgreSQL", "Supabase", "Docker"],
    },
    {
      label: "MACHINE LEARNING",
      tone: "primary",
      items: ["LLMs / GPT", "LangChain", "RAG", "Vector DB", "AI Agents"],
    },
    {
      label: "DESIGN",
      tone: "secondary",
      items: ["Figma", "UI/UX", "3D Design", "Mobile-first"],
    },
  ],
  fr: [
    {
      label: "SYSTÈMES FRONTEND",
      tone: "primary",
      items: ["React / Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"],
    },
    {
      label: "LOGIQUE BACKEND",
      tone: "secondary",
      items: ["Python / FastAPI", "Django", "Node.js", "PostgreSQL", "Supabase", "Docker"],
    },
    {
      label: "MACHINE LEARNING",
      tone: "primary",
      items: ["LLMs / GPT", "LangChain", "RAG", "Vector DB", "AI Agents"],
    },
    {
      label: "DESIGN",
      tone: "secondary",
      items: ["Figma", "UI/UX", "3D Design", "Mobile-first"],
    },
  ],
  ar: [
    {
      label: "أنظمة FRONTEND",
      tone: "primary",
      items: ["React / Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"],
    },
    {
      label: "منطق BACKEND",
      tone: "secondary",
      items: ["Python / FastAPI", "Django", "Node.js", "PostgreSQL", "Supabase", "Docker"],
    },
    {
      label: "التعلم الآلي",
      tone: "primary",
      items: ["LLMs / GPT", "LangChain", "RAG", "Vector DB", "AI Agents"],
    },
    {
      label: "التصميم",
      tone: "secondary",
      items: ["Figma", "UI/UX", "3D Design", "Mobile-first"],
    },
  ],
};

const LOCALIZED_STATS: Record<Locale, readonly { value: string; label: string }[]> = {
  en: [
    { value: "3+", label: "YEARS EXP" },
    { value: "15+", label: "PROJECTS" },
    { value: "24/7", label: "AVAILABILITY" },
    { value: "A+", label: "DELIVERY" },
  ],
  fr: [
    { value: "3+", label: "ANS D’EXP" },
    { value: "15+", label: "PROJETS" },
    { value: "24/7", label: "DISPONIBILITÉ" },
    { value: "A+", label: "LIVRAISON" },
  ],
  ar: [
    { value: "3+", label: "سنوات خبرة" },
    { value: "15+", label: "مشروع" },
    { value: "24/7", label: "التوفر" },
    { value: "A+", label: "التسليم" },
  ],
};

const HOME_CATEGORY_LABELS: Record<Locale, Record<HomeProjectCategory, string>> = {
  en: {
    Flagship: "Flagship",
    "LLM/RAG": "LLM/RAG",
    ML: "ML",
    Backend: "Backend",
    "Full-stack": "Full-stack",
  },
  fr: {
    Flagship: "Phare",
    "LLM/RAG": "LLM/RAG",
    ML: "ML",
    Backend: "Backend",
    "Full-stack": "Full-stack",
  },
  ar: {
    Flagship: "مميز",
    "LLM/RAG": "LLM/RAG",
    ML: "ML",
    Backend: "Backend",
    "Full-stack": "Full-stack",
  },
};

const HOME_UI_COPY: Record<
  Locale,
  {
    heroAria: string;
    scrollToAboutAria: string;
    filtersAria: string;
    toolsInventory: string;
    viewCaseStudy: string;
    seeMoreWorks: string;
    emailLabel: string;
    linkedinLabel: string;
    skillCoreTitle: string;
    skillCoreSub: string;
    mailNameLabel: string;
    mailEmailLabel: string;
    mailProjectTypeLabel: string;
    mailBudgetLabel: string;
    mailMessageLabel: string;
    mailNotProvided: string;
  }
> = {
  en: {
    heroAria: "Hero",
    scrollToAboutAria: "Scroll to about section",
    filtersAria: "Portfolio filters",
    toolsInventory: "TOOLS INVENTORY",
    viewCaseStudy: "VIEW CASE STUDY",
    seeMoreWorks: "SEE MORE WORKS",
    emailLabel: "EMAIL",
    linkedinLabel: "LINKEDIN",
    skillCoreTitle: "EXPERIENCE",
    skillCoreSub: "DATABASE",
    mailNameLabel: "Name",
    mailEmailLabel: "Email",
    mailProjectTypeLabel: "Project Type",
    mailBudgetLabel: "Budget",
    mailMessageLabel: "Message",
    mailNotProvided: "Not provided",
  },
  fr: {
    heroAria: "Section héro",
    scrollToAboutAria: "Aller à la section à propos",
    filtersAria: "Filtres du portfolio",
    toolsInventory: "INVENTAIRE OUTILS",
    viewCaseStudy: "VOIR L’ÉTUDE DE CAS",
    seeMoreWorks: "VOIR PLUS DE PROJETS",
    emailLabel: "EMAIL",
    linkedinLabel: "LINKEDIN",
    skillCoreTitle: "EXPÉRIENCE",
    skillCoreSub: "BASE DE DONNÉES",
    mailNameLabel: "Nom",
    mailEmailLabel: "Email",
    mailProjectTypeLabel: "Type de projet",
    mailBudgetLabel: "Budget",
    mailMessageLabel: "Message",
    mailNotProvided: "Non renseigné",
  },
  ar: {
    heroAria: "القسم الرئيسي",
    scrollToAboutAria: "الانتقال إلى قسم من أنا",
    filtersAria: "فلاتر الأعمال",
    toolsInventory: "مخزون الأدوات",
    viewCaseStudy: "عرض دراسة الحالة",
    seeMoreWorks: "عرض المزيد من الأعمال",
    emailLabel: "EMAIL",
    linkedinLabel: "LINKEDIN",
    skillCoreTitle: "خبرة",
    skillCoreSub: "DATA",
    mailNameLabel: "الاسم",
    mailEmailLabel: "البريد الإلكتروني",
    mailProjectTypeLabel: "نوع المشروع",
    mailBudgetLabel: "الميزانية",
    mailMessageLabel: "الرسالة",
    mailNotProvided: "غير مذكور",
  },
};

function validateEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

const revealViewport = { once: true, amount: 0.24 } as const;

const sectionRevealVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
    },
  },
} as const;

const staggerRevealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
} as const;

type PortfolioHomeProps = {
  locale: Locale;
};

export function PortfolioHome({ locale }: PortfolioHomeProps) {
  const copy = HOME_COPY[locale];
  const uiCopy = HOME_UI_COPY[locale];
  const serviceCards = LOCALIZED_SERVICE_CARDS[locale];
  const skillGroups = LOCALIZED_SKILL_GROUPS[locale];
  const stats = LOCALIZED_STATS[locale];
  const categoryLabels = HOME_CATEGORY_LABELS[locale];
  const projectTypeOptions = copy.contact.projectTypeOptions;
  const localizedProjects = useMemo(() => localizeHomeProjects(selectedProjects, locale), [locale]);
  const createInitialContact = (): ContactState => ({
    name: "",
    email: "",
    projectType: projectTypeOptions[0],
    budget: "",
    message: "",
  });

  const [activeFilter, setActiveFilter] = useState<PortfolioFilter>("All");
  const [contact, setContact] = useState<ContactState>(createInitialContact);
  const [contactStatus, setContactStatus] = useState<string>(copy.contact.statusDefault);

  const prefersReducedMotion = useReducedMotion();
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return localizedProjects;
    return localizedProjects.filter((project) => project.category === activeFilter);
  }, [activeFilter, localizedProjects]);

  const featuredProjects = useMemo(() => localizedProjects.slice(0, 2), [localizedProjects]);

  const toolInventory = useMemo(() => {
    const set = new Set<string>();
    localizedProjects.forEach((project) => {
      project.stack.forEach((item) => set.add(item));
    });
    return Array.from(set).slice(0, 20);
  }, [localizedProjects]);

  const year = new Date().getFullYear();
  const subjectPrefix = locale === "fr" ? "Demande portfolio de" : locale === "ar" ? "استفسار بورتفوليو من" : "Portfolio inquiry from";

  useEffect(() => {
    setContact((prev) => ({
      ...prev,
      projectType: projectTypeOptions.includes(prev.projectType)
        ? prev.projectType
        : projectTypeOptions[0],
    }));
    setContactStatus(copy.contact.statusDefault);
  }, [copy.contact.statusDefault, projectTypeOptions]);

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (contact.name.trim().length < 2) {
      setContactStatus(copy.contact.statusInvalidName);
      return;
    }

    if (!validateEmail(contact.email)) {
      setContactStatus(copy.contact.statusInvalidEmail);
      return;
    }

    if (contact.message.trim().length < 20) {
      setContactStatus(copy.contact.statusInvalidMessage);
      return;
    }

    const subject = `${subjectPrefix} ${contact.name.trim()}`;
    const body = [
      `${uiCopy.mailNameLabel}: ${contact.name.trim()}`,
      `${uiCopy.mailEmailLabel}: ${contact.email.trim()}`,
      `${uiCopy.mailProjectTypeLabel}: ${contact.projectType}`,
      `${uiCopy.mailBudgetLabel}: ${contact.budget.trim() || uiCopy.mailNotProvided}`,
      "",
      `${uiCopy.mailMessageLabel}:`,
      contact.message.trim(),
    ].join("\n");

    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setContactStatus(copy.contact.statusSuccess);
    setContact(createInitialContact());
  }

  function handleContactChange<K extends keyof ContactState>(key: K, value: ContactState[K]) {
    setContact((prev) => ({ ...prev, [key]: value }));
    setContactStatus(copy.contact.statusDefault);
  }

  return (
    <main id="main" className="anton-page">
      <section className="anton-hero" aria-label={uiCopy.heroAria}>
        <div className="anton-hero-cloud" aria-hidden />
        <motion.div
          className="anton-hero-inner"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
          animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.86, delay: prefersReducedMotion ? 0 : 1.05, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="anton-hero-title">
            <span className="anton-word-primary">{copy.hero.primary}</span>
            <span className="anton-word-secondary"> {copy.hero.secondary}</span>
            <span> {copy.hero.tertiary}</span>
          </h1>
          <p className="anton-hero-subtitle">{copy.hero.subtitle}</p>
          <motion.div
            className="anton-hero-actions"
            initial={prefersReducedMotion ? false : "hidden"}
            animate={prefersReducedMotion ? undefined : "visible"}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  delayChildren: 1.22,
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.a
              href="#contact"
              className="anton-btn anton-btn-primary"
              variants={staggerRevealVariants}
              whileHover={prefersReducedMotion ? undefined : { y: -2 }}
            >
              {copy.hero.ctaStart} <span aria-hidden>→</span>
            </motion.a>
            <motion.a
              href="#portfolio"
              className="anton-btn anton-btn-ghost"
              variants={staggerRevealVariants}
              whileHover={prefersReducedMotion ? undefined : { y: -2 }}
            >
              {copy.hero.ctaPortfolio}
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.a
          className="anton-scroll-hint"
          href="#about"
          aria-label={uiCopy.scrollToAboutAria}
          animate={prefersReducedMotion ? undefined : { y: [0, 9, 0], opacity: [0.85, 1, 0.85] }}
          transition={
            prefersReducedMotion
              ? undefined
              : {
                  duration: 1.8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }
          }
        >
          ↓
        </motion.a>
      </section>

      <motion.section
        id="about"
        className="anton-section anton-about"
        variants={sectionRevealVariants}
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "visible"}
        viewport={revealViewport}
      >
        <div className="anton-wrap">
          <header className="anton-section-header">
            <h2 className="anton-section-title">{copy.about.title}</h2>
            <p className="anton-section-subtitle">{copy.about.subtitle}</p>
          </header>

          <motion.div
            className="anton-about-grid"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView={prefersReducedMotion ? undefined : "visible"}
            viewport={revealViewport}
          >
            <motion.figure className="anton-avatar-card glass-panel" variants={staggerRevealVariants}>
              <Image
                src="/profile/mohamed-ali-bouzir.jpg"
                alt={owner.name}
                width={840}
                height={1040}
                className="anton-avatar-image"
                sizes="(max-width: 960px) 95vw, 40vw"
                priority
              />
              <figcaption>
                <p className="anton-availability">{copy.about.availability}</p>
                <h3>{owner.name}</h3>
                <p>{owner.location}</p>
              </figcaption>
            </motion.figure>

            <motion.article className="anton-about-card glass-panel" variants={staggerRevealVariants}>
              <div className="anton-about-head">
                <h3>
                  {copy.about.headingLineOne}
                  <br />
                  <span>{copy.about.headingLineTwo}</span>
                </h3>
                <Link href={owner.cvUrl} className="anton-mini-pill" target="_blank" rel="noopener noreferrer">
                  {copy.about.loadCv}
                </Link>
              </div>
              <p>
                {copy.about.p1}
              </p>
              <p>
                {copy.about.p2}
              </p>

              <div className="anton-stats-grid">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p>{stat.value}</p>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="skills"
        className="anton-section anton-skills"
        variants={sectionRevealVariants}
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "visible"}
        viewport={revealViewport}
      >
        <div className="anton-wrap">
          <motion.div
            className="anton-services-grid"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            initial={prefersReducedMotion ? false : "hidden"}
            whileInView={prefersReducedMotion ? undefined : "visible"}
            viewport={revealViewport}
          >
            {serviceCards.map((service) => (
              <motion.article
                key={service.title}
                className="anton-service-card glass-panel"
                variants={staggerRevealVariants}
                whileHover={prefersReducedMotion ? undefined : { y: -5 }}
              >
                <div className="anton-service-head">
                  <h3>{service.title}</h3>
                  <span className={`anton-service-badge ${service.tone === "primary" ? "is-primary" : "is-secondary"}`}>
                    {service.badge}
                  </span>
                </div>
                <p>{service.description}</p>
                <ul>
                  {service.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>

          <motion.div
            className="anton-skill-map"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 30 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="anton-skill-core glass-panel">
              <p className="anton-core-icon">◌</p>
              <h4>{uiCopy.skillCoreTitle}</h4>
              <span>{uiCopy.skillCoreSub}</span>
            </div>

            <div className="anton-skill-groups">
              {skillGroups.map((group, index) => (
                <motion.article
                  key={group.label}
                  className="anton-skill-group"
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={revealViewport}
                  transition={{
                    duration: 0.5,
                    delay: prefersReducedMotion ? 0 : index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <p className={`anton-skill-label ${group.tone === "primary" ? "is-primary" : "is-secondary"}`}>
                    {group.label}
                  </p>
                  <div className="anton-skill-tags">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="anton-tools-wrap"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{ duration: 0.64, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="anton-tools-title">{uiCopy.toolsInventory}</p>
            <div className="anton-tools-rail" aria-hidden>
              <div className="anton-tools-track">
                {[...toolInventory, ...toolInventory].map((tool, index) => (
                  <span key={`${tool}-${index}`}>{tool}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        id="best-works"
        className="anton-section anton-best-works"
        variants={sectionRevealVariants}
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "visible"}
        viewport={revealViewport}
      >
        <div className="anton-wrap">
          <header className="anton-section-header anton-section-header-left">
            <h2 className="anton-section-title">{copy.sectionTitles.bestWorks}</h2>
            <p className="anton-section-subtitle">{copy.sectionTitles.bestWorksSubtitle}</p>
          </header>

          <div className="anton-best-grid">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.slug}
                className={`anton-best-card ${index === 0 ? "is-large" : ""}`}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={revealViewport}
                transition={{
                  duration: 0.62,
                  delay: prefersReducedMotion ? 0 : index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={prefersReducedMotion ? undefined : { y: -6 }}
              >
                <Image
                  src={project.media.image || "/assets/projects/default.svg"}
                  alt={project.title}
                  fill
                  sizes="(max-width: 960px) 95vw, 60vw"
                  className="anton-best-image"
                />
                <div className="anton-best-overlay" />
                <div className="anton-best-content">
                  <p>{project.subtitle}</p>
                  <h3>{project.title}</h3>
                  <Link href={project.links[0]?.href || `/projects/${project.slug}`}>{uiCopy.viewCaseStudy}</Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="portfolio"
        className="anton-section anton-portfolio"
        variants={sectionRevealVariants}
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "visible"}
        viewport={revealViewport}
      >
        <div className="anton-wrap">
          <header className="anton-section-header">
            <h2 className="anton-section-title">{copy.sectionTitles.portfolio}</h2>
            <p className="anton-section-subtitle">{copy.sectionTitles.portfolioSubtitle}</p>
          </header>

          <motion.div
            className="anton-filter-row"
            role="tablist"
            aria-label={uiCopy.filtersAria}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{ duration: 0.44, ease: [0.22, 1, 0.36, 1] }}
          >
            {PORTFOLIO_FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`anton-filter-pill ${activeFilter === filter ? "is-active" : ""}`}
                onClick={() => setActiveFilter(filter)}
              >
                {copy.filters[filter]}
              </button>
            ))}
          </motion.div>

          <motion.div className="anton-portfolio-timeline" layout>
            <AnimatePresence mode="popLayout" initial={false}>
              {filteredProjects.map((project, index) => (
                <motion.article
                  key={`${activeFilter}-${project.slug}`}
                  className={`anton-portfolio-node ${index % 2 === 0 ? "is-left" : "is-right"}`}
                  layout
                  initial={
                    prefersReducedMotion
                      ? false
                      : { opacity: 0, x: index % 2 === 0 ? -56 : 56, y: 18 }
                  }
                  animate={prefersReducedMotion ? undefined : { opacity: 1, x: 0, y: 0 }}
                  exit={
                    prefersReducedMotion
                      ? undefined
                      : { opacity: 0, x: index % 2 === 0 ? -28 : 28, y: 12 }
                  }
                  transition={{
                    duration: 0.46,
                    delay: prefersReducedMotion ? 0 : index * 0.03,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <span className="anton-portfolio-dot" aria-hidden />
                  <Link
                    href={project.links[0]?.href || `/projects/${project.slug}`}
                    className="anton-portfolio-card glass-panel"
                  >
                    <div className="anton-portfolio-thumb">
                      <Image
                        src={project.media.image || "/assets/projects/default.svg"}
                        alt={project.title}
                        fill
                        sizes="(max-width: 960px) 95vw, 30vw"
                        className="anton-project-image"
                      />
                    </div>
                    <div className="anton-portfolio-meta">
                      <span>{categoryLabels[project.category]}</span>
                      <h3>{project.title}</h3>
                      <p>{project.subtitle}</p>
                      <small>{project.stack.slice(0, 3).join(" · ")}</small>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="anton-more-wrap">
            <a href={SITE.github} target="_blank" rel="noopener noreferrer" className="anton-btn anton-btn-ghost">
              {uiCopy.seeMoreWorks}
            </a>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="anton-section anton-contact"
        variants={sectionRevealVariants}
        initial={prefersReducedMotion ? false : "hidden"}
        whileInView={prefersReducedMotion ? undefined : "visible"}
        viewport={revealViewport}
      >
        <div className="anton-wrap anton-contact-grid">
          <motion.div
            className="anton-contact-left"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="anton-status-pill">{copy.contact.systemOnline}</p>
            <h2>
              {copy.contact.headingOne}
              <br />
              <span>{copy.contact.headingTwo}</span>
            </h2>
            <p>{copy.contact.paragraph}</p>

            <a href={`mailto:${SITE.email}`} className="anton-contact-card">
              <span>{uiCopy.emailLabel}</span>
              <strong>{SITE.email}</strong>
            </a>
            <a href={siteLinks.linkedin} target="_blank" rel="noopener noreferrer" className="anton-contact-card">
              <span>{uiCopy.linkedinLabel}</span>
              <strong>linkedin.com/in/mohamed-ali-bouzir</strong>
            </a>

            <div className="anton-social-row">
              <a href={siteLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                GH
              </a>
              <a href={siteLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                IN
              </a>
              <a href={siteLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="X">
                X
              </a>
              <a href={`mailto:${SITE.email}`} aria-label="Email">
                @
              </a>
            </div>
          </motion.div>

          <motion.form
            className="anton-contact-form glass-panel-strong"
            onSubmit={handleContactSubmit}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{ duration: 0.7, delay: prefersReducedMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3>{copy.contact.transmissionData}</h3>
            <p>
              {copy.contact.secureChannel} <span>{copy.contact.encrypted}</span>
            </p>

            <div className="anton-input-grid">
              <input
                type="text"
                placeholder={copy.contact.placeholders.name}
                value={contact.name}
                onChange={(event) => handleContactChange("name", event.target.value)}
                required
              />
              <input
                type="email"
                placeholder={copy.contact.placeholders.email}
                value={contact.email}
                onChange={(event) => handleContactChange("email", event.target.value)}
                required
              />
              <select
                value={contact.projectType}
                onChange={(event) => handleContactChange("projectType", event.target.value)}
              >
                {projectTypeOptions.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <input
                type="text"
                placeholder={copy.contact.placeholders.budget}
                value={contact.budget}
                onChange={(event) => handleContactChange("budget", event.target.value)}
              />
            </div>

            <textarea
              rows={6}
              placeholder={copy.contact.placeholders.message}
              value={contact.message}
              onChange={(event) => handleContactChange("message", event.target.value)}
              required
            />

            <button type="submit" className="anton-btn anton-btn-submit">
              {copy.contact.submit}
            </button>
            <p className="anton-contact-status">{contactStatus}</p>
          </motion.form>
        </div>
      </motion.section>

      <footer className="anton-footer">
        <div className="anton-footer-logo">
          <span className="anton-logo-primary">MOHAMED</span>
          <span aria-hidden>&nbsp;</span>
          <span className="anton-logo-secondary">ALI</span>
        </div>
        <p>{copy.footer.line}</p>
        <small>© {year}. {copy.footer.copyrightSuffix}</small>
      </footer>
    </main>
  );
}
