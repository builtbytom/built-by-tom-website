'use client';

import { useState } from 'react';

export default function ScorecardSection() {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(!showForm);
    if (!showForm) {
      setTimeout(() => {
        const formSection = document.getElementById('scorecard-form');
        if (formSection) {
          formSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  };

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Value Prop */}
        <div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Know Where You
            <span className="block text-primary">Stand</span>
          </h2>
          <p className="text-xl text-foreground mb-6 font-semibold">
            Take a quick pulse check on your website&apos;s performance.
          </p>
          <p className="text-lg text-text-light mb-8 leading-relaxed">
            Answer 10 quick questions about speed, mobile-friendliness, and customer experience. Get a clear score and actionable next steps - no tech jargon, just honest feedback.
          </p>

          {/* Benefits */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-secondary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div className="text-foreground font-medium">2-minute assessment</div>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-secondary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div className="text-foreground font-medium">Instant score & recommendations</div>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-secondary mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <div className="text-foreground font-medium">Personalized action plan</div>
            </div>
          </div>

          {/* CTA Button */}
          <button 
            onClick={handleButtonClick}
            className="group relative px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
          >
            Get My Free Website Scorecard
            <svg className="w-5 h-5 ml-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>

        {/* Right Side - Visual */}
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <h3 className="font-display font-bold text-2xl text-foreground mb-4 text-center">
              Website Health Score
            </h3>
            <p className="text-text-light text-center mb-8">
              See how your site really performs
            </p>

            {/* Score Circle */}
            <div className="relative w-48 h-48 mx-auto mb-8">
              <svg className="w-48 h-48 transform -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="#E5E7EB"
                  strokeWidth="16"
                  fill="none"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="#6B8E7B"
                  strokeWidth="16"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 88}`}
                  strokeDashoffset={`${2 * Math.PI * 88 * (1 - 0.7)}`}
                  className="transition-all duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-5xl font-bold text-foreground">70</div>
                <div className="text-sm text-text-light">/100</div>
              </div>
            </div>

            {/* Score Categories */}
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-secondary rounded-full mr-3"></div>
                <div className="text-sm text-foreground font-medium">Mobile Speed</div>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-secondary rounded-full mr-3"></div>
                <div className="text-sm text-foreground font-medium">User Experience</div>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-accent rounded-full mr-3"></div>
                <div className="text-sm text-foreground font-medium">SEO Basics</div>
              </div>
            </div>

            <p className="text-sm text-text-light text-center mt-6">
              Quick & actionable insights
            </p>
          </div>
        </div>
      </div>

      {/* Hidden Form Section */}
      {showForm && (
        <div id="scorecard-form" className="mt-12 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 max-w-2xl mx-auto">
            <h3 className="font-display font-bold text-2xl text-foreground mb-2">
              Almost There!
            </h3>
            <p className="text-text-light mb-6">
              Just need your email to send your personalized scorecard. Takes 2 minutes to complete.
            </p>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-lg"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-white py-4 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 text-lg"
              >
                Get My Free Scorecard →
              </button>
              
              <p className="text-xs text-center text-text-light">
                No spam, unsubscribe anytime. Just a quick PDF with 10 questions to grade yourself.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}