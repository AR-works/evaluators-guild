import Link from 'next/link';
import { PlatformMeta } from '@/lib/platforms';
import { Clock, DollarSign, Zap, ArrowRight, CheckCircle } from 'lucide-react';

interface PlatformCardProps {
  platform: PlatformMeta;
}

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const lower = difficulty.toLowerCase();
  let color = 'text-muted-foreground border-border';
  if (lower.includes('low')) color = 'text-emerald-600 dark:text-emerald-400 border-emerald-300 dark:border-emerald-700';
  else if (lower.includes('moderate') && !lower.includes('high')) color = 'text-amber-600 dark:text-amber-400 border-amber-300 dark:border-amber-700';
  else if (lower.includes('high') || lower.includes('moderate-high')) color = 'text-rose-600 dark:text-rose-400 border-rose-300 dark:border-rose-700';

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full border text-[10px] font-bold uppercase tracking-wide ${color}`}>
      {difficulty}
    </span>
  );
}

export default function PlatformCard({ platform }: PlatformCardProps) {
  const href = `/platforms/${platform.slugSegment}`;

  return (
    <Link
      href={href}
      className="group flex flex-col border border-card-border bg-card rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
      aria-label={`Read the ${platform.platform} platform guide`}
    >
      {/* Card header accent bar */}
      <div className="h-1 w-full bg-gradient-to-r from-primary to-accent" />

      <div className="flex flex-col flex-1 p-6 space-y-4">
        {/* Platform name + category */}
        <div className="space-y-1">
          <h2 className="text-lg font-extrabold text-foreground tracking-tight group-hover:text-primary transition-colors">
            {platform.platform}
          </h2>
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {platform.category}
          </p>
        </div>

        {/* Key stats row */}
        <div className="flex flex-wrap gap-2">
          <DifficultyBadge difficulty={platform.difficulty} />
          {platform.remote && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-border text-[10px] font-bold uppercase tracking-wide text-primary">
              <CheckCircle className="w-2.5 h-2.5" />
              Remote
            </span>
          )}
        </div>

        {/* Pay + reading time */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-start gap-2">
            <DollarSign className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wide font-semibold">Pay Range</p>
              <p className="text-xs font-bold text-foreground leading-tight">{platform.payRange}</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Zap className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wide font-semibold">Interview</p>
              <p className="text-xs font-bold text-foreground leading-tight line-clamp-2">{platform.interviewType}</p>
            </div>
          </div>
        </div>

        {/* Spacer and CTA */}
        <div className="flex-1" />
        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div className="flex items-center gap-1 text-muted-foreground text-xs">
            <Clock className="w-3.5 h-3.5" />
            <span>{platform.readingTime}</span>
          </div>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
            Read Guide
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
