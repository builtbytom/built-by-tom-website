'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function RevenueLeakCalculator() {
  // Form inputs
  const [monthlyVisitors, setMonthlyVisitors] = useState(500);
  const [contactRate, setContactRate] = useState(2);
  const [missedInquiries, setMissedInquiries] = useState(3);
  const [mobileWorks, setMobileWorks] = useState<'yes' | 'no' | 'not-sure'>('not-sure');
  const [siteSpeed, setSiteSpeed] = useState<'fast' | 'slow' | 'no-idea'>('no-idea');
  
  // Calculation constants
  const avgCustomerValue = 500; // Average value per customer
  const mobileTrafficPercent = 0.73; // 73% of traffic is mobile
  const slowSiteLossPercent = 0.40; // 40% leave slow sites
  const industryAvgContactRate = 5; // 5% industry average
  
  // Calculate losses
  const mobileLoss = mobileWorks !== 'yes' 
    ? Math.round(monthlyVisitors * mobileTrafficPercent * 0.5 * (contactRate / 100) * avgCustomerValue)
    : 0;
    
  const speedLoss = siteSpeed !== 'fast'
    ? Math.round(monthlyVisitors * slowSiteLossPercent * (contactRate / 100) * avgCustomerValue)
    : 0;
    
  const missedInquiryLoss = Math.round(missedInquiries * 4.3 * avgCustomerValue); // 4.3 weeks per month
  
  const conversionGapLoss = contactRate < industryAvgContactRate
    ? Math.round(monthlyVisitors * ((industryAvgContactRate - contactRate) / 100) * avgCustomerValue)
    : 0;
    
  const totalMonthlyLoss = mobileLoss + speedLoss + missedInquiryLoss + conversionGapLoss;
  const totalAnnualLoss = totalMonthlyLoss * 12;

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 text-9xl">💸</div>
        <div className="absolute bottom-20 left-20 text-9xl">💸</div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-red-100 text-red-700 px-6 py-3 rounded-full font-bold text-sm mb-6">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Revenue Leak Detection System
          </div>
          
          <h2 className="font-display font-bold text-4xl lg:text-6xl text-foreground mb-6">
            Where's Your Money Going?
          </h2>
          <p className="text-xl text-text-light max-w-3xl mx-auto">
            Answer 5 quick questions. I'll show you exactly how much revenue you're losing every month 
            (and how to plug the leaks).
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="lg:grid lg:grid-cols-2">
            {/* Questions Side */}
            <div className="p-8 lg:p-12 border-r border-gray-100">
              <h3 className="font-bold text-2xl text-foreground mb-8">Quick Business Checkup</h3>
              
              <div className="space-y-8">
                {/* Question 1 */}
                <div>
                  <label className="block text-lg font-semibold text-foreground mb-3">
                    About how many people visit your website each month?
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="100"
                      max="5000"
                      step="100"
                      value={monthlyVisitors}
                      onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                      className="flex-1"
                    />
                    <div className="w-24 text-center">
                      <span className="text-2xl font-bold text-primary">{monthlyVisitors.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Question 2 */}
                <div>
                  <label className="block text-lg font-semibold text-foreground mb-3">
                    What percentage actually contact you?
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="0.5"
                      max="10"
                      step="0.5"
                      value={contactRate}
                      onChange={(e) => setContactRate(Number(e.target.value))}
                      className="flex-1"
                    />
                    <div className="w-24 text-center">
                      <span className="text-2xl font-bold text-primary">{contactRate}%</span>
                    </div>
                  </div>
                </div>

                {/* Question 3 */}
                <div>
                  <label className="block text-lg font-semibold text-foreground mb-3">
                    How many phone calls/emails do you miss in a busy week?
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="0"
                      max="20"
                      step="1"
                      value={missedInquiries}
                      onChange={(e) => setMissedInquiries(Number(e.target.value))}
                      className="flex-1"
                    />
                    <div className="w-24 text-center">
                      <span className="text-2xl font-bold text-primary">{missedInquiries}</span>
                    </div>
                  </div>
                </div>

                {/* Question 4 */}
                <div>
                  <label className="block text-lg font-semibold text-foreground mb-3">
                    Does your website work perfectly on phones?
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      onClick={() => setMobileWorks('yes')}
                      className={`px-4 py-3 rounded-xl font-semibold transition-all ${
                        mobileWorks === 'yes' 
                          ? 'bg-primary text-white' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setMobileWorks('no')}
                      className={`px-4 py-3 rounded-xl font-semibold transition-all ${
                        mobileWorks === 'no' 
                          ? 'bg-primary text-white' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      No
                    </button>
                    <button
                      onClick={() => setMobileWorks('not-sure')}
                      className={`px-4 py-3 rounded-xl font-semibold transition-all ${
                        mobileWorks === 'not-sure' 
                          ? 'bg-primary text-white' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      Not Sure
                    </button>
                  </div>
                </div>

                {/* Question 5 */}
                <div>
                  <label className="block text-lg font-semibold text-foreground mb-3">
                    How fast does your site load?
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    <button
                      onClick={() => setSiteSpeed('fast')}
                      className={`px-4 py-3 rounded-xl font-semibold transition-all ${
                        siteSpeed === 'fast' 
                          ? 'bg-primary text-white' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      Fast
                    </button>
                    <button
                      onClick={() => setSiteSpeed('slow')}
                      className={`px-4 py-3 rounded-xl font-semibold transition-all ${
                        siteSpeed === 'slow' 
                          ? 'bg-primary text-white' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      Slow
                    </button>
                    <button
                      onClick={() => setSiteSpeed('no-idea')}
                      className={`px-4 py-3 rounded-xl font-semibold transition-all ${
                        siteSpeed === 'no-idea' 
                          ? 'bg-primary text-white' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      No Idea
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Side */}
            <div className="p-8 lg:p-12 bg-gradient-to-br from-red-50 to-orange-50">
              <div className="flex items-center justify-between mb-8">
                <h3 className="font-bold text-2xl text-foreground">Your Revenue Leaks</h3>
                <div className="text-4xl animate-pulse">🚨</div>
              </div>
              
              <div className="space-y-6 mb-8">
                {/* Mobile Problem */}
                {mobileLoss > 0 && (
                  <div className="bg-white rounded-xl p-6 border-l-4 border-red-500">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">📱</span>
                      <h4 className="font-bold text-lg text-foreground">Mobile Problem</h4>
                    </div>
                    <p className="text-text-light mb-2">
                      73% of your visitors are on phones. Bad mobile experience = lost customers.
                    </p>
                    <p className="text-red-600 font-bold text-xl">
                      Lost: ${mobileLoss.toLocaleString()}/month
                    </p>
                  </div>
                )}

                {/* Speed Problem */}
                {speedLoss > 0 && (
                  <div className="bg-white rounded-xl p-6 border-l-4 border-orange-500">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">⏱️</span>
                      <h4 className="font-bold text-lg text-foreground">Speed Problem</h4>
                    </div>
                    <p className="text-text-light mb-2">
                      Sites that load slow lose 40% of visitors immediately.
                    </p>
                    <p className="text-orange-600 font-bold text-xl">
                      Lost: ${speedLoss.toLocaleString()}/month
                    </p>
                  </div>
                )}

                {/* Follow-up Problem */}
                {missedInquiryLoss > 0 && (
                  <div className="bg-white rounded-xl p-6 border-l-4 border-yellow-500">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">📞</span>
                      <h4 className="font-bold text-lg text-foreground">Follow-up Problem</h4>
                    </div>
                    <p className="text-text-light mb-2">
                      Missing just {missedInquiries} inquiries per week adds up fast.
                    </p>
                    <p className="text-yellow-600 font-bold text-xl">
                      Lost: ${missedInquiryLoss.toLocaleString()}/month
                    </p>
                  </div>
                )}

                {/* Conversion Problem */}
                {conversionGapLoss > 0 && (
                  <div className="bg-white rounded-xl p-6 border-l-4 border-purple-500">
                    <div className="flex items-center mb-2">
                      <span className="text-2xl mr-3">📊</span>
                      <h4 className="font-bold text-lg text-foreground">Conversion Problem</h4>
                    </div>
                    <p className="text-text-light mb-2">
                      Industry average is 5% contact rate. You're at {contactRate}%.
                    </p>
                    <p className="text-purple-600 font-bold text-xl">
                      Lost: ${conversionGapLoss.toLocaleString()}/month
                    </p>
                  </div>
                )}
              </div>

              {/* Total Loss */}
              <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-2xl p-6 mb-8">
                <div className="text-center">
                  <p className="text-white/80 mb-2">Total Revenue Lost</p>
                  <p className="text-4xl lg:text-5xl font-bold mb-2">
                    ${totalMonthlyLoss.toLocaleString()}/mo
                  </p>
                  <p className="text-white/80">
                    That's ${totalAnnualLoss.toLocaleString()} per year
                  </p>
                </div>
              </div>

              {/* Solution */}
              <div className="bg-white rounded-xl p-6 border-2 border-primary">
                <h4 className="font-bold text-xl text-foreground mb-4">
                  Enough is Enough - Here's The Fix:
                </h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">Mobile optimization increases conversions by 200%</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">Speed optimization recovers 40% of lost visitors</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">Never Miss a Lead automation captures every inquiry</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-foreground">Professional design increases trust and contact rates</span>
                  </li>
                </ul>
                
                <div className="bg-primary/10 rounded-xl p-4 text-center">
                  <p className="text-sm text-text-light mb-1">Stop losing ${totalMonthlyLoss.toLocaleString()}/month for just</p>
                  <p className="text-3xl font-bold text-primary">$3,500 one-time</p>
                </div>
              </div>

              {/* CTA */}
              <Link 
                href="/contact" 
                className="mt-8 w-full flex items-center justify-center px-8 py-5 bg-primary text-white text-lg font-bold rounded-2xl shadow-2xl hover:bg-primary/90 hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
              >
                Stop The Bleeding Now
                <svg className="w-6 h-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}