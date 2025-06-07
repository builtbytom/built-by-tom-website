import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services - Website, Automation & Complete Systems | Built By Tom',
  description: 'Choose the right solution for your business. From website fixes to complete automation systems. Clear pricing, fast delivery, and solutions that actually work.',
};

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-gradient-to-br from-primary via-slate-800 to-secondary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-sage-light/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-32 pb-16 lg:pb-20">
          <div className="text-center">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold text-sm mb-8 border border-white/30">
              <span className="text-xl mr-2">🛠️</span>
              Solutions That Actually Work
            </div>
            
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-white mb-6">
              Pick Your Path to Peace
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Three ways to escape tech chaos. All with clear pricing, fast delivery, 
              and my personal guarantee that things will actually work.
            </p>
          </div>
        </div>
      </section>

      {/* Service Selector Tool */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 lg:p-12 border border-primary/20">
            <h2 className="font-display font-bold text-3xl text-center text-foreground mb-8">
              Not Sure What You Need?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl mb-3">🌐</div>
                <h3 className="font-bold text-foreground mb-2">Website Issues?</h3>
                <p className="text-sm text-text-light">
                  No website yet, looks outdated, or can't be found on Google
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">⏰</div>
                <h3 className="font-bold text-foreground mb-2">Time Wasters?</h3>
                <p className="text-sm text-text-light">
                  Manual follow-ups, missed appointments, repetitive tasks
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🔥</div>
                <h3 className="font-bold text-foreground mb-2">Everything's a Mess?</h3>
                <p className="text-sm text-text-light">
                  Website's broken AND drowning in manual work
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <Link 
                href="/services/website-audit" 
                className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-xl mr-2">🔍</span>
                Get My $297 Website & Systems Review
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <p className="text-sm text-text-light mt-3">
                Find out exactly what you need (applies to any project)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Comparison Table */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Compare Your Options
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Every business is different. Here's how to pick what's right for yours.
            </p>
          </div>

          {/* Desktop Comparison Table */}
          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-primary to-secondary text-white">
                  <th className="px-6 py-6 text-left font-display text-xl">Feature</th>
                  <th className="px-6 py-6 text-center font-display text-xl">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl mb-2">🌐</span>
                      <span>Website Fix</span>
                      <span className="text-sm font-normal opacity-90 mt-1">$3,500</span>
                    </div>
                  </th>
                  <th className="px-6 py-6 text-center font-display text-xl">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl mb-2">🤖</span>
                      <span>Automation</span>
                      <span className="text-sm font-normal opacity-90 mt-1">$797 each</span>
                    </div>
                  </th>
                  <th className="px-6 py-6 text-center font-display text-xl border-2 border-white/30">
                    <div className="flex flex-col items-center">
                      <span className="text-2xl mb-2">🚀</span>
                      <span>Complete System</span>
                      <span className="text-sm font-normal opacity-90 mt-1">$1,797</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-foreground">What You Get</td>
                  <td className="px-6 py-4 text-center text-text-light">Custom website that converts</td>
                  <td className="px-6 py-4 text-center text-text-light">Automated workflows</td>
                  <td className="px-6 py-4 text-center text-text-light bg-primary/5">All 3 automation packages</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-foreground">Delivery Time</td>
                  <td className="px-6 py-4 text-center text-text-light">3 weeks</td>
                  <td className="px-6 py-4 text-center text-text-light">1 week per package</td>
                  <td className="px-6 py-4 text-center text-text-light bg-primary/5">2-3 weeks total</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-foreground">Best For</td>
                  <td className="px-6 py-4 text-center text-text-light">Broken/outdated sites</td>
                  <td className="px-6 py-4 text-center text-text-light">Time-wasting tasks</td>
                  <td className="px-6 py-4 text-center text-text-light bg-primary/5">Complete transformation</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-foreground">Support Included</td>
                  <td className="px-6 py-4 text-center">
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <svg className="w-6 h-6 text-green-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="px-6 py-4 text-center bg-primary/5">
                    <div className="text-primary font-semibold">60 Days</div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-semibold text-foreground">You Save</td>
                  <td className="px-6 py-4 text-center text-text-light">-</td>
                  <td className="px-6 py-4 text-center text-text-light">-</td>
                  <td className="px-6 py-4 text-center bg-primary/5">
                    <div className="text-primary font-bold text-lg">$594</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile Service Cards */}
          <div className="lg:hidden space-y-6">
            {/* Website Fix */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🌐</span>
                <div>
                  <h3 className="font-bold text-xl text-foreground">Website Fix</h3>
                  <p className="text-2xl font-bold text-primary">$3,500</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-light">What:</span>
                  <span className="text-foreground font-medium">Custom website</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-light">Time:</span>
                  <span className="text-foreground font-medium">3 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-light">Best for:</span>
                  <span className="text-foreground font-medium">Broken sites</span>
                </div>
              </div>
              <Link 
                href="/services/website" 
                className="block w-full text-center bg-primary text-white py-3 rounded-lg font-semibold mt-4"
              >
                Learn More →
              </Link>
            </div>

            {/* Automation */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🤖</span>
                <div>
                  <h3 className="font-bold text-xl text-foreground">Automation</h3>
                  <p className="text-2xl font-bold text-secondary">$797</p>
                  <p className="text-sm text-text-light">per package</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-light">What:</span>
                  <span className="text-foreground font-medium">Automated workflows</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-light">Time:</span>
                  <span className="text-foreground font-medium">1 week each</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-light">Best for:</span>
                  <span className="text-foreground font-medium">Time wasters</span>
                </div>
              </div>
              <Link 
                href="/services/automation" 
                className="block w-full text-center bg-secondary text-white py-3 rounded-lg font-semibold mt-4"
              >
                Learn More →
              </Link>
            </div>

            {/* Complete System - Highlighted */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl shadow-xl border-2 border-primary/30 p-6 relative">
              <div className="absolute -top-3 right-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                BEST VALUE
              </div>
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🚀</span>
                <div>
                  <h3 className="font-bold text-xl text-foreground">Complete System</h3>
                  <p className="text-2xl font-bold text-primary">$1,797</p>
                  <p className="text-sm text-green-600 font-semibold">Save $594</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-light">What:</span>
                  <span className="text-foreground font-medium">All 3 packages</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-light">Time:</span>
                  <span className="text-foreground font-medium">2-3 weeks</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-light">Support:</span>
                  <span className="text-foreground font-medium">60 days</span>
                </div>
              </div>
              <Link 
                href="/services/complete-system" 
                className="block w-full text-center bg-primary text-white py-3 rounded-lg font-semibold mt-4"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details Grid */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Website Service */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-3xl">🌐</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                Website That Works
              </h3>
              <p className="text-text-light mb-6 flex-grow">
                Your website should make you money, not give you headaches. I'll build you one that actually converts visitors into customers.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-teal-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-foreground">Mobile-first design that loads fast</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-teal-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-foreground">Built for Google (SEO that works)</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-teal-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-foreground">Ready in 3 weeks, not 3 months</span>
                </div>
              </div>
              <Link 
                href="/services/website" 
                className="block w-full text-center bg-gradient-to-r from-teal-600 to-blue-700 text-white py-4 px-8 rounded-xl font-bold hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300"
              >
                Explore Website Options →
              </Link>
            </div>

            {/* Automation Service */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-700 to-indigo-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-3xl">🤖</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                Stop the Manual Madness
              </h3>
              <p className="text-text-light mb-6 flex-grow">
                Every minute you spend on repetitive tasks is a minute stolen from growing your business. Let's fix that.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-foreground">Lead response in 30 seconds</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-foreground">Never miss another appointment</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-purple-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-foreground">Reviews on autopilot</span>
                </div>
              </div>
              <Link 
                href="/services/automation" 
                className="block w-full text-center bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-4 px-8 rounded-xl font-bold hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
              >
                Learn About Automation →
              </Link>
            </div>

            {/* Complete System */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300 border-2 border-primary/20 h-full flex flex-col relative">
              <div className="absolute -top-3 -right-3 bg-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                SAVE $594
              </div>
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-700 to-green-800 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                The Full Transformation
              </h3>
              <p className="text-text-light mb-6 flex-grow">
                Why fix one problem when you can fix them all? Get every automation package and save big.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-foreground font-semibold">All 3 automation packages</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-foreground font-semibold">60 days of support</span>
                </div>
                <div className="flex items-start">
                  <svg className="w-5 h-5 text-emerald-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-foreground font-semibold">Save $594 vs buying separate</span>
                </div>
              </div>
              <Link 
                href="/services/complete-system" 
                className="block w-full text-center bg-gradient-to-r from-emerald-700 to-green-800 text-white py-4 px-8 rounded-xl font-bold hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300"
              >
                View Complete Package →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-8">
            Ready to Take Action?
          </h2>
          <p className="text-xl text-text-light mb-12 max-w-2xl mx-auto">
            Stop losing time and money to tech that doesn't work. 
            Let's build something that actually helps your business grow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link 
              href="/services/website-audit" 
              className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary/5 transition-all duration-300"
            >
              <span className="text-xl mr-2">🔍</span>
              Start with $297 Review
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}