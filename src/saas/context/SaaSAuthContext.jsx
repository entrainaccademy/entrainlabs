import React, { createContext, useContext, useState, useEffect } from "react";

const SaaSAuthContext = createContext(null);

const DEFAULT_DEMO_COMPANIES = [
  {
    id: "tenant-acme-101",
    companyName: "Acme Innovations Ltd",
    companyEmail: "contact@acme.com",
    companyPhone: "+1 (555) 234-5678",
    companyWebsite: "https://acme.com",
    industry: "Technology & Software",
    companyAddress: "100 Tech Blvd, Suite 400, San Francisco, CA 94107",
    adminName: "Alex Morgan",
    adminEmail: "alex@acme.com",
    password: "Password123!",
    plan: "Growth Plan",
    status: "Active",
    createdAt: "2026-01-15",
    tenantId: "TEN-884920",
    twoFactorEnabled: false,
    stats: {
      teamMembers: 24,
      activeProjects: 12,
      apiCallsThisMonth: "142,500",
      storageUsedGB: 48.5,
    }
  }
];

export function SaaSAuthProvider({ children }) {
  const [companies, setCompanies] = useState(() => {
    try {
      const saved = localStorage.getItem("saas_companies");
      return saved ? JSON.parse(saved) : DEFAULT_DEMO_COMPANIES;
    } catch (e) {
      return DEFAULT_DEMO_COMPANIES;
    }
  });

  const [currentCompany, setCurrentCompany] = useState(() => {
    try {
      const saved = localStorage.getItem("saas_current_company");
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("saas_companies", JSON.stringify(companies));
    } catch (e) {
      console.error("Failed to save companies to localStorage", e);
    }
  }, [companies]);

  useEffect(() => {
    try {
      if (currentCompany) {
        localStorage.setItem("saas_current_company", JSON.stringify(currentCompany));
      } else {
        localStorage.removeItem("saas_current_company");
      }
    } catch (e) {
      console.error("Failed to update current company session", e);
    }
  }, [currentCompany]);

  // Register new company
  const registerCompany = async (formData) => {
    // Simulate async API delay
    await new Promise((resolve) => setTimeout(resolve, 1200));

    // Check duplicate company email
    const existing = companies.find(
      (c) => c.companyEmail.toLowerCase() === formData.companyEmail.toLowerCase()
    );
    if (existing) {
      throw new Error("A company with this email address is already registered.");
    }

    const tenantId = `TEN-${Math.floor(100000 + Math.random() * 900000)}`;
    const newCompany = {
      id: `tenant-${Date.now()}`,
      companyName: formData.companyName,
      companyEmail: formData.companyEmail,
      companyPhone: formData.companyPhone || "N/A",
      companyWebsite: formData.companyWebsite || "",
      industry: formData.industry,
      companyAddress: formData.companyAddress || "N/A",
      adminName: formData.adminName,
      adminEmail: formData.adminEmail,
      password: formData.password,
      plan: "Starter Plan",
      status: "Active",
      createdAt: new Date().toISOString().split("T")[0],
      tenantId,
      twoFactorEnabled: false,
      stats: {
        teamMembers: 1,
        activeProjects: 3,
        apiCallsThisMonth: "1,200",
        storageUsedGB: 1.2,
      }
    };

    setCompanies((prev) => [...prev, newCompany]);
    return newCompany;
  };

  // Login company
  const loginCompany = async (email, password) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const found = companies.find(
      (c) =>
        c.companyEmail.toLowerCase() === email.toLowerCase() &&
        c.password === password
    );

    if (!found) {
      throw new Error("Invalid company email or password. Please check your credentials.");
    }

    setCurrentCompany(found);
    return found;
  };

  // Logout
  const logoutCompany = () => {
    setCurrentCompany(null);
  };

  // Update profile
  const updateCompanyProfile = async (updatedFields) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    if (!currentCompany) return;

    const updated = { ...currentCompany, ...updatedFields };
    setCurrentCompany(updated);
    setCompanies((prev) =>
      prev.map((c) => (c.id === updated.id ? updated : c))
    );
    return updated;
  };

  return (
    <SaaSAuthContext.Provider
      value={{
        companies,
        currentCompany,
        registerCompany,
        loginCompany,
        logoutCompany,
        updateCompanyProfile,
      }}
    >
      {children}
    </SaaSAuthContext.Provider>
  );
}

export function useSaaSAuth() {
  const context = useContext(SaaSAuthContext);
  if (!context) {
    throw new Error("useSaaSAuth must be used within a SaaSAuthProvider");
  }
  return context;
}
