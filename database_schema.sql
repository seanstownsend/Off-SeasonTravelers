-- ===== OFF-SEASON TRAVELERS DATABASE SCHEMA =====
-- Run this SQL in your Supabase SQL Editor to create the database structure

-- Enable Row Level Security
-- This ensures users can only access their own data

-- ===== DESTINATIONS TABLE =====
CREATE TABLE destinations (
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
CREATE INDEX idx_destinations_region ON destinations(region);
CREATE INDEX idx_destinations_best_off_season ON destinations USING GIN(best_off_season);
CREATE INDEX idx_destinations_category ON destinations(category);

-- ===== USER PREFERENCES TABLE =====
CREATE TABLE user_preferences (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  preferred_regions TEXT[], -- ['europe', 'asia', 'north_america']
  preferred_categories TEXT[], -- ['cultural', 'nature', 'adventure']
  budget_range VARCHAR(50), -- 'budget', 'mid-range', 'luxury'
  travel_style VARCHAR(50), -- 'solo', 'couple', 'family', 'group'
  preferred_months TEXT[], -- ['april', 'may', 'september']
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id)
);

-- ===== USER FAVORITES TABLE =====
CREATE TABLE user_favorites (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  destination_id UUID REFERENCES destinations(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, destination_id)
);

-- Add indexes
CREATE INDEX idx_user_favorites_user_id ON user_favorites(user_id);
CREATE INDEX idx_user_favorites_destination_id ON user_favorites(destination_id);

-- ===== PARK FEEDBACK TABLE =====
CREATE TABLE park_feedback (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  park_name VARCHAR(255) NOT NULL,
  park_slug VARCHAR(100) NOT NULL, -- URL-friendly park identifier (e.g., 'yellowstone', 'grand-canyon')
  visitor_name VARCHAR(255) NOT NULL,
  visit_date DATE,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT NOT NULL,
  photo_url TEXT,
  approved BOOLEAN DEFAULT FALSE,
  ip_address INET,
  user_agent TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add indexes for park feedback
CREATE INDEX idx_park_feedback_park_slug ON park_feedback(park_slug);
CREATE INDEX idx_park_feedback_park_name ON park_feedback(park_name);
CREATE INDEX idx_park_feedback_approved ON park_feedback(approved);
CREATE INDEX idx_park_feedback_created_at ON park_feedback(created_at DESC);
CREATE INDEX idx_park_feedback_rating ON park_feedback(rating);
CREATE INDEX idx_park_feedback_park_approved ON park_feedback(park_slug, approved);

-- ===== ROW LEVEL SECURITY POLICIES =====

-- Enable RLS
ALTER TABLE user_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_favorites ENABLE ROW LEVEL SECURITY;

-- Destinations are public (everyone can read)
ALTER TABLE destinations ENABLE ROW LEVEL SECURITY;

-- Park feedback security (public can insert, only approved are readable)
ALTER TABLE park_feedback ENABLE ROW LEVEL SECURITY;

-- Destinations policies (public read access)
CREATE POLICY "Destinations are viewable by everyone" ON destinations
  FOR SELECT USING (true);

-- User preferences policies (users can only see/modify their own)
CREATE POLICY "Users can view their own preferences" ON user_preferences
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own preferences" ON user_preferences
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own preferences" ON user_preferences
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own preferences" ON user_preferences
  FOR DELETE USING (auth.uid() = user_id);

-- User favorites policies (users can only see/modify their own)
CREATE POLICY "Users can view their own favorites" ON user_favorites
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own favorites" ON user_favorites
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own favorites" ON user_favorites
  FOR DELETE USING (auth.uid() = user_id);

-- Park feedback policies (anyone can submit, only approved are viewable by park)
CREATE POLICY "Anyone can submit feedback" ON park_feedback
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can view approved feedback for specific parks" ON park_feedback
  FOR SELECT USING (approved = true);

CREATE POLICY "Service role can manage all feedback" ON park_feedback
  FOR ALL USING (current_setting('role') = 'service_role');

-- ===== SAMPLE DATA =====
-- Insert initial destination data
INSERT INTO destinations (name, region, latitude, longitude, best_off_season, description, category, rating, average_temp, average_savings) VALUES
('Tokyo, Japan', 'asia', 35.6762, 139.6503, '{"march","april","november"}', 'Experience authentic Japanese culture without the crowds during cherry blossom off-season', 'cultural', 4.5, '15°C', '40%'),
('Paris, France', 'europe', 48.8566, 2.3522, '{"april","october","november"}', 'Explore the City of Light with fewer tourists and pleasant weather', 'cultural', 4.8, '18°C', '35%'),
('New York, USA', 'north_america', 40.7128, -74.0060, '{"april","may","september","october"}', 'The Big Apple shines in spring and fall with perfect walking weather', 'urban', 4.3, '20°C', '30%'),
('Buenos Aires, Argentina', 'south_america', -34.6037, -58.3816, '{"march","april","september","october"}', 'Tango through Buenos Aires during the pleasant shoulder seasons', 'cultural', 4.4, '22°C', '45%'),
('Cape Town, South Africa', 'africa', -33.9249, 18.4241, '{"april","may","september","october"}', 'Stunning landscapes and wine country during the mild seasons', 'nature', 4.7, '19°C', '50%'),
('Sydney, Australia', 'oceania', -33.8688, 151.2093, '{"march","april","may","september"}', 'Harbor city beauty with comfortable temperatures and fewer crowds', 'urban', 4.6, '21°C', '35%');

-- ===== FUNCTIONS FOR AUTOMATIC TIMESTAMPS =====
-- Function to automatically update the updated_at column
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers to automatically update timestamps
CREATE TRIGGER update_destinations_updated_at BEFORE UPDATE ON destinations
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_preferences_updated_at BEFORE UPDATE ON user_preferences
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_park_feedback_updated_at BEFORE UPDATE ON park_feedback
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();