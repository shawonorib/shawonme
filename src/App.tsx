
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index"; // Home page
import Services from "./pages/Services"; // Skills page
// import Blog from "./pages/Blog"; // Blog listing page
// import BlogDetail from "./pages/BlogDetail"; // Blog detail page
import References from "./pages/References"; // Projects page
import Booking from "./pages/Booking"; // Contact page
import Resume from "./pages/Resume"; // Resume page
import PrivacyPolicy from "./pages/PrivacyPolicy"; // Privacy Policy page
import TermsOfService from "./pages/TermsOfService"; // Terms of Service page
import NotFound from "./pages/NotFound"; // 404 Not Found page
import Navbar from "./components/Navbar"; // Navbar component
import Footer from "./components/Footer"; // Footer component
import ScrollToTop from "./components/ScrollToTop"; // ScrollToTop component

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/skills" element={<Services />} />
            {/* <Route path="/blog" element={<Blog />} /> */}
            {/* <Route path="/blog/:id" element={<BlogDetail />} /> */}
            <Route path="/projects" element={<References />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Booking />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
