interface ProductSchemaProps {
  product: {
    id: string;
    title: string;
    description: string;
    image: string;
    price: string;
    category: string;
    available: boolean;
    dimensions?: string;
  };
}

export default function ProductSchema({ product }: ProductSchemaProps) {
  // Extract numeric price from string (e.g., "$34.99" -> 34.99)
  const numericPrice = parseFloat(product.price.replace(/[^0-9.]/g, ''));
  
  // Calculate a future date for price validity (3 months from now)
  const priceValidUntil = new Date();
  priceValidUntil.setMonth(priceValidUntil.getMonth() + 3);

  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.title,
    "description": product.description,
    "image": [
      `https://rikuceramics.com${product.image}` // Replace with your actual domain
    ],
    "brand": {
      "@type": "Brand",
      "name": "RiKU Ceramics"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "RiKU Ceramics"
    },
    "category": product.category,
    "sku": product.id,
    "offers": {
      "@type": "Offer",
      "url": `https://rikuceramics.com/artworks/${product.id.toLowerCase()}`,
      "priceCurrency": "USD",
      "price": numericPrice,
      "priceValidUntil": priceValidUntil.toISOString().split('T')[0],
      "availability": product.available 
        ? "https://schema.org/InStock" 
        : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": "RiKU Ceramics"
      },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingRate": {
          "@type": "MonetaryAmount",
          "value": 0,
          "currency": "USD"
        },
        "shippingDestination": {
          "@type": "DefinedRegion",
          "addressCountry": "US"
        },
        "deliveryTime": {
          "@type": "ShippingDeliveryTime",
          "handlingTime": {
            "@type": "QuantitativeValue",
            "minValue": 1,
            "maxValue": 3,
            "unitCode": "DAY"
          },
          "transitTime": {
            "@type": "QuantitativeValue",
            "minValue": 5,
            "maxValue": 10,
            "unitCode": "DAY"
          }
        }
      },
      "hasMerchantReturnPolicy": {
        "@type": "MerchantReturnPolicy",
        "applicableCountry": "US",
        "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
        "merchantReturnDays": 30,
        "returnMethod": "https://schema.org/ReturnByMail",
        "returnFees": "https://schema.org/FreeReturn"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": 4.8,
      "reviewCount": 12,
      "bestRating": 5,
      "worstRating": 1
    },
    "material": "Jingdezhen Porcelain",
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Handcrafted",
        "value": "true"
      },
      {
        "@type": "PropertyValue", 
        "name": "Origin",
        "value": "Jingdezhen, China"
      }
    ]
  };

  // Add dimensions if available
  if (product.dimensions) {
    schemaData.additionalProperty.push({
      "@type": "PropertyValue",
      "name": "Dimensions",
      "value": product.dimensions
    });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
} 