import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Barbershop Business Websites & Automation | Built By Tom - North Haven, CT',
  description: 'Stop losing money to no-shows and empty chairs. Get online booking that runs itself, automated reminders, and a website that actually brings in customers.',
  keywords: 'barbershop website new haven county, barber online booking ct, barbershop appointment system, barber shop automation connecticut',
};

export default function BarbershopsPage() {
  const painPoints = [
    {
      icon: '👻',
      title: 'No-Shows and Last-Minute Cancellations',
      problem: 'People book, forget, and ghost. You lose time, money, and your best customers get stuck waiting. You block out time for someone who doesn\'t show. Meanwhile, three walk-ins came by during that slot and you had to turn them away. Now you\'re sitting there with nothing to do, wondering if you should call the guy who\'s 20 minutes late.'
    },
    {
      icon: '✂️',
      title: 'Appointment Booking Is a Hot Mess',
      problem: 'Walk-ins are great... until everyone walks in at once. You can\'t text with scissors in your hand. Your phone rings while you\'re mid-cut. Someone wants to book for "later today." You\'re trying to remember who\'s coming when while holding sharp objects near someone\'s head. The old appointment book is covered in eraser marks and coffee stains.'
    },
    {
      icon: '🤷‍♂️',
      title: 'Nobody Remembers to Come Back',
      problem: 'Every regular says "See you next time!" and you never see half of them again. Your best customers just... disappear. Three months later they show up looking like a shaggy dog, apologizing for waiting so long. Meanwhile, they probably tried two other places because they forgot you existed.'
    },
    {
      icon: '🎢',
      title: 'Busy Weeks, Dead Weeks',
      problem: 'You\'re slammed some days, empty others. Your schedule is a roller coaster. Monday you\'re triple-booked. Thursday you\'re reading magazines. Weather changes, school starts, whatever... your schedule makes no sense and you never know if you\'re going to pay rent this month.'
    },
    {
      icon: '👀',
      title: 'Online, You\'re Invisible',
      problem: 'You give a great cut, but the other guy shows up first on Google. People Google "barber near me" and find everyone except you. The place down the street has 50 reviews, you have three. New customers pick whoever they can actually find online.'
    }
  ];

  const solutions = [
    {
      icon: '📱',
      title: 'Online Booking That Runs Itself',
      description: 'No more phone tag while you\'re working. Clients see your open times, book themselves, get instant confirmation. You find out when you check your phone between cuts.',
      result: 'Book appointments without stopping work'
    },
    {
      icon: '⏰',
      title: 'Automated Appointment Reminders',
      description: 'Text reminders the day before cut your no-shows way down. People actually show up, on time, without you having to chase them.',
      result: 'Stop losing money to ghosts'
    },
    {
      icon: '💬',
      title: '"Time for a Trim?" Follow-Ups',
      description: 'Automated check-ins every few weeks keep your regulars coming back. "Hey, it\'s been a while... want to book your next cut?" They feel remembered, not pestered.',
      result: 'Fill your chair before customers forget you exist'
    },
    {
      icon: '⭐',
      title: 'Easy Review Requests',
      description: 'After every good cut, your system asks for a Google review. More reviews mean more new customers finding you instead of the competition.',
      result: 'Show up when people search for barbers'
    },
    {
      icon: '🔄',
      title: 'Flexible for Walk-Ins and Appointments',
      description: 'Handle both without losing your mind. Book appointments, manage walk-ins, fill last-minute cancellations automatically.',
      result: 'Never turn away good customers because your system is rigid'
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
              <div className="text-5xl">💈</div>
              <div className="mx-4 bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium border border-white/20">
                Barbershop Business
              </div>
              <div className="text-5xl">✂️</div>
            </div>
            
            <div className="mb-8">
              <span className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-full font-bold text-lg">
                💈 Built for Barber Shops
              </span>
            </div>
            
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              "Booked Solid—or Totally Empty"
              <span className="block text-3xl sm:text-4xl lg:text-5xl text-white/80 mt-4 font-semibold">
                ...and Either Way, You're Tied to the Chair
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              Running a barbershop isn't just about cutting hair. It's managing schedules, chasing down no-shows, and answering "Any chance you have a slot this afternoon?" while trying not to nick anyone's ear. Let me guess... some days you're slammed, other days you're staring at an empty shop wondering where everyone went.
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
              The Real Problems Barbershops Face
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
              Here's What Actually Works for Barbershops
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
            <div className="text-5xl mb-6">🏪</div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Barbershops in New Haven County
            </h2>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              I work with everything from one-chair shops in East Haven to busy multi-chair places near Yale that flip customers all day. Whether you're cutting hair for college kids or guys who've been coming for 20 years, the same problems keep coming up.
            </p>
            <p className="text-lg text-text-light leading-relaxed">
              Your customers want convenience. If booking with you is harder than booking with the guy down the street, they'll go down the street. Simple as that.
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
                Get found online, look professional, let people book without calling.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="font-bold text-2xl text-foreground mb-4">
                <span className="text-5xl mr-2">⚡</span> Complete Automation System
              </h3>
              <div className="text-3xl font-bold text-primary mb-2">$1,797</div>
              <p className="text-text-light">
                Automated reminders, follow-ups, review requests, staff scheduling, whatever you need. Want both? We'll figure out a package that makes sense.
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
          <div className="text-6xl mb-8">💈</div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-8">
            Stop Chasing Customers While You're Trying to Work
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            If you're tired of no-shows, empty chairs, and your phone ringing while you've got scissors in your hand—let's fix it.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center px-12 py-6 bg-white text-primary text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          >
            Let's Talk About Filling Your Chair
            <svg className="w-6 h-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}