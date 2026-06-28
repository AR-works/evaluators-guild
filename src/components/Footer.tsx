'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageProvider';
import { Globe, Mail } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-card transition-colors duration-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent text-white shadow-md">
                <span className="text-sm font-bold">EG</span>
              </div>
              <span className="font-heading text-base font-bold tracking-tight text-foreground">
                Evaluators&apos; Guild
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              {t('footer.desc')}
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:contact@evaluatorsguild.org" className="hover:text-foreground transition-colors">
                contact@evaluatorsguild.org
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4 uppercase tracking-wider text-xs">
              {t('footer.community')}
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a
                  href="https://discord.gg/evaluatorsguild"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://reddit.com/r/EvaluatorsGuild"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Reddit (r/EvaluatorsGuild)
                </a>
              </li>
              <li>
                <a href="#twitter" className="hover:text-foreground transition-colors">
                  Twitter / X
                </a>
              </li>
              <li>
                <a href="#instagram" className="hover:text-foreground transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4 uppercase tracking-wider text-xs">
              {t('footer.legal')}
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/resources" className="hover:text-foreground transition-colors">
                  {t('nav.resources')}
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="hover:text-foreground transition-colors">
                  {t('nav.successStories')}
                </Link>
              </li>
              <li>
                <a href="#privacy" className="hover:text-foreground transition-colors">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="#terms" className="hover:text-foreground transition-colors">
                  {t('footer.terms')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Evaluators&apos; Guild. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-1">
            <Globe className="w-3.5 h-3.5" />
            <span>Serving Remote Professionals Globally</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
