export default function TomsPromise() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5 relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 border border-primary/20">
          <div className="text-center mb-8">
            <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-4">
              My Promise to You
            </h2>
            <p className="text-lg text-text-light">
              No BS. No pressure. Just honest help.
            </p>
          </div>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">I'll tell you the truth</h3>
                <p className="text-text-light">
                  If I can't help you, I'll say so. If there's a cheaper way, I'll tell you. 
                  If you can do it yourself, I'll explain how.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">No judgment zone</h3>
                <p className="text-text-light">
                  Your website is from 2010? Can't remember your login? Don't know what hosting means? 
                  That's fine. We all start somewhere.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Your pace, not mine</h3>
                <p className="text-text-light">
                  Need to think about it? Take your time. Want to start small? That's smart. 
                  Ready to go all-in? Let's do it. This is your business, your decision.
                </p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Plain English only</h3>
                <p className="text-text-light">
                  No tech jargon. No confusing acronyms. If I slip and use one, call me out. 
                  You should understand every word I say.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10 pt-8 border-t border-gray-200">
            <p className="text-lg text-primary font-semibold">
              You're not just another project. You're a business owner trying to make things better.
            </p>
            <p className="text-text-light mt-2">
              And that deserves respect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}