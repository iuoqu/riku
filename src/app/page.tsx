import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const featuredWorks = [
    {
      id: 1,
      title: 'Ethereal Vase Collection',
      image: '/images/vase-1.jpg',
      description: 'A series of delicate porcelain vases with ethereal glazes',
    },
    {
      id: 2,
      title: 'Tea Ceremony Set',
      image: '/images/tea-set.jpg',
      description: 'Traditional tea ceremony set with contemporary elements',
    },
    {
      id: 3,
      title: 'Abstract Sculptures',
      image: '/images/sculpture.jpg',
      description: 'Modern abstract sculptures exploring form and texture',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="/images/hero.jpg"
            alt="RiKU Ceramics Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <h1 className="text-5xl md:text-6xl font-serif mb-6">
              RiKU Ceramics
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Where tradition meets contemporary design in porcelain artistry
            </p>
            <Link
              href="/artworks"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Explore Our Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-center mb-12">
            Featured Works
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
              <h2 className="text-3xl font-serif mb-6">About RiKU Ceramics</h2>
              <p className="text-gray-600 mb-6">
                RiKU Ceramics is dedicated to creating exceptional porcelain pieces that honor traditional
                craftsmanship while embracing modern aesthetics. Each piece is carefully handcrafted,
                ensuring the highest quality and attention to detail.
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
                src="/images/workshop.jpg"
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