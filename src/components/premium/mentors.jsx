"use client";
import { motion } from "motion/react";
import { Briefcase, Sparkles } from "lucide-react";
import { mentorsData } from "@/lib/data";

import afanImg from "@/assets/afananobg.png";
import shahanImg from "@/assets/shahamain.png";
import safaImg from "@/assets/safa2.png";

const imageMap = {
  Afan: afanImg,
  Shahan: shahanImg,
  Safa: safaImg
};

export default function MentorsSection() {
  return (
    <section id="mentors" className="relative py-24 md:py-32 bg-zinc-50 dark:bg-zinc-950 font-sans overflow-hidden transition-colors duration-300">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-[0.02] dark:opacity-[0.03]" />
      
      {/* Minimal Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      {/* Ambient glowing radial spheres */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-brand-primary/5 dark:bg-brand-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-y-1/2 w-[300px] h-[300px] rounded-full bg-brand-accent/5 dark:bg-brand-accent/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-20 max-w-3xl mx-auto">
      
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold font-clash tracking-tight text-zinc-900 dark:text-white leading-tight"
          >
            Learn with <span className="bg-gradient-to-r from-brand-primary via-[#14b8a6] to-[#0d9488] bg-clip-text text-transparent">Experts</span>.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-500 dark:text-zinc-400 text-base md:text-lg leading-relaxed max-w-2xl font-satoshi"
          >
            We don't teach from outdated textbooks. Our founders are active industry practitioners who manage major campaigns, scale traffic daily, and run full-service digital strategies.
          </motion.p>
        </div>

        {/* Profiles Grid - Centered 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3  bg-transparent gap-8 lg:gap-10 max-w-6xl mx-auto">
          {mentorsData.map((mentor, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }}  
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }} 
              className="group relative rounded-[28px] overflow-hidden  dark:bg-zinc-950/20 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-900/60 hover:border-brand-primary/30 dark:hover:border-brand-primary/20 transition-all duration-500 flex flex-col"
            >
             

              {/* Image box with visual hover pop-out */}
              <div className="relative aspect-[4/5] w-full overflow-hidden flex items-end justify-center  dark:from-zinc-900/10 dark:to-zinc-950/20 border-b border-zinc-100 dark:border-zinc-900/40 pt-10">
                {/* Visual Grid Behind Image */}
                <div className="absolute inset-0 bg-[radial-gradient(#80808006_1px, bg-[size:16px_16px] pointer-events-none" />
                
                {/* Backing shape (gives depth) */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] h-[80%] bg-gradient-to-tr from-brand-primary/5 to-brand-accent/5 dark:from-brand-primary/10 dark:to-brand-accent/5 rounded-2xl border border-zinc-200/30 dark:border-zinc-900/30 transition-all duration-500 group-hover:scale-[1.02] group-hover:border-brand-primary/20 dark:hover:border-brand-primary/10" />
                
                {/* Ambient glowing radial light */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-44 h-44 rounded-full bg-brand-primary/5 blur-2xl group-hover:bg-brand-primary/15 transition-all duration-500" />
                
                {/* Cutout Image with pop-out motion */}
                <img 
                  src={imageMap[mentor.name] || mentor.image} 
                  alt={mentor.name} 
                  className="relative z-10 h-[92%] w-auto object-contain select-none transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05] group-hover:-translate-y-1.5 filter drop-shadow-[0_15px_15px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_15px_20px_rgba(0,0,0,0.3)]"
                />
              </div>

              {/* Bio & Details text */}
              <div className="p-8 flex flex-col flex-grow justify-between relative text-left">
                <div>
                  <div className="flex flex-col gap-1.5">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-brand-primary dark:text-[#5EEAD4] uppercase">
                      {mentor.role}
                    </span>
                    <h3 className="text-3xl font-bold font-clash text-zinc-900 dark:text-white tracking-tight group-hover:text-brand-primary dark:group-hover:text-[#5EEAD4] transition-colors duration-300">
                      {mentor.name}
                    </h3>
                  </div>
                  
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mt-5 font-satoshi">
                    {mentor.bio}
                  </p>
                </div>

                {/* Footnotes: Credentials */}
                <div className="mt-8 pt-6 border-t border-zinc-150 dark:border-zinc-900/60 flex flex-col gap-3 z-10">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-mono">
                    <Briefcase size={12} className="text-brand-primary dark:text-[#5EEAD4]" />
                    <span>Expertise Focus</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {mentor.pastCompanies.map((c, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-1 rounded-md text-[10px] font-medium bg-zinc-100/ dark:bg-zinc-900/30 border border-zinc-200/50 dark:border-zinc-900/80 text-zinc-500 dark:text-zinc-400 font-mono transition-colors duration-300 group-hover:border-brand-primary/10 dark:group-hover:border-[#5EEAD4]/10"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
