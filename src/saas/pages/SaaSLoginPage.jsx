import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import {
  Building2,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  Loader2,
  Sparkles,
  KeyRound
} from "lucide-react";
import { useSaaSAuth } from "../context/SaaSAuthContext";
import SaaSNavbar from "../components/SaaSNavbar";

export default function SaaSLoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginCompany, companies } = useSaaSAuth();

  const registeredEmail = location.state?.registeredEmail || "";
  const justRegistered = location.state?.justRegistered || false;

  const [companyEmail, setCompanyEmail] = useState(registeredEmail || "");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!companyEmail || !password) {
      setError("Please enter both your company email and password.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await loginCompany(companyEmail, password);
      setLoading(false);
      navigate("/saas/dashboard");
    } catch (err) {
      setLoading(false);
      setError(err.message || "Failed to log in.");
    }
  };

  // Demo Login Quick-Fill
  const handleQuickDemoLogin = (email, pwd) => {
    setCompanyEmail(email);
    setPassword(pwd);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white font-outfit transition-colors duration-300">
      <SaaSNavbar />

      <div className="max-w-md mx-auto px-4 py-12 md:py-20">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0A756A] to-teal-400 text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-teal-500/20">
            <Building2 className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
            Company Portal Login
          </h1>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 font-satoshi">
            Access your multi-tenant organization dashboard
          </p>
        </div>

        {/* Just Registered Banner */}
        {justRegistered && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-500" />
            <span>Account created! Please enter your password to sign in to your workspace.</span>
          </div>
        )}

        {/* Error Banner */}
        {error && (
          <div className="mb-6 p-4 rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-300 text-xs flex items-center gap-3">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Login Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-xl backdrop-blur-xl"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Company Email */}
            <div>
              <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                Company Account Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={companyEmail}
                  onChange={(e) => setCompanyEmail(e.target.value)}
                  placeholder="contact@acme.com"
                  required
                  className="w-full h-11 px-3.5 pl-10 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-xs font-satoshi text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A756A]/50 transition-all"
                />
                <Mail className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  Password
                </label>
                <Link
                  to="/saas/forgot-password"
                  className="text-xs text-[#0A756A] hover:underline font-satoshi font-medium"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full h-11 px-3.5 pl-10 pr-10 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-xs font-satoshi text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A756A]/50 transition-all"
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
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 rounded-xl bg-[#0A756A] text-white font-semibold text-xs hover:bg-teal-700 transition-all shadow-md shadow-teal-500/20 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-95"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Authenticating Tenant...</span>
                </>
              ) : (
                <>
                  <span>Sign In to Company Workspace</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

          </form>

          {/* Quick Demo Helper Box */}
          <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800/80">
            <div className="flex items-center justify-between text-xs text-zinc-500 mb-3">
              <span className="flex items-center gap-1 font-semibold text-zinc-700 dark:text-zinc-300">
                <KeyRound className="w-3.5 h-3.5 text-[#0A756A]" /> Demo Company Credentials:
              </span>
              <span className="text-[10px] text-zinc-400">Click to fill</span>
            </div>

            <div className="space-y-2">
              {companies.map((comp) => (
                <button
                  key={comp.id}
                  type="button"
                  onClick={() => handleQuickDemoLogin(comp.companyEmail, comp.password)}
                  className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-800 text-left hover:bg-teal-50 dark:hover:bg-teal-950/40 hover:border-teal-500/30 transition-colors flex items-center justify-between text-xs group"
                >
                  <div>
                    <div className="font-semibold text-zinc-800 dark:text-zinc-200 group-hover:text-[#0A756A]">
                      {comp.companyName}
                    </div>
                    <div className="text-[11px] text-zinc-500">{comp.companyEmail}</div>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-zinc-200 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 font-mono">
                    {comp.password}
                  </span>
                </button>
              ))}
            </div>
          </div>

        </motion.div>

        {/* Footer link */}
        <p className="text-center text-xs text-zinc-500 mt-6 font-satoshi">
          Need to register a new organization?{" "}
          <Link to="/saas/register" className="text-[#0A756A] font-semibold hover:underline">
            Register Company
          </Link>
        </p>

      </div>
    </div>
  );
}
