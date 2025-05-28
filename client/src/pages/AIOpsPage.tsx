import { motion } from "framer-motion";
import { Link } from "wouter";

export default function AIOpsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="https://cdn.prod.website-files.com/668bbc8f0f25bb8294a73f2f/6695430306a42b90cd8bf9be_Flowency-logo-meso.svg" 
                alt="Flowency"
                className="h-8 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-900 hover:text-accent transition-colors">Home</Link>
              <Link to="/intentops" className="text-gray-900 hover:text-accent transition-colors">IntentOps</Link>
              <Link to="/aiops" className="text-electric hover:text-accent transition-colors font-medium">AIOps</Link>
            </div>
            <a 
              href="#contact" 
              className="bg-accent hover:bg-[hsl(16,100%,45%)] text-white px-4 py-2 rounded-md transition-colors"
            >
              Contact us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black leading-tight">
              <span className="text-electric">AIOps</span> is the delivery engine for the AI-native enterprise
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-700">
              Designed to eliminate waste, accelerate work, and embed intelligence into the everyday. 
              <strong className="text-primary font-bold">Your execution arm for bringing AI to life inside the enterprise</strong>.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <button className="bg-accent hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors shadow-lg">
                LEARN MORE
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Content Coming Soon */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              AI Operations & Optimisation
            </h2>
            <div className="bg-electric/10 border-l-4 border-electric p-6 rounded-r-lg mb-8">
              <blockquote className="text-xl text-gray-700 italic leading-relaxed">
                "AI isn't just a strategic lever—it's an operational multiplier. But most organisations are still thinking in tasks and tools. 
                AIOps unlocks real impact by embedding AI into how work actually gets done."
              </blockquote>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              AIOps is your execution arm: a delivery-focused offering that brings AI to life inside the enterprise—streamlining operations, 
              automating inefficiencies, and embedding AI-native capabilities where they'll have the most impact.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-electric rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">AI Strategy</h3>
                <p className="text-gray-600 text-sm">Strategic planning and roadmap development</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Operations</h3>
                <p className="text-gray-600 text-sm">Operational excellence and automation</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">Governance</h3>
                <p className="text-gray-600 text-sm">Quality control and compliance frameworks</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your AI Operations?</h3>
            <p className="text-lg mb-8 opacity-90">Let's discuss how AIOps can accelerate your delivery capability.</p>
            <button className="bg-accent hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}