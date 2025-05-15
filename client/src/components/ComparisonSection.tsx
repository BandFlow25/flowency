import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ComparisonSection() {
  const withoutIntentOps = [
    "Siloed AI implementations creating confusion",
    "Strategy and execution rapidly diverging",
    "Mounting cognitive load on humans in the loop",
    "Value erosion and delivery slowdown"
  ];
  
  const withIntentOps = [
    "Continuous alignment between AI systems and business goals",
    "Early detection of drift and cognitive debt",
    "Reduced decision complexity and improved governance",
    "Sustained value creation and delivery momentum"
  ];
  
  return (
    <motion.section 
      className="bg-gradient-to-r from-primary to-secondary text-primary-foreground p-6 md:p-8 rounded-lg mb-8 relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {/* Background flow pattern */}
      <div className="absolute top-0 left-0 right-0 bottom-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 1000 300" preserveAspectRatio="none">
          <path 
            d="M0,100 C200,50 300,150 500,100 C700,50 800,150 1000,100" 
            stroke="hsl(var(--accent))" 
            strokeWidth="3" 
            fill="none" 
          />
          <path 
            d="M0,200 C150,150 350,250 500,200 C650,150 850,250 1000,200" 
            stroke="hsl(var(--electric))" 
            strokeWidth="3" 
            fill="none" 
            strokeDasharray="5,5" 
          />
        </svg>
      </div>
      
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-accent text-white p-1 rounded mr-2 h-8 w-8 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 4L4 12L9 20H15V12H9V4Z" fill="currentColor" />
              </svg>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold">The Flowency IntentOps Difference</h3>
          </div>
          <p className="text-lg max-w-3xl mx-auto">
            Without IntentOps, AI adoption accelerates value decay. With IntentOps, value loops close and delivery stabilizes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg border border-red-500 border-opacity-30">
            <h4 className="text-xl font-bold mb-4 text-destructive flex items-center">
              <div className="bg-destructive text-white p-1 rounded mr-2 h-6 w-6 flex items-center justify-center">
                <XCircle className="h-4 w-4" />
              </div>
              Without IntentOps
            </h4>
            <ul className="space-y-3">
              {withoutIntentOps.map((item, index) => (
                <li key={index} className="flex items-start">
                  <XCircle className="text-destructive mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white bg-opacity-10 p-6 rounded-lg border border-accent border-opacity-30">
            <h4 className="text-xl font-bold mb-4 text-accent flex items-center">
              <div className="bg-accent text-white p-1 rounded mr-2 h-6 w-6 flex items-center justify-center">
                <CheckCircle className="h-4 w-4" />
              </div>
              With IntentOps
            </h4>
            <ul className="space-y-3">
              {withIntentOps.map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-accent mt-1 mr-3 h-5 w-5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <Button
            className="bg-accent hover:bg-electric text-white font-bold py-3 px-8 rounded-md transition-colors"
            size="lg"
            asChild
          >
            <a href="/solutions">
              Discover Our IntentOps Solutions
            </a>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
