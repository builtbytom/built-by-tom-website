import Link from 'next/link';
import type { Metadata } from 'next';
import { Merriweather, Open_Sans } from 'next/font/google';

const merriweather = Merriweather({ 
  subsets: ['latin'],
  weight: ['300', '400', '700', '900']
});

const openSans = Open_Sans({ 
  subsets: ['latin'],
  weight: ['400', '600', '700']
});

export const metadata: Metadata = {
  title: 'Landscaper Website Demo | Built By Tom',
  description: 'See what your landscaping website could look like. Professional design with automated estimates, scheduling, and customer communication.',
  robots: 'noindex, follow',
};

export default function LandscaperSample() {
  return (
    <>
      <div className={`landscaper-demo ${openSans.className}`}>
      {/* Demo Banner */}
      <div className="bg-[#2C3E33] text-white py-3 text-center relative">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-medium">
            🎨 This is a sample website showing what a modern, professional web presence could look like for your landscaping business.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-[#2C3E33] to-[#6A7A89] overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Hero image background placeholder */}
        <div className="absolute inset-0">
          <div className="bg-gradient-to-br from-[#2C3E33]/80 to-[#6A7A89]/80 h-full flex items-center justify-center text-white/20 text-2xl">
            [Beautiful Outdoor Patio & Garden at Sunset]
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="max-w-3xl">
            <h1 className={`${merriweather.className} font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight`}>
              Your Outdoor Oasis, Built with Care.
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 mb-10 leading-relaxed">
              You dream of a beautiful, relaxing outdoor space. We bring the craftsmanship 
              and reliability to make it a reality. Sterling Scapes of CT builds stunning, 
              durable landscapes for homeowners in New Haven County.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#estimate" 
                className="px-8 py-4 bg-[#B87333] text-white font-bold rounded-lg hover:bg-[#B87333]/90 transition-all transform hover:scale-105 text-center"
              >
                Get Your Free Estimate
              </Link>
              <Link 
                href="#work" 
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/30 transition-all text-center border border-white/30"
              >
                View Our Work ↓
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-[#F1F0EB] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-center">
            <div className="flex items-center text-[#212121]">
              <svg className="w-5 h-5 mr-2 text-[#2C3E33]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Fully Licensed & Insured</span>
            </div>
            <div className="text-[#212121]">
              <span className="font-semibold">15+ Years Experience</span>
            </div>
            <div className="text-[#212121]">
              <span className="font-semibold">Member, Connecticut Nursery & Landscape Association</span>
            </div>
            <div className="flex items-center text-[#212121]">
              <div className="flex text-yellow-500 mr-2">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
              <span className="font-semibold">5-Star Google Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`${merriweather.className} font-bold text-4xl lg:text-5xl text-[#212121] mb-6`}>
              We Build Landscapes That Last.
            </h2>
            <p className="text-xl text-[#212121]/70 max-w-3xl mx-auto">
              From complete transformations to seasonal maintenance, our expert team handles every detail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Landscape Design */}
            <div className="group flex">
              <div className="bg-[#F1F0EB] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all flex flex-col w-full">
                <div className="h-48 bg-gradient-to-br from-[#2C3E33]/20 to-[#2C3E33]/10 flex items-center justify-center">
                  <div className="text-6xl">🌿</div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className={`${merriweather.className} font-bold text-xl text-[#212121] mb-3`}>
                    Landscape Design & Installation
                  </h3>
                  <p className="text-[#212121]/70 flex-grow">
                    A complete vision for your property, from plant selection to final installation, 
                    designed to thrive in the Connecticut climate.
                  </p>
                </div>
              </div>
            </div>

            {/* Hardscaping */}
            <div className="group flex">
              <div className="bg-[#F1F0EB] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all flex flex-col w-full">
                <div className="h-48 bg-gradient-to-br from-[#6A7A89]/20 to-[#6A7A89]/10 flex items-center justify-center">
                  <div className="text-6xl">🪨</div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className={`${merriweather.className} font-bold text-xl text-[#212121] mb-3`}>
                    Hardscaping & Patios
                  </h3>
                  <p className="text-[#212121]/70 flex-grow">
                    Extend your living space with custom-built bluestone patios, walkways, and 
                    retaining walls that blend beauty with function.
                  </p>
                </div>
              </div>
            </div>

            {/* Lawn Care */}
            <div className="group flex">
              <div className="bg-[#F1F0EB] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all flex flex-col w-full">
                <div className="h-48 bg-gradient-to-br from-[#2C3E33]/20 to-[#2C3E33]/10 flex items-center justify-center">
                  <div className="text-6xl">🌱</div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className={`${merriweather.className} font-bold text-xl text-[#212121] mb-3`}>
                    Lawn & Garden Care
                  </h3>
                  <p className="text-[#212121]/70 flex-grow">
                    Meticulous lawn maintenance, garden bed creation, and seasonal planting to 
                    keep your property looking its best year-round.
                  </p>
                </div>
              </div>
            </div>

            {/* Property Maintenance */}
            <div className="group flex">
              <div className="bg-[#F1F0EB] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all flex flex-col w-full">
                <div className="h-48 bg-gradient-to-br from-[#B87333]/20 to-[#B87333]/10 flex items-center justify-center">
                  <div className="text-6xl">🍂</div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className={`${merriweather.className} font-bold text-xl text-[#212121] mb-3`}>
                    Property Maintenance
                  </h3>
                  <p className="text-[#212121]/70 flex-grow">
                    Comprehensive spring & fall cleanups, mulching, pruning, and storm damage 
                    removal to protect your investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seamless Process (Automation Showcase) */}
      <section className="py-20 bg-gradient-to-br from-[#F1F0EB] to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`${merriweather.className} font-bold text-4xl lg:text-5xl text-[#212121] mb-6`}>
              A Better Client Experience, By Design.
            </h2>
            <p className="text-xl text-[#212121]/70 max-w-3xl mx-auto">
              We know that hiring a contractor can be stressful. That's why we've invested in a 
              process that guarantees clear communication and absolute peace of mind from our 
              first conversation to the final walkthrough.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex">
              <div className="bg-white rounded-2xl p-8 shadow-lg relative flex flex-col w-full">
                <div className="absolute -top-4 left-8 w-12 h-12 bg-[#B87333] text-white rounded-full flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <h3 className={`${merriweather.className} font-bold text-2xl text-[#212121] mb-4 mt-4`}>
                  Get a Clear, Timely Estimate
                </h3>
                <p className="text-[#212121]/70 mb-6 flex-grow">
                  Fill out our online form and you'll receive an instant confirmation text so you 
                  know we got it. We'll call you within one business day to schedule a free, 
                  no-pressure consultation.
                </p>
                <div className="mt-auto p-4 bg-[#F1F0EB] rounded-lg">
                  <p className="text-sm text-[#212121]/60 italic">
                    "I submitted my request at 8pm and got a text right away confirming they 
                    received it. So professional!" - Recent Client
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex">
              <div className="bg-white rounded-2xl p-8 shadow-lg relative flex flex-col w-full">
                <div className="absolute -top-4 left-8 w-12 h-12 bg-[#B87333] text-white rounded-full flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <h3 className={`${merriweather.className} font-bold text-2xl text-[#212121] mb-4 mt-4`}>
                  Schedule With Confidence
                </h3>
                <p className="text-[#212121]/70 mb-6 flex-grow">
                  Once you approve your detailed quote, we'll schedule the work. You'll receive 
                  automatic appointment reminders via SMS the day before our team is set to arrive. 
                  No more guessing games.
                </p>
                <div className="mt-auto p-4 bg-[#F1F0EB] rounded-lg">
                  <div className="flex items-start">
                    <div className="mr-3 text-2xl">📱</div>
                    <div className="text-sm">
                      <p className="font-semibold text-[#212121]">SMS Reminder</p>
                      <p className="text-[#212121]/60">Tomorrow 8am - Sterling Scapes crew arriving</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex">
              <div className="bg-white rounded-2xl p-8 shadow-lg relative flex flex-col w-full">
                <div className="absolute -top-4 left-8 w-12 h-12 bg-[#B87333] text-white rounded-full flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <h3 className={`${merriweather.className} font-bold text-2xl text-[#212121] mb-4 mt-4`}>
                  Enjoy The Results
                </h3>
                <p className="text-[#212121]/70 mb-6 flex-grow">
                  We complete the work to the highest standard. When the job is done, our system 
                  will send a request for your feedback to ensure you're 100% thrilled with your 
                  new landscape.
                </p>
                <div className="mt-auto p-4 bg-[#F1F0EB] rounded-lg">
                  <div className="flex text-yellow-500 mb-2">
                    {'★★★★★'.split('').map((star, i) => (
                      <span key={i} className="text-lg">{star}</span>
                    ))}
                  </div>
                  <p className="text-sm text-[#212121]/60">
                    "The automated follow-up made it easy to leave a review!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section id="work" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`${merriweather.className} font-bold text-4xl lg:text-5xl text-[#212121] mb-6`}>
              See the Sterling Scapes Difference.
            </h2>
            <p className="text-xl text-[#212121]/70 max-w-3xl mx-auto">
              We're proud of our work. Here are a few of our recent projects in the local area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="group cursor-pointer">
              <div className="bg-[#F1F0EB] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="relative h-80 bg-gradient-to-br from-[#2C3E33] to-[#6A7A89]">
                  <div className="absolute inset-0 flex items-center justify-center text-white/30 text-xl">
                    [North Haven Patio After Photo]
                  </div>
                  <div className="absolute top-4 left-4 bg-[#B87333] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Before & After
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`${merriweather.className} font-bold text-xl text-[#212121] mb-2`}>
                    North Haven Patio & Garden Transformation
                  </h3>
                  <p className="text-[#212121]/70">
                    Complete backyard renovation featuring bluestone patio, outdoor kitchen area, 
                    and native plant gardens.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group cursor-pointer">
              <div className="bg-[#F1F0EB] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="relative h-80 bg-gradient-to-br from-[#6A7A89] to-[#2C3E33]">
                  <div className="absolute inset-0 flex items-center justify-center text-white/30 text-xl">
                    [Madison Property After Photo]
                  </div>
                  <div className="absolute top-4 left-4 bg-[#B87333] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Before & After
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`${merriweather.className} font-bold text-xl text-[#212121] mb-2`}>
                    Madison Full Property Cleanup & Mulching
                  </h3>
                  <p className="text-[#212121]/70">
                    Spring cleanup, fresh mulch installation, and perennial garden restoration 
                    for this coastal property.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group cursor-pointer">
              <div className="bg-[#F1F0EB] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="relative h-80 bg-gradient-to-br from-[#2C3E33] to-[#B87333]">
                  <div className="absolute inset-0 flex items-center justify-center text-white/30 text-xl">
                    [Guilford Retaining Wall After]
                  </div>
                  <div className="absolute top-4 left-4 bg-[#B87333] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Before & After
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`${merriweather.className} font-bold text-xl text-[#212121] mb-2`}>
                    Guilford Hillside Retaining Wall System
                  </h3>
                  <p className="text-[#212121]/70">
                    Engineered retaining wall solution with integrated drainage and terraced 
                    planting areas.
                  </p>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="group cursor-pointer">
              <div className="bg-[#F1F0EB] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="relative h-80 bg-gradient-to-br from-[#B87333] to-[#6A7A89]">
                  <div className="absolute inset-0 flex items-center justify-center text-white/30 text-xl">
                    [Branford Outdoor Living After]
                  </div>
                  <div className="absolute top-4 left-4 bg-[#B87333] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Before & After
                  </div>
                </div>
                <div className="p-6">
                  <h3 className={`${merriweather.className} font-bold text-xl text-[#212121] mb-2`}>
                    Branford Outdoor Living Space
                  </h3>
                  <p className="text-[#212121]/70">
                    Fire pit area, pergola installation, and low-maintenance perennial borders 
                    for year-round enjoyment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-[#F1F0EB] to-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`${merriweather.className} font-bold text-4xl lg:text-5xl text-[#212121] mb-4`}>
              What Our Clients Are Saying...
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex text-yellow-500 mb-4">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i} className="text-xl">{star}</span>
                ))}
              </div>
              <p className="text-[#212121] mb-6 leading-relaxed">
                "The most professional contractors I have ever worked with. From the moment 
                I filled out their website form, the communication was incredible. The automated 
                reminders were a great touch, and the final patio is absolutely breathtaking. 
                Worth every penny."
              </p>
              <p className="font-semibold text-[#212121]">- David P.</p>
              <p className="text-sm text-[#212121]/60">North Haven</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex text-yellow-500 mb-4">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i} className="text-xl">{star}</span>
                ))}
              </div>
              <p className="text-[#212121] mb-6 leading-relaxed">
                "Sterling Scapes transformed our overgrown, messy yard into something out of 
                a magazine. The crew was respectful, and the process was so easy. I loved 
                being able to approve the quote and schedule the work all online. Highly recommend."
              </p>
              <p className="font-semibold text-[#212121]">- Megan L.</p>
              <p className="text-sm text-[#212121]/60">Madison</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="estimate" className="py-20 bg-gradient-to-r from-[#2C3E33] to-[#6A7A89] text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <h2 className={`${merriweather.className} font-bold text-4xl lg:text-5xl mb-6`}>
            Ready to Invest in Your Property?
          </h2>
          <p className="text-xl mb-8 text-white/90 leading-relaxed">
            A beautiful landscape doesn't just improve your lifestyle—it increases your home's value. 
            Let's start the conversation about what's possible for your property.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-10 py-5 bg-[#B87333] text-white font-bold rounded-lg hover:bg-[#B87333]/90 transition-all transform hover:scale-105 text-lg"
          >
            Get Your Free Estimate Today
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Demo Footer CTA */}
      <section className="py-16 bg-[#212121] text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <h3 className={`${merriweather.className} font-bold text-3xl mb-4`}>
            Want a Website That Brings in Quality Leads?
          </h3>
          <p className="text-lg mb-6 text-white/80">
            This demo shows what's possible. Let's build something amazing for your landscaping business.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-[#F1F0EB] text-[#212121] font-bold rounded-lg hover:bg-white transition-all transform hover:scale-105"
          >
            Get Your Landscaping Website
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <p className="mt-4 text-white/60">
            Starting at $3,500 • 3-week delivery • No monthly fees
          </p>
        </div>
      </section>
      </div>
    </>
  );
}