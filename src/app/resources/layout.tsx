import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources | Built By Tom',
  description: 'Free resources and insights from 20+ years of building business systems. Real-world advice on websites, automation, and business operations that actually works.',
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}