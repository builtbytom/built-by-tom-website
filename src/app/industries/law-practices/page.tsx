import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Law Practice Websites & Automation | Built By Tom - North Haven, CT',
  description: 'Stop drowning in paperwork and chasing clients for documents. Get a secure portal, automated reminders, and systems that let you practice law.',
  keywords: 'law firm website new haven county, attorney client portal ct, legal practice automation, lawyer document management connecticut',
};

export default function LawPracticesPage() {
  const painPoints = [
    {
      icon: '📧',
      title: 'Clients Who Treat Email Like a Foreign Language',
      problem: '"Please scan and email those forms." Three days later: radio silence. Then at 2am you get a blurry sideways photo of page 3 taken with a potato. You ask for simple documents. They send you screenshots of screenshots. Or 47 separate emails with one page each. Or they fax something in 2025 and act like they\'ve done you a favor.'
    },
    {
      icon: '🗂️',
      title: 'Your Files Live in Seventeen Different Places',
      problem: 'Case documents are scattered across email, Dropbox, your desk, client texts, that thumb drive from 2019, and probably your car somewhere. You need a treasure map to find anything. Opposing counsel asks for discovery, and you\'re digging through six different folders wondering why you didn\'t organize this better six months ago.'
    },
    {
      icon: '📝',
      title: 'The Retainer That\'s Always "In the Mail"',
      problem: '"I\'ll send the signed retainer today!" Two weeks later: "Did you get my retainer?" No. Because you never sent it. Clients promise to send signed agreements, then forget. You can\'t start work without it, they get mad you\'re not working, and everyone\'s frustrated. Meanwhile, the statute of limitations doesn\'t care about their signing habits.'
    },
    {
      icon: '❓',
      title: 'Playing Twenty Questions with New Clients',
      problem: '"What\'s your case about?" "Well, it\'s complicated..." Thirty minutes later, you still don\'t know if they need a divorce lawyer or a personal injury attorney. Intake calls that should take ten minutes turn into therapy sessions. You\'re trying to figure out basic facts while they tell you their entire life story, backwards, with commentary from their cousin.'
    },
    {
      icon: '💸',
      title: 'Invoice Amnesia',
      problem: '"I never got your bill!" (You sent it three times.) "How do I pay this again?" (Same way you paid last month.) "Can you just take it out of my settlement?" (That\'s not how this works.) Every month, the same dance. Clients lose invoices, forget how to pay, or act surprised that legal work costs money. You\'re a lawyer, not a collections agency, but here you are.'
    },
    {
      icon: '⭐',
      title: 'The Google Review Desert',
      problem: 'You save someone\'s house, win their custody case, get them a great settlement. Google reviews? Crickets. But that one client from 2019 who didn\'t like your paralegal\'s tone? Five paragraphs on Yelp. Happy clients disappear after you solve their problems. Unhappy clients write novels about how you ruined their life because you charged them for phone calls.'
    }
  ];

  const solutions = [
    {
      icon: '🏛️',
      title: 'A Client Portal That Doesn\'t Suck',
      description: 'One place for everything. Clients upload documents, sign stuff, see their case status. No more "did you get my email?" because everything\'s right there.',
      result: 'Stop playing hide and seek with documents'
    },
    {
      icon: '⏰',
      title: 'Automated "Where\'s My Stuff?" Reminders',
      description: 'Gentle, automatic nudges when clients owe you documents or signatures. You don\'t have to be the bad guy chasing people down.',
      result: 'Get what you need without feeling like a debt collector'
    },
    {
      icon: '📋',
      title: 'Intake Forms That Actually Work',
      description: 'Online forms that ask the right questions and get the right answers before you waste an hour on a consultation call.',
      result: 'Know what you\'re dealing with before you pick up the phone'
    },
    {
      icon: '✍️',
      title: 'E-Signatures That Don\'t Require a PhD',
      description: 'Send retainers, agreements, whatever. Clients sign with their finger, you get it back instantly. No printing, no scanning, no explaining.',
      result: 'Get agreements signed this century'
    },
    {
      icon: '📁',
      title: 'Document Storage That Makes Sense',
      description: 'Everything organized, searchable, and in one place. When opposing counsel asks for something, you find it in 30 seconds instead of 30 minutes.',
      result: 'Look professional, work faster'
    },
    {
      icon: '💳',
      title: 'Billing That Doesn\'t Make You Feel Gross',
      description: 'Automated invoices, payment links, gentle reminders. Clients pay online without you having to chase them like they owe money to the mob.',
      result: 'Get paid without the awkward conversations'
    },
    {
      icon: '⭐',
      title: 'Review Requests That Follow the Rules',
      description: 'When cases close successfully, clients get a simple, professional request to share their experience. More reviews, better reputation.',
      result: 'Finally get credit for all those wins'
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
            <div className="flex justify-center items-center mb-6">
              <div className="text-5xl">⚖️</div>
              <div className="mx-4 bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium border border-white/20">
                Law Practice
              </div>
              <div className="text-5xl">📚</div>
            </div>
            
            <div className="mb-8">
              <span className="inline-flex items-center bg-accent text-white px-6 py-3 rounded-full font-bold text-lg">
                ⚖️ Built for Legal Professionals
              </span>
            </div>
            
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              "Winning Cases, Losing Time"
              <span className="block text-3xl sm:text-4xl lg:text-5xl text-white/80 mt-4 font-semibold">
                ...and Drowning in Paperwork You Shouldn't Even Be Chasing
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
              You went to law school to practice law, not to chase documents all day.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">😩</div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
              The Real Problems Law Firms and Solo Attorneys Face
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {painPoints.map((point, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
                <div className="flex items-center mb-4">
                  <h3 className="font-bold text-2xl text-foreground">
                    <span className="text-5xl mr-2">{point.icon}</span> {point.title}
                  </h3>
                </div>
                <p className="text-text-light leading-relaxed">
                  {point.problem}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-gradient-to-br from-background to-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-5xl mb-6">✨</div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Here's What Actually Works for Law Firms
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center mb-4">
                  <h3 className="font-bold text-2xl text-foreground">
                    <span className="text-5xl mr-2">{solution.icon}</span> {solution.title}
                  </h3>
                </div>
                <p className="text-text-light mb-6 leading-relaxed">
                  {solution.description}
                </p>
                <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
                  <p className="text-primary font-bold text-lg">
                    {solution.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-5xl mb-6">⚖️</div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Lawyers in New Haven County
            </h2>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Solo attorneys in Hamden, growing firms in New Haven, family law practices in Wallingford—the headaches are always the same. Great lawyers buried under administrative garbage that has nothing to do with actually practicing law.
            </p>
            <p className="text-lg text-text-light leading-relaxed">
              You didn't spend three years in law school to become a document-chasing, invoice-sending administrative assistant. But here we are.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-background to-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-5xl mb-6">💰</div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-foreground mb-6">
              What This Costs
            </h2>
            <p className="text-xl text-text-light">
              No surprises, no monthly fees that eat your profits.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="font-bold text-2xl text-foreground mb-4">
                <span className="text-5xl mr-2">🌐</span> Professional Website
              </h3>
              <div className="text-3xl font-bold text-primary mb-2">$3,500</div>
              <p className="text-text-light">
                Professional website, secure client portal, intake systems that actually work. Look like the established firm you are (or want to be).
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="font-bold text-2xl text-foreground mb-4">
                <span className="text-5xl mr-2">⚡</span> Complete Automation System
              </h3>
              <div className="text-3xl font-bold text-primary mb-2">$1,797</div>
              <p className="text-text-light">
                Document requests, e-signatures, billing reminders, review requests—all the boring stuff that eats your day, handled automatically. Want both? I'll build something that fits your practice.
              </p>
            </div>
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
          <div className="text-6xl mb-8">⚖️</div>
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-8">
            Stop Chasing People Around, Start Practicing Law
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            If you're tired of playing document detective, invoice collector, and tech support all in the same day—let's fix it.
          </p>
          
          <Link 
            href="/contact" 
            className="inline-flex items-center px-12 py-6 bg-white text-primary text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          >
            Let's Talk About Getting Your Life Back
            <svg className="w-6 h-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}