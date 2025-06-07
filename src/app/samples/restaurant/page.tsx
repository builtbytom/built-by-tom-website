import Link from 'next/link';
import type { Metadata } from 'next';
import { Playfair_Display, Cormorant_Garamond, Lato } from 'next/font/google';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  style: ['normal', 'italic']
});

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic']
});

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['300', '400', '700']
});

export const metadata: Metadata = {
  title: 'Restaurant Website Demo | Built By Tom',
  description: 'See what your restaurant website could look like. Online ordering, reservations, and automation that fills seats.',
  robots: 'noindex, follow',
};

export default function RestaurantSample() {
  return (
    <>
      <div className={`restaurant-demo ${lato.className}`}>
      {/* Demo Banner */}
      <div className="bg-[#3B4A3F] text-white py-3 text-center relative">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-medium font-sans">
            🎨 This is a sample restaurant website showing what I could build for your business
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-[#2D2A26] via-[#3B4A3F] to-[#2D2A26] overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Hero image background */}
        <div className="absolute inset-0 bg-[#3B4A3F]">
          {/* Image placeholder */}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <h1 className={`${playfair.className} font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6 tracking-tight`}>
              Demo: Bella Vista
              <span className="block text-3xl sm:text-4xl lg:text-5xl font-normal text-[#DCA953] mt-2 tracking-widest uppercase">
                Kitchen & Bar
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Modern Italian dining in the heart of New Haven. 
              <span className={`${cormorant.className} italic`}>Fresh ingredients, timeless recipes, unforgettable moments.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#F4F2ED] text-[#2D2A26] font-bold rounded-xl hover:bg-white transition-all transform hover:scale-105">
                Reserve Your Table
              </button>
              <button className="px-8 py-4 bg-[#A86754] text-white font-bold rounded-xl hover:bg-[#A86754]/90 transition-all transform hover:scale-105">
                Order Online
              </button>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/80">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>123 Chapel St, New Haven</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span>Open Daily 5pm-11pm</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-[#3B4A3F] text-white py-6">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl mb-1">📞</div>
              <p className="font-semibold">(203) 555-0123</p>
              <p className="text-sm text-white/70">Call for reservations</p>
            </div>
            <div>
              <div className="text-2xl mb-1">⭐</div>
              <p className="font-semibold">4.8 Stars • 312 Reviews</p>
              <p className="text-sm text-white/70">on Google</p>
            </div>
            <div>
              <div className="text-2xl mb-1">🚗</div>
              <p className="font-semibold">Free Valet Parking</p>
              <p className="text-sm text-white/70">After 5pm daily</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-[#F4F2ED]">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`${playfair.className} font-bold text-4xl lg:text-5xl text-[#2D2A26] mb-4 tracking-tight`}>
              Tonight's Features
            </h2>
            <p className={`text-xl text-[#2D2A26]/70 ${cormorant.className} italic`}>
              Chef Marco's seasonal selections
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Appetizer */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[#DCA953]/20 to-[#DCA953]/10">
                {/* Appetizer image placeholder */}
              </div>
              <div className="p-6">
                <div className="text-[#A86754] font-semibold text-sm mb-2">APPETIZER</div>
                <h3 className="font-bold text-xl text-[#2D2A26] mb-2">Burrata Caprese</h3>
                <p className="text-[#2D2A26]/70 text-sm mb-4">
                  Creamy burrata, heirloom tomatoes, basil oil, aged balsamic
                </p>
                <p className="text-2xl font-bold text-[#3B4A3F]">$18</p>
              </div>
            </div>

            {/* Entree */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[#DCA953]/20 to-[#DCA953]/10">
                {/* Entree image placeholder */}
              </div>
              <div className="p-6">
                <div className="text-[#A86754] font-semibold text-sm mb-2">ENTRÉE</div>
                <h3 className="font-bold text-xl text-[#2D2A26] mb-2">Osso Buco</h3>
                <p className="text-[#2D2A26]/70 text-sm mb-4">
                  Braised veal shank, saffron risotto, gremolata
                </p>
                <p className="text-2xl font-bold text-[#3B4A3F]">$42</p>
              </div>
            </div>

            {/* Dessert */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-[#DCA953]/20 to-[#DCA953]/10">
                {/* Dessert image placeholder */}
              </div>
              <div className="p-6">
                <div className="text-[#A86754] font-semibold text-sm mb-2">DESSERT</div>
                <h3 className="font-bold text-xl text-[#2D2A26] mb-2">Tiramisu</h3>
                <p className="text-[#2D2A26]/70 text-sm mb-4">
                  Classic preparation with espresso-soaked ladyfingers
                </p>
                <p className="text-2xl font-bold text-[#3B4A3F]">$12</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="#" 
              className="inline-flex items-center px-8 py-4 bg-[#A86754] text-white font-bold rounded-xl hover:bg-[#A86754]/90 transition-all transform hover:scale-105"
            >
              View Full Menu
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Chef Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`${playfair.className} font-bold text-4xl lg:text-5xl text-[#2D2A26] mb-6 tracking-tight`}>
                From Our Family
                <span className={`block text-[#3B4A3F] ${cormorant.className} italic font-normal`}>to Yours</span>
              </h2>
              <p className="text-[#2D2A26]/80 mb-6 leading-relaxed">
                Bella Vista isn't just a restaurant; it's the culmination of a lifelong dream. 
                Founded by Chef Marco Rossi, our kitchen is built on the recipes passed down 
                from his grandmother in Naples. We believe in heartfelt hospitality, the joy 
                of a shared meal, and the simple magic of fresh ingredients.
              </p>
              <p className="text-[#2D2A26]/80 mb-8 leading-relaxed">
                Our mission is to be more than a place you eat—we want to be the place you 
                celebrate, connect, and create lasting memories.
              </p>
              
              <div className="bg-[#F4F2ED] rounded-2xl p-8">
                <h3 className="font-bold text-xl text-[#2D2A26] mb-4">Meet Chef Marco Rossi</h3>
                <p className="text-[#2D2A26]/80 mb-4">
                  With over 20 years of experience in both traditional Neapolitan kitchens 
                  and modern culinary arts, Chef Marco brings a unique passion to every dish. 
                  After earning his acclaim in Boston, he returned to his Connecticut roots 
                  to open Bella Vista.
                </p>
                <blockquote className={`text-[#A86754] ${cormorant.className} text-lg italic leading-relaxed`}>
                  "Food is memory. I want every plate that leaves my kitchen to be a moment you won't forget."
                </blockquote>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-gradient-to-br from-[#3B4A3F] to-[#2D2A26] h-96">
                  {/* Chef photo placeholder */}
                  <div className="flex items-center justify-center h-full text-white/30 text-xl">
                    [Chef Marco Portrait]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automated Features Showcase */}
      <section className="py-20 bg-gradient-to-br from-[#F4F2ED] to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`${playfair.className} font-bold text-4xl lg:text-5xl text-[#2D2A26] mb-6 tracking-tight`}>
                Everything Runs
                <span className="block text-[#3B4A3F]">Automatically</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#DCA953]/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">📅</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#2D2A26] mb-1">Smart Reservations</h3>
                    <p className="text-[#2D2A26]/70">
                      Book online 24/7. Automatic confirmations. SMS reminders. No more double-bookings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#DCA953]/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">🛍️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#2D2A26] mb-1">Online Ordering</h3>
                    <p className="text-[#2D2A26]/70">
                      Skip the commission fees. Direct orders, your prices, instant kitchen notifications.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#DCA953]/20 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#2D2A26] mb-1">Review Management</h3>
                    <p className="text-[#2D2A26]/70">
                      Happy diners get gentle review requests. Build your reputation on autopilot.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Mock Phone Interface */}
            <div className="relative">
              <div className="mx-auto w-64 bg-gray-900 rounded-[2.5rem] p-1 shadow-2xl">
                <div className="bg-white rounded-[2.2rem] overflow-hidden h-[500px]">
                  <div className="bg-[#A86754] text-white p-4">
                    <h4 className="font-bold text-lg">Reservation Confirmed! 🎉</h4>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="bg-[#F4F2ED] rounded-lg p-4">
                      <p className="font-semibold text-sm mb-1 text-[#2D2A26]">Table for 4</p>
                      <p className="text-sm text-[#2D2A26]/70">Tonight at 7:30 PM</p>
                    </div>
                    <div className="bg-[#F4F2ED] rounded-lg p-4">
                      <p className="text-sm text-[#2D2A26]/70 mb-2">We'll send you a reminder 2 hours before your reservation.</p>
                      <button className="text-[#A86754] font-semibold text-sm">Add to Calendar</button>
                    </div>
                    <div className="text-center pt-4">
                      <p className="text-xs text-[#2D2A26]/50">Powered by automation that actually works</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Features - Value Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`${playfair.className} font-bold text-4xl lg:text-5xl text-[#2D2A26] mb-6 tracking-tight`}>
              What Makes Us Special
            </h2>
            <p className="text-xl text-[#2D2A26]/70 max-w-2xl mx-auto">
              More than just great food – it's the complete experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Outdoor Dining */}
            <div className="bg-gradient-to-br from-[#3B4A3F]/10 to-[#3B4A3F]/5 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🌳</div>
              <h3 className="font-bold text-xl text-[#2D2A26] mb-3">Outdoor Patio</h3>
              <p className="text-[#2D2A26]/70">
                Beautiful garden seating for 40+ guests. Perfect for date nights under the stars.
              </p>
            </div>

            {/* Happy Hour */}
            <div className="bg-gradient-to-br from-[#DCA953]/20 to-[#DCA953]/10 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="font-bold text-xl text-[#2D2A26] mb-3">Daily Happy Hour</h3>
              <p className="text-[#2D2A26]/70">
                Half-price appetizers and $5 wines. Every weekday 4-6 PM.
              </p>
            </div>

            {/* Private Events */}
            <div className="bg-gradient-to-br from-[#A86754]/10 to-[#A86754]/5 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🎆</div>
              <h3 className="font-bold text-xl text-[#2D2A26] mb-3">Private Events</h3>
              <p className="text-[#2D2A26]/70">
                Host your special occasions. Private dining room seats up to 50.
              </p>
            </div>

            {/* Local Sourced */}
            <div className="bg-gradient-to-br from-[#3B4A3F]/10 to-[#3B4A3F]/5 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🌾</div>
              <h3 className="font-bold text-xl text-[#2D2A26] mb-3">Farm to Table</h3>
              <p className="text-[#2D2A26]/70">
                Locally sourced from Connecticut farms. Menu changes with the seasons.
              </p>
            </div>
          </div>

          {/* Special Features Grid */}
          <div className="mt-16 bg-gradient-to-br from-[#F4F2ED] to-white rounded-3xl p-12 border border-[#DCA953]/20">
            <h3 className={`${playfair.className} font-bold text-3xl text-[#2D2A26] mb-8 text-center`}>
              Features That Fill Tables
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center">
                <svg className="w-6 h-6 text-[#3B4A3F] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[#2D2A26]">Live music every Friday & Saturday</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-[#3B4A3F] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[#2D2A26]">Wine pairing dinners monthly</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-[#3B4A3F] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[#2D2A26]">Gluten-free & vegan options</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-[#3B4A3F] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[#2D2A26]">Kids eat free on Sundays</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-[#3B4A3F] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[#2D2A26]">Chef's tasting menu available</span>
              </div>
              <div className="flex items-center">
                <svg className="w-6 h-6 text-[#3B4A3F] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[#2D2A26]">Full bar with craft cocktails</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Gallery Section */}
      <section className="py-20 bg-[#F4F2ED]">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`${playfair.className} font-bold text-4xl lg:text-5xl text-[#2D2A26] mb-6`}>
              A Glimpse of the Bella Vista Experience
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button className="px-6 py-2 bg-[#3B4A3F] text-white rounded-full font-semibold">All</button>
              <button className="px-6 py-2 bg-white text-[#2D2A26] border-2 border-[#3B4A3F]/20 rounded-full font-semibold hover:bg-[#3B4A3F] hover:text-white transition-all">The Food</button>
              <button className="px-6 py-2 bg-white text-[#2D2A26] border-2 border-[#3B4A3F]/20 rounded-full font-semibold hover:bg-[#3B4A3F] hover:text-white transition-all">The Space</button>
              <button className="px-6 py-2 bg-white text-[#2D2A26] border-2 border-[#3B4A3F]/20 rounded-full font-semibold hover:bg-[#3B4A3F] hover:text-white transition-all">The Moments</button>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all">
                <div className="aspect-w-4 aspect-h-3 bg-gradient-to-br from-[#DCA953]/20 to-[#3B4A3F]/20">
                  <div className="flex items-center justify-center h-64 text-[#2D2A26]/30">
                    [Gallery Image {item}]
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`${playfair.className} font-bold text-4xl lg:text-5xl text-[#2D2A26] mb-4`}>
              What Our Guests Say
            </h2>
            <div className="flex items-center justify-center gap-2 text-xl">
              <div className="flex text-[#DCA953]">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <span className="text-[#2D2A26]/70">4.8 out of 5 (312 reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F4F2ED] rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-[#DCA953]">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <span className="text-sm text-[#2D2A26]/50">2 days ago</span>
              </div>
              <p className="text-[#2D2A26] mb-4">
                "Incredible experience from start to finish. The online reservation was seamless, 
                and we even got a text reminder. The osso buco was perfection!"
              </p>
              <p className="font-semibold text-[#2D2A26]">- Michael R.</p>
            </div>

            <div className="bg-[#F4F2ED] rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-[#DCA953]">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <span className="text-sm text-[#2D2A26]/50">1 week ago</span>
              </div>
              <p className="text-[#2D2A26] mb-4">
                "Love that I can order directly from their website - no crazy fees! 
                Food arrives hot and exactly as ordered. Will definitely order again."
              </p>
              <p className="font-semibold text-[#2D2A26]">- Lisa T.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Email Club CTA */}
      <section className="py-20 bg-gradient-to-br from-[#3B4A3F] to-[#2D2A26] text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`${playfair.className} font-bold text-4xl lg:text-5xl mb-6`}>
              Become a Bella Vista Insider
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join our complimentary rewards club and be the first to hear about seasonal menu changes, 
              wine dinners, and exclusive events. As a thank you, we'll send you a voucher for a 
              free tiramisu on your next visit.
            </p>
          </div>

          <form className="max-w-lg mx-auto">
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-[#DCA953] transition-colors"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-[#DCA953] transition-colors"
              />
            </div>
            <button 
              type="submit" 
              className="w-full px-8 py-4 bg-[#DCA953] text-[#2D2A26] font-bold rounded-xl hover:bg-[#DCA953]/90 transition-all transform hover:scale-105"
            >
              BECOME AN INSIDER
            </button>
            <p className="text-center text-white/60 text-sm mt-4">
              We respect your privacy and never share your information. No spam, just specials.
            </p>
          </form>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#A86754] to-[#A86754]/90 text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <h2 className={`${playfair.className} font-bold text-4xl lg:text-5xl mb-6`}>
            Ready for a Website That Works This Hard?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            This demo shows just a fraction of what's possible. Let's build something amazing for your restaurant.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-[#F4F2ED] text-[#2D2A26] font-bold rounded-xl hover:bg-white transition-all transform hover:scale-105"
          >
            Get Your Restaurant Online
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="mt-6 text-white/70">
            Starting at $3,500 • 3-week delivery • No monthly fees
          </p>
        </div>
      </section>
      </div>
    </>
  );
}