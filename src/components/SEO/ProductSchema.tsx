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
      "price": product.price.replace('$', ''),
      "availability": product.available 
        ? "https://schema.org/InStock" 
        : "https://schema.org/OutOfStock",
      "seller": {
        "@type": "Organization",
        "name": "RiKU Ceramics"
      }
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