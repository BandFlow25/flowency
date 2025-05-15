import { 
  Compass, 
  GitGraph, 
  Network, 
  SplitSquareVertical, 
  AlertTriangle 
} from "lucide-react";

// Collection of icons for different stages
export const StageIcons: Record<string, React.ReactNode> = {
  compass: <Compass className="h-6 w-6" />,
  codeBranch: <GitGraph className="h-6 w-6" />,
  network: <Network className="h-6 w-6" />,
  random: <SplitSquareVertical className="h-6 w-6" />,
  alertTriangle: <AlertTriangle className="h-6 w-6" />
};

// SVG Path for the IntentOps feedback loop visualization
export const FeedbackLoopPath = () => (
  <svg
    width="100%"
    height="100"
    viewBox="0 0 1000 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-0 left-0 z-0"
  >
    <path
      d="M50,20 C200,80 400,20 600,80 S800,20 950,80"
      stroke="url(#gradient)"
      strokeWidth="2"
      fill="none"
      strokeDasharray="4,4"
    />
    <defs>
      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#4A5568" />
        <stop offset="25%" stopColor="#00B5D8" />
        <stop offset="50%" stopColor="#ED8936" />
        <stop offset="75%" stopColor="#F6E05E" />
        <stop offset="100%" stopColor="#E53E3E" />
      </linearGradient>
    </defs>
  </svg>
);
