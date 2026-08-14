import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Building2,
  Mail,
  Phone,
  Globe,
  Briefcase,
  MapPin,
  User,
  Save,
  CheckCircle2,
  Loader2,
  Sparkles
} from "lucide-react";
import { useSaaSAuth } from "../../context/SaaSAuthContext";

export default function SaaSCompanyProfile() {
  const { currentCompany, updateCompanyProfile } = useSaaSAuth();

  const [formData, setFormData] = useState({
    companyName: currentCompany?.companyName || "",
    companyEmail: currentCompany?.companyEmail || "",
    companyPhone: currentCompany?.companyPhone || "",
    companyWebsite: currentCompany?.companyWebsite || "",
    industry: currentCompany?.industry || "Technology & Software",
    companyAddress: currentCompany?.companyAddress || "",
    adminName: currentCompany?.adminName || "",
    adminEmail: currentCompany?.adminEmail || "",
  });

  const [saving, setSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setSuccessMsg("");

    try {
      await updateCompanyProfile(formData);
      setSaving(false);
      setSuccessMsg("Company profile updated successfully!");
      setTimeout(() => setSuccessMsg(""), 3500);
    } catch (err) {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-8 font-outfit max-w-4xl">
      
      {/* Top Banner */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
          Company Profile Settings
        </h1>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1 font-satoshi">
          Manage your organization details, branding domain, and administrator contacts.
        </p>
      </div>

      {successMsg && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs flex items-center gap-3 font-medium"
        >
          <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
          <span>{successMsg}</span>
        </motion.div>
      )}

      {/* Main Form Card */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-sm">
        
        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Section 1: Company Profile */}
          <div>
            <div className="flex items-center gap-2 border-b border-zinc-100 dark:border-zinc-800/80 pb-3 mb-6">
              <Building2 className="w-5 h-5 text-[#0A756A]" />
              <h2 className="text-base font-bold text-zinc-900 dark:text-white">Organization Info</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              <div>
                <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Company Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                    className="w-full h-11 px-3.5 pl-10 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-xs font-satoshi text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A756A]/50 transition-all"
                  />
                  <Building2 className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Company Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="companyEmail"
                    value={formData.companyEmail}
                    onChange={handleChange}
                    required
                    className="w-full h-11 px-3.5 pl-10 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-xs font-satoshi text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A756A]/50 transition-all"
                  />
                  <Mail className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Industry Sector
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full h-11 px-3.5 pl-10 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-xs font-satoshi text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A756A]/50 transition-all"
                  />
                  <Briefcase className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Company Phone
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="companyPhone"
                    value={formData.companyPhone}
                    onChange={handleChange}
                    className="w-full h-11 px-3.5 pl-10 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-xs font-satoshi text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A756A]/50 transition-all"
                  />
                  <Phone className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Company Website
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="companyWebsite"
                    value={formData.companyWebsite}
                    onChange={handleChange}
                    className="w-full h-11 px-3.5 pl-10 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-xs font-satoshi text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A756A]/50 transition-all"
                  />
                  <Globe className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Headquarters Address
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="companyAddress"
                    value={formData.companyAddress}
                    onChange={handleChange}
                    className="w-full h-11 px-3.5 pl-10 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-xs font-satoshi text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A756A]/50 transition-all"
                  />
                  <MapPin className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
                </div>
              </div>

            </div>
          </div>

          {/* Section 2: Administrator Information */}
          <div>
            <div className="flex items-center gap-2 border-b border-zinc-100 dark:border-zinc-800/80 pb-3 mb-6">
              <User className="w-5 h-5 text-[#0A756A]" />
              <h2 className="text-base font-bold text-zinc-900 dark:text-white">Primary Administrator</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Admin Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="adminName"
                    value={formData.adminName}
                    onChange={handleChange}
                    required
                    className="w-full h-11 px-3.5 pl-10 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-xs font-satoshi text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A756A]/50 transition-all"
                  />
                  <User className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1.5">
                  Admin Work Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="adminEmail"
                    value={formData.adminEmail}
                    onChange={handleChange}
                    required
                    className="w-full h-11 px-3.5 pl-10 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 text-xs font-satoshi text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A756A]/50 transition-all"
                  />
                  <Mail className="w-4 h-4 text-zinc-400 absolute left-3.5 top-3.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Action */}
          <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex justify-end">
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-3 rounded-xl bg-[#0A756A] text-white text-xs font-semibold hover:bg-teal-700 transition-all shadow-md shadow-teal-500/20 disabled:opacity-50 flex items-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
            >
              {saving ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Saving Profile Changes...</span>
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  <span>Save Profile Changes</span>
                </>
              )}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
