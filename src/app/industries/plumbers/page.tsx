import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Plumbing Business Websites & Automation | Built By Tom - North Haven, CT',
  description: 'Stop losing plumbing jobs to missed calls and phone tag. Get missed call text-back, automated quotes, and a website that actually brings in customers.',
  keywords: 'plumber website new haven county, plumbing business automation ct, plumber online scheduling, plumbing quote follow-up connecticut',
};

export default function PlumbersPage() {
  const painPoints = [
    {
      icon: '📞',
      title: 'Missed Calls, Missed Jobs',
      problem: 'You can\'t answer the phone while you\'re under a sink. But if you miss that call, they just dial the next plumber on Google. Every call you miss is a job lost. Voicemails get ignored. You\'re busy working—but losing money every time the phone rings and you can\'t pick up.'
    },
    {
      icon: '💸',
      title: '"Quote and Forget"',
      problem: 'You send a quote, never hear back, and wonder if the customer hired someone else or just forgot. You\'re great at giving estimates—but following up? Who has time? A week later, you remember the job and wonder if you should check in, but it feels awkward.'
    },
    {
      icon: '🎢',
      title: 'Scheduling Whiplash',
      problem: '"When can you get here?" "I\'ll be there between 10 and 2." "Actually, I need to reschedule…" Jobs shift, emergencies pop up, customers change their mind. Trying to keep your schedule straight (or your crew\'s) is a full-time job.'
    },
    {
      icon: '👻',
      title: 'No-Shows and Last-Minute Cancels',
      problem: 'You block off a slot, drive out, and the customer isn\'t there—or cancels five minutes before you arrive. You just wasted time and gas, and you\'re back to square one.'
    },
    {
      icon: '😰',
      title: '"Are You Really Coming?"',
      problem: 'Customers are anxious—especially in emergencies. They call, text, and email because they\'re not sure you\'ll show up. No-shows cost you money, but so does over-communicating. There\'s got to be a better way.'
    },
    {
      icon: '👁️',
      title: 'Online, You\'re Invisible',
      problem: 'People search "plumber near me" and find everyone but you. The other guy has 75 reviews. You have three. You\'re great at what you do, but new customers just pick whoever shows up first (or with the most five-star reviews).'
    },
    {
      icon: '🔄',
      title: 'Repeat Business Never Happens',
      problem: 'You fix a leak or unclog a drain, then never hear from that customer again. You know most people need more than one job a year, but nobody remembers to call until it\'s an emergency.'
    }
  ];

  const solutions = [
    {
      icon: '💬',
      title: 'Missed Call Text-Back',
      description: 'When you miss a call, the customer gets an instant text: "Sorry I missed you! Text your issue here, and I\'ll reply ASAP."',
      result: 'Save the job, even when you\'re up to your elbows in pipes'
    },
    {
      icon: '📋',
      title: 'Automated Quote Follow-Ups',
      description: 'Send quotes with automatic reminders—so nobody forgets, and you don\'t have to chase every estimate.',
      result: 'Book more jobs with zero awkwardness'
    },
    {
      icon: '📅',
      title: 'Smart Online Scheduling',
      description: 'Customers pick a time online, get confirmations, and can reschedule if needed—without endless calls.',
      result: 'Fill your calendar while you\'re working'
    },
    {
      icon: '⏰',
      title: 'Appointment Reminders',
      description: 'Automated reminders cut down no-shows and last-minute cancels.',
      result: 'Spend more time working, less time waiting'
    },
    {
      icon: '🚚',
      title: 'Arrival Notifications',
      description: 'Customers get a "We\'re on our way!" text, so they\'re ready—and not bugging you every five minutes.',
      result: 'Less stress for you and your clients'
    },
    {
      icon: '⭐',
      title: 'Google Review Requests',
      description: 'Every happy customer gets a simple link to leave a review—so you finally show up in "plumber near me" searches.',
      result: 'More five-stars, more new calls'
    },
    {
      icon: '🔔',
      title: 'Repeat Business Automations',
      description: 'Send seasonal checkup reminders ("Time to flush your water heater!") or yearly "How\'s everything working?" messages.',
      result: 'Stay top-of-mind without lifting a finger'
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
              <div className="text-5xl">🔧</div>
              <div className="mx-4 bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium border border-white/20">
                Plumbing Business
              </div>
              <div className="text-5xl">🚿</div>
            </div>
            
            <div className="mb-8">
              <span className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-full font-bold text-lg">
                🔧 Built for Plumbing Pros
              </span>
            </div>
            
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              "Always on the Go, Always Missing Calls"
              <span className="block text-3xl sm:text-4xl lg:text-5xl text-white/80 mt-4 font-semibold">
                ...and Losing Jobs to the Guy Who Picks Up First
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              Running a plumbing business isn't just about fixing leaks. It's crawling under sinks, driving from job to job, and juggling calls from people who needed you yesterday. Most days, you're booked solid—or staring at your phone, wondering why nobody's calling. I've worked with enough home service pros to know: the work is tough, but chasing customers is even tougher.
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
              The Real Problems Plumbers Face
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
            <div className="text-5xl mb-6">✨</div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Here's What Actually Works for Plumbers
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
            <div className="text-5xl mb-6">🚚</div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Plumbers in New Haven County
            </h2>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              From solo trucks in Wallingford to family businesses in North Haven, I see the same headaches over and over. The jobs change, but the systems problems don't.
            </p>
            <p className="text-lg text-text-light leading-relaxed">
              If you're tired of chasing jobs, missing calls, and watching your competitors eat your lunch online, you're not alone—and you can fix it.
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
              <h3 className="font-bold text-2xl text-foreground mb-4">
                <span className="text-5xl mr-2">🌐</span> The Local Plumber Fix
              </h3>
              <div className="text-3xl font-bold text-primary mb-2">$3,500</div>
              <p className="text-text-light">
                Professional website, Google Business Profile, and systems that help you get found—and get hired.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="font-bold text-2xl text-foreground mb-4">
                <span className="text-5xl mr-2">⚡</span> Complete Automation System
              </h3>
              <div className="text-3xl font-bold text-primary mb-2">$1,797</div>
              <p className="text-text-light">
                Missed call rescue, automated quotes, reminders, reviews, repeat business—the works. Want both? Let's build you something that fits your business, not just any plumber's.
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
          <div className="text-6xl mb-8">🔧</div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-8">
            Ready to Stop Losing Jobs to Phone Tag?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            If you're tired of missing calls while you're working, losing jobs to the "other guy," and never seeing repeat business—let's fix it.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center px-12 py-6 bg-white text-primary text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          >
            Let's Get Your Phone Ringing (and Your Calendar Full)
            <svg className="w-6 h-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}