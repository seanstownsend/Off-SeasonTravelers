# Image Management Guide

## How to Choose Which Images Populate

### 1. **Manual Override System (Recommended)**
Edit `lib/unsplash.js` and add entries to the `MANUAL_IMAGE_OVERRIDES` object:

```javascript
const MANUAL_IMAGE_OVERRIDES = {
  'Your City, Country': 'https://images.unsplash.com/photo-ID?auto=format&fit=crop&w=400&h=192&q=80',
  'New York City, NY': 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=400&h=192&q=80',
};
```

### 2. **Database Override**
Add image URLs directly to the `image_url` field in your Supabase `destinations2` table.

### 3. **Search Improvement**
The system now tries multiple search strategies:
- `City Country cityscape landmark architecture`
- `City Country travel destination tourism`
- `City Country skyline view panoramic`
- `City Country famous landmark monument`

### 4. **Smart Selection**
Images are selected based on:
- Number of likes (higher is better)
- Quality of description (longer descriptions preferred)

### 5. **Finding Good Image URLs**
1. Go to [Unsplash.com](https://unsplash.com)
2. Search for your destination
3. Click on an image you like
4. Copy the image URL
5. Add `?auto=format&fit=crop&w=400&h=192&q=80` to the end
6. Add it to the manual overrides

### 6. **Image Requirements**
- Aspect ratio: 400x192 (landscape)
- Format: JPEG/WebP
- Quality: High resolution
- Content: Should represent the destination well

## Priority Order
1. Manual overrides in `MANUAL_IMAGE_OVERRIDES`
2. Database `image_url` field
3. Automatic Unsplash API search with smart selection
4. Generic travel fallback image

## Examples of Good Override URLs
```javascript
'Paris, France': 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?auto=format&fit=crop&w=400&h=192&q=80', // Eiffel Tower
'Tokyo, Japan': 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=400&h=192&q=80', // Tokyo skyline
```