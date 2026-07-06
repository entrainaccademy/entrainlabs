"use client";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
// Inline SVG components for social media and send buttons to prevent missing lucide-react exports
const SendIcon = (props) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" {...props}>
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>);
const InstagramIcon = (props) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>);
const LinkedinIcon = (props) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>);
const YoutubeIcon = (props) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.95 1.96C5.12 19.5 12 19.5 12 19.5s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>);
const FacebookIcon = (props) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>);
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
    return (<footer className="relative bg-zinc-950 text-zinc-400 border-t border-zinc-900 overflow-hidden font-sans">
      {/* Noise overlay */}
      <div className="absolute inset-0 noise-overlay pointer-events-none opacity-20"/>
      
      {/* Subtle radial backdrop glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-accent/5 blur-[120px] pointer-events-none"/>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-brand-accent-2/5 blur-[150px] pointer-events-none"/>

      <div className="relative mx-auto max-w-7xl px-6 md:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 pb-12 border-b border-zinc-900">
          
          {/* Brand Info & Newsletter */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <a href="#" className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-white flex items-center justify-center">
                <img src="/New-logo.png" alt="Entrain Labs Logo" className="w-6 h-6 object-contain"/>
              </div>
              <span className="font-clash text-lg md:text-xl font-bold tracking-wide text-white">
                ENTRAIN LABS
              </span>
            </a>
            
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              Helping students, career switchers, and business owners master modern, AI-powered digital marketing strategies through hands-on project workflows and active agency internships.
            </p>

            {/* Newsletter form */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold text-white tracking-wider uppercase font-satoshi">
                Subscribe to our newsletter
              </span>
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                <div className="relative flex-grow">
                  <input type="email" required placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-zinc-900/80 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-brand-accent transition-colors"/>
                </div>
                <button type="submit" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-zinc-950 hover:bg-zinc-100 transition-transform active:scale-95 cursor-pointer">
                  <SendIcon />
                </button>
              </form>
              {isSubscribed && (<span className="text-xs text-brand-success font-medium">
                  ✓ Successfully subscribed! Check your inbox soon.
                </span>)}
            </div>
          </div>

          {/* Column 2: Popular Programs */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold text-white tracking-wider uppercase font-satoshi">
              Top Courses
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li>
                <a href="#course-dm-master" className="hover:text-brand-accent-2 transition-colors">
                  Digital Marketing Master Program
                </a>
              </li>
              <li>
                <a href="#course-perf-marketing" className="hover:text-brand-accent-2 transition-colors">
                  Performance Marketing
                </a>
              </li>
              <li>
                <a href="#course-seo" className="hover:text-brand-accent-2 transition-colors">
                  SEO & Search Optimization
                </a>
              </li>
              <li>
                <a href="#course-social-media" className="hover:text-brand-accent-2 transition-colors">
                  Social Media Marketing
                </a>
              </li>
              <li>
                <a href="#course-ai-marketing" className="hover:text-brand-accent-2 transition-colors">
                  AI Marketing Integration
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Resources */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold text-white tracking-wider uppercase font-satoshi">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5 text-xs">
              <li>
                <a href="#about" className="hover:text-brand-accent-2 transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#journey" className="hover:text-brand-accent-2 transition-colors">Learning Journey</a>
              </li>
              <li>
                <a href="#mentors" className="hover:text-brand-accent-2 transition-colors">Our Mentors</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-brand-accent-2 transition-colors">Success Stories</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-brand-accent-2 transition-colors">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold text-white tracking-wider uppercase font-satoshi">
              Contact
            </h4>
            <ul className="flex flex-col gap-3 text-xs">
              <li className="flex items-center gap-2">
                <Mail size={13} className="text-brand-accent-2"/>
                <a href="mailto:info@entrainlabs.com" className="hover:text-brand-accent-2 transition-colors">
                  info@entrainlabs.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={13} className="text-brand-accent-2"/>
                <a href="tel:+919745020223" className="hover:text-brand-accent-2 transition-colors">
                  +91 97450 20223
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={13} className="text-brand-accent-2 mt-0.5"/>
                <span className="leading-relaxed">
                  Entrain Labs Hub,<br />
                  Kochi, Kerala, India
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-zinc-500">
          <span>
            © {new Date().getFullYear()} Entrain Labs. All rights reserved. Designed with Apple & Stripe aesthetics.
          </span>
          
          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="YouTube">
              <YoutubeIcon />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>);
}
