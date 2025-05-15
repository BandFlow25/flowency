import { motion } from "framer-motion";
import { stages } from "@/data/stagesData";
import StageCard from "@/components/StageCard";
import useBreakpoint from "@/hooks/useBreakpoint";

interface CognitiveDebtFlowProps {
  onStageClick: (stageId: number) => void;
}

export default function CognitiveDebtFlow({ onStageClick }: CognitiveDebtFlowProps) {
  const isMobile = useBreakpoint("md");
  
  return (
    <section className="mb-12 relative">
      {/* Flow Connection Line */}
      <div className="hidden md:block absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-electric via-accent to-destructive z-0">
        <div className="absolute -top-1 left-1/5 h-3 w-3 rounded-full bg-electric animate-pulse"></div>
        <div className="absolute -top-1 left-2/5 h-3 w-3 rounded-full bg-[hsl(var(--flow-blue-dark))] animate-pulse"></div>
        <div className="absolute -top-1 left-3/5 h-3 w-3 rounded-full bg-[hsl(var(--flow-blue-light))] animate-pulse"></div>
        <div className="absolute -top-1 left-4/5 h-3 w-3 rounded-full bg-accent animate-pulse"></div>
      </div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
      >
        {stages.map((stage, index) => (
          <StageCard
            key={stage.id}
            stage={stage}
            isLastStage={index === stages.length - 1}
            onClick={() => onStageClick(stage.id)}
            isMobile={isMobile}
          />
        ))}
      </motion.div>
      
      {/* Mobile indicator for flow */}
      <div className="block md:hidden mt-4">
        <div className="flex justify-center">
          <div className="flex space-x-2">
            <div className="h-2 w-2 rounded-full bg-electric"></div>
            <div className="h-2 w-2 rounded-full bg-[hsl(var(--flow-blue-dark))]"></div>
            <div className="h-2 w-2 rounded-full bg-[hsl(var(--flow-blue-light))]"></div>
            <div className="h-2 w-2 rounded-full bg-accent"></div>
            <div className="h-2 w-2 rounded-full bg-destructive"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
