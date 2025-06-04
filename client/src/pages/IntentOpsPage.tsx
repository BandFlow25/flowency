import { useState } from "react";
import ContactModal from "@/components/ContactModal";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ActuateIntentOpsCollaboration from "@/components/ActuateIntentOpsCollaboration";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import ScrollProgress from "@/components/ScrollProgress";
import { stages } from "@/data/stagesData";

export default function IntentOpsPage() {
  const [selectedStage, setSelectedStage] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleStageClick = (stageId: number) => {
    setSelectedStage(stageId);
  };

  const handleCloseDetails = () => {
    setSelectedStage(null);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "IntentOps",
    "provider": {
      "@type": "Organization",
      "name": "Flowency"
    },
    "description": "AI strategy alignment framework providing governance and intent orchestration for enterprise AI adoption",
    "serviceType": "AI Strategy Consulting",
    "areaServed": "GB"
  };

  const selectedStageData = selectedStage ? stages.find(stage => stage.id === selectedStage) : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <ScrollProgress />
      <SEOHead
        title="IntentOps - AI Strategy Alignment Framework | Flowency"
        description="Transform your AI strategy with IntentOps governance framework. Align intent, manage cognitive debt, and orchestrate enterprise AI adoption for measurable business outcomes."
        keywords="IntentOps, AI strategy, AI governance, cognitive debt management, enterprise AI alignment, AI orchestration, strategy execution"
        ogTitle="IntentOps - AI Strategy Alignment Framework"
        ogDescription="Enterprise AI governance framework that bridges strategy and execution. Manage cognitive debt and align organizational intent for successful AI adoption."
        canonicalUrl="https://flowency.co.uk/intentops"
        structuredData={structuredData}
      />
      
      {/* Navigation - Consistent with Landing Page */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/">
                <img 
                  src="https://cdn.prod.website-files.com/668bbc8f0f25bb8294a73f2f/6695430306a42b90cd8bf9be_Flowency-logo-meso.svg" 
                  alt="Flowency"
                  className="h-8 w-auto cursor-pointer hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-900 hover:text-accent transition-colors">Home</Link>
              <Link to="/actuate" className="text-gray-900 hover:text-accent transition-colors">Actuate</Link>
              <Link to="/intentops" className="text-amber-500 hover:text-amber-600 transition-colors font-bold">IntentOps</Link>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-accent hover:bg-[hsl(16,100%,45%)] text-white px-3 py-2 rounded-md transition-colors text-sm"
              >
                Contact
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-900 hover:text-accent transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
            
            {/* Desktop contact button */}
            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="hidden md:block bg-accent hover:bg-[hsl(16,100%,45%)] text-white px-4 py-2 rounded-md transition-colors"
            >
              Contact us
            </button>
          </div>
        </div>
        
        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              <Link to="/" className="block px-3 py-2 text-gray-900 hover:text-accent transition-colors">Home</Link>
              <Link to="/actuate" className="block px-3 py-2 text-gray-900 hover:text-accent transition-colors">Actuate</Link>
              <Link to="/intentops" className="block px-3 py-2 text-amber-500 hover:text-amber-600 transition-colors font-bold">IntentOps</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section - Safety & Governance Focused */}
      <section id="home" className="pt-16 bg-gradient-to-br from-blue-900 via-slate-800 to-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Cognitive Debt Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ scale: 1.05 }}
              className="inline-block bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-full px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8 cursor-pointer"
            >
              <p className="text-red-200 font-semibold text-sm md:text-base">
                Cognitive Debt is the new Tech Debt - and it's building faster than you think
              </p>
            </motion.div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white leading-tight">
              AI adoption is consensus.<br />
              <span className="text-yellow-300">Aligned execution is competitive advantage.</span>
            </h1>
            <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-4xl mx-auto text-gray-200">
              IntentOps is your real-time control layer for AI-era delivery. See where you're drifting. Act before it's too late.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-500 hover:bg-amber-600 text-blue-950 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore IntentOps
              </motion.button>
              <span className="text-gray-300 hidden sm:inline">–</span>
              <span className="text-gray-300 sm:hidden">or</span>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-transparent border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-blue-950 px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                Talk to a Strategist
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 md:mb-6">
              The AI revolution is landing inside delivery systems still caught in agile framework theatre.
            </h2>
            
            <div className="max-w-4xl mx-auto text-base md:text-lg text-slate-700 leading-relaxed space-y-4 md:space-y-6">
              <p className="text-lg md:text-xl">
                Most orgs don't know where their AI is drifting. That's not safe governance. That's cognitive debt.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 my-6 md:my-8">
                <motion.div 
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-red-200 shadow-sm hover:shadow-lg hover:border-red-300 transition-all duration-300 cursor-pointer"
                >
                  <h3 className="font-bold text-red-800 mb-2 md:mb-3 text-sm md:text-base">Ungoverned AI Deployments</h3>
                  <p className="text-slate-700 text-xs md:text-sm">LLM agents and automation spreading without oversight</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-red-200 shadow-sm hover:shadow-lg hover:border-red-300 transition-all duration-300 cursor-pointer"
                >
                  <h3 className="font-bold text-red-800 mb-2 md:mb-3 text-sm md:text-base">Cognitive Fragmentation</h3>
                  <p className="text-slate-700 text-xs md:text-sm">Teams, tools, and AI operating in disconnected silos</p>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-lg border border-red-200 shadow-sm hover:shadow-lg hover:border-red-300 transition-all duration-300 cursor-pointer"
                >
                  <h3 className="font-bold text-red-800 mb-2 md:mb-3 text-sm md:text-base">Strategic Blindness</h3>
                  <p className="text-slate-700 text-xs md:text-sm">No telemetry layer to see where value is leaking</p>
                </motion.div>
              </div>
              
              <div className="bg-red-500/10 backdrop-blur-sm p-4 md:p-8 rounded-xl border border-red-300 mt-6 md:mt-8">
                <p className="font-bold text-slate-900 text-lg md:text-xl">
                  If you're chasing AI use cases without a telemetry layer, you're stacking cognitive debt.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is IntentOps Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-blue-900 via-slate-800 to-blue-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
              Cognitive debt is the new enterprise liability. IntentOps is how you contain it.
            </h2>
            
            <div className="max-w-4xl mx-auto text-base md:text-lg leading-relaxed space-y-4 md:space-y-6 mb-8 md:mb-12">
              <p className="text-blue-100 text-lg md:text-xl">
                A strategic control layer for aligning AI, people, and processes in real time.
              </p>
              
              <p className="text-blue-200">
                IntentOps wraps your existing workflows - turning scattered execution into orchestrated action that reflects your intent.
              </p>
              
              <div className="bg-amber-500/20 backdrop-blur-sm p-4 md:p-8 rounded-xl border border-amber-400/30 mt-6 md:mt-8">
                <p className="font-semibold text-amber-200 text-lg md:text-xl text-center">
                  Think: telemetry for intent. Guardrails for AI. Coordination without chaos.
                </p>
              </div>
            </div>
          </motion.div>
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
              What gets better when you eliminate Cognitive Debt
            </h2>
            
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-colors"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <strong className="text-amber-300 text-lg">Traceable Intent</strong>
                    <span className="text-blue-100 md:col-span-2">Strategy mapped to delivery, continuously and visibly</span>
                  </div>
                </motion.div>
                

                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-colors"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <strong className="text-amber-300 text-lg">Faster Decision Loops</strong>
                    <span className="text-blue-100 md:col-span-2">Reduce latency between strategic signal and operational action</span>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-colors"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <strong className="text-amber-300 text-lg">Responsive Governance</strong>
                    <span className="text-blue-100 md:col-span-2">Guide AI, human, and hybrid workflows without slowing down delivery</span>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 hover:bg-white/15 transition-colors"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <strong className="text-amber-300 text-lg">Flow Intelligence</strong>
                    <span className="text-blue-100 md:col-span-2">Surface rework, overload, and value decay as it happens</span>
                  </div>
                </motion.div>
              </div>
            </div>
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
                    <strong className="text-slate-900 text-lg">Activation:</strong> <span className="text-slate-700">Governance rules and dashboards go live - no disruption</span>
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
              Cognitive debt compounds faster than technical debt ever did.
            </h2>
            
            <p className="text-xl font-semibold text-gray-800 mb-4">
              AI is already in your organisation. The question is, who's steering?
            </p>
            
            <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed mb-12 space-y-4">
              <p>
                Your transformation is happening with or without governance.
              </p>
              <p>
                IntentOps gives you the system to align strategy with real delivery, in real time.
              </p>
            </div>

            <button 
              onClick={() => setIsContactModalOpen(true)}
              className="bg-amber-500 hover:bg-amber-600 text-blue-950 px-6 py-3 rounded-lg font-bold mt-6 inline-block transition-colors shadow-lg"
            >
              Talk to a Strategist
            </button>
          </motion.div>
        </div>
      </section>

      {/* Actuate and IntentOps Collaboration */}
      <ActuateIntentOpsCollaboration />

      <Footer 
        ctaText="Ready to align your AI strategy?"
        ctaDescription="IntentOps provides the strategy layer. Actuate delivers the execution. Together, they bring AI into real-world operations - accountably."
        ctaButtonText="Talk to a Strategist"
        ctaBgColor="bg-gradient-to-br from-blue-900 via-slate-800 to-blue-950"
        ctaTextColor="text-white"
      />

      {/* Persistent Need Help Button - COMMENTED OUT FOR FUTURE CHATBOT IMPLEMENTATION */}
      {/* <div className="fixed bottom-6 right-6 z-50">
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
          onClick={() => setIsContactModalOpen(true)}
        >
          <span>Need Help?</span>
          <div className="w-2 h-2 bg-blue-950 rounded-full animate-pulse"></div>
        </motion.button>
      </div> */}

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}