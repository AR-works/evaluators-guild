export type Language = 'en' | 'es' | 'fr' | 'ja';

export interface TranslationDict {
  nav: {
    home: string;
    resources: string;
    successStories: string;
    guidelines: string;
    admin: string;
    joinDiscord: string;
  };
  hero: {
    headline: string;
    subheadline: string;
    ctaJoin: string;
    ctaExplore: string;
    badgeText: string;
  };
  stats: {
    membersVal: string;
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
  features: {
    title: string;
    subtitle: string;
    discordTitle: string;
    discordDesc: string;
    redditTitle: string;
    redditDesc: string;
    socialsTitle: string;
    socialsDesc: string;
  };
  successStories: {
    title: string;
    subtitle: string;
    readMore: string;
    backToStories: string;
    addStoryTitle: string;
    authorLabel: string;
    roleLabel: string;
    contentLabel: string;
    submitBtn: string;
    adminEditLink: string;
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
  newsletter: {
    title: string;
    subtitle: string;
    placeholder: string;
    button: string;
    success: string;
    invalidEmail: string;
  };
  footer: {
    desc: string;
    community: string;
    legal: string;
    privacy: string;
    terms: string;
    contact: string;
    rights: string;
  };
}

export const translations: Record<Language, TranslationDict> = {
  en: {
    nav: {
      home: 'Home',
      resources: 'Resources',
      successStories: 'Success Stories',
      guidelines: 'Guidelines',
      admin: 'Admin',
      joinDiscord: 'Join Discord'
    },
    hero: {
      headline: 'Your home for AI evaluators and remote professionals.',
      subheadline: 'Connect with fellow evaluators, discover opportunities, share resources, and grow together in a global community.',
      ctaJoin: 'Join Discord',
      ctaExplore: 'Explore Resources',
      badgeText: 'The Global Network for Remote Professionals'
    },
    stats: {
      membersVal: '500+',
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
    features: {
      title: 'Community Spaces',
      subtitle: 'Connect where you feel most comfortable. Our community spans multiple platforms.',
      discordTitle: 'Discord Guild',
      discordDesc: 'The active heart of the Guild. Join real-time chats, voice rooms, live Q&As, and direct networking.',
      redditTitle: 'r/EvaluatorsGuild',
      redditDesc: 'For long-form discussions, platform reviews, onboarding threads, and permanent documentation.',
      socialsTitle: 'Social Channels',
      socialsDesc: 'Follow us on Twitter/X and Instagram for regular newsletters, tips, and industry announcements.'
    },
    successStories: {
      title: 'Guild Success Stories',
      subtitle: 'See how our members have transformed their remote work careers through community support.',
      readMore: 'Read full story',
      backToStories: 'Back to success stories',
      addStoryTitle: 'Submit Your Story',
      authorLabel: 'Your Name',
      roleLabel: 'Role / Platform (e.g. AI Evaluator at Outlier)',
      contentLabel: 'Your Success Story',
      submitBtn: 'Submit Story',
      adminEditLink: 'Admin Dashboard'
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
    newsletter: {
      title: 'Stay Ahead of the Curve',
      subtitle: 'Get weekly updates on new AI platforms, evaluation contract leads, and guild updates directly in your inbox.',
      placeholder: 'Enter your email address',
      button: 'Subscribe Now',
      success: 'Welcome to the Guild! Please check your inbox shortly.',
      invalidEmail: 'Please enter a valid email address.'
    },
    footer: {
      desc: 'The professional association and community network for AI annotators, evaluators, and distributed remote freelancers.',
      community: 'Community',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      contact: 'Contact',
      rights: 'All rights reserved.'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      resources: 'Recursos',
      successStories: 'Historias de Éxito',
      guidelines: 'Directrices',
      admin: 'Admin',
      joinDiscord: 'Unirse a Discord'
    },
    hero: {
      headline: 'Tu hogar para evaluadores de IA y profesionales remotos.',
      subheadline: 'Conéctate con otros evaluadores, descubre oportunidades, comparte recursos y crezcan juntos en una comunidad global.',
      ctaJoin: 'Unirse a Discord',
      ctaExplore: 'Explorar Recursos',
      badgeText: 'La Red Global para Profesionales Remotos'
    },
    stats: {
      membersVal: '500+',
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
    features: {
      title: 'Espacios Comunitarios',
      subtitle: 'Conéctate donde te sientas más cómodo. Nuestra comunidad abarca múltiples plataformas.',
      discordTitle: 'Gremio de Discord',
      discordDesc: 'El corazón activo del Gremio. Únete a chats en tiempo real, salas de voz, preguntas y respuestas en vivo y networking directo.',
      redditTitle: 'r/EvaluatorsGuild',
      redditDesc: 'Para debates detallados, reseñas de plataformas, hilos de incorporación y documentación permanente.',
      socialsTitle: 'Canales Sociales',
      socialsDesc: 'Síguenos en Twitter/X e Instagram para boletines periódicos, consejos y anuncios de la industria.'
    },
    successStories: {
      title: 'Historias de Éxito',
      subtitle: 'Descubre cómo nuestros miembros han transformado sus carreras de trabajo remoto gracias al apoyo comunitario.',
      readMore: 'Leer historia completa',
      backToStories: 'Volver a las historias',
      addStoryTitle: 'Envía tu Historia',
      authorLabel: 'Tu Nombre',
      roleLabel: 'Rol / Plataforma (ej. Evaluador de IA en Outlier)',
      contentLabel: 'Tu Historia de Éxito',
      submitBtn: 'Enviar Historia',
      adminEditLink: 'Panel de Administración'
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
    newsletter: {
      title: 'Mantente al Día',
      subtitle: 'Recibe actualizaciones semanales sobre nuevas plataformas de IA, ofertas de contratos de evaluación y noticias del gremio directamente en tu correo.',
      placeholder: 'Introduce tu correo electrónico',
      button: 'Suscribirse Ahora',
      success: '¡Bienvenido al Gremio! Por favor, revisa tu bandeja de entrada pronto.',
      invalidEmail: 'Por favor, introduce un correo electrónico válido.'
    },
    footer: {
      desc: 'La asociación profesional y red comunitaria para anotadores de IA, evaluadores y freelancers remotos distribuidos.',
      community: 'Comunidad',
      legal: 'Legal',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      contact: 'Contacto',
      rights: 'Todos los derechos reservados.'
    }
  },
  fr: {
    nav: {
      home: 'Accueil',
      resources: 'Ressources',
      successStories: 'Succès',
      guidelines: 'Règles',
      admin: 'Admin',
      joinDiscord: 'Rejoindre Discord'
    },
    hero: {
      headline: 'Votre foyer pour les évaluateurs IA et professionnels à distance.',
      subheadline: 'Connectez-vous avec d\'autres évaluateurs, découvrez des opportunités, partagez des ressources et grandissez ensemble dans une communauté mondiale.',
      ctaJoin: 'Rejoindre Discord',
      ctaExplore: 'Explorer les Ressources',
      badgeText: 'Le Réseau Mondial des Professionnels à Distance'
    },
    stats: {
      membersVal: '500+',
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
    features: {
      title: 'Espaces Communautaires',
      subtitle: 'Connectez-vous là où vous vous sentez le mieux. Notre communauté s\'étend sur plusieurs plateformes.',
      discordTitle: 'Serveur Discord',
      discordDesc: 'Le cœur battant de la Guilde. Rejoignez des salons de discussion en temps réel, des salles vocales et profitez du réseautage direct.',
      redditTitle: 'r/EvaluatorsGuild',
      redditDesc: 'Pour des discussions approfondies, des avis sur les plateformes, des fils d\'intégration et une documentation permanente.',
      socialsTitle: 'Réseaux Sociaux',
      socialsDesc: 'Suivez-nous sur Twitter/X et Instagram pour des newsletters régulières, des astuces et des annonces du secteur.'
    },
    successStories: {
      title: 'Histoires de Réussite',
      subtitle: 'Découvrez comment nos membres ont transformé leur carrière à distance grâce au soutien de la communauté.',
      readMore: 'Lire l\'histoire complète',
      backToStories: 'Retour aux histoires',
      addStoryTitle: 'Soumettre votre Histoire',
      authorLabel: 'Votre Nom',
      roleLabel: 'Rôle / Plateforme (ex. Évaluateur IA chez Outlier)',
      contentLabel: 'Votre Histoire',
      submitBtn: 'Soumettre',
      adminEditLink: 'Tableau de Bord Admin'
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
    newsletter: {
      title: 'Restez Informé',
      subtitle: 'Recevez chaque semaine par email des mises à jour sur les nouvelles plateformes d\'IA, des offres de contrats d\'évaluation et des actus de la guilde.',
      placeholder: 'Entrez votre adresse email',
      button: 'S\'abonner',
      success: 'Bienvenue dans la Guilde ! Veuillez vérifier votre boîte de réception sous peu.',
      invalidEmail: 'Veuillez entrer une adresse email valide.'
    },
    footer: {
      desc: 'L\'association professionnelle et le réseau communautaire pour les annotateurs d\'IA, les évaluateurs et les freelances à distance.',
      community: 'Communauté',
      legal: 'Mentions Légales',
      privacy: 'Politique de Confidentialité',
      terms: 'Conditions d\'Utilisation',
      contact: 'Contact',
      rights: 'Tous droits réservés.'
    }
  },
  ja: {
    nav: {
      home: 'ホーム',
      resources: 'リソース',
      successStories: '成功体験',
      guidelines: 'ガイドライン',
      admin: '管理画面',
      joinDiscord: 'Discord に参加する'
    },
    hero: {
      headline: 'AI エバリュエーターとリモートプロフェッショナルのためのホーム。',
      subheadline: 'グローバルなコミュニティで、他のエバリュエーターと繋がり、仕事を発見し、リソースを共有し、共に成長しましょう。',
      ctaJoin: 'Discord に参加する',
      ctaExplore: 'リソースを探索する',
      badgeText: 'リモートプロフェッショナルのためのグローバルネットワーク'
    },
    stats: {
      membersVal: '500+',
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
    features: {
      title: 'コミュニティスペース',
      subtitle: 'あなたが最も快適に過ごせる場所で繋がりましょう。私たちのコミュニティは複数のプラットフォームにまたがっています。',
      discordTitle: 'Discord ギルド',
      discordDesc: 'ギルドのアクティブな中心地。リアルタイムのチャット、音声ルーム、ライブQ&A、ダイレクトなネットワーク構築が可能です。',
      redditTitle: 'r/EvaluatorsGuild',
      redditDesc: '長文のディスカッション、プラットフォームのレビュー、オンボーディングのスレッド、永続的なドキュメント保管に適しています。',
      socialsTitle: 'ソーシャルチャンネル',
      socialsDesc: 'Twitter/XやInstagramをフォローして、定期的なニュースレター、ヒント、業界の最新情報を受け取ってください。'
    },
    successStories: {
      title: 'ギルドの成功体験談',
      subtitle: 'コミュニティのサポートによって、メンバーがどのようにリモートワークキャリアを変革したかをご覧ください。',
      readMore: 'ストーリーを読む',
      backToStories: '成功体験談一覧に戻る',
      addStoryTitle: '体験談を投稿する',
      authorLabel: 'お名前',
      roleLabel: '職種 / プラットフォーム (例: AIエバリュエーター - Outlier)',
      contentLabel: 'あなたの成功体験談',
      submitBtn: '体験談を送信する',
      adminEditLink: '管理者ダッシュボード'
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
    newsletter: {
      title: '最新情報をいち早く入手',
      subtitle: '新しいAIプラットフォーム、評価案件情報、ギルドの更新情報を毎週直接メールでお届けします。',
      placeholder: 'メールアドレスを入力',
      button: '購読する',
      success: 'ギルドへようこそ！まもなく確認メールが届きます。',
      invalidEmail: '有効なメールアドレスを入力してください。'
    },
    footer: {
      desc: 'AIアノテーター、エバリュエーター、および分散型リモートフリーランサーのためのプロフェッショナル協会およびコミュニティネットワーク。',
      community: 'コミュニティ',
      legal: '法的情報',
      privacy: 'プライバシーポリシー',
      terms: '利用規約',
      contact: 'お問い合わせ',
      rights: 'All rights reserved.'
    }
  }
};
