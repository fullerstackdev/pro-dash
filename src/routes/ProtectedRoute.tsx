import React from 'react';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  // For development purposes, we're bypassing authentication checks.
  return children;
};

export default ProtectedRoute;
