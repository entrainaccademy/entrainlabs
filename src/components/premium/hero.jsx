"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, Sparkles, Target, Zap } from "lucide-react";
import { EnrollmentFormAdvanced } from "@/components/ui/enrollment-form-advanced";
// import afnanobgfull from "../../assets/afnanobgfull.png";
// import heroafna from "../../assets/heroafna.png";
// import logofull from '../../assets/afnafullnonbg.png'
// import afnaeditnonbg  from "../../assets/afnaeditnonbg.png";
import coatwith from "../../assets/coatwith.png" 
export default function Hero() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);

  return (<section className="relative min-h-screen flex items-center justify-center pt-1 px-6 md:px-8 pb-20 overflow-hidden text-zinc-900 dark:text-zinc-100 transition-colors duration-300">

    {/* Bottom fade line */}
    <div className="absolute bottom-0 left-0  right-0 h-40 bg-gradient-to-t from-zinc-50 via-zinc-50/20 to-transparent dark:from-zinc-950 pointer-events-none z-10" />

    <div className="relative mx-auto  max-w-7xl px-6 md:px-8 z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full mt-0">

      {/* Left Column: Headline copy */}
      <div className="lg:col-span-7 flex flex-col gap-6 text-left">

        {/* Tagline Badge */}

        <span className="text-[10px] text-primary  font-satoshi font-thin  uppercase">
          Build Skills. Gain Experience. Launch Your Career.
        </span>


        {/* Hero Headline */}
        <div className="flex flex-col gap-2">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="text-4xl sm:text-5xl md:text-7xl font-extrabold font-helvetica leading-[1.1] tracking-tight text-zinc-950 dark:text-white">
            Learn.. <br />
            <span className="text-brand-primary">
              Practice.  <br />Get  Hired.
            </span>
          </motion.h1>
        </div>

        {/* Subheading text */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="text-zinc-650 dark:text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl font-satoshi ">
          Bridge the gap between theory and industry. Gain certified, AI-powered competencies and manage active advertising budgets during a guaranteed agency internship.
        </motion.p>

        {/* Action CTAs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} className="flex flex-wrap items-center gap-4 mt-2">
          <button onClick={() => setIsEnrollOpen(true)} className="relative inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-brand-accent to-brand-accent-2 text-white px-8 text-xs font-semibold tracking-wider hover:opacity-95 shadow-lg shadow-brand-accent/20 dark:shadow-brand-accent/10 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
            Apply Program
          </button>

          <a href="#courses" className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-800 dark:text-zinc-300 px-7 text-xs font-semibold tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
            Explore Courses
          </a>
        </motion.div>



      </div>

      {/* Right Column: Premium Agency Showcase Workspace */}
      <div className="lg:col-span-5 relative flex items-center justify-center min-h-[550px] lg:min-h-[660px] -mt-10 lg:mt-0 px-4">

        {/* Ambient color mesh background glow */}
        <div className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-brand-primary/10 via-brand-accent/5 to-transparent dark:from-brand-primary/15 dark:via-brand-accent/5 dark:to-transparent blur-3xl pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        {/* Tech Grid Background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,117,106,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,117,106,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:28px_28px] opacity-[0.8] z-0 pointer-events-none" />

        {/* Floating crosshair corner accents (Workspace indicator) */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-zinc-200 dark:border-zinc-800 pointer-events-none" />
        <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-zinc-200 dark:border-zinc-800 pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-zinc-200 dark:border-zinc-800 pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-zinc-200 dark:border-zinc-800 pointer-events-none" />

        {/* Main Showcase Panel (Floating Portrait Canvas) */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full flex justify-center items-end max-w-md h-[460px] lg:h-[560px]"
        >
          {/* Transparent full portrait image standing clean with premium drop shadow */}
          {/* <img
            src={heroafna}
          // src={afnaeditnonbg}
            alt="Afna - Premium Program Member"
            className="w-auto h-full max-h-full object-contain object-bottom drop-shadow-[0_25px_60px_rgba(10,117,106,0.22)] select-none hover:scale-[1.01] transition-transform duration-500 relative z-10"
          /> */}
   <img
            src={coatwith}
          // src={afnaeditnonbg}
            alt="Afna - Premium Program Member"
            className="w-auto h-full max-h-full object-contain object-bottom drop-shadow-[0_25px_60px_rgba(10,117,106,0.22)] select-none hover:scale-[1.01] transition-transform duration-500 relative z-10"
          />

            {/* <img
            
          src={afnaeditnonbg}
            alt="Afna - Premium Program Member"
            className="w-auto h-full max-h-full object-contain object-bottom drop-shadow-[0_25px_60px_rgba(10,117,106,0.22)] select-none hover:scale-[1.01] transition-transform duration-500 relative z-10"
          /> */}

          {/* Vertical decorative grid dots overlay */}
          <div className="absolute bottom-10 left-6 w-12 h-32 bg-[radial-gradient(rgba(10,117,106,0.15)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none z-0 hidden sm:block" />
        </motion.div>

      

        {/* Floating Dashboard Card 2: Guaranteed Placement stamp */}
    

      </div>
    </div>

    {/* Advanced Enrollment dialog */}
    <EnrollmentFormAdvanced open={isEnrollOpen} onOpenChange={setIsEnrollOpen} />
  </section>);
}
