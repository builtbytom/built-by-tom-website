'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Premium Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="group flex flex-col"
            >
              <div className="font-display font-black text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:from-secondary group-hover:to-primary transition-all duration-300">
                BUILT BY TOM
              </div>
              <div className="text-xs text-white/80 font-medium tracking-wider">North Haven, CT</div>
            </Link>
          </div>

          {/* Premium Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link 
                href="/" 
                className="text-white hover:text-white/80 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-white/10 rounded-lg"
              >
                Home
              </Link>
              <div className="relative group">
                <button className="text-white hover:text-white/80 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-white/10 rounded-lg flex items-center">
                  Services
                  <svg className="ml-2 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-3 w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-1">
                  <div className="py-3">
                    <Link href="/services/website" className="block px-6 py-3 text-sm text-foreground hover:bg-primary/10 hover:text-primary font-medium transition-all duration-200">
                      Website Fix
                    </Link>
                    <Link href="/services/automation" className="block px-6 py-3 text-sm text-foreground hover:bg-secondary/10 hover:text-secondary font-medium transition-all duration-200">
                      Automation
                    </Link>
                    <Link href="/services/complete-system" className="block px-6 py-3 text-sm text-foreground hover:bg-accent/10 hover:text-accent font-medium transition-all duration-200">
                      Complete System
                    </Link>
                  </div>
                </div>
              </div>
              <Link 
                href="/about" 
                className="text-white hover:text-white/80 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-white/10 rounded-lg"
              >
                About
              </Link>
              <Link 
                href="/resources" 
                className="text-white hover:text-white/80 px-4 py-2 text-sm font-semibold transition-all duration-300 hover:bg-white/10 rounded-lg"
              >
                Resources
              </Link>
            </div>
          </div>

          {/* Premium CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="/contact" 
              className="group relative px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white text-sm font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-secondary to-sage-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Book a Free Call</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-white/80 p-2"
              aria-label="Main menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-white/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/" 
              className="text-foreground hover:text-primary block px-3 py-2 text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <div className="px-3 py-2">
              <div className="text-foreground text-sm font-medium mb-2">Services</div>
              <div className="pl-4 space-y-1">
                <Link 
                  href="/services/website" 
                  className="text-text-light hover:text-primary block py-1 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Website Fix
                </Link>
                <Link 
                  href="/services/automation" 
                  className="text-text-light hover:text-secondary block py-1 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Automation
                </Link>
                <Link 
                  href="/services/complete-system" 
                  className="text-text-light hover:text-accent block py-1 text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Complete System
                </Link>
              </div>
            </div>
            <Link 
              href="/about" 
              className="text-foreground hover:text-primary block px-3 py-2 text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/resources" 
              className="text-foreground hover:text-primary block px-3 py-2 text-sm font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Resources
            </Link>
            <div className="px-3 pt-4">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-primary to-secondary text-white block w-full text-center px-4 py-2 rounded-lg text-sm font-medium hover:bg-opacity-90 transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Book a Free Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;