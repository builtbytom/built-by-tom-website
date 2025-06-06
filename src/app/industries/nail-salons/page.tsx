import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nail Salon Business Websites & Automation | Built By Tom - North Haven, CT',
  description: 'Stop dealing with appointment book chaos and no-shows. Get online booking that works, automated reminders, and a website that fills your chairs.',
  keywords: 'nail salon website new haven county, nail salon booking system ct, nail salon automation, nail business online scheduling connecticut',
};

export default function NailSalonsPage() {
  const painPoints = [
    {
      icon: '🎲',
      title: 'Walk-In Russian Roulette',
      problem: 'Monday you\'re reading magazines. Saturday you have a line out the door and people getting attitude. You never know if you\'ll be dead or slammed. Too many walk-ins and your appointment clients wait forever. Too few and you\'re sitting there watching Netflix while your rent doesn\'t pay itself.'
    },
    {
      icon: '📋',
      title: 'Your Appointment Book Looks Like a Crime Scene',
      problem: 'Scribbled names, crossed-out times, arrows pointing everywhere. Three people show up at 2pm for the same slot. Paper books with coffee stains and eraser marks. Text messages you forgot to write down. Instagram DMs mixed with phone calls. You need a detective to figure out who\'s supposed to be where and when.'
    },
    {
      icon: '👻',
      title: 'Clients Ghost You (Then Get Mad You\'re Booked)',
      problem: 'Radio silence for four months, then they show up Saturday at 4pm expecting their "usual slot." Your regular client disappears, tries two other places, then comes back acting like they never left. Meanwhile, you gave their usual time to someone who actually shows up consistently.'
    },
    {
      icon: '💸',
      title: '"I Thought That Was Included!"',
      problem: '"Wait, gel polish costs extra?" "Why isn\'t nail art free with a basic manicure?" "I saw this design on Pinterest..." You spend more time explaining what costs what than actually doing nails. Every service turns into a negotiation because nobody knows what they\'re actually getting.'
    },
    {
      icon: '📞',
      title: 'The Phone Rings While You\'re Working',
      problem: 'You\'re doing someone\'s nails, can\'t answer, they book somewhere else. Or worse—they keep calling back every five minutes. Can\'t answer the phone with wet polish on your hands. Can\'t ignore it because that\'s money walking away. Meanwhile, your current client is getting annoyed that you keep getting interrupted.'
    },
    {
      icon: '👀',
      title: 'Online, You Don\'t Exist',
      problem: 'People Google "nail salon near me" and book the first place with good reviews and online booking. Even if their work sucks. Your Instagram looks great, but people can\'t book from it. Your Facebook page hasn\'t been updated since 2019. The place down the street has 80 reviews and online scheduling. Guess where new clients go?'
    }
  ];

  const solutions = [
    {
      icon: '📱',
      title: 'Online Booking That Actually Makes Sense',
      description: 'Clients see what services you offer, pick their nail tech, book their time. No more playing phone tag while you\'re trying to work.',
      result: 'Book appointments without stopping mid-manicure'
    },
    {
      icon: '⏰',
      title: 'Automated Reminders That Work',
      description: 'Text reminders the day before. "Looking forward to seeing you tomorrow at 2pm for gel mani with Sarah." No more "I totally forgot" no-shows.',
      result: 'Clients actually show up when they\'re supposed to'
    },
    {
      icon: '📋',
      title: 'Waitlist Magic',
      description: 'Someone cancels last minute? Your waitlist automatically texts people who want that slot. Empty chairs get filled without you doing anything.',
      result: 'Turn cancellations into money instead of lost time'
    },
    {
      icon: '💰',
      title: 'Show Them What They\'re Actually Getting',
      description: 'Service menu with photos and prices. "Basic mani includes X, Y, Z. Nail art is extra. This is what gel polish looks like." No more surprises at checkout.',
      result: 'Fewer arguments, happier clients'
    },
    {
      icon: '⭐',
      title: 'Google Reviews on Autopilot',
      description: 'After every appointment, happy clients get a simple text with a link to leave a review. More five-stars mean more new clients finding you first.',
      result: 'Show up when people search, not just your competition'
    },
    {
      icon: '🔄',
      title: 'Keep Regulars from Disappearing',
      description: 'Automated "we miss you" texts for clients who haven\'t been in a while. Monthly specials sent to your email list. Stay on their radar without stalking them.',
      result: 'Regulars stay regular'
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
              <div className="text-5xl">💅</div>
              <div className="mx-4 bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium border border-white/20">
                Nail Salon Business
              </div>
              <div className="text-5xl">✨</div>
            </div>
            
            <div className="mb-8">
              <span className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-full font-bold text-lg">
                💅 Built for Nail Salon Owners
              </span>
            </div>
            
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              "Perfect Nails, Imperfect Systems"
              <span className="block text-3xl sm:text-4xl lg:text-5xl text-white/80 mt-4 font-semibold">
                ...and Too Many Empty Slots (or People Waiting)
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              Running a nail salon isn't just about great nails. It's dealing with last-minute cancels, walk-in chaos, and "Can you fit me in at 5?" texts while you're trying to paint someone's pinky without smudging it. You work hard to build a vibe and keep clients happy. But if your booking system is held together with scotch tape and prayer, you're losing money and sanity every single day.
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
              The Real Problems Nail Salons Face
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
              Here's What Actually Works for Nail Salons
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
            <div className="text-5xl mb-6">💅</div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Nail Salons in New Haven County
            </h2>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              I've worked with everything from cozy one-chair spots in Branford to busy walk-in places near Yale. The same chaos happens everywhere: appointment books that look like abstract art, clients who disappear and reappear, and phones ringing at the worst possible times.
            </p>
            <p className="text-lg text-text-light leading-relaxed">
              Your work speaks for itself. But if people can't find you, book with you, or figure out what you charge, they'll go somewhere easier—even if the work isn't as good.
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
                <span className="text-5xl mr-2">🌐</span> The Local Website Fix
              </h3>
              <div className="text-3xl font-bold text-primary mb-2">$3,500</div>
              <p className="text-text-light">
                Clean, mobile-friendly site with online booking, service menus with prices, and everything clients need to choose you over the competition.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="font-bold text-2xl text-foreground mb-4">
                <span className="text-5xl mr-2">⚡</span> Complete Automation System
              </h3>
              <div className="text-3xl font-bold text-primary mb-2">$1,797</div>
              <p className="text-text-light">
                Automated booking, reminders, waitlists, review requests, and client retention systems that run themselves. Want both? We'll figure out a package that works for your salon.
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
          <div className="text-6xl mb-8">💅</div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-8">
            Stop Managing Chaos, Start Managing a Business
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            If you're tired of appointment book disasters, no-show roulette, and clients who treat you like their backup plan—let's fix it.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center px-12 py-6 bg-white text-primary text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          >
            Let's Talk About Making Your Salon Actually Work
            <svg className="w-6 h-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}