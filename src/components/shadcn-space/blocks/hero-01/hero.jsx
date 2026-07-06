"use client";
import { Instrument_Serif } from "next/font/google";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { EnrollmentForm } from "@/components/ui/enrollment-form";
const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: ["400"],
    style: ["italic"],
});
function HeroSection({ avatarList }) {
    const heroRef = useRef(null);
    const headingRef = useRef(null);
    const paragraphRef = useRef(null);
    const ctaRef = useRef(null);
    const [isFormOpen, setIsFormOpen] = useState(false);
    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        // Animate heading with split text effect
        if (headingRef.current) {
            gsap.set(headingRef.current, { opacity: 1 });
            tl.from(headingRef.current, {
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
            });
        }
        // Animate paragraph
        if (paragraphRef.current) {
            tl.from(paragraphRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            }, "-=0.8");
        }
        // Animate CTA section
        if (ctaRef.current) {
            tl.from(ctaRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
            }, "-=0.6");
        }
    }, { scope: heroRef });
    return (<section ref={heroRef} className="min-h-[100dvh] flex items-center justify-center">
      <div className="w-full h-full relative">
        <div className="relative w-full py-8 md:py-20 before:absolute before:w-full before:h-full before:bg-linear-to-r before:from-sky-100 before:via-white before:to-amber-100 before:rounded-full before:top-24 before:blur-3xl before:-z-10 dark:before:from-slate-800 dark:before:via-black dark:before:to-stone-700 dark:before:rounded-full dark:before:blur-3xl dark:before:-z-10">
          <div className="container mx-auto relative z-10">
            <div className="flex flex-col max-w-5xl mx-auto gap-8">
              <div className="relative flex flex-col text-center items-center sm:gap-6 gap-4">
                <h1 ref={headingRef} style={{ opacity: 0 }} className="lg:text-8xl md:text-7xl text-5xl font-medium leading-14 md:leading-20 lg:leading-24">
                  Where Learning Meets{" "}
                  <span className={`${instrumentSerif.className} tracking-tight`}>
                    Real-World Experience
                  </span>
                </h1>
                <p ref={paragraphRef} className="text-base font-normal max-w-2xl text-muted-foreground">
                  Entrain Labs is a career-focused platform that bridges the gap between learning and real-world digital marketing. Backed by the best digital marketing academy in Kerala, we offer practical training, live projects, and expert guidance to help you build a successful career.
                </p>
              </div>
              <div ref={ctaRef} className="flex items-center flex-col md:flex-row justify-center gap-8">
                <Button onClick={() => setIsFormOpen(true)} className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden cursor-pointer">
                  <span className="relative z-10 transition-all duration-500">
                    Start Learning
                  </span>
                  <span className="absolute right-1 w-10 h-10 bg-background text-foreground rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                    <ArrowUpRight size={16}/>
                  </span>
                </Button>
                <div className="flex items-center sm:gap-7 gap-3">
                  <ul className="avatar flex flex-row items-center">
                    {avatarList.map((avatar, index) => (<li key={index} className="-mr-2 z-1 avatar-hover:ml-2">
                        <img src={avatar.image} alt="Avatar" width={40} height={40} className="rounded-full border-2 border-white"/>
                      </li>))}
                  </ul>
                  <div className="gap-1 flex flex-col items-start">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, index) => (<img key={index} src="https://images.shadcnspace.com/assets/svgs/icon-star.svg" alt="star" className="h-4 w-4"/>))}
                    </div>
                    <p className="sm:text-sm text-xs font-normal text-muted-foreground">
                      Now enrolling — limited seats
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <EnrollmentForm open={isFormOpen} onOpenChange={setIsFormOpen} autoTrigger={true} triggerDelay={15000} // Show popup after 15 seconds
    />
    </section>);
}
export default HeroSection;
