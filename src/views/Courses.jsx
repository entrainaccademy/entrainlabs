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
  Minus,
  TrendingUp,
  Search,
  Target,
  Users,
  Zap,
  Clock,
  MessageCircle,
} from "lucide-react";
import { EnrollmentFormAdvanced } from "@/components/ui/enrollment-form-advanced";
import { useRouter } from "next/navigation";
import Link from "next/link";
import TrustedBy from "@/components/premium/trusted-by";
import CourseExperienceAudience from "@/components/premium/course-experience-audience";
import LeadRegistrationForm from "@/components/premium/lead-registration-form";

// ==========================================
// ALL 5 DEDICATED COURSES WITH FULL DETAILS
// ==========================================
const allCoursesList = [
  {
    id: "digital-marketing-master-program",
    slug: "digital-marketing-master-program",
    title: "Digital Marketing Master Program",
    category: "Flagship All-In-One",
    categoryFilter: "flagship",
    duration: "24 Weeks (6 Months)",
    level: "Beginner to Pro",
    rating: 4.9,
    reviewsCount: "500+ Graduates",
    description:
      "Our premier 360-degree digital marketing masterclass. Master performance media buying, technical SEO, conversion copywriting, data analytics, and modern AI marketing automations, backed by a guaranteed 8-week agency internship.",
    highlights: [
      "Guaranteed 8-week agency internship with client-facing responsibilities",
      "Real Google & Meta ad budget deployment in live classroom campaigns",
      "12+ real-world portfolio projects across D2C, B2B, and E-commerce",
      "Generative AI & workflow automation integrated across all modules",
      "1-on-1 mentor code & campaign audits with agency founders",
      "100% interview placement assistance with top agency hiring partners",
    ],
    tools: [
      "Google Ads",
      "Meta Ads",
      "SEMrush",
      "Ahrefs",
      "GA4",
      "GTM",
      "Zapier",
      "ChatGPT",
      "Canva Pro",
      "Looker Studio",
    ],
    href: "/courses/digital-marketing-master-program",
  },
  {
    id: "performance-marketing",
    slug: "performance-marketing",
    title: "Performance Marketing Course",
    category: "Paid Acquisition & ROAS",
    categoryFilter: "ads",
    duration: "12 Weeks Intensive",
    level: "Intermediate to Pro",
    rating: 4.8,
    reviewsCount: "250+ Marketers",
    description:
      "Become an elite media buyer. Learn full-funnel TOFU/MOFU/BOFU strategy, custom audience modeling, landing page conversion rate optimization (CRO), server-side CAPI tracking, and scaling daily ad spend profitably.",
    highlights: [
      "Manage real ₹5,00,000+ advertising budgets during training sprints",
      "Full-funnel customer acquisition systems across Meta & Google Ads",
      "Conversion Rate Optimization (CRO), heatmaps & A/B testing",
      "Server-side Conversions API (CAPI) & GA4 custom purchase funnels",
      "Automated rules, bidding strategies & budget pacing frameworks",
      "Direct placement pathways into senior agency media buyer positions",
    ],
    tools: [
      "Meta Ads Manager",
      "Google Ads",
      "Google Analytics 4",
      "GTM",
      "Triple Whale",
      "Hotjar",
      "Shopify",
      "Stape.io",
    ],
    href: "/courses/performance-marketing",
  },
  {
    id: "seo-optimization",
    slug: "seo-optimization",
    title: "SEO Optimization Course",
    category: "Organic Growth & SEO",
    categoryFilter: "seo",
    duration: "8 Weeks Intensive",
    level: "Beginner to Advanced",
    rating: 4.9,
    reviewsCount: "320+ Analysts",
    description:
      "Unlock compounding organic traffic. Master search engine optimization from fundamentals to advanced technical audits: semantic keyword clustering, on-page SEO, Core Web Vitals, Google Search Console, and authority link building.",
    highlights: [
      "Perform exhaustive technical SEO audits on 15+ live commercial sites",
      "Screaming Frog, SEMrush & Ahrefs in-depth masterclass",
      "Topic cluster mapping and search intent keyword research",
      "Schema.org structured data, Core Web Vitals & indexation troubleshooting",
      "White-hat authority link building & digital PR outreach campaigns",
      "Hands-on project ranking real client keywords on Google Page 1",
    ],
    tools: [
      "SEMrush",
      "Ahrefs",
      "Google Search Console",
      "Screaming Frog",
      "GA4",
      "PageSpeed Insights",
      "Surfer SEO",
    ],
    href: "/courses/seo-optimization",
  },
  {
    id: "google-ads-meta-ads",
    slug: "google-ads-meta-ads",
    title: "Google Ads & Meta Ads Specialization",
    category: "The Two Advertising Giants",
    categoryFilter: "ads",
    duration: "8 Weeks Hands-On",
    level: "Beginner to Pro",
    rating: 4.8,
    reviewsCount: "410+ Specialists",
    description:
      "Master the two biggest advertising networks on the planet. High-intent Google Search, YouTube Video Action campaigns, Meta Advantage+ shopping ads, Instagram Reels, custom audiences, and budget scaling.",
    highlights: [
      "Real campaign funds allocated in hands-on practical lab sessions",
      "Google Search ads: SKAGs, smart bidding & negative keyword architecture",
      "Meta Ads Manager: Advantage+ campaigns & creative iteration testing",
      "Bulletproof tracking with GTM, Meta Pixel & Conversions API (CAPI)",
      "Ad performance analysis: CTR, CPC, CPM, Frequency & ROAS telemetry",
      "Official Google Ads and Meta Certified Associate credential prep",
    ],
    tools: [
      "Google Ads Manager",
      "Meta Ads Manager",
      "Google Tag Manager",
      "GA4",
      "YouTube Studio",
      "Looker Studio",
      "Canva Pro",
    ],
    href: "/courses/google-ads-meta-ads",
  },
  {
    id: "career-support-internship",
    slug: "career-support-internship",
    title: "Career Support & Internship Program",
    category: "Agency Residency & Career",
    categoryFilter: "career",
    duration: "8 Weeks Residency",
    level: "Placement Ready",
    rating: 4.9,
    reviewsCount: "100% Placement Support",
    description:
      "Bridge the gap between training and corporate employment. Work on live agency briefs, build a verified client portfolio, polish your ATS resume, and attend direct hiring placement drives with 65+ partner brands.",
    highlights: [
      "Guaranteed 8-week agency internship working on active client briefs",
      "Work directly on live client accounts handling actual deliverables",
      "Build a web-hosted digital portfolio with verified campaign case studies",
      "ATS-compliant resume revamp & LinkedIn personal branding",
      "Mock technical & HR interview drills with agency directors",
      "Direct interview placement drives with 65+ partner brands and agencies",
    ],
    tools: [
      "Slack",
      "Notion",
      "Asana",
      "Google Workspace",
      "Meta Business Suite",
      "Google Ads",
      "LinkedIn",
    ],
    href: "/courses/career-support-internship",
  },
];

export default function Courses({ defaultSection }) {
  const router = useRouter();
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filterTabs = [
    { id: "all", label: "All Programs", count: 5 },
    { id: "flagship", label: "Flagship", count: 1 },
    { id: "ads", label: "Paid Media & Ads", count: 2 },
    { id: "seo", label: "SEO & Organic", count: 1 },
    { id: "career", label: "Career & Placement", count: 1 },
  ];

  const filteredCourses =
    activeCategory === "all"
      ? allCoursesList
      : allCoursesList.filter((c) => c.categoryFilter === activeCategory);

  const handleEnrollClick = (courseTitle) => {
    setSelectedPlan(courseTitle);
    setIsEnrollOpen(true);
  };

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div className="relative bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white overflow-hidden font-sans selection:bg-[#0A756A]/20 selection:text-[#0A756A]">
      {/* Background System */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808009_1px,transparent_1px),linear-gradient(to_bottom,#80808009_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-[0.015] dark:opacity-[0.02]" />

      {/* Ambient blurs */}
      <div className="absolute top-[5%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#0A756A]/5 dark:bg-[#0A756A]/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-[35%] right-[-10%] w-[700px] h-[700px] rounded-full bg-[#0A756A]/4 dark:bg-[#0A756A]/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[20%] w-[550px] h-[550px] rounded-full bg-[#0A756A]/5 dark:bg-[#0A756A]/8 blur-[140px] pointer-events-none" />

      {/* Top Lighting Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-[#0A756A]/20 dark:via-[#0A756A]/30 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 py-12 md:py-20">
        
        {/* ==========================================
            BREADCRUMB TRAIL
            ========================================== */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-zinc-200/60 dark:border-white/5">
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-xs md:text-sm text-zinc-500 dark:text-zinc-400 font-satoshi">
            <Link href="/" className="hover:text-[#0A756A] transition-colors">
              Home
            </Link>
            <span className="text-zinc-400">/</span>
            <span className="text-[#0A756A] dark:text-emerald-400 font-medium">Courses & Programs</span>
          </nav>

          <Link
            href="/learning-modes"
            className="inline-flex items-center gap-1.5 text-xs md:text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-[#0A756A] dark:hover:text-emerald-400 transition-colors w-fit group"
          >
            <span>Compare Offline & Online Modes</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* ==========================================
            HERO HEADER
            ========================================== */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A756A]/10 border border-[#0A756A]/20 text-[#0A756A] dark:text-emerald-400 text-xs font-semibold font-clash uppercase tracking-wider mb-5 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0A756A] dark:text-emerald-400" />
            <span>Practical Agency Training</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-clash tracking-tight text-zinc-950 dark:text-white leading-[1.15] mb-5"
          >
            Explore Our Digital Marketing{" "}
            <span className="bg-gradient-to-r from-zinc-900 via-[#0A756A] to-[#129A8C] dark:from-white dark:via-emerald-300 dark:to-[#0A756A] bg-clip-text text-transparent">
              Courses & Specializations
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-zinc-650 dark:text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed font-satoshi max-w-3xl mb-8"
          >
            Choose from our flagship full-stack master program or focused specializations in performance marketing, SEO, and paid media. Every course includes real ad spend, live client briefs, and career placement.
          </motion.p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border border-zinc-200/80 dark:border-white/10 shadow-sm">
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold font-clash transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? "bg-[#0A756A] text-white shadow-sm"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100/70 dark:hover:bg-zinc-800/50"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ==========================================
            COURSES CATALOG (ALL 5 COURSES DETAILED)
            ========================================== */}
        <div className="flex flex-col gap-8 md:gap-10 mb-24 md:mb-32">
          {filteredCourses.map((course, idx) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              onMouseMove={handleMouseMove}
              className="group relative rounded-[32px] p-[1px] bg-gradient-to-b from-zinc-200/80 via-zinc-200/20 to-transparent dark:from-white/10 dark:via-zinc-800/50 dark:to-transparent overflow-hidden shadow-sm dark:shadow-none hover:shadow-xl transition-all duration-300"
            >
              <div className="relative bg-white/90 dark:bg-zinc-900/60 backdrop-blur-2xl rounded-[31px] p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row gap-8 justify-between">
                
                {/* Left/Main Column: Title, description, highlights */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Top Meta Row */}
                    <div className="flex flex-wrap items-center gap-2.5 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold font-clash bg-[#0A756A]/10 text-[#0A756A] dark:text-emerald-400 border border-[#0A756A]/20">
                        {course.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-amber-600 dark:text-amber-400 font-semibold font-satoshi">
                        <Star size={13} className="fill-current" />
                        <span>{course.rating}</span>
                        <span className="text-zinc-400 font-normal">({course.reviewsCount})</span>
                      </span>
                    </div>

                    {/* Course Title */}
                    <h2 className="text-2xl sm:text-3xl font-bold font-clash text-zinc-900 dark:text-white mb-3 group-hover:text-[#0A756A] dark:group-hover:text-emerald-400 transition-colors">
                      <Link href={course.href}>
                        {course.title}
                      </Link>
                    </h2>

                    {/* Description */}
                    <p className="text-zinc-650 dark:text-zinc-300 text-sm sm:text-base font-satoshi leading-relaxed mb-6">
                      {course.description}
                    </p>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                      {course.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded-full bg-[#0A756A]/10 text-[#0A756A] flex items-center justify-center shrink-0 mt-0.5">
                            <Check size={11} strokeWidth={2.5} />
                          </div>
                          <span className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-satoshi leading-tight">
                            {h}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools Stack Chips */}
                  <div className="pt-4 border-t border-zinc-100 dark:border-white/5">
                    <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider block mb-2 font-clash">
                      Key Tools Mastered:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {course.tools.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-medium font-satoshi bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Key Details Card & Actions */}
                <div className="lg:w-72 shrink-0 flex flex-col justify-between p-6 rounded-2xl bg-slate-50 dark:bg-zinc-950/60 border border-zinc-200/60 dark:border-white/5">
                  <div className="flex flex-col gap-3.5 mb-6">
                    <div>
                      <span className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold font-clash block">
                        Duration
                      </span>
                      <span className="text-sm font-bold font-clash text-zinc-900 dark:text-white flex items-center gap-1.5 mt-0.5">
                        <Clock size={14} className="text-[#0A756A]" />
                        {course.duration}
                      </span>
                    </div>

                    <div>
                      <span className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold font-clash block">
                        Skill Level
                      </span>
                      <span className="text-sm font-bold font-clash text-zinc-900 dark:text-white flex items-center gap-1.5 mt-0.5">
                        <Award size={14} className="text-[#0A756A]" />
                        {course.level}
                      </span>
                    </div>

                    <div>
                      <span className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold font-clash block">
                        Training Delivery
                      </span>
                      <span className="text-xs text-zinc-650 dark:text-zinc-300 font-satoshi mt-0.5 block">
                        In-person Classroom at Manjeri & Live Interactive Online
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2.5">
                    <Link
                      href={course.href}
                      className="w-full h-11 rounded-xl bg-[#0A756A] hover:bg-[#129A8C] text-white font-semibold text-xs font-clash uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_20px_rgba(10,117,106,0.3)] flex items-center justify-center gap-2 group/btn cursor-pointer shadow-sm"
                    >
                      <span>Explore Program</span>
                      <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                    </Link>

                    <button
                      type="button"
                      onClick={() => handleEnrollClick(course.title)}
                      className="w-full h-10 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 hover:border-[#0A756A] text-zinc-700 dark:text-zinc-300 font-medium text-xs font-satoshi transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm hover:bg-[#0A756A]/5"
                    >
                      <MessageCircle size={13} className="text-[#0A756A]" />
                      <span>Enquire Program</span>
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* ==========================================
            LEARNING MODES BANNER
            ========================================== */}
        <div className="mb-24 md:mb-32">
          <div className="relative rounded-[32px] p-8 sm:p-10 md:p-12 bg-gradient-to-r from-[#0A756A]/10 via-white dark:via-zinc-900 to-[#14b8a6]/10 border border-[#0A756A]/20 dark:border-white/10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-left">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A756A] dark:text-emerald-400 font-clash block mb-2">
                Flexible Formats
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-clash text-zinc-900 dark:text-white mb-2">
                Available in Offline Classroom & Online Modes
              </h3>
              <p className="text-zinc-650 dark:text-zinc-400 text-sm font-satoshi leading-relaxed">
                Choose between daily in-person practical lab workstations at our Manjeri campus or live flexible online evening and weekend batches from home.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/offline-batches"
                className="h-11 px-6 rounded-xl bg-[#0A756A] text-white font-semibold text-xs font-clash uppercase tracking-wider hover:bg-[#129A8C] transition-all flex items-center gap-2 shadow-sm"
              >
                <Building size={14} />
                <span>Offline Batches</span>
              </Link>
              <Link
                href="/online-plans"
                className="h-11 px-6 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-zinc-200 font-semibold text-xs font-clash uppercase tracking-wider hover:border-[#0A756A] transition-all flex items-center gap-2 shadow-sm"
              >
                <Laptop size={14} className="text-amber-600" />
                <span>Online Plans</span>
              </Link>
              <Link
                href="/learning-modes"
                className="h-11 px-5 rounded-xl text-xs font-semibold font-clash uppercase tracking-wider text-[#0A756A] dark:text-emerald-400 hover:underline flex items-center gap-1"
              >
                <span>Compare Modes</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* ==========================================
            SUPPORTING SITE SECTIONS
            ========================================== */}
        <TrustedBy className="my-16 md:my-24" />

        <CourseExperienceAudience />

        <LeadRegistrationForm className="my-14 md:my-20 rounded-3xl" />

        {/* Bottom CTA Banner */}
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
              Talk directly with our curriculum coordinators over WhatsApp, clear doubt queries, and select the optimal course scheduling.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <button
                onClick={() => handleEnrollClick("CTA Section")}
                className="h-12 px-8 rounded-xl bg-[#0A756A] text-white font-bold text-sm transition-all duration-300 hover:bg-[#129A8C] hover:shadow-[0_0_30px_rgba(10,117,106,0.25)] dark:bg-white dark:text-zinc-950 dark:hover:bg-[#0A756A] dark:hover:text-white flex items-center justify-center gap-2 group/ctaBtn cursor-pointer shadow-md"
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
        batchType="Course Specialization"
        batchName={selectedPlan || "Digital Marketing Comprehensive Course"}
        sourcePage="Courses Hub Page"
        storageKey={`enroll-popup-marketing-courses-${selectedPlan || "general"}`}
      />
    </div>
  );
}

export function CourseDetails() {
  return <Courses defaultSection="online-programs" />;
}
