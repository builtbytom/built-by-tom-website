'use client';

import Link from 'next/link';
import { useState } from 'react';

// This would typically come from a CMS or API
const articles = [
  {
    id: 'what-i-learned-spending-50000',
    title: 'What I Learned Spending $50,000 on the Wrong Thing',
    excerpt: 'How running a business without systems nearly killed our growth (and our sanity). The hidden costs of "winging it" and how simple processes saved us thousands.',
    category: 'Business Operations',
    readTime: '8 min read',
    featured: true,
    slug: 'what-i-learned-spending-50000-on-the-wrong-thing'
  },
  {
    id: 'mobile-first-design',
    title: 'Why Your Website Needs to Be Built for Phones First',
    excerpt: '75% of people judge your business credibility based on your mobile website. Learn why mobile-first design is critical and how to get it right.',
    category: 'Website Design',
    readTime: '6 min read',
    featured: false,
    slug: 'why-your-website-needs-to-be-built-for-phones-first'
  },
  {
    id: 'website-wellness-score',
    title: 'Website Wellness Score: Is Your Site Helping or Hurting?',
    excerpt: 'A simple checklist to diagnose if your website is actually bringing in customers or pushing them away to your competitors.',
    category: 'Website Audit',
    readTime: '5 min read',
    featured: false,
    slug: 'website-wellness-score-is-your-site-helping-or-hurting'
  },
  {
    id: 'homepage-essentials',
    title: 'What Should Be on Your Homepage (And What Shouldn\'t)',
    excerpt: 'Your homepage has 3 seconds to convince visitors you can help them. Here\'s exactly what needs to be there and what\'s just clutter.',
    category: 'Website Design',
    readTime: '7 min read',
    featured: false,
    slug: 'what-should-be-on-your-homepage-and-what-shouldnt'
  },
  {
    id: 'website-automation',
    title: 'Website Automation That Actually Helps You',
    excerpt: 'Stop doing manual tasks that waste your time. Smart automation that captures leads, nurtures customers, and grows your business.',
    category: 'Automation',
    readTime: '9 min read',
    featured: false,
    slug: 'website-automation-that-actually-helps-you'
  },
  {
    id: 'google-business-profile',
    title: 'Why Your Google Business Profile Is Costing You Customers',
    excerpt: 'Most businesses set up their Google profile once and forget it. Meanwhile, it\'s actively driving customers to competitors.',
    category: 'Local SEO',
    readTime: '6 min read',
    featured: false,
    slug: 'why-your-google-business-profile-is-costing-you-customers'
  },
  {
    id: 'local-seo-basics',
    title: 'Local SEO Basics for Small Business Websites',
    excerpt: 'Simple, practical steps to help your business show up when people in your area search for what you offer.',
    category: 'Local SEO',
    readTime: '8 min read',
    featured: false,
    slug: 'local-seo-basics-for-small-business-websites'
  },
  {
    id: 'ai-changing-google',
    title: 'How AI Is Changing Google Search (And What It Means for Small Businesses)',
    excerpt: 'Google\'s AI is changing how people find businesses. Here\'s what you need to know to stay visible and competitive.',
    category: 'SEO Strategy',
    readTime: '7 min read',
    featured: false,
    slug: 'how-ai-is-changing-google-search-and-what-it-means-for-small-businesses'
  },
  {
    id: 'do-i-need-new-website',
    title: 'Do I Need a New Website?',
    excerpt: 'Not every website problem needs a complete rebuild. Here\'s how to tell if you need a new site or just some strategic improvements.',
    category: 'Website Strategy',
    readTime: '5 min read',
    featured: false,
    slug: 'do-i-need-a-new-website'
  },
  {
    id: 'paid-for-website-hate',
    title: 'What to Do If You Already Paid for a Website You Hate',
    excerpt: 'Stuck with a website that doesn\'t work? Here are your options and how to avoid throwing good money after bad.',
    category: 'Website Strategy',
    readTime: '6 min read',
    featured: false,
    slug: 'what-to-do-if-you-already-paid-for-a-website-you-hate'
  }
];

const categories = ['All', 'Website Design', 'Business Operations', 'Automation', 'Local SEO', 'SEO Strategy', 'Website Strategy', 'Website Audit'];

export default function Resources() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-gradient-to-br from-primary via-slate-800 to-secondary overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-sage-light/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }}></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '2s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-6 py-2 rounded-full text-sm font-medium border border-white/20">
                Free Resources & Insights
              </span>
            </div>
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-white mb-6 leading-none">
              Stop Guessing.
              <span className="block bg-gradient-to-r from-white via-accent via-sage-light to-white bg-clip-text text-transparent pb-2" style={{ 
                backgroundSize: '600% 600%',
                animation: 'gradient 3s ease infinite'
              }}>
                Start Knowing.
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Real-world advice from 20+ years of building, breaking, and fixing business systems. No theory. Just what actually works.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-gray-100 text-foreground hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (searchTerm === '' && selectedCategory === 'All') && (
        <section className="py-16 bg-gradient-to-br from-background to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-4">
                Featured Article
              </h2>
              <p className="text-xl text-text-light">
                The story that started it all
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl p-10 shadow-2xl border border-gray-100 relative">
                <div className="absolute -top-3 left-8 bg-accent text-white px-4 py-2 rounded-full text-sm font-bold z-10">
                  Featured
                </div>
                
                <div className="pt-4">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                      {featuredArticle.category}
                    </span>
                    <span className="text-text-light text-sm">{featuredArticle.readTime}</span>
                  </div>
                  
                  <h3 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-6 leading-tight">
                    {featuredArticle.title}
                  </h3>
                  
                  <p className="text-xl text-text-light mb-8 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <Link 
                    href={`/resources/${featuredArticle.slug}`}
                    className="inline-flex items-center px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105"
                  >
                    Read Full Article
                    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="font-bold text-2xl text-foreground mb-4">No articles found</h3>
              <p className="text-text-light">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-16">
                <h2 className="font-display font-bold text-3xl lg:text-4xl text-foreground mb-4">
                  {searchTerm || selectedCategory !== 'All' ? 'Search Results' : 'All Articles'}
                </h2>
                <p className="text-text-light">
                  {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {regularArticles.map((article) => (
                  <div key={article.id} className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                      <span className="text-text-light text-sm">{article.readTime}</span>
                    </div>
                    
                    <h3 className="font-display font-bold text-2xl text-foreground mb-4 leading-tight">
                      {article.title}
                    </h3>
                    
                    <p className="text-text-light mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>
                    
                    <Link 
                      href={`/resources/${article.slug}`}
                      className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors duration-200"
                    >
                      Read Article
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-4xl lg:text-5xl mb-8">
            Ready to Fix What's Broken?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            These articles are just the beginning. Let's talk about your specific situation and build solutions that actually work.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-12 py-6 bg-white text-primary text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              Book a Free Call
              <svg className="w-6 h-6 ml-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            
            <Link 
              href="/services" 
              className="inline-flex items-center px-8 py-6 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300"
            >
              See How I Can Help
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}