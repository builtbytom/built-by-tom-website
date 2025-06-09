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
  },
  twitter: {
    card: "summary_large_image",
    title: "Built By Tom - I Build Calm",
    description: "Fix the mess. Build what's missing. Websites and systems that just work.",
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
  return (
    <html lang="en">
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