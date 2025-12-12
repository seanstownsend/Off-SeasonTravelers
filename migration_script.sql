-- ===== PARK-SPECIFIC FEEDBACK MIGRATION SCRIPT =====
-- Run this in your Supabase SQL Editor if park_feedback table already exists

-- Step 1: Add park_slug column if it doesn't exist
ALTER TABLE park_feedback 
ADD COLUMN IF NOT EXISTS park_slug VARCHAR(100);

-- Step 2: Update existing records with park slugs based on park names
-- (Only run these if you have existing data)
UPDATE park_feedback SET park_slug = 'yellowstone' 
WHERE park_name ILIKE '%yellowstone%' AND park_slug IS NULL;

UPDATE park_feedback SET park_slug = 'grand-canyon' 
WHERE park_name ILIKE '%grand canyon%' AND park_slug IS NULL;

UPDATE park_feedback SET park_slug = 'yosemite' 
WHERE park_name ILIKE '%yosemite%' AND park_slug IS NULL;

UPDATE park_feedback SET park_slug = 'zion' 
WHERE park_name ILIKE '%zion%' AND park_slug IS NULL;

UPDATE park_feedback SET park_slug = 'glacier' 
WHERE park_name ILIKE '%glacier%' AND park_slug IS NULL;

UPDATE park_feedback SET park_slug = 'great-smoky-mountains' 
WHERE park_name ILIKE '%smoky%' AND park_slug IS NULL;

UPDATE park_feedback SET park_slug = 'rocky-mountain' 
WHERE park_name ILIKE '%rocky%' AND park_slug IS NULL;

UPDATE park_feedback SET park_slug = 'acadia' 
WHERE park_name ILIKE '%acadia%' AND park_slug IS NULL;

-- Step 3: Set a default value for any remaining NULL park_slug entries
UPDATE park_feedback SET park_slug = 'unknown-park' 
WHERE park_slug IS NULL;

-- Step 4: Make park_slug NOT NULL (after all data is migrated)
ALTER TABLE park_feedback 
ALTER COLUMN park_slug SET NOT NULL;

-- Step 5: Create park-specific indexes if they don't exist
CREATE INDEX IF NOT EXISTS idx_park_feedback_park_slug 
ON park_feedback(park_slug);

CREATE INDEX IF NOT EXISTS idx_park_feedback_park_approved 
ON park_feedback(park_slug, approved);

-- Step 6: Verify the migration
SELECT 
  park_slug, 
  park_name, 
  COUNT(*) as feedback_count,
  COUNT(CASE WHEN approved = true THEN 1 END) as approved_count
FROM park_feedback 
GROUP BY park_slug, park_name 
ORDER BY park_slug;

-- Success message
SELECT 'Migration completed successfully! Park-specific feedback system is now active.' as status;