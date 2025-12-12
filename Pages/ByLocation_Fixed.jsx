import React, { useState, useEffect } from "react";
import { MapPin, Thermometer, ArrowRight, Trees, Mountain, Filter, Search, Star, Users, Calendar } from "lucide-react";
import { nationalParksService } from "../lib/database.js";

const ParkRegions = {
  SOUTHEAST: { name: "Southeast", icon: "🌴", color: "from-green-500 to-emerald-500" },
  NORTHEAST: { name: "Northeast", icon: "🍁", color: "from-orange-500 to-red-500" },
  SOUTHWEST: { name: "Southwest", icon: "🏜️", color: "from-yellow-500 to-orange-400" },
  NORTHWEST: { name: "Northwest", icon: "🏔️", color: "from-blue-500 to-purple-500" }
};



export default function Parks() {
  const [parks, setParks] = useState([]);
  const [filteredParks, setFilteredParks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    loadParks();
  }, []);

  useEffect(() => {
    filterAndSortParks();
  }, [parks, selectedCategory, searchQuery, sortBy]);

  const loadParks = async () => {
    try {
      setLoading(true);
      const result = await nationalParksService.getAll();
      
      if (result.data) {
        // Process and categorize parks
        const processedParks = result.data.map(park => ({
          ...park,
          region: determineRegion(park),
          crowdLevel: determineCrowdLevel(park),
          bestSeason: determineBestSeason(park),
          templateUrl: getTemplateUrl(park.name)
        }));
        
        setParks(processedParks);
      }
    } catch (error) {
      console.error('Error loading parks:', error);
    } finally {
      setLoading(false);
    }
  };



  const determineCrowdLevel = (park) => {
    // This could be enhanced with actual visitation data
    const name = park.name?.toLowerCase() || "";
    
    // High crowd parks
    if (name.includes("yellowstone") || name.includes("grand canyon") || 
        name.includes("yosemite") || name.includes("zion") || 
        name.includes("great smoky")) return "High Crowds";
    
    // Low crowd parks
    if (name.includes("gates of the arctic") || name.includes("kobuk valley") || 
        name.includes("lake clark") || name.includes("north cascades") ||
        name.includes("isle royale")) return "Low Crowds";
    
    return "Medium Crowds";
  };

  const determineBestSeason = (park) => {
    const state = park.state?.toLowerCase() || "";
    const name = park.name?.toLowerCase() || "";
    
    if (state?.includes("florida") || name.includes("death valley") || 
        name.includes("joshua tree")) return "Winter";
    if (state?.includes("alaska") || name.includes("glacier")) return "Summer";
    if (name.includes("great smoky") || name.includes("shenandoah")) return "Fall";
    
    return "Spring";
  };

  const determineRegion = (park) => {
    const state = park.state?.toLowerCase() || "";
    
    // Northwest (including Alaska)
    if (state?.includes("alaska") || state?.includes("washington") || 
        state?.includes("oregon") || state?.includes("idaho") ||
        state?.includes("montana") || state?.includes("wyoming") ||
        state?.includes("north dakota") || state?.includes("south dakota") ||
        state?.includes("minnesota") || state?.includes("wisconsin") ||
        state?.includes("michigan")) return "NORTHWEST";
    
    // Southwest (including Pacific Islands)
    if (state?.includes("california") || state?.includes("nevada") ||
        state?.includes("utah") || state?.includes("arizona") ||
        state?.includes("colorado") || state?.includes("new mexico") ||
        state?.includes("texas") || state?.includes("oklahoma") ||
        state?.includes("kansas") || state?.includes("nebraska") ||
        state?.includes("hawaii") || state?.includes("american samoa") ||
        state?.includes("virgin islands")) return "SOUTHWEST";
    
    // Northeast
    if (state?.includes("maine") || state?.includes("new hampshire") ||
        state?.includes("vermont") || state?.includes("massachusetts") ||
        state?.includes("rhode island") || state?.includes("connecticut") ||
        state?.includes("new york") || state?.includes("new jersey") ||
        state?.includes("pennsylvania") || state?.includes("ohio") ||
        state?.includes("indiana") || state?.includes("illinois") ||
        state?.includes("iowa") || state?.includes("missouri")) return "NORTHEAST";
    
    // Southeast (default for remaining states)
    return "SOUTHEAST";
  };

  const getTemplateUrl = (parkName) => {
    // This would match your existing park template routing
    const slug = parkName?.toLowerCase()
      .replace(/national park.*$/i, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    return `/${slug}-react`;
  };

  const filterAndSortParks = () => {
    let filtered = [...parks];
    
    // Region filter
    if (selectedCategory !== "ALL") {
      filtered = filtered.filter(park => park.region === selectedCategory);
    }
    
    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(park => 
        park.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        park.state?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        park.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Sort
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return (a.name || "").localeCompare(b.name || "");
        case "state":
          return (a.state || "").localeCompare(b.state || "");
        case "established":
          return new Date(a.established || 0) - new Date(b.established || 0);
        default:
          return 0;
      }
    });
    
    setFilteredParks(filtered);
  };

  const handleParkClick = (park) => {
    if (park.templateUrl) {
      window.location.href = park.templateUrl;
    }
  };

  const getCrowdLevelColor = (level) => {
    switch (level) {
      case 'Low Crowds': return 'bg-green-100 text-green-800';
      case 'Medium Crowds': return 'bg-yellow-100 text-yellow-800';
      case 'High Crowds': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSeasonColor = (season) => {
    switch (season) {
      case 'Spring': return 'bg-green-100 text-green-800';
      case 'Summer': return 'bg-yellow-100 text-yellow-800';
      case 'Fall': return 'bg-orange-100 text-orange-800';
      case 'Winter': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/20 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mb-4"></div>
          <p className="text-gray-600">Loading all 62 National Parks...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/20 py-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🏞️ Explore America's National Parks
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover your next adventure among all 62 National Parks. Compare parks, find hidden gems, and plan your perfect off-season escape.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search parks by name, state, or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
            >
              <option value="name">Sort by Name</option>
              <option value="state">Sort by State</option>
              <option value="established">Sort by Established</option>
            </select>
          </div>
        </div>

        {/* Region Filter */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Browse by Region
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            <button
              onClick={() => setSelectedCategory("ALL")}
              className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                selectedCategory === "ALL"
                  ? "bg-gradient-to-r from-gray-600 to-gray-700 text-white border-transparent shadow-lg"
                  : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:shadow-md"
              }`}
            >
              <div className="text-2xl mb-2">🇺🇸</div>
              <div className="font-semibold text-sm">All Parks</div>
              <div className="text-xs opacity-80">{parks.length} parks</div>
            </button>
            
            {Object.entries(ParkRegions).map(([key, region]) => {
              const count = parks.filter(park => park.region === key).length;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                    selectedCategory === key
                      ? `bg-gradient-to-r ${region.color} text-white border-transparent shadow-lg`
                      : "bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:shadow-md"
                  }`}
                >
                  <div className="text-2xl mb-2">{region.icon}</div>
                  <div className="font-semibold text-sm">{region.name}</div>
                  <div className="text-xs opacity-80">{count} parks</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Header */}
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold text-gray-900">
            {selectedCategory === "ALL" 
              ? `All ${filteredParks.length} National Parks`
              : `${ParkRegions[selectedCategory]?.name} (${filteredParks.length} parks)`
            }
          </h3>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Clear search
            </button>
          )}
        </div>

        {/* Parks Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredParks.map((park) => (
            <div
              key={park.id}
              onClick={() => handleParkClick(park)}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-green-600 transition-colors mb-1">
                      {park.name}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{park.state}</span>
                    </div>
                  </div>
                  <div className="text-2xl">
                    {ParkRegions[park.region]?.icon || "🏞️"}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                    {ParkRegions[park.region]?.name || park.region}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCrowdLevelColor(park.crowdLevel)}`}>
                    {park.crowdLevel}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getSeasonColor(park.bestSeason)}`}>
                    Best: {park.bestSeason}
                  </span>
                </div>

                {/* Description */}
                {park.description && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {park.description}
                  </p>
                )}

                {/* Established Date */}
                {park.established && (
                  <div className="flex items-center text-gray-500 text-xs mb-4">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>Established {park.established}</span>
                  </div>
                )}

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center font-medium">
                  <Trees className="w-4 h-4 mr-2" />
                  Explore Park
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredParks.length === 0 && !loading && (
          <div className="text-center py-12">
            <Mountain className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No parks found
            </h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search or selecting a different region.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("ALL");
              }}
              className="text-green-600 hover:text-green-700 font-medium"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Not sure which park to visit? Check out our month-by-month guide to find the perfect park for your travel dates.
            </p>
            <a
              href="/by-month"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Browse Parks by Month
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}