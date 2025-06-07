import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import BusinessGoalsSelector from '@/components/BusinessGoalsSelector';

export const metadata: Metadata = {
  title: 'Website Services | Built By Tom',
  description: 'Professional websites that work. Clean, fast sites that turn visitors into customers. Built in days, not months. $3,500 flat rate.',
};

export default function WebsiteServices() {
  return (
    <>
      {/* Hero Section - Redesigned for Impact */}
      <section className="relative min-h-[70vh] lg:min-h-[60vh] bg-gradient-to-br from-primary via-slate-800 to-secondary overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-sage-light/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }}></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-32 pb-16 lg:pb-20">
          <div className="text-center">
            {/* Price prominent but integrated */}
            <div className="mb-10 sm:mb-8">
              <div className="inline-flex items-center bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-2xl">
                <span className="text-2xl sm:text-3xl font-bold">$3,500</span>
                <span className="mx-2 sm:mx-3 text-gray-300">|</span>
                <span className="text-base sm:text-lg font-medium">Complete Website Fix</span>
              </div>
            </div>
            
            {/* Main message - tighter spacing */}
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-7xl text-white mb-6 sm:mb-4 leading-[0.9]">
              Let&apos;s Get Your Website
              <span className="block bg-gradient-to-r from-sage-light via-accent to-white bg-clip-text text-transparent mt-2 leading-[1.1]" style={{ 
                backgroundSize: '200% 200%',
                animation: 'gradient 3s ease infinite'
              }}>
                Working For You
              </span>
            </h1>
            
            {/* Supporting text - more concise */}
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-10 sm:mb-10 max-w-2xl mx-auto leading-tight">
              A great website brings in business 24/7. I&apos;ll build you one that actually does that.
            </p>
            
            {/* Trust points - visual hierarchy */}
            <div className="flex flex-wrap justify-center gap-6 mb-12 sm:mb-10">
              <div className="flex items-center text-white/80">
                <svg className="w-5 h-5 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">3-Week Delivery</span>
              </div>
              <div className="hidden sm:flex items-center text-white/80">
                <svg className="w-5 h-5 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">No Monthly Fees</span>
              </div>
              <div className="hidden sm:flex items-center text-white/80">
                <svg className="w-5 h-5 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">You Own Everything</span>
              </div>
            </div>
            
            {/* CTAs - stronger hierarchy */}
            <div className="flex flex-col items-center">
              <Link 
                href="/contact" 
                className="group px-10 sm:px-12 py-5 sm:py-6 bg-white text-primary text-base sm:text-lg font-bold rounded-2xl shadow-2xl shadow-black/10 hover:shadow-black/20 transform hover:scale-105 transition-all duration-500 mb-4"
              >
                <span className="flex items-center justify-center">
                  Get Started
                  <svg className="w-5 sm:w-6 h-5 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link 
                href="#transformations" 
                className="sm:hidden text-white/80 hover:text-white font-medium underline underline-offset-4 decoration-white/30 hover:decoration-white transition-all duration-300"
              >
                See Real Results ↓
              </Link>
              <Link 
                href="#transformations" 
                className="hidden sm:flex group px-6 sm:px-8 py-5 sm:py-6 border-2 border-white/40 text-white text-base sm:text-lg font-semibold rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-white/60 transition-all duration-500"
              >
                <span className="flex items-center justify-center">
                  See Real Results
                  <svg className="w-4 sm:w-5 h-4 sm:h-5 ml-2 inline-block group-hover:translate-y-1 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Business Goals Selector */}
      <BusinessGoalsSelector />

      {/* The Truth About Your Website */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-5xl lg:text-6xl text-foreground mb-8">
              The Uncomfortable
              <span className="block text-primary">Truth</span>
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              If your website isn&apos;t working properly, you&apos;re missing opportunities to grow your business.
            </p>
          </div>

          {/* Problem Cards - Visual and Engaging */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 h-full flex flex-col">
                <div className="text-6xl mb-6">📱</div>
                <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                  Mobile Disaster Zone
                </h3>
                <p className="text-text-light mb-6 leading-relaxed flex-grow">
                  They pinch. They zoom. They squint. Then they leave. 74% of people will never return to a site that doesn&apos;t work on mobile.
                </p>
                <div className="text-red-600 font-semibold">
                  Mobile-friendly sites get more business
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 h-full flex flex-col">
                <div className="text-6xl mb-6">🔍</div>
                <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                  Missing From Search Results
                </h3>
                <p className="text-text-light mb-6 leading-relaxed flex-grow">
                  When people search for your services online, they need to find you easily. If your site isn&apos;t optimized, you&apos;re missing those opportunities.
                </p>
                <div className="text-orange-600 font-semibold">
                  Better search visibility = More customers
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 to-gray-600/10 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 h-full flex flex-col">
                <div className="text-6xl mb-6">⏰</div>
                <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                  Stuck in 2010
                </h3>
                <p className="text-text-light mb-6 leading-relaxed flex-grow">
                  Flash animations. Tiny text. Broken forms. It screams &ldquo;we don&apos;t care about details&rdquo; so what else are you neglecting? First impressions matter more than ever.
                </p>
                <div className="text-gray-600 font-semibold">
                  Modern websites build trust
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl text-foreground font-semibold">
              Let&apos;s build something that works better for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio/Transformations Section */}
      <section id="transformations" className="py-24 bg-gradient-to-br from-background to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-5xl lg:text-6xl text-foreground mb-8">
              Websites That Actually
              <span className="block text-primary">Work</span>
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Real businesses. Real results. Built with psychology-first design that turns visitors into customers.
            </p>
          </div>

          {/* Before/After Showcase */}
          <div className="space-y-24">
            {/* Example 1 - Bagel Shop */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-96 relative">
                  <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 rounded-bl-xl text-xs font-bold z-10">BEFORE</div>
                  {/* Fake Crappy Website */}
                  <div className="bg-gradient-to-b from-blue-600 to-blue-800 p-4 text-white text-center">
                    <h1 className="text-lg font-bold mb-2">WELCOME TO OUR WEBSITE!!!</h1>
                    <div className="bg-yellow-400 text-black px-2 py-1 text-xs inline-block animate-pulse">🔥 NEW! 🔥</div>
                  </div>
                  <div className="p-6 bg-white">
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="bg-red-500 h-8 text-white text-xs flex items-center justify-center">HOME</div>
                      <div className="bg-green-500 h-8 text-white text-xs flex items-center justify-center">ABOUT</div>
                      <div className="bg-purple-500 h-8 text-white text-xs flex items-center justify-center">CONTACT</div>
                    </div>
                    <div className="text-xs leading-tight mb-3">
                      <p className="font-bold text-red-600">Welcome to our amazing company website! We are the best at what we do and have been in business since 1995.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <div className="bg-gray-300 h-12 flex items-center justify-center text-xs">Image Loading...</div>
                      <div className="bg-gray-300 h-12 flex items-center justify-center text-xs">Image Loading...</div>
                    </div>
                    <div className="text-xs text-blue-600 underline mb-2">Click here for more info!!!</div>
                    <div className="bg-yellow-200 p-2 text-xs border border-yellow-500">
                      <p className="font-bold">🚨 SPECIAL OFFER 🚨</p>
                      <p>Call now for 50% off!</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 rounded-bl-xl text-xs font-bold z-10">AFTER</div>
                  <Image 
                    src="/bagel-bliss.png" 
                    alt="Bagel Shop Website Transformation"
                    width={400}
                    height={800}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mobile-First Design Section */}
      <section className="py-24 bg-gradient-to-br from-background to-white relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              Mobile-First Methodology
            </div>
            <h2 className="font-display font-bold text-5xl lg:text-6xl text-foreground mb-8">
              Designed for Thumbs,
              <span className="block text-primary">Not Mouse Clicks</span>
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              74% of your visitors use their phone first. Yet most designers still design for desktop and hope mobile "works." That's backwards, and it's costing you customers.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-stretch mb-20">
            {/* The Wrong Way */}
            <div className="h-full">
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 border-2 border-red-200 relative h-full flex flex-col">
                <div className="absolute -top-3 left-8 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                  The Wrong Way
                </div>
                <h3 className="font-bold text-2xl text-foreground mb-6 mt-4">Desktop-First Design</h3>
                
                {/* Mock Desktop to Mobile Flow */}
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-red-300">
                    <div className="text-xs text-red-600 font-semibold mb-2">1. Design for desktop first</div>
                    <div className="bg-gray-200 h-16 rounded mb-2"></div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-gray-300 h-8 rounded"></div>
                      <div className="bg-gray-300 h-8 rounded"></div>
                      <div className="bg-gray-300 h-8 rounded"></div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <svg className="w-6 h-6 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-red-300">
                    <div className="text-xs text-red-600 font-semibold mb-2">2. Squeeze into mobile</div>
                    <div className="w-24 mx-auto">
                      <div className="bg-gray-200 h-8 rounded mb-1"></div>
                      <div className="grid grid-cols-1 gap-1">
                        <div className="bg-gray-300 h-4 rounded text-xs flex items-center justify-center">Tiny</div>
                        <div className="bg-gray-300 h-4 rounded text-xs flex items-center justify-center">Text</div>
                        <div className="bg-gray-300 h-4 rounded text-xs flex items-center justify-center">Mess</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-100 rounded-lg p-4 mt-auto">
                  <p className="text-sm text-red-700 font-medium">Result: Frustrated users who leave immediately</p>
                </div>
              </div>
            </div>

            {/* The Right Way */}
            <div className="h-full">
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 border-2 border-primary/20 relative h-full flex flex-col">
                <div className="absolute -top-3 left-8 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                  My Process
                </div>
                <h3 className="font-bold text-2xl text-foreground mb-6 mt-4">Mobile-First Design</h3>
                
                {/* Mock Mobile to Desktop Flow */}
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-primary/30">
                    <div className="text-xs text-primary font-semibold mb-2">1. Design for thumbs first</div>
                    <div className="w-24 mx-auto">
                      <div className="bg-primary/20 h-8 rounded mb-1"></div>
                      <div className="grid grid-cols-1 gap-1">
                        <div className="bg-primary/30 h-6 rounded text-xs flex items-center justify-center">Perfect</div>
                        <div className="bg-primary/30 h-6 rounded text-xs flex items-center justify-center">Touch</div>
                        <div className="bg-primary/30 h-6 rounded text-xs flex items-center justify-center">Size</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <svg className="w-6 h-6 text-primary mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-primary/30">
                    <div className="text-xs text-primary font-semibold mb-2">2. Scale up to desktop</div>
                    <div className="bg-primary/20 h-16 rounded mb-2"></div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-primary/30 h-8 rounded text-xs flex items-center justify-center">Beautiful</div>
                      <div className="bg-primary/30 h-8 rounded text-xs flex items-center justify-center">Clean</div>
                      <div className="bg-primary/30 h-8 rounded text-xs flex items-center justify-center">Layout</div>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-lg p-4 mt-auto">
                  <p className="text-sm text-primary font-medium">Result: Perfect experience on every device</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="font-display font-bold text-3xl mb-4">Why Mobile-First Matters</h3>
              <p className="text-white/90 text-lg">The numbers don't lie. Mobile isn't the future, it's the present.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">74%</div>
                <div className="text-white/80">Judge your business by mobile experience</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">3 sec</div>
                <div className="text-white/80">Before users abandon slow mobile sites</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">50%</div>
                <div className="text-white/80">More likely to buy from mobile-optimized sites</div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <p className="text-xl font-semibold mb-4">Google's Mobile-First Indexing</p>
                <p className="text-white/90">
                  Google ranks your site based on the mobile version. If your mobile site is broken, your desktop rankings suffer too.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 max-w-3xl mx-auto">
              <p className="text-2xl font-bold text-foreground mb-4">
                Smart businesses prioritize mobile design
              </p>
              <p className="text-xl text-primary font-semibold">
                because that&apos;s where your customers are searching from.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google AI Search Section - Key Differentiator */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-accent/10 text-accent px-6 py-2 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Future-Proof Technology
            </div>
            <h2 className="font-display font-bold text-5xl lg:text-6xl text-foreground mb-8">
              Built for Google&apos;s
              <span className="block text-primary">AI Revolution</span>
            </h2>
            <p className="text-xl text-text-light leading-relaxed">
              While other designers are still stuck in 2020, your site will be optimized for how people actually search today: with AI.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200">
                <h3 className="font-bold text-2xl text-foreground mb-6">The Problem:</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Old SEO is dying</p>
                      <p className="text-text-light text-sm">Traditional keyword stuffing doesn&apos;t work anymore</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">AI search is taking over</p>
                      <p className="text-text-light text-sm">Google&apos;s AI gives direct answers, not just links</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Most sites won&apos;t adapt</p>
                      <p className="text-text-light text-sm">Your competition is already being left behind</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 border border-primary/20">
                <h3 className="font-bold text-2xl text-foreground mb-6">My Solution:</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Structured data markup</p>
                      <p className="text-text-light text-sm">Helps AI understand what your business actually does</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Natural language content</p>
                      <p className="text-text-light text-sm">Written for how people actually ask questions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Featured snippet optimization</p>
                      <p className="text-text-light text-sm">Your business shows up in AI summaries and quick answers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Pricing Section - Premium Design */}
      <section id="pricing" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-5xl lg:text-6xl text-foreground mb-8">
              One Price.
              <span className="block text-primary">Everything Included.</span>
            </h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto">
              No hourly rates. No surprise fees. No monthly subscriptions. Just one fair price for a complete solution you own forever.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 lg:p-12 border-2 border-primary/20 relative shadow-2xl">
              {/* Badge positioned inside card on mobile */}
              <div className="lg:absolute lg:-top-6 lg:left-1/2 lg:transform lg:-translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg mb-8 lg:mb-0 inline-block">
                Complete Website Solution
              </div>
              
              <div className="text-center mb-12 lg:mt-8">
                <div className="text-6xl lg:text-7xl font-bold text-foreground mb-4">$3,500</div>
                <div className="text-lg lg:text-xl text-text-light">Mobile-first • Google-optimized • 3 weeks or less • Zero monthly fees</div>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-foreground mb-4">What&apos;s Included:</h4>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">5 custom pages (not templates)</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">Mobile-first responsive design</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">Local SEO optimization</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground font-medium">Google AI search optimized</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">Professional copywriting help</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-secondary mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">Contact forms that work</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-foreground mb-4">Plus You Get:</h4>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground font-medium">Free business audit ($500 value)</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground font-medium">1-hour training session</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground font-medium">30 days of support</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground font-medium">Edit access (no lock-in)</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground mb-2">Perfect For:</div>
                  <p className="text-text-light text-lg">
                    Service businesses • Local shops • Restaurants • Professional practices • Any business that needs to look legit online and get more customers
                  </p>
                </div>
              </div>

              <Link 
                href="/contact" 
                className="block w-full text-center bg-primary text-white py-6 px-8 rounded-xl text-xl font-bold hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
              >
                Learn More About Pricing →
              </Link>

              <p className="text-center text-sm text-text-light mt-6">
                50% deposit to start • Final 50% on launch • No monthly fees ever
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Visual Timeline */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-5xl lg:text-6xl text-foreground mb-8">
              3 Weeks or Less to
              <span className="block text-primary">Launch</span>
            </h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto">
              A proven process that delivers on time, every time. No endless revisions. No scope creep. Just results.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Week 1 */}
              <div className="relative">
                <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-primary/20"></div>
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                    1
                  </div>
                  <div className="ml-8 flex-1">
                    <h3 className="font-display font-bold text-2xl text-foreground mb-2">Week 1: Discovery & Design</h3>
                    <p className="text-text-light mb-4">We talk. I listen. Then I design something that actually fits your business.</p>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                      <ul className="space-y-2 text-foreground">
                        <li>• 30-minute strategy call</li>
                        <li>• Business audit to find opportunities</li>
                        <li>• Initial design mockups</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Week 2 */}
              <div className="relative">
                <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-primary/20"></div>
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                    2
                  </div>
                  <div className="ml-8 flex-1">
                    <h3 className="font-display font-bold text-2xl text-foreground mb-2">Week 2: Build & Refine</h3>
                    <p className="text-text-light mb-4">Your site comes to life. Mobile-first. SEO-ready. Built to convert.</p>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                      <ul className="space-y-2 text-foreground">
                        <li>• Custom coding (no templates)</li>
                        <li>• Mobile optimization</li>
                        <li>• Two rounds of revisions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Week 3 */}
              <div className="relative">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                    3
                  </div>
                  <div className="ml-8 flex-1">
                    <h3 className="font-display font-bold text-2xl text-foreground mb-2">Week 3: Launch & Learn</h3>
                    <p className="text-text-light mb-4">Your site goes live. You get trained. Customers start finding you.</p>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                      <ul className="space-y-2 text-foreground">
                        <li>• Site goes live on your domain</li>
                        <li>• 1-hour training session</li>
                        <li>• 30 days of support included</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-5xl lg:text-6xl text-foreground mb-8">
              Common Questions
            </h2>
            <p className="text-xl text-text-light">
              Let&apos;s clear up any confusion before we start.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-bold text-xl text-foreground mb-3">
                Why $3,500? Seems high for a small business website.
              </h3>
              <p className="text-text-light">
                I understand - it&apos;s an investment. Here&apos;s what&apos;s included: custom-coded site you own forever, local SEO optimization, professional copywriting, and a complete business audit. Plus, unlike monthly platforms, you&apos;re not locked into ongoing fees. Most clients see ROI within 2-3 months from new customers.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-bold text-xl text-foreground mb-3">
                Can&apos;t I just use Squarespace or Wix?
              </h3>
              <p className="text-text-light mb-4">
                Those are great for starting out! The main differences: With my custom sites, you own everything outright (no monthly fees), get better Google rankings, faster load times, and a design that&apos;s uniquely yours. It&apos;s really about what stage your business is at.
              </p>
              <div className="bg-white p-4 rounded-lg border-l-4 border-primary">
                <p className="text-foreground font-semibold text-sm">
                  💡 Consider this: Many platforms charge $30+/month forever. That's over $1,000 in 3 years, and you still don't own your site.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-bold text-xl text-foreground mb-3">
                What if I need changes after launch?
              </h3>
              <p className="text-text-light">
                You get 30 days of support included. After that, small updates are $150/hour. But here&apos;s the thing: I&apos;ll teach you how to make most changes yourself. No gatekeeping.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-bold text-xl text-foreground mb-3">
                How is this different from other web designers?
              </h3>
              <p className="text-text-light">
                I bring 20+ years of business systems experience. I focus on what actually drives results: mobile-first design, proper Google optimization, and psychology that turns visitors into customers. Plus, every project includes a business audit to identify quick wins.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
        
        <div className="relative max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-8">
            Let's Build Something That Works
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Have questions? Let's talk about how a professional website can help grow your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-12 py-6 bg-white text-primary text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              Schedule a Free Consultation
              <svg className="w-6 h-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}