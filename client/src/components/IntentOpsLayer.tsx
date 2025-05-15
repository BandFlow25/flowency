import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";

interface FeedbackLoopProps {
  color: string;
  name: string;
  description: string;
}

const FeedbackLoop = ({ color, name, description }: FeedbackLoopProps) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="flex items-center mt-2 md:mt-0 cursor-help">
          <div className={`w-3 h-3 rounded-full ${color} mr-2`}></div>
          <span>{name}</span>
        </div>
      </TooltipTrigger>
      <TooltipContent side="top" className="max-w-xs">
        <p>{description}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export default function IntentOpsLayer() {
  const loops = [
    {
      color: "bg-electric",
      name: "Signal Monitoring",
      description: "Continuously monitors signals across systems to maintain alignment with strategic intent"
    },
    {
      color: "bg-accent",
      name: "Value Feedback",
      description: "Ensures value creation is measured and optimized throughout the AI adoption process"
    },
    {
      color: "bg-warning",
      name: "Drift Detection",
      description: "Identifies when systems and teams drift from strategic intent and initiates realignment"
    },
    {
      color: "bg-destructive",
      name: "Governance Overlay",
      description: "Provides frameworks and controls for responsible AI governance and risk management"
    }
  ];

  return (
    <motion.section 
      className="bg-primary text-primary-foreground p-4 md:p-6 rounded-lg mb-8 md:mb-12"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between flex-wrap">
        <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-0">IntentOps Governance Layer</h3>
        <div className="flex space-x-4 md:space-x-6 flex-wrap">
          {loops.map((loop, index) => (
            <FeedbackLoop
              key={index}
              color={loop.color}
              name={loop.name}
              description={loop.description}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
