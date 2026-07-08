'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from './LanguageProvider';
import { useTheme } from './ThemeProvider';
import LanguageToggle from './LanguageToggle';
import Logo from './Logo';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/* Hallmark · nav: N5 · genre: playful · theme: custom (pink zine)
 * knobs: content-sized pill, warm paper, floating utilities
 * pre-emit critique: P5 H5 E5 S5 R5 V5
 */

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/platforms', label: t('nav.platforms') },
    { href: '/resources', label: t('nav.resources') },
    { href: '/community-voices', label: t('nav.communityVoices') }
  ];

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      {/* ── Floating utilities group — desktop only, top-right ── */}
      <div className="fixed top-4 right-5 z-50 hidden md:flex items-center gap-1.5">
        <LanguageToggle />
        <button
          onClick={toggleTheme}
          className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-border bg-card text-foreground hover:bg-secondary/20 transition-all duration-200"
          aria-label="Toggle theme"
        >
          {theme === 'dark'
            ? <Sun className="w-4 h-4 text-amber-500" />
            : <Moon className="w-4 h-4 text-ink-2" />
          }
        </button>
      </div>

      {/* ── Main floating pill nav ── */}
      <header
        className={`fixed left-1/2 -translate-x-1/2 z-50 w-max max-w-[calc(100%-2rem)] transition-all duration-300 ease-out ${
          scrolled
            ? 'top-2 scale-[0.97]'
            : 'top-4 scale-100'
        }`}
      >
        <div
          className={`relative flex items-center gap-0 rounded-full transition-all duration-300 ${
            scrolled
              ? 'shadow-lg shadow-black/10 dark:shadow-black/30'
              : 'shadow-md shadow-black/8 dark:shadow-black/20'
          }`}
          style={{
            background: 'oklch(from var(--color-paper) l c h / 0.92)',
            backdropFilter: 'blur(16px) saturate(130%)',
            WebkitBackdropFilter: 'blur(16px) saturate(130%)',
            border: '2px solid var(--color-rule)',
            borderRadius: '999px',
            padding: '5px 6px 5px 14px',
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center shrink-0 mr-2 hover:opacity-85 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Logo variant="horizontal" size={28} />
          </Link>

          {/* Separator */}
          <span className="hidden md:block w-px h-5 bg-border/50 mx-2 shrink-0" aria-hidden="true" />

          {/* Desktop nav links — variable width, active sliding pill */}
          <nav className="hidden md:flex items-center" aria-label="Primary">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2.5 text-xs font-semibold rounded-full whitespace-nowrap transition-colors duration-150 ${
                    isActive
                      ? 'text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-primary rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Separator */}
          <span className="hidden md:block w-px h-5 bg-border/50 mx-2 shrink-0" aria-hidden="true" />

          {/* CTA — desktop */}
          <a
            href="https://discord.gg/56xGWJRqEQ"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 btn-press transition-colors duration-150 shadow-sm shrink-0"
          >
            {t('nav.joinCommunity')}
          </a>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-1.5 ml-1">
            <LanguageToggle />
            <button
              onClick={toggleTheme}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-border bg-card text-foreground"
              aria-label="Toggle theme"
            >
              {theme === 'dark'
                ? <Sun className="w-4 h-4 text-amber-500" />
                : <Moon className="w-4 h-4 text-ink-2" />
              }
            </button>
            <button
              onClick={toggleMobileMenu}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary/20 hover:text-foreground border-2 border-border bg-card transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 4, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="absolute top-full left-0 right-0 mt-2 md:hidden"
              style={{
                background: 'oklch(from var(--color-paper) l c h / 0.95)',
                backdropFilter: 'blur(20px) saturate(140%)',
                WebkitBackdropFilter: 'blur(20px) saturate(140%)',
                border: '2px solid var(--color-rule)',
                borderRadius: '16px',
                padding: '8px',
                boxShadow: '0 16px 48px -8px oklch(0% 0 0 / 0.18)',
              }}
            >
              <div className="flex flex-col gap-0.5">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-center py-2.5 px-4 rounded-xl text-sm font-semibold transition-colors ${
                        isActive
                          ? 'text-primary bg-primary/8 dark:bg-primary/12'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted/8'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
              <div className="mt-2 pt-2 border-t border-border/60">
                <a
                  href="https://discord.gg/56xGWJRqEQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex justify-center items-center py-2.5 text-sm font-bold rounded-xl bg-primary text-primary-foreground hover:bg-primary/92 transition-all shadow-sm"
                >
                  {t('nav.joinCommunity')}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
