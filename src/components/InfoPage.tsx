import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

/* Hallmark · genre: playful · theme: custom (pink zine)
 * plain reading layout for About, Contact, policy and legal pages
 */

interface InfoPageProps {
  title: string;
  /** Shown as a highlighted notice above the text, e.g. for draft legal pages */
  notice?: string;
  children: React.ReactNode;
}

export default function InfoPage({ title, notice, children }: InfoPageProps) {
  return (
    <div className="w-full max-w-3xl mx-auto px-6 pt-32 pb-24 sm:px-8 flex-grow flex flex-col gap-8">
      <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-semibold text-muted-foreground font-body">
        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-foreground" aria-current="page">{title}</span>
      </nav>

      <h1 className="font-heading text-5xl sm:text-6xl font-bold text-foreground tracking-tight leading-tight border-b-2 border-dashed border-rule pb-6">
        {title}
      </h1>

      {notice && (
        <p className="zine-sticky px-5 py-3 text-sm font-bold font-body" role="note">
          {notice}
        </p>
      )}

      <article className="prose max-w-none">{children}</article>
    </div>
  );
}
