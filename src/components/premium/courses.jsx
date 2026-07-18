"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import {
  GraduationCap,
  Building,
  Laptop,
  Check,
  ArrowRight,
  FileText,
  Award,
  ChevronRight,
  Star,
  CheckCircle2
} from "lucide-react";
import { EnrollmentFormAdvanced } from "@/components/ui/enrollment-form-advanced";
import { useNavigate } from "react-router-dom";
import TrustedBy from "@/components/premium/trusted-by";

export default function Courses() {
  const navigate = useNavigate();
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  // Smooth scroll handler for anchor links
  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // High performance mouse tracking for glass reflection/spotlight without re-renders
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleEnrollClick = (planName) => {
    setSelectedPlan(planName);
    setIsEnrollOpen(true);
  };

  // Pricing Plans Data
  const pricingPlans = [
    {
      id: "starter",
      name: "Starter",
      badge: "Best for Beginners",
      duration: "4 Months",
      perfectFor: "Students & Beginners",
      description: "Get started with the fundamentals of digital marketing and master core execution skills.",
      buttonText: "Enroll Now",
      features: [
        "Live Classes",
        "Recorded Classes",
        "Basic Assignments",
        "Downloadable Notes",
        "Community Support",
        "Certificate"
      ],
      popular: false
    },
    {
      id: "career-track",
      name: "Career Track",
      badge: " Most Popular",
      duration: "4 Months",
      perfectFor: "Students & Job Seekers",
      description: "Build an agency-ready portfolio, learn from client briefs, and master modern AI marketing automation.",
      buttonText: "Start Career",
      features: [
        "Live Classes",
        "Recorded Classes",
        "Virtual Workplace",
        "Weekly Review",
        "AI Tools Training",
        "Prompt Engineering",
        "Practical Assignments",
        "Real Client Projects",
        "Career Guidance",
        "Certificate"
      ],
      popular: true
    },
    {
      id: "pro-master",
      name: "Pro Master",
      badge: " Premium",
      duration: "4 Months",
      perfectFor: "Professionals & Freelancers",
      description: "Get 1-on-1 mentorship, advanced growth strategies, personal branding, and lifetime premium support.",
      buttonText: "Become a Pro",
      features: [
        "Live Classes",
        "Recorded Classes",
        "Virtual Workplace",
        "Weekly Review",
        "AI Tools",
        "Prompt Engineering",
        "Practical Assignments",
        "Real Projects",
        "Individual Mentor",
        "Lifetime Support",
        "Career Assistance",
        "Certificate"
      ],
      popular: false
    }
  ];

 

  return (
    <section
      id="courses"
      className="relative py-4  md:py-6 bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white overflow-hidden font-sans selection:bg-[#0A756A]/20 selection:text-[#0A756A]"
    >
      {/* Background System */}
      {/* Dot Grid Pattern */}
      <div className="absolute inset-0    border-red-600 bg-[linear-gradient(to_right,#80808009_1px,transparent_1px),linear-gradient(to_bottom,#80808009_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Noise Texture */}
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-[0.015] dark:opacity-[0.02]" />

      {/* Mesh Gradient / Glowing Blurs */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#0A756A]/5 dark:bg-[#0A756A]/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#0A756A]/4 dark:bg-[#0A756A]/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[20%] w-[550px] h-[550px] rounded-full bg-[#0A756A]/5 dark:bg-[#0A756A]/8 blur-[140px] pointer-events-none" />

      {/* Soft Top Radial Lighting Overlay */}
      <div className="absolute top-0 left-1/2  bg-gray-000 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[#0A756A]/20 dark:via-[#0A756A]/30 to-transparent pointer-events-none" />
      
      <div className="relative bg-gray-000 mx-auto max-w-7xl px-6 md:px-8 z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center  text-center max-w-3xl mx-auto mb-20 md:mb-28">
        

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-regular  font-clash tracking-tight text-zinc-900 bg-red-000 dark:text-white mt-1 leading-[1.1] mb-6"
          >
           
            <span className=" font-normal font-dm  bg-gradient-to-r from-zinc-800 via-zinc-900 to-[#0A756A] dark:from-white dark:via-zinc-200 dark:to-[#0A756A] bg-clip-text text-transparent">
              Digital Marketing Program
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-[#0A756A] dark:text-zinc-400 text-base  md:text-[14px]  leading-relaxed font-outfit font-thin max-w-2xl"
          >
            Learn Digital Marketing through live training, real projects, AI tools, and expert career support.
          </motion.p>
        </div>

        {/* DISPLAY TWO MAIN TRAINING MODES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  -mt-12 mb-28 md:mb-36">
          
          {/* CARD 1 - Offline Classroom */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, rotate: -0.2 }}
            onMouseMove={handleMouseMove}
            className="group relative rounded-[32px] p-[1px] bg-gradient-to-b from-zinc-200/80 via-zinc-200/20 to-transparent dark:from-white/10 dark:via-zinc-800/50 dark:to-transparent overflow-hidden shadow-sm dark:shadow-none"
          >
            {/* Glass spotlight reflection overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: "radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(10, 117, 106, 0.06), transparent 80%)"
              }}
            />
            
            <div className="relative h-full bg-white/80 dark:bg-zinc-900/40 backdrop-blur-2xl rounded-[31px] p-8 md:p-12 flex flex-col justify-between overflow-hidden">
              {/* Dynamic light streak */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0A756A]/5 dark:bg-[#0A756A]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#0A756A]/10 dark:group-hover:bg-[#0A756A]/20 transition-colors duration-500" />
              
              <div>
                <div className="flex items-start justify-between mb-8">
                  {/* Floating Icon Wrapper */}
                  {/* <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="w-14 h-14 rounded-2xl bg-[#0A756A]/10 dark:bg-[#0A756A]/15 border border-[#0A756A]/25 dark:border-[#0A756A]/30 flex items-center justify-center text-[#0A756A]"
                  >
                    <Building className="w-7 h-7" />
                  </motion.div> */}
                 
                </div>

                <h3 className="text-2xl md:text-3xl tracking-tight font-outfit font-semibold text-zinc-900 dark:text-white mb-4">
                  Offline Classroom
                </h3>

                <p className="text-zinc-650 dark:text-zinc-400  text-sm md:text-[15px] font-outfit font-extralight leading-relaxed mb-8 max-w-md ">
                  Experience classroom-based learning with direct interaction, practical sessions, expert mentoring, and collaborative learning.
                </p>
 
                {/* Features List */}
                <div className="grid  grid-cols-2 gap-4 mb-10 pb-8 border-b border-zinc-200/65 dark:border-white/5">
                  {[
                    "Classroom Training",
                    "Live Instructor",
                    "Practical Sessions",
                    "Weekly Reviews",
                    "Networking",
                    "Certificate"
                  ].map((feature, i) => (
                    <div key={i} className="flex  items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#0A756A]/10 border border-[#0A756A]/20 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-[#0A756A]" />
                      </div>
                      <span className="text-xs md:text-[13px] text-zinc-700 dark:text-zinc-300 font-satoshi">{feature}</span>
                    </div> 
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleEnrollClick("Offline Classroom")}
                className="relative w-full h-12 rounded-xl bg-[#0A756A] text-white font-light font-outfit text-sm transition-all duration-300 hover:bg-[#129A8C] hover:shadow-[0_0_30px_rgba(10,117,106,0.25)] dark:bg-white dark:text-zinc-950 dark:hover:bg-[#0A756A] dark:hover:text-white flex items-center justify-center gap-2 group/btn cursor-pointer"
              >
                <span>Join Offline Batch</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* CARD 2 - Online Learning */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, rotate: 0.2 }}
            onMouseMove={handleMouseMove}
            className="group relative rounded-[32px] p-[1px] bg-gradient-to-b from-zinc-200/80 via-zinc-200/20 to-transparent dark:from-white/10 dark:via-zinc-800/50 dark:to-transparent overflow-hidden shadow-sm dark:shadow-none"
          >
            {/* Glass spotlight reflection overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: "radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(10, 117, 106, 0.06), transparent 80%)"
              }}
            />

            <div className="relative h-full bg-white/80 dark:bg-zinc-900/40 backdrop-blur-2xl rounded-[31px] p-8 md:p-12 flex flex-col justify-between overflow-hidden">
              {/* Dynamic light streak */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0A756A]/5 dark:bg-[#0A756A]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#0A756A]/10 dark:group-hover:bg-[#0A756A]/20 transition-colors duration-500" />
              
              <div>
                <div className="flex items-start justify-between mb-8">
                  {/* Floating Icon Wrapper */}
                  {/* <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
                    className="w-14 h-14 rounded-2xl bg-[#0A756A]/10 dark:bg-[#0A756A]/15 border border-[#0A756A]/25 dark:border-[#0A756A]/30 flex items-center justify-center text-[#0A756A]"
                  >
                    <Laptop className="w-7 h-7" />
                  </motion.div> */}
                  {/* <span className="text-[10px] font-mono tracking-widest text-[#0A756A] uppercase px-2.5 py-1 rounded-full border border-[#0A756A]/20 bg-[#0A756A]/5">
                    Flexible Learning
                  </span> */}
                </div>

                <h3 className="text-2xl md:text-3xl font-outfit font-semibold tracking-tight text-zinc-900 dark:text-white mb-4">
                  Online Learning
                </h3>

                <p className="text-zinc-650 dark:text-zinc-400 font-outfit   text-sm md:text-[15px] font-extralight leading-relaxed mb-8 max-w-md ">
                  Attend classes from anywhere with live sessions, recorded videos, practical assignments, and continuous mentor support.
                </p>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-4 mb-10 pb-8 border-b border-zinc-200/65 dark:border-white/5">
                  {[
                    "Live Classes",
                    "Recorded Videos",
                    "Flexible Schedule",
                    "Community Support",
                    "Practical Learning",
                    "Certificate"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#0A756A]/10 border border-[#0A756A]/20 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-[#0A756A]" />
                      </div>
                      <span className="text-xs md:text-[13px] text-zinc-700 dark:text-zinc-300 font-satoshi">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button - Scrolls to Pricing */}
         <button
  onClick={() => navigate("/coursedetails")}
  className="relative w-full h-12 font-outfit font-light rounded-xl bg-transparent border border-zinc-200 dark:border-white/10 hover:border-[#0A756A] dark:hover:border-[#0A756A] text-[#0A756A] dark:text-white  text-sm transition-all duration-300 hover:bg-[#0A756A]/5 dark:hover:bg-[#0A756A]/10 flex items-center justify-center gap-2 group/btn cursor-pointer"
>
  <span>Explore Online Plans</span>
  <ArrowRight className="w-4 h-4  transition-transform group-hover/btn:translate-x-1" />
</button>
            </div>
          </motion.div>
        </div>

  

         
         <TrustedBy className="my-14 md:my-24" />

     

        {/* BOTTOM CTA SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[32px] overflow-hidden border border-zinc-200/80 dark:border-white/10 bg-gradient-to-br from-white via-zinc-50 to-zinc-100/50 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/30 p-8 md:p-16 text-center shadow-[0_30px_70px_-15px_rgba(10,117,106,0.05)] dark:shadow-[0_30px_70px_-15px_rgba(10,117,106,0.15)]"
        >
          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#0A756A]/5 dark:bg-[#0A756A]/10 blur-3xl pointer-events-none" />
          <div className="absolute inset-0 noise-overlay pointer-events-none opacity-[0.015] dark:opacity-[0.03]" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            
            {/* Floating micro-badge */}
          

            <h3 className="text-3xl md:text-5xl font-bold font-outfit tracking text-zinc-900 dark:text-white tracking-tight leading-tight mb-4">
              Take the First
              <span className="bg-gradient-to-r from-zinc-800 to-[#0A756A] dark:from-white dark:to-[#0A756A] font-outfit font-bold bg-clip-text text-transparent">
                Step to  Successful Career
              </span>
            </h3>

            <p className="text-zinc-650 dark:text-zinc-400 text-sm md:text-[12px] leading-relaxed mb-8 max-w-lg font-outfit font-light">
              Learn from industry experts, work on real projects, master AI-powered marketing tools, and become job-ready with Entrain Labs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              
              {/* Primary CTA */}
              <button
                onClick={() => handleEnrollClick("CTA Section")}
                className="h-12 px-8 rounded-xl bg-[#0A756A] text-white font-outfit font-light  text-sm transition-all duration-300 hover:bg-[#129A8C] hover:shadow-[0_0_30px_rgba(10,117,106,0.25)] dark:bg-white dark:text-zinc-950 dark:hover:bg-[#0A756A] dark:hover:text-white flex items-center justify-center gap-2 group/ctaBtn cursor-pointer"
              >
                <span className=""> Enroll Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/ctaBtn:translate-x-1" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={() => handleEnrollClick("Download Brochure")}
                className="h-12 md:px-8 px-2 md:rounded-xl rounded-md bg-transparent border border-primary/50 hover:border-zinc-300 text-zinc-850 dark:border-white/10 dark:hover:border-white/20 dark:text-white transition-all duration-300 hover:bg-zinc-100/50 dark:hover:bg-white/5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4   text-primary" />
                <span className="text-primary font-outfit font-light">Download Brochure</span>
              </button>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Advanced WhatsApp Form Popup */}
      <EnrollmentFormAdvanced
        open={isEnrollOpen}
        onOpenChange={setIsEnrollOpen}
        storageKey={`enroll-popup-marketing-courses-${selectedPlan || "general"}`}
      />
    </section>
  );
}
