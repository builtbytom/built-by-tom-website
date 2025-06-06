'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Question {
  id: string;
  question: string;
  options: {
    value: string;
    label: string;
    points: { website: number; automation: number; integration: number };
  }[];
}

interface Result {
  type: 'website' | 'automation' | 'integration';
  title: string;
  description: string;
  whatTomWouldDo: string[];
  nextStep: {
    text: string;
    link: string;
  };
}

const questions: Question[] = [
  {
    id: 'biggest-pain',
    question: "What's eating up most of your time right now?",
    options: [
      {
        value: 'website-problems',
        label: 'Dealing with website issues or customers who can\'t find me online',
        points: { website: 3, automation: 0, integration: 0 }
      },
      {
        value: 'manual-tasks',
        label: 'Manually doing the same tasks over and over (scheduling, follow-ups, etc.)',
        points: { website: 0, automation: 3, integration: 0 }
      },
      {
        value: 'juggling-tools',
        label: 'Moving information between different apps and tools',
        points: { website: 0, automation: 1, integration: 3 }
      },
      {
        value: 'all-of-it',
        label: 'Honestly, all of the above',
        points: { website: 1, automation: 1, integration: 1 }
      }
    ]
  },
  {
    id: 'customer-journey',
    question: "When potential customers try to work with you, what usually happens?",
    options: [
      {
        value: 'cant-find-me',
        label: 'They can\'t find me online or my website looks unprofessional',
        points: { website: 3, automation: 0, integration: 0 }
      },
      {
        value: 'contact-chaos',
        label: 'They contact me but things get messy with scheduling or follow-up',
        points: { website: 0, automation: 3, integration: 1 }
      },
      {
        value: 'info-scattered',
        label: 'Their information gets scattered across different places',
        points: { website: 0, automation: 1, integration: 3 }
      },
      {
        value: 'works-fine',
        label: 'Actually, that part works pretty well',
        points: { website: 0, automation: 0, integration: 0 }
      }
    ]
  },
  {
    id: 'daily-frustration',
    question: "What makes you think 'there has to be a better way' most often?",
    options: [
      {
        value: 'website-calls',
        label: 'Getting calls about basic info that should be on my website',
        points: { website: 3, automation: 0, integration: 0 }
      },
      {
        value: 'repetitive-work',
        label: 'Doing the same repetitive tasks that feel like they should be automatic',
        points: { website: 0, automation: 3, integration: 0 }
      },
      {
        value: 'data-entry',
        label: 'Copying the same information into multiple different places',
        points: { website: 0, automation: 1, integration: 3 }
      },
      {
        value: 'time-management',
        label: 'Just never having enough time to focus on the actual work',
        points: { website: 1, automation: 2, integration: 1 }
      }
    ]
  },
  {
    id: 'current-priority',
    question: "If you could wave a magic wand and fix one thing tomorrow, what would it be?",
    options: [
      {
        value: 'better-website',
        label: 'A website that actually helps my business instead of embarrassing me',
        points: { website: 3, automation: 0, integration: 0 }
      },
      {
        value: 'stop-manual-work',
        label: 'Stop doing manual work that computers should handle',
        points: { website: 0, automation: 3, integration: 0 }
      },
      {
        value: 'connect-everything',
        label: 'Make all my business tools actually work together',
        points: { website: 0, automation: 1, integration: 3 }
      },
      {
        value: 'more-time',
        label: 'Just get back 10+ hours per week to focus on what matters',
        points: { website: 1, automation: 2, integration: 2 }
      }
    ]
  }
];

const results: Record<string, Result> = {
  website: {
    type: 'website',
    title: 'Tom should fix your website first',
    description: 'Your biggest wins will come from a website that actually works for your business. You\'re losing customers before they even get a chance to know how good you are.',
    whatTomWouldDo: [
      'Build a professional site that makes you look as good as the work you do',
      'Make sure customers can find you when they search for what you offer',
      'Create clear paths for people to contact you and understand your services',
      'Optimize everything for mobile (where 70%+ of your traffic comes from)'
    ],
    nextStep: {
      text: 'Learn about website solutions',
      link: '/services/website'
    }
  },
  automation: {
    type: 'automation',
    title: 'Tom should automate your manual work first',
    description: 'You\'re spending way too much time on tasks that should run themselves. Getting those hours back will transform how your business feels to run.',
    whatTomWouldDo: [
      'Set up systems to capture and follow up with leads automatically',
      'Automate appointment scheduling and reminders',
      'Create workflows for the repetitive tasks eating your time',
      'Build review and feedback collection that runs itself'
    ],
    nextStep: {
      text: 'See automation solutions',
      link: '/services/automation'
    }
  },
  integration: {
    type: 'integration',
    title: 'Tom should connect your tools first',
    description: 'You have the right pieces, but they\'re not talking to each other. When your tools work together, everything else gets easier.',
    whatTomWouldDo: [
      'Connect your website forms directly to your CRM or spreadsheets',
      'Make your scheduling tool talk to your calendar and payment system',
      'Set up automatic data flow between the apps you already use',
      'Create one central place where you can see what\'s happening'
    ],
    nextStep: {
      text: 'Explore complete system solutions',
      link: '/services/complete-system'
    }
  }
};

export default function TomFixAssessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [scores, setScores] = useState({ website: 0, automation: 0, integration: 0 });
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (questionId: string, optionValue: string, points: { website: number; automation: number; integration: number }) => {
    const newAnswers = { ...answers, [questionId]: optionValue };
    const newScores = {
      website: scores.website + points.website,
      automation: scores.automation + points.automation,
      integration: scores.integration + points.integration
    };

    setAnswers(newAnswers);
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Show result when assessment is complete
      
      setShowResult(true);
    }
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setScores({ website: 0, automation: 0, integration: 0 });
    setShowResult(false);
  };

  const getResult = (): Result => {
    const maxScore = Math.max(scores.website, scores.automation, scores.integration);
    if (scores.automation === maxScore) return results.automation;
    if (scores.integration === maxScore) return results.integration;
    return results.website;
  };

  if (showResult) {
    const result = getResult();
    
    return (
      <section className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full font-bold text-sm mb-6">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Assessment Complete
            </div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
              {result.title}
            </h2>
            <p className="text-xl text-text-light leading-relaxed">
              {result.description}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100 mb-8">
            <h3 className="font-bold text-2xl text-foreground mb-6">
              Here's what Tom would do:
            </h3>
            <ul className="space-y-4 mb-8">
              {result.whatTomWouldDo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-lg text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href={result.nextStep.link}
                className="px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 text-center"
              >
                {result.nextStep.text}
              </Link>
              <button 
                onClick={resetAssessment}
                className="px-8 py-4 border-2 border-gray-300 text-gray-600 font-semibold rounded-xl hover:border-primary hover:text-primary transition-all duration-300"
              >
                Take Assessment Again
              </button>
            </div>
          </div>

          <div className="text-center">
            <p className="text-text-light mb-4">
              Want to talk through your specific situation?
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
            >
              Book a 15-minute call with Tom
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-primary/10 text-primary px-6 py-3 rounded-full font-bold text-sm mb-6">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" clipRule="evenodd" />
            </svg>
            What Should Tom Fix First?
          </div>
          
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
            Quick Assessment
          </h2>
          <p className="text-xl text-text-light">
            4 questions to figure out where you'll get the biggest wins
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between text-sm text-text-light mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100">
          <h3 className="font-bold text-2xl lg:text-3xl text-foreground mb-8 leading-tight">
            {question.question}
          </h3>
          
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(question.id, option.value, option.points)}
                className="w-full text-left p-6 rounded-2xl border-2 border-gray-200 hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
              >
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full border-2 border-gray-300 group-hover:border-primary mr-4 flex-shrink-0 mt-0.5 transition-colors duration-300"></div>
                  <span className="text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                    {option.label}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-text-light">
            This assessment takes about 90 seconds and gives you a personalized action plan
          </p>
        </div>
      </div>
    </section>
  );
}