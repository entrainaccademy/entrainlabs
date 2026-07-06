"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
export default function LoadingScreen() {
    const [progress, setProgress] = useState(0);
    const [isDone, setIsDone] = useState(false);
    useEffect(() => {
        // Lock scrolling initially
        document.body.style.overflow = "hidden";
        let current = 0;
        // Stepwise increment to make loading speed dynamic and realistic
        const interval = setInterval(() => {
            const remaining = 100 - current;
            let increment = 1;
            if (remaining > 50) {
                increment = Math.floor(Math.random() * 12) + 5; // Fast initially
            }
            else if (remaining > 15) {
                increment = Math.floor(Math.random() * 5) + 2; // Slow down
            }
            else {
                increment = 1; // Creep to 100%
            }
            current += increment;
            if (current >= 100) {
                current = 100;
                setProgress(100);
                clearInterval(interval);
                setTimeout(() => {
                    setIsDone(true);
                    document.body.style.overflow = "unset";
                }, 700);
            }
            else {
                setProgress(current);
            }
        }, 70);
        return () => {
            clearInterval(interval);
            document.body.style.overflow = "unset";
        };
    }, []);
    return (<AnimatePresence>
      {!isDone && (<motion.div className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-zinc-950 text-white" exit={{
                y: "-100%",
                opacity: 0,
                transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
            }}>
          {/* Texture Overlay */}
          <div className="absolute inset-0 noise-overlay pointer-events-none opacity-20"/>
          
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-accent/15 blur-[100px] pointer-events-none"/>

          {/* Loader Branding */}
          <div className="relative flex flex-col items-center">
            {/* Logo Text Reveal */}
            <motion.div initial={{ letterSpacing: "0.15em", opacity: 0 }} animate={{ letterSpacing: "0.45em", opacity: 1 }} transition={{ duration: 1, ease: "easeOut" }} className="text-xs font-semibold tracking-[0.45em] text-zinc-400 font-satoshi uppercase mb-2">
              ENTRAIN LABS
            </motion.div>
            
            {/* Massive Percentage Counter */}
            <div className="overflow-hidden h-24 flex items-center justify-center">
              <motion.div initial={{ y: 90 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="text-6xl md:text-8xl font-bold font-clash tracking-tight text-white select-none">
                {progress}
                <span className="text-zinc-500 font-light text-5xl md:text-6xl ml-1">%</span>
              </motion.div>
            </div>

            {/* Custom progress tracker line */}
            <div className="w-56 h-[1.5px] bg-zinc-800 rounded-full overflow-hidden mt-4 relative">
              <motion.div className="absolute inset-y-0 left-0 bg-gradient-to-r from-brand-accent-2 to-brand-accent rounded-full" style={{ width: `${progress}%` }} transition={{ duration: 0.1, ease: "linear" }}/>
            </div>
            
            {/* Animated sub-tagline */}
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 0.4 }} className="text-[10px] font-mono text-zinc-500 mt-3 uppercase tracking-wider">
              Curating Premium Education...
            </motion.span>
          </div>
        </motion.div>)}
    </AnimatePresence>);
}
