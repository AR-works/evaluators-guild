import type { Metadata } from 'next';

// The page itself is a client component, so its browser title is set here.
export const metadata: Metadata = {
  title: 'Community Voices',
  // Hidden from the menu and sitemap until there are real, consented stories.
  robots: {
    index: false,
    follow: true,
  },
};

export default function CommunityVoicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
