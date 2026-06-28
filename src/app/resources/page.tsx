'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useLanguage } from '@/components/LanguageProvider';
import { initialResources, ResourceItem } from '@/data/initialData';
import { Search, Clock, Calendar, ArrowLeft, ArrowRight, BookMarked } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Simple Markdown parser for resource contents
function parseMarkdown(md: string) {
  return md.split('\n').map((line, idx) => {
    if (line.startsWith('### ')) {
      return <h3 key={idx} className="text-2xl font-bold text-foreground mt-6 mb-3">{line.replace('### ', '')}</h3>;
    }
    if (line.startsWith('#### ')) {
      return <h4 key={idx} className="text-xl font-bold text-foreground mt-4 mb-2">{line.replace('#### ', '')}</h4>;
    }
    if (line.startsWith('- ')) {
      return <li key={idx} className="ml-6 list-disc text-muted-foreground my-1">{line.replace('- ', '')}</li>;
    }
    if (line.match(/^\d+\.\s/)) {
      return <li key={idx} className="ml-6 list-decimal text-muted-foreground my-1">{line.replace(/^\d+\.\s/, '')}</li>;
    }
    if (line.trim() === '') {
      return <div key={idx} className="h-2" />;
    }
    
    // Bold replacement
    const boldRegex = /\*\*(.*?)\*\*/g;
    let match;
    const elements: React.ReactNode[] = [];
    let lastIndex = 0;
    
    while ((match = boldRegex.exec(line)) !== null) {
      if (match.index > lastIndex) {
        elements.push(line.substring(lastIndex, match.index));
      }
      elements.push(<strong key={match.index} className="font-bold text-foreground">{match[1]}</strong>);
      lastIndex = boldRegex.lastIndex;
    }
    if (lastIndex < line.length) {
      elements.push(line.substring(lastIndex));
    }

    return <p key={idx} className="text-muted-foreground leading-relaxed my-2.5">{elements.length > 0 ? elements : line}</p>;
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

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 flex-grow flex flex-col">
      <AnimatePresence mode="wait">
        {selectedResource ? (
          /* Reader Detailed View */
          <motion.div
            key="reader"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-4xl mx-auto space-y-8"
          >
            {/* Back Button */}
            <button
              onClick={() => selectResource(null)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to all resources</span>
            </button>

            {/* Header info */}
            <div className="space-y-4 border-b border-border pb-6">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary capitalize">
                {selectedResource.category === 'bestPractices' ? 'Best Practices' : selectedResource.category === 'starting' ? 'Getting Started' : selectedResource.category === 'resume' ? 'Resume Prep' : 'Platform Guide'}
              </span>
              <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
                {selectedResource.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
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
            <article className="prose dark:prose-invert max-w-none pb-12">
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
            className="space-y-12 flex-grow flex flex-col"
          >
            {/* Page Header */}
            <div className="space-y-4 text-center sm:text-left">
              <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">
                {t('resources.title')}
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                {t('resources.subtitle')}
              </p>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between border-b border-border pb-6">
              {/* Categories */}
              <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center sm:justify-start">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
                      selectedCategory === cat.id
                        ? 'bg-primary text-primary-foreground shadow-md'
                        : 'bg-card text-muted-foreground border border-border hover:bg-muted/30 hover:text-foreground'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('resources.searchPlaceholder')}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-border bg-card text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-xs"
                />
              </div>
            </div>

            {/* Grid List */}
            {filteredResources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-grow">
                {filteredResources.map((res) => (
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
                      <h3 className="text-xl font-bold text-foreground hover:text-primary cursor-pointer transition-colors" onClick={() => selectResource(res)}>
                        {res.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {res.description}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {res.date}
                      </span>
                      <button
                        onClick={() => selectResource(res)}
                        className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:underline"
                      >
                        <span>{t('resources.readArticle')}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-24 bg-card rounded-3xl border border-dashed border-border flex flex-col items-center justify-center gap-4">
                <BookMarked className="w-12 h-12 text-muted" />
                <h3 className="font-bold text-lg">No guides found</h3>
                <p className="text-muted-foreground max-w-sm">
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
    <Suspense fallback={
      <div className="flex-grow flex items-center justify-center min-h-[300px]">
        <div className="h-8 w-8 rounded-full border-4 border-primary border-t-transparent animate-spin" />
      </div>
    }>
      <ResourcesHubContent />
    </Suspense>
  );
}
