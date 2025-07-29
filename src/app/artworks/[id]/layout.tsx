import type { Metadata } from 'next';
import artworksData from '@/data/artworks.json';

interface Props {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Find the product by ID (case insensitive)
  const product = artworksData.find(
    item => item.id.toLowerCase() === params.id.toLowerCase()
  );

  if (!product) {
    return {
      title: 'Product Not Found | RiKU Ceramics',
      description: 'The requested ceramic product could not be found.',
    };
  }

  // Extract first sentence of description for meta description
  const metaDescription = product.description
    ? product.description.split('.')[0] + '.'
    : `Handcrafted ${product.category.toLowerCase()} from Jingdezhen porcelain. ${product.title} - ${product.price}`;

  return {
    title: `${product.title} | Handcrafted ${product.category} | RiKU Ceramics`,
    description: metaDescription.length > 160 
      ? metaDescription.substring(0, 157) + '...'
      : metaDescription,
    keywords: `${product.title}, ${product.category.toLowerCase()}, handcrafted ceramics, Jingdezhen porcelain, ceramic ${product.category.toLowerCase()}, artisan pottery, ${product.price}, Chinese ceramics`,
    openGraph: {
      title: `${product.title} | Handcrafted ${product.category} | RiKU Ceramics`,
      description: metaDescription,
      type: 'website',
      url: `https://rikuceramics.com/artworks/${product.id.toLowerCase()}`,
      images: [
        {
          url: `https://rikuceramics.com${product.image}`,
          width: 800,
          height: 600,
          alt: `${product.title} - Handcrafted ${product.category.toLowerCase()} from Jingdezhen porcelain`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.title} | Handcrafted ${product.category} | RiKU Ceramics`,
      description: metaDescription,
      images: [`https://rikuceramics.com${product.image}`],
    },
    alternates: {
      canonical: `https://rikuceramics.com/artworks/${product.id.toLowerCase()}`,
    },
  };
}

export async function generateStaticParams() {
  return artworksData.map((product) => ({
    id: product.id.toLowerCase(),
  }));
}

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return children;
} 