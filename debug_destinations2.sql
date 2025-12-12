-- Disable RLS temporarily for testing (run this in Supabase SQL Editor)
-- This will help determine if RLS policies are blocking data access

-- Check if destinations2 table has any data
SELECT count(*) as total_rows FROM destinations2;

-- Show first 3 rows if any exist
SELECT * FROM destinations2 LIMIT 3;

-- Check RLS status
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE tablename = 'destinations2';

-- Temporarily disable RLS for testing (you can re-enable later)
ALTER TABLE destinations2 DISABLE ROW LEVEL SECURITY;

-- Try query again after disabling RLS
SELECT "Name", "Continent", "Description" FROM destinations2 LIMIT 5;