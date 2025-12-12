-- STEP 1: Check if destinations2 has any data
SELECT count(*) as total_rows FROM destinations2;

-- STEP 2: Show what columns actually exist
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'destinations2' 
ORDER BY ordinal_position;

-- STEP 3: Show first few rows if any exist
SELECT * FROM destinations2 LIMIT 3;

-- STEP 4: If table is empty, insert test data
INSERT INTO destinations2 ("Name", "Continent", "Latitude", longitude, "Description", "Off-Season Months", category) VALUES
('Tokyo, Japan', 'Asia', '35.6762', '139.6503', 'Amazing cultural destination with great food and temples', 'March,April,November', 'cultural'),
('Paris, France', 'Europe', '48.8566', '2.3522', 'City of lights with incredible art, culture and cuisine', 'April,October,November', 'cultural'),
('New York, USA', 'North America', '40.7128', '-74.0060', 'The city that never sleeps with world-class museums', 'April,May,September', 'urban'),
('Cape Town, South Africa', 'Africa', '-33.9249', '18.4241', 'Stunning landscapes and wine country', 'April,May,June,July,August', 'nature'),
('Sydney, Australia', 'Oceania', '-33.8688', '151.2093', 'Harbor city with iconic opera house and beaches', 'March,April,May,September', 'urban');

-- STEP 5: Verify data was inserted
SELECT "Name", "Continent", "Off-Season Months" FROM destinations2;