"use client";
import { useRef } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
const CTA = ({ className }) => {
    const ref = useRef(null);
    const bottomAnimation = {
        initial: { y: "5%", opacity: 0 },
        animate: { y: 0, opacity: 1 },
        transition: { duration: 1, delay: 0.8 },
    };
    return (<section>
      <div className="sm:py-16 py-8">
        <div className="max-w-7xl mx-auto sm:px-16 px-4">
          <div ref={ref} className={cn("relative overflow-hidden min-h-96 flex items-center justify-center px-6 border border-border rounded-3xl bg-primary text-primary-foreground shadow-sm", className)}>
            <video aria-hidden="true" autoPlay loop muted playsInline preload="metadata" className="absolute inset-0 h-full w-full object-cover">
              <source src="https://videos.pexels.com/video-files/5200029/5200029-hd_1280_720_25fps.mp4" type="video/mp4"/>
            </video>
            <div className="absolute inset-0 bg-black/55"/>
            <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-black/25"/>
            <motion.div {...bottomAnimation} className="relative z-10 flex flex-col gap-6 items-center mx-auto">
              <div className="flex flex-col gap-3 items-center text-center">
                <h2 className="text-3xl md:text-5xl font-medium">
                  Ready to Transform Your Career?
                </h2>
                <p className="max-w-2xl mx-auto text-primary-foreground/85">
                  Join the best digital marketing academy in Kerala and start building real-world skills today. Don&apos;t just learn — start doing and create a portfolio that gets you hired.
                </p>
              </div>
              <Button className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer bg-background text-foreground hover:bg-background/90">
                <a href="#contact" className="relative z-10 transition-all duration-500">
                  Enroll Now
                </a>
                <div className="absolute right-1 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                  <ArrowUpRight size={16}/>
                </div>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>);
};
export default CTA;
