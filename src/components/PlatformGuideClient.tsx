'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { PlatformMeta, TocItem, InternalLinks } from '@/lib/platforms';
import GuideMetaHeader from '@/components/GuideMetaHeader';
import TableOfContents from '@/components/TableOfContents';
import InternalLinksPanel from '@/components/InternalLinksPanel';
import { useLanguage } from './LanguageProvider';
import { DISCORD_INVITE_URL } from '@/lib/siteConfig';

interface PlatformGuideClientProps {
  meta: PlatformMeta;
  contentHtml: string;
  toc: TocItem[];
  internalLinks: InternalLinks;
  allPlatforms: PlatformMeta[];
}

export default function PlatformGuideClient({
  meta,
  contentHtml,
  toc,
  internalLinks,
  allPlatforms,
}: PlatformGuideClientProps) {
  const { t } = useLanguage();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 pt-32 pb-8 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground transition-colors">
          {t('nav.home')}
        </Link>
        <ChevronRight className="w-3 h-3 shrink-0" />
        <Link href="/platforms" className="hover:text-foreground transition-colors">
          {t('nav.platforms')}
        </Link>
        <ChevronRight className="w-3 h-3 shrink-0" />
        <span className="text-foreground font-medium truncate">{meta.platform}</span>
      </nav>

      {/* Two-column layout: content + sidebar */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">
        {/* Main content column */}
        <article className="flex-1 min-w-0">
          <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </article>

        {/* Sidebar */}
        <aside className="w-full lg:w-72 xl:w-80 shrink-0 flex flex-col gap-5 lg:sticky lg:top-20 self-start">
          <GuideMetaHeader meta={meta} />
          <TableOfContents items={toc} />
          <InternalLinksPanel links={internalLinks} allPlatforms={allPlatforms} />

          {/* Community CTA */}
          <div className="border border-primary/20 bg-primary/5 rounded-2xl p-5 text-center space-y-3">
            <p className="text-sm font-semibold text-foreground">
              {t('ui.questionsPlatform')}
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t('ui.discordSubtitle')}
            </p>
            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2.5 px-4 rounded-full bg-primary text-primary-foreground text-xs font-bold hover:bg-primary/95 transition-all text-center"
            >
              {t('ui.joinCommunity')}
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
