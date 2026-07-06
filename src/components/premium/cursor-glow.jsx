"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";
export default function CursorGlow() {
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);
    const springConfig = { damping: 30, stiffness: 250, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);
    // Declare ambient spring values unconditionally at the top to satisfy React Rules of Hooks
    const ambientX = useSpring(mouseX, { damping: 50, stiffness: 150 });
    const ambientY = useSpring(mouseY, { damping: 50, stiffness: 150 });
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
        const moveCursor = (e) => {
            mouseX.set(e.clientX - 12);
            mouseY.set(e.clientY - 12);
            // Update CSS variables on documentElement for CSS card spotlights
            const target = e.target;
            if (target) {
                const card = target.closest(".spotlight-card");
                if (card) {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty("--mouse-x", `${x}px`);
                    card.style.setProperty("--mouse-y", `${y}px`);
                }
            }
        };
        window.addEventListener("mousemove", moveCursor);
        return () => {
            window.removeEventListener("mousemove", moveCursor);
        };
    }, [mouseX, mouseY]);
    if (!mounted)
        return null;
    return (<>
      {/* Micro cursor dot trail (visible on desktop only) */}
      <motion.div className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-6 w-6 rounded-full border border-brand-accent/50 bg-brand-accent/10 mix-blend-difference transition-transform duration-100 ease-out md:block" style={{
            x: cursorX,
            y: cursorY,
        }}/>
      {/* Huge subtle ambient spotlight trailing the cursor */}
      <motion.div className="pointer-events-none fixed left-0 top-0 z-[9998] hidden h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial from-brand-accent/5 to-transparent opacity-60 blur-[130px] md:block" style={{
            x: ambientX,
            y: ambientY,
        }}/>
    </>);
}
