"use client";
import { motion } from "motion/react";
import { Users, Target, Cpu, Briefcase, Award, GraduationCap } from "lucide-react";
export default function WhyChooseUs() {
    const cards = [
        {
            title: "Industry Mentors",
            description: "Learn directly from ex-agency directors, SEO architects, and active performance specialists. Get real-world guidance, not dry theory.",
            icon: Users,
            color: "text-purple-500 bg-purple-500/10 border-purple-500/20"
        },
        {
            title: "Live Projects",
            description: "Get hands-on experience managing active advertising accounts with actual budgets. Audit real sites and execute client-facing campaigns.",
            icon: Target,
            color: "text-blue-500 bg-blue-500/10 border-blue-500/20"
        },
        {
            title: "AI Tools Integration",
            description: "Master generative AI workflows. Learn bulk copywriting automation, custom GPT development, and campaign performance scripts.",
            icon: Cpu,
            color: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20"
        },
        {
            title: "Placement Support",
            description: "Continuous resume coaching, portfolio design boards, and mock panels with agency hiring directors. Connect directly with hiring partners.",
            icon: Briefcase,
            color: "text-amber-500 bg-amber-500/10 border-amber-500/20"
        },
        {
            title: "Accredited Certifications",
            description: "Obtain an official Entrain Labs degree accompanied by dedicated mentoring to secure 15+ accreditations from Google, Meta, and HubSpot.",
            icon: Award,
            color: "text-rose-500 bg-rose-500/10 border-rose-500/20"
        },
        {
            title: "Guaranteed Internship",
            description: "Transition from student to practitioner with a 3-month placement in our partner agencies, building a portfolio employers value.",
            icon: GraduationCap,
            color: "text-indigo-500 bg-indigo-500/10 border-indigo-500/20"
        }
    ];
    return (<section id="about" className="relative py-20 md:py-28 bg-white dark:bg-zinc-950 font-sans overflow-hidden">
      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-[0.02] dark:opacity-[0.03]"/>
      
      {/* Back glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-brand-accent/5 blur-[120px] pointer-events-none"/>

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 md:mb-20 max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent font-satoshi">
            Why Entrain Labs
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-clash tracking-tight text-zinc-900 dark:text-white leading-tight">
            Designed for Real-World Competency.
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base leading-relaxed">
            Move past standard templates. Our academy provides an immersion format designed by active practitioners to accelerate your marketing career.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (<motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }} className="spotlight-card group relative rounded-3xl p-8 bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-150 dark:border-zinc-800/80 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md flex flex-col items-start text-left overflow-hidden">
                {/* Background noise texture */}
                <div className="absolute inset-0 noise-overlay pointer-events-none opacity-20 dark:opacity-30"/>
                
                {/* Icon box */}
                <div className={`p-3 rounded-2xl border mb-6 transition-all duration-300 group-hover:scale-110 z-10 ${card.color}`}>
                  <IconComponent size={20}/>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold font-clash text-zinc-900 dark:text-white mb-3 z-10">
                  {card.title}
                </h3>
                <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed z-10">
                  {card.description}
                </p>
              </motion.div>);
        })}
        </div>

      </div>
    </section>);
}
