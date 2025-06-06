'use client';

import { useState } from 'react';

export default function TimeSavedCalculator() {
  const [leads, setLeads] = useState(15);
  const [followUpTime, setFollowUpTime] = useState(3);
  const [missedAppointments, setMissedAppointments] = useState(5);
  
  // Calculate time wasted
  const weeklyTimeWasted = (leads * followUpTime * 0.15) + (missedAppointments * 0.5);
  const monthlyTimeWasted = weeklyTimeWasted * 4.3;
  const yearlyTimeWasted = monthlyTimeWasted * 12;
  
  // Calculate money lost (assuming $75/hour for business owner time)
  const monthlyMoneyLost = monthlyTimeWasted * 75;
  const paybackWeeks = 797 / (weeklyTimeWasted * 75);

  return (
    <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center bg-accent/10 text-accent px-6 py-2 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Interactive Calculator
          </div>
          <h3 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Let&apos;s See How Much Time You&apos;re Burning
          </h3>
          <p className="text-lg text-text-light">
            Move the sliders to match your business. Watch the hours add up.
          </p>
        </div>

        <div className="space-y-8 mb-10">
          {/* Leads Slider */}
          <div>
            <div className="flex justify-between items-baseline mb-3">
              <label className="font-bold text-lg text-foreground">
                How many leads do you get per week?
              </label>
              <span className="text-2xl font-bold text-primary">{leads}</span>
            </div>
            <input
              type="range"
              min="5"
              max="50"
              value={leads}
              onChange={(e) => setLeads(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
              style={{
                background: `linear-gradient(to right, #D4A574 0%, #D4A574 ${((leads - 5) / 45) * 100}%, #E5E7EB ${((leads - 5) / 45) * 100}%, #E5E7EB 100%)`
              }}
            />
            <div className="flex justify-between text-sm text-text-light mt-1">
              <span>Just starting</span>
              <span>Crushing it</span>
            </div>
          </div>

          {/* Follow-up Time Slider */}
          <div>
            <div className="flex justify-between items-baseline mb-3">
              <label className="font-bold text-lg text-foreground">
                Minutes spent per lead (emails, calls, texts)?
              </label>
              <span className="text-2xl font-bold text-primary">{followUpTime} min</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={followUpTime}
              onChange={(e) => setFollowUpTime(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #D4A574 0%, #D4A574 ${((followUpTime - 1) / 9) * 100}%, #E5E7EB ${((followUpTime - 1) / 9) * 100}%, #E5E7EB 100%)`
              }}
            />
            <div className="flex justify-between text-sm text-text-light mt-1">
              <span>Quick text</span>
              <span>Full convo</span>
            </div>
          </div>

          {/* Missed Appointments Slider */}
          <div>
            <div className="flex justify-between items-baseline mb-3">
              <label className="font-bold text-lg text-foreground">
                No-shows or reschedules per month?
              </label>
              <span className="text-2xl font-bold text-primary">{missedAppointments}</span>
            </div>
            <input
              type="range"
              min="0"
              max="20"
              value={missedAppointments}
              onChange={(e) => setMissedAppointments(Number(e.target.value))}
              className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #D4A574 0%, #D4A574 ${(missedAppointments / 20) * 100}%, #E5E7EB ${(missedAppointments / 20) * 100}%, #E5E7EB 100%)`
              }}
            />
            <div className="flex justify-between text-sm text-text-light mt-1">
              <span>Lucky you</span>
              <span>Nightmare</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 mb-8">
          <div className="text-center mb-6">
            <p className="text-lg text-foreground mb-2">Right now, you&apos;re losing:</p>
            <div className="text-5xl font-bold text-red-600 mb-2">{monthlyTimeWasted.toFixed(0)} hours</div>
            <p className="text-lg text-text-light">every single month</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white/80 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-foreground">${monthlyMoneyLost.toFixed(0)}</div>
              <p className="text-text-light">Worth of your time gone</p>
            </div>
            <div className="bg-white/80 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-foreground">{yearlyTimeWasted.toFixed(0)} hrs</div>
              <p className="text-text-light">That&apos;s {(yearlyTimeWasted/40).toFixed(0)} work weeks/year!</p>
            </div>
          </div>

          <div className="text-center text-lg text-foreground">
            <p className="font-semibold">Think about it:</p>
            <p>What could you do with an extra {(monthlyTimeWasted/8).toFixed(0)} full days every month?</p>
          </div>
        </div>

        {/* The Good News */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
          <h4 className="font-bold text-2xl text-foreground mb-4 text-center">
            Here&apos;s the Good News
          </h4>
          <div className="space-y-4 mb-6">
            <div className="flex items-start">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-foreground">
                <span className="font-semibold">Instant lead responses</span> - They text, they get an answer in 30 seconds. While you keep working.
              </p>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-foreground">
                <span className="font-semibold">Automatic appointment reminders</span> - No more no-shows eating your schedule.
              </p>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-foreground">
                <span className="font-semibold">Smart follow-ups</span> - Quotes, check-ins, review requests. All automatic.
              </p>
            </div>
          </div>
          
          <div className="bg-accent/10 rounded-xl p-6 text-center">
            <p className="text-xl font-bold text-foreground mb-2">
              At this rate, automation pays for itself in
            </p>
            <p className="text-4xl font-bold text-accent">
              {paybackWeeks < 1 ? 'Less than a week' : `${paybackWeeks.toFixed(0)} weeks`}
            </p>
            <p className="text-text-light mt-2">
              Then it&apos;s pure time savings forever
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 24px;
          height: 24px;
          background: #D4A574;
          cursor: pointer;
          border-radius: 50%;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
          transition: all 0.2s;
        }
        
        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          background: #1B4D3E;
        }
        
        input[type="range"]::-moz-range-thumb {
          width: 24px;
          height: 24px;
          background: #D4A574;
          cursor: pointer;
          border-radius: 50%;
          border: none;
          box-shadow: 0 2px 6px rgba(0,0,0,0.2);
          transition: all 0.2s;
        }
        
        input[type="range"]::-moz-range-thumb:hover {
          transform: scale(1.2);
          background: #1B4D3E;
        }
      `}</style>
    </div>
  );
}