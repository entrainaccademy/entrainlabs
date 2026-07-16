import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowLeft, 
  ArrowRight, 
  Search, 
  Mail, 
  Calendar, 
  Clock, 
  Check, 
  BookOpen, 
  Sparkles,
  Link
} from "lucide-react";
import { EnrollmentFormAdvanced } from "@/components/ui/enrollment-form-advanced";

// ─── 3 CURATED PREMIUM ACADEMY ARTICLES ──────────────────────────────────────
const BLOG_ARTICLES = [
  {
    id: 1,
    title: "Why Most Digital Marketing Courses Don't Make Students Job-Ready",
    excerpt: "Many students complete digital marketing courses with certificates in hand but still struggle to get hired. Here's why that happens and what actually makes someone job-ready.",
    category: "Career",
    author: "Entrain Labs Team",
    date: "July 15, 2026",
    readTime: "4 Min Read",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80",
    quote: "Learning becomes valuable only when knowledge is applied in real projects.",
    sections: [
      {
        id: "intro",
        title: "Introduction",
        paragraphs: [
          "Every year, thousands of students enroll in digital marketing courses hoping to build a successful career.",
          "Most finish the course. Many receive certificates.",
          "But when it's time to attend interviews or work on real projects, they realize something is missing. The problem isn't a lack of information. The problem is a lack of execution."
        ]
      },
      {
        id: "theory-trap",
        title: "The Theory Trap",
        introText: "Most courses focus heavily on:",
        items: [
          "Watching classes and pre-recorded webinars",
          "Taking extensive notes on theoretical concepts",
          "Learning terms without clicking live interfaces",
          "Completing quizzes that test memory, not execution"
        ],
        outroText: "Theory alone cannot make someone job-ready. You cannot learn how to optimize a Meta conversion campaign by reading slides."
      },
      {
        id: "employers-look-for",
        title: "What Employers Actually Look For",
        introText: "Businesses value proof of work. In 2026, hiring directors look for:",
        items: [
          "Real ad campaigns designed and managed",
          "Proactively generated leads or revenue proof",
          "Strategic content outlines for professional brands",
          "Familiarity with tracking conversions in GA4"
        ]
      },
      {
        id: "portfolio-over-certificate",
        title: "Portfolio Over Certificate",
        introText: "Students should focus on:",
        items: [
          "Real Projects & Campaigns",
          "Campaign Performance Reports",
          "Strategic Organic Content Plans",
          "Lead Generation Case Studies"
        ],
        outroText: "Building a verified portfolio of assets is the only way to prove you can hit the ground running."
      },
      {
        id: "final-thought",
        title: "Final Thought",
        paragraphs: [
          "At Entrain Labs, we focus entirely on portfolios. Our students run live marketing campaigns with actual agency budgets, guaranteeing they build a real-world showcase before graduating."
        ]
      }
    ]
  },
  {
    id: 2,
    title: "What Skills Does a Digital Marketer Actually Need in 2026?",
    excerpt: "Digital marketing is much more than posting on Instagram. Here are the skills businesses actually look for.",
    category: "Career",
    author: "Entrain Labs Team",
    date: "July 10, 2026",
    readTime: "5 Min Read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    quote: "Great marketers combine creativity, strategy, analytics, AI, and execution.",
    sections: [
      {
        id: "intro",
        title: "Digital Marketing Evolution",
        paragraphs: [
          "Posting daily without metrics is a thing of the past. To stand out today, you need a diverse toolset that spans data, content, technology, and strategic distribution."
        ]
      },
      {
        id: "content-strategy",
        title: "Content Strategy & Copywriting",
        paragraphs: [
          "Understanding the buyer's journey is crucial. You must write direct-response copy for landing pages, structure email flows that capture leads, and design distribution matrices that make content spread organically."
        ]
      },
      {
        id: "social-media",
        title: "Social Media & Community Building",
        paragraphs: [
          "Learn how to build distribution loops that turn passive followers into active community members. Focus on narrative formats, professional LinkedIn carousels, and high-engagement short-form videos."
        ]
      },
      {
        id: "meta-ads",
        title: "Meta Ads (Facebook & Instagram)",
        paragraphs: [
          "Go beyond boost buttons. Master custom audience tracking, pixel tag parameters, Server-Side conversions, modular copy combinations, and visual creative audit tracking."
        ]
      },
      {
        id: "google-ads",
        title: "Google Ads & Search Marketing",
        paragraphs: [
          "Set up Intent-driven search keyword matrices, launch local service campaigns, optimize Google Merchant center product listings, and configure smart bidding schemas targeting conversion value."
        ]
      },
      {
        id: "seo",
        title: "Search Engine Optimization (SEO)",
        paragraphs: [
          "Master semantic crawl architecture, programmatic landing page loops, and organic entity mapping. Learn how to rank pages for target long-tail transactional terms."
        ]
      },
      {
        id: "lead-gen",
        title: "Lead Generation & conversion funnels",
        paragraphs: [
          "Create high-converting landing pages. Run A/B layout experiments, audit conversion drop-offs, and map CRM databases to automate marketing follow-ups."
        ]
      },
      {
        id: "analytics",
        title: "Data Analytics (GA4 & Looker Studio)",
        paragraphs: [
          "Understand attribution. Track dynamic e-commerce purchases, setup Google Tag Manager parameters, and design visual client dashboard reports."
        ]
      },
      {
        id: "ai-tools",
        title: "AI Tools & Automation",
        paragraphs: [
          "Leverage advanced prompts and tools (like ChatGPT, Claude, and workflow bridges) to automate repetitive tracking, scale ad copywriting, and produce visuals at double the speed."
        ]
      }
    ]
  },
  {
    id: 3,
    title: "5 Marketing Mistakes Local Businesses in Kerala Make Online",
    excerpt: "Many businesses spend money on marketing but still struggle to get results. Here are five common mistakes that silently reduce growth opportunities.",
    category: "Business Growth",
    author: "Entrain Labs Team",
    date: "July 5, 2026",
    readTime: "4 Min Read",
    image: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?w=1200&q=80",
    quote: "Successful marketing comes from consistency, trust, visibility, and execution.",
    sections: [
      {
        id: "intro",
        title: "Marketing in Kerala",
        paragraphs: [
          "Kerala's highly connected consumer base represents a massive opportunity for local brands. Yet, many small businesses exhaust marketing budgets without seeing actual revenue gains."
        ]
      },
      {
        id: "mistake-1",
        title: "1. Ignoring Google Business Profile",
        paragraphs: [
          "Local customer intents often start on Google Maps. If your listing has missing operating hours, lacks fresh photos, or has zero reviews, you lose immediate customers searching in your vicinity."
        ]
      },
      {
        id: "mistake-2",
        title: "2. Posting Without Strategy",
        paragraphs: [
          "Posting generic festive cards or flyer screenshots on Instagram does not generate sales. You need video walk-throughs, stories showing customer smiles, and direct links pointing to your catalog."
        ]
      },
      {
        id: "mistake-3",
        title: "3. Running Ads Without Tracking",
        paragraphs: [
          "Promoting posts without setting up custom conversion goals or analytics links means you have no idea which ad is actually driving phone calls or store visits. You end up wasting budget."
        ]
      },
      {
        id: "mistake-4",
        title: "4. Ignoring Customer Reviews",
        paragraphs: [
          "Buyers consult online reviews before buying or visiting. Unanswered questions, dry automated replies, or ignored complaints scare off new customers."
        ]
      },
      {
        id: "mistake-5",
        title: "5. Focusing Only on Followers",
        paragraphs: [
          "Having 50k followers means nothing if only 5 are buying. Focus on direct inquiries, catalog clicks, WhatsApp conversion funnels, and building a loyal customer database."
        ]
      },
      {
        id: "conclusion",
        title: "Conclusion",
        paragraphs: [
          "Correcting these five simple gaps can immediately improve your marketing efficiency, double your direct bookings, and accelerate sales."
        ]
      }
    ]
  }
];

const RELATED_TOPICS = [
  "SEO", "Google Ads", "Meta Ads", "AI Marketing", "Career", "Business Growth", "Branding", "Content Marketing", "Analytics", "Freelancing"
];

export default function Blog() {
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [activeReadingArticle, setActiveReadingArticle] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [emailInput, setEmailInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeHeading, setActiveHeading] = useState("intro");
  const [copySuccess, setCopySuccess] = useState(false);

  // Filter articles based on category and search query
  const filteredArticles = BLOG_ARTICLES.filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Unique categories list
  const categories = ["All", ...new Set(BLOG_ARTICLES.map((article) => article.category))];

  // Article selection handler
  const handleSelectArticle = (article) => {
    setActiveReadingArticle(article);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  // Close reader mode
  const handleCloseArticle = () => {
    setActiveReadingArticle(null);
    setScrollProgress(0);
  };

  // Copy article link to clipboard
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  // Email subscription handler
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  // Scroll tracking for reading progress and active outline headings
  useEffect(() => {
    if (!activeReadingArticle) return;

    const handleScroll = () => {
      // 1. Reading progress bar calculate
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.pageYOffset / totalHeight) * 100);
      }

      // 2. Active Table of Contents heading detection
      const headings = activeReadingArticle.sections.map((sec) => 
        document.getElementById(sec.id)
      ).filter(Boolean);

      const scrollPosition = window.pageYOffset + 200;

      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        if (heading.offsetTop <= scrollPosition) {
          setActiveHeading(heading.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeReadingArticle]);

  return (
    <div className="bg-white text-[#111827] dark:bg-zinc-950 dark:text-zinc-100 min-h-screen font-sans selection:bg-[#0A756A]/20 selection:text-[#0A756A] relative transition-colors duration-300">
      
      {/* Immersive Scroll Progress Bar for Active Reader */}
      {activeReadingArticle && (
        <div className="fixed top-20 left-0 w-full h-[3px] bg-zinc-100 dark:bg-zinc-900 z-50">
          <div 
            className="h-full bg-gradient-to-r from-[#0A756A] to-[#14b8a6] transition-all duration-75"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      )}

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12 relative z-10">
        
        <AnimatePresence mode="wait">
          {!activeReadingArticle ? (
            /* ═════════════════════════════════════════════════════════════════
               1. LISTING MODE (HERO, SEARCH, CARDS, CTA)
               ═════════════════════════════════════════════════════════════════ */
            <motion.div
              key="listing"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-20"
            >
              {/* background ambient blurs */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-[#0A756A]/5 via-transparent to-transparent blur-3xl pointer-events-none -z-10" />

              {/* HERO SECTION */}
              <div className="text-center max-w-3xl mx-auto space-y-6 pt-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#0A756A]/20 bg-[#0A756A]/5 text-[#0A756A] dark:text-[#5EEAD4] text-xs font-semibold uppercase tracking-wider">
                  <Sparkles size={12} className="animate-pulse" />
                  <span>Entrain Labs Knowledge Hub</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold font-clash text-zinc-900 dark:text-white leading-[1.1] tracking-tight">
                  Insights That Help You <br />
                  <span className="bg-gradient-to-r from-[#0A756A] via-[#0D9488] to-[#14B8A6] bg-clip-text text-transparent">
                    Learn, Build & Grow
                  </span>
                </h1>
                
                <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-satoshi">
                  Practical articles on Digital Marketing, AI, Career Growth, Business Strategy, SEO, Advertising, and Real-World Learning.
                </p>

                {/* Search Bar */}
                <div className="relative max-w-xl mx-auto mt-8">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Search articles, topics, keywords..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A756A] dark:focus:ring-[#5EEAD4] transition-all"
                  />
                  {searchQuery && (
                    <button 
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-650 text-xs"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 ${
                        selectedCategory === category
                          ? "bg-[#0A756A] border-[#0A756A] text-white shadow-sm"
                          : "border-zinc-200 dark:border-zinc-850 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-600 dark:text-zinc-400"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* FEATURED BLOG CARD */}
              {filteredArticles.length > 0 && searchQuery === "" && selectedCategory === "All" && (
                <div className="space-y-6 pt-4">
                  <h2 className="text-xl font-bold font-clash text-zinc-900 dark:text-white flex items-center gap-2">
                    <BookOpen size={18} className="text-[#0A756A] dark:text-[#5EEAD4]" />
                    Featured Article
                  </h2>

                  <div 
                    onClick={() => handleSelectArticle(BLOG_ARTICLES[0])}
                    className="group grid grid-cols-1 lg:grid-cols-12 rounded-[32px] overflow-hidden bg-[#0A756A]/5 dark:bg-[#0A756A]/10 border border-[#0A756A]/5 dark:border-zinc-900/30 hover:border-[#0A756A]/20 shadow-sm hover:shadow-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer"
                  >
                    <div className="lg:col-span-7 h-[300px] lg:h-[450px] relative overflow-hidden bg-zinc-100">
                      <img 
                        src={BLOG_ARTICLES[0].image} 
                        alt={BLOG_ARTICLES[0].title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                    </div>

                    <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <span className="inline-flex items-center text-[10px] font-bold text-[#0A756A] dark:text-[#5EEAD4] bg-[#0A756A]/5 dark:bg-[#5EEAD4]/10 border border-[#0A756A]/20 dark:border-[#5EEAD4]/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                          {BLOG_ARTICLES[0].category}
                        </span>
                        
                        <h3 className="text-2xl md:text-3xl font-bold font-clash text-zinc-900 dark:text-white leading-tight group-hover:text-[#0A756A] dark:group-hover:text-[#5EEAD4] transition-colors duration-300">
                          {BLOG_ARTICLES[0].title}
                        </h3>
                        
                        <p className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm leading-relaxed font-satoshi">
                          {BLOG_ARTICLES[0].excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-6 border-t border-zinc-200/40 dark:border-zinc-800/40">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-[#0A756A]/10 flex items-center justify-center text-[#0A756A] dark:text-[#5EEAD4] font-bold text-xs uppercase">
                            EL
                          </div>
                          <div>
                            <span className="block text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                              {BLOG_ARTICLES[0].author}
                            </span>
                            <span className="block text-[10px] text-zinc-400 font-medium">
                              {BLOG_ARTICLES[0].date}
                            </span>
                          </div>
                        </div>

                        <span className="flex items-center gap-1 text-xs font-bold text-[#0A756A] dark:text-[#5EEAD4] uppercase tracking-wider group-hover:translate-x-1.5 transition-transform duration-300">
                          {BLOG_ARTICLES[0].readTime}
                          <ArrowRight size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* LATEST ARTICLES LIST */}
              <div className="space-y-6">
                <h2 className="text-xl font-bold font-clash text-zinc-900 dark:text-white flex items-center gap-2">
                  <Sparkles size={18} className="text-[#0A756A] dark:text-[#5EEAD4]" />
                  {searchQuery || selectedCategory !== "All" ? "Search Results" : "Latest Articles"}
                </h2>

                {filteredArticles.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredArticles.map((article, idx) => (
                      <motion.div
                        key={article.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.05, ease: "easeOut" }}
                        onClick={() => handleSelectArticle(article)}
                        className="group flex flex-col justify-between rounded-[28px] overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-850 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer h-full"
                      >
                        <div>
                          {/* Image Box */}
                          <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                            <img 
                              src={article.image} 
                              alt={article.title}
                              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-103"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                          </div>

                          {/* Body */}
                          <div className="p-6 space-y-4">
                            <div>
                              <span className="inline-flex items-center text-[9px] font-bold text-[#0A756A] dark:text-[#5EEAD4] bg-[#0A756A]/5 dark:bg-[#5EEAD4]/10 border border-[#0A756A]/20 dark:border-[#5EEAD4]/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                                {article.category}
                              </span>
                            </div>

                            <h3 className="text-lg font-bold font-clash text-zinc-900 dark:text-white leading-snug line-clamp-2 min-h-[3rem] group-hover:text-[#0A756A] dark:group-hover:text-[#5EEAD4] transition-colors duration-300">
                              {article.title}
                            </h3>

                            <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed line-clamp-3 font-satoshi">
                              {article.excerpt}
                            </p>
                          </div>
                        </div>

                        {/* Footer */}
                        <div className="p-6 pt-4 border-t border-zinc-150/40 dark:border-zinc-800/40 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="h-6 w-6 rounded-full bg-[#0A756A]/10 flex items-center justify-center text-[#0A756A] dark:text-[#5EEAD4] font-bold text-[10px] uppercase">
                              EL
                            </div>
                            <span className="text-[11px] font-semibold text-zinc-700 dark:text-zinc-300">
                              {article.author}
                            </span>
                          </div>

                          <span className="text-[10px] font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wide">
                            {article.readTime}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-[#0A756A]/5 dark:bg-zinc-900/50 rounded-[32px] border border-zinc-200/20">
                    <BookOpen size={48} className="mx-auto text-zinc-400 mb-4" />
                    <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">No articles found matching your query.</p>
                    <p className="text-xs text-zinc-400 mt-1">Try checking other categories or clearing your search filter.</p>
                  </div>
                )}
              </div>

              {/* RELATED TOPICS TAG CLOUD */}
              <div className="py-8 border-t border-b border-zinc-150/40 dark:border-zinc-800/40 text-center space-y-4">
                <h3 className="text-xs font-bold text-[#0A756A] dark:text-[#5EEAD4] uppercase tracking-widest">
                  Explore Related Topics
                </h3>
                <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
                  {RELATED_TOPICS.map((topic) => (
                    <button
                      key={topic}
                      onClick={() => {
                        setSearchQuery(topic);
                        setSelectedCategory("All");
                        window.scrollTo({ top: 400, behavior: "smooth" });
                      }}
                      className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-zinc-50 dark:bg-zinc-900 hover:bg-[#0A756A]/5 border border-zinc-250/40 dark:border-zinc-800 text-zinc-650 dark:text-zinc-400 hover:text-[#0A756A] dark:hover:text-[#5EEAD4] hover:border-[#0A756A]/20 transition-all duration-300"
                    >
                      #{topic}
                    </button>
                  ))}
                </div>
              </div>

              {/* NEWSLETTER CTA */}
              <div className="rounded-[32px] bg-gradient-to-tr from-[#0A756A]/10 via-[#0A756A]/5 to-transparent border border-[#0A756A]/10 p-8 md:p-12 text-center space-y-6 relative overflow-hidden">
                <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-[#0A756A]/5 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-[#0A756A]/5 blur-3xl pointer-events-none" />

                <div className="max-w-xl mx-auto space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold font-clash text-zinc-900 dark:text-white">
                    Stay Ahead in Digital Marketing
                  </h2>
                  <p className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm leading-relaxed font-satoshi">
                    Get practical marketing tips, AI updates, SEO insights, and career advice delivered directly to your inbox.
                  </p>
                </div>

                <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 pt-2">
                  <div className="relative flex-grow">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 h-4 w-4" />
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-xs focus:outline-none focus:ring-2 focus:ring-[#0A756A] transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="h-11 px-8 rounded-full bg-[#0A756A] hover:bg-[#08645C] text-white text-xs font-semibold tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 shadow-md shadow-[#0A756A]/10 cursor-pointer"
                  >
                    Subscribe Now
                  </button>
                </form>

                {subscribed && (
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-xs font-medium text-[#0A756A] dark:text-[#5EEAD4] mt-3"
                  >
                    ✓ Thank you! You've been successfully subscribed to our newsletter.
                  </motion.p>
                )}
              </div>
            </motion.div>
          ) : (
            /* ═════════════════════════════════════════════════════════════════
               2. IMMERSIVE READING MODE (BREADCRUMB, TOC, BODY, RELATED)
               ═════════════════════════════════════════════════════════════════ */
            <motion.div
              key="reading"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-12"
            >
              {/* BREADCRUMBS & BACK BUTTON */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-150/40 dark:border-zinc-800/40">
                <button
                  onClick={handleCloseArticle}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 hover:text-[#0A756A] dark:text-zinc-400 dark:hover:text-[#5EEAD4] transition-colors cursor-pointer group"
                >
                  <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                  Back to Hub
                </button>

                <div className="text-[10px] sm:text-xs font-medium text-zinc-450 dark:text-zinc-550 flex items-center gap-1.5 font-mono select-none">
                  <span>Home</span>
                  <span>/</span>
                  <span>Blog</span>
                  <span>/</span>
                  <span className="text-[#0A756A] dark:text-[#5EEAD4] truncate max-w-[120px] sm:max-w-none">
                    {activeReadingArticle.category}
                  </span>
                </div>
              </div>

              {/* ARTICLE HERO METADATA */}
              <div className="space-y-6 max-w-4xl pt-4">
                <span className="inline-flex items-center text-[10px] font-bold text-[#0A756A] dark:text-[#5EEAD4] bg-[#0A756A]/5 dark:bg-[#5EEAD4]/10 border border-[#0A756A]/20 dark:border-[#5EEAD4]/20 px-3 py-1 rounded-full uppercase tracking-wider">
                  {activeReadingArticle.category}
                </span>

                <h1 className="text-3xl md:text-5xl lg:text-[54px] font-bold font-clash text-zinc-900 dark:text-white leading-[1.15] tracking-tight">
                  {activeReadingArticle.title}
                </h1>

                {/* Author Card Block */}
                <div className="flex flex-wrap items-center gap-6 pt-2 text-zinc-500 dark:text-zinc-400 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-[#0A756A]/10 flex items-center justify-center text-[#0A756A] dark:text-[#5EEAD4] font-bold text-[10px] uppercase">
                      EL
                    </div>
                    <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                      {activeReadingArticle.author}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-zinc-400" />
                    <span>{activeReadingArticle.date}</span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-zinc-400" />
                    <span>{activeReadingArticle.readTime}</span>
                  </div>
                </div>
              </div>

              {/* LARGE COVER IMAGE */}
              <div className="w-full aspect-[21/9] rounded-[32px] overflow-hidden shadow-sm bg-zinc-100">
                <img 
                  src={activeReadingArticle.image} 
                  alt={activeReadingArticle.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* TWO-COLUMN LAYOUT: STICKY SIDEBAR + RICH BODY */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-4">
                
                {/* LEFT SIDEBAR: STICKY TABLE OF CONTENTS & SHARES */}
                <div className="lg:col-span-3 lg:sticky lg:top-28 space-y-8 order-2 lg:order-1">
                  
                  {/* Table of Contents */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-bold text-[#0A756A] dark:text-[#5EEAD4] uppercase tracking-widest">
                      Table of Contents
                    </h3>
                    
                    <ul className="space-y-2.5 text-xs">
                      {activeReadingArticle.sections.map((sec) => (
                        <li key={sec.id}>
                          <a 
                            href={`#${sec.id}`}
                            onClick={(e) => {
                              e.preventDefault();
                              document.getElementById(sec.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
                            }}
                            className={`block hover:text-[#0A756A] dark:hover:text-[#5EEAD4] transition-colors leading-relaxed ${
                              activeHeading === sec.id
                                ? "text-[#0A756A] dark:text-[#5EEAD4] font-semibold border-l-2 border-[#0A756A] pl-2.5"
                                : "text-zinc-500 pl-3"
                            }`}
                          >
                            {sec.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Share buttons */}
                  <div className="space-y-4 pt-4 border-t border-zinc-150/40 dark:border-zinc-800/40">
                    <h3 className="text-xs font-bold text-[#0A756A] dark:text-[#5EEAD4] uppercase tracking-widest">
                      Share Article
                    </h3>
                    
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={handleCopyLink}
                        title="Copy link"
                        className="h-8 w-8 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-500 hover:text-[#0A756A] dark:hover:text-[#5EEAD4] flex items-center justify-center hover:scale-105 transition-all cursor-pointer relative"
                      >
                        <Link size={14} />
                        {copySuccess && (
                          <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#0a756a] text-white text-[9px] px-2 py-0.5 rounded font-sans select-none">
                            Copied!
                          </span>
                        )}
                      </button>

                      <a 
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(activeReadingArticle.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-8 w-8 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-500 hover:text-[#1DA1F2] flex items-center justify-center hover:scale-105 transition-all"
                      >
                        <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </a>

                      <a 
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(activeReadingArticle.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-8 w-8 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-500 hover:text-[#0A66C2] flex items-center justify-center hover:scale-105 transition-all"
                      >
                        <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>

                      <a 
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-8 w-8 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-500 hover:text-[#1877F2] flex items-center justify-center hover:scale-105 transition-all"
                      >
                        <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                </div>

                {/* RIGHT COLUMN: RICH TEXT BODY */}
                <div className="lg:col-span-9 order-1 lg:order-2 space-y-12">
                  <div className="space-y-10">
                    
                    {activeReadingArticle.sections.map((sec) => (
                      <div 
                        key={sec.id} 
                        id={sec.id}
                        className="scroll-mt-32 space-y-4"
                      >
                        <h2 className="text-2xl font-bold font-clash text-zinc-900 dark:text-white border-b border-zinc-150/40 dark:border-zinc-900/40 pb-2">
                          {sec.title}
                        </h2>

                        {sec.paragraphs && sec.paragraphs.map((p, pIdx) => (
                          <p key={pIdx} className="text-zinc-650 dark:text-zinc-350 text-sm sm:text-base leading-relaxed font-satoshi">
                            {p}
                          </p>
                        ))}

                        {sec.items && (
                          <div className="space-y-4">
                            {sec.introText && (
                              <p className="text-zinc-650 dark:text-zinc-350 text-sm sm:text-base leading-relaxed font-satoshi font-semibold">
                                {sec.introText}
                              </p>
                            )}
                            <ul className="space-y-3 pl-1">
                              {sec.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-zinc-650 dark:text-zinc-350 text-sm sm:text-base leading-relaxed font-satoshi">
                                  <Check size={16} className="text-[#0A756A] dark:text-[#5EEAD4] shrink-0 mt-1" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                            {sec.outroText && (
                              <p className="text-zinc-650 dark:text-zinc-350 text-sm sm:text-base leading-relaxed font-satoshi pt-2">
                                {sec.outroText}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    ))}

                    {/* Highlight Quote Box */}
                    {activeReadingArticle.quote && (
                      <blockquote className="p-6 md:p-8 rounded-[24px] bg-[#0A756A]/5 dark:bg-[#0A756A]/10 border-l-4 border-[#0A756A] my-8 font-sans">
                        <p className="text-base md:text-lg font-medium text-zinc-800 dark:text-zinc-200 italic leading-relaxed">
                          "{activeReadingArticle.quote}"
                        </p>
                        <cite className="block text-[11px] font-bold text-[#0A756A] dark:text-[#5EEAD4] uppercase tracking-wider mt-3 not-italic">
                          — {activeReadingArticle.author}
                        </cite>
                      </blockquote>
                    )}

                  </div>

                  {/* Portfolio Call-out Panel */}
                  <div className="p-8 rounded-[32px] bg-gradient-to-tr from-[#0A756A]/10 via-[#0A756A]/5 to-transparent border border-[#0A756A]/10 text-center space-y-4 shadow-sm">
                    <h3 className="text-lg md:text-xl font-bold font-clash text-zinc-900 dark:text-white">
                      Build an execution-ready portfolio at Entrain Labs
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-xs md:text-sm max-w-lg mx-auto leading-relaxed font-satoshi">
                      Stop learning from outdated templates. Manage active campaigns and actual client budgets during our guaranteed internship.
                    </p>
                    <div className="flex justify-center gap-3 pt-2">
                      <button 
                        onClick={() => setIsEnrollOpen(true)}
                        className="px-6 py-2.5 rounded-full bg-[#0A756A] hover:bg-[#08645C] text-white text-xs font-semibold tracking-wider hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer"
                      >
                        Apply Batch
                      </button>
                      <button 
                        onClick={handleCloseArticle}
                        className="px-6 py-2.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-650 dark:text-zinc-400 text-xs font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all cursor-pointer"
                      >
                        Back to Articles
                      </button>
                    </div>
                  </div>

                </div>

              </div>

              {/* SUGGESTED RELATED ARTICLES */}
              <div className="pt-16 border-t border-zinc-150/40 dark:border-zinc-800/40 space-y-8">
                <h3 className="text-xl font-bold font-clash text-zinc-900 dark:text-white">
                  Related Articles
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {BLOG_ARTICLES
                    .filter((art) => art.id !== activeReadingArticle.id)
                    .map((article) => (
                      <div 
                        key={article.id}
                        onClick={() => handleSelectArticle(article)}
                        className="group flex flex-col justify-between rounded-[28px] overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-850 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer h-full"
                      >
                        <div>
                          <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-100">
                            <img 
                              src={article.image} 
                              alt={article.title}
                              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-103"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />
                          </div>

                          <div className="p-6 space-y-4">
                            <div>
                              <span className="inline-flex items-center text-[9px] font-bold text-[#0A756A] dark:text-[#5EEAD4] bg-[#0A756A]/5 dark:bg-[#5EEAD4]/10 border border-[#0A756A]/20 dark:border-[#5EEAD4]/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                                {article.category}
                              </span>
                            </div>

                            <h4 className="text-base font-bold font-clash text-zinc-900 dark:text-white leading-snug line-clamp-2 min-h-[2.5rem] group-hover:text-[#0A756A] dark:group-hover:text-[#5EEAD4] transition-colors duration-300">
                              {article.title}
                            </h4>

                            <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed line-clamp-2 font-satoshi">
                              {article.excerpt}
                            </p>
                          </div>
                        </div>

                        <div className="p-6 pt-4 border-t border-zinc-150/40 dark:border-zinc-800/40 flex items-center justify-between">
                          <span className="text-[11px] font-semibold text-zinc-700 dark:text-zinc-300">
                            {article.author}
                          </span>
                          <span className="text-[10px] font-bold text-[#0A756A] dark:text-[#5EEAD4] uppercase tracking-wider">
                            Read Now
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* ─── ENROLLMENT MODAL TRIGGER ────────────────────────────────────── */}
      <EnrollmentFormAdvanced open={isEnrollOpen} onOpenChange={setIsEnrollOpen} />

    </div>
  );
}
