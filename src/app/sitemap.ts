import { MetadataRoute } from 'next';
import artworksData from '@/data/artworks.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://rikuceramics.com'; // Replace with your actual domain

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/artworks`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  // Dynamic artwork pages (if you have individual product pages)
  const artworkPages = artworksData.map(artwork => ({
    url: `${baseUrl}/artworks/${artwork.id.toLowerCase()}`,
    lastModified: new Date(artwork.dateCreated),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...artworkPages];
} 