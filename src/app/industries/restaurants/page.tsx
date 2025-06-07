import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Restaurant Business Websites & Automation | Built By Tom - North Haven, CT',
  description: 'Stop losing money to empty tables, inventory chaos, and scheduling nightmares. Get systems that actually work for restaurants, from someone who ran one.',
  keywords: 'restaurant website new haven county, restaurant automation ct, restaurant online ordering system, restaurant staff scheduling connecticut',
};

export default function RestaurantsPage() {
  const painPoints = [
    {
      icon: '🔄',
      title: 'Getting Customers In (and Keeping Them Coming Back)',
      problem: 'Some nights you\'re packed, other nights you\'re watching empty tables and hoping for takeout orders. You need regulars, not just a busy Saturday. If booking or ordering is a hassle, customers just try somewhere else.'
    },
    {
      icon: '📋',
      title: 'Table Turns & Lost Orders',
      problem: 'Tables waiting forever for the check, orders vanishing between the floor and the kitchen. You can\'t grow if you\'re always chasing down missing tickets or holding a line at the host stand.'
    },
    {
      icon: '👥',
      title: 'Scheduling: Herding Cats (with Aprons)',
      problem: '"Who\'s closing tonight?" "Can someone cover Sunday?" "Why did no one show up for brunch?" Building the schedule is a full-time job. Keeping everyone happy and actually staffed? That\'s another story.'
    },
    {
      icon: '📦',
      title: 'Inventory & Ordering Chaos',
      problem: '"Did we order enough wings?" "Who 86\'d the spinach?" "Why do we keep running out of limes?" You lose hours every week updating the spreadsheet, and someone always forgets something.'
    },
    {
      icon: '💻',
      title: 'The POS Never Matches Reality',
      problem: 'Menu prices change daily, specials need updating, and staff ring things under the wrong buttons because it\'s easier. You spend more time fixing POS buttons than running your business.'
    },
    {
      icon: '🕵️',
      title: 'Employee Theft (Nobody Wants to Talk About It)',
      problem: 'Food goes out without a ticket. "Discounts" for friends. Drinks that never hit the register. You know it\'s happening, even if nobody talks about it.'
    },
    {
      icon: '💰',
      title: 'Food Costs That Make No Sense',
      problem: 'Prices jump every week. You have no idea what you actually made on last night\'s special. Profit margins are a mystery, and you\'re tired of guessing.'
    },
    {
      icon: '🔧',
      title: 'Equipment Breaks Down—Because Nobody Remembers Service',
      problem: 'The fryer dies on Friday night, again. Nobody scheduled the oil change, again. Every service call is a mini crisis.'
    }
  ];

  const solutions = [
    {
      icon: '📱',
      title: 'Automated Reservations & Online Ordering',
      description: 'Fill seats, take orders, and send instant confirmations—no more phone tag or missed orders.',
      result: 'Fewer empty tables, more happy regulars'
    },
    {
      icon: '📅',
      title: 'Smart Staff Scheduling Tools',
      description: 'Get your schedule set and shared, auto-remind staff, fill shifts with a tap. No more last-minute scramble or sticky notes.',
      result: 'Less stress, fewer "no shows," happier team'
    },
    {
      icon: '⭐',
      title: 'Review Request Automation',
      description: 'Happy customers get a "Leave us a review" text or email. Five-star reviews go up, new customers find you.',
      result: 'Stand out on Google, grow word-of-mouth'
    },
    {
      icon: '🚨',
      title: 'Inventory & Ordering Reminders',
      description: 'Set low-inventory alerts. Order what you need, when you need it—before you run out.',
      result: 'No more "86\'d" panic'
    },
    {
      icon: '🔔',
      title: 'Scheduled Maintenance Reminders',
      description: 'Automatic alerts for service and equipment checks. Don\'t wait for the fryer to die on a Friday.',
      result: 'Fewer breakdowns, more peace of mind'
    },
    {
      icon: '🛡️',
      title: 'Employee Accountability Tools',
      description: 'Track "ticketless" kitchen items, log register activity, and get simple reports—without playing cop.',
      result: 'Less theft, more profit'
    },
    {
      icon: '📖',
      title: 'Digital Playbooks & Staff Training',
      description: 'Document your systems once—train every new hire the same way, every time.',
      result: 'Faster ramp-up, fewer errors'
    },
    {
      icon: '📊',
      title: 'Manager Dashboards & Communication Hubs',
      description: 'All the critical info in one spot—no more sticky notes, group texts, or "did anyone tell the kitchen?"',
      result: 'Run a tighter ship, catch problems before they\'re problems'
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
              <div className="text-5xl">🍽️</div>
              <div className="mx-4 bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium border border-white/20">
                Restaurant Business
              </div>
              <div className="text-5xl">👨‍🍳</div>
            </div>
            
            <div className="mb-8">
              <span className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-full font-bold text-lg">
                🍽️ Built for Restaurant Owners
              </span>
            </div>
            
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              "Running a Restaurant Feels Like Spinning Plates"
              <span className="block text-3xl sm:text-4xl lg:text-5xl text-white/80 mt-4 font-semibold">
                ...And Sometimes You Drop a Few
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              I ran a restaurant for a decade. I know what it's like when everything hits at once.
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
              The Real Problems Restaurants Face
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
              What Actually Works for Restaurants
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
            <div className="text-5xl mb-6">🍽️</div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Restaurants in New Haven County
            </h2>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              From diners in Hamden to pizza shops in New Haven, I've lived the grind and seen it all. Whether you're running a neighborhood spot or a busy takeout joint, the headaches don't change—but the solutions can.
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
                <span className="text-5xl mr-2">🌐</span> The Local Restaurant Fix
              </h3>
              <div className="text-3xl font-bold text-primary mb-2">$3,500</div>
              <p className="text-text-light">
                Get found online, streamline bookings, set up key systems, and look as good online as your food tastes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="font-bold text-2xl text-foreground mb-4">
                <span className="text-5xl mr-2">⚡</span> Complete Automation System
              </h3>
              <div className="text-3xl font-bold text-primary mb-2">$1,797</div>
              <p className="text-text-light">
                Automated inventory alerts, scheduling tools, review requests, staff accountability—so you can run your restaurant instead of it running you. Want both? Let's put together something that fits your menu.
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
          <div className="text-6xl mb-8">🍽️</div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-8">
            Ready to Stop Spinning Plates and Start Running a Restaurant?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            If you're tired of chasing staff, losing money to "shrinkage," or running out of food at the worst time—let's fix it.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center px-12 py-6 bg-white text-primary text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          >
            Let's Talk About What's Actually Broken
            <svg className="w-6 h-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}