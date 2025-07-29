import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GoogleAnalytics from '@/components/Analytics/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'RiKU Ceramics | Handcrafted Jingdezhen Porcelain Tea Cups & Coffee Mugs',
    template: '%s | RiKU Ceramics'
  },
  description: 'Discover unique handcrafted porcelain pieces from Jingdezhen, China. Premium ceramic tea cups, coffee mugs, and artisan pottery. Each piece individually crafted using traditional techniques.',
  keywords: 'handcrafted ceramics, Jingdezhen porcelain, ceramic tea cups, handmade coffee mugs, artisan pottery, Chinese ceramics, porcelain art, handthrown pottery, ceramic gifts',
  authors: [{ name: 'RiKU Ceramics' }],
  creator: 'RiKU Ceramics',
  publisher: 'RiKU Ceramics',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'RiKU Ceramics | Handcrafted Jingdezhen Porcelain',
    description: 'Unique handcrafted porcelain pieces from Jingdezhen, China. Premium ceramic tea cups, coffee mugs, and artisan pottery.',
    type: 'website',
    locale: 'en_US',
    siteName: 'RiKU Ceramics',
    url: 'https://rikuceramics.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RiKU Ceramics | Handcrafted Jingdezhen Porcelain',
    description: 'Unique handcrafted porcelain pieces from Jingdezhen, China. Premium ceramic tea cups, coffee mugs, and artisan pottery.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://rikuceramics.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics GA_MEASUREMENT_ID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        <Header />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 