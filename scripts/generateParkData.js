import { supabase } from '../lib/supabase.js';

// Script to fetch all national parks from database and generate comprehensive park data
async function getAllParksFromDatabase() {
  try {
    console.log('🏕️ Fetching all national parks from database...');
    
    const { data, error } = await supabase
      .from('nationalparks')
      .select('*')
      .order('name');
    
    if (error) {
      console.error('❌ Database error:', error);
      return;
    }
    
    console.log(`✅ Found ${data.length} national parks`);
    console.log('🔍 First park structure:', Object.keys(data[0]));
    
    // Generate park slugs and basic template data
    const parkTemplateData = {};
    
    data.forEach((park, index) => {
      const slug = park.name.toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
      
      console.log(`${index + 1}. ${park.name} → ${slug}`);
      
      // Generate basic template data structure
      parkTemplateData[slug] = {
        name: park.name,
        slug: slug,
        state: park.state || 'Unknown',
        offSeasonMonths: park.off_season_months || 'November, December, January, February',
        peacefulDescription: `Experience ${park.name}'s natural beauty without the summer crowds`,
        savingsPercentage: '50',
        photoOpportunities: `Capture ${park.name}'s unique landscapes with better lighting and fewer people`,
        wildlifeDescription: `Enhanced wildlife viewing opportunities during cooler off-season months`,
        advantages: [
          "Significantly reduced crowds",
          "Lower accommodation costs",
          "Better wildlife viewing",
          "Unique seasonal experiences"
        ],
        limitations: [
          "Some facilities may be closed",
          "Weather can be unpredictable",
          "Limited daylight hours"
        ],
        weatherData: [
          { month: 'November', high: '50', low: '30', precipitation: '2.0 inches', conditions: 'Cool, crisp air' },
          { month: 'December', high: '45', low: '25', precipitation: '2.5 inches', conditions: 'Cold, possible snow' },
          { month: 'January', high: '40', low: '20', precipitation: '2.0 inches', conditions: 'Cold, clear skies' },
          { month: 'February', high: '45', low: '25', precipitation: '1.8 inches', conditions: 'Cool, warming trend' }
        ],
        tips: [
          {
            title: "Check Weather Conditions",
            description: "Weather can change rapidly. Always check current conditions before your visit."
          },
          {
            title: "Layer Your Clothing",
            description: "Temperatures can vary significantly throughout the day. Dress in layers for comfort."
          },
          {
            title: "Plan for Shorter Days",
            description: "Daylight hours are limited during off-season. Plan activities accordingly."
          },
          {
            title: "Book Accommodations Early",
            description: "Limited lodging options are available during off-season months."
          },
          {
            title: "Carry Emergency Supplies",
            description: "Always carry extra food, water, and emergency supplies when exploring."
          }
        ],
        reservationsPermits: [
          "Park entrance pass or America the Beautiful Annual Pass",
          "Advance lodging reservations recommended",
          "Check for any required permits or reservations",
          "Verify current park operating hours"
        ],
        gearEquipment: [
          "Layered clothing system for temperature changes",
          "Waterproof and warm outer layers",
          "Sturdy hiking boots with good traction",
          "Emergency supplies and first aid kit",
          "Camera with extra batteries (cold weather drains batteries faster)"
        ],
        safetyConsiderations: [
          "Check current park conditions and alerts",
          "Inform someone of your travel plans",
          "Download offline maps (cell service may be limited)",
          "Carry emergency communication device for remote areas"
        ],
        // Database fields
        latitude: park.latitude,
        longitude: park.longitude,
        established: park.established,
        area: park.area,
        annualVisitors: park.annual_visitors,
        description: park.description
      };
    });
    
    // Output the generated data
    console.log('\n📝 Generated park template data structure:');
    console.log('export const parkTemplateData = {');
    
    Object.entries(parkTemplateData).forEach(([slug, data]) => {
      console.log(`  '${slug}': {`);
      console.log(`    name: '${data.name}',`);
      console.log(`    slug: '${data.slug}',`);
      console.log(`    state: '${data.state}',`);
      console.log(`    // ... rest of template data`);
      console.log(`  },`);
    });
    
    console.log('};');
    
    return { parkTemplateData, rawData: data };
    
  } catch (error) {
    console.error('💥 Error fetching parks:', error);
  }
}

// Run the script
getAllParksFromDatabase();