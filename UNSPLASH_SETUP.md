# Unsplash Integration Setup

## Quick Setup Steps

1. **Get Unsplash API Key:**
   - Go to https://unsplash.com/developers
   - Sign up/Login to Unsplash
   - Click "New Application"
   - Fill out the form (select "Demo" for development)
   - Copy your "Access Key"

2. **Add API Key:**
   - Open the `.env` file in your project root
   - Replace `your_unsplash_access_key_here` with your actual key:
   ```
   VITE_UNSPLASH_ACCESS_KEY=your_actual_key_here
   ```

3. **Restart Development Server:**
   ```
   npm run dev
   ```

## How It Works

- **Automatic Images:** Cards now automatically fetch relevant images from Unsplash
- **Smart Fallbacks:** If no image is found, shows clean blue background
- **Caching:** Images are cached to avoid repeated API calls
- **Search Logic:** Uses destination name + country for accurate results

## API Limits

- **Free Tier:** 50 requests per hour
- **Rate Limits:** Automatically handled with fallbacks
- **No API Key:** Falls back to Unsplash Source (unlimited but less control)

## Example Searches

The system will automatically search for:
- "Paris France travel destination landmark"
- "Tokyo Japan travel destination landmark"
- "Rome Italy travel destination landmark"

Images are optimized to 400x300 pixels and cropped for consistent card sizing.