import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  getAllPlatforms,
  getAllPlatformSlugs,
  getPlatformBySlug,
} from '@/lib/platforms';
import GuideMetaHeader from '@/components/GuideMetaHeader';
import TableOfContents from '@/components/TableOfContents';
import InternalLinksPanel from '@/components/InternalLinksPanel';
import { ChevronRight } from 'lucide-react';

// ---------------------------------------------------------------------------
// Static generation
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  const slugs = await getAllPlatformSlugs();
  return slugs.map((slug) => ({ slug }));
}

// ---------------------------------------------------------------------------
// Per-page SEO metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = await getPlatformBySlug(slug);
  if (!guide) return {};

  const { meta } = guide;
  const canonicalUrl = `https://talent-collective.org/platforms/${meta.slugSegment}`;

  return {
    title: meta.title,
    description: meta.metaDescription,
    keywords: meta.searchKeywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: meta.title,
      description: meta.ogDescription,
      type: 'article',
      url: canonicalUrl,
      siteName: 'Talent Collective',
      publishedTime: meta.lastReviewed,
      modifiedTime: meta.lastReviewed,
      tags: meta.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.ogDescription,
    },
  };
}

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------

export default async function PlatformGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [guide, allPlatforms] = await Promise.all([
    getPlatformBySlug(slug),
    getAllPlatforms(),
  ]);

  if (!guide) notFound();

  const { meta, contentHtml, toc, schemaJson, internalLinks } = guide;

  return (
    <>
      {/* JSON-LD structured data — injected verbatim from schema.json */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3 shrink-0" />
          <Link href="/platforms" className="hover:text-foreground transition-colors">
            Platform Guides
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
                Questions about this platform?
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Join our community to get answers from people actively working there.
              </p>
              <a
                href="https://discord.gg/56xGWJRqEQ"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-2 px-4 rounded-xl bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-colors text-center"
              >
                Join the Community
              </a>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
