import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Lock, Eye, EyeOff, CheckCircle2, ArrowRight, Loader2 } from "lucide-react";
import SaaSNavbar from "../components/SaaSNavbar";

export default function SaaSResetPasswordPage() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        navigate("/saas/login");
      }, 2000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white font-outfit transition-colors duration-300">
      <SaaSNavbar />

      <div className="max-w-md mx-auto px-4 py-16">
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 shadow-xl backdrop-blur-xl">
          
          <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950 text-[#0A756A] flex items-center justify-center mb-4">
            <Lock className="w-6 h-6" />
          </div>

          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
            Create New Password
          </h1>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 mb-6 font-satoshi">
            Your new password must be different from previously used passwords.
          </p>

          {error && (
            <div className="mb-4 p-3 rounded-xl bg-red-50 text-red-600 text-xs dark:bg-red-950/40">
              {error}
            </div>
          )}

          {success ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-center"
            >
              <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
              <h3 className="text-sm font-bold text-emerald-900 dark:text-emerald-200">Password Reset Complete!</h3>
              <p className="text-xs text-emerald-700 dark:text-emerald-300 mt-1 font-satoshi">
                Redirecting to company login page...
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                  New Admin Password
                </label>
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

              <div>
                <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full h-11 px-3.5 pl-10 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-xs font-satoshi text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A756A]/50 transition-all"
                  />
                  <Lock className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-11 rounded-xl bg-[#0A756A] text-white font-semibold text-xs hover:bg-teal-700 transition-all shadow-md shadow-teal-500/20 disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Save New Password"}
              </button>

            </form>
          )}

        </div>
      </div>
    </div>
  );
}
