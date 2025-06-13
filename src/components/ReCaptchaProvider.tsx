'use client';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

interface ReCaptchaProviderProps {
  children: React.ReactNode;
}

export default function ReCaptchaProvider({ children }: ReCaptchaProviderProps) {
  const reCaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  // If no reCAPTCHA key is provided, just render children without the provider
  if (!reCaptchaKey) {
    console.warn('NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not set. reCAPTCHA protection is disabled.');
    return <>{children}</>;
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={reCaptchaKey}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: 'head',
        nonce: undefined,
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}