import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Building2,
  Users,
  Layers,
  Zap,
  HardDrive,
  ShieldCheck,
  CheckCircle2,
  Activity,
  UserPlus,
  ArrowUpRight,
  TrendingUp,
  Key,
  CreditCard,
  Bell,
  Clock,
  Sparkles
} from "lucide-react";
import { useSaaSAuth } from "../../context/SaaSAuthContext";

export default function SaaSDashboardOverview() {
  const { currentCompany } = useSaaSAuth();
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(""), 3000);
  };

  if (!currentCompany) return null;

  return (
    <div className="space-y-8 font-outfit">
      
      {/* Toast Feedback */}
      {toastMessage && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="fixed top-20 right-6 z-50 px-4 py-3 rounded-2xl bg-zinc-900 text-white text-xs font-semibold shadow-2xl flex items-center gap-2 border border-zinc-700"
        >
          <Sparkles className="w-4 h-4 text-teal-400" />
          <span>{toastMessage}</span>
        </motion.div>
      )}

      {/* Welcome Hero Banner */}
      <div className="relative rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#0A756A] via-teal-700 to-emerald-800 text-white overflow-hidden shadow-xl">
        <div className="absolute right-0 top-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-white text-xs font-medium mb-3 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
              <span>Multi-Tenant Workspace Online</span>
            </div>
            
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight">
              Welcome back, {currentCompany.adminName}! 👋
            </h1>
            <p className="text-xs sm:text-sm text-teal-100 mt-1 font-satoshi max-w-xl">
              Managing <strong>{currentCompany.companyName}</strong> ({currentCompany.tenantId}) • {currentCompany.industry}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => showToast("Invite link copied to clipboard!")}
              className="px-4 py-2.5 rounded-xl bg-white text-[#0A756A] text-xs font-semibold hover:bg-teal-50 transition-all shadow-md flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
            >
              <UserPlus className="w-4 h-4" />
              <span>Invite Team Member</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Company Profile Card + Quick Stats Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Company Profile Card (4 cols on lg) */}
        <div className="lg:col-span-4 bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-3xl p-6 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800/80 pb-4 mb-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950 border border-teal-500/20 text-[#0A756A] dark:text-teal-300 flex items-center justify-center text-lg font-bold">
                  {currentCompany.companyName.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 dark:text-white text-base leading-tight">
                    {currentCompany.companyName}
                  </h3>
                  <span className="text-[11px] text-zinc-400 font-mono">{currentCompany.tenantId}</span>
                </div>
              </div>

              <span className="px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 text-[11px] font-bold uppercase tracking-wider flex items-center gap-1 border border-emerald-500/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{currentCompany.status}</span>
              </span>
            </div>

            <div className="space-y-3.5 text-xs text-zinc-600 dark:text-zinc-300 font-satoshi">
              <div className="flex justify-between py-1 border-b border-zinc-100 dark:border-zinc-800/50">
                <span className="text-zinc-400">Registered Email:</span>
                <span className="font-medium text-zinc-800 dark:text-zinc-200">{currentCompany.companyEmail}</span>
              </div>
              
              <div className="flex justify-between py-1 border-b border-zinc-100 dark:border-zinc-800/50">
                <span className="text-zinc-400">Primary Admin:</span>
                <span className="font-medium text-zinc-800 dark:text-zinc-200">{currentCompany.adminName}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-zinc-100 dark:border-zinc-800/50">
                <span className="text-zinc-400">Industry:</span>
                <span className="font-medium text-zinc-800 dark:text-zinc-200">{currentCompany.industry}</span>
              </div>

              <div className="flex justify-between py-1 border-b border-zinc-100 dark:border-zinc-800/50">
                <span className="text-zinc-400">Current Plan:</span>
                <span className="font-semibold text-[#0A756A] dark:text-teal-400">{currentCompany.plan}</span>
              </div>

              <div className="flex justify-between py-1">
                <span className="text-zinc-400">Created On:</span>
                <span className="font-medium text-zinc-800 dark:text-zinc-200">{currentCompany.createdAt}</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
            <button
              onClick={() => showToast("Security Audit Report Downloaded!")}
              className="w-full py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-slate-50 dark:hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Activity className="w-3.5 h-3.5 text-[#0A756A]" />
              <span>Download Organization Audit Report</span>
            </button>
          </div>
        </div>

        {/* Quick Stats Grid (8 cols on lg) */}
        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
          
          {/* Stat 1 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-zinc-500">Active Team Seats</span>
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950 text-[#0A756A] dark:text-teal-300 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4">
              <div className="text-3xl font-bold text-zinc-900 dark:text-white">
                {currentCompany.stats?.teamMembers || 24} <span className="text-xs font-normal text-zinc-400">/ 50 Seats</span>
              </div>
              <div className="mt-2 w-full bg-zinc-100 dark:bg-zinc-800 h-2 rounded-full overflow-hidden">
                <div className="bg-[#0A756A] h-full w-[48%]" />
              </div>
              <span className="text-[11px] text-emerald-500 font-medium mt-2 block">+4 new members this month</span>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-zinc-500">Active Projects</span>
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950 text-[#0A756A] dark:text-teal-300 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4">
              <div className="text-3xl font-bold text-zinc-900 dark:text-white">
                {currentCompany.stats?.activeProjects || 12}
              </div>
              <div className="mt-2 flex items-center gap-1 text-[11px] text-teal-600 dark:text-teal-400 font-medium">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>All tenant workspaces healthy</span>
              </div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-zinc-500">Monthly API Workflows</span>
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950 text-[#0A756A] dark:text-teal-300 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4">
              <div className="text-3xl font-bold text-zinc-900 dark:text-white">
                {currentCompany.stats?.apiCallsThisMonth || "142,500"}
              </div>
              <span className="text-[11px] text-zinc-400 font-medium mt-1 block">99.99% Execution success rate</span>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="p-6 rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-zinc-500">Storage Used</span>
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950 text-[#0A756A] dark:text-teal-300 flex items-center justify-center">
                <HardDrive className="w-5 h-5" />
              </div>
            </div>
            <div className="mt-4">
              <div className="text-3xl font-bold text-zinc-900 dark:text-white">
                {currentCompany.stats?.storageUsedGB || 48.5} <span className="text-xs font-normal text-zinc-400">GB</span>
              </div>
              <div className="mt-2 w-full bg-zinc-100 dark:bg-zinc-800 h-2 rounded-full overflow-hidden">
                <div className="bg-[#0A756A] h-full w-[48%]" />
              </div>
              <span className="text-[11px] text-zinc-400 font-medium mt-2 block">100 GB Total Capacity</span>
            </div>
          </div>

        </div>

      </div>

      {/* Recent Activity & Audit Logs */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-3xl p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800/80 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#0A756A]" />
            <h3 className="font-bold text-zinc-900 dark:text-white text-sm">Tenant Audit Log & Notifications</h3>
          </div>
          <span className="text-xs text-teal-600 dark:text-teal-400 font-semibold cursor-pointer hover:underline">
            Export Logs (CSV)
          </span>
        </div>

        <div className="space-y-3">
          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800 text-xs flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">Company Account Verified</span>
                <p className="text-[11px] text-zinc-400">{currentCompany.companyName} completed multi-tenant verification check.</p>
              </div>
            </div>
            <span className="text-[11px] text-zinc-400 shrink-0">Today, 10:42 AM</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800 text-xs flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-teal-100 dark:bg-teal-950/80 text-[#0A756A] flex items-center justify-center shrink-0">
                <Key className="w-4 h-4" />
              </div>
              <div>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">API Key Regenerated</span>
                <p className="text-[11px] text-zinc-400">Primary Admin {currentCompany.adminName} created a new production API key.</p>
              </div>
            </div>
            <span className="text-[11px] text-zinc-400 shrink-0">Yesterday, 4:15 PM</span>
          </div>
        </div>
      </div>

    </div>
  );
}
