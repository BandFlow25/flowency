import { motion } from "framer-motion";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function ActuatePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <Link to="/actuate" className="text-cyan-400 hover:text-yellow-400 transition-colors font-bold">Actuate</Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <a 
                href="#contact" 
                className="bg-accent hover:bg-[hsl(16,100%,45%)] text-white px-3 py-2 rounded-md transition-colors text-sm"
              >
                Contact
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 hover:text-accent transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
            
            {/* Desktop contact button */}
            <a 
              href="#contact" 
              className="hidden md:block bg-accent hover:bg-[hsl(16,100%,45%)] text-white px-4 py-2 rounded-md transition-colors"
            >
              Contact us
            </a>
          </div>
        </div>
        
        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              <Link to="/" className="block px-3 py-2 text-gray-900 hover:text-accent transition-colors">Home</Link>
              <Link to="/intentops" className="block px-3 py-2 text-gray-900 hover:text-accent transition-colors">IntentOps</Link>
              <Link to="/actuate" className="block px-3 py-2 text-cyan-400 hover:text-yellow-400 transition-colors font-bold">Actuate</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Powerful Execution Engine */}
      <section id="home" className="pt-16 bg-gradient-to-br from-emerald-600 via-teal-700 to-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block bg-yellow-400/20 text-yellow-200 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-yellow-400/30">
              🔩 Applied AI Delivery & Optimisation
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
              <span className="block md:inline">Actuate is your</span>
              <span className="hidden md:inline"> </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-400">AI-native execution engine</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-5xl mx-auto text-gray-300 leading-relaxed">
              From problem to product. From process to intelligence. 
              <strong className="text-white block mt-2">Where strategy turns into systems, and potential becomes production.</strong>
            </p>
            
            <p className="text-lg mb-12 max-w-4xl mx-auto text-gray-400 leading-relaxed">
              A modular service suite built to embed applicable, governed AI across the enterprise. Whether you're operationalising an AI strategy or solving a specific business process challenge, Actuate delivers componentised services that work within the broader IntentOps governance layer or stand alone as tactical interventions.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="bg-yellow-400 hover:bg-yellow-500 text-green-900 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
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
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-2">PRD-to-prompt</div>
                <div className="text-gray-400 text-sm">prototype-to-product</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-2">Manual bottlenecks</div>
                <div className="text-gray-400 text-sm">to AI-enhanced flow</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-2">Uncontrolled experimentation</div>
                <div className="text-gray-400 text-sm">to governed execution</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What Actuate Solves */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              🎯 What Actuate Solves
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-red-600 mb-3">Organisations struggle to move beyond GenAI prototypes</h3>
                <p className="text-gray-600 text-sm">Most AI initiatives get stuck in proof-of-concept purgatory, never reaching production value.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-red-600 mb-3">Delivery teams face tool fragmentation and risk</h3>
                <p className="text-gray-600 text-sm">Hallucination risk, misaligned scope, and disconnected tools create delivery chaos.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-red-600 mb-3">Legacy operations continue to create drag</h3>
                <p className="text-gray-600 text-sm">Despite AI investments, manual processes and inefficiencies persist across the organization.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-red-600 mb-3">Process automation lacks context and resilience</h3>
                <p className="text-gray-600 text-sm">Automated workflows break under real-world complexity and edge cases.</p>
              </div>
            </div>
            
            <div className="mt-12 bg-emerald-500/10 border-l-4 border-emerald-500 p-8 rounded-r-lg text-left max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-primary mb-4">💡 Core Insight</h3>
              <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-4">
                "Actuate combines the cognition of your people with the execution power of AI. It's not about replacing work—it's about delivering the future faster, with the people who know what matters."
              </blockquote>
              <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                "AI is only useful if it moves the needle. Actuate brings the tools, the talent, and the tempo to get real outcomes shipped—not just imagined."
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Actuate Services */}
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
              🚀 Actuate Services
            </h2>
          </motion.div>

          {/* Services Grid */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-3">1. AI Opportunity Discovery & Use Case Design</h3>
                  <p className="text-gray-600 mb-4">Executive facilitation, PRD design support, marketplace mapping across LLMs, APIs, frameworks. Feasibility scoping, technical risk, hallucination analysis with early ROI and delivery impact indicators.</p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
                    <p className="text-sm font-medium text-yellow-800">What makes it different: Grounded in IntentOps governance. Everything begins with outcome and traceability.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-3">2. AI-Native Product & Prototype Development</h3>
                  <p className="text-gray-600 mb-4">Build custom copilots, agents, AI-native workflows. RAG pipelines, tool/agent chaining, UX-integrated prompts with context-aware response models, fallback testing, and early telemetry.</p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
                    <p className="text-sm font-medium text-yellow-800">What makes it different: Outcome loops are embedded from sprint zero. It's not just working code—it's governable, trackable, accountable product.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">🔄</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-3">3. Process Optimisation (BPO+)</h3>
                  <p className="text-gray-600 mb-4">Identify high-friction, manual, or error-prone workflows. Pair GenAI + RPA + human-in-loop for true cognitive automation. Handle semi-structured data, summarisation, routing, enrichment with multilingual pipelines at 98%+ quality thresholds.</p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
                    <p className="text-sm font-medium text-yellow-800">What makes it different: Based on real-world results from scaled automation delivery (abstracted from NashTech).</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">🤖</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-3">4. Prompt Engineering as a Service</h3>
                  <p className="text-gray-600 mb-4">Refine PRDs into prompt libraries. Model-agnostic design (Claude, GPT, Mistral, open models). Safe system prompts, structured guardrails, persona switching with test cases, performance tuning, and reusable prompt libraries.</p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
                    <p className="text-sm font-medium text-yellow-800">What makes it different: PromptOps discipline built into delivery. We treat this like product dev, not copywriting.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">⚙️</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-3">5. AI-Augmented Delivery & Ops</h3>
                  <p className="text-gray-600 mb-4">Project ops copilots, velocity forecasting, delivery retros. System telemetry fed back into IntentOps governance. AI-enhanced feedback loops, risk analysis, value decay alerts, and FlowOps patterns for unblocking delivery friction.</p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
                    <p className="text-sm font-medium text-yellow-800">What makes it different: Uses SPACE and DORA frameworks as the delivery signal, not effort or burn-down.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg border border-gray-100"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl">🔧</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-3">6. Enterprise AI Operations (via strategic partners)</h3>
                  <p className="text-gray-600 mb-4">Large-scale data labelling, image enrichment, structured QA. Model performance monitoring, hallucination tracing, black-box detection. AI behaviour explainability frameworks with integration to governance dashboards.</p>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
                    <p className="text-sm font-medium text-yellow-800">What makes it different: Our partners provide scale, but we control the model lifecycle and governance standards.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">📎 Ready to Actuate?</h3>
            <p className="text-lg mb-8 opacity-90 max-w-4xl mx-auto">
              Actuate is the engine that drives value from AI. Whether you're trying to scale a GenAI proof of concept, reimagine a legacy workflow, or embed intelligence into your delivery model—we'll help you ship what matters.
            </p>
            <p className="text-xl font-semibold mb-8 text-yellow-400">Transform potential into production.</p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-green-900 px-8 py-3 rounded-lg font-bold transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}