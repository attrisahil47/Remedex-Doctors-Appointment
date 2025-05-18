import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../AuthContext";

// This component restricts access if the user is not logged in
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
