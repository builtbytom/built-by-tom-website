'use client';

import { useState } from 'react';
import Link from 'next/link';

interface QuizAnswer {
  questionId: string;
  answer: string;
}

interface QuizQuestion {
  id: string;
  question: string;
  educationalTip: string;
  options: {
    value: string;
    label: string;
    icon?: string;
  }[];
}

const questions: QuizQuestion[] = [
  {
    id: 'mobile',
    question: 'Is your website easy to use on phones?',
    educationalTip: 'Over 60% of web traffic comes from mobile devices. Google also prioritizes mobile-friendly sites in search results.',
    options: [
      { value: 'yes', label: 'Yes, works great', icon: '📱' },
      { value: 'sort-of', label: 'Sort of, but not perfect', icon: '🤔' },
      { value: 'no', label: 'No, it\'s frustrating', icon: '😤' },
      { value: 'not-sure', label: 'I\'m not sure', icon: '🤷' }
    ]
  },
  {
    id: 'speed',
    question: 'How fast does your website load?',
    educationalTip: '53% of visitors leave if a page takes more than 3 seconds to load. Every second matters for keeping customers.',
    options: [
      { value: 'fast', label: 'Lightning fast (under 3 seconds)', icon: '⚡' },
      { value: 'medium', label: 'Pretty quick (3-5 seconds)', icon: '⏱️' },
      { value: 'slow', label: 'Kind of slow (over 5 seconds)', icon: '🐌' },
      { value: 'not-sure', label: 'I haven\'t checked', icon: '🤷' }
    ]
  },
  {
    id: 'contact',
    question: 'Can customers easily contact or book with you?',
    educationalTip: 'Businesses with online booking save an average of 5+ hours per week on phone tag and scheduling.',
    options: [
      { value: 'automated', label: 'Yes, they can book/contact online 24/7', icon: '✨' },
      { value: 'manual', label: 'Yes, but I handle everything manually', icon: '📞' },
      { value: 'difficult', label: 'It\'s complicated to reach me', icon: '😕' },
      { value: 'no', label: 'No easy way to book or contact', icon: '❌' }
    ]
  },
  {
    id: 'content',
    question: 'When did you last update your website content?',
    educationalTip: 'Fresh content helps with SEO and shows customers you\'re active. Outdated info can cost you business.',
    options: [
      { value: 'recent', label: 'This month', icon: '🎯' },
      { value: 'few-months', label: 'A few months ago', icon: '📅' },
      { value: 'year', label: 'This year sometime', icon: '🗓️' },
      { value: 'forgotten', label: 'I can\'t remember', icon: '😬' }
    ]
  },
  {
    id: 'analytics',
    question: 'Do you know who visits your website?',
    educationalTip: 'Analytics help you understand your customers and make smarter business decisions. It\'s like having a 24/7 focus group.',
    options: [
      { value: 'detailed', label: 'Yes, I track everything', icon: '📊' },
      { value: 'basic', label: 'I have basic visitor counts', icon: '📈' },
      { value: 'no', label: 'No tracking at all', icon: '🚫' },
      { value: 'not-sure', label: 'Not sure what I have', icon: '❓' }
    ]
  },
  {
    id: 'problems',
    question: 'Does your website ever break or have issues?',
    educationalTip: 'Website downtime costs small businesses an average of $427 per minute. Reliable hosting and maintenance matter!',
    options: [
      { value: 'never', label: 'Never has problems', icon: '💪' },
      { value: 'rarely', label: 'Occasionally acts up', icon: '😐' },
      { value: 'often', label: 'Breaks too often', icon: '😰' },
      { value: 'constantly', label: 'Always something wrong', icon: '🆘' }
    ]
  },
  {
    id: 'effectiveness',
    question: 'Is your website bringing in new business?',
    educationalTip: 'Your website should be your hardest-working employee - bringing in leads 24/7 without coffee breaks.',
    options: [
      { value: 'excellent', label: 'Yes, consistently', icon: '🎉' },
      { value: 'some', label: 'Some, but could be better', icon: '📈' },
      { value: 'minimal', label: 'Very little', icon: '📉' },
      { value: 'none', label: 'Not at all', icon: '😔' }
    ]
  }
];

function calculateScore(answers: QuizAnswer[]): number {
  const scores: Record<string, number> = {
    // Mobile scores
    'mobile-yes': 100,
    'mobile-sort-of': 60,
    'mobile-no': 20,
    'mobile-not-sure': 40,
    // Speed scores
    'speed-fast': 100,
    'speed-medium': 70,
    'speed-slow': 30,
    'speed-not-sure': 50,
    // Contact scores
    'contact-automated': 100,
    'contact-manual': 60,
    'contact-difficult': 30,
    'contact-no': 10,
    // Content scores
    'content-recent': 100,
    'content-few-months': 70,
    'content-year': 40,
    'content-forgotten': 20,
    // Analytics scores
    'analytics-detailed': 100,
    'analytics-basic': 70,
    'analytics-no': 30,
    'analytics-not-sure': 40,
    // Problems scores
    'problems-never': 100,
    'problems-rarely': 80,
    'problems-often': 40,
    'problems-constantly': 10,
    // Effectiveness scores
    'effectiveness-excellent': 100,
    'effectiveness-some': 70,
    'effectiveness-minimal': 40,
    'effectiveness-none': 20,
  };

  const totalScore = answers.reduce((sum, answer) => {
    const key = `${answer.questionId}-${answer.answer}`;
    return sum + (scores[key] || 0);
  }, 0);

  return Math.round(totalScore / answers.length);
}

function getActionItems(answers: QuizAnswer[]): string[] {
  const actions: string[] = [];
  
  answers.forEach(answer => {
    const key = `${answer.questionId}-${answer.answer}`;
    
    // Mobile actions
    if (key === 'mobile-no' || key === 'mobile-sort-of') {
      actions.push('Make your website mobile-responsive. This is costing you customers every day.');
    }
    if (key === 'mobile-not-sure') {
      actions.push('Test your website on your phone right now. If it\'s hard to use, your customers are struggling too.');
    }
    
    // Speed actions
    if (key === 'speed-slow') {
      actions.push('Optimize your images and reduce page load time. Compress large photos and remove unnecessary plugins.');
    }
    if (key === 'speed-not-sure') {
      actions.push('Check your site speed at PageSpeed Insights. If it\'s over 3 seconds, you\'re losing visitors.');
    }
    
    // Contact actions
    if (key === 'contact-no' || key === 'contact-difficult') {
      actions.push('Add clear contact information and consider online booking. Make it easy for money to find you.');
    }
    if (key === 'contact-manual') {
      actions.push('Automate your booking process. You\'re wasting hours on phone tag that could be spent on your business.');
    }
    
    // Content actions
    if (key === 'content-year' || key === 'content-forgotten') {
      actions.push('Update your content this week. Add new photos, update prices, and share what makes you special.');
    }
    
    // Analytics actions
    if (key === 'analytics-no' || key === 'analytics-not-sure') {
      actions.push('Install Google Analytics (it\'s free). You can\'t improve what you don\'t measure.');
    }
    
    // Problem actions
    if (key === 'problems-often' || key === 'problems-constantly') {
      actions.push('Fix your hosting situation immediately. Downtime is literally costing you money.');
    }
    
    // Effectiveness actions
    if (key === 'effectiveness-none' || key === 'effectiveness-minimal') {
      actions.push('Your website needs a strategy overhaul. It should be generating leads, not just sitting there.');
    }
  });
  
  // Return top 3-4 most important actions
  return actions.slice(0, 4);
}

export default function WebsiteHealthQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const [requestingReport, setRequestingReport] = useState(false);
  const [reportRequested, setReportRequested] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, { questionId: questions[currentQuestion].id, answer }];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      // Show calculating state immediately when quiz is complete
      setIsCalculating(true);
      setTimeout(() => {
        setIsCalculating(false);
        setShowResults(true);
      }, 800);
    }
  };

  const handleRequestReport = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setRequestingReport(true);
    
    // In production, this would call your N8N webhook
    // For now, we'll simulate the request
    try {
      // await fetch('/api/request-report', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, answers })
      // });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setReportRequested(true);
    } catch (error) {
      console.error('Error requesting report:', error);
    } finally {
      setRequestingReport(false);
    }
  };

  const score = showResults ? calculateScore(answers) : 0;
  const actionItems = showResults ? getActionItems(answers) : [];

  // Show calculating animation when quiz is complete
  if (isCalculating) {
    return (
      <div className="relative bg-gradient-to-br from-teal-50 via-purple-50 to-indigo-50 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border-2 border-teal-200 overflow-hidden">
        <div className="relative max-w-2xl mx-auto text-center py-12">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full animate-spin">
              <div className="w-16 h-16 bg-white rounded-full"></div>
            </div>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-foreground mb-4">
            Calculating Your Results...
          </h2>
          <p className="text-text-light text-lg">
            Analyzing your answers to give you personalized recommendations
          </p>
        </div>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="relative bg-gradient-to-br from-teal-50 via-purple-50 to-indigo-50 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border-2 border-teal-200 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-teal-400/30 to-blue-500/30 rounded-full blur-3xl -mr-20 -mt-20 animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-400/30 to-indigo-500/30 rounded-full blur-2xl -ml-16 -mb-16 animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Score Display */}
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-6 sm:mb-8">
              Your Website Health Score
            </h2>
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 mx-auto mb-6 sm:mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl animate-pulse"></div>
              <svg className="relative w-full h-full transform -rotate-90">
                <circle
                  cx="50%"
                  cy="50%"
                  r="44%"
                  stroke="currentColor"
                  strokeWidth="16"
                  fill="none"
                  className="text-gray-200"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r="44%"
                  stroke="currentColor"
                  strokeWidth="16"
                  fill="none"
                  strokeDasharray={`${score * 2.76} 276`}
                  className={
                    score >= 80 ? 'text-green-500' :
                    score >= 60 ? 'text-yellow-500' :
                    'text-red-500'
                  }
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl sm:text-6xl font-bold text-foreground">{score}</span>
                <span className="text-xs sm:text-sm font-medium text-text-light">out of 100</span>
              </div>
            </div>
            <div className={`inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base text-white shadow-lg ${
              score >= 80 ? 'bg-gradient-to-r from-green-500 to-green-600' :
              score >= 60 ? 'bg-gradient-to-r from-yellow-500 to-orange-500' :
              'bg-gradient-to-r from-red-500 to-red-600'
            }`}>
              {score >= 80 ? '🎆 Great job! Your website is in good shape.' :
               score >= 60 ? '🔧 Not bad, but there\'s room for improvement.' :
               '⚠️ Your website needs attention to perform better.'}
            </div>
          </div>

          {/* Action Items */}
          <div className="mb-8 sm:mb-10">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground mb-4 sm:mb-6 text-center">
              Here's What You Can Do Today:
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {actionItems.map((action, index) => (
                <div key={index} className="flex items-start bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-secondary rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 text-white font-bold text-sm sm:text-base shadow-sm">
                    {index + 1}
                  </div>
                  <p className="text-sm sm:text-base text-foreground leading-relaxed flex-grow">{action}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Report Request */}
          {!reportRequested ? (
            <div className="relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-xl border-2 border-purple-200">
              {/* Automation Badge - Fixed positioning */}
              <div className="absolute -top-5 -right-5 sm:-top-3 sm:-right-3">
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg flex items-center animate-pulse" style={{ animationDuration: '2s' }}>
                  <span className="mr-2">🤖</span>
                  <span className="hidden sm:inline">Powered by Custom Automation</span>
                  <span className="sm:hidden">Automated!</span>
                </div>
              </div>
              
              <h3 className="font-display font-bold text-xl sm:text-2xl text-foreground mb-4 mt-8 sm:mt-4">
                Want the Full Technical Analysis?
              </h3>
              
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-4 mb-6 border border-purple-200">
                <p className="text-sm font-semibold text-purple-800 flex items-center">
                  <span className="text-2xl mr-3">⚡</span>
                  This whole quiz you just took? It's powered by custom automation I built!
                </p>
              </div>
              
              <p className="text-text-light mb-6">
                Just like the quiz instantly analyzed your answers, I built a system that scans your actual website 
                and checks 25+ different factors. Enter your email below, and my automation will analyze your site 
                and deliver a detailed report in 2 minutes.
              </p>
              
              <p className="text-sm font-semibold text-foreground mb-6">
                🔧 <span className="underline">The same kind of automation I can build for YOUR business.</span>
              </p>
              <form onSubmit={handleRequestReport} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                />
                <button
                  type="submit"
                  disabled={requestingReport}
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {requestingReport ? 'Preparing Your Report...' : 'Send Me the Full Report'}
                </button>
              </form>
              <p className="text-sm text-text-light mt-4 text-center">
                Your report will include specific recommendations for your website based on real data.
              </p>
            </div>
          ) : (
            <div className="bg-green-50 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                Check Your Inbox!
              </h3>
              <p className="text-text-light mb-6">
                Your detailed website analysis is on its way and should arrive in the next 2 minutes. 
                It includes specific technical insights and actionable recommendations.
              </p>
              <p className="text-sm text-text-light">
                Didn't get it? Check your spam folder or{' '}
                <Link href="/contact" className="text-primary hover:underline">
                  let me know
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = Math.round(((currentQuestion + 1) / questions.length) * 100);

  return (
    <div className="relative bg-gradient-to-br from-teal-50 via-purple-50 to-indigo-50 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border-2 border-teal-200 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-teal-400/30 to-blue-500/30 rounded-full blur-3xl -mr-20 -mt-20 animate-pulse" style={{ animationDuration: '4s' }}></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-400/30 to-indigo-500/30 rounded-full blur-2xl -ml-16 -mb-16 animate-pulse" style={{ animationDuration: '3s', animationDelay: '1s' }}></div>
      
      <div className="relative max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-bold text-foreground bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">
              {progress}% complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
            <div 
              className="bg-gradient-to-r from-teal-500 via-purple-500 to-indigo-500 h-3 rounded-full transition-all duration-700 shadow-md"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="mb-8 sm:mb-10">
          <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4 sm:mb-6 text-center leading-tight">
            {question.question}
          </h2>
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-4 sm:p-5 mb-6 sm:mb-8 border-2 border-yellow-300 shadow-md">
            <p className="text-sm lg:text-base text-foreground flex items-start">
              <span className="text-xl sm:text-2xl mr-2 sm:mr-3 flex-shrink-0">💡</span>
              <span><span className="font-bold">Did you know?</span> {question.educationalTip}</span>
            </p>
          </div>
        </div>

        {/* Options */}
        <div className="grid gap-3 sm:gap-4">
          {question.options.map((option, index) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.value)}
              className="group relative bg-white hover:bg-gradient-to-r hover:from-teal-50 hover:to-purple-50 rounded-xl sm:rounded-2xl p-4 sm:p-5 text-left shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-purple-300 transform hover:scale-[1.02] hover:-translate-y-0.5"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center">
                {option.icon && (
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-100 to-blue-100 rounded-lg sm:rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:from-teal-200 group-hover:to-purple-200 transition-all duration-300 border border-teal-200 group-hover:border-purple-300 flex-shrink-0">
                    <span className="text-xl sm:text-2xl">{option.icon}</span>
                  </div>
                )}
                <span className="font-semibold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors flex-grow">
                  {option.label}
                </span>
                <svg className="w-5 h-5 ml-2 sm:ml-auto text-gray-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}