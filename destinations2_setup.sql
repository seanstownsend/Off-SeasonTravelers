-- ===== DESTINATIONS2 TABLE SETUP =====
-- Run this SQL in your Supabase SQL Editor to create/populate destinations2

-- Create destinations2 table (same structure as destinations)
CREATE TABLE IF NOT EXISTS destinations2 (
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
CREATE INDEX IF NOT EXISTS idx_destinations2_region ON destinations2(region);
CREATE INDEX IF NOT EXISTS idx_destinations2_best_off_season ON destinations2 USING GIN(best_off_season);
CREATE INDEX IF NOT EXISTS idx_destinations2_category ON destinations2(category);

-- Enable RLS (Row Level Security)
ALTER TABLE destinations2 ENABLE ROW LEVEL SECURITY;

-- Create public read policy for destinations2 (same as destinations)
DROP POLICY IF EXISTS "Destinations2 are viewable by everyone" ON destinations2;
CREATE POLICY "Destinations2 are viewable by everyone" ON destinations2
  FOR SELECT USING (true);

-- Copy existing data from destinations to destinations2 (if any exists)
INSERT INTO destinations2 (name, region, latitude, longitude, best_off_season, description, image_url, average_temp, average_savings, category, rating)
SELECT name, region, latitude, longitude, best_off_season, description, image_url, average_temp, average_savings, category, rating
FROM destinations
ON CONFLICT (id) DO NOTHING;

-- Insert comprehensive sample data for destinations2
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

('Vienna, Austria', 'europe', 48.2082, 16.3738, ARRAY['november', 'december', 'january', 'february'], 
 'Imperial palaces and coffee houses are perfect for winter exploration. Elegant and affordable.', 
 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=800&q=80', '4°C', '35%', 'cultural', 4.7),

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

('Seoul, South Korea', 'asia', 37.5665, 126.9780, ARRAY['march', 'april', 'october', 'november'], 
 'Spring cherry blossoms and autumn colors make Seoul magical during shoulder seasons.', 
 'https://images.unsplash.com/photo-1570026517541-66ab91e8bb41?w=800&q=80', '15°C', '35%', 'cultural', 4.4),

-- North America
('Quebec City, Canada', 'north_america', 46.8139, -71.2080, ARRAY['december', 'january', 'february', 'march'], 
 'Winter wonderland with European charm. Ice hotels, snow festivals, and cozy French cuisine await.', 
 'https://images.unsplash.com/photo-1529606539881-338a29799d2d?w=800&q=80', '-8°C', '40%', 'cultural', 4.6),

('New Orleans, USA', 'north_america', 29.9511, -90.0715, ARRAY['december', 'january', 'february'], 
 'Mild winter weather perfect for exploring jazz clubs, historic districts, and authentic Creole cuisine.', 
 'https://images.unsplash.com/photo-1558442074-c8fb6d3e1cb3?w=800&q=80', '18°C', '35%', 'cultural', 4.4),

('San Francisco, USA', 'north_america', 37.7749, -122.4194, ARRAY['september', 'october', 'november'], 
 'Fall brings warm weather and clear skies to the foggy city. Perfect for exploring neighborhoods.', 
 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', '20°C', '25%', 'urban', 4.5),

-- South America
('Patagonia, Argentina', 'south_america', -50.9423, -73.4068, ARRAY['april', 'may', 'september', 'october'], 
 'Shoulder seasons offer perfect hiking weather and stunning fall colors without summer crowds.', 
 'https://images.unsplash.com/photo-1531804055935-76f44d7c3621?w=800&q=80', '12°C', '30%', 'nature', 4.7),

('Cusco, Peru', 'south_america', -13.5319, -71.9675, ARRAY['may', 'june', 'july', 'august'], 
 'Dry season perfect for Machu Picchu visits. Clear skies and comfortable temperatures for trekking.', 
 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80', '15°C', '25%', 'cultural', 4.6),

('Rio de Janeiro, Brazil', 'south_america', -22.9068, -43.1729, ARRAY['april', 'may', 'june', 'july', 'august'], 
 'Cooler months perfect for exploring beaches and Christ the Redeemer without intense heat.', 
 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80', '23°C', '35%', 'beach', 4.5),

-- Africa
('Marrakech, Morocco', 'africa', 31.6295, -7.9811, ARRAY['november', 'december', 'january', 'february', 'march'], 
 'Cool season brings pleasant temperatures for exploring souks, palaces, and the Sahara Desert.', 
 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800&q=80', '22°C', '40%', 'cultural', 4.5),

('Cape Town, South Africa', 'africa', -33.9249, 18.4241, ARRAY['april', 'may', 'june', 'july', 'august'], 
 'Winter brings whale watching season and fewer crowds at Table Mountain and wine regions.', 
 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80', '16°C', '35%', 'nature', 4.8),

('Cairo, Egypt', 'africa', 30.0444, 31.2357, ARRAY['november', 'december', 'january', 'february', 'march'], 
 'Perfect weather for exploring pyramids and ancient sites without the scorching summer heat.', 
 'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=800&q=80', '20°C', '45%', 'cultural', 4.3),

-- Oceania
('Tasmania, Australia', 'oceania', -41.4545, 147.1970, ARRAY['april', 'may', 'september', 'october'], 
 'Autumn and spring offer perfect weather for exploring pristine wilderness and unique wildlife.', 
 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', '15°C', '25%', 'nature', 4.4),

('Auckland, New Zealand', 'oceania', -36.8485, 174.7633, ARRAY['april', 'may', 'september', 'october'], 
 'Shoulder seasons provide stunning scenery without summer crowds. Perfect for outdoor activities.', 
 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80', '17°C', '30%', 'nature', 4.6),

('Fiji Islands', 'oceania', -17.7134, 178.0650, ARRAY['may', 'june', 'july', 'august', 'september'], 
 'Dry season offers perfect weather for island hopping with fewer tourists and lower prices.', 
 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=800&q=80', '25°C', '40%', 'beach', 4.8)

ON CONFLICT (name) DO NOTHING;

-- Create trigger for automatic updated_at timestamps
CREATE TRIGGER update_destinations2_updated_at BEFORE UPDATE ON destinations2
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Verify the data was inserted
SELECT 'destinations2 table setup complete. Total rows:' as message, count(*) as row_count FROM destinations2;