import React, { useState, useRef, useCallback } from "react";
import { Calendar, Snowflake, Sun, Leaf, Cloud, MapPin, TrendingUp, Thermometer, Star } from "lucide-react";

// Enhanced month data with destination counts and weather info
const months = [
  { 
    name: "january", 
    label: "January", 
    icon: Snowflake, 
    color: "from-blue-600 to-teal-600",
    destinationCount: 12,
    avgTemp: "8°C",
    avgSavings: "45%",
    topDestinations: ["Kyoto, Japan", "Dubai, UAE", "Bali, Indonesia"],
    season: "Winter"
  },
  { 
    name: "february", 
    label: "February", 
    icon: Snowflake, 
    color: "from-blue-500 to-blue-600",
    destinationCount: 15,
    avgTemp: "10°C", 
    avgSavings: "50%",
    topDestinations: ["Barcelona, Spain", "Santorini, Greece", "Kyoto, Japan"],
    season: "Winter"
  },
  { 
    name: "march", 
    label: "March", 
    icon: Leaf, 
    color: "from-teal-500 to-emerald-500",
    destinationCount: 8,
    avgTemp: "15°C",
    avgSavings: "35%",
    topDestinations: ["Morocco", "Egypt", "Nepal"],
    season: "Spring"
  },
  { 
    name: "april", 
    label: "April", 
    icon: Leaf, 
    color: "from-teal-400 to-green-500",
    destinationCount: 6,
    avgTemp: "18°C",
    avgSavings: "30%",
    topDestinations: ["Patagonia", "Turkey", "India"],
    season: "Spring"
  },
  { 
    name: "may", 
    label: "May", 
    icon: Sun, 
    color: "from-amber-400 to-orange-500",
    destinationCount: 10,
    avgTemp: "25°C",
    avgSavings: "40%",
    topDestinations: ["Dubai, UAE", "Maldives", "Southeast Asia"],
    season: "Spring"
  },
  { 
    name: "june", 
    label: "June", 
    icon: Sun, 
    color: "from-orange-500 to-red-500",
    destinationCount: 14,
    avgTemp: "28°C",
    avgSavings: "45%",
    topDestinations: ["Dubai, UAE", "Caribbean", "India"],
    season: "Summer"
  },
  { 
    name: "july", 
    label: "July", 
    icon: Sun, 
    color: "from-red-500 to-orange-600",
    destinationCount: 16,
    avgTemp: "30°C",
    avgSavings: "50%",
    topDestinations: ["Dubai, UAE", "Singapore", "Malaysia"],
    season: "Summer"
  },
  { 
    name: "august", 
    label: "August", 
    icon: Sun, 
    color: "from-amber-500 to-orange-500",
    destinationCount: 18,
    avgTemp: "32°C",
    avgSavings: "55%",
    topDestinations: ["Middle East", "Patagonia", "Southeast Asia"],
    season: "Summer"
  },
  { 
    name: "september", 
    label: "September", 
    icon: Leaf, 
    color: "from-orange-400 to-amber-500",
    destinationCount: 11,
    avgTemp: "24°C",
    avgSavings: "35%",
    topDestinations: ["Dubai, UAE", "Jordan", "Turkey"],
    season: "Fall"
  },
  { 
    name: "october", 
    label: "October", 
    icon: Leaf, 
    color: "from-amber-600 to-orange-600",
    destinationCount: 9,
    avgTemp: "20°C",
    avgSavings: "30%",
    topDestinations: ["India", "Nepal", "Myanmar"],
    season: "Fall"
  },
  { 
    name: "november", 
    label: "November", 
    icon: Cloud, 
    color: "from-slate-500 to-blue-600",
    destinationCount: 13,
    avgTemp: "12°C",
    avgSavings: "40%",
    topDestinations: ["Barcelona, Spain", "Kyoto, Japan", "Santorini, Greece"],
    season: "Fall"
  },
  { 
    name: "december", 
    label: "December", 
    icon: Snowflake, 
    color: "from-blue-600 to-blue-700",
    destinationCount: 17,
    avgTemp: "6°C",
    avgSavings: "50%",
    topDestinations: ["Kyoto, Japan", "Bali, Indonesia", "Dubai, UAE"],
    season: "Winter"
  }
];

export default function MonthSelector({ selectedMonth, setSelectedMonth, currentMonth }) {
  const [hoveredMonth, setHoveredMonth] = useState(null);
  const hoverTimeoutRef = useRef(null);
  
  // Debounced hover handlers to prevent flickering
  const handleMouseEnter = useCallback((monthName) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    
    // Small delay to prevent rapid state changes
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredMonth(monthName);
    }, 50);
  }, []);
  
  const handleMouseLeave = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    
    // Delay hiding to allow for micro-movements
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredMonth(null);
    }, 100);
  }, []);
  
  // Clean up timeout on unmount
  React.useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);
  
  const selectedMonthData = selectedMonth ? months.find(m => m.name === selectedMonth) : null;

  return (
    <div className="text-center space-y-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          When Do You Want to Travel?
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          Select a month to discover destinations at their off-season best
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
        {months.map((month) => {
          const Icon = month.icon;
          const isSelected = selectedMonth === month.name;
          const isCurrent = currentMonth === month.name;
          
          return (
            <div key={month.name} className="relative">
              <button
                onClick={() => setSelectedMonth(isSelected ? "" : month.name)}
                onMouseEnter={() => handleMouseEnter(month.name)}
                onMouseLeave={handleMouseLeave}
                className={`relative w-full h-32 flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 rounded-xl border-2 ${
                  isSelected 
                    ? `bg-gradient-to-br ${month.color} text-white border-0 shadow-xl scale-105` 
                    : "bg-white/90 backdrop-blur-sm border-slate-200/60 text-slate-700 hover:border-slate-300 hover:bg-white"
                }`}
              >
                {isCurrent && (
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full border-2 border-white z-10">
                    Now
                  </span>
                )}
                
                <Icon className={`w-7 h-7 transition-all duration-300 ${
                  isSelected ? 'text-white' : 'text-slate-500 hover:text-slate-700'
                }`} />
                <span className={`text-sm font-semibold transition-all duration-300 ${
                  isSelected ? 'text-white' : 'text-slate-700'
                }`}>
                  {month.label}
                </span>
                
                {/* Season indicator */}
                <span className={`text-xs transition-all duration-300 ${
                  isSelected ? 'text-white/80' : 'text-slate-500'
                }`}>
                  {month.season}
                </span>
              </button>
                
              {/* JavaScript hover tooltip positioned relative to button - no layout shift */}
              {hoveredMonth === month.name && !isSelected && (
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-4 py-3 rounded-lg text-sm whitespace-nowrap z-50 pointer-events-none shadow-xl border border-slate-700">
                  <div className="text-center">
                    <div className="font-semibold text-white">{month.destinationCount} destinations</div>
                    <div className="text-slate-300">{month.avgTemp} • Save {month.avgSavings}</div>
                    <div className="text-xs text-slate-400 mt-1">
                      {month.topDestinations.slice(0, 2).join(", ")}
                    </div>
                  </div>
                  {/* Tooltip arrow */}
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Enhanced selected month info */}
      {selectedMonthData && (
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-6 max-w-4xl mx-auto border border-blue-100">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calendar className="w-6 h-6 text-blue-600" />
            <h3 className="text-2xl font-bold text-slate-900">
              {selectedMonthData.label} Travel Guide
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-slate-900">Destinations</span>
              </div>
              <p className="text-2xl font-bold text-blue-600">{selectedMonthData.destinationCount}</p>
              <p className="text-sm text-slate-600">Available places</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Thermometer className="w-5 h-5 text-orange-600" />
                <span className="font-semibold text-slate-900">Weather</span>
              </div>
              <p className="text-2xl font-bold text-orange-600">{selectedMonthData.avgTemp}</p>
              <p className="text-sm text-slate-600">Average temperature</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-slate-900">Savings</span>
              </div>
              <p className="text-2xl font-bold text-green-600">{selectedMonthData.avgSavings}</p>
              <p className="text-sm text-slate-600">Average discount</p>
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-center gap-2 mb-3">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold text-slate-900">Top Destinations</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {selectedMonthData.topDestinations.map((destination, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-white rounded-full text-sm text-slate-700 border border-slate-200 shadow-sm"
                >
                  {destination}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}


    </div>
  );
}