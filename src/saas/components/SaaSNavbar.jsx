import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, Sparkles, Building2, ArrowRight, Menu, X, LayoutDashboard, LogOut } from "lucide-react";
import { useSaaSAuth } from "../context/SaaSAuthContext";

export default function SaaSNavbar() {
  const { currentCompany, logoutCompany } = useSaaSAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/70 dark:bg-zinc-950/70 border-b border-zinc-200/60 dark:border-zinc-800/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/saas" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0A756A] to-teal-400 flex items-center justify-center text-white shadow-md shadow-teal-500/20 group-hover:scale-105 transition-transform duration-300">
            <Building2 className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-zinc-900 dark:text-white tracking-tight flex items-center gap-1.5 font-outfit">
              FlowScale <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-teal-500/10 text-[#0A756A] dark:text-teal-400 border border-teal-500/20">SaaS</span>
            </span>
            <span className="text-[10px] text-zinc-500 dark:text-zinc-400 -mt-1 font-satoshi">Multi-Tenant Platform</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 font-outfit text-sm font-medium text-zinc-600 dark:text-zinc-300">
          <Link to="/saas" className={`hover:text-[#0A756A] dark:hover:text-teal-400 transition-colors ${isActive('/saas') ? 'text-[#0A756A] font-semibold' : ''}`}>
            Overview
          </Link>
          <a href="#features" className="hover:text-[#0A756A] dark:hover:text-teal-400 transition-colors">
            Features
          </a>
          <a href="#pricing" className="hover:text-[#0A756A] dark:hover:text-teal-400 transition-colors">
            Pricing & Plans
          </a>
          <a href="#security" className="hover:text-[#0A756A] dark:hover:text-teal-400 transition-colors">
            Enterprise Security
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {currentCompany ? (
            <div className="flex items-center gap-3">
              <Link
                to="/saas/dashboard"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0A756A] text-white text-xs font-semibold hover:bg-teal-700 transition-all shadow-md shadow-teal-500/10 hover:scale-105 active:scale-95"
              >
                <LayoutDashboard className="w-3.5 h-3.5" />
                <span>Go to Dashboard ({currentCompany.companyName})</span>
              </Link>
              <button
                onClick={() => {
                  logoutCompany();
                  navigate('/saas/login');
                }}
                className="p-2 rounded-xl text-zinc-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
                title="Log Out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/saas/login"
                className="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/80 transition-colors"
              >
                Company Login
              </Link>
              <Link
                to="/saas/register"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#0A756A] to-teal-600 text-white text-xs font-semibold hover:opacity-95 shadow-md shadow-teal-500/20 transition-all hover:scale-105 active:scale-95"
              >
                <span>Register Company</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl px-4 pt-3 pb-6 flex flex-col gap-3 font-outfit"
          >
            <Link to="/saas" onClick={() => setMobileMenuOpen(false)} className="py-2 text-sm text-zinc-800 dark:text-zinc-200 font-medium">
              Overview
            </Link>
            <a href="#features" onClick={() => setMobileMenuOpen(false)} className="py-2 text-sm text-zinc-800 dark:text-zinc-200 font-medium">
              Features
            </a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="py-2 text-sm text-zinc-800 dark:text-zinc-200 font-medium">
              Pricing & Plans
            </a>

            <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex flex-col gap-2">
              {currentCompany ? (
                <>
                  <Link
                    to="/saas/dashboard"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center py-2.5 rounded-xl bg-[#0A756A] text-white text-xs font-semibold"
                  >
                    Go to Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      logoutCompany();
                      setMobileMenuOpen(false);
                      navigate('/saas/login');
                    }}
                    className="w-full text-center py-2.5 rounded-xl bg-red-50 text-red-600 text-xs font-semibold dark:bg-red-950/40"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/saas/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-800 dark:text-zinc-200"
                  >
                    Company Login
                  </Link>
                  <Link
                    to="/saas/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full text-center py-2.5 rounded-xl bg-[#0A756A] text-white text-xs font-semibold"
                  >
                    Register Company
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
