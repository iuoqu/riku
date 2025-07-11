'use client';

import { useState } from 'react';
import Image from 'next/image';
import artworksData from '@/data/artworks.json';

interface Artwork {
  id: number;
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

  const categories = ['all', 'vases', 'tea-sets', 'sculptures', 'plates'];
  const artworks: Artwork[] = artworksData;

  const filteredArtworks = selectedCategory === 'all'
    ? artworks
    : artworks.filter(artwork => artwork.category === selectedCategory);

  return (
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
            <div key={artwork.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-80">
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{artwork.title}</h2>
                <p className="text-gray-600 mb-4">{artwork.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <p>Dimensions: {artwork.dimensions}</p>
                  <p>Price: {artwork.price}</p>
                </div>
                <button
                  className="mt-4 w-full bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors"
                  onClick={() => window.location.href = '/contact'}
                >
                  Inquire About This Piece
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 