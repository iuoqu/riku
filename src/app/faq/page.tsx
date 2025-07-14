'use client';

import { useState } from 'react';
import Link from 'next/link';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    category: "Ceramic Care",
    question: "How do I properly clean my handcrafted ceramic pieces?",
    answer: "Hand washing is recommended for all our Jingdezhen porcelain pieces. Use warm water and mild dish soap, avoiding abrasive scrubbers that could scratch the glaze. Dry with a soft cloth to prevent water spots. While most pieces are dishwasher safe, hand washing preserves the natural beauty of the glazes longer."
  },
  {
    category: "Ceramic Care",
    question: "Are your ceramic pieces microwave and dishwasher safe?",
    answer: "Yes, most of our ceramic pieces are both microwave and dishwasher safe. However, we recommend hand washing for pieces with delicate glazes or special finishes to maintain their beauty. Always check the individual product description for specific care instructions."
  },
  {
    category: "Ceramic Care",
    question: "How should I store my ceramic pieces to prevent damage?",
    answer: "Store ceramic pieces with adequate spacing to prevent chipping. Use soft cloth separators when stacking pieces, and avoid extreme temperature changes that could cause thermal shock. Support the base when handling cups and mugs, and store in a safe location away from high-traffic areas."
  },
  {
    category: "Product Information",
    question: "What makes Jingdezhen porcelain special?",
    answer: "Jingdezhen has been the 'Porcelain Capital of the World' for over 1,000 years. The city's unique kaolin clay deposits and centuries of refined ceramic techniques create exceptionally fine, durable porcelain. Our pieces are handcrafted using traditional methods passed down through generations of skilled artisans."
  },
  {
    category: "Product Information",
    question: "Are each ceramic piece truly unique?",
    answer: "Yes, each piece is individually handcrafted, which means every item has unique variations in glaze patterns, color depth, and subtle form differences. These natural variations are hallmarks of authentic handmade ceramics and make each piece special and one-of-a-kind."
  },
  {
    category: "Product Information",
    question: "What types of clay and glazes do you use?",
    answer: "We use premium natural Jingdezhen clay and traditional ceramic glazes. All materials are natural and free from synthetic additives. Our glazes are fired at high temperatures to ensure durability, food safety, and lasting beauty."
  },
  {
    category: "Ordering & Shipping",
    question: "Do you offer international shipping?",
    answer: "Yes, we ship internationally. Our ceramic pieces are carefully packaged with multiple layers of protection to ensure safe delivery. Shipping times vary by location, and we provide tracking information for all orders."
  },
  {
    category: "Ordering & Shipping",
    question: "How are fragile ceramic items packaged for shipping?",
    answer: "We use professional-grade packaging with multiple layers of protection including bubble wrap, foam inserts, and sturdy boxes. Each piece is individually wrapped and secured to prevent movement during transit. We've perfected our packaging methods to ensure your ceramics arrive safely."
  },
  {
    category: "Ordering & Shipping",
    question: "What if my ceramic piece arrives damaged?",
    answer: "While rare due to our careful packaging, if your ceramic piece arrives damaged, please contact us immediately with photos of the damage and packaging. We'll work with you to resolve the issue quickly, whether through replacement or refund."
  },
  {
    category: "Custom Orders",
    question: "Do you accept custom ceramic orders?",
    answer: "Yes, we work with our Jingdezhen artisans to create custom ceramic pieces. Custom orders require advance planning and may take 4-8 weeks depending on complexity. Contact us with your ideas and we'll discuss possibilities and pricing."
  },
  {
    category: "Custom Orders",
    question: "Can you create matching sets or larger quantities?",
    answer: "Absolutely! We can create matching tea sets, dinnerware collections, or larger quantities for special events. Since each piece is handmade, slight variations will exist even in matching sets, which adds to their authentic handcrafted character."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(faqData.map(item => item.category)))];

  const filteredFAQ = selectedCategory === 'All' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // Schema markup for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <section className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our handcrafted Jingdezhen ceramics, care instructions, and ordering process.
            </p>
          </section>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4 mb-12">
            {filteredFAQ.map((item, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-lg shadow-sm"
                itemScope 
                itemType="https://schema.org/Question"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-medium text-gray-900" itemProp="name">
                    {item.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      openItems.includes(index) ? 'transform rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {openItems.includes(index) && (
                  <div 
                    className="px-6 pb-4"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p className="text-gray-600" itemProp="text">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <section className="bg-gray-50 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-serif mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help with any questions about our handcrafted ceramics, custom orders, or care instructions.
            </p>
            <div className="space-x-4">
              <Link
                href="/contact"
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/artworks"
                className="inline-block border border-gray-900 text-gray-900 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors"
              >
                Browse Collection
              </Link>
            </div>
          </section>

          {/* Quick Care Guide */}
          <section className="mt-12">
            <h2 className="text-2xl font-serif mb-6 text-center">Quick Care Guide</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 004-4V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Daily Cleaning</h3>
                <p className="text-gray-600 text-sm">Hand wash with mild soap and warm water for best results</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Safe Storage</h3>
                <p className="text-gray-600 text-sm">Store with spacing and soft separators to prevent chipping</p>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Handle with Care</h3>
                <p className="text-gray-600 text-sm">Support the base and avoid extreme temperature changes</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
} 