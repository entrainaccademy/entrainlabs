import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Mail, ArrowRight, CheckCircle2, Building2, ArrowLeft, Loader2 } from "lucide-react";
import SaaSNavbar from "../components/SaaSNavbar";

export default function SaaSForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white font-outfit transition-colors duration-300">
      <SaaSNavbar />

      <div className="max-w-md mx-auto px-4 py-16">
        
        <Link
          to="/saas/login"
          className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-[#0A756A] mb-6 font-semibold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Company Login</span>
        </Link>

        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 shadow-xl backdrop-blur-xl">
          
          <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950 text-[#0A756A] dark:text-teal-300 flex items-center justify-center mb-4">
            <Mail className="w-6 h-6" />
          </div>

          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
            Reset Password
          </h1>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 mb-6 font-satoshi">
            Enter your registered company admin email address to receive password reset instructions.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center"
            >
              <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
              <h3 className="text-sm font-bold text-emerald-900 dark:text-emerald-200">Reset Email Dispatched!</h3>
              <p className="text-xs text-emerald-700 dark:text-emerald-300 mt-1 font-satoshi">
                We've sent reset instructions to <strong>{email}</strong>.
              </p>
              
              <Link
                to="/saas/reset-password"
                className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0A756A] text-white text-xs font-semibold hover:bg-teal-700 transition-colors shadow-sm"
              >
                <span>Proceed to Reset Password Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Company Admin Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@acme.com"
                    required
                    className="w-full h-11 px-3.5 pl-10 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-xs font-satoshi text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A756A]/50 transition-all"
                  />
                  <Mail className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-11 rounded-xl bg-[#0A756A] text-white font-semibold text-xs hover:bg-teal-700 transition-all shadow-md shadow-teal-500/20 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Send Reset Instructions"}
              </button>
            </form>
          )}

        </div>
      </div>
    </div>
  );
}
