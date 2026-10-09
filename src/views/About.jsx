"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import {
  Briefcase,
  Users,
  Cpu,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Search,
  BarChart3,
  Megaphone,
  Mail,
  TrendingUp,
  Share2,
  Brain,
  LineChart,
} from "lucide-react";
import FinalCTA from "@/components/premium/cta";

/* ─── Fade-in — minimal animation only ─────── */
function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Section heading ───────────────────────── */
function SectionHeading({ eyebrow, title, center = false }) {
  return (
    <div className={center ? "text-center" : ""}>
      {eyebrow && (
        <p className="text-[#0a756a] text-sm font-clash font-normal uppercase tracking-widest mb-2">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-[38px] font-noto font-normal text-gray-900 leading-tight">
        {title}
      </h2>
    </div>
  );
}

/* ─── Why card ──────────────────────────────── */
function WhyCard({ icon, title, desc, delay }) {
  return (
    <FadeIn delay={delay}>
      <div className="flex flex-col gap-4 p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-shadow duration-300 h-full">
        <div className="h-11 w-11 rounded-xl bg-teal-50 flex items-center justify-center text-[#0a756a] shrink-0">
          {icon}
        </div>
        <div>
          <h4 className="font-light font-clash text-gray-900 text-base mb-1">{title}</h4>
          <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
    </FadeIn>
  );
}

/* ─── Skill badge ───────────────────────────── */
function SkillBadge({ icon, label }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-gray-700 text-sm font-medium hover:border-[#0a756a]/40 hover:text-[#0a756a] transition-colors duration-200 cursor-default">
      <span className="text-[#0a756a]">{icon}</span>
      {label}
    </div>
  );
}

/* ─── Audience pill ─────────────────────────── */
function AudiencePill({ icon, label }) {
  return (
    <div className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-gray-100 bg-white hover:border-[#0a756a]/25 hover:shadow-sm transition-all duration-200">
      <div className="h-12 w-12 rounded-full bg-teal-50 flex items-center justify-center text-[#0a756a]">
        {icon}
      </div>
      <span className="font-semibold text-gray-800 text-sm text-center leading-tight">{label}</span>
    </div>
  );
}

/* ══════════════════════════════════════════════
   ABOUT PAGE
═══════════════════════════════════════════════ */
export default function About() {

  const whyCards = [
    {
      icon: <Briefcase size={20} />,
      title: "Practical Learning",
      desc: "Work on real projects and campaigns. Theory supports execution — not the other way around.",
    },
    {
      icon: <Users size={20} />,
      title: "Industry Mentors",
      desc: "Learn from professionals with real experience managing campaigns, clients, and ad budgets.",
    },
    {
      icon: <Cpu size={20} />,
      title: "AI-Powered Training",
      desc: "Use modern AI tools like ChatGPT, Midjourney, and automation platforms to work smarter.",
    },
    {
      icon: <HeartHandshake size={20} />,
      title: "Career Support",
      desc: "Build your portfolio and prepare for jobs or freelancing with direct agency referrals.",
    },
  ];

  const skills = [
    { icon: <Search size={14} />, label: "SEO" },
    { icon: <BarChart3 size={14} />, label: "Google Ads" },
    { icon: <Megaphone size={14} />, label: "Meta Ads" },
    { icon: <Share2 size={14} />, label: "Social Media Marketing" },
    { icon: <Briefcase size={14} />, label: "Content Marketing" },
    { icon: <TrendingUp size={14} />, label: "Performance Marketing" },
    { icon: <Mail size={14} />, label: "Email Marketing" },
    { icon: <Cpu size={14} />, label: "AI Tools" },
    { icon: <Brain size={14} />, label: "Analytics" },
  ];

  return (
    <div className="bg-white text-gray-900 font-sans antialiased">

      {/* ═══ 1. HERO ═══════════════════════════ */}
      <section className="relative bg-white border-b border-gray-100 py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(10,117,106,0.05),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium font-dm text-[#0a756a]/85 leading-tight tracking-tight mb-6">
            Learn Today, Apply Tomorrow,{" "}
            <span className="text-[#0a756a]/85">Grow for Life</span>
          </h1>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/courses"
              className="group inline-flex items-center gap-2 rounded-xl
              border border-[#18C29C]/20
              bg-[#0a756a]/5
              backdrop-blur-xl
              px-7 py-3.5
              text-[#0a756a]
              font-medium
              transition-all duration-300
              hover:bg-[#0a756a]
              hover:text-white
              hover:shadow-[0_10px_30px_rgba(10,117,106,0.25)]"
            >
              Explore Courses
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-gray-200 text-gray-700 font-inter font-medium text-sm hover:border-gray-300 hover:bg-gray-50 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ 2. WHO WE ARE ══════════════════════ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div>
            <div className="relative w-full aspect-[4/3] md:aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border border-gray-100 group select-none bg-gray-50">
              {/* Responsive high performance LCP image */}
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet="/shaaanaaa-mobile.webp"
                  type="image/webp"
                />
                <source
                  srcSet="/shaaanaaa.webp"
                  type="image/webp"
                />
                <img
                  src="/shaaanaaa.webp"
                  alt="About Entrain Labs"
                  // @ts-ignore
                  fetchPriority="high"
                  decoding="async"
                  width={1400}
                  height={1577}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </picture>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <SectionHeading eyebrow="Who We Are" title="Practical Skills for Real Careers" />
            <FadeIn delay={0.05}>
              <p className="text-gray-500 text-[14px] font-manrope font-normal leading-relaxed">
                Entrain Labs is a practical Digital Marketing Academy dedicated to helping learners develop industry-ready skills. We focus on hands-on training, real-world projects, and modern digital tools to prepare students for successful careers.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex flex-col gap-3 mt-1">
                {[
                  "Hands-on projects from Day 1",
                  "Live sessions with industry mentors",
                  "AI tools integrated into every module",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2.5 text-gray-700 text-[12px] font-manrope font-normal leading-relaxed">
                    <CheckCircle2 size={12} className="text-[#0a756a] shrink-0" />
                    {point}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ 3. MISSION ═════════════════════════ */}
      <section className="py-16 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-[#0a756a] font-semibold font-outfit text-[18px]  uppercase tracking-wide mb-5">
              Our Mission 
            </p>
            <blockquote className="text-2xl md:text-2xl font-manrope  font-extralight light text-gray-700 leading-8">
              "Empowering every learner with practical skills, industry experience and{" "}
              <span className="text-[#0a756a] font-medium">  the confidence to succeed </span>{" "}
              in the digital economy"
            </blockquote>
          </FadeIn>


        </div>
      </section>

      {/* ═══ 4. WHY ENTRAIN LABS ════════════════ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <SectionHeading eyebrow="Why Choose Us" title="Why Entrain Labs?" center />

          </div>
          <div className="grid grid-cols-1  font-light font-satoshi sm:grid-cols-2 gap-5">
            {whyCards.map((card, i) => (
              <WhyCard
                key={card.title}
                {...card}
                delay={i * 0.08}
                titleClass="text-xl font-bold font-montserrat text-gray-900"
                descClass="text-sm text-gray-600 leading-7 font- bg-red-900 mt-1"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. WHO CAN JOIN ════════════════════ */}
      {/* <section className="py-20 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <SectionHeading eyebrow="Open to All" title="Who Can Join?" center />
            <FadeIn delay={0.08}>
              <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
                Whether you're a student or a business owner — if you want to grow your digital
                marketing skills, you belong here.
              </p>
            </FadeIn>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {audience.map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.06}>
                <AudiencePill {...item} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section> */}

      {/* ═══ 6. WHAT YOU'LL LEARN ══════════════ */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <SectionHeading eyebrow="Curriculum" title="What You'll Learn" center />
            <FadeIn delay={0.08}>
              <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
                A full industry-mapped skill set covering every key area of modern digital marketing.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill) => (
                <SkillBadge key={skill.label} {...skill} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ 7. CLOSING CTA ═════════════════════ */}
      {/* <section className="py-20 px-6 bg-gray-50 border-t border-gray-100">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center rounded-2xl bg-white border border-gray-100 shadow-sm p-12 md:p-16">
            <div className="w-10 h-1 rounded-full bg-[#0a756a] mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-5">
              Start Your Digital Marketing{" "}
              <span className="text-[#0a756a]">Journey Today</span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-xl mx-auto mb-8">
              Whether you want a new career, freelance opportunities, or business growth,
              Entrain Labs provides practical training that helps you achieve your goals.
            </p>
            <a
              href="/courses"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0a756a] text-white font-semibold text-sm hover:bg-[#085e55] transition-colors duration-200 shadow-sm"
            >
              Enroll Now <ArrowRight size={15} />
            </a>
          </div>
        </FadeIn>
      </section> */}
 <FinalCTA />
    </div>
  );
}
