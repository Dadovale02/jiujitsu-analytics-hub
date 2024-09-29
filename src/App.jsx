import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { navItems } from "./nav-items";
import Athletes from "./pages/Athletes";
import IBJJFWorld from "./pages/IBJJFWorld";
import ADCCWorld from "./pages/ADCCWorld";
import WNO from "./pages/WNO";
import AthleteProfile from "./components/AthleteProfile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          {navItems.map(({ to, page }) => (
            <Route key={to} path={to} element={page} />
          ))}
          <Route path="/athletes" element={<Athletes />} />
          <Route path="/athletes/:id" element={<AthleteProfile />} />
          <Route path="/ibjjf-world" element={<IBJJFWorld />} />
          <Route path="/adcc-world" element={<ADCCWorld />} />
          <Route path="/wno" element={<WNO />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;