import { createApi } from 'unsplash-js';

// Initialize Unsplash API
const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;
console.log('🔑 Unsplash Access Key:', accessKey ? 'Set ✅' : 'Not Set ❌');
console.log('🔧 Access Key Value (first 10 chars):', accessKey ? accessKey.substring(0, 10) + '...' : 'None');
console.log('🔍 Full access key check:', import.meta.env.VITE_UNSPLASH_ACCESS_KEY?.substring(0, 15) + '...');

const unsplash = createApi({
  accessKey: accessKey || 'YOUR_UNSPLASH_ACCESS_KEY_HERE',
});

console.log('🌐 Unsplash client created');

// Manual image overrides for specific destinations
const MANUAL_IMAGE_OVERRIDES = {
  'New York City, NY': 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=400&h=192&q=80', // NYC skyline
  'Paris, France': 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?auto=format&fit=crop&w=400&h=192&q=80', // Eiffel Tower
  'Tokyo, Japan': 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=400&h=192&q=80', // Tokyo cityscape
  'London, England': 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=400&h=192&q=80', // Big Ben
  'Sydney, Australia': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&h=192&q=80', // Opera House
  'Rio de Janeiro, Brazil': 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=400&h=192&q=80', // Christ the Redeemer
  'Las Vegas, NV': 'https://images.unsplash.com/photo-1515859005217-8a1f08870f59?auto=format&fit=crop&w=400&h=192&q=80', // Las Vegas Strip nighttime view
  
  // Handle duplicate key format from database formatting (City, State State)
  'Las Vegas, NV, NV': 'https://images.unsplash.com/photo-1515859005217-8a1f08870f59?auto=format&fit=crop&w=400&h=192&q=80', // Las Vegas Strip nighttime (duplicate format)
  
  // Add more destinations as needed
};

console.log('📋 Manual image overrides loaded for', Object.keys(MANUAL_IMAGE_OVERRIDES).length, 'destinations');

/**
 * Get a destination image from Unsplash
 * @param {string} query - Search query (e.g., "Paris France", "Tokyo Japan")
 * @param {object} options - Optional parameters
 * @returns {Promise<string|null>} - Image URL or null if not found
 */
export const getDestinationImage = async (query, options = {}) => {
  try {
    const {
      width = 400,
      height = 300,
      orientation = 'landscape',
      per_page = 1
    } = options;

    console.log(`🖼️ Fetching image for: "${query}"`);

    // Try multiple search strategies for better results
    const searchQueries = [
      `${query} cityscape landmark architecture`,
      `${query} travel destination tourism`,
      `${query} skyline view panoramic`,
      `${query} famous landmark monument`
    ];

    let result = null;
    
    // Try each search query until we find good results
    for (const searchQuery of searchQueries) {
      console.log(`🔍 Trying search: "${searchQuery}"`);
      
      result = await unsplash.search.getPhotos({
        query: searchQuery,
        page: 1,
        per_page: 3, // Get multiple options
        orientation,
      });
      
      if (result.response?.results?.length > 0) {
        console.log(`✅ Found ${result.response.results.length} results with: "${searchQuery}"`);
        break;
      }
    }

    if (result.errors) {
      console.error('❌ Unsplash API error:', result.errors);
      return null;
    }

    const photos = result.response?.results || [];
    if (photos.length === 0) {
      console.warn(`⚠️ No images found for: "${query}"`);
      return null;
    }

    // Smart photo selection - prefer photos with higher likes and better descriptions
    const bestPhoto = photos.reduce((best, current) => {
      const currentScore = (current.likes || 0) + (current.alt_description?.length || 0) * 0.1;
      const bestScore = (best.likes || 0) + (best.alt_description?.length || 0) * 0.1;
      return currentScore > bestScore ? current : best;
    });

    console.log(`📸 Selected image: ${bestPhoto.alt_description || 'No description'} (${bestPhoto.likes || 0} likes)`);
    const photo = bestPhoto;
    
    // Build optimized image URL with desired dimensions for card headers (landscape aspect ratio)
    const imageUrl = `${photo.urls.raw}&w=400&h=192&fit=crop&crop=center&auto=format&q=80`;
    
    console.log(`✅ Image found for "${query}": ${photo.alt_description || 'No description'}`);
    
    return {
      url: imageUrl,
      alt: photo.alt_description || `${query} destination`,
      attribution: {
        photographer: photo.user.name,
        photographer_url: photo.user.links.html,
        unsplash_url: photo.links.html
      }
    };

  } catch (error) {
    console.error(`💥 Error fetching image for "${query}":`, error);
    return null;
  }
};

/**
 * Generate fallback image URL using Unsplash Source API (no API key needed)
 * @param {string} query - Search query
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @returns {string} - Direct image URL
 */
export const getFallbackImage = (query, width = 400, height = 192) => {
  console.log(`🔄 Using reliable fallback image for: ${query}`);
  // Use a curated, reliable Unsplash image that always works with card header aspect ratio
  return `https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=${width}&h=${height}&q=80`;
};

/**
 * Get cached or fetch new destination image
 * @param {object} destination - Destination object with name and country
 * @returns {Promise<string>} - Image URL
 */
export const getDestinationImageUrl = async (destination) => {
  console.log('🎯 getDestinationImageUrl called with:', destination.name, destination.country);
  
  // Create destination key for lookups
  const destinationKey = `${destination.name}, ${destination.country}`;
  console.log('🔍 Checking for override with key:', destinationKey);
  console.log('🔍 Available overrides:', Object.keys(MANUAL_IMAGE_OVERRIDES));
  
  // Check for manual override first
  if (MANUAL_IMAGE_OVERRIDES[destinationKey]) {
    console.log('🎨 Using manual override image for:', destinationKey);
    return MANUAL_IMAGE_OVERRIDES[destinationKey];
  } else {
    console.log('❌ No manual override found for:', destinationKey);
  }
  
  // If destination already has an image URL, use it
  if (destination.image_url && destination.image_url.trim()) {
    console.log('✅ Using existing image URL:', destination.image_url);
    return destination.image_url;
  }

  // Create search query from destination name and country
  const query = `${destination.name} ${destination.country}`.trim();
  console.log('🔍 Search query:', query);
  
  try {
    // Try to get image from Unsplash API first
    console.log('� Attempting Unsplash API search for:', query);
    const imageData = await getDestinationImage(query);
    
    if (imageData && imageData.url) {
      console.log('✅ Got image from Unsplash API:', imageData.url);
      return imageData.url;
    }
    
    console.log('⚠️ Unsplash API returned no results, using generic travel image');
    // Return a reliable generic travel image from Unsplash with correct aspect ratio for cards
    return 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&h=192&q=80';
    
  } catch (error) {
    console.error(`❌ Error getting image for ${query}:`, error);
    // Return a reliable generic travel image with correct aspect ratio
    return 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&h=192&q=80';
  }
};

export default unsplash;