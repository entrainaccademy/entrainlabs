"use client";
import { motion } from "motion/react";
import { Cpu, Award, Layers, TrendingUp, Target, Search, Globe, BookOpen, Zap, Users } from "lucide-react";
import { toolsData } from "@/lib/data";
export default function AIToolsSection() {
    // Map tools to icons that are guaranteed to exist in this version
    const toolIcons = {
        ChatGPT: Cpu,
        Canva: Award,
        "Meta Business": Layers,
        "Google Analytics": TrendingUp,
        "Google Ads": Target,
        SEMrush: Search,
        Ahrefs: Globe,
        Notion: BookOpen,
        Zapier: Zap,
        HubSpot: Users
    };
    const getCategoryColor = (category) => {
        switch (category) {
            case "AI & Content":
                return "text-purple-500 bg-purple-500/10 border-purple-500/20";
            case "Ad Operations":
                return "text-blue-500 bg-blue-500/10 border-blue-500/20";
            case "Organic Growth":
                return "text-emerald-500 bg-emerald-500/10 border-emerald-500/20";
            case "Analytics":
            default:
                return "text-amber-500 bg-amber-500/10 border-amber-500/20";
        }
    };
    return (<section className="relative py-20 md:py-28 bg-white dark:bg-zinc-950 font-sans overflow-hidden">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-[0.02] dark:opacity-[0.03]"/>
      
      {/* Backdrop glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-accent/5 blur-[120px] pointer-events-none"/>

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent font-satoshi">
            AI Tools You'll Learn
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-clash tracking-tight text-zinc-900 dark:text-white leading-tight">
            Deploy Modern Tooling.
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
            Theoretical knowledge isn't enough. Gain hands-on competence in active industry platforms and generative AI tools that multiply campaign output.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {toolsData.map((tool, idx) => {
            const ToolIcon = toolIcons[tool.name] || Cpu;
            const categoryStyle = getCategoryColor(tool.category);
            return (<motion.div key={idx} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="spotlight-card group relative rounded-3xl p-6 bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-150 dark:border-zinc-800/80 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-md flex flex-col justify-between text-left overflow-hidden h-44">
                {/* Background noise */}
                <div className="absolute inset-0 noise-overlay pointer-events-none opacity-20 dark:opacity-30"/>

                <div className="z-10">
                  {/* Category tag */}
                  <span className={`inline-flex px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold uppercase tracking-wider border mb-4 ${categoryStyle}`}>
                    {tool.category}
                  </span>
                  
                  {/* Tool Title */}
                  <h3 className="text-base font-bold font-clash text-zinc-900 dark:text-white mb-2 group-hover:text-brand-accent transition-colors">
                    {tool.name}
                  </h3>
                </div>

                {/* Tool Description & Icon */}
                <div className="flex justify-between items-end mt-4 z-10">
                  <p className="text-[11px] text-zinc-400 dark:text-zinc-500 leading-normal max-w-[120px] font-sans">
                    {tool.description}
                  </p>
                  
                  <div className="p-2.5 rounded-xl bg-zinc-200/50 dark:bg-zinc-800 border border-zinc-300/20 dark:border-zinc-700/30 text-zinc-500 dark:text-zinc-400 group-hover:text-brand-accent group-hover:bg-brand-accent/15 group-hover:border-brand-accent/20 transition-all duration-300">
                    <ToolIcon size={14}/>
                  </div>
                </div>

              </motion.div>);
        })}
        </div>

      </div>
    </section>);
}
