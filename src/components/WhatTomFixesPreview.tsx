
export default function WhatTomFixesPreview() {
  const problems = [
    {
      icon: "🌐",
      title: "Websites that don't work",
      description: "Slow, confusing, or invisible to customers"
    },
    {
      icon: "⚙️", 
      title: "Manual business chaos",
      description: "Drowning in tasks that should run themselves"
    },
    {
      icon: "🔗",
      title: "Broken connections", 
      description: "Tools that don't talk to each other"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
            I Fix Three Things
          </h2>
          <p className="text-xl text-text-light max-w-2xl mx-auto">
            Most business problems come down to one of these. Which one is eating your time?
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="group text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <span className="text-3xl">{problem.icon}</span>
              </div>
              <h3 className="font-bold text-xl text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-text-light leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-foreground font-semibold mb-4">
            Not sure which one is your biggest headache?
          </p>
          <p className="text-text-light">
            Take the quick assessment below ↓
          </p>
        </div>
      </div>
    </section>
  );
}