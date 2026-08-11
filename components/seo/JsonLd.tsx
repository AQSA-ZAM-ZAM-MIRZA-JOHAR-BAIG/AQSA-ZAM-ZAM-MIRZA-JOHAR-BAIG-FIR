import React from 'react';

export default function JsonLd() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://firgenerator.org/#founder',
        name: 'Aqsa Zam Zam Mirza Johar Baig',
        jobTitle: 'Founder & Legal Tech Pioneer',
        url: 'https://firgenerator.org/about',
        sameAs: [
          'https://twitter.com',
          'https://linkedin.com',
        ],
        knowsAbout: [
          'FIR generator online',
          'Police complaint format',
          'FIR draft template',
          'Bharatiya Nagarik Suraksha Sanhita (BNSS 2023)',
          'Legal Technology & Citizen Rights',
        ],
        description: 'Founder and creator of FIR Generator Online & Police Complaint Format tool — empowering citizens with transparent legal tools.',
      },
      {
        '@type': 'WebApplication',
        '@id': 'https://firgenerator.org/#app',
        name: 'FIR Generator Online & Police Complaint Format Tool',
        url: 'https://firgenerator.org',
        applicationCategory: 'LegalApplication',
        operatingSystem: 'All',
        creator: {
          '@id': 'https://firgenerator.org/#founder',
        },
        author: {
          '@id': 'https://firgenerator.org/#founder',
        },
        description: 'Free online FIR generator & police complaint format draft template tool designed by Aqsa Zam Zam Mirza Johar Baig under BNSS 2023.',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
