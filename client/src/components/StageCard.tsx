import { motion } from "framer-motion";
import { Stage } from "@/data/stagesData";
import { StageIcons } from "@/components/icons";

interface StageCardProps {
  stage: Stage;
  isLastStage: boolean;
  onClick: () => void;
  isMobile: boolean;
}

export default function StageCard({ stage, isLastStage, onClick, isMobile }: StageCardProps) {
  const { id, title, icon, description, feedback } = stage;
  
  // Determine appropriate icon background color based on stage
  const getIconBgColor = (stageId: number): string => {
    switch (stageId) {
      case 1:
        return "bg-primary";
      case 2:
        return "bg-[hsl(var(--flow-blue-dark))]";
      case 3:
        return "bg-[hsl(var(--flow-blue-light))]";
      case 4:
        return "bg-accent";
      case 5:
        return "bg-destructive";
      default:
        return "bg-primary";
    }
  };
  
  // Determine feedback loop color and style
  const getFeedbackStyle = (stageId: number): string => {
    switch (stageId) {
      case 1:
        return "bg-electric bg-opacity-10";
      case 2:
        return "bg-[hsl(var(--flow-blue-dark))] bg-opacity-10";
      case 3:
        return "bg-[hsl(var(--flow-blue-light))] bg-opacity-10";
      case 4:
        return "bg-accent bg-opacity-10";
      case 5:
        return "bg-destructive bg-opacity-10";
      default:
        return "bg-primary bg-opacity-10";
    }
  };
  
  const getFeedbackTextColor = (stageId: number): string => {
    switch (stageId) {
      case 1:
        return "text-electric";
      case 2:
        return "text-[hsl(var(--flow-blue-dark))]";
      case 3:
        return "text-[hsl(var(--flow-blue-light))]";
      case 4:
        return "text-accent";
      case 5:
        return "text-destructive";
      default:
        return "text-primary";
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: id * 0.1 }}
      className={`stage-card bg-white rounded-lg shadow-md p-4 md:p-6 cursor-pointer relative ${!isLastStage && !isMobile ? 'flow-arrow' : ''}`}
      onClick={onClick}
      whileHover={{ y: -5 }}
      whileTap={isMobile ? { scale: 0.98 } : {}}
    >
      {/* Mobile indicator for scroll position at the top of card */}
      {isMobile && (
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {Array.from({ length: 5 }).map((_, idx) => (
            <div 
              key={idx} 
              className={`h-1.5 w-1.5 rounded-full ${idx + 1 === id ? 'bg-accent' : 'bg-gray-300'}`}
            />
          ))}
        </div>
      )}
      
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-electric text-electric-foreground text-xs font-bold py-1 px-2 rounded shadow-sm">
        Stage {id}
      </div>
      
      <div className="text-center mb-4">
        <div className={`inline-block ${getIconBgColor(id)} text-white p-3 rounded-full mb-3 shadow-md`}>
          {StageIcons[icon]}
        </div>
        <h4 className="text-lg md:text-xl font-bold text-primary">{title}</h4>
      </div>
      
      <p className="text-sm text-secondary mb-3">{description}</p>
      
      <div className="feedback-loop mt-4">
        <div className={`flex items-center justify-center text-xs ${getFeedbackStyle(id)} py-1 px-2 rounded`}>
          <span className={`${getFeedbackTextColor(id)} font-medium`}>{feedback.title}</span>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <button 
          className={`
            flex items-center justify-center mx-auto
            text-white bg-accent 
            transition-all duration-300 ease-in-out focus:outline-none 
            px-4 py-1.5 text-sm rounded-md
            shadow-md hover:shadow-lg hover:bg-[hsl(16,100%,45%)]
          `}
          aria-label={`View details about ${title}`}
        >
          <span>View Details</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="ml-1.5"
          >
            <path d="m9 18 6-6-6-6"/>
          </svg>
        </button>
      </div>
      
      {/* Mobile design enhancement - animated gradient border at bottom of card */}
      {isMobile && (
        <div className="absolute bottom-0 left-0 right-0 h-1 overflow-hidden rounded-b-lg">
          <div 
            className={`
              h-full w-full animate-pulse
              ${id === 1 ? "bg-electric" : 
                id === 2 ? "bg-[hsl(var(--flow-blue-dark))]" : 
                id === 3 ? "bg-[hsl(var(--flow-blue-light))]" : 
                id === 4 ? "bg-accent" : 
                "bg-destructive"}
            `}
          />
        </div>
      )}
    </motion.div>
  );
}
