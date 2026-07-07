'use client';

import Link from 'next/link';
import { PlatformMeta } from '@/lib/platforms';
import PlatformCard from '@/components/PlatformCard';
import { BookOpen, ChevronRight } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

interface PlatformsPageClientProps {
  platforms: PlatformMeta[];
}

export default function PlatformsPageClient({ platforms }: PlatformsPageClientProps) {
  const { t } = useLanguage();

  return (
    <div className="space-y-10">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
        <Link href="/" className="hover:text-primary transition-colors">
          {t('nav.home')}
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-foreground" aria-current="page">
          {t('nav.platforms')}
        </span>
      </nav>

      {/* Page Header */}
      <header className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-primary/10 text-primary">
            <BookOpen className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
            {t('ui.independentDatabase')}
          </span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight">
          {t('nav.platforms')}
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
          {t('ui.vettedPlatformSubtitle')}
        </p>
        <div className="inline-flex items-center gap-2 text-xs text-muted-foreground font-semibold bg-card/60 px-3.5 py-1.5 rounded-full border border-border">
          <span className="font-bold text-foreground">{platforms.length}</span>
          <span> {t('ui.platformsReviewed')}</span>
        </div>
      </header>

      {/* Platform Grid */}
      <section aria-label="Platform guide list">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform) => (
            <PlatformCard key={platform.slugSegment} platform={platform} />
          ))}
        </div>
      </section>

      {/* Bottom disclaimer */}
      <footer className="border-t border-border pt-8 text-[11px] text-muted-foreground space-y-1.5 leading-relaxed">
        <p>{t('ui.editorialStandard')}</p>
        <p>{t('ui.payApproximate')}</p>
      </footer>
    </div>
  );
}
