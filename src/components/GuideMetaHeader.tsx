import { PlatformMeta } from '@/lib/platforms';
import { Clock, Zap, CalendarDays, CheckCircle, Wifi } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

interface GuideMetaHeaderProps {
  meta: PlatformMeta;
}

function Badge({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold border ${className}`}>
      {children}
    </span>
  );
}

export default function GuideMetaHeader({ meta }: GuideMetaHeaderProps) {
  const { t } = useLanguage();

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

  const difficultyColor = (() => {
    const lower = meta.difficulty.toLowerCase();
    if (lower.includes('low')) return 'text-emerald-600 dark:text-emerald-400 border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/30';
    if (lower.includes('high') || lower.includes('moderate-high')) return 'text-rose-600 dark:text-rose-400 border-rose-300 dark:border-rose-700 bg-rose-50 dark:bg-rose-950/30';
    return 'text-amber-600 dark:text-amber-400 border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-950/30';
  })();

  return (
    <div className="border border-card-border bg-card rounded-2xl p-5 space-y-4">
      <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
        {t('ui.quickOverview')}
      </h3>

      {/* Badges row */}
      <div className="flex flex-wrap gap-2">
        <Badge className="border-primary/30 bg-primary/5 text-primary">
          <Wifi className="w-3 h-3" />
          {meta.remote ? t('ui.remote') : t('ui.locationRequired')}
        </Badge>
        <Badge className={difficultyColor}>
          <Zap className="w-3 h-3" />
          {translateMetadata(meta.difficulty)}
        </Badge>
      </div>

      {/* Details list */}
      <ul className="space-y-3 text-sm">
        <li className="flex items-start gap-3">
          <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
          <div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wide font-bold">{t('ui.interviewType')}</p>
            <p className="font-semibold text-foreground leading-snug">{translateMetadata(meta.interviewType)}</p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
          <div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wide font-bold">{t('ui.readingTime')}</p>
            <p className="font-semibold text-foreground">{meta.readingTime}</p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <CalendarDays className="w-4 h-4 text-primary mt-0.5 shrink-0" />
          <div>
            <p className="text-[10px] text-muted-foreground uppercase tracking-wide font-bold">{t('ui.lastReviewed')}</p>
            <p className="font-semibold text-foreground">{meta.lastReviewed}</p>
          </div>
        </li>
      </ul>

      {/* Tags */}
      {meta.tags.length > 0 && (
        <div className="pt-2 border-t border-border">
          <p className="text-[10px] text-muted-foreground uppercase tracking-wide font-bold mb-2">{t('ui.tags')}</p>
          <div className="flex flex-wrap gap-1.5">
            {meta.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-muted/60 text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
