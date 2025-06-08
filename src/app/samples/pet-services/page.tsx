import Link from 'next/link';
import type { Metadata } from 'next';
import { Nunito, Quicksand } from 'next/font/google';

const nunito = Nunito({ 
  subsets: ['latin'],
  weight: ['400', '600', '700', '800']
});

const quicksand = Quicksand({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: 'Pet Services Website Demo | Built By Tom',
  description: 'See what your pet daycare and grooming website could look like. Online booking, digital forms, and puppy cams that delight pet parents.',
  robots: 'noindex, follow',
};

export default function PetServicesSample() {
  return (
    <>
      <div className={`pet-services-demo ${nunito.className}`}>
      {/* Demo Banner */}
      <div className="bg-[#7CB342] text-white py-3 text-center relative">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-medium">
            🎨 This is a sample website showing what a modern, professional web presence could look like for your pet services business.
          </p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-[#87CEEB] to-[#FFD93D] overflow-hidden">
        <div className="absolute inset-0 bg-white/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#FF6B6B]/20 rounded-full animate-bounce" style={{ animationDuration: '3s' }}></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#7CB342]/20 rounded-full animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#FFD93D]/30 rounded-full animate-pulse" style={{ animationDuration: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <h1 className={`${quicksand.className} font-bold text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight drop-shadow-lg`}>
              Where Every Day is the
              <span className="block text-[#FF6B6B]">Best Day Ever.</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-white mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow">
              The Wagging Tail Lodge is North Haven's premier daycare and grooming spa for happy, 
              healthy pups. We provide a safe, enriching, and sparkling clean environment where 
              your best friend can play, learn, and make new friends.
            </p>
            
            <Link 
              href="#book" 
              className="inline-flex items-center px-10 py-5 bg-[#FFD93D] text-gray-800 font-bold rounded-full hover:bg-[#FFD93D]/90 transition-all transform hover:scale-105 text-lg shadow-lg"
            >
              Book a Service Now
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-white border-y-4 border-[#FFD93D]">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 text-center">
            <div className="flex items-center text-gray-700">
              <svg className="w-6 h-6 mr-2 text-[#7CB342]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Fear Free Certified Staff</span>
            </div>
            <div className="flex items-center text-gray-700">
              <svg className="w-6 h-6 mr-2 text-[#7CB342]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Canine CPR & First Aid Trained</span>
            </div>
            <div className="flex items-center text-gray-700">
              <svg className="w-6 h-6 mr-2 text-[#7CB342]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Vet Recommended</span>
            </div>
            <div className="flex items-center text-gray-700">
              <svg className="w-6 h-6 mr-2 text-[#7CB342]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Fully Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* How We're Different */}
      <section className="py-20 bg-gradient-to-br from-[#F8F9FA] to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`${quicksand.className} font-bold text-4xl lg:text-5xl text-gray-800 mb-6`}>
              More Than Just a Daycare.
              <span className="block text-[#FF6B6B]">It's an Enrichment Lodge.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe a tired dog is a happy dog, but a fulfilled dog is even happier. Our 
              approach focuses on safe socialization, positive reinforcement, and structured play 
              that engages both their bodies and their minds.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Supervised Playgroups */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-[#87CEEB] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-4xl">🐕</span>
              </div>
              <h3 className={`${quicksand.className} font-bold text-2xl text-gray-800 mb-4 text-center`}>
                Supervised Playgroups
              </h3>
              <p className="text-gray-600 text-center">
                Pups are separated by size and temperament into small, fully supervised playgroups 
                to ensure safe and positive interactions.
              </p>
            </div>

            {/* Impeccably Clean */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-[#7CB342] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-4xl">✨</span>
              </div>
              <h3 className={`${quicksand.className} font-bold text-2xl text-gray-800 mb-4 text-center`}>
                Impeccably Clean
              </h3>
              <p className="text-gray-600 text-center">
                Our facility features hospital-grade air filtration and is sanitized throughout 
                the day with pet-safe, non-toxic cleaners.
              </p>
            </div>

            {/* Enrichment Activities */}
            <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="w-20 h-20 bg-[#FFD93D] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-4xl">🎾</span>
              </div>
              <h3 className={`${quicksand.className} font-bold text-2xl text-gray-800 mb-4 text-center`}>
                Enrichment Activities
              </h3>
              <p className="text-gray-600 text-center">
                From puzzle toys to bubble parties, we provide daily activities designed to build 
                confidence and burn off energy in a healthy way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`${quicksand.className} font-bold text-4xl lg:text-5xl text-gray-800 mb-6`}>
              Everything Your Pup Needs to Thrive.
            </h2>
            <p className="text-xl text-gray-600">
              Booking is easy and can be done entirely online, 24/7.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Daycare */}
            <div className="bg-gradient-to-br from-[#87CEEB]/20 to-[#87CEEB]/10 rounded-3xl p-8 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🏃</div>
              <h3 className={`${quicksand.className} font-bold text-2xl text-gray-800 mb-4`}>
                Doggy Daycare
              </h3>
              <p className="text-gray-600 mb-6">
                The perfect solution for bored, lonely, or high-energy dogs. Let them run, play, 
                and socialize in our supervised indoor and outdoor play yards. Flexible half-day 
                and full-day packages available.
              </p>
              <Link 
                href="#book" 
                className="inline-flex items-center text-[#87CEEB] font-bold hover:text-[#87CEEB]/80 transition-colors"
              >
                View Daycare Rates & Book
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Grooming */}
            <div className="bg-gradient-to-br from-[#FF6B6B]/20 to-[#FF6B6B]/10 rounded-3xl p-8 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">✂️</div>
              <h3 className={`${quicksand.className} font-bold text-2xl text-gray-800 mb-4`}>
                Professional Grooming
              </h3>
              <p className="text-gray-600 mb-6">
                Our gentle, experienced groomers offer everything from a simple bath & brush to 
                a full breed-specific haircut. We use high-quality, natural shampoos and conditioners.
              </p>
              <Link 
                href="#book" 
                className="inline-flex items-center text-[#FF6B6B] font-bold hover:text-[#FF6B6B]/80 transition-colors"
              >
                View Grooming Services & Book
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Boarding */}
            <div className="bg-gradient-to-br from-[#7CB342]/20 to-[#7CB342]/10 rounded-3xl p-8 hover:shadow-xl transition-all">
              <div className="text-5xl mb-4">🏨</div>
              <h3 className={`${quicksand.className} font-bold text-2xl text-gray-800 mb-4`}>
                Overnight Boarding
              </h3>
              <p className="text-gray-600 mb-6">
                A comfortable, stress-free staycation for your pup. Our Lodge guests enjoy all-day 
                play with their daycare friends and retire to spacious, private suites for a restful night.
              </p>
              <Link 
                href="#book" 
                className="inline-flex items-center text-[#7CB342] font-bold hover:text-[#7CB342]/80 transition-colors"
              >
                Learn More & Reserve a Suite
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Made Easy (Automation Showcase) */}
      <section className="py-20 bg-gradient-to-br from-[#FFD93D]/10 to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`${quicksand.className} font-bold text-4xl lg:text-5xl text-gray-800 mb-6`}>
              Booking Their Best Day is Simple.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use a modern, secure online system so you can manage everything from your phone 
              or computer, anytime.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg relative">
              <div className="w-16 h-16 bg-[#FFD93D] rounded-full flex items-center justify-center text-2xl font-bold text-gray-800 mb-6">
                1
              </div>
              <h3 className={`${quicksand.className} font-bold text-2xl text-gray-800 mb-4`}>
                Pick Your Service & Time
              </h3>
              <p className="text-gray-600">
                Our online portal lets you see all available appointments and daycare spots in 
                real-time. Just pick what you need and you'll get an instant booking confirmation.
              </p>
              <div className="mt-6 p-4 bg-[#FFD93D]/10 rounded-2xl">
                <p className="text-sm text-gray-600 italic">
                  "So much easier than calling around!"
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg relative">
              <div className="w-16 h-16 bg-[#87CEEB] rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6">
                2
              </div>
              <h3 className={`${quicksand.className} font-bold text-2xl text-gray-800 mb-4`}>
                Fill Out Forms Digitally
              </h3>
              <p className="text-gray-600">
                New clients can upload vaccination records and fill out our new-client intake form 
                entirely online before you even come in, saving you time at drop-off.
              </p>
              <div className="mt-6 p-4 bg-[#87CEEB]/10 rounded-2xl">
                <p className="text-sm text-gray-600 italic">
                  "No more clipboard juggling!"
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg relative">
              <div className="w-16 h-16 bg-[#7CB342] rounded-full flex items-center justify-center text-2xl font-bold text-white mb-6">
                3
              </div>
              <h3 className={`${quicksand.className} font-bold text-2xl text-gray-800 mb-4`}>
                Get Helpful Reminders
              </h3>
              <p className="text-gray-600">
                You'll receive an automatic email and text reminder 24 hours before your appointment. 
                No more "oops, I forgot" moments!
              </p>
              <div className="mt-6 p-4 bg-[#7CB342]/10 rounded-2xl">
                <div className="flex items-start">
                  <div className="mr-3 text-2xl">📱</div>
                  <div className="text-sm">
                    <p className="font-semibold text-gray-700">Reminder</p>
                    <p className="text-gray-600">Buster's grooming tomorrow at 10am!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Puppy Cam Feature */}
      <section className="py-20 bg-gradient-to-r from-[#87CEEB] to-[#7CB342] text-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className={`${quicksand.className} font-bold text-4xl lg:text-5xl mb-6`}>
                Peace of Mind,
                <span className="block">Just a Click Away.</span>
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Wondering what your pup is up to? We get it! Our Lodge clients get exclusive, 
                password-protected access to our live HD webcams so you can check in on the fun 
                anytime during the day.
              </p>
              <Link 
                href="#" 
                className="inline-flex items-center px-8 py-4 bg-white text-[#87CEEB] font-bold rounded-full hover:bg-white/90 transition-all transform hover:scale-105"
              >
                Client Login to Puppy Cams
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-2xl flex items-center justify-center h-64">
                  <div className="text-white/50 text-center">
                    <div className="text-6xl mb-4">📹</div>
                    <p className="text-lg">Live Puppy Cam Preview</p>
                  </div>
                </div>
                <div className="mt-4 flex justify-center space-x-2">
                  <div className="w-3 h-3 bg-[#FFD93D] rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-[#FFD93D] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-3 h-3 bg-[#FFD93D] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className={`${quicksand.className} font-bold text-4xl lg:text-5xl text-gray-800 mb-4`}>
              Don't Take Our Word For It...
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#FFD93D]/10 to-white rounded-3xl p-8 shadow-lg">
              <div className="flex text-[#FFD93D] mb-4">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i} className="text-2xl">{star}</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "The Wagging Tail Lodge is Buster's favorite place on earth! The facility is 
                spotless and the staff is incredible. I absolutely love being able to book his 
                daycare days on their website, it's so easy. The puppy cams are the best feature!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#87CEEB] rounded-full flex items-center justify-center text-xl mr-3">
                  🐕
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Jessica R. & Buster</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#87CEEB]/10 to-white rounded-3xl p-8 shadow-lg">
              <div className="flex text-[#FFD93D] mb-4">
                {'★★★★★'.split('').map((star, i) => (
                  <span key={i} className="text-2xl">{star}</span>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Booking Max's grooming appointment online was a breeze! I got a text reminder 
                the day before, and he came back looking and smelling amazing. So much better 
                than playing phone tag with our old groomer. We've found our new spot."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#FF6B6B] rounded-full flex items-center justify-center text-xl mr-3">
                  🐕
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Mark F. & Max</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="book" className="py-20 bg-gradient-to-br from-[#FFD93D] to-[#FF6B6B] text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <h2 className={`${quicksand.className} font-bold text-4xl lg:text-5xl mb-6`}>
            Ready For Your Pup's Best Day Ever?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Spots fill up fast! Check our availability and book your dog's next visit online today.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-10 py-5 bg-white text-gray-800 font-bold rounded-full hover:bg-white/90 transition-all transform hover:scale-105 text-lg shadow-lg"
          >
            Book a Service Now
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Demo Footer CTA */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <h3 className={`${quicksand.className} font-bold text-3xl mb-4`}>
            Want a Website That Makes Pet Parents Smile?
          </h3>
          <p className="text-lg mb-6 text-white/80">
            This demo shows what's possible. Let's build something amazing for your pet business.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center px-8 py-4 bg-[#FFD93D] text-gray-800 font-bold rounded-full hover:bg-[#FFD93D]/90 transition-all transform hover:scale-105"
          >
            Get Your Pet Services Website
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