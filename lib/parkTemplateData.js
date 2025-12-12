// Extended park configuration for template generation
// This includes all the detailed content needed for park template pages

export const parkTemplateData = {
  'yellowstone': {
    // Basic Info
    name: 'Yellowstone National Park',
    slug: 'yellowstone',
    state: 'Wyoming',
    offSeasonMonths: 'September, October, April, May',
    
    // Highlights
    peacefulDescription: "Experience Yellowstone's iconic geysers, hot springs, and wildlife viewing areas without the summer crowds that can number over 30,000 visitors per day",
    savingsPercentage: '60',
    photoOpportunities: "Capture stunning fall colors and spring wildlife activity, plus steam rising from hot springs in crisp air",
    wildlifeDescription: "Elk bugling season in fall, bear activity before hibernation, and spring births make wildlife viewing exceptional during off-season months",
    
    // Trade-offs
    advantages: [
      "Dramatic cost savings on lodging (60% off peak rates)",
      "Wildlife more active and visible",
      "Fall colors and spring wildflowers",
      "Peaceful hiking and geyser viewing"
    ],
    limitations: [
      "Some roads may be closed (Dunraven Pass, etc.)",
      "Limited dining options inside the park",
      "Weather can change rapidly"
    ],
    
    // Weather Data
    weatherData: [
      { month: 'April', high: '50', low: '25', precipitation: '1.8 inches', conditions: 'Cool, possible snow' },
      { month: 'May', high: '62', low: '35', precipitation: '2.1 inches', conditions: 'Mild, wildflowers emerging' },
      { month: 'September', high: '70', low: '38', precipitation: '1.4 inches', conditions: 'Pleasant, fall colors beginning' },
      { month: 'October', high: '55', low: '25', precipitation: '1.0 inches', conditions: 'Crisp, peak fall colors' }
    ],
    
    // Tips
    tips: [
      {
        title: "Layer Your Clothing",
        description: "Temperatures can vary 40+ degrees between morning and afternoon. Bring base layers, insulating layers, and waterproof outer shells."
      },
      {
        title: "Check Road Conditions Daily",
        description: "Some park roads close seasonally. Check the NPS website before departing each day for current conditions and closures."
      },
      {
        title: "Pack Emergency Supplies",
        description: "Weather can change rapidly. Carry extra food, water, warm clothing, and a first aid kit when hiking or driving remote areas."
      },
      {
        title: "Book Accommodations Early",
        description: "Limited lodging options are available during off-season. Reserve well in advance or consider staying in gateway towns."
      },
      {
        title: "Bring Bear Spray",
        description: "Fall is when bears are most active preparing for winter. Always carry EPA-approved bear spray when hiking."
      }
    ],
    
    // Before You Go Checklists
    reservationsPermits: [
      "Park entrance pass or America the Beautiful Annual Pass",
      "Lodging reservations (book 6+ months ahead)",
      "Book accommodations early (limited off-season options)",
      "Check park entrance requirements"
    ],
    gearEquipment: [
      "Layered clothing system (base, insulating, shell)",
      "Waterproof hiking boots with good traction",
      "EPA-approved bear spray",
      "Emergency supplies and first aid kit",
      "Headlamp with extra batteries"
    ],
    safetyConsiderations: [
      "Download offline maps (cell service is limited)",
      "Check weather and road conditions before travel",
      "Check current park conditions and closures",
      "Inform someone of your travel plans"
    ]
  },
  
  'grand-canyon': {
    // Basic Info
    name: 'Grand Canyon National Park',
    slug: 'grand-canyon',
    state: 'Arizona',
    offSeasonMonths: 'November, December, January, February',
    
    // Highlights
    peacefulDescription: "Experience the Grand Canyon's South Rim viewpoints and hiking trails without the 5+ million annual visitors crowding the overlooks",
    savingsPercentage: '50',
    photoOpportunities: "Capture dramatic winter light on canyon walls, possible snow on the rim, and crystal-clear visibility on cold days",
    wildlifeDescription: "Desert wildlife more active in cooler temperatures, including elk, deer, and condors soaring above the canyon",
    
    // Trade-offs
    advantages: [
      "Comfortable hiking temperatures (50-70°F)",
      "Crystal clear visibility for photography",
      "Snow-dusted canyon rim scenery",
      "Easier parking and shorter shuttle waits"
    ],
    limitations: [
      "North Rim closed (mid-October to mid-May)",
      "Limited daylight hours for activities",
      "Possible snow and ice on rim trails"
    ],
    
    // Weather Data
    weatherData: [
      { month: 'November', high: '56', low: '27', precipitation: '0.7 inches', conditions: 'Cool, clear skies' },
      { month: 'December', high: '45', low: '18', precipitation: '1.0 inches', conditions: 'Cold, possible snow' },
      { month: 'January', high: '45', low: '18', precipitation: '0.8 inches', conditions: 'Cold, crisp air' },
      { month: 'February', high: '50', low: '21', precipitation: '1.0 inches', conditions: 'Cool, warming trend' }
    ],
    
    // Tips
    tips: [
      {
        title: "Dress in Layers",
        description: "Rim temperatures can be 30+ degrees colder than the inner canyon. Bring warm layers for early morning and evening viewing."
      },
      {
        title: "Check Trail Conditions",
        description: "Ice and snow can make rim trails slippery. Carry microspikes or yaktrax for safe footing on icy sections."
      },
      {
        title: "Plan for Shorter Days",
        description: "Daylight hours are limited in winter. Plan major activities and photography for midday when light is best."
      },
      {
        title: "Book South Rim Lodging",
        description: "Stay at Grand Canyon Village for easy access to viewpoints. North Rim lodging closes in mid-October."
      },
      {
        title: "Bring Sun Protection",
        description: "High altitude and snow reflection intensify UV rays. Wear sunglasses and sunscreen even in winter."
      }
    ],
    
    // Before You Go Checklists
    reservationsPermits: [
      "Park entrance pass or America the Beautiful Annual Pass",
      "South Rim lodging reservations (book early)",
      "Backcountry permits if hiking below the rim",
      "Verify North Rim closure dates"
    ],
    gearEquipment: [
      "Warm layers and winter hiking gear",
      "Microspikes or yaktrax for icy trails",
      "Sunglasses and high-SPF sunscreen",
      "Camera with extra batteries (cold weather drain)",
      "Insulated water bottles"
    ],
    safetyConsiderations: [
      "Check weather forecasts for snow/ice",
      "Never hike alone below the rim in winter",
      "Inform rangers of backcountry plans",
      "Carry emergency communication device"
    ]
  },
  
  'yosemite': {
    // Basic Info
    name: 'Yosemite National Park',
    slug: 'yosemite',
    state: 'California',
    offSeasonMonths: 'November, December, January, February',
    
    // Highlights
    peacefulDescription: "Experience Yosemite Valley's iconic waterfalls and granite cliffs without the summer crowds of 30,000+ daily visitors",
    savingsPercentage: '65',
    photoOpportunities: "Capture snow-covered Half Dome, frozen waterfalls, and winter light on granite walls with pristine reflections",
    wildlifeDescription: "Winter wildlife viewing including deer in the valley, possible bear sightings, and diverse bird species in lower elevations",
    
    // Trade-offs
    advantages: [
      "Snow-covered landscapes and frozen waterfalls",
      "Dramatic winter lighting on granite formations",
      "Comfortable valley floor temperatures",
      "Access to winter sports and activities"
    ],
    limitations: [
      "Tioga Pass and Glacier Point Road closed",
      "Limited high country access",
      "Shorter waterfalls due to reduced flow"
    ],
    
    // Weather Data
    weatherData: [
      { month: 'November', high: '58', low: '29', precipitation: '2.4 inches', conditions: 'Cool, possible rain/snow' },
      { month: 'December', high: '48', low: '26', precipitation: '4.0 inches', conditions: 'Cold, snow likely' },
      { month: 'January', high: '50', low: '26', precipitation: '4.6 inches', conditions: 'Cold, wettest month' },
      { month: 'February', high: '56', low: '28', precipitation: '4.2 inches', conditions: 'Cool, snow/rain mix' }
    ],
    
    // Tips
    tips: [
      {
        title: "Focus on Yosemite Valley",
        description: "High country roads close in winter. Concentrate on valley floor attractions like El Capitan, Bridalveil Fall, and Swinging Bridge."
      },
      {
        title: "Check Road Conditions",
        description: "Chains may be required. Monitor Caltrans and park websites for current road conditions and closures."
      },
      {
        title: "Winter Activity Preparation",
        description: "Consider snowshoeing, cross-country skiing, or ice skating at Curry Village when conditions permit."
      },
      {
        title: "Waterfall Timing",
        description: "Early winter offers better waterfall flow before spring snowmelt. Late winter may have reduced flows."
      },
      {
        title: "Lodging Strategy",
        description: "Valley lodging fills quickly in winter. Consider Wawona or gateway towns like Mariposa for alternatives."
      }
    ],
    
    // Before You Go Checklists
    reservationsPermits: [
      "Park entrance pass or America the Beautiful Annual Pass",
      "Valley lodging reservations (extremely limited)",
      "Vehicle tire chains (required by law)",
      "Check current road closures and conditions"
    ],
    gearEquipment: [
      "Tire chains and winter driving gear",
      "Waterproof hiking boots with traction",
      "Warm, waterproof clothing layers",
      "Snowshoes or cross-country skis (optional)",
      "Camera protection from moisture"
    ],
    safetyConsiderations: [
      "Monitor weather for storm systems",
      "Practice installing tire chains before travel",
      "Check park alerts for flood/rockfall risks",
      "Carry emergency supplies in vehicle"
    ]
  },
  
  'zion': {
    // Basic Info
    name: 'Zion National Park',
    slug: 'zion',
    state: 'Utah',
    offSeasonMonths: 'November, December, January, February',
    
    // Highlights
    peacefulDescription: "Experience Zion's red rock canyons and emerald pools without the summer heat and massive crowds that create shuttle delays",
    savingsPercentage: '55',
    photoOpportunities: "Capture dramatic winter light on red sandstone formations, snow-capped canyon walls, and pristine reflections in the Virgin River",
    wildlifeDescription: "Desert bighorn sheep, mule deer, and diverse bird species are more active in cooler temperatures with less human disturbance",
    
    // Trade-offs
    advantages: [
      "Comfortable hiking temperatures (50-65°F)",
      "Shorter shuttle wait times",
      "Stunning winter photography lighting",
      "Peace and quiet in famous slot canyons"
    ],
    limitations: [
      "Some high elevation trails may have snow/ice",
      "Shorter daylight hours",
      "Cold water temperatures for river hikes"
    ],
    
    // Weather Data
    weatherData: [
      { month: 'November', high: '63', low: '37', precipitation: '1.0 inches', conditions: 'Pleasant, mild days' },
      { month: 'December', high: '52', low: '29', precipitation: '1.5 inches', conditions: 'Cool, possible snow' },
      { month: 'January', high: '52', low: '29', precipitation: '1.7 inches', conditions: 'Cool, crisp air' },
      { month: 'February', high: '57', low: '31', precipitation: '1.8 inches', conditions: 'Mild, warming trend' }
    ],
    
    // Tips
    tips: [
      {
        title: "Water Temperature Awareness",
        description: "The Virgin River is extremely cold in winter. Wear neoprene socks and quick-dry clothing for water hikes like The Narrows."
      },
      {
        title: "Check Trail Conditions",
        description: "High elevation trails like Observation Point may have snow and ice. Check with rangers for current conditions."
      },
      {
        title: "Shuttle System",
        description: "The shuttle system still operates in winter with reduced frequency. Plan extra time between destinations."
      },
      {
        title: "Layer for Temperature Swings",
        description: "Canyon temperatures can vary significantly from sun to shade. Bring layers for changing conditions."
      },
      {
        title: "Photography Golden Hours",
        description: "Winter offers extended golden hour lighting. Plan photography sessions for early morning and late afternoon."
      }
    ],
    
    // Before You Go Checklists
    reservationsPermits: [
      "Park entrance pass or America the Beautiful Annual Pass",
      "Zion Lodge reservations (limited winter availability)",
      "Angel's Landing permit (if attempting in winter)",
      "Check shuttle schedule and operations"
    ],
    gearEquipment: [
      "Neoprene socks for water crossings",
      "Microspikes for icy high elevation trails",
      "Warm layers and wind protection",
      "Waterproof hiking boots",
      "Trekking poles for stability on wet rocks"
    ],
    safetyConsiderations: [
      "Monitor weather for flash flood potential",
      "Never attempt water hikes during storms",
      "Check river flow conditions before water hikes",
      "Inform someone of your hiking plans"
    ]
  },
  
  'glacier': {
    // Basic Info
    name: 'Glacier National Park',
    slug: 'glacier',
    state: 'Montana',
    offSeasonMonths: 'September, October, November',
    
    // Highlights
    peacefulDescription: "Experience Glacier's pristine wilderness and dramatic mountain scenery without summer's overwhelming crowds on Going-to-the-Sun Road",
    savingsPercentage: '70',
    photoOpportunities: "Capture stunning fall larch colors, early snow on peaks, crystal-clear alpine lakes, and wildlife preparing for winter",
    wildlifeDescription: "Mountain goats, bighorn sheep, black bears, and grizzlies are highly active during fall feeding season",
    
    // Trade-offs
    advantages: [
      "Fall larch colors create golden mountainscapes",
      "Wildlife very active preparing for winter",
      "Crystal clear visibility for photography",
      "Massive savings on gateway town lodging"
    ],
    limitations: [
      "Going-to-the-Sun Road closes gradually starting October",
      "Weather can change rapidly in mountains",
      "Limited lodging inside the park"
    ],
    
    // Weather Data
    weatherData: [
      { month: 'September', high: '65', low: '35', precipitation: '1.8 inches', conditions: 'Pleasant, cool nights' },
      { month: 'October', high: '50', low: '25', precipitation: '2.2 inches', conditions: 'Cool, possible snow' },
      { month: 'November', high: '35', low: '15', precipitation: '2.8 inches', conditions: 'Cold, snow likely' }
    ],
    
    // Tips
    tips: [
      {
        title: "Monitor Road Closures",
        description: "Going-to-the-Sun Road closes in sections starting in October. Check current conditions and plan alternate routes."
      },
      {
        title: "Bear Safety in Fall",
        description: "Bears are extremely active in fall. Carry bear spray, make noise, and store food properly at all times."
      },
      {
        title: "Weather Preparedness",
        description: "Mountain weather changes rapidly. Be prepared for snow even in early fall at higher elevations."
      },
      {
        title: "Photography Planning",
        description: "Larch trees turn golden in late September. Plan visits to higher elevations for the best fall colors."
      },
      {
        title: "Gateway Town Strategy",
        description: "Stay in Whitefish, Kalispell, or West Glacier. Many park lodges close by mid-October."
      }
    ],
    
    // Before You Go Checklists
    reservationsPermits: [
      "Park entrance pass or America the Beautiful Annual Pass",
      "Gateway town lodging reservations",
      "Backcountry permits if camping",
      "Vehicle entry reservations (if still required)"
    ],
    gearEquipment: [
      "EPA-approved bear spray",
      "Four-season hiking gear",
      "Microspikes or light crampons",
      "Emergency shelter and warm layers",
      "Camera with weatherproof protection"
    ],
    safetyConsiderations: [
      "Check avalanche conditions for high routes",
      "Monitor weather forecasts closely",
      "Inform rangers of backcountry plans",
      "Carry satellite communication device"
    ]
  },
  
  'great-smoky-mountains': {
    // Basic Info
    name: 'Great Smoky Mountains National Park',
    slug: 'great-smoky-mountains',
    state: 'Tennessee',
    offSeasonMonths: 'November, December, January, February',
    
    // Highlights
    peacefulDescription: "Experience the Smokies' misty mountains and waterfalls without the 12+ million annual visitors that make it America's most visited park",
    savingsPercentage: '60',
    photoOpportunities: "Capture dramatic fog rolling through valleys, bare tree silhouettes, frozen waterfalls, and possibly snow-covered peaks",
    wildlifeDescription: "Black bears preparing for winter, elk in Cataloochee Valley, and diverse bird species in lower elevations",
    
    // Trade-offs
    advantages: [
      "Spectacular fog and mist for photography",
      "Peaceful hiking on normally crowded trails",
      "Significant lodging savings in gateway towns",
      "Bare trees reveal distant mountain views"
    ],
    limitations: [
      "Cataract Falls and some roads may be closed",
      "Weather can be unpredictable",
      "Limited daylight for hiking"
    ],
    
    // Weather Data
    weatherData: [
      { month: 'November', high: '60', low: '35', precipitation: '3.2 inches', conditions: 'Cool, frequent fog' },
      { month: 'December', high: '50', low: '28', precipitation: '3.8 inches', conditions: 'Cool, possible snow' },
      { month: 'January', high: '47', low: '25', precipitation: '3.5 inches', conditions: 'Cold, occasional snow' },
      { month: 'February', high: '52', low: '28', precipitation: '4.0 inches', conditions: 'Cool, wet conditions' }
    ],
    
    // Tips
    tips: [
      {
        title: "Fog and Visibility",
        description: "The Smokies are famous for fog. Drive carefully and use headlights. The mist creates incredible photography opportunities."
      },
      {
        title: "Waterfall Accessibility",
        description: "Some waterfall trails may be icy. Bring microspikes and check trail conditions before hiking."
      },
      {
        title: "Wildlife Viewing Strategy",
        description: "Visit Cataloochee Valley early morning or late afternoon for best elk viewing opportunities."
      },
      {
        title: "Elevation Considerations",
        description: "Higher elevations can be 10-20 degrees colder. Clingmans Dome may have snow when lower areas don't."
      },
      {
        title: "Gateway Town Planning",
        description: "Stay in Gatlinburg or Pigeon Forge for amenities, or Cherokee for a quieter experience."
      }
    ],
    
    // Before You Go Checklists
    reservationsPermits: [
      "No entrance fee required",
      "Gateway town lodging reservations",
      "Backcountry permits for overnight camping",
      "Check road and facility closures"
    ],
    gearEquipment: [
      "Waterproof and breathable rain gear",
      "Microspikes for icy trails",
      "Warm layers for elevation changes",
      "Waterproof hiking boots",
      "Camera with lens protection for fog/mist"
    ],
    safetyConsiderations: [
      "Drive carefully in fog and on mountain roads",
      "Check weather and trail conditions",
      "Be bear aware even in winter",
      "Carry emergency supplies for weather changes"
    ]
  },
  
  'rocky-mountain': {
    // Basic Info
    name: 'Rocky Mountain National Park',
    slug: 'rocky-mountain',
    state: 'Colorado',
    offSeasonMonths: 'September, October, November, April, May',
    
    // Highlights
    peacefulDescription: "Experience Rocky Mountain's alpine lakes and towering peaks without summer crowds, plus spectacular fall aspen colors",
    savingsPercentage: '65',
    photoOpportunities: "Capture golden aspen groves, snow-capped peaks, elk bugling, and crystal-clear mountain lakes without tourists",
    wildlifeDescription: "Elk bugling season in fall, bighorn sheep, moose, and black bears actively foraging before winter",
    
    // Trade-offs
    advantages: [
      "Spectacular aspen colors in fall",
      "Elk bugling season (September-October)",
      "Crisp, clear mountain air",
      "Significantly reduced crowds on popular trails"
    ],
    limitations: [
      "Trail Ridge Road closes above 10,000 feet",
      "High elevation weather can be severe",
      "Some campgrounds and facilities close"
    ],
    
    // Weather Data
    weatherData: [
      { month: 'September', high: '70', low: '35', precipitation: '1.5 inches', conditions: 'Pleasant days, cool nights' },
      { month: 'October', high: '60', low: '25', precipitation: '1.8 inches', conditions: 'Cool, possible snow' },
      { month: 'April', high: '55', low: '25', precipitation: '2.5 inches', conditions: 'Variable, snow possible' },
      { month: 'May', high: '65', low: '35', precipitation: '2.8 inches', conditions: 'Mild, afternoon storms' }
    ],
    
    // Tips
    tips: [
      {
        title: "Aspen Viewing Timing",
        description: "Peak aspen colors typically occur late September to early October. Check Colorado fall foliage reports."
      },
      {
        title: "Elevation Awareness",
        description: "The park ranges from 7,500 to over 14,000 feet. Acclimatize gradually and watch for altitude sickness symptoms."
      },
      {
        title: "Trail Ridge Road Status",
        description: "This scenic road closes to high elevations in winter. Check current road conditions and closures."
      },
      {
        title: "Elk Bugling",
        description: "September-October is elk mating season. Keep 25+ yards distance and never approach bugling elk."
      },
      {
        title: "Weather Preparedness",
        description: "Weather can change rapidly at high altitude. Always pack warm layers and rain gear."
      }
    ],
    
    // Before You Go Checklists
    reservationsPermits: [
      "Park entrance pass or America the Beautiful Annual Pass",
      "Timed entry permits (peak season)",
      "Camping reservations well in advance",
      "Backcountry permits for overnight trips"
    ],
    gearEquipment: [
      "Layers for rapid elevation/temperature changes",
      "Sun protection (high altitude UV)",
      "Microspikes or light traction aids",
      "Emergency supplies and warm layers",
      "Binoculars for wildlife viewing"
    ],
    safetyConsiderations: [
      "Monitor weather for sudden storms",
      "Be aware of altitude sickness symptoms",
      "Maintain safe distance from elk and wildlife",
      "Check avalanche conditions for high routes"
    ]
  },
  
  'acadia': {
    // Basic Info
    name: 'Acadia National Park',
    slug: 'acadia',
    state: 'Maine',
    offSeasonMonths: 'September, October, November, April, May',
    
    // Highlights
    peacefulDescription: "Experience Acadia's rugged coastline and fall foliage without summer's overwhelming crowds and traffic congestion",
    savingsPercentage: '70',
    photoOpportunities: "Capture spectacular fall colors, dramatic coastal storms, lighthouse photography, and pristine sunrise views from Cadillac Mountain",
    wildlifeDescription: "Migrating seabirds, harbor seals, and peak fall migration make wildlife viewing exceptional",
    
    // Trade-offs
    advantages: [
      "World-class fall foliage (September-October)",
      "Dramatic coastal storm photography",
      "Peaceful hiking on popular trails",
      "Massive savings on Bar Harbor lodging"
    ],
    limitations: [
      "Weather can be harsh and unpredictable",
      "Some facilities and campgrounds close",
      "Shorter daylight hours"
    ],
    
    // Weather Data
    weatherData: [
      { month: 'September', high: '68', low: '48', precipitation: '3.5 inches', conditions: 'Pleasant, fall colors begin' },
      { month: 'October', high: '58', low: '38', precipitation: '4.2 inches', conditions: 'Cool, peak fall colors' },
      { month: 'April', high: '55', low: '35', precipitation: '4.0 inches', conditions: 'Cool, variable weather' },
      { month: 'May', high: '65', low: '45', precipitation: '3.8 inches', conditions: 'Mild, spring flowers' }
    ],
    
    // Tips
    tips: [
      {
        title: "Fall Foliage Timing",
        description: "Peak colors typically occur early to mid-October. Check Maine foliage reports for current conditions."
      },
      {
        title: "Coastal Weather Preparedness",
        description: "Coastal weather changes rapidly. Bring wind and waterproof layers even on sunny days."
      },
      {
        title: "Photography Opportunities",
        description: "Dramatic storm lighting and fall colors create incredible photo opportunities. Check weather for dramatic skies."
      },
      {
        title: "Tide Awareness",
        description: "Check tide charts for coastal hikes and Thunder Hole visits. High tide offers the most dramatic displays."
      },
      {
        title: "Lodging Strategy",
        description: "Book Bar Harbor accommodations early for fall season. Consider nearby towns for better rates."
      }
    ],
    
    // Before You Go Checklists
    reservationsPermits: [
      "Park entrance pass or America the Beautiful Annual Pass",
      "Bar Harbor area lodging reservations",
      "Ferry reservations if visiting outer islands",
      "Check seasonal facility closures"
    ],
    gearEquipment: [
      "Wind and waterproof outer layers",
      "Warm layers for coastal wind",
      "Microspikes for wet/icy granite",
      "Camera with weather protection",
      "Binoculars for wildlife and coastal viewing"
    ],
    safetyConsiderations: [
      "Monitor weather for coastal storms",
      "Be cautious on wet granite surfaces",
      "Check tide conditions for coastal areas",
      "Inform someone of your hiking plans"
    ]
  },
  
  'arches': {
    name: 'Arches National Park',
    slug: 'arches',
    state: 'Utah',
    offSeasonMonths: 'November, December, January, February',
    peacefulDescription: "Experience Arches' iconic red rock formations without summer heat and crowds exceeding 10,000 daily visitors",
    savingsPercentage: '50',
    photoOpportunities: "Capture dramatic winter light on red sandstone arches, possible snow contrasts, and golden hour lighting without crowds",
    wildlifeDescription: "Desert wildlife more active in cooler temperatures, including kit foxes, coyotes, and diverse bird species",
    advantages: ["Comfortable hiking temperatures", "Enhanced photography lighting", "Peaceful solitude at famous arches", "Lower gateway town costs"],
    limitations: ["Shorter daylight hours", "Possible snow/ice on trails", "Some facilities may have reduced hours"],
    weatherData: [
      { month: 'November', high: '58', low: '32', precipitation: '0.8 inches', conditions: 'Pleasant, mild days' },
      { month: 'December', high: '45', low: '22', precipitation: '0.9 inches', conditions: 'Cool, possible snow' },
      { month: 'January', high: '43', low: '18', precipitation: '0.7 inches', conditions: 'Cold, clear skies' },
      { month: 'February', high: '50', low: '25', precipitation: '0.8 inches', conditions: 'Cool, warming trend' }
    ],
    tips: [
      { title: "Trail Safety", description: "Sandstone can be slippery when wet or icy. Wear proper footwear with good traction." },
      { title: "Photography Planning", description: "Winter offers excellent lighting conditions. Golden hour is extended with lower sun angles." },
      { title: "Water Management", description: "Carry extra water even in winter. Desert air is dry and dehydrating." },
      { title: "Weather Monitoring", description: "Desert weather can change quickly. Check conditions before hiking." },
      { title: "Clothing Strategy", description: "Layer clothing for temperature swings between sun and shade." }
    ],
    reservationsPermits: ["Park entrance pass", "Moab lodging reservations", "Check timed entry requirements", "Verify current operating hours"],
    gearEquipment: ["Traction aids for slippery sandstone", "Warm layers for temperature swings", "Sun protection (desert reflection)", "Emergency supplies", "Camera with extra batteries"],
    safetyConsiderations: ["Monitor weather for sudden changes", "Stay on designated trails", "Carry emergency supplies", "Inform someone of hiking plans"]
  },
  
  'canyonlands': {
    name: 'Canyonlands National Park',
    slug: 'canyonlands',
    state: 'Utah',
    offSeasonMonths: 'November, December, January, February',
    peacefulDescription: "Experience Canyonlands' vast canyon systems and mesa views without summer's intense heat and crowds",
    savingsPercentage: '55',
    photoOpportunities: "Capture expansive canyon vistas, dramatic winter lighting, and pristine wilderness without human presence",
    wildlifeDescription: "Desert bighorn sheep, coyotes, and ravens thrive in cooler winter conditions",
    advantages: ["Comfortable temperatures for hiking", "Crystal clear visibility", "Solitude in vast wilderness", "Excellent photography conditions"],
    limitations: ["4WD roads may be more challenging", "Limited services", "Weather can change rapidly"],
    weatherData: [
      { month: 'November', high: '58', low: '30', precipitation: '0.7 inches', conditions: 'Pleasant, clear skies' },
      { month: 'December', high: '43', low: '20', precipitation: '0.8 inches', conditions: 'Cool, possible snow' },
      { month: 'January', high: '41', low: '17', precipitation: '0.6 inches', conditions: 'Cold, crisp air' },
      { month: 'February', high: '48', low: '23', precipitation: '0.7 inches', conditions: 'Cool, clear conditions' }
    ],
    tips: [
      { title: "4WD Preparation", description: "Winter conditions can make 4WD roads more challenging. Check road conditions and carry recovery gear." },
      { title: "Mesa Top Safety", description: "Winds can be strong on mesa tops. Use caution near cliff edges, especially in winter." },
      { title: "Self-Sufficiency", description: "Limited services in winter. Carry extra food, water, and emergency supplies." },
      { title: "Photography Strategy", description: "Expansive views benefit from wide-angle photography. Plan for golden hour lighting." },
      { title: "Navigation Awareness", description: "Vast landscape can be disorienting. Carry GPS and inform others of your plans." }
    ],
    reservationsPermits: ["Park entrance pass", "Backcountry permits for overnight", "Check road conditions", "Moab area lodging"],
    gearEquipment: ["4WD vehicle for backcountry access", "Emergency recovery gear", "Warm layers and wind protection", "Navigation tools (GPS)", "Extra food and water"],
    safetyConsiderations: ["Check 4WD road conditions", "Monitor weather forecasts", "Carry satellite communication", "Never travel alone in backcountry"]
  },
  
  'bryce-canyon': {
    name: 'Bryce Canyon National Park',
    slug: 'bryce-canyon',
    state: 'Utah',
    offSeasonMonths: 'November, December, January, February',
    peacefulDescription: "Experience Bryce's otherworldly hoodoos and amphitheaters blanketed in snow without summer crowds",
    savingsPercentage: '60',
    photoOpportunities: "Capture stunning snow-covered red rock hoodoos, winter storms, and incredible contrast between snow and sandstone",
    wildlifeDescription: "Mule deer, elk, and diverse bird species adapted to high-elevation winter conditions",
    advantages: ["Magical snow-covered hoodoos", "Incredible winter photography", "Peaceful hiking trails", "Clear, crisp air"],
    limitations: ["High elevation cold and snow", "Some roads/trails may be closed", "Limited lodging options"],
    weatherData: [
      { month: 'November', high: '47', low: '16', precipitation: '1.2 inches', conditions: 'Cool, possible snow' },
      { month: 'December', high: '37', low: '9', precipitation: '1.8 inches', conditions: 'Cold, snow likely' },
      { month: 'January', high: '37', low: '5', precipitation: '1.5 inches', conditions: 'Cold, snowy' },
      { month: 'February', high: '42', low: '11', precipitation: '1.7 inches', conditions: 'Cold, snow possible' }
    ],
    tips: [
      { title: "High Elevation Preparation", description: "Bryce sits at 8,000+ feet. Temperatures are much colder than surrounding desert areas." },
      { title: "Winter Driving", description: "Carry tire chains and check road conditions. Main park road is plowed but can be icy." },
      { title: "Hiking Safety", description: "Trails can be icy and snow-covered. Microspikes are essential for safe hiking." },
      { title: "Photography Magic", description: "Snow on red hoodoos creates magical scenes. Visit after fresh snowfall for best conditions." },
      { title: "Lodging Strategy", description: "Bryce Lodge closes in winter. Stay in nearby towns or book well in advance." }
    ],
    reservationsPermits: ["Park entrance pass", "Winter lodging reservations", "Check road/trail conditions", "Verify shuttle operations"],
    gearEquipment: ["Microspikes or crampons", "Warm winter hiking gear", "Tire chains", "Camera cold weather protection", "Emergency winter supplies"],
    safetyConsiderations: ["Monitor winter weather conditions", "Carry emergency supplies in vehicle", "Check trail conditions before hiking", "Be prepared for rapid weather changes"]
  },
  
  'joshua-tree': {
    name: 'Joshua Tree National Park',
    slug: 'joshua-tree',
    state: 'California',
    offSeasonMonths: 'November, December, January, February',
    peacefulDescription: "Experience Joshua Tree's unique desert landscapes and otherworldly rock formations without intense summer heat",
    savingsPercentage: '45',
    photoOpportunities: "Capture stunning desert night skies, dramatic Joshua trees, and incredible rock formations with perfect lighting",
    wildlifeDescription: "Desert tortoises, bighorn sheep, coyotes, and diverse bird species are more active in cooler temperatures",
    advantages: ["Perfect hiking temperatures", "Incredible stargazing conditions", "Peaceful rock climbing", "Enhanced photography lighting"],
    limitations: ["Nights can be very cold", "Some facilities may be closed", "Desert conditions require preparation"],
    weatherData: [
      { month: 'November', high: '72', low: '44', precipitation: '0.5 inches', conditions: 'Pleasant, clear skies' },
      { month: 'December', high: '62', low: '36', precipitation: '0.8 inches', conditions: 'Mild days, cold nights' },
      { month: 'January', high: '61', low: '34', precipitation: '0.9 inches', conditions: 'Cool, clear conditions' },
      { month: 'February', high: '66', low: '38', precipitation: '1.0 inches', conditions: 'Mild, spring-like' }
    ],
    tips: [
      { title: "Temperature Extremes", description: "Desert temperatures swing dramatically. Days are pleasant, but nights can drop below freezing." },
      { title: "Stargazing Opportunities", description: "Joshua Tree offers some of the best stargazing in the country. Bring astronomy gear." },
      { title: "Rock Climbing Season", description: "Winter is peak climbing season. Check climbing conditions and regulations." },
      { title: "Desert Preparedness", description: "Always carry extra water, even in winter. Desert air is extremely dry." },
      { title: "Wildlife Awareness", description: "Desert animals are more active in winter. Keep food secured and watch for wildlife." }
    ],
    reservationsPermits: ["Park entrance pass", "Camping reservations (highly recommended)", "Check rock climbing regulations", "Verify current operating hours"],
    gearEquipment: ["Warm sleeping gear for cold nights", "Layered clothing system", "Extra water and food", "Flashlight/headlamp", "Camera for astrophotography"],
    safetyConsiderations: ["Monitor weather for rare storms", "Carry extra water always", "Be prepared for temperature extremes", "Inform others of your plans"]
  },
  
  'death-valley': {
    name: 'Death Valley National Park',
    slug: 'death-valley',
    state: 'California',
    offSeasonMonths: 'November, December, January, February',
    peacefulDescription: "Experience Death Valley's extreme desert landscapes in comfortable temperatures without summer's dangerous heat",
    savingsPercentage: '40',
    photoOpportunities: "Capture stunning desert vistas, colorful badlands, salt flats, and incredible night sky photography",
    wildlifeDescription: "Desert bighorn sheep, kit foxes, and diverse bird species thrive in winter's cooler conditions",
    advantages: ["Safe, comfortable temperatures", "Spectacular wildflower potential", "Incredible night photography", "Peaceful desert solitude"],
    limitations: ["Some high elevation areas may be cold", "Remote location requires preparation", "Limited services"],
    weatherData: [
      { month: 'November', high: '75', low: '46', precipitation: '0.2 inches', conditions: 'Pleasant, clear skies' },
      { month: 'December', high: '65', low: '37', precipitation: '0.3 inches', conditions: 'Mild, comfortable' },
      { month: 'January', high: '65', low: '36', precipitation: '0.3 inches', conditions: 'Cool, pleasant' },
      { month: 'February', high: '72', low: '42', precipitation: '0.4 inches', conditions: 'Mild, spring-like' }
    ],
    tips: [
      { title: "Wildflower Timing", description: "Late winter rains can trigger spectacular wildflower blooms. Check park reports for bloom status." },
      { title: "Remote Location Prep", description: "Death Valley is remote. Carry extra food, water, and emergency supplies always." },
      { title: "Elevation Awareness", description: "Elevations range from below sea level to 11,000+ feet. Higher areas can be much colder." },
      { title: "Photography Planning", description: "Clear skies and minimal light pollution make Death Valley perfect for astrophotography." },
      { title: "Vehicle Preparation", description: "Ensure your vehicle is in good condition. Carry emergency supplies and communication devices." }
    ],
    reservationsPermits: ["Park entrance pass", "Camping reservations recommended", "Check road conditions", "Fuel up before entering"],
    gearEquipment: ["Emergency supplies and extra water", "Warm gear for elevation changes", "Camera gear for night photography", "Vehicle emergency kit", "Communication device"],
    safetyConsiderations: ["Always carry extra water", "Monitor weather conditions", "Inform others of travel plans", "Check road conditions regularly"]
  },

  'sequoia': {
    name: 'Sequoia National Park',
    slug: 'sequoia',
    state: 'California',
    offSeasonMonths: 'October, November, April, May',
    peacefulDescription: "Experience towering giant sequoias and stunning mountain vistas without summer crowds",
    savingsPercentage: '50',
    photoOpportunities: "Capture massive sequoia trees, fall colors, spring wildflowers, and snow-capped Sierra Nevada peaks",
    wildlifeDescription: "Black bears, mule deer, and diverse bird species are more active during cooler months",
    advantages: ["Cooler temperatures for hiking", "Fall colors and spring blooms", "Fewer crowds at General Sherman Tree", "Cost savings on lodging"],
    limitations: ["High elevation roads may close", "Limited dining options", "Weather can change quickly"],
    weatherData: [
      { month: 'April', high: '65', low: '40', precipitation: '2.5 inches', conditions: 'Mild, spring blooms' },
      { month: 'May', high: '75', low: '50', precipitation: '1.2 inches', conditions: 'Pleasant, wildflowers' },
      { month: 'October', high: '70', low: '45', precipitation: '1.0 inches', conditions: 'Crisp, fall colors' },
      { month: 'November', high: '55', low: '35', precipitation: '2.8 inches', conditions: 'Cool, possible snow' }
    ],
    tips: [
      { title: "Elevation Awareness", description: "Park elevations range from 1,370 to 14,494 feet. Dress in layers and be prepared for temperature changes." },
      { title: "Road Closures", description: "Generals Highway and high country roads may close due to snow. Check current conditions before visiting." },
      { title: "Giant Forest Priority", description: "Visit General Sherman Tree and the Giant Forest early in the day for the best lighting and fewer crowds." },
      { title: "Bear Safety", description: "Black bears are active year-round. Store food properly and carry bear spray when hiking." },
      { title: "Wildflower Timing", description: "Spring wildflower displays can be spectacular at different elevations from March through July." }
    ],
    reservationsPermits: ["Park entrance pass", "Camping reservations for developed campgrounds", "Wilderness permits for backcountry", "Check road conditions"],
    gearEquipment: ["Layered clothing system", "Sturdy hiking boots", "Bear canister for backcountry", "Camera with extra batteries", "Emergency supplies"],
    safetyConsiderations: ["Monitor elevation and weather", "Practice bear safety", "Check road conditions daily", "Carry emergency supplies"]
  },

  'olympic': {
    name: 'Olympic National Park',
    slug: 'olympic',
    state: 'Washington',
    offSeasonMonths: 'October, November, April, May',
    peacefulDescription: "Explore diverse ecosystems from temperate rainforests to rugged coastlines without summer crowds",
    savingsPercentage: '45',
    photoOpportunities: "Capture dramatic coastlines, misty rainforests, fall colors, and storm watching opportunities",
    wildlifeDescription: "Roosevelt elk, black bears, and diverse marine life are often more visible during quieter seasons",
    advantages: ["Storm watching on beaches", "Fewer crowds at popular spots", "Fall colors in deciduous areas", "Cozy lodge atmosphere"],
    limitations: ["Frequent rain and overcast skies", "Some high elevation areas inaccessible", "Limited ferry schedules"],
    weatherData: [
      { month: 'April', high: '60', low: '42', precipitation: '3.5 inches', conditions: 'Cool, frequent showers' },
      { month: 'May', high: '65', low: '47', precipitation: '2.8 inches', conditions: 'Mild, occasional rain' },
      { month: 'October', high: '62', low: '46', precipitation: '5.2 inches', conditions: 'Cool, rainy, fall colors' },
      { month: 'November', high: '53', low: '39', precipitation: '8.9 inches', conditions: 'Cool, very wet, dramatic storms' }
    ],
    tips: [
      { title: "Rain Gear Essential", description: "Bring quality rain gear and waterproof boots. The rainforest receives over 140 inches annually." },
      { title: "Layer Clothing", description: "Weather varies dramatically from coast to mountains. Layer for temperature and moisture changes." },
      { title: "Storm Watching", description: "Pacific storms create spectacular wave action. Ruby Beach and Rialto Beach offer dramatic viewing." },
      { title: "Hot Springs Access", description: "Sol Duc Hot Springs provides warm relaxation after cool, wet hikes." },
      { title: "Tide Pool Timing", description: "Check tide charts for optimal tide pool exploration along the rugged coastline." }
    ],
    reservationsPermits: ["Park entrance pass", "Camping reservations recommended", "Wilderness permits for backcountry", "Check road and ferry conditions"],
    gearEquipment: ["Waterproof rain gear", "Waterproof hiking boots", "Warm layers", "Tide pool guides", "Camera protection"],
    safetyConsiderations: ["Monitor weather and tides", "Practice wildlife safety", "Check road conditions", "Inform others of plans"]
  },

  'mount-rainier': {
    name: 'Mount Rainier National Park',
    slug: 'mount-rainier',
    state: 'Washington',
    offSeasonMonths: 'October, November, April, May',
    peacefulDescription: "Experience wildflower meadows and stunning mountain views without peak season crowds",
    savingsPercentage: '50',
    photoOpportunities: "Capture wildflower displays, fall colors, snow-capped peaks, and dramatic mountain landscapes",
    wildlifeDescription: "Black bears, mountain goats, and diverse wildlife are active during shoulder seasons",
    advantages: ["World-class wildflower displays", "Fall colors in lower elevations", "Fewer crowds on popular trails", "Cost savings on accommodations"],
    limitations: ["High elevation areas often snow-covered", "Weather can change rapidly", "Some roads and facilities closed"],
    weatherData: [
      { month: 'April', high: '55', low: '36', precipitation: '4.2 inches', conditions: 'Cool, wet, snow at elevation' },
      { month: 'May', high: '65', low: '43', precipitation: '2.9 inches', conditions: 'Mild, wildflowers beginning' },
      { month: 'October', high: '58', low: '38', precipitation: '5.1 inches', conditions: 'Cool, fall colors, early snow' },
      { month: 'November', high: '46', low: '32', precipitation: '7.8 inches', conditions: 'Cold, wet, snow likely' }
    ],
    tips: [
      { title: "Wildflower Timing", description: "Peak wildflower season varies by elevation. Lower areas bloom in May, alpine areas in July-August." },
      { title: "Weather Preparedness", description: "Mountain weather changes rapidly. Carry warm layers and rain gear even on sunny days." },
      { title: "Road Closures", description: "Paradise and Sunrise areas may be inaccessible due to snow. Check current road conditions." },
      { title: "Photography Planning", description: "Clear weather provides stunning mountain views. Be ready for dramatic cloud formations." },
      { title: "Elevation Awareness", description: "Paradise sits at 5,400 feet. Allow time to acclimate and watch for altitude effects." }
    ],
    reservationsPermits: ["Park entrance pass", "Camping reservations for car camping", "Climbing permits for glacier travel", "Check road conditions"],
    gearEquipment: ["Layered clothing system", "Waterproof gear", "Sturdy hiking boots", "Traction devices for snow", "Emergency supplies"],
    safetyConsiderations: ["Monitor weather conditions", "Practice wildlife safety", "Check road closures", "Carry emergency gear"]
  },

  'crater-lake': {
    name: 'Crater Lake National Park',
    slug: 'crater-lake',
    state: 'Oregon',
    offSeasonMonths: 'October, November, April, May',
    peacefulDescription: "Experience the stunning blue lake and volcanic landscape without summer crowds",
    savingsPercentage: '55',
    photoOpportunities: "Capture the deep blue lake, snow-covered rim, dramatic volcanic features, and incredible sunrises",
    wildlifeDescription: "Black bears, elk, and diverse bird species are more visible during quieter seasons",
    advantages: ["Fewer crowds at viewpoints", "Dramatic weather and lighting", "Cost savings on lodging", "Unique winter access opportunities"],
    limitations: ["Rim Drive often closed by snow", "Limited lodging and dining", "Weather can be severe"],
    weatherData: [
      { month: 'April', high: '45', low: '25', precipitation: '2.8 inches', conditions: 'Cool, snow likely at rim' },
      { month: 'May', high: '55', low: '32', precipitation: '1.9 inches', conditions: 'Mild, snow clearing' },
      { month: 'October', high: '58', low: '32', precipitation: '2.1 inches', conditions: 'Cool, fall colors, early snow' },
      { month: 'November', high: '42', low: '24', precipitation: '4.5 inches', conditions: 'Cold, snow accumulating' }
    ],
    tips: [
      { title: "Rim Drive Access", description: "The full Rim Drive is typically closed October-June due to snow. Check current road conditions." },
      { title: "Winter Preparation", description: "High elevation means snow is possible year-round. Carry chains and warm gear." },
      { title: "Photography Timing", description: "Early morning provides the best lighting and clearest views of the lake." },
      { title: "Elevation Effects", description: "The rim sits at 7,000+ feet. Be prepared for thin air and rapid weather changes." },
      { title: "Limited Services", description: "Few services operate during shoulder seasons. Bring supplies and fuel up beforehand." }
    ],
    reservationsPermits: ["Park entrance pass", "Camping reservations (seasonal)", "Check road conditions", "Winter access may require permits"],
    gearEquipment: ["Heavy winter clothing", "Tire chains", "Emergency supplies", "Camera gear", "High-elevation sun protection"],
    safetyConsiderations: ["Monitor weather closely", "Check road conditions", "Carry emergency supplies", "Inform others of plans"]
  },

  'badlands': {
    name: 'Badlands National Park',
    slug: 'badlands',
    state: 'South Dakota',
    offSeasonMonths: 'October, November, April, May',
    peacefulDescription: "Explore dramatic geological formations and fossil-rich badlands without summer heat and crowds",
    savingsPercentage: '40',
    photoOpportunities: "Capture stunning layered rock formations, prairie sunsets, night sky photography, and wildlife",
    wildlifeDescription: "Bison, bighorn sheep, prairie dogs, and diverse grassland species thrive in cooler weather",
    advantages: ["Comfortable temperatures for hiking", "Incredible night sky viewing", "Wildlife more active", "Fewer crowds at overlooks"],
    limitations: ["Weather can be unpredictable", "Strong winds common", "Limited services in nearby towns"],
    weatherData: [
      { month: 'April', high: '62', low: '35', precipitation: '1.8 inches', conditions: 'Mild, windy, variable' },
      { month: 'May', high: '72', low: '45', precipitation: '2.8 inches', conditions: 'Pleasant, occasional storms' },
      { month: 'October', high: '68', low: '38', precipitation: '1.2 inches', conditions: 'Cool, crisp, excellent visibility' },
      { month: 'November', high: '50', low: '25', precipitation: '0.8 inches', conditions: 'Cool, possible snow' }
    ],
    tips: [
      { title: "Weather Variability", description: "Prairie weather can change rapidly. Layer clothing and prepare for wind, rain, or sudden temperature drops." },
      { title: "Night Photography", description: "Badlands offers incredible dark skies. Bring tripod and plan for amazing astrophotography opportunities." },
      { title: "Wildlife Viewing", description: "Early morning and evening provide the best wildlife viewing opportunities in the mixed-grass prairie." },
      { title: "Fossil Hunting", description: "While collecting is prohibited, ranger programs highlight the park's rich paleontological resources." },
      { title: "Wind Preparation", description: "Strong winds are common. Secure loose items and be prepared for challenging photography conditions." }
    ],
    reservationsPermits: ["Park entrance pass", "Camping reservations recommended", "Check weather conditions", "No special permits needed"],
    gearEquipment: ["Wind-resistant clothing", "Sturdy hiking boots", "Camera tripod", "Binoculars for wildlife", "Sun protection"],
    safetyConsiderations: ["Monitor weather conditions", "Watch for rattlesnakes", "Stay on designated trails", "Carry emergency supplies"]
  },

  'capitol-reef': {
    name: 'Capitol Reef National Park',
    slug: 'capitol-reef',
    state: 'Utah',
    offSeasonMonths: 'November, December, January, February',
    peacefulDescription: "Explore colorful rock formations and historic pioneer sites without desert heat and crowds",
    savingsPercentage: '45',
    photoOpportunities: "Capture stunning red rock formations, petroglyphs, historic buildings, and dramatic desert landscapes",
    wildlifeDescription: "Mule deer, desert bighorn sheep, and diverse bird species are more active in cooler weather",
    advantages: ["Comfortable hiking temperatures", "Clear, crisp air for photography", "Fewer crowds on trails", "Historic orchard harvests"],
    limitations: ["Some high elevation areas may be cold", "Limited services in winter", "Weather can be variable"],
    weatherData: [
      { month: 'November', high: '58', low: '30', precipitation: '0.9 inches', conditions: 'Cool, pleasant for hiking' },
      { month: 'December', high: '45', low: '20', precipitation: '1.2 inches', conditions: 'Cool, possible snow' },
      { month: 'January', high: '43', low: '18', precipitation: '0.8 inches', conditions: 'Cold, occasional snow' },
      { month: 'February', high: '52', low: '25', precipitation: '0.9 inches', conditions: 'Cool, spring-like' }
    ],
    tips: [
      { title: "Layered Clothing", description: "Desert temperatures vary dramatically. Layer clothing for temperature swings from freezing to 60°F." },
      { title: "Petroglyphs Viewing", description: "Visit Petroglyphs Trail early in the day for the best lighting on ancient rock art." },
      { title: "Historic Orchard", description: "Fall brings fruit harvest season in the historic Fruita district. Check for seasonal picking opportunities." },
      { title: "Slot Canyon Safety", description: "Check weather conditions before entering slot canyons. Flash flood danger exists even with distant storms." },
      { title: "Photography Planning", description: "Golden hour lighting on red rocks is spectacular. Plan sunrise and sunset shoots carefully." }
    ],
    reservationsPermits: ["Park entrance pass", "Camping reservations recommended", "Check weather conditions", "No permits needed for most areas"],
    gearEquipment: ["Layered clothing", "Sturdy hiking boots", "Camera gear", "Water and snacks", "Emergency supplies"],
    safetyConsiderations: ["Monitor weather for flash floods", "Practice desert safety", "Check trail conditions", "Carry adequate water"]
  },

  // ===== ALASKA NATIONAL PARKS =====
  
  'denali': {
    name: 'Denali National Park',
    slug: 'denali',
    state: 'Alaska',
    offSeasonMonths: 'April, May, September, October',
    
    // Highlights
    peacefulDescription: "Experience North America's tallest peak and vast Alaskan wilderness with fewer crowds and unique seasonal wildlife viewing",
    savingsPercentage: '60',
    photoOpportunities: "Capture massive mountain vistas, caribou herds, aurora borealis, and endless tundra landscapes without tour buses",
    wildlifeDescription: "Caribou migration, bears preparing for winter, wolves, moose, and excellent chances for Northern Lights",
    
    // Trade-offs
    advantages: [
      "Incredible wildlife viewing during migration seasons",
      "Northern Lights visible during shoulder seasons",
      "Massive savings on accommodations and tours",
      "Near-solitude in one of America's wildest places"
    ],
    limitations: [
      "Park road beyond mile 30 typically closed after September",
      "Weather can be severe with rapid changes",
      "Very limited services and dining options",
      "Transportation options extremely limited"
    ],
    
    // Weather
    weather: {
      spring: { temp: "35-55°F", conditions: "Variable with snow possible, long daylight hours" },
      fall: { temp: "25-45°F", conditions: "Crisp and clear, potential for Northern Lights" }
    },
    
    // Tips
    tips: [
      { title: "Aurora Preparation", description: "September and October offer excellent Northern Lights viewing. Download aurora apps and plan night photography sessions." },
      { title: "Wildlife Safety", description: "Carry bear spray always. Wildlife is very active during shoulder seasons preparing for winter." },
      { title: "Weather Preparedness", description: "Weather changes rapidly. Always carry winter gear even on warm days." },
      { title: "Transportation Planning", description: "Park shuttle service is limited. Book any transportation well in advance." },
      { title: "Photography Equipment", description: "Bring extra batteries for cold weather and aurora photography. Consider tripod for night shots." }
    ],
    reservationsPermits: ["Park entrance pass", "Advance lodging reservations essential", "Backcountry permits if camping", "Aurora viewing reservations"],
    gearEquipment: ["Arctic-rated clothing", "Bear spray", "Aurora photography gear", "Emergency supplies", "High-energy snacks"],
    safetyConsiderations: ["Monitor weather constantly", "Always carry bear spray", "Inform others of plans", "Prepare for emergencies"]
  },

  'katmai': {
    name: 'Katmai National Park',
    slug: 'katmai',
    state: 'Alaska',
    offSeasonMonths: 'May, June, September, October',
    
    // Highlights
    peacefulDescription: "Famous for massive brown bears fishing for salmon, volcanic landscapes, and pristine Alaskan wilderness accessible only by plane",
    savingsPercentage: '50',
    photoOpportunities: "World-class brown bear photography, salmon runs, volcanic landscapes, and remote wilderness without crowds",
    wildlifeDescription: "Brown bears (up to 100+ at Brooks Falls), salmon runs, wolves, caribou, and incredible bird watching",
    
    // Trade-offs
    advantages: [
      "Unparalleled bear viewing opportunities",
      "Salmon runs create wildlife spectacles",
      "Remote wilderness experience",
      "Professional photography opportunities"
    ],
    limitations: [
      "Expensive flights required for access",
      "Weather-dependent flight schedules",
      "Very limited accommodations",
      "No road access - completely remote"
    ],
    
    // Weather
    weather: {
      summer: { temp: "50-65°F", conditions: "Cool and variable, frequent rain" },
      fall: { temp: "35-50°F", conditions: "Crisp with increasing storms" }
    },
    
    // Tips
    tips: [
      { title: "Bear Safety Protocol", description: "Follow strict bear viewing guidelines. Maintain minimum 50-yard distance from all bears." },
      { title: "Flight Contingency", description: "Weather often delays flights. Build flexibility into travel plans and bring extra supplies." },
      { title: "Photography Preparation", description: "Bring telephoto lenses for bear photography. Weather protection for equipment essential." },
      { title: "Accommodation Planning", description: "Very limited lodging. Book Brooks Lodge far in advance or plan for camping." },
      { title: "Salmon Season Timing", description: "July peak season for salmon runs. Shoulder seasons offer fewer bears but still excellent viewing." }
    ],
    reservationsPermits: ["Park entrance pass", "Brooks Lodge reservations (book 1 year ahead)", "Air taxi arrangements", "Backcountry permits"],
    gearEquipment: ["Waterproof everything", "Telephoto camera lens", "Bear safety equipment", "Warm layers", "Emergency communication"],
    safetyConsiderations: ["Follow bear protocols strictly", "Weather emergency planning", "Remote location preparation", "Communication devices essential"]
  },

  'kenai-fjords': {
    name: 'Kenai Fjords National Park',
    slug: 'kenai-fjords',
    state: 'Alaska',
    offSeasonMonths: 'April, May, September, October',
    
    // Highlights
    peacefulDescription: "Dramatic fjords, massive glaciers, and abundant marine wildlife with significantly fewer cruise ships and tourists",
    savingsPercentage: '55',
    photoOpportunities: "Calving glaciers, marine wildlife, dramatic coastlines, and Northern Lights over fjords",
    wildlifeDescription: "Humpback whales, orcas, sea otters, Steller sea lions, harbor seals, and seabirds",
    
    // Trade-offs
    advantages: [
      "Fewer boats and cruise ships",
      "Better wildlife photography opportunities",
      "Lower accommodation prices in Seward",
      "Potential Northern Lights viewing"
    ],
    limitations: [
      "Limited boat tour schedules",
      "Weather-dependent access to glaciers",
      "Some services may be closed",
      "Rough seas possible"
    ],
    
    // Weather
    weather: {
      spring: { temp: "40-55°F", conditions: "Variable with increasing daylight" },
      fall: { temp: "35-50°F", conditions: "Stormy but dramatic skies" }
    },
    
    // Tips
    tips: [
      { title: "Boat Tour Timing", description: "Book glacier tours early as schedules are limited in shoulder seasons. Weather cancellations common." },
      { title: "Marine Wildlife", description: "Shoulder seasons offer excellent whale watching as they migrate through the area." },
      { title: "Glacier Photography", description: "Dramatic lighting conditions during shoulder seasons create spectacular glacier photography." },
      { title: "Seward Base", description: "Stay in Seward for park access. Book accommodations early as options are limited." },
      { title: "Weather Flexibility", description: "Have backup indoor activities planned as weather can cancel outdoor excursions." }
    ],
    reservationsPermits: ["Park entrance pass", "Boat tour reservations", "Seward accommodations", "Check weather conditions"],
    gearEquipment: ["Waterproof clothing", "Seasickness remedies", "Camera protection", "Warm layers", "Binoculars"],
    safetyConsiderations: ["Marine weather awareness", "Boat safety protocols", "Cold water precautions", "Emergency communications"]
  },

  'glacier-bay': {
    name: 'Glacier Bay National Park',
    slug: 'glacier-bay',
    state: 'Alaska',
    offSeasonMonths: 'May, September, October',
    
    // Highlights
    peacefulDescription: "Pristine glacial landscape and marine sanctuary with dramatically fewer cruise ships and unparalleled wilderness solitude",
    savingsPercentage: '65',
    photoOpportunities: "Massive tidewater glaciers, humpback whales, ice calving, and pristine wilderness landscapes",
    wildlifeDescription: "Humpback whales, orcas, brown bears, mountain goats, seals, and exceptional seabird colonies",
    
    // Trade-offs
    advantages: [
      "Minimal cruise ship traffic",
      "Exceptional wildlife viewing",
      "True wilderness experience",
      "Lower accommodation costs"
    ],
    limitations: [
      "Very limited access options",
      "Weather-dependent transportation",
      "Extremely limited services",
      "Advanced planning essential"
    ],
    
    // Weather
    weather: {
      spring: { temp: "45-60°F", conditions: "Variable with long daylight" },
      fall: { temp: "40-55°F", conditions: "Stormy but dramatic" }
    },
    
    // Tips
    tips: [
      { title: "Access Planning", description: "Most access via boat or plane from Gustavus. Book transportation well in advance." },
      { title: "Glacier Viewing", description: "Shoulder seasons offer dramatic glacier viewing with fewer people. Ice calving more active." },
      { title: "Wildlife Photography", description: "Bring telephoto lenses for wildlife. Marine animals very active during these periods." },
      { title: "Weather Preparedness", description: "Weather changes rapidly. Always carry emergency gear and warm clothing." },
      { title: "Permit Requirements", description: "Private boats need permits. Commercial tours have limited schedules in shoulder seasons." }
    ],
    reservationsPermits: ["Park entrance pass", "Vessel permits if boating", "Lodging in Gustavus", "Transportation arrangements"],
    gearEquipment: ["Marine-grade waterproof gear", "Wildlife photography equipment", "Emergency supplies", "Warm clothing", "Binoculars"],
    safetyConsiderations: ["Marine safety protocols", "Remote location planning", "Weather emergency preparation", "Wildlife safety"]
  },

  'gates-of-the-arctic': {
    name: 'Gates of the Arctic National Park',
    slug: 'gates-of-the-arctic',
    state: 'Alaska',
    offSeasonMonths: 'June, July, August, September',
    
    // Highlights
    peacefulDescription: "America's most remote national park with no roads, trails, or facilities - pure wilderness experience above the Arctic Circle",
    savingsPercentage: '40',
    photoOpportunities: "Untouched Arctic wilderness, caribou migration, Northern Lights, and landscapes few humans ever see",
    wildlifeDescription: "Caribou herds, grizzly bears, wolves, lynx, and pristine Arctic ecosystems",
    
    // Trade-offs
    advantages: [
      "Ultimate wilderness experience",
      "No crowds whatsoever",
      "Incredible Northern Lights viewing",
      "Pristine Arctic ecosystem"
    ],
    limitations: [
      "Extremely expensive access via bush plane",
      "No facilities or infrastructure",
      "Expert-level wilderness skills required",
      "Emergency rescue very difficult"
    ],
    
    // Weather
    weather: {
      summer: { temp: "40-70°F", conditions: "Variable, 24-hour daylight" },
      fall: { temp: "20-45°F", conditions: "Rapid freeze, Northern Lights return" }
    },
    
    // Tips
    tips: [
      { title: "Expert Planning Required", description: "This park is for expert wilderness travelers only. Extensive planning and skills essential." },
      { title: "Survival Preparation", description: "Carry satellite communication, comprehensive first aid, and survival gear. Self-rescue capability required." },
      { title: "Weather Monitoring", description: "Arctic weather changes rapidly and can be life-threatening. Monitor conditions constantly." },
      { title: "Wildlife Encounters", description: "Large predators present. Carry bear spray and know proper protocols." },
      { title: "Photography Planning", description: "Bring durable equipment rated for extreme conditions. Northern Lights photography opportunities excellent." }
    ],
    reservationsPermits: ["No entrance fees", "Bush plane arrangements essential", "Backcountry permits recommended", "Emergency communication plan"],
    gearEquipment: ["Arctic expedition gear", "Satellite communicator", "Professional survival equipment", "Cold weather photography gear", "Emergency shelter"],
    safetyConsiderations: ["Expert wilderness skills required", "Emergency self-rescue capability", "Extreme weather preparation", "Predator safety protocols"]
  },

  "lake-clark": {
    name: "Lake Clark National Park & Preserve",
    slug: "lake-clark",
    state: "Alaska",
    region: "Alaska",
    visitType: "Off-Season",
    popularMonths: "June-August",
    offSeasonMonths: "September-May",
    heroImage: "/api/placeholder/1200/600",
    description: "Lake Clark National Park offers an unparalleled wilderness experience in Alaska's southwest region, featuring active volcanoes, pristine lakes, and diverse ecosystems. During the off-season, this remote park transforms into a true Arctic wilderness where only the most adventurous travelers dare to explore.",
    whyOffSeason: "Off-season at Lake Clark means accessing one of Alaska's most pristine and untrammeled wilderness areas when wildlife viewing opportunities are at their peak and the landscape showcases dramatic seasonal changes.",
    weatherDetails: {
      temperature: "Extreme cold: -20°F to 30°F (-29°C to -1°C)",
      conditions: "Arctic weather with potential for severe storms, heavy snow, and rapid weather changes",
      preparation: "Professional expedition gear required for survival"
    },
    tips: [
      { title: "Access Planning", description: "Bush plane access only. Weather-dependent flights require flexible scheduling and emergency contingencies." },
      { title: "Wildlife Viewing", description: "Exceptional opportunities for brown bears, caribou, and winter-adapted wildlife in their natural habitat." },
      { title: "Volcanic Activity", description: "Active volcanoes including Mount Redoubt. Monitor volcanic activity reports before visiting." },
      { title: "Lake Systems", description: "Frozen lake systems offer unique exploration opportunities but require ice safety expertise." },
      { title: "Photography Excellence", description: "Pristine wilderness offers unparalleled landscape and wildlife photography opportunities." }
    ],
    advantages: [
      { title: "Ultimate Wilderness", description: "Experience Alaska's wilderness in its purest form with minimal human impact." },
      { title: "Diverse Ecosystems", description: "From volcanic landscapes to pristine lakes and tundra environments." },
      { title: "Wildlife Abundance", description: "Large populations of brown bears, caribou, wolves, and other Alaska wildlife." },
      { title: "Volcanic Landscapes", description: "Active volcanic systems create unique geological features and thermal areas." },
      { title: "Pristine Waters", description: "Crystal-clear lakes and rivers offer exceptional fishing and scenic beauty." }
    ],
    limitations: [
      { title: "Extreme Remoteness", description: "No roads, no services, no cell coverage. Complete wilderness experience requires total self-sufficiency." },
      { title: "Weather Extremes", description: "Severe weather can strand visitors for extended periods. Weather-dependent access." },
      { title: "Advanced Skills Required", description: "Expert wilderness and survival skills essential for safe travel." },
      { title: "Expensive Access", description: "Bush plane charters and specialized equipment make this an expensive destination." },
      { title: "Emergency Response", description: "Limited emergency services and rescue capabilities in remote areas." }
    ],
    activities: [
      { title: "Wilderness Backpacking", description: "Multi-day expeditions through pristine Alaska wilderness with no established trails." },
      { title: "Wildlife Observation", description: "World-class opportunities to observe brown bears, caribou, wolves, and other Alaska wildlife." },
      { title: "Volcanic Exploration", description: "Explore active volcanic landscapes and thermal features in a wilderness setting." },
      { title: "Lake Recreation", description: "Fishing, kayaking, and lake exploration in some of Alaska's most pristine waters." },
      { title: "Photography Expeditions", description: "Capture Alaska's untouched wilderness and abundant wildlife in their natural habitat." }
    ],
    practicalTips: [
      { title: "Bush Plane Coordination", description: "Arrange flights well in advance. Weather delays are common and expensive." },
      { title: "Survival Preparation", description: "Carry satellite communication, comprehensive first aid, and survival gear." },
      { title: "Weather Monitoring", description: "Arctic weather changes rapidly. Monitor conditions constantly for safety." },
      { title: "Wildlife Safety", description: "Brown bear country requires proper food storage and bear safety protocols." },
      { title: "Volcanic Awareness", description: "Monitor volcanic activity reports and have evacuation plans if necessary." }
    ],
    reservationsPermits: ["No entrance fees", "Bush plane arrangements essential", "Backcountry permits recommended", "Emergency communication plan"],
    gearEquipment: ["Arctic expedition gear", "Satellite communicator", "Professional survival equipment", "Bear safety equipment", "Emergency shelter"],
    safetyConsiderations: ["Expert wilderness skills required", "Brown bear safety protocols", "Volcanic hazard awareness", "Emergency self-rescue capability"]
  },

  "kobuk-valley": {
    name: "Kobuk Valley National Park",
    slug: "kobuk-valley",
    state: "Alaska",
    region: "Alaska",
    visitType: "Off-Season",
    popularMonths: "June-August",
    offSeasonMonths: "September-May",
    heroImage: "/api/placeholder/1200/600",
    description: "Kobuk Valley National Park protects the Great Kobuk Sand Dunes and surrounding boreal forest and tundra. During the off-season, this remote Arctic park offers a unique desert-in-the-Arctic experience with exceptional opportunities for solitude and wildlife viewing.",
    whyOffSeason: "Off-season access to Kobuk Valley provides the rare opportunity to experience Arctic sand dunes in winter conditions, witness caribou migrations, and explore one of Alaska's most unique and least-visited national parks.",
    weatherDetails: {
      temperature: "Extreme Arctic cold: -30°F to 20°F (-34°C to -7°C)",
      conditions: "Severe Arctic weather with heavy snow, extreme winds, and potential whiteout conditions",
      preparation: "Professional Arctic expedition gear essential for survival"
    },
    tips: [
      { title: "Dune Exploration", description: "The Great Kobuk Sand Dunes offer a surreal desert-in-the-Arctic experience unique in the national park system." },
      { title: "Caribou Migration", description: "Witness one of nature's great migrations as hundreds of thousands of caribou cross the valley." },
      { title: "Arctic Cultural Heritage", description: "Rich Inupiaq cultural history with archaeological sites spanning thousands of years." },
      { title: "Bush Plane Access", description: "Remote location requires bush plane access with experienced Arctic pilots." },
      { title: "River Systems", description: "The Kobuk River provides access corridors and exceptional fishing opportunities." }
    ],
    advantages: [
      { title: "Unique Landscape", description: "Only active sand dune system in the Arctic, creating a truly unique environment." },
      { title: "Wildlife Migration", description: "Front-row seats to one of the world's largest caribou migrations." },
      { title: "Cultural Significance", description: "Rich Inupiaq heritage with ongoing cultural connections to the land." },
      { title: "Pristine Wilderness", description: "Virtually untouched ecosystem with minimal human impact." },
      { title: "Scientific Interest", description: "Unique geological and ecological systems offer exceptional educational value." }
    ],
    limitations: [
      { title: "Extreme Remoteness", description: "No roads, facilities, or services. Complete wilderness experience requires total self-reliance." },
      { title: "Harsh Climate", description: "Severe Arctic conditions with life-threatening weather potential." },
      { title: "Limited Access", description: "Weather-dependent bush plane access with potential for extended delays." },
      { title: "Expert Skills Required", description: "Advanced wilderness and Arctic survival skills essential." },
      { title: "High Costs", description: "Remote access and specialized equipment make this an expensive destination." }
    ],
    activities: [
      { title: "Sand Dune Exploration", description: "Explore the unique Great Kobuk Sand Dunes in an Arctic setting." },
      { title: "Caribou Migration Viewing", description: "Witness and photograph one of the world's great wildlife migrations." },
      { title: "Cultural Site Visits", description: "Explore archaeological sites with evidence of human habitation spanning millennia." },
      { title: "River Recreation", description: "Float the Kobuk River for access and exceptional wilderness fishing." },
      { title: "Arctic Photography", description: "Capture unique desert-in-the-Arctic landscapes and abundant wildlife." }
    ],
    practicalTips: [
      { title: "Migration Timing", description: "Plan visits around caribou migration periods for best wildlife viewing." },
      { title: "Cultural Respect", description: "Respect Inupiaq cultural sites and ongoing traditional land use." },
      { title: "Dune Safety", description: "Sand dunes can be disorienting. Maintain navigation awareness and emergency communication." },
      { title: "Weather Preparation", description: "Arctic storms can develop rapidly. Monitor weather constantly." },
      { title: "Emergency Planning", description: "Develop comprehensive emergency plans including evacuation scenarios." }
    ],
    reservationsPermits: ["No entrance fees", "Bush plane arrangements essential", "Respect for cultural sites required", "Emergency communication plan"],
    gearEquipment: ["Arctic expedition gear", "Satellite communicator", "Navigation equipment", "Professional survival gear", "Emergency shelter"],
    safetyConsiderations: ["Expert Arctic skills required", "Extreme weather preparation", "Cultural site protection", "Emergency self-rescue capability"]
  },

  "wind-cave": {
    name: "Wind Cave National Park",
    slug: "wind-cave",
    state: "South Dakota",
    region: "Great Plains",
    visitType: "Off-Season",
    popularMonths: "June-August",
    offSeasonMonths: "September, October, April, May",
    heroImage: "/api/placeholder/1200/600",
    description: "Wind Cave National Park protects one of the world's longest and most complex cave systems, along with 33,000 acres of mixed-grass prairie. During the off-season, experience exceptional cave tours, wildlife viewing, and prairie exploration without summer crowds.",
    whyOffSeason: "Off-season visits to Wind Cave offer comfortable cave touring temperatures year-round, excellent wildlife viewing during bison calving season, and peaceful prairie hiking with spring wildflowers or autumn colors.",
    peacefulDescription: "Explore one of the world's most intricate cave systems and vast prairie landscapes without the summer crowds that fill popular cave tours",
    savingsPercentage: '40',
    photoOpportunities: "Capture unique cave formations, bison herds on rolling prairies, and dramatic Great Plains sunsets without tourist interference",
    wildlifeDescription: "Spring brings bison calving season and prairie dog activity, while fall offers elk bugling and exceptional bird migration viewing",
    weatherDetails: {
      temperature: "Comfortable cave temperatures (53°F year-round), surface: 30°F to 70°F (-1°C to 21°C)",
      conditions: "Cave tours operate year-round with consistent conditions, surface weather varies seasonally",
      preparation: "Layer clothing for cave touring, bring sturdy shoes for cave and prairie hiking"
    },
    advantages: [
      "Cave tours available year-round with perfect 53°F temperatures",
      "Bison calving season viewing in spring",
      "Prairie wildflower blooms and autumn colors",
      "Significant savings on area accommodations (40% off peak rates)"
    ],
    limitations: [
      "Some surface trails may have snow or ice",
      "Limited daylight hours for surface activities in winter",
      "Prairie weather can change quickly"
    ],
    weatherData: [
      { month: 'April', high: '58', low: '35', precipitation: '2.2 inches', conditions: 'Mild, wildflowers beginning' },
      { month: 'May', high: '69', low: '45', precipitation: '3.1 inches', conditions: 'Pleasant, peak wildflower season' },
      { month: 'September', high: '75', low: '48', precipitation: '1.8 inches', conditions: 'Warm days, cool nights' },
      { month: 'October', high: '62', low: '36', precipitation: '1.4 inches', conditions: 'Crisp, autumn colors' }
    ],
    tips: [
      {
        title: "Book Cave Tours in Advance",
        description: "Popular cave tours fill up quickly even in off-season. Reserve online or arrive early for same-day availability."
      },
      {
        title: "Dress for Cave Temperatures",
        description: "Caves maintain 53°F year-round. Bring a light jacket even on hot summer days, and wear sturdy non-slip shoes."
      },
      {
        title: "Prairie Wildlife Timing",
        description: "Early morning and evening are best for wildlife viewing. Bison are most active during cooler parts of the day."
      },
      {
        title: "Photography Equipment",
        description: "Cave photography requires special permits. Focus on surface wildlife and landscape photography opportunities."
      },
      {
        title: "Weather Awareness",
        description: "Great Plains weather can change rapidly. Check conditions before heading out on longer surface trails."
      }
    ],
    reservationsPermits: [
      "Park entrance pass or America the Beautiful Annual Pass",
      "Cave tour reservations (recommended in advance)",
      "Backcountry camping permits for overnight stays",
      "Special photography permits for cave photography"
    ],
    gearEquipment: [
      "Sturdy non-slip shoes for cave touring",
      "Light jacket or sweater for cave temperatures",
      "Layered clothing for variable surface weather",
      "Binoculars for wildlife and bird watching",
      "Headlamp for early morning or evening activities"
    ],
    safetyConsiderations: [
      "Stay on designated cave tour routes at all times",
      "Maintain safe distance from bison (25 yards minimum)",
      "Be aware of prairie dog holes when hiking",
      "Monitor weather conditions on the exposed prairie"
    ]
  },

  "theodore-roosevelt": {
    name: "Theodore Roosevelt National Park",
    slug: "theodore-roosevelt",
    state: "North Dakota",
    region: "Great Plains",
    visitType: "Off-Season",
    popularMonths: "June-August",
    offSeasonMonths: "September, October, April, May",
    heroImage: "/api/placeholder/1200/600",
    description: "Theodore Roosevelt National Park preserves the rugged North Dakota badlands landscape that shaped a future president. During the off-season, experience dramatic badlands geology, exceptional wildlife viewing, and the solitude that inspired Roosevelt's conservation legacy.",
    whyOffSeason: "Off-season visits offer comfortable hiking temperatures, spectacular fall colors in the badlands, spring wildflower blooms, and the peaceful solitude that allowed Roosevelt to develop his conservation philosophy.",
    peacefulDescription: "Experience the same rugged badlands solitude that shaped Theodore Roosevelt's character and conservation vision, without summer crowds",
    savingsPercentage: '50',
    photoOpportunities: "Capture dramatic badlands formations, wild horse herds, prairie dog towns, and stunning Great Plains sunsets in pristine conditions",
    wildlifeDescription: "Fall brings elk bugling and bison herds, while spring offers prairie dog activity, wild horse foaling, and exceptional bird migration",
    weatherDetails: {
      temperature: "Variable: 20°F to 80°F (-7°C to 27°C) depending on season",
      conditions: "Continental climate with rapid weather changes, generally pleasant in shoulder seasons",
      preparation: "Layer clothing for temperature swings, wind protection essential on exposed badlands"
    },
    advantages: [
      "Spectacular badlands autumn colors and spring wildflowers",
      "Wild horse and bison herding behavior viewing",
      "Comfortable hiking temperatures in shoulder seasons",
      "Dramatic cost savings on regional accommodations (50% off peak rates)"
    ],
    limitations: [
      "Some trails may be icy or snow-covered",
      "Strong prairie winds can be challenging",
      "Limited services in nearby gateway communities"
    ],
    weatherData: [
      { month: 'April', high: '60', low: '33', precipitation: '1.5 inches', conditions: 'Mild, wildflowers emerging' },
      { month: 'May', high: '71', low: '44', precipitation: '2.4 inches', conditions: 'Pleasant, peak blooming season' },
      { month: 'September', high: '74', low: '45', precipitation: '1.3 inches', conditions: 'Warm days, crisp nights' },
      { month: 'October', high: '61', low: '33', precipitation: '0.9 inches', conditions: 'Cool, autumn badlands colors' }
    ],
    tips: [
      {
        title: "Wind Protection Strategy",
        description: "Badlands are extremely windy. Bring wind-resistant clothing and secure all loose items when hiking or photographing."
      },
      {
        title: "Wildlife Photography Ethics",
        description: "Maintain safe distances from wild horses and bison. Use telephoto lenses for close-up photography without disturbing animals."
      },
      {
        title: "Trail Selection by Season",
        description: "Choose shorter, more protected trails during windy conditions. Some backcountry areas may be inaccessible in winter."
      },
      {
        title: "Roosevelt History Integration",
        description: "Visit the Maltese Cross Cabin and Elkhorn Ranch site to understand Roosevelt's personal connection to this landscape."
      },
      {
        title: "Prairie Dog Town Etiquette",
        description: "Prairie dog towns are active ecosystems. Observe from designated areas and watch for burrow holes when walking."
      }
    ],
    reservationsPermits: [
      "Park entrance pass or America the Beautiful Annual Pass",
      "Backcountry camping permits for overnight backpacking",
      "Check road conditions for Elkhorn Ranch Unit access",
      "Junior Ranger program materials for family visits"
    ],
    gearEquipment: [
      "Wind-resistant outer shell and layers",
      "Sturdy hiking boots with ankle support",
      "Wide-brimmed hat and sunglasses",
      "Telephoto lens for wildlife photography",
      "Plenty of water (limited sources in badlands)"
    ],
    safetyConsiderations: [
      "Maintain 25-yard distance from bison and wild horses",
      "Be cautious of unstable badlands cliff edges",
      "Watch for prairie dog holes and rattlesnakes",
      "Monitor weather for sudden temperature changes"
    ]
  },

  "wrangell-st-elias": {
    name: "Wrangell-St. Elias National Park & Preserve",
    slug: "wrangell-st-elias",
    state: "Alaska",
    region: "Alaska",
    visitType: "Off-Season",
    popularMonths: "June-August",
    offSeasonMonths: "September-May",
    heroImage: "/api/placeholder/1200/600",
    description: "Wrangell-St. Elias National Park & Preserve is America's largest national park, encompassing 13.2 million acres of spectacular mountain wilderness. During the off-season, this vast park offers unparalleled opportunities for mountaineering, glacier exploration, and experiencing Alaska's most dramatic landscapes.",
    whyOffSeason: "Off-season access to Wrangell-St. Elias provides the ultimate Alaska wilderness experience with world-class mountaineering opportunities, glacier exploration, and access to some of North America's most spectacular and pristine mountain landscapes.",
    weatherDetails: {
      temperature: "Extreme mountain conditions: -40°F to 30°F (-40°C to -1°C)",
      conditions: "Severe mountain weather with avalanche danger, extreme winds, and rapid weather changes",
      preparation: "Professional mountaineering and glacier travel gear essential"
    },
    tips: [
      { title: "Mountaineering Paradise", description: "Home to 9 of the 16 highest peaks in the US, including Mount St. Elias at 18,008 feet." },
      { title: "Glacier Systems", description: "Massive glacier systems including the Malaspina Glacier, larger than Rhode Island." },
      { title: "Historic Mining Sites", description: "Explore remnants of Alaska's copper mining boom including the historic Kennecott Mill." },
      { title: "Access Routes", description: "McCarthy Road provides limited winter access, but most areas require bush plane access." },
      { title: "International Scope", description: "Part of a massive international preserve system extending into Canada." }
    ],
    advantages: [
      { title: "Largest National Park", description: "13.2 million acres of wilderness - larger than Yellowstone, Yosemite, and Switzerland combined." },
      { title: "Mountaineering Mecca", description: "World-class mountaineering with peaks ranging from accessible to extremely technical." },
      { title: "Glacier Exploration", description: "Vast glacier systems offer unique glacier travel and ice climbing opportunities." },
      { title: "Historic Significance", description: "Rich mining history with preserved buildings and equipment from the early 1900s." },
      { title: "Biodiversity", description: "Incredible range of ecosystems from coastal rainforest to high alpine tundra." }
    ],
    limitations: [
      { title: "Massive Scale", description: "The park's immense size requires careful planning and often multiple trips to explore." },
      { title: "Extreme Conditions", description: "High altitude, severe weather, and glacier travel create significant technical challenges." },
      { title: "Limited Infrastructure", description: "Minimal facilities and services within the park boundaries." },
      { title: "Technical Skills Required", description: "Mountaineering, glacier travel, and advanced wilderness skills essential." },
      { title: "Weather Dependence", description: "Mountain weather can change rapidly, affecting safety and access." }
    ],
    activities: [
      { title: "High Altitude Mountaineering", description: "Climb some of North America's highest and most challenging peaks." },
      { title: "Glacier Travel", description: "Explore massive glacier systems with proper technical equipment and training." },
      { title: "Historic Site Exploration", description: "Visit the Kennecott Mill and other remnants of Alaska's mining heritage." },
      { title: "Wilderness Backpacking", description: "Multi-day expeditions through diverse ecosystems and terrain." },
      { title: "Alpine Photography", description: "Capture spectacular mountain and glacier landscapes in pristine wilderness." }
    ],
    practicalTips: [
      { title: "Route Planning", description: "Extensive planning required due to park's massive size and varied terrain." },
      { title: "Technical Preparation", description: "Mountaineering and glacier travel training essential before visiting." },
      { title: "Weather Monitoring", description: "Mountain weather systems can be life-threatening. Constant monitoring required." },
      { title: "Emergency Preparedness", description: "Comprehensive emergency plans and self-rescue capabilities essential." },
      { title: "Equipment Expertise", description: "Technical mountaineering gear and expertise with its use required." }
    ],
    reservationsPermits: ["No entrance fees", "Backcountry permits recommended", "Mountaineering registration advised", "Emergency communication plan"],
    gearEquipment: ["Professional mountaineering gear", "Glacier travel equipment", "Satellite communicator", "High-altitude survival gear", "Technical rescue equipment"],
    safetyConsiderations: ["Expert mountaineering skills required", "Glacier travel safety", "High altitude preparation", "Avalanche awareness", "Emergency self-rescue capability"]
  },

  'black-canyon': {
    // Basic Info
    name: 'Black Canyon of the Gunnison National Park',
    slug: 'black-canyon',
    state: 'Colorado',
    offSeasonMonths: 'September, October, April, May',
    
    // Highlights
    peacefulDescription: "Experience the dramatic dark walls and spectacular canyon views without the summer crowds, enjoying intimate encounters with Colorado's steepest canyon",
    savingsPercentage: '55',
    photoOpportunities: "Capture perfect lighting on the canyon's dark Precambrian rock formations, with fall colors and spring wildflowers adding contrast",
    wildlifeDescription: "Excellent wildlife viewing including elk, deer, and various bird species with cooler temperatures bringing animals out during the day",
    
    // Trade-offs
    advantages: [
      "Significant lodging savings (55% off peak rates)",
      "Perfect photography lighting conditions", 
      "Comfortable hiking temperatures",
      "Uncrowded overlooks and trails"
    ],
    limitations: [
      "North Rim Road may close with snow",
      "Cooler temperatures require layered clothing",
      "Shorter daylight hours in fall"
    ],
    
    // Weather Data
    fallWeather: {
      highTemp: "45-65°F",
      lowTemp: "20-35°F", 
      conditions: "Clear skies, perfect for photography and hiking"
    },
    springWeather: {
      highTemp: "50-70°F",
      lowTemp: "25-40°F",
      conditions: "Mild temperatures, occasional afternoon storms"
    },
    
    // Activities
    activities: [
      {
        name: "South Rim Drive & Overlooks",
        description: "7-mile scenic drive with 12 dramatic overlooks including Painted Wall",
        difficulty: "Easy",
        duration: "Half day",
        highlight: "Colorado's tallest cliff at 2,250 feet"
      },
      {
        name: "Rim Rock Nature Trail", 
        description: "Easy 1-mile paved loop with interpretive geology exhibits",
        difficulty: "Easy",
        duration: "1-2 hours",
        highlight: "Perfect introduction to park geology"
      },
      {
        name: "Cedar Point Nature Trail",
        description: "Short trail to spectacular overlook with geological exhibits", 
        difficulty: "Easy",
        duration: "1 hour",
        highlight: "One of the most dramatic viewpoints in the park"
      },
      {
        name: "North Rim Exploration",
        description: "5-mile gravel road with different canyon perspectives",
        difficulty: "Moderate",
        duration: "Half day", 
        highlight: "Fewer crowds and unique viewpoints"
      }
    ],
    
    // 3-Day Sample Itinerary
    sampleItinerary: [
      {
        day: 1,
        title: "South Rim Discovery", 
        activities: ["Visitor center orientation", "Tomichi Point & Pulpit Rock", "Chasm View & Painted Wall", "Sunset at Warner Point"]
      },
      {
        day: 2,
        title: "Trails & North Rim",
        activities: ["Rim Rock Nature Trail", "North Rim Road exploration", "Exclamation Point hike", "Wildlife viewing & photography"]
      },
      {
        day: 3,
        title: "Geological Wonders", 
        activities: ["Cedar Point Nature Trail", "High Point & final overlooks", "Reflection & departure", "Optional: Curecanti Recreation Area"]
      }
    ],
    
    // Planning Info
    bestAccommodations: [
      "Hampton Inn Montrose (25 minutes from park)",
      "Red Arrow Inn Montrose (budget-friendly)", 
      "South Rim Campground (in-park camping)"
    ],
    nearbyAttractions: [
      "Curecanti National Recreation Area",
      "Montrose historic downtown",
      "Crawford State Park"
    ],
    packingEssentials: ["Layered clothing", "Sturdy hiking shoes", "Camera with extra batteries", "Plenty of water", "Snacks for energy"],
    safetyConsiderations: ["Stay back from cliff edges - no barriers", "Supervise children closely", "Check weather conditions", "Wear appropriate footwear", "Carry emergency supplies"]
  },

  'grand-teton': {
    // Basic Info
    name: 'Grand Teton National Park',
    slug: 'grand-teton',
    state: 'Wyoming',
    offSeasonMonths: 'September, October, April, May',
    
    // Highlights
    peacefulDescription: "Experience America's most dramatic mountain range without summer crowds, enjoying pristine alpine lakes and incredible wildlife viewing",
    savingsPercentage: '65',
    photoOpportunities: "Capture perfect mountain reflections, fall aspens, spring wildflowers, and wildlife in golden light without crowded viewpoints",
    wildlifeDescription: "Exceptional wildlife viewing including elk bugling, moose sightings, and 300+ bird species with cooler temperatures bringing animals out during the day",
    
    // Trade-offs
    advantages: [
      "Massive lodging savings (65% off peak rates)",
      "Pristine wildlife viewing opportunities", 
      "Perfect mountain photography conditions",
      "Uncrowded trails and lake access"
    ],
    limitations: [
      "Some high elevation areas may be snow-covered",
      "Shorter daylight hours in fall",
      "Weather can change rapidly in mountains"
    ],
    
    // Weather Data
    fallWeather: {
      highTemp: "40-65°F",
      lowTemp: "15-35°F", 
      conditions: "Clear skies, perfect for stargazing and mountain photography"
    },
    springWeather: {
      highTemp: "45-70°F",
      lowTemp: "20-40°F",
      conditions: "Variable conditions, pack for all weather scenarios"
    },
    
    // Activities
    activities: [
      {
        name: "Jenny Lake & Cascade Canyon",
        description: "Scenic boat shuttle and hike into dramatic canyon surrounded by 13,000-foot peaks",
        difficulty: "Moderate",
        duration: "Full day",
        highlight: "Hidden Falls and Inspiration Point with towering Teton backdrop"
      },
      {
        name: "Mormon Row Historic District", 
        description: "Photograph iconic Moulton Barn with Teton Range backdrop",
        difficulty: "Easy",
        duration: "2-3 hours",
        highlight: "Best sunrise photography location in the park"
      },
      {
        name: "Jackson Lake Scenic Drive",
        description: "Drive shoreline with continuous Teton views and wildlife opportunities", 
        difficulty: "Easy",
        duration: "Half day",
        highlight: "Oxbow Bend for moose viewing and Signal Mountain summit"
      },
      {
        name: "Taggart Lake Trail",
        description: "Moderate hike to pristine alpine lake beneath Grand Teton massif",
        difficulty: "Moderate",
        duration: "4-5 hours", 
        highlight: "Direct views of Grand Teton peak reflected in alpine lake"
      }
    ],
    
    // 4-Day Sample Itinerary
    sampleItinerary: [
      {
        day: 1,
        title: "Jackson Lake Exploration", 
        activities: ["Colter Bay Visitor Center", "Jackson Lake Dam scenic drive", "Signal Mountain summit", "Stargazing at Jackson Lake Lodge"]
      },
      {
        day: 2,
        title: "Jenny Lake & Cascade Canyon",
        activities: ["Jenny Lake boat shuttle", "Cascade Canyon hike & Hidden Falls", "Inspiration Point climb", "Lakeside photography"]
      },
      {
        day: 3,
        title: "Mormon Row & Wildlife", 
        activities: ["Sunrise at Moulton Barn", "Antelope Flats wildlife drive", "Taggart Lake trail hike", "Oxbow Bend moose viewing"]
      },
      {
        day: 4,
        title: "Teton Village & Reflection", 
        activities: ["Aerial tram or village explore", "Menor's Ferry historic area", "Final mountain photography", "Jackson town visit"]
      }
    ],
    
    // Planning Info
    bestAccommodations: [
      "Jackson Lake Lodge (premium in-park)",
      "Colter Bay Village (mid-range in-park)", 
      "Gros Ventre Campground (camping)"
    ],
    nearbyAttractions: [
      "Jackson town historic square",
      "National Elk Refuge",
      "Teton Village ski area"
    ],
    packingEssentials: ["Bear spray", "Layered clothing", "Waterproof boots", "Binoculars", "Camera with extra batteries", "Headlamp"],
    safetyConsiderations: ["Carry bear spray at all times", "Stay on designated trails", "Check weather before hiking", "Inform others of hiking plans", "Carry emergency supplies"]
  },

  'great-basin': {
    // Basic Info
    name: 'Great Basin National Park',
    slug: 'great-basin',
    state: 'Nevada',
    offSeasonMonths: 'September, October, April, May',
    
    // Highlights
    peacefulDescription: "Experience Nevada's hidden gem with ancient bristlecone pines and pristine caves in true wilderness solitude",
    savingsPercentage: '40',
    photoOpportunities: "Capture Milky Way under Gold-level dark skies, ancient trees, and dramatic high desert landscapes without any crowds",
    wildlifeDescription: "Excellent wildlife viewing including mule deer, mountain goats, and over 200 bird species in diverse elevation zones from desert to alpine",
    
    // Trade-offs
    advantages: [
      "True wilderness solitude (90% fewer visitors)",
      "World-class stargazing opportunities", 
      "Comfortable cave touring temperatures",
      "Access to 4,000-year-old bristlecone pines"
    ],
    limitations: [
      "Limited park services and nearby amenities",
      "High elevation areas may be snow-covered",
      "Rough roads to some attractions"
    ],
    
    // Weather Data
    fallWeather: {
      highTemp: "50-70°F",
      lowTemp: "25-45°F", 
      conditions: "Clear skies perfect for stargazing and mountain photography"
    },
    springWeather: {
      highTemp: "45-65°F",
      lowTemp: "20-40°F",
      conditions: "Variable conditions, occasional snow at high elevations"
    },
    
    // Activities
    activities: [
      {
        name: "Lehman Caves Tours",
        description: "Explore beautiful limestone caves with rare shield formations",
        difficulty: "Easy",
        duration: "1.5 hours",
        highlight: "Constant 50°F temperature and stunning geological formations"
      },
      {
        name: "Bristlecone Pine Trail", 
        description: "Hike to ancient trees over 4,000 years old at 10,000+ feet",
        difficulty: "Moderate",
        duration: "3-4 hours",
        highlight: "Walk among some of the oldest living things on Earth"
      },
      {
        name: "Wheeler Peak Scenic Drive",
        description: "Drive to over 10,000 feet with spectacular desert and mountain views", 
        difficulty: "Easy",
        duration: "Half day",
        highlight: "Access to high country and trailheads for advanced hiking"
      },
      {
        name: "Astronomy Programs",
        description: "Ranger-led stargazing under International Dark Sky designation",
        difficulty: "Easy",
        duration: "2-3 hours", 
        highlight: "Gold-level dark skies for incredible Milky Way viewing"
      }
    ],
    
    // 3-Day Sample Itinerary
    sampleItinerary: [
      {
        day: 1,
        title: "Caves & Orientation", 
        activities: ["Great Basin Visitor Center", "Lehman Caves guided tour", "Mountain View Nature Trail", "Stargazing introduction"]
      },
      {
        day: 2,
        title: "Ancient Trees & High Country",
        activities: ["Wheeler Peak Scenic Drive", "Bristlecone Pine Trail hike", "Alpine Lakes Trail (optional)", "High elevation photography"]
      },
      {
        day: 3,
        title: "Cultural Sites & Dark Skies", 
        activities: ["Baker Archaeological Site", "Lexington Arch Trail", "Ranger astronomy program", "Milky Way photography"]
      }
    ],
    
    // Planning Info
    bestAccommodations: [
      "Border Inn (Baker, NV - historic motel)",
      "Lower Lehman Creek Campground (in-park)", 
      "Upper Lehman Creek Campground (higher elevation)"
    ],
    nearbyAttractions: [
      "Baker town and historic sites",
      "Kerouac's ghost town",
      "Ward Charcoal Ovens State Historic Park"
    ],
    packingEssentials: ["Warm clothing for elevation", "Sturdy hiking boots", "Headlamp with red filter", "Plenty of water", "Food supplies", "Camera for astrophotography"],
    safetyConsiderations: ["Prepare for high elevation effects", "Stock supplies in Baker", "Check road conditions to high country", "Inform others of hiking plans", "Carry emergency gear for remote areas"]
  }
};

// Helper functions
export const getParkTemplateData = (slug) => {
  return parkTemplateData[slug] || null;
};

export const getAllParkTemplateData = () => {
  return Object.values(parkTemplateData);
};

export const formatOffSeasonMonths = (monthsString) => {
  return monthsString.split(', ').map(month => 
    month.charAt(0).toUpperCase() + month.slice(1)
  ).join(', ');
};