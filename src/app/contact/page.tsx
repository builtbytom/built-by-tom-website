import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Tom | Built By Tom',
  description: 'Ready to fix your website or automate your business? Book a free 15-minute call. I\'ll do my homework first so we can focus on solutions that actually work.',
};

export default function Contact() {
  return (
    <>
      {/* Hero Section - Premium Green Theme */}
      <section className="relative min-h-[50vh] bg-gradient-to-br from-primary via-slate-800 to-secondary overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-sage-light/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }}></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium border border-white/20">
                Free 15-Minute Strategy Call
              </span>
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-none">
              Ready to Fix
              <span className="block bg-gradient-to-r from-white via-accent via-sage-light to-white bg-clip-text text-transparent pb-2" style={{ 
                backgroundSize: '600% 600%',
                animation: 'gradient 3s ease infinite'
              }}>
                What's Broken?
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              I'll do my homework before we talk, so we can skip the fluff and focus on solutions that actually work for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Side - Process & Meeting Info */}
            <div className="space-y-8">
              {/* Google Meet Card */}
              <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 border-2 border-primary/20 shadow-2xl relative">
                <div className="absolute -top-4 left-8 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold">
                  Preferred Meeting Method
                </div>
                
                <div className="flex items-center mb-6 pt-4">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mr-6 shadow-lg border border-gray-100">
                    <Image 
                      src="/google-meet-logo.png" 
                      alt="Google Meet"
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-2xl text-foreground mb-2">Google Meet Call</h3>
                    <p className="text-text-light">15-minute strategy session</p>
                  </div>
                </div>
                
                <p className="text-foreground mb-6 leading-relaxed">
                  Skip the back-and-forth emails. I'll analyze your current situation before we talk so we can dive straight into solutions.
                </p>
                
                <div className="bg-white rounded-xl p-4 border border-gray-100">
                  <p className="text-sm text-text-light italic">
                    Usually available same-day or next-day
                  </p>
                </div>
              </div>

              {/* How This Works */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                <h3 className="font-display font-bold text-2xl text-foreground mb-8">Here's how this works:</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">You book a call or send an email</h4>
                      <p className="text-text-light">I'll send you a quick form to gather basic info about your business and current challenges.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">I do my homework</h4>
                      <p className="text-text-light">15-minute call where I'll share what I found + discuss your goals and timeline.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold mr-4 flex-shrink-0 mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-2">You get a clear next step</h4>
                      <p className="text-text-light">Recap email with recommendations, timeline & pricing (if it's a fit).</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Contact Info */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100">
                <h3 className="font-display font-bold text-xl text-foreground mb-6">Or reach out directly:</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <a href="mailto:tom@builtbytom.com" className="text-foreground hover:text-primary font-medium transition-colors">
                      tom@builtbytom.com
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <a href="tel:475-555-0123" className="text-foreground hover:text-secondary font-medium transition-colors">
                      (475) 555-0123
                    </a>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-foreground font-medium">Based in North Haven, CT</p>
                      <p className="text-text-light text-sm">I'll get back to you within 24 hours (M-F)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 sticky top-8">
              <div className="flex items-center mb-8">
                <svg className="w-6 h-6 text-primary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.956 9.956 0 01-5.754-1.805l-3.077.814a1 1 0 01-1.23-1.23l.814-3.077A9.956 9.956 0 013 12c0-4.97 4.03-9 9-9s9 4.03 9 9z" />
                </svg>
                <h2 className="font-display font-bold text-2xl text-foreground">Send a message</h2>
              </div>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-foreground mb-2">
                    Website URL
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    placeholder="https://yourwebsite.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                  <p className="text-xs text-text-light mt-1">Required for Google Meet calls (so I can do my homework!)</p>
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-foreground mb-2">
                    What interests you? <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    <option value="">Not sure what I need</option>
                    <option value="website">Website Fix ($3,500)</option>
                    <option value="automation">Business Automation ($797 each)</option>
                    <option value="complete-system">Complete System ($1,797)</option>
                    <option value="consultation">Just want to talk</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="timeline" className="block text-sm font-medium text-foreground mb-2">
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    <option value="planning">Planning ahead</option>
                    <option value="month">Within a month</option>
                    <option value="weeks">Next few weeks</option>
                    <option value="asap">ASAP</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="frustration" className="block text-sm font-medium text-foreground mb-2">
                    What's your biggest frustration?
                  </label>
                  <textarea
                    id="frustration"
                    name="frustration"
                    rows={4}
                    placeholder="e.g., My website looks terrible on phones, I'm losing leads, my booking system is a mess..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 px-8 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message →
                </button>
              </form>
              
              <p className="text-xs text-text-light text-center mt-6">
                I'll get back to you within 24 hours with next steps or questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-24 bg-gradient-to-br from-background to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-8">
              What to Expect
            </h2>
            <p className="text-xl text-text-light">
              No sales pressure. No generic solutions. Just honest conversation about what will actually work for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-foreground mb-4">Real Research</h3>
              <p className="text-text-light">
                I'll actually look at your website, check your page speed, and understand your business before we talk.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m13 0h-6" />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-foreground mb-4">Straight Talk</h3>
              <p className="text-text-light">
                If I can't help you, I'll tell you. If there's a simpler solution, I'll share it. No fluff, no overselling.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl text-foreground mb-4">Clear Next Steps</h3>
              <p className="text-text-light">
                You'll leave knowing exactly what needs to happen, when it can get done, and what it will cost.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}