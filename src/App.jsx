import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingScreen from "@/components/premium/loading-screen";
import Navbar from "@/components/premium/navbar";
import Footer from "@/components/premium/footer";
import FloatingCTA from "@/components/ui/floating-cta";

// Pages
import Home from "@/pages/Home";
import About from "@/pages/About";
import Courses from "@/pages/Courses";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";

export default function App() {
  return (
    <Router>
      <div className="min-h-full flex flex-col antialiased">
        <main className="min-h-screen bg-background text-foreground transition-colors duration-300 relative ">
          {/* Global Preloader */}
          {/* <LoadingScreen /> */}

          {/* Navigation Glass Bar */}
          <Navbar />

          {/* Page routing flow */}
          <div className="pt-20"> {/* Offset to prevent navigation bar overlapping page content */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </div>

          {/* Footer */}
          <Footer />
        </main>
        <FloatingCTA />
      </div>
    </Router>
  );
}
