import { motion } from "framer-motion";

export default function ActuateIntentOpsCollaboration() {
  return (
    <section className="relative overflow-hidden py-12">
      {/* Background gradient from Actuate colors to IntentOps colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#006a5c] via-[#2a4d6b] to-[#101e47]"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main X structure */}
            <div className="relative w-96 h-96 flex items-center justify-center">
              {/* Actuate - Top Left */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: -30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center transform -translate-x-8 -translate-y-8 shadow-2xl"
              >
                <div className="text-center text-white">
                  <div className="text-xl font-bold mb-1">Actuate</div>
                  <div className="text-xs opacity-80">Execution</div>
                </div>
              </motion.div>
              
              {/* IntentOps - Bottom Right */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center transform translate-x-8 translate-y-8 shadow-2xl"
              >
                <div className="text-center text-white">
                  <div className="text-xl font-bold mb-1">IntentOps</div>
                  <div className="text-xs opacity-80">Governance</div>
                </div>
              </motion.div>
              
              {/* Central X connector with glow */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative">
                  {/* Glowing background */}
                  <div className="absolute inset-0 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full blur-lg opacity-60 animate-pulse"></div>
                  {/* Main X symbol */}
                  <div className="relative w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-yellow-400">
                    <span className="text-4xl font-bold text-gray-800">×</span>
                  </div>
                </div>
              </motion.div>
              
              {/* Connecting lines */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Top-left to bottom-right line */}
                <div className="absolute top-20 left-20 w-56 h-0.5 bg-gradient-to-r from-emerald-400/60 to-blue-400/60 transform rotate-45 origin-left"></div>
                {/* Top-right to bottom-left line */}
                <div className="absolute top-20 right-20 w-56 h-0.5 bg-gradient-to-l from-blue-400/60 to-emerald-400/60 transform -rotate-45 origin-right"></div>
              </div>
            </div>
            
            {/* Text below */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mt-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Actuate × IntentOps
              </h2>
              <p className="text-yellow-300 font-medium">Where strategy meets execution</p>
              <p className="text-gray-300 text-sm mt-2 max-w-md mx-auto">
                Complete AI transformation through strategic governance and tactical execution
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}