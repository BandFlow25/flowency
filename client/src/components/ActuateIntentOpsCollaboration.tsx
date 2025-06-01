import { motion } from "framer-motion";

export default function ActuateIntentOpsCollaboration() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background gradient blending jade green to navy blue */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#101e47] via-[#2a4d6b] to-[#006a5c]"></div>
      
      {/* Overlay patterns */}
      <div className="absolute inset-0">
        {/* IntentOps side - structured grid pattern */}
        <div className="absolute left-0 top-0 w-1/2 h-full opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(247, 166, 0, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(247, 166, 0, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
          
          {/* Orchestration framework elements */}
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-orange-400/40 rounded-lg"></div>
          <div className="absolute top-40 left-40 w-24 h-24 border-2 border-orange-400/40 rounded-lg"></div>
          <div className="absolute bottom-32 left-16 w-40 h-20 border-2 border-orange-400/40 rounded-lg"></div>
        </div>
        
        {/* Actuate side - dynamic circuits and energy */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-30">
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
            <motion.path
              d="M100 250 Q250 350 400 250"
              stroke="#fed633"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </svg>
          
          {/* Energy nodes */}
          <div className="absolute top-32 right-20 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
          <div className="absolute top-48 right-32 w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-40 right-24 w-5 h-5 bg-yellow-400 rounded-full animate-pulse delay-1000"></div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* IntentOps Section */}
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <h3 className="text-4xl font-bold text-white mb-4">INTENT OPS</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mb-6"></div>
              <p className="text-gray-300 leading-relaxed">
                Strategic orchestration and governance that ensures AI initiatives align with business objectives and deliver measurable value.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Strategic alignment</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Governance frameworks</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span>Value tracking</span>
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
              {/* Glowing fusion point */}
              <div className="relative w-40 h-40 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-300 rounded-full animate-pulse shadow-2xl"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-white via-yellow-100 to-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-800">×</span>
                </div>
                
                {/* Radiating energy rings */}
                <div className="absolute -inset-4 border-2 border-yellow-400/30 rounded-full animate-ping"></div>
                <div className="absolute -inset-8 border border-orange-400/20 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
              </div>
              
              {/* Central text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-center mt-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                  Actuate × IntentOps
                </h2>
                <p className="text-yellow-300 font-semibold">Where strategy meets execution</p>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Actuate Section */}
          <div className="text-right">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <h3 className="text-4xl font-bold text-white mb-4">ACTUATE</h3>
              <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-yellow-400 mb-6 ml-auto"></div>
              <p className="text-gray-300 leading-relaxed">
                AI-native execution engine that transforms strategic intent into production-ready solutions with measurable business impact.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-center justify-end gap-2 text-sm text-gray-400">
                  <span>Rapid prototyping</span>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                </div>
                <div className="flex items-center justify-end gap-2 text-sm text-gray-400">
                  <span>Production deployment</span>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                </div>
                <div className="flex items-center justify-end gap-2 text-sm text-gray-400">
                  <span>Intelligent automation</span>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
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