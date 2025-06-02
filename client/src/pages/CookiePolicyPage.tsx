import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
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
              <Link to="/" className="text-gray-900 hover:text-orange-600 transition-colors">Home</Link>
              <Link to="/intentops" className="text-gray-900 hover:text-amber-500 transition-colors">IntentOps</Link>
              <Link to="/actuate" className="text-gray-900 hover:text-teal-500 transition-colors">Actuate</Link>
            </div>
          </div>
        </div>
      </nav>

      <main id="main-content" className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Link to="/" className="inline-flex items-center text-gray-600 hover:text-orange-600 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
            <p className="text-lg text-gray-600">
              Understanding how we use cookies on our website
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8">
              <p className="text-gray-800 font-medium">
                When you use our website, mobile site, or other digital services, information may be collected through the use of cookies and similar technologies.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What are cookies?</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="mb-4">
                Cookies are small text files which are downloaded when you visit a website or application. Your browser can read these files and, in some cases, remember your preferences such as which content to display on the screen.
              </p>
              <p className="mb-4">
                Cookies are not programs and so can't contain a virus. They are stored in .txt format so you can open them with Notepad or any other text editor. They usually contain two pieces of information – a site name and a unique user ID.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Managing cookies in your browser</h2>
            <p className="mb-6">
              You can manage cookies through your browser settings. Please use the links below to find out more details on how to manage cookies from each of the major browsers:
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Desktop Browsers</h3>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-orange-700 underline"
                    >
                      Internet Explorer
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-orange-700 underline"
                    >
                      Firefox
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://support.google.com/chrome/answer/95647?hl=en-GB&co=GENIE.Platform%3DDesktop" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-orange-700 underline"
                    >
                      Google Chrome
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://www.aboutcookies.org.uk/managing-cookies/opera" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-orange-700 underline"
                    >
                      Opera
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-3">Mobile Browsers</h3>
                <ul className="space-y-2">
                  <li>
                    <a 
                      href="https://help.apple.com/safari/mac/8.0/en.lproj/sfri11471.html" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-orange-700 underline"
                    >
                      Safari (Mac)
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://support.apple.com/en-gb/HT201265" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-orange-700 underline"
                    >
                      Safari iOS
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://support.google.com/chrome/answer/95647?hl=EN" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-orange-700 underline"
                    >
                      Android Chrome
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h3 className="font-semibold text-gray-800 mb-2">Important note</h3>
              <p className="text-gray-700">
                Remember that some of our website features won't work with cookies turned off. Disabling cookies may affect your browsing experience and limit certain functionality.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Types of cookies we use</h2>
            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-800">Essential cookies</h3>
                <p className="text-sm text-gray-600 mt-1">These cookies are necessary for the website to function and cannot be switched off in our systems.</p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-800">Analytics cookies</h3>
                <p className="text-sm text-gray-600 mt-1">These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
              </div>
              
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold text-gray-800">Preference cookies</h3>
                <p className="text-sm text-gray-600 mt-1">These cookies allow our website to remember choices you make and provide enhanced, more personal features.</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-3">Questions about our cookie policy?</h3>
              <p className="text-gray-700 mb-2">
                If you have any questions about how we use cookies, please contact us:
              </p>
              <p className="font-medium">
                Email: <a href="mailto:hello@flowency.co.uk" className="text-orange-600 hover:text-orange-700">hello@flowency.co.uk</a>
              </p>
              <p className="text-sm text-gray-600 mt-3">
                For more information about our data practices, please see our <Link to="/privacy-policy" className="text-orange-600 hover:text-orange-700 underline">Privacy Policy</Link>.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer 
        ctaText="Ready to get started?"
        ctaDescription="Contact us to learn how Flowency can help optimize your delivery systems."
        ctaButtonText="Contact Us"
      />
    </div>
  );
}