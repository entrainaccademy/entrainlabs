import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X, Sparkles, BookOpen } from "lucide-react";
import { EnrollmentFormAdvanced } from "@/components/ui/enrollment-form-advanced";

// ─── 6 CURATED HIGH-QUALITY ACADEMY ARTICLES ────────────────────────────────
const BLOG_ARTICLES = [
  {
    id: 1,
    title: "How to Build a Custom AI Copywriting Engine",
    excerpt: "Learn the prompts and API workflows required to generate context-aware ad copies matching your exact brand tone.",
    category: "AI Marketing",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    content: `
      <h3>Introduction to AI in Copywriting</h3>
      <p>Using generic AI outputs usually results in dry, corporate clichés. To build a system that sounds exactly like your brand, you need programmatic context matrices and custom system instructions.</p>
      
      <h3>1. Tone Vector Mapping</h3>
      <p>Before launching copy templates, map out your brand values along specific sliders: Humor vs. Authority, Simplicity vs. Technical Depth. Feed these parameters into the system prompt configuration.</p>
      
      <h3>2. Context Feeding</h3>
      <p>Always utilize few-shot prompt configurations. Provide at least 3 historical examples of your top-performing ad copy before asking the model to write new headlines.</p>
    `
  },
  {
    id: 2,
    title: "The 2026 Guide to Programmatic SEO & Dynamic Indexing",
    excerpt: "Deploy database-driven landing pages that answer long-tail search intents without getting flagged as duplicate content.",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
    content: `
      <h3>What is Programmatic SEO?</h3>
      <p>Programmatic SEO is the practice of publishing landing pages at scale using database schemas and structured layouts. When executed correctly, it helps capture thousands of niche Google search queries.</p>
      
      <h3>Pillars of Indexing Quality</h3>
      <p>Search engines rank programmatic pages only if they provide real user utility. Avoid low-quality text scraping. Instead, render live databases, calculators, local prices, and visual maps.</p>
    `
  },
  {
    id: 3,
    title: "Leveraging Value-Based Bidding for Higher Profit Margins",
    excerpt: "Feed conversion values directly to the Google search engine. Optimize for high-ticket customers instead of sheer lead volume.",
    category: "Google Ads",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80",
    content: `
      <h3>Moving Beyond Simple Lead Counts</h3>
      <p>If you optimize search campaigns solely for conversion counts, Google will target cheap leads that rarely buy. Value-Based Bidding (VBB) teaches Google's bidding algorithm to seek out high-ticket deals.</p>
      
      <h3>Implementation Steps</h3>
      <p>Assign different conversion values based on customer segments, lead scoring filters, or estimated Customer Lifetime Value (LTV). Google Ads uses smart bidding to automatically adjust bid rates for premium customers.</p>
    `
  },
  {
    id: 4,
    title: "Beating Creative Fatigue: Modular Video Ad Matrices",
    excerpt: "Build hook, body, and CTA combinations that scale ad campaigns without fatiguing audiences in 48 hours.",
    category: "Meta Ads",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    content: `
      <h3>The Challenge of High Ad Spends</h3>
      <p>When running Facebook and Instagram campaigns with large daily budgets, creative fatigue sets in quickly. Your cost-per-acquisition (CPA) spikes because audiences keep seeing identical creatives.</p>
      
      <h3>The Modular Creative Grid</h3>
      <p>Instead of filming three full videos, shoot 5 hook variants (first 3 seconds), 3 body variants (explanations, unboxings), and 2 CTA variations. Combine them dynamically to form 30 distinct ad versions instantly.</p>
    `
  },
  {
    id: 5,
    title: "Designing a B2B Distribution Loop for Professional Networks",
    excerpt: "Turn single research briefs into modular LinkedIn carousels, threads, and newsletters that generate inbound pipeline.",
    category: "Content Marketing",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
    content: `
      <h3>Creating a Sustainable Content Loop</h3>
      <p>Most content marketing fails due to poor distribution. Writing a blog post is only 20% of the work. The remaining 80% is repurposing and distributing it where buyers hang out.</p>
      
      <h3>The 1-to-10 Repurposing Framework</h3>
      <p>Extract core statistics from your main study and turn them into: visual carousels, text-only industry summaries, newsletter articles, and brief quote cards for social feeds.</p>
    `
  },
  {
    id: 6,
    title: "Debugging Server-Side Tracking & Google Analytics 4 Events",
    excerpt: "Fix attribution drops. Configure custom event tagging, first-party cookie helpers, and database conversion syncs.",
    category: "Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    content: `
      <h3>The Death of Browser Cookies</h3>
      <p>With ad blockers, privacy extensions, and browser changes (Safari ITP), standard pixel tags drop up to 30% of conversions. Server-side tracking establishes first-party data loops.</p>
      
      <h3>GA4 Tagging Best Practices</h3>
      <p>Avoid double-triggering events. Move key measurement scripts to server-side containers like Google Tag Manager Cloud to accelerate web loading speeds and improve data precision.</p>
    `
  }
];

export default function Blog() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [activeReadingArticle, setActiveReadingArticle] = useState(null);

  return (
    <div className="bg-white text-[#111827] min-h-screen pt-12 pb-24 px-6 md:px-8 border-b border-[#E5E7EB] font-sans relative overflow-hidden">
      
      {/* Subtle Background Accent Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-b from-[#0A756A]/5 to-transparent blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ─── SECTION HEADER ──────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E5E7EB] pb-10 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#0A756A] uppercase tracking-widest mb-3 font-mono">
              <Sparkles className="h-3 w-3" />
              Learning Resources
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111827] leading-[1.15] font-outfit">
              Latest Insights & <br />Marketing Tips
            </h1>
            
            <p className="mt-4 text-[#6B7280] text-sm sm:text-base leading-relaxed font-satoshi max-w-xl">
              Practical articles on SEO, AI, Google Ads, Social Media, and Digital Marketing to help you build real-world skills.
            </p>
          </div>

          <button 
            onClick={() => setIsEnrollOpen(true)}
            className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-[#0A756A] hover:bg-[#08645C] text-white text-xs font-semibold tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-md shadow-[#0A756A]/10 cursor-pointer self-start md:self-auto shrink-0"
          >
            View All Articles
          </button>
        </div>

        {/* ─── 6-CARD RESPONSIVE GRID ──────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_ARTICLES.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              onClick={() => setActiveReadingArticle(article)}
              className="group flex flex-col justify-between rounded-[20px] border border-[#E5E7EB] bg-white overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer h-full"
            >
              
              {/* Featured Image */}
              <div className="relative h-56 w-full overflow-hidden bg-[#F8FAFC]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
                
                {/* Visual Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Category Badge */}
                  <div>
                    <span className="inline-flex items-center text-[10px] font-bold text-[#0A756A] bg-[#0A756A]/5 border border-[#0A756A]/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider transition-all duration-300 group-hover:scale-105 group-hover:bg-[#0A756A] group-hover:text-white">
                      {article.category}
                    </span>
                  </div>

                  {/* Title (max 2 lines) */}
                  <h3 className="text-lg font-bold font-outfit text-[#111827] leading-snug line-clamp-2 min-h-[3.5rem] group-hover:text-[#0A756A] transition-colors duration-200">
                    {article.title}
                  </h3>

                  {/* Excerpt (max 2 lines) */}
                  <p className="text-xs text-[#6B7280] leading-relaxed line-clamp-2 min-h-[2.5rem] font-satoshi">
                    {article.excerpt}
                  </p>
                </div>

                {/* Read Article Trigger */}
                <div className="pt-5 mt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                  <span className="inline-flex items-center text-xs font-bold text-[#0A756A] group-hover:text-[#08645C] transition-colors gap-1">
                    Read Article
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1.5" />
                  </span>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* ─── ARTICLE READER DIALOG ────────────────────────────────────────── */}
      <AnimatePresence>
        {activeReadingArticle && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#111827]/40 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveReadingArticle(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="bg-white w-full max-w-3xl max-h-[85vh] rounded-[24px] overflow-hidden shadow-2xl flex flex-col border border-[#E5E7EB]"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Dialog Header */}
              <div className="p-4 border-b border-[#E5E7EB] flex items-center justify-between bg-[#F8FAFC] shrink-0">
                <span className="text-xs font-bold text-[#6B7280] flex items-center gap-1.5">
                  <BookOpen className="h-4 w-4 text-[#0A756A]" />
                  Currently Reading...
                </span>

                <button 
                  onClick={() => setActiveReadingArticle(null)}
                  className="h-8 w-8 rounded-full border border-[#E5E7EB] text-[#6B7280] hover:text-[#111827] flex items-center justify-center hover:bg-[#E5E7EB]/50 transition-colors cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Dialog Scrollable Content */}
              <div className="overflow-y-auto p-6 md:p-10 space-y-6 flex-grow">
                <div className="space-y-3">
                  <span className="inline-flex items-center text-[10px] font-bold text-[#0A756A] bg-[#0A756A]/5 border border-[#0A756A]/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {activeReadingArticle.category}
                  </span>
                  
                  <h2 className="text-2xl sm:text-3xl font-extrabold font-outfit text-[#111827] leading-tight">
                    {activeReadingArticle.title}
                  </h2>
                </div>

                <div className="h-64 sm:h-80 w-full rounded-2xl overflow-hidden shadow-sm bg-[#F8FAFC]">
                  <img
                    src={activeReadingArticle.image}
                    alt={activeReadingArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Article Body Markup */}
                <div 
                  className="prose prose-zinc max-w-none text-sm sm:text-base leading-relaxed space-y-4 font-satoshi text-[#6B7280] prose-headings:text-[#111827] prose-headings:font-bold"
                  dangerouslySetInnerHTML={{ __html: activeReadingArticle.content }}
                />

                {/* Direct Conversion Block */}
                <div className="p-6 md:p-8 rounded-[20px] bg-gradient-to-tr from-[#0A756A]/5 via-white to-transparent border border-[#0A756A]/10 mt-10 text-center space-y-4 shadow-sm">
                  <h4 className="text-base sm:text-lg font-bold font-outfit text-[#111827]">
                    Master digital advertising budgets with industry mentors
                  </h4>
                  
                  <p className="text-xs text-[#6B7280] max-w-lg mx-auto leading-relaxed font-satoshi">
                    Stop reading slides. Get active experience running live Google and Meta ad accounts during our guaranteed internship.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-3">
                    <button 
                      onClick={() => {
                        setActiveReadingArticle(null);
                        setIsEnrollOpen(true);
                      }}
                      className="px-6 py-2.5 rounded-full bg-[#0A756A] hover:bg-[#08645C] text-white text-xs font-semibold tracking-wider hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer"
                    >
                      Apply for Next Batch
                    </button>
                    
                    <button 
                      onClick={() => setActiveReadingArticle(null)}
                      className="px-6 py-2.5 rounded-full border border-[#E5E7EB] bg-white hover:bg-[#F8FAFC] text-[#6B7280] text-xs font-semibold hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    >
                      Close Article
                    </button>
                  </div>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── ENROLLMENT MODAL TRIGGER ────────────────────────────────────── */}
      <EnrollmentFormAdvanced open={isEnrollOpen} onOpenChange={setIsEnrollOpen} />

    </div>
  );
}
