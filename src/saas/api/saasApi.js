/**
 * Multi-Tenant SaaS API Service Module
 * 
 * Provides production-ready API interfaces for Multi-Tenant authentication,
 * tenant profile updates, API Key management, security, and subscription billing.
 * 
 * Supports seamless switching between local Mock DB and real REST backend API.
 */

const BASE_URL = import.meta.env.VITE_SAAS_API_URL || "https://api.flowscale.io/v1";
const USE_MOCK_API = true; // Set to false when connecting to backend server

// Initial Seed Data for Mock Mode
const MOCK_COMPANIES_DB = [
  {
    id: "tenant-acme-101",
    tenantId: "TEN-884920",
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
    twoFactorEnabled: false,
    token: "mock-jwt-token-acme-tenant-101",
    stats: {
      teamMembers: 24,
      activeProjects: 12,
      apiCallsThisMonth: "142,500",
      storageUsedGB: 48.5,
    }
  }
];

// LocalStorage helpers for mock API persistence
const getStoredCompanies = () => {
  try {
    const saved = localStorage.getItem("saas_companies");
    return saved ? JSON.parse(saved) : MOCK_COMPANIES_DB;
  } catch (e) {
    return MOCK_COMPANIES_DB;
  }
};

const saveStoredCompanies = (companies) => {
  try {
    localStorage.setItem("saas_companies", JSON.stringify(companies));
  } catch (e) {
    console.error("Mock DB storage failed", e);
  }
};

// Generic HTTP Request Helper (Real REST API Mode)
async function request(endpoint, options = {}) {
  const token = localStorage.getItem("saas_token");
  const tenantId = localStorage.getItem("saas_tenant_id");

  const headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
    ...(tenantId && { "X-Tenant-ID": tenantId }),
    ...options.headers,
  };

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || `API Error (${response.status})`);
  }
  return data;
}

// ----------------------------------------------------
// MULTI-TENANT API ENDPOINTS
// ----------------------------------------------------
export const saasApi = {
  
  // 1. AUTHENTICATION & COMPANY REGISTRATION
  auth: {
    /**
     * POST /api/v1/auth/register-company
     * Register a new company tenant account
     */
    registerCompany: async (formData) => {
      if (USE_MOCK_API) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const companies = getStoredCompanies();

        const duplicate = companies.find(
          (c) => c.companyEmail.toLowerCase() === formData.companyEmail.toLowerCase()
        );
        if (duplicate) {
          throw new Error("A company with this email address is already registered.");
        }

        const tenantId = `TEN-${Math.floor(100000 + Math.random() * 900000)}`;
        const newCompany = {
          id: `tenant-${Date.now()}`,
          tenantId,
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
          twoFactorEnabled: false,
          token: `mock-jwt-${Date.now()}`,
          stats: {
            teamMembers: 1,
            activeProjects: 3,
            apiCallsThisMonth: "1,200",
            storageUsedGB: 1.2,
          }
        };

        const updatedList = [...companies, newCompany];
        saveStoredCompanies(updatedList);
        return { success: true, tenant: newCompany, message: "Company registered successfully" };
      }

      return request("/auth/register-company", {
        method: "POST",
        body: JSON.stringify(formData),
      });
    },

    /**
     * POST /api/v1/auth/login-company
     * Authenticate company admin credentials & return tenant session
     */
    loginCompany: async (companyEmail, password) => {
      if (USE_MOCK_API) {
        await new Promise((resolve) => setTimeout(resolve, 800));
        const companies = getStoredCompanies();

        const company = companies.find(
          (c) =>
            c.companyEmail.toLowerCase() === companyEmail.toLowerCase() &&
            c.password === password
        );

        if (!company) {
          throw new Error("Invalid company email or password. Please check your credentials.");
        }

        localStorage.setItem("saas_token", company.token);
        localStorage.setItem("saas_tenant_id", company.tenantId);

        return { success: true, tenant: company, token: company.token };
      }

      const res = await request("/auth/login-company", {
        method: "POST",
        body: JSON.stringify({ companyEmail, password }),
      });

      if (res.token) {
        localStorage.setItem("saas_token", res.token);
        localStorage.setItem("saas_tenant_id", res.tenant.tenantId);
      }
      return res;
    },

    /**
     * POST /api/v1/auth/logout
     * Revoke tenant token & session
     */
    logoutCompany: async () => {
      localStorage.removeItem("saas_token");
      localStorage.removeItem("saas_tenant_id");
      return { success: true };
    }
  },

  // 2. TENANT PROFILE & ORGANIZATION MANAGEMENT
  tenant: {
    /**
     * GET /api/v1/tenant/profile
     * Fetch current logged-in company details
     */
    getProfile: async () => {
      if (USE_MOCK_API) {
        const savedCompany = localStorage.getItem("saas_current_company");
        return savedCompany ? JSON.parse(savedCompany) : null;
      }
      return request("/tenant/profile");
    },

    /**
     * PUT /api/v1/tenant/profile
     * Update tenant company branding, contact & admin profile
     */
    updateProfile: async (tenantId, updatedFields) => {
      if (USE_MOCK_API) {
        await new Promise((resolve) => setTimeout(resolve, 700));
        const companies = getStoredCompanies();

        const updatedList = companies.map((c) => {
          if (c.tenantId === tenantId || c.id === tenantId) {
            return { ...c, ...updatedFields };
          }
          return c;
        });

        saveStoredCompanies(updatedList);
        const updated = updatedList.find((c) => c.tenantId === tenantId || c.id === tenantId);
        return { success: true, tenant: updated };
      }

      return request("/tenant/profile", {
        method: "PUT",
        body: JSON.stringify(updatedFields),
      });
    },

    /**
     * PUT /api/v1/tenant/subscription
     * Upgrade or change company subscription plan tier
     */
    updateSubscription: async (tenantId, planTier) => {
      if (USE_MOCK_API) {
        await new Promise((resolve) => setTimeout(resolve, 600));
        const companies = getStoredCompanies();

        const updatedList = companies.map((c) => {
          if (c.tenantId === tenantId || c.id === tenantId) {
            return { ...c, plan: planTier };
          }
          return c;
        });

        saveStoredCompanies(updatedList);
        return { success: true, plan: planTier };
      }

      return request("/tenant/subscription", {
        method: "PUT",
        body: JSON.stringify({ plan: planTier }),
      });
    }
  },

  // 3. SECURITY & API KEY MANAGEMENT
  security: {
    /**
     * POST /api/v1/tenant/change-password
     */
    changePassword: async (currentPassword, newPassword) => {
      if (USE_MOCK_API) {
        await new Promise((resolve) => setTimeout(resolve, 800));
        return { success: true, message: "Password updated successfully" };
      }

      return request("/tenant/change-password", {
        method: "POST",
        body: JSON.stringify({ currentPassword, newPassword }),
      });
    },

    /**
     * POST /api/v1/tenant/api-keys
     * Generate new production API key for company workspace
     */
    generateApiKey: async (keyName) => {
      if (USE_MOCK_API) {
        await new Promise((resolve) => setTimeout(resolve, 500));
        const newKey = {
          id: `key-${Date.now()}`,
          name: keyName || "Production API Key",
          key: `fl_live_${Math.random().toString(36).substring(2, 18)}`,
          created: new Date().toISOString().split("T")[0],
          lastUsed: "Just now"
        };
        return { success: true, apiKey: newKey };
      }

      return request("/tenant/api-keys", {
        method: "POST",
        body: JSON.stringify({ name: keyName }),
      });
    }
  }
};
