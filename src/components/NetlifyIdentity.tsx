'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function NetlifyIdentity() {
  useEffect(() => {
    // Initialize Netlify Identity widget when it's loaded
    if (typeof window !== 'undefined' && (window as any).netlifyIdentity) {
      (window as any).netlifyIdentity.on('init', (user: any) => {
        if (!user) {
          (window as any).netlifyIdentity.on('login', () => {
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