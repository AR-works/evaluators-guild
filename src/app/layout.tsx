import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
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

export const metadata: Metadata = {
  title: {
    default: 'Talent Collective | The Knowledge Base for AI Evaluators & Remote Professionals',
    template: '%s | Talent Collective',
  },
  description:
    'Talent Collective is the definitive knowledge base for AI Evaluators, AI Trainers, Data Annotators, and Prompt Engineers. Discover platform guides, career resources, and a global community.',
  keywords: [
    'AI Evaluator',
    'AI Trainer',
    'Data Annotator',
    'Prompt Engineer',
    'Remote Work',
    'Freelancing',
    'Outlier AI',
    'Alignerr',
    'DataAnnotation',
    'Mercor',
    'Micro1',
    'AI evaluation platform review',
    'RLHF jobs',
  ],
  authors: [{ name: 'Talent Collective' }],
  metadataBase: new URL('https://talent-collective.org'),
  openGraph: {
    title: 'Talent Collective',
    description: 'The definitive knowledge base for AI Evaluators, Trainers, Annotators, and Prompt Engineers.',
    type: 'website',
    url: 'https://talent-collective.org',
    siteName: 'Talent Collective',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Talent Collective',
    description: 'The definitive knowledge base for AI Evaluators, Trainers, Annotators, and Prompt Engineers.',
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
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col transition-colors duration-300">
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
