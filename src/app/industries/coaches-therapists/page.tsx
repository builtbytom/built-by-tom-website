import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coaching & Therapy Business Websites & Automation | Built By Tom - North Haven, CT',
  description: 'Stop drowning in admin work. Get a website that converts, booking that works, and automation that lets you focus on actually helping people.',
  keywords: 'therapist website new haven county, coaching business automation ct, therapy online booking system, coach client management connecticut',
};

export default function CoachesTherapistsPage() {
  const painPoints = [
    {
      icon: '📚',
      title: 'You Write War and Peace, Nobody Reads It',
      problem: '"I need to explain my approach, my background, my philosophy..." Three paragraphs later, everyone\'s gone. You know what you do is valuable, so you try to explain everything upfront. But people just want to know "Can you help me?" and "What\'s next?" Your detailed homepage is overwhelming visitors instead of converting them.'
    },
    {
      icon: '🧩',
      title: 'Booking an Appointment is Like Solving a Puzzle',
      problem: 'Email back and forth. "What times work?" "Actually, can we do Wednesday?" "Let me check my calendar..." Your intake process involves email attachments. Scheduling means playing email tag for three days. By the time you finally book someone, half your leads have moved on to someone with simpler systems.'
    },
    {
      icon: '👻',
      title: 'No-Shows and the Reminder Dance',
      problem: 'You\'re texting people while you\'re supposed to be helping other people. "Don\'t forget about tomorrow." "See you at 2pm." "Just checking if we\'re still on." You spend half your day reminding people to show up, and they still ghost you. Meanwhile, someone else is waiting for that slot.'
    },
    {
      icon: '😴',
      title: 'Staying on People\'s Radar is Exhausting',
      problem: '"I should probably send a newsletter." Three months later, you still haven\'t. You know you need to stay in touch between sessions or after people finish working with you. But writing newsletters, posting on social media, creating content... who has time? Meanwhile, your past clients forget you exist.'
    },
    {
      icon: '🔒',
      title: 'Trust Issues (The Website Kind)',
      problem: 'People want to feel safe sharing personal stuff. Your contact form looks like it was built in 1995. Your clients are trusting you with their problems, relationships, or business struggles. If your website looks sketchy or your forms feel unsafe, they\'re not going to open up. First impressions matter, especially in this business.'
    }
  ];

  const solutions = [
    {
      icon: '🎯',
      title: 'A Website That Gets to the Point',
      description: 'Clear headline. Simple explanation. Obvious next step. No life story, no 47 different services listed. Just "Here\'s who I help, here\'s how, click here to start."',
      result: 'People understand what you do in 10 seconds'
    },
    {
      icon: '📅',
      title: 'Booking That Actually Works',
      description: 'Online scheduling that syncs with your calendar. Secure intake forms people can fill out on their phone. Instant confirmations so everyone knows what\'s happening.',
      result: 'Less email tag, more actual clients'
    },
    {
      icon: '⏰',
      title: 'Automated Reminders That Don\'t Suck',
      description: 'Text and email reminders that feel helpful, not pushy. "Looking forward to seeing you tomorrow at 2pm." Done. No more chasing people down.',
      result: 'Fewer no-shows, less stress'
    },
    {
      icon: '💌',
      title: 'Set-and-Forget Client Communication',
      description: 'Simple newsletter templates, automated check-ins, and follow-up sequences that keep you top of mind without you having to write War and Peace every week.',
      result: 'Past clients remember you exist'
    },
    {
      icon: '🔐',
      title: 'Forms That Feel Safe',
      description: 'Professional, secure intake forms that actually work on phones. HIPAA-compliant if you need it. No more Word doc attachments or sketchy contact forms.',
      result: 'People trust you with their information'
    },
    {
      icon: '📈',
      title: 'Progress Tracking That Shows Value',
      description: 'After sessions, clients get automatic follow-ups, resources, or progress check-ins. They see the value in working with you, not just "we talked for an hour."',
      result: 'Happier clients, more referrals'
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
              <div className="text-5xl">🧠</div>
              <div className="mx-4 bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium border border-white/20">
                Coaching & Therapy
              </div>
              <div className="text-5xl">💬</div>
            </div>
            
            <div className="mb-8">
              <span className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-full font-bold text-lg">
                🧠 Built for Coaches & Therapists
              </span>
            </div>
            
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              "Helping People is Hard Enough"
              <span className="block text-3xl sm:text-4xl lg:text-5xl text-white/80 mt-4 font-semibold">
                ...Your Website Shouldn't Be
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              You became a coach or therapist to help people, not to write novels about what you do or play tech support with booking systems. But somehow you're spending more time explaining your process than actually doing it. I've worked with enough coaches and therapists to see the same pattern: great at what you do, but drowning in admin work that has nothing to do with actually helping people. And honestly? That stuff shouldn't be your job. Let me handle the tech headaches so you can get back to what you're passionate about.
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
              The Real Problems Coaches & Therapists Face
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
              Here's What Actually Works for Coaches & Therapists
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
            <div className="text-5xl mb-6">🏥</div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Coaches & Therapists in New Haven County
            </h2>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              I've helped local therapists go from complicated intake processes to simple systems that actually work. Whether you're seeing clients in East Haven or running group sessions in New Haven, the same challenges keep coming up.
            </p>
            <p className="text-lg text-text-light leading-relaxed">
              Your clients want to focus on their progress, not figure out how to book with you. Make it easy, and they'll keep coming back.
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
                Clear, professional website that explains what you do without putting people to sleep. Secure forms, easy booking, built to actually convert visitors into clients.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="font-bold text-2xl text-foreground mb-4">
                <span className="text-5xl mr-2">⚡</span> Complete Automation System
              </h3>
              <div className="text-3xl font-bold text-primary mb-2">$1,797</div>
              <p className="text-text-light">
                Automated booking, reminders, follow-ups, client communication systems—whatever makes your practice run without you babysitting it. Want both? I'll figure out something that works for your practice.
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
            Stop Writing Novels, Start Helping People
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            If you're tired of explaining what you do for the 100th time, playing email tag to book appointments, and watching potential clients disappear into the void—let's fix it.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center px-12 py-6 bg-white text-primary text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          >
            Let's Talk About Making Your Practice Actually Work
            <svg className="w-6 h-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}