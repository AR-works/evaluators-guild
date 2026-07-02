'use client';

import Link from 'next/link';
import { useLanguage } from './LanguageProvider';
import { Globe, Mail } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-card transition-colors duration-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center">
              <Logo variant="horizontal" size={38} />
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

          {/* Community Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4 uppercase tracking-wider text-xs">
              {t('footer.community')}
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a
                  href="https://discord.gg/56xGWJRqEQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://www.reddit.com/r/talentcollective/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Reddit (r/talentcollective)
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Twitter / X
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4 uppercase tracking-wider text-xs">
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link href="/platforms" className="hover:text-foreground transition-colors">
                  {t('nav.platforms')}
                </Link>
              </li>
              <li>
                <Link href="/community-voices" className="hover:text-foreground transition-colors">
                  {t('nav.communityVoices')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Talent Collective. {t('footer.rights')}
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
