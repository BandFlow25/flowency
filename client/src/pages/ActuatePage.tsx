import { motion } from "framer-motion";
import { Link } from "wouter";

export default function ActuatePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation - Consistent with Landing Page */}
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
              <Link to="/actuate" className="text-electric hover:text-accent transition-colors font-medium">Actuate</Link>
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

      {/* Hero Section - Powerful Execution Engine */}
      <section id="home" className="pt-16 bg-gradient-to-br from-cyan-500 via-blue-600 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-yellow-400/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-yellow-400/30">
              🔩 Applied AI Delivery & Optimisation
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
              <span className="block md:inline">Actuate is your</span>
              <span className="hidden md:inline"> </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">AI-native execution engine</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-12 max-w-5xl mx-auto text-gray-300 leading-relaxed">
              AI strategy is nothing without action. Actuate brings AI to life—embedding intelligence 
              into how work gets done, not just how it gets pitched. 
              <strong className="text-white block mt-2">Where strategy turns into systems, and potential becomes production.</strong>
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                START ACTUATING →
              </button>
              <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300">
                View Capabilities
              </button>
            </motion.div>
            
            {/* Key Stats/Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">⚡</div>
                <div className="text-white font-semibold">AI-Native Builds</div>
                <div className="text-gray-400 text-sm">End-to-end execution</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">🔄</div>
                <div className="text-white font-semibold">Process Automation</div>
                <div className="text-gray-400 text-sm">Intelligent workflows</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">🎯</div>
                <div className="text-white font-semibold">Measurable Outcomes</div>
                <div className="text-gray-400 text-sm">Real business impact</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              🔩 Actuate: Applied AI Delivery & Optimisation
            </h2>
            
            <div className="bg-electric/10 border-l-4 border-electric p-8 rounded-r-lg mb-8 text-left max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-primary mb-4">💡 Core Insight</h3>
              <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-4">
                "Actuate combines the cognition of your people with the execution power of AI. It's not about replacing work—it's about delivering the future faster, with the people who know what matters."
              </blockquote>
              <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                "AI is only useful if it moves the needle. Actuate brings the tools, the talent, and the tempo to get real outcomes shipped—not just imagined."
              </blockquote>
            </div>
          </motion.div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-electric rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3">AI-native Product Development</h3>
              <p className="text-gray-600 text-sm">Build internal or customer-facing tools using cutting-edge AI models with embedded governance.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🔄</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3">Process Reimagination</h3>
              <p className="text-gray-600 text-sm">Redesign high-friction workflows with hybrid AI solutions to eliminate cognitive toil.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3">Strategy-to-Delivery</h3>
              <p className="text-gray-600 text-sm">Translate enterprise ambition into credible, trackable execution paths with embedded telemetry.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-electric rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🤖</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3">Applied AI Enablement</h3>
              <p className="text-gray-600 text-sm">Deploy domain-specific agentic systems with context-aware orchestration.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">⚙️</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3">Operational Transformation</h3>
              <p className="text-gray-600 text-sm">Embedded augmentation in high-friction processes with scalable AI-enhanced operations.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🔧</span>
              </div>
              <h3 className="text-lg font-semibold text-primary mb-3">Enterprise AI Operations</h3>
              <p className="text-gray-600 text-sm">Large-scale data operations, content enrichment, and AI model behavior monitoring via strategic partners.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-electric text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Actuate Your AI Strategy?</h3>
            <p className="text-lg mb-8 opacity-90">Transform potential into production with AI-native execution.</p>
            <button className="bg-accent hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}