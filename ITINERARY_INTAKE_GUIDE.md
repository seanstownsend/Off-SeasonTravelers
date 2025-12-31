# Itinerary Intake System - Implementation Guide

## What Was Built

A complete AllTrails-style trip experience tracking system for your off-season national park website.

## Files Created

### 1. **enhance_itinerary_schema.sql**
SQL migration that adds missing columns to your existing Supabase schema:
- Budget tracking (`total_budget_usd`)
- Accommodation details (JSONB for flexible lodging data)
- Transportation method
- Booking advance time
- Engagement metrics (view_count, helpful_count)
- Monetization tier (free/premium)
- Approval workflow (approved, featured)
- Helpful votes tracking table

### 2. **Components/ui/ItineraryIntakeForm.jsx**
Multi-step intake form with:
- **Step 1**: Trip overview (dates, group, lodging, budget, rating)
- **Step 2**: Accommodation details (multiple locations supported)
- **Step 3**: Daily activities (weather, activities, ratings)
- **Step 4**: Tips and final details
- Auto-save functionality (localStorage)
- Progress bar
- Form validation
- Full submission to database

### 3. **lib/itineraryService.js**
Complete service layer with methods for:
- Getting public itineraries (with filters)
- Creating/updating/deleting itineraries
- Photo uploads
- Helpful votes
- Reviews
- Search and statistics
- Featured itineraries

## How to Deploy

### Step 1: Run the SQL Migration
```sql
-- In Supabase SQL Editor, run:
-- File: enhance_itinerary_schema.sql
```

This adds all missing columns and creates the helpful votes system.

### Step 2: Set Up Storage Bucket
In Supabase Dashboard:
1. Go to Storage
2. Create bucket: `itinerary-photos`
3. Make it public
4. Set policies to allow authenticated uploads

### Step 3: Use the Form

Import and use in any park page:
```jsx
import ItineraryIntakeForm from '../Components/ui/ItineraryIntakeForm';

// In your component:
<ItineraryIntakeForm 
  parkSlug="yellowstone"
  onSuccess={(itinerary) => {
    console.log('Submitted!', itinerary);
    // Redirect or show success message
  }}
  onCancel={() => {
    // Handle cancellation
  }}
/>
```

### Step 4: Create Admin Approval Page
Build a simple admin page to approve submissions:
```jsx
const { data } = await supabase
  .from('itineraries')
  .select('*')
  .eq('approved', false)
  .eq('is_public', true);

// Show list and approve/reject
```

## Key Features

### For Users
- ✅ Multi-step guided form (no overwhelming single page)
- ✅ Auto-save drafts
- ✅ Upload photos
- ✅ Rate activities individually
- ✅ Share detailed budget info
- ✅ Track weather & crowds
- ✅ Public/private toggle

### For You (Site Owner)
- ✅ Approval workflow (prevent spam)
- ✅ Feature exceptional content
- ✅ Track engagement (views, helpful votes)
- ✅ Ready for free/premium tiers
- ✅ Rich analytics data
- ✅ User-generated content at scale

### For Future Travelers
- ✅ Filter by month, budget, group type
- ✅ See real experiences & ratings
- ✅ Learn from others' mistakes
- ✅ Budget planning data
- ✅ Activity-specific ratings

## Monetization Strategy

### Free Tier
Users can view:
- Trip summaries (title, dates, rating)
- Overall tips
- Basic stats

### Premium Tier ($5-10/month)
Users get:
- Full day-by-day itineraries
- All photos
- Activity-specific notes
- Budget breakdowns
- Advanced search filters
- Priority support

### Incentive
Contributors who submit detailed itineraries get **1 month premium free**!

## Next Steps

1. **Run the SQL migration** in Supabase
2. **Create storage bucket** for photos
3. **Test the form** on a park page
4. **Build admin approval interface**
5. **Create itinerary browse/search page**
6. **Add payment integration** (Stripe) for premium tier

## Example Usage Flow

1. User visits Yellowstone page
2. Clicks "Share Your Experience"
3. Completes 4-step form (takes ~10 minutes for detailed entry)
4. Submits → goes to admin queue
5. You approve → appears on site
6. Other users find it helpful → upvote
7. Contributor gets free premium access

## Database Structure

Your existing tables are perfect! The migration just enhances them with:
- Better budget tracking
- Flexible accommodation storage (JSONB)
- Engagement metrics
- Tier/paywall support

## Questions?

The system is production-ready. Just need to:
1. Run the SQL
2. Set up photo storage
3. Deploy!

Want help with any specific part?
