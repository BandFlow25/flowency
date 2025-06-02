import { Link } from "wouter";

interface FooterProps {
  ctaText?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  bgColor?: string;
  textColor?: string;
}

export default function Footer({ 
  ctaText = "Ready to optimise your delivery systems?",
  ctaDescription = "Let's discuss how we can help transform your organisation's flow.",
  ctaButtonText = "Get in touch",
  bgColor = "bg-gray-900",
  textColor = "text-white"
}: FooterProps) {
  return (
    <footer className={`${bgColor} ${textColor} py-12`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Logo and Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-4 mb-4">
              <img 
                src="https://cdn.prod.website-files.com/668bbc8f0f25bb8294a73f2f/6695430306a42b90cd8bf9be_Flowency-logo-meso.svg" 
                alt="Flowency"
                className="h-6 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              Flowency delivers capability-building consultancy and training for high-performing delivery organisations.
            </p>
            <p className="text-gray-500 text-xs mb-4">© 2025 Flowency. All rights reserved.</p>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-sm">Services</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                  <li><Link to="/intentops" className="text-gray-400 hover:text-amber-400 transition-colors">IntentOps</Link></li>
                  <li><Link to="/actuate" className="text-gray-400 hover:text-yellow-400 transition-colors">Actuate</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3 text-sm">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://www.flowency.co.uk/terms-of-use" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Terms of Use</a></li>
                  <li><a href="https://www.flowency.co.uk/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="https://www.flowency.co.uk/cookie-policy" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Cookies</a></li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-3 text-sm">FOLLOW</h4>
              <a 
                href="https://www.linkedin.com/company/flowency/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2 text-sm"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
                <span>LinkedIn</span>
              </a>
              <a 
                href="mailto:hello@flowency.co.uk" 
                className="text-gray-400 hover:text-white transition-colors text-sm mt-2 block"
              >
                hello@flowency.co.uk
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <h3 className="text-lg font-bold mb-2">{ctaText}</h3>
              <p className="text-gray-400 mb-4 text-sm">{ctaDescription}</p>
              <button 
                onClick={() => window.open('mailto:hello@flowency.co.uk?subject=Contact Us', '_blank')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors w-full"
              >
                {ctaButtonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}