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
    <section className="mb-12">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6"
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
    </section>
  );
}
