'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface MobileStickyNavProps {
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export default function MobileStickyNav({ 
  primaryCTA = { text: 'Get Started', href: '/contact' },
  secondaryCTA = { text: 'See Pricing', href: '/services' }
}: MobileStickyNavProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show after scrolling down 200px and hide when scrolling up
      if (currentScrollY > 200 && currentScrollY > lastScrollY) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div 
      className={`lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-2xl transform transition-transform duration-300 z-40 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex gap-2 p-3">
        <Link 
          href={secondaryCTA.href}
          className="flex-1 text-center py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors"
        >
          {secondaryCTA.text}
        </Link>
        <Link 
          href={primaryCTA.href}
          className="flex-1 text-center py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors shadow-lg"
        >
          {primaryCTA.text}
        </Link>
      </div>
    </div>
  );
}