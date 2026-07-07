import type { Metadata } from 'next';
import { getAllPlatforms } from '@/lib/platforms';
import PlatformsPageClient from '@/components/PlatformsPageClient';

/* Hallmark · genre: playful · macrostructure: Bento / Grid · design-system: design.md · designed-as-app */

export const metadata: Metadata = {
  title: 'AI Evaluation Platform Guides',
  description:
    'In-depth, research-backed reviews of every major AI evaluation platform — Outlier AI, Alignerr, DataAnnotation, Mercor, Micro1, and more. Compare pay, difficulty, interview types, and community experiences.',
  alternates: {
    canonical: 'https://talent-collective.org/platforms',
  },
};

export default async function PlatformsPage() {
  const platforms = await getAllPlatforms();

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://talent-collective.org',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Platforms',
        item: 'https://talent-collective.org/platforms',
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 sm:px-8 lg:px-12 space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <PlatformsPageClient platforms={platforms} />
    </div>
  );
}
