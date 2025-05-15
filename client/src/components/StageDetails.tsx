import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Stage } from "@/data/stagesData";
import React from "react";

interface StageDetailsProps {
  stage: Stage;
  onClose: () => void;
}

export default function StageDetails({ stage, onClose }: StageDetailsProps) {
  const detailsRef = useRef<HTMLDivElement>(null);
  
  // Get stage-specific colors
  const getBorderColor = (stageId: number): string => {
    switch (stageId) {
      case 1: return "border-electric";
      case 2: return "border-[hsl(var(--flow-blue-dark))]";
      case 3: return "border-[hsl(var(--flow-blue-light))]";
      case 4: return "border-accent";
      case 5: return "border-destructive";
      default: return "border-primary";
    }
  };
  
  const getColor = (stageId: number): string => {
    switch (stageId) {
      case 1: return "text-electric";
      case 2: return "text-[hsl(var(--flow-blue-dark))]";
      case 3: return "text-[hsl(var(--flow-blue-light))]";
      case 4: return "text-accent";
      case 5: return "text-destructive";
      default: return "text-primary";
    }
  };
  
  const getBackgroundColor = (stageId: number): string => {
    switch (stageId) {
      case 1: return "bg-electric";
      case 2: return "bg-[hsl(var(--flow-blue-dark))]";
      case 3: return "bg-[hsl(var(--flow-blue-light))]";
      case 4: return "bg-accent";
      case 5: return "bg-destructive";
      default: return "bg-primary";
    }
  };
  
  const getSolutionColor = (stageId: number): string => {
    switch (stageId) {
      case 1: return "bg-electric bg-opacity-5";
      case 2: return "bg-[hsl(var(--flow-blue-dark))] bg-opacity-5";
      case 3: return "bg-[hsl(var(--flow-blue-light))] bg-opacity-5";
      case 4: return "bg-accent bg-opacity-5";
      case 5: return "bg-destructive bg-opacity-5";
      default: return "bg-primary bg-opacity-5";
    }
  };
  
  // Scroll to details when opened
  useEffect(() => {
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [stage]);
  
  return (
    <AnimatePresence>
      <motion.div 
        ref={detailsRef}
        className="details-panel bg-white rounded-lg shadow-lg p-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <div className={`${getBackgroundColor(stage.id)} text-white p-2 rounded-full mr-3`}>
              {StageIcons[stage.icon]}
            </div>
            <h3 className="text-2xl font-bold text-primary">{stage.title}</h3>
          </div>
          <button 
            className="text-secondary hover:text-primary focus:outline-none"
            onClick={onClose}
            aria-label="Close details"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-lg font-semibold mb-3 flex items-center">
              <span className={`mr-2 ${getColor(stage.id)}`}>
                <CheckCircle className="h-4 w-4" />
              </span>
              {stage.details.leftColumn.title}
            </h4>
            <ul className="space-y-2">
              {stage.details.leftColumn.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className={`mt-1 mr-2 ${getColor(stage.id)}`}>
                    {React.cloneElement(stage.details.leftColumn.icon, { className: "h-5 w-5" })}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-3 flex items-center">
              <span className="mr-2 text-destructive">
                <AlertCircle className="h-4 w-4" />
              </span>
              {stage.details.rightColumn.title}
            </h4>
            <ul className="space-y-2">
              {stage.details.rightColumn.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-destructive mt-1 mr-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-8">
          <div className="flex items-center mb-4">
            <div className="bg-accent text-white p-1 rounded mr-2 h-6 w-6 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 4L4 12L9 20H15V12H9V4Z" fill="currentColor" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold">Flowency IntentOps Solution</h4>
          </div>
          <div className={`${getSolutionColor(stage.id)} p-4 rounded-lg`}>
            <p className="mb-4">{stage.solution.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stage.solution.features.map((feature, index) => (
                <Card key={index} className={`p-3 rounded border ${getBorderColor(stage.id)}`}>
                  <CardContent className="p-0">
                    <h5 className={`font-medium ${getColor(stage.id)} mb-2`}>{feature.title}</h5>
                    <p className="text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <Button 
            className={`${getBackgroundColor(stage.id)} hover:bg-accent text-white font-medium py-2 px-6 rounded-md transition-colors`}
            asChild
          >
            <a href={stage.cta.url}>
              {stage.cta.text}
            </a>
          </Button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// Import here to avoid circular dependency
const StageIcons: Record<string, React.ReactNode> = {
  compass: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>,
  codeBranch: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="18" r="3"/><path d="M6 15v-1.5A1.5 1.5 0 0 1 7.5 12H18"/><path d="M18 9v10.5"/></svg>,
  network: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="4" cy="9" r="2"/><circle cx="20" cy="9" r="2"/><circle cx="4" cy="15" r="2"/><circle cx="20" cy="15" r="2"/><path d="M10 9a8 8 0 0 0-8 0"/><path d="M22 9a8 8 0 0 0-8 0"/><path d="M10 15a8 8 0 0 1-8 0"/><path d="M22 15a8 8 0 0 1-8 0"/></svg>,
  random: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="6" height="12" x="18" y="2" rx="1"/><rect width="6" height="12" x="18" y="14" rx="1"/><rect width="6" height="9" x="6" y="2" rx="1"/><rect width="6" height="9" x="6" y="15" rx="1"/><path d="M12 14v-4"/><path d="M12 14h6"/><path d="M12 10h6"/></svg>,
  alertTriangle: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
};
