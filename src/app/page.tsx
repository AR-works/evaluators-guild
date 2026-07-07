'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageProvider';
import DiscordMemberCount from '@/components/DiscordMemberCount';
import StatsCounter from '@/components/StatsCounter';
import { initialResources } from '@/data/initialData';
import {
  MessageSquare,
  Globe,
  ArrowRight,
  ShieldCheck,
  Coins,
  HeartHandshake,
  GraduationCap,
  TrendingUp,
  Users,
  Compass,
  HelpCircle,
  ExternalLink,
  BookOpen
} from 'lucide-react';

/* Hallmark · macrostructure: Marquee Hero · tone: playful-editorial · anchor hue: 345 (pink)
 * studied: no · context: explicit · v0.8.0
 */

export default function Home() {
  const { t, language } = useLanguage();

  const steps = [
    {
      num: '1.0',
      title: t('whyJoin.step1Title'),
      desc: t('whyJoin.step1Desc'),
      tagKey: t('whyJoin.step1Tag'),
      icon: GraduationCap,
    },
    {
      num: '2.0',
      title: t('whyJoin.step2Title'),
      desc: t('whyJoin.step2Desc'),
      tagKey: t('whyJoin.step2Tag'),
      icon: Users,
    },
    {
      num: '3.0',
      title: t('whyJoin.step3Title'),
      desc: t('whyJoin.step3Desc'),
      tagKey: t('whyJoin.step3Tag'),
      icon: Coins,
    }
  ];

  const highlightedPlatforms = [
    {
      name: 'DataAnnotation',
      rate: '$20 - $40+/hr',
      difficulty: t('platforms.mediumHigh'),
      type: t('platforms.chatCodingSearch'),
      link: '/platforms/dataannotation-review-guide',
      desc: t('platforms.dataannotationDesc'),
    },
    {
      name: 'Outlier AI',
      rate: '$15 - $50+/hr',
      difficulty: t('platforms.highVetting'),
      type: t('platforms.rlhfMultimodal'),
      link: '/platforms/outlier-ai-review-guide',
      desc: t('platforms.outlierDesc'),
    },
    {
      name: 'Alignerr',
      rate: '$15 - $60/hr',
      difficulty: t('platforms.skillExams'),
      type: t('platforms.writingMathCode'),
      link: '/platforms/alignerr-review-guide',
      desc: t('platforms.alignerrDesc'),
    }
  ];

  const platforms = [
    { name: t('platforms.discord'), href: 'https://discord.gg/56xGWJRqEQ', icon: MessageSquare, color: 'text-primary' },
    { name: t('platforms.reddit'), href: 'https://www.reddit.com/r/talentcollective/', icon: Users, color: 'text-primary' },
  ];

  return (
    <div className="flex flex-col w-full relative grid-glow">
      
      {/* 1. Hero Section — Two-column on large screens */}
      <section className="relative w-full max-w-7xl mx-auto px-6 pt-32 pb-20 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-8 overflow-hidden border-b border-border/40">

        {/* Left column — headline + CTAs */}
        <div className="flex-1 min-w-0 space-y-6 animate-reveal" style={{ animationDuration: '1.6s' }}>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider">
            {t('hero.badgeText')}
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.05] overflow-wrap-anywhere">
            {(() => {
              let charCounter = 0;
              const headlineText = t('hero.headline');
              if (language === 'ja') {
                return headlineText.split('').map((char, idx) => (
                  <span
                    key={idx}
                    className="inline-block animate-letter-reveal"
                    style={{ animationDelay: `${charCounter++ * 0.02}s` }}
                  >
                    {char}
                  </span>
                ));
              }
              return headlineText.split(' ').map((word, wordIdx, wordsArr) => {
                return (
                  <span key={wordIdx} className="inline-block whitespace-nowrap">
                    {word.split('').map((char, charIdx) => {
                      const currentIdx = charCounter++;
                      return (
                        <span
                          key={charIdx}
                          className="inline-block animate-letter-reveal"
                          style={{ animationDelay: `${currentIdx * 0.02}s` }}
                        >
                          {char}
                        </span>
                      );
                    })}
                    {wordIdx < wordsArr.length - 1 && (
                      <span
                        className="inline-block animate-letter-reveal"
                        style={{ animationDelay: `${charCounter++ * 0.02}s` }}
                      >
                        {'\u00A0'}
                      </span>
                    )}
                  </span>
                );
              });
            })()}
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
            {t('hero.subheadline')}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://discord.gg/56xGWJRqEQ"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 text-sm font-bold rounded-full bg-primary text-primary-foreground hover:bg-primary/95 shadow-md active:scale-97 transition-all flex items-center gap-2"
            >
              <span>{t('hero.ctaJoin')}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <Link
              href="/platforms"
              className="px-6 py-3.5 text-sm font-bold rounded-full border border-border bg-card hover:bg-muted/10 text-foreground transition-colors flex items-center gap-2"
            >
              <span>{t('hero.ctaExplore')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right column — community presence card, desktop only */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:flex flex-col gap-4 w-72 xl:w-80 shrink-0"
          aria-label="Community stats"
        >
          {/* Main community card */}
          <div className="rounded-2xl border border-border/60 bg-card/70 backdrop-blur-sm p-6 space-y-5 shadow-sm">
            {/* Header */}
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Users className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold text-foreground">{t('heroCard.activeCommunity')}</p>
                <p className="text-[10px] text-muted-foreground">{t('heroCard.liveSubtitle')}</p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl bg-primary/5 border border-primary/10 p-3 space-y-0.5">
                <DiscordMemberCount fallback="500+" />
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{t('heroCard.members')}</p>
              </div>
              <div className="rounded-xl bg-muted/30 border border-border/40 p-3 space-y-0.5">
                <p className="font-heading text-2xl font-bold text-foreground tracking-tight">24/7</p>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{t('heroCard.discussions')}</p>
              </div>
              <div className="rounded-xl bg-muted/30 border border-border/40 p-3 space-y-0.5 col-span-2">
                <p className="text-xs font-bold text-foreground">{t('heroCard.globalDesc')}</p>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://discord.gg/56xGWJRqEQ"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-2 w-full px-4 py-2.5 rounded-full bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/90 transition-colors shadow-sm"
            >
              <span>{t('heroCard.joinDiscord')}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Sub-card — platform previews */}
          <div className="rounded-xl border border-border/40 bg-card/50 p-4 space-y-2">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-2">{t('heroCard.topPlatforms')}</p>
            {[{ name: 'Outlier AI', rate: '$15–50+/hr' }, { name: 'DataAnnotation', rate: '$20–40+/hr' }, { name: 'Alignerr', rate: '$15–60/hr' }].map((p) => (
              <div key={p.name} className="flex items-center justify-between">
                <span className="text-xs font-semibold text-foreground">{p.name}</span>
                <span className="text-[10px] font-bold text-primary bg-primary/8 px-2 py-0.5 rounded-full">{p.rate}</span>
              </div>
            ))}
          </div>

          {/* Scroll indicator — moved here from absolute positioning */}
          <div className="flex items-center gap-2 text-[9px] font-bold text-muted-foreground uppercase tracking-widest opacity-60">
            <div className="w-4 h-6 rounded-full border border-muted-foreground/30 flex justify-center pt-1">
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-1.5 rounded-full bg-primary"
              />
            </div>
            <span>Scroll to explore</span>
          </div>
        </motion.div>
      </section>


      {/* 3. Why Join Section — Redesigned as F4 Step Sequence */}
      <section id="why-join" className="max-w-7xl mx-auto px-6 py-24 sm:px-8 lg:px-12 space-y-16">
        <div className="max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            {t('whyJoin.title')}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            {t('whyJoin.subtitle')}
          </p>
        </div>

        {/* Step Sequence Layout */}
        <div className="relative border-l border-border/80 pl-6 sm:pl-10 space-y-16 max-w-3xl">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const delayClass = idx === 1 ? 'animation-delay-100' : idx === 2 ? 'animation-delay-200' : '';
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Node point */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-[10px] font-bold border border-background shadow-sm">
                  {step.num}
                </div>
                
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-1.5 text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/5 px-2 py-0.5 rounded-md">
                    <Icon className="w-3 h-3" />
                    <span>{step.tagKey}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. Vetted Platform Highlights (Bento Grid Style) */}
      <section className="border-y border-border/40 bg-card/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-24 sm:px-8 lg:px-12 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-2xl space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{t('platforms.vettedData')}</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
                {t('platforms.vettedTitle')}
              </h2>
              <p className="text-muted-foreground text-sm">
                {t('platforms.vettedSubtitle')}
              </p>
            </div>
            <Link
              href="/platforms"
              className="inline-flex items-center gap-1.5 text-primary text-sm font-bold hover:underline"
            >
              <span>{t('ui.viewAllGuides')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Bento-style highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlightedPlatforms.map((plat, idx) => (
              <motion.div
                key={plat.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group border border-border bg-card p-6 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-[0_8px_30px_rgba(224,95,167,0.08)] dark:hover:shadow-[0_8px_30px_rgba(224,95,167,0.15)] hover:border-primary/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-220"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {plat.name}
                    </h3>
                    <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded bg-primary/10 text-primary">
                      {plat.difficulty}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {plat.desc}
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-2 border-t border-border/40 text-xs">
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
                    className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
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

      {/* 5. Where to Find Us */}
      <section className="max-w-7xl mx-auto px-6 py-20 sm:px-8 lg:px-12 text-left border-b border-border/40">
        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center justify-between">
          <div className="max-w-xl space-y-3">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              {t('platforms.title')}
            </h2>
            <p className="text-muted-foreground text-sm">
              {t('platforms.subtitle')}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {platforms.map((platform) => {
              const Icon = platform.icon;
              return (
                <a
                  key={platform.name}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 px-5 py-3 rounded-full border border-border bg-card hover:shadow-md transition-all duration-300 hover:scale-[1.02]"
                >
                  <Icon className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-foreground">{platform.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Community Voices Teaser — KEEP UNCHANGED PER USER INSTRUCTION */}
      <section className="max-w-7xl mx-auto px-6 py-24 sm:px-8 lg:px-12 text-center space-y-8">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            {t('communityVoices.title')}
          </h2>
          <p className="text-muted-foreground text-sm">
            {t('communityVoices.subtitle')}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="border border-dashed border-border bg-card/50 rounded-2xl p-12 text-center">
            <p className="text-muted-foreground text-base">
              {t('communityVoices.comingSoon')}
            </p>
            <Link
              href="/community-voices"
              className="inline-flex items-center gap-1 text-primary font-bold hover:underline mt-4 text-sm"
            >
              <span>{t('communityVoices.readMore')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Resources Section Preview */}
      <section className="border-t border-border/40 bg-card/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 py-24 sm:px-8 lg:px-12 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-2xl space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{t('ui.resources')}</span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
                {t('resources.title')}
              </h2>
              <p className="text-muted-foreground text-sm">
                {t('resources.subtitle')}
              </p>
            </div>
            <Link
              href="/resources"
              className="w-fit inline-flex items-center gap-1 text-primary font-bold hover:underline text-sm"
            >
              <span>{t('ui.viewAllGuides')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {initialResources.slice(0, 2).map((res, idx) => (
              <motion.div
                key={res.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="border border-border bg-card p-6 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-[0_8px_30px_rgba(224,95,167,0.08)] dark:hover:shadow-[0_8px_30px_rgba(224,95,167,0.15)] hover:border-primary/40 hover:scale-[1.01] transition-all duration-220"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="px-2.5 py-0.5 rounded-full font-bold bg-primary/10 text-primary capitalize">
                      {res.category === 'bestPractices' ? t('resources.bestPractices') : res.category === 'starting' ? t('resources.gettingStarted') : res.category === 'resume' ? t('resources.resumePrep') : t('resources.platformGuides')}
                    </span>
                    <span className="text-muted-foreground font-medium">{res.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {res.title}
                  </h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {res.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/40">
                  <Link
                    href={`/resources?id=${res.id}`}
                    className="inline-flex items-center gap-1.5 text-primary text-xs font-bold hover:underline"
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

      {/* 8. Community Guidelines Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 sm:px-8 lg:px-12 space-y-12 border-t border-border/40">
        <div className="max-w-3xl space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            {t('guidelines.title')}
          </h2>
          <p className="text-muted-foreground text-sm">
            {t('guidelines.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              titleKey: 'guidelines.rule1Title',
              descKey: 'guidelines.rule1Desc',
              icon: ShieldCheck
            },
            {
              titleKey: 'guidelines.rule2Title',
              descKey: 'guidelines.rule2Desc',
              icon: Users
            },
            {
              titleKey: 'guidelines.rule3Title',
              descKey: 'guidelines.rule3Desc',
              icon: Compass
            },
            {
              titleKey: 'guidelines.rule4Title',
              descKey: 'guidelines.rule4Desc',
              icon: HelpCircle
            }
          ].map((rule, idx) => {
            const Icon = rule.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="border border-border bg-card p-6 rounded-2xl flex flex-col items-start text-left shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-220"
              >
                <div className="p-2.5 rounded-xl bg-primary/10 text-primary mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-foreground mb-2">
                  {t(rule.titleKey)}
                </h3>
                <p className="text-muted-foreground text-[11px] leading-relaxed">
                  {t(rule.descKey)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 9. Final CTA Strip */}
      <section className="border-t border-border/40 bg-card/20 py-20 text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="font-heading text-3xl font-bold text-foreground">
            {t('ui.connectEvaluators')}
          </h2>
          <p className="text-muted-foreground text-sm max-w-md mx-auto">
            {t('ui.connectSubtitle')}
          </p>
          <div className="pt-2">
            <a
              href="https://discord.gg/56xGWJRqEQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/95 shadow-md active:scale-97 transition-all text-sm"
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
