import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - Ceramic Care & Product Information | RiKU Ceramics',
  description: 'Find answers to common questions about handcrafted Jingdezhen porcelain care, shipping, custom orders, and ceramic maintenance. Expert ceramic care tips and product information.',
  keywords: 'ceramic care FAQ, porcelain care instructions, Jingdezhen ceramic questions, handcrafted pottery care, ceramic cleaning tips, ceramic shipping questions, custom ceramic orders',
  openGraph: {
    title: 'FAQ - Ceramic Care & Product Information | RiKU Ceramics',
    description: 'Expert answers to ceramic care questions, shipping information, and handcrafted porcelain maintenance tips.',
    type: 'website',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 