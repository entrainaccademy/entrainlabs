"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Calendar, Star, Compass, ArrowRight, CheckCircle2 } from "lucide-react";
import { coursesData } from "@/lib/data";
import { EnrollmentFormAdvanced } from "@/components/ui/enrollment-form-advanced";
export default function Courses() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [isEnrollOpen, setIsEnrollOpen] = useState(false);
    const categories = ["All", "Flagship", "Ads", "Organic", "Specialized"];
    // Filter courses based on category AND search query
    const filteredCourses = coursesData.filter((course) => {
        const matchesCategory = activeCategory === "All" || course.category === activeCategory;
        const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            course.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });
    const handleEnrollClick = (course) => {
        setSelectedCourse(course);
        setIsEnrollOpen(true);
    };
    return (<section id="courses" className="relative py-20 md:py-28 bg-zinc-50 dark:bg-zinc-950 font-sans overflow-hidden">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-[0.02] dark:opacity-[0.03]"/>
      
      {/* Subtle backdrop glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-accent/5 blur-[130px] pointer-events-none"/>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-brand-accent-2/5 blur-[150px] pointer-events-none"/>

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="flex flex-col text-left gap-4 max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent font-satoshi">
              Curriculum Catalog
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-clash tracking-tight text-zinc-900 dark:text-white leading-tight">
              Explore Our Core Programs.
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
              Find the specialization that aligns with your professional path. All programs feature live agency campaigns and dedicated job search support.
            </p>
          </div>

          {/* Search bar widget */}
          <div className="flex items-center gap-2.5 px-4 py-2.5 w-full md:w-80 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm transition-all focus-within:border-brand-accent focus-within:ring-2 focus-within:ring-brand-accent/10">
            <Search size={16} className="text-zinc-400"/>
            <input type="text" placeholder="Search courses or tools..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="bg-transparent border-none outline-none text-xs text-zinc-800 dark:text-zinc-100 placeholder-zinc-400 w-full"/>
          </div>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-2 border-b border-zinc-200 dark:border-zinc-850">
          {categories.map((category) => (<button key={category} onClick={() => setActiveCategory(category)} className={`px-5 py-2.5 rounded-full text-xs font-semibold font-satoshi tracking-wide transition-all border cursor-pointer ${activeCategory === category
                ? "bg-zinc-950 dark:bg-white text-white dark:text-zinc-950 border-zinc-950 dark:border-white shadow-md scale-105"
                : "bg-transparent text-zinc-500 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:text-zinc-800 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700"}`}>
              {category === "All" ? "All Courses" : category}
            </button>))}
        </div>

        {/* Courses Grid with animations */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course, idx) => (<motion.div layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }} id={`course-${course.id}`} key={course.id} className="spotlight-card group relative rounded-3xl p-6 md:p-8 bg-white dark:bg-zinc-900/40 border border-zinc-150 dark:border-zinc-800/80 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-md flex flex-col justify-between overflow-hidden text-left">
                {/* Background noise */}
                <div className="absolute inset-0 noise-overlay pointer-events-none opacity-20 dark:opacity-30"/>

                <div>
                  {/* Card Header tag */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                      {course.category} Program
                    </span>
                    {course.badge && (<span className="px-2.5 py-0.5 rounded-full text-[9px] font-semibold tracking-wider font-mono uppercase bg-brand-accent/10 border border-brand-accent/20 text-brand-accent">
                        {course.badge}
                      </span>)}
                  </div>

                  {/* Course Title */}
                  <h3 className="text-xl font-bold font-clash text-zinc-900 dark:text-white mb-3 group-hover:text-brand-accent transition-colors">
                    {course.title}
                  </h3>

                  {/* Course description */}
                  <p className="text-xs md:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6">
                    {course.description}
                  </p>

                  {/* Course stats icons */}
                  <div className="grid grid-cols-2 gap-3 mb-6 bg-zinc-50 dark:bg-zinc-900/60 p-3 rounded-2xl border border-zinc-100 dark:border-zinc-800/60">
                    <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
                      <Calendar size={13} className="text-brand-accent-2"/>
                      <span className="text-[11px] font-semibold">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-zinc-600 dark:text-zinc-300">
                      <Star size={13} className="text-amber-500 fill-amber-500"/>
                      <span className="text-[11px] font-semibold">{course.rating} Rating</span>
                    </div>
                  </div>

                  {/* Course Highlights checklist */}
                  <div className="flex flex-col gap-2 mb-6">
                    <span className="text-[10px] font-semibold font-satoshi uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                      Program Deliverables:
                    </span>
                    {course.highlights.map((h, i) => (<div key={i} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-300">
                        <CheckCircle2 size={13} className="text-brand-success mt-0.5 shrink-0"/>
                        <span>{h}</span>
                      </div>))}
                  </div>
                </div>

                {/* Card Footer: Tools & CTA */}
                <div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {course.tools.slice(0, 4).map((tool, i) => (<span key={i} className="px-2 py-0.5 rounded-md text-[9px] font-medium font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 border border-zinc-200/50 dark:border-zinc-800/50">
                        {tool}
                      </span>))}
                    {course.tools.length > 4 && (<span className="px-2 py-0.5 rounded-md text-[9px] font-medium font-mono bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                        +{course.tools.length - 4} More
                      </span>)}
                  </div>

                  <button onClick={() => handleEnrollClick(course)} className="w-full flex h-10 items-center justify-between rounded-xl border border-zinc-200 dark:border-zinc-800 bg-transparent text-zinc-800 dark:text-zinc-200 px-4 text-xs font-semibold hover:border-brand-accent hover:bg-brand-accent hover:text-white dark:hover:bg-brand-accent transition-all duration-300 cursor-pointer group/btn">
                    <span>Request Details</span>
                    <ArrowRight size={13} className="transition-transform group-hover/btn:translate-x-1"/>
                  </button>
                </div>
              </motion.div>))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state search fallback */}
        {filteredCourses.length === 0 && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} className="flex flex-col items-center justify-center py-16 gap-3 text-zinc-400">
            <Compass size={32} className="animate-spin text-zinc-500" style={{ animationDuration: "12s" }}/>
            <span className="text-sm font-semibold uppercase tracking-wider">No matching programs found</span>
            <span className="text-xs">Try searching for other keywords like "SEO", "Ads", or "AI"</span>
          </motion.div>)}

      </div>

      {/* Shared Dialog trigger */}
      <EnrollmentFormAdvanced open={isEnrollOpen} onOpenChange={setIsEnrollOpen} storageKey={`enroll-popup-${selectedCourse?.id || "courses"}`}/>
    </section>);
}
