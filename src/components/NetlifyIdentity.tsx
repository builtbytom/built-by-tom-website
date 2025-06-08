'use client';

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    netlifyIdentity: {
      on: (event: string, callback: (user?: unknown) => void) => void;
    };
  }
}

export default function NetlifyIdentity() {
  useEffect(() => {
    // Initialize Netlify Identity widget when it's loaded
    if (typeof window !== 'undefined' && window.netlifyIdentity) {
      window.netlifyIdentity.on('init', (user) => {
        if (!user) {
          window.netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
  }, []);

  return (
    <Script
      src="https://identity.netlify.com/v1/netlify-identity-widget.js"
      strategy="afterInteractive"
    />
  );
}