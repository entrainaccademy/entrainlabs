"use client";
import React from "react";
import { 
  Target, 
  Briefcase, 
  Award, 
  GraduationCap, 
  TrendingUp, 
  Building2, 
  Laptop, 
  CheckCircle2, 
  ArrowUpRight 
} from "lucide-react";

export default function CourseExperienceAudience({ className = "", isContainer = false }) {
  const containerClasses = isContainer ? "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" : "w-full";

  return (
    <div className={`w-full space-y-20 md:space-y-28 my-16 md:my-24 ${containerClasses} ${className}`}>

      {/* ========================================================
          PART 1: AGENCY INTERNSHIP & LIVE PROJECTS
          ======================================================== */}
      <section 
        aria-labelledby="agency-projects-heading"
        className="relative w-full"
      >
        {/* Ambient Subtle Glow */}
        <div 
          aria-hidden="true" 
          className="absolute -top-12 left-1/4 w-72 h-72 rounded-full bg-[#0A756A]/5 dark:bg-[#0A756A]/10 blur-3xl pointer-events-none" 
        />

        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-14 text-left">
          {/* Section 1 H2 Heading */}
          <h2 
            id="agency-projects-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold font-outfit text-zinc-950 dark:text-white tracking-tight leading-[1.2] mb-4"
          >
            Live Projects and an Agency Internship, Not Just Theory
          </h2>

          {/* Section 1 Introduction Copy */}
          <p className="text-base sm:text-lg text-zinc-650 dark:text-zinc-300 font-satoshi leading-relaxed">
            This is where we differ from a classroom-only course. Our institute is connected to Entrain Growth Partners, a digital marketing agency. That means:
          </p>
        </div>

        {/* Three Numbered Cards: 3 columns on desktop, stacked on mobile */}
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none p-0 m-0">
          
          {/* Numbered Card 1 */}
          <li className="flex">
            <article className="group relative w-full rounded-2xl md:rounded-3xl p-[1px] bg-gradient-to-b from-zinc-200/90 via-zinc-200/40 to-transparent dark:from-white/15 dark:via-white/5 dark:to-transparent hover:from-[#0A756A]/60 dark:hover:from-emerald-500/50 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-full w-full rounded-[calc(1rem-1px)] md:rounded-[calc(1.5rem-1px)] bg-white dark:bg-zinc-900/75 p-7 sm:p-8 flex flex-col justify-between backdrop-blur-xs overflow-hidden">
                
                {/* Large watermark numeral in corner */}
                <span 
                  aria-hidden="true" 
                  className="absolute -right-1 -bottom-4 text-7xl sm:text-8xl font-outfit font-black text-zinc-900/[0.035] dark:text-white/[0.03] select-none pointer-events-none group-hover:text-[#0A756A]/[0.08] dark:group-hover:text-emerald-400/[0.08] group-hover:scale-105 transition-all duration-300"
                >
                  01
                </span>

                <div>
                  {/* Step counter badge & icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span 
                      aria-hidden="true"
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#0A756A]/10 text-[#0A756A] dark:bg-emerald-500/15 dark:text-emerald-300 font-outfit font-bold text-xs tracking-wider uppercase"
                    >
                      Step 01
                    </span>
                    <div 
                      aria-hidden="true" 
                      className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 text-[#0A756A] dark:text-emerald-400 flex items-center justify-center group-hover:bg-[#0A756A] group-hover:text-white dark:group-hover:bg-emerald-500 dark:group-hover:text-zinc-950 transition-colors duration-300 shadow-xs"
                    >
                      <Target className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Title (exact copy) */}
                  <h3 className="text-xl sm:text-2xl font-bold font-outfit text-zinc-950 dark:text-white leading-snug mb-3">
                    &ldquo;You work on real briefs.&rdquo;
                  </h3>

                  {/* Card Description (exact copy) */}
                  <p className="text-sm sm:text-[15px] font-satoshi text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    Plan, run and measure campaigns with active budgets under supervision.
                  </p>
                </div>

                {/* Subtle bottom decorative accent */}
                <div className="mt-8 pt-4 border-t border-zinc-100 dark:border-white/5 flex items-center justify-between text-xs font-outfit font-medium text-zinc-400 dark:text-zinc-500">
                  <span>Live client briefs</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A756A] dark:bg-emerald-400" />
                </div>
              </div>
            </article>
          </li>

          {/* Numbered Card 2 */}
          <li className="flex">
            <article className="group relative w-full rounded-2xl md:rounded-3xl p-[1px] bg-gradient-to-b from-zinc-200/90 via-zinc-200/40 to-transparent dark:from-white/15 dark:via-white/5 dark:to-transparent hover:from-[#0A756A]/60 dark:hover:from-emerald-500/50 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-full w-full rounded-[calc(1rem-1px)] md:rounded-[calc(1.5rem-1px)] bg-white dark:bg-zinc-900/75 p-7 sm:p-8 flex flex-col justify-between backdrop-blur-xs overflow-hidden">
                
                {/* Large watermark numeral in corner */}
                <span 
                  aria-hidden="true" 
                  className="absolute -right-1 -bottom-4 text-7xl sm:text-8xl font-outfit font-black text-zinc-900/[0.035] dark:text-white/[0.03] select-none pointer-events-none group-hover:text-[#0A756A]/[0.08] dark:group-hover:text-emerald-400/[0.08] group-hover:scale-105 transition-all duration-300"
                >
                  02
                </span>

                <div>
                  {/* Step counter badge & icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span 
                      aria-hidden="true"
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#0A756A]/10 text-[#0A756A] dark:bg-emerald-500/15 dark:text-emerald-300 font-outfit font-bold text-xs tracking-wider uppercase"
                    >
                      Step 02
                    </span>
                    <div 
                      aria-hidden="true" 
                      className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 text-[#0A756A] dark:text-emerald-400 flex items-center justify-center group-hover:bg-[#0A756A] group-hover:text-white dark:group-hover:bg-emerald-500 dark:group-hover:text-zinc-950 transition-colors duration-300 shadow-xs"
                    >
                      <Briefcase className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Title (exact copy) */}
                  <h3 className="text-xl sm:text-2xl font-bold font-outfit text-zinc-950 dark:text-white leading-snug mb-3">
                    &ldquo;You do an agency internship.&rdquo;
                  </h3>

                  {/* Card Description (exact copy) */}
                  <p className="text-sm sm:text-[15px] font-satoshi text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    The internship gives you verified experience and a portfolio of actual work.
                  </p>
                </div>

                {/* Subtle bottom decorative accent */}
                <div className="mt-8 pt-4 border-t border-zinc-100 dark:border-white/5 flex items-center justify-between text-xs font-outfit font-medium text-zinc-400 dark:text-zinc-500">
                  <span>Verified agency work</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A756A] dark:bg-emerald-400" />
                </div>
              </div>
            </article>
          </li>

          {/* Numbered Card 3 */}
          <li className="flex">
            <article className="group relative w-full rounded-2xl md:rounded-3xl p-[1px] bg-gradient-to-b from-zinc-200/90 via-zinc-200/40 to-transparent dark:from-white/15 dark:via-white/5 dark:to-transparent hover:from-[#0A756A]/60 dark:hover:from-emerald-500/50 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative h-full w-full rounded-[calc(1rem-1px)] md:rounded-[calc(1.5rem-1px)] bg-white dark:bg-zinc-900/75 p-7 sm:p-8 flex flex-col justify-between backdrop-blur-xs overflow-hidden">
                
                {/* Large watermark numeral in corner */}
                <span 
                  aria-hidden="true" 
                  className="absolute -right-1 -bottom-4 text-7xl sm:text-8xl font-outfit font-black text-zinc-900/[0.035] dark:text-white/[0.03] select-none pointer-events-none group-hover:text-[#0A756A]/[0.08] dark:group-hover:text-emerald-400/[0.08] group-hover:scale-105 transition-all duration-300"
                >
                  03
                </span>

                <div>
                  {/* Step counter badge & icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span 
                      aria-hidden="true"
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#0A756A]/10 text-[#0A756A] dark:bg-emerald-500/15 dark:text-emerald-300 font-outfit font-bold text-xs tracking-wider uppercase"
                    >
                      Step 03
                    </span>
                    <div 
                      aria-hidden="true" 
                      className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 text-[#0A756A] dark:text-emerald-400 flex items-center justify-center group-hover:bg-[#0A756A] group-hover:text-white dark:group-hover:bg-emerald-500 dark:group-hover:text-zinc-950 transition-colors duration-300 shadow-xs"
                    >
                      <Award className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Title (exact copy) */}
                  <h3 className="text-xl sm:text-2xl font-bold font-outfit text-zinc-950 dark:text-white leading-snug mb-3">
                    &ldquo;You get career support.&rdquo;
                  </h3>

                  {/* Card Description (exact copy) */}
                  <p className="text-sm sm:text-[15px] font-satoshi text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    Portfolio building, resume support and interview preparation.
                  </p>
                </div>

                {/* Subtle bottom decorative accent */}
                <div className="mt-8 pt-4 border-t border-zinc-100 dark:border-white/5 flex items-center justify-between text-xs font-outfit font-medium text-zinc-400 dark:text-zinc-500">
                  <span>Placement readiness</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0A756A] dark:bg-emerald-400" />
                </div>
              </div>
            </article>
          </li>

        </ol>
      </section>

      {/* ========================================================
          PART 2: WHO THIS DIGITAL MARKETING COURSE IS FOR
          ======================================================== */}
      <section 
        aria-labelledby="target-audience-heading"
        className="relative w-full"
      >
        {/* Ambient Subtle Glow */}
        <div 
          aria-hidden="true" 
          className="absolute -bottom-10 right-1/4 w-72 h-72 rounded-full bg-[#0A756A]/5 dark:bg-[#0A756A]/10 blur-3xl pointer-events-none" 
        />

        {/* Section Header */}
        <div className="max-w-3xl mb-10 md:mb-12 text-left">
          {/* Section 2 H2 Heading */}
          <h2 
            id="target-audience-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold font-outfit text-zinc-950 dark:text-white tracking-tight leading-[1.2]"
          >
            Who This Digital Marketing Course Is For
          </h2>
        </div>

        {/* Audience Cards: 2x2 grid on desktop, single column on mobile */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 list-none p-0 m-0">

          {/* Audience Card 1 */}
          <li className="flex">
            <article className="group relative w-full rounded-2xl p-[1px] bg-gradient-to-b from-zinc-200/90 via-zinc-200/30 to-transparent dark:from-white/10 dark:via-zinc-800/30 dark:to-transparent hover:from-[#0A756A]/60 dark:hover:from-emerald-500/50 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative h-full w-full rounded-[calc(1rem-1px)] bg-white dark:bg-zinc-900/70 p-6 sm:p-7 flex items-center justify-between gap-4 backdrop-blur-xs transition-transform duration-200 group-hover:-translate-y-0.5">
                <div className="flex items-center gap-4 sm:gap-5">
                  <div 
                    aria-hidden="true" 
                    className="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-500/10 text-[#0A756A] dark:text-emerald-400 border border-emerald-500/20 shrink-0 group-hover:scale-105 group-hover:bg-[#0A756A] group-hover:text-white dark:group-hover:bg-emerald-500 dark:group-hover:text-zinc-950 transition-all duration-300 shadow-xs"
                  >
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <p className="text-base sm:text-lg font-outfit font-semibold text-zinc-900 dark:text-white leading-snug">
                    Students and graduates who want a first job in marketing
                  </p>
                </div>
                <div 
                  aria-hidden="true"
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 group-hover:bg-[#0A756A]/10 group-hover:text-[#0A756A] dark:group-hover:text-emerald-400 shrink-0 transition-colors duration-200"
                >
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </article>
          </li>

          {/* Audience Card 2 */}
          <li className="flex">
            <article className="group relative w-full rounded-2xl p-[1px] bg-gradient-to-b from-zinc-200/90 via-zinc-200/30 to-transparent dark:from-white/10 dark:via-zinc-800/30 dark:to-transparent hover:from-[#0A756A]/60 dark:hover:from-emerald-500/50 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative h-full w-full rounded-[calc(1rem-1px)] bg-white dark:bg-zinc-900/70 p-6 sm:p-7 flex items-center justify-between gap-4 backdrop-blur-xs transition-transform duration-200 group-hover:-translate-y-0.5">
                <div className="flex items-center gap-4 sm:gap-5">
                  <div 
                    aria-hidden="true" 
                    className="w-12 h-12 rounded-xl flex items-center justify-center bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20 shrink-0 group-hover:scale-105 group-hover:bg-cyan-600 group-hover:text-white dark:group-hover:bg-cyan-500 dark:group-hover:text-zinc-950 transition-all duration-300 shadow-xs"
                  >
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <p className="text-base sm:text-lg font-outfit font-semibold text-zinc-900 dark:text-white leading-snug">
                    Career changers moving into digital roles
                  </p>
                </div>
                <div 
                  aria-hidden="true"
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 group-hover:bg-cyan-500/10 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 shrink-0 transition-colors duration-200"
                >
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </article>
          </li>

          {/* Audience Card 3 */}
          <li className="flex">
            <article className="group relative w-full rounded-2xl p-[1px] bg-gradient-to-b from-zinc-200/90 via-zinc-200/30 to-transparent dark:from-white/10 dark:via-zinc-800/30 dark:to-transparent hover:from-[#0A756A]/60 dark:hover:from-emerald-500/50 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative h-full w-full rounded-[calc(1rem-1px)] bg-white dark:bg-zinc-900/70 p-6 sm:p-7 flex items-center justify-between gap-4 backdrop-blur-xs transition-transform duration-200 group-hover:-translate-y-0.5">
                <div className="flex items-center gap-4 sm:gap-5">
                  <div 
                    aria-hidden="true" 
                    className="w-12 h-12 rounded-xl flex items-center justify-center bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 shrink-0 group-hover:scale-105 group-hover:bg-indigo-600 group-hover:text-white dark:group-hover:bg-indigo-500 dark:group-hover:text-zinc-950 transition-all duration-300 shadow-xs"
                  >
                    <Building2 className="w-6 h-6" />
                  </div>
                  <p className="text-base sm:text-lg font-outfit font-semibold text-zinc-900 dark:text-white leading-snug">
                    Business owners who want to run their own marketing
                  </p>
                </div>
                <div 
                  aria-hidden="true"
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 group-hover:bg-indigo-500/10 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 shrink-0 transition-colors duration-200"
                >
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </article>
          </li>

          {/* Audience Card 4 */}
          <li className="flex">
            <article className="group relative w-full rounded-2xl p-[1px] bg-gradient-to-b from-zinc-200/90 via-zinc-200/30 to-transparent dark:from-white/10 dark:via-zinc-800/30 dark:to-transparent hover:from-[#0A756A]/60 dark:hover:from-emerald-500/50 shadow-xs hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative h-full w-full rounded-[calc(1rem-1px)] bg-white dark:bg-zinc-900/70 p-6 sm:p-7 flex items-center justify-between gap-4 backdrop-blur-xs transition-transform duration-200 group-hover:-translate-y-0.5">
                <div className="flex items-center gap-4 sm:gap-5">
                  <div 
                    aria-hidden="true" 
                    className="w-12 h-12 rounded-xl flex items-center justify-center bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 shrink-0 group-hover:scale-105 group-hover:bg-amber-600 group-hover:text-white dark:group-hover:bg-amber-500 dark:group-hover:text-zinc-950 transition-all duration-300 shadow-xs"
                  >
                    <Laptop className="w-6 h-6" />
                  </div>
                  <p className="text-base sm:text-lg font-outfit font-semibold text-zinc-900 dark:text-white leading-snug">
                    Freelancers who want to add paid services
                  </p>
                </div>
                <div 
                  aria-hidden="true"
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 group-hover:bg-amber-500/10 group-hover:text-amber-600 dark:group-hover:text-amber-400 shrink-0 transition-colors duration-200"
                >
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </article>
          </li>

        </ul>

        {/* Closing Line in a Highlighted Pill Banner */}
        <div className="mt-10 sm:mt-12 flex justify-center">
          <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#0A756A]/10 via-[#0A756A]/15 to-[#0A756A]/10 dark:from-emerald-500/15 dark:via-emerald-500/20 dark:to-emerald-500/15 border border-[#0A756A]/25 dark:border-emerald-500/30 text-[#0A756A] dark:text-emerald-300 text-sm sm:text-base font-outfit font-semibold shadow-xs">
            <CheckCircle2 className="w-5 h-5 text-[#0A756A] dark:text-emerald-400 shrink-0" aria-hidden="true" />
            <span>No technical background is needed</span>
          </div>
        </div>
      </section>

    </div>
  );
}
