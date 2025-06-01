import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ActuateIntentOpsCollaboration from "../components/ActuateIntentOpsCollaboration";

// Solutions data for the interactive explorer
const solutionsData = [
  {
    id: 1,
    title: "AI Strategy to Action",
    icon: "🎯",
    description: "Structured definition and alignment of AI strategy with clear prioritisation, roadmap design, and governance-ready execution framing.",
    problem: "Organisations often face a disconnect between executive ambition, scattered experiments, and actual delivery. AI investments lack coordination, leading to duplication and cognitive debt.",
    differentiator: "Intent-aligned from day one. Not just building - aligning to enterprise objectives.",
    capabilities: [
      "Prioritised use case portfolio aligned to business value",
      "Production-ready PRDs with integrated feasibility analysis",
      "Tooling and model landscape matched to your context",
      "Optional IntentOps support to track intent through to value"
    ]
  },
  {
    id: 2,
    title: "AI-Native Product and Prototype Development",
    icon: "⚡",
    description: "Full-cycle product and prototype development, from intent framing to testable build, with embedded context and telemetry.",
    problem: "You have a defined use case but need rapid, secure, and effective delivery of AI-native tools.",
    differentiator: "Modular services, fast value. Start small, scale confidently.",
    capabilities: [
      "Live features or high-fidelity prototypes ready for test or scale",
      "UX-integrated LLM pipelines, agents, and orchestration",
      "Testing, observability, and control measures built-in",
      "IntentOps optional integration for traceable value loops"
    ]
  },
  {
    id: 3,
    title: "Intelligent Process Transformation",
    icon: "🔄",
    description: "Business process re-engineering and targeted automation using GenAI, RPA, and human-in-the-loop design to remove waste and improve resilience.",
    problem: "Your operations are encumbered by layers of legacy workflows, manual interventions, and nested processes that generate drag.",
    differentiator: "GenAI + RPA + HITL fusion. Real-world automation, not lab experiments.",
    capabilities: [
      "Refactored process maps with automation targets",
      "GenAI-enhanced automation flows with structured output",
      "Improved speed, quality, compliance, and customer outcomes",
      "Optional execution with delivery partners to scale rapidly"
    ]
  },
  {
    id: 4,
    title: "Prompt Engineering as a Service",
    icon: "🤖",
    description: "High-quality prompt design, tuning, testing, and lifecycle management, grounded in deep expertise and business context.",
    problem: "Your LLM-based products lack consistency, reliability, or alignment to business goals.",
    differentiator: "Prompt Engineering as a service. Structured, testable, reusable.",
    capabilities: [
      "Enterprise prompt libraries tailored to business intent",
      "Persona switching, fallback logic, and response guardrails",
      "Model-agnostic patterns with performance monitoring",
      "Integration into AI features or operations, with IntentOps if required"
    ]
  },
  {
    id: 5,
    title: "Operational Decision Support with AI",
    icon: "⚙️",
    description: "AI-augmented observability, surfacing friction points, risk patterns, and waste hotspots to inform faster, better decisions.",
    problem: "Delivery leaders lack real-time insight into blockers, waste, and drift. Traditional metrics are lagging and blind to value.",
    differentiator: "Built to scale across teams and tools. Designed for reuse, integration, and control.",
    capabilities: [
      "Delivery copilots and dashboards highlighting where value is stuck",
      "Quantified blocker, discard, and delay costs",
      "Visual intent-to-outcome maps for portfolio and product flow",
      "Seamless alignment with IntentOps for governed execution"
    ]
  }
];

function SolutionsExplorer() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="max-w-6xl mx-auto">
      {/* Desktop: Tabs, Mobile: Expandable Cards */}
      <div className="hidden md:block">
        {/* Desktop Tab Interface */}
        <DesktopSolutionsExplorer />
      </div>
      
      <div className="md:hidden space-y-4">
        {/* Mobile Expandable Cards */}
        {solutionsData.map((solution) => (
          <motion.div
            key={solution.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: solution.id * 0.1 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
          >
            <button
              onClick={() => toggleExpanded(solution.id)}
              className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">{solution.icon}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">
                    {solution.id}. {solution.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    {solution.description.substring(0, 80)}...
                  </p>
                </div>
              </div>
              <motion.div
                animate={{ rotate: expandedId === solution.id ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-gray-400"
              >
                ↓
              </motion.div>
            </button>
            
            <AnimatePresence>
              {expandedId === solution.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="border-t border-gray-100"
                >
                  <div className="p-4 space-y-4">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Capabilities:</h4>
                      <ul className="space-y-1">
                        {solution.capabilities.map((capability, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="flex items-center gap-2 text-xs text-gray-600"
                          >
                            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full flex-shrink-0"></div>
                            {capability}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r">
                      <h4 className="font-semibold text-gray-800 mb-1 text-xs">What Makes It Different:</h4>
                      <p className="text-xs font-medium text-yellow-800">
                        {solution.differentiator}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function DesktopSolutionsExplorer() {
  const [selectedSolution, setSelectedSolution] = useState(solutionsData[0]);

  return (
    <>
      {/* Solution Tabs */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        {solutionsData.map((solution) => (
          <button
            key={solution.id}
            onClick={() => setSelectedSolution(solution)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
              selectedSolution.id === solution.id
                ? 'bg-emerald-500 text-white shadow-lg transform scale-105'
                : 'bg-white text-gray-700 hover:bg-emerald-50 border border-gray-200'
            }`}
          >
            <span className="text-lg">{solution.icon}</span>
            <span>{solution.id}.</span>
            <span className="text-sm font-semibold">{solution.title.split(' ')[0]} {solution.title.split(' ')[1]}</span>
          </button>
        ))}
      </div>

      {/* Selected Solution Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedSolution.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-8 border border-gray-100"
        >
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 bg-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <span className="text-white text-2xl">{selectedSolution.icon}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-primary mb-4">
                {selectedSolution.id}. {selectedSolution.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {selectedSolution.description}
              </p>
              
              {/* Problem Statement */}
              <div className="mb-6">
                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r">
                  <h4 className="font-semibold text-red-800 mb-2">⚠️ The Problem</h4>
                  <p className="text-sm text-red-700">{selectedSolution.problem}</p>
                </div>
              </div>

              {/* Capabilities Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">🎯 What You Get:</h4>
                  <ul className="space-y-2">
                    {selectedSolution.capabilities.map((capability, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        {capability}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">💡 What Makes It Different:</h4>
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r">
                    <p className="text-sm font-medium text-yellow-800">
                      {selectedSolution.differentiator}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

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
              <strong className="text-white block mt-2">From raw intent to production-ready prototypes.</strong>
            </p>
            
            <p className="text-lg mb-12 max-w-4xl mx-auto text-gray-400 leading-relaxed">
              Actuate AI is your AI-native execution engine - a modular service suite designed to deliver applied artificial intelligence across the enterprise. Whether you are automating a specific business process, experimenting with a GenAI prototype, or building production-ready tools, Actuate offers flexible services that can be consumed independently or as part of a larger transformation programme.
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
            

          </motion.div>
        </div>
      </section>

      {/* How Can Actuate Help You */}
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
              🔍 How Can Actuate Help You?
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              Actuate offers practical, outcome-led AI services that help you accelerate value, reduce friction, and embed intelligence where it matters. Every service is available as a discrete engagement or can be combined under a broader capability uplift programme with IntentOps.
            </p>
            
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <h3 className="text-sm font-semibold text-emerald-700 mb-1">Outcome-first GenAI delivery</h3>
                  <p className="text-xs text-emerald-600">Rapidly design, build, and iterate production-grade features with measurable business value</p>
                </div>
                
                <div className="text-center p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <h3 className="text-sm font-semibold text-emerald-700 mb-1">Enterprise-safe prompt engineering</h3>
                  <p className="text-xs text-emerald-600">Model-agnostic, governed, and reusable</p>
                </div>
                
                <div className="text-center p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <h3 className="text-sm font-semibold text-emerald-700 mb-1">Prototyping at speed</h3>
                  <p className="text-xs text-emerald-600">Turn ideas into working demos quickly</p>
                </div>
                
                <div className="text-center p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <h3 className="text-sm font-semibold text-emerald-700 mb-1">Tool fragmentation</h3>
                  <p className="text-xs text-emerald-600">Unify LLMs, APIs, and workflows under expert guidance</p>
                </div>
                
                <div className="text-center p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <h3 className="text-sm font-semibold text-emerald-700 mb-1">Reducing hallucination risk</h3>
                  <p className="text-xs text-emerald-600">Prompt testing, guardrails, and fallback patterns</p>
                </div>
                
                <div className="text-center p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <h3 className="text-sm font-semibold text-emerald-700 mb-1">Legacy drag</h3>
                  <p className="text-xs text-emerald-600">Intelligent automation that reduces or removes unnecessary layers of workflow</p>
                </div>
                
                <div className="text-center p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <h3 className="text-sm font-semibold text-emerald-700 mb-1">Process re-engineering and automation</h3>
                  <p className="text-xs text-emerald-600">Optimise and rebuild business processes to improve speed, accuracy, and cost-efficiency</p>
                </div>
              </div>
              
              <p className="text-base text-gray-600 text-center italic">
                Whether you need to streamline a single process or build an internal AI capability, Actuate is built for flexibility.
              </p>
            </div>
            
            <div className="mt-12 bg-emerald-500/10 border-l-4 border-emerald-500 p-8 rounded-r-lg text-left max-w-4xl mx-auto">
              <h3 className="text-xl font-bold text-primary mb-4">💡 Core Insight</h3>
              <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-4">
                "Actuate combines the cognition of your people with the execution power of AI. It's not about replacing work - it's about delivering the future faster, with the people who know what matters."
              </blockquote>
              <blockquote className="text-lg text-gray-700 italic leading-relaxed">
                "AI is only useful if it moves the needle. Actuate brings the tools, the talent, and the tempo to get real outcomes shipped - not just imagined."
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Explorer */}
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
              🚀 Solutions Explorer
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive AI delivery services. Click on any service to learn more about capabilities and differentiators.
            </p>
          </motion.div>
          
          <SolutionsExplorer />
        </div>
      </section>

      {/* How Actuate and IntentOps Work Together */}
      <ActuateIntentOpsCollaboration />

      {/* Footer */}
      <footer className="bg-green-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">📎 Ready to Actuate?</h3>
            <p className="text-lg mb-8 opacity-90 max-w-4xl mx-auto">
              Actuate is your delivery engine for applied AI. Whether you are running a discovery sprint, building an AI-native tool, or embedding intelligence into your operations, we provide practical services that produce results.
            </p>
            <p className="text-xl font-semibold mb-8 text-yellow-400">Start anywhere. Align as you grow.</p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-green-900 px-8 py-3 rounded-lg font-bold transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}