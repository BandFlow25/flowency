import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle, Target, Users } from "lucide-react";
import { useState } from "react";
import ActuateIntentOpsCollaboration from "../components/ActuateIntentOpsCollaboration";

// Level 1: Simple service tiles for attention-grabbing
const serviceLines = [
  {
    id: 1,
    title: "AI Strategy to Action",
    icon: "🎯",
    problem: "Ambition without execution. AI strategies stall when scattered initiatives fail to connect to business value.",
    whatWeDo: "Facilitated working sessions, portfolio design, feasibility mapping, and enterprise-aligned AI strategy execution plans.",
    outcome: "A prioritised portfolio of AI use cases, aligned to strategic outcomes",
    differentiator: "Intent-aligned from day one. Not just building - aligning to enterprise objectives.",
    // Level 2: Expandable detail
    expandedDetails: {
      description: "Structured definition and alignment of AI strategy with clear prioritisation, roadmap design, and governance-ready execution framing.",
      outcomes: [
        "Execution-ready specifications mapped to value, feasibility, and delivery risk",
        "Tooling and model landscape matched to your context", 
        "Optional telemetry and traceability via IntentOps"
      ]
    }
  },
  {
    id: 2,
    title: "AI-Native Product and Prototype Development", 
    icon: "⚡",
    problem: "Even with a strong use case, turning intent into working software is risky, fragmented, and slow.",
    whatWeDo: "Fast-turnaround development of AI-native tools, copilots, RAG workflows, and context-integrated LLM interfaces.",
    outcome: "Testable prototypes or production-ready tools with built-in observability",
    differentiator: "Modular services, fast value. Start small, scale confidently.",
    expandedDetails: {
      description: "Full-cycle product and prototype development, from intent framing to testable build, with embedded context and telemetry.",
      outcomes: [
        "Built-in observability, telemetry, and fallback logic",
        "UX-integrated LLM pipelines, agents, and orchestration",
        "Delivery framed against business intent, not feature checklists"
      ]
    }
  },
  {
    id: 3,
    title: "Intelligent Process Transformation",
    icon: "🔄", 
    problem: "Your workflows are full of manual handoffs and drag.",
    whatWeDo: "Redesign and automate broken processes using GenAI, RPA and smart orchestration.",
    outcome: "Reduced effort, faster outcomes, and higher operational resilience",
    differentiator: "GenAI + RPA + HITL fusion. Real-world automation, not lab experiments.",
    expandedDetails: {
      description: "Business process re-engineering and smart automation using GenAI, RPA, and human-in-loop design.",
      outcomes: [
        "Process maps with bottlenecks, blockers, and automation targets",
        "Applied cognitive automation that reduces—not adds—workflow burden", 
        "Optional execution at scale via trusted delivery partners"
      ]
    }
  },
  {
    id: 4,
    title: "Prompt Engineering as a Service",
    icon: "🤖",
    problem: "LLMs underperform without structured, context-aware prompting. Teams waste time iterating blindly.",
    whatWeDo: "End-to-end design and delivery of governed prompt libraries, tuned for business alignment and operational safety.",
    outcome: "Prompt patterns and playbooks built around your intent",
    differentiator: "Prompt Engineering as a service. Structured, testable, reusable.",
    expandedDetails: {
      description: "High-quality prompt design, tuning, testing, and lifecycle management, grounded in deep expertise and business context.",
      outcomes: [
        "Fallback logic, guardrails, test cases, and persona switching",
        "Model-agnostic patterns with performance monitoring",
        "Integration into your tools, platforms, or customer experience"
      ]
    }
  },
  {
    id: 5,
    title: "Operational Decision Support with AI",
    icon: "⚙️",
    problem: "Delivery drift, invisible blockers, and decision latency are everywhere. Traditional dashboards show effort, not value.",
    whatWeDo: "AI-enhanced delivery visibility, including real-time flow metrics, value leakage, and strategic telemetry.",
    outcome: "Visualised bottlenecks, discard rates, and flow inefficiencies",
    differentiator: "Built to scale across teams and tools. Designed for reuse, integration, and control.",
    expandedDetails: {
      description: "AI-augmented observability, surfacing friction points, risk patterns, and waste hotspots to inform faster, better decisions.",
      outcomes: [
        "Quantified waste and cost-of-delay signals",
        "Portfolio-wide decision support with optional IntentOps alignment",
        "Real-time insight into blockers, waste, and drift"
      ]
    }
  }
];

function ServiceTiles() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {serviceLines.map((service) => (
        <motion.div
          key={service.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: service.id * 0.1 }}
          className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
          onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
        >
          <div className="p-6">
            {/* Level 1: Attention-grabbing tile */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-xl">{service.icon}</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-red-600 mb-3 font-medium">
                  {service.problem}
                </p>
                <p className="text-sm text-gray-600 mb-3">
                  {service.whatWeDo}
                </p>
                <p className="text-sm text-emerald-700 font-semibold">
                  Outcome: {service.outcome}
                </p>
              </div>
            </div>
            
            {/* Expand indicator */}
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
              <span className="text-xs text-gray-500">Click to learn more</span>
              <motion.div
                animate={{ rotate: expandedId === service.id ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.div>
            </div>
          </div>
          
          {/* Level 2: Expandable detail */}
          <AnimatePresence>
            {expandedId === service.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden border-t border-gray-100 bg-gray-50"
              >
                <div className="p-6 space-y-4">
                  <p className="text-sm text-gray-700">
                    {service.expandedDetails.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Outcomes:</h4>
                    <ul className="space-y-1">
                      {service.expandedDetails.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                          <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0"></div>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r">
                    <p className="text-xs font-medium text-yellow-800">
                      {service.differentiator}
                    </p>
                  </div>
                  
                  {/* Level 3: CTA to deeper materials */}
                  <div className="flex gap-2 pt-2">
                    <button className="flex-1 bg-emerald-600 text-white text-xs py-2 px-3 rounded font-medium hover:bg-emerald-700 transition-colors">
                      Get Service Brief
                    </button>
                    <button className="flex-1 border border-emerald-600 text-emerald-600 text-xs py-2 px-3 rounded font-medium hover:bg-emerald-50 transition-colors">
                      Talk to Us
                    </button>
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

export default function ActuatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-300"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-16 h-16 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="text-gray-900">Actuate</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-4xl mx-auto leading-relaxed">
              AI-native delivery with embedded telemetry, trust, and value assurance
            </p>
            
            <p className="text-lg text-gray-500 mb-8 max-w-3xl mx-auto">
              Outcome-led AI services that help you accelerate value, reduce friction, and embed intelligence where it matters. Every service available as discrete engagement or combined under broader capability uplift.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-emerald-600 text-white font-semibold rounded-lg shadow-lg hover:bg-emerald-700 transition-colors flex items-center gap-2"
              >
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-lg hover:bg-emerald-50 transition-colors"
              >
                Talk to Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Insight */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-xl p-8">
              <div className="flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                The Core Insight
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Most AI initiatives fail not because of technology limitations, but because of execution gaps between strategy and delivery. Actuate bridges this gap with outcome-first GenAI delivery that rapidly builds usable features tied to business value.
              </p>
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

      {/* How Actuate and IntentOps Work Together */}
      <ActuateIntentOpsCollaboration />
    </div>
  );
}