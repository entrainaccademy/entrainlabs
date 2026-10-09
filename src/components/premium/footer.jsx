"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
const ftlogo = "/footerlogo.jpeg";

// Inline SVG components for social media icons to prevent missing exports from library versions
const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.95 1.96C5.12 19.5 12 19.5 12 19.5s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Offline Batches", path: "/offline-batches" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];

  const programs = [
    { name: "Digital Marketing Master Program", path: "/courses" },
    { name: "Performance Marketing", path: "/courses" },
    { name: "SEO Optimization", path: "/courses" },
    { name: "Google Ads & Meta Ads", path: "/courses" },
    { name: "Offline Classroom Batches", path: "/offline-batches" },
    { name: "Online Training Plans", path: "/online-plans" },
    { name: "Career Support & Internship", path: "/courses" }
  ];

  const socialLinks = [
    { Icon: InstagramIcon, href: "https://instagram.com/entrain_labs", label: "Instagram" },
    { Icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
    { Icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
    { Icon: YoutubeIcon, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="relative bg-[#0B0F0F] text-zinc-300 overflow-hidden font-sans border-t border-white/[0.06] transition-colors duration-300">
      {/* Top horizontal divider gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#0A756A]/40 to-transparent" />

      {/* Subtle Noise Texture Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0B0F0F_100%)] pointer-events-none z-0" />

      {/* Spotlights */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-[600px] h-[350px] rounded-full bg-[#0A756A]/8 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 translate-y-1/3 w-[600px] h-[450px] rounded-full bg-[#14b8a6]/5 blur-[160px] pointer-events-none" />

      {/* Floating Sparkle Dot */}
      <div className="absolute top-1/4 right-[12%] w-1.5 h-1.5 bg-[#14b8a6] rounded-full blur-[1px] animate-pulse pointer-events-none opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10 py-16 sm:py-20 md:py-24 z-10">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.85fr_0.85fr_1.3fr_1.1fr] gap-10 lg:gap-6 xl:gap-10 pb-16 border-b border-white/[0.06]">

          {/* Column 1 — Brand info */}
          <div className="flex flex-col items-start gap-6 col-span-1">
            {/* White Logo Card */}
            <Link
              href="/"
              className="inline-flex items-center justify-center p-2.5 rounded-sm  shadow-xl hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgb(255,255,255,0.12)] hover:ring-2 hover:ring-[#0A756A]/20 transition-all duration-300 relative group"
              aria-label="Entrain Labs Home"
            >
              <img
                src={ftlogo}
                alt="Entrain Labs Logo"
                loading="lazy"
                decoding="async"
                width={112}
                height={36}
                className="object-contain h-9 w-auto transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </Link>

            <p className="text-[13px] leading-relaxed text-zinc-400 max-w-xs font-satoshi">
              Build practical digital marketing skills through live classes, AI tools, real-world projects, and expert mentorship.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-11 w-11 rounded-full  border-white/10  text-primary  hover:text-white flex items-center justify-center hover:scale-105 hover:-translate-y-0.5 hover:bg-[#0A756A] hover:border-[#0A756A] hover:shadow-[0_0_20px_rgba(10,117,106,0.45)] transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0A756A] focus:ring-offset-2 focus:ring-offset-[#0B0F0F]"
                  aria-label={label}
                >
                  <Icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="flex flex-col items-start gap-5">
            <span className="text-[11px] font-semibold text-zinc-400 tracking-[0.2em] uppercase font-clash">
              Quick Links
            </span>

            <ul className="flex flex-col gap-3 text-[13px] font-satoshi w-full">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="relative py-1 inline-block text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-300 font-medium group focus:outline-none focus:text-white"
                  >
                    <span>{link.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#0A756A] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Programs */}
          <div className="flex flex-col items-start gap-5">
            <span className="text-[11px] font-semibold text-zinc-400 tracking-[0.2em] uppercase font-clash">
              Programs
            </span>

            <ul className="flex flex-col gap-3 text-[13px] font-satoshi w-full">
              {programs.map((prog) => (
                <li key={prog.name}>
                  <Link
                    href={prog.path}
                    className="relative py-1 inline-block text-zinc-400 hover:text-white hover:translate-x-1 transition-all duration-300 font-medium group focus:outline-none focus:text-white"
                  >
                    <span>{prog.name}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#0A756A] transition-all duration-300 group-hover:w-full" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div className="flex flex-col items-start gap-5">
            <span className="text-[11px] font-semibold text-zinc-400 tracking-[0.2em] uppercase font-clash">
              Contact Us
            </span>

            <div className="flex flex-col gap-3.5 w-full">
              {/* Phone item */}
              <div className="flex items-center gap-3.5 rounded-xl p-2 sm:p-2.5 hover:bg-white/[0.03] hover:-translate-y-0.5 transition-all duration-300 group">
                <div className="h-9 w-9 rounded-lg text-primary flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#0A756A] group-hover:text-white shadow-lg">
                  <Phone size={15} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[10px] text-zinc-500 uppercase tracking-widest font-semibold font-clash">Phone</span>
                  <a href="tel:+917593841013" className="block text-[13px] font-medium text-zinc-300 hover:text-[#14b8a6] transition-colors focus:outline-none focus:text-[#14b8a6] whitespace-nowrap">
                    +91 75938 41013
                  </a>
                </div>
              </div>

              {/* Email item */}
              <div className="flex items-center gap-3.5 rounded-xl p-2 sm:p-2.5 hover:bg-white/[0.03] hover:-translate-y-0.5 transition-all duration-300 group">
                <div className="h-9 w-9 rounded-lg text-primary flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#0A756A] group-hover:text-white shadow-lg">
                  <Mail size={15} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[10px] text-zinc-500 uppercase tracking-widest font-semibold font-clash">Email</span>
                  <a href="mailto:entrainlabs@gmail.com" className="block text-[13px] font-medium text-zinc-300 hover:text-[#14b8a6] transition-colors focus:outline-none focus:text-[#14b8a6] whitespace-nowrap">
                    entrainlabs@gmail.com
                  </a>
                </div>
              </div>

              {/* Location item */}
              <div className="flex items-start gap-3.5 rounded-xl p-2 sm:p-2.5 hover:bg-white/[0.03] hover:-translate-y-0.5 transition-all duration-300 group">
                <div className="h-9 w-9 rounded-lg text-primary flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-300 group-hover:bg-[#0A756A] group-hover:text-white shadow-lg">
                  <MapPin size={15} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block text-[10px] text-zinc-500 uppercase tracking-widest font-semibold font-clash">Location</span>
                  <span className="block text-[12px] text-zinc-300 font-medium leading-relaxed font-satoshi">
                    Vemboor, Manjeri,<br />Malappuram, Kerala
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 5 — Newsletter */}
          <div className="flex flex-col items-start gap-5 col-span-1 sm:col-span-2 lg:col-span-1">
            <span className="text-[11px] font-semibold text-zinc-400 tracking-[0.2em] uppercase font-clash">
              Stay Updated
            </span>

            <p className="text-[13px] leading-relaxed text-zinc-400 font-satoshi max-w-xs">
              Get digital marketing tips, AI updates, career opportunities, and latest course announcements.
            </p>

            <form onSubmit={handleSubscribe} className="relative w-full max-w-sm">
              <div className="relative flex items-center">
                <input
                  type="email"
                  required
                  placeholder="Your business email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-full pl-6 pr-14 py-3.5 text-[13px] text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-[#0A756A] focus:ring-2 focus:ring-[#0A756A]/50 focus:ring-offset-2 focus:ring-offset-[#0B0F0F] transition-all font-satoshi"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 h-9 w-9 rounded-full bg-[#0A756A] hover:bg-[#14b8a6] text-white flex items-center justify-center hover:scale-105 active:scale-95 hover:shadow-[0_0_15px_rgba(20,184,166,0.4)] transition-all duration-300 cursor-pointer"
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                </button>
              </div>
            </form>

            {isSubscribed && (
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium mt-1 animate-pulse">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Successfully subscribed! Check your inbox.</span>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 text-[12px] text-zinc-500 font-satoshi">
          {/* Left copyright */}
          <div className="text-center sm:text-left">
            © 2026 Entrain Labs. All Rights Reserved.
          </div>

          {/* Right quick footer links */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Link href="/about" className="hover:text-white transition-colors focus:outline-none focus:text-white">About Us</Link>
            <span className="text-zinc-700">•</span>
            <Link href="/contact" className="hover:text-white transition-colors focus:outline-none focus:text-white">Contact & Support</Link>
            <span className="text-zinc-700">•</span>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors focus:outline-none focus:text-white">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
}