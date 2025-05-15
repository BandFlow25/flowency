import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import useBreakpoint from "@/hooks/useBreakpoint";

interface FeedbackLoopProps {
  color: string;
  name: string;
  description: string;
  index: number;
}

const FeedbackLoop = ({ color, name, description, index }: FeedbackLoopProps) => {
  const isMobile = useBreakpoint("md");
  
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div 
            className="flex items-center mt-2 md:mt-0 cursor-help"
            initial={{ opacity: 0, y: isMobile ? 5 : -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <div className={`w-3 h-3 rounded-full ${color} mr-2 feedback-loop-pulse shadow-sm`}></div>
            </div>
            <span className="text-sm md:text-base font-medium">{name}</span>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent side={isMobile ? "bottom" : "top"} className="max-w-xs">
          <p>{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default function IntentOpsLayer() {
  const isMobile = useBreakpoint("md");
  
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

      {/* Mobile touch indicator */}
      {isMobile && (
        <div className="absolute top-2 right-2 z-20 text-xs text-white bg-accent bg-opacity-70 px-2 py-1 rounded-full">
          <span>Tap items for info</span>
        </div>
      )}
      
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
        <motion.div 
          className="mb-6 md:mb-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center">
            <div className="bg-accent text-white p-1 rounded mr-2 h-8 w-8 flex items-center justify-center shadow-[0_0_15px_rgba(255,119,0,0.3)]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 4L4 12L9 20H15V12H9V4Z" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold">
              <span className="text-electric">Intent</span>
              <span className="text-accent">Ops</span> Governance Layer
            </h3>
          </div>
          <p className="text-sm md:text-base mt-2 text-gray-200 max-w-md border-l-4 border-accent pl-3">
            A continuous feedback system that maintains alignment between AI systems and strategic intent
          </p>
        </motion.div>
        
        {/* Desktop layout */}
        <div className="hidden md:flex md:space-x-6">
          {loops.map((loop, index) => (
            <FeedbackLoop
              key={index}
              color={loop.color}
              name={loop.name}
              description={loop.description}
              index={index}
            />
          ))}
        </div>
        
        {/* Mobile layout with enhanced visual separation */}
        <div className="grid grid-cols-2 gap-3 md:hidden">
          {loops.map((loop, index) => (
            <div 
              key={index} 
              className={`
                bg-white bg-opacity-10 p-2 rounded-lg 
                ${index === 0 || index === 2 ? 'border-l-2 border-electric' : 'border-l-2 border-accent'}
              `}
            >
              <FeedbackLoop
                color={loop.color}
                name={loop.name}
                description={loop.description}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
