import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Calendar } from "lucide-react";
import HeroSection from '../Components/home/HeroSection.jsx';
import NationalParksMap from '../Components/ui/NationalParksMap.jsx';
import { nationalParksService } from "../lib/database.js";

export default function Home() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [user] = useState(null);

  // Prevent automatic scroll to top on component mount
  useEffect(() => {
    // Override the default scroll restoration behavior temporarily
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    return () => {
      // Restore default behavior when component unmounts
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto';
      }
    };
  }, []);
  
  // National Parks Map state - copied from NationalParks_Simple.jsx
  const [mapParks, setMapParks] = useState([]);
  const [mapLoading, setMapLoading] = useState(true);
  const [savedMapView, setSavedMapView] = useState(null);
  
  // Get current month in the format used by our months array
  const getCurrentMonth = () => {
    const monthNames = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 
                       'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    const currentMonthIndex = new Date().getMonth();
    return monthNames[currentMonthIndex];
  };
  
  const [selectedMonth, setSelectedMonth] = useState(getCurrentMonth());

  // Load national parks data on component mount
  useEffect(() => {
    loadNationalParks();
    
    // Restore saved map view from sessionStorage
    const savedView = sessionStorage.getItem('homePageMapView');
    console.log('🗺️ Home: Checking for saved view, found:', savedView);
    if (savedView) {
      try {
        const parsedView = JSON.parse(savedView);
        console.log('🗺️ Home: Restoring saved map view:', parsedView);
        setSavedMapView(parsedView);
      } catch (error) {
        console.error('Home: Error parsing saved map view:', error);
        sessionStorage.removeItem('homePageMapView');
      }
    } else {
      console.log('🗺️ Home: No saved view found, will use default');
    }

    // Restore saved scroll position with multiple attempts
    const savedScrollPos = sessionStorage.getItem('homePageScrollPosition');
    if (savedScrollPos) {
      const scrollY = parseInt(savedScrollPos, 10);
      console.log('📜 Home: Restoring scroll position to:', scrollY);
      
      // Multiple attempts with increasing delays to ensure content is loaded
      const restoreScroll = (attempt = 0) => {
        if (attempt < 5) { // Try up to 5 times
          setTimeout(() => {
            console.log(`📜 Home: Scroll restore attempt ${attempt + 1}, scrolling to:`, scrollY);
            window.scrollTo(0, scrollY);
            
            // Check if scroll actually worked
            setTimeout(() => {
              const currentScroll = window.scrollY;
              console.log(`📜 Home: After scroll attempt ${attempt + 1}, current position:`, currentScroll);
              
              // If we're still not at the right position and not at the very top, try again
              if (Math.abs(currentScroll - scrollY) > 50 && scrollY > 100) {
                restoreScroll(attempt + 1);
              }
            }, 50);
          }, 100 + (attempt * 200)); // Increasing delay: 100ms, 300ms, 500ms, etc.
        }
      };
      
      restoreScroll();
    }

    // Set up scroll position saving
    const handleScroll = () => {
      const scrollY = window.scrollY;
      sessionStorage.setItem('homePageScrollPosition', scrollY.toString());
    };

    // Add scroll listener with throttling to avoid excessive saves
    let scrollTimeout;
    const throttledScroll = () => {
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
      scrollTimeout = setTimeout(handleScroll, 150); // Save scroll position 150ms after scrolling stops
    };

    window.addEventListener('scroll', throttledScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  // Additional scroll restoration after map loads
  useEffect(() => {
    if (!mapLoading && mapParks.length > 0) {
      const savedScrollPos = sessionStorage.getItem('homePageScrollPosition');
      if (savedScrollPos) {
        const scrollY = parseInt(savedScrollPos, 10);
        console.log('📜 Home: Map loaded, attempting final scroll restore to:', scrollY);
        setTimeout(() => {
          window.scrollTo({ top: scrollY, behavior: 'auto' });
        }, 300);
      }
    }
  }, [mapLoading, mapParks.length]);

  const loadNationalParks = async () => {
    try {
      setMapLoading(true);
      console.log('🔄 Home: Starting loadNationalParks...');
      console.log('🌐 Home: Supabase URL exists:', !!import.meta.env.VITE_SUPABASE_URL);
      console.log('🔑 Home: Supabase key exists:', !!import.meta.env.VITE_SUPABASE_ANON_KEY);
      
      const result = await nationalParksService.getAll();
      console.log('📊 Home: Raw result from nationalParksService:', result);
      console.log('📊 Home: Result data length:', result?.data?.length);
      console.log('📊 Home: Result error:', result?.error);
      console.log('📊 Home: Full result object keys:', Object.keys(result || {}));
      
      const { data, error } = result;
      
      if (error) {
        console.error('❌ HOME MAP: DATABASE ERROR - Using sample parks fallback:', error);
        // Use sample parks for map if database fails - exact copy from original
        const sampleMapParks = [
          { name: "Yellowstone National Park", state: "Wyoming", coords: [44.4280, -110.5885] },
          { name: "Grand Canyon National Park", state: "Arizona", coords: [36.1069, -112.1129] },
          { name: "Yosemite National Park", state: "California", coords: [37.8651, -119.5383] },
          { name: "Denali National Park", state: "Alaska", coords: [63.115, -150.766] },
          { name: "Katmai National Park", state: "Alaska", coords: [58.5, -155.0] },
          { name: "Kenai Fjords National Park", state: "Alaska", coords: [59.9, -149.9] },
          { name: "Glacier Bay National Park", state: "Alaska", coords: [58.665, -136.900] },
          { name: "Gates of the Arctic National Park", state: "Alaska", coords: [67.78, -153.25] },
          { name: "Lake Clark National Park", state: "Alaska", coords: [60.97, -153.42] },
          { name: "Kobuk Valley National Park", state: "Alaska", coords: [67.35, -159.28] },
          { name: "Wrangell-St. Elias National Park and Preserve", state: "Alaska", coords: [61.710, -142.985] },
          { name: "Everglades National Park", state: "Florida", coords: [25.2866, -80.8987] },
          { name: "Biscayne National Park", state: "Florida", coords: [25.490, -80.210] },
          { name: "Dry Tortugas National Park", state: "Florida", coords: [24.628, -82.873] },
          { name: "Hawaii Volcanoes National Park", state: "Hawaii", coords: [19.4194, -155.2885] },
          { name: "Haleakalā National Park", state: "Hawaii", coords: [20.7201, -156.2539] },
          { name: "National Park of American Samoa", state: "American Samoa", coords: [-14.2581, -170.6850] },
          { name: "Virgin Islands National Park", state: "U.S. Virgin Islands", coords: [18.3425, -64.7296] }
        ];
        console.log('🔄 HOME MAP: Setting sample parks (18 parks) due to database error');
        setMapParks(sampleMapParks);
        return;
      }

      if (!error && data && data.length > 0) {
        console.log(`🎯 HOME MAP: SUCCESS! Processing ${data.length} parks from DATABASE (not sample data)`);
        
        // Log first park details and available columns
        if (data[0]) {
          console.log('🏞️ Home: Available columns:', Object.keys(data[0]));
          console.log('🏞️ Home: First park raw data:', data[0]);
          console.log('🏞️ Home: Sample coordinates check:');
          console.log(`  - latitude field: "${data[0].latitude}" (type: ${typeof data[0].latitude})`);
          console.log(`  - Latitude field: "${data[0].Latitude}" (type: ${typeof data[0].Latitude})`);
          console.log(`  - longitude field: "${data[0].longitude}" (type: ${typeof data[0].longitude})`);
          console.log(`  - Longitude field: "${data[0].Longitude}" (type: ${typeof data[0].Longitude})`);
        }
        
        // Format parks for map display - copied exactly from NationalParks_Simple.jsx
        const formattedParks = data.map((park, index) => {
          // Parse coordinates from string format like "48.7561° N" and "113.7797° W"
          const parseCoordinate = (coordStr, isLongitude = false) => {
            if (!coordStr) return 0;
            
            console.log(`🗺️ Home: Parsing coordinate: "${coordStr}"`);
            
            // Extract the numeric part
            const numMatch = coordStr.toString().match(/[\d.-]+/);
            let coord = numMatch ? parseFloat(numMatch[0]) : 0;
            
            // Handle hemisphere indicators
            const coordUpper = coordStr.toString().toUpperCase();
            if (coordUpper.includes('S') || coordUpper.includes('W')) {
              coord = -Math.abs(coord);
            }
            
            console.log(`🗺️ Home: Parsed "${coordStr}" to ${coord}`);
            return coord;
          };

          // Handle coordinate parsing - support both coords array and separate lat/lng fields
          let latitude, longitude;
          
          if (park.coords && Array.isArray(park.coords) && park.coords.length === 2) {
            // Service fallback data format with coords array [lat, lng]
            latitude = parseFloat(park.coords[0]) || 0;
            longitude = parseFloat(park.coords[1]) || 0;
            console.log(`📍 Home: Using coords array format for ${park.name}: [${latitude}, ${longitude}]`);
          } else {
            // Database format with separate string fields like "48.7561° N"
            const latField = park.latitude || park.Latitude;
            const lngField = park.longitude || park.Longitude;
            
            if (latField && lngField) {
              latitude = parseCoordinate(latField);
              longitude = parseCoordinate(lngField, true);
              console.log(`📍 Home: Using separate field format for ${park.name}: lat="${latField}" lng="${lngField}" -> [${latitude}, ${longitude}]`);
            } else {
              console.warn(`❌ Home: No coordinate data found for ${park.name}`);
              latitude = 0;
              longitude = 0;
            }
          }
          
          if (index < 5) {
            console.log(`🗺️ Home: Park ${index + 1}: ${park.name || park.Name}`);
            console.log(`  - Raw lat: "${park.latitude || park.Latitude}" -> Parsed: ${latitude}`);
            console.log(`  - Raw lng: "${park.longitude || park.Longitude}" -> Parsed: ${longitude}`);
            console.log(`  - Valid coords: ${latitude !== 0 && longitude !== 0}`);
          }

          // Get visitation data for seasonal coloring - exact match to original
          const getVisitationData = () => {
            const visitation = {};
            const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
            months.forEach(month => {
              // Check multiple possible column name formats for visitation data
              const visitationValue = park[`visitation_${month}`] || 
                                    park[`Visitation_${month}`] || 
                                    park[`${month.toUpperCase()}`] || 
                                    park[`${month}`] ||
                                    park[`${month.charAt(0).toUpperCase() + month.slice(1)}`] ||
                                    park[`2024 ${month.charAt(0).toUpperCase() + month.slice(1)}`];
              
              if (visitationValue !== undefined && visitationValue !== null && visitationValue !== '') {
                // Store with visitation_ prefix as expected by NationalParksMap
                visitation[`visitation_${month}`] = visitationValue;
                
                if (index < 2) {
                  console.log(`🗺️ Home: ${park.name || park.Name} - ${month}: ${visitationValue}`);
                }
              }
            });
            return Object.keys(visitation).length > 0 ? visitation : null;
          };

          const formattedPark = {
            id: park.id || park.ID || park.idx,
            name: park.name || park.Name || 'Unknown Park',
            visitation: getVisitationData(),
            state: park.state || park.State || (park.name?.includes('Glacier') ? 'Montana' : 'Wyoming'),
            coords: [latitude, longitude],
            established: park.Established || park.established || '',
            area: park.Area || park.area || '',
            visitors: park.Visitors || park.visitors || '',
            description: park.description || park.Description || ''
          };
          
          // Log if coordinates are invalid
          if (latitude === 0 || longitude === 0) {
            console.log(`⚠️ Home: Invalid coordinates for ${park.name || park.Name}: lat=${latitude}, lng=${longitude}`);
          }
          
          return formattedPark;
        }).filter(park => {
          // Only include parks with valid coordinates
          const hasValidCoords = park.coords[0] !== 0 && park.coords[1] !== 0;
          if (!hasValidCoords) {
            console.log(`❌ Home: Filtering out ${park.name} due to invalid coordinates: [${park.coords[0]}, ${park.coords[1]}]`);
          }
          return hasValidCoords;
        });
        
        console.log('🎯 HOME MAP: SUCCESS! Processed parks from service data:');
        console.log(`  - Total parks processed: ${formattedParks.length}`);
        console.log(`  - Parks with valid coords: ${formattedParks.filter(p => p.coords[0] !== 0 && p.coords[1] !== 0).length}`);
        console.log('  - First few parks:', formattedParks.slice(0, 3));
        
        if (formattedParks.length === 0) {
          console.log('⚠️ Home: No parks passed coordinate filtering - checking raw data format');
          console.log('⚠️ Home: Raw data sample:', data.slice(0, 2));
        }
        
        setMapParks(formattedParks);
      } else {
        console.log('📭 Home: No valid parks data found in database');
        console.log('📭 Home: Error:', error);
        console.log('📭 Home: Data exists:', !!data);
        console.log('📭 Home: Data length:', data?.length);
        console.log('📭 Home: Data type:', typeof data);
        
        // Check if this is fallback data (which might not have coordinates in the right format)
        if (data && data.length > 0) {
          console.log('🔍 Home: We have fallback data - processing it:');
          console.log('  - First park:', data[0]);
          console.log('  - Has coords array?', !!data[0]?.coords);
          console.log('  - Has latitude field?', !!data[0]?.latitude);
          
          // Process the fallback data which has coords arrays instead of lat/lng fields
          const fallbackParks = data.map((park, index) => {
            let latitude = 0, longitude = 0;
            
            if (park.coords && Array.isArray(park.coords) && park.coords.length === 2) {
              latitude = parseFloat(park.coords[0]) || 0;
              longitude = parseFloat(park.coords[1]) || 0;
            }
            
            return {
              id: park.id || index,
              name: park.name || 'Unknown Park',
              state: park.state || 'Unknown State',
              coords: [latitude, longitude],
              established: park.established || '',
              area: park.area || '',
              visitors: park.visitors || '',
              description: park.description || '',
              // Add basic visitation data for fallback parks
              visitation: {
                visitation_jan: "100000", visitation_feb: "120000", visitation_mar: "180000",
                visitation_apr: "250000", visitation_may: "350000", visitation_jun: "450000",
                visitation_jul: "500000", visitation_aug: "480000", visitation_sep: "300000",
                visitation_oct: "220000", visitation_nov: "150000", visitation_dec: "110000"
              }
            };
          }).filter(park => park.coords[0] !== 0 && park.coords[1] !== 0);
          
          console.log(`🗺️ Home: Processed ${fallbackParks.length} fallback parks`);
          setMapParks(fallbackParks);
        } else {
          console.log('📭 Home: No map parks data in database, using sample parks');
          const sampleMapParks = [
            { name: "Yellowstone National Park", state: "Wyoming", coords: [44.4280, -110.5885] },
            { name: "Grand Canyon National Park", state: "Arizona", coords: [36.1069, -112.1129] },
            { name: "Yosemite National Park", state: "California", coords: [37.8651, -119.5383] },
            { name: "Denali National Park", state: "Alaska", coords: [63.115, -150.766] },
            { name: "Katmai National Park", state: "Alaska", coords: [58.5, -155.0] },
            { name: "Kenai Fjords National Park", state: "Alaska", coords: [59.9, -149.9] },
            { name: "Glacier Bay National Park", state: "Alaska", coords: [58.665, -136.900] },
            { name: "Gates of the Arctic National Park", state: "Alaska", coords: [67.78, -153.25] },
            { name: "Lake Clark National Park", state: "Alaska", coords: [60.97, -153.42] },
            { name: "Kobuk Valley National Park", state: "Alaska", coords: [67.35, -159.28] },
            { name: "Wrangell-St. Elias National Park and Preserve", state: "Alaska", coords: [61.710, -142.985] },
            { name: "Everglades National Park", state: "Florida", coords: [25.2866, -80.8987] },
            { name: "Biscayne National Park", state: "Florida", coords: [25.490, -80.210] },
            { name: "Dry Tortugas National Park", state: "Florida", coords: [24.628, -82.873] },
            { name: "Hawaii Volcanoes National Park", state: "Hawaii", coords: [19.4194, -155.2885] },
            { name: "Haleakalā National Park", state: "Hawaii", coords: [20.7201, -156.2539] },
            { name: "National Park of American Samoa", state: "American Samoa", coords: [-14.2581, -170.6850] },
            { name: "Virgin Islands National Park", state: "U.S. Virgin Islands", coords: [18.3425, -64.7296] }
          ];
          setMapParks(sampleMapParks);
        }
      }
    } catch (err) {
      console.error('💥 Home: Exception loading map parks:', err.message);
      // Use sample parks for map if exception occurs - exact copy from original
      const sampleMapParks = [
        { name: "Yellowstone National Park", state: "Wyoming", coords: [44.4280, -110.5885] },
        { name: "Grand Canyon National Park", state: "Arizona", coords: [36.1069, -112.1129] },
        { name: "Yosemite National Park", state: "California", coords: [37.8651, -119.5383] },
        { name: "Denali National Park", state: "Alaska", coords: [63.115, -150.766] },
        { name: "Katmai National Park", state: "Alaska", coords: [58.5, -155.0] },
        { name: "Kenai Fjords National Park", state: "Alaska", coords: [59.9, -149.9] },
        { name: "Glacier Bay National Park", state: "Alaska", coords: [58.665, -136.900] },
        { name: "Gates of the Arctic National Park", state: "Alaska", coords: [67.78, -153.25] },
        { name: "Lake Clark National Park", state: "Alaska", coords: [60.97, -153.42] },
        { name: "Kobuk Valley National Park", state: "Alaska", coords: [67.35, -159.28] },
        { name: "Wrangell-St. Elias National Park and Preserve", state: "Alaska", coords: [61.710, -142.985] },
        { name: "Everglades National Park", state: "Florida", coords: [25.2866, -80.8987] },
        { name: "Biscayne National Park", state: "Florida", coords: [25.490, -80.210] },
        { name: "Dry Tortugas National Park", state: "Florida", coords: [24.628, -82.873] },
        { name: "Hawaii Volcanoes National Park", state: "Hawaii", coords: [19.4194, -155.2885] },
        { name: "Haleakalā National Park", state: "Hawaii", coords: [20.7201, -156.2539] },
        { name: "National Park of American Samoa", state: "American Samoa", coords: [-14.2581, -170.6850] },
        { name: "Virgin Islands National Park", state: "U.S. Virgin Islands", coords: [18.3425, -64.7296] }
      ];
      setMapParks(sampleMapParks);
    } finally {
      setMapLoading(false);
    }
  };

  // Handle map view changes and save to sessionStorage - copied from original
  const handleMapViewChange = (viewState) => {
    console.log('🗺️ Home: handleMapViewChange called with:', viewState);
    try {
      sessionStorage.setItem('homePageMapView', JSON.stringify(viewState));
      setSavedMapView(viewState);
      console.log('🗺️ Home: Successfully saved view to sessionStorage and state');
    } catch (error) {
      console.error('Home: Error saving map view to sessionStorage:', error);
    }
  };

  // Month selector options
  const months = [
    { value: 'jan', label: 'January' },
    { value: 'feb', label: 'February' },
    { value: 'mar', label: 'March' },
    { value: 'apr', label: 'April' },
    { value: 'may', label: 'May' },
    { value: 'jun', label: 'June' },
    { value: 'jul', label: 'July' },
    { value: 'aug', label: 'August' },
    { value: 'sep', label: 'September' },
    { value: 'oct', label: 'October' },
    { value: 'nov', label: 'November' },
    { value: 'dec', label: 'December' }
  ];

  // Park template URL mapping - copied from NationalParks_Simple.jsx
  // Create mapping for park names to React template URLs - copied from NationalParks_Simple.jsx
  const getReactTemplateUrl = (parkName) => {
    console.log('🔍 Home: getReactTemplateUrl called with park name:', parkName);
    console.log('🔍 Home: Park name type:', typeof parkName);
    console.log('🔍 Home: Park name length:', parkName?.length);
    const parkMappings = {
      'Yellowstone National Park': '/yellowstone-react',
      'Grand Canyon National Park': '/grand-canyon-react', 
      'Yosemite National Park': '/yosemite-react',
      'Wind Cave National Park': '/wind-cave-react',
      'Theodore Roosevelt National Park': '/theodore-roosevelt-react',
      'Zion National Park': '/zion-react',
      'Glacier National Park': '/glacier-react',
      'Glacier Bay National Park': '/glacier-bay-react', // Put this BEFORE Glacier National Park for better matching
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
      'Redwood National and State Parks': '/redwoods-react',
      'Redwood National Park': '/redwoods-react',
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
      // Ohio National Parks
      'Cuyahoga Valley National Park': '/cuyahoga-valley-react',
      // West Virginia National Parks
      'New River Gorge National Park and Preserve': '/new-river-gorge-react',
      // Virginia National Parks
      'Shenandoah National Park': '/shenandoah-react',
      // Arizona National Parks
      'Saguaro National Park': '/saguaro-react',
      'Petrified Forest National Park': '/petrified-forest-react',
      // Washington National Parks
      'North Cascades National Park': '/north-cascades-react',
      // Indiana National Parks
      'Indiana Dunes National Park': '/indiana-dunes-react',
      // Michigan National Parks
      'Isle Royale National Park': '/isle-royale-react',
      // Minnesota National Parks
      'Voyageurs National Park': '/voyageurs-react',
      // Hawaii National Parks
      'Hawaii Volcanoes National Park': '/hawaii-volcanoes-react',
      'Haleakalā National Park': '/haleakala-react',
      'Haleakala National Park': '/haleakala-react',
      // American Samoa National Parks  
      'National Park of American Samoa': '/american-samoa-react',
      'American Samoa National Park': '/american-samoa-react',
      // U.S. Virgin Islands National Parks
      'Virgin Islands National Park': '/virgin-islands-react'
    };

    // Check exact match first
    if (parkMappings[parkName]) {
      console.log('✅ Home: Found exact match for:', parkName, '→', parkMappings[parkName]);
      return parkMappings[parkName];
    }

    console.log('❌ Home: No exact match found for:', parkName);
    console.log('🔍 Home: Available park names:', Object.keys(parkMappings));

    // Try partial matching for variations in naming - be more specific
    const lowerParkName = parkName.toLowerCase();
    console.log('🔍 Home: Lower case park name:', lowerParkName);
    
    // Handle Hawaii parks FIRST and most specifically 
    if ((lowerParkName.includes('hawaii') && lowerParkName.includes('volcanoes')) || 
        (lowerParkName.includes('hawaii') && lowerParkName.includes('volcanoes'))) {
      console.log('✅ Home: Matched hawaii volcanoes');
      return '/hawaii-volcanoes-react';
    }
    if (lowerParkName.includes('haleakala') || lowerParkName.includes('haleakalā')) {
      console.log('✅ Home: Matched haleakala');
      return '/haleakala-react';
    }
    
    // Handle Indiana Dunes specifically to prevent incorrect matches
    if (lowerParkName.includes('indiana') && lowerParkName.includes('dunes')) {
      console.log('✅ Home: Matched indiana dunes');
      return '/indiana-dunes-react';
    }
    
    // Handle specific cases that might conflict
    if (lowerParkName.includes('glacier bay')) {
      console.log('✅ Home: Matched glacier bay');
      return '/glacier-bay-react';
    }
    if (lowerParkName.includes('glacier') && !lowerParkName.includes('bay')) {
      console.log('✅ Home: Matched glacier (not bay)');
      return '/glacier-react';
    }
    if (lowerParkName.includes('gates') && lowerParkName.includes('arctic')) {
      console.log('✅ Home: Matched gates of the arctic');
      return '/gates-of-the-arctic-react';
    }
    
    // Handle American Samoa AFTER Hawaii parks and be more specific
    if ((lowerParkName.includes('american samoa') || 
         lowerParkName.includes('national park of american samoa')) &&
        !lowerParkName.includes('hawaii') && !lowerParkName.includes('volcanoes')) {
      console.log('✅ Home: Matched american samoa');
      return '/american-samoa-react';
    }
    
    // General partial matching for other parks
    console.log('🔍 Home: Checking general partial matching...');
    for (const [key, url] of Object.entries(parkMappings)) {
      const keyWords = key.toLowerCase().split(' ');
      const firstWord = keyWords[0];
      
      // For single word parks, need exact match of first word
      if (keyWords.length <= 2 && lowerParkName.includes(firstWord)) {
        console.log('🎯 Home: General match found (short):', key, '→', url);
        return url;
      }
      // For multi-word parks, check for unique combinations
      if (keyWords.length > 2) {
        const uniqueCombo = keyWords.slice(0, 2).join(' ');
        if (lowerParkName.includes(uniqueCombo)) {
          console.log('🎯 Home: General match found (long):', key, '→', url, 'via combo:', uniqueCombo);
          return url;
        }
      }
    }

    console.log('❌ Home: No matches found, returning null');
    return null; // No template available
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <HeroSection 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        destinations={[]}
        user={user}
      />

      {/* Banner Image */}
      <div className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/20 py-2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src="/banner_photo.JPG" 
              alt="Beautiful National Parks landscape" 
              className="w-full h-64 md:h-80 lg:h-96 object-cover"
            />
          </div>
        </div>
      </div>

      {/* National Parks Map Section */}
      <div className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/20 py-12">
        <div className="max-w-7xl mx-auto px-6">
          {/* Month Selector */}
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-gray-700">Select Month:</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
              {months.map((month) => (
                <button
                  key={month.value}
                  onClick={() => setSelectedMonth(month.value)}
                  className={`px-4 py-2 rounded-lg border-2 transition-all duration-200 font-medium ${
                    selectedMonth === month.value
                      ? 'bg-blue-600 text-white border-blue-600 shadow-lg'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  {month.label}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Map */}
          <div className="bg-white rounded-xl shadow-lg border p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <MapPin className="w-5 h-5 text-green-600" />
                Interactive National Parks Map
              </h3>
              <div className="text-sm text-gray-600">
                Click on parks to explore off-season guides
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl overflow-hidden">
              {mapLoading ? (
                <div className="h-[500px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mb-4"></div>
                    <div className="text-gray-600">Loading National Parks map...</div>
                  </div>
                </div>
              ) : (
                <NationalParksMap
                  nationalParks={mapParks}
                  selectedMonth={selectedMonth}
                  initialView={savedMapView}
                  onMapViewChange={handleMapViewChange}
                  onParkClick={(park) => {
                    console.log('Home: Park clicked:', park);
                    
                    // Manually save current scroll position before navigation
                    const currentScrollY = window.scrollY;
                    console.log('📜 Home: Saving scroll position before navigation:', currentScrollY);
                    sessionStorage.setItem('homePageScrollPosition', currentScrollY.toString());
                    
                    // Manually save current map view before navigation
                    const mapElement = document.querySelector('.leaflet-container');
                    if (mapElement && mapElement._leaflet_map) {
                      const map = mapElement._leaflet_map;
                      const center = map.getCenter();
                      const zoom = map.getZoom();
                      const currentView = {
                        lat: center.lat,
                        lng: center.lng,
                        zoom: zoom
                      };
                      console.log('🗺️ Home: Manually saving view before navigation:', currentView);
                      try {
                        sessionStorage.setItem('homePageMapView', JSON.stringify(currentView));
                        setSavedMapView(currentView);
                      } catch (error) {
                        console.error('Home: Error saving view before navigation:', error);
                      }
                    }
                    
                    const templateUrl = getReactTemplateUrl(park.name);
                    if (templateUrl) {
                      navigate(templateUrl);
                    } else {
                      console.log(`Home: No template available for ${park.name}`);
                    }
                  }}
                />
              )}
            </div>

            {/* Map Legend */}
            <div className="mt-4 bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3 text-center">Season Legend</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <div>
                    <div className="font-medium text-green-800">Off-Season</div>
                    <div className="text-sm text-green-600">Fewer crowds • Lower prices</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <div>
                    <div className="font-medium text-yellow-800">Shoulder Season</div>
                    <div className="text-sm text-yellow-600">Moderate crowds • Good value</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <div>
                    <div className="font-medium text-red-800">Peak Season</div>
                    <div className="text-sm text-red-600">High crowds • Premium prices</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}