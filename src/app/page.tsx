import Image from 'next/image';
import Link from 'next/link';
import artworksData from '@/data/artworks.json';
import siteContent from '@/data/siteContent.json';

export default function Home() {
  // Get featured works from JSON data
  const featuredWorks = artworksData
    .filter(artwork => artwork.featured)
    .slice(0, siteContent.featuredSection.showCount);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src={siteContent.hero.image}
            alt="RiKU Ceramics Hero"
            fill
            sizes="100vw"
            quality={100}
            priority
            className="object-cover"
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
          <h2 className="text-3xl font-serif text-center mb-12">
            {siteContent.featuredSection.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredWorks.map((work) => (
              <div key={work.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{work.title}</h3>
                  <p className="text-gray-600 mb-4">{work.description}</p>
                  <Link
                    href="/artworks"
                    className="text-gray-900 font-medium hover:text-gray-600 transition-colors"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
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
              <p className="text-gray-600 mb-6">
                {siteContent.about.description}
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
                alt="RiKU Ceramics Workshop"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 