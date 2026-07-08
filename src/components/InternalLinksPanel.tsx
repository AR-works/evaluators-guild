import Link from 'next/link';
import { InternalLinks, PlatformMeta } from '@/lib/platforms';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

interface InternalLinksPanelProps {
  links: InternalLinks;
  allPlatforms: PlatformMeta[];
}

/**
 * Tries to resolve a platform guide title to a URL by matching against known platform metadata slugs.
 * Returns null if no match found (link will be rendered as plain text).
 */
function resolveLink(title: string, allPlatforms: PlatformMeta[]): string | null {
  const lower = title.toLowerCase();
  for (const platform of allPlatforms) {
    if (lower.includes(platform.platform.toLowerCase())) {
      return `/platforms/${platform.slugSegment}`;
    }
  }
  return null;
}

function LinkGroup({
  heading,
  items,
  allPlatforms,
}: {
  heading: string;
  items: string[];
  allPlatforms: PlatformMeta[];
}) {
  if (items.length === 0) return null;

  return (
    <div className="space-y-2">
      <h4 className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
        {heading}
      </h4>
      <ul className="space-y-1.5">
        {items.map((item) => {
          const href = resolveLink(item, allPlatforms);
          return (
            <li key={item}>
              {href ? (
                <Link
                  href={href}
                  className="group flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ArrowRight className="w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="hover:underline underline-offset-2">{item}</span>
                </Link>
              ) : (
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground/60">
                  <ArrowRight className="w-3.5 h-3.5 shrink-0 opacity-40" />
                  <span>{item}</span>
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function InternalLinksPanel({ links, allPlatforms }: InternalLinksPanelProps) {
  const { t } = useLanguage();

  const hasAnyLinks =
    links.relatedPlatformGuides.length > 0 ||
    links.relatedCareerGuides.length > 0 ||
    links.relatedComparisonPages.length > 0 ||
    links.relatedResourcePages.length > 0;

  if (!hasAnyLinks) return null;

  return (
    <aside
      aria-label="Related links"
      className="border border-card-border bg-card rounded-2xl p-5 space-y-5"
    >
      <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
        {t('ui.relatedContent')}
      </h3>

      <LinkGroup
        heading={t('ui.platformGuides')}
        items={links.relatedPlatformGuides}
        allPlatforms={allPlatforms}
      />
      <LinkGroup
        heading={t('ui.careerGuides')}
        items={links.relatedCareerGuides}
        allPlatforms={allPlatforms}
      />
      <LinkGroup
        heading={t('ui.comparisons')}
        items={links.relatedComparisonPages}
        allPlatforms={allPlatforms}
      />
      <LinkGroup
        heading={t('ui.resources')}
        items={links.relatedResourcePages}
        allPlatforms={allPlatforms}
      />
    </aside>
  );
}
