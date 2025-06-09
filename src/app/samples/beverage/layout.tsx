import type { Metadata } from 'next';

export const metadata: Metadata = {
  robots: 'noindex, nofollow',
  title: 'Isla Blū - Craft Soda Demo | Built By Tom',
  description: 'Demo website showcasing e-commerce and subscription features for beverage brands',
};

export default function BeverageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}