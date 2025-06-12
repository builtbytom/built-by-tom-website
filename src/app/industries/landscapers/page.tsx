import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Landscaping Business Websites & Automation | Built By Tom - North Haven, CT',
  description: 'Stop losing landscaping jobs to price shoppers and phone tag. Get a website that filters out cheap customers and automation that books jobs while you work.',
  keywords: 'landscaper website new haven county, landscaping business automation ct, lawn care scheduling system, landscaper pricing website connecticut',
};

export default function LandscapersPage() {
  const painPoints = [
    {
      icon: '💸',
      title: 'Everyone Shops Price First',
      problem: '"How much to cut my grass?" before they even give you their address. You get calls comparing you to "the guy with a truck who works for $25." You know you can\'t work for that, but explaining why quality costs more takes forever—and they\'ve usually hung up by then.'
    },
    {
      icon: '📞',
      title: 'Playing Phone Tag All Day',
      problem: 'You\'re on a mower, they call. You call back, they\'re at work. You text, they want to "talk first." By the time you actually connect with someone, they\'ve moved on to the next guy or forgot they even called. Meanwhile, you\'ve wasted your whole lunch break trying to call people back.'
    },
    {
      icon: '📅',
      title: 'The Scheduling Nightmare',
      problem: '"Can you come Tuesday?" Actually, make it Wednesday. "Is Monday better?" Never mind, they found someone else. You give someone a quote on Tuesday. They say they\'ll "think about it." Call back Thursday wanting to schedule for "sometime next week." Then wonder why you\'re not there Friday morning.'
    },
    {
      icon: '🚛',
      title: 'Standing Out in a Competitive Market',
      problem: 'You\'re licensed, insured, and professional. But customers keep choosing whoever\'s cheapest. You bid $150 for a job that takes skill and the right equipment. "Guy with a truck" says he\'ll do it for $50. Customer goes with him, then calls you three weeks later asking if you can "fix what he messed up."'
    }
  ];

  const solutions = [
    {
      icon: '💰',
      title: 'Put Pricing Ranges Right on Your Website',
      description: 'Stop playing the "call for pricing" game. Show ranges like "$75-$125 for typical residential lawn service" right on your site. The tire-kickers will filter themselves out, and serious customers will actually call.',
      result: 'Stop answering calls from people who want $20 lawn cuts'
    },
    {
      icon: '📱',
      title: 'Text-Based Scheduling That Actually Works',
      description: 'Send a text with your quote and available times. They text back a time. You confirm. Done. No more playing phone tag while you\'re trying to work.',
      result: 'Book jobs without stopping work'
    },
    {
      icon: '🤖',
      title: 'Automated Follow-Ups',
      description: 'When someone gets a quote, they automatically get follow-up texts—fertilization reminders, seasonal services, snow removal prep—all automated. Your customers think you\'re reading their mind.',
      result: 'Fill your schedule before competitors wake up'
    },
    {
      icon: '📸',
      title: 'Show Your Actual Work',
      description: 'Before/after photos that load fast on phones. Let your work speak for itself instead of trying to explain why you\'re worth more than the "guy with a truck."',
      result: 'Quality customers find quality work'
    }
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
            <div className="flex justify-center items-center mb-6">
              <div className="text-5xl">🌱</div>
              <div className="mx-4 bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium border border-white/20">
                Landscaping Business
              </div>
              <div className="text-5xl">🌿</div>
            </div>
            
            <div className="mb-8">
              <span className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-full font-bold text-lg">
                🎯 Built for Landscaping Pros
              </span>
            </div>
            
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              "Everyone Wants It Cheap!"
              <span className="block text-3xl sm:text-4xl lg:text-5xl text-white/80 mt-4 font-semibold">
                ...But You Can't Work for Nothing
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              Every landscaper I talk to deals with the same headaches. Price shoppers calling for $20 lawn cuts. Customers who can't figure out scheduling. Let me guess when you say no, they're calling the next guy on Google instead of actually working with you.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">😤</div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
              The Same Problems Every Landscaping Business Faces
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {painPoints.map((point, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="text-5xl mr-4">{point.icon}</div>
                  <h3 className="font-bold text-2xl text-foreground">
                    <span className="text-5xl mr-2">{point.icon}</span> {point.title}
                  </h3>
                </div>
                <p className="text-text-light leading-relaxed">
                  {point.problem}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gradient-to-br from-background to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-5xl mb-6">✨</div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Here's What Actually Works for Landscapers
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="text-5xl mr-4">{solution.icon}</div>
                  <h3 className="font-bold text-2xl text-foreground">
                    <span className="text-5xl mr-2">{solution.icon}</span> {solution.title}
                  </h3>
                </div>
                <p className="text-text-light mb-6 leading-relaxed">
                  {solution.description}
                </p>
                <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                  <p className="text-primary font-bold text-lg">
                    {solution.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-5xl mb-6">🏡</div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Landscaping in New Haven County
            </h2>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              I work with landscapers in towns like yours to price services correctly in Hamden, I know this market. Cheshire customers want premium service. Branford properties need someone who shows up year-round. East Haven jobs need solid value, and New Haven clients want proof you can handle city properties.
            </p>
            <p className="text-lg text-text-light leading-relaxed">
              Your customers are looking at photos of their yards on Nextdoor, Googling "landscaper near me" on a lunch, and asking neighbors who cut their grass. If you're not showing up naturally across all those channels, you're losing business to whoever is.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-background to-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-5xl mb-6">💰</div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
              What This Costs
            </h2>
            <p className="text-xl text-text-light">
              No surprises, no monthly fees that eat your profits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="font-bold text-2xl text-foreground mb-4">
                <span className="text-5xl mr-2">🌐</span> Basic Setup
              </h3>
              <div className="text-3xl font-bold text-primary mb-2">$3,500 - $4,500</div>
              <p className="text-text-light">
                Professional site, Google My Business optimization, basic contact forms. Get found, look professional.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="font-bold text-2xl text-foreground mb-4">
                <span className="text-5xl mr-2">⚡</span> Complete Automation System
              </h3>
              <div className="text-3xl font-bold text-primary mb-2">$1,797</div>
              <p className="text-text-light">
                I'll set up a complete automation system tailored to your business, lead capture, email flows, internal alerts, whatever you need. Want both? I'll figure out a package that makes sense.
              </p>
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
          <div className="text-6xl mb-8">🎯</div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-8">
            Win More Jobs with Better Systems
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            If you're tired of chasing clients while you're on a mower, losing jobs during phone tag, and explaining why you're not the cheapest—let's fix it.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center px-12 py-6 bg-white text-primary text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          >
            Let's Fix Your Phone Problem
            <svg className="w-6 h-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}