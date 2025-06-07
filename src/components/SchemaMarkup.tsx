interface LocalBusinessSchema {
  name: string;
  description: string;
  url: string;
  telephone: string;
  address: {
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  openingHours?: string[];
  priceRange?: string;
}

interface ServiceSchema {
  name: string;
  description: string;
  provider: {
    name: string;
    url: string;
  };
  areaServed?: string | string[];
  serviceType?: string;
  offers?: {
    price: string;
    priceCurrency: string;
  };
}

interface FAQSchema {
  questions: {
    question: string;
    answer: string;
  }[];
}

export function LocalBusinessSchema({ data }: { data: LocalBusinessSchema }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": data.name,
    "description": data.description,
    "url": data.url,
    "telephone": data.telephone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": data.address.streetAddress,
      "addressLocality": data.address.addressLocality,
      "addressRegion": data.address.addressRegion,
      "postalCode": data.address.postalCode,
      "addressCountry": data.address.addressCountry
    },
    ...(data.geo && {
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": data.geo.latitude,
        "longitude": data.geo.longitude
      }
    }),
    ...(data.openingHours && { "openingHours": data.openingHours }),
    ...(data.priceRange && { "priceRange": data.priceRange })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({ data }: { data: ServiceSchema }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": data.name,
    "description": data.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": data.provider.name,
      "url": data.provider.url
    },
    ...(data.areaServed && { "areaServed": data.areaServed }),
    ...(data.serviceType && { "serviceType": data.serviceType }),
    ...(data.offers && {
      "offers": {
        "@type": "Offer",
        "price": data.offers.price,
        "priceCurrency": data.offers.priceCurrency
      }
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ data }: { data: FAQSchema }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.questions.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Built By Tom",
    "description": "Custom websites and automation systems for small businesses. No jargon, just solutions that work.",
    "url": "https://ibuildcalm.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://ibuildcalm.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Tom",
    "jobTitle": "Web Developer & Business Automation Specialist",
    "worksFor": {
      "@type": "Organization",
      "name": "Built By Tom"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "North Haven",
      "addressRegion": "CT"
    },
    "knowsAbout": ["Web Development", "Business Automation", "SEO", "Small Business Systems"]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}