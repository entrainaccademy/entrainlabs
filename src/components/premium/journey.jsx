"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { UserCheck, BookOpen, Layers, CheckSquare, GraduationCap, CheckCircle2, ChevronRight } from "lucide-react";
export default function LearningJourney() {
    const [activeStep, setActiveStep] = useState(0);
    const steps = [
        {
            title: "Enroll",
            subtitle: "Custom Counseling & Mapping",
            description: "Begin with a 1-on-1 counseling session. We audit your career aspirations, map your skill profile, and structure a custom learning roadmap.",
            icon: UserCheck,
            deliverables: ["1-on-1 Career Audit", "Personalized Track Selection", "Orientation Kit"],
            color: "from-purple-500 to-indigo-500 bg-purple-500/10 text-purple-400"
        },
        {
            title: "Learn",
            subtitle: "Master Active Frameworks",
            description: "Dive into structured modules led by active agency specialists. Master performance bidding systems, advanced SEO funnels, and prompt engineering.",
            icon: BookOpen,
            deliverables: ["48+ Hours Live Training", "Exclusive Framework Slides", "AI Prompts Library"],
            color: "from-blue-500 to-purple-500 bg-blue-500/10 text-blue-400"
        },
        {
            title: "Practice",
            subtitle: "Sandboxed Campaigns",
            description: "Test your theoretical concepts in mock setups. Build search campaign assets, mock keywords lists, and draft landing page wireframes.",
            icon: Layers,
            deliverables: ["Mock Bidding sandboxes", "Landing Page Checklists", "Copywriting Draft Audits"],
            color: "from-emerald-500 to-blue-500 bg-emerald-500/10 text-emerald-400"
        },
        {
            title: "Projects",
            subtitle: "Active Client Ad Spend",
            description: "Move beyond standard mockups. Work in teams to direct actual ad spends on live client accounts, tracking conversion values in real time.",
            icon: CheckSquare,
            deliverables: ["₹50k+ Real Spend Budgets", "GA4 Tag Tracking", "Client KPI Report Briefs"],
            color: "from-amber-500 to-emerald-500 bg-amber-500/10 text-amber-400"
        },
        {
            title: "Internship",
            subtitle: "3-Month Agency Placement",
            description: "Transition inside our partner digital agencies. Attend team briefings, execute deliverables, and gain verifiable professional experience.",
            icon: GraduationCap,
            deliverables: ["Agency Experience Certificate", "Team Collaboration Workflows", "Live Campaign Portfolio"],
            color: "from-rose-500 to-amber-500 bg-rose-500/10 text-rose-400"
        },
        {
            title: "Placement",
            subtitle: "Graduate to Full-Time",
            description: "Unlock mock agency review panels, professional portfolio design, and direct recruitment introductions to secure your marketing role.",
            icon: CheckCircle2,
            deliverables: ["Hiring Partner Referrals", "Resume Layout Tuning", "Direct Interview Schedules"],
            color: "from-indigo-500 to-rose-500 bg-indigo-500/10 text-indigo-400"
        }
    ];
    return (<section id="journey" className="relative py-20 md:py-28 bg-white dark:bg-zinc-950 font-sans overflow-hidden">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-[0.02] dark:opacity-[0.03]"/>
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-accent/5 blur-[120px] pointer-events-none"/>

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 md:mb-20 max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent font-satoshi">
            Learning Journey
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-clash tracking-tight text-zinc-900 dark:text-white leading-tight">
            How We Build Marketers.
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
            Follow a structured, progressive pipeline designed to transition you from zero foundation to a highly hireable digital specialist.
          </p>
        </div>

        {/* Layout: Interactive Vertical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Side: Timeline Steps list */}
          <div className="lg:col-span-5 flex flex-col gap-3 relative z-10 text-left">
            {steps.map((step, idx) => {
            const StepIcon = step.icon;
            const isActive = activeStep === idx;
            return (<button key={idx} onClick={() => setActiveStep(idx)} className={`group w-full flex items-center justify-between p-4 md:p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${isActive
                    ? "bg-zinc-50 dark:bg-zinc-900 border-brand-accent/30 shadow-md scale-[1.02]"
                    : "bg-transparent border-zinc-150 dark:border-zinc-900 hover:border-zinc-200 dark:hover:border-zinc-800"}`}>
                  <div className="flex items-center gap-4">
                    {/* Circle Node */}
                    <div className={`h-10 w-10 rounded-xl flex items-center justify-center border font-mono text-xs font-bold transition-all duration-300 ${isActive
                    ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 border-transparent shadow-md"
                    : "bg-zinc-50 dark:bg-zinc-900 text-zinc-400 border-zinc-200 dark:border-zinc-800 group-hover:border-zinc-300 dark:group-hover:border-zinc-700"}`}>
                      0{idx + 1}
                    </div>
                    
                    <div className="flex flex-col">
                      <span className={`text-sm font-bold font-clash transition-colors duration-300 ${isActive ? "text-zinc-950 dark:text-white" : "text-zinc-400 dark:text-zinc-500 group-hover:text-zinc-650"}`}>
                        {step.title}
                      </span>
                      <span className="text-[10px] text-zinc-400 dark:text-zinc-500 font-medium">
                        {step.subtitle}
                      </span>
                    </div>
                  </div>
                  
                  <ChevronRight size={14} className={`text-zinc-400 transition-transform ${isActive ? "translate-x-1 text-brand-accent" : "opacity-0 group-hover:opacity-100"}`}/>
                </button>);
        })}
          </div>

          {/* Right Side: Step details panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div key={activeStep} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }} className="rounded-3xl p-6 md:p-10 bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-150 dark:border-zinc-800/80 shadow-md overflow-hidden relative text-left">
                <div className="absolute inset-0 noise-overlay pointer-events-none opacity-20 dark:opacity-30"/>
                
                {/* Visual backdrop glow */}
                <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-brand-accent/5 blur-[60px]"/>

                {/* Card Title & Icon */}
                <div className="flex justify-between items-start mb-6">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] font-mono tracking-widest text-brand-accent uppercase font-semibold">
                      Milestone Phase 0{activeStep + 1}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold font-clash text-zinc-950 dark:text-white">
                      {steps[activeStep].title} — {steps[activeStep].subtitle}
                    </h3>
                  </div>
                  
                  {/* Decorative Icon */}
                  <div className="p-3.5 rounded-2xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-950">
                    {(() => {
            const Icon = steps[activeStep].icon;
            return <Icon size={20}/>;
        })()}
                  </div>
                </div>

                {/* Description */}
                <p className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm leading-relaxed mb-8">
                  {steps[activeStep].description}
                </p>

                {/* Deliverables Checklist */}
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-semibold font-satoshi uppercase tracking-wider text-zinc-450 dark:text-zinc-500">
                    Phase Deliverables & Audits:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {steps[activeStep].deliverables.map((item, index) => (<div key={index} className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                        <CheckCircle2 size={13} className="text-brand-success shrink-0"/>
                        <span className="font-medium">{item}</span>
                      </div>))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>);
}
