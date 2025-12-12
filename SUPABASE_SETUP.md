# Supabase Setup Guide for Off-Season Travelers

## Step 1: Create Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Click "Start your project" and sign up/sign in
3. Click "New Project"
4. Choose your organization
5. Fill in project details:
   - **Name**: `off-season-travelers`
   - **Database Password**: (create a strong password - save this!)
   - **Region**: Choose closest to your users
   - **Pricing Plan**: Start with Free tier
6. Click "Create new project" (takes ~2 minutes)

## Step 2: Get Your Project Credentials

1. In your Supabase dashboard, go to **Settings** > **API**
2. Copy these values:
   - **Project URL** (looks like: `https://your-project.supabase.co`)
   - **anon public** key (the long string under "Project API keys")

## Step 3: Configure Your Project

1. Open `lib/supabase.js` in your project
2. Replace the placeholder values:
   ```javascript
   const supabaseUrl = 'https://your-actual-project-id.supabase.co'
   const supabaseAnonKey = 'your-actual-anon-key-here'
   ```

## Step 4: Set Up Database Tables

1. In Supabase dashboard, go to **SQL Editor**
2. Click "New query"
3. Copy and paste the entire contents of `database_schema.sql`
4. Click "RUN" to execute the SQL
5. You should see tables created: `destinations`, `user_preferences`, `user_favorites`

## Step 5: Verify Setup

1. Go to **Table Editor** in Supabase dashboard
2. You should see:
   - ✅ `destinations` table with 6 sample destinations
   - ✅ `user_preferences` table (empty)
   - ✅ `user_favorites` table (empty)

## Step 6: Test Authentication (Optional)

1. Go to **Authentication** > **Settings** in Supabase dashboard
2. Make sure "Enable email confirmations" is OFF for testing
3. You can create test users in **Authentication** > **Users**

## Step 7: Environment Variables (Recommended)

For security, create a `.env.local` file in your project root:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

Then update `lib/supabase.js`:
```javascript
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY
```

## Next Steps

Once setup is complete, your app will be able to:

- ✅ **Load destinations from database** instead of hardcoded data
- ✅ **User authentication** (sign up, sign in, sign out)
- ✅ **Save user preferences** (regions, budget, travel style)
- ✅ **Favorite destinations** system
- ✅ **Real-time updates** when data changes

## Troubleshooting

### Common Issues:

1. **"Invalid API key"** - Double-check your URL and anon key
2. **"relation does not exist"** - Make sure you ran the SQL schema
3. **RLS errors** - Check Row Level Security policies in database

### Getting Help:

- Check Supabase docs: [https://supabase.com/docs](https://supabase.com/docs)
- Supabase Discord: [https://discord.supabase.com](https://discord.supabase.com)

Let me know when you've completed the setup and I'll help integrate it with your React components!