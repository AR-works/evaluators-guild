import type { Metadata } from 'next';
import { Geist_Mono, Caveat, Newsreader } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider } from '@/components/LanguageProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const caveat = Caveat({
  variable: '--font-caveat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const newsreader = Newsreader({
  variable: '--font-newsreader',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: {
    default: 'Talent Collective | The Knowledge Base for AI Evaluators & Remote Professionals',
    template: '%s | Talent Collective',
  },
  description:
    'Talent Collective is an independent, non-aligned knowledge base and global community for AI evaluators, RLHF trainers, data annotators, prompt engineers, and AI freelancers.',
  keywords: [
    'AI Evaluator',
    'AI Trainer',
    'Data Annotator',
    'Prompt Engineer',
    'Remote Freelance Jobs',
    'RLHF Jobs',
    'Outlier AI',
    'Alignerr',
    'DataAnnotation',
    'Mercor',
    'Micro1',
    'AI evaluation guide',
    'Independent Freelancer Hub',
    'AI freelancer community',
    'AI platform comparison',
    'AI evaluator pay rates'
  ],
  authors: [{ name: 'Talent Collective' }],
  metadataBase: new URL('https://talent-collective.org'),
  alternates: {
    canonical: 'https://talent-collective.org',
  },
  openGraph: {
    title: 'Talent Collective — Vetted AI Evaluator Hub & Community',
    description: 'An independent, non-aligned knowledge base and community for AI evaluators, trainers, annotators, prompt engineers, and remote AI freelancers.',
    type: 'website',
    url: 'https://talent-collective.org',
    siteName: 'Talent Collective',
    images: [
      {
        url: '/favicon.ico',
        width: 256,
        height: 256,
        alt: 'Talent Collective Logo',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Talent Collective — Vetted AI Evaluator Hub & Community',
    description: 'Independent platform guides, pay benchmarks, safety resources, and community support for AI freelancers.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://talent-collective.org/#organization',
        'name': 'Talent Collective',
        'url': 'https://talent-collective.org',
        'logo': {
          '@type': 'ImageObject',
          '@id': 'https://talent-collective.org/#logo',
          'url': 'https://talent-collective.org/favicon.ico',
          'caption': 'Talent Collective Logo'
        },
        'image': {
          '@id': 'https://talent-collective.org/#logo'
        },
        'description': 'An independent, non-aligned community and knowledge base for AI evaluators, trainers, annotators, prompt engineers, and AI freelancers.'
      },
      {
        '@type': 'WebSite',
        '@id': 'https://talent-collective.org/#website',
        'url': 'https://talent-collective.org',
        'name': 'Talent Collective',
        'description': 'An independent, non-aligned community and knowledge base for AI evaluators, trainers, annotators, prompt engineers, and AI freelancers.',
        'publisher': {
          '@id': 'https://talent-collective.org/#organization'
        }
      }
    ]
  };

  return (
    <html lang="en" className={`${geistMono.variable} ${caveat.variable} ${newsreader.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col transition-colors duration-300">
        {/* Inject JSON-LD inside body to prevent hydration conflicts with Next.js metadata */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          <ThemeProvider>
            <Navbar />
            <main className="flex-grow flex flex-col">{children}</main>
            <Footer />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
