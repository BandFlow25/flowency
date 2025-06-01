import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ActuateIntentOpsCollaboration from "../components/ActuateIntentOpsCollaboration";

// 3-Level Model Service Lines Data
const serviceLines = [
  {
    id: 1,
    title: "AI Strategy to Action",
    icon: "🎯",
    // Level 1: Quick View Tile
    pain: "Disconnected initiatives, unclear value, and delivery misalignment",
    service: "Structure and prioritise your AI efforts to match business outcomes",
    result: "Aligned, feasible opportunities and clear execution paths",
    // Level 2: Expansion Details
    problemDetail: "AI investment is happening, but without cohesion or clear value.",
    whatWeDo: "We help you identify, shape, and structure AI initiatives with business alignment, delivery feasibility, and governance readiness.",
    whatYouGet: [
      "Clear portfolio of opportunities prioritised by value",
      "Ready-to-build project briefs with aligned business context",
      "Tooling and model recommendations matched to need"
    ]
  },
  {
    id: 2,
    title: "AI-Native Product & Prototyping",
    icon: "⚡",
    // Level 1: Quick View Tile
    pain: "You've got ideas or use cases but nothing testable or live",
    service: "Build prototypes or full features using the right models, guardrails, and telemetry",
    result: "Tangible, testable outputs aligned to business value",
    // Level 2: Expansion Details
    problemDetail: "You've got use cases but lack the team, clarity, or capacity to deliver working features.",
    whatWeDo: "We rapidly deliver working AI-native prototypes or production tools with traceable logic, telemetry, and aligned context.",
    whatYouGet: [
      "Live or testable features aligned to core business outcomes",
      "Built-in testing, safety, and observability patterns",
      "Optional wrap-around with IntentOps for sustained value tracking"
    ]
  },
  {
    id: 3,
    title: "Intelligent Process Transformation",
    icon: "🔄",
    // Level 1: Quick View Tile
    pain: "Your workflows are bloated and slow due to legacy manual layers",
    service: "Redesign and automate key operational processes using GenAI, RPA, and orchestration",
    result: "Faster, cleaner, more reliable business operations with lower effort and risk",
    // Level 2: Expansion Details
    problemDetail: "Your operations are clogged with manual tasks, legacy workarounds, and costly inefficiencies.",
    whatWeDo: "We apply AI to redesign high-friction workflows using GenAI, RPA, and smart human-in-loop design to drive resilience and remove waste.",
    whatYouGet: [
      "Refactored process maps and simplified decision trees",
      "Automated outputs with measurable improvements in time, quality, and cost",
      "Reduction in operational risk, toil, and drag"
    ]
  },
  {
    id: 4,
    title: "Prompt Engineering as a Service",
    icon: "🤖",
    // Level 1: Quick View Tile
    pain: "LLM results are inconsistent, off-brand, or not production-safe",
    service: "Craft prompt libraries tied to business intent, with controls, tuning, and versioning",
    result: "Reliable AI outputs you can trace, test, and govern",
    // Level 2: Expansion Details
    problemDetail: "Your GenAI tools produce inconsistent, brittle, or off-message results.",
    whatWeDo: "We build production-grade prompt systems designed for reliability, governance, and aligned usage across tools and teams.",
    whatYouGet: [
      "Reusable enterprise prompt libraries linked to real business intent",
      "Safe fallback strategies, persona design, and output shaping",
      "Model-agnostic compatibility and monitoring"
    ]
  },
  {
    id: 5,
    title: "Operational Decision Support",
    icon: "⚙️",
    // Level 1: Quick View Tile
    pain: "You cannot see where delivery is blocked or value is lost",
    service: "Visualise flow, identify friction, and highlight cost-of-delay across the system",
    result: "Real-time decision support and insight across delivery and operations",
    // Level 2: Expansion Details
    problemDetail: "You don't know where delivery is stalling or where value leaks are happening.",
    whatWeDo: "We embed observability into your delivery system using AI to surface blockers, delays, discard patterns, and friction.",
    whatYouGet: [
      "Visualised flow data and intent-to-outcome traceability",
      "Quantified economic impact of delay, failure, and blocked work",
      "Continuous signals for intervention and improvement"
    ]
  }
];

// Level 1: Web UI-ready tiles component
function ServiceTiles() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {serviceLines.map((service) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: service.id * 0.1 }}
          className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
          onClick={() => toggleExpanded(service.id)}
        >
          {/* Level 1: Quick Scan Tile */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl">{service.icon}</span>
              </div>
              <motion.div
                animate={{ rotate: expandedId === service.id ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-gray-400"
              >
                ↓
              </motion.div>
            </div>
            
            <h3 className="font-bold text-lg text-gray-900 mb-4">
              {service.title}
            </h3>
            
            {/* Pain Point */}
            <div className="mb-3">
              <div className="flex items-start gap-2">
                <span className="text-red-500 text-sm mt-0.5">🔥</span>
                <p className="text-sm text-gray-700 font-medium">{service.pain}</p>
              </div>
            </div>
            
            {/* Service */}
            <div className="mb-3">
              <div className="flex items-start gap-2">
                <span className="text-blue-500 text-sm mt-0.5">⚙️</span>
                <p className="text-sm text-gray-600">{service.service}</p>
              </div>
            </div>
            
            {/* Result */}
            <div className="mb-4">
              <div className="flex items-start gap-2">
                <span className="text-green-500 text-sm mt-0.5">✅</span>
                <p className="text-sm text-emerald-700 font-medium">{service.result}</p>
              </div>
            </div>
          </div>
          
          {/* Level 2: Expansion Details */}
          <AnimatePresence>
            {expandedId === service.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t border-gray-100"
              >
                <div className="p-6 bg-gray-50 space-y-4">
                  {/* Problem Detail */}
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r">
                    <h4 className="font-semibold text-red-800 mb-2 text-sm">Problem</h4>
                    <p className="text-sm text-red-700">{service.problemDetail}</p>
                  </div>
                  
                  {/* What We Do */}
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r">
                    <h4 className="font-semibold text-blue-800 mb-2 text-sm">What We Do</h4>
                    <p className="text-sm text-blue-700">{service.whatWeDo}</p>
                  </div>
                  
                  {/* What You Get */}
                  <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r">
                    <h4 className="font-semibold text-green-800 mb-2 text-sm">What You Get</h4>
                    <ul className="space-y-2">
                      {service.whatYouGet.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-green-700">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

// New simplified how we help component
function HowWeHelp() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
        >
          <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🎯</span>
          </div>
          <h3 className="font-bold text-lg text-gray-900 mb-2">Outcome-first GenAI delivery</h3>
          <p className="text-sm text-gray-600">Rapidly build usable features tied to business value</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
        >
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">⚙️</span>
          </div>
          <h3 className="font-bold text-lg text-gray-900 mb-2">Enterprise-safe prompt engineering</h3>
          <p className="text-sm text-gray-600">Production-ready AI with governance and reliability built-in</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
        >
          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🔄</span>
          </div>
          <h3 className="font-bold text-lg text-gray-900 mb-2">Modular AI services</h3>
          <p className="text-sm text-gray-600">Independent engagements or integrated transformation programmes</p>
        </motion.div>
      </div>
    </div>
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
            
            {/* Simple list format */}
            <div className="max-w-4xl mx-auto text-left space-y-4 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-gray-800">Outcome-first GenAI delivery</span>
                  <span className="text-gray-600"> – rapidly build usable features tied to business value</span>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-gray-800">Prompt engineering as a service</span>
                  <span className="text-gray-600"> – model-agnostic, governed, and reusable</span>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-gray-800">Tool unification and orchestration</span>
                  <span className="text-gray-600"> – streamline fragmented LLMs, APIs, and workflows</span>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-gray-800">Process re-engineering and automation</span>
                  <span className="text-gray-600"> – redesign manual and inefficient workflows</span>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-gray-800">Hallucination and drift control</span>
                  <span className="text-gray-600"> – add guardrails, fallback patterns, and quality signals</span>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-emerald-500 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-gray-800">Legacy drag reduction</span>
                  <span className="text-gray-600"> – automate and eliminate redundant layers of complexity</span>
                </div>
              </div>
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

      {/* Actuate Service Lines */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              🚀 Actuate Service Lines
            </h2>
          </motion.div>
          
          <ServiceTiles />
        </div>
      </section>

      {/* How Can Actuate Help You - Refined */}
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
          </motion.div>
          
          <HowWeHelp />
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