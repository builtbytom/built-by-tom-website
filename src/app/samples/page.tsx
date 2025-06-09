import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website Demos & Samples | Built By Tom',
  description: 'See live examples of what I can build for your business. Restaurant websites, service businesses, and more.',
};

export default function SamplesPage() {
  const samples = [
    {
      title: 'Restaurant Website',
      subtitle: 'Bella Vista Kitchen & Bar',
      description: 'Modern Italian restaurant with online reservations, direct ordering, and automated review management.',
      features: ['Online Reservations', 'Direct Ordering', 'Review Automation', 'Mobile-First Design'],
      link: '/samples/restaurant',
      color: 'from-[#A86754] to-[#3B4A3F]',
      icon: '🍽️'
    },
    {
      title: 'Landscaping Website',
      subtitle: 'Sterling Scapes of CT',
      description: 'Professional landscaping company with automated estimates, SMS scheduling, and project galleries.',
      features: ['Instant Quote Requests', 'SMS Reminders', 'Before/After Gallery', 'Review Collection'],
      link: '/samples/landscaper',
      color: 'from-[#2C3E33] to-[#6A7A89]',
      icon: '🌿'
    },
    {
      title: 'Pet Services Website',
      subtitle: 'The Wagging Tail Lodge',
      description: 'Cheerful pet daycare and grooming spa with online booking, digital forms, and live puppy cams.',
      features: ['Online Booking 24/7', 'Digital Forms', 'Live Puppy Cams', 'Auto Reminders'],
      link: '/samples/pet-services',
      color: 'from-[#FFD93D] to-[#87CEEB]',
      icon: '🐕'
    },
    {
      title: 'Therapy Practice Website',
      subtitle: 'The Haven Practice',
      description: 'Modern, immersive design for mental health professionals. Calming aesthetics with seamless booking and intake automation.',
      features: ['Confidential Booking', 'Encrypted Intake Forms', 'SMS Reminders', 'Immersive Design'],
      link: '/samples/therapy',
      color: 'from-[#A09CB0] to-[#B2C9C2]',
      icon: '🌿'
    },
    {
      title: 'Craft Beverage Website',
      subtitle: 'Isla Blū',
      description: 'Caribbean-inspired craft soda brand with vibrant design, flavor quiz, subscription service, and stockist locator.',
      features: ['Find Your Flavor Quiz', 'Subscribe & Save', 'Stockist Locator', 'Vibrant Branding'],
      link: '/samples/beverage',
      color: 'from-[#FF8B73] to-[#20C4B8]',
      icon: '🌴'
    },
    // Future samples can be added here
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-slate-800 to-secondary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-sage-light/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }}></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <div className="mb-8">
              <span className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-full font-bold text-lg">
                🎨 Live Demos
              </span>
            </div>
            
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              See What's
              <span className="block text-white/90">Possible</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              These aren't templates or themes. Each demo shows custom features built specifically for that type of business.
            </p>
          </div>
        </div>
      </section>

      {/* Samples Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Industry-Specific Demos
            </h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto">
              Click any demo to see a fully functional example of what your website could look like.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {samples.map((sample, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                  <div className={`h-3 bg-gradient-to-r ${sample.color}`}></div>
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="text-5xl mb-4">{sample.icon}</div>
                        <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                          {sample.title}
                        </h3>
                        <p className="text-lg text-primary font-semibold">
                          {sample.subtitle}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-text-light mb-6">
                      {sample.description}
                    </p>

                    <div className="mb-8">
                      <p className="text-sm font-semibold text-foreground mb-3">Features Demonstrated:</p>
                      <div className="flex flex-wrap gap-2">
                        {sample.features.map((feature, idx) => (
                          <span key={idx} className="bg-gray-100 text-foreground px-3 py-1 rounded-full text-sm">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link 
                      href={sample.link}
                      className={`block w-full text-center bg-gradient-to-r ${sample.color} text-white py-4 px-6 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                    >
                      View Live Demo →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-12 border border-primary/20">
              <h3 className="font-display font-bold text-3xl text-foreground mb-4">
                Don't See Your Industry?
              </h3>
              <p className="text-xl text-text-light mb-8 max-w-2xl mx-auto">
                These are just examples. I build custom websites for any type of business. 
                Let's talk about what you need.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Discuss Your Project
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}