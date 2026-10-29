"use client";
import React, { useState } from "react";
import { 
  User, 
  Phone, 
  Mail, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Users, 
  ChevronDown,
  RotateCcw
} from "lucide-react";

export default function LeadRegistrationForm({ className = "" }) {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    preferredBatch: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Field Validation
  const validateField = (name, value) => {
    let error = "";
    if (name === "fullName") {
      if (!value.trim()) {
        error = "Please enter your full name";
      } else if (value.trim().length < 2) {
        error = "Name must be at least 2 characters";
      }
    } else if (name === "phoneNumber") {
      const cleanPhone = value.replace(/[^0-9+]/g, "");
      if (!value.trim()) {
        error = "Please enter your phone number";
      } else if (cleanPhone.length < 10) {
        error = "Please enter a valid 10-digit phone number";
      }
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value.trim()) {
        error = "Please enter your email address";
      } else if (!emailRegex.test(value.trim())) {
        error = "Please enter a valid email address";
      }
    } else if (name === "preferredBatch") {
      if (!value) {
        error = "Please select your preferred batch";
      }
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      fullName: validateField("fullName", formData.fullName),
      phoneNumber: validateField("phoneNumber", formData.phoneNumber),
      email: validateField("email", formData.email),
      preferredBatch: validateField("preferredBatch", formData.preferredBatch)
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((err) => Boolean(err));
    if (hasErrors) return;

    setIsSubmitting(true);

    const waNumber = "917593841013";
    const waMessage = 
      `*Free Demo Session Registration*%0A%0A` +
      `*Full Name:* ${encodeURIComponent(formData.fullName.trim())}%0A` +
      `*Phone Number:* ${encodeURIComponent(formData.phoneNumber.trim())}%0A` +
      `*Email Address:* ${encodeURIComponent(formData.email.trim())}%0A` +
      `*Preferred Batch:* ${encodeURIComponent(formData.preferredBatch)}`;

    const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`;

    const batchType = formData.preferredBatch.toLowerCase().includes("online") ? "Online Batch" : "Offline Batch";

    fetch("/api/enroll", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.fullName.trim(),
        phone: formData.phoneNumber.trim(),
        email: formData.email.trim(),
        batchType: batchType,
        batchName: formData.preferredBatch,
        sourcePage: "Lead Registration Form",
      }),
    })
      .then((res) => res.json())
      .catch((err) => console.error("Lead submission error:", err))
      .finally(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        if (typeof window !== "undefined") {
          window.open(waUrl, "_blank");
        }
      });
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      phoneNumber: "",
      email: "",
      preferredBatch: ""
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section 
      id="register-demo" 
      aria-labelledby="demo-heading" 
      className={`relative py-14 sm:py-20 md:py-28 font-sans overflow-hidden transition-colors duration-300 ${className}`}
    >
      {/* Background Lighting & Grid Accents */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[400px] sm:h-[550px] rounded-full bg-[#0A756A]/8 dark:bg-[#0A756A]/15 blur-[120px] sm:blur-[160px] pointer-events-none select-none" 
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ========================================================
            MASTER REGISTRATION CARD (Centered High-Converting Bento)
            ======================================================== */}
        <div className="relative rounded-[28px] sm:rounded-[36px] p-[1px] bg-gradient-to-b from-[#0A756A]/40 via-zinc-200/60 to-transparent dark:from-emerald-500/30 dark:via-white/10 dark:to-transparent shadow-[0_25px_60px_-15px_rgba(10,117,106,0.12)] dark:shadow-[0_25px_60px_-15px_rgba(10,117,106,0.25)] overflow-hidden">
          
          <div className="relative rounded-[27px] sm:rounded-[35px] bg-white/95 dark:bg-zinc-900/90 backdrop-blur-2xl p-6 sm:p-10 md:p-14 overflow-hidden">
            
            {/* Top Atmospheric Watermark */}
            <div 
              aria-hidden="true" 
              className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#0A756A]/5 dark:bg-[#0A756A]/10 blur-2xl pointer-events-none" 
            />

            {/* ====================================================
                HEADER: H2 Heading, Subheading & Live Indicator
                ==================================================== */}
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
              
              {/* Micro Status Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A756A]/10 text-[#0A756A] dark:bg-emerald-500/15 dark:text-emerald-300 text-xs font-outfit font-semibold uppercase tracking-wider mb-4 border border-[#0A756A]/20 dark:border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-[#0A756A] dark:bg-emerald-400 animate-pulse" />
                <span>Upcoming Free Demo Session · Limited to 15 Seats</span>
              </div>

              {/* Exact H2 Heading */}
              <h2 
                id="demo-heading" 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold font-outfit text-zinc-950 dark:text-white tracking-tight leading-[1.18]"
              >
                Take the First Step Towards a High-Growth Career
              </h2>

              {/* Exact Subheading */}
              <p className="mt-3.5 text-sm sm:text-base md:text-lg text-zinc-650 dark:text-zinc-300 font-satoshi leading-relaxed max-w-2xl mx-auto">
                Batches filling fast. Register now for our upcoming free demo session!
              </p>
            </div>

            {/* ====================================================
                FORM / SUCCESS STATE
                ==================================================== */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} noValidate className="max-w-3xl mx-auto space-y-5">
                
                {/* 2x2 Responsive Input Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 text-left">
                  
                  {/* Field 1: Full Name */}
                  <div>
                    <label 
                      htmlFor="form-fullName" 
                      className="block text-xs font-outfit font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5"
                    >
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400 dark:text-zinc-500">
                        <User className="w-4 h-4" />
                      </div>
                      <input
                        type="text"
                        id="form-fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="e.g. Rahul Sharma"
                        aria-required="true"
                        aria-invalid={!!errors.fullName}
                        aria-describedby={errors.fullName ? "form-fullName-error" : undefined}
                        className={`w-full h-12 sm:h-12.5 pl-10 pr-4 rounded-xl text-sm font-satoshi bg-zinc-50/80 dark:bg-zinc-950/60 text-zinc-900 dark:text-white border transition-all duration-200 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 ${
                          errors.fullName
                            ? "border-rose-400 focus:ring-rose-400/20"
                            : "border-zinc-200 dark:border-white/10 focus:border-[#0A756A] focus:ring-[#0A756A]/20"
                        }`}
                      />
                    </div>
                    {errors.fullName && (
                      <p id="form-fullName-error" role="alert" className="mt-1 text-xs text-rose-500 font-satoshi">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Field 2: Phone Number */}
                  <div>
                    <label 
                      htmlFor="form-phoneNumber" 
                      className="block text-xs font-outfit font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5"
                    >
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400 dark:text-zinc-500">
                        <Phone className="w-4 h-4" />
                      </div>
                      <input
                        type="tel"
                        id="form-phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="e.g. +91 98765 43210"
                        aria-required="true"
                        aria-invalid={!!errors.phoneNumber}
                        aria-describedby={errors.phoneNumber ? "form-phoneNumber-error" : undefined}
                        className={`w-full h-12 sm:h-12.5 pl-10 pr-4 rounded-xl text-sm font-satoshi bg-zinc-50/80 dark:bg-zinc-950/60 text-zinc-900 dark:text-white border transition-all duration-200 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 ${
                          errors.phoneNumber
                            ? "border-rose-400 focus:ring-rose-400/20"
                            : "border-zinc-200 dark:border-white/10 focus:border-[#0A756A] focus:ring-[#0A756A]/20"
                        }`}
                      />
                    </div>
                    {errors.phoneNumber && (
                      <p id="form-phoneNumber-error" role="alert" className="mt-1 text-xs text-rose-500 font-satoshi">
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>

                  {/* Field 3: Email Address */}
                  <div>
                    <label 
                      htmlFor="form-email" 
                      className="block text-xs font-outfit font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5"
                    >
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400 dark:text-zinc-500">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        type="email"
                        id="form-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="e.g. rahul@example.com"
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "form-email-error" : undefined}
                        className={`w-full h-12 sm:h-12.5 pl-10 pr-4 rounded-xl text-sm font-satoshi bg-zinc-50/80 dark:bg-zinc-950/60 text-zinc-900 dark:text-white border transition-all duration-200 placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 ${
                          errors.email
                            ? "border-rose-400 focus:ring-rose-400/20"
                            : "border-zinc-200 dark:border-white/10 focus:border-[#0A756A] focus:ring-[#0A756A]/20"
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p id="form-email-error" role="alert" className="mt-1 text-xs text-rose-500 font-satoshi">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Field 4: Select Preferred Batch */}
                  <div>
                    <label 
                      htmlFor="form-preferredBatch" 
                      className="block text-xs font-outfit font-semibold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-1.5"
                    >
                      Select Preferred Batch <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-400 dark:text-zinc-500">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <select
                        id="form-preferredBatch"
                        name="preferredBatch"
                        value={formData.preferredBatch}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-required="true"
                        aria-invalid={!!errors.preferredBatch}
                        aria-describedby={errors.preferredBatch ? "form-preferredBatch-error" : undefined}
                        className={`w-full h-12 sm:h-12.5 pl-10 pr-9 rounded-xl text-sm font-satoshi bg-zinc-50/80 dark:bg-zinc-950/60 text-zinc-900 dark:text-white border transition-all duration-200 focus:outline-none focus:ring-2 appearance-none cursor-pointer ${
                          errors.preferredBatch
                            ? "border-rose-400 focus:ring-rose-400/20"
                            : "border-zinc-200 dark:border-white/10 focus:border-[#0A756A] focus:ring-[#0A756A]/20"
                        }`}
                      >
                        <option value="" disabled className="text-zinc-400">
                          Select your preferred batch...
                        </option>
                        <option value="Weekday Offline Batch (Manjeri Campus)">
                          Weekday Offline Batch (Manjeri Campus)
                        </option>
                        <option value="Weekend Offline Batch (Working Professionals)">
                          Weekend Offline Batch (Working Professionals)
                        </option>
                        <option value="Live Interactive Online Batch (Evening)">
                          Live Interactive Online Batch (Evening)
                        </option>
                        <option value="Fast-Track Upcoming Demo Cohort">
                          Fast-Track Upcoming Demo Cohort
                        </option>
                      </select>

                      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-zinc-400">
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </div>
                    {errors.preferredBatch && (
                      <p id="form-preferredBatch-error" role="alert" className="mt-1 text-xs text-rose-500 font-satoshi">
                        {errors.preferredBatch}
                      </p>
                    )}
                  </div>

                </div>

                {/* Submit Action Button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-13 sm:h-14 rounded-xl sm:rounded-2xl bg-[#0A756A] hover:bg-[#129A8C] text-white font-outfit font-bold text-base sm:text-lg shadow-[0_12px_28px_-6px_rgba(10,117,106,0.35)] transition-all duration-300 flex items-center justify-center gap-2.5 group cursor-pointer hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2.5">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Reserving Your Seat...</span>
                      </span>
                    ) : (
                      <>
                        <span>Claim Your Free Demo Seat</span>
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
                      </>
                    )}
                  </button>
                </div>

                {/* Bottom Assurance Chips */}
                <div className="pt-2 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-zinc-500 dark:text-zinc-400 font-satoshi">
                  <span className="inline-flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#0A756A] dark:text-emerald-400" />
                    100% Free · No Payment Required
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#0A756A] dark:text-emerald-400" />
                    Instant WhatsApp Slot Confirmation
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-[#0A756A] dark:text-emerald-400" />
                    Live Mentor Q&A Included
                  </span>
                </div>

              </form>
            ) : (
              
              /* ====================================================
                  SUCCESS CONFIRMATION STATE
                  ==================================================== */
              <div className="py-6 sm:py-8 max-w-lg mx-auto text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0A756A]/10 text-[#0A756A] dark:bg-emerald-500/15 dark:text-emerald-400 mx-auto flex items-center justify-center shadow-inner">
                  <CheckCircle2 className="w-9 h-9 sm:w-11 sm:h-11" />
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-outfit text-zinc-950 dark:text-white">
                    Demo Seat Reserved!
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-base text-zinc-650 dark:text-zinc-300 font-satoshi leading-relaxed">
                    Thank you, <span className="font-semibold text-zinc-900 dark:text-white">{formData.fullName}</span>. Your registration details have been prepared and forwarded to our admissions desk via WhatsApp.
                  </p>
                </div>

                {/* Reservation Summary */}
                <div className="p-5 rounded-2xl bg-zinc-50/80 dark:bg-zinc-950/70 border border-zinc-200/80 dark:border-white/10 text-left space-y-2.5 text-xs sm:text-sm font-satoshi">
                  <div className="flex justify-between items-center pb-2 border-b border-zinc-200/50 dark:border-white/5">
                    <span className="text-zinc-500 dark:text-zinc-400">Phone:</span>
                    <span className="font-semibold text-zinc-900 dark:text-white">{formData.phoneNumber}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-zinc-200/50 dark:border-white/5">
                    <span className="text-zinc-500 dark:text-zinc-400">Email:</span>
                    <span className="font-semibold text-zinc-900 dark:text-white">{formData.email}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-500 dark:text-zinc-400">Selected Batch:</span>
                    <span className="font-semibold text-[#0A756A] dark:text-emerald-400">{formData.preferredBatch}</span>
                  </div>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-outfit font-medium text-[#0A756A] dark:text-emerald-400 hover:underline cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Register another seat or edit details</span>
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
