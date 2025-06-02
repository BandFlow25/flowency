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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              AI adoption is consensus.<br />
              <span className="text-yellow-300">Aligned execution is competitive advantage.</span>
            </h1>
            <p className="text-xl mb-8 max-w-4xl mx-auto text-gray-200">
              IntentOps is your enterprise nervous system—a real-time control layer that keeps AI, automation, and human teams moving in sync with business priorities.
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
              The AI revolution is happening inside delivery systems designed for yesterday.
            </h2>
            
            <div className="max-w-4xl mx-auto text-lg text-slate-700 leading-relaxed space-y-6">
              <p className="text-xl">
                Strategy is set, but delivery drifts. Humans, tools, and AI agents operate in silos. Governance lags. Value leaks.
              </p>
              
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-amber-200 mt-8">
                <p className="font-semibold text-slate-900 text-xl">
                  You don't need another framework. You need a live view of alignment.
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
              IntentOps is a meta-layer for governable execution.
            </h2>
            
            <div className="max-w-4xl mx-auto text-lg leading-relaxed space-y-6 mb-12">
              <p className="text-blue-100 text-xl">
                It wraps your existing teams, tools, and workflows. It connects strategic goals to daily actions—across people, AI, and systems.
              </p>
              
              <div className="bg-amber-500/20 backdrop-blur-sm p-8 rounded-xl border border-amber-400/30 mt-8">
                <p className="font-semibold text-amber-200 text-xl text-center">
                  Think: telemetry for strategic intent.
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
              Four layers. One purpose: aligned delivery.
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <ul className="space-y-6">
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-xl border-l-4 border-blue-600 shadow-lg"
              >
                <strong className="text-blue-900 text-lg">Signals:</strong> <span className="text-slate-700">Flow, blockers, overload, ethics alerts</span>
              </motion.li>
              
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-r from-amber-100 to-yellow-100 p-6 rounded-xl border-l-4 border-amber-600 shadow-lg"
              >
                <strong className="text-amber-900 text-lg">IntentOps:</strong> <span className="text-slate-700">Drift thresholds, escalation rules, alignment policy</span>
              </motion.li>
              
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl border-l-4 border-purple-600 shadow-lg"
              >
                <strong className="text-purple-900 text-lg">Value:</strong> <span className="text-slate-700">Programmes, experiments, initiatives</span>
              </motion.li>
              
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-xl border-l-4 border-green-600 shadow-lg"
              >
                <strong className="text-green-900 text-lg">Execution:</strong> <span className="text-slate-700">Human teams, AI agents, automated systems</span>
              </motion.li>
            </ul>
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
              What it enables
            </h2>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-colors"
              >
                <strong className="text-amber-300 text-lg">Traceable Intent</strong>: <span className="text-blue-100">Strategy mapped to delivery in real time</span>
              </motion.li>
              
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-colors"
              >
                <strong className="text-amber-300 text-lg">Drift Detection</strong>: <span className="text-blue-100">Catch misalignment early, act fast</span>
              </motion.li>
              
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-colors"
              >
                <strong className="text-amber-300 text-lg">Responsive Governance</strong>: <span className="text-blue-100">Guide outcomes without slowing delivery</span>
              </motion.li>
              
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-colors"
              >
                <strong className="text-amber-300 text-lg">Flow Intelligence</strong>: <span className="text-blue-100">Spot rework, overload, and value decay</span>
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* How to Start Section */}
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
              How IntentOps lands in your organisation
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
                    <strong className="text-slate-900 text-lg">Discovery:</strong> <span className="text-slate-700">We trace intent across your delivery spine</span>
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
                    <strong className="text-slate-900 text-lg">Integration:</strong> <span className="text-slate-700">Signals are layered into your systems, not replaced</span>
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
                    <strong className="text-slate-900 text-lg">Activation:</strong> <span className="text-slate-700">Governance rules and dashboards go live—no disruption</span>
                  </div>
                </motion.li>
              </ol>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Get Started Section */}
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
              Don't let complexity kill your intent.
            </h2>
            
            <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed mb-12">
              <p>
                Start a conversation. Discover how IntentOps can steer AI-native delivery, without the theatre.
              </p>
            </div>

            <a 
              href="mailto:hello@flowency.co.uk"
              className="bg-amber-500 hover:bg-amber-600 text-blue-950 px-6 py-3 rounded-lg font-bold mt-6 inline-block transition-colors shadow-lg"
            >
              Talk to a Strategist
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