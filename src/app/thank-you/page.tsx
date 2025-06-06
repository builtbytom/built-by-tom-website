'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function ThankYou() {
  useEffect(() => {
    // Confetti animation
    const createConfetti = () => {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: ${['#1B4D3E', '#6B8E7B', '#A8C4B5', '#D4A574'][Math.floor(Math.random() * 4)]};
        left: ${Math.random() * 100}vw;
        animation: confetti-fall 3s linear infinite;
        pointer-events: none;
        z-index: 1000;
      `;
      document.body.appendChild(confetti);
      
      setTimeout(() => {
        confetti.remove();
      }, 3000);
    };

    // Add confetti CSS animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes confetti-fall {
        0% { 
          transform: translateY(-100vh) rotate(0deg); 
          opacity: 1; 
        }
        100% { 
          transform: translateY(100vh) rotate(720deg); 
          opacity: 0; 
        }
      }
    `;
    document.head.appendChild(style);

    // Create confetti burst
    for (let i = 0; i < 50; i++) {
      setTimeout(() => createConfetti(), i * 50);
    }

    return () => {
      style.remove();
      document.querySelectorAll('.confetti').forEach(el => el.remove());
    };
  }, []);

  return (
    <>
      {/* Thank You Hero Section */}
      <section className="relative min-h-[80vh] bg-gradient-to-br from-primary via-slate-800 to-secondary overflow-hidden flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-sage-light/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }}></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Success Icon */}
            <div className="mb-8">
              <div className="w-24 h-24 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium border border-white/20">
                Message Received!
              </span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Perfect! Your message just
              <span className="block bg-gradient-to-r from-white via-accent via-sage-light to-white bg-clip-text text-transparent pb-2" style={{ 
                backgroundSize: '600% 600%',
                animation: 'gradient 3s ease infinite'
              }}>
                landed in my inbox 📫
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              I'll get back to you within 24 hours (unless it's the weekend — even tech guys need coffee breaks)
            </p>
          </div>
        </div>
      </section>

      {/* While You Wait Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-8">
              While you're waiting...
            </h2>
            <p className="text-xl text-text-light max-w-2xl mx-auto">
              Check out the Resource Center for free guides, tools, and answers to common questions. No fluff, just helpful stuff.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-10 border-2 border-primary/20 shadow-2xl text-center mb-16">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            
            <h3 className="font-display font-bold text-2xl text-foreground mb-4">
              Free Resources & Insights
            </h3>
            
            <p className="text-text-light mb-8 leading-relaxed">
              Real-world advice from 20+ years of building, breaking, and fixing business systems. Learn from my $50,000 mistakes so you don't repeat them.
            </p>
            
            <Link 
              href="/resources"
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
            >
              Browse Resources
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Popular Resources */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <Link 
              href="/resources/what-i-learned-spending-50000-on-the-wrong-thing"
              className="block bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
                <span className="text-text-light text-sm">8 min read</span>
              </div>
              <h4 className="font-bold text-lg text-foreground mb-2">
                What I Learned Spending $50,000 on the Wrong Thing
              </h4>
              <p className="text-text-light text-sm">
                How running a business without systems nearly killed our growth (and our sanity).
              </p>
            </Link>

            <Link 
              href="/resources/why-your-website-needs-to-be-built-for-phones-first"
              className="block bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                  Website Design
                </span>
                <span className="text-text-light text-sm">6 min read</span>
              </div>
              <h4 className="font-bold text-lg text-foreground mb-2">
                Why Your Website Needs to Be Built for Phones First
              </h4>
              <p className="text-text-light text-sm">
                75% of people judge your business credibility based on your mobile website.
              </p>
            </Link>
          </div>

          {/* Need to Chat Sooner */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 text-center">
            <h3 className="font-display font-bold text-2xl text-foreground mb-4">
              Need to chat sooner?
            </h3>
            <p className="text-text-light mb-6">
              If your situation is urgent or you just want to get on my calendar, grab a time that works for you:
            </p>
            
            <a 
              href="tel:475-555-0123"
              className="inline-flex items-center px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent/90 hover:shadow-xl hover:shadow-accent/25 transition-all duration-300 transform hover:scale-105 mr-4"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
            
            <span className="text-text-light">or</span>
            
            <Link 
              href="/contact"
              className="inline-flex items-center px-6 py-4 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all duration-300 ml-4"
            >
              <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book a Quick Call
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Home */}
      <section className="py-16 bg-gradient-to-br from-background to-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <Link 
            href="/"
            className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </section>
    </>
  );
}