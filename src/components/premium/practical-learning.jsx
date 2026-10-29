"use client";
import React from "react";
import { motion } from "motion/react";
import { Search, MousePointerClick, Megaphone, Share2, BarChart3, ClipboardList, Rocket, LineChart } from "lucide-react";

const skills = [
  { label: "SEO", icon: Search },
  { label: "Google Ads", icon: MousePointerClick },
  { label: "Meta Ads", icon: Megaphone },
  { label: "Social Media Marketing", icon: Share2 },
  { label: "Analytics", icon: BarChart3 },
];

const stages = [
  { label: "Plan", icon: ClipboardList, lines: ["w-4/5", "w-3/5", "w-2/3"] },
  { label: "Launch", icon: Rocket, lines: ["w-3/4", "w-1/2", "w-4/5"] },
  { label: "Measure", icon: LineChart, lines: ["w-2/3", "w-4/5", "w-1/2"] },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

// Decorative campaign board: shows the plan → launch → measure workflow without any data
function CampaignBoard() {
  return (
    <div aria-hidden="true" className="relative w-full max-w-[520px] mx-auto lg:mx-0 select-none">
      {/* Teal backdrop block */}
      <div className="absolute -inset-3 sm:-inset-5 rounded-[2rem] bg-[#0A756A] rotate-[-2.5deg]" />

      {/* Main board */}
      <div className="relative rounded-[1.5rem] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-900/10 p-5 sm:p-6">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-200 dark:bg-zinc-700" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#0A756A]" />
          </div>
          <span className="text-[11px] font-outfit font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
            Campaign board
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
          {stages.map((stage, i) => {
            const Icon = stage.icon;
            return (
              <div key={stage.label} className="rounded-xl bg-zinc-50 dark:bg-zinc-950/60 border border-zinc-100 dark:border-zinc-800 p-2.5 sm:p-3">
                <div className="flex items-center gap-1.5 mb-3">
                  <Icon size={14} className="text-[#0A756A] dark:text-emerald-400 shrink-0" />
                  <span className="text-[11px] sm:text-xs font-outfit font-semibold text-zinc-800 dark:text-zinc-200">{stage.label}</span>
                </div>
                <div className="flex flex-col gap-2">
                  {stage.lines.map((w, j) => (
                    <div key={j} className="rounded-md bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-2">
                      <div className={`h-1.5 rounded-full ${i === 1 && j === 0 ? "bg-[#0A756A]" : "bg-zinc-200 dark:bg-zinc-700"} ${w}`} />
                      <div className="h-1.5 mt-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 w-1/2" />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Abstract trend line */}
        <div className="mt-4 rounded-xl border border-zinc-100 dark:border-zinc-800 p-3">
          <svg viewBox="0 0 300 60" className="w-full h-12" fill="none">
            <path d="M0 50 C40 46 60 38 90 40 S150 22 180 26 S240 10 300 8" stroke="#0A756A" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M0 50 C40 46 60 38 90 40 S150 22 180 26 S240 10 300 8 V60 H0 Z" fill="#0A756A" fillOpacity="0.08" />
          </svg>
        </div>
      </div>

      {/* Floating workflow chip */}
      <div className="absolute -bottom-6 left-4 sm:-left-6 rounded-full bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 px-4 py-2 text-xs font-outfit font-medium shadow-lg flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 dark:bg-[#0A756A]" />
        Plan · Launch · Measure
      </div>
    </div>
  );
}

export default function PracticalLearning() {
  return (
    <section
      id="practical-learning"
      aria-labelledby="practical-learning-heading"
      className="relative py-20 md:py-28 bg-white dark:bg-zinc-950 font-sans overflow-hidden transition-colors duration-300"
    >
      <div className="relative mx-auto max-w-[1280px] px-6 md:px-8">

        {/* Eyebrow + headline span the full width */}
        <motion.div {...fadeUp} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="max-w-4xl">
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-satoshi font-medium tracking-wide text-[#0A756A] dark:text-emerald-400">
            <span className="w-6 h-px bg-current" />
            Practical learning
          </span>
          <h2
            id="practical-learning-heading"
            className="mt-4 text-[2.5rem] leading-[1.02] sm:text-6xl lg:text-7xl font-semibold font-outfit tracking-tight text-zinc-950 dark:text-white"
          >
            Learn Digital Marketing in Malappuram{" "}
            <span className="text-[#0A756A] dark:text-emerald-400">by Doing the Work</span>
          </h2>
        </motion.div>

        <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">

          {/* Supporting copy */}
          <motion.div {...fadeUp} transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="lg:col-span-5">
            <p className="text-xl sm:text-2xl font-outfit font-medium leading-snug text-zinc-950 dark:text-white border-l-4 border-[#0A756A] pl-5">
              Most courses teach what digital marketing is. At Entrain Labs, you learn how to do it.
            </p>

            <div className="mt-8 flex flex-col gap-4 text-sm sm:text-base leading-relaxed font-outfit text-zinc-600 dark:text-zinc-400">
              <p>
                Entrain Labs is a digital marketing institute in Manjeri, Malappuram, run alongside a working agency. You learn while campaigns are planned, launched, and measured.
              </p>
              <p>
                You practise the core skills yourself and create work you can show to employers or clients.
              </p>
            </div>

            <h3 className="mt-10 text-xs font-outfit font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
              Skills you practise
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {skills.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-lg border border-[#0A756A]/25 bg-[#0A756A]/[0.06] dark:bg-[#0A756A]/15 px-3.5 py-2 text-sm font-outfit font-medium text-zinc-900 dark:text-zinc-100"
                >
                  <Icon size={15} className="text-[#0A756A] dark:text-emerald-400" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 px-3 sm:px-6 lg:pl-10"
          >
            <CampaignBoard />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
