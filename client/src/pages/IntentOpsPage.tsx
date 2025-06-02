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
              IntentOps is your strategic control layer - an adaptive system that aligns AI-driven execution with human intent, business outcomes, and enterprise governance.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <button className="bg-amber-500 hover:bg-amber-600 text-blue-950 px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg">
                Explore IntentOps
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              AI is moving fast. Your organisation isn't.
            </h2>
            
            <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Enterprises are racing to adopt AI tools, models, and platforms. But the way work is managed hasn't caught up. Initiatives are disconnected. Value is unclear. Cognitive debt is rising. And AI is being layered onto legacy systems without any oversight.
              </p>
              
              <p className="font-semibold text-gray-900">
                You don't need another framework.
              </p>
              
              <p>
                You need a way to govern AI in the real world - across people, platforms, and priorities.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is IntentOps Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              A meta-layer for governing intelligent systems.
            </h2>
            
            <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6 mb-12">
              <p>
                IntentOps is not a product or platform. It's a strategic orchestration layer that sits above your delivery stack. It ensures that every AI-driven initiative - whether automated or human-executed - remains aligned with enterprise goals.
              </p>
              
              <p className="font-semibold text-gray-900">
                It's where governance meets velocity.<br />
                And where signal replaces assumption.
              </p>
            </div>

            {/* 3 Key Principles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="font-bold text-lg text-gray-900 mb-3">Flow over form</h3>
                <p className="text-sm text-gray-600">Govern activity as it happens, not after</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="font-bold text-lg text-gray-900 mb-3">Signals over status</h3>
                <p className="text-sm text-gray-600">Measure alignment, not milestones</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <h3 className="font-bold text-lg text-gray-900 mb-3">Accountability over bureaucracy</h3>
                <p className="text-sm text-gray-600">Make governance lightweight but meaningful</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The IntentOps Loop: Govern by Signal, Align by Design
            </h2>
          </motion.div>

          {/* The 4 Layers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200"
            >
              <h3 className="font-bold text-lg text-gray-900 mb-3">1. Inject Strategic Intent</h3>
              <p className="text-sm text-gray-700">Map goals, hypotheses, and delivery expectations into traceable workstreams.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg border border-amber-200"
            >
              <h3 className="font-bold text-lg text-gray-900 mb-3">2. Orchestrate Execution</h3>
              <p className="text-sm text-gray-700">Monitor how AI tools, people, and teams interact - across systems and silos.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border border-orange-200"
            >
              <h3 className="font-bold text-lg text-gray-900 mb-3">3. Detect Misalignment</h3>
              <p className="text-sm text-gray-700">Use telemetry, blockers, flow metrics, and value signals to surface drift.</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200"
            >
              <h3 className="font-bold text-lg text-gray-900 mb-3">4. Enable Responsive Governance</h3>
              <p className="text-sm text-gray-700">Trigger interventions, reframe work, or re-prioritise when needed - without slowing delivery.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* When to Use IntentOps Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Start using IntentOps when...
            </h2>
            
            <div className="max-w-4xl mx-auto text-left space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">You're launching AI pilots and need alignment with real business outcomes</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">You're scaling AI use across the enterprise but lack a way to govern it</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">You're noticing more effort in tracking than in delivering</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">You're struggling to explain what your AI spend is actually achieving</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-amber-500 rounded-full mt-3 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">You're tired of firefighting and want proactive value control</p>
              </div>
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
              You don't need to rip and replace.<br />
              You need to see what's really happening.
            </h2>
            
            <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6 mb-12">
              <p>
                IntentOps can wrap around your existing delivery systems, AI platforms, or transformation programmes. It works alongside frameworks like SAFe or OKRs - but replaces rigid plans with live signals.
              </p>
              
              <div className="text-center space-y-2">
                <p className="font-semibold text-gray-900">Start with strategic workshops.</p>
                <p className="font-semibold text-gray-900">Layer in telemetry and measurement.</p>
                <p className="font-semibold text-gray-900">And align your execution engine (like Actuate) to what matters.</p>
              </div>
            </div>

            <button className="bg-amber-500 hover:bg-amber-600 text-blue-950 px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg">
              Talk to us about IntentOps
            </button>
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