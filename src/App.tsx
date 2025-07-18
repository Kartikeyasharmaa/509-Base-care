import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Index from "./pages/Index";
import UserLogin from "./pages/login/user";
import AdminLogin from "./pages/login/admin";
import WorkerLogin from "./pages/login/worker";
import UserRegister from "./pages/register/UserRegister";
import AboutUs from "./pages/AboutUs"; // ✅ About Us page
import ReportStatus from "./pages/ReportStatus"; // ✅ New Status page

// Dashboards
import AdminDashboard from "./pages/dashboard/AdminDashboard";
import UserDashboard from "./pages/dashboard/UserDashboard";
import WorkerDashboard from "./pages/dashboard/WorkerDashboard";



const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Auth */}
          <Route path="/" element={<Index />} />
          <Route path="/login/user" element={<UserLogin />} />
          <Route path="/login/admin" element={<AdminLogin />} />
          <Route path="/login/worker" element={<WorkerLogin />} />
          <Route path="/register/user" element={<UserRegister />} />

          {/* Dashboards */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/worker/dashboard" element={<WorkerDashboard />} />
          

          {/* ✅ About Us Page */}
          <Route path="/about" element={<AboutUs />} />
            {/* ✅ Report Status Page */}
          <Route path="/status" element={<ReportStatus />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;    