import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary to-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="font-display font-bold text-xl mb-2 bg-gradient-to-r from-white to-sage-light bg-clip-text text-transparent">
              BUILT BY TOM
            </div>
            <div className="text-white/80 mb-4">North Haven, CT</div>
            <div className="text-white/80 mb-2">tom@ibuildcalm.com</div>
            <div className="text-white/80">(555) 123-4567</div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="/services/website" className="hover:text-sage-light transition-colors">
                  Website Services
                </Link>
              </li>
              <li>
                <Link href="/services/automation" className="hover:text-sage-light transition-colors">
                  Automation
                </Link>
              </li>
              <li>
                <Link href="/services/complete-system" className="hover:text-sage-light transition-colors">
                  Complete System
                </Link>
              </li>
              <li>
                <Link href="/services/website-audit" className="hover:text-sage-light transition-colors">
                  Website & Systems Review
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/industries" className="hover:text-sage-light transition-colors">
                  Industries I Serve
                </Link>
              </li>
              <li>
                <Link href="/service-areas/new-haven-county" className="hover:text-sage-light transition-colors">
                  Service Areas
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="/" className="hover:text-sage-light transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-sage-light transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-sage-light transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-sage-light transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
            <p className="text-white/80 mb-4">
              Need help with your website or workflow? Schedule a free call to see if we&apos;re a good fit.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-white/90 hover:shadow-lg transition-all duration-200"
            >
              Book a Free 15-min Call
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/70 text-sm">
            © 2025 Built By Tom. All rights reserved.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-white/70 hover:text-sage-light text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/70 hover:text-sage-light text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;