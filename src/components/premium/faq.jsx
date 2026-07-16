"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { faqData } from "@/lib/data";
export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };
    return (<section id="faq" className="relative py-20 md:py-28 bg-zinc-50 dark:bg-zinc-950 font-sans overflow-hidden border-t border-zinc-150 dark:border-zinc-900">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-[0.02] dark:opacity-[0.03]"/>
      
      {/* Backdrop glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-accent-2/5 blur-[120px] pointer-events-none"/>

      <div className="relative mx-auto max-w-4xl px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 max-w-2xl mx-auto">
       
          <h2 className="text-3xl md:text-5xl font-medium font-outfit tracking-tight text-zinc-900 dark:text-white leading-tight">
            Frequently Asked Questions.
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-[12px] leading-relaxed font-outfit font-light">
            Get clarity on academy batches, curriculum operations, placement support, and fees structure.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (<motion.div key={idx} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.05 }} className={`rounded-2xl border transition-all duration-300 overflow-hidden relative text-left ${isOpen
                    ? "bg-white dark:bg-zinc-900  border-brand-primary/5 font-outfit font-normal shadow-primary/10 shadow-md"
                    : "bg-white dark:bg-zinc-900/40 border-zinc-150 dark:border-zinc-800/80 hover:border-zinc-300 dark:hover:border-zinc-700"}`}>
                {/* Background noise */}
                <div className="absolute inset-0 noise-overlay  pointer-events-none opacity-20 dark:opacity-30"/>

                {/* Accordion Trigger button */}
                <button onClick={() => toggleFAQ(idx)} className="w-full flex items-center justify-between p-5 md:p-6 cursor-pointer text-left z-10 relative">
                  <div className="flex items-center gap-4 pr-4">
                    <HelpCircle size={15} className={`shrink-0 transition-colors duration-300 ${isOpen ? "text-brand-accent" : "text-zinc-400"}`}/>
                    <span className="text-sm font-medium font-outfit text-zinc-900 dark:text-white  leading-snug">
                      {item.question}
                    </span>
                  </div>

                  <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 transition-transform duration-300 ${isOpen ? "rotate-180 bg-brand-accent/10 text-brand-accent" : ""}`}>
                    {isOpen ? <Minus size={12}/> : <Plus size={12}/>}
                  </div>
                </button>

                {/* Accordion Content reveal */}
                <AnimatePresence initial={false}>
                  {isOpen && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }} className="z-10 relative">
                      <div className="px-5 pb-5 md:px-6 md:pb-6 text-xs md:text-sm text-zinc-500 dark:text-zinc-405 leading-relaxed pl-12">
                        {item.answer}
                      </div>
                    </motion.div>)}
                </AnimatePresence>

              </motion.div>);
        })}
        </div>

      </div>
    </section>);
}
