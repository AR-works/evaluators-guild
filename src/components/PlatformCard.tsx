import Link from 'next/link';
import { PlatformMeta } from '@/lib/platforms';
import { Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

/* Hallmark · component: card · genre: playful · theme: custom (pink zine)
 * states: default · hover · focus · active · disabled · loading · error · success
 * contrast: pass
 */

interface PlatformCardProps {
  platform: PlatformMeta;
}

function DifficultyBadge({ difficulty }: { difficulty: string }) {
  const lower = difficulty.toLowerCase();
  let color = 'text-muted-foreground bg-ink/5 border-border';
  if (lower.includes('low')) {
    color = 'text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 border-emerald-500/20';
  } else if (lower.includes('moderate') && !lower.includes('high')) {
    color = 'text-amber-700 dark:text-amber-400 bg-amber-500/10 border-amber-500/20';
  } else if (lower.includes('high') || lower.includes('moderate-high') || lower.includes('vetting')) {
    color = 'text-rose-700 dark:text-rose-400 bg-rose-500/10 border-rose-500/20';
  }

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full border text-[9px] font-bold uppercase tracking-widest font-body ${color}`}>
      {difficulty}
    </span>
  );
}

export default function PlatformCard({ platform }: PlatformCardProps) {
  const { t } = useLanguage();
  const href = `/platforms/${platform.slugSegment}`;

  // Deterministic slight rotation based on platform name
  const rotation = platform.slugSegment.charCodeAt(0) % 2 === 0 ? '0.5deg' : '-0.5deg';

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
      className="group flex flex-col border-2 border-rule bg-card shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-220 overflow-hidden"
      style={{ transform: `rotate(${rotation})` }}
      aria-label={`Read the ${platform.platform} platform guide`}
    >
      <div className="flex flex-col flex-1 p-6 space-y-4">
        {/* Platform Name & Category */}
        <div className="space-y-1">
          <h2 className="font-heading text-2xl text-foreground group-hover:text-primary transition-colors leading-tight">
            {platform.platform}
          </h2>
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest font-body">
            {translateMetadata(platform.category)}
          </p>
        </div>

        {/* Tag Badges */}
        <div className="flex flex-wrap gap-2">
          <DifficultyBadge difficulty={translateMetadata(platform.difficulty)} />
          {platform.remote && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-border text-[9px] font-bold uppercase tracking-widest text-primary bg-primary/5 font-body">
              <CheckCircle className="w-2.5 h-2.5" />
              {t('ui.remote')}
            </span>
          )}
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4 pt-2 text-xs font-body">
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
        <div className="flex items-center justify-between pt-4 border-t-2 border-dashed border-rule text-xs font-body">
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
