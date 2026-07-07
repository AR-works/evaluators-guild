'use client';

import { useEffect, useState } from 'react';
import { TocItem } from '@/lib/platforms';
import { List } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const { t } = useLanguage();
  // Only show H2 headings in ToC
  const h2Items = items.filter((item) => item.level === 2);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (h2Items.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -60% 0px', // Trigger when section is in top half of screen
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const visibleEntry = entries.find((entry) => entry.isIntersecting);
      if (visibleEntry) {
        setActiveId(visibleEntry.target.id);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    h2Items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [h2Items]);

  if (h2Items.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="border border-card-border bg-card rounded-2xl p-5 space-y-3"
    >
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
        <List className="w-3.5 h-3.5" />
        <span>{t('ui.contents')}</span>
      </div>

      <ol className="space-y-1">
        {h2Items.map((item, idx) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`flex items-start gap-2 text-sm transition-all py-0.5 group ${
                  isActive
                    ? 'text-primary font-bold'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <span className={`text-[10px] font-bold mt-1 w-4 shrink-0 text-right ${
                  isActive ? 'text-primary' : 'text-primary/60'
                }`}>
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className={`leading-snug ${isActive ? '' : 'group-hover:underline underline-offset-2'}`}>
                  {item.text}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
