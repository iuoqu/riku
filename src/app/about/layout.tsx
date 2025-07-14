import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About RiKU Ceramics | Jingdezhen Porcelain Heritage & Artisan Craftsmanship',
  description: 'Learn about RiKU Ceramics and our commitment to preserving traditional Jingdezhen porcelain techniques. Discover the heritage behind our handcrafted ceramic tea cups, coffee mugs, and artisan pottery.',
  keywords: 'about RiKU ceramics, Jingdezhen porcelain history, ceramic artisan craftsmanship, handcrafted pottery heritage, Chinese ceramic traditions, porcelain capital history, ceramic care instructions',
  openGraph: {
    title: 'About RiKU Ceramics | Jingdezhen Porcelain Heritage',
    description: 'Discover the rich heritage and traditional craftsmanship behind our handcrafted Jingdezhen porcelain pieces.',
    type: 'website',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 