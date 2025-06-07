import Link from 'next/link';

const industries = [
  {
    name: 'Restaurants',
    slug: 'restaurants',
    description: 'From online ordering to automated reservations, I help restaurants focus on food, not tech.',
    problems: ['No-shows eating profits', 'Manual reservation chaos', 'Losing orders to competitors'],
    color: 'from-red-500 to-orange-600'
  },
  {
    name: 'Landscapers',
    slug: 'landscapers',
    description: 'Stop losing leads while you\'re on the mower. Get systems that capture every opportunity.',
    problems: ['Missing calls while working', 'Quote follow-up nightmare', 'Seasonal scheduling chaos'],
    color: 'from-green-600 to-emerald-700'
  },
  {
    name: 'Barbershops',
    slug: 'barbershops',
    description: 'End the double-booking disasters and no-shows. Let clients book while you cut.',
    problems: ['Walk-in vs appointment chaos', 'No-show revenue loss', 'Manual booking headaches'],
    color: 'from-gray-700 to-gray-900'
  },
  {
    name: 'Bookkeepers',
    slug: 'bookkeepers',
    description: 'Your business helps others stay organized. Time to practice what you preach.',
    problems: ['Drowning in client emails', 'Document chase exhaustion', 'Manual onboarding time-suck'],
    color: 'from-blue-600 to-indigo-700'
  },
  {
    name: 'Plumbers',
    slug: 'plumbers',
    description: 'Emergency calls come 24/7. Your website and systems should work just as hard.',
    problems: ['After-hours call chaos', 'Quote follow-up delays', 'Scheduling nightmares'],
    color: 'from-blue-500 to-blue-700'
  },
  {
    name: 'Coaches & Therapists',
    slug: 'coaches-therapists',
    description: 'Focus on transforming lives, not wrestling with booking systems and payment processing.',
    problems: ['Complex scheduling needs', 'Payment collection hassles', 'Client communication overload'],
    color: 'from-purple-600 to-pink-600'
  },
  {
    name: 'Nail Salons',
    slug: 'nail-salons',
    description: 'Beautiful nails need beautiful systems. Stop the booking chaos and pricing confusion.',
    problems: ['Walk-in disruptions', 'Service menu confusion', 'Review management stress'],
    color: 'from-pink-500 to-rose-600'
  },
  {
    name: 'Auto Detailers',
    slug: 'auto-detailers',
    description: 'Your attention to detail should extend to your business systems, not just the cars.',
    problems: ['Package pricing confusion', 'Weather rescheduling', 'Before/after photo chaos'],
    color: 'from-gray-600 to-gray-800'
  },
  {
    name: 'Pet Groomers',
    slug: 'pet-groomers',
    description: 'Wet hands can\'t answer phones. Get systems that work while you work.',
    problems: ['Can\'t answer during grooming', 'Appointment reminder fails', 'New client paperwork mess'],
    color: 'from-yellow-500 to-orange-600'
  },
  {
    name: 'Law Practices',
    slug: 'law-practices',
    description: 'Bill more hours by automating the administrative work that\'s eating your day.',
    problems: ['Document collection delays', 'Client portal confusion', 'Appointment scheduling complexity'],
    color: 'from-slate-700 to-slate-900'
  }
];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-slate-800 to-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display font-bold text-5xl lg:text-6xl mb-6">
              Industry-Specific Solutions
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              I understand your industry&apos;s unique challenges because I&apos;ve helped businesses just like yours. 
              Pick your industry below to see how I can help.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <Link 
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group relative h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 rounded-3xl transform group-hover:scale-105 transition-all duration-300"
                     style={{
                       backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                       '--tw-gradient-from': industry.color.split(' ')[1],
                       '--tw-gradient-to': industry.color.split(' ')[3]
                     } as React.CSSProperties}
                ></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full flex flex-col group-hover:shadow-2xl transition-all duration-300">
                  <h3 className={`font-display font-bold text-2xl mb-4 bg-gradient-to-r ${industry.color} bg-clip-text text-transparent`}>
                    {industry.name}
                  </h3>
                  <p className="text-text-light mb-6 flex-grow">
                    {industry.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {industry.problems.map((problem, index) => (
                      <div key={index} className="flex items-start text-sm">
                        <svg className="w-4 h-4 text-red-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                        <span className="text-text-light">{problem}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center text-primary font-semibold group-hover:text-primary/80 transition-colors">
                    See Solutions
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-12">
            <h2 className="font-display font-bold text-3xl text-foreground mb-4">
              Don&apos;t See Your Industry?
            </h2>
            <p className="text-lg text-text-light mb-8 max-w-2xl mx-auto">
              No problem. I&apos;ve worked with dozens of different businesses. 
              Let&apos;s talk about your specific challenges and how I can help.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
            >
              Tell Me About Your Business
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}