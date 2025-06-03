import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { queryClient } from "./lib/queryClient";
import { Route, Switch } from "wouter";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import LandingPage from "@/pages/LandingPage";
import IntentOpsPage from "@/pages/IntentOpsPage";
import IntentOpsContext from "@/pages/IntentOpsContext";
import ActuatePage from "@/pages/ActuatePage";
import TermsOfUsePage from "@/pages/TermsOfUsePage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import CookiePolicyPage from "@/pages/CookiePolicyPage";
import NotFound from "@/pages/not-found";

function Router() {
  // Use the hook to scroll to top on route changes
  useScrollToTop();
  
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/intentops" component={IntentOpsPage} />
      <Route path="/intentops-context" component={IntentOpsContext} />
      <Route path="/actuate" component={ActuatePage} />
      <Route path="/terms-of-use" component={TermsOfUsePage} />
      <Route path="/privacy-policy" component={PrivacyPolicyPage} />
      <Route path="/cookie-policy" component={CookiePolicyPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
