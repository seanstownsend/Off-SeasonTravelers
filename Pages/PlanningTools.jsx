import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext.jsx';
import { supabase } from '../lib/supabase.js';
import { User, Mail, MapPin, Plane, Calendar, Save, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import AirportAutocomplete from '../Components/ui/AirportAutocomplete.jsx';

export default function PlanningTools() {
  const { user } = useAuth();
  console.log('PlanningTools: user:', user);
  const [userProfile, setUserProfile] = useState({
    name: '',
    email: '',
    dateOfBirth: '',
    cityOfOrigin: '',
    preferredAirport: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState(null);
  const [hasProfile, setHasProfile] = useState(false);

  useEffect(() => {
    if (user) {
      loadUserProfile();
    }
  }, [user]);

  const loadUserProfile = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error loading profile:', error);
        return;
      }

      if (data) {
        setUserProfile({
          name: data.name || '',
          email: data.email || user.email || '',
          dateOfBirth: data.date_of_birth || '',
          cityOfOrigin: data.city_of_origin || '',
          preferredAirport: data.preferred_airport || ''
        });
        setHasProfile(true);
      } else {
        // New user, set email from auth
        setUserProfile(prev => ({
          ...prev,
          email: user.email || ''
        }));
      }
    } catch (error) {
      console.error('Unexpected error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field, value) => {
    setUserProfile(prev => ({
      ...prev,
      [field]: value
    }));
    setSaveStatus(null);
  };

  const handleSaveProfile = async () => {
    if (!user) return;
    
    setIsSaving(true);
    setSaveStatus(null);

    try {
      const profileData = {
        user_id: user.id,
        name: userProfile.name,
        email: userProfile.email,
        date_of_birth: userProfile.dateOfBirth || null,
        city_of_origin: userProfile.cityOfOrigin,
        preferred_airport: userProfile.preferredAirport
      };

      const { error } = hasProfile 
        ? await supabase
            .from('user_profiles')
            .update(profileData)
            .eq('user_id', user.id)
        : await supabase
            .from('user_profiles')
            .insert([profileData]);

      if (error) throw error;

      setHasProfile(true);
      setSaveStatus('success');
      setTimeout(() => setSaveStatus(null), 3000);
    } catch (error) {
      console.error('Error saving profile:', error);
      setSaveStatus('error');
      setTimeout(() => setSaveStatus(null), 5000);
    } finally {
      setIsSaving(false);
    }
  };

  if (user === undefined) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/20 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-gray-400" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/20">
      <div className="relative h-64 overflow-hidden">
        <img 
          src="/Travel planning.png" 
          alt="Travel Planning" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{background: "linear-gradient(90deg, rgba(47, 62, 70, 0.8), rgba(53, 79, 82, 0.6))"}}>
          <div className="flex items-center justify-center h-full">
            <div className="text-center text-white px-6">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Planning Tools</h1>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl">
                Personalize your off-season travel experience with our comprehensive planning tools
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-xl shadow-lg border p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background: "linear-gradient(90deg, #2f3e46, #354f52)"}}>
              <User className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              {user ? 'Your Travel Profile' : 'Travel Profile'}
            </h2>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="w-6 h-6 animate-spin text-gray-400" />
              <span className="ml-2 text-gray-600">Loading your profile...</span>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Personal Information</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={userProfile.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
                    placeholder={user ? "Enter your full name" : "Your full name"}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={userProfile.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
                    placeholder={user ? "Enter your email" : "Your email address"}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    value={userProfile.dateOfBirth}
                    onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-700 border-b pb-2">Travel Preferences</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="w-4 h-4 inline mr-2" />
                    City of Origin *
                  </label>
                  <input
                    type="text"
                    value={userProfile.cityOfOrigin}
                    onChange={(e) => handleInputChange('cityOfOrigin', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
                    placeholder={user ? "e.g., New York, NY" : "Your city"}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Plane className="w-4 h-4 inline mr-2" />
                    Preferred Airport *
                  </label>
                  <AirportAutocomplete
                    value={userProfile.preferredAirport}
                    onChange={(value) => handleInputChange('preferredAirport', value)}
                    placeholder={user ? "Select or type your preferred airport" : "Select or type preferred airport"}
                  />
                </div>
              </div>
            </div>
          )}

          <div className="mt-8 pt-6 border-t">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {saveStatus === 'success' && (
                  <div className="flex items-center text-green-600">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    <span>Profile saved successfully!</span>
                  </div>
                )}
                {saveStatus === 'error' && (
                  <div className="flex items-center text-red-600">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    <span>Error saving profile. Please try again.</span>
                  </div>
                )}
              </div>
              {user ? (
                <button
                  onClick={handleSaveProfile}
                  disabled={isSaving || !userProfile.name || !userProfile.email || !userProfile.cityOfOrigin || !userProfile.preferredAirport}
                  className="px-6 py-3 text-white font-semibold rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  style={{background: "linear-gradient(90deg, #a68a64, #b99b74)"}}
                >
                  {isSaving ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      Save Profile
                    </>
                  )}
                </button>
              ) : (
                <button 
                  className="px-6 py-3 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center gap-2"
                  style={{background: "linear-gradient(90deg, #a68a64, #b99b74)"}}
                  onClick={() => {}}
                >
                  <User className="w-4 h-4" />
                  Create Profile
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg border p-6">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center" style={{background: "rgba(166, 138, 100, 0.1)"}}>
              <Plane className="w-6 h-6" style={{color: "#a68a64"}} />
            </div>
            <h3 className="text-lg font-semibold text-center mb-3">Flight Search</h3>
            <p className="text-gray-600 text-sm text-center mb-4">
              {user 
                ? "Find the best flight deals from your preferred airport with saved preferences."
                : "Search flights from any airport. Create a profile to save your preferred airport."
              }
            </p>
            <div className="text-center">
              <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">Coming Soon</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border p-6">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center" style={{background: "rgba(47, 62, 70, 0.1)"}}>
              <MapPin className="w-6 h-6" style={{color: "#2f3e46"}} />
            </div>
            <h3 className="text-lg font-semibold text-center mb-3">Activity Planning</h3>
            <p className="text-gray-600 text-sm text-center mb-4">
              {user 
                ? "Get personalized activity recommendations based on your saved preferences."
                : "Discover activities and tours. Sign in to get personalized recommendations."
              }
            </p>
            <div className="text-center">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Coming Soon</span>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border p-6">
            <div className="w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center" style={{background: "rgba(53, 79, 82, 0.1)"}}>
              <User className="w-6 h-6" style={{color: "#354f52"}} />
            </div>
            <h3 className="text-lg font-semibold text-center mb-3">Expert Guides</h3>
            <p className="text-gray-600 text-sm text-center mb-4">
              {user 
                ? "Connect with guides in your areas of interest with your profile preferences."
                : "Browse expert guides. Create a profile to get matched with relevant experts."
              }
            </p>
            <div className="text-center">
              <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Coming Soon</span>
            </div>
          </div>
        </div>

        {!user && (
          <div className="mt-8 bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-xl border p-8">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Create Your Travel Profile</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Sign in to unlock personalized features and save time planning your off-season adventures
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{background: "linear-gradient(90deg, #2f3e46, #354f52)"}}>
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Auto-filled Information</h4>
                  <p className="text-gray-600 text-sm">Your airport and location preferences automatically populate across the site</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{background: "linear-gradient(90deg, #2f3e46, #354f52)"}}>
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Personalized Recommendations</h4>
                  <p className="text-gray-600 text-sm">Get destination and activity suggestions tailored to your preferences</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{background: "linear-gradient(90deg, #2f3e46, #354f52)"}}>
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Saved Search Preferences</h4>
                  <p className="text-gray-600 text-sm">Your travel dates and preferences are remembered across sessions</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{background: "linear-gradient(90deg, #2f3e46, #354f52)"}}>
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Premium Features</h4>
                  <p className="text-gray-600 text-sm">Access to advanced booking features, user itineraries and photos, and more.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}