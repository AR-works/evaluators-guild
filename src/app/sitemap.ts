import { MetadataRoute } from 'next';
import { getAllPlatformSlugs } from '@/lib/platforms';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://talent-collective.org';
  const today = new Date();

  // Dynamic platform guide URLs
  const platformSlugs = await getAllPlatformSlugs();
  const platformUrls = platformSlugs.map((slug) => ({
    url: `${baseUrl}/platforms/${slug}`,
    lastModified: today,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Core static pages
  const staticUrls = [
    {
      url: baseUrl,
      lastModified: today,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/platforms`,
      lastModified: today,
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/community-voices`,
      lastModified: today,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    },
    // Privacy and Terms are left out while they are drafts awaiting legal review.
    ...['/about', '/contact', '/editorial-policy'].map((pagePath) => ({
      url: `${baseUrl}${pagePath}`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ];

  return [...staticUrls, ...platformUrls];
}
