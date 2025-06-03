import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect, createElement } from "react";
import ContactModal from "@/components/ContactModal";
import ActuateIntentOpsCollaboration from "../components/ActuateIntentOpsCollaboration";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

import { Target, Zap, RefreshCw, Bot, Settings, AlertTriangle, Cog, CheckCircle } from "lucide-react";

// 3-Level Model Service Lines Data
const serviceLines = [
  {
    id: 1,
    title: "AI Value Alignment",
    icon: Target,
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
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
    icon: Zap,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-100",
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
    icon: RefreshCw,
    iconColor: "text-green-600",
    iconBg: "bg-green-100",
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
    icon: Bot,
    iconColor: "text-orange-600",
    iconBg: "bg-orange-100",
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
    icon: Settings,
    iconColor: "text-teal-600",
    iconBg: "bg-teal-100",
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

  // Listen for auto-expand events from carousel
  useEffect(() => {
    const handleExpandService = (event: CustomEvent) => {
      const serviceId = event.detail.serviceId;
      setExpandedId(serviceId);
    };

    window.addEventListener('expandService', handleExpandService as EventListener);
    return () => window.removeEventListener('expandService', handleExpandService as EventListener);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {serviceLines.map((service) => (
        <motion.div
          key={service.id}
          data-service-index={service.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: service.id * 0.1 }}
          className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
          onClick={() => toggleExpanded(service.id)}
        >
          {/* Level 1: Quick Scan Tile */}
          <div className="p-4 md:p-6">
            <div className="flex items-center justify-between mb-3 md:mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg ${service.iconBg} flex items-center justify-center`}>
                  {createElement(service.icon, { className: `w-5 h-5 ${service.iconColor}` })}
                </div>
                <div className="md:hidden text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                  Tap to expand
                </div>
              </div>
              <motion.div
                animate={{ rotate: expandedId === service.id ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-2xl text-blue-500 group-hover:text-blue-600 font-bold"
              >
                {expandedId === service.id ? '−' : '+'}
              </motion.div>
            </div>
            
            <h3 className="font-bold text-lg text-gray-900 mb-4">
              {service.title}
            </h3>
            
            {/* Pain Point */}
            <div className="mb-2 md:mb-3">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <p className="text-xs md:text-sm text-gray-700 font-medium">{service.pain}</p>
              </div>
            </div>
            
            {/* Service */}
            <div className="mb-2 md:mb-3">
              <div className="flex items-start gap-2">
                <Cog className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                <p className="text-xs md:text-sm text-gray-600">{service.service}</p>
              </div>
            </div>
            
            {/* Result */}
            <div className="mb-3 md:mb-4">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-xs md:text-sm text-emerald-700 font-medium">{service.result}</p>
              </div>
            </div>
            
            {/* Expand hint for desktop */}
            <div className="hidden md:block text-center pt-2 border-t border-gray-100">
              <span className="text-xs text-gray-400">Click to expand details</span>
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
                <div className="p-3 md:p-6 bg-gray-50 space-y-3 md:space-y-4">
                  {/* Problem Detail */}
                  <div className="bg-red-50 border-l-4 border-red-400 p-3 md:p-4 rounded-r">
                    <h4 className="font-semibold text-red-800 mb-1 md:mb-2 text-xs md:text-sm">Problem</h4>
                    <p className="text-xs md:text-sm text-red-700">{service.problemDetail}</p>
                  </div>
                  
                  {/* What We Do */}
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-3 md:p-4 rounded-r">
                    <h4 className="font-semibold text-blue-800 mb-1 md:mb-2 text-xs md:text-sm">What We Do</h4>
                    <p className="text-xs md:text-sm text-blue-700">{service.whatWeDo}</p>
                  </div>
                  
                  {/* What You Get */}
                  <div className="bg-green-50 border-l-4 border-green-400 p-3 md:p-4 rounded-r">
                    <h4 className="font-semibold text-green-800 mb-1 md:mb-2 text-xs md:text-sm">What You Get</h4>
                    <ul className="space-y-1 md:space-y-2">
                      {service.whatYouGet.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs md:text-sm text-green-700">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></div>
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

// Level 0: High-Impact Problem Diagnostic Carousel
function ProblemDiagnosticCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const problems = [
    {
      icon: "🔄",
      title: "Manual drag everywhere?",
      pain: "Copy-paste steps, approval chains, and workflow spaghetti eating your day?",
      solution: "Let us redesign and automate those time-burning workflows.",
      serviceIndex: 2 // Links to Process Transformation
    },
    {
      icon: "🧠",
      title: "Your GenAI hallucinates?",
      pain: "AI tools confidently telling you the wrong thing at the worst moment?",
      solution: "We put guardrails, fallback logic, and monitoring in place.",
      serviceIndex: 3 // Links to Prompt Engineering
    },
    {
      icon: "⚡",
      title: "AI ideas, no working features?",
      pain: "Endless demos and prototypes but nothing your customers can actually touch?",
      solution: "We deliver testable, production-ready tools, fast.",
      serviceIndex: 1 // Links to AI Product Development
    },
    {
      icon: "🤖",
      title: "Prompt chaos across teams?",
      pain: "Everyone writing their own prompts, getting wildly different results?",
      solution: "We build prompt libraries you can trust and scale.",
      serviceIndex: 3 // Links to Prompt Engineering
    },
    {
      icon: "🔌",
      title: "Ten tools, no flow?",
      pain: "Testing every AI API under the sun but they don't talk to each other?",
      solution: "We unify your AI stack and remove duplicated effort.",
      serviceIndex: 4 // Links to Decision Support
    },
    {
      icon: "🪵",
      title: "Process-on-process layering?",
      pain: "Legacy workflows stacked like archaeological layers. Nobody knows why anymore.",
      solution: "We cut through legacy with AI-enhanced simplification.",
      serviceIndex: 2 // Links to Process Transformation
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % problems.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, problems.length]);

  const handleCardClick = (serviceIndex: number) => {
    // Scroll to corresponding service tile and auto-expand
    const serviceSection = document.querySelector('[data-service-index="' + serviceIndex + '"]');
    if (serviceSection) {
      serviceSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // Auto-expand the tile after scroll completes
      setTimeout(() => {
        const event = new CustomEvent('expandService', { detail: { serviceId: serviceIndex } });
        window.dispatchEvent(event);
      }, 800);
    }
  };

  return (
    <div className="relative max-w-6xl mx-auto">
      {/* Carousel Container */}
      <div 
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 border border-orange-200"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {problems.map((problem, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 p-8 cursor-pointer group"
              onClick={() => handleCardClick(problem.serviceIndex)}
            >
              <div className="text-center max-w-2xl mx-auto">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ 
                    scale: index === currentIndex ? 1 : 0.95, 
                    opacity: index === currentIndex ? 1 : 0.7 
                  }}
                  transition={{ duration: 0.5 }}
                  className="mb-6"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-2xl">{problem.icon}</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                    {problem.title}
                  </h3>
                  
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed italic">
                    "{problem.pain}"
                  </p>
                  
                  <p className="text-base text-orange-700 font-semibold group-hover:text-orange-800 transition-colors">
                    ⟩ {problem.solution}
                  </p>
                  
                  <div className="mt-6 opacity-75 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm text-gray-500">Click to see our solution ⇓</p>
                  </div>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Progress Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {problems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-orange-500 w-8' 
                  : 'bg-orange-300 hover:bg-orange-400'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentIndex((prev) => (prev - 1 + problems.length) % problems.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border border-orange-200 flex items-center justify-center hover:bg-orange-50 transition-colors group"
      >
        <span className="text-orange-600 group-hover:text-orange-700">←</span>
      </button>
      
      <button
        onClick={() => setCurrentIndex((prev) => (prev + 1) % problems.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg border border-orange-200 flex items-center justify-center hover:bg-orange-50 transition-colors group"
      >
        <span className="text-orange-600 group-hover:text-orange-700">→</span>
      </button>
    </div>
  );
}

// Persistent Need Help Button
function NeedHelpButton() {
  const handleClick = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <button
        onClick={handleClick}
        className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
      >
        <span className="text-lg">💬</span>
        <span className="font-medium text-sm hidden sm:block group-hover:block">Got a use case in mind?</span>
        <span className="font-medium text-sm sm:hidden">Need Help?</span>
      </button>
    </motion.div>
  );
}

export default function ActuatePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Actuate",
    "provider": {
      "@type": "Organization",
      "name": "Flowency"
    },
    "description": "AI delivery engine providing applied AI implementation services and practical solutions for enterprise organizations",
    "serviceType": "AI Implementation",
    "areaServed": "GB"
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Actuate - AI Delivery Engine | Applied AI Services | Flowency"
        description="Get AI working in your business with Actuate's practical implementation services. From proof of concept to production deployment, we deliver real AI solutions that work."
        keywords="Actuate, AI implementation, applied AI, AI delivery, enterprise AI solutions, AI development, practical AI services"
        ogTitle="Actuate - AI Delivery Engine"
        ogDescription="Practical AI implementation services that take your AI projects from concept to production. Real delivery, really fast."
        canonicalUrl="https://flowency.co.uk/actuate"
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
              <Link to="/actuate" className="text-teal-500 hover:text-yellow-400 transition-colors font-bold">Actuate</Link>
              <Link to="/intentops" className="text-gray-900 hover:text-accent transition-colors">IntentOps</Link>
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
              <Link to="/actuate" className="block px-3 py-2 text-cyan-400 hover:text-yellow-400 transition-colors font-bold">Actuate</Link>
              <Link to="/intentops" className="block px-3 py-2 text-gray-900 hover:text-accent transition-colors">IntentOps</Link>
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
            
            <p className="text-lg mb-8 max-w-4xl mx-auto text-yellow-300 leading-relaxed font-semibold">
              We don't do PowerPoints. We ship working AI that delivers. Actuate builds what others only talk about.
            </p>
            
            <p className="text-base mb-12 max-w-4xl mx-auto text-white/80 leading-relaxed font-medium">
              A modular service suite designed to deliver applied artificial intelligence across the enterprise. Whether you are automating a specific business process, experimenting with a GenAI prototype, or building production-ready tools, Actuate offers flexible services that can be consumed independently or as part of a larger transformation programme.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="bg-yellow-400 hover:bg-yellow-500 text-green-900 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
                Show me what you can build →
              </button>
              <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300">
                Book a real delivery call
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
              🔍 What Problems Do We Solve?
            </h2>
            
            <p className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              Recognize yourself in these common AI challenges? We've built specific solutions for each.
            </p>
            
          </motion.div>
          
          <ProblemDiagnosticCarousel />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            
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
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4 md:mb-6">
              🚀 Actuate Service Lines
            </h2>
          </motion.div>
          
          <ServiceTiles />
        </div>
      </section>





      {/* How Actuate and IntentOps Work Together */}
      <ActuateIntentOpsCollaboration />

      <Footer 
        ctaText="Ready to Actuate?"
        ctaDescription="Actuate is your delivery engine for applied AI. Whether you are still testing the water, building an AI-native tool, or embedding intelligence into your operations, we provide practical services that produce results."
        ctaButtonText="Real delivery. Really fast. Start here."
        ctaBgColor="bg-gradient-to-br from-emerald-600 via-teal-700 to-green-800"
        ctaTextColor="text-white"
      />
      
      <NeedHelpButton />
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}