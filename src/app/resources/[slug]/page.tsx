import Link from 'next/link';
import fs from 'fs';
import path from 'path';

// Map slugs to filenames
const slugToFilename: Record<string, string> = {
  'what-i-learned-spending-50000-on-the-wrong-thing': 'What I Learned Spending $50,000 on the Wrong Thing.txt',
  'why-your-website-needs-to-be-built-for-phones-first': 'Why your website needs to be built for phones first.txt',
  'website-wellness-score-is-your-site-helping-or-hurting': 'Website Wellness Score- Is your site helping or hurting.txt',
  'what-should-be-on-your-homepage-and-what-shouldnt': 'What should be on your homepage and what shouldnt.txt',
  'website-automation-that-actually-helps-you': 'Website Automation That Actually Helps You.txt',
  'do-i-need-a-new-website': 'do i need a new website resource.txt',
  'local-seo-basics-for-small-business-websites': 'Local SEO basics for small business websites.txt',
  'what-to-do-if-you-already-paid-for-website-you-hate': 'What to do if you already paid for a website you hate.txt',
  'why-your-google-business-profile-is-costing-you-customers': 'Why Your Google Business Profile Is Costing You Customers.txt',
  'how-ai-is-changing-google-search-and-what-it-means-for-small-businesses': 'How AI Is Changing Google Search And What It Means for Small Businesses.txt'
};

function formatContent(content: string): string {
  // Check if content has markdown by looking for common patterns
  const hasMarkdown = content.includes('##') || content.includes('**') || content.includes('###');
  
  if (hasMarkdown) {
    // Process as markdown
    let formatted = content;
    
    // Process markdown headers first
    formatted = formatted
      .replace(/^### (.*?)$/gm, '<h3 class="font-bold text-xl lg:text-2xl text-primary mb-4 mt-10 pb-2 border-b border-gray-100">$1</h3>')
      .replace(/^## (.*?)$/gm, '<h2 class="font-display font-bold text-2xl lg:text-3xl text-foreground mb-6 mt-12">$1</h2>')
      .replace(/^# (.*?)$/gm, '<h1 class="font-display font-bold text-3xl lg:text-4xl text-foreground mb-8">$1</h1>');
      
    // Process italic text (description line)
    formatted = formatted.replace(/^\*(.*?)\*$/gm, '<p class="text-xl text-text-light italic mb-8 leading-relaxed">$1</p>');
    
    // Process bold text
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-foreground">$1</strong>');
    
    // Process markdown lists
    formatted = formatted.replace(/^- (.*?)$/gm, '<li>$1</li>');
    formatted = formatted.replace(/(<li>.*?<\/li>\s*)+/g, (match) => {
      const items = match.trim().split('\n').map(item => {
        const content = item.replace(/<\/?li>/g, '').trim();
        return `
          <li class="flex items-start mb-3">
            <svg class="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-text-light">${content}</span>
          </li>`;
      }).join('');
      return `<ul class="mb-8 space-y-2">${items}</ul>`;
    });
    
    // Process remaining paragraphs
    const lines = formatted.split('\n');
    const processedLines: string[] = [];
    
    lines.forEach((line) => {
      const trimmed = line.trim();
      
      if (!trimmed || trimmed.startsWith('<')) {
        processedLines.push(line);
        return;
      }
      
      // Skip "Share:" lines
      if (trimmed === 'Share:') {
        return;
      }
      
      processedLines.push(`<p class="text-lg text-text-light leading-relaxed mb-6">${trimmed}</p>`);
    });
    
    return processedLines.join('\n');
    
  } else {
    // Process as plain text with intelligent detection
    const lines = content.split('\n');
    const processedLines: string[] = [];
    let inList = false;
    
    lines.forEach((line, index) => {
      const trimmed = line.trim();
      
      // Skip empty lines
      if (!trimmed) {
        if (inList) {
          processedLines.push('</ul>');
          inList = false;
        }
        return;
      }
      
      // Skip "Share:" lines
      if (trimmed === 'Share:' || trimmed.toLowerCase() === 'share') {
        return;
      }
      
      // Detect subtitle (second non-empty line that's descriptive)
      if (index > 0 && index < 5 && trimmed.length > 40 && trimmed.includes(' ') && !lines.slice(0, index).some(l => l.trim().length > 10)) {
        processedLines.push(`<p class="text-xl text-text-light italic mb-8 leading-relaxed">${trimmed}</p>`);
        return;
      }
      
      // Detect headers (short lines, often questions or statements without punctuation at specific positions)
      if (trimmed.length < 60 && 
          index > 0 && 
          (trimmed.endsWith('?') || !trimmed.match(/[.!,]$/)) &&
          (index === 0 || lines[index - 1].trim() === '')) {
        
        // Check if next line exists and is longer (indicates this is likely a header)
        if (index < lines.length - 1 && lines[index + 1].trim().length > trimmed.length) {
          processedLines.push(`<h2 class="font-display font-bold text-2xl lg:text-3xl text-foreground mb-6 mt-12">${trimmed}</h2>`);
          return;
        }
      }
      
      // Detect numbered lists
      if (trimmed.match(/^\d+\./)) {
        if (!inList) {
          processedLines.push('<ul class="mb-8 space-y-3">');
          inList = true;
        }
        const listContent = trimmed.replace(/^\d+\.\s*/, '');
        processedLines.push(`
          <li class="flex items-start">
            <svg class="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="text-text-light">${listContent}</span>
          </li>`);
        return;
      }
      
      // Close list if needed
      if (inList && !trimmed.match(/^\d+\./)) {
        processedLines.push('</ul>');
        inList = false;
      }
      
      // Regular paragraph
      processedLines.push(`<p class="text-lg text-text-light leading-relaxed mb-6">${trimmed}</p>`);
    });
    
    // Close any open lists
    if (inList) {
      processedLines.push('</ul>');
    }
    
    return processedLines.join('\n');
  }
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
  
  // Read the article content from public directory
  const resourcesPath = path.join(process.cwd(), 'public', 'resources-content');
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
      <section className="py-12 lg:py-16">
        {/* Article Info Bar */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="flex flex-wrap items-center gap-6 text-sm text-text-light">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>8 min read</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>By Tom</span>
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              <span>Business Strategy</span>
            </div>
          </div>
        </div>

        {/* Main Article */}
        <div className="bg-white">
          <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              className="article-content"
              dangerouslySetInnerHTML={{ __html: formattedContent }}
            />
          </article>
        </div>

        {/* Visual Break */}
        <div className="my-16 relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-4">
              <svg className="w-8 h-8 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative mt-20 p-10 bg-gradient-to-br from-primary via-primary/95 to-secondary text-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
            
            <div className="relative">
              <div className="text-center mb-8">
                <div className="inline-block p-3 bg-white/10 rounded-full mb-4 backdrop-blur-sm">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-3xl mb-4">
                  Ready to Stop the Chaos?
                </h3>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Let's talk about your specific situation. No sales pitch, just honest advice about what will actually help.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Schedule Your Free Call
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                
                <Link 
                  href="/services/website-audit" 
                  className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-200"
                >
                  Get a Website Audit
                </Link>
              </div>
              
              <p className="text-center text-white/70 text-sm mt-6">
                No pressure. No BS. Just real solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Related Articles Section */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-12">
          <h3 className="font-display font-bold text-2xl text-foreground mb-8 text-center">
            Keep Reading
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/resources/website-wellness-score-is-your-site-helping-or-hurting" className="group">
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <h4 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  Website Wellness Score
                </h4>
                <p className="text-text-light text-sm">
                  A simple checklist to diagnose if your website is actually bringing in customers.
                </p>
              </div>
            </Link>
            
            <Link href="/resources/website-automation-that-actually-helps-you" className="group">
              <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <h4 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  Website Automation That Actually Helps
                </h4>
                <p className="text-text-light text-sm">
                  Stop doing manual tasks that waste your time. Smart automation that grows your business.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}