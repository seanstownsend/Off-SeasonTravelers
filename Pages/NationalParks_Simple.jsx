import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Trees, MapPin, Thermometer, ArrowRight, Leaf, Mountain, Camera } from "lucide-react";
import NationalParksMap from "../Components/ui/NationalParksMap.jsx";
import { nationalParksService } from "../lib/database.js";

const mockNationalParks = [
  {
    id: 1,
    name: "Yosemite National Park",
    country: "United States",
    state: "California",
    bestOffSeasonMonths: ["november", "december", "january", "february"],
    temperature: "8°C",
    description: "Experience the park's winter beauty with snow-capped peaks and fewer crowds at iconic locations like Half Dome and El Capitan.",
    savings: "60%",
    features: ["Waterfalls", "Rock Formations", "Winter Photography"],
    difficulty: "Moderate"
  },
  {
    id: 2,
    name: "Banff National Park", 
    country: "Canada",
    state: "Alberta",
    bestOffSeasonMonths: ["september", "october", "april", "may"],
    temperature: "5°C",
    description: "Fall colors and spring awakening offer spectacular mountain views without summer crowds on Lake Louise and Moraine Lake.",
    savings: "45%",
    features: ["Mountain Lakes", "Wildlife", "Hiking"],
    difficulty: "Easy to Hard"
  },
  {
    id: 3,
    name: "Yellowstone National Park",
    country: "United States", 
    state: "Wyoming",
    bestOffSeasonMonths: ["april", "may", "september", "october"],
    temperature: "10°C",
    description: "Shoulder seasons offer perfect wildlife viewing and geothermal features without summer crowds.",
    savings: "50%",
    features: ["Geysers", "Wildlife", "Hot Springs"],
    difficulty: "Easy to Moderate"
  }
];

export default function NationalParks() {
  const navigate = useNavigate();
  
  // Get current month in the format used by our months array
  const getCurrentMonth = () => {
    const monthNames = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 
                       'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    const currentMonthIndex = new Date().getMonth();
    return monthNames[currentMonthIndex];
  };

  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState(getCurrentMonth());
  const [mapParks, setMapParks] = useState([]);
  const [mapLoading, setMapLoading] = useState(true);
  const [savedMapView, setSavedMapView] = useState(null);
  
  // Debug selectedMonth changes
  useEffect(() => {
    console.log('🎯 Selected month changed to:', selectedMonth);
  }, [selectedMonth]);

  // Load national parks data and restore map view on component mount
  useEffect(() => {
    loadNationalParks();
    
    // Restore saved map view from sessionStorage
    const savedView = sessionStorage.getItem('nationalParksMapView');
    if (savedView) {
      try {
        const parsedView = JSON.parse(savedView);
        console.log('🗺️ Restoring saved map view:', parsedView);
        setSavedMapView(parsedView);
      } catch (error) {
        console.error('Error parsing saved map view:', error);
        sessionStorage.removeItem('nationalParksMapView');
      }
    }
  }, []);

  const loadNationalParks = async () => {
    try {
      setLoading(true);
      console.log('🔄 Starting loadNationalParks...');
      console.log('🌐 Supabase URL:', import.meta.env.VITE_SUPABASE_URL);
      console.log('🔑 Has Supabase Key:', !!import.meta.env.VITE_SUPABASE_ANON_KEY);
      
      console.log('📡 Calling nationalParksService.getAll()...');
      const result = await nationalParksService.getAll();
      console.log('📊 Raw result from nationalParksService:', result);
      
      const { data, error } = result;
      console.log('📋 Extracted data:', data);
      console.log('❌ Extracted error:', error);
      
      if (error) {
        console.error('❌ Database error detected, using mock data:', error);
        console.error('❌ Error details:', {
          message: error.message,
          code: error.code,
          details: error.details
        });
        setDestinations(mockNationalParks);
      } else if (!data) {
        console.log('📭 Data is null/undefined, using mock data');
        setDestinations(mockNationalParks);
      } else if (data.length === 0) {
        console.log('📭 Data array is empty, using mock data');
        setDestinations(mockNationalParks);
      } else {
        console.log('✅ Successfully loaded database data:', data);
        console.log(`📈 Found ${data.length} parks in database`);
        
        // Log first park details and available columns
        if (data[0]) {
          console.log('🏞️ Available columns:', Object.keys(data[0]));
          console.log('🏞️ First park raw data:', data[0]);
        }
        
        // Convert database format to component format - be flexible with column names
        const formattedParks = data.map(park => {
          // Try different possible column name variations
          const getId = () => park.ID || park.id || park.Id || park.idx;
          const getName = () => park.Name || park.name || park.park_name || 'Unknown Park';
          
          // Get state from database or map from park name
          const getState = () => {
            // First try database state columns
            const dbState = park.State || park.state || park.location;
            if (dbState && dbState !== 'Unknown' && dbState.length > 0) {
              return dbState;
            }
            
            // Map park names to states if database doesn't have state info
            const parkName = getName().toLowerCase();
            const stateMapping = {
              'acadia': 'Maine',
              'arches': 'Utah',
              'badlands': 'South Dakota',
              'big bend': 'Texas',
              'biscayne': 'Florida',
              'black canyon': 'Colorado',
              'bryce canyon': 'Utah',
              'canyonlands': 'Utah',
              'capitol reef': 'Utah',
              'carlsbad caverns': 'New Mexico',
              'channel islands': 'California',
              'congaree': 'South Carolina',
              'crater lake': 'Oregon',
              'cuyahoga valley': 'Ohio',
              'death valley': 'California',
              'denali': 'Alaska',
              'dry tortugas': 'Florida',
              'everglades': 'Florida',
              'gates of the arctic': 'Alaska',
              'gateway arch': 'Missouri',
              'glacier bay': 'Alaska',
              'glacier national park': 'Montana',
              'grand canyon': 'Arizona',
              'grand teton': 'Wyoming',
              'great basin': 'Nevada',
              'great sand dunes': 'Colorado',
              'great smoky mountains': 'Tennessee',
              'guadalupe mountains': 'Texas',
              'haleakala': 'Hawaii',
              'hawaii volcanoes': 'Hawaii',
              'hot springs': 'Arkansas',
              'indiana dunes': 'Indiana',
              'isle royale': 'Michigan',
              'joshua tree': 'California',
              'katmai': 'Alaska',
              'kenai fjords': 'Alaska',
              'kings canyon': 'California',
              'kobuk valley': 'Alaska',
              'lake clark': 'Alaska',
              'lassen volcanic': 'California',
              'mammoth cave': 'Kentucky',
              'mesa verde': 'Colorado',
              'mount rainier': 'Washington',
              'american samoa': 'American Samoa',
              'new river gorge': 'West Virginia',
              'north cascades': 'Washington',
              'olympic': 'Washington',
              'petrified forest': 'Arizona',
              'pinnacles': 'California',
              'redwood': 'California',
              'rocky mountain': 'Colorado',
              'saguaro': 'Arizona',
              'sequoia': 'California',
              'shenandoah': 'Virginia',
              'theodore roosevelt': 'North Dakota',
              'virgin islands': 'U.S. Virgin Islands',
              'voyageurs': 'Minnesota',
              'white sands': 'New Mexico',
              'wind cave': 'South Dakota',
              'wrangell': 'Alaska',
              'yellowstone': 'Wyoming',
              'yosemite': 'California'
            };
            
            // Find matching state
            for (const [keyword, state] of Object.entries(stateMapping)) {
              if (parkName.includes(keyword)) {
                return state;
              }
            }
            
            return 'Unknown State';
          };
          const getDescription = () => park.Description || park.description || park.summary || `A beautiful national park with unique features and landscapes. Best visited in ${park['best month'] || 'fall'}.`;
          
          // Extract visitation data for all months
          const getVisitationData = () => {
            const visitation = {};
            const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
            months.forEach(month => {
              // Try different possible column name formats
              const visitationValue = park[`visitation_${month}`] || 
                                    park[`Visitation_${month}`] || 
                                    park[`${month.toUpperCase()}`] || 
                                    park[`${month}`] ||
                                    park[`2024 ${month.charAt(0).toUpperCase() + month.slice(1)}`];
              if (visitationValue !== undefined && visitationValue !== null) {
                visitation[`visitation_${month}`] = visitationValue;
              }
            });
            return Object.keys(visitation).length > 0 ? visitation : null;
          };

          // Extract coordinates
          const getCoords = () => {
            const lat = park.latitude || park.Latitude || park.lat || park.Lat;
            const lng = park.longitude || park.Longitude || park.lng || park.Lng || park.lon || park.Lon;
            return (lat && lng) ? [parseFloat(lat), parseFloat(lng)] : null;
          };
          
          console.log('🔄 Processing park:', {
            rawPark: park,
            extractedId: getId(),
            extractedName: getName(),
            extractedState: getState(),
            extractedVisitation: getVisitationData(),
            extractedCoords: getCoords()
          });
          
          return {
            id: getId(),
            name: getName(),
            country: "United States", // Default since all US national parks
            state: getState(),
            coords: getCoords(),
            visitation: getVisitationData(),
            bestOffSeasonMonths: ["september", "october", "april", "may"], // Default values
            temperature: "Variable",
            description: getDescription(),
            savings: "40-60%",
            features: ["Natural Beauty", "Wildlife", "Hiking"],
            difficulty: "Easy to Moderate"
          };
        });
        
        console.log('🎯 Formatted parks for display:', formattedParks);
        setDestinations(formattedParks);
      }
      
      // Also load map parks
      loadMapParks();
    } catch (err) {
      console.error('💥 Exception in loadNationalParks:', err);
      console.error('💥 Exception details:', {
        message: err.message,
        stack: err.stack,
        name: err.name
      });
      setDestinations(mockNationalParks);
      loadMapParks();
    } finally {
      setLoading(false);
    }
  };

  const loadMapParks = async () => {
    try {
      setMapLoading(true);
      console.log('Loading map parks data...');
      const { data, error } = await nationalParksService.getAll();
      
      if (error) {
        console.error('Map parks database error:', error);
        // Use sample parks for map if database fails - includes all Alaska and Florida parks
        const sampleMapParks = [
          { name: "Yellowstone National Park", state: "Wyoming", coords: [44.4280, -110.5885] },
          { name: "Grand Canyon National Park", state: "Arizona", coords: [36.1069, -112.1129] },
          { name: "Yosemite National Park", state: "California", coords: [37.8651, -119.5383] },
          // Alaska Parks
          { name: "Denali National Park", state: "Alaska", coords: [63.115, -150.766] },
          { name: "Katmai National Park", state: "Alaska", coords: [58.5, -155.0] },
          { name: "Kenai Fjords National Park", state: "Alaska", coords: [59.9, -149.9] },
          { name: "Glacier Bay National Park", state: "Alaska", coords: [58.665, -136.900] },
          { name: "Gates of the Arctic National Park", state: "Alaska", coords: [67.78, -153.25] },
          { name: "Lake Clark National Park", state: "Alaska", coords: [60.97, -153.42] },
          { name: "Kobuk Valley National Park", state: "Alaska", coords: [67.35, -159.28] },
          { name: "Wrangell-St. Elias National Park and Preserve", state: "Alaska", coords: [61.710, -142.985] },
          // Florida Parks
          { name: "Everglades National Park", state: "Florida", coords: [25.2866, -80.8987] },
          { name: "Biscayne National Park", state: "Florida", coords: [25.490, -80.210] },
          { name: "Dry Tortugas National Park", state: "Florida", coords: [24.628, -82.873] },
          // Pacific Parks
          { name: "Hawaii Volcanoes National Park", state: "Hawaii", coords: [19.4194, -155.2885] },
          { name: "Haleakalā National Park", state: "Hawaii", coords: [20.7201, -156.2539] },
          { name: "National Park of American Samoa", state: "American Samoa", coords: [-14.2581, -170.6850] },
          { name: "Virgin Islands National Park", state: "U.S. Virgin Islands", coords: [18.3425, -64.7296] },
          // Additional Parks
          { name: "Hot Springs National Park", state: "Arkansas", coords: [34.5117, -93.0428] },
          { name: "Gateway Arch National Park", state: "Missouri", coords: [38.6247, -90.1848] },
          { name: "Mammoth Cave National Park", state: "Kentucky", coords: [37.1861, -86.1003] },
          { name: "Cuyahoga Valley National Park", state: "Ohio", coords: [41.2808, -81.5678] },
          { name: "New River Gorge National Park and Preserve", state: "West Virginia", coords: [37.7298, -81.0742] },
          { name: "Shenandoah National Park", state: "Virginia", coords: [38.2928, -78.6795] }
        ];
        setMapParks(sampleMapParks);
      } else if (!data || data.length === 0) {
        console.log('No map parks data in database, using sample parks');
        // Use the same sample parks when database is empty
        const sampleMapParks = [
          { name: "Yellowstone National Park", state: "Wyoming", coords: [44.4280, -110.5885] },
          { name: "Grand Canyon National Park", state: "Arizona", coords: [36.1069, -112.1129] },
          { name: "Yosemite National Park", state: "California", coords: [37.8651, -119.5383] },
          // Alaska Parks
          { name: "Denali National Park", state: "Alaska", coords: [63.115, -150.766] },
          { name: "Katmai National Park", state: "Alaska", coords: [58.5, -155.0] },
          { name: "Kenai Fjords National Park", state: "Alaska", coords: [59.9, -149.9] },
          { name: "Glacier Bay National Park", state: "Alaska", coords: [58.665, -136.900] },
          { name: "Gates of the Arctic National Park", state: "Alaska", coords: [67.78, -153.25] },
          { name: "Lake Clark National Park", state: "Alaska", coords: [60.97, -153.42] },
          { name: "Kobuk Valley National Park", state: "Alaska", coords: [67.35, -159.28] },
          { name: "Wrangell-St. Elias National Park and Preserve", state: "Alaska", coords: [61.710, -142.985] },
          // Florida Parks
          { name: "Everglades National Park", state: "Florida", coords: [25.2866, -80.8987] },
          { name: "Biscayne National Park", state: "Florida", coords: [25.490, -80.210] },
          { name: "Dry Tortugas National Park", state: "Florida", coords: [24.628, -82.873] },
          // Pacific Parks
          { name: "Hawaii Volcanoes National Park", state: "Hawaii", coords: [19.4194, -155.2885] },
          { name: "Haleakalā National Park", state: "Hawaii", coords: [20.7201, -156.2539] },
          { name: "National Park of American Samoa", state: "American Samoa", coords: [-14.2581, -170.6850] },
          // Additional Parks
          { name: "Hot Springs National Park", state: "Arkansas", coords: [34.5117, -93.0428] },
          { name: "Gateway Arch National Park", state: "Missouri", coords: [38.6247, -90.1848] },
          { name: "Mammoth Cave National Park", state: "Kentucky", coords: [37.1861, -86.1003] },
          { name: "Cuyahoga Valley National Park", state: "Ohio", coords: [41.2808, -81.5678] },
          { name: "New River Gorge National Park and Preserve", state: "West Virginia", coords: [37.7298, -81.0742] },
          { name: "Shenandoah National Park", state: "Virginia", coords: [38.2928, -78.6795] },
          { name: "Virgin Islands National Park", state: "U.S. Virgin Islands", coords: [18.3425, -64.7296] }
        ];
        setMapParks(sampleMapParks);
      } else {
        console.log('Successfully loaded map parks:', data);
        const formattedParks = data.map(park => {
          // Parse coordinates from string format like "48.7561° N" and "113.7797° W"
          const parseCoordinate = (coordStr, isLongitude = false) => {
            if (!coordStr) return 0;
            
            console.log(`🗺️ Parsing coordinate: "${coordStr}"`);
            
            // Extract the numeric part
            const numMatch = coordStr.toString().match(/[\d.-]+/);
            let coord = numMatch ? parseFloat(numMatch[0]) : 0;
            
            // Handle hemisphere indicators
            const coordUpper = coordStr.toString().toUpperCase();
            if (coordUpper.includes('S') || coordUpper.includes('W')) {
              coord = -Math.abs(coord);
            }
            
            console.log(`🗺️ Parsed "${coordStr}" to ${coord}`);
            return coord;
          };

          const latitude = parseCoordinate(park.latitude || park.Latitude);
          const longitude = parseCoordinate(park.longitude || park.Longitude, true);
          
          // Extract visitation data for map parks too
          const getVisitationData = () => {
            const visitation = {};
            const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
            months.forEach(month => {
              const visitationValue = park[`visitation_${month}`] || 
                                    park[`Visitation_${month}`] || 
                                    park[`${month.toUpperCase()}`] || 
                                    park[`${month}`] ||
                                    park[`2024 ${month.charAt(0).toUpperCase() + month.slice(1)}`];
              if (visitationValue !== undefined && visitationValue !== null) {
                visitation[`visitation_${month}`] = visitationValue;
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
          
          console.log('🗺️ Formatted park for map:', formattedPark);
          return formattedPark;
        });
        
        console.log('🗺️ All formatted parks for map:', formattedParks);
        setMapParks(formattedParks);
      }
    } catch (err) {
      console.error('Error loading map parks:', err.message);
      setMapParks([]);
    } finally {
      setMapLoading(false);
    }
  };

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
  
  // No filtering needed for destinations - we'll show all parks and let the map icons change color
  const filteredDestinations = destinations;

  // Create mapping for park names to React template URLs  
  const getReactTemplateUrl = (parkName) => {
    console.log('🔍 getReactTemplateUrl called with park name:', parkName);
    console.log('🔍 Park name type:', typeof parkName);
    console.log('🔍 Park name length:', parkName?.length);
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
      console.log('✅ Found exact match for:', parkName, '→', parkMappings[parkName]);
      return parkMappings[parkName];
    }

    console.log('❌ No exact match found for:', parkName);
    console.log('🔍 Available park names:', Object.keys(parkMappings));

    // Try partial matching for variations in naming - be more specific
    const lowerParkName = parkName.toLowerCase();
    console.log('🔍 Lower case park name:', lowerParkName);
    
    // Handle Hawaii parks FIRST and most specifically 
    if ((lowerParkName.includes('hawaii') && lowerParkName.includes('volcanoes')) || 
        (lowerParkName.includes('hawaii') && lowerParkName.includes('volcanoes'))) {
      console.log('✅ Matched hawaii volcanoes');
      return '/hawaii-volcanoes-react';
    }
    if (lowerParkName.includes('haleakala') || lowerParkName.includes('haleakalā')) {
      console.log('✅ Matched haleakala');
      return '/haleakala-react';
    }
    
    // Handle Indiana Dunes specifically to prevent incorrect matches
    if (lowerParkName.includes('indiana') && lowerParkName.includes('dunes')) {
      console.log('✅ Matched indiana dunes');
      return '/indiana-dunes-react';
    }
    
    // Handle specific cases that might conflict
    if (lowerParkName.includes('glacier bay')) {
      console.log('✅ Matched glacier bay');
      return '/glacier-bay-react';
    }
    if (lowerParkName.includes('glacier') && !lowerParkName.includes('bay')) {
      console.log('✅ Matched glacier (not bay)');
      return '/glacier-react';
    }
    if (lowerParkName.includes('gates') && lowerParkName.includes('arctic')) {
      console.log('✅ Matched gates of the arctic');
      return '/gates-of-the-arctic-react';
    }
    
    // Handle American Samoa AFTER Hawaii parks and be more specific
    if ((lowerParkName.includes('american samoa') || 
         lowerParkName.includes('national park of american samoa')) &&
        !lowerParkName.includes('hawaii') && !lowerParkName.includes('volcanoes')) {
      console.log('✅ Matched american samoa');
      return '/american-samoa-react';
    }
    
    // General partial matching for other parks
    console.log('🔍 Checking general partial matching...');
    for (const [key, url] of Object.entries(parkMappings)) {
      const keyWords = key.toLowerCase().split(' ');
      const firstWord = keyWords[0];
      
      // For single word parks, need exact match of first word
      if (keyWords.length <= 2 && lowerParkName.includes(firstWord)) {
        console.log('🎯 General match found (short):', key, '→', url);
        return url;
      }
      // For multi-word parks, check for unique combinations
      if (keyWords.length > 2) {
        const uniqueCombo = keyWords.slice(0, 2).join(' ');
        if (lowerParkName.includes(uniqueCombo)) {
          console.log('🎯 General match found (long):', key, '→', url, 'via combo:', uniqueCombo);
          return url;
        }
      }
    }

    console.log('❌ No matches found, returning null');
    return null; // No template available
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case "easy": return "bg-green-100 text-green-800";
      case "moderate": return "bg-yellow-100 text-yellow-800";
      case "hard": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  // Handle map view changes and save to sessionStorage
  const handleMapViewChange = (viewState) => {
    console.log('🗺️ Saving map view to sessionStorage:', viewState);
    try {
      sessionStorage.setItem('nationalParksMapView', JSON.stringify(viewState));
      setSavedMapView(viewState);
    } catch (error) {
      console.error('Error saving map view to sessionStorage:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Trees className="w-8 h-8 text-green-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">National Parks Off-Season</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the natural beauty of national parks during their quieter seasons.
            Experience pristine wilderness with fewer crowds and significant savings.
          </p>
        </div>

        {/* Month Filter */}
        <div className="bg-white rounded-lg border p-6 mb-8">
          <h2 className="text-lg font-semibold mb-4">Filter by Month</h2>
          <div className="month-bar">
            {months.map((month) => (
              <a
                key={month.value || 'all'}
                onClick={() => {
                  console.log('🎯 Setting selected month to:', month.value);
                  setSelectedMonth(month.value);
                }}
                className={`month-btn ${month.value} ${selectedMonth === month.value ? 'active' : ''}`}
              >
                {month.label}
              </a>
            ))}
          </div>
        </div>

        {/* Interactive Map Section */}
        <div className="bg-white rounded-lg border p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <MapPin className="w-5 h-5 text-green-600" />
              Interactive National Parks Map
            </h2>
          </div>
          <div className="bg-gray-50 rounded-xl overflow-hidden">
            {mapLoading ? (
              <div className="h-[500px] flex items-center justify-center">
                <div className="text-gray-600">Loading national parks map...</div>
              </div>
            ) : (
              <NationalParksMap
                nationalParks={mapParks}
                selectedMonth={selectedMonth}
                initialView={savedMapView}
                onMapViewChange={handleMapViewChange}
                onParkClick={(park) => {
                  console.log('Park clicked:', park);
                  const templateUrl = getReactTemplateUrl(park.name);
                  if (templateUrl) {
                    navigate(templateUrl);
                  } else {
                    console.log(`No template available for ${park.name}`);
                  }
                }}
              />
            )}
          </div>
        </div>

        {/* National Parks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((park) => (
            <div key={park.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              {/* Header */}
              <div className="p-6 text-white" style={{background: "linear-gradient(90deg, #2f3e46, #354f52)"}}>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{park.name}</h3>
                    <div className="flex items-center text-white">
                      <MapPin className="w-4 h-4 mr-1 text-white" />
                      <span className="text-sm text-white">{park.state}, {park.country}</span>
                    </div>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-lg p-2">
                    <Mountain className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Temperature and Savings */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-600">
                    <Thermometer className="w-4 h-4 mr-2" />
                    <span className="text-sm">Avg: {park.temperature}</span>
                  </div>
                  <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full">
                    Save {park.savings}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {park.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-2">
                    {park.features.map((feature, index) => (
                      <span key={index} className="text-xs px-2 py-1 rounded-full" style={{background: "rgba(166, 138, 100, 0.1)", color: "#a68a64"}}>
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Difficulty */}
                <div className="mb-4">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getDifficultyColor(park.difficulty)}`}>
                    {park.difficulty}
                  </span>
                </div>

                {/* Best Months */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Best Off-Season Months:</h4>
                  <div className="flex flex-wrap gap-2">
                    {park.bestOffSeasonMonths.map((month, index) => (
                      <span key={index} className="text-xs px-2 py-1 rounded-full capitalize" style={{background: "rgba(47, 62, 70, 0.1)", color: "#2f3e46"}}>
                        {month}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                {(() => {
                  const templateUrl = getReactTemplateUrl(park.name);
                  if (templateUrl) {
                    return (
                      <Link 
                        to={templateUrl}
                        className="w-full text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center text-center block" 
                        style={{background: "linear-gradient(90deg, #a68a64, #b99b74)"}}
                      >
                        <span>Explore {park.name}</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    );
                  } else {
                    return (
                      <button 
                        className="w-full text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center opacity-75 cursor-not-allowed" 
                        style={{background: "linear-gradient(90deg, #6b7280, #9ca3af)"}}
                        disabled
                      >
                        <span>Template Coming Soon</span>
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    );
                  }
                })()}
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-white rounded-lg border p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Visit National Parks Off-Season?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Peaceful Experience</h3>
              <p className="text-gray-600 text-sm">Enjoy the tranquility of nature without crowded trails and viewpoints.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Perfect Photography</h3>
              <p className="text-gray-600 text-sm">Capture stunning landscapes without people in your shots and unique seasonal beauty.</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Trees className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Wildlife Viewing</h3>
              <p className="text-gray-600 text-sm">Better wildlife viewing as animals have different behaviors in off-seasons.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
