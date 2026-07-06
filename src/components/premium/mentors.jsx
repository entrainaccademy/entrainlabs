"use client";
import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import { mentorsData } from "@/lib/data";
const LinkedinIcon = (props) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>);
export default function MentorsSection() {
    return (<section id="mentors" className="relative py-20 md:py-28 bg-zinc-50 dark:bg-zinc-950 font-sans overflow-hidden">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-[0.02] dark:opacity-[0.03]"/>
      
      {/* Backdrop glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-accent/5 blur-[120px] pointer-events-none"/>

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 md:mb-20 max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent font-satoshi">
            Meet Mentors
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-clash tracking-tight text-zinc-900 dark:text-white leading-tight">
            Learn from Active Agency Pros.
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
            Our instructors do not teach from textbooks. They are active managers who run ad accounts, direct organic strategies, and scale campaigns daily.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {mentorsData.map((mentor, idx) => (<motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }} className="group relative rounded-3xl overflow-hidden bg-white dark:bg-zinc-900/40 border border-zinc-150 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.01] flex flex-col">
              {/* Image box with visual hover scale */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                <img src={mentor.image} alt={mentor.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"/>
                
                {/* LinkedIn Overlay icon */}
                <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 h-8 w-8 rounded-full bg-zinc-950/80 hover:bg-zinc-950 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg cursor-pointer" aria-label={`${mentor.name} LinkedIn Profile`}>
                  <LinkedinIcon />
                </a>
              </div>

              {/* Bio & Details text */}
              <div className="p-6 flex flex-col flex-grow justify-between relative text-left">
                {/* Background noise */}
                <div className="absolute inset-0 noise-overlay pointer-events-none opacity-20 dark:opacity-30"/>

                <div>
                  <h3 className="text-lg font-bold font-clash text-zinc-900 dark:text-white leading-tight">
                    {mentor.name}
                  </h3>
                  <span className="text-[10px] font-mono tracking-wider font-semibold text-brand-accent uppercase mt-1 inline-block">
                    {mentor.role}
                  </span>
                  
                  <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed mt-4">
                    {mentor.bio}
                  </p>
                </div>

                {/* Footnotes: Past Companies */}
                <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-col gap-2 z-10">
                  <div className="flex items-center gap-1.5 text-[9px] font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest font-mono">
                    <Briefcase size={9}/>
                    <span>Past Credentials</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {mentor.pastCompanies.map((c, i) => (<span key={i} className="px-2 py-0.5 rounded-md text-[9px] font-medium bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 font-mono">
                        {c}
                      </span>))}
                  </div>
                </div>

              </div>
            </motion.div>))}
        </div>

      </div>
    </section>);
}
