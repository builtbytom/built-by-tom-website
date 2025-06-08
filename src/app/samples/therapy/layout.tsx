import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Therapy Practice Website Demo | Built By Tom',
  description: 'A serene, modern therapy practice website showcasing immersive design and thoughtful automation.',
  robots: 'noindex, follow',
};

export default function TherapyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}