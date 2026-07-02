import { TocItem } from '@/lib/platforms';
import { List } from 'lucide-react';

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  // Only show H2 headings in ToC (H1 is the title, H3 is too granular for sidebar)
  const h2Items = items.filter((item) => item.level === 2);

  if (h2Items.length === 0) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="border border-card-border bg-card rounded-2xl p-5 space-y-3"
    >
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
        <List className="w-3.5 h-3.5" />
        <span>Contents</span>
      </div>

      <ol className="space-y-1">
        {h2Items.map((item, idx) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-0.5 group"
            >
              <span className="text-[10px] text-primary/60 font-bold mt-1 w-4 shrink-0 text-right">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span className="leading-snug group-hover:underline underline-offset-2">
                {item.text}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
