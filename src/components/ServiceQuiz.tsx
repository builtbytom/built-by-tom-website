'use client';

import { useState } from 'react';
import Link from 'next/link';

interface QuizStep {
  question: string;
  options: {
    text: string;
    value: string;
    icon?: string;
  }[];
}

const quizSteps: QuizStep[] = [
  {
    question: "What's your biggest challenge right now?",
    options: [
      { text: "My website is embarrassing or broken", value: "website", icon: "😳" },
      { text: "I'm drowning in repetitive tasks", value: "automation", icon: "😵" },
      { text: "Everything's a mess", value: "complete", icon: "🔥" },
      { text: "I'm not sure what I need", value: "audit", icon: "🤷" }
    ]
  },
  {
    question: "How much time are you wasting on manual work?",
    options: [
      { text: "Just a few hours a week", value: "low", icon: "⏰" },
      { text: "10+ hours every week", value: "medium", icon: "⏱️" },
      { text: "It's eating my life", value: "high", icon: "💀" },
      { text: "My website is the real problem", value: "website", icon: "🌐" }
    ]
  },
  {
    question: "What's your timeline?",
    options: [
      { text: "Yesterday (ASAP!)", value: "urgent", icon: "🚨" },
      { text: "Next few weeks", value: "soon", icon: "📅" },
      { text: "Planning ahead", value: "planning", icon: "🗓️" },
      { text: "Just exploring options", value: "exploring", icon: "🔍" }
    ]
  }
];

export default function ServiceQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentStep < quizSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const getRecommendation = () => {
    // Simple logic to determine recommendation
    const hasWebsiteIssue = answers.includes('website');
    const hasHighTimeWaste = answers.includes('high') || answers.includes('medium');
    const needsAudit = answers.includes('audit');
    const wantsComplete = answers.includes('complete');

    if (needsAudit || answers.includes('exploring')) {
      return {
        service: 'Website & Systems Review',
        href: '/services/website-audit',
        price: '$297',
        reason: 'You need clarity on what to fix first. This review will show you exactly what needs attention and in what order.',
        icon: '🔍'
      };
    }

    if (wantsComplete || (hasWebsiteIssue && hasHighTimeWaste)) {
      return {
        service: 'Complete Business System',
        href: '/services/complete-system',
        price: '$1,797',
        reason: 'You need a complete overhaul. This package fixes everything at once and saves you $594.',
        icon: '🚀'
      };
    }

    if (hasWebsiteIssue) {
      return {
        service: 'Website Fix',
        href: '/services/website',
        price: '$3,500',
        reason: 'Your website is holding you back. Let\'s build one that actually works for your business.',
        icon: '🌐'
      };
    }

    if (hasHighTimeWaste) {
      return {
        service: 'Business Automation',
        href: '/services/automation',
        price: '$797 per package',
        reason: 'You\'re wasting too much time on repetitive tasks. Automation will give you hours back every week.',
        icon: '🤖'
      };
    }

    // Default
    return {
      service: 'Website & Systems Review',
      href: '/services/website-audit',
      price: '$297',
      reason: 'Let\'s start with a comprehensive review to identify your best path forward.',
      icon: '🔍'
    };
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    const recommendation = getRecommendation();
    
    return (
      <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100 text-center">
        <div className="text-6xl mb-6">{recommendation.icon}</div>
        <h3 className="font-display font-bold text-3xl text-foreground mb-4">
          Your Recommendation:
        </h3>
        <div className="bg-primary/10 rounded-2xl p-6 mb-6">
          <h4 className="font-bold text-2xl text-primary mb-2">{recommendation.service}</h4>
          <p className="text-3xl font-bold text-foreground">{recommendation.price}</p>
        </div>
        <p className="text-lg text-text-light mb-8 max-w-2xl mx-auto">
          {recommendation.reason}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href={recommendation.href}
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
          >
            Learn More About This Solution
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <button
            onClick={resetQuiz}
            className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
          >
            Start Over
          </button>
        </div>
      </div>
    );
  }

  const step = quizSteps[currentStep];
  const progress = ((currentStep + 1) / quizSteps.length) * 100;

  return (
    <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-text-light mb-2">
          <span>Step {currentStep + 1} of {quizSteps.length}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <h3 className="font-display font-bold text-2xl lg:text-3xl text-foreground mb-8 text-center">
        {step.question}
      </h3>

      {/* Options */}
      <div className="grid md:grid-cols-2 gap-4">
        {step.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option.value)}
            className="group bg-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-primary hover:bg-primary/5 transition-all duration-300 text-left"
          >
            <div className="flex items-center">
              {option.icon && (
                <span className="text-3xl mr-4">{option.icon}</span>
              )}
              <span className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                {option.text}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Back Button */}
      {currentStep > 0 && (
        <button
          onClick={() => {
            setCurrentStep(currentStep - 1);
            setAnswers(answers.slice(0, -1));
          }}
          className="mt-6 text-text-light hover:text-primary transition-colors flex items-center mx-auto"
        >
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
      )}
    </div>
  );
}