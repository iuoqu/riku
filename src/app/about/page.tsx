'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function About() {
  const [imageError, setImageError] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImageError(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">About RiKU Ceramics</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Preserving the ancient art of Jingdezhen porcelain making while creating contemporary ceramic masterpieces for modern living.
          </p>
        </section>

        {/* Our Story */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif mb-6">Our Ceramic Heritage</h2>
              <p className="text-gray-600 mb-4">
                RiKU Ceramics represents a bridge between ancient Chinese pottery traditions and contemporary design aesthetics. Our handcrafted porcelain pieces are created in Jingdezhen, known worldwide as the "Porcelain Capital" for over 1,000 years.
              </p>
              <p className="text-gray-600 mb-4">
                Each ceramic piece in our collection is individually handcrafted by skilled artisans who have inherited techniques passed down through generations. From the initial throwing of clay on the potter's wheel to the final firing in traditional kilns, every step reflects centuries of ceramic mastery.
              </p>
              <p className="text-gray-600">
                We believe that exceptional handmade ceramics should be accessible to contemporary homes, bringing the beauty and functionality of authentic Chinese porcelain to tea ceremonies, coffee rituals, and daily dining experiences around the world.
              </p>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/hero/hero.JPG"
                alt="Traditional Jingdezhen ceramic pottery workshop showing artisan creating handcrafted porcelain"
                fill
                className={`object-cover rounded-lg transition-opacity duration-300 ${
                  imageError['workshop'] ? 'opacity-0' : 'opacity-100'
                }`}
                quality={85}
                onError={() => handleImageError('workshop')}
              />
              {imageError['workshop'] && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
                  <p className="text-gray-500 text-sm">Image coming soon</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Jingdezhen Tradition */}
        <section className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-serif mb-8 text-center">The Jingdezhen Legacy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">1000+ Years of Excellence</h3>
              <p className="text-gray-600">
                Jingdezhen has been the heart of Chinese porcelain production since the Song Dynasty. The city's unique kaolin clay deposits and centuries of refined techniques create the world's finest ceramic art.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Master Artisan Craftsmanship</h3>
              <p className="text-gray-600">
                Our ceramic pieces are created by artisans who have trained for decades in traditional pottery methods. Each handthrown piece reflects their individual skill and artistic interpretation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Natural Material Excellence</h3>
              <p className="text-gray-600">
                Using only natural Jingdezhen clay and traditional glazes, our ceramics are free from synthetic additives, creating pieces that are both beautiful and safe for daily use.
              </p>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif mb-8 text-center">Our Ceramic Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Tea Cup Sets</h3>
              <p className="text-gray-600 mb-4">
                Elegant porcelain tea cups designed for traditional tea ceremonies and modern tea appreciation. Each cup is carefully shaped to enhance the tea drinking experience with optimal heat retention and comfort.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Traditional gongfu tea cups</li>
                <li>• Contemporary tea cup designs</li>
                <li>• Matching saucer sets available</li>
                <li>• Various glaze finishes and colors</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Coffee Mugs</h3>
              <p className="text-gray-600 mb-4">
                Handcrafted ceramic mugs that combine traditional pottery techniques with modern coffee culture. Designed for comfort, durability, and heat retention for the perfect coffee experience.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Various sizes from espresso to large mugs</li>
                <li>• Ergonomic handle designs</li>
                <li>• Unique glaze patterns and textures</li>
                <li>• Microwave and dishwasher safe</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Care Instructions */}
        <section className="mb-16">
          <h2 className="text-3xl font-serif mb-8">Caring for Your Handcrafted Ceramics</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p className="mb-6">
              Proper care ensures your handcrafted ceramic pieces will maintain their beauty and functionality for generations. Our Jingdezhen porcelain is fired at high temperatures, making it durable and suitable for daily use.
            </p>
            
            <h3 className="text-xl font-semibold mb-4 text-gray-900">Daily Care</h3>
            <ul className="mb-6 space-y-2">
              <li>• Hand washing is recommended to preserve the natural beauty of handcrafted glazes</li>
              <li>• Use mild dish soap and warm water for cleaning</li>
              <li>• Avoid abrasive scrubbers that may scratch delicate glaze surfaces</li>
              <li>• Dry with a soft cloth to prevent water spots</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4 text-gray-900">Storage and Handling</h3>
            <ul className="mb-6 space-y-2">
              <li>• Store ceramics with adequate spacing to prevent chipping</li>
              <li>• Use soft cloth separators when stacking pieces</li>
              <li>• Avoid extreme temperature changes to prevent thermal shock</li>
              <li>• Handle with care, supporting the base of cups and mugs</li>
            </ul>

            <h3 className="text-xl font-semibold mb-4 text-gray-900">Microwave and Dishwasher Safety</h3>
            <p className="mb-4">
              Most of our ceramic pieces are microwave and dishwasher safe, though hand washing is preferred for pieces with delicate glazes or gold accents. Always check individual product specifications for care recommendations.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-serif mb-4">Experience Authentic Ceramic Art</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Discover the beauty of handcrafted Jingdezhen porcelain. Each piece tells a story of traditional craftsmanship and contemporary design, perfect for enhancing your daily rituals and special occasions.
          </p>
          <div className="space-x-4">
            <Link
              href="/artworks"
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              Browse Collection
            </Link>
            <Link
              href="/contact"
              className="inline-block border border-gray-900 text-gray-900 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
} 