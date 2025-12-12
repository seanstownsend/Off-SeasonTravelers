-- ===== FIX RLS POLICIES FOR FEEDBACK SUBMISSION =====
-- Run this in Supabase SQL Editor to fix potential RLS issues

-- First, check current policies
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual
FROM pg_policies 
WHERE tablename = 'park_feedback';

-- Drop existing policies and recreate them properly
DROP POLICY IF EXISTS "Anyone can submit feedback" ON park_feedback;
DROP POLICY IF EXISTS "Anyone can view approved feedback for specific parks" ON park_feedback;
DROP POLICY IF EXISTS "Service role can manage all feedback" ON park_feedback;

-- Create new policies that definitely work
CREATE POLICY "Public can insert feedback" ON park_feedback
  FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Public can view approved feedback" ON park_feedback
  FOR SELECT 
  USING (approved = true);

CREATE POLICY "Authenticated users can view all feedback" ON park_feedback
  FOR SELECT 
  USING (auth.role() = 'authenticated');

CREATE POLICY "Service role has full access" ON park_feedback
  FOR ALL 
  USING (auth.jwt() ->> 'role' = 'service_role');

-- Test the policies by inserting a record
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
  'RLS Test User',
  '2024-10-26',
  4,
  'Testing if RLS policies allow public feedback submission.',
  false
);

-- Verify the test insert worked
SELECT 
  'RLS Test Result:' as test,
  COUNT(*) as records_inserted
FROM park_feedback 
WHERE visitor_name = 'RLS Test User';

SELECT 'RLS policies updated successfully!' as status;