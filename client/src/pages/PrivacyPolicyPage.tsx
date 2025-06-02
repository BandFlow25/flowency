import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Privacy Policy | Flowency"
        description="Learn how Flowency protects your privacy and handles data in our AI consultancy services. Comprehensive privacy policy and data protection information."
        canonicalUrl="https://flowency.co.uk/privacy-policy"
      />
      
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600">
              Last updated: December 15, 2023
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <p className="text-gray-800 font-medium">
                Flowency Limited is dedicated to protecting the confidentiality and privacy of information entrusted to us in accordance with the EU General Data Protection Regulation (GDPR) and the UK Data Protection Act 2018.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Who are we?</h2>
            <p className="mb-6">This Privacy Notice applies to Flowency Limited, a UK limited company.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Contact for privacy questions</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p>If you have questions or comments about this Privacy Notice or how we handle personal data, please contact us at:</p>
              <p className="mt-2 font-medium">
                Email: <a href="mailto:hello@flowency.co.uk" className="text-orange-600 hover:text-orange-700">hello@flowency.co.uk</a>
              </p>
              <p className="mt-2 text-sm text-gray-600">We aim to respond within 30 days from the date we receive privacy-related communications.</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. How do we collect personal data?</h2>
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Directly</h3>
                <p>We obtain personal data directly from individuals who complete our online forms, subscribe to our newsletters, register for online training, attend meetings or events we host, or for recruitment purposes.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Public sources</h3>
                <p>Personal data may be obtained from public registers (such as Companies House), news articles, and Internet searches.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Social and professional networking sites</h3>
                <p>If you register or login using social media (LinkedIn, Google, or Twitter), we will collect information you've permitted your social media provider to share with us.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Business clients</h3>
                <p>Our business clients may engage us to perform professional services which involves sharing personal data as part of that engagement.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. What categories of personal data do we collect?</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Personal data</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Contact details (name, company, job title, phone, email, address)</li>
                  <li>Professional details (job history, education, memberships)</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Sensitive personal data</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  <li>Information provided by clients during professional engagements</li>
                  <li>Diversity information from recruitment processes</li>
                  <li>Location-based data when seeking office locations</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Lawful reasons for processing personal data</h2>
            <div className="space-y-3 mb-6">
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-semibold">Contract</h3>
                <p className="text-sm">To perform our contractual obligations or enter into contracts</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold">Consent</h3>
                <p className="text-sm">Based on your freely given consent when providing data</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold">Legitimate interests</h3>
                <p className="text-sm">For delivering services, direct marketing, and business operations</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-semibold">Legal obligations</h3>
                <p className="text-sm">To meet our legal and regulatory obligations</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Why do we need personal data?</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Providing professional advice and other professional services</li>
              <li>Promoting our services to existing and prospective business clients</li>
              <li>Sending invitations and providing access to events and training courses</li>
              <li>Administering and ensuring security of our information systems</li>
              <li>Seeking qualified candidates and processing career enquiries</li>
              <li>Complying with legal and regulatory obligations</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Data protection rights</h2>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Access</h3>
                  <p className="text-sm">Verify whether we process your personal data</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Correction</h3>
                  <p className="text-sm">Correct records if they contain incorrect information</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Erasure</h3>
                  <p className="text-sm">Request deletion of your personal data</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Processing restrictions</h3>
                  <p className="text-sm">Restrict how we process your data</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Data retention</h2>
            <p className="mb-6">We retain personal data for seven years unless a different timeframe applies due to business needs or specific legal, regulatory, or contractual requirements.</p>

            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Cookies</h2>
            <p className="mb-6">Our website may use cookies. For more information, please refer to our <Link to="/cookie-policy" className="text-orange-600 hover:text-orange-700 underline">Cookie Policy</Link>.</p>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
              <h3 className="font-semibold text-gray-800 mb-2">Questions or concerns?</h3>
              <p className="text-gray-700">
                Contact us at <a href="mailto:hello@flowency.co.uk" className="text-orange-600 hover:text-orange-700 font-medium">hello@flowency.co.uk</a> or report concerns to the UK Information Commissioner's Office at <a href="https://ico.org.uk/concerns/handling/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 underline">ico.org.uk/concerns/handling/</a>
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