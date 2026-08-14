import React, { useState } from "react";
import { Link, useNavigate, useLocation, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  LayoutDashboard,
  Building2,
  Shield,
  Settings,
  LogOut,
  Bell,
  Search,
  ChevronRight,
  User,
  ShieldCheck,
  Menu,
  X,
  Sparkles,
  ChevronDown
} from "lucide-react";
import { useSaaSAuth } from "../../context/SaaSAuthContext";

export default function SaaSDashboardLayout() {
  const { currentCompany, logoutCompany } = useSaaSAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const notifications = [
    { id: 1, title: "Company Profile Verified", time: "10 mins ago", unread: true },
    { id: 2, title: "New API Key generated", time: "1 hour ago", unread: true },
    { id: 3, title: "Monthly Usage Audit Available", time: "Yesterday", unread: false }
  ];

  const unreadCount = notifications.filter((n) => n.unread).length;

  const navItems = [
    { label: "Dashboard Overview", path: "/saas/dashboard", icon: LayoutDashboard },
    { label: "Company Profile", path: "/saas/dashboard/profile", icon: Building2 },
    { label: "Security & 2FA", path: "/saas/dashboard/security", icon: Shield },
    { label: "Billing & Settings", path: "/saas/dashboard/settings", icon: Settings },
  ];

  const handleLogout = () => {
    logoutCompany();
    navigate("/saas/login");
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-zinc-900 dark:text-white font-outfit flex transition-colors duration-300">
      
      {/* Mobile Backdrop */}
      {mobileSidebarOpen && (
        <div
          onClick={() => setMobileSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-zinc-950/60 backdrop-blur-xs md:hidden"
        />
      )}

      {/* SIDEBAR NAVIGATION */}
      <aside
        className={`fixed md:sticky top-0 z-50 h-screen bg-white dark:bg-zinc-900 border-r border-zinc-200/80 dark:border-zinc-800 transition-all duration-300 flex flex-col justify-between ${
          sidebarCollapsed ? "w-20" : "w-64"
        } ${mobileSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <div>
          {/* Sidebar Header / Brand */}
          <div className="h-16 px-4 flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800/80">
            <Link to="/saas" className="flex items-center gap-2.5 overflow-hidden">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0A756A] to-teal-400 text-white flex items-center justify-center font-bold shrink-0 shadow-md shadow-teal-500/20">
                <Building2 className="w-5 h-5" />
              </div>
              {!sidebarCollapsed && (
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-zinc-900 dark:text-white tracking-tight leading-tight font-outfit">
                    FlowScale
                  </span>
                  <span className="text-[10px] text-teal-600 dark:text-teal-400 font-semibold uppercase tracking-wider">SaaS Portal</span>
                </div>
              )}
            </Link>

            {/* Collapse toggle (desktop) */}
            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="hidden md:flex p-1.5 rounded-lg text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              <ChevronRight className={`w-4 h-4 transition-transform ${sidebarCollapsed ? "" : "rotate-180"}`} />
            </button>
          </div>

          {/* Company Badge Card */}
          {currentCompany && !sidebarCollapsed && (
            <div className="p-4 mx-3 my-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-zinc-200/60 dark:border-zinc-800/80">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#0A756A] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  {currentCompany.companyName.charAt(0)}
                </div>
                <div className="overflow-hidden">
                  <h4 className="font-bold text-xs text-zinc-800 dark:text-zinc-200 truncate">
                    {currentCompany.companyName}
                  </h4>
                  <div className="flex items-center gap-1 mt-0.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span className="text-[10px] text-zinc-500 font-mono">{currentCompany.tenantId}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Links */}
          <nav className="px-3 space-y-1 mt-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = location.pathname === item.path;

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    active
                      ? "bg-[#0A756A] text-white shadow-md shadow-teal-500/20"
                      : "text-zinc-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800/60 hover:text-zinc-900 dark:hover:text-white"
                  }`}
                  title={item.label}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  {!sidebarCollapsed && <span>{item.label}</span>}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer / Logout */}
        <div className="p-3 border-t border-zinc-100 dark:border-zinc-800/80">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-semibold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4 shrink-0" />
            {!sidebarCollapsed && <span>Log Out</span>}
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT WRAPPER */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* TOP NAVIGATION BAR */}
        <header className="sticky top-0 z-30 h-16 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl border-b border-zinc-200/80 dark:border-zinc-800 px-4 sm:px-8 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              className="md:hidden p-2 rounded-lg text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Tenant Search */}
            <div className="relative hidden sm:block w-64 md:w-80">
              <input
                type="text"
                placeholder="Search tenant records, logs..."
                className="w-full h-9 px-3.5 pl-9 rounded-xl bg-slate-100 dark:bg-zinc-800/50 border-none text-xs text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0A756A]/40 transition-all font-satoshi"
              />
              <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-2.5" />
            </div>
          </div>

          {/* Right Utilities */}
          <div className="flex items-center gap-3">
            
            {/* Notifications Popover */}
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="p-2 rounded-xl text-zinc-600 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800 relative transition-colors"
              >
                <Bell className="w-4 h-4" />
                {unreadCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-teal-500 animate-ping" />
                )}
              </button>

              <AnimatePresence>
                {notificationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-80 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl p-4 z-50 text-xs"
                  >
                    <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-2 mb-3">
                      <span className="font-bold text-zinc-900 dark:text-white">Tenant Notifications</span>
                      <span className="text-[10px] text-[#0A756A] font-semibold">Mark all read</span>
                    </div>

                    <div className="space-y-2">
                      {notifications.map((n) => (
                        <div
                          key={n.id}
                          className="p-2.5 rounded-xl bg-slate-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800/80"
                        >
                          <div className="font-semibold text-zinc-800 dark:text-zinc-200">{n.title}</div>
                          <div className="text-[10px] text-zinc-400 mt-0.5">{n.time}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Admin User Profile Tag */}
            {currentCompany && (
              <div className="relative">
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center gap-2.5 p-1.5 rounded-xl hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#0A756A] to-teal-500 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                    {currentCompany.adminName ? currentCompany.adminName.charAt(0) : "A"}
                  </div>
                  <div className="hidden sm:flex flex-col text-left">
                    <span className="font-bold text-xs text-zinc-900 dark:text-white leading-tight">
                      {currentCompany.adminName}
                    </span>
                    <span className="text-[10px] text-zinc-400">Company Admin</span>
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-zinc-400 hidden sm:block" />
                </button>

                <AnimatePresence>
                  {profileDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-56 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl p-2 z-50 text-xs font-outfit"
                    >
                      <div className="p-3 border-b border-zinc-100 dark:border-zinc-800">
                        <div className="font-bold text-zinc-900 dark:text-white">{currentCompany.adminName}</div>
                        <div className="text-[11px] text-zinc-400 truncate">{currentCompany.adminEmail}</div>
                      </div>

                      <div className="py-1">
                        <Link
                          to="/saas/dashboard/profile"
                          onClick={() => setProfileDropdownOpen(false)}
                          className="flex items-center gap-2 px-3 py-2 rounded-xl text-zinc-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800"
                        >
                          <Building2 className="w-4 h-4 text-[#0A756A]" />
                          <span>Company Profile</span>
                        </Link>
                        <Link
                          to="/saas/dashboard/security"
                          onClick={() => setProfileDropdownOpen(false)}
                          className="flex items-center gap-2 px-3 py-2 rounded-xl text-zinc-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800"
                        >
                          <Shield className="w-4 h-4 text-[#0A756A]" />
                          <span>Security & 2FA</span>
                        </Link>
                      </div>

                      <div className="pt-1 border-t border-zinc-100 dark:border-zinc-800">
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40"
                        >
                          <LogOut className="w-4 h-4" />
                          <span>Log Out</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}

          </div>

        </header>

        {/* INNER ROUTE OUTLET AREA */}
        <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
          <Outlet />
        </main>

      </div>
    </div>
  );
}
