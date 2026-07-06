"use client";
import { motion } from "motion/react";
import { Globe, Layers, Briefcase, Award, Users, Zap, Target, TrendingUp, GraduationCap } from "lucide-react";
import { partnersData } from "@/lib/data";
export default function PlacementPartners() {
    // Map logo names to Lucide icons that are guaranteed to exist in this version
    const logoIcons = {
        Google: Globe,
        Meta: Layers,
        HubSpot: Briefcase,
        Canva: Award,
        Shopify: Briefcase,
        WordPress: Globe,
        Zoho: Layers,
        Dentsu: TrendingUp,
        GroupM: Target,
        Publicis: Users,
        WatConsult: Zap,
        iProspect: GraduationCap,
    };
    return (<section className="relative py-20 bg-white dark:bg-zinc-950 font-sans border-t border-zinc-150 dark:border-zinc-900 overflow-hidden">
      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-[0.02] dark:opacity-[0.03]"/>

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Header content */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 max-w-xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent font-satoshi">
            Placement Network
          </span>
          <h3 className="text-2xl md:text-4xl font-bold font-clash tracking-tight text-zinc-900 dark:text-white leading-tight">
            Where Our Graduates Work.
          </h3>
          <p className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm leading-relaxed">
            Our students are recruited by global marketing agencies, tech companies, and direct retail brands across regions.
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {partnersData.map((partner, idx) => {
            const Icon = logoIcons[partner.logo] || Globe;
            return (<motion.div key={idx} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className="group flex flex-col items-center justify-center p-6 rounded-2xl border border-zinc-150 dark:border-zinc-850 bg-zinc-50/50 dark:bg-zinc-900/20 hover:bg-white dark:hover:bg-zinc-900 hover:border-brand-accent-2/30 dark:hover:border-brand-accent-2/20 hover:shadow-md transition-all duration-300 cursor-pointer h-28 relative">
                <div className="absolute inset-0 noise-overlay pointer-events-none opacity-20 dark:opacity-30"/>
                <Icon size={24} className="text-zinc-400 dark:text-zinc-650 group-hover:text-zinc-800 dark:group-hover:text-white transition-colors duration-300 shrink-0 mb-2"/>
                <span className="text-[10px] font-bold font-satoshi uppercase tracking-wider text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-800 dark:group-hover:text-zinc-300 transition-colors duration-300">
                  {partner.name}
                </span>
              </motion.div>);
        })}
        </div>

      </div>
    </section>);
}
