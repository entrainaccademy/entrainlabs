import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Lock,
  Shield,
  Key,
  Smartphone,
  CheckCircle2,
  AlertTriangle,
  Copy,
  Trash2,
  RefreshCw,
  Eye,
  EyeOff,
  Sparkles,
  Loader2
} from "lucide-react";
import { useSaaSAuth } from "../../context/SaaSAuthContext";

export default function SaaSSecurity() {
  const { currentCompany } = useSaaSAuth();

  // Password change state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pwdLoading, setPwdLoading] = useState(false);
  const [pwdMsg, setPwdMsg] = useState("");

  // 2FA state
  const [twoFactor, setTwoFactor] = useState(currentCompany?.twoFactorEnabled || false);

  // API Key state
  const [apiKeys, setApiKeys] = useState([
    { id: "key-prod-01", name: "Production API Key", key: "fl_live_99283749102938475", created: "2026-02-10", lastUsed: "5 mins ago" },
    { id: "key-[#0A756A]-02", name: "Staging Webhook Secret", key: "fl_test_8819203948571029", created: "2026-03-01", lastUsed: "2 days ago" }
  ]);
  const [copiedKey, setCopiedKey] = useState("");

  const handlePasswordChange = (e) => {
    e.preventDefault();
    if (newPassword.length < 8) {
      setPwdMsg("New password must be at least 8 characters.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setPwdMsg("Passwords do not match.");
      return;
    }

    setPwdLoading(true);
    setTimeout(() => {
      setPwdLoading(false);
      setPwdMsg("Password updated successfully!");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    }, 1000);
  };

  const handleCopyKey = (keyStr) => {
    navigator.clipboard.writeText(keyStr);
    setCopiedKey(keyStr);
    setTimeout(() => setCopiedKey(""), 2500);
  };

  const handleGenerateKey = () => {
    const newKey = {
      id: `key-${Date.now()}`,
      name: `API Key ${apiKeys.length + 1}`,
      key: `fl_live_${Math.random().toString(36).substring(2, 18)}`,
      created: new Date().toISOString().split("T")[0],
      lastUsed: "Just now"
    };
    setApiKeys([...apiKeys, newKey]);
  };

  const handleRevokeKey = (id) => {
    setApiKeys(apiKeys.filter((k) => k.id !== id));
  };

  return (
    <div className="space-y-8 font-outfit max-w-4xl">
      
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
          Security & Access Control
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1 font-satoshi">
          Manage administrator passwords, 2-Factor Authentication, active sessions, and tenant API keys.
        </p>
      </div>

      {/* 2FA Toggle Card */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950 text-[#0A756A] flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-zinc-900 dark:text-white text-base">Two-Factor Authentication (2FA)</h3>
              <p className="text-xs text-zinc-500 font-satoshi mt-0.5">
                Add an extra layer of security to your organization admin account.
              </p>
            </div>
          </div>

          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={twoFactor}
              onChange={() => setTwoFactor(!twoFactor)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-zinc-200 peer-focus:outline-none rounded-full peer dark:bg-zinc-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-zinc-600 peer-checked:bg-[#0A756A]"></div>
          </label>
        </div>

        {twoFactor && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800/80 text-xs flex flex-col sm:flex-row items-center gap-4"
          >
            <div className="w-24 h-24 bg-zinc-100 dark:bg-zinc-800 rounded-2xl p-2 flex items-center justify-center font-mono text-[9px] text-zinc-500 border border-zinc-200 dark:border-zinc-700 text-center">
              [QR CODE MOCK]
            </div>
            <div>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">2FA Active</span>
              <p className="text-zinc-500 font-satoshi mt-1">
                Authenticator app configured. Backup code: <code className="bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded text-zinc-800 dark:text-zinc-200">FL-9920-8812</code>
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Change Password Card */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2 border-b border-zinc-100 dark:border-zinc-800/80 pb-3 mb-6">
          <Lock className="w-5 h-5 text-[#0A756A]" />
          <h2 className="text-base font-bold text-zinc-900 dark:text-white">Change Admin Password</h2>
        </div>

        {pwdMsg && (
          <div className="mb-4 p-3 rounded-xl bg-slate-50 dark:bg-zinc-800/60 text-xs font-semibold text-[#0A756A]">
            {pwdMsg}
          </div>
        )}

        <form onSubmit={handlePasswordChange} className="space-y-4 max-w-md">
          <div>
            <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
              Current Password
            </label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
              className="w-full h-11 px-3.5 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-xs font-satoshi text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A756A]/50 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
              New Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="w-full h-11 px-3.5 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-xs font-satoshi text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A756A]/50 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
              Confirm New Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full h-11 px-3.5 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-xs font-satoshi text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A756A]/50 transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={pwdLoading}
            className="px-6 py-2.5 rounded-xl bg-[#0A756A] text-white text-xs font-semibold hover:bg-teal-700 transition-all shadow-md shadow-teal-500/20 disabled:opacity-50 cursor-pointer"
          >
            {pwdLoading ? "Updating..." : "Update Password"}
          </button>
        </form>
      </div>

      {/* API Keys Manager */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800/80 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <Key className="w-5 h-5 text-[#0A756A]" />
            <h2 className="text-base font-bold text-zinc-900 dark:text-white">Tenant Production API Keys</h2>
          </div>

          <button
            onClick={handleGenerateKey}
            className="px-3.5 py-2 rounded-xl bg-[#0A756A] text-white text-xs font-semibold hover:bg-teal-700 transition-all shadow-sm cursor-pointer"
          >
            + Generate New API Key
          </button>
        </div>

        <div className="space-y-3">
          {apiKeys.map((k) => (
            <div
              key={k.id}
              className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
            >
              <div>
                <div className="font-semibold text-zinc-900 dark:text-white">{k.name}</div>
                <div className="font-mono text-zinc-500 text-[11px] mt-0.5">{k.key}</div>
                <div className="text-[10px] text-zinc-400 mt-1">Created: {k.created} • Last used: {k.lastUsed}</div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopyKey(k.key)}
                  className="px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-semibold hover:bg-white dark:hover:bg-zinc-700 flex items-center gap-1.5 cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5 text-[#0A756A]" />
                  <span>{copiedKey === k.key ? "Copied!" : "Copy"}</span>
                </button>

                <button
                  onClick={() => handleRevokeKey(k.id)}
                  className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors cursor-pointer"
                  title="Revoke Key"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
