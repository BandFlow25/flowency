import { motion } from "framer-motion";
import { stages } from "@/data/stagesData";
import StageCard from "@/components/StageCard";
import useBreakpoint from "@/hooks/useBreakpoint";

interface CognitiveDebtFlowProps {
  onStageClick: (stageId: number) => void;
}

export default function CognitiveDebtFlow({ onStageClick }: CognitiveDebtFlowProps) {
  const isMobile = useBreakpoint("md");
  
  // Helper function to render connectors between mobile cards
  const renderMobileConnector = (index: number) => {
    if (index === stages.length - 1) return null;
    
    return (
      <div className="mobile-card-connector md:hidden my-1"></div>
    );
  };
  
  return (
    <section className="mb-12 relative">
      {/* Flow Connection Line */}
      <div className="hidden md:block absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-electric via-accent to-destructive z-0">
        <div className="absolute -top-1 left-1/5 h-3 w-3 rounded-full bg-electric animate-pulse"></div>
        <div className="absolute -top-1 left-2/5 h-3 w-3 rounded-full bg-[hsl(var(--flow-blue-dark))] animate-pulse"></div>
        <div className="absolute -top-1 left-3/5 h-3 w-3 rounded-full bg-[hsl(var(--flow-blue-light))] animate-pulse"></div>
        <div className="absolute -top-1 left-4/5 h-3 w-3 rounded-full bg-accent animate-pulse"></div>
      </div>
      
      {/* Mobile view: Show flowing card pattern */}
      <div className="md:hidden mb-6 p-4 rounded-lg bg-gradient-to-r from-primary to-[hsl(var(--flow-blue-dark))] text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0,50 C20,30 80,70 100,50" stroke="hsl(var(--accent))" strokeWidth="1" fill="none" />
            <path d="M0,30 C30,50 70,20 100,40" stroke="hsl(var(--electric))" strokeWidth="1" fill="none" />
          </svg>
        </div>
        <div className="relative z-10">
          <h3 className="text-lg font-bold mb-2">Value Flow Direction</h3>
          <p className="text-sm mb-3">Swipe through stages to see how cognitive debt compounds</p>
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center">
              <div className="h-4 w-4 rounded-full bg-electric"></div>
              <span className="text-xs mt-1">Start</span>
            </div>
            <div className="flex-1 mx-2 h-1 bg-gradient-to-r from-electric via-[hsl(var(--flow-blue-light))] to-destructive"></div>
            <div className="flex flex-col items-center">
              <div className="h-4 w-4 rounded-full bg-destructive"></div>
              <span className="text-xs mt-1">End</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stages cards */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
      >
        {stages.map((stage, index) => (
          <motion.div key={stage.id} className="flex flex-col">
            <StageCard
              stage={stage}
              isLastStage={index === stages.length - 1}
              onClick={() => onStageClick(stage.id)}
              isMobile={isMobile}
            />
            {renderMobileConnector(index)}
          </motion.div>
        ))}
      </motion.div>
      
      {/* Mobile indicator for flow - bottom dots */}
      <div className="block md:hidden mt-6 mb-2">
        <div className="flex flex-col items-center">
          <p className="text-sm text-secondary mb-3 text-center">Tap any stage above to explore details</p>
          <div className="flex space-x-3">
            {stages.map((stage) => (
              <motion.div 
                key={stage.id}
                className={`h-3 w-3 rounded-full cursor-pointer ${
                  stage.id === 1 ? "bg-electric" : 
                  stage.id === 2 ? "bg-[hsl(var(--flow-blue-dark))]" : 
                  stage.id === 3 ? "bg-[hsl(var(--flow-blue-light))]" : 
                  stage.id === 4 ? "bg-accent" : 
                  "bg-destructive"
                }`}
                whileTap={{ scale: 1.5 }}
                onClick={() => onStageClick(stage.id)}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Mobile swipe hint */}
      <div className="md:hidden text-center mt-3 text-xs text-secondary opacity-70">
        <span>← Swipe to navigate all stages →</span>
      </div>
    </section>
  );
}
