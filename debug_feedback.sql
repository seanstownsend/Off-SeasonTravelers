-- ===== DEBUG FEEDBACK SUBMISSION =====
-- Run this to check the exact database structure and test a manual insert

-- 1. Check the exact column structure
SELECT column_name, data_type, is_nullable, column_default
FROM information_schema.columns 
WHERE table_name = 'park_feedback' 
ORDER BY ordinal_position;

-- 2. Try a manual insert to test if the structure works
INSERT INTO park_feedback (
  park_name, 
  park_slug, 
  visitor_name, 
  visit_date, 
  rating, 
  comment, 
  approved
) VALUES (
  'Yellowstone National Park',
  'yellowstone',
  'Debug Test User',
  '2024-10-26',
  5,
  'This is a manual test insert to debug the submission issue.',
  false
);

-- 3. Check if the insert worked
SELECT 
  id,
  park_slug,
  visitor_name,
  rating,
  approved,
  created_at
FROM park_feedback 
WHERE visitor_name = 'Debug Test User';

-- 4. Check Row Level Security policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual
FROM pg_policies 
WHERE tablename = 'park_feedback';

SELECT 'Debug test completed. Check results above.' as status;