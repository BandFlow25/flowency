import { Link } from "wouter";
import { 
  RectangleEllipsis, 
  PhoneIcon, 
  MapPinIcon 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">bndy</h3>
            <p className="text-sm text-gray-300 mb-4">
              Helping enterprises maintain strategic alignment and delivery performance through AI transitions.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://twitter.com" className="text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="https://github.com" className="text-gray-300 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><Link href="/solutions/intent-monitoring"><a className="text-gray-300 hover:text-white">Intent Monitoring</a></Link></li>
              <li><Link href="/solutions/cognitive-debt"><a className="text-gray-300 hover:text-white">Cognitive Debt Management</a></Link></li>
              <li><Link href="/solutions/ai-governance"><a className="text-gray-300 hover:text-white">AI Governance</a></Link></li>
              <li><Link href="/solutions/value-stream"><a className="text-gray-300 hover:text-white">Value Stream Optimization</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/resources/blog"><a className="text-gray-300 hover:text-white">Blog</a></Link></li>
              <li><Link href="/resources/case-studies"><a className="text-gray-300 hover:text-white">Case Studies</a></Link></li>
              <li><Link href="/resources/whitepapers"><a className="text-gray-300 hover:text-white">Whitepapers</a></Link></li>
              <li><Link href="/resources/webinars"><a className="text-gray-300 hover:text-white">Webinars</a></Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <RectangleEllipsis className="h-5 w-5 mt-1 mr-2 text-electric" />
                <span>contact@bndy.com</span>
              </li>
              <li className="flex items-start">
                <PhoneIcon className="h-5 w-5 mt-1 mr-2 text-electric" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 mt-1 mr-2 text-electric" />
                <span>123 AI Drive, San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bndy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
