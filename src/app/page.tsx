'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/LanguageProvider';
import GlobeVisual from '@/components/GlobeVisual';
import StatsCounter from '@/components/StatsCounter';
import { getSuccessStories } from '@/utils/storage';
import { addNewsletterSignup } from '@/utils/storage';
import { initialResources, SuccessStory } from '@/data/initialData';
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
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Home() {
  const { t } = useLanguage();
  const [successStories, setSuccessStories] = useState<SuccessStory[]>([]);
  const [activeStoryIdx, setActiveStoryIdx] = useState(0);
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  // Hydrate success stories from client-side storage to match local edits
  useEffect(() => {
    const stories = getSuccessStories();
    setTimeout(() => {
      setSuccessStories(stories);
    }, 0);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setNewsletterStatus('error');
      setErrorMsg(t('newsletter.invalidEmail'));
      return;
      
    }

    setNewsletterStatus('loading');

    setTimeout(() => {
      const success = addNewsletterSignup(email);
      if (success) {
        setNewsletterStatus('success');
        setEmail('');
        // Celebrate!
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.8 }
        });
      } else {
        setNewsletterStatus('error');
        setErrorMsg('Something went wrong. Please try again.');
      }
    }, 800);
  };

  // Why Join Cards setup
  const whyJoinCards = [
    {
      titleKey: 'whyJoin.card1Title',
      descKey: 'whyJoin.card1Desc',
      icon: Coins,
      color: 'text-emerald-500'
    },
    {
      titleKey: 'whyJoin.card2Title',
      descKey: 'whyJoin.card2Desc',
      icon: Globe,
      color: 'text-indigo-500'
    },
    {
      titleKey: 'whyJoin.card3Title',
      descKey: 'whyJoin.card3Desc',
      icon: HeartHandshake,
      color: 'text-pink-500'
    },
    {
      titleKey: 'whyJoin.card4Title',
      descKey: 'whyJoin.card4Desc',
      icon: GraduationCap,
      color: 'text-amber-500'
    },
    {
      titleKey: 'whyJoin.card5Title',
      descKey: 'whyJoin.card5Desc',
      icon: TrendingUp,
      color: 'text-violet-500'
    },
    {
      titleKey: 'whyJoin.card6Title',
      descKey: 'whyJoin.card6Desc',
      icon: MessageSquare,
      color: 'text-sky-500'
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

  return (
    <div className="flex flex-col w-full relative grid-glow">
      {/* 1. Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-4 pt-16 pb-20 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6 max-w-xl text-left"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold uppercase tracking-wider">
            <span className="flex h-1.5 w-1.5 rounded-full bg-primary animate-ping" />
            {t('hero.badgeText')}
          </div>
          
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
            {t('hero.headline')}
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            {t('hero.subheadline')}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="https://discord.gg/evaluatorsguild"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 text-base font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/20 flex items-center gap-2"
            >
              <span>{t('hero.ctaJoin')}</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            
            <Link
              href="/resources"
              className="px-6 py-3.5 text-base font-semibold rounded-xl border border-border bg-card hover:bg-muted/30 text-foreground transition-colors"
            >
              {t('hero.ctaExplore')}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex-1 w-full max-w-[450px] lg:max-w-none flex items-center justify-center"
        >
          <GlobeVisual />
        </motion.div>
      </section>

      {/* 2. Community Statistics Section */}
      <section className="border-y border-border bg-card/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col justify-center">
              <StatsCounter value={t('stats.membersVal')} />
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
      <section className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center space-y-12">
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

      {/* 4. Community Features Section */}
      <section className="border-t border-border bg-card/25 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              {t('features.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('features.subtitle')}
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-500">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">{t('features.discordTitle')}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{t('features.discordDesc')}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">{t('features.redditTitle')}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{t('features.redditDesc')}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-500">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-foreground">{t('features.socialsTitle')}</h3>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{t('features.socialsDesc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Discord Channel Mockup Widget */}
          <div className="relative rounded-2xl overflow-hidden border border-border bg-slate-900 shadow-2xl p-6 text-slate-100 font-mono text-xs max-w-lg mx-auto w-full">
            {/* Window controls */}
            <div className="flex gap-1.5 mb-6">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="text-[10px] text-slate-500 ml-4 font-sans">Discord Desktop - Evaluators&apos; Guild</span>
            </div>

            <div className="flex gap-4 min-h-[220px]">
              {/* Channel List */}
              <div className="w-1/3 border-r border-slate-800 pr-4 space-y-3 font-sans text-slate-400 select-none">
                <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider mb-2">Channels</div>
                <div className="flex items-center gap-1.5 text-slate-200 bg-slate-800 px-2 py-1 rounded">
                  <span>#</span> general
                </div>
                <div className="flex items-center gap-1.5 px-2 hover:text-slate-200 transition-colors">
                  <span>#</span> job-board
                </div>
                <div className="flex items-center gap-1.5 px-2 hover:text-slate-200 transition-colors">
                  <span>#</span> exam-prep
                </div>
                <div className="flex items-center gap-1.5 px-2 hover:text-slate-200 transition-colors">
                  <span>#</span> help-outlier
                </div>
                <div className="flex items-center gap-1.5 px-2 hover:text-slate-200 transition-colors text-[10px] text-primary">
                  <span>#</span> es-espanol
                </div>
              </div>

              {/* Chat View */}
              <div className="flex-1 space-y-4 overflow-y-auto pr-1">
                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-[9px] font-bold text-white uppercase">
                    MR
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-sans font-bold text-slate-200 text-[10px]">Marcus</span>
                      <span className="text-[9px] text-slate-500">Today at 12:42 PM</span>
                    </div>
                    <p className="text-[11px] text-slate-300 mt-0.5 leading-relaxed font-sans">
                      Passed the Alignerr onboarding exam! The rubric checklist in resources was a lifesaver.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-[9px] font-bold text-white uppercase">
                    SV
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-sans font-bold text-slate-200 text-[10px]">Sven_AI</span>
                      <span className="text-[9px] text-slate-500">Today at 12:44 PM</span>
                    </div>
                    <p className="text-[11px] text-slate-300 mt-0.5 leading-relaxed font-sans">
                      Congrats! Welcome to the group. Check the #job-board for contracts updates, they just posted new prompts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-6 h-6 rounded-full bg-violet-500 flex items-center justify-center text-[9px] font-bold text-white uppercase">
                    AN
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-sans font-bold text-slate-200 text-[10px]">Ana_ES</span>
                      <span className="text-[9px] text-slate-500">Today at 12:45 PM</span>
                    </div>
                    <p className="text-[11px] text-slate-300 mt-0.5 leading-relaxed font-sans">
                      ¿Alguien por aquí trabajando en el proyecto de matemáticas de Outlier?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Input box */}
            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-slate-500 font-sans text-[10px]">
              <span>Message #general</span>
              <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-400">Join Server</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Success Stories Section */}
      <section className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 text-center space-y-12">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            {t('successStories.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('successStories.subtitle')}
          </p>
        </div>

        {successStories.length > 0 ? (
          <div className="max-w-4xl mx-auto relative border border-card-border bg-card p-8 sm:p-12 rounded-3xl text-left shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary uppercase">
                {successStories[activeStoryIdx].tag}
              </span>
              <span className="text-xs text-muted-foreground">
                {successStories[activeStoryIdx].date}
              </span>
            </div>

            <p className="text-lg sm:text-xl font-medium text-foreground leading-relaxed italic mb-8">
              &quot;{successStories[activeStoryIdx].content}&quot;
            </p>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-base text-foreground">
                  {successStories[activeStoryIdx].author}
                </h4>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {successStories[activeStoryIdx].role}
                </p>
              </div>

              {/* Navigation Indicators */}
              <div className="flex gap-1.5">
                {successStories.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStoryIdx(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      idx === activeStoryIdx ? 'w-6 bg-primary' : 'w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                    aria-label={`Go to story ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
              <Link href="/success-stories" className="text-primary font-semibold hover:underline flex items-center gap-1">
                <span>View All Success Stories</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-center text-muted-foreground py-12">
            Loading success stories...
          </div>
        )}
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

      {/* 8. Email Newsletter Signup Section */}
      <section className="max-w-7xl mx-auto px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative border border-primary/20 bg-gradient-to-br from-primary/5 via-accent/5 to-card p-8 sm:p-12 rounded-3xl shadow-xl overflow-hidden text-center max-w-4xl mx-auto">
          {/* Decorative mesh */}
          <div className="absolute inset-0 bg-grid-glow opacity-30 select-none pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="font-heading text-3xl font-extrabold text-foreground tracking-tight">
              {t('newsletter.title')}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t('newsletter.subtitle')}
            </p>

            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 pt-2">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (newsletterStatus === 'error') setNewsletterStatus('idle');
                }}
                placeholder={t('newsletter.placeholder')}
                disabled={newsletterStatus === 'loading' || newsletterStatus === 'success'}
                className="flex-grow px-4 py-3 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none disabled:opacity-50 transition-all text-sm"
                required
              />
              <button
                type="submit"
                disabled={newsletterStatus === 'loading' || newsletterStatus === 'success'}
                className="px-6 py-3 font-semibold rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-75 flex items-center justify-center min-w-[130px] text-sm shrink-0"
              >
                {newsletterStatus === 'loading' ? (
                  <span className="h-4 w-4 rounded-full border-2 border-primary-foreground border-t-transparent animate-spin" />
                ) : (
                  t('newsletter.button')
                )}
              </button>
            </form>

            {newsletterStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm font-semibold flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5 shrink-0" />
                <span>{t('newsletter.success')}</span>
              </motion.div>
            )}

            {newsletterStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 text-sm font-semibold"
              >
                {errorMsg}
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
