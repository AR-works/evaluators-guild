export type Language = 'en' | 'es' | 'fr' | 'ja' | 'it' | 'de' | 'pt';

export interface TranslationDict {
  nav: {
    home: string;
    resources: string;
    communityVoices: string;
    guidelines: string;
    joinCommunity: string;
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
    rights: string;
  };
}

export const translations: Record<Language, TranslationDict> = {
  en: {
    nav: {
      home: 'Home',
      resources: 'Resources',
      communityVoices: 'Community Voices',
      guidelines: 'Guidelines',
      joinCommunity: 'Join Community'
    },
    hero: {
      headline: 'Your home for AI evaluators and remote professionals.',
      subheadline: 'Connect with fellow evaluators, discover opportunities, share resources, and grow together in a global community.',
      ctaJoin: 'Join Our Community',
      ctaExplore: 'Explore the Guild',
      badgeText: 'The Global Network for Remote Professionals'
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
      title: 'Why Join the Guild?',
      subtitle: 'We provide the infrastructure, resources, and connections you need to succeed as a remote evaluator.',
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
      card6Desc: 'Access regional channels and localized discussion rooms for non-English evaluators.'
    },
    platforms: {
      title: 'Where to Find Us',
      subtitle: 'Our community lives across multiple platforms. Pick the one that works for you.',
      discord: 'Discord',
      reddit: 'Reddit',
      twitter: 'Twitter / X',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      facebook: 'Facebook'
    },
    communityVoices: {
      title: 'Community Voices',
      subtitle: 'Hear directly from members of the Guild about their experiences.',
      comingSoon: 'Community voices are coming soon. Check back shortly.',
      readMore: 'Read more'
    },
    resources: {
      title: 'Resources Hub',
      subtitle: 'Vetted guides, worksheets, and blueprints to accelerate your AI evaluation career.',
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
      subtitle: 'The Guild is built on mutual respect and professional excellence. We enforce these core standards.',
      rule1Title: 'Professionalism First',
      rule1Desc: 'Share constructive insights, maintain accurate details, and treat work platforms with professional rigor.',
      rule2Title: 'Unwavering Respect',
      rule2Desc: 'We have zero tolerance for discrimination, harassment, or flame wars. We celebrate diversity.',
      rule3Title: 'Active Collaboration',
      rule3Desc: 'Share resources, help peers onboard, and answer questions. We lift each other up.',
      rule4Title: 'No Scams or Spam',
      rule4Desc: 'Strict prohibition of referral spam, unvetted paid gigs, code sharing, or violating project NDAs.'
    },
    footer: {
      desc: 'The professional association and community network for AI annotators, evaluators, and distributed remote freelancers.',
      community: 'Community',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      rights: 'All rights reserved.'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      resources: 'Recursos',
      communityVoices: 'Voces de la Comunidad',
      guidelines: 'Directrices',
      joinCommunity: 'Unirse a la Comunidad'
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
      card6Desc: 'Accede a canales regionales y salas de discusión localizadas para evaluadores no angloparlantes.'
    },
    platforms: {
      title: 'Dónde Encontrarnos',
      subtitle: 'Nuestra comunidad vive en múltiples plataformas. Elige la que más te convenga.',
      discord: 'Discord',
      reddit: 'Reddit',
      twitter: 'Twitter / X',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      facebook: 'Facebook'
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
      rights: 'Todos los derechos reservados.'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      resources: 'Ressources',
      communityVoices: 'Voix de la Communauté',
      guidelines: 'Règles',
      joinCommunity: 'Rejoindre la Communauté'
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
      card6Desc: 'Accédez à des canaux régionaux et des salons de discussion locaux pour les évaluateurs non anglophones.'
    },
    platforms: {
      title: 'Où Nous Trouver',
      subtitle: 'Notre communauté vit sur plusieurs plateformes. Choisissez celle qui vous convient.',
      discord: 'Discord',
      reddit: 'Reddit',
      twitter: 'Twitter / X',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      facebook: 'Facebook'
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
      rights: 'Tous droits réservés.'
    }
  },
  ja: {
    nav: {
      home: 'ホーム',
      resources: 'リソース',
      communityVoices: 'コミュニティの声',
      guidelines: 'ガイドライン',
      joinCommunity: 'コミュニティに参加'
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
      card6Desc: '英語以外のエバリュエーター向けに、地域ごとのチャンネルやローカライズされたディスカッションルームを用意しています。'
    },
    platforms: {
      title: '活動場所',
      subtitle: '私たちのコミュニティは複数のプラットフォームに広がっています。あなたに合った場所を選んでください。',
      discord: 'Discord',
      reddit: 'Reddit',
      twitter: 'Twitter / X',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      facebook: 'Facebook'
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
      rights: 'All rights reserved.'
    }
  },
  it: {
    nav: {
      home: 'Home',
      resources: 'Risorse',
      communityVoices: 'Voci della Comunità',
      guidelines: 'Linee Guida',
      joinCommunity: 'Unisciti alla Comunità'
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
      card6Desc: 'Accedi a canali regionali e sale di discussione localizzate per valutatori non anglofoni.'
    },
    platforms: {
      title: 'Dove Trovarci',
      subtitle: 'La nostra comunità vive su più piattaforme. Scegli quella più adatta a te.',
      discord: 'Discord',
      reddit: 'Reddit',
      twitter: 'Twitter / X',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      facebook: 'Facebook'
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
      rights: 'Tutti i diritti riservati.'
    }
  },
  de: {
    nav: {
      home: 'Startseite',
      resources: 'Ressourcen',
      communityVoices: 'Stimmen der Community',
      guidelines: 'Richtlinien',
      joinCommunity: 'Community beitreten'
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
      card6Desc: 'Nutze regionale Kanäle und lokalisierte Diskussionsräume für nicht-englischsprachige Bewerter.'
    },
    platforms: {
      title: 'Wo du uns findest',
      subtitle: 'Unsere Community lebt auf mehreren Plattformen. Wähle die, die am besten zu dir passt.',
      discord: 'Discord',
      reddit: 'Reddit',
      twitter: 'Twitter / X',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      facebook: 'Facebook'
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
      rights: 'Alle Rechte vorbehalten.'
    }
  },
  pt: {
    nav: {
      home: 'Início',
      resources: 'Recursos',
      communityVoices: 'Vozes da Comunidade',
      guidelines: 'Diretrizes',
      joinCommunity: 'Junte-se à Comunidade'
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
      card6Desc: 'Acesse canais regionais e salas de discussão localizadas para avaliadores não falantes de inglês.'
    },
    platforms: {
      title: 'Onde Nos Encontrar',
      subtitle: 'Nossa comunidade está presente em várias plataformas. Escolha a que funciona melhor para você.',
      discord: 'Discord',
      reddit: 'Reddit',
      twitter: 'Twitter / X',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
      facebook: 'Facebook'
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
      rights: 'Todos os direitos reservados.'
    }
  }
};
