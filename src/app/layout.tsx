import type { Metadata } from 'next';
import { Geist, Geist_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider } from '@/components/LanguageProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Talent Collective | The Knowledge Base for AI Evaluators & Remote Professionals',
    template: '%s | Talent Collective',
  },
  description:
    'Talent Collective is the definitive independent knowledge base and global community for AI Evaluators, RLHF Trainers, Data Annotators, and Prompt Engineers. Discover platform reviews, pay rate data, and application prep resources.',
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
    'Independent Freelancer Hub'
  ],
  authors: [{ name: 'Talent Collective' }],
  metadataBase: new URL('https://talent-collective.org'),
  alternates: {
    canonical: 'https://talent-collective.org',
  },
  openGraph: {
    title: 'Talent Collective — Vetted AI Evaluator Hub & Community',
    description: 'The definitive independent knowledge base and global community for AI Evaluators, Trainers, and Remote Professionals.',
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
    description: 'The definitive independent knowledge base and global community for AI Evaluators, Trainers, and Remote Professionals.',
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
        'description': 'The definitive independent community and knowledge base for AI Evaluators, Trainers, Annotators, and Prompt Engineers.'
      },
      {
        '@type': 'WebSite',
        '@id': 'https://talent-collective.org/#website',
        'url': 'https://talent-collective.org',
        'name': 'Talent Collective',
        'description': 'The definitive independent community and knowledge base for AI Evaluators, Trainers, Annotators, and Prompt Engineers.',
        'publisher': {
          '@id': 'https://talent-collective.org/#organization'
        }
      }
    ]
  };

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} h-full antialiased`} suppressHydrationWarning>
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
