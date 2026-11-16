import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { initialResources } from '@/data/initialData';
import ResourceArticle from '@/components/ResourceArticle';
import ResourcesHubClient from '@/components/ResourcesHubClient';

/* Hallmark · genre: playful · macrostructure: Bento / Grid · theme: custom (pink zine)
 * designed-as-app · zine card layout
 *
 * The article for /resources?id=… is chosen and rendered on the server. It used
 * to be picked on the client and only shown after the list's exit animation
 * finished, which never happens where the browser pauses animation frames, so
 * the article did not open.
 */

interface ResourcesPageProps {
  searchParams: Promise<{ id?: string | string[] }>;
}

async function findResource(searchParams: ResourcesPageProps['searchParams']) {
  const { id } = await searchParams;
  const resourceId = Array.isArray(id) ? id[0] : id;
  return resourceId ? initialResources.find((r) => r.id === resourceId) ?? null : null;
}

export async function generateMetadata({ searchParams }: ResourcesPageProps): Promise<Metadata> {
  const resource = await findResource(searchParams);
  if (resource) {
    return {
      title: resource.title,
      description: resource.description,
      alternates: {
        canonical: `https://talent-collective.org/resources?id=${resource.id}`,
      },
    };
  }
  return {
    title: 'Resources Hub',
    description:
      'Mission notes, platform research, pay benchmarks, safety guides, and practical resources for AI freelancers.',
    alternates: {
      canonical: 'https://talent-collective.org/resources',
    },
  };
}

export default async function ResourcesPage({ searchParams }: ResourcesPageProps) {
  const selectedResource = await findResource(searchParams);

  const breadcrumbElements = [
    {
      '@type': 'ListItem',
      'position': 1,
      'name': 'Home',
      'item': 'https://talent-collective.org'
    },
    {
      '@type': 'ListItem',
      'position': 2,
      'name': 'Resources',
      'item': 'https://talent-collective.org/resources'
    }
  ];

  if (selectedResource) {
    breadcrumbElements.push({
      '@type': 'ListItem',
      'position': 3,
      'name': selectedResource.title,
      'item': `https://talent-collective.org/resources?id=${selectedResource.id}`
    });
  }

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': breadcrumbElements
  };

  return (
    <>
      {/* Migration notice — sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t-2 border-primary/20 bg-card/95 backdrop-blur-md py-3 px-6 shadow-lg animate-slide-up">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-body">
          <p className="text-muted-foreground font-medium">
            <strong className="text-foreground font-bold">Looking for platform reviews?</strong>{' '}
            This section is being replaced by our new, in-depth Platform Guides.
          </p>
          <Link
            href="/platforms"
            className="inline-flex items-center gap-1 text-primary font-bold hover:underline underline-offset-2 shrink-0"
          >
            Go to Platform Guides
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 pt-32 pb-24 sm:px-8 lg:px-12 flex-grow flex flex-col gap-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />
        {/* Breadcrumbs (SEO Best Practice) */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-muted-foreground font-body">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          {selectedResource ? (
            <>
              <Link href="/resources" className="hover:text-primary transition-colors">Resources</Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-foreground truncate max-w-[200px]" aria-current="page">{selectedResource.title}</span>
            </>
          ) : (
            <span className="text-foreground" aria-current="page">Resources</span>
          )}
        </nav>

        {selectedResource ? <ResourceArticle resource={selectedResource} /> : <ResourcesHubClient />}
      </div>
    </>
  );
}
