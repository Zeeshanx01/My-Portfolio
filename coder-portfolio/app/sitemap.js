import { navLinks } from './constants/navLinks';

export default function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';
  const today = new Date().toISOString().split('T')[0];

  const sectionUrls = navLinks
    .map((link) => ({
      url: `${siteUrl}/${link.path}`,
      lastModified: today,
      changeFrequency: 'monthly',
      priority: link.path === '#home' ? 1.0 : 0.8,
    }));

  return sectionUrls;
} 