// src/components/ProtectedRoute.jsx

import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext"; // Assuming useAuth is exported from AuthContext

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();

  if (!user) {
    // User not logged in, redirect to login page
    return <Navigate to='/login' />;
  } else if (allowedRoles && !allowedRoles.includes(user.role)) {
    // User logged in but does not have the right role, redirect to home or other page
    return <Navigate to='/' />;
  }

  return children; // User is authenticated and authorized
};

export default ProtectedRoute;
