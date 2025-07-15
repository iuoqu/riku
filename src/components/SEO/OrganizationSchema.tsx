export default function OrganizationSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RiKU Ceramics",
    "description": "Handcrafted porcelain pieces blending traditional Jingdezhen techniques with contemporary design",
    "url": "https://rikuceramics.com", // Replace with your actual domain
    "logo": "https://rikuceramics.com/logo.png", // Replace with your actual logo URL
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "", // Add phone if available
      "contactType": "customer service",
      "email": "riku@rikuceramics.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "", // Add city if you want local SEO
      "addressRegion": "", // Add state/province
      "addressCountry": "" // Add country
    },
    "sameAs": [
      // Add social media profiles here
      // "https://www.facebook.com/rikuceramics",
      // "https://www.instagram.com/rikuceramics"
    ],
    "founder": {
      "@type": "Person",
      "name": "RiKU" // Replace with actual founder name if you want
    },
    "foundingDate": "2024", // Replace with actual founding date
    "areaServed": "Worldwide"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
} 