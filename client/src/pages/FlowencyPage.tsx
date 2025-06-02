import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function FlowencyPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
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
              <a href="#home" className="text-gray-900 hover:text-accent transition-colors">Home</a>
              <Link to="/actuate" className="text-gray-900 hover:text-accent transition-colors">
                Actuate
              </Link>
              <Link to="/intentops" className="text-electric hover:text-accent transition-colors font-medium">
                IntentOps
              </Link>
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
              <a href="#home" className="block px-3 py-2 text-gray-900 hover:text-accent transition-colors">Home</a>
              <Link to="/actuate" className="block px-3 py-2 text-gray-900 hover:text-accent transition-colors">
                Actuate
              </Link>
              <Link to="/intentops" className="block px-3 py-2 text-electric hover:text-accent transition-colors font-medium">
                IntentOps
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-light mb-6 text-black leading-tight">
              <span className="block md:inline">We help your</span>
              <span className="hidden md:inline"> </span>
              <span className="text-electric">Delivery Systems Flow</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-700">
              Flowency is a Delivery Improvement and Business Change consultancy specialising in 
              optimising delivery for value flow and driving lasting, transformational change.{" "}
              <strong className="text-primary font-bold">Enhancing efficiency, maximising value</strong>.
            </p>
            <a 
              href="#adaptive" 
              className="inline-block bg-accent hover:bg-[hsl(16,100%,45%)] text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors shadow-lg"
            >
              LEARN MORE
            </a>
          </motion.div>
        </div>
      </section>

      {/* Adaptive Delivery Section */}
      <section id="adaptive" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Adaptive Delivery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Framework agnostic, method diverse, value focused.
            </p>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto mb-12">
              Our adaptive delivery approach draws from agile, lean, waterfall and JFDI - applied with hard-earned experience, and always in context. We don't impose frameworks. We adapt to yours.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="font-bold text-lg text-gray-900 mb-3">Framework agnostic solutions</h3>
                <p className="text-gray-600">We flex to fit your existing methods</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="font-bold text-lg text-gray-900 mb-3">Method diverse expertise</h3>
                <p className="text-gray-600">From agile to lean to just getting it done</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="font-bold text-lg text-gray-900 mb-3">Value-focused outcomes</h3>
                <p className="text-gray-600">We prioritise economic impact, not vanity metrics</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="font-bold text-lg text-gray-900 mb-3">Contextually relevant approaches</h3>
                <p className="text-gray-600">Every solution fits your maturity and constraints</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="font-bold text-lg text-gray-900 mb-3">Years of proven experience</h3>
                <p className="text-gray-600">Battle-tested across sectors and systems</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="font-bold text-lg text-gray-900 mb-3">Lasting transformational change</h3>
                <p className="text-gray-600">We help improvements stick, not slide</p>
              </motion.div>
            </div>

            <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-xl">
              <p className="text-xl font-semibold">
                Flowency → Capability &nbsp;&nbsp; IntentOps → Alignment &nbsp;&nbsp; Actuate → Activation
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Service Lines */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              How We Help You Achieve Flow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four focus areas designed to transform delivery capability and drive meaningful, lasting change.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl border border-blue-200"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-4">🛠️ Work System Optimisation</h3>
              <p className="text-gray-700 mb-4">Streamline systems and workflows to eliminate friction.</p>
              <p className="text-gray-600 text-sm">
                Includes IntentOps - our framework for managing cognitive debt and aligning AI-era delivery to strategy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-xl border border-amber-200"
            >
              <h3 className="text-2xl font-bold text-amber-900 mb-4">🎯 Value Outcome Leadership</h3>
              <p className="text-gray-700 mb-4">Drive strategic alignment with a focus on measurable value.</p>
              <p className="text-gray-600 text-sm">
                Ensure delivery is outcome-led, not just activity-based.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-200"
            >
              <h3 className="text-2xl font-bold text-green-900 mb-4">📊 Tooling & Transparency</h3>
              <p className="text-gray-700 mb-4">Make the invisible visible.</p>
              <p className="text-gray-600 text-sm">
                We implement systems that surface real flow metrics, economic signals, and delivery insights across your organisation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-xl border border-purple-200"
            >
              <h3 className="text-2xl font-bold text-purple-900 mb-4">👥 Team Coaching & Dynamics</h3>
              <p className="text-gray-700 mb-4">Build high-performing teams through capability development and improved collaboration.</p>
              <p className="text-gray-600 text-sm">
                Foster the culture and structure for continuous improvement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Diagnostic Carousel */}
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
              Problem Diagnostic: Can you relate?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Recognise these friction patterns in your delivery systems?
            </p>

            <div className="relative max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-red-100"
                >
                  <div className="text-red-500 text-2xl mb-4">⚠️</div>
                  <h3 className="font-bold text-lg text-gray-900 mb-3">Initiative Overload</h3>
                  <p className="text-gray-600 text-sm">Too many competing priorities, unclear strategic focus, decision paralysis</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-yellow-100"
                >
                  <div className="text-yellow-500 text-2xl mb-4">🔄</div>
                  <h3 className="font-bold text-lg text-gray-900 mb-3">Context Switching</h3>
                  <p className="text-gray-600 text-sm">Teams constantly switching between tasks, losing momentum and focus</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-orange-100"
                >
                  <div className="text-orange-500 text-2xl mb-4">📊</div>
                  <h3 className="font-bold text-lg text-gray-900 mb-3">Visibility Gaps</h3>
                  <p className="text-gray-600 text-sm">No clear view of progress, blockers surface late, surprises at delivery time</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-blue-100"
                >
                  <div className="text-blue-500 text-2xl mb-4">🤝</div>
                  <h3 className="font-bold text-lg text-gray-900 mb-3">Alignment Drift</h3>
                  <p className="text-gray-600 text-sm">Strategy and execution disconnect, teams working at cross-purposes</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-purple-100"
                >
                  <div className="text-purple-500 text-2xl mb-4">⏰</div>
                  <h3 className="font-bold text-lg text-gray-900 mb-3">Delivery Delays</h3>
                  <p className="text-gray-600 text-sm">Projects consistently late, scope creep, quality compromises</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-green-100"
                >
                  <div className="text-green-500 text-2xl mb-4">🎯</div>
                  <h3 className="font-bold text-lg text-gray-900 mb-3">Value Confusion</h3>
                  <p className="text-gray-600 text-sm">Unclear what delivers real business value, effort goes to wrong places</p>
                </motion.div>
              </div>

              <div className="mt-12 bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Sound familiar?</h3>
                <p className="text-lg">
                  These patterns signal systemic flow problems. We help you diagnose the root causes and implement sustainable solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Deliver Results */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Visualise → Optimise → Sustain
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-8 rounded-xl shadow-sm border"
              >
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">1</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Visualise</h3>
                <p className="text-gray-600">Understand your current delivery system at every altitude</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-sm border"
              >
                <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">2</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Optimise</h3>
                <p className="text-gray-600">Identify friction, unblock flow, accelerate delivery</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-sm border"
              >
                <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">3</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Sustain</h3>
                <p className="text-gray-600">Build internal capability and continuous improvement habits</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Flow Domains */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Fluent in FLOW. Applied where it matters.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200"
              >
                <h3 className="text-xl font-bold text-blue-900 mb-4">Delivery Flow</h3>
                <p className="text-gray-700">Focused execution, faster throughput, reduced WIP</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-amber-50 to-yellow-50 p-6 rounded-xl border border-amber-200"
              >
                <h3 className="text-xl font-bold text-amber-900 mb-4">Flow Economics</h3>
                <p className="text-gray-700">Value-centred prioritisation and cost-of-delay insight</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200"
              >
                <h3 className="text-xl font-bold text-green-900 mb-4">Team Flow</h3>
                <p className="text-gray-700">Adaptive collaboration across complex systems</p>
              </motion.div>
            </div>

            <div className="mt-16 max-w-4xl mx-auto">
              <p className="text-xl font-semibold text-gray-900 mb-4">Immediate impact and sticky change.</p>
              <p className="text-lg text-gray-700 mb-6">
                We deliver sustainable improvements that reduce lead times, increase value throughput, and align delivery to what matters.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We start where you are, bring clarity and stability, and optimise from there.
              </p>
              <p className="text-xl font-bold text-primary">
                We won't tell you the way; we help you find your way.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bridge to Actuate & IntentOps */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Capability. Alignment. Activation.
            </h2>
            <p className="text-xl mb-12 max-w-4xl mx-auto opacity-90">
              Flowency builds capability for FLOW - the foundational layer of delivery performance. 
              Now, two integrated offerings extend that system for the AI era:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
              >
                <h3 className="text-2xl font-bold text-electric mb-4">→ IntentOps</h3>
                <p className="text-lg font-semibold mb-4">
                  AI adoption is consensus. Aligned execution is competitive advantage.
                </p>
                <p className="text-white/90 mb-4">
                  IntentOps is your strategic telemetry layer - aligning portfolio intent to operational delivery in real time.
                </p>
                <p className="text-white/80">
                  It helps you contain cognitive debt, reduce drift, and steer AI-era transformation with confidence.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20"
              >
                <h3 className="text-2xl font-bold text-accent mb-4">→ Actuate</h3>
                <p className="text-lg font-semibold mb-4">
                  From problem to product. From process to intelligence.
                </p>
                <p className="text-white/90 mb-4">
                  From raw intent to production-ready prototypes. Actuate is our AI-native delivery engine.
                </p>
                <p className="text-white/80">
                  It transforms ideas into testable tools, streamlines operations with intelligent automation, and delivers applied AI without the fluff.
                </p>
              </motion.div>
            </div>

            <div className="mt-12 bg-white/20 backdrop-blur-sm p-8 rounded-xl border border-white/30">
              <p className="text-xl font-bold">
                Together, Flowency + IntentOps + Actuate form an adaptive operating stack - built to govern, deliver and evolve.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <img 
              src="https://cdn.prod.website-files.com/668bbc8f0f25bb8294a73f2f/6695430306a42b90cd8bf9be_Flowency-logo-meso.svg" 
              alt="Flowency"
              className="h-6 w-auto"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Ready to optimise your delivery systems?</h3>
          <p className="text-gray-400 mb-6">
            Get in touch to discuss how we can help your delivery systems flow.
          </p>
          <a 
            href="mailto:hello@flowency.co.uk"
            className="inline-block bg-accent hover:bg-[hsl(16,100%,45%)] text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors"
          >
            Contact Us
          </a>
        </div>
      </footer>
    </div>
  );
}