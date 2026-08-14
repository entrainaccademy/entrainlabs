import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Building2,
  Mail,
  Phone,
  Globe,
  Briefcase,
  MapPin,
  User,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Shield,
  Sparkles,
  Loader2
} from "lucide-react";
import { useSaaSAuth } from "../context/SaaSAuthContext";
import SaaSNavbar from "../components/SaaSNavbar";

const INDUSTRIES = [
  "Technology & Software",
  "Healthcare & Life Sciences",
  "Finance & Banking",
  "E-commerce & Retail",
  "Marketing & Digital Media",
  "Education & EdTech",
  "Manufacturing & Logistics",
  "Real Estate & Construction",
  "Professional Services",
  "Other Industry"
];

export default function SaaSRegisterPage() {
  const navigate = useNavigate();
  const { registerCompany } = useSaaSAuth();

  // Form State
  const [formData, setFormData] = useState({
    companyName: "",
    companyEmail: "",
    companyPhone: "",
    companyWebsite: "",
    industry: "Technology & Software",
    companyAddress: "",
    adminName: "",
    adminEmail: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  // UI state
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  // Handle field change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;

    setFormData((prev) => ({ ...prev, [name]: val }));
    
    // Clear field-specific error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (serverError) setServerError("");
  };

  // Password Strength Calculator
  const getPasswordStrength = (pwd) => {
    if (!pwd) return { score: 0, label: "Empty", color: "bg-zinc-200" };
    let score = 0;
    if (pwd.length >= 8) score += 1;
    if (/[A-Z]/.test(pwd)) score += 1;
    if (/[0-9]/.test(pwd)) score += 1;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 1;

    switch (score) {
      case 1:
        return { score: 1, label: "Weak", color: "bg-red-500", text: "text-red-500" };
      case 2:
        return { score: 2, label: "Fair", color: "bg-amber-500", text: "text-amber-500" };
      case 3:
        return { score: 3, label: "Good", color: "bg-blue-500", text: "text-blue-500" };
      case 4:
        return { score: 4, label: "Strong & Secure", color: "bg-emerald-500", text: "text-emerald-500" };
      default:
        return { score: 0, label: "Too Short", color: "bg-zinc-300", text: "text-zinc-400" };
    }
  };

  const pwdStrength = getPasswordStrength(formData.password);

  // Form Validation
  const validateForm = () => {
    const errs = {};
    if (!formData.companyName.trim()) errs.companyName = "Company name is required";
    
    if (!formData.companyEmail.trim()) {
      errs.companyEmail = "Company email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.companyEmail)) {
      errs.companyEmail = "Invalid email format";
    }

    if (!formData.adminName.trim()) errs.adminName = "Admin full name is required";

    if (!formData.adminEmail.trim()) {
      errs.adminEmail = "Admin email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.adminEmail)) {
      errs.adminEmail = "Invalid email format";
    }

    if (!formData.password) {
      errs.password = "Password is required";
    } else if (formData.password.length < 8) {
      errs.password = "Password must be at least 8 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      errs.confirmPassword = "Passwords do not match";
    }

    if (!formData.agreeTerms) {
      errs.agreeTerms = "You must accept the Terms of Service & Privacy Policy";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setServerError("");

    try {
      await registerCompany(formData);
      setLoading(false);
      setSuccess(true);

      // Auto redirect to login page after 2.5 seconds
      setTimeout(() => {
        navigate("/saas/login", {
          state: { registeredEmail: formData.companyEmail, justRegistered: true },
        });
      }, 2200);

    } catch (err) {
      setLoading(false);
      setServerError(err.message || "Failed to register company.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white font-outfit transition-colors duration-300">
      <SaaSNavbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        
        {/* Header Title */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 text-[#0A756A] dark:text-teal-300 border border-teal-500/20 text-xs font-semibold mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Create Isolated SaaS Workspace</span>
          </motion.div>
          
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Register Your Company
          </h1>
          <p className="text-zinc-650 dark:text-zinc-400 text-sm sm:text-base mt-2 font-satoshi max-w-xl mx-auto">
            Set up your organization's multi-tenant account in minutes. Get immediate access to your administrative control center.
          </p>
        </div>

        {/* Success Modal Overlay */}
        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/70 backdrop-blur-md"
            >
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 max-w-md w-full text-center shadow-2xl">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4 animate-bounce">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Company Registered!</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 font-satoshi">
                  Your tenant workspace for <strong>{formData.companyName}</strong> has been provisioned successfully.
                </p>
                <div className="mt-6 p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-zinc-100 dark:border-zinc-800 text-xs text-zinc-500">
                  Redirecting to Company Login page...
                  <div className="w-full bg-zinc-200 dark:bg-zinc-700 h-1.5 rounded-full mt-3 overflow-hidden">
                    <div className="bg-[#0A756A] h-full animate-[pulse_1s_infinite] w-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Registration Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-xl backdrop-blur-xl"
        >
          
          {serverError && (
            <div className="mb-8 p-4 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/60 text-red-600 dark:text-red-300 text-xs flex items-center gap-3">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>{serverError}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* SECTION 1: Company Profile Details */}
            <div>
              <div className="flex items-center gap-2 border-b border-zinc-100 dark:border-zinc-800/80 pb-3 mb-6">
                <Building2 className="w-5 h-5 text-[#0A756A]" />
                <h2 className="text-lg font-bold text-zinc-900 dark:text-white">1. Company Details</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Company Name */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="e.g. Acme Corp"
                      className={`w-full h-11 px-3.5 pl-10 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border ${
                        errors.companyName ? "border-red-500" : "border-zinc-200 dark:border-zinc-700"
                      } text-xs font-satoshi text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A756A]/50 transition-all`}
                    />
                    <Building2 className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
                  </div>
                  {errors.companyName && <p className="text-[11px] text-red-500 mt-1">{errors.companyName}</p>}
                </div>

                {/* Company Email */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Company Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="companyEmail"
                      value={formData.companyEmail}
                      onChange={handleChange}
                      placeholder="contact@acme.com"
                      className={`w-full h-11 px-3.5 pl-10 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border ${
                        errors.companyEmail ? "border-red-500" : "border-zinc-200 dark:border-zinc-700"
                      } text-xs font-satoshi text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A756A]/50 transition-all`}
                    />
                    <Mail className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
                  </div>
                  {errors.companyEmail && <p className="text-[11px] text-red-500 mt-1">{errors.companyEmail}</p>}
                </div>

                {/* Industry Dropdown */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Industry Sector <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full h-11 px-3.5 pl-10 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-xs font-satoshi text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A756A]/50 transition-all appearance-none cursor-pointer"
                    >
                      {INDUSTRIES.map((ind) => (
                        <option key={ind} value={ind} className="dark:bg-zinc-900">
                          {ind}
                        </option>
                      ))}
                    </select>
                    <Briefcase className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5 pointer-events-none" />
                  </div>
                </div>

                {/* Company Phone (Optional) */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Company Phone <span className="text-zinc-400 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="companyPhone"
                      value={formData.companyPhone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full h-11 px-3.5 pl-10 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-xs font-satoshi text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A756A]/50 transition-all"
                    />
                    <Phone className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
                  </div>
                </div>

                {/* Company Website (Optional) */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Company Website <span className="text-zinc-400 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="companyWebsite"
                      value={formData.companyWebsite}
                      onChange={handleChange}
                      placeholder="https://acme.com"
                      className="w-full h-11 px-3.5 pl-10 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-xs font-satoshi text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A756A]/50 transition-all"
                    />
                    <Globe className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
                  </div>
                </div>

                {/* Company Address (Optional) */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Headquarters Address <span className="text-zinc-400 font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="companyAddress"
                      value={formData.companyAddress}
                      onChange={handleChange}
                      placeholder="100 Tech Blvd, San Francisco, CA"
                      className="w-full h-11 px-3.5 pl-10 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-xs font-satoshi text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A756A]/50 transition-all"
                    />
                    <MapPin className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
                  </div>
                </div>

              </div>
            </div>

            {/* SECTION 2: Primary Administrator Credentials */}
            <div>
              <div className="flex items-center gap-2 border-b border-zinc-100 dark:border-zinc-800/80 pb-3 mb-6">
                <User className="w-5 h-5 text-[#0A756A]" />
                <h2 className="text-lg font-bold text-zinc-900 dark:text-white">2. Primary Administrator</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Admin Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Admin Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="adminName"
                      value={formData.adminName}
                      onChange={handleChange}
                      placeholder="Alex Morgan"
                      className={`w-full h-11 px-3.5 pl-10 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border ${
                        errors.adminName ? "border-red-500" : "border-zinc-200 dark:border-zinc-700"
                      } text-xs font-satoshi text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A756A]/50 transition-all`}
                    />
                    <User className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
                  </div>
                  {errors.adminName && <p className="text-[11px] text-red-500 mt-1">{errors.adminName}</p>}
                </div>

                {/* Admin Email */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Admin Work Email <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="adminEmail"
                      value={formData.adminEmail}
                      onChange={handleChange}
                      placeholder="alex@acme.com"
                      className={`w-full h-11 px-3.5 pl-10 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border ${
                        errors.adminEmail ? "border-red-500" : "border-zinc-200 dark:border-zinc-700"
                      } text-xs font-satoshi text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A756A]/50 transition-all`}
                    />
                    <Mail className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
                  </div>
                  {errors.adminEmail && <p className="text-[11px] text-red-500 mt-1">{errors.adminEmail}</p>}
                </div>

                {/* Password Input */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Admin Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className={`w-full h-11 px-3.5 pl-10 pr-10 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border ${
                        errors.password ? "border-red-500" : "border-zinc-200 dark:border-zinc-700"
                      } text-xs font-satoshi text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A756A]/50 transition-all`}
                    />
                    <Lock className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-3.5 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {errors.password && <p className="text-[11px] text-red-500 mt-1">{errors.password}</p>}

                  {/* Password Strength Indicator */}
                  {formData.password && (
                    <div className="mt-2.5">
                      <div className="flex items-center justify-between text-[11px] mb-1">
                        <span className="text-zinc-500">Password strength:</span>
                        <span className={`font-semibold ${pwdStrength.text}`}>{pwdStrength.label}</span>
                      </div>
                      <div className="grid grid-cols-4 gap-1.5 h-1.5">
                        <div className={`h-full rounded-full transition-all ${pwdStrength.score >= 1 ? pwdStrength.color : "bg-zinc-200 dark:bg-zinc-800"}`} />
                        <div className={`h-full rounded-full transition-all ${pwdStrength.score >= 2 ? pwdStrength.color : "bg-zinc-200 dark:bg-zinc-800"}`} />
                        <div className={`h-full rounded-full transition-all ${pwdStrength.score >= 3 ? pwdStrength.color : "bg-zinc-200 dark:bg-zinc-800"}`} />
                        <div className={`h-full rounded-full transition-all ${pwdStrength.score >= 4 ? pwdStrength.color : "bg-zinc-200 dark:bg-zinc-800"}`} />
                      </div>
                    </div>
                  )}
                </div>

                {/* Confirm Password Input */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className={`w-full h-11 px-3.5 pl-10 pr-10 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border ${
                        errors.confirmPassword ? "border-red-500" : "border-zinc-200 dark:border-zinc-700"
                      } text-xs font-satoshi text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A756A]/50 transition-all`}
                    />
                    <Lock className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3.5 top-3.5 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {errors.confirmPassword && <p className="text-[11px] text-red-500 mt-1">{errors.confirmPassword}</p>}
                </div>

              </div>
            </div>

            {/* Terms & Privacy Policy Checkbox */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  className="mt-0.5 w-4 h-4 rounded text-[#0A756A] focus:ring-[#0A756A] border-zinc-300 dark:border-zinc-700"
                />
                <span className="text-xs text-zinc-600 dark:text-zinc-400 leading-normal font-satoshi">
                  I agree to the <a href="#" className="text-[#0A756A] underline">Terms of Service</a>, <a href="#" className="text-[#0A756A] underline">Privacy Policy</a>, and accept multi-tenant data storage agreements for my organization.
                </span>
              </label>
              {errors.agreeTerms && <p className="text-[11px] text-red-500 mt-1">{errors.agreeTerms}</p>}
            </div>

            {/* Submit Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-zinc-500 font-satoshi">
                Already registered? <Link to="/saas/login" className="text-[#0A756A] font-semibold hover:underline">Log in to your tenant account</Link>
              </p>

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#0A756A] text-white font-semibold text-xs hover:bg-teal-700 transition-all shadow-md shadow-teal-500/20 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Provisioning Company Account...</span>
                  </>
                ) : (
                  <>
                    <span>Complete Company Registration</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

          </form>

        </motion.div>

      </div>
    </div>
  );
}
