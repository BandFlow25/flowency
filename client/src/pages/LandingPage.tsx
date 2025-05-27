import { motion } from "framer-motion";
import { Link } from "wouter";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
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
              <a href="#approach" className="text-gray-900 hover:text-accent transition-colors">Our Approach</a>
              <a href="#flow" className="text-gray-900 hover:text-accent transition-colors">Flow</a>
              <Link href="/intentops" className="text-electric hover:text-accent transition-colors font-medium">
                IntentOps
              </Link>
            </div>
            <a 
              href="#contact" 
              className="bg-accent hover:bg-[hsl(16,100%,45%)] text-white px-4 py-2 rounded-md transition-colors"
            >
              Contact us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-primary via-secondary to-[hsl(var(--flow-blue-dark))] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              We help your{" "}
              <span className="text-accent">Delivery Systems</span>{" "}
              <span className="text-electric">Flow</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              Flowency is a Delivery Improvement and Business Change consultancy specialising in 
              optimising delivery for value flow and driving lasting, transformational change.{" "}
              <strong className="text-accent">Enhancing efficiency, maximising value</strong>.
            </p>
            <a 
              href="#more" 
              className="inline-block bg-accent hover:bg-[hsl(16,100%,45%)] text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors shadow-lg"
            >
              Learn More
            </a>
          </motion.div>
        </div>
      </section>

      {/* Definition Section */}
      <section id="more" className="bg-gradient-to-r from-secondary to-primary text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Flowency</h2>
            <p className="text-xl text-gray-300 mb-4">
              /ˈfloʊənsi/ • <em>noun</em>
            </p>
            <p className="text-xl mb-8 text-gray-200">
              The quality or condition of being fluent in flow and achieving optimal flow in your delivery organisation.
            </p>
            
            <div className="border-l-4 border-accent pl-6 mb-12">
              <h3 className="text-2xl font-bold mb-4">
                Enhancing operational efficiency, fostering strategic alignment and building internal capability.
              </h3>
              <p className="text-lg text-gray-200 mb-6">
                Visualise and optimise FLOW at all altitudes in the delivery organisation. From strategy formulation, 
                lean portfolio coordination to execution, we deliver insights and practical solutions designed to elevate 
                your delivery performance and value outcomes, ensuring resilience and adaptability in an ever-evolving market landscape.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4 text-accent">
                Immediate impact and sticky change
              </h3>
              <p className="text-lg text-gray-200">
                Flowency delivers rapid and sustainable improvements in delivery efficiency, leading to significant 
                reductions in lead times and increases in value delivery and strategic alignment. Starting with where 
                you are today, we help bring clarity, focus and stability, then optimise for flow. Our context-sensitive 
                approach ensures that change is not imposed. By leveraging your data insights and our experience, we help 
                you pursue evolutionary, continuous improvement, building internal capability and ensuring changes stick.
              </p>
              <p className="text-xl font-bold mt-4 text-electric">
                We won't tell you the way; we help you find your way.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="approach" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine proven methodologies with cutting-edge insights to deliver transformational change.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-electric rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Visualise</h3>
              <p className="text-gray-600">
                Make your delivery system visible and understand the current state of flow across all levels.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Optimise</h3>
              <p className="text-gray-600">
                Identify bottlenecks, eliminate waste, and create smooth value flow throughout your organisation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-[hsl(var(--flow-blue-dark))] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Sustain</h3>
              <p className="text-gray-600">
                Build internal capability and ensure continuous improvement becomes part of your organisational DNA.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IntentOps Feature Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Introducing <span className="text-electric">Intent</span><span className="text-accent">Ops</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our revolutionary approach to managing cognitive debt in AI adoption through continuous governance and alignment monitoring.
            </p>
          </motion.div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-accent">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Prevent AI Adoption Failures
                </h3>
                <p className="text-gray-600 mb-6">
                  Visualise how cognitive debt compounds through your AI adoption journey and implement 
                  governance layers that maintain strategic alignment throughout the process.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-electric rounded-full mr-3"></div>
                    <span>Real-time drift detection</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    <span>Value feedback loops</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-[hsl(var(--flow-blue-dark))] rounded-full mr-3"></div>
                    <span>Governance overlay framework</span>
                  </li>
                </ul>
                <Link 
                  href="/intentops"
                  className="inline-block bg-accent hover:bg-[hsl(16,100%,45%)] text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md"
                >
                  Explore IntentOps →
                </Link>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-primary to-secondary rounded-xl p-6 text-white">
                  <div className="text-3xl font-bold mb-2">5 Stages</div>
                  <div className="text-sm opacity-90 mb-4">of Cognitive Debt</div>
                  <div className="flex justify-center space-x-2">
                    <div className="w-4 h-4 bg-electric rounded-full"></div>
                    <div className="w-4 h-4 bg-[hsl(var(--flow-blue-light))] rounded-full"></div>
                    <div className="w-4 h-4 bg-accent rounded-full"></div>
                    <div className="w-4 h-4 bg-[hsl(var(--flow-blue-dark))] rounded-full"></div>
                    <div className="w-4 h-4 bg-destructive rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-medium text-gray-500 mb-8">Friends we've helped get flowing</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Note: In a real implementation, these would be the actual client logos from the legacy site */}
            <div className="text-2xl font-bold text-gray-400">HUEL</div>
            <div className="text-2xl font-bold text-gray-400">CARWOW</div>
            <div className="text-2xl font-bold text-gray-400">LUCKY SAINT</div>
            <div className="text-2xl font-bold text-gray-400">& MORE</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-200 mb-8">
              Ready to optimise your delivery for flow? Let's start the conversation.
            </p>
            <a 
              href="mailto:hello@flowency.co.uk"
              className="inline-block bg-accent hover:bg-[hsl(16,100%,45%)] text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors shadow-lg"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <img 
                src="https://cdn.prod.website-files.com/668bbc8f0f25bb8294a73f2f/6695430306a42b90cd8bf9be_Flowency-logo-meso.svg" 
                alt="Flowency"
                className="h-8 w-auto mb-4"
              />
              <p className="text-gray-400">
                Become fluent in flow
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Delivery Optimisation</li>
                <li>Flow Analysis</li>
                <li><Link href="/intentops" className="hover:text-accent transition-colors">IntentOps</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</a></li>
                <li><a href="/terms-of-use" className="hover:text-accent transition-colors">Terms of Use</a></li>
                <li><a href="/cookie-policy" className="hover:text-accent transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">
                hello@flowency.co.uk
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Flowency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}