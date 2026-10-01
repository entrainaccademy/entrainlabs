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

export default function App() {
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
