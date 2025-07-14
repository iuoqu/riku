import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Handcrafted Ceramic Collection | RiKU Ceramics Artworks',
  description: 'Browse our complete collection of handcrafted ceramic artworks. Unique porcelain tea cups, coffee mugs, and decorative pieces from Jingdezhen, China. Each piece individually crafted by skilled artisans.',
  keywords: 'ceramic collection, handcrafted pottery, Jingdezhen ceramics, porcelain tea cups, coffee mugs, ceramic art gallery, artisan ceramics',
  openGraph: {
    title: 'Handcrafted Ceramic Collection | RiKU Ceramics',
    description: 'Browse our complete collection of handcrafted ceramic artworks from Jingdezhen, China.',
    type: 'website',
  },
};

export default function ArtworksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 