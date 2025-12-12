# Park-Specific Feedback System Migration

## Overview
This migration transforms the feedback system from a shared single-table approach to a park-specific structure that will scale better as more national parks are added to the platform.

## Changes Made

### 1. Database Schema Updates (`database_schema.sql`)
- **Added `park_slug` field**: VARCHAR(100) NOT NULL to identify specific parks
- **New indexes**: 
  - `idx_park_feedback_park_slug` for efficient park filtering
  - `idx_park_feedback_park_approved` composite index for park + approval status
- **Updated RLS policies**: Now support park-specific access patterns

### 2. Park Configuration System (`lib/parkConfig.js`)
- **Centralized park metadata**: Name, slug, state, off-season months, storage folders
- **Helper functions**: `getParkBySlug()`, `getParkSlugByName()`, `getAllParks()`
- **Storage bucket naming**: Park-specific photo storage organization
- **URL routing**: Standardized template and itinerary route generation

### 3. Updated Feedback Service (`lib/feedback.js`)
- **Park-specific submissions**: `submitFeedback(parkSlug, feedbackData)`
- **Park filtering**: `getParkFeedback(parkSlug, approved, limit)`
- **Storage organization**: Photos organized by park in separate storage folders
- **Backward compatibility**: Still supports global feedback queries

### 4. Enhanced Components
- **FeedbackForm.jsx**: Now accepts `parkSlug` prop instead of `parkName`
- **FeedbackAdmin.jsx**: Added park-specific filtering dropdown
- **YellowstoneReactTemplate.jsx**: Updated to use `parkSlug="yellowstone"`

## Benefits of Park-Specific Structure

### Scalability
- **Independent feedback systems**: Each park can have its own feedback without interference
- **Storage organization**: Photos are organized by park for better management
- **Performance**: Indexed queries are faster for park-specific operations

### Management
- **Admin filtering**: Admins can view feedback for specific parks or all parks
- **Bulk operations**: Can approve/moderate feedback per park basis
- **Analytics**: Can analyze feedback patterns per park

### User Experience
- **Relevant feedback**: Users only see feedback for the specific park they're viewing
- **Faster loading**: Smaller datasets per park load faster
- **Better organization**: Clearer separation of park-specific content

## Migration Steps Required

### 1. Database Migration (Manual)
Copy and execute the SQL commands from `database_schema.sql` in your Supabase SQL editor:

```sql
-- Add park_slug column (if not exists)
ALTER TABLE park_feedback ADD COLUMN IF NOT EXISTS park_slug VARCHAR(100);

-- Update existing records with park slugs based on park names
UPDATE park_feedback SET park_slug = 'yellowstone' WHERE park_name ILIKE '%yellowstone%';
UPDATE park_feedback SET park_slug = 'grand-canyon' WHERE park_name ILIKE '%grand canyon%';
-- Add more UPDATE statements for other parks as needed

-- Make park_slug NOT NULL after data migration
ALTER TABLE park_feedback ALTER COLUMN park_slug SET NOT NULL;

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_park_feedback_park_slug ON park_feedback(park_slug);
CREATE INDEX IF NOT EXISTS idx_park_feedback_park_approved ON park_feedback(park_slug, approved);
```

### 2. Storage Bucket Setup (Optional)
Create park-specific storage buckets in Supabase:
- `feedback-yellowstone-photos`
- `feedback-grand-canyon-photos`
- `feedback-yosemite-photos`
- etc.

### 3. Component Updates (Completed)
All React components have been updated to use the new park-specific structure.

## Backward Compatibility
- Old feedback records will continue to work once `park_slug` is populated
- The feedback service still supports global queries for admin purposes
- No breaking changes for existing approved feedback display

## Testing Checklist
- [ ] Verify feedback submission works with park slugs
- [ ] Test park-specific feedback retrieval
- [ ] Confirm admin panel filtering works
- [ ] Check photo uploads to correct storage buckets
- [ ] Validate RLS policies work correctly
- [ ] Test with multiple parks

## Future Enhancements
1. **Park-specific analytics dashboard**
2. **Automated park detection from GPS coordinates**
3. **Cross-park feedback comparison tools**
4. **Park-specific email notifications for admins**
5. **Bulk import tools for migrating legacy feedback**

## File Structure After Migration
```
lib/
├── parkConfig.js          # Central park configuration
├── feedback.js            # Updated service layer
└── supabase.js           # Unchanged

Components/ui/
├── FeedbackForm.jsx      # Updated with parkSlug prop
└── ...

Pages/
├── FeedbackAdmin.jsx     # Enhanced with park filtering
├── YellowstoneReactTemplate.jsx  # Updated to use parkSlug
└── ...

database_schema.sql       # Updated schema with park_slug
```

This migration sets up a robust foundation for scaling the feedback system across multiple national parks while maintaining performance and user experience.