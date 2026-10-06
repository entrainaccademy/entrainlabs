"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
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
  CheckCircle2,
  BookOpen,
  Sparkles,
  Cpu,
  Briefcase,
  HelpCircle,
  Plus,
  Minus
} from "lucide-react";
import { EnrollmentFormAdvanced } from "@/components/ui/enrollment-form-advanced";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { faqData } from "@/lib/data";
import TrustedBy from "@/components/premium/trusted-by"; 

// ==========================================
// DATA DEFINITIONS (CURRICULUM, PRICING, ETC.)
// ==========================================

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

const curriculumPhases = [
  {
    phase: "Phase 1: Marketing Fundamentals & Organic Strategy",
    weeks: "Weeks 1–6",
    title: "Core Fundamentals & Brand Strategy",
    description: "Begin with consumer psychology, copywriting principles, and SEO foundations to understand organic traffic flow.",
    modules: [
      "Digital Marketing Foundations & Psychology",
      "Copywriting & Storytelling Masterclass",
      "Organic Social Media Optimization (Instagram, LinkedIn, YouTube)",
      "Keyword Research & Competitive Benchmarking"
    ]
  },
  {
    phase: "Phase 2: Traffic Acquisition & Paid Media Buying",
    weeks: "Weeks 7–12",
    title: "Performance Ads & Tech Setup",
    description: "Master direct-response advertising channels, conversion setup, and running real budget ad operations.",
    modules: [
      "Meta Ads (CBO, Pixel Tracking & Funnel Setup)",
      "Google Search, Display & Performance Max Campaigns",
      "Web Analytics Setup (GA4, GTM Custom Events)",
      "Landing Page Optimization & A/B Testing"
    ]
  },
  {
    phase: "Phase 3: AI Marketing Automation & CRM",
    weeks: "Weeks 13–18",
    title: "Automations & Advanced AI Workflows",
    description: "Learn to multiply output and streamline tasks using API automations, AI tools, and email engines.",
    modules: [
      "CRM & Email Marketing Automation (Klaviyo, Mailchimp)",
      "Code-Free Workflow Automations via Zapier & Make",
      "AI Content Automation (Prompt Engineering & Custom Agents)",
      "Freelancing Systems & Retainer Contract Pitches"
    ]
  },
  {
    phase: "Phase 4: Agency Internship & Portfolio Defense",
    weeks: "Weeks 19–24",
    title: "Live Agency Residency",
    description: "Work inside our affiliate digital marketing agency on live client briefs with real budgets, ending with portfolio defenses.",
    modules: [
      "Direct Client Campaign Management",
      "Budget Allocations & Client Reporting Presentations",
      "Comprehensive Portfolio Review & Defense",
      "Mock Interviews & Career Placement Support"
    ]
  }
];

// ==========================================
// MAIN COMPONENT: COURSES & COURSE DETAILS COMBINED
// ==========================================

export default function Courses({ defaultSection }) {
  const router = useRouter();
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  // Smooth scroll handler for anchor links
  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll to default section if specified on mount
  useEffect(() => {
    if (defaultSection) {
      setTimeout(() => {
        handleScrollToSection(defaultSection);
      }, 150);
    }
  }, [defaultSection]);

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

  const toggleFAQ = (idx) => {
    setOpenFAQIndex(prev => prev === idx ? null : idx);
  };

  return (
    <div className="relative bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white overflow-hidden font-sans selection:bg-[#0A756A]/20 selection:text-[#0A756A]">
      {/* Background System */}
      {/* Dot Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808009_1px,transparent_1px),linear-gradient(to_bottom,#80808009_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Noise Texture */}
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-[0.015] dark:opacity-[0.02]" />

      {/* Mesh Gradient / Glowing Blurs */}
      <div className="absolute top-[5%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#0A756A]/5 dark:bg-[#0A756A]/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-[35%] right-[-10%] w-[700px] h-[700px] rounded-full bg-[#0A756A]/4 dark:bg-[#0A756A]/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[20%] w-[550px] h-[550px] rounded-full bg-[#0A756A]/5 dark:bg-[#0A756A]/8 blur-[140px] pointer-events-none" />

      {/* Soft Top Radial Lighting Overlay */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[#0A756A]/20 dark:via-[#0A756A]/30 to-transparent pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-6 md:px-8 z-10 py-16 md:py-24">
        
        {/* ==========================================
            SECTION 1: HERO HEADER & TRAINING MODES
            ========================================== */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20 md:mb-28">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-regular font-clash tracking-tight text-zinc-900 dark:text-white mt-1 leading-[1.1] mb-6"
          >
            <span className="bg-gradient-to-r from-zinc-800 via-zinc-900 to-[#0A756A] dark:from-white dark:via-zinc-200 dark:to-[#0A756A] bg-clip-text text-transparent">
              Digital Marketing Program
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-[#0A756A] dark:text-zinc-400 text-base md:text-[14px] leading-relaxed font-clash font-thin max-w-2xl"
          >
            Learn Digital Marketing through live training, real projects, AI tools, and expert career support.
          </motion.p>
        </div>

        {/* TWO TRAINING MODES CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 -mt-12 mb-28 md:mb-36">
          
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
            {/* Spotlight reflection */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: "radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(10, 117, 106, 0.06), transparent 80%)"
              }}
            />
            
            <div className="relative h-full bg-white/80 dark:bg-zinc-900/40 backdrop-blur-2xl rounded-[31px] p-8 md:p-12 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0A756A]/5 dark:bg-[#0A756A]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#0A756A]/10 dark:group-hover:bg-[#0A756A]/20 transition-colors duration-500" />
              
              <div>
            

                <h3 className="text-2xl md:text-3xl font-clash font-semibold text-zinc-900 dark:text-white mb-4">
                  Offline Classroom
                </h3>

                <p className="text-zinc-650 dark:text-zinc-400 text-sm md:text-[16px] font-light leading-relaxed mb-8 max-w-md font-satoshi">
                  Experience classroom-based learning with direct interaction, practical sessions, expert mentoring, and collaborative learning.
                </p>
 
                {/* Features List */}
                <div className="grid grid-cols-2 gap-4 mb-10 pb-8 border-b border-zinc-200/65 dark:border-white/5">
                  {[
                    "Classroom Training",
                    "Live Instructor",
                    "Practical Sessions",
                    "Weekly Reviews",
                    "Networking",
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

              <Link
                href="/offline-batches"
                className="relative w-full h-12 rounded-xl bg-[#0A756A] text-white font-semibold text-sm transition-all duration-300 hover:bg-[#129A8C] hover:shadow-[0_0_30px_rgba(10,117,106,0.25)] dark:bg-white dark:text-zinc-950 dark:hover:bg-[#0A756A] dark:hover:text-white flex items-center justify-center gap-2 group/btn cursor-pointer"
              >
                <span>Join Offline Batch</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </Link>
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
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: "radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(10, 117, 106, 0.06), transparent 80%)"
              }}
            />

            <div className="relative h-full bg-white/80 dark:bg-zinc-900/40 backdrop-blur-2xl rounded-[31px] p-8 md:p-12 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0A756A]/5 dark:bg-[#0A756A]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#0A756A]/10 dark:group-hover:bg-[#0A756A]/20 transition-colors duration-500" />
              
              <div>
         

                <h3 className="text-2xl md:text-3xl font-semibold font-clash text-zinc-900 dark:text-white mb-4">
                  Online Learning
                </h3>

                <p className="text-zinc-650 dark:text-zinc-400 text-sm md:text-[16px] font-light leading-relaxed mb-8 max-w-md font-satoshi">
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

              <button
                onClick={() => handleScrollToSection("online-programs")}
                className="relative w-full h-12 rounded-xl bg-transparent border border-zinc-200 dark:border-white/10 hover:border-[#0A756A] dark:hover:border-[#0A756A] text-[#0A756A] dark:text-white font-semibold text-sm transition-all duration-300 hover:bg-[#0A756A]/5 dark:hover:bg-[#0A756A]/10 flex items-center justify-center gap-2 group/btn cursor-pointer"
              >
                <span>Explore Online Plans</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>


        {/* ==========================================
            SECTION 2: ONLINE TRAINING PROGRAMS (PRICING)
            ========================================== */}
        <div id="online-programs" className="scroll-mt-24 mb-24 md:mb-32">
          <div className="text-center mb-16">
         
            <h3 className="text-3xl md:text-5xl font-bold font-clash text-zinc-900 dark:text-white mb-4">
              Online Training Programs
            </h3>
            <p className="text-zinc-650 dark:text-zinc-400 text-sm max-w-xl mx-auto font-satoshi">
              Select a pathway tailored to your experience, and speed up your career progression with structured resources.
            </p>
          </div>

          {/* THREE PREMIUM PRICING CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
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
                  className={`group relative rounded-3xl p-[1px] flex flex-col justify-between overflow-hidden transition-all duration-500 shadow-sm dark:shadow-none ${isPopular
                    ? "bg-gradient-to-b from-[#0A756A] via-[#0A756A]/40 to-transparent lg:scale-105 z-20 shadow-[0_20px_50px_rgba(10,117,106,0.08)] dark:shadow-[0_20px_50px_rgba(10,117,106,0.15)]"
                    : "bg-gradient-to-b from-zinc-200/80 via-zinc-150 to-transparent dark:from-white/10 dark:via-zinc-900/50 dark:to-transparent"
                    }`}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: isPopular
                        ? "radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(10, 117, 106, 0.12), transparent 80%)"
                        : "radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(10, 117, 106, 0.08), transparent 80%)"
                    }}
                  />

                  {isPopular && (
                    <div className="absolute -top-20 left-1/2  -translate-x-1/2 w-64 h-32 bg-[#0A756A]/10 dark:bg-[#0A756A]/20 blur-3xl pointer-events-none" />
                  )}

                  <div className="relative h-full bg-red-900   bg-white dark:bg-zinc-950/90 backdrop-blur-2xl rounded-[23px] p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-3 mb-6">
                        <span className={`text-[10px]  tracking-wider px-3 py-1 rounded-full uppercase font-medium font-clash border ${isPopular
                          ? "bg-[#0A756A]/10 text-[#0A756A] border-[#0A756A]/20 dark:bg-[#0A756A]/20 dark:text-[#0A756A] dark:border-[#0A756A]/30"
                          : "bg-zinc-100 dark:bg-white/5 text-zinc-500 dark:text-zinc-400 border-zinc-200 dark:border-white/5"
                          }`}>
                          {plan.badge}
                        </span>
                        <div className="flex items-center gap-1 text-zinc-500 font-mono text-xs">
                          <span>Duration:</span>
                          <span className="text-zinc-800 dark:text-white font-semibold">{plan.duration}</span>
                        </div>
                      </div>

                      <h4 className="text-2xl md:text-3xl font-bold font-clash text-zinc-900 dark:text-white mb-2">
                        {plan.name}
                      </h4>

                      <p className="text-[#0A756A] text-xs font-semibold tracking-wide font-satoshi mb-4 uppercase">
                        Perfect For: {plan.perfectFor}
                      </p>

                      <p className="text-zinc-650 dark:text-zinc-400 text-xs md:text-sm leading-relaxed mb-6 pb-6 border-b border-zinc-200/50 dark:border-white/5 font-satoshi">
                        {plan.description}
                      </p>

                      <div className="flex flex-col gap-3.5 mb-8">
                        <span className="text-[10px] font-mono tracking-widest text-zinc-400 dark:text-zinc-500 uppercase">
                          What's Included:
                        </span>
                        {plan.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-700 dark:text-zinc-300">
                            <CheckCircle2 className="w-4.5 h-4.5 text-[#0A756A] shrink-0 mt-0.5" />
                            <span className="font-satoshi">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => handleEnrollClick(plan.name)}
                      className={`relative w-full h-12 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 group/pbtn cursor-pointer ${isPopular
                        ? "bg-[#0A756A] text-white hover:bg-[#129A8C] hover:shadow-[0_0_30px_rgba(10,117,106,0.3)]"
                        : "bg-zinc-100 hover:bg-[#0A756A] hover:text-white text-zinc-800 border border-zinc-200 dark:bg-white/5 dark:hover:bg-white/10 dark:text-white dark:border-white/10 dark:hover:border-[#0A756A]/50"
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
        </div>


        {/* ==========================================
            SECTION 3: COMPARISON TABLE
            ========================================== */}
      


     


        {/* ==========================================
            SECTION 5: MINI FAQ
            ========================================== */}
        {/* <div className="mb-24 md:mb-32 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[10px] font-mono tracking-widest text-[#0A756A] uppercase mb-3 block">
              Got Questions?
            </span>
            <h3 className="text-2xl md:text-4xl font-bold font-clash text-zinc-900 dark:text-white mb-3">
              Syllabus & Details FAQ
            </h3>
            <p className="text-zinc-650 dark:text-zinc-400 text-xs md:text-sm font-satoshi max-w-md mx-auto">
              Clear, straightforward answers about curriculum schedules, certifications, and requirements.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {faqData && faqData.slice(0, 4).map((item, idx) => {
              const isOpen = openFAQIndex === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden relative text-left ${isOpen
                    ? "bg-white dark:bg-zinc-900 border-[#0A756A]/30 shadow-md shadow-[#0A756A]/5"
                    : "bg-white dark:bg-zinc-900/40 border-zinc-200 dark:border-white/5 hover:border-zinc-300 dark:hover:border-zinc-700"
                    }`}
                >
                  <div className="absolute inset-0 noise-overlay pointer-events-none opacity-20 dark:opacity-30" />

                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex items-center justify-between p-5 md:p-6 cursor-pointer text-left z-10 relative"
                  >
                    <div className="flex items-center gap-4 pr-4">
                      <HelpCircle size={16} className={`shrink-0 transition-colors duration-300 ${isOpen ? "text-[#0A756A]" : "text-zinc-400"}`} />
                      <span className="text-sm font-bold text-zinc-900 dark:text-white font-clash leading-snug">
                        {item.question}
                      </span>
                    </div>

                    <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 transition-transform duration-300 ${isOpen ? "rotate-180 bg-[#0A756A]/10 text-[#0A756A]" : ""}`}>
                      {isOpen ? <Minus size={12} /> : <Plus size={12} />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="z-10 relative"
                      >
                        <div className="px-5 pb-5 md:px-6 md:pb-6 text-xs md:text-sm text-zinc-655 dark:text-zinc-400 leading-relaxed pl-12">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div> */}

      <TrustedBy className="my-16 md:my-24" />
        {/* ==========================================
            SECTION 6: BOTTOM CTA
            ========================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[32px] overflow-hidden border border-zinc-200/80 dark:border-white/10 bg-gradient-to-br from-white via-zinc-50 to-zinc-100/50 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/30 p-8 md:p-16 text-center shadow-[0_30px_70px_-15px_rgba(10,117,106,0.05)] dark:shadow-[0_30px_70px_-15px_rgba(10,117,106,0.15)]"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#0A756A]/5 dark:bg-[#0A756A]/10 blur-3xl pointer-events-none" />
          <div className="absolute inset-0 noise-overlay pointer-events-none opacity-[0.015] dark:opacity-[0.03]" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">


            <h3 className="text-3xl md:text-5xl font-bold font-clash text-zinc-900 dark:text-white tracking-tight leading-tight mb-4">
              Begin Your Learning <br />
              <span className="bg-gradient-to-r from-zinc-800 to-[#0A756A] dark:from-white dark:to-[#0A756A] bg-clip-text text-transparent">
                  Journey Today
              </span>
            </h3>

            <p className="text-zinc-650 dark:text-zinc-400 text-sm md:text-base leading-relaxed mb-8 max-w-lg font-satoshi">
              Talk directly with our curriculum coordinators over WhatsApp, clear doubt queries, and select the optimal slot scheduling.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <button
                onClick={() => handleEnrollClick("CTA Section")}
                className="h-12 px-8 rounded-xl bg-[#0A756A] text-white font-bold text-sm transition-all duration-300 hover:bg-[#129A8C] hover:shadow-[0_0_30px_rgba(10,117,106,0.25)] dark:bg-white dark:text-zinc-950 dark:hover:bg-[#0A756A] dark:hover:text-white flex items-center justify-center gap-2 group/ctaBtn cursor-pointer"
              >
                <span>Chat with Coordinator</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/ctaBtn:translate-x-1" />
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
    </div>
  );
}

export function CourseDetails() {
  return <Courses defaultSection="online-programs" />;
}
