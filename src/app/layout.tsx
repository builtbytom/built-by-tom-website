import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NetlifyIdentity from "@/components/NetlifyIdentity";

export const metadata: Metadata = {
  title: {
    default: "Built By Tom - I Build Calm",
    template: "%s | Built By Tom"
  },
  description: "Fix the mess. Build what's missing. Websites and systems that just work. Built in days, not months. North Haven, CT based.",
  keywords: ["websites", "automation", "small business", "Connecticut", "New Haven County", "web development", "business systems"],
  authors: [{ name: "Tom", url: "https://ibuildcalm.com" }],
  creator: "Built By Tom",
  publisher: "Built By Tom",
  metadataBase: new URL('https://ibuildcalm.com'),
  icons: {
    icon: [
      {
        url: '/images/BBT Favicon2 (64 x 64 px).png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/images/BBT Favicon Dark2.png',
        media: '(prefers-color-scheme: dark)',
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ibuildcalm.com",
    siteName: "Built By Tom",
    title: "Built By Tom - I Build Calm",
    description: "Fix the mess. Build what's missing. Websites and systems that just work.",
    images: [
      {
        url: "/images/BBT-Social-Card-3.png",
        width: 1200,
        height: 630,
        alt: "Built By Tom - I Build Calm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Built By Tom - I Build Calm",
    description: "Fix the mess. Build what's missing. Websites and systems that just work.",
    images: ["/images/BBT-Social-Card-3.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://ibuildcalm.com/#website',
        url: 'https://ibuildcalm.com',
        name: 'Built By Tom',
        description: 'Custom websites and automation systems for small businesses',
        publisher: {
          '@id': 'https://ibuildcalm.com/#organization'
        }
      },
      {
        '@type': 'LocalBusiness',
        '@id': 'https://ibuildcalm.com/#organization',
        name: 'Built By Tom',
        alternateName: 'I Build Calm',
        description: 'Custom websites and automation systems that help small businesses grow',
        url: 'https://ibuildcalm.com',
        email: 'tom@ibuildcalm.com',
        telephone: '(555) 123-4567',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'North Haven',
          addressRegion: 'CT',
          addressCountry: 'US'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 41.3909,
          longitude: -72.8598
        },
        areaServed: [
          {
            '@type': 'City',
            name: 'North Haven'
          },
          {
            '@type': 'City',
            name: 'New Haven'
          },
          {
            '@type': 'City',
            name: 'Hamden'
          },
          {
            '@type': 'City',
            name: 'Wallingford'
          },
          {
            '@type': 'City',
            name: 'Branford'
          }
        ],
        priceRange: '$$',
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '17:00'
        }
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <NetlifyIdentity />
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}