import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

export default function SimpleMap() {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      console.log('SimpleMap: Creating Leaflet map...');
      
      try {
        // Create map
        mapInstanceRef.current = L.map(mapRef.current).setView([20, 0], 2);

        // Add tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(mapInstanceRef.current);

        // Add a test marker
        L.marker([40.7128, -74.0060])
          .addTo(mapInstanceRef.current)
          .bindPopup('Test marker - New York')
          .openPopup();

        console.log('SimpleMap: Map created successfully');
      } catch (error) {
        console.error('SimpleMap: Error creating map:', error);
      }
    }

    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative">
      <div 
        ref={mapRef} 
        style={{ height: '500px', width: '100%', borderRadius: '12px' }}
        className="bg-gray-200"
      />
      <div className="absolute top-2 left-2 bg-blue-100 text-blue-800 p-2 rounded z-30 text-xs">
        Simple Leaflet Map Test
      </div>
    </div>
  );
}