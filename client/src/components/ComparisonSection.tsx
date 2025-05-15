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
      className="bg-primary text-primary-foreground p-6 md:p-8 rounded-lg mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">The IntentOps Difference</h3>
        <p className="text-lg">Without IntentOps, AI adoption accelerates value decay. With IntentOps, value loops close and delivery stabilizes.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white bg-opacity-10 p-4 rounded-lg">
          <h4 className="text-xl font-bold mb-3 text-accent">Without IntentOps</h4>
          <ul className="space-y-2">
            {withoutIntentOps.map((item, index) => (
              <li key={index} className="flex items-start">
                <XCircle className="text-destructive mt-1 mr-2 h-5 w-5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-white bg-opacity-10 p-4 rounded-lg">
          <h4 className="text-xl font-bold mb-3 text-electric">With IntentOps</h4>
          <ul className="space-y-2">
            {withIntentOps.map((item, index) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="text-electric mt-1 mr-2 h-5 w-5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <Button
          className="bg-electric hover:bg-white hover:text-electric text-white font-bold py-3 px-8 rounded-md transition-colors"
          size="lg"
          asChild
        >
          <a href="/solutions">
            Discover Our IntentOps Solutions
          </a>
        </Button>
      </div>
    </motion.section>
  );
}
