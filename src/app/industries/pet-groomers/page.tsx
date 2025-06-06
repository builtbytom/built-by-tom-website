import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pet Grooming Business Websites & Automation | Built By Tom - North Haven, CT',
  description: 'Stop losing money to no-shows and missed calls. Get online booking, automated reminders, and a website that fills your grooming schedule.',
  keywords: 'pet grooming website new haven county, dog grooming booking system ct, pet groomer automation, grooming business online scheduling connecticut',
};

export default function PetGroomersPage() {
  const painPoints = [
    {
      icon: '💧',
      title: 'You Can\'t Answer the Phone with Wet Hands',
      problem: 'You\'re shampooing a golden retriever. Phone rings. You can\'t answer. By the time you dry off, they\'ve booked with the place that picked up. Every missed call is money walking out the door. But you can\'t drop everything every time someone calls, especially when you\'re holding scissors near a nervous schnauzer.'
    },
    {
      icon: '🎲',
      title: 'Walk-In Roulette',
      problem: 'Three people show up at 9AM without appointments. At 2PM, you\'re sitting there filing your nails because nobody came in. You want to help everyone, but walk-ins mess up your whole schedule. Meanwhile, your booked clients get cranky when they have to wait because someone "just stopped by real quick."'
    },
    {
      icon: '👻',
      title: 'The Great Disappearing Act',
      problem: 'You block out two hours for Bella the bernedoodle. She\'s a no-show. You turned away walk-ins, and now you\'re watching tumbleweeds roll through your empty shop. Regular clients vanish for months, then show up expecting you to squeeze them in on Saturday afternoon. Meanwhile, you\'re trying to build a business around people who treat you like their backup plan.'
    },
    {
      icon: '💸',
      title: '"I Thought That Was Free!"',
      problem: '"The nail trim is extra?" "You can\'t just squeeze in a quick bath?" "Why does a de-shed cost more than a regular cut?" You spend more time explaining your prices than actually grooming pets. Every service becomes a negotiation because people have no idea what they\'re actually booking.'
    },
    {
      icon: '⭐',
      title: 'Review Desert (Except for That One Crazy Lady)',
      problem: 'Everyone says you\'re "amazing," but you have six Google reviews. One is from a woman convinced you turned her white poodle purple. Happy clients forget to leave reviews. Crazy clients never forget to complain. Meanwhile, the place down the street has 50 five-star reviews because they actually ask for them.'
    },
    {
      icon: '📱',
      title: '"Text Me When Fluffy\'s Ready"',
      problem: 'Of course you can text—except you\'re covered in fur, running late, and holding a blow dryer. Manual updates eat up your whole day. Every client wants play-by-play updates. You\'re already behind schedule, and now you\'re spending ten minutes texting progress reports instead of actually grooming.'
    }
  ];

  const solutions = [
    {
      icon: '📅',
      title: 'Online Booking That Makes Sense',
      description: 'Clients see your services, pick their pet\'s needs, book their own appointments. No more phone tag while you\'re trying to work.',
      result: 'Book appointments without stopping mid-groom'
    },
    {
      icon: '⏰',
      title: 'Automated Reminders That Work',
      description: 'Text reminders the day before so people actually show up with the right pet at the right time.',
      result: 'Fewer no-shows, fewer "was that today?" calls'
    },
    {
      icon: '📋',
      title: 'Waitlist Magic for Cancellations',
      description: 'Someone cancels? Your waitlist automatically texts people who want that slot. Empty appointments get filled without you lifting a finger.',
      result: 'Turn cancellations into money'
    },
    {
      icon: '💰',
      title: 'Service Menus That Stop the Confusion',
      description: 'Clear prices, photos, "here\'s what\'s included (and what costs extra)." No more twenty-minute explanations for a basic bath.',
      result: 'Fewer arguments, happier pet parents'
    },
    {
      icon: '⭐',
      title: 'Automatic Review Requests',
      description: 'After every great groom, clients get a simple text asking for a review. More five-stars mean more people find you first.',
      result: 'Finally get credit for all those perfect cuts'
    },
    {
      icon: '📱',
      title: '"Your Pet\'s Ready" Notifications',
      description: 'Automatic texts when pets are done. Clients know when to pick up, you don\'t waste time playing phone tag.',
      result: 'Less stress for everyone'
    },
    {
      icon: '📸',
      title: 'Simple Social Media Updates',
      description: 'Easy before/after photo sharing, monthly specials, and "time for your next groom" reminders that actually work.',
      result: 'Stay busy during slow seasons'
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
              <div className="text-5xl">🐕</div>
              <div className="mx-4 bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium border border-white/20">
                Pet Grooming Business
              </div>
              <div className="text-5xl">✂️</div>
            </div>
            
            <div className="mb-8">
              <span className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-full font-bold text-lg">
                🐕 Built for Pet Groomers
              </span>
            </div>
            
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              "Fluffy Dogs, Tangled Systems"
              <span className="block text-3xl sm:text-4xl lg:text-5xl text-white/80 mt-4 font-semibold">
                ...and You're Doing Everything but What You Actually Love
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              Running a pet grooming business is way more than bubbles and bows. It's chasing no-shows, dealing with "can you fit my doodle in right now?" calls, and trying to text updates while wrestling a squirming poodle. Some days you feel like a groomer, a therapist, and an air traffic controller all at once. You got into this to make pets look amazing—not to spend half your day managing chaos.
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
              The Real Headaches Pet Groomers Deal With
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
              Here's What Actually Works for Pet Groomers
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
            <div className="text-5xl mb-6">🐕</div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Pet Groomers in New Haven County
            </h2>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Whether you're a solo shop in Wallingford or running a busy place in New Haven, the problems are always the same. You're great at making pets look amazing—but managing the business side shouldn't take up half your day.
            </p>
            <p className="text-lg text-text-light leading-relaxed">
              Your clients want convenience. If booking with you is harder than booking with the competition, they'll go where it's easier. Even if your work is better.
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
                Professional site with online booking, clear service menus, and everything pet parents need to choose you over the competition.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="font-bold text-2xl text-foreground mb-4">
                <span className="text-5xl mr-2">⚡</span> Complete Automation System
              </h3>
              <div className="text-3xl font-bold text-primary mb-2">$1,797</div>
              <p className="text-text-light">
                Automated reminders, review requests, "pet's ready" texts, waitlist management, and client retention systems that run themselves. Want both? We'll figure out a package that works for your shop.
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
          <div className="text-6xl mb-8">🐕</div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-8">
            Stop Managing Chaos, Start Grooming Pets
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            If you're tired of missed calls, no-show roulette, and spending more time texting updates than actually working—let's fix it.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center px-12 py-6 bg-white text-primary text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          >
            Let's Talk About Making Your Business Actually Work
            <svg className="w-6 h-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}