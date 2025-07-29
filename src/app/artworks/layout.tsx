import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Collection | Handcrafted Jingdezhen Porcelain Ceramics',
  description: 'Explore our complete collection of handcrafted Jingdezhen porcelain ceramics. Tea cups, coffee mugs, decorative pieces, and artisan pottery. Each piece individually crafted using traditional Chinese techniques.',
  keywords: 'ceramic collection, Jingdezhen porcelain, handcrafted ceramics, tea cups, coffee mugs, artisan pottery, Chinese ceramics, porcelain art, ceramic gifts, handthrown pottery',
  openGraph: {
    title: 'Our Collection | RiKU Ceramics',
    description: 'Explore our complete collection of handcrafted Jingdezhen porcelain ceramics. Tea cups, coffee mugs, decorative pieces, and artisan pottery.',
    type: 'website',
    url: 'https://rikuceramics.com/artworks',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Collection | RiKU Ceramics',
    description: 'Explore our complete collection of handcrafted Jingdezhen porcelain ceramics. Tea cups, coffee mugs, decorative pieces, and artisan pottery.',
  },
  alternates: {
    canonical: 'https://rikuceramics.com/artworks',
  },
};

export default function ArtworksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 