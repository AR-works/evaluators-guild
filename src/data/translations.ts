export type Language = 'en' | 'es' | 'fr' | 'ja' | 'it' | 'de' | 'pt';

export interface TranslationDict {
  nav: {
    home: string;
    resources: string;
    communityVoices: string;
    guidelines: string;
    joinCommunity: string;
    platforms: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    ctaJoin: string;
    ctaExplore: string;
    badgeText: string;
  };
  stats: {
    membersLabel: string;
    globalVal: string;
    globalLabel: string;
    discussionsVal: string;
    discussionsLabel: string;
    growingVal: string;
    growingLabel: string;
  };
  whyJoin: {
    title: string;
    subtitle: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
    card4Title: string;
    card4Desc: string;
    card5Title: string;
    card5Desc: string;
    card6Title: string;
    card6Desc: string;
    step1Tag: string;
    step1Title: string;
    step1Desc: string;
    step2Tag: string;
    step2Title: string;
    step2Desc: string;
    step3Tag: string;
    step3Title: string;
    step3Desc: string;
  };
  platforms: {
    title: string;
    subtitle: string;
    discord: string;
    reddit: string;
    twitter: string;
    instagram: string;
    linkedin: string;
    facebook: string;
    vettedData: string;
    vettedTitle: string;
    vettedSubtitle: string;
    dataannotationDesc: string;
    outlierDesc: string;
    alignerrDesc: string;
    chatCodingSearch: string;
    rlhfMultimodal: string;
    writingMathCode: string;
    mediumHigh: string;
    highVetting: string;
    skillExams: string;
  };
  communityVoices: {
    title: string;
    subtitle: string;
    comingSoon: string;
    readMore: string;
  };
  resources: {
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    all: string;
    gettingStarted: string;
    resumePrep: string;
    platformGuides: string;
    bestPractices: string;
    readArticle: string;
  };
  guidelines: {
    title: string;
    subtitle: string;
    rule1Title: string;
    rule1Desc: string;
    rule2Title: string;
    rule2Desc: string;
    rule3Title: string;
    rule3Desc: string;
    rule4Title: string;
    rule4Desc: string;
  };
  footer: {
    desc: string;
    community: string;
    quickLinks: string;
    contact: string;
    info: string;
    about: string;
    editorialPolicy: string;
    privacy: string;
    terms: string;
    rights: string;
  };
heroCard: {
    activeCommunity: string;
    liveSubtitle: string;
    members: string;
    discussions: string;
    globalDesc: string;
    joinDiscord: string;
    topPlatforms: string;
  };
  ui: {
    viewAllGuides: string;
    readGuide: string;
    joinCommunity: string;
    questionsPlatform: string;
    discordSubtitle: string;
    remote: string;
    locationRequired: string;
    payRange: string;
    interview: string;
    interviewType: string;
    readingTime: string;
    lastReviewed: string;
    tags: string;
    quickOverview: string;
    contents: string;
    relatedContent: string;
    careerGuides: string;
    comparisons: string;
    resources: string;
    independentDatabase: string;
    platformsReviewed: string;
    editorialStandard: string;
    payApproximate: string;
    independentNode: string;
    noCorporateBS: string;
    vettedData: string;
    vettedPlatformTitle: string;
    vettedPlatformSubtitle: string;
    connectEvaluators: string;
    connectSubtitle: string;
    joinDiscordCrew: string;
    low: string;
    medium: string;
    high: string;
    resumeVetting: string;
    aiEvaluationPlatform: string;
    varies: string;
  };
}

export const translations: Record<Language, TranslationDict> = {
  en: {
    nav: {
      home: 'Home',
      resources: 'Resources',
      communityVoices: 'Community Voices',
      guidelines: 'Guidelines',
      joinCommunity: 'Join Community',
      platforms: 'Platform Guides'
    },
    hero: {
      headline: 'The independent home for AI evaluators and remote freelancers.',
      subheadline: 'Ask questions, compare platforms, discover opportunities, and build professional support across the AI freelance ecosystem.',
      ctaJoin: 'Join Our Community',
      ctaExplore: 'Explore the Guild',
      badgeText: 'Community-first and non-aligned'
    },
    stats: {
      membersLabel: 'Members',
      globalVal: 'Global',
      globalLabel: 'Community',
      discussionsVal: '24/7',
      discussionsLabel: 'Discussions',
      growingVal: 'Growing',
      growingLabel: 'Every Day'
    },
    whyJoin: {
      title: 'Why Join Talent Collective?',
      subtitle: 'A neutral space for AI evaluators, trainers, annotators, prompt engineers, students, recruiters, and companies.',
      card1Title: 'Job Leads & Referrals',
      card1Desc: 'Get vetted contract gigs, micro-tasking updates, and referral links to leading AI companies.',
      card2Title: 'Global Networking',
      card2Desc: 'Connect with fellow evaluators across continents, sharing market rates and application tricks.',
      card3Title: 'Support & Mentorship',
      card3Desc: 'Navigate platform guidelines, onboarding problems, and taxes with experienced peers.',
      card4Title: 'Interview Preparation',
      card4Desc: 'Access guides, practice tasks, and evaluation rubrics to ace screening exams.',
      card5Title: 'Industry Discussions',
      card5Desc: 'Analyze AI model trends, prompt engineering, guidelines updates, and freelancing shifts.',
      card6Title: 'Language Channels',
      card6Desc: 'Access regional channels and localized discussion rooms for non-English evaluators.',
      step1Tag: 'Prep & Materials',
      step1Title: 'Preparation & Platform Context',
      step1Desc: 'Use research-backed guides to understand interviews, pay ranges, task types, verification steps, and realistic expectations before applying.',
      step2Tag: 'Community Hub',
      step2Title: 'Peer Support & Vetted Leads',
      step2Desc: 'Connect with a global network of remote professionals while keeping job posts, recruiter access, and referral links accountable to community safety.',
      step3Tag: 'Professional Growth',
      step3Title: 'Market Intelligence',
      step3Desc: 'Discuss payment models, empty queues, platform diversification, guideline changes, and long-term AI freelance strategy with experienced contributors.'
    },
    platforms: {
      title: 'Where to Find Us',
      subtitle: 'Our community lives across multiple platforms. Pick the one that works for you.',
      discord: 'Discord',
      reddit: 'Reddit',
      twitter: 'Twitter / X',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      facebook: 'Facebook',
      vettedData: 'Vetted Data',
      vettedTitle: 'Vetted platform intelligence.',
      vettedSubtitle: 'Compare pay scales, assessment difficulty, project types, and research confidence before applying.',
      dataannotationDesc: 'Beginner-friendly conversation rating and annotation work with weekly PayPal payments.',
      outlierDesc: 'Massive scale platform owned by Scale AI. High pay but rigorous quality checks.',
      alignerrDesc: 'Specialized evaluation platform focusing on high-accuracy domain data.',
      chatCodingSearch: 'Chat, Coding, Search',
      rlhfMultimodal: 'RLHF, Multimodal',
      writingMathCode: 'Writing, Math, Code',
      mediumHigh: 'Medium-High',
      highVetting: 'High Vetting',
      skillExams: 'Skill Exams'
    },
    communityVoices: {
      title: 'Community Voices',
      subtitle: 'Stories and lessons from AI freelancers across platforms, not a single company channel.',
      comingSoon: 'Community voices are coming soon. Check back shortly.',
      readMore: 'Read more'
    },
    resources: {
      title: 'Resources Hub',
      subtitle: 'Mission notes, platform research, pay benchmarks, safety guides, and practical resources for AI freelancers.',
      searchPlaceholder: 'Search articles, platform guides, prep kits...',
      all: 'All Resources',
      gettingStarted: 'Getting Started',
      resumePrep: 'Resume & Prep',
      platformGuides: 'Platform Guides',
      bestPractices: 'Best Practices',
      readArticle: 'Read Guide'
    },
    guidelines: {
      title: 'Community Guidelines',
      subtitle: 'Talent Collective stays useful by protecting honest discussion, neutral platform comparison, and member safety.',
      rule1Title: 'Professionalism First',
      rule1Desc: 'Share constructive insights, maintain accurate details, and separate verified facts from community reports.',
      rule2Title: 'Unwavering Respect',
      rule2Desc: 'We have zero tolerance for discrimination, harassment, or flame wars. We celebrate diversity.',
      rule3Title: 'Active Collaboration',
      rule3Desc: 'Share resources, help peers onboard, and answer questions. We lift each other up.',
      rule4Title: 'No Scams or Spam',
      rule4Desc: 'No fake recruiters, MLM schemes, referral spam, unvetted paid gigs, code sharing, or NDA violations.'
    },
    footer: {
      desc: 'The professional association and community network for AI annotators, evaluators, and distributed remote freelancers.',
      community: 'Community',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      info: 'Information',
      about: 'About',
      editorialPolicy: 'Editorial policy',
      privacy: 'Privacy',
      terms: 'Terms',
      rights: 'All rights reserved.'
    },
    heroCard: {
      activeCommunity: 'Active Community',
      liveSubtitle: 'Live • Global • Growing',
      members: 'Members',
      discussions: 'Discussions',
      globalDesc: '🌏 Global — AI Evaluators · RLHF · Remote Pros',
      joinDiscord: 'Join the Discord',
      topPlatforms: 'Top Platforms'
    },
    ui: {
      viewAllGuides: 'View all guides',
      readGuide: 'Read Guide',
      joinCommunity: 'Join the Community',
      questionsPlatform: 'Questions about this platform?',
      discordSubtitle: 'Join our community to get answers from people actively working there.',
      remote: 'Remote',
      locationRequired: 'Location Required',
      payRange: 'Pay Range',
      interview: 'Interview',
      interviewType: 'Interview Type',
      readingTime: 'Reading Time',
      lastReviewed: 'Last Reviewed',
      tags: 'Tags',
      quickOverview: 'Quick Overview',
      contents: 'Contents',
      relatedContent: 'Related Content',
      careerGuides: 'Career Guides',
      comparisons: 'Comparisons',
      resources: 'Resources',
      independentDatabase: 'Independent Database',
      platformsReviewed: 'platforms reviewed & updated regularly',
      editorialStandard: 'All guides follow the Talent Collective editorial standard. Every claim is labelled with its confidence source: Official, Verified, Supported by Community, or Unknown.',
      payApproximate: 'Pay ranges are approximate, time-sensitive, and vary by role, platform demand, location, and contributor expertise. No data is fabricated.',
      independentNode: 'Independent & Non-Aligned Node',
      noCorporateBS: 'Your crew in AI freelancing. No corporate BS.',
      vettedData: 'Vetted Data',
      vettedPlatformTitle: 'Vetted platform intelligence.',
      vettedPlatformSubtitle: 'Compare pay scales, assessment difficulties, and project types before applying. Vetted by active community members.',
      connectEvaluators: 'Connect with AI Evaluators.',
      connectSubtitle: 'Get support, compare projects, avoid scams, and stay ahead of empty queues with a neutral global community.',
      joinDiscordCrew: 'Join the Discord Crew',
      low: 'Low',
      medium: 'Medium',
      high: 'High',
      resumeVetting: 'Resume Vetting',
      aiEvaluationPlatform: 'AI Evaluation Platform',
      varies: 'Varies'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      resources: 'Recursos',
      communityVoices: 'Voces de la Comunidad',
      guidelines: 'Directrices',
      joinCommunity: 'Unirse a la Comunidad',
      platforms: 'Guías de Plataformas'
    },
    hero: {
      headline: 'Tu hogar para evaluadores de IA y profesionales remotos.',
      subheadline: 'Conéctate con otros evaluadores, descubre oportunidades, comparte recursos y crezcan juntos en una comunidad global.',
      ctaJoin: 'Unirse a la Comunidad',
      ctaExplore: 'Explorar el Gremio',
      badgeText: 'La Red Global para Profesionales Remotos'
    },
    stats: {
      membersLabel: 'Miembros',
      globalVal: 'Global',
      globalLabel: 'Comunidad',
      discussionsVal: '24/7',
      discussionsLabel: 'Discusiones',
      growingVal: 'Creciendo',
      growingLabel: 'Cada Día'
    },
    whyJoin: {
      title: '¿Por qué unirse al Gremio?',
      subtitle: 'Proporcionamos la infraestructura, recursos y conexiones que necesitas para tener éxito como evaluador remoto.',
      card1Title: 'Oportunidades y Recomendaciones',
      card1Desc: 'Accede a contratos verificados, actualizaciones de microtareas y enlaces de recomendación para empresas líderes de IA.',
      card2Title: 'Red de Contactos Global',
      card2Desc: 'Conéctate con evaluadores de todos los continentes, compartiendo tarifas de mercado y trucos de postulación.',
      card3Title: 'Soporte y Mentoría',
      card3Desc: 'Navega por las directrices de las plataformas, problemas de incorporación y declaración de impuestos con compañeros experimentados.',
      card4Title: 'Preparación para Entrevistas',
      card4Desc: 'Accede a guías, tareas de práctica y rúbricas de evaluación para superar los exámenes de selección.',
      card5Title: 'Debates de la Industria',
      card5Desc: 'Analiza tendencias de modelos de IA, ingeniería de prompts, actualizaciones de directrices y cambios en el trabajo autónomo.',
      card6Title: 'Canales por Idioma',
      card6Desc: 'Accede a canales regionales y salas de discusión localizadas para evaluadores no angloparlantes.',
      step1Tag: 'Preparación y Materiales',
      step1Title: 'Preparación y Acceso Verificado',
      step1Desc: 'Accede a pautas rigurosas, exámenes de práctica y rúbricas de evaluación diseñadas para ayudarte a aprobar las evaluaciones de ingreso en Outlier, Alignerr y DataAnnotation.',
      step2Tag: 'Centro Comunitario',
      step2Title: 'Soporte entre Pares y Recomendaciones',
      step2Desc: 'Conéctate con una red global de profesionales remotos. Descubre oportunidades de trabajo activas, recibe códigos de recomendación verificados y comparte soporte de localización.',
      step3Tag: 'Crecimiento Profesional',
      step3Title: 'Inteligencia de Mercado',
      step3Desc: 'Analiza modelos de pago, variaciones de tarifas por hora, cambios en las directrices y consideraciones fiscales con colaboradores experimentados que llevan años en esto.'
    },
    platforms: {
      title: 'Dónde Encontrarnos',
      subtitle: 'Nuestra comunidad vive en múltiples plataformas. Elige la que más te convenga.',
      discord: 'Discord',
      reddit: 'Reddit',
      twitter: 'Twitter / X',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      facebook: 'Facebook',
      vettedData: 'Datos Verificados',
      vettedTitle: 'Inteligencia de plataforma verificada.',
      vettedSubtitle: 'Compara escalas salariales, dificultades de evaluación y tipos de proyectos antes de postularte. Verificado por miembros activos de la comunidad.',
      dataannotationDesc: 'Proyectos de calificación de prompts/respuestas de alta calidad con horarios flexibles.',
      outlierDesc: 'Plataforma de gran escala propiedad de Scale AI. Alta remuneración pero estrictos controles de calidad.',
      alignerrDesc: 'Plataforma de evaluación especializada centrada en datos de dominio de alta precisión.',
      chatCodingSearch: 'Chat, Codificación, Búsqueda',
      rlhfMultimodal: 'RLHF, Multimodal',
      writingMathCode: 'Escritura, Matemáticas, Código',
      mediumHigh: 'Media-Alta',
      highVetting: 'Alto Filtro',
      skillExams: 'Exámenes de Habilidad'
    },
    communityVoices: {
      title: 'Voces de la Comunidad',
      subtitle: 'Escucha directamente de los miembros del Gremio sobre sus experiencias.',
      comingSoon: 'Las voces de la comunidad llegarán pronto. Vuelve a consultar.',
      readMore: 'Leer más'
    },
    resources: {
      title: 'Centro de Recursos',
      subtitle: 'Guías verificadas, plantillas y planes para acelerar tu carrera de evaluación de IA.',
      searchPlaceholder: 'Buscar artículos, guías de plataformas, kits de preparación...',
      all: 'Todos los Recursos',
      gettingStarted: 'Primeros Pasos',
      resumePrep: 'Currículum y Prep',
      platformGuides: 'Guías de Plataforma',
      bestPractices: 'Buenas Prácticas',
      readArticle: 'Leer Guía'
    },
    guidelines: {
      title: 'Directrices de la Comunidad',
      subtitle: 'El Gremio se basa en el respeto mutuo y la excelencia profesional. Hacemos cumplir estos estándares esenciales.',
      rule1Title: 'Profesionalismo Primero',
      rule1Desc: 'Comparte comentarios constructivos, mantén datos precisos y trata a las plataformas de trabajo con rigor profesional.',
      rule2Title: 'Respeto Inquebrantable',
      rule2Desc: 'Tenemos tolerancia cero para la discriminación, el acoso o los insultos. Celebramos la diversidad.',
      rule3Title: 'Colaboración Activa',
      rule3Desc: 'Comparte recursos, ayuda a tus compañeros a incorporarse y responde preguntas. Nos apoyamos mutuamente.',
      rule4Title: 'Sin Estafas ni Spam',
      rule4Desc: 'Prohibición estricta de spam de referidos, ofertas de pago no verificadas, compartir respuestas o violar NDAs de proyectos.'
    },
    footer: {
      desc: 'La asociación profesional y red comunitaria para anotadores de IA, evaluadores y freelancers remotos distribuidos.',
      community: 'Comunidad',
      quickLinks: 'Enlaces Rápidos',
      contact: 'Contacto',
      info: 'Información',
      about: 'Acerca de',
      editorialPolicy: 'Política editorial',
      privacy: 'Privacidad',
      terms: 'Términos de uso',
      rights: 'Todos los derechos reservados.'
    },
    heroCard: {
      activeCommunity: 'Comunidad Activa',
      liveSubtitle: 'En vivo • Global • Creciendo',
      members: 'Miembros',
      discussions: 'Conversaciones',
      globalDesc: '🌏 Global — Evaluadores de IA · RLHF · Profesionales Remotos',
      joinDiscord: 'Unirse al Discord',
      topPlatforms: 'Principales Plataformas'
    },
    ui: {
      viewAllGuides: 'Ver todas las guías',
      readGuide: 'Leer Guía',
      joinCommunity: 'Unirse a la Comunidad',
      questionsPlatform: '¿Preguntas sobre esta plataforma?',
      discordSubtitle: 'Únete a nuestra comunidad para obtener respuestas de personas que trabajan allí activamente.',
      remote: 'Remoto',
      locationRequired: 'Ubicación Requerida',
      payRange: 'Rango de Pago',
      interview: 'Entrevista',
      interviewType: 'Tipo de Entrevista',
      readingTime: 'Tiempo de Lectura',
      lastReviewed: 'Última Revisión',
      tags: 'Etiquetas',
      quickOverview: 'Resumen Rápido',
      contents: 'Contenidos',
      relatedContent: 'Contenido Relacionado',
      careerGuides: 'Guías de Carrera',
      comparisons: 'Comparaciones',
      resources: 'Recursos',
      independentDatabase: 'Base de Datos Independiente',
      platformsReviewed: 'plataformas revisadas y actualizadas regularmente',
      editorialStandard: 'Todas las guías siguen el estándar editorial de Talent Collective. Cada afirmación está etiquetada con su fuente de confianza: Oficial, Verificada, Respaldada por la Comunidad o Desconocida.',
      payApproximate: 'Los rangos de pago son aproximados, basados en informes de miembros activos y sujetos a cambios. No se fabrican datos.',
      independentNode: 'Nodo Independiente y No Alineado',
      noCorporateBS: 'Tu equipo en el trabajo independiente de IA. Sin tonterías corporativas.',
      vettedData: 'Datos Verificados',
      vettedPlatformTitle: 'Inteligencia de plataforma verificada.',
      vettedPlatformSubtitle: 'Compara escalas salariales, dificultades de evaluación y tipos de proyectos antes de postularte. Verificado por miembros activos de la comunidad.',
      connectEvaluators: 'Conéctate con Evaluadores de IA.',
      connectSubtitle: 'Obtén soporte instantáneo, compara proyectos y anticípate a las colas vacías con nuestra comunidad global.',
      joinDiscordCrew: 'Unirse al Equipo de Discord',
      low: 'Bajo',
      medium: 'Medio',
      high: 'Alto',
      resumeVetting: 'Filtro de Currículum',
      aiEvaluationPlatform: 'Plataforma de Evaluación de IA',
      varies: 'Varía'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      resources: 'Ressources',
      communityVoices: 'Voix de la Communauté',
      guidelines: 'Règles',
      joinCommunity: 'Rejoindre la Communauté',
      platforms: 'Guides Plateformes'
    },
    hero: {
      headline: 'Votre foyer pour les évaluateurs IA et professionnels à distance.',
      subheadline: 'Connectez-vous avec d\'autres évaluateurs, découvrez des opportunités, partagez des ressources et grandissez ensemble dans une communauté mondiale.',
      ctaJoin: 'Rejoindre la Communauté',
      ctaExplore: 'Explorer la Guilde',
      badgeText: 'Le Réseau Mondial des Professionnels à Distance'
    },
    stats: {
      membersLabel: 'Membres',
      globalVal: 'Mondial',
      globalLabel: 'Communauté',
      discussionsVal: '24/7',
      discussionsLabel: 'Discussions',
      growingVal: 'En hausse',
      growingLabel: 'Chaque Jour'
    },
    whyJoin: {
      title: 'Pourquoi rejoindre la Guilde ?',
      subtitle: 'Nous fournissons l\'infrastructure, les ressources et les connexions nécessaires pour réussir en tant qu\'évaluateur à distance.',
      card1Title: 'Offres et Recommandations',
      card1Desc: 'Accédez à des contrats vérifiés, des micro-tâches et des liens de parrainage vers les plus grandes entreprises d\'IA.',
      card2Title: 'Réseautage Global',
      card2Desc: 'Connectez-vous avec des évaluateurs sur tous les continents, en partageant les tarifs du marché et les astuces de candidature.',
      card3Title: 'Soutien et Mentorat',
      card3Desc: 'Maîtrisez les règles des plateformes, résolvez les problèmes d\'intégration et gérez vos impôts avec des pairs expérimentés.',
      card4Title: 'Préparation aux Entretiens',
      card4Desc: 'Accédez à des guides, des exercices pratiques et des grilles d\'évaluation pour réussir vos examens de sélection.',
      card5Title: 'Discussions Sectorielles',
      card5Desc: 'Analysez les tendances des modèles d\'IA, l\'ingénierie des prompts, les mises à jour des règles et les évolutions du freelancing.',
      card6Title: 'Canaux Multilingues',
      card6Desc: 'Accédez à des canaux régionaux et des salons de discussion locaux pour les évaluateurs non anglophones.',
      step1Tag: 'Préparation et Matériel',
      step1Title: 'Préparation et Accès Validé',
      step1Desc: 'Accédez à des directives rigoureuses, des tests d\'entraînement et des grilles d\'évaluation conçus pour vous aider à réussir les examens d\'entrée sur Outlier, Alignerr et DataAnnotation.',
      step2Tag: 'Pôle Communautaire',
      step2Title: 'Soutien et Recommandations',
      step2Desc: 'Connectez-vous avec un réseau mondial de professionnels à distance. Découvrez des offres d\'emploi actives, obtenez des codes de parrainage validés et partagez une assistance locale.',
      step3Tag: 'Évolution Professionnelle',
      step3Title: 'Analyses de Marché',
      step3Desc: 'Discutez des modèles de rémunération, des variations de taux horaires, des changements de directives et des questions fiscales avec des contributeurs chevronnés qui font cela depuis des années.'
    },
    platforms: {
      title: 'Où Nous Trouver',
      subtitle: 'Notre communauté vit sur plusieurs plateformes. Choisissez celle qui vous convient.',
      discord: 'Discord',
      reddit: 'Reddit',
      twitter: 'Twitter / X',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      facebook: 'Facebook',
      vettedData: 'Données Vérifiées',
      vettedTitle: 'Analyses de plateformes vérifiées.',
      vettedSubtitle: 'Comparez les grilles de salaire, les difficultés d\'évaluation et les types de projets avant de postuler. Validé par les membres actifs de la communauté.',
      dataannotationDesc: 'Projets d\'évaluation de prompts/réponses de haute qualité avec horaires flexibles.',
      outlierDesc: 'Plateforme à grande échelle détenue par Scale AI. Rémunération élevée mais contrôles de qualité rigoureux.',
      alignerrDesc: 'Plateforme d\'évaluation spécialisée axée sur des données de domaine de haute précision.',
      chatCodingSearch: 'Chat, Code, Recherche',
      rlhfMultimodal: 'RLHF, Multimodal',
      writingMathCode: 'Écriture, Maths, Code',
      mediumHigh: 'Moyenne-Haute',
      highVetting: 'Sélection Stricte',
      skillExams: 'Tests de Compétences'
    },
    communityVoices: {
      title: 'Voix de la Communauté',
      subtitle: 'Écoutez directement les membres de la Guilde parler de leurs expériences.',
      comingSoon: 'Les voix de la communauté arrivent bientôt. Revenez sous peu.',
      readMore: 'Lire la suite'
    },
    resources: {
      title: 'Centre de Ressources',
      subtitle: 'Guides vérifiés, modèles et plans pour accélérer votre carrière dans l\'évaluation de l\'IA.',
      searchPlaceholder: 'Rechercher des articles, guides de plateforme, kits de préparation...',
      all: 'Toutes les Ressources',
      gettingStarted: 'Débuter',
      resumePrep: 'CV & Entretien',
      platformGuides: 'Guides Plateforme',
      bestPractices: 'Bonnes Pratiques',
      readArticle: 'Lire le Guide'
    },
    guidelines: {
      title: 'Règles de la Communauté',
      subtitle: 'La Guilde repose sur le respect mutuel et l\'excellence professionnelle. Nous appliquons ces normes fondamentales.',
      rule1Title: 'Professionnalisme d\'abord',
      rule1Desc: 'Partagez des avis constructifs, fournissez des détails exacts et traitez les plateformes de travail avec rigueur professionnelle.',
      rule2Title: 'Respect Absolu',
      rule2Desc: 'Nous avons une tolérance zéro pour la discrimination, le harcèlement ou les insultes. Nous célébrons la diversité.',
      rule3Title: 'Collaboration Active',
      rule3Desc: 'Partagez vos ressources, aidez vos pairs à s\'intégrer et répondez aux questions. Nous nous entraidons.',
      rule4Title: 'Pas d\'Arnaques ni de Spam',
      rule4Desc: 'Interdiction stricte du spam de parrainage, des offres payantes non vérifiées, du partage de réponses ou de la violation des NDA.'
    },
    footer: {
      desc: 'L\'association professionnelle et le réseau communautaire pour les annotateurs d\'IA, les évaluateurs et les freelances à distance.',
      community: 'Communauté',
      quickLinks: 'Liens Rapides',
      contact: 'Contact',
      info: 'Informations',
      about: 'À propos',
      editorialPolicy: 'Politique éditoriale',
      privacy: 'Confidentialité',
      terms: 'Conditions d\'utilisation',
      rights: 'Tous droits réservés.'
    },
    heroCard: {
      activeCommunity: 'Communauté Active',
      liveSubtitle: 'En direct • Global • En croissance',
      members: 'Membres',
      discussions: 'Discussions',
      globalDesc: '🌏 Global — Évaluateurs IA · RLHF · Pros à Distance',
      joinDiscord: 'Rejoindre le Discord',
      topPlatforms: 'Meilleures Plateformes'
    },
    ui: {
      viewAllGuides: 'Voir tous les guides',
      readGuide: 'Lire le Guide',
      joinCommunity: 'Rejoindre la Communauté',
      questionsPlatform: 'Des questions sur cette plateforme ?',
      discordSubtitle: 'Rejoignez notre communauté pour obtenir des réponses de personnes qui y travaillent activement.',
      remote: 'À distance',
      locationRequired: 'Présence requise',
      payRange: 'Fourchette de salaire',
      interview: 'Entretien',
      interviewType: 'Type d\'entretien',
      readingTime: 'Temps de lecture',
      lastReviewed: 'Dernière révision',
      tags: 'Mots-clés',
      quickOverview: 'Aperçu rapide',
      contents: 'Sommaire',
      relatedContent: 'Contenu Connexe',
      careerGuides: 'Guides de Carrière',
      comparisons: 'Comparatifs',
      resources: 'Ressources',
      independentDatabase: 'Base de Données Indépendante',
      platformsReviewed: 'plateformes révisées et mises à jour régulièrement',
      editorialStandard: 'Tous les guides suivent la charte éditoriale de Talent Collective. Chaque affirmation est étiquetée selon sa source de confiance : Officielle, Vérifiée, Soutenue par la communauté, ou Inconnue.',
      payApproximate: 'Les fourchettes de rémunération sont approximatives, basées sur les rapports des membres actifs, et sujettes à modification. Aucune donnée n\'est inventée.',
      independentNode: 'Nœud Indépendant et Non Alignée',
      noCorporateBS: 'Votre équipe dans le freelancing IA. Pas de jargon corporatif.',
      vettedData: 'Données Vérifiées',
      vettedPlatformTitle: 'Analyses de plateformes vérifiées.',
      vettedPlatformSubtitle: 'Comparez les grilles de salaire, les difficultés d\'évaluation et les types de projets avant de postuler. Validé par les membres actifs de la communauté.',
      connectEvaluators: 'Connectez-vous avec les évaluateurs IA.',
      connectSubtitle: 'Obtenez une assistance instantanée, comparez les projets et évitez les files d\'attente grâce à notre communauté.',
      joinDiscordCrew: 'Rejoindre l\'équipe Discord',
      low: 'Faible',
      medium: 'Moyen',
      high: 'Élevé',
      resumeVetting: 'Sélection sur CV',
      aiEvaluationPlatform: 'Plateforme d\'Évaluation IA',
      varies: 'Varie'
    }
  },
  ja: {
    nav: {
      home: 'ホーム',
      resources: 'リソース',
      communityVoices: 'コミュニティの声',
      guidelines: 'ガイドライン',
      joinCommunity: 'コミュニティに参加',
      platforms: 'プラットフォームガイド'
    },
    hero: {
      headline: 'AI エバリュエーターとリモートプロフェッショナルのためのホーム。',
      subheadline: 'グローバルなコミュニティで、他のエバリュエーターと繋がり、仕事を発見し、リソースを共有し、共に成長しましょう。',
      ctaJoin: 'コミュニティに参加',
      ctaExplore: 'ギルドを探索する',
      badgeText: 'リモートプロフェッショナルのためのグローバルネットワーク'
    },
    stats: {
      membersLabel: 'メンバー',
      globalVal: 'グローバル',
      globalLabel: 'コミュニティ',
      discussionsVal: '24/7',
      discussionsLabel: 'ディスカッション',
      growingVal: '日々成長',
      growingLabel: '継続中'
    },
    whyJoin: {
      title: 'ギルドに参加する理由',
      subtitle: 'リモートエバリュエーターとして成功するために必要なインフラ、リソース、ネットワークを提供します。',
      card1Title: '求人案件と紹介',
      card1Desc: '審査済みの契約案件、マイクロタスクの更新、主要AI企業への紹介リンクを提供します。',
      card2Title: 'グローバルな交流',
      card2Desc: '大陸を超えてエバリュエーター同士が繋がり、市場レートや応募のコツを共有します。',
      card3Title: 'サポートとメンターシップ',
      card3Desc: '経験豊富な仲間と共に、プラットフォームの規約、オンボーディングの課題、税金対策に対応します。',
      card4Title: '面接・試験対策',
      card4Desc: 'スクリーニング試験を突破するためのガイド、練習用タスク、評価基準にアクセスできます。',
      card5Title: '業界ディスカッション',
      card5Desc: 'AIモデルのトレンド、プロンプトエンジニアリング、ガイドラインの変更、フリーランスの動向を分析します。',
      card6Title: '多言語チャンネル',
      card6Desc: '英語以外のエバリュエーター向けに、地域ごとのチャンネルやローカライズされたディスカッションルームを用意しています。',
      step1Tag: '対策と資料',
      step1Title: '試験対策と検証済みアクセス',
      step1Desc: 'Outlier、Alignerr、DataAnnotationの登録試験に合格するために設計された、厳格なガイドライン、練習テスト、評価基準にアクセスできます。',
      step2Tag: 'コミュニティハブ',
      step2Title: 'ピアサポートと紹介',
      step2Desc: 'リモート専門家のグローバルネットワークと繋がります。アクティブな求人情報の発見、検証済み紹介コードの取得、ローカライズサポートの共有が可能です。',
      step3Tag: 'プロとしての成長',
      step3Title: '市場インテリジェンス',
      step3Desc: '長年この仕事をしている熟練のコントリビューターと、報酬モデル、時間単価の変動、ガイドラインの変更、税務上の考慮事項について議論できます。'
    },
    platforms: {
      title: '活動場所',
      subtitle: '私たちのコミュニティは複数のプラットフォームに広がっています。あなたに合った場所を選んでください。',
      discord: 'Discord',
      reddit: 'Reddit',
      twitter: 'Twitter / X',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      facebook: 'Facebook',
      vettedData: '検証データ',
      vettedTitle: '検証済みのプラットフォーム情報。',
      vettedSubtitle: '応募する前に、給与体系、試験の難易度、プロジェクトの種類を比較できます。アクティブなコミュニティメンバーによって検証されています。',
      dataannotationDesc: '柔軟なスケジュールで提供される、高品質なプロンプト/回答評価プロジェクト。',
      outlierDesc: 'Scale AI傘下の最大規模プラットフォーム。報酬は高いが、厳格な品質管理が行われる。',
      alignerrDesc: '高精度な専門分野データに焦点を当てた、特化型評価プラットフォーム。',
      chatCodingSearch: 'チャット, コーディング, 検索',
      rlhfMultimodal: 'RLHF, マルチモーダル',
      writingMathCode: 'ライティング, 数学, コード',
      mediumHigh: '中〜高',
      highVetting: '厳格な審査',
      skillExams: '専門試験あり'
    },
    communityVoices: {
      title: 'コミュニティの声',
      subtitle: 'ギルドメンバーの体験談を直接お聞きください。',
      comingSoon: 'コミュニティの声はまもなく公開されます。しばらくお待ちください。',
      readMore: '続きを読む'
    },
    resources: {
      title: 'リソースハブ',
      subtitle: 'AI評価キャリアを加速させるために厳選されたガイド、ワークシート、設計図。',
      searchPlaceholder: '記事、ガイド、対策キットを検索...',
      all: 'すべてのリソース',
      gettingStarted: 'はじめに',
      resumePrep: '履歴書・試験対策',
      platformGuides: 'プラットフォームガイド',
      bestPractices: 'ベストプラクティス',
      readArticle: 'ガイドを読む'
    },
    guidelines: {
      title: 'コミュニティガイドライン',
      subtitle: 'ギルドは相互の尊重とプロフェッショナルとしての優秀性に基づいて構築されています。以下の基準を厳守します。',
      rule1Title: 'プロフェッショナリズム第一',
      rule1Desc: '建設的な洞察を共有し、正確な情報を維持し、仕事のプラットフォームに対してプロ意識を持って接します。',
      rule2Title: '確固たる敬意',
      rule2Desc: '差別、嫌がらせ、誹謗中傷は一切許容しません。多様性を尊重し、歓迎します。',
      rule3Title: '積極的なコラボレーション',
      rule3Desc: 'リソースを共有し、仲間のオンボーディングを支援し、質問に回答します。お互いに高め合います。',
      rule4Title: '詐欺やスパムの禁止',
      rule4Desc: '紹介スパム、未検証の有料案件の勧誘、解答の共有、プロジェクトNDA違反は厳しく禁止します。'
    },
    footer: {
      desc: 'AIアノテーター、エバリュエーター、および分散型リモートフリーランサーのためのプロフェッショナル協会およびコミュニティネットワーク。',
      community: 'コミュニティ',
      quickLinks: 'クイックリンク',
      contact: 'お問い合わせ',
      info: '情報',
      about: '私たちについて',
      editorialPolicy: '編集方針',
      privacy: 'プライバシー',
      terms: '利用規約',
      rights: 'All rights reserved.'
    },
    heroCard: {
      activeCommunity: 'アクティブコミュニティ',
      liveSubtitle: 'ライブ • グローバル • 成長中',
      members: 'メンバー',
      discussions: 'ディスカッション',
      globalDesc: '🌏 グローバル — AI エバリュエーター · RLHF · リモートプロ',
      joinDiscord: 'Discordに参加する',
      topPlatforms: '主要プラットフォーム'
    },
    ui: {
      viewAllGuides: 'すべてのガイドを見る',
      readGuide: 'ガイドを読む',
      joinCommunity: 'コミュニティに参加する',
      questionsPlatform: 'このプラットフォームについて質問がありますか？',
      discordSubtitle: 'コミュニティに参加して、実際に働いているメンバーから回答を得ましょう。',
      remote: 'リモート',
      locationRequired: '出社が必要',
      payRange: '給与範囲',
      interview: '面接・試験',
      interviewType: '試験タイプ',
      readingTime: '読了時間',
      lastReviewed: '最終確認日',
      tags: 'タグ',
      quickOverview: '概要',
      contents: '目次',
      relatedContent: '関連コンテンツ',
      careerGuides: 'キャリアガイド',
      comparisons: 'プラットフォーム比較',
      resources: 'リソース',
      independentDatabase: '独立データベース',
      platformsReviewed: 'のプラットフォームが定期的にレビューおよび更新されています',
      editorialStandard: 'すべてのガイドはTalent Collectiveの編集基準に従っています。すべての主張は、信頼性の高い情報源（公式、検証済み、コミュニティ支持、または不明）に分類されています。定義済みの基準に従います。',
      payApproximate: '給与範囲は目安であり、アクティブメンバーの報告に基づいており、変更される場合があります。データの捏造は一切ありません。',
      independentNode: '独立非加盟ノード',
      noCorporateBS: 'AIフリーランスのクルー。企業的な無駄話はなし。',
      vettedData: '検証データ',
      vettedPlatformTitle: '検証済みのプラットフォーム情報。',
      vettedPlatformSubtitle: '応募する前に、給与体系、試験の難易度、プロジェクトの種類を比較できます。アクティブなコミュニティメンバーによって検証されています。',
      connectEvaluators: 'AIエバリュエーターと繋がる。',
      connectSubtitle: 'グローバルなコミュニティで、即時のサポートを受け、プロジェクトを比較し、案件枯渇を防ぎましょう。',
      joinDiscordCrew: 'Discordクルーに参加する',
      low: '低',
      medium: '中',
      high: '高',
      resumeVetting: '履歴書審査',
      aiEvaluationPlatform: 'AI評価プラットフォーム',
      varies: '可変'
    }
  },
  it: {
    nav: {
      home: 'Home',
      resources: 'Risorse',
      communityVoices: 'Voci della Comunità',
      guidelines: 'Linee Guida',
      joinCommunity: 'Unisciti alla Comunità',
      platforms: 'Guide Piattaforme'
    },
    hero: {
      headline: 'La tua casa per valutatori IA e professionisti da remoto.',
      subheadline: 'Connettiti con altri valutatori, scopri opportunità, condividi risorse e cresci insieme in una comunità globale.',
      ctaJoin: 'Unisciti alla Comunità',
      ctaExplore: 'Esplora la Gilda',
      badgeText: 'La Rete Globale per Professionisti da Remoto'
    },
    stats: {
      membersLabel: 'Membri',
      globalVal: 'Globale',
      globalLabel: 'Comunità',
      discussionsVal: '24/7',
      discussionsLabel: 'Discussioni',
      growingVal: 'In crescita',
      growingLabel: 'Ogni Giorno'
    },
    whyJoin: {
      title: 'Perché unirsi alla Gilda?',
      subtitle: 'Forniamo l\'infrastruttura, le risorse e i contatti necessari per avere successo come valutatore da remoto.',
      card1Title: 'Offerte e Referenze',
      card1Desc: 'Accedi a contratti verificati, aggiornamenti su micro-task e link di referenza per le principali aziende di IA.',
      card2Title: 'Networking Globale',
      card2Desc: 'Connettiti con valutatori di ogni continente, condividendo tariffe di mercato e strategie di candidatura.',
      card3Title: 'Supporto e Mentoring',
      card3Desc: 'Affronta le linee guida delle piattaforme, problemi di onboarding e tasse con colleghi esperti.',
      card4Title: 'Preparazione ai Colloqui',
      card4Desc: 'Accedi a guide, compiti pratici e rubriche di valutazione per superare gli esami di selezione.',
      card5Title: 'Discussioni di Settore',
      card5Desc: 'Analizza le tendenze dei modelli IA, prompt engineering, aggiornamenti alle linee guida e cambiamenti nel freelancing.',
      card6Title: 'Canali Linguistici',
      card6Desc: 'Accedi a canali regionali e sale di discussione localizzate per valutatori non anglofoni.',
      step1Tag: 'Prep e Materiali',
      step1Title: 'Preparazione e Accesso Verificato',
      step1Desc: 'Accedi a linee guida rigorose, test pratici e rubriche di valutazione progettate per aiutarti a superare i test d\'ingresso su Outlier, Alignerr e DataAnnotation.',
      step2Tag: 'Hub della Comunità',
      step2Title: 'Supporto tra Pari e Referral',
      step2Desc: 'Connettiti con una rete globale de professionisti da remoto. Scopri opportunità di lavoro attive, ricevi codici referral verificati e condividi il supporto alla localizzazione.',
      step3Tag: 'Crescita Professionale',
      step3Title: 'Intelligenza di Mercato',
      step3Desc: 'Discuti modelli di pagamento, variazioni delle tariffe orarie, modifiche alle linee guida e considerazioni fiscali con collaboratori esperti che lo fanno da anni.'
    },
    platforms: {
      title: 'Dove Trovarci',
      subtitle: 'La nostra comunità vive su più piattaforme. Scegli quella più adatta a te.',
      discord: 'Discord',
      reddit: 'Reddit',
      twitter: 'Twitter / X',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      facebook: 'Facebook',
      vettedData: 'Dati Verificati',
      vettedTitle: 'Informazioni verificate sulle piattaforme.',
      vettedSubtitle: 'Confronta tariffe, difficoltà dei test e tipi di progetti prima di candidarti. Verificato dai membri attivi della comunità.',
      dataannotationDesc: 'Progetti di valutazione prompt/risposta di alta qualità con orari flessibili.',
      outlierDesc: 'Piattaforma su larga scala di proprietà di Scale AI. Pagamento alto ma rigidi controlli di qualità.',
      alignerrDesc: 'Piattaforma di valutazione specializzata focalizzata su dati di dominio ad alta precisione.',
      chatCodingSearch: 'Chat, Codice, Ricerca',
      rlhfMultimodal: 'RLHF, Multimodale',
      writingMathCode: 'Scrittura, Matematica, Codice',
      mediumHigh: 'Medio-Alta',
      highVetting: 'Alta Selezione',
      skillExams: 'Esami di Abilità'
    },
    communityVoices: {
      title: 'Voci della Comunità',
      subtitle: 'Ascolta direttamente i membri della Gilda raccontare le loro esperienze.',
      comingSoon: 'Le voci della comunità arriveranno presto. Torna a breve.',
      readMore: 'Leggi di più'
    },
    resources: {
      title: 'Centro Risorse',
      subtitle: 'Guide verificate, modelli e piani per accelerare la tua carriera nella valutazione dell\'IA.',
      searchPlaceholder: 'Cerca articoli, guide piattaforme, kit di preparazione...',
      all: 'Tutte le Risorse',
      gettingStarted: 'Per Iniziare',
      resumePrep: 'CV e Preparazione',
      platformGuides: 'Guide Piattaforme',
      bestPractices: 'Best Practice',
      readArticle: 'Leggi la Guida'
    },
    guidelines: {
      title: 'Linee Guida della Comunità',
      subtitle: 'La Gilda si fonda sul rispetto reciproco e sull\'eccellenza professionale. Applichiamo questi standard fondamentali.',
      rule1Title: 'Professionalità Prima di Tutto',
      rule1Desc: 'Condividi opinioni costruttive, mantieni informazioni accurate e tratta le piattaforme di lavoro con rigore professionale.',
      rule2Title: 'Rispetto Incrollabile',
      rule2Desc: 'Tolleranza zero per discriminazione, molestie o insulti. Celebriamo la diversità.',
      rule3Title: 'Collaborazione Attiva',
      rule3Desc: 'Condividi risorse, aiuta i colleghi nell\'onboarding e rispondi alle domande. Ci sosteniamo a vicenda.',
      rule4Title: 'Niente Truffe né Spam',
      rule4Desc: 'Divieto assoluto di spam di referral, offerte non verificate, condivisione di risposte o violazione di NDA.'
    },
    footer: {
      desc: 'L\'associazione professionale e la rete comunitaria per annotatori IA, valutatori e freelancer da remoto.',
      community: 'Comunità',
      quickLinks: 'Link Rapidi',
      contact: 'Contatti',
      info: 'Informazioni',
      about: 'Chi siamo',
      editorialPolicy: 'Politica editoriale',
      privacy: 'Privacy',
      terms: 'Termini di utilizzo',
      rights: 'Tutti i diritti riservati.'
    },
    heroCard: {
      activeCommunity: 'Comunità Attiva',
      liveSubtitle: 'Dal vivo • Globale • In crescita',
      members: 'Membri',
      discussions: 'Discussioni',
      globalDesc: '🌏 Globale — Valutatori IA · RLHF · Professionisti da Remoto',
      joinDiscord: 'Unisciti al Discord',
      topPlatforms: 'Principali Piattaforme'
    },
    ui: {
      viewAllGuides: 'Vedi tutte le guide',
      readGuide: 'Leggi la Guida',
      joinCommunity: 'Unisciti alla Comunità',
      questionsPlatform: 'Domande su questa piattaforma?',
      discordSubtitle: 'Unisciti alla nostra comunità per ottenere risposte da chi ci lavora attivamente.',
      remote: 'Da remoto',
      locationRequired: 'Sede richiesta',
      payRange: 'Tariffe di Pagamento',
      interview: 'Colloquio',
      interviewType: 'Tipo di Colloquio',
      readingTime: 'Tempo di Lettura',
      lastReviewed: 'Ultima Revisione',
      tags: 'Tag',
      quickOverview: 'Panoramica Rapida',
      contents: 'Indice',
      relatedContent: 'Contenuti Correlati',
      careerGuides: 'Guide di Carriera',
      comparisons: 'Confronti',
      resources: 'Risorse',
      independentDatabase: 'Database Indipendente',
      platformsReviewed: 'piattaforme recensite e aggiornate regolarmente',
      editorialStandard: 'Tutte le guide seguono lo standard editoriale di Talent Collective. Ogni informazione è contrassegnata dalla sua fonte di attendibilità: Ufficiale, Verificata, Supportata dalla Comunità o Sconosciuta.',
      payApproximate: 'Le fasce di pagamento sono approssimative, basate sui rapporti dei membri attivi e soggette a modifiche. Nessun dato è inventato.',
      independentNode: 'Nodo Indipendente e Non Allineato',
      noCorporateBS: 'Il tuo team nel freelancing dell\'IA. Niente formalità aziendali.',
      vettedData: 'Dati Verificati',
      vettedPlatformTitle: 'Informazioni verificate sulle piattaforme.',
      vettedPlatformSubtitle: 'Confronta tariffe, difficoltà dei test e tipi di progetti prima di candidarti. Verificato dai membri attivi della comunità.',
      connectEvaluators: 'Connettiti con i Valutatori IA.',
      connectSubtitle: 'Ricevi supporto immediato, confronta i progetti e previeni le code vuote con la nostra comunità globale.',
      joinDiscordCrew: 'Unisciti alla ciurma di Discord',
      low: 'Basso',
      medium: 'Medio',
      high: 'Alto',
      resumeVetting: 'Selezione CV',
      aiEvaluationPlatform: 'Piattaforma di Valutazione IA',
      varies: 'Varia'
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      resources: 'Ressourcen',
      communityVoices: 'Stimmen der Community',
      guidelines: 'Richtlinien',
      joinCommunity: 'Community beitreten',
      platforms: 'Plattform-Guides'
    },
    hero: {
      headline: 'Dein Zuhause für KI-Bewerter und Remote-Profis.',
      subheadline: 'Vernetze dich mit anderen Bewertern, entdecke Möglichkeiten, teile Ressourcen und wachse gemeinsam in einer globalen Community.',
      ctaJoin: 'Community beitreten',
      ctaExplore: 'Die Gilde erkunden',
      badgeText: 'Das globale Netzwerk für Remote-Profis'
    },
    stats: {
      membersLabel: 'Mitglieder',
      globalVal: 'Global',
      globalLabel: 'Community',
      discussionsVal: '24/7',
      discussionsLabel: 'Diskussionen',
      growingVal: 'Wachsend',
      growingLabel: 'Jeden Tag'
    },
    whyJoin: {
      title: 'Warum der Gilde beitreten?',
      subtitle: 'Wir bieten die Infrastruktur, Ressourcen und Verbindungen, die du brauchst, um als Remote-Bewerter erfolgreich zu sein.',
      card1Title: 'Jobangebote & Empfehlungen',
      card1Desc: 'Erhalte geprüfte Vertragsaufträge, Micro-Task-Updates und Empfehlungslinks zu führenden KI-Unternehmen.',
      card2Title: 'Globales Networking',
      card2Desc: 'Vernetze dich mit Bewertern auf allen Kontinenten und teile Marktraten und Bewerbungstipps.',
      card3Title: 'Support & Mentoring',
      card3Desc: 'Navigiere Plattform-Richtlinien, Onboarding-Probleme und Steuerfragen mit erfahrenen Kollegen.',
      card4Title: 'Interviewvorbereitung',
      card4Desc: 'Greife auf Leitfäden, Übungsaufgaben und Bewertungsrubriken zu, um Eignungstests zu bestehen.',
      card5Title: 'Branchendiskussionen',
      card5Desc: 'Analysiere KI-Modell-Trends, Prompt Engineering, Richtlinien-Updates und Freelancing-Veränderungen.',
      card6Title: 'Sprachkanäle',
      card6Desc: 'Nutze regionale Kanäle und lokalisierte Diskussionsräume für nicht-englischsprachige Bewerter.',
      step1Tag: 'Vorbereitung & Materialien',
      step1Title: 'Vorbereitung & Geprüfter Zugang',
      step1Desc: 'Greife auf strenge Richtlinien, Übungstests und Bewertungsrubriken zu, die dir helfen sollen, Eignungstests bei Outlier, Alignerr und DataAnnotation zu bestehen.',
      step2Tag: 'Community-Knotenpunkt',
      step2Title: 'Peer-Support & Empfehlungen',
      step2Desc: 'Vernetze dich mit einem globalen Netzwerk von Remote-Profis. Entdecke aktive Jobangebote, erhalte geprüfte Empfehlungscodes und teile Lokalisierungshilfe.',
      step3Tag: 'Berufliches Wachstum',
      step3Title: 'Marktanalysen',
      step3Desc: 'Diskutiere Vergütungsmodelle, Abweichungen bei Stundensätzen, Richtlinienänderungen und steuerliche Aspekte mit erfahrenen Mitwirkenden, die dies seit Jahren tun.'
    },
    platforms: {
      title: 'Wo du uns findest',
      subtitle: 'Unsere Community lebt auf mehreren Plattformen. Wähle die, die am besten zu dir passt.',
      discord: 'Discord',
      reddit: 'Reddit',
      twitter: 'Twitter / X',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      facebook: 'Facebook',
      vettedData: 'Geprüfte Daten',
      vettedTitle: 'Geprüfte Plattform-Analysen.',
      vettedSubtitle: 'Vergleiche Gehaltsskalen, Testschwierigkeiten und Projekttypen vor deiner Bewerbung. Von aktiven Community-Mitgliedern geprüft.',
      dataannotationDesc: 'Hochwertige Prompt/Response-Bewertungsprojekte bei flexibler Zeiteinteilung.',
      outlierDesc: 'Große Plattform im Besitz von Scale AI. Hohe Vergütung, aber strenge Qualitätsprüfungen.',
      alignerrDesc: 'Spezialisierte Bewertungsplattform mit Fokus auf hochpräzise Fachdaten.',
      chatCodingSearch: 'Chat, Coding, Suche',
      rlhfMultimodal: 'RLHF, Multimodal',
      writingMathCode: 'Schreiben, Mathe, Code',
      mediumHigh: 'Mittelschwer-Schwer',
      highVetting: 'Strenge Auswahl',
      skillExams: 'Fachprüfungen'
    },
    communityVoices: {
      title: 'Stimmen der Community',
      subtitle: 'Höre direkt von Mitgliedern der Gilde über ihre Erfahrungen.',
      comingSoon: 'Community-Stimmen kommen bald. Schau in Kürze wieder vorbei.',
      readMore: 'Weiterlesen'
    },
    resources: {
      title: 'Ressourcen-Hub',
      subtitle: 'Geprüfte Leitfäden, Arbeitsblätter und Vorlagen, um deine KI-Bewertungskarriere zu beschleunigen.',
      searchPlaceholder: 'Artikel, Plattform-Guides, Vorbereitungskits suchen...',
      all: 'Alle Ressourcen',
      gettingStarted: 'Erste Schritte',
      resumePrep: 'Lebenslauf & Vorbereitung',
      platformGuides: 'Plattform-Guides',
      bestPractices: 'Best Practices',
      readArticle: 'Guide lesen'
    },
    guidelines: {
      title: 'Community-Richtlinien',
      subtitle: 'Die Gilde basiert auf gegenseitigem Respekt und professioneller Exzellenz. Wir setzen diese Kernstandards durch.',
      rule1Title: 'Professionalität zuerst',
      rule1Desc: 'Teile konstruktive Einblicke, pflege genaue Angaben und behandle Arbeitsplattformen mit professioneller Sorgfalt.',
      rule2Title: 'Unerschütterlicher Respekt',
      rule2Desc: 'Wir haben null Toleranz für Diskriminierung, Belästigung oder Anfeindungen. Wir feiern Vielfalt.',
      rule3Title: 'Aktive Zusammenarbeit',
      rule3Desc: 'Teile Ressourcen, hilf Kollegen beim Onboarding und beantworte Fragen. Wir stärken uns gegenseitig.',
      rule4Title: 'Kein Betrug oder Spam',
      rule4Desc: 'Striktes Verbot von Empfehlungs-Spam, ungeprüften Jobangeboten, Antwort-Sharing oder NDA-Verletzungen.'
    },
    footer: {
      desc: 'Der Berufsverband und das Community-Netzwerk für KI-Annotatoren, Bewerter und verteilte Remote-Freelancer.',
      community: 'Community',
      quickLinks: 'Schnelllinks',
      contact: 'Kontakt',
      info: 'Informationen',
      about: 'Über uns',
      editorialPolicy: 'Redaktionelle Richtlinien',
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen',
      rights: 'Alle Rechte vorbehalten.'
    },
    heroCard: {
      activeCommunity: 'Aktive Community',
      liveSubtitle: 'Live • Global • Wachsend',
      members: 'Mitglieder',
      discussions: 'Diskussionen',
      globalDesc: '🌏 Global — KI-Bewerter · RLHF · Remote-Profis',
      joinDiscord: 'Discord beitreten',
      topPlatforms: 'Top-Plattformen'
    },
    ui: {
      viewAllGuides: 'Alle Guides anzeigen',
      readGuide: 'Guide lesen',
      joinCommunity: 'Community beitreten',
      questionsPlatform: 'Fragen zu dieser Plattform?',
      discordSubtitle: 'Tritt unserer Community bei, um Antworten von aktiven Mitarbeitern zu erhalten.',
      remote: 'Remote',
      locationRequired: 'Präsenz erforderlich',
      payRange: 'Vergütungsbereich',
      interview: 'Test / Interview',
      interviewType: 'Art des Tests',
      readingTime: 'Lesezeit',
      lastReviewed: 'Zuletzt überprüft',
      tags: 'Tags',
      quickOverview: 'Schnellübersicht',
      contents: 'Inhalt',
      relatedContent: 'Ähnliche Inhalte',
      careerGuides: 'Karriere-Guides',
      comparisons: 'Vergleiche',
      resources: 'Ressourcen',
      independentDatabase: 'Unabhängige Datenbank',
      platformsReviewed: 'Plattformen regelmäßig überprüft & aktualisiert',
      editorialStandard: 'Alle Leitfäden folgen dem redaktionellen Standard von Talent Collective. Jede Behauptung wird mit ihrer Glaubwürdigkeitsquelle gekennzeichnet: Offiziell, Verifiziert, Community-gestützt oder Unbekannt.',
      payApproximate: 'Die Gehaltsspannen sind Richtwerte, basieren auf Berichten aktiver Mitglieder und können sich ändern. Es werden keine Daten erfunden.',
      independentNode: 'Unabhängiger & eigenständiger Knotenpunkt',
      noCorporateBS: 'Deine Crew im KI-Freelancing. Kein Konzern-Blödsinn.',
      vettedData: 'Geprüfte Daten',
      vettedPlatformTitle: 'Geprüfte Plattform-Analysen.',
      vettedPlatformSubtitle: 'Vergleiche Gehaltsskalen, Testschwierigkeiten und Projekttypen vor deiner Bewerbung. Von aktiven Community-Mitgliedern geprüft.',
      connectEvaluators: 'Vernetze dich mit KI-Bewertern.',
      connectSubtitle: 'Erhalte sofortigen Support, vergleiche Projekte und vermeide leere Warteschlangen mit unserer globalen Community.',
      joinDiscordCrew: 'Tritt der Discord-Crew bei',
      low: 'Niedrig',
      medium: 'Mittel',
      high: 'Hoch',
      resumeVetting: 'Lebenslauf-Prüfung',
      aiEvaluationPlatform: 'KI-Bewertungsplattform',
      varies: 'Variiert'
    }
  },
  pt: {
    nav: {
      home: 'Início',
      resources: 'Recursos',
      communityVoices: 'Vozes da Comunidade',
      guidelines: 'Diretrizes',
      joinCommunity: 'Junte-se à Comunidade',
      platforms: 'Guias de Plataformas'
    },
    hero: {
      headline: 'Seu lar para avaliadores de IA e profissionais remotos.',
      subheadline: 'Conecte-se com outros avaliadores, descubra oportunidades, compartilhe recursos e cresça junto em uma comunidade global.',
      ctaJoin: 'Junte-se à Comunidade',
      ctaExplore: 'Explorar a Guilda',
      badgeText: 'A Rede Global para Profissionais Remotos'
    },
    stats: {
      membersLabel: 'Membros',
      globalVal: 'Global',
      globalLabel: 'Comunidade',
      discussionsVal: '24/7',
      discussionsLabel: 'Discussões',
      growingVal: 'Crescendo',
      growingLabel: 'Todo Dia'
    },
    whyJoin: {
      title: 'Por que se juntar à Guilda?',
      subtitle: 'Fornecemos a infraestrutura, recursos e conexões que você precisa para ter sucesso como avaliador remoto.',
      card1Title: 'Vagas e Indicações',
      card1Desc: 'Acesse contratos verificados, atualizações de micro-tarefas e links de indicação para empresas líderes de IA.',
      card2Title: 'Networking Global',
      card2Desc: 'Conecte-se com avaliadores de todos os continentes, compartilhando taxas de mercado e dicas de candidatura.',
      card3Title: 'Suporte e Mentoria',
      card3Desc: 'Navegue pelas diretrizes das plataformas, problemas de integração e impostos com colegas experientes.',
      card4Title: 'Preparação para Entrevistas',
      card4Desc: 'Acesse guias, tarefas práticas e rubricas de avaliação para passar nos exames de seleção.',
      card5Title: 'Discussões do Setor',
      card5Desc: 'Analise tendências de modelos de IA, engenharia de prompts, atualizações de diretrizes e mudanças no freelancing.',
      card6Title: 'Canais por Idioma',
      card6Desc: 'Acesse canais regionais e salas de discussão localizadas para avaliadores não falantes de inglês.',
      step1Tag: 'Prep e Materiais',
      step1Title: 'Preparação e Acesso Verificado',
      step1Desc: 'Acesse diretrizes rigorosas, testes práticos e rubricas de avaliação projetadas para ajudar você a passar nas avaliações de entrada no Outlier, Alignerr e DataAnnotation.',
      step2Tag: 'Centro Comunitário',
      step2Title: 'Suporte entre Pares e Indicações',
      step2Desc: 'Conecte-se com uma rede global de profissionais remotos. Descubra oportunidades de trabalho ativas, receba códigos de indicação verificados e compartilhe suporte de localização.',
      step3Tag: 'Crescimento Profissional',
      step3Title: 'Inteligência de Mercado',
      step3Desc: 'Discuta modelos de pagamento, variações de taxas horárias, mudanças de diretrizes e considerações fiscais com colaboradores experientes que fazem isso há anos.'
    },
    platforms: {
      title: 'Onde Nos Encontrar',
      subtitle: 'Nossa comunidade está presente em várias plataformas. Escolha a que funciona melhor para você.',
      discord: 'Discord',
      reddit: 'Reddit',
      twitter: 'Twitter / X',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      facebook: 'Facebook',
      vettedData: 'Dados Verificados',
      vettedTitle: 'Informações verificadas de plataformas.',
      vettedSubtitle: 'Compare faixas de pagamento, dificuldades de avaliação e tipos de projeto antes de se candidatar. Verificado por membros ativos da comunidade.',
      dataannotationDesc: 'Projetos de avaliação de prompts/respostas de alta qualidade com horários flexíveis.',
      outlierDesc: 'Plataforma de grande escala de propriedade da Scale AI. Alta remuneração, mas rigorosos controles de qualidade.',
      alignerrDesc: 'Plataforma de avaliação especializada focada em dados de domínio de alta eficiência.',
      chatCodingSearch: 'Chat, Código, Busca',
      rlhfMultimodal: 'RLHF, Multimodal',
      writingMathCode: 'Escrita, Matemática, Código',
      mediumHigh: 'Média-Alta',
      highVetting: 'Filtro Rigoroso',
      skillExams: 'Exames de Habilidade'
    },
    communityVoices: {
      title: 'Vozes da Comunidade',
      subtitle: 'Ouça diretamente dos membros da Guilda sobre suas experiências.',
      comingSoon: 'As vozes da comunidade chegarão em breve. Volte em breve.',
      readMore: 'Leia mais'
    },
    resources: {
      title: 'Centro de Recursos',
      subtitle: 'Guias verificados, modelos e planos para acelerar sua carreira em avaliação de IA.',
      searchPlaceholder: 'Buscar artigos, guias de plataformas, kits de preparação...',
      all: 'Todos os Recursos',
      gettingStarted: 'Primeiros Passos',
      resumePrep: 'Currículo e Preparação',
      platformGuides: 'Guias de Plataformas',
      bestPractices: 'Boas Práticas',
      readArticle: 'Ler Guia'
    },
    guidelines: {
      title: 'Diretrizes da Comunidade',
      subtitle: 'A Guilda é construída sobre respeito mútuo e excelência profissional. Aplicamos estes padrões fundamentais.',
      rule1Title: 'Profissionalismo em Primeiro Lugar',
      rule1Desc: 'Compartilhe insights construtivos, mantenha informações precisas e trate plataformas de trabalho com rigor profissional.',
      rule2Title: 'Respeito Inabalável',
      rule2Desc: 'Temos tolerância zero para discriminação, assédio ou ataques. Celebramos a diversidade.',
      rule3Title: 'Colaboração Ativa',
      rule3Desc: 'Compartilhe recursos, ajude colegas na integração e responda perguntas. Nos fortalecemos mutuamente.',
      rule4Title: 'Sem Golpes ou Spam',
      rule4Desc: 'Proibição estrita de spam de indicações, ofertas não verificadas, compartilhamento de respostas ou violação de NDAs.'
    },
    footer: {
      desc: 'A associação profissional e rede comunitária para anotadores de IA, avaliadores e freelancers remotos distribuídos.',
      community: 'Comunidade',
      quickLinks: 'Links Rápidos',
      contact: 'Contato',
      info: 'Informações',
      about: 'Sobre',
      editorialPolicy: 'Política editorial',
      privacy: 'Privacidade',
      terms: 'Termos de uso',
      rights: 'Todos os direitos reservados.'
    },
    heroCard: {
      activeCommunity: 'Comunidade Ativa',
      liveSubtitle: 'Ao vivo • Global • Crescendo',
      members: 'Membros',
      discussions: 'Discussões',
      globalDesc: 'Avaliadores de IA · RLHF · Profissionais Remotos',
      joinDiscord: 'Entrar no Discord',
      topPlatforms: 'Principais Plataformas'
    },
    ui: {
      viewAllGuides: 'Ver todos os guias',
      readGuide: 'Ler Guia',
      joinCommunity: 'Juntar-se à Comunidade',
      questionsPlatform: 'Dúvidas sobre esta plataforma?',
      discordSubtitle: 'Participe de nossa comunidade para obter respostas de pessoas que trabalham ativamente lá.',
      remote: 'Remoto',
      locationRequired: 'Presencial Requerido',
      payRange: 'Faixa de Pagamento',
      interview: 'Entrevista',
      interviewType: 'Tipo de Entrevista',
      readingTime: 'Tempo de Leitura',
      lastReviewed: 'Última Revisão',
      tags: 'Tags',
      quickOverview: 'Visão Geral Rápida',
      contents: 'Conteúdo',
      relatedContent: 'Conteúdo Relacionado',
      careerGuides: 'Guias de Carreira',
      comparisons: 'Comparações',
      resources: 'Recursos',
      independentDatabase: 'Banco de Dados Independente',
      platformsReviewed: 'plataformas revisadas e atualizadas regularmente',
      editorialStandard: 'Todos os guias seguem o padrão editorial da Talent Collective. Cada declaração é identificada com sua fonte de confiança: Oficial, Verificada, Apoiada pela Comunidade ou Desconhecida.',
      payApproximate: 'As faixas salariais são aproximadas, baseadas em relatórios de membros ativos e sujeitas a alterações. Nenhum dado é inventado.',
      independentNode: 'Nó Independente e Não Alinhado',
      noCorporateBS: 'Sua equipe em freelancing de IA. Sem burocracia corporativa.',
      vettedData: 'Dados Verificados',
      vettedPlatformTitle: 'Informações verificadas de plataformas.',
      vettedPlatformSubtitle: 'Compare faixas de pagamento, dificuldades de avaliação e tipos de projeto antes de se candidatar. Verificado por membros ativos da comunidade.',
      connectEvaluators: 'Conecte-se com Avaliadores de IA.',
      connectSubtitle: 'Obtenha suporte instantâneo, compare projetos e fique à frente das filas vazias com nossa comunidade global.',
      joinDiscordCrew: 'Junte-se à Equipe do Discord',
      low: 'Baixo',
      medium: 'Médio',
      high: 'Alto',
      resumeVetting: 'Filtro de Currículo',
      aiEvaluationPlatform: 'Plataforma de Avaliação de IA',
      varies: 'Varia'
    }
  }
};
