"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { EnrollmentFormAdvanced } from "@/components/ui/enrollment-form-advanced";
import { cn } from "@/lib/utils";
import { Link as RouterLink } from "next/link";
import Link from "next/link";
import logo from '@/assets/logolab.png'

const navLinks = [
  { label: "Home", href: "/", id: "home" },
  { label: "About", href: "/about", id: "about" },
  { label: "Blog", href: "/blog", id: "blog" },
  { label: "Contact", href: "/contact", id: "contact" },
  { label: "Courses", href: "/courses", id: "course" } 
];
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      }
      else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (<>
    <motion.header className="fixed top-0 left-0 right-0  z-50 w-full pointer-events-none flex flex-col items-center  pt-6 md:pt-8" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }}>
      {/* Floating Capsule Container */}
      <div className={cn("pointer-events-auto w-[94%] md:px-0 px-4 md:w-[94%]  h-16 md:h-[70px]   max-w-6xl flex items-center justify-between transition-all duration-300 ease-in-out rounded-[12px] md:rounded-[18px] border border-primary/10 bg-background/80 backdrop-blur-xl shadow-lg shadow-black/5", isScrolled ? "py-2 px-6 md:px-8" : "py-2 px-6 md:px-8")}>
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <div className="relative w-24 h-16 overflow-visible">
            <img
              src={logo.src || logo}
              alt="Entrain Labs Logo"
              width={96}
              height={64}
              decoding="async"
              className="absolute w-24 h-16 inset-0 m-auto object-contain transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        </Link>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center font-satoshi text-[#4B5563]   gap-1.5 relative">
          {navLinks.map((link) => {
            return (<Link key={link.id} href={link.href} className="text-sm font-medium text-zinc-600 dark:text-zinc-900 hover:text-black dark:hover:text-white transition-colors py-1.5 px-4">
              {link.label}
            </Link>);
          })}
        </nav>

        {/* Action Center */}
        <div className="flex items-center gap-3">
          {/* Premium CTA */}
          <button onClick={() => setIsEnrollOpen(true)} className="relative hidden  font-satoshi  sm:inline-flex h-9 items-center justify-center rounded-full bg-brand-primary dark:bg-white text-white dark:text-zinc-950 px-5 text-xs font-semibold tracking-wider hover:bg-brand-primary/95 dark:hover:bg-white/90 shadow transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer">
            Apply Now
          </button>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="flex lg:hidden h-9 w-9 items-center justify-center   border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-650 dark:text-zinc-300 transition-colors cursor-pointer text-primary dark:bg-zinc-900/50" aria-label="Toggle mobile menu">
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (<motion.div initial={{ opacity: 0, height: 0, y: -10 }} animate={{ opacity: 1, height: "auto", y: 0 }} exit={{ opacity: 0, height: 0, y: -10 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="lg:hidden w-[92%] mx-auto mt-2 bg-card/95 border border-border/80 rounded-2xl shadow-xl overflow-hidden glassmorphism backdrop-blur-xl pointer-events-auto">
          <div className="px-6 py-6 flex flex-col gap-4">


            <div className="flex flex-col  gap-3 font-helvetica font-thin text-[14px] leading-[20px] tracking-[0px] normal-case">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-800 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white py-2 border-b border-zinc-100 dark:border-zinc-900">
                <p className="capitalize">Home</p>
              </Link>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-800 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white py-2 border-b border-zinc-100 dark:border-zinc-900">
                <p className="capitalize">About Us</p>
              </Link>
              <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-800 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white py-2 border-b border-zinc-100 dark:border-zinc-900">
                <p className='capitalize'>Blog</p>
              </Link>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-800 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white py-2">
                <p className='capitalize'>Contact</p>
              </Link>
            </div>

            <button onClick={() => {
              setIsMobileMenuOpen(false);
              setIsEnrollOpen(true);
            }} className="w-full flex h-11 items-center justify-center rounded-xl bg-brand-primary dark:bg-white text-white dark:text-zinc-950 text-xs font-semibold tracking-wider hover:bg-brand-primary/95 dark:hover:bg-white/90 shadow transition-colors">
              Apply Now
            </button>
          </div>
        </motion.div>)}
      </AnimatePresence>
    </motion.header>

    {/* Advanced Enrollment dialog */}
    <EnrollmentFormAdvanced open={isEnrollOpen} onOpenChange={setIsEnrollOpen} />
  </>);
}
