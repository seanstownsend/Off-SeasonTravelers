-- ===== ADD SAMPLE FEEDBACK DATA FOR TESTING =====
-- Run this in your Supabase SQL Editor to add test data

-- Insert sample feedback for Yellowstone
INSERT INTO park_feedback (
  park_name, 
  park_slug, 
  visitor_name, 
  visit_date, 
  rating, 
  comment, 
  approved
) VALUES 
-- Yellowstone feedback
(
  'Yellowstone National Park',
  'yellowstone',
  'Sarah Johnson',
  '2024-09-15',
  5,
  'Absolutely incredible experience in September! The weather was perfect, crowds were minimal, and we saw so much wildlife. The fall colors around the geysers were breathtaking.',
  true
),
(
  'Yellowstone National Park',
  'yellowstone',
  'Mike Chen',
  '2024-10-08',
  4,
  'October visit was amazing. Cooler temperatures made hiking much more enjoyable. Old Faithful had shorter wait times and the entire experience felt more intimate.',
  true
),
(
  'Yellowstone National Park',
  'yellowstone',
  'Emily Rodriguez',
  '2024-04-22',
  5,
  'Spring visit in April was magical! Some roads were still closed but the accessible areas were gorgeous. Wildlife was very active and photography opportunities were endless.',
  false  -- This one is pending approval
),

-- Grand Canyon feedback
(
  'Grand Canyon National Park',
  'grand-canyon',
  'David Thompson',
  '2024-11-12',
  5,
  'November at the Grand Canyon was perfect! Cool temperatures, clear skies, and practically no crowds. The sunrise views were absolutely stunning.',
  true
),
(
  'Grand Canyon National Park',
  'grand-canyon',
  'Lisa Park',
  '2024-12-05',
  4,
  'Winter visit exceeded expectations. Snow on the rim added a magical quality to the views. Much more peaceful than summer visits.',
  true
),

-- Yosemite feedback
(
  'Yosemite National Park',
  'yosemite',
  'James Wilson',
  '2024-01-18',
  4,
  'January in Yosemite was incredibly peaceful. The waterfalls were flowing strong and the snow-covered valley was like a winter wonderland.',
  true
);

-- Verify the sample data was inserted
SELECT 
  park_slug,
  park_name,
  visitor_name,
  rating,
  approved,
  LEFT(comment, 50) || '...' as comment_preview
FROM park_feedback 
ORDER BY park_slug, created_at DESC;

-- Show summary by park
SELECT 
  park_slug,
  COUNT(*) as total_feedback,
  COUNT(CASE WHEN approved = true THEN 1 END) as approved_feedback,
  AVG(rating)::DECIMAL(3,1) as average_rating
FROM park_feedback 
GROUP BY park_slug 
ORDER BY park_slug;

SELECT 'Sample data added successfully! You should now see feedback records with park_slug values.' as status;