import Link from 'next/link';
import Image from 'next/image';
import ScorecardSection from '../components/ScorecardSection';
import WhatTomFixesPreview from '../components/WhatTomFixesPreview';

export default function Home() {
  return (
    <>
      {/* Hero Section - Optimized for Mobile Impact */}
      <section className="relative min-h-screen lg:min-h-screen bg-gradient-to-br from-primary via-slate-800 to-primary overflow-hidden">
        {/* Subtle Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-secondary/15 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }}></div>
          <div className="absolute bottom-40 right-20 w-96 h-96 bg-sage-light/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/8 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pt-20 sm:pt-24 lg:pt-32 pb-8 sm:pb-12 lg:pb-20">
          {/* Mobile-First Layout */}
          <div className="flex flex-col lg:grid lg:grid-cols-3 lg:gap-16 lg:items-center">
            
            {/* Mobile: Photo at top for trust, Desktop: Main content first */}
            <div className="lg:hidden mb-8">
              <div className="flex justify-center">
                <div className="relative">
                  {/* Photo Container - Compact on mobile */}
                  <div className="relative w-32 h-32 rounded-2xl overflow-hidden border-3 border-white/20 shadow-xl">
                    <Image 
                      src="/tom-headshot.png" 
                      alt="Tom - Built By Tom Founder"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                      priority
                    />
                  </div>
                  {/* Quick credibility */}
                  <div className="absolute -bottom-2 -right-2 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-foreground shadow-lg">
                    $17M Built
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content - Tighter spacing on mobile */}
            <div className="lg:col-span-2 text-center lg:text-left">
              {/* Main Headline - Bigger impact on mobile */}
              <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-8xl text-white mb-3 sm:mb-6 leading-[0.9] tracking-tight">
                I Build
                <span className="block bg-gradient-to-r from-white via-accent via-sage-light via-secondary to-white bg-clip-text text-transparent mt-1" style={{ 
                  backgroundSize: '600% 600%',
                  animation: 'gradient 3s ease infinite'
                }}>
                  Calm
                </span>
              </h1>

              {/* Subheadline - Punchier on mobile */}
              <p className="text-xl sm:text-2xl lg:text-3xl text-white font-bold mb-3 sm:mb-4 tracking-wide">
                Fix the mess. Build what&apos;s missing.
              </p>

              {/* Supporting Text - Shorter on mobile */}
              <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Websites and systems that just work. Built in days, not months.
              </p>

              {/* Clean CTA Buttons - Stack on mobile */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
                <Link 
                  href="/contact" 
                  className="group px-8 sm:px-12 py-5 sm:py-6 bg-white text-primary text-base sm:text-lg font-bold rounded-2xl shadow-2xl shadow-black/10 hover:shadow-black/20 transform hover:scale-105 transition-all duration-500"
                >
                  <span className="flex items-center justify-center">
                    Start Here
                    <svg className="w-5 sm:w-6 h-5 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
                
                <Link 
                  href="#services" 
                  className="group px-6 sm:px-8 py-5 sm:py-6 border-2 border-white/40 text-white text-base sm:text-lg font-semibold rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-white/60 transition-all duration-500"
                >
                  <span className="flex items-center justify-center">
                    See How I Help
                    <svg className="w-4 sm:w-5 h-4 sm:h-5 ml-2 inline-block group-hover:translate-y-1 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </span>
                </Link>
              </div>

              {/* Mobile trust indicators */}
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-white/80">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>20+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Built in Days</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>No BS</span>
                </div>
              </div>
            </div>

            {/* Desktop: Tom's Photo - Hidden on mobile since we show it at top */}
            <div className="hidden lg:flex lg:col-span-1 justify-center lg:justify-end">
              <div className="relative">
                {/* Subtle Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-sage-light/15 rounded-2xl blur-xl transform scale-110"></div>
                
                {/* Photo Container - Smaller */}
                <div className="relative w-64 h-64 lg:w-72 lg:h-72 rounded-2xl overflow-hidden border-3 border-white/20 shadow-xl">
                  <Image 
                    src="/tom-headshot.png" 
                    alt="Tom - Built By Tom Founder"
                    width={288}
                    height={288}
                    className="w-full h-full object-cover"
                    priority
                  />
                  
                  {/* Trust Badge */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 border border-white/50">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
                      <div className="text-xs">
                        <div className="font-bold text-foreground">Scaled $17M Business</div>
                        <div className="text-text-light">Real-world experience</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Tagline under photo */}
                <div className="text-center mt-6">
                  <div className="text-white font-semibold text-lg">No BS, just results</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Problem Preview */}
      <WhatTomFixesPreview />

      {/* Services Section - Colorful & Engaging */}
      <section id="services" className="py-24 bg-white relative overflow-hidden">
        {/* Colorful background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-40 right-10 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-full font-bold text-sm mb-6">
              <span className="text-2xl mr-2">🚀</span>
              Three Ways to Escape the Chaos
            </div>
            <h2 className="font-display font-bold text-5xl lg:text-6xl text-foreground mb-8">
              How I Help
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Pick your poison: slow death by a thousand manual tasks, or let me build you a way out.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Website Service - Blue Theme */}
            <div className="group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-600/10 rounded-3xl transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-2xl border border-teal-200 h-full flex flex-col group-hover:shadow-teal-300/50 transition-all duration-300">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg animate-pulse" style={{ animationDuration: '3s' }}>
                    <span className="text-3xl">🌐</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-bounce flex items-center justify-center">
                    <span className="text-xs">✓</span>
                  </div>
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground mb-6">
                  Websites That Actually Work
                </h3>
                <p className="text-text-light mb-8 text-lg leading-relaxed flex-grow">
                  Clean, fast sites that turn “browsers” into buyers. Built in 3 weeks, not 3 months of back-and-forth hell.
                </p>
                <div className="bg-teal-50 rounded-xl p-4 mb-8 border border-teal-200">
                  <div className="text-sm text-teal-800 font-semibold flex items-center">
                    <span className="text-lg mr-2">🏁</span>
                    3-week delivery • Mobile-first • Google loves it
                  </div>
                </div>
                <div className="mb-8">
                  <div className="text-4xl font-bold text-teal-700 mb-2">$3,500</div>
                  <div className="text-sm text-text-light">One-time fee, no monthly hostage situation</div>
                </div>
                <div className="mt-auto">
                  <Link 
                    href="/services/website" 
                    className="block w-full text-center bg-gradient-to-r from-teal-600 to-blue-700 text-white py-4 px-8 rounded-xl font-bold hover:from-teal-700 hover:to-blue-800 hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300 transform hover:scale-105"
                  >
                    Fix My Website →
                  </Link>
                </div>
              </div>
            </div>

            {/* Automation Service - Purple Theme */}
            <div className="group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-indigo-600/10 rounded-3xl transform group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-2xl border border-purple-200 h-full flex flex-col group-hover:shadow-purple-300/50 transition-all duration-300">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-700 to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
                    <span className="text-3xl">🤖</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full animate-spin flex items-center justify-center" style={{ animationDuration: '2s' }}>
                    <span className="text-xs">⚙️</span>
                  </div>
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground mb-6">
                  Stop Doing Robot Work
                </h3>
                <p className="text-text-light mb-8 text-lg leading-relaxed flex-grow">
                  Automate the soul-crushing stuff. Appointment reminders, follow-ups, all that “I should really do this” work.
                </p>
                <div className="bg-purple-50 rounded-xl p-4 mb-8 border border-purple-200">
                  <div className="text-sm text-purple-800 font-semibold flex items-center">
                    <span className="text-lg mr-2">⏰</span>
                    Save 10+ hours/week • No copy-paste hell • Actually works
                  </div>
                </div>
                <div className="mb-8">
                  <div className="text-4xl font-bold text-purple-700 mb-2">$797</div>
                  <div className="text-sm text-text-light">per automation package</div>
                </div>
                <div className="mt-auto">
                  <Link 
                    href="/services/automation" 
                    className="block w-full text-center bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-4 px-8 rounded-xl font-bold hover:from-purple-800 hover:to-indigo-800 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 transform hover:scale-105"
                  >
                    Automate My Chaos →
                  </Link>
                </div>
              </div>
            </div>

            {/* Complete System - Orange Theme */}
            <div className="group relative h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-green-700/10 rounded-3xl transform group-hover:scale-105 group-hover:rotate-1 transition-all duration-500"></div>
              <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-2xl border border-emerald-200 h-full flex flex-col group-hover:shadow-emerald-300/50 transition-all duration-300">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-700 to-green-800 rounded-2xl flex items-center justify-center shadow-lg animate-pulse" style={{ animationDuration: '2s', animationDelay: '1s' }}>
                    <span className="text-3xl">🚀</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-ping flex items-center justify-center">
                    <span className="text-xs">🔥</span>
                  </div>
                </div>
                <h3 className="font-display font-bold text-2xl text-foreground mb-6">
                  The Nuclear Option
                </h3>
                <p className="text-text-light mb-8 text-lg leading-relaxed flex-grow">
                  All three automation packages working together. Your entire business runs itself while you do the work you actually love.
                </p>
                <div className="bg-emerald-50 rounded-xl p-4 mb-8 border border-emerald-200">
                  <div className="text-sm text-emerald-800 font-semibold flex items-center">
                    <span className="text-lg mr-2">🏆</span>
                    Save $594 vs separate • All automation packages • 60-day hand-holding
                  </div>
                </div>
                <div className="mb-8">
                  <div className="text-4xl font-bold text-emerald-700 mb-2">$1,797</div>
                  <div className="text-sm text-text-light">Complete automation transformation</div>
                </div>
                <div className="mt-auto">
                  <Link 
                    href="/services/complete-system" 
                    className="block w-full text-center bg-gradient-to-r from-emerald-700 to-green-800 text-white py-4 px-8 rounded-xl font-bold hover:from-emerald-800 hover:to-green-900 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 transform hover:scale-105"
                  >
                    Transform Everything →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Phone Demo - Automation in Action */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Phone Demo */}
            <div className="relative">
              <div className="text-center mb-8">
                <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-4">
                  Make Your Business Run Like
                  <span className="block text-primary">Clockwork</span>
                </h2>
                <p className="text-lg text-text-light">
                  Your clients don&apos;t want excuses. They want reliability.
                </p>
              </div>

              {/* Phone Mockup - Realistic iPhone Size */}
              <div className="relative mx-auto w-64">
                {/* Phone Frame */}
                <div className="relative bg-gray-900 rounded-[2.5rem] p-1 shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                  <div className="bg-white rounded-[2.2rem] overflow-hidden h-[580px] w-full relative">
                    {/* iPhone Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-5 bg-gray-900 rounded-b-xl z-10"></div>
                    
                    {/* Status Bar */}
                    <div className="bg-white px-4 pt-6 pb-1 flex justify-between items-center text-xs font-medium">
                      <div className="text-foreground">9:41</div>
                      <div className="flex items-center space-x-1">
                        <div className="w-3 h-1.5 bg-foreground rounded-sm"></div>
                        <div className="w-5 h-2.5 border border-foreground rounded-sm">
                          <div className="w-3 h-1 bg-green-500 rounded-sm m-0.5"></div>
                        </div>
                      </div>
                    </div>

                    {/* Phone Header */}
                    <div className="bg-gray-50 px-3 py-2 border-b flex items-center">
                      <div className="w-7 h-7 bg-secondary rounded-full flex items-center justify-center text-white font-semibold text-xs mr-2">
                        BT
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-xs text-foreground">Built By Tom</div>
                        <div className="text-xs text-text-light">Automated Booking</div>
                      </div>
                      <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                    </div>

                    {/* Conversation - Scrollable */}
                    <div 
                      className="p-2 space-y-2 overflow-y-auto cursor-pointer hover:bg-gray-50/50 transition-colors duration-300 [&::-webkit-scrollbar]:hidden"
                      style={{ 
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none',
                        maxHeight: '480px'
                      }}
                    >
                      {/* Business Message */}
                      <div className="flex justify-end opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
                        <div className="bg-primary text-white px-2.5 py-1.5 rounded-xl rounded-tr-md max-w-[170px] shadow-lg">
                          <div className="text-xs font-medium">Hi Sarah! 👋</div>
                          <div className="text-xs mt-0.5 leading-tight">Your appointment is confirmed for tomorrow at 2:00 PM at our North Haven location.</div>
                          <div className="text-xs mt-0.5 opacity-90">📍 123 Main St, North Haven, CT</div>
                        </div>
                      </div>

                      {/* Customer Response */}
                      <div className="flex justify-start opacity-0 animate-fade-in" style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}>
                        <div className="bg-gray-100 text-foreground px-2.5 py-1.5 rounded-xl rounded-tl-md max-w-[170px] shadow-sm">
                          <div className="text-xs">Perfect! Thank you so much 😊</div>
                        </div>
                      </div>

                      {/* Time Gap */}
                      <div className="text-center opacity-0 animate-fade-in" style={{ animationDelay: '2.5s', animationFillMode: 'forwards' }}>
                        <div className="text-xs text-text-light bg-gray-100 rounded-full px-2 py-0.5 inline-block">23 hours later</div>
                      </div>

                      {/* Automated Reminder */}
                      <div className="flex justify-end opacity-0 animate-fade-in" style={{ animationDelay: '3s', animationFillMode: 'forwards' }}>
                        <div className="bg-secondary text-white px-2.5 py-1.5 rounded-xl rounded-tr-md max-w-[170px] shadow-lg">
                          <div className="text-xs font-medium">⏰ Reminder</div>
                          <div className="text-xs mt-0.5">Your appointment is in 1 hour. See you soon!</div>
                          <div className="text-xs mt-0.5 opacity-90">Reply STOP to opt out</div>
                        </div>
                      </div>

                      {/* Happy Customer */}
                      <div className="flex justify-start opacity-0 animate-fade-in" style={{ animationDelay: '4s', animationFillMode: 'forwards' }}>
                        <div className="bg-gray-100 text-foreground px-2.5 py-1.5 rounded-xl rounded-tl-md max-w-[170px] shadow-sm">
                          <div className="text-xs">On my way! This reminder system is amazing 🙌</div>
                        </div>
                      </div>

                      {/* Follow-up Message */}
                      <div className="flex justify-end opacity-0 animate-fade-in" style={{ animationDelay: '5s', animationFillMode: 'forwards' }}>
                        <div className="bg-primary text-white px-2.5 py-1.5 rounded-xl rounded-tr-md max-w-[170px] shadow-lg">
                          <div className="text-xs">Thanks for visiting! How was your experience? 🌟</div>
                        </div>
                      </div>

                      {/* Extra Messages to Enable Scrolling */}
                      <div className="flex justify-start opacity-0 animate-fade-in" style={{ animationDelay: '5.5s', animationFillMode: 'forwards' }}>
                        <div className="bg-gray-100 text-foreground px-2.5 py-1.5 rounded-xl rounded-tl-md max-w-[170px] shadow-sm">
                          <div className="text-xs">⭐⭐⭐⭐⭐</div>
                        </div>
                      </div>

                      {/* Final Automated Message */}
                      <div className="flex justify-end opacity-0 animate-fade-in" style={{ animationDelay: '6s', animationFillMode: 'forwards' }}>
                        <div className="bg-primary text-white px-2.5 py-1.5 rounded-xl rounded-tr-md max-w-[170px] shadow-lg">
                          <div className="text-xs">We&apos;ll see you next month! Your next appointment is pre-scheduled 📅</div>
                        </div>
                      </div>

                      <div className="h-8"></div>
                    </div>

                    {/* Home Indicator */}
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gray-900 rounded-full"></div>
                  </div>
                </div>
                
                {/* Subtle Interaction Hint */}
                <div className="text-center mt-4 opacity-0 animate-fade-in" style={{ animationDelay: '6.5s', animationFillMode: 'forwards' }}>
                  <div className="text-sm text-text-light">↕ Scroll to see more messages</div>
                </div>
              </div>
            </div>

            {/* Right Side - Stats & Benefits */}
            <div>
              <div className="space-y-8">
                {/* Stats */}
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border border-red-200">
                    <div className="text-3xl font-bold text-red-600 mb-2">92%</div>
                    <div className="text-foreground font-semibold">of no-shows say</div>
                    <div className="text-text-light">&ldquo;I totally forgot&rdquo;</div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 border border-primary/20">
                    <div className="text-3xl font-bold text-primary mb-2">5x</div>
                    <div className="text-foreground font-semibold">more likely to get 5-star reviews</div>
                    <div className="text-text-light">Right messages, right time, happy clients</div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Set it up once. It runs forever.</div>
                      <div className="text-text-light">No more manual reminders or missed appointments</div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Never miss another opportunity</div>
                      <div className="text-text-light">Automatic follow-ups and rebooking requests</div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Professional impression, every time</div>
                      <div className="text-text-light">Consistent, timely communication builds trust</div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <Link 
                    href="/services/automation" 
                    className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
                  >
                    Build My Booking System
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Psychology-First Design Methodology */}
      <section className="py-24 bg-gradient-to-br from-background to-white relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-5xl lg:text-6xl text-foreground mb-8">
              Psychology-First
              <span className="block text-primary">Design Process</span>
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
              I don&apos;t just make things look pretty. Every design choice has a purpose—to guide your visitors toward one action: becoming your customer.
            </p>
          </div>

          {/* Portfolio Examples Grid */}
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            {/* Pet Grooming - Scroll-Stopping Charm */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-orange-500/10 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 h-full flex flex-col">
                <div className="mb-6">
                  <Image 
                    src="/fluff-sway-phone.png" 
                    alt="Fluff & Swagger Pet Grooming Mobile Design"
                    width={200}
                    height={400}
                    className="mx-auto rounded-2xl shadow-lg"
                  />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-4">
                  Designed for Scroll-Stopping Charm
                </h3>
                <p className="text-text-light mb-6 leading-relaxed flex-grow">
                  Pet parents are busy. The layout is playful, the CTA is unmistakable, and the copy has a tone that matches the brand—approachable, a little cheeky, and never overwhelming.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-secondary font-medium">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Big, direct headlines = instant clarity
                  </div>
                  <div className="flex items-center text-sm text-secondary font-medium">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Soft but high-contrast colors = keeps energy up
                  </div>
                  <div className="flex items-center text-sm text-secondary font-medium">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Every scroll = one clear decision
                  </div>
                </div>
              </div>
            </div>

            {/* Catering App - Personality-Driven */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 h-full flex flex-col">
                <div className="mb-6">
                  <Image 
                    src="/bagel-phone.png" 
                    alt="Bagel Catering App Design"
                    width={200}
                    height={400}
                    className="mx-auto rounded-2xl shadow-lg"
                  />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-4">
                  Personality-Driven Product Pages
                </h3>
                <p className="text-text-light mb-6 leading-relaxed flex-grow">
                  Every detail here is doing two jobs: selling a product and building a brand voice that feels local, bold, and fun. Everything&apos;s built for mobile scrolling.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-secondary font-medium">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Item cards are scannable and mobile-optimized
                  </div>
                  <div className="flex items-center text-sm text-secondary font-medium">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Copywriting shows personality and confidence
                  </div>
                  <div className="flex items-center text-sm text-secondary font-medium">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Humor builds instant rapport and memorability
                  </div>
                </div>
              </div>
            </div>

            {/* Bagel Site - Copy That Converts */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 h-full flex flex-col">
                <div className="mb-6">
                  <Image 
                    src="/bagel-bliss.png" 
                    alt="Bagel Bliss Website Design"
                    width={200}
                    height={400}
                    className="mx-auto rounded-2xl shadow-lg"
                  />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-4">
                  Copy That Converts With Character
                </h3>
                <p className="text-text-light mb-6 leading-relaxed flex-grow">
                  &ldquo;My coworkers won&apos;t shut up about the scallion cream cheese. Thanks, I guess.&rdquo; This isn&apos;t just funny—it&apos;s strategic. Humor builds trust and memorability.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-secondary font-medium">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Relatable copy = instant connection
                  </div>
                  <div className="flex items-center text-sm text-secondary font-medium">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Clear value prop: &ldquo;You take the credit&rdquo;
                  </div>
                  <div className="flex items-center text-sm text-secondary font-medium">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    Process explained with personality
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="text-center">
            <p className="text-xl text-foreground font-semibold mb-8">
              This is the kind of layout that doesn&apos;t distract—it converts.
            </p>
            <Link 
              href="/services/website" 
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
            >
              See How I&apos;ll Design Yours
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Credibility Section - Green Theme */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-white/10 backdrop-blur-sm rounded-full mb-12 border border-white/20">
            <span className="text-6xl font-bold text-sage-light">$17M</span>
          </div>
          
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-8">
            Systems That Scale With You
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed">
            Scaled my first company to $17M, then lost it when our tools failed.
          </p>
          <p className="text-2xl font-semibold mb-8">
            Now I build bulletproof systems so your growth never outpaces operations.
          </p>
          <p className="text-lg text-white/80 mb-12">
            No jargon, no overwhelm. Just results.
          </p>
          
          <Link 
            href="/about" 
            className="inline-flex items-center px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-white/90 hover:shadow-xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-105"
          >
            My Story & How I Work
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Social Proof - Green Theme */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-5xl lg:text-6xl text-foreground mb-8">
              Ready to stop wrestling with tech?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {[
              {
                quote: "Tom was a game-changer for our e-commerce site. We had a site before, but it wasn&apos;t getting traffic, and we&apos;d only made two sales. Tom optimized everything—making the site look and function so much better. Sales have jumped since we made the switch.",
                author: "Jack B.",
                company: "Craft Supply Co.",
                color: "primary"
              },
              {
                quote: "My phone actually rings now. Tom rebuilt my site and suddenly customers can find me on Google. Should&apos;ve called him two years ago.",
                author: "Carrie H.",
                company: "Local Business Owner", 
                color: "secondary"
              }
            ].map((testimonial, index) => (
              <div key={index} className="group relative h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color === 'primary' ? 'from-primary/10 to-secondary/5' : 'from-secondary/10 to-sage-light/5'} rounded-3xl transform group-hover:scale-105 transition-transform duration-300`}></div>
                <div className="relative bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 h-full flex flex-col">
                  <div className="text-6xl text-gray-200 mb-6">&ldquo;</div>
                  <p className="text-foreground text-lg mb-8 italic leading-relaxed flex-grow">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center mt-auto">
                    <div className={`w-12 h-12 ${testimonial.color === 'primary' ? 'bg-primary' : 'bg-secondary'} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4`}>
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{testimonial.author}</div>
                      <div className="text-text-light">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-12 py-6 bg-primary text-white text-xl font-bold rounded-2xl shadow-2xl shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40 transform hover:scale-105 transition-all duration-300"
            >
              Let&apos;s Fix Your Tech
              <svg className="w-6 h-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Lead Magnet - Website Scorecard */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative">
        <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
          <ScorecardSection />
        </div>
      </section>
    </>
  );
}