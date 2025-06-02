import { Link } from "wouter";

interface FooterProps {
  ctaText?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
  ctaPanelColor?: string;
}

export default function Footer({ 
  ctaText = "Ready to optimise your delivery systems?",
  ctaDescription = "Let's discuss how we can help transform your organisation's flow.",
  ctaButtonText = "Get in touch",
  ctaPanelColor = "bg-blue-600"
}: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Section with branded color */}
      <div className={`${ctaPanelColor} py-10`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-3 text-white">{ctaText}</h3>
            <p className="text-sm mb-6 opacity-90 max-w-3xl mx-auto text-white">
              {ctaDescription}
            </p>
            <button 
              onClick={() => window.open('mailto:hello@flowency.co.uk?subject=Contact Us', '_blank')}
              className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-lg font-semibold transition-colors backdrop-blur-sm"
            >
              {ctaButtonText}
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer - condensed */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-3">
                <img 
                  src="https://cdn.prod.website-files.com/668bbc8f0f25bb8294a73f2f/6695430306a42b90cd8bf9be_Flowency-logo-meso.svg" 
                  alt="Flowency"
                  className="h-6 w-auto filter brightness-0 invert mr-3"
                />
                <span className="text-lg font-bold">Flowency</span>
              </div>
              <p className="text-gray-400 text-sm max-w-md">
                AI builders optimising delivery systems for the enterprise.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold mb-3 text-sm">Services</h4>
              <ul className="space-y-1">
                <li><Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Home</Link></li>
                <li><Link href="/intentops" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">IntentOps</Link></li>
                <li><Link href="/actuate" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">Actuate</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-3 text-sm">Legal</h4>
              <ul className="space-y-1">
                <li><a href="https://flowency.notion.site/Terms-of-Use-153c8e7e5da280b29b87cc4b09c3b97b" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Terms of Use</a></li>
                <li><a href="https://flowency.notion.site/Privacy-Policy-153c8e7e5da2804196ffeb3b8c29a5fb" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Privacy Policy</a></li>
                <li><a href="https://flowency.notion.site/Cookies-153c8e7e5da2800e8ebdebc9bb2a6b72" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Cookies</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-gray-700 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs">
              © 2024 Flowency. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-3 md:mt-0">
              <a href="https://www.linkedin.com/company/flowency/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}