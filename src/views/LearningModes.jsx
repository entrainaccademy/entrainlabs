"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import {
  Building2,
  MonitorPlay,
  Check,
  ArrowRight,
  Sparkles,
  MapPin,
  Laptop,
  Users,
  Award,
  Clock,
  HelpCircle,
  Plus,
  Minus,
  MessageCircle,
} from "lucide-react";
import { EnrollmentFormAdvanced } from "@/components/ui/enrollment-form-advanced";
import TrustedBy from "@/components/premium/trusted-by";

const modesData = [
  {
    id: "offline",
    name: "Offline Classroom Training",
    badge: "Most Popular • In-Person",
    location: "Manjeri, Malappuram Campus",
    icon: Building2,
    accentColor: "#0A756A",
    description:
      "Experience high-intensity classroom training with hands-on agency lab workstations, direct mentor interaction, live ad budget campaigns, and daily in-person reviews.",
    link: "/offline-batches",
    buttonText: "Explore Offline Batches",
    highlights: [
      "In-person daily practical lab workstations",
      "Direct 1-on-1 mentor desk reviews",
      "Real Google & Meta ad spend budget deployment",
      "Guaranteed on-site agency internship",
      "Classroom batch strictly capped at 12–15 students",
      "Direct campus placement drives in Kerala",
    ],
    schedules: [
      "Morning: 10:00 AM – 01:00 PM",
      "Afternoon: 02:00 PM – 05:00 PM",
      "Weekend: 09:30 AM – 04:30 PM",
    ],
  },
  {
    id: "online",
    name: "Online Live & Flexible Training",
    badge: "Learn from Anywhere • Remote",
    location: "Interactive Live Classes via Zoom / Meet",
    icon: MonitorPlay,
    accentColor: "#14b8a6",
    description:
      "Attend interactive live classes from anywhere with full recording access, structured virtual workplaces, weekly doubt-clearing sprints, and continuous mentor chat support.",
    link: "/online-plans",
    buttonText: "Explore Online Plans",
    highlights: [
      "Live interactive evening & weekend cohorts",
      "Full recording archive available 24/7",
      "Virtual workplace & weekly project reviews",
      "AI marketing automation & prompt engineering",
      "Remote client project execution with real budgets",
      "100% online placement & remote job support",
    ],
    schedules: [
      "Evening Cohorts: Mon – Thu",
      "Weekend Cohorts: Sat & Sun",
      "Self-Paced with Mentor Check-ins",
    ],
  },
];

const comparisonTable = [
  { feature: "Learning Environment", offline: "Physical Agency Lab in Manjeri", online: "Live Virtual Classroom + LMS" },
  { feature: "Mentor Interaction", offline: "Face-to-face daily desk audits", online: "Live Q&A sprints & Slack/WhatsApp" },
  { feature: "Live Ad Spend Budget", offline: "Allocated in classroom labs", online: "Allocated for remote campaigns" },
  { feature: "Batch Capacity", offline: "Strictly 12–15 students / cohort", online: "Small interactive groups" },
  { feature: "Class Recordings", offline: "Included as backup archive", online: "Full HD recordings for life" },
  { feature: "Agency Internship", offline: "On-site agency workstation", online: "Virtual agency residency" },
  { feature: "Placement Support", offline: "Direct campus placement drives", online: "Dedicated online placement cell" },
  { feature: "Official Certification", offline: "Verified Institute Certificate", online: "Verified Institute Certificate" },
];

const faqs = [
  {
    question: "Can I switch between Offline and Online modes after enrolling?",
    answer:
      "Yes! We understand that life situations change. You can request a transfer between offline and online batches with approval from your curriculum coordinator, subject to seat availability.",
  },
  {
    question: "Is the curriculum identical in both offline and online modes?",
    answer:
      "Yes, both modes cover the complete curriculum including SEO, Google Ads, Meta Ads, AI marketing tools, and live projects. The only difference is the physical classroom setting versus the live interactive virtual classroom.",
  },
  {
    question: "Do online students also get to run live ad campaigns?",
    answer:
      "Absolutely. Both offline and online students receive real marketing budgets to launch and optimize actual Google and Meta ad campaigns under mentor guidance.",
  },
  {
    question: "Where is the offline campus located in Kerala?",
    answer:
      "Our state-of-the-art offline training center is located at Vemboor, Manjeri, Malappuram, Kerala (PIN 676122). The facility features high-speed air-conditioned labs, modern workstations, and high-speed fiber internet.",
  },
];

export default function LearningModes() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [selectedMode, setSelectedMode] = useState("Offline Classroom Batch");
  const [openFAQIndex, setOpenFAQIndex] = useState(null);

  const handleEnrollClick = (modeName) => {
    setSelectedMode(modeName);
    setIsEnrollOpen(true);
  };

  const toggleFAQ = (idx) => {
    setOpenFAQIndex((prev) => (prev === idx ? null : idx));
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
      <div className="absolute top-[40%] right-[-10%] w-[700px] h-[700px] rounded-full bg-[#0A756A]/4 dark:bg-[#0A756A]/6 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[15%] w-[550px] h-[550px] rounded-full bg-[#0A756A]/5 dark:bg-[#0A756A]/8 blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10 py-10 md:py-16">
        {/* Breadcrumb Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-zinc-200/60 dark:border-white/5">
          <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-2 text-xs md:text-sm text-zinc-500 dark:text-zinc-400 font-satoshi">
            <Link href="/" className="hover:text-[#0A756A] transition-colors">
              Home
            </Link>
            <span className="text-zinc-400">/</span>
            <span className="text-[#0A756A] dark:text-emerald-400 font-medium">Learning Modes</span>
          </nav>

          <Link
            href="/courses"
            className="inline-flex items-center gap-1.5 text-xs md:text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-[#0A756A] dark:hover:text-emerald-400 transition-colors w-fit group"
          >
            <span>Explore all courses</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Hero Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A756A]/10 border border-[#0A756A]/20 text-[#0A756A] dark:text-emerald-400 text-xs font-semibold font-clash uppercase tracking-wider mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0A756A] dark:text-emerald-400" />
            <span>Flexible Learning Pathways</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-clash tracking-tight text-zinc-950 dark:text-white leading-[1.15] mb-6"
          >
            Choose Your Ideal{" "}
            <span className="bg-gradient-to-r from-zinc-900 via-[#0A756A] to-[#129A8C] dark:from-white dark:via-emerald-300 dark:to-[#0A756A] bg-clip-text text-transparent">
              Learning Mode
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-650 dark:text-zinc-300 text-base sm:text-lg leading-relaxed font-satoshi font-normal max-w-3xl mb-8"
          >
            Whether you thrive in an in-person agency lab setting in Manjeri or prefer the flexibility of live online cohorts from home, Entrain Labs delivers 100% practical, mentor-led education.
          </motion.p>
        </div>

        {/* Two Learning Mode Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 md:mb-32">
          {modesData.map((mode, idx) => {
            const Icon = mode.icon;
            return (
              <motion.div
                key={mode.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                onMouseMove={handleMouseMove}
                className="group relative rounded-[32px] p-[1px] bg-gradient-to-b from-zinc-200/80 via-zinc-200/20 to-transparent dark:from-white/10 dark:via-zinc-800/50 dark:to-transparent overflow-hidden shadow-sm dark:shadow-none"
              >
                <div className="relative h-full bg-white/80 dark:bg-zinc-900/40 backdrop-blur-2xl rounded-[31px] p-8 md:p-12 flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#0A756A]/5 dark:bg-[#0A756A]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#0A756A]/15 transition-colors duration-500" />

                  <div>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold font-clash bg-[#0A756A]/10 text-[#0A756A] dark:text-emerald-400 border border-[#0A756A]/20 mb-6">
                      <Icon className="w-3.5 h-3.5" />
                      <span>{mode.badge}</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold font-clash text-zinc-900 dark:text-white mb-3">
                      {mode.name}
                    </h2>

                    <div className="flex items-center gap-2 text-xs text-zinc-500 font-satoshi mb-6">
                      <MapPin size={14} className="text-[#0A756A]" />
                      <span>{mode.location}</span>
                    </div>

                    <p className="text-zinc-650 dark:text-zinc-300 text-sm md:text-base font-satoshi leading-relaxed mb-8">
                      {mode.description}
                    </p>

                    {/* Features List */}
                    <div className="flex flex-col gap-3 mb-8 pb-8 border-b border-zinc-200/80 dark:border-white/5">
                      {mode.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#0A756A]/10 border border-[#0A756A]/20 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 text-[#0A756A]" />
                          </div>
                          <span className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 font-satoshi leading-snug">
                            {h}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Schedules */}
                    <div className="mb-8">
                      <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-3 font-clash">
                        Available Schedules:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {mode.schedules.map((s, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-lg text-xs font-medium font-satoshi bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Link
                      href={mode.link}
                      className="flex-1 h-12 rounded-xl bg-[#0A756A] text-white font-semibold text-sm transition-all duration-300 hover:bg-[#129A8C] hover:shadow-[0_0_30px_rgba(10,117,106,0.25)] dark:bg-white dark:text-zinc-950 dark:hover:bg-[#0A756A] dark:hover:text-white flex items-center justify-center gap-2 group/btn cursor-pointer shadow-sm"
                    >
                      <span>{mode.buttonText}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>

                    <button
                      onClick={() => handleEnrollClick(mode.name)}
                      className="h-12 px-5 rounded-xl border border-zinc-200 dark:border-white/10 hover:border-[#0A756A] text-zinc-700 dark:text-zinc-300 text-xs font-semibold font-clash uppercase tracking-wider hover:bg-[#0A756A]/5 transition-colors cursor-pointer"
                    >
                      Quick Enroll
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <section className="mb-24 md:mb-32">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A756A] dark:text-emerald-400 font-clash block mb-2">
              Side-by-Side Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-clash text-zinc-950 dark:text-white mb-4">
              Compare Learning Modes
            </h2>
            <p className="text-zinc-650 dark:text-zinc-400 text-sm sm:text-base font-satoshi leading-relaxed">
              Find the perfect balance of flexibility, mentorship, and practical lab experience.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200/80 dark:border-white/10 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-zinc-200/80 dark:border-white/10 bg-zinc-50/50 dark:bg-zinc-800/40 text-xs font-bold uppercase font-clash text-zinc-600 dark:text-zinc-300 tracking-wider">
                    <th className="py-4 px-6">Feature</th>
                    <th className="py-4 px-6 text-[#0A756A] dark:text-emerald-400">Offline Classroom</th>
                    <th className="py-4 px-6 text-zinc-700 dark:text-zinc-200">Online Live</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-white/5 text-xs sm:text-sm font-satoshi">
                  {comparisonTable.map((row, idx) => (
                    <tr
                      key={idx}
                      className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/20 transition-colors"
                    >
                      <td className="py-4 px-6 font-semibold text-zinc-900 dark:text-white">
                        {row.feature}
                      </td>
                      <td className="py-4 px-6 text-zinc-700 dark:text-zinc-300">
                        {row.offline}
                      </td>
                      <td className="py-4 px-6 text-zinc-700 dark:text-zinc-300">
                        {row.online}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Partners */}
        <TrustedBy className="my-16 md:my-24" />

        {/* FAQs */}
        <section className="mb-24 md:mb-32 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A756A] dark:text-emerald-400 font-clash block mb-2">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-clash text-zinc-950 dark:text-white mb-3">
              Learning Modes FAQ
            </h2>
            <p className="text-zinc-650 dark:text-zinc-400 text-xs sm:text-sm font-satoshi max-w-md mx-auto">
              Have doubts about which learning mode matches your availability? Here are straight answers.
            </p>
          </div>

          <div className="flex flex-col gap-3.5">
            {faqs.map((item, idx) => {
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
                        isOpen ? "rotate-180 bg-[#0A756A]/10 text-[#0A756A]" : ""
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[32px] overflow-hidden border border-zinc-200/80 dark:border-white/10 bg-gradient-to-br from-white via-zinc-50 to-zinc-100/50 dark:from-zinc-900/80 dark:via-zinc-950 dark:to-zinc-900/50 p-8 sm:p-12 md:p-16 text-center shadow-lg"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#0A756A]/8 dark:bg-[#0A756A]/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-clash text-zinc-950 dark:text-white tracking-tight leading-tight mb-4">
              Need Help Choosing the Right Mode?
            </h2>

            <p className="text-zinc-650 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mb-8 max-w-lg font-satoshi">
              Connect directly with our admissions counselor on WhatsApp. We will evaluate your schedule and recommend the best cohort for your career goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto justify-center">
              <button
                onClick={() => handleEnrollClick("Learning Modes Coordinator Consultation")}
                className="h-12 px-8 rounded-xl bg-[#0A756A] hover:bg-[#129A8C] text-white font-bold text-sm transition-all duration-300 hover:shadow-[0_0_30px_rgba(10,117,106,0.3)] dark:bg-white dark:text-zinc-950 dark:hover:bg-[#0A756A] dark:hover:text-white flex items-center justify-center gap-2 group cursor-pointer shadow-md"
              >
                <span>Consult Counselor</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => handleEnrollClick("Learning Modes Enquire Now")}
                className="h-12 px-7 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 hover:border-[#0A756A] dark:hover:border-[#0A756A] text-zinc-800 dark:text-zinc-200 font-semibold text-sm transition-all duration-300 hover:bg-[#0A756A]/5 dark:hover:bg-[#0A756A]/10 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#0A756A]" />
                <span>Enquire Now</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <EnrollmentFormAdvanced
        open={isEnrollOpen}
        onOpenChange={setIsEnrollOpen}
        batchType="Learning Mode Consultation"
        batchName={selectedMode}
        sourcePage="Learning Modes Page"
      />
    </div>
  );
}

