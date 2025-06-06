import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Tom | Built By Tom',
  description: 'The guy behind Built By Tom. Scaled a business to $17M, learned what breaks under pressure, now helps small businesses build systems that actually work.',
};

export default function About() {
  return (
    <>
      {/* Hero Section - Premium Green Theme */}
      <section className="relative min-h-[80vh] bg-gradient-to-br from-primary via-slate-800 to-secondary overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-sage-light/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }}></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Tom's Story - Left Side */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium border border-white/20">
                  The Story Behind Built By Tom
                </span>
              </div>
              <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-none">
                From $17M Chaos
                <span className="block bg-gradient-to-r from-white via-accent via-sage-light to-white bg-clip-text text-transparent pb-2" style={{ 
                  backgroundSize: '600% 600%',
                  animation: 'gradient 3s ease infinite'
                }}>
                  To Building Calm
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                I didn&apos;t start out as a &apos;web guy&apos; or a systems expert. My journey began in the trenches.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <Link 
                  href="/contact" 
                  className="group px-12 py-6 bg-white text-primary text-lg font-bold rounded-2xl shadow-2xl shadow-black/10 hover:shadow-black/20 transform hover:scale-105 transition-all duration-500"
                >
                  <span className="flex items-center">
                    Let&apos;s Work Together
                    <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
                <Link 
                  href="#story" 
                  className="group px-8 py-6 border-2 border-white/40 text-white text-lg font-semibold rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-white/60 transition-all duration-500"
                >
                  Read My Story
                  <svg className="w-5 h-5 ml-2 inline-block group-hover:translate-y-1 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Tom's Photo - Right Side */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-sage-light/15 rounded-3xl blur-xl transform scale-110"></div>
                
                {/* Photo Container */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-3 border-white/20 shadow-2xl">
                  <Image 
                    src="/tom-headshot.png" 
                    alt="Tom - Founder of Built By Tom"
                    width={384}
                    height={384}
                    className="w-full h-full object-cover"
                    priority
                  />
                  
                  {/* Credibility Badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 border border-white/50">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-secondary rounded-full mr-3"></div>
                      <div>
                        <div className="font-bold text-foreground text-sm">20+ Years Operations</div>
                        <div className="text-text-light text-xs">Restaurant GM → $17M Amazon FBA → Built By Tom</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Overview - Premium Stats */}
      <section id="experience" className="py-24 bg-gradient-to-br from-background to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-5xl lg:text-6xl text-foreground mb-8">
              Built Through
              <span className="block text-primary">Real Experience</span>
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Not theory. Not courses. Real businesses, real pressure, real solutions.
            </p>
          </div>

          {/* Premium Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 text-center h-full">
                <div className="text-5xl font-bold text-primary mb-4">20+</div>
                <div className="text-foreground font-semibold text-lg mb-2">Years</div>
                <div className="text-text-light">Operations experience across industries</div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/20 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 text-center h-full">
                <div className="text-5xl font-bold text-accent mb-4">$17M</div>
                <div className="text-foreground font-semibold text-lg mb-2">Annual Peak</div>
                <div className="text-text-light">Amazon FBA business scaled from zero</div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-sage-light/10 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 text-center h-full">
                <div className="text-5xl mb-4">🛠️</div>
                <div className="text-foreground font-semibold text-lg mb-2">Custom WMS</div>
                <div className="text-text-light">Built from scratch when nothing else worked</div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 text-center h-full">
                <div className="text-5xl mb-4">💡</div>
                <div className="text-foreground font-semibold text-lg mb-2">Systems Thinking</div>
                <div className="text-text-light">Learned what breaks under real pressure</div>
              </div>
            </div>
          </div>

          {/* Premium Quote */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-12 text-center border border-primary/20">
            <div className="text-6xl text-primary/20 mb-6">&ldquo;</div>
            <p className="text-2xl text-foreground font-medium mb-8 italic leading-relaxed max-w-4xl mx-auto">
              Built By Tom is what I wish I had back then — simple, honest help that actually works.
            </p>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                T
              </div>
              <div className="text-left">
                <div className="font-bold text-xl text-foreground">Tom</div>
                <div className="text-text-light">Founder, Built By Tom</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Story - Visual Timeline */}
      <section id="story" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-5xl lg:text-6xl text-foreground mb-8">
              How Scaling to $17M Taught Me
              <span className="block text-primary">About Chaos & Calm</span>
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              My journey from restaurant trenches to Amazon chaos to building calm for others.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              {/* Chapter 1: Restaurant Days */}
              <div className="relative">
                <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-primary/20"></div>
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                    🍽️
                  </div>
                  <div className="ml-8 flex-1">
                    <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                      <h3 className="font-display font-bold text-2xl text-foreground mb-4">The Restaurant Trenches</h3>
                      <p className="text-lg text-foreground leading-relaxed mb-4">
                        I didn&apos;t start out as a &apos;web guy&apos; or a systems expert. My journey began in the trenches – first, spending a decade as a GM for a restaurant group, getting hands-on programming POS systems to stop things from falling through the cracks.
                      </p>
                      <div className="bg-primary/5 rounded-lg p-4">
                        <p className="text-primary font-semibold text-sm">Key Lesson: Systems either work or they don&apos;t. There&apos;s no middle ground when customers are waiting.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chapter 2: Amazon FBA Growth */}
              <div className="relative">
                <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-primary/20"></div>
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                    📦
                  </div>
                  <div className="ml-8 flex-1">
                    <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                      <h3 className="font-display font-bold text-2xl text-foreground mb-4">The Wild Ride Begins</h3>
                      <p className="text-lg text-foreground leading-relaxed mb-4">
                        Then, I dove headfirst into founding an Amazon FBA business. For 10 years, I lived the wild ride – the exhilarating growth, the sleepless nights, and the constant battle to keep things running.
                      </p>
                      <div className="bg-secondary/5 rounded-lg p-4">
                        <p className="text-secondary font-semibold text-sm">Growth Phase: Bootstrapped from zero to $100M+ total sales</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chapter 3: The Breaking Point */}
              <div className="relative">
                <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-primary/20"></div>
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                    ⚠️
                  </div>
                  <div className="ml-8 flex-1">
                    <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                      <h3 className="font-display font-bold text-2xl text-foreground mb-4">$17M Annual Peak = $17M Worth of Problems</h3>
                      <p className="text-lg text-foreground leading-relaxed mb-4">
                        We bootstrapped that FBA company from zero, and as we scaled past $100M in total sales ($17M annually), I hit a wall. Our biggest &apos;success&apos; was creating our biggest nightmare: inventory chaos. We were drowning in stock we couldn&apos;t track.
                      </p>
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                        <p className="text-red-700 font-semibold text-sm">Reality Check: Off-the-shelf software was too expensive, too complex, or just plain wrong.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chapter 4: The Solution */}
              <div className="relative">
                <div className="absolute left-8 top-8 bottom-0 w-0.5 bg-primary/20"></div>
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                    🛠️
                  </div>
                  <div className="ml-8 flex-1">
                    <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                      <h3 className="font-display font-bold text-2xl text-foreground mb-4">So I Did What Small Business Owners Do</h3>
                      <p className="text-lg text-foreground leading-relaxed mb-4">
                        Fueled by about 3,000 YouTube videos and sheer determination, I built a custom Warehouse Management System from scratch using Google Sheets and AppSheet. It wasn&apos;t fancy, but it worked. It tracked every single item, every order, every expiration date.
                      </p>
                      <div className="bg-accent/5 rounded-lg p-4">
                        <p className="text-accent font-semibold text-sm">The Breakthrough: It was the &apos;calm&apos; I desperately needed in that specific storm.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chapter 5: The Realization */}
              <div className="relative">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                    💡
                  </div>
                  <div className="ml-8 flex-1">
                    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 shadow-2xl border border-primary/20">
                      <h3 className="font-display font-bold text-2xl text-foreground mb-4">The Soul-Crushing Truth</h3>
                      <p className="text-lg text-foreground leading-relaxed mb-6">
                        And that was just one hat. Like you, I was also doing the hiring, the firing, the banking, the vendor battles... all of it. That&apos;s where I learned, firsthand, how much broken tech and clunky systems can drain not just your bottom line, but your soul.
                      </p>
                      <div className="bg-white rounded-xl p-6 border-l-4 border-primary">
                        <p className="text-lg text-foreground font-medium italic">
                          &ldquo;I learned, firsthand, how much broken tech and clunky systems can drain not just your bottom line, but your soul.&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <Link 
                href="#what-i-learned" 
                className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
              >
                What I learned from all this chaos
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What I Learned - The Pivot */}
      <section id="what-i-learned" className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-5xl lg:text-6xl text-foreground mb-8">
              Turns Out, I Like Fixing Things
              <span className="block text-primary">More Than Selling Them</span>
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              When the Amazon chapter ended, the real lessons began.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Eventually, like many businesses navigating the tough world of Amazon, our FBA journey reached its end. The market dynamics shifted, and it was time for a new chapter. But the lessons from those intense years—and the decade in restaurants before—didn&apos;t fade.
              </p>

              <p className="text-lg text-foreground leading-relaxed mb-6">
                They crystallized into one, clear realization: my real passion wasn&apos;t just in the &apos;what&apos; we sold, but in the &apos;how&apos; we operated. It was in untangling the messy knots, solving the operational puzzles, and building those &ldquo;Oh, thank goodness, that finally works!&rdquo; moments.
              </p>

              <p className="text-lg text-foreground leading-relaxed">
                I kept thinking about the stress, the time, the money I&apos;d spent wrestling with tech I didn&apos;t understand and systems that felt like they were built against me. What if there had been someone I trusted to build simple, effective solutions with me? Someone who got the pressure but skipped the confusing jargon?
              </p>
            </div>

            {/* The Mission Statement */}
            <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-12 text-white text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                backgroundSize: '60px 60px'
              }}></div>
              
              <div className="relative">
                <div className="text-6xl mb-6">🎯</div>
                <h3 className="font-display font-bold text-3xl mb-6">Built By Tom is my answer to all that chaos.</h3>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  It&apos;s the simple, honest, real-world help I wish I&apos;d had.
                </p>
                <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
                  It&apos;s my chance to take those hard-won lessons – from the restaurant POS systems to the custom FBA warehouse – and build websites and systems that give you back your time and your sanity. I believe tech should work for us, not the other way around.
                </p>
              </div>
            </div>

            <div className="text-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-12 py-6 bg-primary text-white text-xl font-bold rounded-2xl shadow-2xl shadow-primary/25 hover:bg-primary/90 hover:shadow-primary/40 transform hover:scale-105 transition-all duration-300"
              >
                Let&apos;s Build Your Calm
                <svg className="w-6 h-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Stories - Premium Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-5xl lg:text-6xl text-foreground mb-8">
              Real Stories From
              <span className="block text-primary">Real Clients</span>
            </h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto">
              These aren&apos;t just testimonials. They&apos;re proof that simple solutions actually work.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/5 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 h-full flex flex-col">
                <div className="text-6xl text-gray-200 mb-6">&ldquo;</div>
                <p className="text-lg text-foreground mb-8 italic leading-relaxed flex-grow">
                  My phone actually rings now. Tom rebuilt my site and suddenly customers can find me on Google. Should&apos;ve called him two years ago.
                </p>
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    C
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Carrie H.</div>
                    <div className="text-text-light">Local Business Owner</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 h-full flex flex-col">
                <div className="text-6xl text-gray-200 mb-6">&ldquo;</div>
                <p className="text-lg text-foreground mb-8 italic leading-relaxed flex-grow">
                  Tom set up this crazy system where my website talks to a spreadsheet that texts my phone. Sounds complicated but it just... works. I don&apos;t miss quotes anymore and I&apos;m not paying $200/month for some fancy software.
                </p>
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    M
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Mike D.</div>
                    <div className="text-text-light">General Contractor</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 mb-8 max-w-2xl mx-auto border border-primary/20">
              <p className="text-lg font-semibold text-foreground mb-2">
                Ready to be the next success story?
              </p>
              <p className="text-text-light">
                Let&apos;s build something that actually works for your business.
              </p>
            </div>
            
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
            >
              Start Working Together
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}