"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import {
  GraduationCap,
  Building,
  Laptop,
  Check,
  ArrowRight,
  Clock,
  Calendar,
  MapPin,
  Sparkles,
  ShieldCheck,
  Award,
  ChevronDown,
  Phone,
  MessageCircle,
  CheckCircle2,
  Zap,
  BookOpen,
  TrendingUp,
  Target,
  Briefcase,
  Users,
  Compass,
  Cpu,
  Monitor,
  Flame,
  ArrowUpRight
} from "lucide-react";
import { EnrollmentFormAdvanced } from "@/components/ui/enrollment-form-advanced";
import TrustedBy from "@/components/premium/trusted-by";

// Batch schedules data
const offlineBatchesData = [
  {
    id: "weekday-morning",
    title: "Weekday Regular (Morning Batch)",
    tag: "Most Popular",
    timing: "10:00 AM – 01:00 PM",
    days: "Monday to Friday",
    duration: "4 Months",
    seatsTotal: 15,
    seatsLeft: 4,
    status: "Admissions Open",
    startDate: "Starts 1st of Next Month",
    targetAudience: "Graduates, Job Seekers & Career Changers",
    highlights: [
      "Daily 3-Hour In-Person Practical Lab",
      "Live Ad Spend Budget Allocation",
      "1-on-1 Mentor Desk Reviews",
      "Guaranteed Agency Internship",
      "100% Placement Drive Access"
    ]
  },
  {
    id: "weekday-afternoon",
    title: "Weekday Focus (Afternoon Batch)",
    tag: "Fast Filling",
    timing: "02:00 PM – 05:00 PM",
    days: "Monday to Friday",
    duration: "4 Months",
    seatsTotal: 15,
    seatsLeft: 6,
    status: "Filling Fast",
    startDate: "Starts 15th of Next Month",
    targetAudience: "College Students, Freelancers & Marketers",
    highlights: [
      "Afternoon Practical Strategy Labs",
      "Meta & Google Campaign Optimization",
      "AI Automation & Prompt Workflows",
      "Portfolio & Live Client Case Studies",
      "Dedicated Resume & Mock Interviews"
    ]
  },
  {
    id: "weekend-executive",
    title: "Weekend Executive Masterclass",
    tag: "For Professionals",
    timing: "09:30 AM – 04:30 PM",
    days: "Saturday & Sunday",
    duration: "4.5 Months",
    seatsTotal: 12,
    seatsLeft: 3,
    status: "Only 3 Seats Left",
    startDate: "Upcoming Weekend Cohort",
    targetAudience: "Working Professionals & Entrepreneurs",
    highlights: [
      "Full-Day Intensive Classroom Sessions",
      "Growth Strategy & ROI Performance",
      "Direct Brand Campaign Management",
      "Networking with Industry Peers",
      "Lifetime Mentor Consultation"
    ]
  }
];

// Offline Lab Advantages
const offlinePerks = [
  {
    icon: Monitor,
    title: "Dedicated Agency Workstation",
    description:
      "Sit at modern, high-spec workstations setup with premium SEO suites, analytics dashboards, and design tools. Learn in a real agency atmosphere."
  },
  {
    icon: Users,
    title: "Direct 1-on-1 Mentor Guidance",
    description:
      "No waiting for email replies. Senior digital marketing directors guide you directly over your shoulder, auditing your ad sets and code live."
  },
  {
    icon: TrendingUp,
    title: "Live Budget Ad Campaigns",
    description:
      "Manage real money ad budgets on Google Ads and Meta Ads. Master bidding, conversion tracking, pixel diagnostics, and ROAS optimization hands-on."
  },
  {
    icon: Cpu,
    title: "AI Tools & Prompt Engineering Lab",
    description:
      "Harness generative AI for copywriting, creative asset generation, search engine content clustering, and automated lead nurturing."
  },
  {
    icon: Briefcase,
    title: "In-House Agency Internship",
    description:
      "Work on live client deliverables under our agency division. Build an unassailable portfolio before you face corporate interviews."
  },
  {
    icon: Award,
    title: "Campus Placement Drives",
    description:
      "Exclusive recruitment access with leading marketing agencies and tech firms across Kerala and Bangalore. Comprehensive interview prep included."
  }
];

// Offline Curriculum Modules
const curriculumModules = [
  {
    number: "01",
    title: "Foundation & Brand Positioning",
    topics: [
      "Digital Marketing Fundamentals & Funnel Architecture",
      "Audience Personas & Customer Journey Mapping",
      "Website Architecture & Conversion-Centric Landing Pages",
      "WordPress, Web Hosting & Basic Analytics Setup"
    ]
  },
  {
    number: "02",
    title: "Search Engine Optimization (SEO) & Web Audits",
    topics: [
      "Keyword Research & Semantic Topic Clusters",
      "Technical SEO Audits & Crawl Budget Optimization",
      "On-Page Content Optimization & Schema Markup",
      "High-Authority Link Building & Google Search Console"
    ]
  },
  {
    number: "03",
    title: "Google Ads & Performance Search Marketing",
    topics: [
      "Search, Display, Performance Max & Video/YouTube Ads",
      "Smart Bidding Strategies & Negative Keyword Architecture",
      "Google Tag Manager (GTM) & GA4 Event Tracking",
      "Remarketing Sequences & Conversion Rate Optimization (CRO)"
    ]
  },
  {
    number: "04",
    title: "Meta Ads & Social Media Growth Engine",
    topics: [
      "Facebook & Instagram Ads Manager Mastery",
      "Meta Pixel, Conversions API (CAPI) & Custom Audiences",
      "Advantage+ Campaigns, Lookalikes & Budget Scaling",
      "High-Converting Ad Creatives & UGC Strategy"
    ]
  },
  {
    number: "05",
    title: "AI Marketing & Workflow Automation",
    topics: [
      "Prompt Engineering for Copywriting & Ad Variations",
      "AI Graphic & Video Asset Production (Canva, Midjourney)",
      "Zapier, Make.com & CRM Lead Integration",
      "Automated Email Sequencing & WhatsApp Lead Bots"
    ]
  },
  {
    number: "06",
    title: "Agency Capstone, Portfolio & Placement",
    topics: [
      "Executing End-to-End Live Client Campaigns",
      "Performance Reporting & Client Presentation Pitching",
      "Industry-Ready Portfolio & GitHub/Notion Case Studies",
      "Mock Technical Interviews & Direct Campus Hiring"
    ]
  }
];

// Offline FAQs
const offlineFaqs = [
  {
    question: "Where is the Entrain Labs offline training center located?",
    answer:
      "Our state-of-the-art campus is conveniently located at Vemboor, Manjeri, Malappuram, Kerala (PIN 676121). The center features high-speed air-conditioned labs, modern workstations, high-speed fiber internet, and a collaborative discussion lounge."
  },
  {
    question: "What is the batch size for the offline classroom sessions?",
    answer:
      "To ensure deep personalized attention and hands-on guidance, each offline batch is strictly capped at 12 to 15 students only. Every student gets dedicated desk time and one-on-one reviews with mentors."
  },
  {
    question: "What are the timings and schedules available?",
    answer:
      "We offer three flexible cohorts: Weekday Morning (10:00 AM – 1:00 PM), Weekday Afternoon (2:00 PM – 5:00 PM), and Weekend Executive (Saturday & Sunday 9:30 AM – 4:30 PM). You can pick the slot that fits your schedule."
  },
  {
    question: "Do I need a technical background or prior coding knowledge?",
    answer:
      "No technical or coding background is required. We start from the ground up, teaching you everything step-by-step with practical hands-on examples, tool walk-throughs, and guided mentorship."
  },
  {
    question: "Will I get to run campaigns with real ad budgets?",
    answer:
      "Yes! Entrain Labs is committed to practical learning. Students run real Google and Meta ad campaigns with actual budget allocation, learning live optimization, keyword bidding, conversion tracking, and analytics firsthand."
  },
  {
    question: "How does the placement support work for offline students?",
    answer:
      "Offline students receive comprehensive 100% placement assistance, which includes live resume revamping, portfolio creation with real client case studies, mock interview sessions with agency founders, and direct interview placement drives with our hiring partners."
  },
  {
    question: "What happens if I miss an offline class?",
    answer:
      "Every offline classroom session is backed up with recorded class access, slide decks, and step-by-step practical guides. Plus, you can sit with our mentors during lab hours for dedicated doubt-clearing sessions."
  },
  {
    question: "Are flexible fee installment options available?",
    answer:
      "Yes, we offer flexible, no-cost installment payment structures to make high-quality practical education accessible. Contact our admissions team for customized installment plans and early-bird fee discounts."
  }
];

export default function OfflineBatches() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState("Weekday Regular (Morning Batch)");
  const [activeFaq, setActiveFaq] = useState(0);

  const handleEnrollClick = (batchName) => {
    setSelectedBatch(batchName || "Offline Classroom");
    setIsEnrollOpen(true);
  };

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleWhatsAppChat = (batchName = "Offline Batches") => {
    const text = encodeURIComponent(
      `Hi Entrain Labs, I would like to inquire about the ${batchName} offline classroom training in Manjeri, Malappuram.`
    );
    window.open(`https://wa.me/917593841013?text=${text}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-[#0A756A]/20 selection:text-[#0A756A] overflow-x-hidden">
      
      {/* BACKGROUND AMBIENT GLOWS */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#0A756A]/10 via-[#0A756A]/5 to-transparent blur-[140px] rounded-full" />
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-[#0A756A]/5 blur-[160px] rounded-full" />
        <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-[#129A8C]/5 blur-[160px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        
        {/* ==========================================
            BREADCRUMBS & TOP NAV
            ========================================== */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs md:text-sm text-zinc-500 dark:text-zinc-400 font-satoshi">
          <Link href="/" className="hover:text-[#0A756A] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/courses" className="hover:text-[#0A756A] transition-colors">
            Courses
          </Link>
          <span>/</span>
          <span className="text-[#0A756A] font-medium">Offline Batches</span>
        </nav>

        {/* ==========================================
            SECTION 1: HERO SECTION
            ========================================== */}
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-28">
          {/* Top Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#0A756A]/10 border border-[#0A756A]/20 text-[#0A756A] dark:text-[#129A8C] text-xs md:text-sm font-medium mb-6 backdrop-blur-md shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-[#0A756A] animate-ping" />
            <span className="font-outfit">In-Person Classroom Training • Manjeri, Malappuram</span>
          </motion.div>

          {/* Primary H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold font-clash tracking-tight text-zinc-900 dark:text-white leading-[1.15] mb-6"
          >
            Master Digital Marketing In-Person with{" "}
            <span className="bg-gradient-to-r from-zinc-900 via-[#0A756A] to-[#129A8C] dark:from-white dark:via-emerald-300 dark:to-[#0A756A] bg-clip-text text-transparent">
              Practical Agency Labs
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-300 font-satoshi font-light leading-relaxed max-w-3xl mx-auto mb-10"
          >
            Experience true hands-on learning at our Manjeri campus. Execute live ad spend campaigns, work on dedicated workstations, receive over-the-shoulder 1-on-1 mentor guidance, and graduate with a verified agency portfolio.
          </motion.p>

          {/* Key Quick Highlight Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10 text-xs sm:text-sm font-satoshi font-medium"
          >
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-zinc-200">
              <Building className="w-4 h-4 text-[#0A756A]" />
              <span>Dedicated Lab Workstation</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-zinc-200">
              <Users className="w-4 h-4 text-[#0A756A]" />
              <span>Strictly 12-15 Seats / Batch</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-zinc-200">
              <TrendingUp className="w-4 h-4 text-[#0A756A]" />
              <span>Live Ad Spend Campaigns</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-white/10 text-zinc-800 dark:text-zinc-200">
              <Award className="w-4 h-4 text-[#0A756A]" />
              <span>100% Placement Drive Access</span>
            </div>
          </motion.div>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
          >
            <button
              onClick={() => handleEnrollClick("Offline Classroom Hero")}
              className="w-full sm:w-auto h-13 px-8 rounded-xl bg-[#0A756A] text-white font-medium font-outfit text-sm transition-all duration-300 hover:bg-[#129A8C] hover:shadow-[0_0_30px_rgba(10,117,106,0.3)] dark:bg-white dark:text-zinc-950 dark:hover:bg-[#0A756A] dark:hover:text-white flex items-center justify-center gap-2 group cursor-pointer shadow-md"
            >
              <span>Apply for Next Offline Batch</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => handleWhatsAppChat("Admissions")}
              className="w-full sm:w-auto h-13 px-6 rounded-xl border border-zinc-300 dark:border-zinc-800 hover:border-[#0A756A] dark:hover:border-[#0A756A] bg-zinc-50 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 font-medium font-outfit text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#0A756A]" />
              <span>WhatsApp Counselor</span>
            </button>
          </motion.div>
        </div>

        {/* ==========================================
            STATS TICKER / REPUTATION BANNER
            ========================================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-24 md:mb-32">
          {[
            { label: "Practical Lab Focus", value: "100%", sub: "Hands-on execution" },
            { label: "Max Cohort Size", value: "15", sub: "Students per batch" },
            { label: "Premium AI Tools", value: "15+", sub: "Industry-grade suites" },
            { label: "Placement Assistance", value: "100%", sub: "Agency & tech hiring" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-zinc-200/80 dark:border-white/5 bg-gradient-to-b from-zinc-50/50 to-white dark:from-zinc-900/40 dark:to-zinc-900/10 text-center shadow-sm"
            >
              <div className="text-3xl md:text-4xl font-bold font-clash text-[#0A756A] dark:text-emerald-400 mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-zinc-900 dark:text-white font-outfit">
                {stat.label}
              </div>
              <div className="text-xs text-zinc-500 dark:text-zinc-400 font-satoshi mt-0.5">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ==========================================
            SECTION 2: UPCOMING BATCHES & SCHEDULES
            ========================================== */}
        <div id="batch-schedules" className="mb-28 md:mb-36 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#0A756A] text-xs md:text-sm font-semibold uppercase tracking-widest font-outfit">
              Upcoming Cohorts
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-clash tracking-tight text-zinc-900 dark:text-white mt-2 mb-4">
              Select Your Preferred Batch Schedule
            </h2>
            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-satoshi">
              Seats are strictly limited to 12–15 learners per cohort to maintain individualized workstation mentoring. Reserve your seat early.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {offlineBatchesData.map((batch, index) => {
              const seatPercentage = Math.round(((batch.seatsTotal - batch.seatsLeft) / batch.seatsTotal) * 100);

              return (
                <motion.div
                  key={batch.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -6 }}
                  onMouseMove={handleMouseMove}
                  className="group relative rounded-[28px] p-[1px] bg-gradient-to-b from-zinc-200/90 via-zinc-200/30 to-transparent dark:from-white/15 dark:via-zinc-800/40 dark:to-transparent flex flex-col justify-between shadow-sm dark:shadow-none overflow-hidden"
                >
                  {/* Spotlight hover effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: "radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(10, 117, 106, 0.08), transparent 80%)"
                    }}
                  />

                  <div className="relative h-full bg-white/95 dark:bg-zinc-900/50 backdrop-blur-2xl rounded-[27px] p-6 sm:p-8 flex flex-col justify-between">
                    <div>
                      {/* Top Tag & Status */}
                      <div className="flex items-center justify-between gap-2 mb-6">
                        <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#0A756A]/10 text-[#0A756A] dark:text-[#129A8C] border border-[#0A756A]/20">
                          {batch.tag}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400 font-medium">
                          <Flame className="w-3.5 h-3.5" />
                          <span>{batch.seatsLeft} seats remaining</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl md:text-2xl font-semibold font-outfit text-zinc-900 dark:text-white mb-2">
                        {batch.title}
                      </h3>

                      <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 font-satoshi mb-6">
                        Targeted for: <strong className="text-zinc-700 dark:text-zinc-200 font-medium">{batch.targetAudience}</strong>
                      </p>

                      {/* Batch Timing Meta Box */}
                      <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-200/70 dark:border-white/5 mb-6 space-y-3">
                        <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 font-satoshi">
                          <Clock className="w-4 h-4 text-[#0A756A] shrink-0" />
                          <span><strong>Time:</strong> {batch.timing}</span>
                        </div>
                        <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 font-satoshi">
                          <Calendar className="w-4 h-4 text-[#0A756A] shrink-0" />
                          <span><strong>Days:</strong> {batch.days}</span>
                        </div>
                        <div className="flex items-center gap-3 text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 font-satoshi">
                          <Sparkles className="w-4 h-4 text-[#0A756A] shrink-0" />
                          <span><strong>Duration:</strong> {batch.duration}</span>
                        </div>
                      </div>

                      {/* Seat Progress Bar */}
                      <div className="mb-6">
                        <div className="flex justify-between text-xs text-zinc-500 dark:text-zinc-400 mb-1.5 font-satoshi">
                          <span>Cohort Capacity ({batch.seatsTotal - batch.seatsLeft}/{batch.seatsTotal} Filled)</span>
                          <span className="font-semibold text-zinc-800 dark:text-zinc-200">{seatPercentage}%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#0A756A] to-[#129A8C] rounded-full transition-all duration-500"
                            style={{ width: `${seatPercentage}%` }}
                          />
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-3 mb-8 pt-4 border-t border-zinc-200/70 dark:border-white/5">
                        <p className="text-xs uppercase font-semibold text-zinc-400 font-outfit tracking-wider">
                          What You Get in this Batch:
                        </p>
                        {batch.highlights.map((h, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-zinc-700 dark:text-zinc-300 font-satoshi">
                            <div className="w-4 h-4 rounded-full bg-[#0A756A]/10 text-[#0A756A] flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3 h-3" />
                            </div>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Button */}
                    <button
                      onClick={() => handleEnrollClick(batch.title)}
                      className="w-full h-12 rounded-xl bg-[#0A756A] text-white font-medium font-outfit text-sm transition-all duration-300 hover:bg-[#129A8C] hover:shadow-[0_0_25px_rgba(10,117,106,0.3)] dark:bg-white dark:text-zinc-950 dark:hover:bg-[#0A756A] dark:hover:text-white flex items-center justify-center gap-2 group/btn cursor-pointer"
                    >
                      <span>Reserve Seat for {batch.title.split("(")[0]}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ==========================================
            SECTION 3: THE OFFLINE LAB ADVANTAGE
            ========================================== */}
        <div className="mb-28 md:mb-36">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#0A756A] text-xs md:text-sm font-semibold uppercase tracking-widest font-outfit">
              The Entrain Advantage
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-clash tracking-tight text-zinc-900 dark:text-white mt-2 mb-4">
              Why In-Person Classroom Training Wins
            </h2>
            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-satoshi">
              Online courses often suffer from low completion and lack of direct campaign auditing. Our offline agency campus guarantees immersion and accelerated career growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offlinePerks.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-8 rounded-2xl border border-zinc-200/80 dark:border-white/5 bg-white dark:bg-zinc-900/40 hover:border-[#0A756A]/40 dark:hover:border-[#0A756A]/40 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#0A756A]/10 border border-[#0A756A]/20 flex items-center justify-center text-[#0A756A] mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold font-outfit text-zinc-900 dark:text-white mb-2">
                    {perk.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 font-satoshi leading-relaxed">
                    {perk.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ==========================================
            SECTION 4: OFFLINE CURRICULUM MODULES
            ========================================== */}
        <div className="mb-28 md:mb-36">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#0A756A] text-xs md:text-sm font-semibold uppercase tracking-widest font-outfit">
              Hands-On Syllabus
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-clash tracking-tight text-zinc-900 dark:text-white mt-2 mb-4">
              Comprehensive 6-Pillar Practical Roadmap
            </h2>
            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-satoshi">
              Every single module involves practical workstation labs, live tools setup, campaign creation, and audit reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curriculumModules.map((mod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-7 rounded-2xl border border-zinc-200/80 dark:border-white/5 bg-zinc-50/50 dark:bg-zinc-900/30 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold font-clash text-[#0A756A] opacity-70">
                      {mod.number}
                    </span>
                    <span className="text-[11px] font-medium px-2.5 py-1 rounded bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      Module {mod.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold font-outfit text-zinc-900 dark:text-white mb-4">
                    {mod.title}
                  </h3>

                  <ul className="space-y-2.5 mb-6">
                    {mod.topics.map((t, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] text-zinc-600 dark:text-zinc-400 font-satoshi">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0A756A] shrink-0 mt-0.5" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ==========================================
            TRUSTED TOOLS SECTION MARQUEE
            ========================================== */}
        <div className="mb-28 md:mb-36">
          <TrustedBy />
        </div>

        {/* ==========================================
            SECTION 5: CAMPUS & LAB EXPERIENCE / LOCATION
            ========================================== */}
        <div className="mb-28 md:mb-36">
          <div className="rounded-[32px] p-8 md:p-14 border border-zinc-200/80 dark:border-white/10 bg-gradient-to-br from-zinc-50 via-white to-[#0A756A]/5 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/30 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A756A]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
              <div>
                <span className="text-[#0A756A] text-xs md:text-sm font-semibold uppercase tracking-widest font-outfit">
                  Campus & Center Location
                </span>
                <h2 className="text-2xl sm:text-4xl font-bold font-clash tracking-tight text-zinc-900 dark:text-white mt-2 mb-4">
                  Visit Our High-Tech Campus in Manjeri, Malappuram
                </h2>
                <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-satoshi leading-relaxed mb-8">
                  Step into our modern collaborative learning center. Equipped with high-speed fiber internet, dual-monitor mentor review stations, presentation lounge, and agency breakout spaces.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3.5 text-sm text-zinc-700 dark:text-zinc-300 font-satoshi">
                    <div className="w-9 h-9 rounded-lg bg-[#0A756A]/10 text-[#0A756A] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-zinc-900 dark:text-white font-medium">Campus Address:</strong>
                      <span>Entrain Labs, Vemboor, Manjeri, Malappuram, Kerala 676121</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 text-sm text-zinc-700 dark:text-zinc-300 font-satoshi">
                    <div className="w-9 h-9 rounded-lg bg-[#0A756A]/10 text-[#0A756A] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-zinc-900 dark:text-white font-medium">Campus Operating Hours:</strong>
                      <span>Monday to Saturday: 9:00 AM – 6:30 PM (Sunday Lab Access for Weekend Cohorts)</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 text-sm text-zinc-700 dark:text-zinc-300 font-satoshi">
                    <div className="w-9 h-9 rounded-lg bg-[#0A756A]/10 text-[#0A756A] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-zinc-900 dark:text-white font-medium">Admissions Helpline:</strong>
                      <a href="tel:+917593841013" className="hover:text-[#0A756A] transition-colors">
                        +91 75938 41013
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => handleEnrollClick("Campus Visit Request")}
                    className="h-12 px-6 rounded-xl bg-[#0A756A] text-white font-medium font-outfit text-sm transition-all duration-300 hover:bg-[#129A8C] shadow-md hover:shadow-[0_0_20px_rgba(10,117,106,0.3)] flex items-center gap-2 cursor-pointer"
                  >
                    <span>Book a Free Campus Tour</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <a
                    href="https://maps.google.com/?q=Manjeri+Malappuram+Kerala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 px-6 rounded-xl border border-zinc-300 dark:border-zinc-800 hover:border-[#0A756A] bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 font-medium font-outfit text-sm transition-all duration-300 flex items-center gap-2"
                  >
                    <Compass className="w-4 h-4 text-[#0A756A]" />
                    <span>Get Directions on Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Campus Feature Badges Visual Container */}
              <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-zinc-950/80 border border-zinc-200/80 dark:border-white/5 shadow-md">
                <h3 className="text-base font-semibold font-outfit text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#0A756A]" />
                  <span>Classroom & Lab Infrastructure Amenities</span>
                </h3>

                <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-satoshi">
                  {[
                    "Ergonomic Workstations",
                    "High-Speed Fiber Wi-Fi",
                    "Air-Conditioned Labs",
                    "Dual-Screen Projectors",
                    "Breakout Discussion Rooms",
                    "Coffee & Refreshment Bar",
                    "Free Parking Facility",
                    "Library & Resource Access"
                  ].map((amenity, i) => (
                    <div key={i} className="flex items-center gap-2 p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-white/5">
                      <div className="w-2 h-2 rounded-full bg-[#0A756A]" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-xl bg-[#0A756A]/5 border border-[#0A756A]/15 text-xs text-zinc-600 dark:text-zinc-400 font-satoshi">
                  💡 <strong className="text-zinc-900 dark:text-white">Trial Demo Class:</strong> Attend an in-person demo session before final enrollment to experience the teaching methodology firsthand.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            SECTION 6: FREQUENTLY ASKED QUESTIONS (FAQ)
            ========================================== */}
        <div className="mb-28 md:mb-36 max-w-4xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-[#0A756A] text-xs md:text-sm font-semibold uppercase tracking-widest font-outfit">
              Have Questions?
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold font-clash tracking-tight text-zinc-900 dark:text-white mt-2 mb-4">
              Frequently Asked Questions About Offline Batches
            </h2>
            <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 font-satoshi">
              Everything you need to know about joining our in-person classroom programs in Kerala.
            </p>
          </div>

          <div className="space-y-4">
            {offlineFaqs.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-zinc-200/80 dark:border-white/5 bg-white dark:bg-zinc-900/40 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-outfit font-medium text-base md:text-lg text-zinc-900 dark:text-white focus:outline-none cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#0A756A] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm md:text-[15px] text-zinc-600 dark:text-zinc-400 font-satoshi leading-relaxed border-t border-zinc-100 dark:border-white/5 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* ==========================================
            SECTION 7: BOTTOM HIGH-CONVERSION CTA
            ========================================== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[32px] overflow-hidden border border-zinc-200/80 dark:border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 text-white p-8 sm:p-14 text-center shadow-xl"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#0A756A]/20 blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-emerald-300 text-xs font-semibold uppercase tracking-wider mb-4">
              Admissions Open for Next Month
            </span>

            <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold font-clash tracking-tight leading-tight mb-4">
              Ready to Step into Our Classroom in Manjeri?
            </h3>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8 max-w-lg font-satoshi">
              Speak directly with our senior instructors, schedule a campus visit, and secure your workstation seat before slots close.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <button
                onClick={() => handleEnrollClick("Bottom CTA Offline")}
                className="h-13 px-8 rounded-xl bg-white text-zinc-950 hover:bg-[#0A756A] hover:text-white font-medium font-outfit text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(10,117,106,0.4)] flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Enroll in Offline Batch</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => handleWhatsAppChat("Bottom CTA")}
                className="h-13 px-7 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-medium font-outfit text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat with Admissions</span>
              </button>
            </div>
          </div>
        </motion.div>

      </div>

      {/* ENROLLMENT ADVANCED MODAL */}
      <EnrollmentFormAdvanced
        open={isEnrollOpen}
        onOpenChange={setIsEnrollOpen}
        storageKey={`enroll-popup-offline-batches-${selectedBatch.toLowerCase().replace(/\s+/g, "-")}`}
      />

    </div>
  );
}
