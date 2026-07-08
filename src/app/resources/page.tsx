'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';
import { initialResources, ResourceItem } from '@/data/initialData';
import { Search, Clock, Calendar, ArrowLeft, ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/* Hallmark · genre: playful · macrostructure: Bento / Grid · theme: custom (pink zine)
 * designed-as-app · zine card layout
 */

function parseInlineMarkdown(text: string) {
  const boldRegex = /\*\*([^*]+)\*\*/g;
  const elements: React.ReactNode[] = [];
  let match;
  let lastIndex = 0;

  while ((match = boldRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      elements.push(text.substring(lastIndex, match.index));
    }
    elements.push(
      <strong key={`${match.index}-${match[1]}`} className="font-bold text-foreground">
        {match[1]}
      </strong>
    );
    lastIndex = boldRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    elements.push(text.substring(lastIndex));
  }

  return elements.length > 0 ? elements : text;
}

// Simple Markdown parser for resource contents
function parseMarkdown(md: string) {
  return md.split('\n').map((line, idx) => {
    if (line.startsWith('### ')) {
      return <h3 key={idx} className="font-heading text-2xl font-bold text-foreground mt-8 mb-3 tracking-tight">{parseInlineMarkdown(line.replace('### ', ''))}</h3>;
    }
    if (line.startsWith('#### ')) {
      return <h4 key={idx} className="font-heading text-lg font-bold text-foreground mt-6 mb-2 tracking-tight">{parseInlineMarkdown(line.replace('#### ', ''))}</h4>;
    }
    if (line.startsWith('- ')) {
      return <li key={idx} className="ml-6 list-disc text-muted-foreground my-1.5 text-sm leading-relaxed font-body">{parseInlineMarkdown(line.replace('- ', ''))}</li>;
    }
    if (line.match(/^\d+\.\s/)) {
      return <li key={idx} className="ml-6 list-decimal text-muted-foreground my-1.5 text-sm leading-relaxed font-body">{parseInlineMarkdown(line.replace(/^\d+\.\s/, ''))}</li>;
    }
    if (line.trim() === '') {
      return <div key={idx} className="h-3" />;
    }

    return <p key={idx} className="text-muted-foreground leading-relaxed my-3 text-sm font-body">{parseInlineMarkdown(line)}</p>;
  });
}

function ResourcesHubContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedResource, setSelectedResource] = useState<ResourceItem | null>(null);

  // Synchronize URL query parameter `id` to open a resource directly
  useEffect(() => {
    const id = searchParams.get('id');
    if (id) {
      const res = initialResources.find((r) => r.id === id);
      if (res) {
        setTimeout(() => {
          setSelectedResource(res);
        }, 0);
      }
    } else {
      setTimeout(() => {
        setSelectedResource(null);
      }, 0);
    }
  }, [searchParams]);

  const selectResource = (res: ResourceItem | null) => {
    if (res) {
      router.push(`/resources?id=${res.id}`);
    } else {
      router.push('/resources');
    }
  };

  const filteredResources = initialResources.filter((res) => {
    const matchesCategory = selectedCategory === 'all' || res.category === selectedCategory;
    const matchesSearch =
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    { id: 'all', label: t('resources.all') },
    { id: 'starting', label: t('resources.gettingStarted') },
    { id: 'resume', label: t('resources.resumePrep') },
    { id: 'guides', label: t('resources.platformGuides') },
    { id: 'bestPractices', label: t('resources.bestPractices') }
  ];

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

      <AnimatePresence mode="wait">
        {selectedResource ? (
          /* Reader Detailed View */
          <motion.div
            key="reader"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="w-full max-w-3xl mx-auto space-y-8"
          >
            {/* Back Button */}
            <button
              onClick={() => selectResource(null)}
              className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline group font-body"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
              <span>Back to all resources</span>
            </button>

            {/* Header info */}
            <div className="space-y-4 border-b-2 border-dashed border-rule pb-6">
              <span className="px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest bg-primary/10 text-primary font-body">
                {selectedResource.category === 'bestPractices' ? 'Best Practices' : selectedResource.category === 'starting' ? 'Getting Started' : selectedResource.category === 'resume' ? 'Resume Prep' : 'Platform Guide'}
              </span>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-tight">
                {selectedResource.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-[10px] text-muted-foreground font-semibold font-body">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedResource.readTime}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {selectedResource.date}
                </span>
              </div>
            </div>

            {/* Parsed Body Content */}
            <article className="prose max-w-none pb-12">
              {parseMarkdown(selectedResource.content)}
            </article>
          </motion.div>
        ) : (
          /* Main Hub View */
          <motion.div
            key="hub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-10 flex-grow flex flex-col"
          >
            {/* Page Header */}
            <div className="space-y-4">
              <h1 className="font-heading text-5xl sm:text-6xl font-bold text-foreground tracking-tight leading-tight">
                {t('resources.title')}
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed font-body italic">
                {t('resources.subtitle')}
              </p>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between border-b-2 border-dashed border-rule pb-6">
              {/* Categories */}
              <div className="flex flex-wrap gap-2 w-full lg:w-auto justify-start">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all min-h-[44px] font-body ${
                      selectedCategory === cat.id
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'bg-card text-muted-foreground border-2 border-rule hover:bg-secondary/20 hover:text-foreground'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full lg:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('resources.searchPlaceholder')}
                  className="w-full pl-9 pr-4 py-3 rounded-full border-2 border-rule bg-card text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-base font-body"
                />
              </div>
            </div>

            {/* Grid List */}
            {filteredResources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
                {filteredResources.map((res, idx) => (
                  <div
                    key={res.id}
                    className="card-straighten border-2 border-rule bg-card p-6 flex flex-col justify-between shadow-md transition-all duration-220"
                    style={{ transform: idx % 2 === 0 ? 'rotate(-0.4deg)' : 'rotate(0.4deg)' }}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="px-2.5 py-0.5 rounded-full font-bold bg-primary/10 text-primary capitalize font-body">
                          {res.category === 'bestPractices' ? 'Best Practices' : res.category === 'starting' ? 'Getting Started' : res.category === 'resume' ? 'Resume Prep' : 'Platform Guide'}
                        </span>
                        <span className="text-muted-foreground font-semibold font-body">{res.readTime}</span>
                      </div>
                      <h3
                        className="font-heading text-2xl text-foreground hover:text-primary cursor-pointer transition-colors leading-tight"
                        onClick={() => selectResource(res)}
                      >
                        {res.title}
                      </h3>
                      <p className="text-muted-foreground text-xs leading-relaxed font-body">
                        {res.description}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t-2 border-dashed border-rule flex items-center justify-between">
                      <span className="text-[10px] text-muted-foreground flex items-center gap-1 font-semibold font-body">
                        <Calendar className="w-3.5 h-3.5" />
                        {res.date}
                      </span>
                      <button
                        onClick={() => selectResource(res)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline font-body"
                      >
                        <span>{t('resources.readArticle')}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-16 bg-card border-2 border-dashed border-rule flex flex-col items-start justify-center gap-3 px-8">
                <h3 className="font-bold text-base text-foreground font-body">No resources found</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-sm font-body">
                  We couldn&apos;t find any resources matching your search terms or category selection. Try using different keywords.
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ResourcesPage() {
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

      <Suspense fallback={
        <div className="flex-grow flex items-center justify-center min-h-[300px]">
          <div className="h-6 w-6 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        </div>
      }>
        <ResourcesHubContent />
      </Suspense>
    </>
  );
}
