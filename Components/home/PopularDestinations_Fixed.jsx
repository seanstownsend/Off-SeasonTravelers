import React, { useState, useEffect } from "react";
import { 
  MapPin, 
  Thermometer, 
  DollarSign,
  ArrowRight,
  Sparkles,
  Calendar,
  Star,
  Heart,
  TrendingUp,
  Filter
} from "lucide-react";
import { destinationService } from "../../lib/database.js";

export default function PopularDestinations({ 
  title = "Popular Off-Season Destinations", 
  subtitle = "Discover amazing places to visit during their quiet seasons",
  selectedMonth = null
}) {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [favorites, setFavorites] = useState(new Set());

  // Load destinations on mount and when selectedMonth changes
  useEffect(() => {
    loadDestinations();
  }, [selectedMonth]);

  const loadDestinations = async () => {
    try {
      setLoading(true);
      let result;
      
      if (selectedMonth) {
        result = await destinationService.getByMonth(selectedMonth);
      } else {
        result = await destinationService.getAll();
      }
      
      if (result.error || !result.data) {
        // Fallback to mock data if Supabase fails
        console.log('Using mock destinations data');
        setDestinations(mockDestinations);
      } else {
        // Convert Supabase data to component format
        const formattedDestinations = result.data.map((dest, index) => ({
          id: dest.id || index,
          name: dest.name,
          country: dest.name.split(', ')[1] || 'Unknown',
          continent: formatRegion(dest.region),
          image: dest.image_url || `https://images.unsplash.com/photo-${1493976040374 + index}?w=500&q=80`,
          off_season_months: dest.best_off_season?.map(m => capitalizeMonth(m)) || [],
          typical_savings: dest.average_savings || '30%',
          temperature: dest.average_temp || '20°C',
          highlights: ['Authentic experience', 'Fewer crowds', 'Local culture'],
          description: dest.description || 'Experience this destination during its perfect off-season time.',
          rating: dest.rating || 4.5,
          trend: 'stable',
          category: dest.category || 'culture'
        }));
        
        setDestinations(formattedDestinations);
      }
    } catch (error) {
      console.log('Error loading destinations, using mock data:', error);
      setDestinations(mockDestinations);
    } finally {
      setLoading(false);
    }
  };

  const formatRegion = (region) => {
    const regionMap = {
      'north_america': 'North America',
      'south_america': 'South America',
      'europe': 'Europe',
      'asia': 'Asia',
      'africa': 'Africa',
      'oceania': 'Oceania'
    };
    return regionMap[region] || region;
  };

  const capitalizeMonth = (month) => {
    return month.charAt(0).toUpperCase() + month.slice(1);
  };

  // Enhanced mock destinations with more data
  const mockDestinations = [
    {
      id: 1,
      name: "Kyoto, Japan",
      country: "Japan",
      continent: "Asia",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&q=80",
      off_season_months: ["November", "December", "January", "February"],
      typical_savings: "45%",
      temperature: "8°C",
      highlights: ["Historic temples", "Cherry blossoms", "Traditional culture"],
      description: "Experience the serene beauty of Kyoto's temples and gardens without the summer crowds.",
      rating: 4.8,
      trend: "rising",
      category: "culture"
    },
    {
      id: 2,
      name: "Barcelona, Spain",
      country: "Spain",
      continent: "Europe", 
      image: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=500&q=80",
      off_season_months: ["November", "December", "January", "February"],
      typical_savings: "35%",
      temperature: "12°C",
      highlights: ["Architecture", "Museums", "Local cuisine"],
      description: "Enjoy Barcelona's Gaudí architecture with comfortable temperatures and fewer tourists.",
      rating: 4.6,
      trend: "stable",
      category: "city"
    },
    {
      id: 3,
      name: "Dubai, UAE",
      country: "UAE",
      continent: "Asia",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=500&q=80",
      off_season_months: ["May", "June", "July", "August", "September"],
      typical_savings: "50%",
      temperature: "35°C",
      highlights: ["Modern architecture", "Shopping", "Desert adventures"],
      description: "Experience luxury and innovation with significant savings during the hot season.",
      rating: 4.5,
      trend: "stable",
      category: "city"
    },
    {
      id: 4,
      name: "Patagonia, Chile",
      country: "Chile",
      continent: "South America",
      image: "https://images.unsplash.com/photo-1544994148-ff32dc4024d3?w=500&q=80",
      off_season_months: ["April", "May", "June", "July", "August"],
      typical_savings: "40%",
      temperature: "2°C",
      highlights: ["Dramatic landscapes", "Wildlife", "Hiking"],
      description: "Discover pristine wilderness and dramatic mountain scenery during the quieter winter months.",
      rating: 4.9,
      trend: "rising",
      category: "nature"
    },
    {
      id: 5,
      name: "Bali, Indonesia",
      country: "Indonesia",
      continent: "Asia",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=500&q=80",
      off_season_months: ["January", "February", "March", "November", "December"],
      typical_savings: "30%",
      temperature: "26°C",
      highlights: ["Temples", "Rice terraces", "Beaches"],
      description: "Experience spiritual culture and tropical beauty with fewer crowds and lower prices.",
      rating: 4.4,
      trend: "stable",
      category: "tropical"
    }
  ];

  const displayDestinations = destinations.length > 0 ? destinations : mockDestinations;

  const filterOptions = [
    { value: 'all', label: 'All Destinations' },
    { value: 'culture', label: 'Cultural' },
    { value: 'nature', label: 'Nature' },
    { value: 'city', label: 'City' },
    { value: 'tropical', label: 'Tropical' }
  ];

  const filteredDestinations = (() => {
    let filtered = selectedFilter === 'all' 
      ? displayDestinations 
      : displayDestinations.filter(dest => dest.category === selectedFilter);
    
    // Further filter by selected month if provided
    if (selectedMonth) {
      const monthName = selectedMonth.charAt(0).toUpperCase() + selectedMonth.slice(1);
      filtered = filtered.filter(dest => 
        dest.off_season_months.includes(monthName)
      );
    }
    
    return filtered;
  })();

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case 'rising': return <TrendingUp className="w-4 h-4 text-green-500" />;
      default: return null;
    }
  };

  const getSavingsColor = (savings) => {
    const percent = parseInt(savings);
    if (percent >= 50) return 'text-green-600 bg-green-50';
    if (percent >= 40) return 'text-blue-600 bg-blue-50';
    return 'text-orange-600 bg-orange-50';
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
          <p className="text-slate-600">{subtitle}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 animate-pulse">
              <div className="bg-slate-200 h-48 rounded-lg mb-4"></div>
              <div className="bg-slate-200 h-6 rounded w-3/4 mb-2"></div>
              <div className="bg-slate-200 h-4 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">{title}</h2>
        <p className="text-slate-600">{subtitle}</p>
        
        {selectedMonth && (
          <div className="mt-4 flex items-center justify-center gap-2 text-blue-600">
            <Calendar className="w-4 h-4" />
            <span className="text-sm font-medium">
              Filtering for {selectedMonth.charAt(0).toUpperCase() + selectedMonth.slice(1)}
            </span>
          </div>
        )}
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {filterOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => setSelectedFilter(option.value)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
              selectedFilter === option.value
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDestinations.map((destination) => (
          <div key={destination.id} className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200 hover:shadow-lg transition-all duration-300 group">
            {/* Image */}
            <div className="relative h-48 bg-gradient-to-r from-slate-300 to-slate-400">
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin className="w-12 h-12 text-white/60" />
              </div>
              
              {/* Badges */}
              <div className="absolute top-3 left-3 flex gap-2">
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getSavingsColor(destination.typical_savings)}`}>
                  Save {destination.typical_savings}
                </span>
                {getTrendIcon(destination.trend)}
              </div>

              {/* Favorite Button */}
              <button
                onClick={() => toggleFavorite(destination.id)}
                className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white transition-all duration-200 shadow-sm"
              >
                <Heart className={`w-4 h-4 ${favorites.has(destination.id) ? 'text-red-500 fill-current' : 'text-slate-600'}`} />
              </button>
            </div>

            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                    {destination.name}
                  </h3>
                  <p className="text-slate-500 text-sm">{destination.country}</p>
                </div>
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-medium text-slate-700">{destination.rating}</span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="flex items-center gap-4 mb-4 text-sm text-slate-600">
                <div className="flex items-center gap-1">
                  <Thermometer className="w-4 h-4" />
                  {destination.temperature}
                </div>
                <div className="flex items-center gap-1">
                  <DollarSign className="w-4 h-4" />
                  Save {destination.typical_savings}
                </div>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-sm mb-4">{destination.description}</p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-1 mb-4">
                {destination.highlights.slice(0, 3).map((highlight, index) => (
                  <span key={index} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full">
                    {highlight}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <button 
                onClick={() => {
                  console.log('Destination clicked:', destination.name);
                }}
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-teal-700 transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <Sparkles className="w-4 h-4" />
                Explore {destination.name}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredDestinations.length === 0 && (
        <div className="text-center py-12">
          <div className="text-slate-400 mb-4">
            <Filter className="w-16 h-16 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-slate-900 mb-2">No destinations found</h3>
          <p className="text-slate-600">
            Try adjusting your filters or selecting a different month.
          </p>
        </div>
      )}
    </div>
  );
}