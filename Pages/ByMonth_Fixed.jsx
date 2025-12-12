import React, { useState } from "react";
import { Calendar, MapPin, Thermometer, ArrowRight, Trees, Mountain } from "lucide-react";

const months = [
  { name: "january", label: "January", season: "Winter", color: "from-blue-500 to-cyan-400", emoji: "❄️" },
  { name: "february", label: "February", season: "Winter", color: "from-indigo-500 to-blue-400", emoji: "❄️" },
  { name: "march", label: "March", season: "Spring", color: "from-green-500 to-emerald-400", emoji: "🌸" },
  { name: "april", label: "April", season: "Spring", color: "from-lime-500 to-green-400", emoji: "🌸" },
  { name: "may", label: "May", season: "Spring", color: "from-emerald-500 to-teal-400", emoji: "🌸" },
  { name: "june", label: "June", season: "Summer", color: "from-yellow-500 to-orange-400", emoji: "☀️" },
  { name: "july", label: "July", season: "Summer", color: "from-orange-500 to-red-400", emoji: "☀️" },
  { name: "august", label: "August", season: "Summer", color: "from-red-500 to-pink-400", emoji: "☀️" },
  { name: "september", label: "September", season: "Fall", color: "from-amber-500 to-orange-400", emoji: "🍂" },
  { name: "october", label: "October", season: "Fall", color: "from-orange-500 to-yellow-400", emoji: "🍂" },
  { name: "november", label: "November", season: "Fall", color: "from-yellow-600 to-amber-400", emoji: "🍂" },
  { name: "december", label: "December", season: "Winter", color: "from-slate-500 to-gray-400", emoji: "❄️" }
];

const nationalParksData = {
  january: [
    {
      id: 1,
      name: "Death Valley National Park",
      state: "California/Nevada",
      temperature: "65°F / 18°C",
      description: "Perfect weather for desert hiking and wildflower blooms. Escape winter crowds with mild temperatures.",
      highlights: ["Desert wildflowers", "Mild temperatures", "Clear skies", "Excellent stargazing"],
      crowdLevel: "Low",
      templateUrl: "/death-valley-react"
    },
    {
      id: 2,
      name: "Everglades National Park",
      state: "Florida",
      temperature: "75°F / 24°C",
      description: "Dry season brings wildlife to water sources. Best time for alligator and bird watching.",
      highlights: ["Wildlife viewing", "Dry weather", "Comfortable temps", "Manatee season"],
      crowdLevel: "Low",
      templateUrl: "/everglades-react"
    }
  ],
  february: [
    {
      id: 3,
      name: "Joshua Tree National Park",
      state: "California", 
      temperature: "70°F / 21°C",
      description: "Ideal weather for rock climbing and desert hiking. Comfortable days and cool nights.",
      highlights: ["Rock climbing", "Desert blooms", "Mild weather", "Dark skies"],
      crowdLevel: "Low",
      templateUrl: "/joshua-tree-react"
    },
    {
      id: 4,
      name: "Big Bend National Park",
      state: "Texas",
      temperature: "68°F / 20°C",
      description: "Perfect temperatures for hiking and river activities. Wildflowers begin to bloom.",
      highlights: ["River rafting", "Desert hiking", "Wildflowers", "Mild temperatures"],
      crowdLevel: "Low", 
      templateUrl: "/big-bend-react"
    }
  ],
  march: [
    {
      id: 5,
      name: "Death Valley National Park",
      state: "California/Nevada",
      temperature: "75°F / 24°C",
      description: "Peak wildflower season with superbloom potential. Still comfortable for hiking.",
      highlights: ["Wildflower superbloom", "Perfect temps", "Long days", "Photography"],
      crowdLevel: "Medium",
      templateUrl: "/death-valley-react"
    },
    {
      id: 6,
      name: "Zion National Park",
      state: "Utah",
      temperature: "65°F / 18°C",
      description: "Shoulder season with mild weather and fewer crowds. Great for hiking Angels Landing.",
      highlights: ["Mild temperatures", "Fewer crowds", "Spring blooms", "Comfortable hiking"],
      crowdLevel: "Medium",
      templateUrl: "/zion-react"
    }
  ],
  april: [
    {
      id: 7,
      name: "Yosemite National Park",
      state: "California",
      temperature: "60°F / 16°C",
      description: "Peak waterfall season with snowmelt creating thundering cascades. Fewer crowds than summer.",
      highlights: ["Peak waterfalls", "Snowmelt cascades", "Moderate crowds", "Valley access"],
      crowdLevel: "Medium",
      templateUrl: "/yosemite-react"
    },
    {
      id: 8,
      name: "Arches National Park", 
      state: "Utah",
      temperature: "65°F / 18°C",
      description: "Perfect hiking weather with comfortable temperatures and spring wildflowers.",
      highlights: ["Comfortable hiking", "Spring flowers", "Great photography", "Mild weather"],
      crowdLevel: "Medium",
      templateUrl: "/arches-react"
    }
  ],
  may: [
    {
      id: 9,
      name: "Yellowstone National Park",
      state: "Wyoming",
      temperature: "55°F / 13°C",
      description: "Wildlife is active, roads begin opening, and geothermal features are spectacular without crowds.",
      highlights: ["Active wildlife", "Opening roads", "Geothermal activity", "Fewer crowds"],
      crowdLevel: "Medium",
      templateUrl: "/yellowstone-react"
    },
    {
      id: 10,
      name: "Great Smoky Mountains National Park",
      state: "Tennessee/North Carolina", 
      temperature: "70°F / 21°C",
      description: "Perfect weather for hiking with spring blooms and comfortable temperatures.",
      highlights: ["Spring blooms", "Perfect hiking weather", "Waterfalls", "Comfortable temps"],
      crowdLevel: "Medium",
      templateUrl: "/great-smoky-mountains-react"
    }
  ],
  june: [
    {
      id: 11,
      name: "Glacier National Park",
      state: "Montana",
      temperature: "65°F / 18°C",
      description: "High country roads opening, wildflowers blooming, and excellent hiking conditions.",
      highlights: ["Road openings", "Alpine wildflowers", "Great hiking", "Mountain views"],
      crowdLevel: "High",
      templateUrl: "/glacier-react"
    },
    {
      id: 12,
      name: "Olympic National Park",
      state: "Washington",
      temperature: "70°F / 21°C",
      description: "Dry season begins with accessible high country and excellent weather for coastal and mountain activities.",
      highlights: ["Dry season", "High country access", "Coastal activities", "Mountain hiking"],
      crowdLevel: "High", 
      templateUrl: "/olympic-react"
    }
  ],
  july: [
    {
      id: 13,
      name: "Mount Rainier National Park",
      state: "Washington",
      temperature: "70°F / 21°C",
      description: "Peak wildflower season with accessible high country trails and stunning alpine meadows.",
      highlights: ["Wildflower meadows", "High country trails", "Alpine scenery", "Clear weather"],
      crowdLevel: "High",
      templateUrl: "/mount-rainier-react"
    },
    {
      id: 14,
      name: "Crater Lake National Park",
      state: "Oregon",
      temperature: "75°F / 24°C",
      description: "Full rim road access with crystal clear lake views and perfect weather for photography.",
      highlights: ["Full road access", "Crystal clear views", "Perfect weather", "Photography"],
      crowdLevel: "High",
      templateUrl: "/crater-lake-react"
    }
  ],
  august: [
    {
      id: 15,
      name: "Denali National Park",
      state: "Alaska",
      temperature: "65°F / 18°C",
      description: "Peak season for wildlife viewing and mountain visibility with the longest days of the year.",
      highlights: ["Wildlife viewing", "Mountain visibility", "Long days", "Accessible roads"],
      crowdLevel: "High",
      templateUrl: "/denali-react"
    },
    {
      id: 16,
      name: "Glacier Bay National Park",
      state: "Alaska",
      temperature: "60°F / 16°C",
      description: "Excellent weather for boat tours and glacier viewing with active wildlife and calving glaciers.",
      highlights: ["Glacier tours", "Active wildlife", "Calving glaciers", "Boat access"],
      crowdLevel: "High",
      templateUrl: "/glacier-bay-react"
    }
  ],
  september: [
    {
      id: 17,
      name: "Yellowstone National Park",
      state: "Wyoming", 
      temperature: "50°F / 10°C",
      description: "Elk bugling season with beautiful fall colors and significantly reduced crowds.",
      highlights: ["Elk bugling", "Fall colors", "Reduced crowds", "Wildlife activity"],
      crowdLevel: "Medium",
      templateUrl: "/yellowstone-react"
    },
    {
      id: 18,
      name: "Yosemite National Park",
      state: "California",
      temperature: "65°F / 18°C",
      description: "Perfect weather for hiking with clear skies, comfortable temperatures, and fewer visitors.",
      highlights: ["Perfect hiking weather", "Clear skies", "Comfortable temps", "Fewer crowds"],
      crowdLevel: "Medium",
      templateUrl: "/yosemite-react"
    }
  ],
  october: [
    {
      id: 19,
      name: "Arches National Park",
      state: "Utah",
      temperature: "70°F / 21°C", 
      description: "Ideal hiking weather returns with comfortable temperatures and stunning fall light.",
      highlights: ["Perfect hiking weather", "Fall light", "Comfortable temps", "Great photography"],
      crowdLevel: "Medium",
      templateUrl: "/arches-react"
    },
    {
      id: 20,
      name: "Great Smoky Mountains National Park",
      state: "Tennessee/North Carolina",
      temperature: "65°F / 18°C",
      description: "Peak fall foliage season with spectacular colors and comfortable hiking weather.",
      highlights: ["Peak fall colors", "Spectacular foliage", "Comfortable hiking", "Photography"],
      crowdLevel: "High",
      templateUrl: "/great-smoky-mountains-react"
    }
  ],
  november: [
    {
      id: 21,
      name: "Death Valley National Park",
      state: "California/Nevada",
      temperature: "70°F / 21°C",
      description: "Return of perfect desert weather with comfortable temperatures for hiking and exploration.",
      highlights: ["Perfect desert weather", "Comfortable hiking", "Clear skies", "Mild temperatures"],
      crowdLevel: "Low",
      templateUrl: "/death-valley-react"
    },
    {
      id: 22,
      name: "Joshua Tree National Park", 
      state: "California",
      temperature: "75°F / 24°C",
      description: "Ideal weather returns for rock climbing and desert activities with comfortable days.",
      highlights: ["Rock climbing weather", "Desert activities", "Comfortable days", "Clear nights"],
      crowdLevel: "Low",
      templateUrl: "/joshua-tree-react"
    }
  ],
  december: [
    {
      id: 23,
      name: "Everglades National Park",
      state: "Florida",
      temperature: "75°F / 24°C", 
      description: "Dry season begins with excellent wildlife viewing and comfortable temperatures.",
      highlights: ["Dry season", "Excellent wildlife", "Comfortable temps", "Manatee season"],
      crowdLevel: "Low",
      templateUrl: "/everglades-react"
    },
    {
      id: 24,
      name: "Big Bend National Park",
      state: "Texas",
      temperature: "70°F / 21°C",
      description: "Perfect desert weather with mild temperatures and excellent hiking conditions.",
      highlights: ["Perfect desert weather", "Mild temperatures", "Excellent hiking", "Clear skies"],
      crowdLevel: "Low",
      templateUrl: "/big-bend-react"
    }
  ]
};

export default function ByMonth() {
  const [selectedMonth, setSelectedMonth] = useState("january");

  const getCurrentMonthParks = () => {
    return nationalParksData[selectedMonth] || [];
  };

  const currentMonth = months.find(m => m.name === selectedMonth);
  const currentParks = getCurrentMonthParks();

  const getCrowdLevelColor = (level) => {
    switch (level) {
      case 'Low': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'High': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleParkClick = (park) => {
    if (park.templateUrl) {
      window.location.href = park.templateUrl;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/20 py-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🏞️ National Parks by Month
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Discover the perfect time to visit America's National Parks with ideal weather, fewer crowds, and unforgettable off-season experiences.
          </p>
        </div>

        {/* Month Selector */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Select a Month to Explore
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {months.map((month) => (
              <button
                key={month.name}
                onClick={() => setSelectedMonth(month.name)}
                className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                  selectedMonth === month.name
                    ? `bg-gradient-to-r ${month.color} text-white border-transparent shadow-lg transform scale-105`
                    : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300 hover:shadow-md'
                }`}
              >
                <div className="text-2xl mb-2">{month.emoji}</div>
                <div className="font-semibold text-sm">{month.label}</div>
                <div className="text-xs opacity-80">{month.season}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Month Header */}
        {currentMonth && (
          <div className="text-center mb-8">
            <div className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${currentMonth.color} text-white shadow-lg`}>
              <Calendar className="w-5 h-5 mr-2" />
              <span className="font-semibold text-lg">
                {currentMonth.emoji} {currentMonth.label} - {currentMonth.season} Season
              </span>
            </div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              {currentParks.length} National Parks perfect for visiting in {currentMonth.label}
            </p>
          </div>
        )}

        {/* Parks Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {currentParks.map((park) => (
            <div
              key={park.id}
              onClick={() => handleParkClick(park)}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-xl text-gray-900 group-hover:text-green-600 transition-colors mb-1">
                      {park.name}
                    </h3>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{park.state}</span>
                    </div>
                  </div>
                  <Trees className="w-8 h-8 text-green-600 opacity-80" />
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-600">
                    <Thermometer className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">{park.temperature}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCrowdLevelColor(park.crowdLevel)}`}>
                    {park.crowdLevel} Crowds
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {park.description}
                </p>
                
                {/* Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Why Visit in {currentMonth?.label}:</h4>
                  <div className="flex flex-wrap gap-2">
                    {park.highlights.slice(0, 3).map((highlight, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-50 text-blue-700 rounded-md text-xs"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center font-medium">
                  <Trees className="w-4 h-4 mr-2" />
                  Explore Park Guide
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {currentParks.length === 0 && (
          <div className="text-center py-12">
            <Mountain className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No parks featured for {currentMonth?.label}
            </h3>
            <p className="text-gray-600">
              Try selecting a different month to discover amazing National Park experiences.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Plan Your National Park Adventure?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Explore our comprehensive park guides with detailed itineraries, weather information, and off-season tips to make the most of your visit.
            </p>
            <a
              href="/national-parks"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium"
            >
              <Trees className="w-5 h-5 mr-2" />
              View All National Parks
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}