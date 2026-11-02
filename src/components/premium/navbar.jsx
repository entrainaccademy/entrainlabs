"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, Building2, MonitorPlay, ArrowRight } from "lucide-react";
import { EnrollmentFormAdvanced } from "@/components/ui/enrollment-form-advanced";
import { cn } from "@/lib/utils";
import Link from "next/link";
import logo from '@/assets/logolab.png';

const navLinks = [
  { label: "Home", href: "/", id: "home" },
  { label: "About", href: "/about", id: "about" },
  { label: "Courses", href: "/courses", id: "course" },
  { label: "Learning Modes", href: "/learning-modes", id: "learning-modes" },
  { label: "Blog", href: "/blog", id: "blog" },
  { label: "Contact", href: "/contact", id: "contact" },
];

const courseLinks = [
  {
    label: "Digital Marketing Master",
    desc: "24-week full-stack flagship program",
    href: "/courses/digital-marketing-master-program",
  },
  {
    label: "Performance Marketing",
    desc: "Paid media buying & ROAS scaling",
    href: "/courses/performance-marketing",
  },
  {
    label: "SEO Optimization",
    desc: "Technical SEO, audits & ranking",
    href: "/courses/seo-optimization",
  },
  {
    label: "Google Ads & Meta Ads",
    desc: "Search, YouTube, Meta & CAPI",
    href: "/courses/google-ads-meta-ads",
  },
  {
    label: "Career Support & Internship",
    desc: "Agency residency & placement",
    href: "/courses/career-support-internship",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isModesOpen, setIsModesOpen] = useState(false);
  const [isMobileCoursesOpen, setIsMobileCoursesOpen] = useState(false);
  const [isMobileModesOpen, setIsMobileModesOpen] = useState(false);
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const coursesTimeoutRef = useRef(null);
  const modesTimeoutRef = useRef(null);

  const handleCoursesMouseEnter = () => {
    if (coursesTimeoutRef.current) clearTimeout(coursesTimeoutRef.current);
    setIsCoursesOpen(true);
  };

  const handleCoursesMouseLeave = () => {
    coursesTimeoutRef.current = setTimeout(() => {
      setIsCoursesOpen(false);
    }, 150);
  };

  const handleModesMouseEnter = () => {
    if (modesTimeoutRef.current) clearTimeout(modesTimeoutRef.current);
    setIsModesOpen(true);
  };

  const handleModesMouseLeave = () => {
    modesTimeoutRef.current = setTimeout(() => {
      setIsModesOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (coursesTimeoutRef.current) clearTimeout(coursesTimeoutRef.current);
      if (modesTimeoutRef.current) clearTimeout(modesTimeoutRef.current);
    };
  }, []);

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 w-full pointer-events-none flex flex-col items-center pt-6 md:pt-8"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Floating Capsule Container */}
        <div
          className={cn(
            "pointer-events-auto w-[94%] md:px-0 px-4 md:w-[94%] h-16 md:h-[70px] max-w-6xl flex items-center justify-between transition-all duration-300 ease-in-out rounded-[12px] md:rounded-[18px] border border-primary/10 bg-background/80 backdrop-blur-xl shadow-lg shadow-black/5",
            isScrolled ? "py-2 px-6 md:px-8" : "py-2 px-6 md:px-8"
          )}
        >
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
          <nav className="hidden lg:flex items-center font-satoshi text-[#4B5563] gap-1 relative">
            {navLinks.map((link) => {
              // Courses dropdown
              if (link.id === "course") {
                return (
                  <div
                    key={link.id}
                    className="relative"
                    onMouseEnter={handleCoursesMouseEnter}
                    onMouseLeave={handleCoursesMouseLeave}
                  >
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors py-1.5 px-3 rounded-lg hover:bg-zinc-100/60 dark:hover:bg-zinc-800/50"
                    >
                      <span>{link.label}</span>
                      {/* <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-200 text-zinc-400 group-hover:text-zinc-600",
                          isCoursesOpen && "rotate-180 text-brand-primary"
                        )}
                      /> */}
                    </Link>

                    {/* Courses Dropdown Menu */}
                    {/* <AnimatePresence>
                      {isCoursesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.96 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 min-w-[280px] z-50 pointer-events-auto"
                        >
                          <div className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border border-zinc-200/90 dark:border-zinc-800 rounded-xl shadow-xl shadow-zinc-950/10 p-2 flex flex-col gap-1 whitespace-nowrap">
                            {courseLinks.map((course) => (
                              <Link
                                key={course.href}
                                href={course.href}
                                onClick={() => setIsCoursesOpen(false)}
                                className="px-3 py-2 rounded-lg hover:bg-zinc-100/70 dark:hover:bg-zinc-800/60 transition-colors text-left flex flex-col group/item"
                              >
                                <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-100 group-hover/item:text-brand-primary dark:group-hover/item:text-emerald-400 transition-colors">
                                  {course.label}
                                </span>
                                <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-satoshi font-normal">
                                  {course.desc}
                                </span>
                              </Link>
                            ))}
                            <div className="h-[1px] bg-zinc-100 dark:bg-zinc-800 my-1" />
                            <Link
                              href="/courses"
                              onClick={() => setIsCoursesOpen(false)}
                              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-[#0A756A] dark:text-emerald-400 hover:bg-[#0A756A]/10 transition-colors text-left flex items-center justify-between"
                            >
                              <span>View All Courses Catalog</span>
                              <ArrowRight size={12} />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence> */}
                  </div>
                );
              }

              // Learning Modes dropdown
              if (link.id === "learning-modes") {
                return (
                  <div
                    key={link.id}
                    className="relative"
                    onMouseEnter={handleModesMouseEnter}
                    onMouseLeave={handleModesMouseLeave}
                  >
                    <Link
                      href={link.href}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors py-1.5 px-3 rounded-lg hover:bg-zinc-100/60 dark:hover:bg-zinc-800/50"
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        size={14}
                        className={cn(
                          "transition-transform duration-200 text-zinc-400 group-hover:text-zinc-600",
                          isModesOpen && "rotate-180 text-brand-primary"
                        )}
                      />
                    </Link>

                    {/* Learning Modes Dropdown Menu */}
                    <AnimatePresence>
                      {isModesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.96 }}
                          transition={{ duration: 0.18, ease: "easeOut" }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 min-w-[230px] z-50 pointer-events-auto"
                        >
                          <div className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl border border-zinc-200/90 dark:border-zinc-800 rounded-xl shadow-xl shadow-zinc-950/10 p-2 flex flex-col gap-1 whitespace-nowrap">
                            <Link
                              href="/offline-batches"
                              onClick={() => setIsModesOpen(false)}
                              className="px-3 py-2 rounded-lg hover:bg-zinc-100/70 dark:hover:bg-zinc-800/60 transition-colors text-left flex items-start gap-2.5 group/mode"
                            >
                              {/* <Building2 size={15} className="text-[#0A756A] shrink-0 mt-0.5" /> */}
                              <div className="flex flex-col">
                                <span className="text-xs font-semibold capitalize text-zinc-800 dark:text-zinc-100 group-hover/mode:text-brand-primary dark:group-hover/mode:text-emerald-400 transition-colors">
                                  Offline Batch 
                                </span>
                               
                              </div>
                            </Link>

                            <Link
                              href="/online-plans"
                              onClick={() => setIsModesOpen(false)}
                              className="px-3 py-2 rounded-lg hover:bg-zinc-100/70 dark:hover:bg-zinc-800/60 transition-colors text-left flex items-start gap-2.5 group/mode"
                            >
                              {/* <MonitorPlay size={15} className="text-amber-600 shrink-0 mt-0.5" /> */}
                              <div className="flex flex-col">
                                <span className="text-xs font-semibold capitalize text-zinc-800 dark:text-zinc-100 group-hover/mode:text-amber-600 transition-colors">
                                  online trainig plans
                                </span>
                                
                              </div>
                            </Link>

                            <div className="h-[1px] bg-zinc-100 dark:bg-zinc-800 my-1" />

                            {/* <Link
                              href="/learning-modes"
                              onClick={() => setIsModesOpen(false)}
                              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-[#0A756A] dark:text-emerald-400 hover:bg-[#0A756A]/10 transition-colors text-left flex items-center justify-between"
                            >
                              <span>Compare Learning Modes</span>
                              <ArrowRight size={12} />
                            </Link> */}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors py-1.5 px-3 rounded-lg hover:bg-zinc-100/60 dark:hover:bg-zinc-800/50"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Center */}
          <div className="flex items-center gap-3">
            {/* Premium CTA */}
            <button
              onClick={() => setIsEnrollOpen(true)}
              className="relative hidden font-satoshi sm:inline-flex h-9 items-center justify-center rounded-full bg-brand-primary dark:bg-white text-white dark:text-zinc-950 px-5 text-xs font-semibold tracking-wider hover:bg-brand-primary/95 dark:hover:bg-white/90 shadow transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
            >
              Apply Now
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex lg:hidden h-9 w-9 items-center justify-center border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-650 dark:text-zinc-300 transition-colors cursor-pointer text-primary dark:bg-zinc-900/50"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden w-[92%] mx-auto mt-2 bg-card/95 border border-border/80 rounded-2xl shadow-xl overflow-hidden glassmorphism backdrop-blur-xl pointer-events-auto"
            >
              <div className="px-6 py-6 flex flex-col gap-4">
                <div className="flex flex-col gap-2 font-helvetica font-thin text-[14px] leading-[20px] tracking-[0px] normal-case">
                  <Link
                    href="/"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-zinc-800 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white py-2 border-b border-zinc-100 dark:border-zinc-900"
                  >
                    <p className="capitalize">Home</p>
                  </Link>

                  <Link
                    href="/about"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-zinc-800 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white py-2 border-b border-zinc-100 dark:border-zinc-900"
                  >
                    <p className="capitalize">About Us</p>
                  </Link>

                  {/* Courses Accordion in Mobile Menu */}
                  <div className="border-b border-zinc-100 dark:border-zinc-900 py-1">
                    <button
                      type="button"
                      onClick={() => setIsMobileCoursesOpen(!isMobileCoursesOpen)}
                      className="w-full flex items-center justify-between text-zinc-800 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white py-2 text-left cursor-pointer"
                    >
                      <span className="capitalize font-medium">Courses</span>
                      <ChevronDown
                        size={16}
                        className={cn(
                          "transition-transform duration-200 text-zinc-400",
                          isMobileCoursesOpen && "rotate-180 text-brand-primary"
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {isMobileCoursesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-2 pr-1 pb-2 flex flex-col gap-1.5 overflow-hidden"
                        >
                          {courseLinks.map((course) => (
                            <Link
                              key={course.href}
                              href={course.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="py-2 px-2.5 rounded-lg text-xs text-zinc-700 dark:text-zinc-300 hover:text-brand-primary hover:bg-zinc-50 dark:hover:bg-zinc-900/60 flex flex-col text-left"
                            >
                              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                                {course.label}
                              </span>
                              <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-satoshi font-normal">
                                {course.desc}
                              </span>
                            </Link>
                          ))}
                          <Link
                            href="/courses"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center justify-between py-1.5 px-2.5 text-xs font-semibold text-[#0A756A] hover:underline"
                          >
                            <span>View All Courses Catalog</span>
                            <ArrowRight size={13} />
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Learning Modes Accordion in Mobile Menu */}
                  <div className="border-b border-zinc-100 dark:border-zinc-900 py-1">
                    <button
                      type="button"
                      onClick={() => setIsMobileModesOpen(!isMobileModesOpen)}
                      className="w-full flex items-center justify-between text-zinc-800 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white py-2 text-left cursor-pointer"
                    >
                      <span className="capitalize font-medium">Learning Modes</span>
                      <ChevronDown
                        size={16}
                        className={cn(
                          "transition-transform duration-200 text-zinc-400",
                          isMobileModesOpen && "rotate-180 text-brand-primary"
                        )}
                      />
                    </button>
                    <AnimatePresence>
                      {isMobileModesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-2 pr-1 pb-2 flex flex-col gap-1.5 overflow-hidden"
                        >
                          <Link
                            href="/offline-batches"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-2.5 py-2 px-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900/60 text-xs text-zinc-700 dark:text-zinc-300 hover:text-brand-primary"
                          >
                            <Building2 size={15} className="text-[#0A756A] shrink-0" />
                            <div className="flex flex-col text-left">
                              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                                Offline Batch
                              </span>
                              <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
                                Classroom batches in Manjeri
                              </span>
                            </div>
                          </Link>

                          <Link
                            href="/online-plans"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center gap-2.5 py-2 px-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900/60 text-xs text-zinc-700 dark:text-zinc-300 hover:text-amber-600"
                          >
                            <MonitorPlay size={15} className="text-amber-600 shrink-0" />
                            <div className="flex flex-col text-left">
                              <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                                Online Batch
                              </span>
                              <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
                                Live & flexible training plans
                              </span>
                            </div>
                          </Link>

                          <Link
                            href="/learning-modes"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center justify-between py-1.5 px-2.5 text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                          >
                            <span>Compare All Modes</span>
                            <ArrowRight size={13} />
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link
                    href="/blog"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-zinc-800 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white py-2 border-b border-zinc-100 dark:border-zinc-900"
                  >
                    <p className="capitalize">Blog</p>
                  </Link>

                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-zinc-800 dark:text-zinc-200 hover:text-zinc-900 dark:hover:text-white py-2"
                  >
                    <p className="capitalize">Contact</p>
                  </Link>
                </div>

                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsEnrollOpen(true);
                  }}
                  className="w-full flex h-11 items-center justify-center rounded-xl bg-brand-primary dark:bg-white text-white dark:text-zinc-950 text-xs font-semibold tracking-wider hover:bg-brand-primary/95 dark:hover:bg-white/90 shadow transition-colors"
                >
                  Apply Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Advanced Enrollment dialog */}
      <EnrollmentFormAdvanced
        open={isEnrollOpen}
        onOpenChange={setIsEnrollOpen}
        batchType="Offline Batch"
        batchName="Weekday Regular (Morning Batch)"
        sourcePage="Navbar Header"
      />
    </>
  );
}
