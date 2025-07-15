'use client';

import Image from 'next/image';

export default function Contact() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif text-center mb-12">Contact Us</h1>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="relative h-64 mb-8 rounded-lg overflow-hidden">
              <Image
                src="/logo.png"
                alt="RiKU Ceramics Logo"
                fill
                className="object-contain bg-white p-8"
              />
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-serif mb-4">Get in Touch</h2>
                <p className="text-gray-600 mb-4">
                  Thank you for your interest in RiKU Ceramics. For inquiries about our pieces or custom orders, please contact us at:
                </p>
                <p className="text-xl font-medium">
                  <a href="mailto:riku@rikuceramics.com" className="text-gray-900 hover:text-gray-600 transition-colors">
                    riku@rikuceramics.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 