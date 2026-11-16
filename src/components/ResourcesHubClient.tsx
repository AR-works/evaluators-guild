'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';
import { categoryLabel } from '@/components/ResourceArticle';
import { initialResources } from '@/data/initialData';
import { Search, Calendar, ArrowRight } from 'lucide-react';

/* Hallmark · genre: playful · macrostructure: Bento / Grid · theme: custom (pink zine)
 * designed-as-app · zine card layout
 */

export default function ResourcesHubClient() {
  const { t } = useLanguage();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

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
    <div className="space-y-10 flex-grow flex flex-col animate-reveal">
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
                    {categoryLabel(res.category)}
                  </span>
                  <span className="text-muted-foreground font-semibold font-body">{res.readTime}</span>
                </div>
                <h3 className="font-heading text-2xl text-foreground hover:text-primary transition-colors leading-tight">
                  <Link href={`/resources?id=${res.id}`}>{res.title}</Link>
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
                <Link
                  href={`/resources?id=${res.id}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline font-body"
                >
                  <span>{t('resources.readArticle')}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
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
    </div>
  );
}
