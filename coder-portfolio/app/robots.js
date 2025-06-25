import { MetadataRoute } from 'next'

export default function robots() {
  const siteUrl = process.env.NEXT_PUBLIC_URL || 'http://localhost:3000';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
} 