import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

interface NavigationProps {
  currentPage?: 'home' | 'intentops' | 'actuate';
}

export default function Navigation({ currentPage = 'home' }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="https://cdn.prod.website-files.com/668bbc8f0f25bb8294a73f2f/6695430306a42b90cd8bf9be_Flowency-logo-meso.svg" 
                alt="Flowency"
                className="h-8 w-auto cursor-pointer"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`transition-colors ${
              currentPage === 'home' 
                ? 'text-orange-600 font-bold' 
                : 'text-gray-900 hover:text-orange-600'
            }`}>
              Home
            </Link>
            <Link to="/intentops" className={`transition-colors ${
              currentPage === 'intentops' 
                ? 'text-amber-500 font-bold' 
                : 'text-gray-900 hover:text-amber-500'
            }`}>
              IntentOps
            </Link>
            <Link to="/actuate" className={`transition-colors ${
              currentPage === 'actuate' 
                ? 'text-teal-500 font-bold' 
                : 'text-gray-900 hover:text-teal-500'
            }`}>
              Actuate
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <a 
              href="#contact" 
              className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 rounded-md transition-colors text-sm"
            >
              Contact
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link 
                to="/" 
                className={`block px-3 py-2 text-base transition-colors ${
                  currentPage === 'home' 
                    ? 'text-orange-600 font-bold' 
                    : 'text-gray-900 hover:text-orange-600'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/intentops" 
                className={`block px-3 py-2 text-base transition-colors ${
                  currentPage === 'intentops' 
                    ? 'text-amber-500 font-bold' 
                    : 'text-gray-900 hover:text-amber-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                IntentOps
              </Link>
              <Link 
                to="/actuate" 
                className={`block px-3 py-2 text-base transition-colors ${
                  currentPage === 'actuate' 
                    ? 'text-teal-500 font-bold' 
                    : 'text-gray-900 hover:text-teal-500'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Actuate
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}