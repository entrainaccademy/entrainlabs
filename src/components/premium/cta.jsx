"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";
import { EnrollmentFormAdvanced } from "@/components/ui/enrollment-form-advanced";

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.436 0 9.851-4.388 9.854-9.782.002-2.613-1.013-5.07-2.859-6.918C16.425 2.057 13.968.997 11.36.997c-5.44 0-9.856 4.389-9.859 9.784-.002 1.86.486 3.68 1.417 5.29L1.935 21.8l5.882-1.53.03.016zM17.487 14.39c-.3-.15-1.774-.875-2.049-.976-.276-.1-.476-.15-.676.15-.2.3-.775.976-.95 1.176-.175.2-.35.225-.65.075-1.041-.522-1.745-.92-2.443-1.776-.325-.325-.325-.325-.5-.65-.175-.3-.025-.45.125-.6.135-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.63-1.002-2.413-.275-.66-.554-.57-.756-.58-.198-.01-.425-.012-.65-.012-.225 0-.59.085-.9.425-.31.34-1.185 1.162-1.185 2.833 0 1.671 1.213 3.284 1.383 3.51.17.225 2.39 3.649 5.79 5.121 2.84 1.229 3.42 1.01 4.02.95.6-.06 1.775-.725 2.025-1.425.25-.7.25-1.3 1.75-1.425z" />
  </svg>
);

export default function FinalCTA() {
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const whatsappNumber = "917593841013";
    const handleWhatsAppChat = () => {
        window.open(`https://wa.me/${whatsappNumber}?text=Hi%2C%20I%20am%20interested%20in%20the%20digital%20marketing%20courses%20at%20Entrain%20Labs.`, "_blank");
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
          {/* <Sparkles size={11} className="text-brand-accent"/> */}
          <span className="text-[10px] font-medium font-outfit tracking-wider text-zinc-400 uppercase">
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
            <WhatsAppIcon className="text-[#25D366] h-4 w-4" />
            <span>Chat on WhatsApp</span>
          </button>
        </motion.div>

      </div>

      {/* Advanced Enrollment dialog */}
      <EnrollmentFormAdvanced open={isEnrollOpen} onOpenChange={setIsEnrollOpen}/>
    </section>);
}
