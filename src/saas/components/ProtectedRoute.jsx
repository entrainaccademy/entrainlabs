import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSaaSAuth } from "../context/SaaSAuthContext";

export default function ProtectedRoute({ children }) {
  const { currentCompany } = useSaaSAuth();
  const location = useLocation();

  if (!currentCompany) {
    return <Navigate to="/saas/login" state={{ from: location }} replace />;
  }

  return children;
}
