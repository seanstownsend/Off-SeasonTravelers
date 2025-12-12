import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils.js";
import { Trees, MapPin, Search, Calendar, Mountain, Tent } from "lucide-react";
import { nationalParksService } from "../lib/database.js";

export default function NationalParksMapPage() {
  const [nationalParks, setNationalParks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load national parks on component mount
  useEffect(() => {
    loadNationalParks();
  }, []);

  const loadNationalParks = async () => {
    try {
      setLoading(true);
      console.log('🔄 Testing database connection...');
      
      // Test Supabase connection first
      console.log('📡 Calling nationalParksService.getAll()...');
      const result = await nationalParksService.getAll();
      console.log('📊 Raw result from database service:', result);
      
      const { data, error } = result;
      
      if (error) {
        console.error('❌ Database returned error:', error);
        setError(`Database error: ${error.message || JSON.stringify(error)}`);
        setNationalParks([]);
      } else if (!data) {
        console.log('⚠️ No data returned from database');
        setError('Database returned null/undefined data');
        setNationalParks([]);
      } else if (data.length === 0) {
        console.log('📭 Database returned empty array');
        setError('Database table appears to be empty (0 records)');
        setNationalParks([]);
      } else {
        console.log('✅ Database data loaded successfully:', data);
        console.log(`📈 Found ${data.length} parks in database`);
        setNationalParks(data);
        setError(null);
      }
    } catch (err) {
      console.error('💥 Exception during database call:', err);
      setError(`Exception: ${err.message} | Stack: ${err.stack}`);
      setNationalParks([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-green-200/50 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Trees className="w-8 h-8 text-green-600" />
              <div>
                <h1 className="text-3xl font-bold text-slate-900">National Parks Explorer</h1>
                <p className="text-slate-600">Database Connection Test</p>
              </div>
            </div>
            
            <Link 
              to={createPageUrl("MapExplore")}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
            >
              <MapPin className="w-4 h-4" />
              Global Map
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-white rounded-lg p-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Database Connection Status</h2>
          
          {loading && (
            <div className="text-blue-600 mb-4">Loading parks data...</div>
          )}
          
          {error && (
            <div className="text-red-600 mb-4 p-4 bg-red-50 rounded">
              Error: {error}
            </div>
          )}
          
          {!loading && !error && (
            <div className="text-green-600 mb-4 p-4 bg-green-50 rounded">
              ✅ Successfully loaded {nationalParks.length} parks from database
            </div>
          )}
          
          {nationalParks.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Parks in Database:</h3>
              <div className="space-y-2">
                {nationalParks.map((park, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded">
                    <div className="font-medium">{park.Name}</div>
                    <div className="text-sm text-gray-600">
                      State: {park.State} | 
                      Lat: {park.Latitude} | 
                      Lng: {park.Longitude}
                    </div>
                    {park.Description && (
                      <div className="text-sm text-gray-500 mt-1">{park.Description}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}