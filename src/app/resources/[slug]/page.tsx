import Link from 'next/link';
import fs from 'fs';
import path from 'path';

// Map slugs to filenames
const slugToFilename: Record<string, string> = {
  'what-i-learned-spending-50000-on-the-wrong-thing': 'What I Learned Spending $50,000 on the Wrong Thing .txt',
  'why-your-website-needs-to-be-built-for-phones-first': 'Why your website needs to be built for phones first .txt',
  'website-wellness-score-is-your-site-helping-or-hurting': 'Website Wellness Score- Is your site helping or hurting? .txt',
  'what-should-be-on-your-homepage-and-what-shouldnt': 'What should be on your homepage (and what shouldn\'t) .txt',
  'website-automation-that-actually-helps-you': 'Website Automation That Actually Helps You.txt',
  'do-i-need-a-new-website': 'do i need a new website resource.txt',
  'local-seo-basics-for-small-business-websites': 'Local SEO basics for small business websites .txt',
  'what-to-do-if-you-already-paid-for-website-you-hate': 'What to do if you already paid for a website you hate? .txt',
  'why-your-google-business-profile-is-costing-you-customers': 'Why Your Google Business Profile Is Costing You Customers.txt',
  'how-ai-is-changing-google-search-and-what-it-means-for-small-businesses': 'ow AI Is Changing Google Search (And What It Means for Small Businesses) .txt'
};

function formatContent(content: string): string {
  // Convert markdown-like syntax to HTML
  let formatted = content
    // Headers
    .replace(/^### (.*?)$/gm, '<h3 class="font-bold text-xl text-foreground mb-3 mt-6">$1</h3>')
    .replace(/^## (.*?)$/gm, '<h2 class="font-display font-bold text-2xl lg:text-3xl text-foreground mb-4 mt-8">$1</h2>')
    .replace(/^# (.*?)$/gm, '<h1 class="font-display font-bold text-3xl lg:text-4xl text-foreground mb-6">$1</h1>')
    // Bold and italic
    .replace(/\*\*\*(.*?)\*\*\*/g, '<strong class="font-bold text-foreground"><em>$1</em></strong>')
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-foreground">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
    // Line breaks
    .replace(/\n\n/g, '</p><p class="text-lg text-text-light leading-relaxed mb-6">')
    // Lists
    .replace(/^- (.*?)$/gm, '<li class="ml-6 mb-2">• $1</li>')
    .replace(/(<li.*?<\/li>\n?)+/g, '<ul class="mb-6">$&</ul>');
  
  // Wrap in paragraph tags
  formatted = '<p class="text-lg text-text-light leading-relaxed mb-6">' + formatted + '</p>';
  
  // Clean up empty paragraphs
  formatted = formatted.replace(/<p[^>]*>\s*<\/p>/g, '');
  
  return formatted;
}

export async function generateStaticParams() {
  return Object.keys(slugToFilename).map((slug) => ({
    slug,
  }));
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filename = slugToFilename[slug];
  
  if (!filename) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-sage-light/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
          <p className="text-text-light mb-8">Sorry, we couldn't find the article you're looking for.</p>
          <Link href="/resources" className="text-primary hover:text-primary/80">
            ← Back to Resources
          </Link>
        </div>
      </div>
    );
  }
  
  // Read the article content
  const resourcesPath = path.join(process.cwd(), '..', 'Resources');
  const filePath = path.join(resourcesPath, filename);
  
  let content = '';
  try {
    content = fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    console.error('Error reading file:', error);
    content = '# Article Not Available\n\nSorry, this article is temporarily unavailable.';
  }
  
  // Extract title from content (first line)
  const lines = content.split('\n');
  const title = lines[0].replace(/^#\s*/, '');
  const formattedContent = formatContent(lines.slice(1).join('\n'));
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-sage-light/10">
      {/* Article Header */}
      <section className="relative bg-gradient-to-br from-primary via-slate-800 to-primary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-sage-light/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <Link 
            href="/resources" 
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Resources
          </Link>
          
          <h1 className="font-display font-bold text-4xl lg:text-5xl text-white mb-8 leading-tight">
            {title}
          </h1>
        </div>
      </section>
      
      {/* Article Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <article 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: formattedContent }}
        />
        
        {/* CTA Section */}
        <div className="mt-16 p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/20">
          <h3 className="font-display font-bold text-2xl text-foreground mb-4">
            Ready to Fix Your Website & Systems?
          </h3>
          <p className="text-lg text-text-light mb-6">
            Let's discuss how I can help you build a website that works and systems that save you time.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg"
          >
            Book a Free 15-min Call
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}