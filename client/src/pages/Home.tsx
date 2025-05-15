import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CognitiveDebtFlow from "@/components/CognitiveDebtFlow";
import IntentOpsLayer from "@/components/IntentOpsLayer";
import StageDetails from "@/components/StageDetails";
import ComparisonSection from "@/components/ComparisonSection";
import { stages } from "@/data/stagesData";
import { motion } from "framer-motion";

export default function Home() {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  const handleStageClick = (stageId: number) => {
    setActiveStage(stageId);
  };

  const handleCloseDetails = () => {
    setActiveStage(null);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-primary">
      <Header />
      
      <main className="container mx-auto px-4 py-8 md:py-12 flex-grow">
        {/* Hero Section */}
        <motion.section 
          className="mb-12 md:mb-16"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-8 relative">
            {/* Decorative elements */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 -translate-y-full hidden md:block">
              <svg width="120" height="40" viewBox="0 0 120 40">
                <path d="M0,20 C40,5 80,35 120,20" stroke="hsl(var(--accent))" strokeWidth="2" fill="none" />
              </svg>
            </div>
            
            <motion.h1 
              className="text-3xl md:text-5xl font-bold mb-6 text-primary"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              The Compounding Effect of 
              <span className="text-accent ml-2">Cognitive Debt</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-secondary max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Visualizing how AI adoption without proper governance accelerates value decay in enterprise organizations,
              and how IntentOps provides the necessary feedback loops to maintain alignment.
            </motion.p>
          </div>
        </motion.section>

        {/* IntentOps Layer */}
        <IntentOpsLayer />

        {/* Cognitive Debt Flow */}
        <div className="my-8 md:my-12">
          <div className="flex flex-col md:flex-row items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 md:mb-0">
              The 5 Stages of AI Adoption Decay
            </h2>
            <p className="text-sm md:text-base text-secondary">
              Click on each stage to learn more
            </p>
          </div>
          <CognitiveDebtFlow onStageClick={handleStageClick} />
        </div>

        {/* Stage Details - Only shown when a stage is active */}
        {activeStage !== null && (
          <StageDetails 
            stage={stages.find(s => s.id === activeStage)!} 
            onClose={handleCloseDetails} 
          />
        )}

        {/* Comparison Section */}
        <ComparisonSection />
      </main>

      <Footer />
    </div>
  );
}
