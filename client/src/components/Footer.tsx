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
    <footer className="bg-white">
      {/* CTA Section with page-specific colors */}
      <section className={`${bgColor} ${textColor} py-8`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-bold mb-2">{ctaText}</h3>
          <p className="text-sm mb-4 opacity-90 max-w-2xl mx-auto">
            {ctaDescription}
          </p>
          <button 
            onClick={() => window.open('mailto:hello@flowency.co.uk?subject=Contact Us', '_blank')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            {ctaButtonText}
          </button>
        </div>
      </section>

      {/* Main Footer with Flowency theme */}
      <div className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Company Info */}
            <div className="md:col-span-2">
              <img 
                src="https://cdn.prod.website-files.com/668bbc8f0f25bb8294a73f2f/6695430306a42b90cd8bf9be_Flowency-logo-meso.svg" 
                alt="Flowency"
                className="h-6 w-auto mb-2"
              />
              <p className="text-gray-600 text-sm mb-2 max-w-md">
                Flowency delivers capability-building consultancy and training for high-performing delivery organisations.
              </p>
              <p className="text-gray-500 text-xs mb-3">© 2025 Flowency. All rights reserved.</p>
              <div className="flex items-center space-x-4">
                <a 
                  href="https://www.linkedin.com/company/flowency/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="mailto:hello@flowency.co.uk" 
                  className="text-gray-600 hover:text-orange-600 transition-colors text-xs"
                >
                  hello@flowency.co.uk
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-gray-900 font-semibold mb-2 text-xs">Services</h4>
              <ul className="space-y-1">
                <li><Link to="/" className="text-gray-600 hover:text-orange-600 transition-colors text-xs">Home</Link></li>
                <li><Link to="/intentops" className="text-gray-600 hover:text-orange-600 transition-colors text-xs">IntentOps</Link></li>
                <li><Link to="/actuate" className="text-gray-600 hover:text-orange-600 transition-colors text-xs">Actuate</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-gray-900 font-semibold mb-2 text-xs">Legal</h4>
              <ul className="space-y-1">
                <li><a href="https://www.flowency.co.uk/terms-of-use" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-600 transition-colors text-xs">Terms of Use</a></li>
                <li><a href="https://www.flowency.co.uk/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-600 transition-colors text-xs">Privacy Policy</a></li>
                <li><a href="https://www.flowency.co.uk/cookie-policy" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-600 transition-colors text-xs">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}