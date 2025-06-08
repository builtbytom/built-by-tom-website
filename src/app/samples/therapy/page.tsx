import Link from 'next/link';
import type { Metadata } from 'next';
import { Crimson_Text, Inter } from 'next/font/google';

const crimson = Crimson_Text({ 
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic']
});

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500']
});

export const metadata: Metadata = {
  title: 'Therapy Practice Website Demo | Built By Tom',
  description: 'A serene, modern therapy practice website showcasing immersive design and thoughtful automation.',
  robots: 'noindex, follow',
};

export default function TherapySample() {
  return (
    <>
      <div className={`therapy-demo ${inter.className}`}>
      {/* Demo Banner */}
      <div className="bg-[#3E3B40] text-white py-3 text-center relative z-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-light">
            🎨 This is a sample therapy practice website showcasing modern, immersive design
          </p>
        </div>
      </div>

      {/* Immersive Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#A09CB0] via-[#B2C9C2] to-[#A09CB0] animate-gradient-shift"></div>
        
        {/* Floating Orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#B2C9C2]/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#A09CB0]/30 rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className={`${crimson.className} text-5xl sm:text-6xl lg:text-7xl text-white/90 font-light animate-fade-in`}>
            A quiet space to reconnect with yourself.
          </h1>
          
          <div className="mt-16 animate-pulse">
            <div className="w-2 h-2 bg-white/60 rounded-full mx-auto mb-2"></div>
            <p className="text-white/60 text-sm">Begin</p>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="min-h-screen bg-[#F7F1F1] flex items-center justify-center px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="space-y-8 animate-on-scroll">
            <h2 className={`${crimson.className} text-4xl lg:text-5xl text-[#3E3B40] font-normal leading-tight`}>
              You deserve to be fully heard.
            </h2>
            
            <div className="space-y-6 text-lg text-[#3E3B40]/80 leading-relaxed">
              <p>
                Life is a complex tapestry of bright moments and tangled knots. Therapy is the process 
                of gently working through those knots, not to erase your story, but to understand it more deeply.
              </p>
              
              <p>
                The Haven Practice is a sanctuary for this work—a confidential space to find clarity, 
                compassion, and a more grounded, authentic you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pathways Section - Non-linear Layout */}
      <section className="min-h-screen bg-gradient-to-b from-[#F7F1F1] to-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`${crimson.className} text-4xl lg:text-5xl text-[#3E3B40] mb-6`}>
              Your Path Forward
            </h2>
            <p className="text-lg text-[#3E3B40]/70 max-w-2xl mx-auto">
              While your journey is unique, some paths are walked more often than others. 
              We specialize in guiding clients through:
            </p>
          </div>

          {/* Staggered Cards */}
          <div className="relative">
            {/* Card 1 - Anxiety */}
            <div className="relative lg:absolute lg:left-0 lg:top-0 max-w-md mx-auto lg:mx-0 mb-8 lg:mb-0 animate-float-in opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-[#A09CB0]/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-[#A09CB0]/20 to-[#B2C9C2]/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🌊</span>
                </div>
                <h3 className={`${crimson.className} text-2xl text-[#3E3B40] mb-4`}>
                  Navigating Anxiety & Overwhelm
                </h3>
                <p className="text-[#3E3B40]/70 leading-relaxed">
                  Finding tools to quiet the noise, manage stress, and move through life with more ease and intention.
                </p>
              </div>
            </div>

            {/* Card 2 - Relationships */}
            <div className="relative lg:absolute lg:right-0 lg:top-24 max-w-md mx-auto lg:mx-0 mb-8 lg:mb-0 animate-float-in opacity-0" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-[#B2C9C2]/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-[#B2C9C2]/20 to-[#A09CB0]/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">💫</span>
                </div>
                <h3 className={`${crimson.className} text-2xl text-[#3E3B40] mb-4`}>
                  Strengthening Connection in Relationships
                </h3>
                <p className="text-[#3E3B40]/70 leading-relaxed">
                  For individuals and couples seeking to foster healthier communication, rebuild trust, and deepen intimacy.
                </p>
              </div>
            </div>

            {/* Card 3 - Transitions */}
            <div className="relative lg:absolute lg:left-32 lg:top-64 max-w-md mx-auto lg:mx-0 animate-float-in opacity-0" style={{ animationDelay: '0.6s' }}>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-[#A09CB0]/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-[#C6A982]/20 to-[#A09CB0]/20 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className={`${crimson.className} text-2xl text-[#3E3B40] mb-4`}>
                  Guiding Through Life Transitions
                </h3>
                <p className="text-[#3E3B40]/70 leading-relaxed">
                  Offering support through career changes, grief, new parenthood, and other pivotal life moments that shape who we are.
                </p>
              </div>
            </div>

            {/* Spacer for mobile/tablet */}
            <div className="lg:hidden h-8"></div>
            <div className="hidden lg:block h-96"></div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gradient-to-br from-[#F7F1F1] via-white to-[#F7F1F1] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`${crimson.className} text-3xl lg:text-4xl text-[#3E3B40] mb-4`}>
              Your First Step: A Gentle & Confidential Process
            </h2>
            <p className="text-lg text-[#3E3B40]/70">
              Reaching out is an act of courage. We honor that by making the process as simple and secure as possible.
            </p>
          </div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 bg-[#C6A982]/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#C6A982]/30 transition-colors">
                <span className="text-[#C6A982] font-medium">1</span>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#3E3B40] mb-2">Request a Consultation</h3>
                <p className="text-[#3E3B40]/70 leading-relaxed">
                  Use our secure online portal to find a time for a complimentary 15-minute phone consultation. 
                  This is a chance for us to see if we're a good fit.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 bg-[#C6A982]/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#C6A982]/30 transition-colors">
                <span className="text-[#C6A982] font-medium">2</span>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#3E3B40] mb-2">Share Your Story</h3>
                <p className="text-[#3E3B40]/70 leading-relaxed">
                  If we decide to move forward, you'll receive a link to our private, encrypted intake forms, 
                  which you can complete at your own pace from the comfort of your home.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-6 group">
              <div className="w-12 h-12 bg-[#C6A982]/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#C6A982]/30 transition-colors">
                <span className="text-[#C6A982] font-medium">3</span>
              </div>
              <div>
                <h3 className="text-xl font-medium text-[#3E3B40] mb-2">Begin Your Sessions</h3>
                <p className="text-[#3E3B40]/70 leading-relaxed">
                  You'll receive a discreet confirmation and reminder before your first session. 
                  All you need to do is show up, ready to begin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className={`${crimson.className} text-3xl lg:text-4xl text-[#3E3B40] mb-2`}>
                I'm Dr. Aris Thorne.
              </h2>
              <p className="text-[#3E3B40]/60 mb-6">(LMFT, PhD)</p>
              
              <div className="space-y-4 text-[#3E3B40]/80 leading-relaxed">
                <p>
                  I believe that every person possesses the innate capacity for healing and growth. 
                  My role is not to give you answers, but to provide a compassionate, non-judgmental 
                  space and ask the right questions to help you find your own.
                </p>
                <p>
                  With a foundation in mindfulness and narrative therapy, I am here to be your guide 
                  and witness as you navigate your inner world.
                </p>
              </div>
              
              <Link 
                href="#" 
                className="inline-block mt-6 text-[#C6A982] hover:text-[#C6A982]/80 transition-colors"
              >
                Learn More About My Approach →
              </Link>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#A09CB0]/20 to-[#B2C9C2]/20 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-gradient-to-br from-[#F7F1F1] to-white rounded-3xl h-[500px] flex items-center justify-center text-[#3E3B40]/30">
                  [Therapist Portrait]
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[#A09CB0] to-[#B2C9C2] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className={`${crimson.className} text-3xl lg:text-4xl text-white mb-6`}>
            Your journey back to yourself begins with a single step.
          </h2>
          <p className="text-xl text-white/90 mb-10">
            If you feel ready to explore what therapy can offer, I invite you to schedule a complimentary consultation.
          </p>
          
          <button className="px-10 py-4 bg-[#C6A982] text-white font-medium rounded-full hover:bg-[#C6A982]/90 transition-all transform hover:scale-105 shadow-xl">
            Schedule a Confidential Consultation
          </button>
        </div>
      </section>

      {/* Demo Footer */}
      <section className="py-16 bg-[#3E3B40] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-2xl mb-4">
            Want a Website That Feels This Thoughtful?
          </h3>
          <p className="text-lg mb-6 text-white/80">
            This demo shows how modern design can create emotional connection. Let's build something meaningful for your practice.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-[#C6A982] text-white font-medium rounded-full hover:bg-[#C6A982]/90 transition-all transform hover:scale-105"
          >
            Get Your Practice Website
          </Link>
          <p className="mt-4 text-white/60">
            Starting at $3,500 • 3-week delivery • No monthly fees
          </p>
        </div>
      </section>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.03); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes float-in {
          from { 
            opacity: 0; 
            transform: translateY(30px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        
        .animate-gradient-shift {
          background-size: 400% 400%;
          animation: gradient-shift 20s ease infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        .animate-fade-in {
          animation: fade-in 1.5s ease-out forwards;
        }
        
        .animate-float-in {
          animation: float-in 0.8s ease-out forwards;
        }
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
}