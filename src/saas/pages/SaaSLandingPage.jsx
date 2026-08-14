import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Building2,
  ShieldCheck,
  Zap,
  Users,
  Lock,
  Globe2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Server,
  Key,
  Layers,
  ChevronRight,
  TrendingUp
} from "lucide-react";
import SaaSNavbar from "../components/SaaSNavbar";

export default function SaaSLandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white font-outfit selection:bg-[#0A756A]/20 selection:text-[#0A756A] transition-colors duration-300">
      <SaaSNavbar />

      {/* Hero Section */}
      <section className="relative pt-12 md:pt-20 pb-20 md:pb-28 overflow-hidden">
        {/* Background glow graphics */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-teal-500/20 via-[#0A756A]/15 to-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/50 border border-teal-500/20 text-[#0A756A] dark:text-teal-300 text-xs font-semibold tracking-wide mb-6 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0A756A] animate-pulse" />
            <span>Next-Gen Enterprise Multi-Tenant Architecture</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white max-w-4xl mx-auto leading-[1.1]"
          >
            Scale Your Organization with{" "}
            <span className="bg-gradient-to-r from-[#0A756A] via-teal-500 to-emerald-400 bg-clip-text text-transparent">
              Isolated Workspaces
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto font-satoshi font-normal leading-relaxed"
          >
            Empower your team with automated company onboarding, role-based security, isolated tenant databases, and instant administrative control.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/saas/register"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#0A756A] to-teal-600 text-white font-semibold text-sm hover:opacity-95 shadow-xl shadow-teal-500/25 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
            >
              <span>Register Your Company</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/saas/login"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 font-semibold text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800/80 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-sm"
            >
              <Building2 className="w-4 h-4 text-[#0A756A]" />
              <span>Company Login</span>
            </Link>
          </motion.div>

          {/* Trust Banner */}
          <div className="mt-12 flex items-center justify-center gap-6 text-xs text-zinc-500 dark:text-zinc-400">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Instant Tenant Provisioning</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 256-bit Encryption</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> SOC2 Type II Certified</span>
          </div>

          {/* SaaS Dashboard Preview Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-14 relative rounded-3xl p-3 bg-gradient-to-b from-zinc-200/80 via-zinc-200/30 to-transparent dark:from-zinc-800/80 dark:via-zinc-900/40 dark:to-transparent border border-zinc-200 dark:border-zinc-800 shadow-2xl max-w-5xl mx-auto overflow-hidden"
          >
            <div className="rounded-2xl overflow-hidden bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/80 p-6 shadow-inner">
              
              {/* Mock Dashboard Topbar */}
              <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800/60 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="ml-4 text-xs font-semibold px-2.5 py-1 rounded-lg bg-teal-50 dark:bg-teal-950 text-[#0A756A] dark:text-teal-300 border border-teal-500/20">
                    tenant-acme-corp.flowscale.io
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-xs font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Workspace Active</span>
                  </div>
                </div>
              </div>

              {/* Mock Stats & Metrics Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 text-left">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-800/40 border border-zinc-200/50 dark:border-zinc-800">
                  <span className="text-xs text-zinc-500">Active Team Members</span>
                  <div className="text-2xl font-bold text-zinc-900 dark:text-white mt-1">24 Seats</div>
                  <span className="text-[11px] text-emerald-500 font-medium">+4 this month</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-800/40 border border-zinc-200/50 dark:border-zinc-800">
                  <span className="text-xs text-zinc-500">Active API Key Workflows</span>
                  <div className="text-2xl font-bold text-zinc-900 dark:text-white mt-1">142,500</div>
                  <span className="text-[11px] text-teal-500 font-medium">99.98% uptime</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-800/40 border border-zinc-200/50 dark:border-zinc-800">
                  <span className="text-xs text-zinc-500">Tenant Storage</span>
                  <div className="text-2xl font-bold text-zinc-900 dark:text-white mt-1">48.5 GB</div>
                  <span className="text-[11px] text-zinc-400 font-medium">of 100 GB limit</span>
                </div>
                <div className="p-4 rounded-xl bg-gradient-to-br from-[#0A756A] to-teal-700 text-white shadow-md">
                  <span className="text-xs opacity-80">Subscription Tier</span>
                  <div className="text-xl font-bold mt-1">Enterprise Pro</div>
                  <span className="text-[11px] opacity-90 underline cursor-pointer mt-1 inline-block">Manage Plan →</span>
                </div>
              </div>

              {/* Quick Activity Preview */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-800/30 border border-zinc-100 dark:border-zinc-800 text-left">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">Tenant Audit Log</span>
                  <span className="text-xs text-teal-600 dark:text-teal-400 font-medium cursor-pointer">View All Logs</span>
                </div>
                <div className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
                  <div className="flex items-center justify-between py-1.5 border-b border-zinc-200/50 dark:border-zinc-800">
                    <span>🔑 Admin <strong>Alex Morgan</strong> updated Company Security Policies</span>
                    <span className="text-zinc-400">2 mins ago</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-zinc-200/50 dark:border-zinc-800">
                    <span>🚀 Company profile verified: <strong>Acme Innovations Ltd</strong></span>
                    <span className="text-zinc-400">1 hour ago</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-20 bg-white dark:bg-zinc-900/50 border-y border-zinc-200/60 dark:border-zinc-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold text-[#0A756A] uppercase tracking-widest">Built for SaaS Platform Scale</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mt-2">
              Everything Your Company Needs to Onboard & Manage Teams
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            {/* Feature 1 */}
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900 border border-zinc-200/70 dark:border-zinc-800 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-[#0A756A] flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Multi-Tenant Isolation</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-satoshi">
                Each company receives a dedicated tenant ID, custom branding workspace, and isolated account records for total privacy.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900 border border-zinc-200/70 dark:border-zinc-800 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-[#0A756A] flex items-center justify-center mb-6">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Role-Based Security</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-satoshi">
                Manage organization administrators, team leads, and member access with granular security controls and audit logs.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900 border border-zinc-200/70 dark:border-zinc-800 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-[#0A756A] flex items-center justify-center mb-6">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Instant Onboarding</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-satoshi">
                Register a company in seconds with real-time field validation, password strength meters, and direct workspace redirection.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Pricing Preview */}
      <section id="pricing" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold text-[#0A756A] uppercase tracking-widest">Flexible Company Plans</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mt-2">
              Choose the Plan for Your Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Starter */}
            <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-left flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Starter</span>
                <div className="text-3xl font-bold text-zinc-900 dark:text-white mt-2">$29 <span className="text-sm font-normal text-zinc-500">/ mo</span></div>
                <p className="text-xs text-zinc-500 mt-2">Best for small startups & teams getting started.</p>

                <ul className="mt-6 space-y-3 text-xs text-zinc-600 dark:text-zinc-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Up to 5 Team Seats</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 10 GB Storage</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Standard Support</li>
                </ul>
              </div>

              <Link to="/saas/register" className="mt-8 w-full py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 text-center text-xs font-bold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                Start with Starter
              </Link>
            </div>

            {/* Growth */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#0A756A]/10 to-teal-500/5 dark:from-teal-950/40 dark:to-zinc-900 border-2 border-[#0A756A] text-left flex flex-col justify-between relative shadow-xl">
              <span className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-[#0A756A] text-white text-[10px] font-bold uppercase tracking-wider shadow-md">Popular</span>

              <div>
                <span className="text-xs font-bold text-[#0A756A] uppercase tracking-wider">Growth</span>
                <div className="text-3xl font-bold text-zinc-900 dark:text-white mt-2">$99 <span className="text-sm font-normal text-zinc-500">/ mo</span></div>
                <p className="text-xs text-zinc-500 mt-2">Ideal for growing companies with multiple departments.</p>

                <ul className="mt-6 space-y-3 text-xs text-zinc-600 dark:text-zinc-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0A756A]" /> Up to 25 Team Seats</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0A756A]" /> 100 GB Storage</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0A756A]" /> API Access & Workflows</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#0A756A]" /> Priority 24/7 Support</li>
                </ul>
              </div>

              <Link to="/saas/register" className="mt-8 w-full py-3 rounded-xl bg-[#0A756A] text-center text-xs font-bold text-white hover:bg-teal-700 transition-all shadow-md shadow-teal-500/20">
                Register Growth Company
              </Link>
            </div>

            {/* Enterprise */}
            <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-left flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">Enterprise</span>
                <div className="text-3xl font-bold text-zinc-900 dark:text-white mt-2">$299 <span className="text-sm font-normal text-zinc-500">/ mo</span></div>
                <p className="text-xs text-zinc-500 mt-2">Custom security, unlimited seats, and dedicated SLA.</p>

                <ul className="mt-6 space-y-3 text-xs text-zinc-600 dark:text-zinc-300">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Unlimited Team Seats</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Unlimited Storage</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Custom Subdomains</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Dedicated Account Manager</li>
                </ul>
              </div>

              <Link to="/saas/register" className="mt-8 w-full py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 text-center text-xs font-bold text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                Contact Sales
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800 text-center text-xs text-zinc-500">
        <p>© 2026 FlowScale SaaS Platform. All rights reserved. Production-ready multi-tenant system.</p>
      </footer>
    </div>
  );
}
