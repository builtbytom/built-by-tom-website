import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Auto Detail Shop Websites & Automation | Built By Tom - North Haven, CT',
  description: 'Stop losing money to missed calls and no-shows. Get online booking, automated reminders, and a website that fills your bays.',
  keywords: 'auto detailing website new haven county, car detailing booking system ct, detail shop automation, auto detailer online scheduling connecticut',
};

export default function AutoDetailersPage() {
  const painPoints = [
    {
      icon: '📞',
      title: 'Missed Calls = Money Down the Drain',
      problem: 'You can\'t answer the phone when you\'re knee-deep in suds. Someone calls, you miss it, they call the next guy. That\'s real money walking out the door before you even know it.'
    },
    {
      icon: '📅',
      title: 'Schedules That Make No Sense',
      problem: 'Monday you\'re double-booked, Tuesday you could play solitaire all day. People bail last second, "emergencies" pop up, and you\'re the one left holding the chamois.'
    },
    {
      icon: '👻',
      title: 'Ghosted After Quotes',
      problem: 'You spend ten minutes writing the perfect quote. Hit send. Then nothing. Were they price shopping? Did they go with the guy offering a "free air freshener?" Who knows—no one ever replies to say "thanks, but no thanks."'
    },
    {
      icon: '❓',
      title: 'Package Confusion',
      problem: '"So, basic includes waxing, right?" (Nope.) "You can buff out this 10-year-old scratch, right?" (Also nope.) You spend more time explaining what\'s included than actually working on cars.'
    },
    {
      icon: '🎪',
      title: 'No-Shows, Late Cancels, and Random Walk-Ins',
      problem: 'You prep everything for a full detail, then… nobody. Or, five walk-ins when you\'re already booked solid. It\'s like herding cats, but the cats are all holding keys to minivans.'
    },
    {
      icon: '⭐',
      title: 'Google Reviews? You and the Competition',
      problem: 'The guy up the street has 75 reviews. You have four—one from your mom. If people can\'t find you, they can\'t book you. It\'s that simple.'
    }
  ];

  const solutions = [
    {
      icon: '📱',
      title: 'Online Booking That Doesn\'t Suck',
      description: 'Let people see what\'s open, pick their service, and book themselves—even at midnight.',
      result: 'No more missed calls. No more awkward "let me check the calendar" calls'
    },
    {
      icon: '⏰',
      title: 'Automated Reminders So People Actually Show Up',
      description: 'Texts and emails before every job—people remember, you don\'t waste time waiting around.',
      result: 'Fewer no-shows, fuller calendar'
    },
    {
      icon: '💬',
      title: 'Quote + Follow-Up That Feels Human',
      description: 'Instant quotes with a personal touch, and a nudge a day later if you don\'t hear back.',
      result: 'No more wondering who ghosted you'
    },
    {
      icon: '📋',
      title: 'Clear Service Menus (With Pictures for the Tire-Kickers)',
      description: '"Here\'s what\'s included. Here\'s what\'s not." No more twenty-minute explanations for a $40 wash.',
      result: 'Fewer arguments, happier clients'
    },
    {
      icon: '⭐',
      title: 'Google Review Requests (That Actually Work)',
      description: 'Finish the job, client gets a text: "Mind dropping us a review?" Suddenly you\'re at the top of the search results instead of buried under "Quick n\' Klean."',
      result: 'Show up when people search, not just your competition'
    },
    {
      icon: '📝',
      title: 'Waitlist & Walk-In Management',
      description: 'Let people join a waitlist online, and fill those random cancellations in seconds.',
      result: 'Never waste an empty bay'
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
              <div className="text-5xl">🚗</div>
              <div className="mx-4 bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium border border-white/20">
                Auto Detail Shop
              </div>
              <div className="text-5xl">✨</div>
            </div>
            
            <div className="mb-8">
              <span className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-full font-bold text-lg">
                🚗 Built for Auto Detailers
              </span>
            </div>
            
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              "You Make Cars Shine."
              <span className="block text-3xl sm:text-4xl lg:text-5xl text-white/80 mt-4 font-semibold">
                Why's the Rest of Your Business So Foggy?
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              Running a detail shop isn't just about spotless wheels and glass. It's chasing missed calls while your hands are covered in wax, juggling last-minute "emergencies," and praying the guy who booked at 9AM actually shows up this time. You bust your ass making every car look brand new—but behind the scenes, half your day is chaos.
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
              The Real Junk That Drives Detailers Nuts
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
              Here's How to Un-Mess the Mess
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
            <div className="text-5xl mb-6">🚗</div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Detail Shops in New Haven County
            </h2>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              I've seen under the hood of enough detail shops. Mobile rigs, fixed shops, one-guy operations, family businesses—if you're the one cleaning up everyone else's mess, you know the real problems.
            </p>
            <p className="text-lg text-text-light leading-relaxed">
              It's not just dirt on the floor—it's a business that feels like a car with three wheels and a donut.
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
                <span className="text-5xl mr-2">🌐</span> The Local Detailer Fix
              </h3>
              <div className="text-3xl font-bold text-primary mb-2">$3,500</div>
              <p className="text-text-light">
                Site that doesn't look like it was built in 2007, service menus people can understand, booking that actually works.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="font-bold text-2xl text-foreground mb-4">
                <span className="text-5xl mr-2">⚡</span> Complete Automation System
              </h3>
              <div className="text-3xl font-bold text-primary mb-2">$1,797</div>
              <p className="text-text-light">
                Quotes, reminders, reviews, waitlist, and all the little things you wish just happened by themselves. Want both? Let's build a setup that runs as smooth as a clay-bar finish.
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
          <div className="text-6xl mb-8">✨</div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-8">
            Ready to Run Your Shop Like a Pro—Not a Ping-Pong Ball?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            If you're tired of missed calls, empty spots, and explaining "no, a basic wash doesn't include paint correction"—let's fix it.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center px-12 py-6 bg-white text-primary text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          >
            Let's Make Your Business Shine Like the Cars You Work On
            <svg className="w-6 h-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}