import { CheckCircle, Router, BarChart3, Activity, Radar } from "lucide-react";
import React from "react";

export interface StageFeature {
  title: string;
  description: string;
}

export interface StageDetailsColumn {
  title: string;
  icon: React.ReactElement;
  items: string[];
}

export interface StageCTA {
  text: string;
  url: string;
}

export interface StageSolution {
  description: string;
  features: StageFeature[];
}

export interface StageDetails {
  leftColumn: StageDetailsColumn;
  rightColumn: StageDetailsColumn;
}

export interface StageFeedback {
  title: string;
  description: string;
}

export interface Stage {
  id: number;
  title: string;
  icon: string;
  description: string;
  feedback: StageFeedback;
  details: StageDetails;
  solution: StageSolution;
  cta: StageCTA;
}

export const stages: Stage[] = [
  {
    id: 1,
    title: "Declared AI Strategy",
    icon: "compass",
    description: "Organization believes it has alignment and clarity on AI initiatives",
    feedback: {
      title: "Strategic Intent Monitoring",
      description: "Monitoring alignment with strategic objectives"
    },
    details: {
      leftColumn: {
        title: "Key Characteristics",
        icon: React.createElement(CheckCircle),
        items: [
          "Clear organizational vision for AI adoption",
          "Alignment between technical and business goals",
          "Defined success metrics and expected outcomes",
          "Leadership buy-in and resource commitment"
        ]
      },
      rightColumn: {
        title: "Risks Without IntentOps",
        icon: React.createElement(Activity),
        items: [
          "Misinterpretation of strategic goals across teams",
          "Unclear prioritization leading to scattered efforts",
          "Failure to adapt strategy as technology evolves",
          "Lost connection between strategy and execution"
        ]
      }
    },
    solution: {
      description: "The IntentOps framework establishes a continuous connection between declared strategy and actual implementation:",
      features: [
        {
          title: "Strategy Codification",
          description: "Converts high-level business objectives into clear, measurable parameters"
        },
        {
          title: "Intent Broadcasting",
          description: "Ensures all teams and AI systems have access to current strategic intent"
        }
      ]
    },
    cta: {
      text: "Learn More About IntentOps for Strategic Alignment",
      url: "/solutions/strategic-alignment"
    }
  },
  {
    id: 2,
    title: "Tool & Agent Deployment",
    icon: "codeBranch",
    description: "Copilots, autonomous agents, RAG/CAG systems deployed in silos",
    feedback: {
      title: "Value Feedback Loop",
      description: "Ensuring value creation is measured and optimized"
    },
    details: {
      leftColumn: {
        title: "Deployment Patterns",
        icon: React.createElement(Router),
        items: [
          "Copilots and coding assistants",
          "RAG/CAG knowledge systems",
          "Autonomous agents and task automation",
          "Cloud-based AI integrations"
        ]
      },
      rightColumn: {
        title: "Deployment Challenges",
        icon: React.createElement(Activity),
        items: [
          "Siloed implementation without cross-team visibility",
          "Inconsistent governance and security standards",
          "Redundant systems with overlapping capabilities",
          "Disconnection from strategic objectives"
        ]
      }
    },
    solution: {
      description: "IntentOps provides the necessary framework to ensure deployment aligns with business value:",
      features: [
        {
          title: "Value Stream Mapping",
          description: "Tracks how AI deployments connect to specific business outcomes"
        },
        {
          title: "Adoption Coordination",
          description: "Ensures tools are deployed with appropriate cross-functional awareness"
        }
      ]
    },
    cta: {
      text: "Learn More About IntentOps for Deployment Governance",
      url: "/solutions/deployment-governance"
    }
  },
  {
    id: 3,
    title: "Cognitive Debt Accrual",
    icon: "network",
    description: "Decisions delayed, intent diluted, responsibility fragmented",
    feedback: {
      title: "Drift Detection",
      description: "Identifying when systems drift from strategic intent"
    },
    details: {
      leftColumn: {
        title: "Manifestation Signs",
        icon: React.createElement(BarChart3),
        items: [
          "Decision-making processes slow significantly",
          "Complex dependencies between AI systems",
          "Unclear responsibility for outcomes",
          "Diminishing returns on AI investments"
        ]
      },
      rightColumn: {
        title: "Impact on Organization",
        icon: React.createElement(Activity),
        items: [
          "Increased cognitive load on employees",
          "Strategic intent becomes diluted or lost",
          "Rising coordination costs across teams",
          "Knowledge fragmentation and redundancy"
        ]
      }
    },
    solution: {
      description: "IntentOps provides early detection and mitigation of cognitive debt:",
      features: [
        {
          title: "Cognitive Load Monitoring",
          description: "Tracks decision complexity and bottlenecks across the organization"
        },
        {
          title: "Intent Reinforcement",
          description: "Continuously reconnects tactical decisions to strategic objectives"
        }
      ]
    },
    cta: {
      text: "Learn More About Cognitive Debt Management",
      url: "/solutions/cognitive-debt"
    }
  },
  {
    id: 4,
    title: "Outcome Misalignment",
    icon: "random",
    description: "Teams/agents acting without alignment; poor visibility; value lost",
    feedback: {
      title: "Governance Intervention",
      description: "Providing frameworks for responsible AI governance"
    },
    details: {
      leftColumn: {
        title: "System Behaviors",
        icon: React.createElement(Radar),
        items: [
          "AI systems pursuing conflicting objectives",
          "Poor visibility into automated decision-making",
          "Teams operating with competing incentives",
          "Broken feedback loops between systems"
        ]
      },
      rightColumn: {
        title: "Business Consequences",
        icon: React.createElement(Activity),
        items: [
          "Lost value through misaligned activities",
          "Deteriorating customer experience",
          "Compliance and governance risks",
          "System instability and unpredictability"
        ]
      }
    },
    solution: {
      description: "IntentOps provides the governance needed to realign systems with business objectives:",
      features: [
        {
          title: "Alignment Auditing",
          description: "Regular assessment of how AI systems support strategic objectives"
        },
        {
          title: "Intent Reconciliation",
          description: "Process to realign divergent systems and team activities"
        }
      ]
    },
    cta: {
      text: "Learn More About Outcome Alignment Solutions",
      url: "/solutions/outcome-alignment"
    }
  },
  {
    id: 5,
    title: "DeliveryJolt",
    icon: "alertTriangle",
    description: "Delivery slows, rework rises, board confidence drops",
    feedback: {
      title: "Strategic Reset Required",
      description: "Reset core intent and priorities across the organization"
    },
    details: {
      leftColumn: {
        title: "Crisis Indicators",
        icon: React.createElement(Activity),
        items: [
          "Dramatic slowdown in delivery velocity",
          "Significant increase in rework and corrections",
          "Declining board and executive confidence",
          "Critical system failures or risk events"
        ]
      },
      rightColumn: {
        title: "Organizational Impact",
        icon: React.createElement(Activity),
        items: [
          "Budget overruns and missed delivery dates",
          "Loss of competitive advantage in market",
          "Employee burnout and retention issues",
          "Strategic initiatives abandoned or reset"
        ]
      }
    },
    solution: {
      description: "IntentOps provides a framework for recovery and system stabilization:",
      features: [
        {
          title: "Strategic Reset Protocol",
          description: "Reestablishes core intent and priorities across the organization"
        },
        {
          title: "System Stabilization",
          description: "Implements governance controls to prevent further decay"
        }
      ]
    },
    cta: {
      text: "Learn About IntentOps Recovery Solutions",
      url: "/solutions/recovery"
    }
  }
];
