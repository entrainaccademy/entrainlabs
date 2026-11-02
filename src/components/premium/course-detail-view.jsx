"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Sparkles,
  Clock,
  Laptop,
  Building,
  GraduationCap,
  Star,
  Award,
  Search,
  TrendingUp,
  BarChart3,
  Target,
  Briefcase,
  Users,
  Zap,
  Monitor,
  PenTool,
  Cpu,
  FileText,
  ChevronDown,
  Plus,
  Minus,
  HelpCircle,
  MessageCircle,
} from "lucide-react";
import { EnrollmentFormAdvanced } from "@/components/ui/enrollment-form-advanced";
import TrustedBy from "@/components/premium/trusted-by";

// Icon mapping helper
const getIcon = (iconName, className = "w-5 h-5") => {
  const map = {
    Search: <Search className={className} />,
    TrendingUp: <TrendingUp className={className} />,
    PenTool: <PenTool className={className} />,
    BarChart3: <BarChart3 className={className} />,
    Cpu: <Cpu className={className} />,
    Briefcase: <Briefcase className={className} />,
    Target: <Target className={className} />,
    Users: <Users className={className} />,
    Zap: <Zap className={className} />,
    Monitor: <Monitor className={className} />,
    Building: <Building className={className} />,
    Award: <Award className={className} />,
    FileText: <FileText className={className} />,
    GraduationCap: <GraduationCap className={className} />,
  };
  return map[iconName] || <CheckCircle2 className={className} />;
};

export default function CourseDetailView({ course }) {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [openModuleIndex, setOpenModuleIndex] = useState(0);
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const handleEnrollClick = (context = "") => {
    setSelectedPlan(context || course.title);
    setIsEnrollOpen(true);
  };

  const toggleModule = (index) => {
    setOpenModuleIndex((prev) => (prev === index ? null : index));
  };

  const toggleFAQ = (index) => {
    setOpenFAQIndex((prev) => (prev === index ? null : index));
  };

  const handleScrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // High performance mouse tracking for cards
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div className="relative bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white overflow-hidden font-sans selection:bg-[#0A756A]/20 selection:text-[#0A756A]">
      {/* Background System */}
      {/* Dot Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808009_1px,transparent_1px),linear-gradient(to_bottom,#80808009_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Noise Texture */}
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-[0.015] dark:opacity-[0.02]" />

      {/* Glowing Ambient Blurs */}
      <div className="absolute top-[5%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#0A756A]/5 dark:bg-[#0A756A]/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[700px] h-[700px] rounded-full bg-[#0A756A]/4 dark:bg-[#0A756A]/6 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[15%] w-[550px] h-[550px] rounded-full bg-[#0A756A]/5 dark:bg-[#0A756A]/8 blur-[140px] pointer-events-none" />

      {/* Soft Top Radial Lighting Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[#0A756A]/25 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 py-10 md:py-16">
        
        {/* ==========================================
            BREADCRUMBS & NAVIGATION
            ========================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-zinc-200/60 dark:border-white/5">
          {/* Breadcrumb Trail */}
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-xs md:text-sm text-zinc-500 dark:text-zinc-400 font-satoshi">
            <Link href="/" className="hover:text-[#0A756A] transition-colors">
              Home
            </Link>
            <span className="text-zinc-400">/</span>
            <Link href="/courses" className="hover:text-[#0A756A] transition-colors">
              Courses
            </Link>
            <span className="text-zinc-400">/</span>
            <span className="text-[#0A756A] dark:text-emerald-400 font-medium truncate max-w-[240px] sm:max-w-none">
              {course.title}
            </span>
          </nav>

          {/* Back to Courses Link */}
          <Link
            href="/courses"
            className="inline-flex items-center gap-1.5 text-xs md:text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-[#0A756A] dark:hover:text-emerald-400 transition-colors w-fit group"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>Back to all courses</span>
          </Link>
        </div>

        {/* ==========================================
            HERO SECTION
            ========================================== */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 md:mb-20">
          {/* Single H1 per Page */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-clash tracking-tight text-zinc-950 dark:text-white leading-[1.15] mb-6"
          >
            {course.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-650 dark:text-zinc-300 text-base sm:text-lg leading-relaxed font-satoshi font-normal max-w-3xl mb-8"
          >
            {course.subtitle}
          </motion.p>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => handleEnrollClick("Hero Apply Now")}
              className="w-full sm:w-auto h-12 px-8 rounded-xl bg-[#0A756A] hover:bg-[#129A8C] text-white font-semibold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(10,117,106,0.3)] dark:bg-white dark:text-zinc-950 dark:hover:bg-[#0A756A] dark:hover:text-white flex items-center justify-center gap-2 group cursor-pointer shadow-md"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => handleEnrollClick("Hero Enquire Now")}
              className="w-full sm:w-auto h-12 px-7 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 hover:border-[#0A756A] dark:hover:border-[#0A756A] text-zinc-800 dark:text-zinc-200 font-semibold text-sm transition-all duration-300 hover:bg-[#0A756A]/5 dark:hover:bg-[#0A756A]/10 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-[#0A756A]" />
              <span>Enquire Now</span>
            </button>

            <button
              onClick={() => handleScrollToSection("curriculum")}
              className="w-full sm:w-auto h-12 px-6 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-[#0A756A] dark:hover:text-white font-medium text-sm transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Explore Curriculum</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </motion.div>
        </div>

        {/* ==========================================
            STATS BAR
            ========================================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 md:mb-28">
          {course.stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="relative rounded-2xl p-5 md:p-6 bg-white/80 dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-white/5 backdrop-blur-xl shadow-sm text-center flex flex-col justify-center"
            >
              <span className="text-[11px] font-semibold text-zinc-500 dark:text-zinc-400 tracking-wider uppercase font-clash mb-1">
                {stat.label}
              </span>
              <span className="text-base sm:text-lg md:text-xl font-bold font-clash text-zinc-900 dark:text-white">
                {stat.value}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Quick Jump Navigation Bar */}
        <div className="sticky top-20 z-30 mb-16 py-3 px-4 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200/80 dark:border-white/10 shadow-sm hidden md:flex items-center justify-around text-xs font-semibold font-clash uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
          <button onClick={() => handleScrollToSection("overview")} className="hover:text-[#0A756A] dark:hover:text-emerald-400 transition-colors cursor-pointer py-1">Overview</button>
          <span>•</span>
          <button onClick={() => handleScrollToSection("pillars")} className="hover:text-[#0A756A] dark:hover:text-emerald-400 transition-colors cursor-pointer py-1">What You'll Learn</button>
          <span>•</span>
          <button onClick={() => handleScrollToSection("curriculum")} className="hover:text-[#0A756A] dark:hover:text-emerald-400 transition-colors cursor-pointer py-1">Curriculum</button>
          <span>•</span>
          <button onClick={() => handleScrollToSection("practical")} className="hover:text-[#0A756A] dark:hover:text-emerald-400 transition-colors cursor-pointer py-1">Practical Training</button>
          <span>•</span>
          <button onClick={() => handleScrollToSection("projects")} className="hover:text-[#0A756A] dark:hover:text-emerald-400 transition-colors cursor-pointer py-1">Projects</button>
          <span>•</span>
          <button onClick={() => handleScrollToSection("careers")} className="hover:text-[#0A756A] dark:hover:text-emerald-400 transition-colors cursor-pointer py-1">Career & FAQs</button>
        </div>

        {/* ==========================================
            SECTION 1: PROGRAM OVERVIEW
            ========================================== */}
        <section id="overview" className="mb-24 md:mb-32 scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Narrative */}
            <div className="lg:col-span-7 flex flex-col gap-5">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A756A] dark:text-emerald-400 font-clash">
                Comprehensive Overview
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-clash text-zinc-950 dark:text-white leading-tight">
                {course.overview.heading}
              </h2>
              <div className="flex flex-col gap-4 text-zinc-650 dark:text-zinc-300 font-satoshi text-sm sm:text-base leading-relaxed">
                {course.overview.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* Right Column: Highlights Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-[#0A756A]/5 via-white dark:via-zinc-900 to-white dark:to-zinc-900 border border-[#0A756A]/20 dark:border-white/10 shadow-lg shadow-[#0A756A]/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#0A756A] text-white flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-clash text-zinc-950 dark:text-white">
                      Program Highlights
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-satoshi">
                      What makes this specialization unmatched
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3.5">
                  {course.overview.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#0A756A]/10 border border-[#0A756A]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-[#0A756A] dark:text-emerald-400" />
                      </div>
                      <span className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-satoshi leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-200/80 dark:border-white/5 flex items-center justify-between">
                  <span className="text-xs text-zinc-500 font-satoshi">
                    Ready to get started?
                  </span>
                  <button
                    onClick={() => handleEnrollClick("Overview Apply")}
                    className="text-xs font-bold text-[#0A756A] dark:text-emerald-400 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Enquire Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 2: WHAT YOU WILL LEARN
            ========================================== */}
        <section id="pillars" className="mb-24 md:mb-32 scroll-mt-28">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A756A] dark:text-emerald-400 font-clash block mb-2">
              Core Learning Pillars
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-clash text-zinc-950 dark:text-white mb-4">
              What You Will Master in This Program
            </h2>
            <p className="text-zinc-650 dark:text-zinc-400 text-sm sm:text-base font-satoshi leading-relaxed">
              Every concept is taught through hands-on execution, real datasets, and active campaign labs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {course.whatYouLearn.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onMouseMove={handleMouseMove}
                className="group relative rounded-3xl p-7 bg-white dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-white/5 hover:border-[#0A756A]/40 dark:hover:border-[#0A756A]/40 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#0A756A]/10 border border-[#0A756A]/20 text-[#0A756A] dark:text-emerald-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(pillar.icon, "w-6 h-6")}
                </div>

                <h3 className="text-lg font-bold font-clash text-zinc-900 dark:text-white mb-2.5">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-satoshi leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ==========================================
            SECTION 3: COURSE MODULES / CURRICULUM
            ========================================== */}
        <section id="curriculum" className="mb-24 md:mb-32 scroll-mt-28">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A756A] dark:text-emerald-400 font-clash block mb-2">
              Step-by-Step Curriculum
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-clash text-zinc-950 dark:text-white mb-4">
              Detailed Course Curriculum Breakdown
            </h2>
            <p className="text-zinc-650 dark:text-zinc-400 text-sm sm:text-base font-satoshi leading-relaxed">
              Engineered by experienced agency founders to match current global industry standards.
            </p>
          </div>

          <div className="max-w-4xl mx-auto flex flex-col gap-4">
            {course.modules.map((mod, idx) => {
              const isOpen = openModuleIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "bg-white dark:bg-zinc-900 border-[#0A756A]/40 shadow-lg shadow-[#0A756A]/5"
                      : "bg-white/80 dark:bg-zinc-900/40 border-zinc-200/80 dark:border-white/5 hover:border-zinc-300 dark:hover:border-zinc-700"
                  }`}
                >
                  <button
                    onClick={() => toggleModule(idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer gap-4"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                      <span className="shrink-0 px-3 py-1 rounded-full text-xs font-bold font-clash bg-[#0A756A]/10 text-[#0A756A] dark:text-emerald-400 border border-[#0A756A]/20">
                        {mod.number}
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-base sm:text-lg font-bold font-clash text-zinc-900 dark:text-white truncate sm:text-wrap">
                          {mod.title}
                        </h3>
                        <span className="text-xs text-zinc-500 font-satoshi block mt-0.5">
                          {mod.duration}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "bg-[#0A756A] text-white rotate-180"
                          : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
                      }`}
                    >
                      <ChevronDown size={16} />
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-2 border-t border-zinc-100 dark:border-white/5">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-2 sm:pl-4">
                            {mod.topics.map((topic, tIdx) => (
                              <div key={tIdx} className="flex items-start gap-2.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#0A756A] mt-2 shrink-0" />
                                <span className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-satoshi leading-relaxed">
                                  {topic}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* ==========================================
            SECTION 4: PRACTICAL TRAINING & TOOLS
            ========================================== */}
        <section id="practical" className="mb-24 md:mb-32 scroll-mt-28">
          <div className="relative rounded-[32px] p-8 sm:p-12 md:p-16 bg-gradient-to-br from-zinc-900 via-zinc-950 to-[#0B0F0F] text-white overflow-hidden border border-white/10 shadow-xl">
            {/* Ambient blur */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A756A]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-4xl">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#14b8a6] font-clash block mb-3">
                Practical Execution Lab
              </span>
              <h2 className="text-2xl sm:text-4xl font-bold font-clash text-white mb-4">
                {course.practicalTraining.title}
              </h2>
              <p className="text-zinc-300 text-sm sm:text-base font-satoshi leading-relaxed max-w-2xl mb-10">
                {course.practicalTraining.description}
              </p>

              {/* 4 Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
                {course.practicalTraining.features.map((feat, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-5 bg-white/[0.04] border border-white/10 backdrop-blur-xl"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <Zap className="w-4 h-4 text-[#14b8a6]" />
                      <h3 className="text-sm sm:text-base font-bold font-clash text-white">
                        {feat.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-400 font-satoshi leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tool Stack */}
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block mb-4 font-clash">
                  Industry Software & Tools Mastered:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {course.tools.map((tool, idx) => (
                    <span
                      key={idx}
                      className="px-3.5 py-1.5 rounded-full text-xs font-medium font-satoshi bg-white/[0.06] border border-white/10 text-zinc-200 hover:border-[#14b8a6]/40 transition-colors"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            SECTION 5: PROJECTS & ASSIGNMENTS
            ========================================== */}
        <section id="projects" className="mb-24 md:mb-32 scroll-mt-28">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A756A] dark:text-emerald-400 font-clash block mb-2">
              Portfolio Assets
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-clash text-zinc-950 dark:text-white mb-4">
              Real Client Projects You Will Complete
            </h2>
            <p className="text-zinc-650 dark:text-zinc-400 text-sm sm:text-base font-satoshi leading-relaxed">
              Graduate with verified campaign case studies that prove your abilities to employers and clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {course.projects.map((proj, idx) => (
              <div
                key={idx}
                className="rounded-3xl p-7 bg-white dark:bg-zinc-900/50 border border-zinc-200/80 dark:border-white/5 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-[#0A756A]/30 transition-all duration-300"
              >
                <div>
                  <div className="inline-flex px-3 py-1 rounded-full text-[11px] font-bold font-clash uppercase tracking-wider bg-[#0A756A]/10 text-[#0A756A] dark:text-emerald-400 border border-[#0A756A]/20 mb-4">
                    {proj.category}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-clash text-zinc-900 dark:text-white mb-3">
                    {proj.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-650 dark:text-zinc-400 font-satoshi leading-relaxed mb-6">
                    {proj.description}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#0A756A] dark:text-emerald-400 font-satoshi">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Added directly to your hiring portfolio</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
            SECTION 6: WHO CAN JOIN
            ========================================== */}
        <section className="mb-24 md:mb-32">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A756A] dark:text-emerald-400 font-clash block mb-2">
              Eligibility & Audience
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-clash text-zinc-950 dark:text-white mb-4">
              Who Should Enroll in This Program?
            </h2>
            <p className="text-zinc-650 dark:text-zinc-400 text-sm sm:text-base font-satoshi leading-relaxed">
              Designed for ambitious individuals looking to break into digital marketing or scale their current skill set.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {course.whoCanJoin.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-6 bg-white dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-white/5 shadow-sm text-left flex flex-col justify-start"
              >
                <div className="w-10 h-10 rounded-xl bg-[#0A756A]/10 border border-[#0A756A]/20 text-[#0A756A] dark:text-emerald-400 flex items-center justify-center mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold font-clash text-zinc-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-satoshi leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
            SECTION 7: CAREER OPPORTUNITIES
            ========================================== */}
        <section id="careers" className="mb-24 md:mb-32 scroll-mt-28">
          <div className="rounded-[32px] p-8 sm:p-12 bg-white dark:bg-zinc-900/40 border border-zinc-200/80 dark:border-white/10 shadow-sm">
            <div className="max-w-3xl mb-10">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A756A] dark:text-emerald-400 font-clash block mb-2">
                Career Outcomes
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-clash text-zinc-950 dark:text-white mb-3">
                {course.careerOpportunities.title}
              </h2>
              <p className="text-zinc-650 dark:text-zinc-400 text-sm sm:text-base font-satoshi leading-relaxed">
                {course.careerOpportunities.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {course.careerOpportunities.roles.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-5 bg-slate-50 dark:bg-zinc-950 border border-zinc-200/60 dark:border-white/5 flex items-center justify-between"
                >
                  <div>
                    <h3 className="text-sm sm:text-base font-bold font-clash text-zinc-900 dark:text-white">
                      {item.role}
                    </h3>
                    <span className="text-xs text-zinc-500 font-satoshi">Average CTC Range</span>
                  </div>
                  <span className="text-xs sm:text-sm font-bold font-clash text-[#0A756A] dark:text-emerald-400 px-3 py-1 rounded-full bg-[#0A756A]/10 border border-[#0A756A]/20">
                    {item.salary}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trusted Partners */}
        <TrustedBy className="my-16 md:my-24" />

        {/* ==========================================
            SECTION 8: FAQS
            ========================================== */}
        <section className="mb-24 md:mb-32 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A756A] dark:text-emerald-400 font-clash block mb-2">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-clash text-zinc-950 dark:text-white mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-650 dark:text-zinc-400 text-xs sm:text-sm font-satoshi max-w-md mx-auto">
              Everything you need to know about schedules, requirements, and certifications.
            </p>
          </div>

          <div className="flex flex-col gap-3.5">
            {course.faqs.map((item, idx) => {
              const isOpen = openFAQIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden text-left ${
                    isOpen
                      ? "bg-white dark:bg-zinc-900 border-[#0A756A]/30 shadow-md shadow-[#0A756A]/5"
                      : "bg-white dark:bg-zinc-900/40 border-zinc-200/80 dark:border-white/5 hover:border-zinc-300 dark:hover:border-zinc-700"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 cursor-pointer text-left gap-4"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3.5">
                      <HelpCircle
                        size={17}
                        className={`shrink-0 transition-colors duration-300 ${
                          isOpen ? "text-[#0A756A] dark:text-emerald-400" : "text-zinc-400"
                        }`}
                      />
                      <span className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white font-clash leading-snug">
                        {item.question}
                      </span>
                    </div>

                    <div
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-[#0A756A]/10 text-[#0A756A] dark:text-emerald-400" : ""
                      }`}
                    >
                      {isOpen ? <Minus size={12} /> : <Plus size={12} />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-zinc-650 dark:text-zinc-300 leading-relaxed pl-12 border-t border-zinc-100 dark:border-white/5 pt-3 font-satoshi">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* ==========================================
            SECTION 9: BOTTOM CTA BANNER
            ========================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[32px] overflow-hidden border border-zinc-200/80 dark:border-white/10 bg-gradient-to-br from-white via-zinc-50 to-zinc-100/50 dark:from-zinc-900/80 dark:via-zinc-950 dark:to-zinc-900/50 p-8 sm:p-12 md:p-16 text-center shadow-lg"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#0A756A]/8 dark:bg-[#0A756A]/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A756A] dark:text-emerald-400 font-clash block mb-3">
              Limited Cohort Seats
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-clash text-zinc-950 dark:text-white tracking-tight leading-tight mb-4">
              Start Your Journey in{" "}
              <span className="bg-gradient-to-r from-zinc-800 to-[#0A756A] dark:from-white dark:to-emerald-400 bg-clip-text text-transparent">
                {course.title}
              </span>
            </h2>

            <p className="text-zinc-650 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mb-8 max-w-lg font-satoshi">
              Connect directly with our admissions and curriculum team on WhatsApp. Clear doubts, evaluate curriculum match, and reserve your slot.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto justify-center">
              <button
                onClick={() => handleEnrollClick("Bottom Banner Apply")}
                className="h-12 px-8 rounded-xl bg-[#0A756A] hover:bg-[#129A8C] text-white font-bold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(10,117,106,0.3)] dark:bg-white dark:text-zinc-950 dark:hover:bg-[#0A756A] dark:hover:text-white flex items-center justify-center gap-2 group cursor-pointer shadow-md"
              >
                <span>Apply for Program</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => handleEnrollClick("Bottom Banner Enquire")}
                className="h-12 px-7 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 hover:border-[#0A756A] dark:hover:border-[#0A756A] text-zinc-800 dark:text-zinc-200 font-semibold text-sm transition-all duration-300 hover:bg-[#0A756A]/5 dark:hover:bg-[#0A756A]/10 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#0A756A]" />
                <span>Enquire Now</span>
              </button>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Advanced WhatsApp Form Popup */}
      <EnrollmentFormAdvanced
        open={isEnrollOpen}
        onOpenChange={setIsEnrollOpen}
        batchType="Specialization"
        batchName={selectedPlan || course.title}
        sourcePage={course.title}
        storageKey={`enroll-popup-${course.slug}`}
      />
    </div>
  );
}

