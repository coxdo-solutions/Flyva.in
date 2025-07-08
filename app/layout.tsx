import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Flyva Tours & Travels - Premium Travel Experiences',
  description: 'Discover extraordinary travel experiences with Flyva Tours & Travels. Premium tour packages, personalized itineraries, and unforgettable journeys await.',
  keywords: 'travel, tours, vacation, holiday packages, travel agency, flights, hotels, tour packages',
  authors: [{ name: 'Flyva Tours & Travels' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    title: 'Flyva Tours & Travels - Premium Travel Experiences',
    description: 'Discover extraordinary travel experiences with Flyva Tours & Travels.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flyva Tours & Travels - Premium Travel Experiences',
    description: 'Discover extraordinary travel experiences with Flyva Tours & Travels.',
    images: ['/og-image.jpg'],
  },
   metadataBase: new URL("https://localhost:3000"),
   
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}