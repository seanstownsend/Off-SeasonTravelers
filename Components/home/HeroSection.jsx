import React, { useState } from "react";
import { Search, Compass, User, LogOut, Instagram, Trees } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext.jsx";
import AuthModal from "../auth/AuthModal.jsx";

export default function HeroSection({ 
  searchQuery = '', 
  setSearchQuery = () => {}, 
  destinations = [] 
}) {
  const { user, signOut } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('signin');

  const handleSignOut = async () => {
    await signOut();
  };

  const openAuthModal = (mode = 'signin') => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };
  return (
    <div className="relative bg-gradient-to-br from-blue-800 to-teal-800 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400/15 rounded-full -translate-x-36 -translate-y-36 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400/15 rounded-full translate-x-48 translate-y-48 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-300/8 rounded-full -translate-x-32 -translate-y-32 blur-2xl"></div>
      </div>
      
      {/* Top header with auth and social links */}
      <div className="relative z-20 w-full flex justify-end items-center px-6 pt-6">
        <div className="flex items-center gap-4">
          {/* Instagram Link */}
          <a
            href="https://instagram.com/theoffseasontravelers"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-white transition-colors duration-200"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>

          {/* Auth Section */}
          <div className="flex items-center gap-2">
            {user ? (
              <div className="flex items-center gap-2">
                <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white">
                  Welcome back, {user.user_metadata?.full_name || user.email}!
                </span>
                <button
                  onClick={handleSignOut}
                  className="text-sm bg-white/10 hover:bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full transition-all duration-200 flex items-center gap-1 text-white"
                >
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => openAuthModal('signin')}
                  className="text-sm bg-white/10 hover:bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full transition-all duration-200 text-white"
                >
                  Sign In
                </button>
                <button
                  onClick={() => openAuthModal('signup')}
                  className="text-sm bg-white/20 hover:bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full transition-all duration-200 font-medium text-white"
                >
                  Sign Up
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="text-center max-w-4xl mx-auto">
        </div>
      </div>
      
      {/* Auth Modal */}
      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        defaultMode={authMode}
      />
    </div>
  );
}