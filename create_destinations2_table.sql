-- Create destinations2 table (enhanced version of destinations)
-- This table is the new version requested by the user
-- Run this in your Supabase SQL Editor

CREATE TABLE destinations2 (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  region VARCHAR(100) NOT NULL,
  latitude DECIMAL(10, 8) NOT NULL,
  longitude DECIMAL(11, 8) NOT NULL,
  best_off_season TEXT[] NOT NULL, -- Array of months: ['march', 'april', 'november']
  description TEXT,
  image_url TEXT,
  average_temp VARCHAR(50),
  average_savings VARCHAR(50),
  category VARCHAR(100), -- 'cultural', 'nature', 'adventure', 'beach', 'urban'
  rating DECIMAL(2,1) DEFAULT 4.0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add indexes for better performance
CREATE INDEX idx_destinations2_region ON destinations2(region);
CREATE INDEX idx_destinations2_best_off_season ON destinations2 USING GIN(best_off_season);
CREATE INDEX idx_destinations2_category ON destinations2(category);

-- Insert sample data into destinations2 table
INSERT INTO destinations2 (name, region, latitude, longitude, best_off_season, description, image_url, average_temp, average_savings, category, rating) VALUES

-- Europe
('Prague, Czech Republic', 'europe', 50.0755, 14.4378, ARRAY['november', 'december', 'january', 'february', 'march'], 
 'Medieval charm meets affordable luxury in Prague''s stunning off-season. Fewer crowds mean better photos of the castle and bridge.', 
 'https://images.unsplash.com/photo-1541849546-216549ae216d?w=800&q=80', '5°C', '40%', 'cultural', 4.5),

('Porto, Portugal', 'europe', 41.1579, -8.6291, ARRAY['november', 'december', 'january', 'february'], 
 'Portugal''s second city offers cozy cafes, port wine, and dramatic coastlines without summer''s crowds.', 
 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&q=80', '12°C', '35%', 'cultural', 4.6),

('Budapest, Hungary', 'europe', 47.4979, 19.0402, ARRAY['november', 'december', 'january', 'february', 'march'], 
 'Thermal baths and stunning architecture shine brightest in winter. The Christmas markets are magical.', 
 'https://images.unsplash.com/photo-1541085877-1cb0d9e5e2e6?w=800&q=80', '3°C', '45%', 'cultural', 4.4),

-- Asia  
('Kyoto, Japan', 'asia', 35.0116, 135.7681, ARRAY['december', 'january', 'february'], 
 'Winter illuminations and snow-covered temples create a serene, spiritual atmosphere in ancient Kyoto.', 
 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80', '8°C', '30%', 'cultural', 4.8),

('Chiang Mai, Thailand', 'asia', 18.7883, 98.9853, ARRAY['june', 'july', 'august', 'september'], 
 'Cool season brings perfect weather for temple hopping and mountain trekking in Northern Thailand.', 
 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', '25°C', '25%', 'cultural', 4.5),

('Rajasthan, India', 'asia', 26.9124, 70.9083, ARRAY['december', 'january', 'february'], 
 'Palaces and forts are best explored in cool winter months when the desert heat subsides.', 
 'https://images.unsplash.com/photo-1477587458883-47145ed94245?w=800&q=80', '20°C', '50%', 'cultural', 4.3),

-- North America
('Quebec City, Canada', 'north_america', 46.8139, -71.2080, ARRAY['december', 'january', 'february', 'march'], 
 'Winter wonderland with European charm. Ice hotels, snow festivals, and cozy French cuisine await.', 
 'https://images.unsplash.com/photo-1529606539881-338a29799d2d?w=800&q=80', '-8°C', '40%', 'cultural', 4.6),

('New Orleans, USA', 'north_america', 29.9511, -90.0715, ARRAY['december', 'january', 'february'], 
 'Mild winter weather perfect for exploring jazz clubs, historic districts, and authentic Creole cuisine.', 
 'https://images.unsplash.com/photo-1558442074-c8fb6d3e1cb3?w=800&q=80', '18°C', '35%', 'cultural', 4.4),

-- South America
('Patagonia, Argentina', 'south_america', -50.9423, -73.4068, ARRAY['april', 'may', 'september', 'october'], 
 'Shoulder seasons offer perfect hiking weather and stunning fall colors without summer crowds.', 
 'https://images.unsplash.com/photo-1531804055935-76f44d7c3621?w=800&q=80', '12°C', '30%', 'nature', 4.7),

('Cusco, Peru', 'south_america', -13.5319, -71.9675, ARRAY['may', 'june', 'july', 'august'], 
 'Dry season perfect for Machu Picchu visits. Clear skies and comfortable temperatures for trekking.', 
 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80', '15°C', '25%', 'cultural', 4.6),

-- Africa
('Marrakech, Morocco', 'africa', 31.6295, -7.9811, ARRAY['november', 'december', 'january', 'february', 'march'], 
 'Cool season brings pleasant temperatures for exploring souks, palaces, and the Sahara Desert.', 
 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800&q=80', '22°C', '40%', 'cultural', 4.5),

('Cape Town, South Africa', 'africa', -33.9249, 18.4241, ARRAY['april', 'may', 'june', 'july', 'august'], 
 'Winter brings whale watching season and fewer crowds at Table Mountain and wine regions.', 
 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80', '16°C', '35%', 'nature', 4.8),

-- Oceania
('Tasmania, Australia', 'oceania', -41.4545, 147.1970, ARRAY['april', 'may', 'september', 'october'], 
 'Autumn and spring offer perfect weather for exploring pristine wilderness and unique wildlife.', 
 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', '15°C', '25%', 'nature', 4.4),

('New Zealand South Island', 'oceania', -45.0312, 169.6626, ARRAY['april', 'may', 'september', 'october'], 
 'Shoulder seasons provide stunning scenery without summer crowds. Perfect for adventure activities.', 
 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80', '12°C', '30%', 'nature', 4.9);