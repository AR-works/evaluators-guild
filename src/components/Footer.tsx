'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageProvider';
import { Mail, Globe } from 'lucide-react';
import Logo from './Logo';

/* Hallmark · footer: Ft5 · genre: playful · theme: custom · knobs: sentence-width=38ch, wordmark=under-sentence, rule-above-meta=hairline */

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-card transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-16 sm:px-8 lg:px-12 flex flex-col gap-12">
        
        {/* Foot Statement Closing Line */}
        <div className="space-y-4">
          <p className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground max-w-2xl leading-none">
            {t('ui.noCorporateBS')}
          </p>
          <p className="text-muted-foreground text-sm max-w-md">
            {t('footer.desc')}
          </p>
        </div>

        {/* Info & Directory Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pt-8 border-t border-border/60">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center">
              <Logo variant="horizontal" size={32} />
            </Link>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Mail className="w-3.5 h-3.5 text-primary" />
              <a href="mailto:contact@evaluatorsguild.org" className="hover:text-foreground transition-colors">
                contact@evaluatorsguild.org
              </a>
            </div>
          </div>

          {/* Directory column: Community */}
          <div>
            <h4 className="text-[10px] font-bold text-foreground uppercase tracking-widest mb-3">
              {t('footer.community')}
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground font-medium">
              <li>
                <a
                  href="https://discord.gg/56xGWJRqEQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {t('platforms.discord')} ({t('heroCard.activeCommunity')})
                </a>
              </li>
              <li>
                <a
                  href="https://www.reddit.com/r/talentcollective/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {t('platforms.reddit')} (r/talentcollective)
                </a>
              </li>
            </ul>
          </div>

          {/* Directory column: Quick links */}
          <div>
            <h4 className="text-[10px] font-bold text-foreground uppercase tracking-widest mb-3">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2 text-xs text-muted-foreground font-medium">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/platforms" className="hover:text-primary transition-colors">
                  {t('nav.platforms')}
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-primary transition-colors">
                  {t('nav.resources')}
                </Link>
              </li>
              <li>
                <Link href="/community-voices" className="hover:text-primary transition-colors">
                  {t('nav.communityVoices')}
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Metadata band */}
        <div className="pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Talent Collective. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-1.5 font-medium">
            <Globe className="w-3.5 h-3.5" />
            <span>{t('ui.independentNode')}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
