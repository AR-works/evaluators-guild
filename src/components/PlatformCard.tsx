import Link from 'next/link';
import { PlatformMeta } from '@/lib/platforms';
import { Clock, ArrowRight, CheckCircle, HelpCircle } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

interface PlatformCardProps {
  platform: PlatformMeta;
}

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const lower = difficulty.toLowerCase();
  let color = 'text-muted-foreground bg-ink/5 dark:bg-paper/5 border-border/40';
  if (lower.includes('low')) {
    color = 'text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
  } else if (lower.includes('moderate') && !lower.includes('high')) {
    color = 'text-amber-700 dark:text-amber-400 bg-amber-500/10 border-amber-500/20';
  } else if (lower.includes('high') || lower.includes('moderate-high') || lower.includes('vetting')) {
    color = 'text-rose-700 dark:text-rose-400 bg-rose-500/10 border-rose-500/20';
  }

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full border text-[9px] font-bold uppercase tracking-widest ${color}`}>
      {difficulty}
    </span>
  );
}

export default function PlatformCard({ platform }: PlatformCardProps) {
  const { t } = useLanguage();
  const href = `/platforms/${platform.slugSegment}`;

  const translateMetadata = (val: string): string => {
    const clean = val.trim();
    const lower = clean.toLowerCase();
    if (lower === 'low') return t('ui.low');
    if (lower === 'medium') return t('ui.medium');
    if (lower === 'high') return t('ui.high');
    if (lower === 'medium-high' || lower === 'moderate-high') return t('platforms.mediumHigh');
    if (lower === 'high vetting') return t('platforms.highVetting');
    if (lower === 'skill exams') return t('platforms.skillExams');
    if (lower === 'resume vetting') return t('ui.resumeVetting');
    if (lower === 'ai evaluation platform') return t('ui.aiEvaluationPlatform');
    if (lower === 'varies') return t('ui.varies');
    return clean;
  };

  return (
    <Link
      href={href}
      className="group flex flex-col border border-border bg-card rounded-2xl shadow-sm hover:shadow-[0_8px_30px_rgba(224,95,167,0.08)] dark:hover:shadow-[0_8px_30px_rgba(224,95,167,0.15)] hover:border-primary/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-220 overflow-hidden"
      aria-label={`Read the ${platform.platform} platform guide`}
    >
      <div className="flex flex-col flex-1 p-6 space-y-4">
        {/* Platform Name & Category */}
        <div className="space-y-1">
          <h2 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">
            {platform.platform}
          </h2>
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
            {translateMetadata(platform.category)}
          </p>
        </div>

        {/* Tag Badges */}
        <div className="flex flex-wrap gap-2">
          <DifficultyBadge difficulty={translateMetadata(platform.difficulty)} />
          {platform.remote && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-border text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/5">
              <CheckCircle className="w-2.5 h-2.5" />
              {t('ui.remote')}
            </span>
          )}
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4 pt-2 text-xs">
          <div>
            <span className="text-[9px] font-bold text-muted-foreground block uppercase tracking-wider">{t('ui.payRange')}</span>
            <span className="font-bold text-foreground mt-0.5 block">{platform.payRange}</span>
          </div>
          <div>
            <span className="text-[9px] font-bold text-muted-foreground block uppercase tracking-wider">{t('ui.interview')}</span>
            <span className="font-bold text-foreground mt-0.5 block line-clamp-1">{translateMetadata(platform.interviewType)}</span>
          </div>
        </div>

        <div className="flex-1 min-h-[1.5rem]" />

        {/* Bottom Metadata & Link */}
        <div className="flex items-center justify-between pt-4 border-t border-border/40 text-xs">
          <div className="flex items-center gap-1.5 text-muted-foreground font-semibold">
            <Clock className="w-3.5 h-3.5" />
            <span>{platform.readingTime}</span>
          </div>
          <span className="inline-flex items-center gap-1 font-bold text-primary transition-all">
            <span>{t('ui.readGuide')}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>
    </Link>
  );
}
