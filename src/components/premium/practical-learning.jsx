"use client";
import React from "react";
import { motion } from "motion/react";
import {
  Search,
  Sparkles,
  Megaphone,
  Share2,
  BarChart3,
} from "lucide-react";

const skills = [
  { label: "SEO", icon: Search },
  { label: "Google Ads", icon: Sparkles },
  { label: "Meta Ads", icon: Megaphone },
  { label: "Social Media Marketing", icon: Share2 },
  { label: "Analytics", icon: BarChart3 },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function PracticalLearning() {
  return (
    <section
      id="practical-learning"
      aria-labelledby="practical-learning-heading"
      className="relative py-16 sm:py-24 lg:py-28 bg-white dark:bg-zinc-950 font-sans overflow-hidden transition-colors duration-300"
    >
      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        {/* Eyebrow + headline */}
        <motion.div {...fadeUp} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} className="max-w-4xl">

          <h2
            id="practical-learning-heading"
            className="mt-2 text-3xl sm:text-5xl lg:text-[54px] font-bold font-outfit tracking-tight text-zinc-950 dark:text-white leading-[1.1] max-w-3xl"
          >
            Learn Digital Marketing in <br className="hidden sm:inline" />
            Malappuram{" "}
            <span className="text-[#0A756A] dark:text-emerald-400">
              by Doing the <br className="hidden sm:inline" />
              Work
            </span>
          </h2>
        </motion.div>

        {/* 2-column main area */}
        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Supporting copy & Skills */}
          <motion.div
            {...fadeUp}
            transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            {/* Quote with green accent border */}
            <div className="border-l-[3.5px] border-[#0A756A] pl-5 py-0.5">
              <p className="text-xl sm:text-2xl font-outfit font-semibold leading-snug text-zinc-950 dark:text-white">
                Most courses teach what digital marketing is. At Entrain Labs, you learn how to do it.
              </p>
            </div>

            {/* Paragraphs */}
            <div className="mt-7 flex flex-col gap-4 text-sm sm:text-base leading-relaxed font-outfit text-zinc-600 dark:text-zinc-400">
              <p>
                Entrain Labs is a digital marketing institute in Manjeri, Malappuram, run alongside a working agency. You learn while campaigns are planned, launched, and measured.
              </p>
              <p>
                You practise the core skills yourself and create work you can show to employers or clients.
              </p>
            </div>

            {/* Skills header */}
            <h3 className="mt-8 text-xs font-outfit font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
              Skills you practise
            </h3>

            {/* Skills Pills */}
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {skills.map(({ label, icon: Icon }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#0A756A]/25 bg-white dark:bg-zinc-900 px-3.5 py-2 text-xs sm:text-sm font-outfit font-medium text-zinc-900 dark:text-zinc-100 shadow-sm transition-colors hover:border-[#0A756A]/40"
                >
                  <Icon size={15} className="text-[#0A756A] dark:text-emerald-400 shrink-0" aria-hidden="true" />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column: Photo (photo2.jpg) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[520px] select-none group">
              {/* Soft ambient brand glow */}
              <div className="absolute -inset-3 sm:-inset-5 rounded-[2.5rem] bg-[#0A756A]/10 dark:bg-emerald-500/10 blur-2xl pointer-events-none" />

              {/* Framed Image Container */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] w-full rounded-[28px] sm:rounded-[32px] overflow-hidden border border-zinc-200/80 dark:border-zinc-800 shadow-2xl shadow-zinc-950/10 bg-zinc-100 dark:bg-zinc-900">
                <img
                  src="/photo4.jpg"
                  alt="Student achieving success with practical digital marketing at Entrain Labs"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle vignette gradient at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                {/* Floating workflow badge */}
               
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
