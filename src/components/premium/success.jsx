"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote, TrendingUp, Award } from "lucide-react";
import { testimonialsData } from "@/lib/data";
export default function SuccessStories() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right
    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            x: direction < 0 ? 100 : -100,
            opacity: 0
        })
    };
    const handleNext = () => {
        setDirection(1);
        setActiveIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
    };
    const handlePrev = () => {
        setDirection(-1);
        setActiveIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
    };
    const activeTestimonial = testimonialsData[activeIndex];
    return (<section id="testimonials" className="relative py-20 md:py-28 bg-zinc-50 dark:bg-zinc-950 font-sans overflow-hidden">
      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-[0.02] dark:opacity-[0.03]"/>
      
      {/* Backdrop glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-accent-2/5 blur-[120px] pointer-events-none"/>

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 md:mb-20 max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent font-satoshi">
            Student Success
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-clash tracking-tight text-zinc-900 dark:text-white leading-tight">
            Real Transformations. Real Careers.
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
            See how our graduates transitioned from non-marketing positions and colleges into high-performing roles inside top agency networks.
          </p>
        </div>

        {/* Dual Column Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Testimonial slider card */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="relative min-h-[380px] sm:min-h-[320px] rounded-3xl p-6 md:p-10 bg-white dark:bg-zinc-900/40 border border-zinc-150 dark:border-zinc-800/80 shadow-md flex flex-col justify-between overflow-hidden text-left">
              {/* Background noise */}
              <div className="absolute inset-0 noise-overlay pointer-events-none opacity-20 dark:opacity-30"/>
              
              <div className="absolute top-6 right-8 text-zinc-200 dark:text-zinc-800 pointer-events-none">
                <Quote size={56} className="opacity-40"/>
              </div>

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div key={activeIndex} custom={direction} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4, ease: "easeInOut" }} className="flex flex-col gap-5 z-10">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(activeTestimonial.rating)].map((_, i) => (<Star key={i} size={14} className="text-amber-500 fill-amber-500"/>))}
                  </div>

                  {/* Review Content */}
                  <p className="text-sm md:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
                    "{activeTestimonial.content}"
                  </p>

                  {/* User Profile Info */}
                  <div className="flex items-center gap-4 mt-2">
                    <img src={activeTestimonial.image} alt={activeTestimonial.name} className="h-11 w-11 rounded-full object-cover ring-2 ring-zinc-200 dark:ring-zinc-800"/>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-zinc-900 dark:text-white font-clash">
                        {activeTestimonial.name}
                      </span>
                      <span className="text-[10px] text-zinc-500 dark:text-zinc-400">
                        {activeTestimonial.role} at <span className="font-bold text-brand-accent-2">{activeTestimonial.company}</span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Controls */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-zinc-150 dark:border-zinc-850 z-10">
                <div className="flex gap-1.5">
                  {testimonialsData.map((_, idx) => (<button key={idx} onClick={() => {
                setDirection(idx > activeIndex ? 1 : -1);
                setActiveIndex(idx);
            }} className={`h-1.5 rounded-full transition-all duration-300 ${activeIndex === idx ? "w-6 bg-brand-accent" : "w-1.5 bg-zinc-300 dark:bg-zinc-800"}`} aria-label={`Go to slide ${idx + 1}`}/>))}
                </div>

                <div className="flex gap-2">
                  <button onClick={handlePrev} className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors cursor-pointer">
                    <ChevronLeft size={14}/>
                  </button>
                  <button onClick={handleNext} className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors cursor-pointer">
                    <ChevronRight size={14}/>
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Salary & Transition Stats cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            
            {/* Transition Stats Card */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="rounded-3xl p-6 bg-zinc-900 text-white border border-zinc-800 relative overflow-hidden text-left">
              <div className="absolute inset-0 noise-overlay pointer-events-none opacity-20"/>
              
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase font-semibold">
                  Career Transition
                </span>
                <div className="p-1.5 rounded-lg bg-brand-accent/20 text-brand-accent">
                  <Award size={14}/>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-zinc-400 text-xs font-medium font-sans">Before:</span>
                <span className="text-sm font-bold text-zinc-500 line-through">
                  {activeTestimonial.beforeRole}
                </span>
                
                <span className="text-zinc-400 text-xs font-medium font-sans mt-1">After:</span>
                <span className="text-lg font-bold text-white font-clash flex items-center gap-1.5">
                  {activeTestimonial.role}
                  <span className="text-[10px] bg-brand-success/15 border border-brand-success/20 text-brand-success px-2 py-0.5 rounded-full font-mono font-medium">
                    Placed
                  </span>
                </span>
              </div>
            </motion.div>

            {/* Salary Package Stats Card */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="rounded-3xl p-6 bg-white dark:bg-zinc-900/40 border border-zinc-150 dark:border-zinc-800 relative overflow-hidden text-left">
              <div className="absolute inset-0 noise-overlay pointer-events-none opacity-20 dark:opacity-30"/>
              
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-mono tracking-widest text-zinc-400 dark:text-zinc-500 uppercase font-semibold">
                  Compensation Package
                </span>
                <div className="p-1.5 rounded-lg bg-brand-success/10 text-brand-success">
                  <TrendingUp size={14}/>
                </div>
              </div>

              <div className="flex items-baseline justify-between gap-4">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold font-clash text-zinc-900 dark:text-white">
                    {activeTestimonial.salaryPackage}
                  </span>
                  <span className="text-[9px] text-zinc-400 dark:text-zinc-500 font-mono mt-1">
                    STARTING ANNUAL RETAINER
                  </span>
                </div>

                <div className="flex flex-col items-end">
                  <span className="text-sm font-bold text-brand-success font-clash bg-brand-success/10 px-3 py-1 rounded-full border border-brand-success/10">
                    {activeTestimonial.salaryIncrease}
                  </span>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>);
}
