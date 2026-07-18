"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Check, HelpCircle, ArrowRight, MessageSquare, ShieldCheck, Clock, Award } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "Digital Marketing Master Program",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("entrainlabs@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission process
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      
      // Redirect to WhatsApp with filled details
      const waMsg = `*Free Career Consultation Request*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A*Course:* ${formData.course}%0A*Message:* ${formData.message}`;
      const waUrl = `https://wa.me/917593841013?text=${waMsg}`;
      window.open(waUrl, "_blank");

      // Reset states
      setTimeout(() => {
        setSuccess(false);
        setFormData({
          name: "",
          phone: "",
          email: "",
          course: "Digital Marketing Master Program",
          message: ""
        });
      }, 3000);
    }, 1500);
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Which course is best for beginners?",
      a: "Our Digital Marketing Master Program is the best starting point. It covers everything from absolute basics to advanced performance marketing, SEO, and social media advertising, combined with real client projects."
    },
    {
      q: "Do you offer online classes?",
      a: "Yes, we offer both offline classroom training at our center and live interactive online sessions to suit working professionals and students alike."
    },
    {
      q: "Will I receive placement assistance?",
      a: "Absolutely. We provide dedicated career support, resume building, mock interviews, and guaranteed internship opportunities with active agency projects."
    },
    {
      q: "Can working professionals join?",
      a: "Yes! Our batches are flexible, offering evening and weekend programs designed specifically for working professionals looking to upskill or switch careers."
    }
  ];

  return (
    <div className="relative bg-white text-zinc-650 min-h-screen py-16 sm:py-20 md:py-28 overflow-hidden z-10">
      
      {/* Fine Grid Texture Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-40 z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(10,117,106,0.04)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-grid)" />
        </svg>
      </div>

      {/* Background Blurs */}
      <div className="absolute top-[5%] left-[5%] w-[400px] h-[400px] rounded-full bg-[#0A756A]/5 blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[35%] right-[5%] w-[500px] h-[500px] rounded-full bg-[#0A756A]/4 blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[10%] w-[450px] h-[450px] rounded-full bg-[#0A756A]/5 blur-[120px] pointer-events-none z-0" />

      {/* Hero Section */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10 z-10 text-center md:text-left mb-16 md:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-center md:items-start gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0A756A]/10 text-[#0A756A] text-xs font-semibold uppercase tracking-wider font-clash">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0A756A] animate-pulse" />
              Direct Support
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-outfit text-zinc-900 leading-[1.1] tracking-tight text-center md:text-left">
              Let's Build Your <span className="text-[#0A756A]">Digital Marketing</span> Career Together
            </h1>
            <p className="text-zinc-500 font-satoshi text-sm sm:text-base md:text-lg leading-relaxed max-w-xl text-center md:text-left font-light">
              Whether you're a student, job seeker, freelancer, entrepreneur, or business owner, we're here to guide you toward the right learning path.
            </p>
          </div>
          
          <div className="lg:col-span-5 relative w-full flex justify-center items-center">
            {/* Decorative premium glass element */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-[40px] border border-zinc-200/50 bg-gradient-to-tr from-[#0A756A]/10 to-[#14b8a6]/5 shadow-[0_24px_50px_-15px_rgba(10,117,106,0.15)] flex items-center justify-center p-8 overflow-hidden group">
              <div className="absolute inset-0 bg-white/20 backdrop-blur-sm z-0" />
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-[#0A756A]/15 blur-xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-[#14b8a6]/20 blur-xl pointer-events-none" />
              
              {/* Abstract graphic */}
              <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                <div className="h-16 w-16 rounded-2xl bg-white text-[#0A756A] flex items-center justify-center shadow-lg border border-zinc-100 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l3.582-1.791L16 21l-.813-5.096C17.75 14.73 19 12.515 19 10c0-4.418-3.582-8-8-8s-8 3.582-8 8c0 2.515 1.25 4.73 3.813 5.904Z" />
                  </svg>
                </div>
                <span className="font-outfit font-bold text-zinc-900 text-lg leading-tight">Interactive Mentorship</span>
                <p className="text-zinc-500 text-xs font-satoshi leading-normal max-w-[200px]">
                  Personalized guidance from seasoned experts at every single step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact Cards */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10 z-10 mb-20 md:mb-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Call Us */}
          <div className="rounded-3xl border border-zinc-200/50 bg-white/50 backdrop-blur-md p-6 sm:p-8 hover:border-[#0A756A]/20 hover:bg-white/90 hover:shadow-[0_20px_40px_-15px_rgba(10,117,106,0.08)] hover:-translate-y-1.5 transition-all duration-500 group flex flex-col gap-6 text-left shadow-sm">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-[#0A756A] to-[#14b8a6]/80 text-white flex items-center justify-center shrink-0 shadow-md shadow-[#0A756A]/10">
              <Phone size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-900 tracking-tight font-outfit">Call Us</h3>
              <p className="text-sm text-zinc-500 font-satoshi mt-1.5">For urgent queries, talk to us directly.</p>
              <span className="block text-lg font-bold text-zinc-800 font-satoshi mt-4">+91 75938 41013</span>
            </div>
            <a 
              href="tel:+917593841013"
              className="mt-auto w-full inline-flex h-11 items-center justify-center rounded-full bg-[#0A756A]/5 hover:bg-[#0A756A] text-[#0A756A] hover:text-white font-medium text-xs tracking-wider uppercase transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0A756A] cursor-pointer"
            >
              Call Now
            </a>
          </div>

          {/* Card 2: Email Us */}
          <div className="rounded-3xl border border-zinc-200/50 bg-white/50 backdrop-blur-md p-6 sm:p-8 hover:border-[#0A756A]/20 hover:bg-white/90 hover:shadow-[0_20px_40px_-15px_rgba(10,117,106,0.08)] hover:-translate-y-1.5 transition-all duration-500 group flex flex-col gap-6 text-left shadow-sm">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-[#0A756A] to-[#14b8a6]/80 text-white flex items-center justify-center shrink-0 shadow-md shadow-[#0A756A]/10">
              <Mail size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-900 tracking-tight font-outfit">Email Us</h3>
              <p className="text-sm text-zinc-500 font-satoshi mt-1.5">Send us your queries anytime.</p>
              <span className="block text-lg font-bold text-zinc-800 font-satoshi mt-4 break-all">entrainlabs@gmail.com</span>
            </div>
            <button 
              onClick={handleCopyEmail}
              className="mt-auto w-full inline-flex h-11 items-center justify-center rounded-full bg-[#0A756A]/5 hover:bg-[#0A756A] text-[#0A756A] hover:text-white font-medium text-xs tracking-wider uppercase transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0A756A] cursor-pointer"
            >
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>

          {/* Card 3: Visit Us */}
          <div className="rounded-3xl border border-zinc-200/50 bg-white/50 backdrop-blur-md p-6 sm:p-8 hover:border-[#0A756A]/20 hover:bg-white/90 hover:shadow-[0_20px_40px_-15px_rgba(10,117,106,0.08)] hover:-translate-y-1.5 transition-all duration-500 group flex flex-col gap-6 text-left shadow-sm">
            <div className="h-12 w-12 rounded-2xl bg-gradient-to-tr from-[#0A756A] to-[#14b8a6]/80 text-white flex items-center justify-center shrink-0 shadow-md shadow-[#0A756A]/10">
              <MapPin size={20} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-900 tracking-tight font-outfit">Visit Us</h3>
              <p className="text-sm text-zinc-500 font-satoshi mt-1.5">Drop by our main campus in Kerala.</p>
              <span className="block text-sm font-semibold text-zinc-700 font-satoshi mt-4 leading-normal">
                Vemboor, Manjeri,<br />Malappuram, Kerala, 676121
              </span>
            </div>
            <a 
              href="https://maps.google.com/?q=Vemboor,Manjeri,Malappuram,Kerala"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto w-full inline-flex h-11 items-center justify-center rounded-full bg-[#0A756A]/5 hover:bg-[#0A756A] text-[#0A756A] hover:text-white font-medium text-xs tracking-wider uppercase transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0A756A] cursor-pointer"
            >
              Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* Center Section: Two-Column Form & Info */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10 z-10 mb-20 md:mb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Why Contact Us & Promise */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold font-outfit text-zinc-900 tracking-tight leading-tight mb-4">
                We're Committed to <span className="text-[#0A756A]">Your Success</span>
              </h2>
              <p className="text-sm sm:text-base text-zinc-500 font-satoshi leading-relaxed font-light">
                Our counsellors will guide you step-by-step through our curriculum, fees, structural timings, and internship roadmap.
              </p>
            </div>

            {/* Why Contact Us Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Choosing the course", desc: "Select program matching goals" },
                { title: "Career guidance", desc: "Personalized roadmapping" },
                { title: "Admission support", desc: "Seamless enrollment help" },
                { title: "Fees & payment", desc: "Instalment/plan details" },
                { title: "Placement help", desc: "Agency interview prep" },
                { title: "Learning roadmap", desc: "Weekly timelines" }
              ].map((item, index) => (
                <div key={index} className="flex gap-3.5 items-start p-3 rounded-2xl border border-zinc-100 bg-zinc-50/50 hover:bg-zinc-50 transition-colors duration-300">
                  <div className="h-7 w-7 rounded-lg bg-[#0A756A]/10 text-[#0A756A] flex items-center justify-center shrink-0">
                    <Check size={14} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-zinc-800 font-outfit tracking-wide">{item.title}</h4>
                    <p className="text-[11px] text-zinc-500 font-satoshi mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Response Promise Card */}
            <div className="rounded-3xl border border-zinc-200/50 bg-gradient-to-r from-zinc-50 to-[#0A756A]/5 p-6 shadow-sm">
              <div className="flex items-center gap-2.5 text-emerald-600 font-bold text-xs tracking-wider uppercase font-clash mb-4">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                Response Promise
              </div>
              <p className="text-[13px] text-zinc-650 leading-relaxed font-satoshi mb-4">
                We respect your time. Our admissions department guarantees a direct response inside 24 hours of form submission.
              </p>
              <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-3 text-xs font-semibold text-zinc-700">
                  <Clock size={15} className="text-[#0A756A]" />
                  <span>Free Career Guidance</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-semibold text-zinc-700">
                  <MessageSquare size={15} className="text-[#0A756A]" />
                  <span>Course Counseling</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-semibold text-zinc-700">
                  <Award size={15} className="text-[#0A756A]" />
                  <span>Placement Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[32px] border border-zinc-200/60 bg-white/70 backdrop-blur-xl p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] text-left relative">
              <h3 className="text-xl sm:text-2xl font-bold font-outfit text-zinc-900 tracking-tight leading-tight mb-2">
                Book Free Consultation
              </h3>
              <p className="text-zinc-500 text-xs sm:text-sm font-satoshi mb-8">
                Fill out the form details. We will schedule a direct session on WhatsApp.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-semibold text-zinc-700 font-clash">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      placeholder="Jane Doe" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      className="h-11 px-4 text-xs sm:text-sm border border-zinc-200 rounded-xl bg-white focus:outline-none focus:border-[#0A756A] focus:ring-4 focus:ring-[#0A756A]/10 transition-all font-satoshi"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs font-semibold text-zinc-700 font-clash">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      placeholder="+91 12345 67890" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      className="h-11 px-4 text-xs sm:text-sm border border-zinc-200 rounded-xl bg-white focus:outline-none focus:border-[#0A756A] focus:ring-4 focus:ring-[#0A756A]/10 transition-all font-satoshi"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-semibold text-zinc-700 font-clash">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      placeholder="jane.doe@example.com" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      className="h-11 px-4 text-xs sm:text-sm border border-zinc-200 rounded-xl bg-white focus:outline-none focus:border-[#0A756A] focus:ring-4 focus:ring-[#0A756A]/10 transition-all font-satoshi"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="course" className="text-xs font-semibold text-zinc-700 font-clash">Course Interested</label>
                    <select 
                      id="course" 
                      name="course" 
                      value={formData.course} 
                      onChange={handleInputChange} 
                      className="h-11 px-4 text-xs sm:text-sm border border-zinc-200 rounded-xl bg-white focus:outline-none focus:border-[#0A756A] focus:ring-4 focus:ring-[#0A756A]/10 transition-all font-satoshi"
                    >
                      <option value="Digital Marketing Master Program">Digital Marketing Master</option>
                      <option value="Performance Marketing">Performance Marketing</option>
                      <option value="SEO Optimization">SEO Optimization</option>
                      <option value="Google Ads / Meta Ads">Google Ads / Meta Ads</option>
                      <option value="Other">Other / Career Counseling</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-semibold text-zinc-700 font-clash">Message (Optional)</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    placeholder="Tell us about your learning goals..." 
                    value={formData.message} 
                    onChange={handleInputChange} 
                    className="p-4 text-xs sm:text-sm border border-zinc-200 rounded-xl bg-white focus:outline-none focus:border-[#0A756A] focus:ring-4 focus:ring-[#0A756A]/10 transition-all font-satoshi resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading || success}
                  className="w-full flex h-12 items-center justify-center gap-2 rounded-full bg-[#0A756A] hover:bg-[#086359] text-white font-medium text-sm transition-all duration-300 hover:shadow-[0_8px_25px_-5px_rgba(10,117,106,0.35)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    <span className="h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  ) : success ? (
                    <>
                      <Check size={16} />
                      Opening WhatsApp...
                    </>
                  ) : (
                    "Book Free Career Consultation"
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* FAQ Section */}
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 z-10 mb-20 md:mb-28 text-left">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-[#0A756A] uppercase tracking-widest font-clash">FAQ</span>
          <h2 className="text-2xl sm:text-3xl font-bold font-outfit text-zinc-900 tracking-tight leading-tight mt-2">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div 
                key={index}
                className="rounded-2xl border border-zinc-200/60 bg-white/50 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-[#0A756A]/20"
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 text-left text-zinc-900 font-semibold font-outfit text-sm sm:text-base focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle size={18} className="text-[#0A756A] shrink-0" />
                    {faq.q}
                  </span>
                  <svg 
                    className={`h-5 w-5 text-zinc-400 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180" : ""}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <div className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-[200px] border-t border-zinc-100 p-5 bg-zinc-50/20" : "max-h-0 opacity-0"}`}>
                  <p className="text-zinc-500 font-satoshi text-xs sm:text-sm leading-relaxed font-light">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Google Map */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10 z-10 mb-20 md:mb-28">
        <div className="rounded-[32px] overflow-hidden border border-zinc-200/50 bg-white shadow-xl shadow-zinc-100/30">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.502842478546!2d76.104443!3d11.113333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64a7c1e3cd2fb%3A0x6e99c1d1db2652b0!2sVemboor%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full hover:scale-[1.005] transition-transform duration-700"
            title="Entrain Labs Location Map"
          />
        </div>
      </div>

      {/* Final CTA Banner */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-10 z-10">
        <div className="rounded-[40px] border border-zinc-200/50 bg-gradient-to-r from-zinc-50/50 via-white/80 to-[#0A756A]/5 backdrop-blur-md p-8 sm:p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 hover:border-[#0A756A]/20 transition-all duration-500 shadow-sm text-left">
          <div>
            <span className="text-xs font-semibold text-[#0A756A] uppercase tracking-widest mb-2 block font-clash">Career Experts</span>
            <h3 className="text-2xl sm:text-3xl font-bold font-outfit text-zinc-900 tracking-tight leading-tight">
              Still have questions?
            </h3>
            <p className="text-sm text-zinc-500 font-satoshi mt-2 max-w-md">
              Talk directly with our Career Experts to align your curriculum and study structures.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0 w-full sm:w-auto">
            <a 
              href="tel:+917593841013" 
              className="inline-flex h-12 items-center justify-center px-7 rounded-full bg-[#0A756A] hover:bg-[#086359] text-white font-medium text-sm transition-all duration-300 hover:shadow-[0_8px_25px_-5px_rgba(10,117,106,0.35)] hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
            >
              Call Now
            </a>
            <a 
              href="https://wa.me/917593841013" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center px-7 rounded-full border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 font-medium text-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
