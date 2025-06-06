import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      {/* 404 Hero Section */}
      <section className="relative min-h-[80vh] bg-gradient-to-br from-primary via-slate-800 to-secondary overflow-hidden flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-sage-light/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }}></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* 404 Visual */}
            <div className="mb-12">
              <div className="text-[10rem] sm:text-[12rem] lg:text-[16rem] font-black text-white/20 leading-none select-none">
                404
              </div>
            </div>

            <div className="mb-8">
              <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium border border-white/20">
                Page Not Found
              </span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              This Page Got
              <span className="block bg-gradient-to-r from-white via-accent via-sage-light to-white bg-clip-text text-transparent pb-2" style={{ 
                backgroundSize: '600% 600%',
                animation: 'gradient 3s ease infinite'
              }}>
                Lost in the System
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Don't worry - even the best systems have hiccups. Let's get you back to where you need to be.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link 
                href="/" 
                className="group px-12 py-6 bg-white text-primary text-lg font-bold rounded-2xl shadow-2xl shadow-black/10 hover:shadow-black/20 transform hover:scale-105 transition-all duration-500"
              >
                <span className="flex items-center">
                  Back to Homepage
                  <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </span>
              </Link>
              
              <Link 
                href="/contact" 
                className="group px-8 py-6 border-2 border-white/40 text-white text-lg font-semibold rounded-2xl backdrop-blur-sm hover:bg-white/10 hover:border-white/60 transition-all duration-500"
              >
                Get Help Finding It
                <svg className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>

            {/* Popular Pages */}
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="font-display font-bold text-xl text-white mb-6">
                Looking for something specific?
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <Link 
                  href="/services/website" 
                  className="block p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-200 text-left"
                >
                  <div className="text-white font-semibold mb-1">Website Services</div>
                  <div className="text-white/70 text-sm">$3,500 flat rate</div>
                </Link>
                
                <Link 
                  href="/services/automation" 
                  className="block p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-200 text-left"
                >
                  <div className="text-white font-semibold mb-1">Automation</div>
                  <div className="text-white/70 text-sm">From $797</div>
                </Link>
                
                <Link 
                  href="/about" 
                  className="block p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-200 text-left"
                >
                  <div className="text-white font-semibold mb-1">About Tom</div>
                  <div className="text-white/70 text-sm">20+ years experience</div>
                </Link>
                
                <Link 
                  href="/resources" 
                  className="block p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-200 text-left"
                >
                  <div className="text-white font-semibold mb-1">Resources</div>
                  <div className="text-white/70 text-sm">Free guides & insights</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Error Reporting Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-10 border border-gray-100">
            <h2 className="font-display font-bold text-2xl text-foreground mb-6">
              Think This Should Work?
            </h2>
            <p className="text-text-light mb-8 leading-relaxed">
              If you expected to find something here, let me know. I'm always improving the site and fixing broken links.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
            >
              Report This Issue
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}