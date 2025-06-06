import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Complete Business Automation System | Built By Tom',
  description: 'Transform your entire operation with integrated automation that handles leads, appointments, and reviews. All three packages for $1,797 - save $594.',
};

export default function CompleteSystemServices() {
  return (
    <>
      {/* Hero Section - Premium Green Theme */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-primary via-slate-800 to-secondary overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-sage-light/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }}></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium border border-white/20">
                Complete System • $1,797 • Save $594
              </span>
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-none">
              Your Business Runs
              <span className="block bg-gradient-to-r from-white via-accent via-sage-light to-white bg-clip-text text-transparent pb-2" style={{ 
                backgroundSize: '600% 600%',
                animation: 'gradient 3s ease infinite'
              }}>
                On Autopilot
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Every lead captured instantly. Every appointment confirmed automatically. Every happy customer leaving 5-star reviews. This is what happens when all your automation works together.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/contact" 
                className="group px-12 py-6 bg-white text-primary text-lg font-bold rounded-2xl shadow-2xl shadow-black/10 hover:shadow-black/20 transform hover:scale-105 transition-all duration-500"
              >
                <span className="flex items-center">
                  Transform My Business
                  <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link 
                href="#system-breakdown" 
                className="group px-8 py-6 border-2 border-white/40 text-white text-lg font-semibold rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-white/60 transition-all duration-500"
              >
                See What&apos;s Included
                <svg className="w-5 h-5 ml-2 inline-block group-hover:translate-y-1 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The Power of Integration */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-5xl lg:text-6xl text-foreground mb-8">
              Individual Automations Are Good.
              <span className="block text-primary">Integrated Systems Are Magic.</span>
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              When all your automations talk to each other, your business becomes a well-oiled machine that runs itself.
            </p>
          </div>

          {/* Integration Flow Visual */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-2xl border border-gray-100 mb-20">
            <h3 className="font-display font-bold text-3xl text-foreground mb-12 text-center">
              Complete Customer Journey Automation
            </h3>
            
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex items-start lg:items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-6 flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h4 className="font-bold text-lg text-foreground mb-2">Lead Comes In (11:30 PM)</h4>
                    <p className="text-text-light">New lead fills out contact form on your website while you&apos;re sleeping.</p>
                  </div>
                </div>
                <div className="hidden lg:block ml-6">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start lg:items-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold mr-6 flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h4 className="font-bold text-lg text-foreground mb-2">Instant Response (11:31 PM)</h4>
                    <p className="text-text-light">Lead gets immediate text: &ldquo;Thanks! I&apos;ll call you tomorrow at 9 AM.&rdquo; Added to CRM with tags.</p>
                  </div>
                </div>
                <div className="hidden lg:block ml-6">
                  <svg className="w-8 h-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start lg:items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold mr-6 flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h4 className="font-bold text-lg text-foreground mb-2">Appointment Booked (9:15 AM)</h4>
                    <p className="text-text-light">You call, they&apos;re impressed by your speed. Appointment scheduled automatically in your calendar.</p>
                  </div>
                </div>
                <div className="hidden lg:block ml-6">
                  <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start lg:items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-6 flex-shrink-0">
                  4
                </div>
                <div className="flex-1">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h4 className="font-bold text-lg text-foreground mb-2">Automatic Reminders</h4>
                    <p className="text-text-light">24-hour and 1-hour reminders sent. Customer shows up on time, ready to work with you.</p>
                  </div>
                </div>
                <div className="hidden lg:block ml-6">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex items-start lg:items-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold mr-6 flex-shrink-0">
                  5
                </div>
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 shadow-lg border border-green-200">
                    <h4 className="font-bold text-lg text-foreground mb-2">5-Star Review & Rebooking</h4>
                    <p className="text-text-light">Perfect experience triggers review request. Happy customer leaves 5 stars AND books next appointment.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-primary/10 rounded-2xl p-8 border border-primary/20">
                <p className="text-2xl font-bold text-foreground mb-4">
                  Result: One lead becomes a lifetime customer
                </p>
                <p className="text-primary font-semibold">
                  All while you focused on delivering great service, not chasing paperwork
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white">
            <div className="text-center mb-8">
              <h3 className="font-display font-bold text-3xl mb-4">Complete System Results</h3>
              <p className="text-white/90 text-lg">Real businesses, real transformations</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">85%</div>
                <div className="text-white/80">Fewer missed opportunities</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">12 hrs</div>
                <div className="text-white/80">Average time saved per week</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">240%</div>
                <div className="text-white/80">Increase in 5-star reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included - System Breakdown */}
      <section id="system-breakdown" className="py-24 bg-gradient-to-br from-background to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-5xl lg:text-6xl text-foreground mb-8">
              Everything You Need
              <span className="block text-primary">In One Package</span>
            </h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto">
              All three automation packages, perfectly integrated, for one discounted price.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Lead Response Automation */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-primary/20 relative">
              <div className="absolute -top-4 left-6 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold">
                Included
              </div>
              
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <span className="text-2xl text-white">📧</span>
              </div>
              
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                Lead Response
                <span className="block">Automation</span>
              </h3>
              
              <div className="text-gray-400 line-through text-lg mb-2">$797</div>
              <div className="text-primary font-bold text-lg mb-6">Included in package</div>
              
              <div className="space-y-3">
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
            </div>

            {/* Appointment Automation */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-secondary/20 relative">
              <div className="absolute -top-4 left-6 bg-secondary text-white px-4 py-2 rounded-full text-sm font-bold">
                Included
              </div>
              
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-sage-light rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <span className="text-2xl text-white">📅</span>
              </div>
              
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                Appointment
                <span className="block">Automation</span>
              </h3>
              
              <div className="text-gray-400 line-through text-lg mb-2">$797</div>
              <div className="text-secondary font-bold text-lg mb-6">Included in package</div>
              
              <div className="space-y-3">
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
                  <span className="text-foreground">Post-visit thank you</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-secondary mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-foreground">Automatic rebooking</span>
                </div>
              </div>
            </div>

            {/* Review Automation */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-accent/20 relative">
              <div className="absolute -top-4 left-6 bg-accent text-white px-4 py-2 rounded-full text-sm font-bold">
                Included
              </div>
              
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <span className="text-2xl text-white">⭐</span>
              </div>
              
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                Review & Reputation
                <span className="block">Automation</span>
              </h3>
              
              <div className="text-gray-400 line-through text-lg mb-2">$797</div>
              <div className="text-accent font-bold text-lg mb-6">Included in package</div>
              
              <div className="space-y-3">
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
                  <span className="text-foreground">Smart routing to Google</span>
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
            </div>
          </div>

          {/* Pricing Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-12 border-2 border-primary/20 relative shadow-2xl">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg">
                Complete Business Transformation
              </div>
              
              <div className="text-center mb-12">
                <div className="mb-4">
                  <span className="text-2xl text-text-light line-through">$2,391</span>
                  <span className="text-sm text-text-light ml-2">(if purchased separately)</span>
                </div>
                <div className="text-7xl font-bold text-foreground mb-4">$1,797</div>
                <div className="text-xl text-accent font-bold mb-2">Save $594</div>
                <div className="text-xl text-text-light">Complete automation system • 6-week setup • 60-day support</div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-foreground mb-4">Complete System Includes:</h4>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">All three automation packages</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">Seamless integration setup</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">Custom message templates</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">6-week phased rollout</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-foreground mb-4">Plus You Get:</h4>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground font-medium">60 days support (vs 30 days)</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground font-medium">Complete workflow audit</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground font-medium">Staff training session</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground font-medium">Priority support access</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 mb-8 border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground mb-2">Perfect For:</div>
                  <p className="text-text-light text-lg">
                    Service businesses ready to scale • Appointment-based companies • Anyone tired of manual follow-ups and missed opportunities
                  </p>
                </div>
              </div>

              <Link 
                href="/contact" 
                className="block w-full text-center bg-primary text-white py-6 px-8 rounded-xl text-xl font-bold hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
              >
                Transform My Business →
              </Link>

              <p className="text-center text-sm text-text-light mt-6">
                50% deposit to start • Final 50% when complete • No monthly fees ever
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study - Complete Transformation */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-5xl lg:text-6xl text-foreground mb-8">
              Real Business
              <span className="block text-primary">Transformation</span>
            </h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto">
              How Mike&apos;s contracting business went from chaos to clockwork in 6 weeks.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Before */}
            <div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-8 border-2 border-red-200">
                <div className="flex items-center mb-6">
                  <div className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold mr-4">BEFORE</div>
                  <h3 className="font-bold text-xl text-foreground">Mike&apos;s Manual Mess</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-red-500 mr-3 mt-1">❌</div>
                    <div>
                      <p className="font-semibold text-foreground">Leads ignored for days</p>
                      <p className="text-text-light text-sm">Homeowner requests buried in email, competitors responding faster</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-red-500 mr-3 mt-1">❌</div>
                    <div>
                      <p className="font-semibold text-foreground">50% no-show rate</p>
                      <p className="text-text-light text-sm">No reminders, wasted drive time, empty schedule blocks</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-red-500 mr-3 mt-1">❌</div>
                    <div>
                      <p className="font-semibold text-foreground">Zero online reviews</p>
                      <p className="text-text-light text-sm">Great work, but no way for others to find out about it</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-red-500 mr-3 mt-1">❌</div>
                    <div>
                      <p className="font-semibold text-foreground">10 hours/week on admin</p>
                      <p className="text-text-light text-sm">Manually tracking leads, sending texts, chasing payments</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-red-100 p-4 rounded-lg">
                  <p className="text-red-700 font-semibold text-sm">Result: Stressed, overworked, revenue plateau</p>
                </div>
              </div>
            </div>
            
            {/* After */}
            <div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 border-2 border-green-200">
                <div className="flex items-center mb-6">
                  <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold mr-4">AFTER</div>
                  <h3 className="font-bold text-xl text-foreground">Automated Excellence</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">✅</div>
                    <div>
                      <p className="font-semibold text-foreground">5-minute response time</p>
                      <p className="text-text-light text-sm">Instant texts to leads, automatic CRM entry, immediate scheduling</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">✅</div>
                    <div>
                      <p className="font-semibold text-foreground">5% no-show rate</p>
                      <p className="text-text-light text-sm">Automated reminders, confirmations, full calendar optimization</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">✅</div>
                    <div>
                      <p className="font-semibold text-foreground">47 five-star reviews</p>
                      <p className="text-text-light text-sm">Automatic review requests, strategic timing, reputation building</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">✅</div>
                    <div>
                      <p className="font-semibold text-foreground">2 hours/week on admin</p>
                      <p className="text-text-light text-sm">Focus on quality work, customer relationships, business growth</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-green-100 p-4 rounded-lg">
                  <p className="text-green-700 font-semibold text-sm">Result: 340% revenue increase in 8 months</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-12 text-center">
            <div className="text-6xl text-primary/20 mb-6">&ldquo;</div>
            <p className="text-2xl text-foreground font-medium mb-8 italic leading-relaxed max-w-4xl mx-auto">
              I used to spend Sunday nights stressed about follow-ups and scheduling. Now everything happens automatically. My customers think I&apos;m the most organized contractor they&apos;ve ever worked with, and I get to focus on what I love - building things.
            </p>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                MD
              </div>
              <div className="text-left">
                <div className="font-bold text-xl text-foreground">Mike D.</div>
                <div className="text-text-light">General Contractor, New Haven County</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-5xl lg:text-6xl text-foreground mb-8">
              Complete System FAQ
            </h2>
            <p className="text-xl text-text-light">
              Everything you need to know about transforming your business.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-bold text-xl text-foreground mb-3">
                Why 6 weeks instead of 3 weeks like individual packages?
              </h3>
              <p className="text-text-light">
                Integration takes time to do right. We roll out each automation in phases, test how they work together, and fine-tune the handoffs. Better to take 6 weeks and get it perfect than rush and break things later.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-bold text-xl text-foreground mb-3">
                What if I only need 2 of the 3 automations?
              </h3>
              <p className="text-text-light">
                You can buy individual packages at $797 each. But most businesses find they need all three within 6 months anyway. The complete system saves you $594 and ensures everything works together from day one.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-bold text-xl text-foreground mb-3">
                How much will this change my daily routine?
              </h3>
              <p className="text-text-light">
                Day one: exactly the same. The automation runs in the background. Week two: you&apos;ll notice you&apos;re not manually following up anymore. Month two: you&apos;ll wonder how you ever ran a business without it.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-bold text-xl text-foreground mb-3">
                What happens if my business grows and I need changes?
              </h3>
              <p className="text-text-light">
                The automation scales with you. Need to add new message templates? Change timing? Add new team members? I&apos;ll show you how to handle 90% of modifications yourself. For bigger changes, I&apos;m available at $150/hour.
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
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-8">
            Ready for Your Business to Run Itself?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Stop managing. Start leading. Let automation handle the details while you focus on growth.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-12 py-6 bg-white text-primary text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              Transform My Business Now
              <svg className="w-6 h-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-6 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300"
            >
              Schedule Discovery Call
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