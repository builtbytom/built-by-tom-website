import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Automation for Landscapers in New Haven County | Built By Tom',
  description: 'Stop losing landscaping jobs to missed calls and slow quotes. Automation that handles leads, scheduling, and follow-ups while you\'re out in the field.',
  keywords: 'landscaper automation new haven, landscaping business systems connecticut, lawn care automation ct, landscaper website new haven county',
};

export default function LandscapersPage() {
  const painPoints = [
    {
      problem: 'Missed calls while mowing',
      impact: 'That $5,000 spring cleanup job goes to whoever calls back first',
      solution: 'Instant text responses to every lead, even at 6 AM'
    },
    {
      problem: 'Quote follow-up chaos',
      impact: 'You sent 20 quotes last week. How many actually got read?',
      solution: 'Automated quote tracking and follow-up sequences'
    },
    {
      problem: 'Seasonal customer loss',
      impact: 'Last year\'s clients hire someone else because they forgot about you',
      solution: 'Off-season nurture campaigns that book spring work in January'
    },
    {
      problem: 'Rain day rescheduling nightmare',
      impact: '30 texts and calls every time it rains',
      solution: 'One-click rescheduling that notifies everyone automatically'
    }
  ];

  const results = [
    { metric: '47%', description: 'more quotes accepted' },
    { metric: '3 hours', description: 'saved on admin per day' },
    { metric: '82%', description: 'of customers rebook next season' },
    { metric: '$18K', description: 'average revenue increase in first year' }
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
            <div className="mb-6">
              <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium border border-white/20">
                For Landscaping Businesses in New Haven County
              </span>
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              Stop Losing Jobs to
              <span className="block bg-gradient-to-r from-white via-accent to-sage-light bg-clip-text text-transparent" style={{ 
                backgroundSize: '200% 200%',
                animation: 'gradient 3s ease infinite'
              }}>
                Missed Calls
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              You're out making properties beautiful. Meanwhile, your phone's ringing with jobs you'll never know about.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-12 py-6 bg-white text-primary text-lg font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              Fix My Lead Problem
              <svg className="w-6 h-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
              The Reality of Running a Landscaping Business
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              6 AM to 6 PM in the field. Then home to return calls, send quotes, and schedule tomorrow. Sound familiar?
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {painPoints.map((point, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-foreground mb-2">{point.problem}</h3>
                    <p className="text-text-light mb-4">{point.impact}</p>
                    <div className="flex items-start">
                      <svg className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <p className="text-primary font-medium">{point.solution}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-gradient-to-br from-background to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
              What Happens When You Automate
            </h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto">
              Based on real landscapers in Connecticut who fixed their systems
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {results.map((result, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 text-center">
                <div className="text-4xl font-bold text-primary mb-2">{result.metric}</div>
                <div className="text-text-light">{result.description}</div>
              </div>
            ))}
          </div>

          {/* Case Study Card */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-10 border border-primary/20">
            <div className="max-w-3xl mx-auto text-center">
              <div className="text-6xl text-primary/20 mb-6">"</div>
              <p className="text-xl text-foreground mb-8 italic">
                "Last April was chaos—50 calls a day, working until 10 PM on quotes. This April? 
                My system handled everything. I actually made it to my kid's baseball game."
              </p>
              <div className="flex items-center justify-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  MR
                </div>
                <div className="text-left">
                  <div className="font-bold text-foreground">Mike R.</div>
                  <div className="text-text-light">Landscaping Business Owner, Hamden</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Built for How Landscapers Actually Work
            </h2>
          </div>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-6 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-bold text-xl text-foreground mb-2">Lead comes in while you're on a mower</h3>
                <p className="text-text-light">They get an instant text: "Thanks for reaching out! I'll call you this evening with a quote." Lead saved, customer impressed.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold mr-6 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-bold text-xl text-foreground mb-2">Quote sent, automation follows up</h3>
                <p className="text-text-light">3 days later: "Did you get a chance to review the quote?" 7 days: "Any questions?" No more wondering if they saw it.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold mr-6 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-bold text-xl text-foreground mb-2">Season ends, relationship doesn't</h3>
                <p className="text-text-light">January: "Time to book spring cleanup!" They remember you because you never let them forget.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
        
        <div className="relative max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-8">
            Ready to Stop Missing $5,000 Jobs?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Every missed call is money walking away. Let's fix that before spring rush hits.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-12 py-6 bg-white text-primary text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              Book a Quick Call
              <svg className="w-6 h-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link 
              href="/services/automation" 
              className="inline-flex items-center px-8 py-6 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300"
            >
              See Automation Options
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}