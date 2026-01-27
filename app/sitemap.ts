import type { MetadataRoute } from 'next';

const staticPages = (process.env.NEXT_PUBLIC_STATIC_PAGES || '')
  .split(',')
  .filter(Boolean);

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  return staticPages.map((path) => ({
    url: `${baseUrl}${path === '/' ? '' : path}`,
    lastModified: new Date(),
    changeFrequency: path === '/' ? 'yearly' : 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }));
}