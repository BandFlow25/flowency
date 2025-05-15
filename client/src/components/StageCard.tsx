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
      case 2:
        return "bg-primary";
      case 3:
      case 4:
        return "bg-warning";
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
        return "bg-accent bg-opacity-10";
      case 3:
        return "bg-warning bg-opacity-10";
      case 4:
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
        return "text-accent";
      case 3:
        return "text-warning";
      case 4:
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
      className={`stage-card bg-white rounded-lg shadow-md p-4 md:p-6 cursor-pointer relative ${!isLastStage ? 'flow-arrow' : ''}`}
      onClick={onClick}
      whileHover={{ y: -5 }}
    >
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-electric text-electric-foreground text-xs font-bold py-1 px-2 rounded">
        Stage {id}
      </div>
      
      <div className="text-center mb-4">
        <div className={`inline-block ${getIconBgColor(id)} text-white p-3 rounded-full mb-3`}>
          {StageIcons[icon]}
        </div>
        <h4 className="text-lg md:text-xl font-bold">{title}</h4>
      </div>
      
      <p className="text-sm text-secondary mb-3">{description}</p>
      
      <div className="feedback-loop mt-4">
        <div className={`flex items-center justify-center text-xs ${getFeedbackStyle(id)} py-1 px-2 rounded`}>
          <span className={`${getFeedbackTextColor(id)} font-medium`}>{feedback.title}</span>
        </div>
      </div>
      
      <div className="mt-4 text-center">
        <button 
          className="text-electric text-sm font-medium hover:underline focus:outline-none"
          aria-label={`View details about ${title}`}
        >
          View Details
        </button>
      </div>
    </motion.div>
  );
}
