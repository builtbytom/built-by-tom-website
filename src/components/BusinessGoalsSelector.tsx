'use client';

import { useState } from 'react';

interface Goal {
  id: string;
  icon: string;
  challenge: string;
  whyItHappens: string;
  whatYouNeed: string[];
  realExample: string;
  result: string;
}

const goals: Goal[] = [
  {
    id: 'notfound',
    icon: '🔍',
    challenge: "I'm not getting found online by local customers",
    whyItHappens: "Most websites are built like brochures, not lead generation machines. Search engines don't understand what you do or where you serve customers.",
    whatYouNeed: [
      "Smart Local SEO: Your business shows up when people search '[your service] near me'",
      "Google Maps Integration: One-click directions that open right in their phone",
      "Review Management: Automatic requests for feedback from happy customers",
      "Local Authority Signals: Makes Google trust your location and services"
    ],
    realExample: "Carrie's cleaning service went from 2 calls/month to 3-4 calls/week after we rebuilt her site with proper local SEO. She now dominates 'house cleaning near me' searches.",
    result: "Instead of hoping customers find you, they'll see you first when they search for what you do in your area"
  },
  {
    id: 'noconversion',
    icon: '📞',
    challenge: "People visit my site but don't call or buy anything",
    whyItHappens: "Most websites confuse visitors instead of guiding them. No clear path from 'just looking' to 'ready to buy.'",
    whatYouNeed: [
      "Psychology-First Design: Layout guides visitors naturally toward contacting you",
      "Trust Building Elements: Local credentials, real testimonials, clear expertise",
      "Mobile-Perfect Forms: Easy to fill out on phones, no typing frustration",
      "Smart Call-to-Actions: Clear next steps that reduce friction"
    ],
    realExample: "A contractor's old site got 100 visits but zero calls. New site converts 8-10 visitors into leads because it actually guides them to take action.",
    result: "Your website becomes a 24/7 salesperson that pre-qualifies leads and gets them excited to work with you"
  },
  {
    id: 'manualchaos',
    icon: '😵',
    challenge: "I'm drowning in manual follow-ups and missed inquiries",
    whyItHappens: "Information lives in different places (email, voicemail, text, website forms) with no system to track or follow up automatically.",
    whatYouNeed: [
      "Never Miss a Lead: Forms automatically send confirmations and alert you instantly",
      "Smart Follow-Up Sequences: Automatic emails that nurture leads while you work",
      "Unified Contact Flow: All inquiries organized in one place",
      "Built-in Reminder Systems: Never forget to follow up with warm leads"
    ],
    realExample: "Mike's contracting business was losing 30% of leads to poor follow-up. New website captures everything and reminds him who to call back. Revenue up 40% in 3 months.",
    result: "Every inquiry gets captured, confirmed, and followed up automatically - even when you're busy with paying customers"
  },
  {
    id: 'looksbad',
    icon: '🏚️',
    challenge: "My current site looks unprofessional compared to competitors",
    whyItHappens: "Template sites all look the same, load slowly, and break on mobile devices. DIY efforts often look DIY.",
    whatYouNeed: [
      "Custom Design: Built specifically for your business, not from templates",
      "Premium Performance: Loads faster than 90% of websites (under 2 seconds)",
      "Mobile Excellence: Perfect experience on every device size",
      "Professional Polish: Typography, spacing, and details that convey competence"
    ],
    realExample: "A plumber's DIY site made him look like a hobbyist. Professional redesign had customers saying 'you must be the best plumber in town' before even meeting him.",
    result: "Your website makes competitors' sites look outdated and gives customers confidence before they even call"
  },
  {
    id: 'scheduling',
    icon: '📅',
    challenge: "Managing appointments and scheduling is a nightmare",
    whyItHappens: "Phone tag, double-bookings, no-shows, and manual calendar management create chaos instead of smooth operations.",
    whatYouNeed: [
      "Booking Bliss: Online scheduling that syncs with your calendar automatically",
      "Smart Confirmations: Automatic texts and emails with all the details",
      "No-Show Prevention: Reminder sequences that keep appointments filled",
      "Buffer Management: Automatic spacing between appointments for travel/prep"
    ],
    realExample: "A massage therapist went from 25% no-shows to under 5% with automated reminders. Plus, clients love booking at midnight when they remember.",
    result: "Customers book themselves 24/7, show up prepared, and you never double-book or waste time on phone tag"
  },
  {
    id: 'blindspot',
    icon: '📊',
    challenge: "I have no idea if my website is actually working",
    whyItHappens: "Most websites are 'set it and forget it' with no tracking, analytics, or performance monitoring.",
    whatYouNeed: [
      "Performance Tracking: Clear reports on what's working and what isn't",
      "Visitor Insights: See how customers find you and what they do on your site",
      "Conversion Monitoring: Track which pages turn visitors into customers",
      "ROI Documentation: Measure actual business impact of improvements"
    ],
    realExample: "A landscaper discovered 80% of his traffic came from one blog post about lawn care. We optimized it and tripled his leads without spending on ads.",
    result: "You'll know exactly how your website contributes to growth and where to focus for maximum return"
  }
];

export default function BusinessGoalsSelector() {
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleGoalSelect = (goalId: string) => {
    if (selectedGoal === goalId) {
      setSelectedGoal(null);
    } else {
      setIsAnimating(true);
      setSelectedGoal(goalId);
      setTimeout(() => setIsAnimating(false), 300);
    }
  };

  const selected = goals.find(g => g.id === selectedGoal);

  return (
    <section className="py-20 bg-gradient-to-br from-background to-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
            What's Your Biggest Business Challenge Right Now?
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            Click your main problem below. I'll show you exactly how a proper website fixes it (with real examples from businesses like yours).
          </p>
        </div>

        {/* Goal Selection Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {goals.map((goal) => (
            <button
              key={goal.id}
              onClick={() => handleGoalSelect(goal.id)}
              className={`
                relative p-6 rounded-2xl border-2 text-left transition-all duration-300 transform
                ${selectedGoal === goal.id 
                  ? 'bg-primary text-white border-primary shadow-2xl scale-105' 
                  : 'bg-white border-gray-200 hover:border-primary/40 hover:shadow-lg hover:scale-102'
                }
              `}
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl">{goal.icon}</div>
                <div className="flex-1">
                  <h3 className={`font-bold text-lg ${selectedGoal === goal.id ? 'text-white' : 'text-foreground'}`}>
                    {goal.challenge}
                  </h3>
                </div>
              </div>
              {selectedGoal === goal.id && (
                <div className="absolute top-2 right-2">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Selected Goal Details */}
        {selected && (
          <div className={`bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden ${isAnimating ? 'animate-slideIn' : ''}`}>
            <div className="bg-gradient-to-r from-primary to-secondary p-8 text-white">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-5xl">{selected.icon}</div>
                <h3 className="font-display font-bold text-2xl lg:text-3xl">{selected.challenge}</h3>
              </div>
            </div>
            
            <div className="p-8 lg:p-12 space-y-8">
              {/* Why This Happens */}
              <div>
                <h4 className="font-bold text-xl text-foreground mb-3 flex items-center">
                  <span className="text-2xl mr-2">🎯</span> Why This Happens
                </h4>
                <p className="text-lg text-text-light leading-relaxed">
                  {selected.whyItHappens}
                </p>
              </div>

              {/* What You Need */}
              <div>
                <h4 className="font-bold text-xl text-foreground mb-3 flex items-center">
                  <span className="text-2xl mr-2">🛠️</span> What Your Website Needs to Fix This
                </h4>
                <ul className="space-y-3">
                  {selected.whatYouNeed.map((need, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-lg text-foreground">{need}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Real Example */}
              <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
                <h4 className="font-bold text-xl text-foreground mb-3 flex items-center">
                  <span className="text-2xl mr-2">💡</span> Real Example
                </h4>
                <p className="text-lg text-foreground mb-4 leading-relaxed">
                  {selected.realExample}
                </p>
                <p className="text-primary font-bold text-lg">
                  → {selected.result}
                </p>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
                <p className="text-xl text-foreground font-bold mb-2">
                  All of this is included in your $3,500 website build
                </p>
                <p className="text-lg text-text-light mb-6">
                  No monthly fees. No upsells. Just a website that actually fixes your business problems.
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-10 py-5 bg-primary text-white text-lg font-bold rounded-xl hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
                >
                  Get Your Website Fix - $3,500 Flat
                  <svg className="w-6 h-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}