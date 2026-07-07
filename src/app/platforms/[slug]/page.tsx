import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  getAllPlatforms,
  getAllPlatformSlugs,
  getPlatformBySlug,
} from '@/lib/platforms';
import PlatformGuideClient from '@/components/PlatformGuideClient';

export async function generateStaticParams() {
  const slugs = await getAllPlatformSlugs();
  return slugs.map((slug) => ({ slug }));
}

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

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://talent-collective.org'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Platform Guides',
        'item': 'https://talent-collective.org/platforms'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': meta.platform,
        'item': `https://talent-collective.org/platforms/${meta.slugSegment}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <PlatformGuideClient
        meta={meta}
        contentHtml={contentHtml}
        toc={toc}
        internalLinks={internalLinks}
        allPlatforms={allPlatforms}
      />
    </>
  );
}
