import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip, useMap } from 'react-leaflet';
import L from 'leaflet';
import { Tent, MapPin, Calendar, Users, Mountain } from 'lucide-react';

// Add CSS for marker animations and tooltip styling
const markerStyles = `
  .park-marker:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0,0,0,0.4), 0 2px 6px rgba(0,0,0,0.3) !important;
  }
  
  .custom-tent-marker {
    animation: fadeIn 0.3s ease-in-out;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: scale(1); }
  }
  
  .svg-tent-marker {
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
  }
  
  .svg-tent-marker:hover {
    filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));
    transform: scale(1.05);
  }
  
  /* Custom tooltip styling */
  .custom-tooltip {
    background: rgba(255, 255, 255, 0.95) !important;
    border: 1px solid #e2e8f0 !important;
    border-radius: 8px !important;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15) !important;
    backdrop-filter: blur(8px) !important;
  }
  
  .custom-tooltip .leaflet-tooltip-content {
    margin: 0 !important;
    padding: 0 !important;
  }
  
  .custom-tooltip::before {
    border-top-color: rgba(255, 255, 255, 0.95) !important;
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = markerStyles;
  document.head.appendChild(styleElement);
}

// Fix for default markers in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// Custom tent icon for national parks - Enhanced with visitation-based coloring
const createTentIcon = (park = {}, selectedMonth = null) => {
  let iconContent = '⛺';
  let backgroundColor = '#059669'; // Default green
  let size = 28;
  
  // If a month is selected, use visitation-based coloring
  if (selectedMonth && park.visitation) {
    console.log(`🎨 Creating icon for ${park.name} with selected month: ${selectedMonth}`);
    const visitationLevel = getVisitationLevel(park, selectedMonth);
    console.log(`🎨 Visitation level determined: ${visitationLevel}`);
    
    switch (visitationLevel) {
      case 'low':
        backgroundColor = '#059669'; // Green for low visitation (best time to visit)
        console.log(`🟢 Using GREEN background for ${park.name}`);
        break;
      case 'medium':
        backgroundColor = '#eab308'; // Yellow for medium visitation
        console.log(`🟡 Using YELLOW background for ${park.name}`);
        break;
      case 'high':
        backgroundColor = '#dc2626'; // Red for high visitation (crowded)
        console.log(`🔴 Using RED background for ${park.name}`);
        break;
      default:
        backgroundColor = '#6b7280'; // Gray for no data
        console.log(`⚪ Using GRAY background for ${park.name} (no data)`);
    }
  } else if (selectedMonth && !park.visitation) {
    console.log(`⚠️ Month selected (${selectedMonth}) but no visitation data for ${park.name}`);
    backgroundColor = '#6b7280'; // Gray for no data
  }
  // When no month is selected, all parks use default green tent icons

  const iconHtml = `
    <div style="
      background: linear-gradient(135deg, ${backgroundColor}, ${backgroundColor}dd);
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 3px 8px rgba(0,0,0,0.3), 0 1px 3px rgba(0,0,0,0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: white;
      font-weight: bold;
      position: relative;
      transition: all 0.3s ease;
    " class="park-marker" data-visitation="${selectedMonth ? getVisitationLevel(park, selectedMonth) : 'default'}">
      ${iconContent}
    </div>
  `;

  return L.divIcon({
    html: iconHtml,
    className: 'custom-tent-marker',
    iconSize: [size, size],
    iconAnchor: [size/2, size/2],
    popupAnchor: [0, -size/2],
  });
};

// Helper function to determine visitation level for a park in a specific month
const getVisitationLevel = (park, month) => {
  console.log(`🔍 getVisitationLevel called for park: ${park.name}, month: ${month}`);
  console.log(`🔍 Park visitation data:`, park.visitation);
  
  if (!park.visitation || !month) {
    console.log(`❌ Missing data - visitation: ${!!park.visitation}, month: ${month}`);
    return 'unknown';
  }
  
  // Get all monthly visitation numbers for this park
  const monthlyData = [];
  const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  
  console.log(`🔍 Checking monthly data for ${park.name}:`);
  months.forEach(m => {
    const value = park.visitation[`visitation_${m}`];
    console.log(`  - ${m}: ${value} (type: ${typeof value})`);
    if (value !== undefined && value !== null && value !== '') {
      // Remove commas and convert to number
      const cleanValue = value.toString().replace(/,/g, '');
      const numericValue = parseInt(cleanValue);
      if (!isNaN(numericValue)) {
        monthlyData.push({ month: m, visitors: numericValue });
        console.log(`  ✅ Parsed ${m}: ${value} → ${numericValue}`);
      } else {
        console.log(`  ❌ Could not parse ${m}: ${value} → ${cleanValue}`);
      }
    }
  });
  
  console.log(`📊 Monthly data collected:`, monthlyData);
  
  if (monthlyData.length === 0) {
    console.log(`❌ No valid monthly data found for ${park.name}`);
    return 'unknown';
  }
  
  // Sort by visitor count
  monthlyData.sort((a, b) => a.visitors - b.visitors);
  console.log(`📈 Sorted monthly data:`, monthlyData);
  
  // Find current month's ranking
  const currentMonthData = monthlyData.find(data => data.month === month.toLowerCase());
  if (!currentMonthData) {
    console.log(`❌ Month ${month} not found in data for ${park.name}`);
    return 'unknown';
  }
  
  const currentIndex = monthlyData.indexOf(currentMonthData);
  const totalMonths = monthlyData.length;
  
  console.log(`📍 Month ${month} ranking: ${currentIndex + 1}/${totalMonths} (${currentMonthData.visitors} visitors)`);
  
  // Bottom 4 months = low (green), middle 4 = medium (yellow), top 4 = high (red)
  let level;
  if (currentIndex < Math.floor(totalMonths / 3)) {
    level = 'low';
  } else if (currentIndex < Math.floor(2 * totalMonths / 3)) {
    level = 'medium';
  } else {
    level = 'high';
  }
  
  console.log(`🎯 Final visitation level for ${park.name} in ${month}: ${level}`);
  return level;
};

// Alternative: SVG-based tent icon for more customization
const createSVGTentIcon = (color = '#059669') => {
  const svgIcon = `
    <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="15" r="15" fill="white" stroke="${color}" stroke-width="2"/>
      <circle cx="15" cy="15" r="12" fill="${color}"/>
      <g transform="translate(8, 9)">
        <path d="M7 12 L2 7 L12 7 Z" fill="white" stroke="white" stroke-width="0.5"/>
        <path d="M2 7 L7 4 L12 7" fill="white" stroke="white" stroke-width="0.5"/>
        <line x1="7" y1="4" x2="7" y2="12" stroke="white" stroke-width="1"/>
        <circle cx="7" cy="11" r="0.5" fill="${color}"/>
      </g>
    </svg>
  `;
  
  return L.divIcon({
    html: svgIcon,
    className: 'svg-tent-marker',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
    popupAnchor: [0, -15],
  });
};

// Component to handle map updates and view state persistence
function MapController({ nationalParks, onMapViewChange, initialView }) {
  const map = useMap();
  
  // Restore saved view on initial load
  useEffect(() => {
    // Small delay to ensure MapContainer has finished initializing
    const timer = setTimeout(() => {
      if (initialView) {
        console.log('🗺️ MapController: Restoring map view:', initialView);
        const currentCenter = map.getCenter();
        const currentZoom = map.getZoom();
        
        // Only set view if it's different from current (avoid unnecessary resets)
        const latDiff = Math.abs(currentCenter.lat - initialView.lat);
        const lngDiff = Math.abs(currentCenter.lng - initialView.lng);
        const zoomDiff = Math.abs(currentZoom - initialView.zoom);
        
        if (latDiff > 0.001 || lngDiff > 0.001 || zoomDiff > 0.1) {
          console.log('🗺️ MapController: View differs, setting to:', initialView);
          map.setView([initialView.lat, initialView.lng], initialView.zoom);
        } else {
          console.log('🗺️ MapController: View already correct, no change needed');
        }
      } else if (nationalParks.length > 0) {
        // Only fit bounds if no saved view
        console.log('🗺️ MapController: No saved view, fitting bounds to parks');
        const bounds = nationalParks
          .filter(park => park.coords && park.coords[0] && park.coords[1])
          .map(park => [park.coords[0], park.coords[1]]);
        
        if (bounds.length > 1) {
          map.fitBounds(bounds, { padding: [20, 20] });
        }
      }
    }, 100); // 100ms delay to let MapContainer initialize
    
    return () => clearTimeout(timer);
  }, [nationalParks, map, initialView]);

  // Save view state on map move/zoom
  useEffect(() => {
    const handleViewChange = () => {
      const center = map.getCenter();
      const zoom = map.getZoom();
      const viewState = {
        lat: center.lat,
        lng: center.lng,
        zoom: zoom
      };
      
      console.log('🗺️ Map view changed:', viewState);
      if (onMapViewChange) {
        onMapViewChange(viewState);
      }
    };

    map.on('moveend', handleViewChange);
    map.on('zoomend', handleViewChange);
    
    return () => {
      map.off('moveend', handleViewChange);
      map.off('zoomend', handleViewChange);
    };
  }, [map, onMapViewChange]);

  return null;
}

export default function NationalParksMap({ 
  nationalParks = [],
  onParkClick = () => {},
  selectedMonth = null,
  onMapViewChange = null,
  initialView = null
}) {
  // Use initialView if available, otherwise use default center/zoom
  const mapCenter = initialView ? [initialView.lat, initialView.lng] : [35.0, -120.0];
  const mapZoom = initialView ? initialView.zoom : 3.5;
  
  console.log('🗺️ NationalParksMap render - initialView:', initialView);
  console.log('🗺️ NationalParksMap render - mapCenter:', mapCenter, 'mapZoom:', mapZoom);

  // Create mapping for park names to React template URLs  
  const getReactTemplateUrl = (parkName) => {
    console.log('🗺️ NationalParksMap getReactTemplateUrl called with:', parkName);
    const parkMappings = {
      'Yellowstone National Park': '/yellowstone-react',
      'Grand Canyon National Park': '/grand-canyon-react', 
      'Yosemite National Park': '/yosemite-react',
      'Wind Cave National Park': '/wind-cave-react',
      'Theodore Roosevelt National Park': '/theodore-roosevelt-react',
      'Zion National Park': '/zion-react',
      'Glacier Bay National Park': '/glacier-bay-react',
      'Glacier National Park': '/glacier-react',
      'Great Smoky Mountains National Park': '/great-smoky-mountains-react',
      'Rocky Mountain National Park': '/rocky-mountain-react',
      'Acadia National Park': '/acadia-react',
      'Arches National Park': '/arches-react',
      'Canyonlands National Park': '/canyonlands-react',
      'Bryce Canyon National Park': '/bryce-canyon-react',
      'Joshua Tree National Park': '/joshua-tree-react',
      'Death Valley National Park': '/death-valley-react',
      'Sequoia National Park': '/sequoia-react',
      'Olympic National Park': '/olympic-react',
      'Mount Rainier National Park': '/mount-rainier-react',
      'Crater Lake National Park': '/crater-lake-react',
      'Badlands National Park': '/badlands-react',
      'Capitol Reef National Park': '/capitol-reef-react',
      'Denali National Park': '/denali-react',
      'Katmai National Park': '/katmai-react',
      'Kenai Fjords National Park': '/kenai-fjords-react',
      'Gates of the Arctic National Park': '/gates-of-the-arctic-react',
      'Lake Clark National Park': '/lake-clark-react',
      'Kobuk Valley National Park': '/kobuk-valley-react',
      'Wrangell-St. Elias National Park and Preserve': '/wrangell-st-elias-react',
      'Everglades National Park': '/everglades-react',
      'Biscayne National Park': '/biscayne-react',
      'Dry Tortugas National Park': '/dry-tortugas-react',
      // New Mexico and Texas National Parks
      'Big Bend National Park': '/big-bend-react',
      'Carlsbad Caverns National Park': '/carlsbad-caverns-react',
      'Guadalupe Mountains National Park': '/guadalupe-mountains-react',
      'White Sands National Park': '/white-sands-react',
      // Additional California National Parks
      'Lassen Volcanic National Park': '/lassen-volcanic-react',
      'Kings Canyon National Park': '/kings-canyon-react',
      'Pinnacles National Park': '/pinnacles-react',
      'Channel Islands National Park': '/channel-islands-react',
      // Colorado National Parks
      'Great Sand Dunes National Park': '/great-sand-dunes-react',
      'Mesa Verde National Park': '/mesa-verde-react',
      'Black Canyon of the Gunnison National Park': '/black-canyon-react',
      // Wyoming National Parks
      'Grand Teton National Park': '/grand-teton-react',
      // Nevada National Parks
      'Great Basin National Park': '/great-basin-react',
      // Arkansas National Parks
      'Hot Springs National Park': '/hot-springs-react',
      // Missouri National Parks
      'Gateway Arch National Park': '/gateway-arch-react',
      // Kentucky National Parks
      'Mammoth Cave National Park': '/mammoth-cave-react',
      // Indiana National Parks
      'Indiana Dunes National Park': '/indiana-dunes-react',
      // Hawaii National Parks
      'Hawaii Volcanoes National Park': '/hawaii-volcanoes-react',
      'Haleakala National Park': '/haleakala-react',
      // US Territories
      'National Park of American Samoa': '/american-samoa-react',
      'Virgin Islands National Park': '/virgin-islands-react'
    };

    // Check exact match first
    if (parkMappings[parkName]) {
      console.log('🗺️ Found exact match for:', parkName, '→', parkMappings[parkName]);
      return parkMappings[parkName];
    }

    console.log('🗺️ No exact match found for:', parkName);

    // Try partial matching for variations in naming - be more specific
    const lowerParkName = parkName.toLowerCase();
    
    // Handle specific cases that might conflict
    if (lowerParkName.includes('glacier bay')) {
      return '/glacier-bay-react';
    }
    if (lowerParkName.includes('glacier') && !lowerParkName.includes('bay')) {
      return '/glacier-react';
    }
    if (lowerParkName.includes('gates') && lowerParkName.includes('arctic')) {
      return '/gates-of-the-arctic-react';
    }
    
    // General partial matching for other parks
    for (const [key, url] of Object.entries(parkMappings)) {
      const keyWords = key.toLowerCase().split(' ');
      const firstWord = keyWords[0];
      
      // For single word parks, need exact match of first word
      if (keyWords.length <= 2 && lowerParkName.includes(firstWord)) {
        return url;
      }
      // For multi-word parks, check for unique combinations
      if (keyWords.length > 2) {
        const uniqueCombo = keyWords.slice(0, 2).join(' ');
        if (lowerParkName.includes(uniqueCombo)) {
          return url;
        }
      }
    }

    return null; // No template available
  };

  console.log('🗺️ NationalParksMap: Rendering with parks:', nationalParks.length);
  console.log('🗺️ NationalParksMap: Park data received:', nationalParks);
  console.log('🗺️ NationalParksMap: Selected month received:', selectedMonth, typeof selectedMonth);
  
  // Check which parks have valid coordinates
  const validParks = nationalParks.filter(park => park.coords && park.coords[0] && park.coords[1]);
  const invalidParks = nationalParks.filter(park => !park.coords || !park.coords[0] || !park.coords[1]);
  
  console.log('🗺️ NationalParksMap: Valid parks for display:', validParks);
  console.log('🗺️ NationalParksMap: Invalid parks (no coords):', invalidParks);

  return (
    <div className="relative">
      {/* Debug info */}
      <div className="absolute top-2 left-2 bg-green-100 text-green-800 p-2 rounded z-30 text-xs">
        🏞️ {nationalParks.length} Parks Total | {validParks.length} Valid Coords
        {initialView && <div className="text-blue-600 font-medium">📍 View Restored</div>}
      </div>
      
      <MapContainer
        center={mapCenter}
        zoom={mapZoom}
        style={{ height: '600px', width: '100%', borderRadius: '12px' }}
        className="z-10"
        maxBounds={[[15, -170], [72, -60]]} // Restricted east-west: Hawaii to Atlantic, Alaska to Florida
        maxBoundsViscosity={0.4} // Slightly firmer bounds enforcement
        minZoom={3.0} // Higher minimum zoom to prevent showing too much world
        maxZoom={12} // Reasonable maximum zoom for park details
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Map Controller for dynamic updates and view persistence */}
        <MapController 
          nationalParks={nationalParks} 
          onMapViewChange={onMapViewChange}
          initialView={initialView}
        />

        {/* National Park Markers */}
        {nationalParks
          .filter(park => park.coords && park.coords[0] && park.coords[1])
          .map((park, index) => {
          
          console.log(`🗺️ Rendering marker for ${park.name} at coords:`, park.coords);
          console.log(`🗺️ Park visitation data for ${park.name}:`, park.visitation);
          console.log(`🗺️ Selected month: ${selectedMonth}`);
          
          return (
            <Marker
              key={index}
              position={[park.coords[0], park.coords[1]]}
              icon={createTentIcon(park, selectedMonth)}
              eventHandlers={{
                click: () => onParkClick(park),
              }}
            >
              {/* Hover Tooltip */}
              <Tooltip 
                direction="top" 
                offset={[0, -10]} 
                opacity={0.9}
                permanent={false}
                sticky={true}
                className="custom-tooltip"
              >
                <div className="p-2 min-w-[200px]">
                  <h4 className="font-bold text-sm text-slate-900 mb-1">
                    {park.name}
                  </h4>
                  
                  <div className="space-y-1">
                    {park.established && (
                      <div className="flex items-center gap-1 text-xs">
                        <Calendar className="w-3 h-3 text-blue-500" />
                        <span className="text-slate-600">
                          Est. {park.established}
                        </span>
                      </div>
                    )}
                    
                    {park.visitors && (
                      <div className="flex items-center gap-1 text-xs">
                        <Users className="w-3 h-3 text-orange-500" />
                        <span className="text-slate-600">
                          {park.visitors} visitors
                        </span>
                      </div>
                    )}

                    {selectedMonth && park.visitation && (
                      <div className="text-xs font-medium mt-2">
                        {(() => {
                          const visitationLevel = getVisitationLevel(park, selectedMonth);
                          const levelColors = {
                            'low': 'text-green-600',
                            'medium': 'text-yellow-600', 
                            'high': 'text-red-600',
                            'unknown': 'text-gray-500'
                          };
                          const levelText = {
                            'low': '🟢 Off-Season',
                            'medium': '🟡 Shoulder Season',
                            'high': '🔴 Peak Season',
                            'unknown': '⚪ No Data Available'
                          };
                          return (
                            <span className={levelColors[visitationLevel] || 'text-gray-500'}>
                              {levelText[visitationLevel] || 'Unknown'}
                            </span>
                          );
                        })()}
                      </div>
                    )}
                  </div>
                </div>
              </Tooltip>

              {/* Click Popup (detailed view) */}
              <Popup>
                <div className="p-3 min-w-[250px]">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">
                    {park.name}
                  </h3>
                  
                  <div className="space-y-2 mb-3">
                    {park.established && (
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-blue-500" />
                        <span className="text-slate-600">
                          Established: {park.established}
                        </span>
                      </div>
                    )}
                    
                    {park.area && (
                      <div className="flex items-center gap-2 text-sm">
                        <Mountain className="w-4 h-4 text-gray-500" />
                        <span className="text-slate-600">
                          Area: {park.area}
                        </span>
                      </div>
                    )}
                    
                    {park.visitors && (
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-orange-500" />
                        <span className="text-slate-600">
                          Visitors: {park.visitors}
                        </span>
                      </div>
                    )}
                  </div>

                  {park.description && (
                    <div className="text-sm text-slate-600 border-t pt-2 mb-3">
                      {park.description}
                    </div>
                  )}

                  {(() => {
                    const templateUrl = getReactTemplateUrl(park.name);
                    if (templateUrl) {
                      return (
                        <button 
                          onClick={() => onParkClick(park)}
                          className="w-full text-white font-semibold py-2 px-3 rounded-lg transition-colors duration-200 text-sm"
                          style={{background: "linear-gradient(90deg, #15803d, #22c55e)"}}
                        >
                          🏞️ View Off-Season Guide
                        </button>
                      );
                    } else {
                      return (
                        <div className="w-full text-gray-500 font-medium py-2 px-3 rounded-lg text-sm text-center border border-gray-200 bg-gray-50">
                          Template Coming Soon
                        </div>
                      );
                    }
                  })()}
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>

      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg z-20 border border-slate-200">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-semibold text-sm">Map Legend</h4>
          {initialView && (
            <button
              onClick={() => {
                // Clear saved view
                sessionStorage.removeItem('nationalParksMapView');
                window.location.reload(); // Simple way to reset the map
              }}
              className="text-xs text-blue-600 hover:text-blue-800 underline"
              title="Reset map view"
            >
              Reset View
            </button>
          )}
        </div>
        <div className="space-y-2 text-xs">
          {selectedMonth ? (
            // Visitation-based legend when month is selected
            <>
              <div className="text-xs font-medium text-slate-600 mb-1">
                Season Status ({selectedMonth})
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-600 rounded-full border border-white shadow-sm flex items-center justify-center text-white text-xs">
                  ⛺
                </div>
                <span>Off-Season</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full border border-white shadow-sm flex items-center justify-center text-white text-xs">
                  ⛺
                </div>
                <span>Shoulder Season</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-600 rounded-full border border-white shadow-sm flex items-center justify-center text-white text-xs">
                  ⛺
                </div>
                <span>Peak Season</span>
              </div>
            </>
          ) : (
            // Default legend when no month selected
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-600 rounded-full border border-white shadow-sm flex items-center justify-center text-white text-xs">
                ⛺
              </div>
              <span>National Parks</span>
            </div>
          )}
        </div>
      </div>

      {/* Total Parks Display */}
      <div className="absolute top-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg z-20">
        <div className="text-sm font-semibold">
          {nationalParks.length} National Parks
        </div>
      </div>
    </div>
  );
}