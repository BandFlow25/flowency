import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Menu, X } from "lucide-react";
import CognitiveDebtFlow from "@/components/CognitiveDebtFlow";
import IntentOpsLayer from "@/components/IntentOpsLayer";
import StageDetails from "@/components/StageDetails";
import ComparisonSection from "@/components/ComparisonSection";
import ActuateIntentOpsCollaboration from "@/components/ActuateIntentOpsCollaboration";
import { stages } from "@/data/stagesData";

export default function IntentOpsPage() {
  const [selectedStage, setSelectedStage] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleStageClick = (stageId: number) => {
    setSelectedStage(stageId);
  };

  const handleCloseDetails = () => {
    setSelectedStage(null);
  };

  const selectedStageData = selectedStage ? stages.find(stage => stage.id === selectedStage) : null;

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
              <Link to="/intentops" className="text-amber-500 hover:text-amber-600 transition-colors font-bold">IntentOps</Link>
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
              <Link to="/intentops" className="block px-3 py-2 text-amber-500 hover:text-amber-600 transition-colors font-bold">IntentOps</Link>
              <Link to="/actuate" className="block px-3 py-2 text-gray-900 hover:text-accent transition-colors">Actuate</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Safety & Governance Focused */}
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-900 via-slate-800 to-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              <span className="block md:inline text-amber-400">AI adoption is consensus.</span>
              <span className="hidden md:inline"> </span>
              <span className="text-yellow-300">Intent alignment is competitive advantage.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              IntentOps is a strategic control layer—an adaptive system that aligns AI and human execution with business goals, governance, and measurable value.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="bg-amber-500 hover:bg-amber-600 text-blue-950 px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg">
                Explore IntentOps
              </button>
              <span className="text-gray-300 hidden sm:inline">–</span>
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

      {/* The Problem Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              The AI revolution is happening inside organisations designed for yesterday.
            </h2>
            
            <div className="max-w-4xl mx-auto text-lg text-slate-700 leading-relaxed space-y-6">
              <p className="text-xl">
                Today's delivery systems are stacked with complexity, technical debt, and silos. AI tools and agents are being layered on top—without any coherent way to steer them.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-slate-200 space-y-4"
                >
                  <p className="text-slate-800 flex items-start gap-3">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></span>
                    Strategy is set at the top, but drift happens fast
                  </p>
                  <p className="text-slate-800 flex items-start gap-3">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></span>
                    Delivery is fragmented across humans and algorithms
                  </p>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white/70 backdrop-blur-sm p-6 rounded-lg border border-slate-200 space-y-4"
                >
                  <p className="text-slate-800 flex items-start gap-3">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></span>
                    Governance can't keep pace, and oversight is slow or non-existent
                  </p>
                  <p className="text-slate-800 flex items-start gap-3">
                    <span className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></span>
                    Cost of delay, value decay, and cognitive overload go undetected
                  </p>
                </motion.div>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-amber-200 mt-8">
                <p className="font-semibold text-slate-900 text-xl mb-4">
                  You don't need another process framework.
                </p>
                <p className="text-lg text-slate-700">
                  You need a way to stay aligned as reality moves.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is IntentOps Section */}
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
              Not a framework. Not a platform. A strategic meta-layer for governable AI execution.
            </h2>
            
            <div className="max-w-4xl mx-auto text-lg leading-relaxed space-y-6 mb-12">
              <p className="text-blue-100 text-xl">
                IntentOps wraps around your existing delivery ecosystem—whether human-led, agentic, or automated—and ensures everything stays anchored to enterprise purpose, priorities, and ethical boundaries.
              </p>
              
              <p className="text-blue-200">
                It brings visibility, traceability, and adaptability to your AI-powered operations.
              </p>
              
              <div className="bg-amber-500/20 backdrop-blur-sm p-8 rounded-xl border border-amber-400/30 mt-8">
                <p className="font-semibold text-amber-200 text-xl text-center">
                  Think of it as your enterprise's real-time intent-to-outcome nervous system.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
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
              The IntentOps Layered System Map
            </h2>
            <p className="text-lg text-slate-600 mb-12">A governance architecture for AI-native enterprises.</p>
          </motion.div>

          {/* The 4 Layers - Stacked Vertically */}
          <div className="max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-blue-100 to-indigo-100 p-8 rounded-xl border-l-4 border-blue-600 shadow-lg"
            >
              <h3 className="font-bold text-xl text-blue-900 mb-3">Signal & Measurement Layer</h3>
              <p className="text-slate-700">Real-time feedback loops, flow metrics, cognitive load, risk alerts.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-r from-amber-100 to-yellow-100 p-8 rounded-xl border-l-4 border-amber-600 shadow-lg"
            >
              <h3 className="font-bold text-xl text-amber-900 mb-3">IntentOps Layer</h3>
              <p className="text-slate-700">Strategic intent, drift thresholds, alignment rules, escalation pathways.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-xl border-l-4 border-purple-600 shadow-lg"
            >
              <h3 className="font-bold text-xl text-purple-900 mb-3">Value Layer</h3>
              <p className="text-slate-700">Value streams, programmes, initiatives, and hypotheses.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-r from-green-100 to-emerald-100 p-8 rounded-xl border-l-4 border-green-600 shadow-lg"
            >
              <h3 className="font-bold text-xl text-green-900 mb-3">Execution Layer</h3>
              <p className="text-slate-700">Human teams, AI agents, and automated systems delivering value.</p>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-slate-200 shadow-lg max-w-3xl mx-auto">
              <p className="text-lg text-slate-700 font-medium">
                IntentOps doesn't slow you down—it lets you steer faster and safer, using live signals instead of lagging indicators.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What It Enables Section */}
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
              From oversight to outcome
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-colors"
              >
                <h3 className="font-bold text-lg text-amber-300 mb-3">Traceable Intent</h3>
                <p className="text-sm text-blue-100">Connect business priorities directly to in-flight workstreams</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-colors"
              >
                <h3 className="font-bold text-lg text-amber-300 mb-3">Flow Visibility</h3>
                <p className="text-sm text-blue-100">See blockages, rework, overload, and AI-human friction in real time</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-colors"
              >
                <h3 className="font-bold text-lg text-amber-300 mb-3">Drift Detection</h3>
                <p className="text-sm text-blue-100">Identify when delivery veers off-course from strategy or ethics</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-colors"
              >
                <h3 className="font-bold text-lg text-amber-300 mb-3">Responsive Governance</h3>
                <p className="text-sm text-blue-100">Embed safety and accountability into delivery without command-and-control</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-colors"
              >
                <h3 className="font-bold text-lg text-amber-300 mb-3">Strategic Adaptation</h3>
                <p className="text-sm text-blue-100">Course-correct fast when signals change or priorities evolve</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-colors"
              >
                <h3 className="font-bold text-lg text-amber-300 mb-3">Outcome Realisation</h3>
                <p className="text-sm text-blue-100">Track the value and intent of delivery—not just velocity</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* When to Use IntentOps Section */}
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
              When alignment matters more than speed.
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-slate-200 shadow-sm flex items-start gap-4"
              >
                <div className="w-3 h-3 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-slate-700">Launching AI pilots and need measurable business outcomes</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-slate-200 shadow-sm flex items-start gap-4"
              >
                <div className="w-3 h-3 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-slate-700">Scaling AI across business units without losing control</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-slate-200 shadow-sm flex items-start gap-4"
              >
                <div className="w-3 h-3 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-slate-700">Transforming delivery models but losing strategic clarity</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-slate-200 shadow-sm flex items-start gap-4"
              >
                <div className="w-3 h-3 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-slate-700">Investing heavily in delivery without seeing proportional value</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-lg border border-slate-200 shadow-sm flex items-start gap-4"
              >
                <div className="w-3 h-3 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-slate-700">Seeing signs of overload, rework, or "governance theatre"</p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl shadow-lg"
            >
              <p className="text-xl font-semibold mb-2">IntentOps plugs in without disruption.</p>
              <p className="text-xl font-semibold">It helps you steer, not stop.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Don't let complexity kill your intent.
            </h2>
            
            <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6 mb-12">
              <p>
                You're already building with AI. Now it's time to govern with intelligence. Let Flowency help you implement a strategic operating model for AI-native delivery that's ethical, adaptive, and aligned.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:hello@flowency.co.uk"
                className="bg-amber-500 hover:bg-amber-600 text-blue-950 px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
              >
                hello@flowency.co.uk
              </a>
              <span className="text-gray-600 hidden sm:inline">—</span>
              <span className="text-gray-600 sm:hidden">or</span>
              <span className="text-gray-700">Start a conversation today</span>
            </div>
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
          className="bg-amber-500 hover:bg-amber-600 text-blue-950 px-6 py-3 rounded-full font-bold shadow-lg transition-all duration-300 flex items-center gap-2"
          onClick={() => window.open('mailto:hello@flowency.co.uk?subject=IntentOps Inquiry', '_blank')}
        >
          <span>Need Help?</span>
          <div className="w-2 h-2 bg-blue-950 rounded-full animate-pulse"></div>
        </motion.button>
      </div>
    </div>
  );
}