import { motion } from "framer-motion";
import { Link } from "wouter";

export default function FlowencyLayersGraphic() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Value-driven AI Architecture
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            IntentOps provides the strategic wrapper around value-focused execution, 
            ensuring alignment from strategic initiatives through to operational delivery.
          </p>
        </motion.div>

        <div className="relative">
          {/* IntentOps Wrapper - Visual representation of it wrapping around everything */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 rounded-2xl p-8 shadow-2xl border border-amber-500/20"
          >
            {/* IntentOps Label */}
            <div className="absolute -top-4 left-8 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg">
              <Link to="/intentops" className="hover:text-gray-200 transition-colors">
                IntentOps Framework
              </Link>
            </div>
            
            {/* Corner indicators showing IntentOps wraps everything */}
            <div className="absolute top-4 right-4 w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 bg-orange-400 rounded-full animate-pulse delay-300"></div>
            <div className="absolute bottom-4 right-4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-600"></div>

            {/* Value Layer - Top priority */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 mb-6 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-indigo-600/50 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  <div className="w-6 h-6 bg-purple-300 rounded-full"></div>
                  Value
                </h3>
                <p className="text-purple-100 text-sm mb-4">
                  Strategic initiatives cascaded through enterprise (OKRs) - tracked and measured
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-purple-200 font-medium">Strategic OKRs</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-purple-200 font-medium">Value Tracking</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-purple-200 font-medium">ROI Measurement</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Signals Layer - Information flows up from execution */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-6 mb-6 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-cyan-600/50 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  <div className="w-6 h-6 bg-blue-300 rounded-full animate-pulse"></div>
                  Signals
                </h3>
                <p className="text-blue-100 text-sm mb-4">
                  Real-time intelligence from delivery operations, surfaced for strategic visibility
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-blue-200 font-medium">Flow Metrics</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-blue-200 font-medium">Drift Alerts</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-blue-200 font-medium">Performance Data</div>
                  </div>
                </div>
              </div>
              
              {/* Arrow showing signals flow up */}
              <div className="absolute right-4 bottom-2 text-white/60">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 19V5M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </motion.div>

            {/* Execution Layer - Where Actuate services operate */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl p-6 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/50 to-teal-600/50 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-3 flex items-center gap-3">
                  <div className="w-6 h-6 bg-emerald-300 rounded-full"></div>
                  <Link to="/actuate" className="hover:text-yellow-200 transition-colors">
                    Execution (Actuate)
                  </Link>
                </h3>
                <p className="text-emerald-100 text-sm mb-4">
                  Operational delivery layer where AI services are built, deployed, and managed
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-emerald-200 font-medium">AI Development</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-emerald-200 font-medium">System Integration</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3 text-center">
                    <div className="text-emerald-200 font-medium">Delivery Teams</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Value Priority Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-6 text-center"
            >
              <p className="text-gray-300 text-sm">
                <span className="text-amber-400 font-semibold">IntentOps</span> and{" "}
                <span className="text-emerald-400 font-semibold">Actuate</span> both maintain{" "}
                <span className="text-purple-400 font-semibold">value-first</span> priority
              </p>
            </motion.div>
          </motion.div>

          {/* Side annotations */}
          <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <div className="text-sm text-gray-500 writing-mode-vertical-rl transform rotate-180">
              Strategic Alignment
            </div>
          </div>
          
          <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <div className="text-sm text-gray-500 writing-mode-vertical-lr">
              Operational Delivery
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}