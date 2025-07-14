'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import artworksData from '@/data/artworks.json';
import ProductSchema from '@/components/SEO/ProductSchema';

interface Props {
  params: {
    id: string;
  };
}

export default function ProductPage({ params }: Props) {
  const [imageError, setImageError] = useState(false);
  
  // Find the product by ID (case insensitive)
  const product = artworksData.find(
    item => item.id.toLowerCase() === params.id.toLowerCase()
  );

  if (!product) {
    notFound();
  }

  // Get related products (same category, excluding current product)
  const relatedProducts = artworksData
    .filter(item => item.category === product.category && item.id !== product.id)
    .slice(0, 3);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <>
      <ProductSchema product={product} />
      
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-gray-700">Home</Link>
              <span>/</span>
              <Link href="/artworks" className="hover:text-gray-700">Artworks</Link>
              <span>/</span>
              <Link href={`/artworks?category=${encodeURIComponent(product.category)}`} className="hover:text-gray-700">
                {product.category}
              </Link>
              <span>/</span>
              <span className="text-gray-900">{product.title}</span>
            </div>
          </nav>

          {/* Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="relative">
              <div className="relative h-96 lg:h-[600px] bg-gray-100 rounded-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={`${product.title} - Handcrafted ${product.category.toLowerCase()} from Jingdezhen porcelain`}
                  fill
                  className={`object-cover transition-opacity duration-300 ${
                    imageError ? 'opacity-0' : 'opacity-100'
                  }`}
                  quality={90}
                  priority
                  onError={handleImageError}
                  itemProp="image"
                />
                {imageError && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-500">Image coming soon</p>
                  </div>
                )}
              </div>
              
              {product.featured && (
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded text-sm font-semibold">
                  Featured Piece
                </div>
              )}
            </div>

            {/* Product Information */}
            <div className="space-y-6" itemScope itemType="https://schema.org/Product">
              <div>
                <h1 className="text-3xl lg:text-4xl font-serif mb-4" itemProp="name">
                  {product.title}
                </h1>
                <p className="text-lg text-gray-600 mb-2">
                  <span itemProp="category">{product.category}</span> • 
                  <span className="ml-1">Handcrafted Jingdezhen Porcelain</span>
                </p>
                <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                  <p className="text-2xl font-bold text-gray-900">
                    <span itemProp="price">{product.price}</span>
                    <meta itemProp="priceCurrency" content="USD" />
                  </p>
                  <meta itemProp="availability" content={product.available ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"} />
                </div>
              </div>

              {/* Availability Status */}
              <div className="flex items-center space-x-2">
                {product.available ? (
                  <>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 font-medium">Available</span>
                  </>
                ) : (
                  <>
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-red-600 font-medium">Currently Sold Out</span>
                  </>
                )}
              </div>

              {/* Dimensions */}
              {product.dimensions && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Dimensions</h3>
                  <p className="text-gray-600" itemProp="size">{product.dimensions}</p>
                </div>
              )}

              {/* Description */}
              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-semibold mb-4">About This Piece</h3>
                <div 
                  className="text-gray-600 whitespace-pre-line"
                  itemProp="description"
                  dangerouslySetInnerHTML={{ 
                    __html: product.description.replace(/\n/g, '<br/>') 
                  }}
                />
              </div>

              {/* Key Features */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Handcrafted in Jingdezhen, China</li>
                  <li>• Made from premium natural porcelain</li>
                  <li>• Food safe and microwave safe</li>
                  <li>• Each piece is unique with natural variations</li>
                  <li>• Traditional firing techniques</li>
                  <li>• Dishwasher safe (hand washing recommended)</li>
                </ul>
              </div>

              {/* Contact Button */}
              <div className="space-y-4">
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="w-full bg-gray-900 text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors font-medium"
                >
                  Contact Us About This Piece
                </button>
                <p className="text-sm text-gray-500 text-center">
                  Custom inquiries and international shipping available
                </p>
              </div>
            </div>
          </div>

          {/* Care Instructions */}
          <section className="mb-16 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-serif mb-6">Ceramic Care Instructions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-3">Daily Care</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Hand wash with mild soap and warm water</li>
                  <li>• Avoid abrasive scrubbers</li>
                  <li>• Dry with a soft cloth</li>
                  <li>• Store with adequate spacing</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Best Practices</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Avoid extreme temperature changes</li>
                  <li>• Handle with care, support the base</li>
                  <li>• Clean immediately after use</li>
                  <li>• Use soft cloth separators when stacking</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section>
              <h2 className="text-2xl font-serif mb-8">More from {product.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProducts.map((related) => (
                  <Link
                    key={related.id}
                    href={`/artworks/${related.id.toLowerCase()}`}
                    className="group"
                  >
                    <div className="bg-white rounded-lg overflow-hidden shadow-md group-hover:shadow-lg transition-shadow">
                      <div className="relative h-48">
                        <Image
                          src={related.image}
                          alt={related.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          quality={85}
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold mb-2 group-hover:text-gray-600 transition-colors">
                          {related.title}
                        </h3>
                        <p className="text-gray-600">{related.price}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
} 