import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CognitiveDebtFlow from "@/components/CognitiveDebtFlow";
import IntentOpsLayer from "@/components/IntentOpsLayer";
import StageDetails from "@/components/StageDetails";
import ComparisonSection from "@/components/ComparisonSection";
import { stages } from "@/data/stagesData";

export default function Home() {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  const handleStageClick = (stageId: number) => {
    setActiveStage(stageId);
  };

  const handleCloseDetails = () => {
    setActiveStage(null);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 py-8 md:py-12 flex-grow">
        {/* Hero Section */}
        <section className="mb-12 md:mb-16">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              The Compounding Effect of Cognitive Debt
            </h1>
            <p className="text-lg md:text-xl text-secondary max-w-3xl mx-auto">
              Visualizing how AI adoption without proper governance accelerates value decay in enterprise organizations
            </p>
          </div>
        </section>

        {/* IntentOps Layer */}
        <IntentOpsLayer />

        {/* Cognitive Debt Flow */}
        <CognitiveDebtFlow onStageClick={handleStageClick} />

        {/* Stage Details - Only shown when a stage is active */}
        {activeStage !== null && (
          <StageDetails 
            stage={stages.find(s => s.id === activeStage)!} 
            onClose={handleCloseDetails} 
          />
        )}

        {/* Comparison Section */}
        <ComparisonSection />
      </main>

      <Footer />
    </div>
  );
}
