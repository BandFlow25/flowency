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
          <div className={`w-3 h-3 rounded-full ${color} mr-2 feedback-loop-pulse`}></div>
          <span className="text-sm md:text-base font-medium">{name}</span>
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
      color: "bg-[hsl(var(--flow-blue-light))]",
      name: "Drift Detection",
      description: "Identifies when systems and teams drift from strategic intent and initiates realignment"
    },
    {
      color: "bg-[hsl(var(--flow-blue-dark))]",
      name: "Governance Overlay",
      description: "Provides frameworks and controls for responsible AI governance and risk management"
    }
  ];

  return (
    <motion.section 
      className="bg-gradient-to-r from-primary to-secondary text-primary-foreground p-4 md:p-6 rounded-lg mb-8 md:mb-12 relative overflow-hidden"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background flow lines */}
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path 
            d="M0,50 C200,20 300,80 500,50 C700,20 800,80 1000,50" 
            stroke="hsl(var(--electric))" 
            strokeWidth="2" 
            fill="none" 
          />
          <path 
            d="M0,70 C150,40 350,90 500,70 C650,50 850,90 1000,70" 
            stroke="hsl(var(--accent))" 
            strokeWidth="2" 
            fill="none" 
            strokeDasharray="5,5" 
          />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="mb-4 md:mb-0">
          <div className="flex items-center">
            <div className="bg-accent text-white p-1 rounded mr-2 h-8 w-8 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 4L4 12L9 20H15V12H9V4Z" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold">IntentOps Governance Layer</h3>
          </div>
          <p className="text-sm md:text-base mt-2 text-gray-200 max-w-md">
            A continuous feedback system that maintains alignment between AI systems and strategic intent
          </p>
        </div>
        <div className="grid grid-cols-2 md:flex md:space-x-6 gap-3 md:gap-0">
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
