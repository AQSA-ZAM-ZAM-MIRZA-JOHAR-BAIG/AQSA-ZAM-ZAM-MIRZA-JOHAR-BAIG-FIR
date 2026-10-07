import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import TopBanner from '@/components/layout/TopBanner';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://firgenerator.org'),
  title: {
    default: 'FIR Generator Online | Police Complaint Format & Draft Template by Aqsa Zam Zam Mirza Johar Baig (Aqsa Mirza)',
    template: '%s | Aqsa Zam Zam Mirza Johar Baig (Aqsa Mirza)',
  },
  description: 'Free FIR generator online and police complaint format draft template tool under BNSS 2023. Easily create legally sound police complaints created by Aqsa Zam Zam Mirza Johar Baig (also known as Aqsa Zam Zam Mirza and Aqsa Mirza).',
  authors: [{ name: 'Aqsa Zam Zam Mirza Johar Baig (Aqsa Mirza)', url: 'https://firgenerator.org/about' }],
  verification: {
    google: 'googlee89522a79f5eb2c7',
  },
  keywords: [
    'AQSA ZAM ZAM MIRZA JOHAR BAIG',
    'Aqsa Zam Zam Mirza Johar Baig',
    'aqsa zam zam mirza johar baig',
    'AQSA ZAM ZAM MIRZA',
    'Aqsa Zam Zam Mirza',
    'aqsa zam zam mirza',
    'AQSA MIRZA',
    'Aqsa Mirza',
    'aqsa mirza',
    'FIR generator online',
    'police complaint format',
    'FIR draft template',
    'online FIR generator',
    'police complaint draft',
    'BNSS 2023 complaint format',
    'Zero FIR online',
  ],
  alternates: {
    canonical: './',
  },
  openGraph: {
    title: 'FIR Generator Online & Police Complaint Format Tool by Aqsa Zam Zam Mirza Johar Baig (Aqsa Mirza)',
    description: 'Generate structured police complaints online under BNSS 2023. Created by Aqsa Zam Zam Mirza Johar Baig (Aqsa Mirza).',
    url: 'https://firgenerator.org',
    siteName: 'FIR Generator Online',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body className={`${inter.className} bg-slate-950 text-slate-100 antialiased min-h-screen flex flex-col`}>
        <TopBanner />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
