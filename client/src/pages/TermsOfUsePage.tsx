import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Skip link for accessibility */}
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      {/* Navigation */}
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

      {/* Main Content */}
      <main id="main-content" className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Link */}
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

          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Use</h1>
            <p className="text-lg text-gray-600">
              Last updated: December 15, 2023
            </p>
          </motion.div>

          {/* Terms Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8">
              <p className="text-gray-800 font-medium">
                These Terms of Use, together with any and all other documents referred to herein, set out the terms of use under which you may use this website, Flowency.co.uk ("This Site"). Please read these Terms of Use carefully and ensure that you understand them. Your agreement to comply with and be bound by these Terms of Use is deemed to occur upon your first use of Our Site.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Definitions</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p><strong>"Account"</strong> - means an account required for a User to access and/or use certain areas of Our Site</p>
              <p><strong>"Content"</strong> - means any and all text, images, audio, video, scripts, code, software, databases and any other form of information capable of being stored on a computer that appears on, or forms part of, Our Site</p>
              <p><strong>"User"</strong> - means a user of Our Site</p>
              <p><strong>"User Content"</strong> - means any content submitted to Our Site by Users including, but not limited to, comments, feedback, reviews</p>
              <p><strong>"We/Us/Our"</strong> - Flowency Ltd 2024</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Information About Us</h2>
            <p className="mb-6">Our Site, Flowency.co.uk</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Access to Our Site</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Access to Our Site is free of charge.</li>
              <li>It is your responsibility to make any and all arrangements necessary in order to access Our Site.</li>
              <li>Access to Our Site is provided "as is" and on an "as available" basis. We may alter, suspend or discontinue Our Site (or any part of it) at any time and without notice. We will not be liable to you in any way if Our Site (or any part of it) is unavailable at any time and for any period.</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Intellectual Property Rights</h2>
            <div className="space-y-4 mb-6">
              <p>With the exception of User Content, all Content included on Our Site and the copyright and other intellectual property rights subsisting in that Content, unless specifically labelled otherwise, belongs to or has been licensed by Us.</p>
              
              <p><strong>You may:</strong></p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access, view and use Our Site in a web browser</li>
                <li>Download Our Site (or any part of it) for caching</li>
                <li>Print one copy of any page from Our Site</li>
                <li>Download extracts from pages on Our Site</li>
                <li>Save pages from Our Site for later and/or offline viewing</li>
              </ul>

              <p className="mt-4">Our status as the owner and author of the Content on Our Site must always be acknowledged.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. User Content</h2>
            <div className="space-y-4 mb-6">
              <p>User Content on Our Site includes (but is not necessarily limited to) forms submitted by users.</p>
              <p>You agree that you will be solely responsible for your User Content and that all such User Content will comply with Our Acceptable Usage Policy.</p>
              <p>We may reject, reclassify, or remove any User Content from Our Site where, in Our sole opinion, it violates Our Acceptable Usage Policy.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Liability and Disclaimers</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-6">
              <p className="font-medium text-gray-800">
                Nothing on Our Site constitutes advice on which you should rely. It is provided for information purposes only. Professional or specialist advice should always be sought before taking any action on the basis of any information provided on Our Site.
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <p>We make reasonable efforts to ensure that the Content on Our Site is complete, accurate, and up-to-date. We do not, however, make any representations, warranties or guarantees that the Content is complete, accurate, or up-to-date.</p>
              <p>To the fullest extent permissible by law, We accept no liability to any User for any loss or damage arising out of or in connection with the use of Our Site or the use of or reliance upon any Content included on Our Site.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p>For questions about these Terms of Use, please contact us at:</p>
              <p className="mt-2 font-medium">
                Email: <a href="mailto:hello@flowency.co.uk" className="text-orange-600 hover:text-orange-700">hello@flowency.co.uk</a>
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