'use client';

import Link from 'next/link';
import { PlatformMeta } from '@/lib/platforms';
import PlatformCard from '@/components/PlatformCard';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

/* Hallmark · genre: playful · macrostructure: Bento / Grid · theme: custom (pink zine)
 * designed-as-app · corkboard layout
 */

interface PlatformsPageClientProps {
  platforms: PlatformMeta[];
}

export default function PlatformsPageClient({ platforms }: PlatformsPageClientProps) {
  const { t } = useLanguage();

  return (
    <div className="space-y-10">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-muted-foreground font-body">
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
        <span className="zine-handwritten text-xl text-primary">
          {t('ui.independentDatabase')}
        </span>
        <h1 className="font-heading text-5xl sm:text-6xl font-bold tracking-tight text-foreground leading-tight">
          {t('nav.platforms')}
        </h1>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed font-body">
          {t('ui.vettedPlatformSubtitle')}
        </p>
        <div className="inline-flex items-center gap-2 text-xs text-muted-foreground font-semibold bg-card px-3.5 py-1.5 rounded-full border-2 border-rule font-body">
          <span className="font-bold text-foreground">{platforms.length}</span>
          <span> {t('ui.platformsReviewed')}</span>
        </div>
      </header>

      {/* Platform Grid — corkboard */}
      <section aria-label="Platform guide list">
        <div className="zine-corkboard border-2 border-rule rounded-sm p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform) => (
              <PlatformCard key={platform.slugSegment} platform={platform} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom disclaimer */}
      <footer className="border-t-2 border-dashed border-rule pt-8 text-[11px] text-muted-foreground space-y-1.5 leading-relaxed font-body">
        <p>{t('ui.editorialStandard')}</p>
        <p>{t('ui.payApproximate')}</p>
      </footer>
    </div>
  );
}
