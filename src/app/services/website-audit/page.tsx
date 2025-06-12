import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Website & Systems Review - $297 | Built By Tom',
  description: 'Get a complete review of your website AND business systems with actionable recommendations. Live 30-minute call + written report. 100% applicable to any project.',
};

export default function WebsiteAudit() {
  return (
    <>
      {/* Hero Section - Friendly & Helpful */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-primary via-teal-700 to-secondary overflow-hidden">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-sage-light/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pt-20 sm:pt-28 lg:pt-32 pb-16 lg:pb-20">
          <div className="text-center">
            {/* Friendly Badge */}
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold text-sm mb-8 border border-white/30">
              <span className="text-xl mr-2">🔍</span>
              Low-Risk Way to Start
            </div>
            
            <h1 className="font-display font-bold text-5xl lg:text-6xl text-white mb-6">
              Website & Systems Review
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Get a complete review of your website AND discover automation opportunities 
              that could save you 10+ hours per week. All in one comprehensive review.
            </p>

            {/* Clear Value Prop */}
            <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl">
              <div className="flex flex-col md:flex-row items-center justify-between mb-6">
                <div className="text-center md:text-left mb-4 md:mb-0">
                  <div className="text-5xl font-bold text-primary mb-2">$297</div>
                  <div className="text-text-light">One-time investment</div>
                </div>
                <div className="text-center md:text-right">
                  <div className="text-lg font-semibold text-foreground mb-1">100% Applicable</div>
                  <div className="text-sm text-text-light">To any future project</div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="font-semibold text-foreground">1-hour live review call</span>
                    <p className="text-sm text-text-light">We&apos;ll screen share and go through your website AND discuss automation opportunities - with time for all your questions</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="font-semibold text-foreground">Website + automation opportunities report</span>
                    <p className="text-sm text-text-light">Your top 5 website fixes PLUS 3-5 automation ideas to save time</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="w-6 h-6 text-teal-600 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <span className="font-semibold text-foreground">Competitive analysis</span>
                    <p className="text-sm text-text-light">See how you stack up against local competitors (and how to beat them)</p>
                  </div>
                </div>
              </div>

              <Link 
                href="/contact?service=website-audit" 
                className="block w-full text-center bg-primary text-white py-4 px-8 rounded-xl font-bold hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
              >
                Get My Complete Review
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
              What You&apos;ll Discover
            </h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              No technical jargon, no overwhelming lists. Just honest feedback about what matters for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🚨</span>
              </div>
              <h3 className="font-bold text-xl text-foreground mb-3">
                What&apos;s Costing You Customers
              </h3>
              <p className="text-text-light">
                The specific issues making people leave your site (and how much business you&apos;re losing)
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="font-bold text-xl text-foreground mb-3">
                What&apos;s Already Working
              </h3>
              <p className="text-text-light">
                The parts of your site to keep and build on (you might be surprised what&apos;s actually good)
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="font-bold text-xl text-foreground mb-3">
                Your Biggest Opportunities
              </h3>
              <p className="text-text-light">
                The top 5 changes that will make the biggest impact (in order of importance)
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="font-bold text-xl text-foreground mb-3">
                Mobile Reality Check
              </h3>
              <p className="text-text-light">
                How your site really looks on phones (where 70% of your visitors are)
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="font-bold text-xl text-foreground mb-3">
                Google Visibility Score
              </h3>
              <p className="text-text-light">
                Why customers can (or can&apos;t) find you online and what to do about it
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mb-6">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="font-bold text-xl text-foreground mb-3">
                ROI Projection
              </h3>
              <p className="text-text-light">
                Realistic expectations for what fixing these issues could mean for your business
              </p>
            </div>
          </div>

          {/* Trust Builder */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-12 text-center">
            <h3 className="font-display font-bold text-3xl text-foreground mb-4">
              Why This Isn&apos;t a Sales Pitch
            </h3>
            <p className="text-lg text-text-light mb-8 max-w-2xl mx-auto">
              Some websites just need small fixes. Others need a complete rebuild. 
              I&apos;ll tell you honestly which one you need. If you can handle it yourself, 
              I&apos;ll tell you how. If you need help, I&apos;m here.
            </p>
            <div className="inline-flex items-center text-primary font-semibold">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No pressure. No BS. Just helpful advice.
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
              How It Works
            </h2>
            <p className="text-xl text-text-light">
              Simple process, valuable results
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-6 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-bold text-xl text-foreground mb-2">
                  You book and share your site
                </h3>
                <p className="text-text-light">
                  After booking, you&apos;ll get a simple form asking about your biggest frustrations and goals. 
                  Takes 5 minutes.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-6 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-bold text-xl text-foreground mb-2">
                  I analyze everything that matters
                </h3>
                <p className="text-text-light">
                  I&apos;ll review your site&apos;s design, mobile experience, speed, SEO, and compare you to local competitors. 
                  I look at it through your customers&apos; eyes.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-6 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-bold text-xl text-foreground mb-2">
                  I have our live review call
                </h3>
                <p className="text-text-light">
                  I&apos;ll hop on a 1-hour screen share call where I thoroughly review your website 
                  AND identify automation opportunities. Plenty of time to dig into what matters most to you.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-6 flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-bold text-xl text-foreground mb-2">
                  You decide what&apos;s next
                </h3>
                <p className="text-text-light">
                  You&apos;ll get a written report with all recommendations. Implement them yourself 
                  or apply the full $297 toward any website or automation project. Your choice.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/contact?service=website-audit" 
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
            >
              Book My Review Call
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Quick Questions
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-bold text-xl text-foreground mb-3">
                What if my site is really bad?
              </h3>
              <p className="text-text-light">
                No judgment here! I&apos;ve seen it all. The whole point is to help you improve, 
                not make you feel bad. We&apos;ll focus on solutions, not problems.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-bold text-xl text-foreground mb-3">
                Do I have to hire you after?
              </h3>
              <p className="text-text-light">
                Absolutely not. Many people take the audit findings and implement changes themselves. 
                Others realize they&apos;d rather have professional help. Either way is fine with me.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-bold text-xl text-foreground mb-3">
                How is this different from free website graders?
              </h3>
              <p className="text-text-light">
                Those automated tools can&apos;t see what humans see. They miss context, local competition, 
                and industry-specific needs. I look at your site like a potential customer would, 
                then explain everything in plain English.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-bold text-xl text-foreground mb-3">
                When can you do my audit?
              </h3>
              <p className="text-text-light">
                Usually within 3 business days of booking. If you&apos;re in a rush, let me know 
                and I&apos;ll see what I can do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-6">
            Stop Wondering, Start Knowing
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            For less than the cost of a month of Facebook ads, you&apos;ll know exactly 
            what&apos;s working, what&apos;s not, and what to do about it.
          </p>
          <Link 
            href="/contact?service=website-audit" 
            className="inline-flex items-center px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-white/90 hover:shadow-xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-105"
          >
            Get My $297 Website & Systems Review
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="text-sm text-white/60 mt-6">
            100% applicable to any future project
          </p>
        </div>
      </section>
    </>
  );
}