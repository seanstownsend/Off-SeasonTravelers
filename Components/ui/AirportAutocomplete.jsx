import React, { useState, useEffect, useRef } from 'react';
import { supabase } from '../../lib/supabase.js';
import { Plane, ChevronDown } from 'lucide-react';

export default function AirportAutocomplete({ value, onChange, placeholder = "Select or type airport" }) {
  const [airports, setAirports] = useState([]);
  const [filteredAirports, setFilteredAirports] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [inputValue, setInputValue] = useState(value || '');
  const [loading, setLoading] = useState(true);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    console.log('AirportAutocomplete: Component mounted, loading airports...');
    loadAirports();
  }, []);

  useEffect(() => {
    setInputValue(value || '');
  }, [value]);

  useEffect(() => {
    // Filter airports based on input
    if (inputValue.length >= 1) {
      const filtered = airports.filter(airport => 
        airport.code.toLowerCase().includes(inputValue.toLowerCase()) ||
        airport.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        airport.city.toLowerCase().includes(inputValue.toLowerCase()) ||
        airport.state.toLowerCase().includes(inputValue.toLowerCase())
      ).slice(0, 10); // Limit to 10 results
      setFilteredAirports(filtered);
    } else {
      setFilteredAirports(airports.slice(0, 10));
    }
  }, [inputValue, airports]);

  const loadAirports = async () => {
    try {
      setLoading(true);
      console.log('Loading airports from database...');
      
      const { data, error } = await supabase
        .from('airports')
        .select('*')
        .eq('is_major', true)
        .order('code');

      if (error) {
        console.error('Error loading airports from database:', error);
        console.log('Using fallback airport list...');
        
        // Fallback to hardcoded major airports if database table doesn't exist
        const fallbackAirports = [
          { code: 'ATL', name: 'Hartsfield-Jackson Atlanta International Airport', city: 'Atlanta', state: 'Georgia' },
          { code: 'LAX', name: 'Los Angeles International Airport', city: 'Los Angeles', state: 'California' },
          { code: 'ORD', name: 'O\'Hare International Airport', city: 'Chicago', state: 'Illinois' },
          { code: 'DFW', name: 'Dallas/Fort Worth International Airport', city: 'Dallas', state: 'Texas' },
          { code: 'DEN', name: 'Denver International Airport', city: 'Denver', state: 'Colorado' },
          { code: 'JFK', name: 'John F. Kennedy International Airport', city: 'New York', state: 'New York' },
          { code: 'SFO', name: 'San Francisco International Airport', city: 'San Francisco', state: 'California' },
          { code: 'SEA', name: 'Seattle-Tacoma International Airport', city: 'Seattle', state: 'Washington' },
          { code: 'LAS', name: 'Harry Reid International Airport', city: 'Las Vegas', state: 'Nevada' },
          { code: 'MCO', name: 'Orlando International Airport', city: 'Orlando', state: 'Florida' },
          { code: 'EWR', name: 'Newark Liberty International Airport', city: 'Newark', state: 'New Jersey' },
          { code: 'CLT', name: 'Charlotte Douglas International Airport', city: 'Charlotte', state: 'North Carolina' },
          { code: 'PHX', name: 'Phoenix Sky Harbor International Airport', city: 'Phoenix', state: 'Arizona' },
          { code: 'IAH', name: 'George Bush Intercontinental Airport', city: 'Houston', state: 'Texas' },
          { code: 'MIA', name: 'Miami International Airport', city: 'Miami', state: 'Florida' },
          { code: 'BOS', name: 'Logan International Airport', city: 'Boston', state: 'Massachusetts' },
          { code: 'MSP', name: 'Minneapolis-St. Paul International Airport', city: 'Minneapolis', state: 'Minnesota' },
          { code: 'DTW', name: 'Detroit Metropolitan Wayne County Airport', city: 'Detroit', state: 'Michigan' },
          { code: 'PHL', name: 'Philadelphia International Airport', city: 'Philadelphia', state: 'Pennsylvania' },
          { code: 'LGA', name: 'LaGuardia Airport', city: 'New York', state: 'New York' },
          { code: 'BWI', name: 'Baltimore/Washington International Airport', city: 'Baltimore', state: 'Maryland' },
          { code: 'FLL', name: 'Fort Lauderdale-Hollywood International Airport', city: 'Fort Lauderdale', state: 'Florida' },
          { code: 'IAD', name: 'Washington Dulles International Airport', city: 'Washington', state: 'Virginia' },
          { code: 'SLC', name: 'Salt Lake City International Airport', city: 'Salt Lake City', state: 'Utah' },
          { code: 'TPA', name: 'Tampa International Airport', city: 'Tampa', state: 'Florida' },
          { code: 'PDX', name: 'Portland International Airport', city: 'Portland', state: 'Oregon' },
          { code: 'AUS', name: 'Austin-Bergstrom International Airport', city: 'Austin', state: 'Texas' },
          { code: 'SAN', name: 'San Diego International Airport', city: 'San Diego', state: 'California' },
          { code: 'STL', name: 'Lambert-St. Louis International Airport', city: 'St. Louis', state: 'Missouri' },
          { code: 'HNL', name: 'Daniel K. Inouye International Airport', city: 'Honolulu', state: 'Hawaii' }
        ];
        
        setAirports(fallbackAirports);
        setFilteredAirports(fallbackAirports.slice(0, 10));
        return;
      }

      console.log('Successfully loaded airports from database:', data?.length || 0, 'airports');
      setAirports(data || []);
      setFilteredAirports((data || []).slice(0, 10));
    } catch (error) {
      console.error('Unexpected error loading airports:', error);
      // Use empty array as final fallback
      setAirports([]);
      setFilteredAirports([]);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    setShowDropdown(true);
    onChange(newValue);
  };

  const handleAirportSelect = (airport) => {
    const selectedValue = `${airport.code} - ${airport.name}`;
    setInputValue(selectedValue);
    setShowDropdown(false);
    onChange(selectedValue);
    inputRef.current?.blur();
  };

  const handleInputFocus = () => {
    setShowDropdown(true);
  };

  const handleInputBlur = (e) => {
    // Delay hiding dropdown to allow clicks on options
    setTimeout(() => {
      if (!dropdownRef.current?.contains(document.activeElement)) {
        setShowDropdown(false);
      }
    }, 150);
  };

  if (loading) {
    return (
      <div className="relative">
        <input
          type="text"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200 bg-gray-50"
          placeholder="Loading airports..."
          disabled
        />
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors duration-200"
          placeholder={placeholder}
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>

      {showDropdown && (
        <div 
          ref={dropdownRef}
          className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto"
        >
          {filteredAirports.length > 0 ? (
            filteredAirports.map((airport) => (
              <button
                key={airport.code}
                type="button"
                onClick={() => handleAirportSelect(airport)}
                className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none border-b border-gray-100 last:border-b-0"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-amber-100 flex-shrink-0">
                    <Plane className="w-4 h-4 text-amber-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-900">{airport.code}</span>
                      <span className="text-sm text-gray-500">•</span>
                      <span className="text-sm text-gray-600">{airport.city}, {airport.state}</span>
                    </div>
                    <p className="text-sm text-gray-500 truncate">{airport.name}</p>
                  </div>
                </div>
              </button>
            ))
          ) : (
            <div className="px-4 py-3 text-gray-500 text-sm">
              {inputValue ? 'No airports found. You can still type a custom airport code.' : 'Start typing to search airports...'}
            </div>
          )}
        </div>
      )}
    </div>
  );
}