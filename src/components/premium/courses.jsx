"use client";
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  GraduationCap,
  Building,
  Laptop,
  Check,
  ArrowRight,
  Sparkles,
  FileText,
  HelpCircle,
  Award,
  ChevronRight,
  TrendingUp,
  Cpu,
  Star,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { EnrollmentFormAdvanced } from "@/components/ui/enrollment-form-advanced";

export default function Courses() {
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
      badge: "🔥 Most Popular",
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
      badge: "👑 Premium",
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

  // Comparison Table Rows
  const comparisonRows = [
    { name: "Live Classes", starter: "Yes", career: "Yes", pro: "Yes" },
    { name: "Recorded Classes", starter: "Yes", career: "Yes", pro: "Yes" },
    { name: "Assignments", starter: "Basic", career: "Practical", pro: "Practical" },
    { name: "Virtual Workplace", starter: "No", career: "Yes", pro: "Yes" },
    { name: "Weekly Review", starter: "No", career: "Yes", pro: "Yes" },
    { name: "AI Tools", starter: "No", career: "Yes", pro: "Yes" },
    { name: "Prompt Engineering", starter: "No", career: "Yes", pro: "Yes" },
    { name: "Real Projects", starter: "No", career: "Client Projects", pro: "Enterprise Projects" },
    { name: "Individual Mentor", starter: "No", career: "No", pro: "Yes" },
    { name: "Lifetime Support", starter: "No", career: "No", pro: "Yes" },
    { name: "Certificate", starter: "Yes", career: "Yes", pro: "Yes" }
  ];

  return (
    <section
      id="courses"
      className="relative py-24 md:py-36 bg-zinc-950 text-white overflow-hidden font-sans selection:bg-[#0A756A]/30 selection:text-white"
    >
      {/* Background System */}
      {/* Dot Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Noise Texture */}
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-[0.02]" />

      {/* Mesh Gradient / Glowing Blurs */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#0A756A]/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#0A756A]/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[20%] w-[550px] h-[550px] rounded-full bg-[#0A756A]/8 blur-[140px] pointer-events-none" />

      {/* Soft Top Radial Lighting Overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[#0A756A]/30 to-transparent pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-6 md:px-8 z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0A756A]/20 bg-[#0A756A]/5 text-[#0A756A] text-xs font-semibold tracking-wide uppercase mb-5 backdrop-blur-md"
          >
            <span>Digital Marketing Courses</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold font-clash tracking-tight text-white leading-[1.1] mb-6"
          >
            Choose the Perfect <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-zinc-200 to-[#0A756A] bg-clip-text text-transparent">
              Digital Marketing Program
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-zinc-400 text-base md:text-lg leading-relaxed font-satoshi max-w-2xl"
          >
            Whether you're a beginner, job seeker, freelancer, entrepreneur, or business owner, Entrain Labs offers practical Digital Marketing programs designed to build real-world skills through live training, projects, AI tools, and career support.
          </motion.p>
        </div>

        {/* DISPLAY TWO MAIN TRAINING MODES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-28 md:mb-36">
          
          {/* CARD 1 - Offline Classroom */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, rotate: -0.2 }}
            onMouseMove={handleMouseMove}
            className="group relative rounded-[32px] p-[1px] bg-gradient-to-b from-white/10 via-zinc-800/50 to-transparent overflow-hidden"
          >
            {/* Glass spotlight reflection overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: "radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(10, 117, 106, 0.12), transparent 80%)"
              }}
            />
            
            <div className="relative h-full bg-zinc-900/40 backdrop-blur-2xl rounded-[31px] p-8 md:p-12 flex flex-col justify-between overflow-hidden">
              {/* Dynamic light streak */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0A756A]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#0A756A]/20 transition-colors duration-500" />
              
              <div>
                <div className="flex items-start justify-between mb-8">
                  {/* Floating Icon Wrapper */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="w-14 h-14 rounded-2xl bg-[#0A756A]/15 border border-[#0A756A]/30 flex items-center justify-center text-[#0A756A]"
                  >
                    <Building className="w-7 h-7" />
                  </motion.div>
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase px-2.5 py-1 rounded-full border border-white/5 bg-white/5">
                    Physical Academy
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold font-clash text-white mb-4">
                  Offline Classroom
                </h3>

                <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 max-w-md font-satoshi">
                  Experience classroom-based learning with direct interaction, practical sessions, expert mentoring, and collaborative learning.
                </p>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-4 mb-10 pb-8 border-b border-white/5">
                  {[
                    "Classroom Training",
                    "Live Instructor",
                    "Practical Sessions",
                    "Weekly Reviews",
                    "Networking",
                    "Certificate"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#0A756A]/10 border border-[#0A756A]/30 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-[#0A756A]" />
                      </div>
                      <span className="text-xs md:text-sm text-zinc-300 font-satoshi">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleEnrollClick("Offline Classroom")}
                className="relative w-full h-12 rounded-xl bg-white text-zinc-950 font-semibold text-sm transition-all duration-300 hover:bg-[#0A756A] hover:text-white hover:shadow-[0_0_30px_rgba(10,117,106,0.3)] flex items-center justify-center gap-2 group/btn cursor-pointer"
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
            className="group relative rounded-[32px] p-[1px] bg-gradient-to-b from-white/10 via-zinc-800/50 to-transparent overflow-hidden"
          >
            {/* Glass spotlight reflection overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: "radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(10, 117, 106, 0.12), transparent 80%)"
              }}
            />

            <div className="relative h-full bg-zinc-900/40 backdrop-blur-2xl rounded-[31px] p-8 md:p-12 flex flex-col justify-between overflow-hidden">
              {/* Dynamic light streak */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0A756A]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#0A756A]/20 transition-colors duration-500" />
              
              <div>
                <div className="flex items-start justify-between mb-8">
                  {/* Floating Icon Wrapper */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
                    className="w-14 h-14 rounded-2xl bg-[#0A756A]/15 border border-[#0A756A]/30 flex items-center justify-center text-[#0A756A]"
                  >
                    <Laptop className="w-7 h-7" />
                  </motion.div>
                  <span className="text-[10px] font-mono tracking-widest text-[#0A756A] uppercase px-2.5 py-1 rounded-full border border-[#0A756A]/20 bg-[#0A756A]/5">
                    Flexible Learning
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold font-clash text-white mb-4">
                  Online Learning
                </h3>

                <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 max-w-md font-satoshi">
                  Attend classes from anywhere with live sessions, recorded videos, practical assignments, and continuous mentor support.
                </p>

                {/* Features List */}
                <div className="grid grid-cols-2 gap-4 mb-10 pb-8 border-b border-white/5">
                  {[
                    "Live Classes",
                    "Recorded Videos",
                    "Flexible Schedule",
                    "Community Support",
                    "Practical Learning",
                    "Certificate"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#0A756A]/10 border border-[#0A756A]/30 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-[#0A756A]" />
                      </div>
                      <span className="text-xs md:text-sm text-zinc-300 font-satoshi">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button - Scrolls to Pricing */}
              <button
                onClick={() => handleScrollToSection("online-programs")}
                className="relative w-full h-12 rounded-xl bg-transparent border border-white/10 hover:border-[#0A756A] text-white font-semibold text-sm transition-all duration-300 hover:bg-[#0A756A]/10 flex items-center justify-center gap-2 group/btn cursor-pointer"
              >
                <span>Explore Online Plans</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* ONLINE PROGRAMS PRICING HEADER */}
        <div id="online-programs" className="scroll-mt-24 mb-16 text-center">
          <span className="text-[10px] font-mono tracking-widest text-[#0A756A] uppercase mb-3 block">
            Flexible Pricing Structure
          </span>
          <h3 className="text-3xl md:text-5xl font-bold font-clash text-white mb-4">
            Online Training Programs
          </h3>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto font-satoshi">
            Select a pathway tailored to your experience, and speed up your career progression with structured resources.
          </p>
        </div>

        {/* DISPLAY THREE PREMIUM PRICING CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-28 md:mb-36 items-stretch">
          {pricingPlans.map((plan, idx) => {
            const isPopular = plan.popular;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                onMouseMove={handleMouseMove}
                className={`group relative rounded-3xl p-[1px] flex flex-col justify-between overflow-hidden transition-all duration-500 ${
                  isPopular
                    ? "bg-gradient-to-b from-[#0A756A] via-zinc-800 to-transparent lg:scale-105 z-20 shadow-[0_20px_50px_rgba(10,117,106,0.15)]"
                    : "bg-gradient-to-b from-white/10 via-zinc-900 to-transparent"
                }`}
              >
                {/* Spotlight background */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: isPopular
                      ? "radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(10, 117, 106, 0.2), transparent 80%)"
                      : "radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(10, 117, 106, 0.12), transparent 80%)"
                  }}
                />

                {/* Popular Glow Effect */}
                {isPopular && (
                  <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#0A756A]/20 blur-3xl pointer-events-none" />
                )}

                <div className="relative h-full bg-zinc-950/90 backdrop-blur-2xl rounded-[23px] p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    {/* Badge */}
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <span className={`text-[10px] font-mono tracking-wider px-3 py-1 rounded-full uppercase font-bold border ${
                        isPopular
                          ? "bg-[#0A756A]/20 text-[#0A756A] border-[#0A756A]/30 animate-pulse"
                          : "bg-white/5 text-zinc-400 border-white/5"
                      }`}>
                        {plan.badge}
                      </span>
                      <div className="flex items-center gap-1 text-zinc-500 font-mono text-xs">
                        <span>Duration:</span>
                        <span className="text-white font-semibold">{plan.duration}</span>
                      </div>
                    </div>

                    {/* Plan Name */}
                    <h4 className="text-2xl md:text-3xl font-bold font-clash text-white mb-2">
                      {plan.name}
                    </h4>
                    
                    {/* Perfect For */}
                    <p className="text-[#0A756A] text-xs font-semibold tracking-wide font-satoshi mb-4 uppercase">
                      Perfect For: {plan.perfectFor}
                    </p>

                    <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6 pb-6 border-b border-white/5 font-satoshi">
                      {plan.description}
                    </p>

                    {/* Features checklist */}
                    <div className="flex flex-col gap-3.5 mb-8">
                      <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase">
                        What's Included:
                      </span>
                      {plan.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-300">
                          <CheckCircle2 className="w-4.5 h-4.5 text-[#0A756A] shrink-0 mt-0.5" />
                          <span className="font-satoshi">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Button CTA */}
                  <button
                    onClick={() => handleEnrollClick(plan.name)}
                    className={`relative w-full h-12 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 group/pbtn cursor-pointer ${
                      isPopular
                        ? "bg-[#0A756A] text-white hover:bg-[#129A8C] hover:shadow-[0_0_30px_rgba(10,117,106,0.4)]"
                        : "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[#0A756A]/50"
                    }`}
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/pbtn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* COMPARISON TABLE */}
        <div className="mb-28 md:mb-36">
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono tracking-widest text-[#0A756A] uppercase mb-3 block">
              Side-By-Side Details
            </span>
            <h3 className="text-2xl md:text-4xl font-bold font-clash text-white mb-3">
              Compare Our Training Plans
            </h3>
            <p className="text-zinc-400 text-xs md:text-sm font-satoshi max-w-md mx-auto">
              Compare features and deliverables side-by-side to find the right level for your professional goals.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl border border-white/10 bg-zinc-900/20 backdrop-blur-2xl overflow-hidden"
          >
            {/* Horizontal scroll support for small devices */}
            <div className="overflow-x-auto no-scrollbar">
              <table className="w-full min-w-[700px] border-collapse text-left text-sm font-satoshi">
                <thead>
                  <tr className="border-b border-white/10 bg-zinc-900/60">
                    <th className="p-5 md:p-6 text-xs font-mono tracking-wider text-zinc-500 uppercase">
                      Features / Deliverables
                    </th>
                    <th className="p-5 md:p-6 text-center w-[22%]">
                      <span className="block text-white font-bold font-clash text-base">Starter</span>
                    </th>
                    {/* Career Track Column Header - Highlighted */}
                    <th className="p-5 md:p-6 text-center w-[25%] relative bg-[#0A756A]/5 border-x border-white/10">
                      <div className="absolute top-0 inset-x-0 h-1 bg-[#0A756A]" />
                      <span className="block text-white font-bold font-clash text-base flex items-center justify-center gap-1">
                        Career Track <Star className="w-3.5 h-3.5 fill-[#0A756A] text-[#0A756A]" />
                      </span>
                    </th>
                    <th className="p-5 md:p-6 text-center w-[22%]">
                      <span className="block text-white font-bold font-clash text-base">Pro Master</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {comparisonRows.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-white/[0.02] transition-colors duration-250 group/row"
                    >
                      {/* Feature Name */}
                      <td className="p-5 md:p-6 text-zinc-300 font-semibold group-hover/row:text-white transition-colors">
                        {row.name}
                      </td>

                      {/* Starter Value */}
                      <td className="p-5 md:p-6 text-center">
                        {row.starter === "Yes" ? (
                          <div className="flex justify-center">
                            <Check className="w-5 h-5 text-[#0A756A] stroke-[3]" />
                          </div>
                        ) : row.starter === "No" ? (
                          <span className="text-zinc-600">—</span>
                        ) : (
                          <span className="text-zinc-300 font-medium text-xs bg-white/5 px-2.5 py-1 rounded-md">
                            {row.starter}
                          </span>
                        )}
                      </td>

                      {/* Career Track Value (Highlighted) */}
                      <td className="p-5 md:p-6 text-center bg-[#0A756A]/5 border-x border-white/10">
                        {row.career === "Yes" ? (
                          <div className="flex justify-center">
                            <Check className="w-5 h-5 text-[#0A756A] stroke-[3]" />
                          </div>
                        ) : row.career === "No" ? (
                          <span className="text-zinc-600">—</span>
                        ) : (
                          <span className="text-white font-semibold text-xs bg-[#0A756A]/20 border border-[#0A756A]/30 px-3 py-1 rounded-md inline-block">
                            {row.career}
                          </span>
                        )}
                      </td>

                      {/* Pro Master Value */}
                      <td className="p-5 md:p-6 text-center">
                        {row.pro === "Yes" ? (
                          <div className="flex justify-center">
                            <Check className="w-5 h-5 text-[#0A756A] stroke-[3]" />
                          </div>
                        ) : row.pro === "No" ? (
                          <span className="text-zinc-600">—</span>
                        ) : (
                          <span className="text-zinc-300 font-medium text-xs bg-white/5 px-2.5 py-1 rounded-md">
                            {row.pro}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Visual indicator for horizontal swiping on mobile */}
            <div className="md:hidden flex items-center justify-center gap-1.5 py-3 border-t border-white/5 bg-zinc-900/40 text-xs text-zinc-500 font-mono">
              <ChevronRight className="w-3.5 h-3.5 animate-bounce-horizontal" />
              <span>Swipe to compare all features</span>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM CTA SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[32px] overflow-hidden border border-white/10 bg-gradient-to-br from-zinc-900/60 via-zinc-950 to-zinc-900/30 p-8 md:p-16 text-center shadow-[0_30px_70px_-15px_rgba(10,117,106,0.15)]"
        >
          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#0A756A]/10 blur-3xl pointer-events-none" />
          <div className="absolute inset-0 noise-overlay pointer-events-none opacity-[0.03]" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            
            {/* Floating micro-badge */}
            <div className="w-10 h-10 rounded-full bg-[#0A756A]/10 border border-[#0A756A]/20 flex items-center justify-center text-[#0A756A] mb-6">
              <Award className="w-5 h-5 animate-pulse" />
            </div>

            <h3 className="text-3xl md:text-5xl font-bold font-clash text-white tracking-tight leading-tight mb-4">
              Ready to Start Your <br />
              <span className="bg-gradient-to-r from-white to-[#0A756A] bg-clip-text text-transparent">
                Digital Marketing Journey?
              </span>
            </h3>

            <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 max-w-lg font-satoshi">
              Learn from industry experts, work on real projects, master AI-powered marketing tools, and become job-ready with Entrain Labs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              
              {/* Primary CTA */}
              <button
                onClick={() => handleEnrollClick("CTA Section")}
                className="h-12 px-8 rounded-xl bg-white text-zinc-950 font-bold text-sm transition-all duration-300 hover:bg-[#0A756A] hover:text-white hover:shadow-[0_0_30px_rgba(10,117,106,0.3)] flex items-center justify-center gap-2 group/ctaBtn cursor-pointer"
              >
                <span>Enroll Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/ctaBtn:translate-x-1" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={() => handleEnrollClick("Download Brochure")}
                className="h-12 px-8 rounded-xl bg-transparent border border-white/10 hover:border-white/20 text-white font-semibold text-sm transition-all duration-300 hover:bg-white/5 flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-zinc-400" />
                <span>Download Brochure</span>
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
