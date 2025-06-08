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

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, { questionId: questions[currentQuestion].id, answer }];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      setTimeout(() => setShowResults(true), 300);
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

  if (showResults) {
    return (
      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 lg:p-12 border border-primary/20">
        <div className="max-w-3xl mx-auto">
          {/* Score Display */}
          <div className="text-center mb-8">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Your Website Health Score
            </h2>
            <div className="relative w-32 h-32 mx-auto mb-6">
              <svg className="w-32 h-32 transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  className="text-gray-200"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={`${score * 3.51} 351.86`}
                  className={
                    score >= 80 ? 'text-green-500' :
                    score >= 60 ? 'text-yellow-500' :
                    'text-red-500'
                  }
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-foreground">{score}</span>
              </div>
            </div>
            <p className="text-lg text-text-light">
              {score >= 80 ? 'Great job! Your website is in good shape.' :
               score >= 60 ? 'Not bad, but there\'s room for improvement.' :
               'Your website needs attention to perform better.'}
            </p>
          </div>

          {/* Action Items */}
          <div className="mb-10">
            <h3 className="font-display font-bold text-2xl text-foreground mb-6">
              Here's What You Can Do Today:
            </h3>
            <div className="space-y-4">
              {actionItems.map((action, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-0.5">
                    <span className="text-accent font-bold">{index + 1}</span>
                  </div>
                  <p className="text-text-light leading-relaxed">{action}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Report Request */}
          {!reportRequested ? (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-display font-bold text-2xl text-foreground mb-4">
                Want the Full Technical Analysis?
              </h3>
              <p className="text-text-light mb-6">
                I built an automation that scans your website and checks 25+ different factors including 
                performance, SEO, accessibility, and security. I'll have a detailed report in your inbox 
                in 2 minutes - no sales pitch, just helpful information you can use whether you work with me or not.
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
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 lg:p-12 border border-primary/20">
      <div className="max-w-2xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-text-light">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-text-light">
              {progress}% complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h2 className="font-display font-bold text-2xl lg:text-3xl text-foreground mb-4">
            {question.question}
          </h2>
          <div className="bg-sage-light/20 rounded-xl p-4 mb-6">
            <p className="text-sm text-text-light">
              <span className="font-semibold">💡 Did you know?</span> {question.educationalTip}
            </p>
          </div>
        </div>

        {/* Options */}
        <div className="grid gap-3">
          {question.options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleAnswer(option.value)}
              className="group bg-white rounded-xl p-4 text-left hover:shadow-lg transition-all duration-200 border-2 border-transparent hover:border-primary/20 transform hover:scale-[1.02]"
            >
              <div className="flex items-center">
                {option.icon && (
                  <span className="text-2xl mr-4">{option.icon}</span>
                )}
                <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {option.label}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}