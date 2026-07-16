"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import ftlogo from '/footerlogo.jpeg'

// Inline SVG components for social media icons to prevent missing exports from library versions
const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const YoutubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.95 1.96C5.12 19.5 12 19.5 12 19.5s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
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
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ];

  const programs = [
    "Digital Marketing Master Program",
    "Performance Marketing",
    "SEO",
    "Google Ads",
    "Meta Ads",
    "Content Marketing",
    "Career Plus"
  ];

  const socialLinks = [
    { Icon: InstagramIcon, href: "https://instagram.com", label: "Instagram" },
    { Icon: FacebookIcon, href: "https://facebook.com", label: "Facebook" },
    { Icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn" },
    { Icon: YoutubeIcon, href: "https://youtube.com", label: "YouTube" },
  ];

  return (
    <footer className="relative bg-[#0B0F0F] text-zinc-200 border-t border-[rgba(255,255,255,0.08)] overflow-hidden font-sans pt-16 sm:pt-20 md:pt-24 pb-8 transition-colors duration-300">
      
      {/* Subtle Noise Texture Overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-[0.02]" />
      
      {/* Blurred Backdrop Spotlight Gradients */}
      <div className="absolute -top-12 left-1/4 w-[400px] h-[400px] rounded-full bg-[#0A756A]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-[#14b8a6]/5 blur-[150px] pointer-events-none" />
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#0A756A]/5 blur-[120px] pointer-events-none" />

      {/* Floating Glow Orbs */}
      <div className="absolute top-1/3 left-10 w-2 h-2 bg-[#0A756A] rounded-full blur-sm animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-3.5 h-3.5 bg-[#14b8a6]/40 rounded-full blur-[2px] animate-bounce pointer-events-none" />

      {/* Grid container max-width: 1280px */}
      <div className="relative mx-auto max-w-[1280px] px-6 md:px-8 z-10">
        
        {/* Main Footer Grid - 5 Columns on Desktop, 2 on Tablet, 1 on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12 pb-16 border-b border-[rgba(255,255,255,0.08)] text-center sm:text-left">
          
          {/* Column 1 — Brand info */}
          <div className="flex flex-col items-center sm:items-start gap-4">
            {/* White Logo Card */}
            <a 
              href="/" 
              className="inline-flex border items-center justify-center transition-all duration-300 shadow-md hover:-translate-y-1 hover:shadow-lg group"
            >
              <img
                src={ftlogo}
                alt="Entrain Labs Logo"
                className="object-contain h-10 transition-transform duration-300"
              />
            </a>
            
            <p className="text-xs leading-relaxed text-[#B5B5B5] max-w-xs font-satoshi mt-2">
              Build practical digital marketing skills through live classes, AI tools, real-world projects, and expert mentorship.
            </p>

            {/* Social icons circular glass circles */}
            <div className="flex items-center justify-center sm:justify-start gap-3 mt-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a 
                  key={label}
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="h-9 w-9 rounded-full border border-white/10 bg-white/5 text-zinc-400 hover:text-white flex items-center justify-center hover:scale-110 hover:-translate-y-1 hover:bg-[#0A756A] hover:border-[#0A756A] hover:shadow-[0_0_15px_rgba(10,117,106,0.4)] transition-all duration-300 cursor-pointer"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs text-white tracking-widest uppercase font-clash font-bold">
              Quick Links
            </h4>
            
            <ul className="flex flex-col gap-2.5 text-[13px] font-satoshi">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.path} 
                    className="block text-[#B5B5B5] hover:text-[#0A756A] dark:hover:text-[#5EEAD4] hover:translate-x-1 transition-all duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Programs */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold text-white tracking-widest uppercase font-clash">
              Programs
            </h4>
            
            <ul className="flex flex-col gap-2.5 text-[13px] font-satoshi">
              {programs.map((prog) => (
                <li key={prog}>
                  <a 
                    href="#courses" 
                    className="block text-[#B5B5B5] hover:text-[#0A756A] dark:hover:text-[#5EEAD4] hover:translate-x-1 transition-all duration-300"
                  >
                    {prog}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div className="flex flex-col gap-4 items-center sm:items-start">
            <h4 className="text-xs font-bold text-white tracking-widest uppercase font-clash">
              Contact Us
            </h4>
            
            <div className="flex flex-col gap-3 w-full max-w-[240px] sm:max-w-none">
              
              {/* Phone item */}
              <div className="flex items-center gap-3 rounded-xl p-2.5 -mx-2.5 border border-transparent hover:border-[#0A756A]/20 hover:bg-[#0A756A]/5 hover:shadow-[0_0_12px_rgba(10,117,106,0.15)] group transition-all duration-300">
                <div className="h-8 w-8 rounded-lg bg-[#0A756A]/10 text-[#0A756A] flex items-center justify-center shrink-0">
                  <Phone size={14} />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] text-zinc-500 uppercase tracking-wide">Phone</span>
                  <a href="tel:+917593841013" className="block text-xs font-medium text-zinc-300 hover:text-white transition-colors">
                    +91 75938 41013
                  </a>
                </div>
              </div>

              {/* Email item */}
              <div className="flex items-center gap-3 rounded-xl p-2.5 -mx-2.5 border border-transparent hover:border-[#0A756A]/20 hover:bg-[#0A756A]/5 hover:shadow-[0_0_12px_rgba(10,117,106,0.15)] group transition-all duration-300">
                <div className="h-8 w-8 rounded-lg bg-[#0A756A]/10 text-[#0A756A] flex items-center justify-center shrink-0">
                  <Mail size={14} />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] text-zinc-500 uppercase tracking-wide">Email</span>
                  <a href="mailto:entrainlabs@gmail.com" className="block text-xs font-medium tracking-wider text-zinc-300 hover:text-white transition-colors truncate max-w-[140px] sm:max-w-none">
                    entrainlabs@gmail.com
                  </a>
                </div>
              </div>

              {/* Location item */}
              <div className="flex items-start gap-3 rounded-xl p-2.5 -mx-2.5 border border-transparent hover:border-[#0A756A]/20 hover:bg-[#0A756A]/5 hover:shadow-[0_0_12px_rgba(10,117,106,0.15)] group transition-all duration-300">
                <div className="h-8 w-8 rounded-lg bg-[#0A756A]/10 text-[#0A756A] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={14} />
                </div>
                <div className="text-left">
                  <span className="block text-[10px] text-zinc-500 uppercase tracking-wide">Location</span>
                  <span className="block text-xs font-medium tracking-wider text-[#B5B5B5] font-satoshi leading-normal">
                    Vemboor, Manjeri,<br />Malappuram, Kerala
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Column 5 — Newsletter */}
          <div className="flex flex-col gap-4 items-center sm:items-start w-full">
            <h4 className="text-xs font-bold text-white tracking-widest uppercase font-clash">
              Stay Updated
            </h4>
            
            <p className="text-xs leading-relaxed text-[#B5B5B5] font-satoshi max-w-xs">
              Get digital marketing tips, AI updates, career opportunities, and latest course announcements.
            </p>

            <form onSubmit={handleSubscribe} className="relative w-full max-w-xs sm:max-w-none mt-2">
              <input 
                type="email" 
                required 
                placeholder="Enter your email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="w-full bg-white/5 border border-white/10 rounded-full pl-5 pr-14 py-3 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-[#0A756A] focus:ring-1 focus:ring-[#0A756A] transition-all font-satoshi"
              />
              <button 
                type="submit" 
                className="absolute right-1 top-1 h-9 w-9 rounded-full bg-[#0A756A] hover:bg-[#08685F] text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all cursor-pointer shadow"
                aria-label="Subscribe"
              >
                <ArrowRight size={14} />
              </button>
            </form>
            
            {isSubscribed && (
              <span className="text-xs text-emerald-400 font-medium mt-1">
                Successfully subscribed!
              </span>
            )}
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 text-xs text-[#B5B5B5] font-satoshi text-center md:text-left">
          
          {/* Left copyright */}
          <div>
            © 2026 Entrain Labs. All Rights Reserved.
          </div>

          {/* Right quick footer links */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <a href="/privacy" className="hover:text-[#0A756A] transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="/terms" className="hover:text-[#0A756A] transition-colors">Terms & Conditions</a>
            <span>•</span>
            <a href="/sitemap" className="hover:text-[#0A756A] transition-colors">Sitemap</a>
          </div>

        </div>

      </div>
    </footer>
  );
}