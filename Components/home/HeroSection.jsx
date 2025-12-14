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