import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bookkeeping & Accounting Business Websites & Automation | Built By Tom - North Haven, CT',
  description: 'Stop being the bottleneck in your accounting firm. Get systems that document processes, automate client onboarding, and let you take a vacation.',
  keywords: 'bookkeeper website new haven county, accounting business automation ct, client portal bookkeeping, accountant workflow automation connecticut',
};

export default function BookkeepersPage() {
  const painPoints = [
    {
      icon: '🧠',
      title: 'Everything Lives in Your Head',
      problem: '"Where\'s the Johnson file?" "How do we onboard new clients?" "What\'s our process for year-end?" You know the answers-but explaining it all takes longer than just doing it yourself. So you keep doing it yourself, and nothing gets documented.'
    },
    {
      icon: '🔄',
      title: 'New Clients = Groundhog Day',
      problem: 'Every onboarding is a repeat. You\'re chasing the same missing docs, answering the same questions you answered last week (and the week before that).'
    },
    {
      icon: '🤦‍♀️',
      title: 'Can\'t Trust Anyone to Do It Right',
      problem: 'You try to delegate. Two hours later, you\'ve redone the whole job, and you\'re back to being the bottleneck.'
    },
    {
      icon: '☎️',
      title: 'The Never-Ending Question Parade',
      problem: 'Clients keep calling: "When will my reports be ready?" "What do you need from me?" "Can you explain this again?" You spend as much time managing confusion as you do actually working.'
    }
  ];

  const solutions = [
    {
      icon: '📋',
      title: 'Automated Client Onboarding',
      description: 'No more explaining the same steps 50 times. New clients get a step-by-step sequence-what you need, when you need it, and how to send it over.',
      result: 'Stop chasing missing docs'
    },
    {
      icon: '🏪',
      title: 'Self-Serve Client Portals',
      description: 'Clients see reports, upload files, and check status-without calling you.',
      result: 'Cut \'Where\'s my stuff?\' calls in half'
    },
    {
      icon: '📚',
      title: 'Staff Training That Sticks',
      description: 'Document your process once. Train every new person the same way, every time.',
      result: 'Delegate without losing sleep'
    },
    {
      icon: '📡',
      title: 'Automated Status Updates',
      description: 'Clients get alerts when reports are ready, when you need docs, or when a deadline is coming up.',
      result: 'Spend less time project-managing, more time accounting'
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
              <div className="text-5xl">📊</div>
              <div className="mx-4 bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium border border-white/20">
                Bookkeeping & Accounting
              </div>
              <div className="text-5xl">💼</div>
            </div>
            
            <div className="mb-8">
              <span className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-full font-bold text-lg">
                📈 Built for Financial Pros
              </span>
            </div>
            
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              "I'm Wearing Every Hat"
              <span className="block text-3xl sm:text-4xl lg:text-5xl text-white/80 mt-4 font-semibold">
                ...and My Business Can't Run Without Me
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              Every bookkeeper and accountant I talk to says the same thing: You got into this to help people manage their money-now you barely have time to manage your own. Can't take a vacation, can't step away for a day, because everything falls apart without you. Sound familiar?
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">😩</div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
              The Real Problems Accounting Businesses Face
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {painPoints.map((point, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
                <div className="flex items-center mb-4">
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
            <div className="text-5xl mb-6">💡</div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Here's What Actually Works
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center mb-4">
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
            <div className="text-5xl mb-6">🏛️</div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Accounting in New Haven County
            </h2>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              I work with bookkeepers and accountants who help everyone from Yale-area startups to Cheshire family businesses. Your clients want to trust you and understand what's happening-without calling you every week.
            </p>
            <p className="text-lg text-text-light leading-relaxed">
              Most are juggling their own chaos. If your systems make their life easier, they'll stick around. If working with you is a headache, they'll look for someone less stressful.
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
              No surprise fees, no monthly charges eating into your profit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="font-bold text-2xl text-foreground mb-4">
                <span className="text-5xl mr-2">🌐</span> The Local Website Fix
              </h3>
              <div className="text-3xl font-bold text-primary mb-2">$3,500</div>
              <p className="text-text-light">
                A deliberate, professional website that positions you as the trusted local expert-clear, clean, and built to attract the right clients.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="font-bold text-2xl text-foreground mb-4">
                <span className="text-5xl mr-2">⚡</span> Complete Automation System
              </h3>
              <div className="text-3xl font-bold text-primary mb-2">$1,797</div>
              <p className="text-text-light">
                Custom-tailored client onboarding, document collection, status updates, staff workflows-the works. Want both? We'll figure out a package that fits.
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
          <div className="text-6xl mb-8">🏖️</div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-8">
            Take Your Business Back
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            If you're tired of working every weekend, being the only person who can do anything right, and feeling like your business owns you-let's fix it.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center px-12 py-6 bg-white text-primary text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          >
            Let's Talk About Getting Your Life Back
            <svg className="w-6 h-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}