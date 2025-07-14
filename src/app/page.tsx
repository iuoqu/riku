'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import artworksData from '@/data/artworks.json';
import siteContent from '@/data/siteContent.json';
import OrganizationSchema from '@/components/SEO/OrganizationSchema';
import ProductSchema from '@/components/SEO/ProductSchema';

export default function Home() {
  const [imageError, setImageError] = useState<Record<string, boolean>>({});

  // Get featured works from JSON data
  const featuredWorks = artworksData
    .filter(artwork => artwork.featured)
    .slice(0, siteContent.featuredSection.showCount);

  const handleImageError = (id: string) => {
    setImageError(prev => ({ ...prev, [id]: true }));
  };

  return (
    <>
      <OrganizationSchema />
      {/* Add Product Schema for featured works */}
      {featuredWorks.map((work) => (
        <ProductSchema key={work.id} product={work} />
      ))}
      
      <div>
        {/* Hero Section */}
        <section className="relative h-screen">
          <div className="absolute inset-0">
            <Image
              src={siteContent.hero.image}
              alt="Handcrafted Jingdezhen porcelain ceramics by RiKU Ceramics"
              fill
              sizes="100vw"
              quality={90}
              priority
              className="object-cover"
              onError={() => handleImageError('hero')}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
          <div className="relative h-full flex items-center justify-center text-center text-white">
            <div className="max-w-3xl px-4">
              <h1 className="text-5xl md:text-6xl font-serif mb-6">
                {siteContent.hero.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                {siteContent.hero.subtitle}
              </p>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Discover our unique collection of handcrafted Jingdezhen porcelain tea cups, coffee mugs, and ceramic art pieces. Each piece is individually crafted using traditional Chinese pottery techniques, creating beautiful and functional ceramic art for your home.
              </p>
              <Link
                href="/artworks"
                className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                {siteContent.hero.buttonText}
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Works */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-12">
              <h2 className="text-3xl font-serif mb-4">
                {siteContent.featuredSection.title}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our carefully curated selection of handcrafted ceramic masterpieces. Each porcelain piece showcases the timeless beauty of traditional Jingdezhen craftsmanship combined with contemporary design aesthetics.
              </p>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredWorks.map((work) => (
                <article key={work.id} className="bg-white rounded-lg overflow-hidden shadow-lg" itemScope itemType="https://schema.org/Product">
                  <div className="relative h-64">
                    <Image
                      src={work.image}
                      alt={`${work.title} - Handcrafted ${work.category.toLowerCase()} from Jingdezhen porcelain`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={`object-cover transition-opacity duration-300 ${
                        imageError[work.id] ? 'opacity-0' : 'opacity-100'
                      }`}
                      quality={85}
                      onError={() => handleImageError(work.id)}
                      itemProp="image"
                    />
                    {imageError[work.id] && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                        <p className="text-gray-500 text-sm">Image coming soon</p>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2" itemProp="name">{work.title}</h3>
                    <p className="text-gray-600 mb-2">
                      <span itemProp="category">{work.category}</span> • 
                      <span className="ml-1" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                        <span itemProp="price">{work.price}</span>
                      </span>
                    </p>
                    <p className="text-gray-600 mb-4 line-clamp-3" itemProp="description">{work.description}</p>
                    <Link
                      href="/artworks"
                      className="text-gray-900 font-medium hover:text-gray-600 transition-colors"
                    >
                      View Details →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif mb-6">{siteContent.about.title}</h2>
                <p className="text-gray-600 mb-4">
                  {siteContent.about.description}
                </p>
                <p className="text-gray-600 mb-4">
                  Our ceramic artisans in Jingdezhen, China, continue the thousand-year tradition of creating exceptional porcelain. Each handcrafted piece represents hours of skilled work, from throwing the clay to applying the final glaze, ensuring every ceramic creation is truly unique.
                </p>
                <p className="text-gray-600 mb-6">
                  Whether you're looking for elegant tea ceremony cups, everyday coffee mugs, or decorative ceramic art, our collection offers authentic handmade pottery that brings the beauty of traditional Chinese ceramics to modern homes worldwide.
                </p>
                <Link
                  href="/contact"
                  className="text-gray-900 font-medium hover:text-gray-600 transition-colors"
                >
                  Contact Us →
                </Link>
              </div>
              <div className="relative h-96">
                <Image
                  src={siteContent.about.image}
                  alt="Traditional ceramic pottery workshop in Jingdezhen showing handcrafted porcelain creation process"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-cover rounded-lg transition-opacity duration-300 ${
                    imageError['about'] ? 'opacity-0' : 'opacity-100'
                  }`}
                  quality={85}
                  onError={() => handleImageError('about')}
                />
                {imageError['about'] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
                    <p className="text-gray-500 text-sm">Image coming soon</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg mx-auto text-gray-600">
              <h2 className="text-2xl font-serif text-gray-900 mb-6">Authentic Jingdezhen Porcelain Ceramics</h2>
              <p>
                Jingdezhen, known as the "Porcelain Capital of the World," has been producing the finest ceramic art for over 1,000 years. Our handcrafted porcelain pieces continue this incredible legacy, combining time-honored techniques with contemporary design sensibilities. Each ceramic creation represents the pinnacle of Chinese pottery craftsmanship.
              </p>
              <p>
                Our collection features premium ceramic tea cups perfect for traditional tea ceremonies, elegant coffee mugs for daily use, and decorative porcelain pieces that serve as beautiful home accents. Every item is individually hand-thrown, glazed, and fired using traditional methods, ensuring exceptional quality and unique character in each piece.
              </p>
              <p>
                Whether you're a ceramic art collector, tea enthusiast, or simply appreciate beautiful handcrafted pottery, our Jingdezhen porcelain pieces offer unmatched beauty, functionality, and cultural heritage. Experience the difference that authentic, handmade ceramics can bring to your daily rituals and living spaces.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 