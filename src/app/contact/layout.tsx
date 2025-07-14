import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact RiKU Ceramics | Handcrafted Porcelain Inquiries',
  description: 'Contact RiKU Ceramics for inquiries about our handcrafted Jingdezhen porcelain pieces. Custom orders, wholesale inquiries, and ceramic artisan services available.',
  keywords: 'contact ceramics artist, ceramic custom orders, Jingdezhen pottery inquiry, handcrafted ceramics wholesale, artisan ceramics contact',
  openGraph: {
    title: 'Contact RiKU Ceramics | Handcrafted Porcelain',
    description: 'Contact us for inquiries about our handcrafted Jingdezhen porcelain pieces and custom ceramic orders.',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 