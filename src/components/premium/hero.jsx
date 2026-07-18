"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, Sparkles, Target, Zap } from "lucide-react";
import { EnrollmentFormAdvanced } from "@/components/ui/enrollment-form-advanced";
import shahana from "/hero.png";

// import afnanobgfull from "../../assets/afnanobgfull.png";
// import heroafna from "../../assets/heroafna.png";
// import logofull from '../../assets/afnafullnonbg.png'
// import afnaeditnonbg  from "../../assets/afnaeditnonbg.png";
import coatwith from "@/assets/coatwith.png" 
export default function Hero() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false)
  return (<section className="relative bg-red-000  min-h-screen flex md:items-center  items-top top-0 md:mt-0 -mt-20 md:justify-center  md:pt-0 px-0 md:px-8 md:pb-20 pb-1 overflow-hidden text-zinc-900 dark:text-zinc-100 transition-colors duration-300">

    {/* Bottom fade line */}
    <div className="absolute bottom-0 left-0  right-0 h-40   bg-gradient-to-t from-zinc-50 via-zinc-50/20 to-transparent dark:from-zinc-950 pointer-events-none z-10" />

    <div className="relative mx-auto max-w-7xl px-6 md:px-8  h-auto bg-red-000 z-20 bg-red-000 grid grid-cols-1 lg:grid-cols-12 gap-1 bg-red-000 sm:gap-10 lg:gap-16 items-center w-full mt-0">

      {/* Left Column: Headline copy */}
      <div className="lg:col-span-7 flex px-0 bg-red-000 sm:px-6 lg:px-12 flex-col gap-6 text-left">

        {/* Tagline Badge */}

        {/* <span className="text-[10px] text-primary  font-satoshi -py-14  font-thin  mt-[16px] uppercase">
          Build Skills. Gain Experience. Launch Your Career.
        </span> */}


        {/* Hero Headline */}
        <div className="flex flex-col gap-2 ">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} className="text-4xl sm:text-5xl md:text-7xl font-bold  font-outfit leading-[1.1] tracking-tight text-zinc-950 dark:text-white">
            <span className="font-medium font-outfit">Learn..</span> <br />
            <span className="text-brand-primary ">
              Practice.  <br  className="font-satoshi  "/><span className="font-poppins">Get  Hired.</span>
            </span>
          </motion.h1>
        </div>

        {/* Subheading text */}
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }} className="text-zinc-650 dark:text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl font-roboto font-light ">

          Bridge the gap between theory and industry. Gain certified, AI-powered competencies and manage active advertising budgets during a guaranteed agency internship.
        </motion.p>

        {/* Action CTAs */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }} className="flex flex-row md:flex-wrap items-center gap-4 mt-2">
  <button onClick={() => setIsEnrollOpen(true)} className="relative inline-flex shrink-0 whitespace-nowrap h-[45px] md:h-12 items-center justify-center rounded-xs md:rounded-sm bg-gradient-to-r from-brand-primary to-brand-primary text-white px-4 md:px-8 text-[12px] md:text-xs font-poppins tracking-wider hover:opacity-95 shadow-lg shadow-brand-accent/20 dark:shadow-brand-accent/10 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
    Apply Program
  </button>

  <a href="#courses" className="inline-flex shrink-0 whitespace-nowrap h-[45px] md:h-12 items-center justify-center font-poppins text-primary font-light  md:rounded-md border border-prima dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:bg-zinc-50 dark:hover:bg-zinc-800  dark:text-zinc-300 px-4 md:px-7 text-xs  tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
    Explore Courses
  </a>
</motion.div>



      </div>

      {/* Right Column: Premium Agency Showcase Workspace */}
      <div className="lg:col-span-5 relative  flex items-center bg-red-000 justify-center min-h-[320px] sm:min-h-[420px] lg:min-h-[660px] -mt-60 md:mt-22 px-4">

        {/* Ambient color mesh background glow */}
        <div className="absolute w-[450px] h-[450px] rounded-full bg-primary/1520 from-brand-primary to-brand-accent/5 dark:from-brand-primary/15 dark:via-brand-accent/5 dark:to-transparent blur-3xl pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        {/* Tech Grid Background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,117,106,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,117,106,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:28px_28px] opacity-[0.8] z-0 pointer-events-none" />

        {/* Floating crosshair corner accents (Workspace indicator) */}
        {/* <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-zinc/-200 dark:border-zinc-800 pointer-events-none" /> */}
        {/* <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-zinc-200 dark:border-zinc-800 pointer-events-none" /> */}
        {/* <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-zinc-200 dark:border-zinc-800 pointer-events-none" /> */}
        {/* <div className="absolute bottom-4 right-4 w-6 h-6 border-b  border-r border-zinc-200 dark:border-zinc-800 pointer-events-none" /> */}

        {/* Main Showcase Panel (Floating Portrait Canvas) */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full flex justify-center bg-red-000 items-end max-w-md h-[320px] sm:h-[420px] lg:h-[560px]"
        >
        
  <div className="relative flex items-end  justify-center  bg-red-000  h-full w-full">
    {/* Arched Gradient Backing Frame */}
    <div className="absolute bottom-0 left-1/2   -translate-x-1/2 w-[85%] h-[85%] bg-primary/5 from-brand-primary/5 via-brand-accent/5 to-transparent dark:from-brand-primary/10 dark:via-brand-accent/5 dark:to-transparent rounded-t-[140px] border-t border-x border-zinc-200/40 dark:border-zinc-800/40 z-0" />

    {/* Bottom Gradient */}
    <div className="absolute bottom-0 w-[85%] h-24 rounded-full  from-emerald-300/40 via-emerald-500/20 to-cyan-300/40 blur-3xl z-0 pointer-events-none"></div>

    {/* Shadow */}
    {/* <div className="absolute bottom-2 w-40 h-8 bg-black/20  rounded-full blur-2xl z-0 pointer-events-none"></div> */}

    <img
      src={shahana} 
      alt="Shahana"

      className="relative z-10 h-[300px] sm:h-[400px] md:h-[550px] lg:h-[650px] object-contain transition duration-500 hover:scale-[1.02]"
      style={{
        // maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
        // WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 90%)'
      }}
    />

   

    {/* Floating Internship Placement Badge (Bottom-Right) */}
  
  </div>

          {/* Vertical decorative grid dots overlay */}
          {/* <div className="absolute bottom-10 left-6 w-12 h-32 bg-[radial-gradient(rgba(10,117,106,0.15)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none z-0 hidden sm:block" /> */}
        </motion.div>

      

        {/* Floating Dashboard Card 2: Guaranteed Placement stamp */}
    

      </div>
    </div>

    {/* Advanced Enrollment dialog */}
    <EnrollmentFormAdvanced open={isEnrollOpen} onOpenChange={setIsEnrollOpen} />
  </section>);
}