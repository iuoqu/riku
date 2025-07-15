'use client';

import { useState } from 'react';

export default function Returns() {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  // Structured data for the returns page
  const returnsSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Returns & Exchange Policy | RiKU Ceramics",
    "description": "Complete return and exchange policy for handcrafted ceramic pieces from RiKU Ceramics.",
    "mainEntity": {
      "@type": "MerchantReturnPolicy",
      "applicableCountry": ["US", "CA", "GB", "AU"],
      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
      "merchantReturnDays": 30,
      "returnMethod": "https://schema.org/ReturnByMail",
      "returnFees": "https://schema.org/FreeReturn",
      "name": "30-Day Return Policy",
      "description": "We offer a 30-day return policy for all handcrafted ceramic pieces. Items must be returned in original condition.",
      "inStoreReturnsOffered": false,
      "restockingFee": {
        "@type": "MonetaryAmount",
        "value": 0,
        "currency": "USD"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(returnsSchema) }}
      />
      
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <section className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Returns & Exchange Policy</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We want you to be completely satisfied with your handcrafted ceramic pieces. Our return policy ensures a worry-free shopping experience.
            </p>
          </section>

          {/* Return Policy Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div className="space-y-8">
              {/* 30-Day Return Window */}
              <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">📅 30-Day Return Window</h2>
                <p className="text-gray-600 mb-4">
                  You have <strong>30 days</strong> from the date of delivery to return any item. All returns must be initiated within this timeframe.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Return window starts from delivery date</li>
                  <li>Contact us to initiate return process</li>
                  <li>Return shipping label provided free of charge</li>
                </ul>
              </section>

              {/* Condition Requirements */}
              <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">📦 Return Conditions</h2>
                <p className="text-gray-600 mb-4">
                  To ensure a smooth return process, items must meet these conditions:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Items in original, undamaged condition</li>
                  <li>Original packaging included when possible</li>
                  <li>No signs of use or wear</li>
                  <li>All ceramic pieces carefully wrapped for return shipping</li>
                </ul>
              </section>

              {/* Process Steps */}
              <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">🔄 Return Process</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-semibold">1</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">Contact Us</h3>
                      <p className="text-gray-600 text-sm">Email us at returns@rikuceramics.com with your order number</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-semibold">2</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">Receive Return Label</h3>
                      <p className="text-gray-600 text-sm">We'll send you a prepaid return shipping label within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-semibold">3</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">Package & Ship</h3>
                      <p className="text-gray-600 text-sm">Carefully package the item and attach the return label</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-semibold">4</span>
                    <div>
                      <h3 className="font-semibold text-gray-900">Receive Refund</h3>
                      <p className="text-gray-600 text-sm">Full refund processed within 5-7 business days of receipt</p>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="space-y-8">
              {/* Refund Information */}
              <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">💰 Refund Details</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center space-x-3">
                    <span className="text-green-500">✓</span>
                    <span><strong>Full refund:</strong> Original purchase price refunded</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-500">✓</span>
                    <span><strong>Free return shipping:</strong> We cover all return costs</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-500">✓</span>
                    <span><strong>No restocking fees:</strong> 100% refund guaranteed</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-green-500">✓</span>
                    <span><strong>Original payment method:</strong> Refund to original card/account</span>
                  </li>
                </ul>
              </section>

              {/* Special Cases */}
              <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">🎨 Custom Orders</h2>
                <p className="text-gray-600 mb-4">
                  Custom ceramic pieces require special consideration:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Custom orders may have extended return windows</li>
                  <li>Personalized items reviewed case-by-case</li>
                  <li>Contact us to discuss custom order returns</li>
                </ul>
              </section>

              {/* Damage Claims */}
              <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">📷 Damage Claims</h2>
                <p className="text-gray-600 mb-4">
                  If your ceramic piece arrives damaged:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Contact us immediately with photos</li>
                  <li>Keep all packaging materials</li>
                  <li>Full replacement or refund provided</li>
                  <li>No need to return damaged items</li>
                </ul>
              </section>

              {/* Contact Information */}
              <section className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">📞 Contact Us</h2>
                <div className="space-y-3 text-gray-600">
                  <p><strong>Returns Email:</strong> returns@rikuceramics.com</p>
                  <p><strong>General Inquiries:</strong> info@rikuceramics.com</p>
                  <p><strong>Response Time:</strong> Within 24 hours</p>
                  <p><strong>Customer Service Hours:</strong> Monday-Friday, 9AM-5PM EST</p>
                </div>
              </section>
            </div>
          </div>

          {/* International Returns */}
          <section className="bg-blue-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">🌍 International Returns</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Covered Countries</h3>
                <p className="text-gray-600 mb-3">We accept returns from:</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>United States</li>
                  <li>Canada</li>
                  <li>United Kingdom</li>
                  <li>Australia</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">International Process</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Same 30-day return window</li>
                  <li>Prepaid return labels provided</li>
                  <li>Customs forms handled by us</li>
                  <li>Refunds in original currency</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Footer */}
          <section className="text-center bg-white rounded-lg p-8 shadow-sm border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Questions About Returns?</h2>
            <p className="text-gray-600 mb-6">
              Our customer service team is here to help with any return questions or concerns. We're committed to making your experience with RiKU Ceramics exceptional.
            </p>
            <a 
              href="mailto:returns@rikuceramics.com"
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
            >
              Contact Returns Team
            </a>
          </section>
        </div>
      </div>
    </>
  );
} 