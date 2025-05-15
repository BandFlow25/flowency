import { useState, useEffect } from "react";

type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl";

const breakpoints: Record<Breakpoint, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536
};

export default function useBreakpoint(query: Breakpoint): boolean {
  const [matches, setMatches] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < breakpoints[query];
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkIfMatches = () => {
      setMatches(window.innerWidth < breakpoints[query]);
    };

    // Check on mount
    checkIfMatches();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMatches);

    // Clean up
    return () => window.removeEventListener('resize', checkIfMatches);
  }, [query]);

  return matches;
}
