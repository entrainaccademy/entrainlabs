"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Users, GraduationCap, Building2, Star } from "lucide-react";
function Counter({ value, suffix = "", duration = 1.5 }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    useEffect(() => {
        if (!isInView)
            return;
        let start = 0;
        const end = value;
        const stepTime = 16; // Approx 60 FPS
        const steps = Math.floor((duration * 1000) / stepTime);
        const increment = end / steps;
        let timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                clearInterval(timer);
                setCount(end);
            }
            else {
                setCount(Math.floor(start));
            }
        }, stepTime);
        return () => clearInterval(timer);
    }, [isInView, value, duration]);
    return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}
export default function NumbersSection() {
    const stats = [
        {
            value: 5000,
            suffix: "+",
            label: "Students Trained",
            description: "Graduates working worldwide",
            icon: Users,
            color: "text-purple-500 bg-purple-500/10"
        },
        {
            value: 1000,
            suffix: "+",
            label: "Placements Secured",
            description: "Direct agency & brand hires",
            icon: GraduationCap,
            color: "text-blue-500 bg-blue-500/10"
        },
        {
            value: 100,
            suffix: "+",
            label: "Hiring Partners",
            description: "Active recruitment network",
            icon: Building2,
            color: "text-emerald-500 bg-emerald-500/10"
        },
        {
            value: 4.9,
            suffix: "★",
            label: "Student Rating",
            description: "Verified alumni reviews",
            icon: Star,
            color: "text-amber-500 bg-amber-500/10"
        }
    ];
    return (<section className="relative py-20 bg-zinc-950 text-white font-sans overflow-hidden">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-20"/>
      
      {/* Backdrop glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-accent/5 blur-[120px] pointer-events-none"/>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-brand-accent-2/5 blur-[120px] pointer-events-none"/>

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => {
            const StatIcon = stat.icon;
            return (<motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.08 }} className="group flex flex-col items-center text-center p-6 md:p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800 relative overflow-hidden">
                <div className="absolute inset-0 noise-overlay pointer-events-none opacity-20"/>
                
                {/* Decorative Icon */}
                <div className={`p-3 rounded-2xl mb-4 shrink-0 transition-transform duration-300 group-hover:scale-110 ${stat.color}`}>
                  <StatIcon size={18} className={stat.color.split(" ")[0]}/>
                </div>

                {/* Big number counter */}
                <span className="text-4xl md:text-5xl font-bold font-clash text-white tracking-tight mb-2 select-none">
                  {stat.value === 4.9 ? (
                // Float decimal counter handler
                <>
                      4.9
                      <span className="text-amber-500 ml-0.5">★</span>
                    </>) : (<Counter value={stat.value} suffix={stat.suffix}/>)}
                </span>

                {/* Label & description */}
                <span className="text-xs font-bold font-satoshi uppercase tracking-wider text-zinc-300 mb-1 z-10">
                  {stat.label}
                </span>
                <span className="text-[10px] text-zinc-500 font-sans z-10">
                  {stat.description}
                </span>

              </motion.div>);
        })}
        </div>

      </div>
    </section>);
}
