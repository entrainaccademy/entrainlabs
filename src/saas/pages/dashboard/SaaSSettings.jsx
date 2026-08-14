import React, { useState } from "react";
import { motion } from "motion/react";
import {
  CreditCard,
  Bell,
  CheckCircle2,
  Download,
  Sparkles,
  Zap,
  Building2,
  FileText
} from "lucide-react";
import { useSaaSAuth } from "../../context/SaaSAuthContext";

export default function SaaSSettings() {
  const { currentCompany, updateCompanyProfile } = useSaaSAuth();

  const [activePlan, setActivePlan] = useState(currentCompany?.plan || "Growth Plan");
  const [emailDigest, setEmailDigest] = useState(true);
  const [securityAlerts, setSecurityAlerts] = useState(true);
  const [billingAlerts, setBillingAlerts] = useState(true);
  const [upgradeMsg, setUpgradeMsg] = useState("");

  const handleSelectPlan = async (planName) => {
    setActivePlan(planName);
    await updateCompanyProfile({ plan: planName });
    setUpgradeMsg(`Plan successfully updated to ${planName}!`);
    setTimeout(() => setUpgradeMsg(""), 3000);
  };

  const invoices = [
    { id: "INV-2026-001", date: "Feb 01, 2026", amount: "$99.00", status: "Paid", plan: "Growth Plan" },
    { id: "INV-2026-002", date: "Jan 01, 2026", amount: "$99.00", status: "Paid", plan: "Growth Plan" },
    { id: "INV-2025-012", date: "Dec 01, 2025", amount: "$29.00", status: "Paid", plan: "Starter Plan" }
  ];

  return (
    <div className="space-y-8 font-outfit max-w-4xl">
      
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
          Billing & Organization Settings
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1 font-satoshi">
          Manage subscription plans, billing contacts, invoices, and notification preferences.
        </p>
      </div>

      {upgradeMsg && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs flex items-center gap-2 font-semibold"
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
          <span>{upgradeMsg}</span>
        </motion.div>
      )}

      {/* Subscription Plans Card */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800/80 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-[#0A756A]" />
            <h2 className="text-base font-bold text-zinc-900 dark:text-white">Active Plan & Tier Upgrade</h2>
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950 text-[#0A756A] dark:text-teal-300 border border-teal-500/20">
            Current: {activePlan}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Starter */}
          <div className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${activePlan === "Starter Plan" ? "border-[#0A756A] bg-teal-50/40 dark:bg-teal-950/30" : "border-zinc-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-800/40"}`}>
            <div>
              <span className="text-xs font-semibold text-zinc-500">Starter</span>
              <div className="text-2xl font-bold text-zinc-900 dark:text-white mt-1">$29 <span className="text-xs font-normal text-zinc-400">/ mo</span></div>
              <p className="text-[11px] text-zinc-500 mt-2 font-satoshi">5 Team Seats • 10 GB Storage</p>
            </div>

            <button
              onClick={() => handleSelectPlan("Starter Plan")}
              disabled={activePlan === "Starter Plan"}
              className="mt-6 w-full py-2 rounded-xl text-xs font-semibold border border-zinc-300 dark:border-zinc-700 hover:bg-white dark:hover:bg-zinc-700 disabled:opacity-50 cursor-pointer"
            >
              {activePlan === "Starter Plan" ? "Active Tier" : "Switch to Starter"}
            </button>
          </div>

          {/* Growth */}
          <div className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${activePlan === "Growth Plan" ? "border-2 border-[#0A756A] bg-gradient-to-b from-[#0A756A]/10 to-transparent" : "border-zinc-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-800/40"}`}>
            <div>
              <span className="text-xs font-bold text-[#0A756A]">Growth Plan</span>
              <div className="text-2xl font-bold text-zinc-900 dark:text-white mt-1">$99 <span className="text-xs font-normal text-zinc-400">/ mo</span></div>
              <p className="text-[11px] text-zinc-500 mt-2 font-satoshi">25 Seats • 100 GB Storage • API Keys</p>
            </div>

            <button
              onClick={() => handleSelectPlan("Growth Plan")}
              disabled={activePlan === "Growth Plan"}
              className="mt-6 w-full py-2 rounded-xl text-xs font-semibold bg-[#0A756A] text-white hover:bg-teal-700 disabled:opacity-50 cursor-pointer shadow-sm"
            >
              {activePlan === "Growth Plan" ? "Current Active Plan" : "Upgrade to Growth"}
            </button>
          </div>

          {/* Enterprise */}
          <div className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${activePlan === "Enterprise Plan" ? "border-[#0A756A] bg-teal-50/40 dark:bg-teal-950/30" : "border-zinc-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-800/40"}`}>
            <div>
              <span className="text-xs font-semibold text-zinc-500">Enterprise</span>
              <div className="text-2xl font-bold text-zinc-900 dark:text-white mt-1">$299 <span className="text-xs font-normal text-zinc-400">/ mo</span></div>
              <p className="text-[11px] text-zinc-500 mt-2 font-satoshi">Unlimited Seats • Dedicated Manager</p>
            </div>

            <button
              onClick={() => handleSelectPlan("Enterprise Plan")}
              disabled={activePlan === "Enterprise Plan"}
              className="mt-6 w-full py-2 rounded-xl text-xs font-semibold border border-zinc-300 dark:border-zinc-700 hover:bg-white dark:hover:bg-zinc-700 disabled:opacity-50 cursor-pointer"
            >
              {activePlan === "Enterprise Plan" ? "Active Tier" : "Switch to Enterprise"}
            </button>
          </div>

        </div>
      </div>

      {/* Notifications Preferences */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2 border-b border-zinc-100 dark:border-zinc-800/80 pb-3 mb-6">
          <Bell className="w-5 h-5 text-[#0A756A]" />
          <h2 className="text-base font-bold text-zinc-900 dark:text-white">Notification Preferences</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between py-2 border-b border-zinc-100 dark:border-zinc-800/50">
            <div>
              <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">Weekly Digest & Analytics</div>
              <div className="text-[11px] text-zinc-400">Receive summary reports of team usage and storage.</div>
            </div>
            <input
              type="checkbox"
              checked={emailDigest}
              onChange={() => setEmailDigest(!emailDigest)}
              className="w-4 h-4 text-[#0A756A] rounded"
            />
          </div>

          <div className="flex items-center justify-between py-2 border-b border-zinc-100 dark:border-zinc-800/50">
            <div>
              <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">Security & Login Alerts</div>
              <div className="text-[11px] text-zinc-400">Get notified when new admin logins occur.</div>
            </div>
            <input
              type="checkbox"
              checked={securityAlerts}
              onChange={() => setSecurityAlerts(!securityAlerts)}
              className="w-4 h-4 text-[#0A756A] rounded"
            />
          </div>

          <div className="flex items-center justify-between py-2">
            <div>
              <div className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">Billing & Invoice Notices</div>
              <div className="text-[11px] text-zinc-400">Email receipts and subscription renewal reminders.</div>
            </div>
            <input
              type="checkbox"
              checked={billingAlerts}
              onChange={() => setBillingAlerts(!billingAlerts)}
              className="w-4 h-4 text-[#0A756A] rounded"
            />
          </div>
        </div>
      </div>

      {/* Invoices History Table */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800/80 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-[#0A756A]" />
            <h2 className="text-base font-bold text-zinc-900 dark:text-white">Billing History & Invoices</h2>
          </div>
        </div>

        <div className="divide-y divide-zinc-100 dark:divide-zinc-800 text-xs">
          {invoices.map((inv) => (
            <div key={inv.id} className="py-3 flex items-center justify-between">
              <div>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">{inv.id}</span>
                <span className="text-[11px] text-zinc-400 ml-3">{inv.date} • {inv.plan}</span>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="font-semibold text-zinc-900 dark:text-white">{inv.amount}</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold">
                  {inv.status}
                </span>
                <button className="p-1.5 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
