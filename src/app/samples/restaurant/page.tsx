import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurant Website Demo | Built By Tom',
  description: 'See what your restaurant website could look like. Online ordering, reservations, and automation that fills seats.',
};

export default function RestaurantSample() {
  return (
    <>
      {/* Demo Banner */}
      <div className="bg-primary text-white py-3 text-center relative">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-medium">
            🎨 This is a sample restaurant website showing what I could build for your business
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Placeholder for hero image */}
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
          <p className="text-white/50 text-xl">[Hero Image: Restaurant Interior/Signature Dish]</p>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
              Bella Vista
              <span className="block text-3xl sm:text-4xl lg:text-5xl font-bold text-white/90 mt-2">
                Kitchen & Bar
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
              Modern Italian dining in the heart of New Haven. 
              Fresh ingredients, timeless recipes, unforgettable moments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-white/90 transition-all transform hover:scale-105">
                Reserve Your Table
              </button>
              <button className="px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all transform hover:scale-105">
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
      <section className="bg-slate-800 text-white py-6">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4">
              Tonight's Features
            </h2>
            <p className="text-xl text-text-light">
              Chef Marco's seasonal selections
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Appetizer */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">[Appetizer Image]</p>
              </div>
              <div className="p-6">
                <div className="text-red-600 font-semibold text-sm mb-2">APPETIZER</div>
                <h3 className="font-bold text-xl text-foreground mb-2">Burrata Caprese</h3>
                <p className="text-text-light text-sm mb-4">
                  Creamy burrata, heirloom tomatoes, basil oil, aged balsamic
                </p>
                <p className="text-2xl font-bold text-primary">$18</p>
              </div>
            </div>

            {/* Entree */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">[Entree Image]</p>
              </div>
              <div className="p-6">
                <div className="text-red-600 font-semibold text-sm mb-2">ENTRÉE</div>
                <h3 className="font-bold text-xl text-foreground mb-2">Osso Buco</h3>
                <p className="text-text-light text-sm mb-4">
                  Braised veal shank, saffron risotto, gremolata
                </p>
                <p className="text-2xl font-bold text-primary">$42</p>
              </div>
            </div>

            {/* Dessert */}
            <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">[Dessert Image]</p>
              </div>
              <div className="p-6">
                <div className="text-red-600 font-semibold text-sm mb-2">DESSERT</div>
                <h3 className="font-bold text-xl text-foreground mb-2">Tiramisu</h3>
                <p className="text-text-light text-sm mb-4">
                  Classic preparation with espresso-soaked ladyfingers
                </p>
                <p className="text-2xl font-bold text-primary">$12</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="#" 
              className="inline-flex items-center px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all transform hover:scale-105"
            >
              View Full Menu
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Automated Features Showcase */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
                Everything Runs
                <span className="block text-primary">Automatically</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">📅</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">Smart Reservations</h3>
                    <p className="text-text-light">
                      Book online 24/7. Automatic confirmations. SMS reminders. No more double-bookings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">🛍️</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">Online Ordering</h3>
                    <p className="text-text-light">
                      Skip the commission fees. Direct orders, your prices, instant kitchen notifications.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">Review Management</h3>
                    <p className="text-text-light">
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
                  <div className="bg-red-600 text-white p-4">
                    <h4 className="font-bold text-lg">Reservation Confirmed! 🎉</h4>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="font-semibold text-sm mb-1">Table for 4</p>
                      <p className="text-sm text-gray-600">Tonight at 7:30 PM</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-600 mb-2">We'll send you a reminder 2 hours before your reservation.</p>
                      <button className="text-red-600 font-semibold text-sm">Add to Calendar</button>
                    </div>
                    <div className="text-center pt-4">
                      <p className="text-xs text-gray-500">Powered by automation that actually works</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4">
              What Our Guests Say
            </h2>
            <div className="flex items-center justify-center gap-2 text-xl">
              <div className="flex text-yellow-400">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <span className="text-text-light">4.8 out of 5 (312 reviews)</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <span className="text-sm text-gray-500">2 days ago</span>
              </div>
              <p className="text-foreground mb-4">
                "Incredible experience from start to finish. The online reservation was seamless, 
                and we even got a text reminder. The osso buco was perfection!"
              </p>
              <p className="font-semibold text-foreground">- Michael R.</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {'★★★★★'.split('').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <span className="text-sm text-gray-500">1 week ago</span>
              </div>
              <p className="text-foreground mb-4">
                "Love that I can order directly from their website - no crazy fees! 
                Food arrives hot and exactly as ordered. Will definitely order again."
              </p>
              <p className="font-semibold text-foreground">- Lisa T.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-6">
            Ready for a Website That Works This Hard?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            This demo shows just a fraction of what's possible. Let's build something amazing for your restaurant.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-bold rounded-xl hover:bg-white/90 transition-all transform hover:scale-105"
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
    </>
  );
}