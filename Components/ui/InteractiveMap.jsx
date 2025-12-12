import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import L from 'leaflet';
import { MapPin, Calendar, DollarSign, Thermometer, Users } from 'lucide-react';

// Fix for default markers in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// Custom marker icons for different seasons
const createCustomIcon = (color, seasonType = 'peak') => {
  const getSeasonSymbol = () => {
    switch(seasonType) {
      case 'off-season': return '★';
      case 'shoulder': return '◆';
      case 'peak': return '●';
      default: return '●';
    }
  };

  const iconHtml = `
    <div style="
      background-color: ${color};
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 2px 6px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      color: white;
      font-weight: bold;
    ">
      ${getSeasonSymbol()}
    </div>
  `;

  return L.divIcon({
    html: iconHtml,
    className: 'custom-marker',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -10],
  });
};

// Component to handle map updates when selectedMonth changes
function MapController({ selectedMonth, destinations, regionData }) {
  const map = useMap();
  
  useEffect(() => {
    // Optionally adjust map view based on filtered destinations
    if (destinations.length > 0) {
      const bounds = destinations.map(dest => [dest.coords[0], dest.coords[1]]);
      if (bounds.length > 1) {
        map.fitBounds(bounds, { padding: [20, 20] });
      }
    }
  }, [selectedMonth, destinations, map]);

  return null;
}

export default function InteractiveMap({ 
  selectedMonth, 
  destinations = [], 
  regionData = {},
  onDestinationClick = () => {},
  filteredDestinations = []
}) {
  const [mapCenter] = useState([25, -50]); // Shifted to better show Pacific regions
  const [mapZoom] = useState(2.2); // Slightly more zoomed in for better detail

  console.log('InteractiveMap: Rendering with props:', {
    selectedMonth,
    destinationsCount: destinations.length,
    filteredDestinationsCount: filteredDestinations.length,
    firstDestination: destinations[0],
    regionDataKeys: Object.keys(regionData)
  });

  const getSeasonType = (destination, month) => {
    if (!destination.region || !month) return 'peak';
    
    const region = regionData[destination.region];
    if (!region) return 'peak';
    
    if (region.offSeason && region.offSeason.includes(month)) {
      return 'off-season';
    } else if (region.shoulder && region.shoulder.includes(month)) {
      return 'shoulder';
    } else {
      return 'peak';
    }
  };

  const getMarkerColor = (destination) => {
    const seasonType = getSeasonType(destination, selectedMonth);
    switch (seasonType) {
      case 'off-season': return '#10b981'; // emerald-500 - off season green
      case 'shoulder': return '#f59e0b'; // amber-500 - shoulder yellow  
      default: return '#ef4444'; // red-500 - peak red
    }
  };

  return (
    <div className="relative">
      {/* Debug info */}
      <div className="absolute top-2 left-2 bg-red-100 text-red-800 p-2 rounded z-30 text-xs">
        Debug: {destinations.length} destinations loaded
      </div>
      
      <MapContainer
        center={mapCenter}
        zoom={mapZoom}
        style={{ height: '500px', width: '100%', borderRadius: '12px' }}
        className="z-10"
        maxBounds={[[-65, -200], [75, 200]]}
        maxBoundsViscosity={1.0}
        minZoom={1.8}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Map Controller for dynamic updates */}
        <MapController 
          selectedMonth={selectedMonth}
          destinations={destinations}
          regionData={regionData}
        />

        {/* Destination Markers */}
        {destinations.filter(dest => dest.coords && dest.coords[0] && dest.coords[1]).map((destination, index) => {
          const isHighlighted = filteredDestinations.some(d => d.name === destination.name);
          const seasonType = getSeasonType(destination, selectedMonth);
          const isOffSeason = seasonType === 'off-season';
          const isShoulder = seasonType === 'shoulder';
          
          console.log(`Rendering marker for ${destination.name} at coords:`, destination.coords);
          
          return (
            <Marker
              key={index}
              position={[destination.coords[0], destination.coords[1]]}
              icon={createCustomIcon(getMarkerColor(destination), seasonType)}
              eventHandlers={{
                click: () => onDestinationClick(destination),
              }}
            >
              <Popup>
                <div className="p-2 min-w-[200px]">
                  <h3 className="font-bold text-lg text-slate-900 mb-2">
                    {destination.name}
                  </h3>
                  
                  <div className="space-y-2 mb-3">
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-blue-500" />
                      <span className="text-slate-600">
                        {regionData[destination.region]?.name || 'Unknown Region'}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-green-500" />
                      <span className="text-slate-600">
                        Best: {destination.bestOffSeason?.slice(0, 3).join(', ') || 'N/A'}
                      </span>
                    </div>
                  </div>

                  <div className={`px-3 py-2 rounded-lg text-center text-sm font-semibold ${
                    isOffSeason 
                      ? 'bg-green-100 text-green-800' 
                      : isShoulder
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {isOffSeason ? (
                      <span className="flex items-center justify-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        Off-Season
                      </span>
                    ) : isShoulder ? (
                      <span className="flex items-center justify-center gap-1">
                        <Thermometer className="w-4 h-4" />
                        Shoulder Season
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-1">
                        <Users className="w-4 h-4" />
                        Peak Season
                      </span>
                    )}
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}

        {/* Region Circles for visual context */}
        {Object.entries(regionData).map(([key, region]) => {
          const isOffSeason = region.offSeason?.includes(selectedMonth);
          return (
            <Circle
              key={key}
              center={region.coords}
              radius={2000000} // 2000km radius
              pathOptions={{
                fillColor: isOffSeason ? '#10b981' : '#ef4444',
                fillOpacity: 0.1,
                color: isOffSeason ? '#10b981' : '#ef4444',
                weight: 2,
                opacity: 0.3,
              }}
            >
              <Popup>
                <div className="p-2">
                  <h3 className="font-bold text-lg">{region.name}</h3>
                  <p className="text-sm text-slate-600 mb-2">{region.description}</p>
                  <div className={`px-2 py-1 rounded text-xs font-semibold ${
                    isOffSeason ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {isOffSeason ? 'Off-Season Region' : 'Peak Season Region'}
                  </div>
                </div>
              </Popup>
            </Circle>
          );
        })}
      </MapContainer>

      {/* Map Legend Overlay */}
      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg z-20 border border-slate-200">
        <h4 className="font-semibold text-sm mb-2">Map Legend</h4>
        <div className="space-y-2 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full border border-white shadow-sm"></div>
            <span>Off-Season Destinations</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full border border-white shadow-sm"></div>
            <span>Shoulder Season Destinations</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full border border-white shadow-sm"></div>
            <span>Peak Season Destinations</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500/20 rounded-full border border-green-500"></div>
            <span>Off-Season Regions</span>
          </div>
        </div>
      </div>

      {/* Current Month Display */}
      <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg z-20">
        <div className="text-sm font-semibold capitalize">
          {selectedMonth} Overview
        </div>
      </div>
    </div>
  );
}