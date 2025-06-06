import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Web Design & Automation in New Haven County | Built By Tom',
  description: 'Local web design and business automation services in New Haven County. Based in North Haven, serving Hamden, Wallingford, Branford, East Haven, and Cheshire.',
  keywords: 'web design new haven county, business automation north haven, website services hamden, web developer wallingford, automation branford ct',
};

export default function NewHavenCounty() {
  const cities = [
    {
      name: 'New Haven',
      distance: '10 min',
      areas: 'Downtown, Yale area, Westville, East Rock',
      description: 'Restaurants here lose orders because the phone rings nonstop at dinner. By the time they call back, customers already ordered somewhere else. Service businesses around East Rock say they feel invisible compared to bigger companies, even when they do a better job.',
      problems: [
        'missed calls during the rush',
        'no system for following up',
        'customers can\'t book easily'
      ]
    },
    {
      name: 'Hamden',
      distance: '12 min',
      areas: 'Quinnipiac, Spring Glen, Whitney Ave',
      description: 'Hamden businesses are stuck competing with New Haven for attention, but serving customers who want that local feel. People keep telling me, "They always call the New Haven place first, even though we\'re closer." Most of the time, it\'s because the booking process is easier or someone actually answers the phone.',
      problems: [
        'playing phone tag',
        'losing customers to places with better systems',
        'no follow-up between visits'
      ]
    },
    {
      name: 'Wallingford',
      distance: '15 min',
      areas: 'Historic downtown, Route 5',
      description: 'Main Street shops love the summer crowds but scramble when things get quiet. Most have no system to keep in touch with customers during slow months. Service companies on Route 5 tell me they\'re just "another business in a long line of businesses."',
      problems: [
        'no way to follow up in the off-season',
        'losing track of past customers',
        'letting inquiries fall through the cracks'
      ]
    },
    {
      name: 'Branford',
      distance: '15 min',
      areas: 'Town Center, Branford Point, Route 1',
      description: 'Branford businesses get slammed in summer, then wonder where everyone went in February. Tourists find you once, but there\'s no system to bring them back or keep locals engaged through the year.',
      problems: [
        'unpredictable seasons',
        'one-time customers never returning',
        'chaos when it gets busy'
      ]
    },
    {
      name: 'East Haven',
      distance: '12 min',
      areas: 'Main Street, Foxon',
      description: 'Family businesses here have loyal regulars but struggle to look professional online. "Our customers love us, but new people just drive to New Haven." It\'s rarely about being fancy—just about being easy to trust and easy to reach.',
      problems: [
        'regulars can\'t refer you easily',
        'new people can\'t find you',
        'appointments are a mess'
      ]
    },
    {
      name: 'Cheshire',
      distance: '20 min',
      areas: 'Town Center, Route 10',
      description: 'Cheshire customers compare everyone and research everything before spending a dime. Businesses here get calls like, "I\'m comparing you to three other places," or, "I just wanted to make sure you\'re real." If you don\'t inspire confidence, they\'ll go somewhere else.',
      problems: [
        'customers doing research but not finding enough info',
        'losing to businesses that look more established',
        'not building trust before the first meeting'
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-slate-800 to-secondary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-sage-light/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }}></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              Serving New Haven County
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Web Design & Automation, Local to North Haven
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8">
          <p className="text-xl text-foreground mb-8 leading-relaxed">
            Most tech people work with clients they've never met, for businesses they've never set foot in. That's not how I work.
          </p>
          <p className="text-xl text-text-light mb-12 leading-relaxed">
            After a decade running businesses here, I know what works in New Haven County—and what falls flat. You know your business best. I just know what broke mine, and what'll break yours if we don't fix it.
          </p>
          
          {/* Home Base Card */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
            <div className="flex items-start">
              <span className="text-3xl mr-4">📍</span>
              <div>
                <h3 className="font-bold text-2xl text-foreground mb-2">Home Base: North Haven</h3>
                <p className="text-text-light mb-4">This is where I learned the hard lessons, usually the hard way.</p>
                <p className="text-foreground">
                  We can meet at Starbucks on Washington Ave, your office, or just jump on a Google Meet. Whatever works for you. Because fixing things starts with actually seeing what's broken.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Problems Section */}
      <section className="py-20 bg-gradient-to-br from-background to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Local Business Problems I See All the Time
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {cities.map((city, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-2xl text-foreground">{city.name}</h3>
                  <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    {city.distance}
                  </span>
                </div>
                
                <p className="text-secondary font-medium mb-4">{city.areas}</p>
                
                <p className="text-text-light mb-6 leading-relaxed">
                  {city.description}
                </p>
                
                <div className="space-y-2">
                  <p className="font-semibold text-foreground mb-2">Problems I keep seeing:</p>
                  {city.problems.map((problem, idx) => (
                    <div key={idx} className="flex items-center">
                      <svg className="w-5 h-5 text-red-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-foreground">{problem}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
        
        <div className="relative max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-8">
            Ready to Fix What's Actually Broken?
          </h2>
          <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
            Most business headaches aren't really website problems—they're system problems. Missed calls, lost follow-ups, customers who can't book, chaos in the busy season, and crickets during the slow one.
          </p>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Your website might look fine. But if someone fills out your contact form at 9pm on a Sunday, what happens next?
          </p>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            I don't do one-size-fits-all fixes. I just fix what's actually broken—the way I wish someone had fixed it for me.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center px-12 py-6 bg-white text-primary text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          >
            Let's Talk About What's Not Working
            <svg className="w-6 h-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}