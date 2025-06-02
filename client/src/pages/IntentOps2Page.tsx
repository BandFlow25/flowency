import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X } from "lucide-react";
import ActuateIntentOpsCollaboration from "@/components/ActuateIntentOpsCollaboration";

export default function IntentOps2Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
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
              <Link to="/intentops2" className="text-amber-500 hover:text-amber-600 transition-colors font-bold">IntentOps v2</Link>
              <Link to="/actuate" className="text-gray-900 hover:text-accent transition-colors">Actuate</Link>
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
              <Link to="/intentops2" className="block px-3 py-2 text-amber-500 hover:text-amber-600 transition-colors font-bold">IntentOps v2</Link>
              <Link to="/actuate" className="block px-3 py-2 text-gray-900 hover:text-accent transition-colors">Actuate</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Cognitive Debt Focused */}
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-900 via-slate-800 to-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              AI adoption is accelerating.<br />
              <span className="text-red-400">But without alignment, it's just automation drift.</span>
            </h1>
            
            <div className="bg-red-500/20 backdrop-blur-sm p-6 rounded-xl border border-red-400/30 mb-8 max-w-4xl mx-auto">
              <p className="text-2xl font-bold text-red-200">
                Cognitive Debt is the new Tech Debt - and it's building faster than you think.
              </p>
            </div>
            
            <p className="text-xl mb-8 max-w-4xl mx-auto text-gray-200">
              IntentOps is your control layer for AI-era delivery. See where you're drifting. Act before it's too late.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg">
                Stop the Drift
              </button>
              <span className="text-gray-300 hidden sm:inline">-</span>
              <span className="text-gray-300 sm:hidden">or</span>
              <button 
                onClick={() => window.open('mailto:hello@flowency.co.uk?subject=Talk to a Strategist', '_blank')}
                className="bg-transparent border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-blue-950 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                Talk to a Strategist
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Problem - Cognitive Debt Focus */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-red-50 to-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              You don't need another productivity tool. You need to know when your enterprise brain is out of sync with its hands.
            </h2>
            
            <div className="max-w-4xl mx-auto text-lg text-slate-700 leading-relaxed space-y-6">
              <p className="text-xl">
                Most orgs don't know where their AI is drifting. That's not safe governance. That's cognitive debt.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-red-200 shadow-sm"
                >
                  <h3 className="font-bold text-red-800 mb-3">Ungoverned AI Deployments</h3>
                  <p className="text-slate-700 text-sm">LLM agents and automation spreading without oversight</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-red-200 shadow-sm"
                >
                  <h3 className="font-bold text-red-800 mb-3">Cognitive Fragmentation</h3>
                  <p className="text-slate-700 text-sm">Teams, tools, and AI operating in disconnected silos</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-red-200 shadow-sm"
                >
                  <h3 className="font-bold text-red-800 mb-3">Strategic Blindness</h3>
                  <p className="text-slate-700 text-sm">No telemetry layer to see where value is leaking</p>
                </motion.div>
              </div>
              
              <div className="bg-red-500/10 backdrop-blur-sm p-8 rounded-xl border border-red-300 mt-8">
                <p className="font-bold text-slate-900 text-xl">
                  If you're chasing AI use cases without a telemetry layer, you're stacking cognitive debt.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is IntentOps - DevOps Analogy */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-slate-800 to-blue-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              IntentOps is to Cognitive Debt what DevOps was to Technical Debt.
            </h2>
            
            <div className="max-w-4xl mx-auto text-lg leading-relaxed space-y-6 mb-12">
              <p className="text-blue-100 text-xl">
                A strategic control model to orchestrate AI, people, and processes in real time. It wraps your existing teams, tools, and workflows - connecting strategic goals to daily actions across people, AI, and systems.
              </p>
              
              <div className="bg-amber-500/20 backdrop-blur-sm p-8 rounded-xl border border-amber-400/30 mt-8">
                <p className="font-semibold text-amber-200 text-xl text-center">
                  Think: DevOps for the cognitive layer of your enterprise.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Four Layers - Enhanced */}
      <section className="py-20 bg-gradient-to-br from-slate-100 via-amber-50 to-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Four layers. One mission: Stop cognitive debt from killing your AI transformation.
            </h2>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Visual Stack Representation */}
              <div className="flex flex-col items-center space-y-1 mb-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="w-full max-w-md h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-xl shadow-lg flex items-center justify-center"
                >
                  <span className="text-white font-bold text-lg">Cognitive Telemetry</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="w-full max-w-lg h-16 bg-gradient-to-r from-amber-500 to-amber-600 shadow-lg flex items-center justify-center"
                >
                  <span className="text-blue-950 font-bold text-lg">IntentOps Control</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full max-w-xl h-16 bg-gradient-to-r from-purple-500 to-purple-600 shadow-lg flex items-center justify-center"
                >
                  <span className="text-white font-bold text-lg">Value Streams</span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="w-full max-w-2xl h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-b-xl shadow-lg flex items-center justify-center"
                >
                  <span className="text-white font-bold text-lg">AI + Human Execution</span>
                </motion.div>
              </div>

              {/* Detailed Descriptions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-blue-200 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    <h3 className="font-bold text-lg text-blue-900">Cognitive Telemetry</h3>
                  </div>
                  <p className="text-slate-700">Real-time drift detection, flow analysis, cognitive load monitoring</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-amber-200 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
                    <h3 className="font-bold text-lg text-amber-900">IntentOps Control</h3>
                  </div>
                  <p className="text-slate-700">Alignment policies, escalation rules, governance without bureaucracy</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-purple-200 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                    <h3 className="font-bold text-lg text-purple-900">Value Streams</h3>
                  </div>
                  <p className="text-slate-700">Strategic initiatives, experiments, outcome tracking</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-green-200 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <h3 className="font-bold text-lg text-green-900">AI + Human Execution</h3>
                  </div>
                  <p className="text-slate-700">Teams, agents, automated systems working in coordinated alignment</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What It Fixes - Problem-Solution Focused */}
      <section className="py-20 bg-gradient-to-br from-red-900 via-slate-800 to-red-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What gets better when you stop cognitive debt
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-colors"
              >
                <strong className="text-red-300 text-lg">Fewer ungoverned AI deployments</strong>
                <p className="text-red-100 mt-2">Every AI agent, automation, and tool operates within strategic guardrails</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-colors"
              >
                <strong className="text-red-300 text-lg">Faster decision latency</strong>
                <p className="text-red-100 mt-2">Real-time visibility into where strategy and execution are misaligned</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-colors"
              >
                <strong className="text-red-300 text-lg">Reduced rework from misalignment</strong>
                <p className="text-red-100 mt-2">Catch drift before it becomes expensive course correction</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-colors"
              >
                <strong className="text-red-300 text-lg">Strategic control in real time</strong>
                <p className="text-red-100 mt-2">AI pilots become governed deployments with measurable business outcomes</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How to Start - Same as before but enhanced */}
      <section className="py-20 bg-gradient-to-br from-amber-50 via-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              How IntentOps eliminates cognitive debt in your organisation
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <ol className="space-y-6 text-left">
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-slate-200 shadow-sm flex gap-4"
                >
                  <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                  <div>
                    <strong className="text-slate-900 text-lg">Cognitive Debt Assessment:</strong> <span className="text-slate-700">We map where AI, automation, and human work are misaligned in your delivery spine</span>
                  </div>
                </motion.li>
                
                <motion.li 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-slate-200 shadow-sm flex gap-4"
                >
                  <div className="bg-amber-500 text-blue-950 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                  <div>
                    <strong className="text-slate-900 text-lg">Telemetry Integration:</strong> <span className="text-slate-700">Cognitive monitoring layers into your existing systems - no rip and replace</span>
                  </div>
                </motion.li>
                
                <motion.li 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-slate-200 shadow-sm flex gap-4"
                >
                  <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                  <div>
                    <strong className="text-slate-900 text-lg">Governance Activation:</strong> <span className="text-slate-700">Real-time alignment controls and drift alerts go live - velocity with safety</span>
                  </div>
                </motion.li>
              </ol>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA - More Provocative */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Cognitive debt compounds faster than technical debt ever did.
            </h2>
            
            <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed mb-12">
              <p>
                Your AI transformation is happening with or without governance. The question is: do you want to steer it, or just hope for the best?
              </p>
            </div>

            <a 
              href="mailto:hello@flowency.co.uk"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
            >
              Stop Cognitive Debt Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Actuate and IntentOps Collaboration */}
      <ActuateIntentOpsCollaboration />

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <img 
              src="https://cdn.prod.website-files.com/668bbc8f0f25bb8294a73f2f/6695430306a42b90cd8bf9be_Flowency-logo-meso.svg" 
              alt="Flowency"
              className="h-6 w-auto"
            />
            <span className="text-gray-400">×</span>
            <span className="text-electric font-medium">Intent</span>
            <span className="text-accent font-medium">Ops</span>
          </div>
          <h3 className="text-xl font-bold mb-2">Part of the Flowency Operating Stack</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            IntentOps provides the strategy layer. Actuate delivers the execution. Together, they bring AI into real-world operations - accountably.
          </p>
        </div>
      </footer>

      {/* Persistent Need Help Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20, 
            delay: 2 
          }}
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(245, 158, 11, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-bold shadow-lg transition-all duration-300 flex items-center gap-2"
          onClick={() => window.open('mailto:hello@flowency.co.uk?subject=IntentOps Inquiry', '_blank')}
        >
          <span>Stop the Drift</span>
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
        </motion.button>
      </div>
    </div>
  );
}