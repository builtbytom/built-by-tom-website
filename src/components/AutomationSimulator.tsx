'use client';

import { useState } from 'react';
import Link from 'next/link';

interface BusinessType {
  id: string;
  name: string;
  icon: string;
  customer: string;
  service: string;
  email: string;
  smsTime: string;
  reviewText: string;
}

const businessTypes: BusinessType[] = [
  {
    id: 'salon',
    name: 'Hair Salon',
    icon: '💇‍♀️',
    customer: 'Sarah Johnson',
    service: '2pm Haircut & Color',
    email: 'sarah.j@email.com',
    smsTime: 'Tomorrow at 1pm',
    reviewText: 'How was your haircut experience?'
  },
  {
    id: 'auto',
    name: 'Auto Shop',
    icon: '🚗',
    customer: 'Mike Chen',
    service: 'Oil Change',
    email: 'mchen@email.com',
    smsTime: 'Tomorrow at 9am',
    reviewText: 'How was your service at our shop?'
  },
  {
    id: 'landscaper',
    name: 'Landscaper',
    icon: '🌿',
    customer: 'Lisa Thompson',
    service: 'Weekly Lawn Service',
    email: 'lisa.t@email.com',
    smsTime: 'Tomorrow at 8am',
    reviewText: 'How did we do with your lawn?'
  }
];

export default function AutomationSimulator() {
  const [isRunning, setIsRunning] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState<BusinessType>(businessTypes[0]);
  const [currentStep, setCurrentStep] = useState(0);
  const [showEditableData, setShowEditableData] = useState(false);
  const [customData, setCustomData] = useState({
    customer: selectedBusiness.customer,
    service: selectedBusiness.service
  });

  const steps = [
    { id: 'start', title: 'New Booking Received', icon: '📥', duration: 1000 },
    { id: 'crm', title: 'Added to CRM', icon: '💾', duration: 1500 },
    { id: 'email', title: 'Confirmation Email Sent', icon: '📧', duration: 2000 },
    { id: 'calendar', title: 'Calendar Blocked', icon: '📅', duration: 1500 },
    { id: 'sms', title: 'SMS Reminder Scheduled', icon: '📱', duration: 1500 },
    { id: 'review', title: 'Review Request Queued', icon: '⭐', duration: 1500 },
    { id: 'complete', title: 'Automation Complete!', icon: '🎉', duration: 2000 }
  ];

  const runSimulation = async () => {
    setIsRunning(true);
    setCurrentStep(0);

    for (let i = 0; i < steps.length; i++) {
      setCurrentStep(i);
      await new Promise(resolve => setTimeout(resolve, steps[i].duration));
    }

    setTimeout(() => {
      setIsRunning(false);
      setCurrentStep(0);
    }, 2000);
  };

  const handleBusinessChange = (business: BusinessType) => {
    setSelectedBusiness(business);
    setCustomData({
      customer: business.customer,
      service: business.service
    });
  };

  const getStepContent = () => {
    const step = steps[currentStep];
    
    switch(step.id) {
      case 'email':
        return (
          <div className="bg-white rounded-lg p-4 shadow-lg max-w-sm mx-auto animate-slide-up">
            <div className="text-sm text-gray-600 mb-2">To: {selectedBusiness.email}</div>
            <div className="font-semibold text-gray-800 mb-2">Appointment Confirmed! ✅</div>
            <div className="text-sm text-gray-700">
              Hi {customData.customer.split(' ')[0]},<br/><br/>
              Your {customData.service} is confirmed.<br/>
              We'll see you soon!<br/><br/>
              - {selectedBusiness.name} Team
            </div>
          </div>
        );
      
      case 'sms':
        return (
          <div className="bg-gradient-to-b from-gray-50 to-gray-100 rounded-2xl p-4 shadow-lg max-w-xs mx-auto animate-slide-up">
            <div className="bg-white rounded-xl p-3 mb-2">
              <div className="text-xs text-gray-500 mb-1">{selectedBusiness.smsTime}</div>
              <div className="text-sm text-gray-800">
                Reminder: {customData.service} tomorrow! Reply C to cancel or R to reschedule.
              </div>
            </div>
            <div className="text-xs text-center text-gray-500">SMS automatically scheduled</div>
          </div>
        );
      
      case 'review':
        return (
          <div className="bg-white rounded-lg p-4 shadow-lg max-w-sm mx-auto animate-slide-up">
            <div className="flex items-center mb-3">
              <div className="text-2xl mr-2">⭐⭐⭐⭐⭐</div>
            </div>
            <div className="text-sm text-gray-700">
              {selectedBusiness.reviewText}
            </div>
            <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm w-full">
              Leave a Review
            </button>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-4">
            See Automation in Action
          </h2>
          <p className="text-xl text-text-light max-w-2xl mx-auto">
            Watch how a single booking triggers an entire workflow - automatically.
          </p>
        </div>

        {/* Business Type Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {businessTypes.map((business) => (
            <button
              key={business.id}
              onClick={() => handleBusinessChange(business)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                selectedBusiness.id === business.id
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-primary'
              }`}
            >
              <span className="text-2xl mr-2">{business.icon}</span>
              {business.name}
            </button>
          ))}
        </div>

        {/* Editable Data Toggle */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowEditableData(!showEditableData)}
            className="text-sm text-primary hover:underline"
          >
            {showEditableData ? 'Hide' : 'Customize'} Customer Details
          </button>
          
          {showEditableData && (
            <div className="mt-4 max-w-md mx-auto grid grid-cols-2 gap-4">
              <input
                type="text"
                value={customData.customer}
                onChange={(e) => setCustomData({...customData, customer: e.target.value})}
                className="px-4 py-2 border rounded-lg text-sm"
                placeholder="Customer name"
              />
              <input
                type="text"
                value={customData.service}
                onChange={(e) => setCustomData({...customData, service: e.target.value})}
                className="px-4 py-2 border rounded-lg text-sm"
                placeholder="Service"
              />
            </div>
          )}
        </div>

        {/* Simulation Container */}
        <div className="relative bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
          {/* Progress Steps */}
          <div className="flex justify-between items-center mb-12 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex flex-col items-center transition-all duration-500 ${
                  index <= currentStep && isRunning ? 'opacity-100 scale-100' : 'opacity-30 scale-90'
                }`}
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-2xl mb-2 transition-all duration-500 ${
                  index === currentStep && isRunning
                    ? 'bg-primary text-white shadow-lg animate-pulse'
                    : index < currentStep && isRunning
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200'
                }`}>
                  {step.icon}
                </div>
                <span className="text-xs sm:text-sm font-medium text-center hidden sm:block">
                  {step.title}
                </span>
              </div>
            ))}
          </div>

          {/* Connection Lines */}
          <div className="absolute top-16 left-0 right-0 h-0.5 bg-gray-200 max-w-4xl mx-auto" style={{ width: 'calc(100% - 4rem)' }}>
            <div 
              className="h-full bg-primary transition-all duration-500"
              style={{ 
                width: isRunning ? `${(currentStep / (steps.length - 1)) * 100}%` : '0%',
                transition: 'width 1s ease-out'
              }}
            />
          </div>

          {/* Content Area */}
          <div className="min-h-[200px] flex items-center justify-center">
            {!isRunning ? (
              <button
                onClick={runSimulation}
                className="group px-12 py-6 bg-primary text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="flex items-center text-lg">
                  <span className="text-3xl mr-4">🚀</span>
                  Start Automation Demo
                  <svg className="w-6 h-6 ml-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            ) : (
              <div className="text-center">
                <h3 className="font-bold text-2xl text-foreground mb-4">
                  {steps[currentStep].title}
                </h3>
                {getStepContent()}
              </div>
            )}
          </div>

          {/* Replay Button */}
          {!isRunning && currentStep === 0 && (
            <div className="text-center mt-8">
              <p className="text-sm text-gray-600">
                This happens automatically for every booking. No manual work needed.
              </p>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-foreground mb-6">
            This same automation can work for YOUR business.
          </p>
          <Link 
            href="#automation-packages"
            className="inline-flex items-center px-8 py-4 bg-secondary text-white font-bold rounded-xl hover:bg-secondary/90 transition-all"
          >
            See Automation Packages
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}