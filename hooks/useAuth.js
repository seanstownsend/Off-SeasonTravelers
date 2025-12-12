import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user has access on mount
    const hasAccess = localStorage.getItem('ost_access') === 'granted';
    setIsAuthenticated(hasAccess);
    setIsLoading(false);
  }, []);

  const login = () => {
    localStorage.setItem('ost_access', 'granted');
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('ost_access');
    setIsAuthenticated(false);
  };

  return {
    isAuthenticated,
    isLoading,
    login,
    logout
  };
};