"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { EnrollmentFormAdvanced } from "@/components/ui/enrollment-form-advanced";
import TrustedBy from "@/components/premium/trusted-by";

// ==========================================
// PRICING DATA
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
      "Certificate",
    ],
    popular: false,
  },
  {
    id: "career-track",
    name: "Career Track",
    badge: "Most Popular",
    duration: "4 Months",
    perfectFor: "Students & Job Seekers",
    description:
      "Build an agency-ready portfolio, learn from client briefs, and master modern AI marketing automation.",
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
      "Certificate",
    ],
    popular: true,
  },
  {
    id: "pro-master",
    name: "Pro Master",
    badge: "Premium",
    duration: "4 Months",
    perfectFor: "Professionals & Freelancers",
    description:
      "Get 1-on-1 mentorship, advanced growth strategies, personal branding, and lifetime premium support.",
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
      "Certificate",
    ],
    popular: false,
  },
];

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function OnlinePlans() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const handleEnrollClick = (planName) => {
    setSelectedPlan(planName);
    setIsEnrollOpen(true);
  };

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

      {/* ==========================================
          ONLINE TRAINING PROGRAMS (PRICING)
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
                className={`group relative rounded-3xl p-[1px] flex flex-col justify-between overflow-hidden transition-all duration-500 shadow-sm dark:shadow-none ${
                  isPopular
                    ? "bg-gradient-to-b from-[#0A756A] via-[#0A756A]/40 to-transparent lg:scale-105 z-20 shadow-[0_20px_50px_rgba(10,117,106,0.08)] dark:shadow-[0_20px_50px_rgba(10,117,106,0.15)]"
                    : "bg-gradient-to-b from-zinc-200/80 via-zinc-150 to-transparent dark:from-white/10 dark:via-zinc-900/50 dark:to-transparent"
                }`}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: isPopular
                      ? "radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(10, 117, 106, 0.12), transparent 80%)"
                      : "radial-gradient(400px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(10, 117, 106, 0.08), transparent 80%)",
                  }}
                />

                {isPopular && (
                  <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#0A756A]/10 dark:bg-[#0A756A]/20 blur-3xl pointer-events-none" />
                )}

                <div className="relative h-full bg-white dark:bg-zinc-950/90 backdrop-blur-2xl rounded-[23px] p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <span
                        className={`text-[10px] tracking-wider px-3 py-1 rounded-full uppercase font-medium font-clash border ${
                          isPopular
                            ? "bg-[#0A756A]/10 text-[#0A756A] border-[#0A756A]/20 dark:bg-[#0A756A]/20 dark:text-[#0A756A] dark:border-[#0A756A]/30"
                            : "bg-zinc-100 dark:bg-white/5 text-zinc-500 dark:text-zinc-400 border-zinc-200 dark:border-white/5"
                        }`}
                      >
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
                    className={`relative w-full h-12 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 group/pbtn cursor-pointer ${
                      isPopular
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

      <TrustedBy className="my-16 md:my-24" />

      {/* BOTTOM CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative rounded-[32px] overflow-hidden border border-zinc-200/80 dark:border-white/10 bg-gradient-to-br from-white via-zinc-50 to-zinc-100/50 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/30 p-8 md:p-16 text-center shadow-[0_30px_70px_-15px_rgba(10,117,106,0.05)] dark:shadow-[0_30px_70px_-15px_rgba(10,117,106,0.15)]"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-[#0A756A]/5 dark:bg-[#0A756A]/10 blur-3xl pointer-events-none" />

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

          <button
            onClick={() => handleEnrollClick("CTA Section")}
            className="h-12 px-8 rounded-xl bg-[#0A756A] text-white font-bold text-sm transition-all duration-300 hover:bg-[#129A8C] hover:shadow-[0_0_30px_rgba(10,117,106,0.25)] dark:bg-white dark:text-zinc-950 dark:hover:bg-[#0A756A] dark:hover:text-white flex items-center justify-center gap-2 group/ctaBtn cursor-pointer"
          >
            <span>Chat with Coordinator</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/ctaBtn:translate-x-1" />
          </button>
        </div>
      </motion.div>

      {/* Enrollment Form Popup */}
      <EnrollmentFormAdvanced
        open={isEnrollOpen}
        onOpenChange={setIsEnrollOpen}
        storageKey={`enroll-popup-online-plans-${selectedPlan || "general"}`}
      />
    </div>
  );
}
