import React from 'react';

export default function JsonLd() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': 'https://firgenerator.org/#founder',
        name: 'Aqsa Zam Zam Mirza Johar Baig',
        alternateName: [
          'AQSA ZAM ZAM MIRZA JOHAR BAIG',
          'Aqsa Zam Zam Mirza Johar Baig',
          'aqsa zam zam mirza johar baig',
          'AQSA ZAM ZAM MIRZA',
          'Aqsa Zam Zam Mirza',
          'aqsa zam zam mirza',
          'AQSA MIRZA',
          'Aqsa Mirza',
          'aqsa mirza',
          'Aqsa Johar Baig',
          'Aqsa M. J. Baig'
        ],
        jobTitle: 'Founder & Legal Tech Pioneer',
        url: 'https://firgenerator.org/about',
        sameAs: [
          'https://github.com/AQSA-ZAM-ZAM-MIRZA-JOHAR-BAIG',
          'https://linkedin.com/in/aqsamirza08',
          'https://kaggle.com/aqsamirza08',
          'https://aqsamirza08.medium.com/',
          'https://youtube.com/@aqsamirza08',
          'https://aqsa-zam-zam-mirza-johar-baig-portf.vercel.app/',
          'https://aqsa-zam-zam-mirza-johar-baig-portfolio-3.vercel.app/',
          'https://aqsazamzammirzajoharbaig.com/',
          'https://aqsa-zam-zam-mirza-johar-baig-blogs.vercel.app/',
          'https://aqsa-zam-zam-mirza-johar-baig-const.vercel.app/',
          'https://firgenerator.org/',
          'https://aqsa-zam-zam-mirza-johar-baig-law-d.vercel.app/',
          'https://aqsa-zam-zam-mirza-johar-baig-law-f.vercel.app/',
          'https://aqsa-zam-zam-mirza-johar-baig-urdu.vercel.app/',
          'https://www.aqsazamzammirzajoharbaig.com/',
          'https://aqsa-zam-zam-mirza-johar-baig.github.io/Yashwantrao-chavan-mahavidyalaya/'
        ],
        knowsAbout: [
          'FIR generator online',
          'Police complaint format',
          'FIR draft template',
          'Bharatiya Nagarik Suraksha Sanhita (BNSS 2023)',
          'Legal Technology & Citizen Rights',
        ],
        description: 'Founder and creator of FIR Generator Online & Police Complaint Format tool — empowering citizens with transparent legal tools. Known as Aqsa Zam Zam Mirza Johar Baig, Aqsa Zam Zam Mirza, and Aqsa Mirza.',
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
