import { supabase } from './supabase.js'

// ===== DESTINATIONS SERVICES =====

export const destinationService = {
  // Get all destinations
  async getAll() {
    try {
      console.log('🚀 destinationService.getAll() - Starting database query...');
      
      // First, try to get one record to see what columns exist
      console.log('🔍 Testing destinations2 table with one record...');
      const { data: testData, error: testError } = await supabase
        .from('destinations2')
        .select('*')
        .limit(1);
      
      console.log('🔍 Test query result:', { testData, testError });
      
      if (testError) {
        console.error('❌ Test query failed:', testError);
        throw testError;
      }
      
      if (testData && testData.length > 0) {
        console.log('� Available columns in destinations2:', Object.keys(testData[0]));
        console.log('🔍 Sample record:', testData[0]);
      }
      
      // Now get all records without ordering (in case name column doesn't exist)
      console.log('🔍 Getting all records...');
      const { data, error } = await supabase
        .from('destinations2')
        .select('*');
      
      console.log('📊 Full query result:');
      console.log('  - Data:', data);
      console.log('  - Error:', error);
      console.log('  - Data length:', data ? data.length : 'null');
      
      if (error) {
        console.error('❌ Full query error:', error);
        throw error;
      }
      
      console.log('✅ Database query successful, returning data');
      return { data, error: null }
    } catch (error) {
      console.error('💥 Error in destinationService.getAll():', error);
      console.error('💥 Error details:', {
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint
      });
      return { data: null, error }
    }
  },

  // Get destinations by month
  async getByMonth(month) {
    try {
      const { data, error } = await supabase
        .from('destinations2')
        .select('"ID", "Name", "Continent", "Continent_1", "Latitude", longitude, "Description", "Destination Image", "Off-Season Months", "Lowest Months", "Shoulder Months", "Shoulder Season Months", "Least Visited Month", "Low-Season Month", category, "Annual Visitors", "Created", "Updated"')
        .ilike('"Least Visited Month"', `%${month}%`)
        .order('"Name"')
      
      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error fetching destinations by month:', error)
      return { data: null, error }
    }
  },

  // Get destinations by region
  async getByRegion(region) {
    try {
      const { data, error } = await supabase
        .from('destinations2')
        .select('"ID", "Name", "Continent", "Continent_1", "Latitude", longitude, "Description", "Destination Image", "Off-Season Months", "Lowest Months", "Shoulder Months", "Shoulder Season Months", "Least Visited Month", "Low-Season Month", category, "Annual Visitors", "Created", "Updated"')
        .ilike('"Continent"', `%${region}%`)
        .order('"Name"')
      
      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error fetching destinations by region:', error)
      return { data: null, error }
    }
  },

  // Search destinations
  async search(query) {
    try {
      const { data, error } = await supabase
        .from('destinations2')
        .select('*')
        .or(`name.ilike.%${query}%,region.ilike.%${query}%,description.ilike.%${query}%`)
        .order('name')
      
      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error searching destinations:', error)
      return { data: null, error }
    }
  },

  // Add new destination (admin function)
  async create(destination) {
    try {
      const { data, error } = await supabase
        .from('destinations2')
        .insert([destination])
        .select()
      
      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error creating destination:', error)
      return { data: null, error }
    }
  }
}

// ===== USER PREFERENCES SERVICES =====

export const userPreferencesService = {
  // Get user preferences
  async get(userId) {
    try {
      const { data, error } = await supabase
        .from('user_preferences')
        .select('*')
        .eq('user_id', userId)
        .single()
      
      if (error && error.code !== 'PGRST116') throw error // PGRST116 = no rows returned
      return { data, error: null }
    } catch (error) {
      console.error('Error fetching user preferences:', error)
      return { data: null, error }
    }
  },

  // Update or create user preferences
  async upsert(userId, preferences) {
    try {
      const { data, error } = await supabase
        .from('user_preferences')
        .upsert({ 
          user_id: userId, 
          ...preferences,
          updated_at: new Date().toISOString()
        })
        .select()
      
      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error updating user preferences:', error)
      return { data: null, error }
    }
  }
}

// ===== USER FAVORITES SERVICES =====

export const userFavoritesService = {
  // Get user favorites
  async get(userId) {
    try {
      const { data, error } = await supabase
        .from('user_favorites')
        .select(`
          *,
          destinations2 (*)
        `)
        .eq('user_id', userId)
      
      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error fetching user favorites:', error)
      return { data: null, error }
    }
  },

  // Add favorite
  async add(userId, destinationId) {
    try {
      const { data, error } = await supabase
        .from('user_favorites')
        .insert([{
          user_id: userId,
          destination_id: destinationId
        }])
        .select()
      
      if (error) throw error
      return { data, error: null }
    } catch (error) {
      console.error('Error adding favorite:', error)
      return { data: null, error }
    }
  },

  // Remove favorite
  async remove(userId, destinationId) {
    try {
      const { error } = await supabase
        .from('user_favorites')
        .delete()
        .eq('user_id', userId)
        .eq('destination_id', destinationId)
      
      if (error) throw error
      return { error: null }
    } catch (error) {
      console.error('Error removing favorite:', error)
      return { error }
    }
  },

  // Check if destination is favorited
  async isFavorite(userId, destinationId) {
    try {
      const { data, error } = await supabase
        .from('user_favorites')
        .select('id')
        .eq('user_id', userId)
        .eq('destination_id', destinationId)
        .single()
      
      if (error && error.code !== 'PGRST116') throw error
      return { isFavorite: !!data, error: null }
    } catch (error) {
      console.error('Error checking favorite status:', error)
      return { isFavorite: false, error }
    }
  }
}

// ===== AUTH HELPERS =====

export const authService = {
  // Get current user
  async getCurrentUser() {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      return user
    } catch (error) {
      console.error('Error getting current user:', error)
      return null
    }
  },

  // Sign in with email
  async signIn(email, password) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      
      if (error) throw error
      return { user: data.user, error: null }
    } catch (error) {
      console.error('Error signing in:', error)
      return { user: null, error }
    }
  },

  // Sign up with email
  async signUp(email, password, options = {}) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options
      })
      
      if (error) throw error
      return { user: data.user, error: null }
    } catch (error) {
      console.error('Error signing up:', error)
      return { user: null, error }
    }
  },

  // Sign out
  async signOut() {
    try {
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      return { error: null }
    } catch (error) {
      console.error('Error signing out:', error)
      return { error }
    }
  }
}

// Debug function to test database connection
export const testDatabaseConnection = async () => {
  try {
    console.log('🔍 Testing Supabase connection...');
    
    // First, try to check the connection
    const { data: connectionTest, error: connectionError } = await supabase
      .from('destinations2')
      .select('"Name"', { count: 'exact', head: true })
    
    if (connectionError) {
      console.error('❌ Connection test failed:', connectionError);
      return { connected: false, error: connectionError };
    }
    
    console.log('✅ Connection successful');
    console.log('📊 Table row count:', connectionTest);
    
    // Also test if the table exists by trying to get table info
    const { data: tableTest, error: tableError } = await supabase
      .from('destinations2')
      .select('"ID", "Name", "Continent", "Latitude", longitude, "Description"')
      .limit(1)
    
    if (tableError) {
      console.error('❌ Table access failed:', tableError);
      return { connected: true, tableExists: false, error: tableError };
    }
    
    console.log('✅ Table access successful');
    console.log('📋 Sample data:', tableTest);
    
    return { 
      connected: true, 
      tableExists: true, 
      rowCount: connectionTest?.length, 
      sampleData: tableTest 
    };
    
  } catch (error) {
    console.error('💥 Database connection test failed:', error);
    return { connected: false, error };
  }
};

// ===== NATIONAL PARKS SERVICES =====

// Fallback data for development/testing
const fallbackNationalParksData = [
  // Existing popular parks
  {
    id: 1,
    name: "Yellowstone National Park",
    coords: [44.6074, -110.5645],
    established: "1872",
    area: "2.2 million acres",
    visitors: "4+ million annually",
    description: "World's first national park, famous for geysers and wildlife"
  },
  {
    id: 2,
    name: "Grand Canyon National Park",
    coords: [36.1069, -112.1129],
    established: "1919",
    area: "1.2 million acres", 
    visitors: "5+ million annually",
    description: "Iconic canyon carved by the Colorado River"
  },
  {
    id: 3,
    name: "Yosemite National Park",
    coords: [37.8651, -119.5383],
    established: "1890",
    area: "1,200 square miles",
    visitors: "4+ million annually", 
    description: "Famous for granite cliffs, waterfalls, and giant sequoias"
  },
  {
    id: 4,
    name: "Zion National Park",
    coords: [37.2982, -113.0263],
    established: "1919",
    area: "229 square miles",
    visitors: "4+ million annually",
    description: "Red rock canyons and emerald pools"
  },
  {
    id: 5,
    name: "Glacier National Park", 
    coords: [48.7596, -113.7870],
    established: "1910",
    area: "1 million acres",
    visitors: "3+ million annually",
    description: "Pristine wilderness with over 700 miles of trails"
  },
  {
    id: 6,
    name: "Great Smoky Mountains National Park",
    coords: [35.6532, -83.5070],
    established: "1934", 
    area: "522,427 acres",
    visitors: "12+ million annually",
    description: "Most visited national park, known for biodiversity"
  },
  {
    id: 7,
    name: "Rocky Mountain National Park",
    coords: [40.3428, -105.6836],
    established: "1915",
    area: "415 square miles", 
    visitors: "4+ million annually",
    description: "High altitude wilderness with alpine lakes"
  },
  {
    id: 8,
    name: "Acadia National Park",
    coords: [44.3386, -68.2733],
    established: "1916",
    area: "47,000 acres",
    visitors: "3+ million annually",
    description: "Rugged coastline and pristine lakes in Maine"
  },
  // New Mexico and Texas National Parks - NEWLY ADDED
  {
    id: 9,
    name: "Big Bend National Park",
    coords: [29.1275, -103.2425],
    established: "1944",
    area: "1,252 square miles",
    visitors: "500,000+ annually",
    description: "Remote desert wilderness along the Rio Grande in Texas"
  },
  {
    id: 10,
    name: "Carlsbad Caverns National Park", 
    coords: [32.1479, -104.5567],
    established: "1930",
    area: "73 square miles",
    visitors: "440,000+ annually",
    description: "Underground wonder with massive limestone chambers in New Mexico"
  },
  {
    id: 11,
    name: "Guadalupe Mountains National Park",
    coords: [31.9233, -104.8606],
    established: "1972", 
    area: "135 square miles",
    visitors: "180,000+ annually",
    description: "Highest peak in Texas and fossil reef formations"
  },
  {
    id: 12,
    name: "White Sands National Park",
    coords: [32.7872, -106.3256],
    established: "2019",
    area: "275 square miles", 
    visitors: "600,000+ annually",
    description: "World's largest gypsum dune field in New Mexico"
  },
  // Additional California National Parks - NEWLY ADDED
  {
    id: 13,
    name: "Lassen Volcanic National Park",
    coords: [40.4977, -121.4207],
    established: "1916",
    area: "166 square miles",
    visitors: "500,000+ annually", 
    description: "Active volcanic landscape with geothermal features and pristine wilderness"
  },
  {
    id: 14,
    name: "Kings Canyon National Park",
    coords: [36.8879, -118.5551],
    established: "1940",
    area: "722 square miles",
    visitors: "700,000+ annually",
    description: "Deep granite canyons and giant sequoia groves in the Sierra Nevada"
  },
  {
    id: 15,
    name: "Pinnacles National Park",
    coords: [36.4906, -121.1825],
    established: "2013",
    area: "42 square miles",
    visitors: "200,000+ annually",
    description: "Towering rock spires, California condors, and spectacular wildflower displays"
  },
  {
    id: 16,
    name: "Channel Islands National Park",
    coords: [34.0069, -119.7785],
    established: "1980",
    area: "390 square miles",
    visitors: "300,000+ annually",
    description: "California's Galápagos with pristine islands, marine wildlife, and world-class snorkeling"
  },
  // Colorado National Parks - NEWLY ADDED
  {
    id: 17,
    name: "Great Sand Dunes National Park",
    coords: [37.7916, -105.5943],
    established: "2004",
    area: "107,342 acres",
    visitors: "527,000+ annually",
    description: "North America's tallest sand dunes rising over 750 feet high in Colorado's San Luis Valley"
  },
  {
    id: 18,
    name: "Mesa Verde National Park",
    coords: [37.2308, -108.4618],
    established: "1906",
    area: "52,485 acres",
    visitors: "548,000+ annually",
    description: "Best-preserved Ancestral Puebloan cliff dwellings in North America with 600+ archaeological sites"
  },
  {
    id: 19,
    name: "Black Canyon of the Gunnison National Park",
    coords: [38.5753, -107.7017],
    established: "1999",
    area: "30,750 acres",
    visitors: "432,000+ annually",
    description: "Dramatic dark canyon walls rising over 2,000 feet from the Gunnison River below"
  }
];

export const nationalParksService = {
  // Get all national parks
  async getAll() {
    try {
      console.log('🏕️ nationalParksService.getAll() - Starting database query...');
      
      // First, try to get all columns to see what's available
      const { data: allColumnsData, error: allColumnsError } = await supabase
        .from('nationalparks')
        .select('*')
        .limit(1)
      
      console.log('🔍 Sample record to check columns:', allColumnsData);
      
      // Now get all records with all columns
      const { data, error } = await supabase
        .from('nationalparks')
        .select('*')
        .order('name')  // Use lowercase 'name' instead of '"Name"'
      
      console.log('🏞️ National Parks database response:');
      console.log('  - Data:', data);
      console.log('  - Error:', error);
      console.log('  - Data length:', data ? data.length : 'null');
      
      if (data && data.length > 0) {
        console.log('🔍 First record structure:', Object.keys(data[0]));
        console.log('🔍 First record data:', data[0]);
        console.log('✅ National Parks query successful');
        return { data, error: null }
      }
      
      // If no data from database, use fallback data
      console.log('📋 No database data found, using fallback national parks data');
      console.log('🏕️ Fallback data includes Colorado, New Mexico and Texas parks:', fallbackNationalParksData.length, 'parks total');
      return { data: fallbackNationalParksData, error: null };
      
    } catch (error) {
      console.error('💥 Error in nationalParksService.getAll():', error);
      console.log('🚨 Database error, falling back to local data for development');
      return { data: fallbackNationalParksData, error: null }
    }
  }
};