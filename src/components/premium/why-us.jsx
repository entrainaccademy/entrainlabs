"use client";
import React from "react";
import { motion } from "motion/react";
import { 
  Target, 
  Laptop, 
  Cpu, 
  Users, 
  FolderOpen, 
  Zap,
  ArrowRight,
  Sparkles
} from "lucide-react";
// import chooseImg from "../../assets/choose.jpg";
// import one from "../../assets/one.jpg";
// import two from "../../assets/two.jpg";
// import three from "../../assets/three.jpg";
// import four from "../../assets/four.jpg";
// import five from "../../assets/five.jpg";
// import six from "../../assets/six.jpg";
// import seven from "../../assets/seven.jpg";
// import eight from "../../assets/eight.jpg";
// import nine from "../../assets/nine.jpg";
// import ten from "../../assets/ten.jpg";
// import eleven from "../../assets/eleven.jpg";
// import twelve from "../../assets/twelve.jpg";
// import thirteen from "../../assets/thirteenonbg.";
// import fourteen from "../../assets/fourteen.jpg";
// import fifteen from "../../assets/fifteen.jpg";
// import sixteen from "../../assets/sixteen.jpg";
// import seventeen from "../../assets/seventeen.jpg";
// import eighteen from "../../assets/eighteen.jpg";
// import nineteen from "../../assets/nineteen.jpg";
// import twenty from "../../assets/twenty.jpg";
// import twentyone from "../../assets/twentyone.jpg";
// import twentytwo from "../../assets/twentytwo.jpg";
// import twentythree from "../../assets/twentythree.png";
// import nonbg from "../../assets/nonbg.png";
// import nonbg2 from "../../assets/nonbg2.png";
import demo from '@/assets/demo.jpeg'




export default function WhyChooseUs() {
  const items = [
    {
      title: "Practical Learning",
      description: "Learn by doing real client projects.",
      icon: Target,
      color: "text-emerald-500 bg-emerald-50/80 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900/30"
    },
    {
      title: "Offline & Online",
      description: "Flexible classroom and online learning.",
      icon: Laptop,
      color: "text-cyan-500 bg-cyan-50/80 dark:bg-cyan-950/20 border-cyan-100 dark:border-cyan-900/30"
    },
    {
      title: "AI-Powered Training",
      description: "Master ChatGPT, Midjourney, Gemini, Canva AI, and modern AI marketing tools.",
      icon: Cpu,
      color: "text-purple-500 bg-purple-50/80 dark:bg-purple-950/20 border-purple-100 dark:border-purple-900/30"
    },
    {
      title: "Expert Mentors",
      description: "Learn from experienced industry professionals.",
      icon: Users,
      color: "text-amber-500 bg-amber-50/80 dark:bg-amber-950/20 border-amber-100 dark:border-amber-900/30"
    },
    {
      title: "Career-Focused",
      description: "Portfolio building, resume support, interview preparation.",
      icon: FolderOpen,
      color: "text-rose-500 bg-rose-50/80 dark:bg-rose-950/20 border-rose-100 dark:border-rose-900/30"
    },
    {
      title: "Job-Ready Skills",
      description: "SEO, Google Ads, Meta Ads, Analytics, Social Media Marketing and Automation.",
      icon: Zap,
      color: "text-indigo-500 bg-indigo-50/80 dark:bg-indigo-950/20 border-indigo-100 dark:border-indigo-900/30"
    }
  ];

  // Container variants for stagger animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section id="about" className="relative py-28 md:py-32 bg-zinc-50 dark:bg-zinc-950 font-sans overflow-hidden transition-colors duration-300">
      
      {/* 5% Opacity Grid Pattern */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none select-none z-0" /> */}

      {/* Subtle blurred gradient blob */}
      <div className="absolute top-10 right-10 w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] rounded-full bg-brand-primary/5 dark:bg-brand-primary/10 blur-[100px] sm:blur-[120px] pointer-events-none select-none z-0" />
      <div className="absolute bottom-10 left-10 w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] rounded-full bg-brand-accent/3 dark:bg-brand-accent/5 blur-[100px] sm:blur-[120px] pointer-events-none select-none z-0" />

      {/* Floating background dots */}
      {/* <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-10 w-1.5 h-1.5 rounded-full bg-brand-primary/20" />
        <div className="absolute bottom-1/4 right-10 w-2 h-2 rounded-full bg-brand-accent/20" />
        <div className="absolute top-2/3 right-1/3 w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
      </div> */}

      <div className="relative mx-auto max-w-[1280px] px-6 md:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[40px] lg:gap-[80px] items-center">
          
          {/* Left Column: One Large Portrait Image Frame (40%) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative w-full flex justify-center"
          >
            {/* Soft decorative blur behind image */}
            {/* <div className="absolute -inset-2 bg-brand-primary/5 rounded-[2.5rem] blur-xl pointer-events-none" /> */}

            {/* Framed Image */}
            <div className="relative w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-[3/4] max-w-md rounded-[2rem] overflow-hidden  border-zinc-200/60 dark:border-zinc-800/60   shadow-zinc-200/50 dark:shadow-zinc-950/50 group select-none bg-zinc-000 dark:bg-zinc-900">
              <img 
                src={demo} 
                alt="Students collaborating at study table" 
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105" 
              />
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/00 via-transparent to-transparent z-10" />

              {/* Floating Glass Badge */}
              <div className="absolute bottom-6 left-6 z-20 px-4 py-2 bg-white/10  dark:border-zinc-800/20 shadow-lg shadow-zinc-200/20 dark:shadow-zinc-950/20 text-xs sm:text-sm font-bold text-zinc-850 dark:text-zinc-100 flex items-center gap-1.5">
                
              </div>
            </div>
          </motion.div>

          {/* Right Column: Copywriting & Compact Feature Rows (60%) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Section Header */}
            <div className="flex flex-col items-start gap-3  mb-10 max-w-2xl">
             
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl font-semibold font-outfit tracking-tight text-zinc-950 dark:text-white leading-[1.1]"
              >
                Why Choose<br />Entrain Labs?
              </motion.h2>
              <p className="text-[12px] lg:text-[12px] sm:text-lg text-zinc-500 dark:text-zinc-400  font-satoshi mt-2 max-w-xl">
                "We focus on practical learning, industry tools, AI-powered training, and career success."
              </p>
            </div>

            {/* Compact Premium Feature Grid */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-[18px]  w-full mb-10"
            >
              {items.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <motion.div 
                    key={idx} 
                    variants={itemVariants}
                    whileHover={{ 
                      y: -6,
                      boxShadow: "0 10px 25px -5px  rgba(0, 0, 0, 0.05)"
                    }}
                    className="group relative flex items-start gap-4  p-5  rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/50 dark:bg-zinc-900/10 hover:bg-white dark:hover:bg-zinc-900/65 shadow-sm transition-all duration-300 cursor-pointer border-l-[3px] border-l-transparent hover:border-l-[#4F8A8A]/90 overflow-hidden"
                  >
                    {/* Hover subtle background glow */}
                    <div className="absolute inset-0 bg-red-900 opacity-0  group-hover:opacity-[#4F8A8A]  transition-opacity duration-300 rounded-2xl pointer-events-none" />

                    {/* Circular Glass Icon */}
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 group-hover:rotate-[8deg] ${item.color}`}>
                      <IconComponent size={18} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0 pr-4">
                      <h3 className="text-zinc-950 dark:text-white  font-medium text-base mb-1 tracking-tight font-outfit flex items-center gap-1.5">
                        {item.title}
                      </h3>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed font-outfit">
                        {item.description}
                      </p>
                    </div>

                    {/* Tiny arrow appearing on hover */}
                    {/* <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-brand-primary">
                      <ArrowRight size={14} />
                    </div> */}
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Bottom CTA Button */}
            <div className="flex justify-start w-full">
              <motion.button 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 0 25px rgba(16, 185, 129, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                className="relative inline-flex h-12 font-outfit font-lightg items-center justify-center  bg-primary text-white px-10 text-xs  tracking-widest uppercase hover:opacity-95 shadow-md shadow-brand-primary/10 transition-all duration-300 cursor-pointer"
              >
                Join Our First Batch
              </motion.button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}