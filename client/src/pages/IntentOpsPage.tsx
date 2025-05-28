import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import CognitiveDebtFlow from "@/components/CognitiveDebtFlow";
import IntentOpsLayer from "@/components/IntentOpsLayer";
import StageDetails from "@/components/StageDetails";
import ComparisonSection from "@/components/ComparisonSection";
import { stages } from "@/data/stagesData";

export default function IntentOpsPage() {
  const [selectedStage, setSelectedStage] = useState<number | null>(null);

  const handleStageClick = (stageId: number) => {
    setSelectedStage(stageId);
  };

  const handleCloseDetails = () => {
    setSelectedStage(null);
  };

  const selectedStageData = selectedStage ? stages.find(stage => stage.id === selectedStage) : null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link 
                href="/"
                className="flex items-center text-gray-600 hover:text-accent transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Flowency
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <img 
                src="https://cdn.prod.website-files.com/668bbc8f0f25bb8294a73f2f/6695430306a42b90cd8bf9be_Flowency-logo-meso.svg" 
                alt="Flowency"
                className="h-8 w-auto"
              />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-electric font-bold text-lg">Intent</span>
              <span className="text-accent font-bold text-lg">Ops</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <header className="bg-gradient-to-br from-primary via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              <span className="text-electric">"AI adoption is consensus.</span><br/>
              <span className="text-accent">Intent alignment is competitive advantage."</span>
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-200 max-w-4xl mx-auto">
              IntentOps is not another AI tool or framework. It is a <strong className="text-white">strategic control layer</strong>, 
              an adaptive system for aligning AI-driven activity with human intent, value delivery, 
              and organisational governance in complex enterprises.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* IntentOps Governance Layer */}
        <IntentOpsLayer />
        
        {/* Cognitive Debt Flow */}
        <CognitiveDebtFlow onStageClick={handleStageClick} />
        
        {/* Stage Details */}
        {selectedStageData && (
          <StageDetails 
            stage={selectedStageData} 
            onClose={handleCloseDetails}
          />
        )}
        
        {/* Comparison Section */}
        <ComparisonSection />
        
        {/* Call to Action */}
        <section className="mt-16 bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to implement <span className="text-electric">Intent</span><span className="text-accent">Ops</span>?
          </h2>
          <p className="text-xl text-gray-200 mb-6 max-w-3xl mx-auto">
            Don't let cognitive debt derail your AI adoption. Let Flowency help you implement 
            governance systems that maintain strategic alignment and prevent delivery collapse.
          </p>
          <a 
            href="mailto:hello@flowency.co.uk?subject=IntentOps Inquiry"
            className="inline-block bg-accent hover:bg-[hsl(16,100%,45%)] text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors shadow-lg"
          >
            Get Started with IntentOps
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <img 
              src="https://cdn.prod.website-files.com/668bbc8f0f25bb8294a73f2f/6695430306a42b90cd8bf9be_Flowency-logo-meso.svg" 
              alt="Flowency"
              className="h-6 w-auto"
            />
            <span className="text-gray-400">×</span>
            <span className="text-electric font-medium">Intent</span>
            <span className="text-accent font-medium">Ops</span>
          </div>
          <p className="text-gray-400">
            Part of the Flowency delivery optimisation suite
          </p>
        </div>
      </footer>
    </div>
  );
}