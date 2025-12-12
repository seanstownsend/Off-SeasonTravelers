import React, { useState } from 'react';
import { Trees, MapPin, Calendar, Lock, Eye, EyeOff } from 'lucide-react';

const UnderConstruction = ({ onAuthenticate }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Simple password - you can change this to whatever you want
  const ACCESS_PASSWORD = 'offseason2025';

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    // Simulate a brief loading state for better UX
    setTimeout(() => {
      if (password === ACCESS_PASSWORD) {
        localStorage.setItem('ost_access', 'granted');
        onAuthenticate();
      } else {
        setError('Incorrect access code. Please try again.');
        setPassword('');
      }
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo and Brand */}
        <div className="flex items-center justify-center mb-8">
          <Trees className="w-12 h-12 text-emerald-400 mr-3" />
          <h1 className="text-4xl font-bold text-white">
            Off-Season Travelers
          </h1>
        </div>

        {/* Under Construction Message */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 border border-white/20">
          <div className="text-6xl mb-6">🏗️</div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Something Amazing is Coming
          </h2>
          <p className="text-xl text-blue-200 mb-6 leading-relaxed">
            We're crafting the ultimate guide to America's National Parks during their best-kept secret seasons. 
            Discover hidden gems, avoid crowds, and save money on your next adventure.
          </p>
          
          {/* Features Preview */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <MapPin className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Interactive Maps</h3>
              <p className="text-blue-200 text-sm">Explore 63+ National Parks with seasonal insights</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <Calendar className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Detailed Itineraries</h3>
              <p className="text-blue-200 text-sm">Complete travel guides for off-season adventures</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="text-2xl mx-auto mb-3">💰</div>
              <h3 className="text-white font-semibold mb-2">Money-Saving Tips</h3>
              <p className="text-blue-200 text-sm">Discover the best deals and hidden savings</p>
            </div>
          </div>

          {/* Launch Timeline */}
          <div className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-lg p-6 mb-6">
            <h3 className="text-white font-semibold mb-3">🚀 Coming Soon</h3>
            <p className="text-blue-200">
              Join thousands of smart travelers who've already discovered the magic of off-season exploration.
              <br />
              <span className="text-emerald-300 font-medium">Full launch expected January 2025</span>
            </p>
          </div>
        </div>

        {/* Login Section */}
        {!showLogin ? (
          <button
            onClick={() => setShowLogin(true)}
            className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg text-white transition-all duration-200 backdrop-blur-sm"
          >
            <Lock className="w-4 h-4 mr-2" />
            Preview Access
          </button>
        ) : (
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 max-w-md mx-auto">
            <h3 className="text-white font-semibold mb-4 flex items-center justify-center">
              <Lock className="w-5 h-5 mr-2" />
              Enter Access Code
            </h3>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Access code..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent pr-12"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-200 hover:text-white transition-colors"
                  disabled={isLoading}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              
              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}
              
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setShowLogin(false);
                    setPassword('');
                    setError('');
                  }}
                  className="flex-1 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/20 rounded-lg text-white transition-all duration-200"
                  disabled={isLoading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading || !password.trim()}
                  className="flex-1 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-600/50 rounded-lg text-white font-medium transition-all duration-200 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    </div>
                  ) : (
                    'Access Site'
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-blue-300 text-sm">
            © 2025 Off-Season Travelers. Crafted with ❄️ for adventurous souls.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnderConstruction;