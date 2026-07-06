"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import { EnrollmentFormAdvanced } from "@/components/ui/enrollment-form-advanced";
export default function FinalCTA() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const whatsappNumber = "919745020223";
    const handleWhatsAppChat = () => {
        window.open(`https://wa.me/${whatsappNumber}?text=Hi%2C%20I%20am%20interested%20in%20the%20digital%2520marketing%2520courses%20at%20Entrain%20Labs.`, "_blank");
    };
    return (<section className="relative py-24 md:py-32 bg-zinc-950 text-white font-sans overflow-hidden text-center">
      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-30"/>

      {/* Massive cinematic gradient mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[400px] md:h-[600px] rounded-full bg-gradient-to-r from-brand-accent/20 via-brand-accent-2/15 to-emerald-500/10 blur-[130px] md:blur-[180px] opacity-75 pointer-events-none animate-pulse" style={{ animationDuration: "12s" }}/>
      </div>

      <div className="relative mx-auto max-w-4xl px-6 md:px-8 z-10 flex flex-col items-center gap-6">
        
        {/* Animated tag */}
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 backdrop-blur-md">
          <Sparkles size={11} className="text-brand-accent"/>
          <span className="text-[10px] font-semibold font-mono tracking-wider text-zinc-400 uppercase">
            Start Your Transformation
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-4xl md:text-6xl font-bold font-clash tracking-tight leading-none bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent max-w-2xl">
          Ready to Build Your Career?
        </motion.h2>

        {/* Subtitle */}
        <motion.p initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-md">
          Join Entrain Labs today. Connect with industry mentors, gain verified agency experience, and unlock recruitment channels.
        </motion.p>

        {/* Buttons Action Center */}
        <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <button onClick={() => setIsEnrollOpen(true)} className="flex h-12 items-center justify-center gap-2 rounded-full bg-white text-zinc-950 px-8 text-xs font-semibold tracking-wider hover:bg-zinc-100 shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group">
            <span>Apply Now</span>
            <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5"/>
          </button>
          
          <button onClick={handleWhatsAppChat} className="flex h-12 items-center justify-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/40 hover:bg-zinc-800 text-zinc-200 px-7 text-xs font-semibold tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
            <MessageCircle size={14} className="text-[#25D366] fill-[#25D366]/20"/>
            <span>Chat on WhatsApp</span>
          </button>
        </motion.div>

      </div>

      {/* Advanced Enrollment dialog */}
      <EnrollmentFormAdvanced open={isEnrollOpen} onOpenChange={setIsEnrollOpen}/>
    </section>);
}
