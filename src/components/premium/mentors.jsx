"use client";
import React from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

import afanImg from "@/assets/afa.png";
const greshma = "/shahaana.png";
const safa = "/safano.png";

export default function MentorsSection() {


  // Stagger animation container variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  // Card fade-up transition
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // cubic-bezier
      },
    },
  };

  return (
    <section 
      id="mentors" 
      className="relative pt-6 md:pt-[120px] pb-8 md:pb-[120px] bg-white dark:bg-zinc-950 font-sans overflow-hidden transition-colors duration-300"
    >
      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-[0.015] dark:opacity-[0.02]" />
      
      {/* Very Subtle Grid Pattern */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808004_1px,transparent_1px),linear-gradient(to_bottom,#80808004_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" /> */}
      
      {/* Large Blurred Corners Accents in primary/5 */}
      {/* <div className="absolute top-10 left-10 w-[500px] h-[500px] rounded-full bg-[#0A756A]/5 dark:bg-[#0A756A]/5 blur-[120px] pointer-events-none" /> */}
      {/* <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-[#0A756A]/5 dark:bg-[#0A756A]/5 blur-[120px] pointer-events-none" /> */}

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-20 max-w-3xl mx-auto">
          {/* Main Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[32px] md:text-[42px] lg:text-[64px] font-bold font-outfit tracking-tight text-zinc-900 dark:text-white leading-tight"
          >
            Meet{" "}
            <span className="text-[#0A756A] font-outfit font-bold dark:text-[#5EEAD4]">
               Your Faculty
            </span>
          </motion.h2>
          
          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-zinc-500 dark:text-zinc-400 text-base leading-relaxed max-w-2xl font-satoshi"
          >
            Learn directly from experienced professionals who help students master practical digital marketing through real-world projects.
          </motion.p>
        </div>

        {/* Profiles Grid - Exactly 3 Columns on Desktop, 2 on Tablet, 1 on Mobile */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {/* Mentor 1: Afna */}
          <motion.div
            variants={cardVariants}
            className="flex flex-col items-center w-full max-w-[360px] mx-auto"
          >
            <div className="relative w-full flex justify-center">
              <div className="group relative md:w-full w-[250px] h-[340px] md:h-[460px] overflow-hidden md:rounded-t-[220px] rounded-t-full md:rounded-b-[2px] rounded-b-[1px] bg-primary/80 border border-[#0A756A]/10 transition-all duration-500 hover:bg-[#0A756A]/90 hover:border-[#0A756A]/20">
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[#0A756A]/10 blur-3xl" />
                </div>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-56 h-56 rounded-full border border-[#0A756A]/10" />
                <div className="absolute top-14 left-1/2 -translate-x-1/2 w-44 h-44 rounded-full border border-dashed border-[#0A756A]/15 group-hover:rotate-180 transition-transform duration-[6000ms]" />
                <div className="absolute inset-0 flex items-end justify-center px-4">
                  <img
                    src={afanImg.src || afanImg}
                    alt="Afna"
                    className="h-[95%] md:h-[98%] w-auto max-w-full object-contain object-bottom transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mentor 2: Greshma */}
          <motion.div
            variants={cardVariants}
            className="flex flex-col items-center w-full max-w-[360px] mx-auto"
          >
            <div className="relative w-full flex justify-center">
              <div className="group relative md:w-full w-[250px] h-[340px] md:h-[460px] overflow-hidden md:rounded-t-[220px] rounded-t-full md:rounded-b-[2px] rounded-b-[1px] bg-primary/80 border border-[#0A756A]/10 transition-all duration-500 hover:bg-[#0A756A]/90 hover:border-[#0A756A]/20">
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[#0A756A]/10 blur-3xl" />
                </div>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-56 h-56 rounded-full border border-[#0A756A]/10" />
                <div className="absolute top-14 left-1/2 -translate-x-1/2 w-44 h-44 rounded-full border border-dashed border-[#0A756A]/15 group-hover:rotate-180 transition-transform duration-[6000ms]" />
                <div className="absolute inset-0 flex items-end justify-center px-4">
                  <img
                    src={greshma}
                    alt="Greshma"
                    className="h-[95%] md:h-[98%] md:pt-10 pt-5 w-auto max-w-full object-contain object-bottom transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mentor 3: Safa */}
          <motion.div
            variants={cardVariants}
            className="flex flex-col items-center w-full max-w-[360px] mx-auto"
          >
            <div className="relative w-full flex justify-center">
              <div className="group relative md:w-full w-[250px] h-[340px] md:h-[460px] overflow-hidden md:rounded-t-[220px] rounded-t-full md:rounded-b-[2px] rounded-b-[1px] bg-primary/80 border border-[#0A756A]/10 transition-all duration-500 hover:bg-[#0A756A]/90 hover:border-[#0A756A]/20">
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[#0A756A]/10 blur-3xl" />
                </div>
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-56 h-56 rounded-full border border-[#0A756A]/10" />
                <div className="absolute top-14 left-1/2 -translate-x-1/2 w-44 h-44 rounded-full border border-dashed border-[#0A756A]/15 group-hover:rotate-180 transition-transform duration-[6000ms]" />
                <div className="absolute inset-0 flex items-end justify-center px-4">
                  <img
                    src={safa}
                    alt="Safa"
                    className="h-[95%] md:h-[98%] w-auto max-w-full object-contain object-bottom transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2 drop-shadow-[0_20px_40px_rgba(0,0,0,0.12)]"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
