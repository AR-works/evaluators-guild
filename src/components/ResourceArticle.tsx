import Link from 'next/link';
import { Clock, Calendar, ArrowLeft } from 'lucide-react';
import { ResourceItem } from '@/data/initialData';

/* Hallmark · genre: playful · theme: custom (pink zine)
 * resource reader view, rendered on the server so /resources?id=… works
 * without waiting for client-side animation
 */

export function categoryLabel(category: ResourceItem['category']) {
  return category === 'bestPractices'
    ? 'Best Practices'
    : category === 'starting'
      ? 'Getting Started'
      : category === 'resume'
        ? 'Resume Prep'
        : 'Platform Guide';
}

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

export default function ResourceArticle({ resource }: { resource: ResourceItem }) {
  return (
    <div className="w-full max-w-3xl mx-auto space-y-8">
      {/* Back link */}
      <Link
        href="/resources"
        className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline group font-body"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
        <span>Back to all resources</span>
      </Link>

      {/* Header info */}
      <div className="space-y-4 border-b-2 border-dashed border-rule pb-6">
        <span className="px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest bg-primary/10 text-primary font-body">
          {categoryLabel(resource.category)}
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-tight">
          {resource.title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-[10px] text-muted-foreground font-semibold font-body">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {resource.readTime}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {resource.date}
          </span>
        </div>
      </div>

      {/* Parsed Body Content */}
      <article className="prose max-w-none pb-12">
        {parseMarkdown(resource.content)}
      </article>
    </div>
  );
}
