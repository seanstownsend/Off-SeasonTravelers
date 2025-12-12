import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createPageUrl } from "../utils.js";
import { Globe, Calendar, MapPin, Search, Thermometer, Users, Camera, Navigation, Compass, TrendingDown, Sun, Cloud, Snowflake, Trees } from "lucide-react";
import AuthWrapper from "../Components/auth/AuthWrapper.jsx";
import InteractiveMap from "../Components/ui/InteractiveMap.jsx";
import SimpleMap from "../Components/ui/SimpleMap.jsx";
import NationalParksMap from "../Components/ui/NationalParksMap.jsx";
import { destinationService, nationalParksService } from "../lib/database.js";

const months = [
  "january", "february", "march", "april", "may", "june", 
  "july", "august", "september", "october", "november", "december"
];

const regionData = {
  north_america: {
    name: "North America",
    coords: [45, -100],
    peak: ["june", "july", "august"],
    shoulder: ["may", "september", "october"],
    offSeason: ["november", "december", "january", "february", "march", "april"],
    color: "from-blue-600 to-blue-700",
    description: "Fall colors and winter sports create magical off-season experiences."
  },
  south_america: {
    name: "South America", 
    coords: [-15, -60],
    peak: ["december", "january", "february"],
    shoulder: ["november", "march"],
    offSeason: ["april", "may", "june", "july", "august", "september", "october"],
    color: "from-teal-500 to-teal-600",
    description: "Experience reversed seasons with unique wildlife and fewer crowds."
  },
  europe: {
    name: "Europe",
    coords: [50, 10],
    peak: ["june", "july", "august"],
    shoulder: ["may", "september", "october"],
    offSeason: ["november", "december", "january", "february", "march", "april"],
    color: "from-blue-500 to-teal-500",
    description: "Winter markets, spring blooms, and authentic local culture await."
  },
  asia: {
    name: "Asia",
    coords: [30, 100],
    peak: ["october", "november", "december", "january", "february"],
    shoulder: ["march", "september"],
    offSeason: ["april", "may", "june", "july", "august"],
    color: "from-teal-600 to-teal-700",
    description: "Monsoon seasons offer lush landscapes and cultural festivals."
  },
  africa: {
    name: "Africa",
    coords: [0, 20],
    peak: ["june", "july", "august", "september", "october"],
    shoulder: ["may", "november"],
    offSeason: ["december", "january", "february", "march", "april"],
    color: "from-blue-700 to-blue-800",
    description: "Wet seasons bring vibrant wildlife and dramatic landscapes."
  },
  oceania: {
    name: "Oceania",
    coords: [-25, 140],
    peak: ["december", "january", "february"],
    shoulder: ["november", "march", "april"],
    offSeason: ["may", "june", "july", "august", "september", "october"],
    color: "from-teal-400 to-teal-500",
    description: "Winter brings whale watching and cozy indoor cultural experiences."
  }
};

const sampleDestinations = [
  { name: "Tokyo, Japan", region: "asia", coords: [35.6762, 139.6503], bestOffSeason: ["march", "april", "november"] },
  { name: "Paris, France", region: "europe", coords: [48.8566, 2.3522], bestOffSeason: ["april", "october", "november"] },
  { name: "New York, USA", region: "north_america", coords: [40.7128, -74.0060], bestOffSeason: ["april", "may", "september", "october"] },
  { name: "Buenos Aires, Argentina", region: "south_america", coords: [-34.6037, -58.3816], bestOffSeason: ["march", "april", "september", "october"] },
  { name: "Cape Town, South Africa", region: "africa", coords: [-33.9249, 18.4241], bestOffSeason: ["april", "may", "september", "october"] },
  { name: "Sydney, Australia", region: "oceania", coords: [-33.8688, 151.2093], bestOffSeason: ["march", "april", "may", "september"] }
];

export default function MapExplore() {
  const [selectedMonth, setSelectedMonth] = useState("april");
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [destinations, setDestinations] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load all destinations on component mount
  useEffect(() => {
    loadDestinations();
  }, []);

  // Filter destinations when month changes
  useEffect(() => {
    filterDestinations();
  }, [selectedMonth, destinations]);

  const loadDestinations = async () => {
    try {
      setLoading(true);
      console.log('🌍 MapExplore: Loading destinations from database...');
      const { data, error } = await destinationService.getAll();
      
      console.log('🌍 MapExplore: Database response:', { data, error, dataLength: data?.length });
      
      if (error) {
        console.error('🌍 MapExplore: Database error, using sample data:', error);
        setDestinations(sampleDestinations);
      } else if (!data || data.length === 0) {
        console.log('🌍 MapExplore: No database data found, using sample data');
        setDestinations(sampleDestinations);
      } else {
        console.log(`🌍 MapExplore: Successfully loaded ${data.length} destinations from database`);
        
        // Log first destination to check structure
        if (data[0]) {
          console.log('🌍 MapExplore: First destination columns:', Object.keys(data[0]));
          console.log('🌍 MapExplore: First destination data:', data[0]);
        }
        
        // Convert database format to component format - be flexible with column names
        const formattedDestinations = data.map((dest, index) => {
          // Helper functions to handle different column name cases
          const getId = () => dest.ID || dest.id || dest.Id;
          const getName = () => dest.Name || dest.name || dest.destination_name;
          const getLatitude = () => dest.Latitude || dest.latitude || dest.lat;
          const getLongitude = () => dest.longitude || dest.Longitude || dest.lng || dest.long;
          const getContinent = () => dest.Continent || dest.continent || dest.Continent_1;
          const getDescription = () => dest.Description || dest.description;
          const getOffSeasonMonths = () => dest["Off-Season Months"] || dest.off_season_months || dest.offseason_months;
          
          const lat = parseFloat(getLatitude()) || 0;
          const lng = parseFloat(getLongitude()) || 0;
          
          console.log(`🗺️ Destination ${index + 1}: ${getName()}`);
          console.log(`   Raw lat: "${getLatitude()}" -> Parsed: ${lat}`);
          console.log(`   Raw lng: "${getLongitude()}" -> Parsed: ${lng}`);
          console.log(`   Coords valid: ${lat !== 0 && lng !== 0}`);
          
          return {
            id: getId(),
            name: getName(),
            region: getContinent()?.toLowerCase().replace(' ', '_') || 'unknown',
            coords: [lat, lng],
            bestOffSeason: getOffSeasonMonths() ? getOffSeasonMonths().split(',').map(m => m.trim().toLowerCase()) : [],
            description: getDescription() || '',
            category: dest.category || 'general',
            rating: dest["Annual Visitors"] || dest.annual_visitors || 0,
            averageTemp: 20, // Default value since not in database
            averageSavings: 40 // Default value since not in database
          };
        });
        
        console.log('🌍 MapExplore: Formatted destinations for map:', formattedDestinations.slice(0, 2));
        console.log('🌍 MapExplore: Using real database data!');
        setDestinations(formattedDestinations);
      }
    } catch (err) {
      // Fallback to sample data if there's an error
      console.error('🌍 MapExplore: Exception loading from database, using sample data:', err.message);
      setDestinations(sampleDestinations);
    } finally {
      setLoading(false);
    }
  };

  const filterDestinations = () => {
    if (!selectedMonth || destinations.length === 0) {
      setFilteredDestinations(destinations);
      return;
    }
    
    const filtered = destinations.filter(dest => 
      dest.bestOffSeason && dest.bestOffSeason.includes(selectedMonth)
    );
    setFilteredDestinations(filtered);
  };

  const getSeasonType = (region, month) => {
    const data = regionData[region];
    if (data.peak.includes(month)) return { type: 'peak', color: 'bg-red-500' };
    if (data.shoulder.includes(month)) return { type: 'shoulder', color: 'bg-yellow-500' };
    return { type: 'off-season', color: 'bg-green-500' };
  };

  return (
    <AuthWrapper>
      <div className="p-6 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Global Season Map</h1>
              <p className="text-slate-600">Explore world destinations by season and discover off-season gems</p>
            </div>
          </div>
        </div>

        {/* Enhanced Controls */}
        <div className="mb-8 bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                Select Travel Month
              </h2>
              <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-2">
                {months.map((month) => (
                  <button
                    key={month}
                    onClick={() => setSelectedMonth(month)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 capitalize ${
                      selectedMonth === month
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {month.slice(0, 3)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive World Map */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <Compass className="w-5 h-5 text-blue-600" />
            Global Seasons for {selectedMonth.charAt(0).toUpperCase() + selectedMonth.slice(1)}
          </h2>
          
          {/* Interactive Leaflet Map */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            {loading ? (
              <div className="h-[500px] flex items-center justify-center bg-gray-100">
                <div className="text-gray-600">Loading map...</div>
              </div>
            ) : (
              <InteractiveMap
                selectedMonth={selectedMonth}
                destinations={destinations}
                regionData={regionData}
                filteredDestinations={filteredDestinations}
                onDestinationClick={(destination) => {
                  // Handle destination clicks
                  console.log('Destination clicked:', destination);
                }}
              />
            )}
          </div>

          {/* Enhanced Legend */}
          <div className="mt-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-slate-200/50">
            <h4 className="font-semibold text-slate-900 mb-3">Season Legend</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Snowflake className="w-5 h-5 text-green-600" />
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div>
                  <div className="font-medium text-green-800">Off-Season</div>
                  <div className="text-sm text-green-600">Save 30-60% • Fewer crowds</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Cloud className="w-5 h-5 text-yellow-600" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                </div>
                <div>
                  <div className="font-medium text-yellow-800">Shoulder Season</div>
                  <div className="text-sm text-yellow-600">Good value • Moderate crowds</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                <div className="flex items-center gap-2">
                  <Sun className="w-5 h-5 text-red-600" />
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
                <div>
                  <div className="font-medium text-red-800">Peak Season</div>
                  <div className="text-sm text-red-600">Highest prices • Most crowded</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Region Details */}
        {selectedRegion && (
          <div className="mb-8">
            <div className={`bg-gradient-to-r ${regionData[selectedRegion].color} p-6 rounded-xl text-white shadow-lg`}>
              <h3 className="text-xl font-bold mb-2">{regionData[selectedRegion].name}</h3>
              <p className="text-white/90 mb-4">{regionData[selectedRegion].description}</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="font-semibold mb-1">Peak Season:</div>
                  <div className="text-white/80 capitalize">
                    {regionData[selectedRegion].peak.join(", ")}
                  </div>
                </div>
                <div>
                  <div className="font-semibold mb-1">Shoulder Season:</div>
                  <div className="text-white/80 capitalize">
                    {regionData[selectedRegion].shoulder.join(", ")}
                  </div>
                </div>
                <div>
                  <div className="font-semibold mb-1">Off-Season:</div>
                  <div className="text-white/80 capitalize">
                    {regionData[selectedRegion].offSeason.slice(0, 4).join(", ")}
                    {regionData[selectedRegion].offSeason.length > 4 && "..."}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Destinations for Selected Month */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Best Off-Season Destinations for {selectedMonth.charAt(0).toUpperCase() + selectedMonth.slice(1)}
            <span className="text-sm font-normal text-slate-500 ml-2">
              ({filteredDestinations.length} destinations)
            </span>
          </h2>
          
          {filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDestinations.map((destination, index) => {
                const region = regionData[destination.region];
                return (
                  <div key={index} className="bg-white/90 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-200/50 hover:shadow-xl transition-all duration-300 group hover:scale-105">
                    {/* Destination Header */}
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-bold text-lg">{destination.name}</h3>
                            <p className="text-white/80 text-sm">{region.name}</p>
                          </div>
                          <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                            Off-Season
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Calendar className="w-4 h-4 text-blue-500" />
                          <span className="font-medium">Best months:</span>
                          <span className="capitalize">{destination.bestOffSeason.slice(0, 3).join(", ")}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <MapPin className="w-4 h-4 text-red-500" />
                          <span className="font-medium">Coordinates:</span>
                          <span>{destination.coords[0].toFixed(1)}°, {destination.coords[1].toFixed(1)}°</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-3 mb-6">
                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-3 rounded-xl text-center">
                          <div className="text-xs text-green-600 font-semibold mb-1">Savings</div>
                          <div className="text-lg font-bold text-green-700">40-60%</div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-3 rounded-xl text-center">
                          <div className="text-xs text-blue-600 font-semibold mb-1">Crowds</div>
                          <div className="text-lg font-bold text-blue-700">Low</div>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-3 rounded-xl text-center">
                          <div className="text-xs text-purple-600 font-semibold mb-1">Weather</div>
                          <div className="text-lg font-bold text-purple-700">Mild</div>
                        </div>
                      </div>

                      <Link 
                        to={createPageUrl("ByLocation")}
                        className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 text-center group shadow-md hover:shadow-lg"
                      >
                        <span className="flex items-center justify-center gap-2">
                          <Globe className="w-4 h-4" />
                          Explore {destination.name.split(',')[0]}
                          <Navigation className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <Globe className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">No destinations found</h3>
              <p className="text-slate-600">Try selecting a different month to see available off-season destinations.</p>
            </div>
          )}
        </div>

        {/* Global Travel Tips */}
        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50 mb-8">
          <h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
            <Camera className="w-5 h-5 text-blue-600" />
            Global Off-Season Travel Tips
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Thermometer className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Check Climate</h4>
              <p className="text-slate-600 text-sm">Research weather patterns and pack appropriately for off-season conditions.</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Local Culture</h4>
              <p className="text-slate-600 text-sm">Experience authentic local life when tourist crowds are minimal.</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Camera className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Photography</h4>
              <p className="text-slate-600 text-sm">Capture unique seasonal beauty without crowds in your shots.</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-orange-600 font-bold text-lg">💰</span>
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Budget Smart</h4>
              <p className="text-slate-600 text-sm">Take advantage of off-season rates for flights, hotels, and activities.</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-6 text-white">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-2">Ready to Explore?</h3>
            <p className="text-blue-100">Find your perfect off-season destination and start planning your adventure</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link 
              to={createPageUrl("Home")}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-4 text-center transition-all duration-200 hover:scale-105"
            >
              <Globe className="w-6 h-6 mx-auto mb-2" />
              <div className="font-semibold">Browse All Destinations</div>
            </Link>
            <Link 
              to={createPageUrl("ByMonth")}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-4 text-center transition-all duration-200 hover:scale-105"
            >
              <Calendar className="w-6 h-6 mx-auto mb-2" />
              <div className="font-semibold">Plan by Month</div>
            </Link>
            <Link 
              to={createPageUrl("ByLocation")}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-4 text-center transition-all duration-200 hover:scale-105"
            >
              <MapPin className="w-6 h-6 mx-auto mb-2" />
              <div className="font-semibold">Explore by Region</div>
            </Link>
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
}