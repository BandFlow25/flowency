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
      case 2: return "border-accent";
      case 3: return "border-warning";
      case 4: 
      case 5: return "border-destructive";
      default: return "border-primary";
    }
  };
  
  const getColor = (stageId: number): string => {
    switch (stageId) {
      case 1: return "text-electric";
      case 2: return "text-accent";
      case 3: return "text-warning";
      case 4: 
      case 5: return "text-destructive";
      default: return "text-primary";
    }
  };
  
  const getBackgroundColor = (stageId: number): string => {
    switch (stageId) {
      case 1: return "bg-electric";
      case 2: return "bg-accent";
      case 3: return "bg-warning";
      case 4: 
      case 5: return "bg-primary";
      default: return "bg-primary";
    }
  };
  
  const getSolutionColor = (stageId: number): string => {
    switch (stageId) {
      case 1: return "bg-primary bg-opacity-5";
      case 2: return "bg-accent bg-opacity-5";
      case 3: return "bg-warning bg-opacity-5";
      case 4: 
      case 5: return "bg-primary bg-opacity-5";
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
          <h3 className="text-2xl font-bold text-primary">{stage.title}</h3>
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
            <h4 className="text-lg font-semibold mb-3">{stage.details.leftColumn.title}</h4>
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
            <h4 className="text-lg font-semibold mb-3">{stage.details.rightColumn.title}</h4>
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
        
        <div className="mt-6">
          <h4 className="text-lg font-semibold mb-3">IntentOps Solution</h4>
          <div className={`${getSolutionColor(stage.id)} p-4 rounded-lg`}>
            <p className="mb-3">{stage.solution.description}</p>
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
            className={`${getBackgroundColor(stage.id)} hover:bg-primary text-white font-medium py-2 px-6 rounded-md transition-colors`}
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
