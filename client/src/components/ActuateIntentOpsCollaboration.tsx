import { motion } from "framer-motion";

export default function ActuateIntentOpsCollaboration() {
  return (
    <section className="relative overflow-hidden py-16">
      {/* Background gradient blending Actuate to IntentOps colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#006a5c] via-[#2a4d6b] to-[#101e47]"></div>
      
      {/* Overlay patterns */}
      <div className="absolute inset-0">
        {/* Actuate side - dynamic circuits and energy (top-left) */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 opacity-30">
          {/* Circuit-like flowing lines */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
            <motion.path
              d="M50 200 Q200 100 350 200 Q200 300 50 200"
              stroke="#fed633"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path
              d="M100 150 Q250 50 400 150"
              stroke="#fed633"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
          </svg>
          
          {/* Energy nodes */}
          <div className="absolute top-8 left-8 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute top-16 left-16 w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-500"></div>
        </div>
        
        {/* IntentOps side - structured grid pattern (bottom-right) */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(247, 166, 0, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(247, 166, 0, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
          
          {/* Orchestration framework elements */}
          <div className="absolute bottom-8 right-8 w-16 h-16 border-2 border-orange-400/40 rounded-lg"></div>
          <div className="absolute bottom-16 right-16 w-12 h-12 border-2 border-orange-400/40 rounded-lg"></div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Actuate Section - moved to left */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <h3 className="text-4xl font-bold text-white mb-4">Actuate</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-yellow-400 mb-6"></div>
              <p className="text-gray-300 leading-relaxed mb-4">
                AI-native execution engine that transforms strategic intent into production-ready solutions with measurable business impact.
              </p>
              <p className="text-yellow-300 text-sm font-medium mb-6">
                AI-native delivery with embedded telemetry, trust, and value assurance.
              </p>
              
              {/* Modular service blocks */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-emerald-400 rounded-sm flex-shrink-0"></div>
                  <span className="text-sm text-gray-300">Outcome-led GenAI delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-yellow-400 rounded-sm flex-shrink-0"></div>
                  <span className="text-sm text-gray-300">Drop-in prompt engineering</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-teal-400 rounded-sm flex-shrink-0"></div>
                  <span className="text-sm text-gray-300">Modular AI services</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Central Convergence Point */}
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Refined X with modularity indicators */}
              <div className="relative flex items-center justify-center mb-8">
                {/* Subtle background with animation */}
                <div className="absolute w-24 h-24 bg-gradient-to-br from-yellow-400/20 via-orange-400/30 to-yellow-300/20 rounded-full animate-pulse"></div>
                <div className="absolute w-32 h-32 border border-yellow-400/20 rounded-full animate-ping"></div>
                <div className="absolute w-40 h-40 border border-orange-400/10 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                
                {/* Modular service blocks floating around the X */}
                <div className="absolute -top-6 -left-6 w-3 h-3 bg-emerald-400 rounded-sm animate-pulse opacity-70"></div>
                <div className="absolute -top-6 -right-6 w-3 h-3 bg-orange-400 rounded-sm animate-pulse opacity-70" style={{ animationDelay: '0.3s' }}></div>
                <div className="absolute -bottom-6 -left-6 w-3 h-3 bg-yellow-400 rounded-sm animate-pulse opacity-70" style={{ animationDelay: '0.6s' }}></div>
                <div className="absolute -bottom-6 -right-6 w-3 h-3 bg-blue-400 rounded-sm animate-pulse opacity-70" style={{ animationDelay: '0.9s' }}></div>
                <div className="absolute top-0 -left-12 w-2 h-2 bg-teal-400 rounded-sm animate-pulse opacity-50" style={{ animationDelay: '1.2s' }}></div>
                <div className="absolute top-0 -right-12 w-2 h-2 bg-indigo-400 rounded-sm animate-pulse opacity-50" style={{ animationDelay: '1.5s' }}></div>
                
                {/* Prominent X symbol */}
                <span className="relative text-6xl font-bold text-yellow-400 drop-shadow-2xl z-10">×</span>
              </div>
              
              {/* Central text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 whitespace-nowrap">
                  Actuate × IntentOps
                </h2>
                <p className="text-yellow-300 font-semibold">Where strategy meets execution</p>
              </motion.div>
            </motion.div>
          </div>
          
          {/* IntentOps Section - moved to right */}
          <div className="text-right">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <h3 className="text-4xl font-bold text-white mb-4">IntentOps</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mb-6 ml-auto"></div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Strategic orchestration and governance that ensures AI initiatives align with business objectives and deliver measurable value.
              </p>
              <p className="text-orange-300 text-sm font-medium mb-6">
                Live oversight of AI value, flow, and accountability from roadmap to rollout.
              </p>
              
              {/* Connected governance elements */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-end gap-3">
                  <span className="text-sm text-gray-300">Real-time value visibility</span>
                  <div className="w-4 h-4 bg-orange-400 rounded-sm flex-shrink-0"></div>
                </div>
                <div className="flex items-center justify-end gap-3">
                  <span className="text-sm text-gray-300">Wrap-around governance</span>
                  <div className="w-4 h-4 bg-yellow-400 rounded-sm flex-shrink-0"></div>
                </div>
                <div className="flex items-center justify-end gap-3">
                  <span className="text-sm text-gray-300">Flow accountability</span>
                  <div className="w-4 h-4 bg-blue-400 rounded-sm flex-shrink-0"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Bottom description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Together, IntentOps and Actuate form a complete AI transformation platform. IntentOps provides the strategic foundation and governance, 
              while Actuate delivers the execution power to turn vision into reality.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-orange-400 text-2xl mb-2">1</div>
                <div className="text-white font-semibold mb-1">Align</div>
                <div className="text-gray-400 text-sm">Strategic definition</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-yellow-400 text-2xl mb-2">2</div>
                <div className="text-white font-semibold mb-1">Execute</div>
                <div className="text-gray-400 text-sm">AI implementation</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-emerald-400 text-2xl mb-2">3</div>
                <div className="text-white font-semibold mb-1">Measure</div>
                <div className="text-gray-400 text-sm">Value tracking</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <div className="text-blue-400 text-2xl mb-2">4</div>
                <div className="text-white font-semibold mb-1">Optimize</div>
                <div className="text-gray-400 text-sm">Continuous improvement</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}