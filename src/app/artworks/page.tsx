'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import artworksData from '@/data/artworks.json';
import BreadcrumbSchema from '@/components/SEO/BreadcrumbSchema';

// Debug log
console.log('Loaded artworks data:', artworksData);

interface Artwork {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  dimensions: string;
  price: string;
  available: boolean;
  featured: boolean;
  dateCreated: string;
}

export default function Artworks() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [imageError, setImageError] = useState<Record<string, boolean>>({});

  const categories = ['all', 'Coffee Mugs', 'Tea Cup Sets', 'Decoration'];
  const artworks: Artwork[] = artworksData;

  const filteredArtworks = selectedCategory === 'all'
    ? artworks
    : artworks.filter(artwork => artwork.category === selectedCategory);

  const handleImageError = (artworkId: string) => {
    setImageError(prev => ({ ...prev, [artworkId]: true }));
  };

  return (
    <>
      <BreadcrumbSchema 
        items={[
          { name: "Home", url: "https://rikuceramics.com" },
          { name: "Our Collection", url: "https://rikuceramics.com/artworks" }
        ]} 
      />
      <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif text-center mb-12">Our Collection</h1>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-4 py-2 text-sm font-medium capitalize
                  ${selectedCategory === category
                    ? 'bg-gray-900 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                  }
                  ${category === 'all' ? 'rounded-l-md' : ''}
                  ${category === categories[categories.length - 1] ? 'rounded-r-md' : ''}
                  border border-gray-200
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Artworks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork) => (
            <article key={artwork.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-80">
                <Image
                  src={artwork.image}
                  alt={`${artwork.title} - Handcrafted ${artwork.category.toLowerCase()} made from Jingdezhen porcelain, ${artwork.price}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={`object-cover transition-opacity duration-300 ${
                    imageError[artwork.id] ? 'opacity-0' : 'opacity-100'
                  }`}
                  priority={artwork.featured}
                  quality={85}
                  onError={() => handleImageError(artwork.id)}
                />
                {imageError[artwork.id] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <p className="text-gray-500 text-sm">Image coming soon</p>
                  </div>
                )}
                {artwork.featured && (
                  <div className="absolute top-2 right-2 bg-orange-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    Featured
                  </div>
                )}
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{artwork.title}</h2>
                <p className="text-sm text-gray-500 mb-2">
                  <span>{artwork.category}</span> • 
                  <span className="ml-1">Handcrafted Jingdezhen Porcelain</span>
                </p>
                <p className="text-gray-600 mb-4 line-clamp-3">{artwork.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  {artwork.dimensions && (
                    <p>
                      <span className="font-medium">Dimensions:</span> {artwork.dimensions}
                    </p>
                  )}
                  <div>
                    <p className="text-lg font-semibold text-gray-900">
                      <span>{artwork.price}</span>
                    </p>
                  </div>
                  {artwork.available ? (
                    <p className="text-green-600 font-medium">✓ Available</p>
                  ) : (
                    <p className="text-red-600 font-medium">Sold Out</p>
                  )}
                </div>
                <div className="mt-4 space-y-2">
                  <Link
                    href={`/artworks/${artwork.id.toLowerCase()}`}
                    className="block w-full bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors text-center"
                  >
                    View Details
                  </Link>
                  <button
                    className="w-full border border-gray-900 text-gray-900 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Contact About This Piece
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
    </>
  );
} 