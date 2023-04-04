import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import React from "react";
const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
    return <Navigate to="/movie-react"/>;
  } else {
    return children;
  }
};

export default ProtectedRoute;
