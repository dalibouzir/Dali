import type { HomeProject } from "@/content/homeContent";
import type { Project } from "@/content/projects";
import type { Locale } from "@/lib/i18n";

type ProjectTextKeys = Pick<
  Project,
  | "title"
  | "tagline"
  | "summary"
  | "role"
  | "status"
  | "problem"
  | "architecture"
  | "features"
  | "impact"
  | "validation"
  | "limitations"
>;

type HomeProjectTextKeys = Pick<HomeProject, "title" | "subtitle" | "summary" | "role" | "status" | "highlights">;

const PROJECT_TRANSLATIONS: Record<Exclude<Locale, "en">, Record<string, Partial<ProjectTextKeys>>> = {
  fr: {
    weefarm: {
      title: "WeeFarm — Plateforme d'Aide à la Décision Assistée par IA",
      tagline: "Prototype validé pour les opérations de coopératives agricoles",
      summary:
        "Prototype d'assistant orienté preuve combinant analytics SQL factuels, récupération contextuelle RAG, signaux ML consultatifs et composition de réponse structurée avec validation manager.",
      role: "Stagiaire Ingénieur IA — Verdanova Solutions",
      status: "Prototype validé (PFE / démo)",
      problem:
        "Les opérations coopératives avaient besoin d'un support de décision structuré sur le stock, les lots, la traçabilité, la trésorerie et l'export, tout en gardant des preuves factuelles et une revue manager.",
      architecture: [
        "Données opérationnelles PostgreSQL/Supabase",
        "Couche factuelle SQL",
        "Couche contextuelle RAG",
        "Couche consultative ML",
        "Composition finale par LLM",
        "Validation manager humaine",
      ],
      features: [
        "Workflows par rôle pour stock, lots, traçabilité, trésorerie, export, upload de documents et opérations manager.",
        "Orchestration orientée preuve séparant faits SQL, contexte RAG, signaux ML et composition finale.",
        "Améliorations itératives via feedback terrain sur backend, frontend, workflow et assistant.",
      ],
      impact: [
        "Construit avec FastAPI, Next.js, PostgreSQL/Supabase, pgvector, SQLAlchemy, Alembic, Docker, Azure Container Apps et Vercel.",
        "Baseline validée avec 20/20 cas exécutés, 17 PASS / 3 PARTIAL / 0 FAIL, 100% de précision de routage et 0 erreur runtime.",
        "Signaux ML readiness-gated intégrés avec validation stricte train/test, atteignant 0.8412 de recall haut risque.",
      ],
      validation: [
        "20/20 cas d'audit assistant exécutés",
        "17 PASS / 3 PARTIAL / 0 FAIL",
        "100% de précision de routage",
        "0 erreur runtime",
        "0.8412 recall haut risque",
      ],
      limitations: [
        "Prototype validé, non positionné comme automatisation enterprise prête production.",
        "Les signaux ML restent consultatifs et readiness-gated, sans contrôle autonome.",
        "La revue manager humaine reste obligatoire avant exécution opérationnelle.",
      ],
    },
    "ai-business-agent": {
      title: "AI Business Agent — SaaS d'Aide à la Décision",
      tagline: "Récupération RAG, orchestration et workflows de simulation",
      summary:
        "Projet d'aide à la décision IA combinant récupération RAG, orchestration LLM, workflows de simulation et interfaces web avec FastAPI, PostgreSQL/pgvector, OpenSearch, MinIO, Redis et Docker.",
      role: "Projet d'Ingénierie IA",
      status: "Prototype + démo d'architecture",
      problem:
        "Les utilisateurs business avaient besoin de réponses assistant traçables sur des données structurées et semi-structurées, avec récupération déterministe et transparence décisionnelle.",
      architecture: [
        "Services d'orchestration FastAPI",
        "Récupération factuelle/sémantique PostgreSQL + pgvector",
        "Stockage contextuel OpenSearch + MinIO",
        "Workflows de simulation et de routage",
        "UI de composition de réponse structurée",
      ],
      features: [
        "Séparation claire entre récupération, planification de route et composition de réponse.",
        "Flux hybride multi-source via PostgreSQL/pgvector, OpenSearch et object storage.",
        "Hooks d'observabilité pour inspection de latence et comportement de route.",
      ],
      impact: [
        "Architecture end-to-end livrée avec orchestration backend et surfaces web.",
        "Workflows orientés scénarios pour expérimentations de support décisionnel.",
        "Traçabilité mesurable via frontières de récupération et réponse structurée.",
      ],
      limitations: [
        "Positionnement prototype avec posture de sortie consultative.",
        "Résultats d'évaluation dépendants du contexte et du workflow.",
        "Les décisions opérationnelles requièrent une revue humaine.",
      ],
    },
    affa: {
      title: "AFFA — Assistant Automatisé de Fantasy Football",
      tagline: "Prototype de recommandation ML pour décisions hebdomadaires",
      summary:
        "Prototype de recommandation ML avec services Python, flux API, comparaison de joueurs et workflows de recommandation.",
      role: "Prototype Consultatif ML",
      status: "Expérimentation + prototype produit",
      problem:
        "Les utilisateurs fantasy avaient besoin de recommandations explicables pour le XI hebdomadaire face à l'évolution des statistiques et calendriers.",
      architecture: [
        "Services d'ingestion de données Python",
        "Feature engineering et scoring joueurs",
        "Couche API de recommandation (Flask/FastAPI)",
        "Évaluation/monitoring via MLflow, Elasticsearch et Kibana",
      ],
      features: [
        "Workflows consultatifs avec traçage d'expériences modèles.",
        "Ingestion API pour génération de features structurées.",
        "Vues de monitoring pour inspection de tendances et itération.",
      ],
      impact: [
        "Prototype de recommandation opérationnel avec API et UI de démonstration.",
        "Traçabilité d'expérimentation et boucle d'itération via stack monitoring.",
        "Connexion des data feeds et logique de reco en boucle consultative répétable.",
      ],
      limitations: [
        "La recommandation reste consultative et non garantie en performance compétitive.",
        "La fraîcheur des données et dynamique de ligue peuvent affecter la qualité.",
        "Le scope d'évaluation prototype est plus restreint qu'un contexte production.",
      ],
    },
    quirkhire: {
      title: "QuirkHire — Prototype de Recommandation de CV",
      tagline: "Workflows de recommandation orientés recruteur",
      summary:
        "Prototype de recommandation de CV assisté IA avec workflows recruteur sous React, Django/DRF et Supabase.",
      role: "Prototype Produit IA",
      status: "Prototype workflow",
      problem:
        "Les recruteurs et centres carrière avaient besoin d'un support structuré pour trier les CV et shortlister avec une logique de classement plus explicite.",
      architecture: [
        "Interface recruteur React",
        "APIs backend Django/DRF",
        "Flux de données Supabase",
        "Pipeline de recommandation pour ranking shortlist",
      ],
      features: [
        "Écrans workflow recruteur pour revue des recommandations et shortlist.",
        "Logique de recommandation avec sorties adaptées à la revue humaine.",
        "Intégration web pour expérimentation pratique côté recrutement.",
      ],
      impact: [
        "Prototype orienté rôle livré pour workflow de recommandation.",
        "Comparaison recruteur améliorée avec meilleure lisibilité des recommandations.",
        "Démonstration d'intégration IA dans un workflow UI réel.",
      ],
      limitations: [
        "La couche de recommandation prototype nécessite un calibrage domaine supplémentaire.",
        "Les décisions finales de recrutement restent humaines.",
        "La profondeur d'évaluation dépend des données de recrutement labellisées.",
      ],
    },
    "elyosdigital-powergym": {
      title: "PowerGym — Plateforme de Stage ElyosDigital",
      tagline: "Workflows de gestion de salle avec médias opérationnels réels",
      summary:
        "Projet de stage Laravel pour adhésions, abonnements, planning et opérations administratives sécurisées.",
      role: "Stagiaire Développement Web",
      status: "Système de stage livré",
      problem:
        "Les opérateurs de salle avaient besoin de workflows database-driven pour abonnements, séances, planning coach et administration quotidienne.",
      architecture: [
        "Modules backend Laravel",
        "Persistance MySQL",
        "Interfaces admin adhésions/séances",
        "Opérations back-office sécurisées",
      ],
      features: [
        "Implémentation des workflows adhésions, abonnements et planning coach.",
        "Surfaces CRUD admin pour membres, coachs, séances et opérations.",
        "Captures réelles d'interfaces et processus pendant le stage.",
      ],
      impact: [
        "Digitalisation de tâches auparavant gérées manuellement.",
        "Visibilité améliorée des plannings et mises à jour administratives.",
        "Baseline sécurisée livrée pour coordination opérationnelle.",
      ],
      limitations: [
        "Projet web opérationnel, non positionné comme cas IA flagship.",
        "Scope média et workflow lié au contexte de stage.",
        "Toute extension IA future nécessite modélisation métier supplémentaire.",
      ],
    },
    "meriem-booking": {
      title: "Meriem Booking (Fittrah Moms)",
      tagline: "Plateforme de planification et réservation thérapeute",
      summary:
        "Projet de workflow de réservation Next.js + Supabase pour planning thérapeutes, réservation utilisateur et administration opérationnelle.",
      role: "Projet Full-stack livré",
      status: "Workflow web livré",
      problem:
        "La plateforme nécessitait un flux concret de planification/réservation thérapeute-client avec visibilité opérationnelle admin.",
      architecture: [
        "Flux frontend Next.js",
        "Intégration data/auth Supabase",
        "Logique de disponibilité et réservation dynamique",
        "Opérations admin de planification",
      ],
      features: [
        "Workflow de réservation thérapeute aligné calendrier et disponibilité.",
        "Parcours UI responsive côté utilisateur et opérateur.",
        "Vues d'administration pour coordination des rendez-vous.",
      ],
      impact: [
        "Workflow de réservation complet livré, de la demande au suivi de session.",
        "Clarté opérationnelle améliorée via centralisation de la planification.",
        "Patterns full-stack réutilisables fournis pour plateformes de service.",
      ],
      limitations: [
        "Projet workflow non positionné comme cas IA flagship.",
        "Toute extension IA requiert une évaluation métier supplémentaire.",
        "La télémétrie production et validation de charge n'étaient pas dans le scope.",
      ],
    },
  },
  ar: {
    weefarm: {
      title: "WeeFarm — منصة دعم قرار مدعومة بالذكاء الاصطناعي",
      tagline: "نموذج أولي مُحقق لعمليات التعاونيات الفلاحية",
      summary:
        "نموذج مساعد قائم على الأدلة يجمع بين تحليلات SQL الدقيقة واسترجاع RAG السياقي وإشارات ML الاستشارية وتركيب ردود منظم مع مراجعة المدير.",
      role: "متدرب مهندس ذكاء اصطناعي — Verdanova Solutions",
      status: "نموذج أولي مُحقق (PFE / Demo)",
      problem:
        "احتاجت العمليات التعاونية إلى دعم قرار منظم في المخزون والدفعات والتتبع والخزينة والتصدير مع الحفاظ على الأدلة الواقعية والمراجعة البشرية.",
      architecture: [
        "بيانات تشغيلية PostgreSQL/Supabase",
        "طبقة حقائق SQL",
        "طبقة سياق RAG",
        "طبقة إشارات ML استشارية",
        "تركيب الرد النهائي عبر LLM",
        "مراجعة مدير بشرية",
      ],
      features: [
        "مسارات عمل حسب الدور للمخزون والدفعات والتتبع والخزينة والتصدير ورفع الوثائق وعمليات المدير.",
        "Orchestration قائم على الأدلة يفصل بين حقائق SQL وسياق RAG وإشارات ML وتركيب الرد.",
        "تحسينات تكرارية مبنية على Feedback ميداني في backend وfrontend والworkflow.",
      ],
      impact: [
        "تم البناء باستخدام FastAPI وNext.js وPostgreSQL/Supabase وpgvector وSQLAlchemy وAlembic وDocker وAzure Container Apps وVercel.",
        "تم التحقق من baseline عبر 20/20 حالة، 17 PASS / 3 PARTIAL / 0 FAIL، ودقة توجيه 100%، و0 أخطاء runtime.",
        "إدماج إشارات ML readiness-gated مع تحقق صارم train/test وتحقيق recall مرتفع المخاطر 0.8412.",
      ],
      validation: [
        "20/20 حالات تدقيق منفذة",
        "17 PASS / 3 PARTIAL / 0 FAIL",
        "دقة توجيه 100%",
        "0 أخطاء runtime",
        "0.8412 recall مرتفع المخاطر",
      ],
      limitations: [
        "نموذج أولي مُحقق وليس أتمتة enterprise جاهزة للإنتاج.",
        "إشارات ML استشارية وreadiness-gated وليست تحكمًا ذاتيًا.",
        "مراجعة المدير البشرية إلزامية قبل التنفيذ التشغيلي.",
      ],
    },
    "ai-business-agent": {
      title: "AI Business Agent — منصة SaaS لدعم القرار",
      tagline: "استرجاع RAG وOrchestration ومسارات محاكاة",
      summary:
        "مشروع دعم قرار بالذكاء الاصطناعي يجمع بين استرجاع RAG وOrchestration عبر LLM ومسارات محاكاة وواجهات ويب باستخدام FastAPI وPostgreSQL/pgvector وOpenSearch وMinIO وRedis وDocker.",
      role: "مشروع هندسة ذكاء اصطناعي",
      status: "نموذج أولي + عرض معماري",
      problem:
        "احتاج المستخدمون في الأعمال إلى ردود قابلة للتتبع على بيانات منظمة وشبه منظمة مع استرجاع حتمي وشفافية في دعم القرار.",
      architecture: [
        "خدمات Orchestration عبر FastAPI",
        "استرجاع واقعي/دلالي عبر PostgreSQL + pgvector",
        "تخزين سياقي عبر OpenSearch وMinIO",
        "مسارات محاكاة وتوجيه",
        "واجهة تركيب رد منظم",
      ],
      features: [
        "فصل واضح بين الاسترجاع وتخطيط المسار وتركيب الرد.",
        "تكامل تدفق هجين عبر PostgreSQL/pgvector وOpenSearch وObject Storage.",
        "Hooks للرصد لمتابعة السلوك والزمن.",
      ],
      impact: [
        "تسليم معمارية End-to-End مع Orchestration خلفي وواجهات ويب.",
        "تمكين مسارات سيناريو عملية لتجارب دعم القرار.",
        "توفير تتبع قابل للقياس عبر حدود الاسترجاع والرد المنظم.",
      ],
      limitations: [
        "المشروع في إطار Prototype ومخرجاته استشارية.",
        "نتائج التقييم تعتمد على السياق ونوع workflow.",
        "القرارات التشغيلية تتطلب مراجعة بشرية.",
      ],
    },
    affa: {
      title: "AFFA — مساعد Fantasy Football آلي",
      tagline: "نموذج توصية ML لقرارات أسبوعية",
      summary:
        "نموذج توصية ML بخدمات Python وتدفقات API ومقارنة اللاعبين ومسارات التوصية.",
      role: "نموذج ML استشاري",
      status: "تجربة + نموذج منتج",
      problem:
        "احتاج مستخدمو fantasy football إلى توصيات مفهومة أسبوعيًا مع تغير الإحصائيات والجدول.",
      architecture: [
        "خدمات Python لجلب البيانات",
        "Feature engineering وتقييم اللاعبين",
        "طبقة API للتوصية (Flask/FastAPI)",
        "تقييم ورصد عبر MLflow وElasticsearch وKibana",
      ],
      features: [
        "مسارات توصية استشارية مع تتبع تجارب النماذج.",
        "Ingestion عبر API لتوليد Features منظمة.",
        "واجهات Monitoring لفهم الاتجاهات والتحسين.",
      ],
      impact: [
        "تسليم نموذج توصية عملي مع API وواجهة جاهزة للعرض.",
        "تعزيز التتبع التجريبي وحلقة التحسين عبر Stack الرصد.",
        "ربط Data feeds بمنطق التوصية في دورة استشارية قابلة للتكرار.",
      ],
      limitations: [
        "التوصيات استشارية وغير مضمونة للتفوق التنافسي.",
        "تحديث البيانات وديناميكية الدوري قد تؤثر على الجودة.",
        "نطاق التقييم في النموذج الأولي أضيق من بيئة Production.",
      ],
    },
    quirkhire: {
      title: "QuirkHire — نموذج توصية السيرة الذاتية",
      tagline: "مسارات توصية موجهة للمُوظِّف",
      summary:
        "نموذج توصية سيرة ذاتية بالذكاء الاصطناعي مع مسارات عمل للتوظيف باستخدام React وDjango/DRF وSupabase.",
      role: "نموذج منتج ذكاء اصطناعي",
      status: "نموذج Workflow",
      problem:
        "احتاج مسؤولو التوظيف إلى دعم منظم لفرز السير الذاتية واختيار المرشحين مع منطق ترتيب أوضح.",
      architecture: [
        "واجهة React للتوظيف",
        "APIs خلفية عبر Django/DRF",
        "تدفق بيانات Supabase",
        "Pipeline توصية لترتيب Shortlist",
      ],
      features: [
        "تصميم شاشات workflow لمراجعة التوصيات واختيار المرشحين.",
        "منطق توصية يدعم المراجعة البشرية بشكل واضح.",
        "تدفق منتج ويب عملي لتجربة الدعم في التوظيف.",
      ],
      impact: [
        "تسليم نموذج توصية موجه حسب الدور.",
        "تحسين المقارنة لدى المُوظِّف بعرض توصيات أوضح.",
        "إثبات دمج مساعدات IA داخل workflow واقعي.",
      ],
      limitations: [
        "طبقة التوصية تحتاج معايرة إضافية حسب المجال.",
        "قرار التوظيف النهائي يبقى بشريًا.",
        "عمق التقييم يعتمد على توفر بيانات توظيف مُعنونة.",
      ],
    },
    "elyosdigital-powergym": {
      title: "PowerGym — منصة تدريب ElyosDigital",
      tagline: "مسارات إدارة نادي رياضي بوسائط تشغيلية حقيقية",
      summary:
        "مشروع تدريب Laravel لإدارة الاشتراكات والجداول والعمليات الإدارية الآمنة.",
      role: "متدرب تطوير ويب",
      status: "نظام تدريب مُسلّم",
      problem:
        "احتاجت إدارة النادي إلى مسارات عمل قائمة على قاعدة بيانات للاشتراكات والحصص وجدولة المدربين والإدارة اليومية.",
      architecture: [
        "وحدات Backend عبر Laravel",
        "تخزين MySQL",
        "واجهات Admin للاشتراكات والحصص",
        "عمليات Back-office آمنة",
      ],
      features: [
        "تنفيذ مسارات الاشتراك وجدولة المدربين.",
        "بناء واجهات CRUD للإدارة اليومية.",
        "توثيق وسائط حقيقية أثناء تنفيذ المشروع.",
      ],
      impact: [
        "رقمنة عمليات كانت تُدار يدويًا.",
        "تحسين رؤية الجداول والتحديثات الإدارية.",
        "تسليم خط أساس آمن للتنسيق التشغيلي.",
      ],
      limitations: [
        "مشروع ويب تشغيلي وليس حالة IA رئيسية.",
        "نطاق الوسائط والworkflow مرتبط بسياق التدريب.",
        "أي توسيع IA مستقبلًا يتطلب نمذجة مجال إضافية.",
      ],
    },
    "meriem-booking": {
      title: "Meriem Booking (Fittrah Moms)",
      tagline: "منصة حجز وجدولة للمعالِجات",
      summary:
        "مشروع حجز وجدولة عبر Next.js وSupabase يشمل مواعيد المعالِجات والحجز من المستخدم والإدارة التشغيلية.",
      role: "مشروع تسليم Full-stack",
      status: "Workflow ويب مُسلّم",
      problem:
        "احتاجت المنصة إلى مسار حجز وجدولة عملي بين المعالِجة والعميل مع رؤية واضحة للإدارة.",
      architecture: [
        "تدفق Frontend عبر Next.js",
        "دمج بيانات ومصادقة عبر Supabase",
        "منطق توفر وحجز ديناميكي",
        "عمليات Admin للجدولة",
      ],
      features: [
        "تنفيذ Workflow حجز متوافق مع التقويم والتوفر.",
        "مسارات UI responsive للمستخدم والإدارة.",
        "واجهات إدارة لتنسيق المواعيد.",
      ],
      impact: [
        "تسليم Workflow حجز كامل من الطلب حتى تتبع الجلسة.",
        "تحسين وضوح العمليات عبر مركزية الجدولة.",
        "تقديم أنماط Full-stack قابلة لإعادة الاستخدام لمنصات الخدمة.",
      ],
      limitations: [
        "منصة workflow وليست حالة IA رئيسية.",
        "إضافة IA مستقبلًا تتطلب تقييمًا مجاليًا إضافيًا.",
        "Telemetry إنتاجي واختبارات ضغط ليست ضمن النطاق الحالي.",
      ],
    },
  },
};

const HOME_PROJECT_TRANSLATIONS: Record<Exclude<Locale, "en">, Record<string, Partial<HomeProjectTextKeys>>> = {
  fr: {
    weefarm: {
      subtitle: "Plateforme d'aide à la décision assistée IA pour coopératives agricoles",
      summary:
        "Architecture assistant orientée preuve combinant faits SQL, contexte RAG, signaux ML consultatifs et revue manager.",
      role: "Stagiaire Ingénieur IA",
      status: "Prototype validé",
      highlights: [
        "20/20 cas validés, 100% de précision de routage, 0 erreur runtime.",
        "Workflows opérationnels par rôle pour managers et équipes coopératives.",
        "Signaux ML readiness-gated intégrés dans la composition de réponse.",
      ],
    },
    "ai-business-agent": {
      subtitle: "Projet d'aide à la décision avec récupération et simulation",
      summary:
        "Projet IA combinant récupération RAG, orchestration LLM, workflows de simulation et interfaces web.",
      status: "Prototype + démo architecture",
      highlights: [
        "Pipelines de récupération et réponse structurés pour usage business.",
        "Workflows orientés scénario avec justification traçable.",
        "Visibilité opérationnelle via instrumentation et télémétrie.",
      ],
    },
    affa: {
      subtitle: "Prototype ML de recommandation pour décisions fantasy football",
      summary:
        "Prototype de recommandation ML avec services Python, flux API et comparaison de joueurs.",
      role: "Prototype ML consultatif",
      status: "Expérimentation + prototype produit",
      highlights: [
        "Recommandations consultatives orientées décision hebdomadaire.",
        "Évaluation de modèles et monitoring des résultats.",
        "Intégration API avec sources de données football.",
      ],
    },
    quirkhire: {
      subtitle: "Prototype de recommandation CV pour workflows recruteur",
      summary:
        "Prototype de recommandation CV assisté IA pour triage recruteur.",
      role: "Prototype produit IA",
      status: "Prototype workflow",
      highlights: [
        "Support workflow pour triage et shortlist recruteur.",
        "Logique de recommandation lisible et revue-friendly.",
        "Flux web aligné sur des usages recrutement réels.",
      ],
    },
    "elyosdigital-powergym": {
      subtitle: "Workflows de salle développés pendant le stage ElyosDigital",
      summary:
        "Plateforme Laravel pour adhésions, planning et administration avec médias opérationnels réels.",
      role: "Stagiaire Développement Web",
      status: "Système livré",
      highlights: [
        "Workflows adhésion et abonnement implémentés.",
        "Modules de planning coach/séance et administration.",
        "Vues de gestion sécurisées adossées base de données.",
      ],
    },
    "meriem-booking": {
      subtitle: "Plateforme de réservation et planning thérapeutes",
      summary:
        "Projet full-stack de réservation avec disponibilité dynamique et administration opérationnelle.",
      role: "Projet full-stack livré",
      status: "Workflow web livré",
      highlights: [
        "Workflow de réservation thérapeute et planning dynamique.",
        "Interfaces user/admin réactives et claires.",
        "Preuves UI capturées sur flux de production simulée.",
      ],
    },
  },
  ar: {
    weefarm: {
      subtitle: "منصة دعم قرار بالذكاء الاصطناعي للتعاونيات الفلاحية",
      summary:
        "معمارية مساعد قائمة على الأدلة تجمع بين حقائق SQL وسياق RAG وإشارات ML الاستشارية ومراجعة المدير.",
      role: "متدرب مهندس ذكاء اصطناعي",
      status: "نموذج أولي مُحقق",
      highlights: [
        "20/20 حالات تحقق، دقة توجيه 100%، و0 أخطاء runtime.",
        "مسارات عمل حسب الدور للمدير والفرق التشغيلية.",
        "إشارات ML readiness-gated داخل تركيب الرد النهائي.",
      ],
    },
    "ai-business-agent": {
      subtitle: "مشروع دعم قرار مع استرجاع ومحاكاة",
      summary:
        "مشروع IA يجمع بين RAG وOrchestration عبر LLM ومسارات محاكاة وواجهات ويب.",
      status: "نموذج أولي + عرض معماري",
      highlights: [
        "Pipelines استرجاع ورد منظم لاستخدامات الأعمال.",
        "مسارات سيناريو مع تفسير قابل للتتبع.",
        "رؤية تشغيلية عبر instrumentation وtelemetry.",
      ],
    },
    affa: {
      subtitle: "نموذج توصية ML لقرارات fantasy football",
      summary:
        "نموذج توصية ML بخدمات Python وتدفقات API ومقارنة اللاعبين.",
      role: "نموذج ML استشاري",
      status: "تجربة + نموذج منتج",
      highlights: [
        "توصيات استشارية موجهة لقرار أسبوعي.",
        "تقييم نماذج ورصد الأداء بشكل مستمر.",
        "دمج API مع مصادر بيانات كرة القدم.",
      ],
    },
    quirkhire: {
      subtitle: "نموذج توصية سير ذاتية لمسارات التوظيف",
      summary:
        "نموذج توصية سيرة ذاتية بالذكاء الاصطناعي لفرز المرشحين.",
      role: "نموذج منتج IA",
      status: "نموذج Workflow",
      highlights: [
        "دعم workflow لفرز واختيار المرشحين.",
        "منطق توصية واضح ومناسب للمراجعة البشرية.",
        "تدفق ويب عملي متوافق مع احتياجات التوظيف.",
      ],
    },
    "elyosdigital-powergym": {
      subtitle: "مسارات تشغيل النادي أثناء تدريب ElyosDigital",
      summary:
        "منصة Laravel لإدارة الاشتراكات والجدولة والإدارة مع وسائط تشغيلية حقيقية.",
      role: "متدرب تطوير ويب",
      status: "نظام مُسلّم",
      highlights: [
        "تنفيذ مسارات الاشتراك والعضوية.",
        "تطوير وحدات جدولة المدربين والحصص.",
        "تسليم لوحات إدارة آمنة ومعتمدة على قاعدة بيانات.",
      ],
    },
    "meriem-booking": {
      subtitle: "منصة حجز وجدولة للمعالِجات",
      summary:
        "مشروع full-stack للحجز مع توفر ديناميكي وإدارة تشغيلية.",
      role: "مشروع full-stack مُسلّم",
      status: "Workflow ويب مُسلّم",
      highlights: [
        "تنفيذ workflow حجز وجدولة متكامل.",
        "واجهات user/admin responsive وواضحة.",
        "توثيق مرئي لسير العمل على واجهات المشروع.",
      ],
    },
  },
};

export function localizeProject(project: Project, locale: Locale): Project {
  if (locale === "en") {
    return project;
  }

  const translation = PROJECT_TRANSLATIONS[locale][project.slug];
  if (!translation) {
    return project;
  }

  return {
    ...project,
    ...translation,
    architecture: translation.architecture ?? project.architecture,
    features: translation.features ?? project.features,
    impact: translation.impact ?? project.impact,
    validation: translation.validation ?? project.validation,
    limitations: translation.limitations ?? project.limitations,
  };
}

export function localizeProjects(allProjects: Project[], locale: Locale): Project[] {
  if (locale === "en") {
    return allProjects;
  }

  return allProjects.map((project) => localizeProject(project, locale));
}

export function localizeHomeProject(project: HomeProject, locale: Locale): HomeProject {
  if (locale === "en") {
    return project;
  }

  const translation = HOME_PROJECT_TRANSLATIONS[locale][project.slug];
  if (!translation) {
    return project;
  }

  return {
    ...project,
    ...translation,
    highlights: translation.highlights ?? project.highlights,
  };
}

export function localizeHomeProjects(homeProjects: HomeProject[], locale: Locale): HomeProject[] {
  if (locale === "en") {
    return homeProjects;
  }

  return homeProjects.map((project) => localizeHomeProject(project, locale));
}
