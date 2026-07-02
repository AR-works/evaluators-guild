import type { Metadata } from 'next';
import { getAllPlatforms } from '@/lib/platforms';
import PlatformCard from '@/components/PlatformCard';
import { BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Platform Guides',
  description:
    'In-depth, research-backed reviews of every major AI evaluation platform — Outlier AI, Alignerr, DataAnnotation, Mercor, Micro1, and more. Compare pay, difficulty, interview types, and community experiences.',
  openGraph: {
    title: 'AI Evaluation Platform Guides | Talent Collective',
    description:
      'Definitive, research-backed platform reviews for AI Evaluators, Trainers, and Annotators.',
  },
};

export default async function PlatformsPage() {
  const platforms = await getAllPlatforms();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 flex flex-col gap-12">
      {/* Page Header */}
      <header className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-primary/10 text-primary">
            <BookOpen className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Knowledge Base
          </span>
        </div>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Platform Guides
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          In-depth, research-backed reviews for every major AI evaluation platform. Compare pay,
          hiring difficulty, interview types, and what the community actually reports.
        </p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{platforms.length}</span>
          <span>platforms reviewed and updated regularly</span>
        </div>
      </header>

      {/* Platform Grid */}
      <section aria-label="Platform guide list">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform) => (
            <PlatformCard key={platform.slugSegment} platform={platform} />
          ))}
        </div>
      </section>

      {/* Bottom disclaimer */}
      <footer className="border-t border-border pt-8 text-xs text-muted-foreground space-y-1">
        <p>
          All guides follow the Talent Collective editorial standard. Every claim is labelled with
          its confidence source: <strong className="text-foreground">Official</strong>,{' '}
          <strong className="text-foreground">Verified</strong>,{' '}
          <strong className="text-foreground">Community</strong>, or{' '}
          <strong className="text-foreground">Unknown</strong>.
        </p>
        <p>Pay ranges are approximate and subject to change. No data is fabricated.</p>
      </footer>
    </div>
  );
}
