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
  ExternalLink
} from 'lucide-react';

export default function Home() {
  const { t } = useLanguage();

  // Why Join Cards setup
  const whyJoinCards = [
    {
      titleKey: 'whyJoin.card1Title',
      descKey: 'whyJoin.card1Desc',
      icon: Coins,
      color: 'text-amber-600 dark:text-amber-400'
    },
    {
      titleKey: 'whyJoin.card2Title',
      descKey: 'whyJoin.card2Desc',
      icon: Globe,
      color: 'text-teal-600 dark:text-teal-400'
    },
    {
      titleKey: 'whyJoin.card3Title',
      descKey: 'whyJoin.card3Desc',
      icon: HeartHandshake,
      color: 'text-rose-600 dark:text-rose-400'
    },
    {
      titleKey: 'whyJoin.card4Title',
      descKey: 'whyJoin.card4Desc',
      icon: GraduationCap,
      color: 'text-amber-600 dark:text-amber-400'
    },
    {
      titleKey: 'whyJoin.card5Title',
      descKey: 'whyJoin.card5Desc',
      icon: TrendingUp,
      color: 'text-teal-600 dark:text-teal-400'
    },
    {
      titleKey: 'whyJoin.card6Title',
      descKey: 'whyJoin.card6Desc',
      icon: MessageSquare,
      color: 'text-sky-600 dark:text-sky-400'
    }
  ];

  // Guidelines setup
  const guidelineRules = [
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
  ];

  // Platform links — equal billing
  const platformLinks = [
    { name: t('platforms.discord'), href: 'https://discord.gg/56xGWJRqEQ', icon: MessageSquare, color: 'text-[#5865F2]' },
    { name: t('platforms.reddit'), href: 'https://www.reddit.com/r/talentcollective/', icon: Users, color: 'text-[#FF4500]' },
    { name: t('platforms.twitter'), href: '#', icon: Globe, color: 'text-foreground' },
    { name: t('platforms.instagram'), href: '#', icon: Compass, color: 'text-[#E1306C]' },
    { name: t('platforms.linkedin'), href: '#', icon: TrendingUp, color: 'text-[#0077B5]' },
    { name: t('platforms.facebook'), href: '#', icon: HeartHandshake, color: 'text-[#1877F2]' },
  ];

  return (
    <div className="flex flex-col w-full relative grid-glow">
      {/* 1. Hero Section — Editorial Typography */}
      <section className="relative w-full max-w-7xl mx-auto px-4 pt-20 pb-24 sm:px-6 lg:px-8 flex flex-col items-center text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl space-y-8"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider">
            <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            {t('hero.badgeText')}
          </div>
          
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            {t('hero.headline')}
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t('hero.subheadline')}
          </p>

          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <Link
              href="#why-join"
              className="px-6 py-3.5 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/20 flex items-center gap-2"
            >
              <span>{t('hero.ctaExplore')}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            
            <a
              href="https://discord.gg/56xGWJRqEQ"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 text-base font-semibold rounded-xl border border-border bg-card hover:bg-muted/30 text-foreground transition-colors flex items-center gap-2"
            >
              <span>{t('hero.ctaJoin')}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* 2. Community Statistics Section */}
      <section className="border-y border-border bg-card/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col justify-center">
              <DiscordMemberCount fallback="500+" />
              <span className="text-sm font-medium text-muted-foreground mt-2">{t('stats.membersLabel')}</span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-primary">{t('stats.globalVal')}</span>
              <span className="text-sm font-medium text-muted-foreground mt-2">{t('stats.globalLabel')}</span>
            </div>
            <div className="flex flex-col justify-center">
              <StatsCounter value={t('stats.discussionsVal')} />
              <span className="text-sm font-medium text-muted-foreground mt-2">{t('stats.discussionsLabel')}</span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-primary">{t('stats.growingVal')}</span>
              <span className="text-sm font-medium text-muted-foreground mt-2">{t('stats.growingLabel')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Why Join Section */}
      <section id="why-join" className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center space-y-12">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            {t('whyJoin.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('whyJoin.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyJoinCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group border border-card-border bg-card p-6 rounded-2xl text-left shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`p-3 rounded-xl bg-muted/50 w-fit mb-5 group-hover:scale-110 transition-transform ${card.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {t(card.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {t(card.descKey)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 4. Where to Find Us — Platform Strip */}
      <section className="border-y border-border bg-card/25 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8 text-center space-y-10">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              {t('platforms.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('platforms.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {platformLinks.map((platform) => {
              const Icon = platform.icon;
              return (
                <a
                  key={platform.name}
                  href={platform.href}
                  target={platform.href !== '#' ? '_blank' : undefined}
                  rel={platform.href !== '#' ? 'noopener noreferrer' : undefined}
                  className="group flex flex-col items-center gap-3 p-5 rounded-2xl border border-card-border bg-card hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className={`p-3 rounded-xl bg-muted/30 group-hover:scale-110 transition-transform ${platform.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-sm font-semibold text-foreground">{platform.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Community Voices Teaser */}
      <section className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            {t('communityVoices.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
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
              className="inline-flex items-center gap-1 text-primary font-semibold hover:underline mt-4 text-sm"
            >
              <span>View Community Voices</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Resources Section Preview */}
      <section className="border-t border-border bg-card/25 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="max-w-2xl space-y-3">
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                {t('resources.title')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('resources.subtitle')}
              </p>
            </div>
            <Link
              href="/resources"
              className="w-fit inline-flex items-center gap-1 text-primary font-bold hover:underline"
            >
              <span>View all guides</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initialResources.slice(0, 2).map((res) => (
              <div
                key={res.id}
                className="border border-card-border bg-card p-6 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-0.5 rounded-full font-medium bg-muted text-muted-foreground capitalize">
                      {res.category === 'bestPractices' ? 'Best Practices' : res.category === 'starting' ? 'Getting Started' : res.category === 'resume' ? 'Resume Prep' : 'Platform Guide'}
                    </span>
                    <span className="text-muted-foreground">{res.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {res.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {res.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border">
                  <Link
                    href={`/resources?id=${res.id}`}
                    className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:underline"
                  >
                    <span>{t('resources.readArticle')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Community Guidelines Preview Section */}
      <section className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            {t('guidelines.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('guidelines.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {guidelineRules.map((rule, idx) => {
            const Icon = rule.icon;
            return (
              <div
                key={idx}
                className="border border-card-border bg-card p-6 rounded-2xl flex flex-col items-center text-center shadow-sm"
              >
                <div className="p-2.5 rounded-full bg-primary/10 text-primary mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-foreground mb-2">
                  {t(rule.titleKey)}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {t(rule.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
