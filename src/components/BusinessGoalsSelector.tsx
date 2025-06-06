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
    id: 'invisible',
    icon: '🚫',
    challenge: "Nobody can find me online",
    whyItHappens: "Your business is invisible because Google can't understand what you do, where you are, or why you're different. You're losing to competitors who just show up better.",
    whatYouNeed: [
      "Local SEO that actually works",
      "Google Business Profile optimization",
      "Content that answers what people search for",
      "Mobile-first design (where everyone searches)"
    ],
    realExample: "Carrie's cleaning service went from 2 calls/month to 3-4 calls/week after we fixed her local SEO. She now shows up for 'house cleaning near me' searches.",
    result: "Start showing up when people look for what you do"
  },
  {
    id: 'drowning',
    icon: '📞',
    challenge: "I'm drowning in manual tasks",
    whyItHappens: "You're the booking system, the reminder service, the follow-up department, and the review collector. Every minute on admin is a minute not making money.",
    whatYouNeed: [
      "Online booking that runs itself",
      "Automated appointment reminders",
      "Form submissions that go somewhere useful",
      "Integration with tools you already use"
    ],
    realExample: "Mike's contracting business saved 10+ hours/week with automated quote requests and follow-ups. He books more jobs by responding faster than competitors.",
    result: "Get your time back while growing your business"
  },
  {
    id: 'ghosted',
    icon: '💸',
    challenge: "Customers ghost me after quotes",
    whyItHappens: "People are shopping around, comparing prices, and forgetting who you are. By the time they decide, they've lost your quote or found someone who followed up.",
    whatYouNeed: [
      "Instant quote calculators",
      "Automated follow-up sequences",
      "Clear service packages with pricing",
      "Trust signals (reviews, work examples)"
    ],
    realExample: "A landscaper started converting 40% more quotes after adding package pricing and automatic 'any questions?' follow-ups. People buy when it's easy.",
    result: "Turn tire-kickers into paying customers"
  },
  {
    id: 'confusing',
    icon: '🤔',
    challenge: "People don't understand what I offer",
    whyItHappens: "Your services make perfect sense to you, but customers are confused. They can't buy what they don't understand, so they go with whoever explains it better.",
    whatYouNeed: [
      "Clear service descriptions with prices",
      "Before/after examples",
      "FAQ sections that actually help",
      "Simple navigation (find what they need fast)"
    ],
    realExample: "A detailing shop went from explaining packages all day to having customers book the right service online. Clear descriptions = fewer questions, more sales.",
    result: "Stop explaining, start selling"
  },
  {
    id: 'unprofessional',
    icon: '😤',
    challenge: "My competitors look more professional",
    whyItHappens: "First impressions happen in 3 seconds online. If your site looks like 2010 or doesn't work on phones, customers assume your business is outdated too.",
    whatYouNeed: [
      "Modern, mobile-first design",
      "Professional photography",
      "Social proof (reviews & testimonials)",
      "Fast loading (no patience for slow sites)"
    ],
    realExample: "A plumber's new site started converting 3x more visitors. Same services, same prices—just looked like the pro he actually is.",
    result: "Look as good as the work you do"
  },
  {
    id: 'speed',
    icon: '📱',
    challenge: "I lose business to whoever answers fastest",
    whyItHappens: "When people need something, they call/message everyone and go with whoever responds first. While you're busy working, faster competitors win your customers.",
    whatYouNeed: [
      "Instant text-back for missed calls",
      "Chat that captures leads 24/7",
      "Online booking (no calls needed)",
      "Automated 'we got your message' responses"
    ],
    realExample: "An HVAC company captures leads at 11PM with automated 'we'll call you first thing' texts. They book morning appointments before competitors even see the lead.",
    result: "Be first, even when you're busy"
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
              <div className="text-center pt-4">
                <p className="text-xl text-foreground font-semibold mb-6">
                  Ready to fix this problem once and for all?
                </p>
                <a 
                  href="/contact" 
                  className="inline-flex items-center px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
                >
                  Let's Build Your Solution
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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