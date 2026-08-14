import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import LoadingScreen from "@/components/premium/loading-screen";
import Navbar from "@/components/premium/navbar";
import Footer from "@/components/premium/footer";
import FloatingCTA from "@/components/ui/floating-cta";

// Main Academy Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Courses, { CourseDetails } from "@/pages/Courses";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";

// SaaS Platform System
import { SaaSAuthProvider } from "@/saas/context/SaaSAuthContext";
import ProtectedRoute from "@/saas/components/ProtectedRoute";
import SaaSLandingPage from "@/saas/pages/SaaSLandingPage";
import SaaSRegisterPage from "@/saas/pages/SaaSRegisterPage";
import SaaSLoginPage from "@/saas/pages/SaaSLoginPage";
import SaaSForgotPasswordPage from "@/saas/pages/SaaSForgotPasswordPage";
import SaaSResetPasswordPage from "@/saas/pages/SaaSResetPasswordPage";

// SaaS Dashboard Pages
import SaaSDashboardLayout from "@/saas/pages/dashboard/SaaSDashboardLayout";
import SaaSDashboardOverview from "@/saas/pages/dashboard/SaaSDashboardOverview";
import SaaSCompanyProfile from "@/saas/pages/dashboard/SaaSCompanyProfile";
import SaaSSecurity from "@/saas/pages/dashboard/SaaSSecurity";
import SaaSSettings from "@/saas/pages/dashboard/SaaSSettings";

function AppContent() {
  const location = useLocation();
  const isSaaSRoute = location.pathname.startsWith("/saas");

  if (isSaaSRoute) {
    return (
      <Routes>
        <Route path="/saas" element={<SaaSLandingPage />} />
        <Route path="/saas/register" element={<SaaSRegisterPage />} />
        <Route path="/saas/login" element={<SaaSLoginPage />} />
        <Route path="/saas/forgot-password" element={<SaaSForgotPasswordPage />} />
        <Route path="/saas/reset-password" element={<SaaSResetPasswordPage />} />

        {/* Protected SaaS Dashboard */}
        <Route
          path="/saas/dashboard"
          element={
            <ProtectedRoute>
              <SaaSDashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<SaaSDashboardOverview />} />
          <Route path="profile" element={<SaaSCompanyProfile />} />
          <Route path="security" element={<SaaSSecurity />} />
          <Route path="settings" element={<SaaSSettings />} />
        </Route>
      </Routes>
    );
  }

  return (
    <div className="min-h-full flex flex-col antialiased">
      <main className="min-h-screen bg-background text-foreground transition-colors duration-300 relative">
        <Navbar />

        <div className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/coursedetails" element={<CourseDetails />} />
          </Routes>
        </div>

        <Footer />
      </main>
      <FloatingCTA />
    </div>
  );
}

export default function App() {
  return (
    <SaaSAuthProvider>
      <Router>
        <AppContent />
      </Router>
    </SaaSAuthProvider>
  );
}
