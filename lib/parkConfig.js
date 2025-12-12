// Park configuration for the feedback system
// This maps park names to URL-friendly slugs and other metadata

export const parkConfig = {
  'yellowstone': {
    name: 'Yellowstone National Park',
    slug: 'yellowstone',
    state: 'Wyoming',
    offSeasonMonths: ['april', 'may', 'september', 'october'],
    description: 'Experience geysers, wildlife, and natural wonders without the crowds',
    storageFolder: 'yellowstone-photos'
  },
  'grand-canyon': {
    name: 'Grand Canyon National Park',
    slug: 'grand-canyon',
    state: 'Arizona',
    offSeasonMonths: ['november', 'december', 'january', 'february'],
    description: 'Stunning canyon views with cooler weather and fewer visitors',
    storageFolder: 'grand-canyon-photos'
  },
  'yosemite': {
    name: 'Yosemite National Park',
    slug: 'yosemite',
    state: 'California',
    offSeasonMonths: ['november', 'december', 'january', 'february'],
    description: 'Waterfalls and granite cliffs in peaceful winter beauty',
    storageFolder: 'yosemite-photos'
  },
  'zion': {
    name: 'Zion National Park',
    slug: 'zion',
    state: 'Utah',
    offSeasonMonths: ['november', 'december', 'january', 'february'],
    description: 'Red rock canyons and emerald pools without summer heat',
    storageFolder: 'zion-photos'
  },
  'glacier': {
    name: 'Glacier National Park',
    slug: 'glacier',
    state: 'Montana',
    offSeasonMonths: ['september', 'october'],
    description: 'Mountain peaks and pristine lakes in fall colors',
    storageFolder: 'glacier-photos'
  },
  'great-smoky-mountains': {
    name: 'Great Smoky Mountains National Park',
    slug: 'great-smoky-mountains',
    state: 'Tennessee',
    offSeasonMonths: ['november', 'december', 'january', 'february'],
    description: 'Misty mountains and wildlife viewing in peaceful seasons',
    storageFolder: 'smoky-mountains-photos'
  },
  'rocky-mountain': {
    name: 'Rocky Mountain National Park',
    slug: 'rocky-mountain',
    state: 'Colorado',
    offSeasonMonths: ['september', 'october', 'may'],
    description: 'Alpine lakes and mountain vistas with fall aspen colors',
    storageFolder: 'rocky-mountain-photos'
  },
  'acadia': {
    name: 'Acadia National Park',
    slug: 'acadia',
    state: 'Maine',
    offSeasonMonths: ['september', 'october', 'april', 'may'],
    description: 'Rugged coastlines and fall foliage without summer crowds',
    storageFolder: 'acadia-photos'
  }
};

// Helper functions
export const getParkBySlug = (slug) => {
  return parkConfig[slug] || null;
};

export const getParkSlugByName = (parkName) => {
  const entry = Object.entries(parkConfig).find(([slug, config]) => 
    config.name.toLowerCase() === parkName.toLowerCase()
  );
  return entry ? entry[0] : null;
};

export const getAllParks = () => {
  return Object.values(parkConfig);
};

export const getAllParkSlugs = () => {
  return Object.keys(parkConfig);
};

// Generate storage bucket names for each park
export const getStorageBucketName = (parkSlug) => {
  const park = getParkBySlug(parkSlug);
  return park ? `feedback-${park.storageFolder}` : 'feedback-photos';
};

// Generate URL-friendly park template routes
export const getParkTemplateRoute = (parkSlug) => {
  return `/${parkSlug}-template`;
};

export const getParkItineraryRoute = (parkSlug) => {
  return `/${parkSlug}-itinerary`;
};