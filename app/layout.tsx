import type { Metadata } from 'next';
import { Anton, Archivo, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-anton',
  display: 'swap',
});

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
});

const jbMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500'],
  variable: '--font-jbmono',
  display: 'swap',
});

const SITE_URL = 'https://www.hamdtradingexports.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'HAMD Trading & Exports | Premium Indian Rice, Spices & Onion Exporter',
    template: '%s | HAMD Trading & Exports',
  },
  description:
    'HAMD Trading & Exports ships export-grade Basmati and non-Basmati rice, whole spices and fresh onions from India to buyers across the Gulf, Southeast Asia and beyond, with full quality documentation on every container.',
  keywords: [
    'Indian rice exporter',
    'Basmati rice export India',
    'spice exporter India',
    'onion exporter India',
    'HAMD Trading and Exports',
    'agri export company Mumbai',
    'India to UAE food export',
  ],
  authors: [{ name: 'HAMD Trading & Exports' }],
  openGraph: {
    title: 'HAMD Trading & Exports | Connecting Indian Farms to Global Markets',
    description:
      'Export-grade rice, spices and fresh onion, shipped from India to global buyers with full quality inspection and documentation.',
    url: SITE_URL,
    siteName: 'HAMD Trading & Exports',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HAMD Trading & Exports',
    description: 'Connecting Indian Farms to Global Markets — Rice, Spices & Fresh Onion.',
  },
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
};

import WhatsAppButton from '@/components/WhatsAppButton';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'HAMD Trading & Exports',
    url: SITE_URL,
    description:
      'Exporter of premium Indian rice, spices and fresh onion serving international buyers.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Business Centre, Andheri East',
      addressLocality: 'Mumbai',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+91-98921-96464',
        contactType: 'sales',
      },
    ],
  };

  return (
    <html lang="en" className={`${anton.variable} ${archivo.variable} ${jbMono.variable}`}>
      <body className="font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
