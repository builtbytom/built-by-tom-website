import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Business Automation Services | Built By Tom',
  description: 'Stop doing manual tasks that waste your time. Custom automation that connects your tools and runs your business on autopilot. $797 per package.',
};

export default function AutomationServices() {
  return (
    <>
      {/* Hero Section - Redesigned for Impact */}
      <section className="relative min-h-[70vh] lg:min-h-[60vh] bg-gradient-to-br from-primary via-slate-800 to-secondary overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-sage-light/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }}></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-32 pb-16 lg:pb-20">
          <div className="text-center">
            {/* Visual time-saving stat */}
            <div className="mb-10 sm:mb-8">
              <div className="inline-flex items-center bg-white text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-2xl">
                <span className="text-2xl sm:text-3xl font-bold">10+ Hours</span>
                <span className="mx-2 sm:mx-3 text-gray-300">|</span>
                <span className="text-base sm:text-lg font-medium">Saved Every Week</span>
              </div>
            </div>
            
            {/* Main message - tighter, punchier */}
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-7xl text-white mb-6 sm:mb-4 leading-[0.9]">
              Stop Doing Tasks
              <span className="block bg-gradient-to-r from-accent via-white to-sage-light bg-clip-text text-transparent mt-2" style={{ 
                backgroundSize: '200% 200%',
                animation: 'gradient 3s ease infinite'
              }}>
                Robots Can Do
              </span>
            </h1>
            
            {/* Supporting text - more concise */}
            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-10 sm:mb-10 max-w-2xl mx-auto leading-tight">
              Stop copying data between spreadsheets. Let automation handle the boring stuff.
            </p>
            
            {/* Package options - visual hierarchy */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 sm:mb-10">
              <div className="bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-white/20">
                <span className="text-white font-bold text-base sm:text-lg">Lead Response</span>
                <span className="text-white/70 mx-2 hidden sm:inline">•</span>
                <span className="text-accent font-bold sm:inline hidden">$797</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-white/20 hidden sm:block">
                <span className="text-white font-bold text-base sm:text-lg">Appointments</span>
                <span className="text-white/70 mx-2">•</span>
                <span className="text-accent font-bold">$797</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-xl border border-white/20">
                <span className="text-white font-bold text-base sm:text-lg">Complete System</span>
                <span className="text-white/70 mx-2 sm:inline hidden">•</span>
                <span className="text-accent font-bold sm:inline">$1,797</span>
              </div>
            </div>
            
            {/* CTAs - clearer hierarchy */}
            <div className="flex flex-col items-center">
              <Link 
                href="/contact" 
                className="group px-10 sm:px-12 py-5 sm:py-6 bg-white text-primary text-base sm:text-lg font-bold rounded-2xl shadow-2xl shadow-black/10 hover:shadow-black/20 transform hover:scale-105 transition-all duration-500 mb-4"
              >
                <span className="flex items-center justify-center">
                  Start Automating Now
                  <svg className="w-5 sm:w-6 h-5 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link 
                href="#automation-packages" 
                className="sm:hidden text-white/80 hover:text-white font-medium underline underline-offset-4 decoration-white/30 hover:decoration-white transition-all duration-300"
              >
                See How It Works ↓
              </Link>
              <Link 
                href="#automation-packages" 
                className="hidden sm:flex group px-6 sm:px-8 py-5 sm:py-6 border-2 border-white/40 text-white text-base sm:text-lg font-semibold rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-white/60 transition-all duration-500"
              >
                <span className="flex items-center justify-center">
                  See How It Works
                  <svg className="w-4 sm:w-5 h-4 sm:h-5 ml-2 inline-block group-hover:translate-y-1 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem With Manual Work */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-5xl lg:text-6xl text-foreground mb-8">
              You&apos;re Drowning in
              <span className="block text-primary">Busy Work</span>
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Every hour you spend on data entry, follow-ups, and manual tasks is an hour you&apos;re not growing your business.
            </p>
          </div>

          {/* Problem Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 h-full">
                <div className="text-6xl mb-6">📧</div>
                <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                  Leads Slip Through
                  <span className="block">the Cracks</span>
                </h3>
                <p className="text-text-light mb-6 leading-relaxed">
                  Someone fills out your form at 11 PM. You see it Tuesday. They&apos;ve already hired your competitor who responded in 5 minutes.
                </p>
                <div className="text-red-600 font-semibold">
                  Speed kills - slow kills you
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 h-full">
                <div className="text-6xl mb-6">📅</div>
                <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                  No-Shows Kill Your
                  <span className="block">Schedule</span>
                </h3>
                <p className="text-text-light mb-6 leading-relaxed">
                  You block off time. They don&apos;t show. No reminder, no heads up, just an empty calendar slot and lost revenue.
                </p>
                <div className="text-orange-600 font-semibold">
                  Empty calendars = empty wallets
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-500/10 to-gray-600/10 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 h-full">
                <div className="text-6xl mb-6">📊</div>
                <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                  Manual Data Entry
                  <span className="block">Nightmare</span>
                </h3>
                <p className="text-text-light mb-6 leading-relaxed">
                  Copy from email to CRM. Export from scheduling app to accounting. Hours of mindless clicking that a computer should handle.
                </p>
                <div className="text-gray-600 font-semibold">
                  Manual work doesn&apos;t scale
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl text-foreground font-semibold">
              What if all of this just... happened automatically?
            </p>
          </div>
        </div>
      </section>

      {/* Automation in Action - Real Examples */}
      <section className="py-24 bg-gradient-to-br from-background to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-5xl lg:text-6xl text-foreground mb-8">
              Automation That Actually
              <span className="block text-primary">Works</span>
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Real systems for real businesses. No robots, no AI nonsense - just reliable automation that saves you hours every day.
            </p>
          </div>

          {/* Before/After Automation Examples */}
          <div className="space-y-24">
            {/* Example 1 - Lead Response */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden p-8 border border-red-200">
                  <div className="flex items-center mb-6">
                    <div className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold mr-4">BEFORE</div>
                    <h3 className="font-bold text-lg text-foreground">Manual Lead Follow-up</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="text-red-500 mr-3 mt-1">❌</div>
                      <div>
                        <p className="font-semibold text-foreground">11:30 PM: Lead fills out form</p>
                        <p className="text-text-light text-sm">You&apos;re asleep, form sits in inbox</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-red-500 mr-3 mt-1">❌</div>
                      <div>
                        <p className="font-semibold text-foreground">10:00 AM: You see the form</p>
                        <p className="text-text-light text-sm">Add to to-do list, planning to call later</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-red-500 mr-3 mt-1">❌</div>
                      <div>
                        <p className="font-semibold text-foreground">3:00 PM: Finally call</p>
                        <p className="text-text-light text-sm">&ldquo;Thanks, but we went with someone else&rdquo;</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 bg-red-50 p-4 rounded-lg">
                    <p className="text-red-700 font-semibold text-sm">Result: Lost $3,500 project</p>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden p-8 border border-green-200">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold mr-4">AFTER</div>
                    <h3 className="font-bold text-lg text-foreground">Automated Lead Response</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">✅</div>
                      <div>
                        <p className="font-semibold text-foreground">11:30 PM: Lead fills out form</p>
                        <p className="text-text-light text-sm">Instant text: &ldquo;Thanks! I&apos;ll call you tomorrow at 9 AM&rdquo;</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">✅</div>
                      <div>
                        <p className="font-semibold text-foreground">11:31 PM: Added to your CRM</p>
                        <p className="text-text-light text-sm">Calendar reminder set for 9 AM call</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">✅</div>
                      <div>
                        <p className="font-semibold text-foreground">9:00 AM: You call</p>
                        <p className="text-text-light text-sm">&ldquo;Wow, you&apos;re so organized! When can we start?&rdquo;</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 bg-green-50 p-4 rounded-lg">
                    <p className="text-green-700 font-semibold text-sm">Result: Closed $3,500 project</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white">
              <div className="text-center mb-8">
                <h3 className="font-display font-bold text-3xl mb-4">Why Automation Wins</h3>
                <p className="text-white/90 text-lg">Numbers don&apos;t lie. Faster response = more customers.</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-5xl font-bold mb-2">5 min</div>
                  <div className="text-white/80">Response time increases close rate by 900%</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">78%</div>
                  <div className="text-white/80">Of leads go with first business to respond</div>
                </div>
                <div>
                  <div className="text-5xl font-bold mb-2">10x</div>
                  <div className="text-white/80">More likely to convert if contacted within an hour</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Packages */}
      <section id="automation-packages" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-5xl lg:text-6xl text-foreground mb-8">
              Pick Your
              <span className="block text-primary">Automation</span>
            </h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto">
              Start with one package or bundle them all. Each automation saves you 2-5 hours per week.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Lead Response Automation */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-10 border-2 border-primary/20 relative shadow-2xl">
              <div className="absolute -top-4 left-6 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold">
                Most Popular
              </div>
              
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <span className="text-2xl text-white">📧</span>
              </div>
              
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                Lead Response
                <span className="block">Automation</span>
              </h3>
              
              <p className="text-text-light mb-6 leading-relaxed">
                Instant text messages to new leads, automatic CRM entry, and calendar reminders so you never miss a follow-up.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground">Instant lead notifications</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground">Auto-add to CRM with tags</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground">Custom response messages</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground">Calendar reminders</span>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-foreground mb-2">$797</div>
                <div className="text-text-light">One-time setup</div>
              </div>
              
              <Link 
                href="/contact" 
                className="block w-full text-center bg-primary text-white py-4 px-8 rounded-xl font-semibold hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Responding Instantly →
              </Link>
            </div>

            {/* Appointment Automation */}
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 relative">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-sage-light rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <span className="text-2xl text-white">📅</span>
              </div>
              
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                Appointment
                <span className="block">Automation</span>
              </h3>
              
              <p className="text-text-light mb-6 leading-relaxed">
                Automated reminders, confirmation requests, and rebooking sequences that eliminate no-shows and keep your calendar full.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground">24-hour & 1-hour reminders</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground">Confirmation & reschedule</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground">Post-visit thank you messages</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground">Automatic rebooking requests</span>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-foreground mb-2">$797</div>
                <div className="text-text-light">One-time setup</div>
              </div>
              
              <Link 
                href="/contact" 
                className="block w-full text-center bg-primary text-white py-4 px-8 rounded-xl font-semibold hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
              >
                Stop No-Shows Forever →
              </Link>
            </div>

            {/* Review Automation */}
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 relative">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <span className="text-2xl text-white">⭐</span>
              </div>
              
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                Review & Reputation
                <span className="block">Automation</span>
              </h3>
              
              <p className="text-text-light mb-6 leading-relaxed">
                Automatic review requests sent at the perfect time, with smart routing to get 5-star reviews public and negative feedback private for damage control.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground">Timed review requests</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground">Smart routing to Google Reviews</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground">Private feedback capture</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground">Multiple platform support</span>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-foreground mb-2">$797</div>
                <div className="text-text-light">One-time setup</div>
              </div>
              
              <Link 
                href="/contact" 
                className="block w-full text-center bg-primary text-white py-4 px-8 rounded-xl font-semibold hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
              >
                Get More 5-Star Reviews →
              </Link>
            </div>
          </div>

          {/* Bundle Offer */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-8 border border-accent/20 max-w-2xl mx-auto">
              <h3 className="font-bold text-2xl text-foreground mb-4">Get All Three & Save</h3>
              <p className="text-text-light mb-6">
                Most clients want the full automation suite. Bundle all three packages for just $1,797 and save $594.
              </p>
              <Link 
                href="/services/complete-system" 
                className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
              >
                See Complete System Package
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Process */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-5xl lg:text-6xl text-foreground mb-8">
              Set It Up Once,
              <span className="block text-primary">It Runs Forever</span>
            </h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto">
              No complex software to learn. No monthly fees. Just automation that works in the background.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {/* Week 1 */}
              <div className="relative">
                <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-primary/20"></div>
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                    1
                  </div>
                  <div className="ml-8 flex-1">
                    <h3 className="font-display font-bold text-2xl text-foreground mb-2">Week 1: Map Your Workflow</h3>
                    <p className="text-text-light mb-4">We talk through your current process and identify the biggest time-wasters.</p>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                      <ul className="space-y-2 text-foreground">
                        <li>• 30-minute workflow audit</li>
                        <li>• Identify automation opportunities</li>
                        <li>• Connect your existing tools</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Week 2 */}
              <div className="relative">
                <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-primary/20"></div>
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                    2
                  </div>
                  <div className="ml-8 flex-1">
                    <h3 className="font-display font-bold text-2xl text-foreground mb-2">Week 2: Build & Test</h3>
                    <p className="text-text-light mb-4">Your automation gets built and tested with real scenarios.</p>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                      <ul className="space-y-2 text-foreground">
                        <li>• Custom automation setup</li>
                        <li>• Test with dummy data</li>
                        <li>• Refine messaging and timing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Week 3 */}
              <div className="relative">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                    3
                  </div>
                  <div className="ml-8 flex-1">
                    <h3 className="font-display font-bold text-2xl text-foreground mb-2">Week 3: Go Live & Monitor</h3>
                    <p className="text-text-light mb-4">Your automation goes live and we monitor the first week to ensure everything runs smoothly.</p>
                    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                      <ul className="space-y-2 text-foreground">
                        <li>• Automation goes live</li>
                        <li>• First-week monitoring</li>
                        <li>• Training on how to modify</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-5xl lg:text-6xl text-foreground mb-8">
              Common Questions
            </h2>
            <p className="text-xl text-text-light">
              Let&apos;s address the elephant in the room.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-bold text-xl text-foreground mb-3">
                What if my tools don&apos;t integrate?
              </h3>
              <p className="text-text-light">
                Most modern tools have APIs or zapier integrations. If yours don&apos;t, I&apos;ll find a workaround or recommend better tools that do the same job. No tool is irreplaceable.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-bold text-xl text-foreground mb-3">
                Will this replace my staff?
              </h3>
              <p className="text-text-light">
                No. Automation handles the boring, repetitive stuff so your people can focus on actually helping customers. Think of it as giving your team superpowers, not replacing them.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-bold text-xl text-foreground mb-3">
                What if something breaks?
              </h3>
              <p className="text-text-light">
                All automations include monitoring alerts. If something stops working, you&apos;ll know immediately. Plus, you get 30 days of support to fix any issues that come up.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-bold text-xl text-foreground mb-3">
                Can I modify the automation later?
              </h3>
              <p className="text-text-light">
                Absolutely. I&apos;ll show you how to change messages, timing, and basic settings. For bigger changes, I&apos;m available at $150/hour. But most clients never need modifications once it&apos;s set up right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
        
        <div className="relative max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-8">
            Stop Doing What Robots Should Do
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Every day you wait is another day of manual work that could be automated. Let&apos;s fix that.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-12 py-6 bg-white text-primary text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              Automate My Business Now
              <svg className="w-6 h-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-6 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300"
            >
              Book a Free Strategy Call
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}