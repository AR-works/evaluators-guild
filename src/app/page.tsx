'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageProvider';
import DiscordMemberCount from '@/components/DiscordMemberCount';
import { initialResources } from '@/data/initialData';
import { DISCORD_INVITE_URL, REDDIT_URL } from '@/lib/siteConfig';
import {
  MessageSquare,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

/* Hallmark · macrostructure: Collage / Zine · tone: playful-editorial · anchor hue: 345 (pink)
 * studied: no · context: explicit · v1.0.0
 */

export default function Home() {
  const { t } = useLanguage();

  const steps = [
    {
      num: '1',
      title: t('whyJoin.step1Title'),
      desc: t('whyJoin.step1Desc'),
      tagKey: t('whyJoin.step1Tag'),
    },
    {
      num: '2',
      title: t('whyJoin.step2Title'),
      desc: t('whyJoin.step2Desc'),
      tagKey: t('whyJoin.step2Tag'),
    },
    {
      num: '3',
      title: t('whyJoin.step3Title'),
      desc: t('whyJoin.step3Desc'),
      tagKey: t('whyJoin.step3Tag'),
    }
  ];

  const highlightedPlatforms = [
    {
      name: 'DataAnnotation',
      rate: '$15 - $23/hr',
      difficulty: t('platforms.mediumHigh'),
      type: t('platforms.chatCodingSearch'),
      link: '/platforms/dataannotation-review-guide',
      desc: t('platforms.dataannotationDesc'),
      rotation: '-0.6deg',
    },
    {
      name: 'Outlier AI',
      rate: '$15 - $50+/hr',
      difficulty: t('platforms.highVetting'),
      type: t('platforms.rlhfMultimodal'),
      link: '/platforms/outlier-ai-review-guide',
      desc: t('platforms.outlierDesc'),
      rotation: '0.6deg',
    },
    {
      name: 'Alignerr',
      rate: '$15 - $60/hr',
      difficulty: t('platforms.skillExams'),
      type: t('platforms.writingMathCode'),
      link: '/platforms/alignerr-review-guide',
      desc: t('platforms.alignerrDesc'),
      rotation: '-0.4deg',
    }
  ];

  const platforms = [
    { name: t('platforms.discord'), href: DISCORD_INVITE_URL, icon: MessageSquare },
    { name: t('platforms.reddit'), href: REDDIT_URL, icon: MessageSquare },
  ];

  return (
    <div className="flex flex-col w-full relative grid-glow">

      {/* 1. Hero — Zine Collage */}
      <section className="relative w-full max-w-7xl mx-auto px-6 pt-32 pb-16 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-8 overflow-hidden">

        {/* Left column — handwritten headline */}
        <div className="flex-1 min-w-0 space-y-6 animate-reveal" style={{ animationDuration: '0.8s' }}>
          <div className="inline-block px-4 py-1.5 bg-secondary/40 border border-secondary/60 text-secondary-ink text-sm font-semibold rounded-sm zine-handwritten text-lg">
            {t('hero.badgeText')}
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-ink leading-[1.05] overflow-wrap-anywhere">
            {t('hero.headline')}
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl font-body italic">
            {t('hero.subheadline')}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press px-6 py-3.5 text-sm font-bold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center gap-2 shadow-md"
            >
              <span>{t('hero.ctaJoin')}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/platforms"
              className="btn-press px-6 py-3.5 text-sm font-bold rounded-full border-2 border-ink/20 bg-card hover:bg-secondary/20 text-foreground transition-colors flex items-center gap-2"
            >
              <span>{t('hero.ctaExplore')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right column — pinned polaroid community card */}
        <motion.div
          initial={{ opacity: 0, x: 24, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex flex-col gap-4 w-72 xl:w-80 shrink-0"
          aria-label="Community stats"
        >
          {/* Pinned community card */}
          <div className="zine-pin card-straighten bg-card border-2 border-rule p-6 space-y-5 shadow-md" style={{ transform: 'rotate(-1.2deg)' }}>
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MessageSquare className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground font-body">{t('heroCard.activeCommunity')}</p>
                <p className="text-xs text-muted-foreground font-body">{t('heroCard.liveSubtitle')}</p>
              </div>
            </div>

            <div className="space-y-3 py-1">
              <p className="font-body text-sm text-foreground leading-relaxed">
                <DiscordMemberCount fallback="500+" /> <span className="text-muted-foreground">{t('heroCard.members')}</span>
              </p>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                {t('heroCard.globalDesc')}
              </p>
            </div>

            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-2 w-full px-4 py-3 rounded-full bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/90 transition-colors shadow-sm"
            >
              <span>{t('heroCard.joinDiscord')}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Sticky note — platform previews */}
          <div className="zine-sticky sticky-lift p-4 space-y-2" style={{ transform: 'rotate(1.5deg)' }}>
            <p className="zine-handwritten text-base font-bold mb-2">{t('heroCard.topPlatforms')}</p>
            {[{ name: 'Outlier AI', rate: '$15-50+/hr' }, { name: 'DataAnnotation', rate: '$15-23/hr' }, { name: 'Alignerr', rate: '$15-60/hr' }].map((p) => (
              <div key={p.name} className="flex items-center justify-between">
                <span className="font-body text-xs font-semibold">{p.name}</span>
                <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">{p.rate}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>


      {/* 2. Why Join — Handwritten letter on lined paper */}
      <section id="why-join" className="max-w-7xl mx-auto px-6 py-20 sm:px-8 lg:px-12 space-y-12">
        <div className="max-w-3xl space-y-4">
          <h2 className="font-heading text-4xl sm:text-5xl text-foreground leading-tight">
            {t('whyJoin.title')}
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed font-body">
            {t('whyJoin.subtitle')}
          </p>
        </div>

        {/* Handwritten steps on lined paper */}
        <div className="zine-lined-paper border-2 border-rule rounded-sm p-6 sm:p-10 max-w-3xl space-y-10">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-12"
            >
              {/* Handwritten number */}
              <span className="absolute left-0 top-0 font-heading text-5xl font-bold text-primary/40 leading-none">
                {step.num}
              </span>

              <div className="space-y-2">
                <span className="zine-handwritten text-lg font-bold text-primary">
                  {step.tagKey}
                </span>
                <h3 className="font-heading text-2xl text-foreground leading-tight">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-body pt-1">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. Vetted Platform Highlights — Pinned dossier cards on corkboard */}
      <section className="zine-corkboard border-y-2 border-rule">
        <div className="max-w-7xl mx-auto px-6 py-20 sm:px-8 lg:px-12 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-2xl space-y-2">
              <span className="zine-handwritten text-xl text-primary">{t('platforms.vettedData')}</span>
              <h2 className="font-heading text-4xl sm:text-5xl text-foreground leading-tight">
                {t('platforms.vettedTitle')}
              </h2>
              <p className="text-muted-foreground text-sm font-body">
                {t('platforms.vettedSubtitle')}
              </p>
            </div>
            <Link
              href="/platforms"
              className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:underline zine-handwritten text-lg"
            >
              <span>{t('ui.viewAllGuides')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Pinned dossier cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {highlightedPlatforms.map((plat, idx) => (
              <motion.div
                key={plat.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="zine-pin zine-tape group card-straighten bg-card border-2 border-rule p-6 flex flex-col justify-between shadow-md"
                style={{ transform: `rotate(${plat.rotation})` }}
              >
                <div className="space-y-4 pt-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-heading text-2xl text-foreground group-hover:text-primary transition-colors leading-tight">
                      {plat.name}
                    </h3>
                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded bg-primary/10 text-primary font-body">
                      {plat.difficulty}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed font-body">
                    {plat.desc}
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-2 border-t-2 border-dashed border-rule text-xs font-body">
                    <div>
                      <span className="text-[10px] font-bold text-muted-foreground block uppercase">Est. Rate</span>
                      <span className="font-semibold text-foreground">{plat.rate}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-muted-foreground block uppercase">Project Type</span>
                      <span className="font-semibold text-foreground">{plat.type}</span>
                    </div>
                  </div>
                </div>
                <div className="pt-6">
                  <Link
                    href={plat.link}
                    className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline font-body"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Where to Find Us + Community Voices — Zine scrapbook collage */}
      <section className="max-w-7xl mx-auto px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Where to Find Us */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="font-heading text-4xl sm:text-5xl text-foreground leading-tight">
                {t('platforms.title')}
              </h2>
              <p className="text-muted-foreground text-sm font-body max-w-md">
                {t('platforms.subtitle')}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {platforms.map((platform, idx) => {
                return (
                  <a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="zine-sticky sticky-lift group flex items-center gap-3 px-5 py-3 transition-all hover:shadow-lg"
                    style={{ transform: idx === 0 ? 'rotate(-1.5deg)' : 'rotate(1.2deg)' }}
                  >
                    <MessageSquare className="w-4 h-4 text-secondary-ink" />
                    <span className="text-xs font-bold text-secondary-ink font-body">{platform.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right: Community Voices sticky note */}
          <motion.div
            initial={{ opacity: 0, y: 15, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="zine-sticky p-6 sm:p-8 space-y-4"
            style={{ transform: 'rotate(1.2deg)' }}
          >
            <h3 className="zine-handwritten text-2xl text-secondary-ink leading-tight">
              {t('communityVoices.title')}
            </h3>
            <p className="font-body text-sm text-secondary-ink leading-relaxed">
              {t('communityVoices.subtitle')}
            </p>
            <Link
              href="/community-voices"
              className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline font-body"
            >
              <span>{t('communityVoices.readMore')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 5. Resources Preview — Corkboard section */}
      <section className="zine-corkboard border-y-2 border-rule">
        <div className="max-w-7xl mx-auto px-6 py-20 sm:px-8 lg:px-12 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-2xl space-y-2">
              <span className="zine-handwritten text-xl text-primary">{t('ui.resources')}</span>
              <h2 className="font-heading text-4xl sm:text-5xl text-foreground leading-tight">
                {t('resources.title')}
              </h2>
              <p className="text-muted-foreground text-sm font-body">
                {t('resources.subtitle')}
              </p>
            </div>
            <Link
              href="/resources"
              className="w-fit inline-flex items-center gap-1 text-primary font-bold hover:underline text-sm zine-handwritten text-lg"
            >
              <span>{t('ui.viewAllGuides')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initialResources.slice(0, 2).map((res, idx) => (
              <motion.div
                key={res.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="zine-tape group border-2 border-rule bg-card p-6 flex flex-col justify-between shadow-md hover:shadow-lg transition-all"
                style={{ transform: idx === 0 ? 'rotate(-0.5deg)' : 'rotate(0.5deg)' }}
              >
                <div className="space-y-4 pt-2">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="px-2.5 py-0.5 rounded-full font-bold bg-primary/10 text-primary font-body capitalize">
                      {res.category === 'bestPractices' ? t('resources.bestPractices') : res.category === 'starting' ? t('resources.gettingStarted') : res.category === 'resume' ? t('resources.resumePrep') : t('resources.platformGuides')}
                    </span>
                    <span className="text-muted-foreground font-medium font-body">{res.readTime}</span>
                  </div>
                  <h3 className="font-heading text-2xl text-foreground leading-tight">
                    {res.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed font-body">
                    {res.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t-2 border-dashed border-rule">
                  <Link
                    href={`/resources?id=${res.id}`}
                    className="inline-flex items-center gap-1.5 text-primary text-xs font-bold hover:underline font-body"
                  >
                    <span>{t('resources.readArticle')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Community Guidelines — Marker rules on lined paper */}
      <section className="max-w-7xl mx-auto px-6 py-20 sm:px-8 lg:px-12 space-y-12 border-t-2 border-rule">
        <div className="max-w-3xl space-y-4">
          <h2 className="font-heading text-4xl sm:text-5xl text-foreground leading-tight">
            {t('guidelines.title')}
          </h2>
          <p className="text-muted-foreground text-sm font-body">
            {t('guidelines.subtitle')}
          </p>
        </div>

        <ol className="max-w-3xl divide-y-2 divide-dashed divide-rule">
          {[
            { titleKey: 'guidelines.rule1Title', descKey: 'guidelines.rule1Desc' },
            { titleKey: 'guidelines.rule2Title', descKey: 'guidelines.rule2Desc' },
            { titleKey: 'guidelines.rule3Title', descKey: 'guidelines.rule3Desc' },
            { titleKey: 'guidelines.rule4Title', descKey: 'guidelines.rule4Desc' }
          ].map((rule, idx) => (
            <motion.li
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-5 py-6 first:pt-0 last:pb-0"
            >
              <span className="font-heading text-4xl font-bold text-primary/30 shrink-0 w-12 leading-none">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <div className="space-y-1.5">
                <h3 className="font-heading text-xl text-foreground leading-tight">
                  {t(rule.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-body">
                  {t(rule.descKey)}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </section>

      {/* 8. Final CTA — Handwritten sign-off */}
      <section className="border-t-2 border-rule bg-secondary/10 py-20">
        <div className="max-w-3xl mx-auto px-6 space-y-6 text-center">
          <h2 className="font-heading text-5xl text-foreground leading-tight">
            {t('ui.connectEvaluators')}
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto font-body italic">
            {t('ui.connectSubtitle')}
          </p>
          <div className="pt-2">
            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 shadow-md transition-colors text-sm"
            >
              <span>{t('ui.joinDiscordCrew')}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
