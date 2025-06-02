import { motion } from "framer-motion";
import { Link } from "wouter";
import { Menu, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import PBIImage from "@assets/PBI.png";
import Footer from "@/components/Footer";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    { src: "/assets/images/Card_on_desk.jpg", alt: "Flowency Card on Desk" },
    { src: "/assets/images/IntentOps.png", alt: "IntentOps" },
    { src: "/assets/images/Actuate.png", alt: "Actuate" },
    { src: "/assets/images/ContactCard.png", alt: "Contact Card" }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

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
              <Link to="/intentops" className="text-gray-900 hover:text-accent transition-colors">
                IntentOps
              </Link>
              <Link to="/actuate" className="text-gray-900 hover:text-accent transition-colors">
                Actuate
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
              <Link to="/flowency" className="block px-3 py-2 text-primary hover:text-accent transition-colors font-medium">
                Flowency v2
              </Link>
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
            {/* Pill graphic */}
            <div className="inline-block bg-slate-700 text-white px-6 py-3 rounded-full text-sm font-medium mb-8">
              <span className="text-accent">Adaptive</span> <span className="text-slate-200">Delivery</span>
            </div>
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
              href="#more" 
              className="inline-block bg-accent hover:bg-[hsl(16,100%,45%)] text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors shadow-lg"
            >
              LEARN MORE
            </a>
          </motion.div>
        </div>
      </section>

      {/* Image Carousel */}
      <section id="more" className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Desktop: Full width continuous carousel */}
          <div className="hidden md:block relative overflow-hidden h-96 bg-gray-100">
            {/* Continuous scrolling carousel */}
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * (100 / 3)}%)` }}
            >
              {/* Duplicate images for continuous effect */}
              {[...carouselImages, ...carouselImages, ...carouselImages].map((image, index) => (
                <div
                  key={index}
                  className="w-1/3 flex-shrink-0 h-full px-2"
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
              ))}
            </div>
              
            {/* Navigation Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Mobile: Full width carousel */}
          <div className="md:hidden px-0 relative overflow-hidden h-64">
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 h-full"
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
              
            {/* Mobile Navigation Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1.5 rounded-full transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            
            {/* Mobile Dots Indicator */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Our Approach Section - Clean Design */}
      <section id="approach" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {/* Header */}
            <div className="mb-12">
              <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                Our Approach
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
                <span className="text-electric">Adaptive Delivery</span>
              </h2>
              <p className="text-xl text-gray-600 font-medium mb-6">
                Framework agnostic, method diverse, value focused.
              </p>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our adaptive delivery approach is framework agnostic and method diverse, drawing from the best practices of agile, lean, waterfall and JFDI approaches, combined with our years of experience and hard earned insights, to apply the most contextually relevant solutions for your organisational context and maturity.
              </p>
            </div>

            {/* Key Points Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mb-4 mx-auto">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-3">Framework agnostic solutions</h4>
                <p className="text-gray-600">Adapt to your existing methodologies</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mb-4 mx-auto">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-3">Method diverse expertise</h4>
                <p className="text-gray-600">Drawing from agile, lean, and beyond</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mb-4 mx-auto">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-3">Value-focused outcomes</h4>
                <p className="text-gray-600">Measurable business impact</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mb-4 mx-auto">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-3">Contextually relevant approaches</h4>
                <p className="text-gray-600">Tailored to your organizational maturity</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mb-4 mx-auto">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-3">Years of proven experience</h4>
                <p className="text-gray-600">Battle-tested insights and solutions</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center mb-4 mx-auto">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4 className="font-bold text-lg text-gray-900 mb-3">Lasting transformational change</h4>
                <p className="text-gray-600">Sustainable improvements that stick</p>
              </motion.div>
            </div>

            {/* Service Mapping Pills */}

          </motion.div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              How We Help You Achieve <span className="text-electric">Flow</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four core service areas designed to transform your delivery capabilities and drive lasting organizational change.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Work System Optimisation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Work System Optimisation</h3>
              <p className="text-gray-600 leading-relaxed">
                Streamline your delivery systems and processes. Includes our revolutionary IntentOps framework for managing cognitive debt in AI adoption and maintaining strategic alignment.
              </p>
            </motion.div>

            {/* Value Outcome Leadership */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Value Outcome Leadership</h3>
              <p className="text-gray-600 leading-relaxed">
                Focus on measurable business outcomes and value creation throughout the delivery process. Drive strategic alignment and demonstrate tangible ROI.
              </p>
            </motion.div>

            {/* Tooling & Transparency */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Tooling & Transparency</h3>
              <p className="text-gray-600 leading-relaxed">
                Implement systems and processes that provide clear visibility into work flow and delivery metrics. Make the invisible visible across your organization.
              </p>
            </motion.div>

            {/* Team Coaching & Dynamics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">Team Coaching & Dynamics</h3>
              <p className="text-gray-600 leading-relaxed">
                Build high-performing teams through coaching, skill development, and improved collaboration patterns. Foster a culture of continuous improvement.
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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

            <div className="bg-gradient-to-r from-primary to-secondary text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Sound familiar?</h3>
              <p className="text-lg">
                These patterns signal systemic flow problems. We help you diagnose the root causes and implement sustainable solutions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visualise, Optimise, Sustain */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">How We Deliver Results</h2>
            <p className="text-xl text-gray-600">Our proven three-step methodology</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
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
              transition={{ duration: 0.8, delay: 0.6 }}
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
              transition={{ duration: 0.8, delay: 0.7 }}
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

      {/* Banner Section */}
      <section className="py-8 bg-slate-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-xl md:text-2xl font-bold text-white">
              We won't tell you the way; <span className="text-orange-500">we help you find your way.</span>
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Flow Domains */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-blue-50">
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-medium text-gray-500 mb-4">Organisations we've helped move faster</h3>
          
          {/* Continuous Ticker Tape */}
          <div className="relative overflow-hidden py-4">
            <div className="flex animate-scroll whitespace-nowrap">
              {/* First set of logos */}
              <div className="flex items-center gap-16 flex-shrink-0">
                <img src="/assets/images/ClientLogos/668fd36112697a494027a019_5.png" alt="Client" className="h-16 w-auto opacity-60 hover:opacity-80 transition-opacity flex-shrink-0" />
                <img src="/assets/images/ClientLogos/668fd3613f99311183fe084f_1-p-500.png" alt="Client" className="h-16 w-auto opacity-60 hover:opacity-80 transition-opacity flex-shrink-0" />
                <img src="/assets/images/ClientLogos/668fd3614791016018169276_2-p-500.png" alt="Client" className="h-16 w-auto opacity-60 hover:opacity-80 transition-opacity flex-shrink-0" />
                <img src="/assets/images/ClientLogos/668fd3615f621d8571b090f0_8-p-500.png" alt="Client" className="h-16 w-auto opacity-60 hover:opacity-80 transition-opacity flex-shrink-0" />
                <img src="/assets/images/ClientLogos/668fd36164dca1b9c365d5c3_6-p-500.png" alt="Client" className="h-16 w-auto opacity-60 hover:opacity-80 transition-opacity flex-shrink-0" />
                <img src="/assets/images/ClientLogos/668fd3616ed4cd3d5a7e2e4f_7.png" alt="Client" className="h-16 w-auto opacity-60 hover:opacity-80 transition-opacity flex-shrink-0" />
                <img src="/assets/images/ClientLogos/668fd361b4e0d8db10d03d54_9-p-500.png" alt="Client" className="h-16 w-auto opacity-60 hover:opacity-80 transition-opacity flex-shrink-0" />
                <img src="/assets/images/ClientLogos/668fd361c6ae39ccd09de9d6_10.png" alt="Client" className="h-16 w-auto opacity-60 hover:opacity-80 transition-opacity flex-shrink-0" />
                <img src="/assets/images/ClientLogos/668fd361fd70e42e1c1db0a9_4-p-500.png" alt="Client" className="h-16 w-auto opacity-60 hover:opacity-80 transition-opacity flex-shrink-0" />
                <img src="/assets/images/ClientLogos/668fd361ff36d3ec709cb15e_3-p-500.png" alt="Client" className="h-16 w-auto opacity-60 hover:opacity-80 transition-opacity flex-shrink-0" />
              </div>
              
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center gap-16 flex-shrink-0 ml-16">
                <img src="/assets/images/ClientLogos/668fd36112697a494027a019_5.png" alt="Client" className="h-16 w-auto opacity-60 hover:opacity-80 transition-opacity flex-shrink-0" />
                <img src="/assets/images/ClientLogos/668fd3613f99311183fe084f_1-p-500.png" alt="Client" className="h-16 w-auto opacity-60 hover:opacity-80 transition-opacity flex-shrink-0" />
                <img src="/assets/images/ClientLogos/668fd3614791016018169276_2-p-500.png" alt="Client" className="h-16 w-auto opacity-60 hover:opacity-80 transition-opacity flex-shrink-0" />
                <img src="/assets/images/ClientLogos/668fd3615f621d8571b090f0_8-p-500.png" alt="Client" className="h-16 w-auto opacity-60 hover:opacity-80 transition-opacity flex-shrink-0" />
                <img src="/assets/images/ClientLogos/668fd36164dca1b9c365d5c3_6-p-500.png" alt="Client" className="h-16 w-auto opacity-60 hover:opacity-80 transition-opacity flex-shrink-0" />
                <img src="/assets/images/ClientLogos/668fd3616ed4cd3d5a7e2e4f_7.png" alt="Client" className="h-16 w-auto opacity-60 hover:opacity-80 transition-opacity flex-shrink-0" />
                <img src="/assets/images/ClientLogos/668fd361b4e0d8db10d03d54_9-p-500.png" alt="Client" className="h-16 w-auto opacity-60 hover:opacity-80 transition-opacity flex-shrink-0" />
                <img src="/assets/images/ClientLogos/668fd361c6ae39ccd09de9d6_10.png" alt="Client" className="h-16 w-auto opacity-60 hover:opacity-80 transition-opacity flex-shrink-0" />
                <img src="/assets/images/ClientLogos/668fd361fd70e42e1c1db0a9_4-p-500.png" alt="Client" className="h-16 w-auto opacity-60 hover:opacity-80 transition-opacity flex-shrink-0" />
                <img src="/assets/images/ClientLogos/668fd361ff36d3ec709cb15e_3-p-500.png" alt="Client" className="h-16 w-auto opacity-60 hover:opacity-80 transition-opacity flex-shrink-0" />
              </div>
            </div>
          </div>
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
              <Link to="/actuate">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-gradient-to-br from-emerald-600/90 via-teal-700/90 to-green-800/90 backdrop-blur-sm p-8 rounded-xl border border-yellow-400/30 hover:border-yellow-300/50 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                >
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4 group-hover:text-yellow-300 transition-colors">Actuate</h3>
                  <p className="text-lg font-semibold mb-4 text-yellow-300">
                    From problem to product. From process to intelligence.
                  </p>
                  <p className="text-white/90 mb-4">
                    From raw intent to production-ready prototypes. Actuate is our AI-native delivery engine.
                  </p>
                  <p className="text-white/80">
                    It transforms ideas into testable tools, streamlines operations with intelligent automation, and delivers applied AI without the fluff.
                  </p>
                </motion.div>
              </Link>

              <Link to="/intentops">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gradient-to-br from-blue-900/90 via-slate-800/90 to-blue-950/90 backdrop-blur-sm p-8 rounded-xl border border-amber-500/30 hover:border-amber-400/50 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                >
                  <h3 className="text-2xl font-bold text-amber-400 mb-4 group-hover:text-amber-300 transition-colors">IntentOps</h3>
                  <p className="text-lg font-semibold mb-4 text-amber-200">
                    AI adoption is consensus. Aligned execution is competitive advantage.
                  </p>
                  <p className="text-white/90 mb-4">
                    IntentOps is your strategic telemetry layer - aligning portfolio intent to operational delivery in real time.
                  </p>
                  <p className="text-white/80">
                    It helps you contain cognitive debt, reduce drift, and steer AI-era transformation with confidence.
                  </p>
                </motion.div>
              </Link>
            </div>

            {/* Service Pills */}
            <div className="flex flex-wrap justify-center gap-4 mt-8 mb-8">
              <div className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full text-sm font-medium">
                Flowency → Capability
              </div>
              <Link to="/actuate">
                <div className="bg-gradient-to-r from-emerald-600 via-teal-700 to-green-800 text-yellow-300 px-6 py-3 rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer">
                  Actuate → Activation
                </div>
              </Link>
              <Link to="/intentops">
                <div className="bg-gradient-to-r from-blue-900 via-slate-800 to-blue-950 text-yellow-300 px-6 py-3 rounded-full text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer">
                  IntentOps → Alignment
                </div>
              </Link>
            </div>

            <div className="mt-8 bg-white/20 backdrop-blur-sm p-8 rounded-xl border-l-4 border-accent shadow-lg">
              <p className="text-xl font-bold text-center">
                Together, <span className="text-electric">Flowency</span> + <Link to="/intentops" className="text-amber-300 hover:text-amber-200 transition-colors underline decoration-amber-300/50 hover:decoration-amber-200">IntentOps</Link> + <Link to="/actuate" className="text-yellow-300 hover:text-yellow-200 transition-colors underline decoration-yellow-300/50 hover:decoration-yellow-200">Actuate</Link> form an adaptive operating stack - built to govern, deliver and evolve.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer 
        ctaText="Ready to optimise your delivery systems?"
        ctaDescription="Get in touch to discuss how we can help your delivery systems flow."
        ctaButtonText="Contact Us"
      />
    </div>
  );
}