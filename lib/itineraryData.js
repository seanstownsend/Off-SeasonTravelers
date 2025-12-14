// Itinerary data for national parks
export const itineraryData = {
  'yellowstone': {
    title: '4-5 Day Yellowstone National Park Itinerary',
    subtitle: 'Complete off-season guide for September, October, April, May',
    description: 'Experience the best of Yellowstone National Park during the ideal off-season months. This itinerary covers all major highlights while avoiding summer crowds and taking advantage of lower prices.',
    totalDays: 5,
    bestMonths: ['September', 'October', 'April', 'May'],
    days: [
      {
        dayNumber: 1,
        title: 'Lower Loop Introduction',
        subtitle: 'Old Faithful, Grand Prismatic, and Yellowstone Lake',
        activities: [
          {
            time: '9:00 AM - 10:30 AM',
            title: 'Old Faithful Geyser',
            description: 'Start your Yellowstone adventure at the park\'s most famous geyser. Erupts approximately every 90 minutes. Visit the visitor center for prediction times.',
            offSeasonAdvantage: 'Virtually no crowds at viewing areas!',
            image: '[Photo: Old Faithful eruption with fall colors]'
          },
          {
            time: '11:00 AM - 12:30 PM',
            title: 'Grand Prismatic Spring',
            description: 'America\'s largest hot spring with stunning rainbow colors. Take the boardwalk around the spring and hike to the overlook for aerial views.',
            proTip: 'Steam is more visible in cool off-season air!',
            image: '[Photo: Grand Prismatic Spring aerial view]'
          },
          {
            time: '2:00 PM - 4:00 PM',
            title: 'Yellowstone Lake',
            description: 'Visit the largest high-elevation lake in North America. Drive along the shoreline and stop at West Thumb Geyser Basin.',
            wildlifeWatch: 'Look for trumpeter swans and osprey.',
            image: '[Photo: Yellowstone Lake with mountains]'
          }
        ],
        accommodations: {
          title: 'Day 1 Accommodations',
          description: 'Book your first night near Old Faithful or Grant Village:',
          options: [
            { name: 'Old Faithful Inn', type: 'Premium', bookingLink: '#' },
            { name: 'Snow Lodge', type: 'Mid-range', bookingLink: '#' },
            { name: 'Grant Village', type: 'Budget-friendly', bookingLink: '#' }
          ]
        },
        tips: [
          'Arrive early (by 8 AM) to get parking at popular spots',
          'Download the NPS Yellowstone app for geyser predictions',
          'Bring layers - temperatures can vary 40°F throughout the day',
          'Pack lunch or book early at Old Faithful Inn dining room'
        ]
      },
      {
        dayNumber: 2,
        title: 'Grand Canyon of Yellowstone',
        subtitle: 'Artist Point, Lower Falls, and Uncle Tom\'s Trail',
        activities: [
          {
            time: '8:00 AM - 10:00 AM',
            title: 'Artist Point',
            description: 'The most famous viewpoint in Yellowstone. Marvel at the Lower Falls of the Yellowstone River plunging 308 feet into the colorful canyon.',
            photographyTip: 'Best light is morning for falls photography.',
            image: '[Photo: Lower Falls from Artist Point in fall]'
          },
          {
            time: '10:30 AM - 12:00 PM',
            title: 'Uncle Tom\'s Trail',
            description: 'Steep trail with 328 metal steps leading to a platform with spectacular views of Lower Falls. Moderate difficulty.',
            difficulty: 'Moderate - stairs can be icy in off-season.',
            image: '[Photo: Uncle Tom\'s Trail viewpoint]'
          },
          {
            time: '2:00 PM - 4:00 PM',
            title: 'Hayden Valley Wildlife',
            description: 'Prime wildlife viewing area. Look for bison herds, elk, and possibly wolves or bears in the distance.',
            wildlifeWatch: 'Bring binoculars and telephoto lens.',
            image: '[Photo: Bison in Hayden Valley]'
          }
        ],
        tips: [
          'Artist Point parking fills early - arrive by 8 AM',
          'Uncle Tom\'s Trail can be icy - wear proper footwear',
          'Hayden Valley is best for wildlife in early morning and evening',
          'Stay 25 yards from bison and elk, 100 yards from bears'
        ]
      }
    ]
  },
  
  'wind-cave': {
    title: '2-3 Day Wind Cave National Park Itinerary',
    subtitle: 'Complete off-season guide for September, October, April, May',
    description: 'Explore one of the world\'s longest cave systems and pristine mixed-grass prairie during the ideal off-season months. This itinerary combines underground cave tours with surface wildlife viewing and prairie hiking.',
    totalDays: 3,
    bestMonths: ['September', 'October', 'April', 'May'],
    days: [
      {
        dayNumber: 1,
        title: 'Cave Introduction & Prairie Overview',
        subtitle: 'Garden of Eden Cave Tour and Visitor Center',
        activities: [
          {
            time: '9:00 AM - 10:00 AM',
            title: 'Visitor Center Orientation',
            description: 'Start at the visitor center to learn about cave formation, prairie ecology, and book cave tours. Watch the orientation film about Theodore Roosevelt\'s visits.',
            offSeasonAdvantage: 'Shorter lines for tour reservations and personal attention from rangers!',
            image: '[Photo: Wind Cave Visitor Center with prairie backdrop]'
          },
          {
            time: '10:30 AM - 12:00 PM',
            title: 'Garden of Eden Cave Tour',
            description: 'Take the introductory 1-hour cave tour featuring boxwork formations and easy walking. Perfect introduction to Wind Cave\'s unique geology.',
            proTip: 'Cave maintains perfect 53°F temperature year-round - bring a light jacket!',
            image: '[Photo: Garden of Eden cave formations]'
          },
          {
            time: '1:00 PM - 3:00 PM',
            title: 'Prairie Vista Trail',
            description: 'Easy 1-mile hike through mixed-grass prairie with excellent bison viewing opportunities and panoramic views of the Black Hills.',
            wildlifeWatch: 'Look for bison herds, prairie dogs, and various grassland bird species.',
            image: '[Photo: Bison grazing on rolling prairie hills]'
          }
        ],
        accommodations: {
          title: 'Day 1 Accommodations',
          description: 'Stay in nearby Custer or Hot Springs:',
          options: [
            { name: 'Custer State Park Lodge', type: 'Premium', bookingLink: '#' },
            { name: 'Hot Springs Historic Hotels', type: 'Mid-range', bookingLink: '#' },
            { name: 'Wind Cave Campground', type: 'Camping', bookingLink: '#' }
          ]
        },
        tips: [
          'Wear sturdy, non-slip shoes for cave tours',
          'Bring layers - surface weather varies but caves stay cool',
          'Book popular cave tours in advance, even off-season',
          'Elk Meadow Campground fills quickly during bison calving season'
        ]
      },
      {
        dayNumber: 2,
        title: 'Advanced Cave Exploration',
        subtitle: 'Natural Entrance Tour and Prairie Dog Towns',
        activities: [
          {
            time: '8:30 AM - 10:30 AM',
            title: 'Natural Entrance Cave Tour',
            description: 'More challenging 1.5-hour tour entering through the natural cave opening. Features diverse formations and moderate difficulty level.',
            difficulty: 'Moderate - includes stairs and uneven surfaces',
            image: '[Photo: Natural entrance to Wind Cave]'
          },
          {
            time: '11:30 AM - 1:00 PM',
            title: 'Prairie Dog Town Visit',
            description: 'Explore active prairie dog colonies and learn about their ecosystem importance. Excellent photography opportunities.',
            wildlifeWatch: 'Prairie dogs are most active in morning - perfect timing!',
            image: '[Photo: Active prairie dog colony with lookout sentries]'
          },
          {
            time: '2:00 PM - 4:00 PM',
            title: 'Highland Creek Trail',
            description: 'Moderate 3-mile hike through diverse prairie and woodland edge habitats with excellent wildlife viewing.',
            seasonalNote: 'Spring offers wildflower blooms, fall brings elk bugling sounds!',
            image: '[Photo: Highland Creek meandering through prairie]'
          }
        ],
        tips: [
          'Natural Entrance tour requires good mobility and balance',
          'Prairie dog towns can be muddy after rain - waterproof boots helpful',
          'Bring binoculars for distant wildlife viewing',
          'Check with rangers about elk activity locations'
        ]
      },
      {
        dayNumber: 3,
        title: 'Extended Prairie Experience',
        subtitle: 'Backcountry hiking and Black Hills connection',
        activities: [
          {
            time: '8:00 AM - 11:00 AM',
            title: 'Centennial Trail Section',
            description: 'Hike a portion of the 111-mile Centennial Trail that passes through the park, connecting Wind Cave to the greater Black Hills ecosystem.',
            culturalNote: 'Learn about Lakota cultural connections to the Black Hills region.',
            image: '[Photo: Centennial Trail winding through mixed prairie and forest]'
          },
          {
            time: '12:00 PM - 2:00 PM',
            title: 'Rankin Ridge Nature Trail',
            description: 'Short but steep 1-mile trail to the highest point in the park with panoramic views of the Black Hills and prairie.',
            photographyTip: 'Best views of the entire park ecosystem from the fire tower.',
            image: '[Photo: Panoramic view from Rankin Ridge fire tower]'
          },
          {
            time: '3:00 PM - 5:00 PM',
            title: 'Cold Brook Canyon Trail',
            description: 'Peaceful 1.5-mile trail through a unique canyon environment within the prairie landscape. Excellent for reflection and wildlife.',
            relaxation: 'Perfect quiet trail for contemplating the prairie ecosystem.',
            image: '[Photo: Cold Brook Canyon with limestone walls]'
          }
        ],
        tips: [
          'Rankin Ridge can be windy - bring windproof layers',
          'Cold Brook Canyon offers shelter from prairie winds',
          'Carry plenty of water - limited sources on prairie trails',
          'Leave no trace principles especially important in prairie ecosystem'
        ]
      }
    ]
  },

  'theodore-roosevelt': {
    title: '3-4 Day Theodore Roosevelt National Park Itinerary',
    subtitle: 'Complete off-season guide for September, October, April, May',
    description: 'Experience the rugged North Dakota badlands that shaped a future president during the ideal off-season months. This itinerary combines badlands geology, wildlife viewing, and Roosevelt\'s historic sites.',
    totalDays: 4,
    bestMonths: ['September', 'October', 'April', 'May'],
    days: [
      {
        dayNumber: 1,
        title: 'South Unit Introduction',
        subtitle: 'Visitor center, Maltese Cross Cabin, and badlands overview',
        activities: [
          {
            time: '9:00 AM - 10:30 AM',
            title: 'Visitor Center & Maltese Cross Cabin',
            description: 'Start with park orientation and visit Roosevelt\'s reconstructed ranch cabin. Learn about his ranching years and conservation awakening.',
            culturalNote: 'Understand how badlands experiences shaped Roosevelt\'s conservation philosophy.',
            image: '[Photo: Maltese Cross Cabin with badlands backdrop]'
          },
          {
            time: '11:00 AM - 12:30 PM',
            title: 'Medora Musical Town Tour',
            description: 'Explore historic Medora, the town founded by the Marquis de Morès, Roosevelt\'s contemporary and sometime rival.',
            offSeasonAdvantage: 'Quieter streets allow for better photography and peaceful exploration!',
            image: '[Photo: Historic Medora main street with badlands behind]'
          },
          {
            time: '2:00 PM - 4:00 PM',
            title: 'Scenic Loop Drive Beginning',
            description: 'Start the 36-mile scenic drive with stops at Skyline Vista and Scoria Point for badlands geology introduction.',
            geologicalNote: 'Learn to identify the colorful rock layers that tell badlands\' ancient story.',
            image: '[Photo: Colorful badlands layers from Scoria Point]'
          }
        ],
        accommodations: {
          title: 'Day 1 Accommodations',
          description: 'Stay in Medora or nearby Dickinson:',
          options: [
            { name: 'Historic Rough Riders Hotel', type: 'Premium', bookingLink: '#' },
            { name: 'Medora Campground', type: 'Camping', bookingLink: '#' },
            { name: 'Dickinson Hotels', type: 'Budget-friendly', bookingLink: '#' }
          ]
        },
        tips: [
          'Medora has limited services off-season - plan accordingly',
          'Badlands can be extremely windy - secure all loose items',
          'Layer clothing for significant temperature swings',
          'Download offline maps - cell service can be spotty'
        ]
      },
      {
        dayNumber: 2,
        title: 'South Unit Deep Dive',
        subtitle: 'Wildlife viewing and badlands hiking',
        activities: [
          {
            time: '7:00 AM - 9:00 AM',
            title: 'Early Wildlife Drive',
            description: 'Complete scenic loop drive during prime wildlife viewing hours. Look for bison herds, wild horses, and prairie dog towns.',
            wildlifeWatch: 'Early morning offers best chances for elk, deer, and predator sightings.',
            image: '[Photo: Wild horses silhouetted against badlands sunrise]'
          },
          {
            time: '10:00 AM - 12:00 PM',
            title: 'Wind Canyon Trail',
            description: 'Short but spectacular 0.4-mile trail to a dramatic overlook of the Little Missouri River and badlands.',
            photographyTip: 'Perfect spot for panoramic badlands photography.',
            image: '[Photo: Little Missouri River bend from Wind Canyon]'
          },
          {
            time: '1:00 PM - 3:30 PM',
            title: 'Petrified Forest Loop',
            description: 'Moderate 10-mile loop trail featuring petrified wood stumps and excellent badlands views. Can be shortened to 1.5 miles.',
            difficulty: 'Moderate to strenuous depending on route chosen.',
            image: '[Photo: Ancient petrified tree stump in badlands setting]'
          }
        ],
        tips: [
          'Wind Canyon can be very windy - hold onto hats and cameras',
          'Petrified Forest trail has multiple length options',
          'Watch for rattlesnakes in warmer off-season months',
          'Bring extra water - badlands are dehydrating'
        ]
      },
      {
        dayNumber: 3,
        title: 'North Unit Expedition',
        subtitle: 'Remote badlands and Oxbow Overlook',
        activities: [
          {
            time: '8:00 AM - 10:00 AM',
            title: 'Drive to North Unit',
            description: 'Scenic 70-mile drive north to the more remote and rugged North Unit. Stop in Watford City for supplies.',
            flexibility: 'Long drive day - adjust timing based on your pace.',
            image: '[Photo: North Dakota prairie landscape during drive]'
          },
          {
            time: '10:30 AM - 12:00 PM',
            title: 'North Unit Visitor Center',
            description: 'Orientation to the North Unit\'s different geology and wildlife. Plan afternoon activities based on conditions.',
            specialNote: 'North Unit is more remote - limited services available.',
            image: '[Photo: North Unit visitor center with badlands view]'
          },
          {
            time: '1:00 PM - 4:00 PM',
            title: 'Caprock Coulee Trail',
            description: 'Moderate 4.1-mile trail through spectacular badlands formations with excellent chances for wildlife viewing.',
            wildlifeWatch: 'North Unit has larger bison herds and better elk viewing opportunities.',
            image: '[Photo: Massive bison herd in North Unit badlands]'
          }
        ],
        tips: [
          'Fill up gas tank before leaving Medora - limited services',
          'North Unit weather can be more extreme',
          'Caprock Coulee trail can be muddy after rain',
          'Camping available at Juniper Campground'
        ]
      },
      {
        dayNumber: 4,
        title: 'Elkhorn Ranch & Departure',
        subtitle: 'Roosevelt\'s remote ranch site and reflection',
        activities: [
          {
            time: '9:00 AM - 11:00 AM',
            title: 'Oxbow Overlook Trail',
            description: 'Moderate 2.8-mile hike to dramatic river bend overlook. One of the most photographed views in the North Unit.',
            photographyTip: 'Best lighting for Oxbow photos is mid-morning.',
            image: '[Photo: Little Missouri River oxbow from overlook]'
          },
          {
            time: '12:00 PM - 2:00 PM',
            title: 'Elkhorn Ranch Unit',
            description: 'Visit the site of Roosevelt\'s remote Elkhorn Ranch. Interpretive trail and foundation stones mark the isolated ranch location.',
            culturalNote: 'This remote site was Roosevelt\'s favorite - understand why solitude mattered to him.',
            image: '[Photo: Foundation stones of Elkhorn Ranch with river beyond]'
          },
          {
            time: '3:00 PM - 4:00 PM',
            title: 'Reflection and Departure',
            description: 'Time for quiet reflection on Roosevelt\'s conservation legacy before departing the badlands.',
            relaxation: 'Experience the same solitude that inspired Roosevelt\'s environmental awakening.',
            image: '[Photo: Peaceful badlands sunset vista]'
          }
        ],
        tips: [
          'Elkhorn Ranch requires 7-mile dirt road drive - check conditions',
          'Bring lunch for remote Elkhorn Ranch visit',
          'Allow extra time for potential road conditions',
          'Consider Roosevelt\'s quotes about badlands experiences'
        ]
      }
    ]
  },

  'rocky-mountain': {
    title: '4-5 Day Rocky Mountain National Park Itinerary',
    subtitle: 'Complete off-season guide for April, May, September, October',
    description: 'Experience Colorado\'s premier high-altitude wilderness during the ideal off-season months. This itinerary covers alpine lakes, dramatic peaks, and golden aspen groves while avoiding summer crowds.',
    totalDays: 5,
    bestMonths: ['April', 'May', 'September', 'October'],
    days: [
      {
        dayNumber: 1,
        title: 'Lower Elevation Introduction',
        subtitle: 'Estes Park and Sprague Lake area',
        activities: [
          {
            time: '9:00 AM - 10:00 AM',
            title: 'Beaver Meadows Visitor Center',
            description: 'Start with park orientation, check road conditions, and obtain wilderness permits if needed. Learn about altitude considerations.',
            offSeasonAdvantage: 'Shorter lines and personal attention from rangers!',
            image: '[Photo: Beaver Meadows Visitor Center with mountain backdrop]'
          },
          {
            time: '10:30 AM - 12:30 PM',
            title: 'Sprague Lake Trail',
            description: 'Easy 0.9-mile walk around a picturesque subalpine lake with stunning reflections of the Continental Divide peaks.',
            photographyTip: 'Morning light provides perfect reflections of Hallett Peak!',
            image: '[Photo: Sprague Lake reflecting mountain peaks]'
          },
          {
            time: '1:30 PM - 4:00 PM',
            title: 'Bear Lake Road Drive',
            description: 'Scenic drive with stops at Lily Lake and Bear Lake. Acclimatize to altitude while enjoying spectacular mountain views.',
            altitudeNote: 'Take it easy on Day 1 - Bear Lake is at 9,475 feet elevation.',
            image: '[Photo: Bear Lake surrounded by peaks and aspen]'
          }
        ],
        accommodations: {
          title: 'Day 1 Accommodations',
          description: 'Stay in Estes Park gateway community:',
          options: [
            { name: 'Historic Stanley Hotel', type: 'Premium', bookingLink: '#' },
            { name: 'Estes Park Mountain Lodge', type: 'Mid-range', bookingLink: '#' },
            { name: 'Moraine Park Campground', type: 'Camping', bookingLink: '#' }
          ]
        },
        tips: [
          'Arrive early for parking at popular trailheads',
          'Drink plenty of water to help with altitude adjustment',
          'Layer clothing - mountain weather changes quickly',
          'Check road closures - some high elevation roads close seasonally'
        ]
      },
      {
        dayNumber: 2,
        title: 'Alpine Lake Adventures',
        subtitle: 'Emerald Lake and Dream Lake hikes',
        activities: [
          {
            time: '7:00 AM - 11:00 AM',
            title: 'Emerald Lake Trail',
            description: 'Moderate 3.2-mile hike passing Nymph, Dream, and Emerald Lakes. Spectacular alpine scenery and wildlife opportunities.',
            difficulty: 'Moderate - gain 650 feet elevation over 1.6 miles',
            image: '[Photo: Emerald Lake with Flattop Mountain behind]'
          },
          {
            time: '12:00 PM - 2:00 PM',
            title: 'Lunch at Bear Lake',
            description: 'Picnic lunch while enjoying panoramic views of Longs Peak and surrounding 14ers. Watch for mountain wildlife.',
            wildlifeWatch: 'Look for pikas, marmots, and Clark\'s nutcrackers.',
            image: '[Photo: Longs Peak from Bear Lake picnic area]'
          },
          {
            time: '3:00 PM - 5:00 PM',
            title: 'Alberta Falls Trail',
            description: 'Easy 1.6-mile hike to a beautiful waterfall. Less crowded alternative with great mountain views.',
            seasonalNote: 'Fall offers golden aspen colors, spring has peak water flow!',
            image: '[Photo: Alberta Falls cascading down granite rocks]'
          }
        ],
        tips: [
          'Start early - afternoon thunderstorms common in mountains',
          'Bring layers and rain gear for changing weather',
          'Stay on trails to protect fragile alpine vegetation',
          'Pack extra snacks - mountain hiking burns more calories'
        ]
      },
      {
        dayNumber: 3,
        title: 'Trail Ridge Road Experience',
        subtitle: 'Alpine Visitor Center and tundra exploration',
        activities: [
          {
            time: '9:00 AM - 12:00 PM',
            title: 'Trail Ridge Road Drive',
            description: 'Drive the highest continuous paved road in North America to 12,183 feet. Stop at scenic overlooks and Rock Cut.',
            seasonalNote: 'Road typically open May-October depending on snow conditions.',
            image: '[Photo: Trail Ridge Road winding through alpine tundra]'
          },
          {
            time: '12:30 PM - 2:30 PM',
            title: 'Alpine Visitor Center',
            description: 'Learn about life in the alpine tundra ecosystem. Short walks on boardwalks protect fragile alpine plants.',
            specialNote: 'One of the highest visitor centers in the National Park System!',
            image: '[Photo: Alpine Visitor Center with tundra landscape]'
          },
          {
            time: '3:00 PM - 5:00 PM',
            title: 'Milner Pass and Continental Divide',
            description: 'Stand on the Continental Divide at 10,759 feet. Easy walk to appreciate the significance of this geographic feature.',
            educationalNote: 'Water flows to different oceans from this point!',
            image: '[Photo: Continental Divide sign with mountain vista]'
          }
        ],
        tips: [
          'Check road conditions - Trail Ridge Road closes with snow',
          'Bring warm clothing - temperatures drop significantly with elevation',
          'Stay hydrated and watch for altitude sickness symptoms',
          'Allow extra time for frequent photo stops'
        ]
      },
      {
        dayNumber: 4,
        title: 'West Side Exploration',
        subtitle: 'Grand Lake and Kawuneeche Valley',
        activities: [
          {
            time: '9:00 AM - 11:00 AM',
            title: 'Kawuneeche Valley Drive',
            description: 'Scenic drive through the Colorado River\'s headwaters valley. Excellent moose and elk viewing opportunities.',
            wildlifeWatch: 'Early morning is prime time for moose sightings in willows!',
            image: '[Photo: Moose in Kawuneeche Valley willows]'
          },
          {
            time: '11:30 AM - 1:30 PM',
            title: 'Adams Falls Trail',
            description: 'Easy 0.6-mile hike to a scenic waterfall on the east inlet of Grand Lake. Perfect for families.',
            relaxation: 'Peaceful west-side alternative to busy east-side trails.',
            image: '[Photo: Adams Falls with autumn aspen colors]'
          },
          {
            time: '2:30 PM - 4:30 PM',
            title: 'Grand Lake Village',
            description: 'Explore Colorado\'s largest natural lake and historic lakeside village. Optional boat tour or lakeside walk.',
            culturalNote: 'Grand Lake village predates the national park by decades.',
            image: '[Photo: Grand Lake with mountain reflections]'
          }
        ],
        tips: [
          'West side typically receives more snow - check conditions',
          'Bring binoculars for wildlife viewing in valley',
          'Grand Lake village has dining options for lunch',
          'West entrance is less crowded than Estes Park side'
        ]
      },
      {
        dayNumber: 5,
        title: 'Wildlife and Reflection',
        subtitle: 'Coyote Valley and departure preparation',
        activities: [
          {
            time: '7:00 AM - 9:00 AM',
            title: 'Coyote Valley Nature Trail',
            description: 'Easy 1-mile loop through prime wildlife habitat. Best early morning wildlife viewing in the park.',
            wildlifeWatch: 'Elk, deer, coyotes, and numerous bird species frequent this area.',
            image: '[Photo: Elk herd in Coyote Valley at sunrise]'
          },
          {
            time: '10:00 AM - 12:00 PM',
            title: 'Holzwarth Historic Site',
            description: 'Tour a preserved 1920s guest ranch to learn about early tourism and ranching in the area.',
            culturalNote: 'Understand how the area transitioned from ranch to national park.',
            image: '[Photo: Historic Holzwarth cabins with mountain backdrop]'
          },
          {
            time: '1:00 PM - 3:00 PM',
            title: 'Final Mountain Views',
            description: 'Return to favorite spots for last photos and quiet reflection on your Rocky Mountain experience.',
            reflection: 'Consider how this landscape inspired the conservation movement.',
            image: '[Photo: Panoramic view of Continental Divide peaks]'
          }
        ],
        tips: [
          'Early departure helps avoid traffic in Estes Park',
          'Check weather for departure route through mountains',
          'Consider purchasing park-related books or gifts',
          'Plan return visit - park offers different experiences each season'
        ]
      }
    ]
  },

  'mesa-verde': {
    title: '3-4 Day Mesa Verde National Park Itinerary',
    subtitle: 'Complete off-season guide for September, October, April, May',
    description: 'Explore the remarkable cliff dwellings and mesa-top sites of the Ancestral Puebloans during the ideal off-season months. This itinerary covers major archaeological sites, cultural programs, and scenic drives.',
    totalDays: 4,
    bestMonths: ['September', 'October', 'April', 'May'],
    days: [
      {
        dayNumber: 1,
        title: 'Archaeological Introduction',
        subtitle: 'Visitor center and Chapin Mesa sites',
        activities: [
          {
            time: '9:00 AM - 10:30 AM',
            title: 'Visitor and Research Center',
            description: 'Begin with park orientation and museum exhibits about Ancestral Puebloan culture. Reserve cliff dwelling tours.',
            offSeasonAdvantage: 'More tour availability and personal attention from rangers!',
            image: '[Photo: Mesa Verde Visitor Center with mesa backdrop]'
          },
          {
            time: '11:00 AM - 12:30 PM',
            title: 'Mesa Top Loop Road',
            description: 'Self-guided 6-mile drive with stops at mesa-top archaeological sites and overlooks of cliff dwellings.',
            photographyTip: 'Morning light is perfect for photographing cliff dwellings from overlooks.',
            image: '[Photo: Cliff Palace viewed from Mesa Top Loop]'
          },
          {
            time: '1:30 PM - 3:00 PM',
            title: 'Spruce Tree House',
            description: 'Self-guided visit to one of the best-preserved cliff dwellings. Easy 1.2-mile trail through pinyon-juniper forest.',
            culturalNote: 'Best introduction to cliff dwelling architecture and construction.',
            image: '[Photo: Spruce Tree House alcove and rooms]'
          }
        ],
        accommodations: {
          title: 'Day 1 Accommodations',
          description: 'Stay at Far View Lodge or nearby Cortez:',
          options: [
            { name: 'Far View Lodge', type: 'In-Park Premium', bookingLink: '#' },
            { name: 'Cortez Cultural Center', type: 'Mid-range', bookingLink: '#' },
            { name: 'Morefield Campground', type: 'Camping', bookingLink: '#' }
          ]
        },
        tips: [
          'Reserve cliff dwelling tours in advance, even off-season',
          'Wear sturdy shoes for uneven archaeological site surfaces',
          'Bring water and sun protection - high desert environment',
          'Respect archaeological sites - stay on designated paths only'
        ]
      },
      {
        dayNumber: 2,
        title: 'Major Cliff Dwellings',
        subtitle: 'Cliff Palace and Balcony House tours',
        activities: [
          {
            time: '9:00 AM - 10:30 AM',
            title: 'Cliff Palace Guided Tour',
            description: 'Ranger-guided tour of the largest cliff dwelling in North America. Requires climbing four 10-foot ladders.',
            difficulty: 'Moderate - ladders and uneven surfaces, not suitable for acrophobia',
            image: '[Photo: Cliff Palace full view showing multiple rooms]'
          },
          {
            time: '12:00 PM - 1:30 PM',
            title: 'Balcony House Guided Tour',
            description: 'Adventure tour requiring crawling through a tunnel and climbing a 32-foot ladder. Most physically challenging tour.',
            difficulty: 'Strenuous - requires good mobility and comfort with heights',
            image: '[Photo: Balcony House with dramatic cliff setting]'
          },
          {
            time: '2:30 PM - 4:00 PM',
            title: 'Petroglyph Point Trail',
            description: 'Moderate 2.4-mile loop hike to see Ancestral Puebloan rock art. Requires registration at trailhead.',
            culturalNote: 'View petroglyphs created 700-800 years ago by cliff dwelling inhabitants.',
            image: '[Photo: Petroglyph panels on sandstone cliff]'
          }
        ],
        tips: [
          'Cliff Palace and Balcony House require separate tour tickets',
          'No photography allowed inside some cliff dwellings during tours',
          'Bring headlamp or flashlight for darker alcove areas',
          'Tours may be cancelled due to weather - check conditions'
        ]
      },
      {
        dayNumber: 3,
        title: 'Wetherill Mesa Exploration',
        subtitle: 'Long House tour and mesa-top sites',
        activities: [
          {
            time: '9:00 AM - 10:00 AM',
            title: 'Wetherill Mesa Tram Ride',
            description: 'Take the tram to access Wetherill Mesa archaeological sites. Enjoy scenic views of the Four Corners region.',
            seasonalNote: 'Wetherill Mesa typically open May through October only.',
            image: '[Photo: Wetherill Mesa tram with canyon views]'
          },
          {
            time: '10:30 AM - 12:00 PM',
            title: 'Long House Guided Tour',
            description: 'Ranger-guided tour of the second-largest cliff dwelling in the park. Involves moderate hiking and ladder climbing.',
            specialNote: 'Only cliff dwelling accessible via guided tour on Wetherill Mesa.',
            image: '[Photo: Long House showing length of cliff dwelling]'
          },
          {
            time: '1:00 PM - 3:00 PM',
            title: 'Step House and Badger House',
            description: 'Self-guided visits to mesa-top sites showing different periods of Ancestral Puebloan occupation.',
            educationalNote: 'See evolution from pit houses to above-ground pueblos.',
            image: '[Photo: Step House showing architectural evolution]'
          }
        ],
        tips: [
          'Wetherill Mesa has limited seasonal access - check park website',
          'Bring lunch - limited food services on Wetherill Mesa',
          'Allow full day for Wetherill Mesa due to tram schedule',
          'Wear comfortable walking shoes for varied terrain'
        ]
      },
      {
        dayNumber: 4,
        title: 'Cultural Immersion and Departure',
        subtitle: 'Research center and Four Corners region',
        activities: [
          {
            time: '9:00 AM - 11:00 AM',
            title: 'Chapin Mesa Archaeological Museum',
            description: 'In-depth exploration of museum exhibits, including artifacts and dioramas showing Ancestral Puebloan life.',
            culturalNote: 'Understand daily life, agriculture, and crafts of cliff dwelling inhabitants.',
            image: '[Photo: Museum diorama of Ancestral Puebloan family life]'
          },
          {
            time: '11:30 AM - 1:00 PM',
            title: 'Knife Edge Road Drive',
            description: 'Scenic drive offering different perspectives of the mesa landscape and distant mountain views.',
            photographyTip: 'Great vantage points for landscape photography of mesa country.',
            image: '[Photo: Mesa Verde landscape from Knife Edge Road]'
          },
          {
            time: '2:00 PM - 3:30 PM',
            title: 'Four Corners Monument',
            description: 'Optional visit to the only point where four U.S. states meet. Learn about regional Native American cultures.',
            culturalNote: 'Understand the broader cultural landscape of the Southwest.',
            image: '[Photo: Four Corners Monument with state markers]'
          }
        ],
        tips: [
          'Four Corners Monument requires separate admission fee',
          'Consider purchasing Native American crafts from local artisans',
          'Plan departure timing to avoid afternoon traffic',
          'Reflect on the remarkable preservation of this cultural heritage'
        ]
      }
    ]
  },

  'glacier': {
    title: '4-5 Day Glacier National Park Itinerary',
    subtitle: 'Complete off-season guide for April, May, September, October',
    description: 'Experience Montana\'s crown jewel during ideal off-season months. This itinerary covers alpine lakes, mountain passes, and pristine wilderness while avoiding summer crowds.',
    totalDays: 4,
    bestMonths: ['April', 'May', 'September', 'October'],
    days: [
      {
        dayNumber: 1,
        title: 'West Glacier and Lake McDonald',
        subtitle: 'Apgar Visitor Center and pristine lake exploration',
        activities: [
          {
            time: '9:00 AM - 10:30 AM',
            title: 'Apgar Visitor Center',
            description: 'Start with park orientation, road conditions briefing, and wildlife safety education. Get permits for backcountry if needed.',
            offSeasonAdvantage: 'Personal ranger consultations and no crowds at exhibits!',
            image: '[Photo: Apgar Visitor Center with mountain backdrop]'
          },
          {
            time: '11:00 AM - 1:00 PM',
            title: 'Lake McDonald Lodge Area',
            description: 'Explore the historic lodge and walk along the pristine lake shore. Perfect mountain reflections and wildlife viewing opportunities.',
            photographyTip: 'Morning light provides incredible mountain reflections on calm lake waters.',
            image: '[Photo: Lake McDonald with perfect mountain reflections]'
          },
          {
            time: '2:00 PM - 5:00 PM',
            title: 'Trail of the Cedars & Avalanche Lake',
            description: 'Easy boardwalk through old-growth forest, then moderate hike to stunning Avalanche Lake surrounded by towering peaks.',
            difficulty: 'Moderate 4.5-mile round trip to Avalanche Lake',
            image: '[Photo: Avalanche Lake with dramatic mountain cirque]'
          }
        ],
        accommodations: {
          title: 'Day 1 Accommodations',
          description: 'Stay near West Glacier entrance:',
          options: [
            { name: 'Historic In-Park Lodging', bookingLink: 'https://secure.glaciernationalparklodges.com/booking/lodging' },
            { name: 'Whitefish, MT', bookingLink: 'https://www.vrbo.com/search?destination=Whitefish%2C%20Montana%2C%20United%20States%20of%20America&regionId=1199&latLong=48.410637%2C-114.335266&flexibility=1_DAY&d1=2026-07-25&d2=2026-07-30&adults=2&children=1_11%2C1_13&sort=RECOMMENDED&theme=&userIntent=&semdtl=&categorySearch=&pwaDialog=&searchRange=2025-11-01_2025-11-30&searchRange=2025-12-01_2025-12-31&daysInFuture&stayLength' },
            { name: 'Glacier Camping', bookingLink: 'https://www.recreation.gov/search?q=glacier%20national%20park&start=0&inventory_type=camping' }
          ]
        },
        tips: [
          'Check Going-to-the-Sun Road conditions - may be partially closed',
          'Bring layers - mountain weather changes rapidly',
          'Start hikes early to avoid afternoon thunderstorms',
          'Download offline maps - cell service is limited'
        ]
      },
      {
        dayNumber: 2,
        title: 'Going-to-the-Sun Road Journey',
        subtitle: 'Scenic drive and Logan Pass (weather permitting)',
        activities: [
          {
            time: '8:00 AM - 10:00 AM',
            title: 'Going-to-the-Sun Road Lower Section',
            description: 'Drive as far as road conditions allow. Stop at scenic overlooks and short trail access points.',
            seasonalNote: 'Full road may not be open - check current conditions at visitor center.',
            image: '[Photo: Going-to-the-Sun Road with mountain vistas]'
          },
          {
            time: '10:30 AM - 1:00 PM',
            title: 'Logan Pass Area (if accessible)',
            description: 'If road is open, explore Logan Pass Visitor Center and Hidden Lake Overlook Trail.',
            wildlifeWatch: 'Mountain goats frequent the Logan Pass area - keep safe distance.',
            image: '[Photo: Hidden Lake Overlook with mountain goats]'
          },
          {
            time: '2:00 PM - 4:30 PM',
            title: 'McDonald Creek and Sacred Dancing Cascade',
            description: 'Easy walks along McDonald Creek with beautiful waterfalls and old-growth forest scenery.',
            relaxation: 'Perfect for contemplative walks and nature photography.',
            image: '[Photo: McDonald Creek cascading through forest]'
          }
        ],
        tips: [
          'Going-to-the-Sun Road often partially closed in off-season',
          'Bring traction devices for vehicles if snow is possible',
          'Pack extra food and emergency supplies',
          'Check weather forecast before attempting high elevation areas'
        ]
      },
      {
        dayNumber: 3,
        title: 'East Side Exploration',
        subtitle: 'Two Medicine and St. Mary areas',
        activities: [
          {
            time: '9:00 AM - 11:30 AM',
            title: 'Two Medicine Lake Area',
            description: 'Drive to Two Medicine area for different mountain perspectives and easier trail access during off-season.',
            geologicalNote: 'Excellent examples of glacial geology and mountain formation.',
            image: '[Photo: Two Medicine Lake with surrounding peaks]'
          },
          {
            time: '12:00 PM - 3:00 PM',
            title: 'Running Eagle Falls Trail',
            description: 'Easy 1.2-mile round trip hike to unique waterfall that changes with seasons. Also called Trick Falls.',
            uniqueFeature: 'Waterfall appears to flow from solid rock during high water periods.',
            image: '[Photo: Running Eagle Falls flowing from rock face]'
          },
          {
            time: '3:30 PM - 5:30 PM',
            title: 'St. Mary Lake Viewpoint',
            description: 'Drive to St. Mary area for sunset views over the lake and surrounding mountain peaks.',
            photographyTip: 'Golden hour light on Wild Goose Island is spectacular.',
            image: '[Photo: St. Mary Lake sunset with Wild Goose Island]'
          }
        ],
        tips: [
          'East side roads generally more accessible in off-season',
          'Bring bear spray for all hiking activities',
          'Weather can be more severe on east side',
          'Gas up in St. Mary - limited services in area'
        ]
      },
      {
        dayNumber: 4,
        title: 'Many Glacier Valley Adventure',
        subtitle: 'Alpine lakes and dramatic mountain scenery',
        activities: [
          {
            time: '8:30 AM - 10:00 AM',
            title: 'Drive to Many Glacier Area',
            description: 'Drive to Many Glacier via Going-to-the-Sun Road or US-89 depending on road conditions. Stop at Swiftcurrent Motor Inn area.',
            seasonalNote: 'Many Glacier Road typically accessible during off-season - check conditions.',
            image: '[Photo: Many Glacier Road with mountain vistas ahead]'
          },
          {
            time: '10:30 AM - 1:00 PM',
            title: 'Swiftcurrent Lake Trail',
            description: 'Easy 2.4-mile loop around Swiftcurrent Lake with stunning reflections of Mount Wilbur and surrounding peaks.',
            wildlifeWatch: 'Excellent chance to see moose, especially in early morning hours.',
            image: '[Photo: Swiftcurrent Lake reflecting Mount Wilbur and Grinnell Point]'
          },
          {
            time: '2:00 PM - 4:30 PM',
            title: 'Red Rock Falls Trail (weather permitting)',
            description: 'Moderate 3.7-mile hike to spectacular waterfall, or explore Lake Josephine area if trail conditions allow.',
            alternativeOption: 'If trail is closed, explore Many Glacier Hotel area and shoreline walks.',
            image: '[Photo: Red Rock Falls cascading down dramatic cliff face]'
          },
          {
            time: '5:00 PM - 6:00 PM',
            title: 'Many Glacier Hotel and Departure',
            description: 'Visit historic Many Glacier Hotel for final views and reflection on your Glacier National Park experience.',
            historicalNote: 'Built in 1915, this Great Northern Railway hotel showcases classic park lodge architecture.',
            image: '[Photo: Many Glacier Hotel with Swiftcurrent Lake and mountains]'
          }
        ],
        tips: [
          'Many Glacier area often has better road access than Going-to-the-Sun Road',
          'Bring bear spray - this is prime grizzly bear habitat',
          'Check with rangers about current trail conditions and wildlife activity',
          'Many Glacier Hotel may be closed but exterior and grounds are accessible',
          'Allow extra time for wildlife stops along Many Glacier Road'
        ]
      }
    ]
  },

  'grand-teton': {
    title: '4-5 Day Grand Teton National Park Itinerary',
    subtitle: 'Complete off-season guide for September, October, April, May',
    description: 'Experience the dramatic Teton Range and pristine wilderness during ideal off-season months. This itinerary covers alpine lakes, wildlife viewing, and iconic mountain photography.',
    totalDays: 4,
    bestMonths: ['September', 'October', 'April', 'May'],
    days: [
      {
        dayNumber: 1,
        title: 'Jackson Lake and Signal Mountain',
        subtitle: 'Scenic drives and mountain vistas',
        activities: [
          {
            time: '9:00 AM - 10:00 AM',
            title: 'Colter Bay Visitor Center',
            description: 'Start with park orientation, wildlife safety briefing, and exhibit on Native American history of the region.',
            offSeasonAdvantage: 'Personal ranger consultations and uncrowded exhibits!',
            image: '[Photo: Colter Bay Visitor Center with Teton backdrop]'
          },
          {
            time: '10:30 AM - 12:30 PM',
            title: 'Jackson Lake Dam and Scenic Drive',
            description: 'Drive along Jackson Lake with spectacular Teton reflections. Stop at Oxbow Bend for wildlife viewing.',
            photographyTip: 'Morning light provides perfect mountain reflections on calm lake waters!',
            image: '[Photo: Jackson Lake reflecting the Teton Range]'
          },
          {
            time: '1:30 PM - 4:00 PM',
            title: 'Signal Mountain Summit Drive',
            description: 'Drive to Signal Mountain summit for panoramic views of Jackson Hole valley and the entire Teton Range.',
            wildlifeWatch: 'Excellent opportunity to spot elk, moose, and various bird species.',
            image: '[Photo: Panoramic view from Signal Mountain of Teton Range]'
          }
        ],
        accommodations: {
          title: 'Day 1 Accommodations',
          description: 'Stay in Jackson or park lodging:',
          options: [
            { name: 'Jackson Lake Lodge', type: 'Premium In-Park', bookingLink: '#' },
            { name: 'Colter Bay Village', type: 'Mid-range In-Park', bookingLink: '#' },
            { name: 'Gros Ventre Campground', type: 'Camping', bookingLink: '#' }
          ]
        },
        tips: [
          'Start early for best wildlife viewing opportunities',
          'Bring layers - mountain weather changes quickly',
          'Carry bear spray when hiking or walking trails',
          'Check road conditions for Signal Mountain in fall/spring'
        ]
      },
      {
        dayNumber: 2,
        title: 'Jenny Lake and Cascade Canyon',
        subtitle: 'Alpine lake hiking and mountain access',
        activities: [
          {
            time: '8:00 AM - 10:00 AM',
            title: 'Jenny Lake Boat Shuttle',
            description: 'Take the scenic boat ride across Jenny Lake to access Cascade Canyon trailhead. Enjoy mountain reflections.',
            difficulty: 'Easy boat ride, moderate hiking to follow',
            image: '[Photo: Jenny Lake boat with Teton peaks rising behind]'
          },
          {
            time: '10:30 AM - 2:00 PM',
            title: 'Cascade Canyon Trail',
            description: 'Hike into Cascade Canyon surrounded by towering peaks. Go as far as comfort allows, up to Inspiration Point.',
            wildlifeWatch: 'Moose frequent the canyon, and pikas live in the rockfields.',
            image: '[Photo: Cascade Canyon trail with dramatic Teton walls]'
          },
          {
            time: '3:00 PM - 5:00 PM',
            title: 'Hidden Falls and Inspiration Point',
            description: 'Visit the beautiful Hidden Falls and climb to Inspiration Point for spectacular canyon views.',
            photographyTip: 'Afternoon light illuminates the falls beautifully.',
            image: '[Photo: Hidden Falls cascading with Teton backdrop]'
          }
        ],
        tips: [
          'Make boat shuttle reservations in advance when possible',
          'Bring plenty of water and snacks for canyon hiking',
          'Weather can change rapidly in the mountains',
          'Stay on designated trails to protect wilderness areas'
        ]
      },
      {
        dayNumber: 3,
        title: 'Mormon Row and Antelope Flats',
        subtitle: 'Historic sites and wildlife viewing',
        activities: [
          {
            time: '7:00 AM - 9:00 AM',
            title: 'Sunrise at Mormon Row',
            description: 'Photograph the iconic Moulton Barn with the Teton Range backdrop in golden sunrise light.',
            photographyTip: 'Arrive 30 minutes before sunrise for best positioning and lighting.',
            image: '[Photo: Moulton Barn silhouetted against Teton Range at sunrise]'
          },
          {
            time: '10:00 AM - 12:00 PM',
            title: 'Antelope Flats Road Wildlife Drive',
            description: 'Slow scenic drive through prime habitat for elk, bison, pronghorn, and seasonal migratory birds.',
            wildlifeWatch: 'Fall brings elk bugling season, spring brings new births.',
            image: '[Photo: Elk herd grazing in Antelope Flats with mountains behind]'
          },
          {
            time: '1:00 PM - 4:00 PM',
            title: 'Taggart Lake Trail',
            description: 'Moderate 3-mile hike to beautiful alpine lake nestled beneath Avalanche Canyon.',
            seasonalNote: 'Fall offers golden aspens, spring has wildflower blooms!',
            image: '[Photo: Taggart Lake reflecting Grand Teton peak]'
          }
        ],
        tips: [
          'Bring headlamp for early morning photography',
          'Drive slowly on Antelope Flats - wildlife has right of way',
          'Pack lunch for full day of activities',
          'Check weather conditions before hiking to Taggart Lake'
        ]
      },
      {
        dayNumber: 4,
        title: 'Teton Village and Reflection',
        subtitle: 'Mountain views and departure preparation',
        activities: [
          {
            time: '9:00 AM - 11:00 AM',
            title: 'Aerial Tram at Teton Village',
            description: 'Take the tram to 10,450 feet for incredible Teton and valley views (seasonal operation).',
            seasonalNote: 'Tram operates summer through fall - check schedule.',
            image: '[Photo: Aerial view from tram showing entire Teton Range]'
          },
          {
            time: '12:00 PM - 2:00 PM',
            title: 'Menor\'s Ferry Historic District',
            description: 'Explore historic buildings and learn about early settlers who crossed the Snake River here.',
            culturalNote: 'Understand how early pioneers experienced this dramatic landscape.',
            image: '[Photo: Historic Menor Ferry with Teton Range backdrop]'
          },
          {
            time: '3:00 PM - 4:30 PM',
            title: 'Final Mountain Views and Reflection',
            description: 'Return to favorite spots for last photos and quiet contemplation of the magnificent Teton Range.',
            reflection: 'Consider how this landscape has inspired visitors for generations.',
            image: '[Photo: Late afternoon light on Cathedral Group peaks]'
          }
        ],
        tips: [
          'Check tram operation schedule before visiting',
          'Purchase park-related books or Native American crafts',
          'Plan departure route - mountain passes may have weather',
          'Consider Jackson town visit for shopping and dining'
        ]
      }
    ]
  },

  'great-basin': {
    title: '3-4 Day Great Basin National Park Itinerary',
    subtitle: 'Complete off-season guide for September, October, April, May',
    description: 'Experience Nevada\'s hidden gem with ancient bristlecone pines, Lehman Caves, and dark sky stargazing during ideal off-season months.',
    totalDays: 3,
    bestMonths: ['September', 'October', 'April', 'May'],
    days: [
      {
        dayNumber: 1,
        title: 'Lehman Caves and Visitor Center',
        subtitle: 'Underground wonders and park orientation',
        activities: [
          {
            time: '9:00 AM - 10:00 AM',
            title: 'Great Basin Visitor Center',
            description: 'Start with park orientation, reserve cave tours, and learn about the unique high desert ecosystem.',
            offSeasonAdvantage: 'More cave tour availability and personal ranger attention!',
            image: '[Photo: Great Basin Visitor Center with Wheeler Peak behind]'
          },
          {
            time: '10:30 AM - 12:00 PM',
            title: 'Lehman Caves Guided Tour',
            description: 'Explore beautiful limestone caves with stalactites, stalagmites, and rare shield formations.',
            geologicalNote: 'Constant 50°F temperature makes caves comfortable year-round.',
            image: '[Photo: Inside Lehman Caves showing limestone formations]'
          },
          {
            time: '1:00 PM - 3:00 PM',
            title: 'Mountain View Nature Trail',
            description: 'Easy 1.3-mile loop trail introducing Great Basin flora and fauna with mountain views.',
            wildlifeWatch: 'Look for mule deer, chipmunks, and various high desert birds.',
            image: '[Photo: Mountain View Trail with sagebrush and Wheeler Peak]'
          }
        ],
        accommodations: {
          title: 'Day 1 Accommodations',
          description: 'Limited options - plan ahead:',
          options: [
            { name: 'Border Inn Baker NV', type: 'Historic Motel', bookingLink: '#' },
            { name: 'Lower Lehman Creek Campground', type: 'In-Park Camping', bookingLink: '#' },
            { name: 'Upper Lehman Creek Campground', type: 'Higher Elevation Camping', bookingLink: '#' }
          ]
        },
        tips: [
          'Reserve cave tours in advance - limited daily capacity',
          'Bring layers - elevation ranges from 5,000 to 13,000+ feet',
          'Stock up on supplies in Baker, NV - limited park services',
          'Check road conditions to higher elevations in spring/fall'
        ]
      },
      {
        dayNumber: 2,
        title: 'Wheeler Peak and Bristlecone Pines',
        subtitle: 'Ancient trees and mountain exploration',
        activities: [
          {
            time: '8:00 AM - 10:00 AM',
            title: 'Wheeler Peak Scenic Drive',
            description: 'Drive the 12-mile scenic road to 10,000+ feet elevation with spectacular mountain and valley views.',
            seasonalNote: 'Road may be closed above certain elevations in winter/spring.',
            image: '[Photo: Wheeler Peak Scenic Drive with mountain vistas]'
          },
          {
            time: '10:30 AM - 1:30 PM',
            title: 'Bristlecone Pine Trail',
            description: 'Moderate 2.8-mile hike to see some of the world\'s oldest living trees, over 4,000 years old.',
            culturalNote: 'These trees were ancient when the pyramids were built!',
            image: '[Photo: Ancient bristlecone pine against mountain backdrop]'
          },
          {
            time: '2:30 PM - 4:30 PM',
            title: 'Alpine Lakes Trail (Optional)',
            description: 'For experienced hikers, continue to beautiful alpine lakes beneath Wheeler Peak\'s north face.',
            difficulty: 'Strenuous - high altitude and steep terrain',
            image: '[Photo: Alpine lake reflecting Wheeler Peak\'s rocky face]'
          }
        ],
        tips: [
          'Start early - afternoon thunderstorms possible in mountains',
          'Bring plenty of water and snacks for high-altitude hiking',
          'Respect ancient trees - stay on designated paths only',
          'Weather changes rapidly at high elevation'
        ]
      },
      {
        dayNumber: 3,
        title: 'Dark Sky Stargazing and Departure',
        subtitle: 'Astronomy program and final exploration',
        activities: [
          {
            time: '9:00 AM - 11:00 AM',
            title: 'Baker Archaeological Site',
            description: 'Explore remnants of early Fremont and Shoshone cultures who lived in this harsh but beautiful environment.',
            culturalNote: 'Learn how indigenous peoples thrived in the Great Basin desert.',
            image: '[Photo: Archaeological site with desert mountains behind]'
          },
          {
            time: '12:00 PM - 2:00 PM',
            title: 'Lexington Arch Trail',
            description: 'Moderate 3.4-mile hike to see a rare limestone arch in this remote corner of Nevada.',
            uniqueFeature: 'One of the few limestone arches in the western United States.',
            image: '[Photo: Lexington Arch limestone formation]'
          },
          {
            time: '8:00 PM - 10:00 PM',
            title: 'Astronomy Program (Seasonal)',
            description: 'Join ranger-led stargazing program under some of the darkest skies in the country.',
            astronomyNote: 'Great Basin has Gold-level International Dark Sky designation.',
            image: '[Photo: Milky Way over Wheeler Peak and bristlecone pines]'
          }
        ],
        tips: [
          'Bring red flashlight for night vision preservation',
          'Dress warmly for nighttime stargazing activities',
          'Check astronomy program schedule - seasonal availability',
          'Consider purchasing star charts or astronomy guides'
        ]
      }
    ]
  },

  'black-canyon': {
    title: '3-4 Day Black Canyon of the Gunnison Itinerary',
    subtitle: 'Complete off-season guide for September, October, April, May',
    description: 'Experience the dramatic dark walls and spectacular views of Colorado\'s steepest canyon during ideal off-season months. This itinerary covers rim drives, canyon overlooks, and geological wonders.',
    totalDays: 3,
    bestMonths: ['September', 'October', 'April', 'May'],
    days: [
      {
        dayNumber: 1,
        title: 'South Rim Exploration',
        subtitle: 'Visitor center and dramatic overlooks',
        activities: [
          {
            time: '9:00 AM - 10:00 AM',
            title: 'South Rim Visitor Center',
            description: 'Start with park orientation, geological exhibits, and safety briefing. Learn about the canyon\'s formation and dark rock composition.',
            offSeasonAdvantage: 'Personal attention from rangers and uncrowded exhibits!',
            image: '[Photo: South Rim Visitor Center with canyon views]'
          },
          {
            time: '10:30 AM - 12:30 PM',
            title: 'Tomichi Point and Pulpit Rock',
            description: 'Visit the first major overlooks on South Rim Drive. Experience the dramatic depth and dark walls of the canyon.',
            photographyTip: 'Morning light illuminates the opposite canyon wall beautifully!',
            image: '[Photo: Tomichi Point overlooking dark canyon walls]'
          },
          {
            time: '1:30 PM - 4:00 PM',
            title: 'Chasm View and Painted Wall',
            description: 'Continue to the narrowest point viewable from South Rim and see Colorado\'s tallest cliff at 2,250 feet.',
            geologicalNote: 'Painted Wall shows pink pegmatite veins in dark Precambrian rock.',
            image: '[Photo: Painted Wall showing dramatic height and rock formations]'
          }
        ],
        accommodations: {
          title: 'Day 1 Accommodations',
          description: 'Stay in nearby Montrose or Crawford:',
          options: [
            { name: 'Hampton Inn Montrose', type: 'Premium', bookingLink: '#' },
            { name: 'Red Arrow Inn Montrose', type: 'Mid-range', bookingLink: '#' },
            { name: 'South Rim Campground', type: 'Camping', bookingLink: '#' }
          ]
        },
        tips: [
          'Arrive early for best parking at overlooks',
          'Bring layers - rim elevation is 8,000+ feet',
          'Stay well back from cliff edges - no barriers at many viewpoints',
          'Check weather - afternoon thunderstorms possible'
        ]
      },
      {
        dayNumber: 2,
        title: 'Hiking and North Rim Adventure',
        subtitle: 'Canyon trails and different perspectives',
        activities: [
          {
            time: '8:00 AM - 10:00 AM',
            title: 'Rim Rock Nature Trail',
            description: 'Easy 1-mile loop trail along the canyon rim with interpretive signs about geology, wildlife, and plant life.',
            difficulty: 'Easy - paved trail suitable for all ages',
            image: '[Photo: Rim Rock Trail with canyon views and interpretive signs]'
          },
          {
            time: '11:00 AM - 1:00 PM',
            title: 'North Rim Road Drive',
            description: 'Drive the 5-mile North Rim Road for different canyon perspectives. Rougher road but fewer crowds.',
            seasonalNote: 'North Rim Road may close with snow - check conditions!',
            image: '[Photo: North Rim perspective showing canyon depth]'
          },
          {
            time: '2:00 PM - 4:00 PM',
            title: 'Exclamation Point Hike',
            description: 'Moderate 3-mile round-trip hike to a dramatic overlook beyond the developed South Rim area.',
            difficulty: 'Moderate - some elevation gain and uneven terrain',
            image: '[Photo: Exclamation Point showing expansive canyon views]'
          }
        ],
        tips: [
          'North Rim Road is gravel and may be rough',
          'Exclamation Point hike requires good balance and caution',
          'Bring plenty of water for hiking at altitude',
          'Wildlife includes elk, deer, and various bird species'
        ]
      },
      {
        dayNumber: 3,
        title: 'Geological Discovery and Departure',
        subtitle: 'Cedar Point and reflection',
        activities: [
          {
            time: '9:00 AM - 11:00 AM',
            title: 'Cedar Point Nature Trail',
            description: 'Short 0.7-mile trail to one of the most spectacular overlooks in the park with interpretive geology exhibits.',
            educationalNote: 'Learn about the 2 billion year old rocks and canyon formation.',
            image: '[Photo: Cedar Point overlook with geological formations]'
          },
          {
            time: '11:30 AM - 1:00 PM',
            title: 'Sunset View and High Point',
            description: 'Visit the highest viewpoint on South Rim Drive and consider the geological time scale represented.',
            reflection: 'Contemplate the immense time it took to carve this canyon.',
            image: '[Photo: High Point showing canyon depth and geological layers]'
          },
          {
            time: '2:00 PM - 3:30 PM',
            title: 'Final Canyon Appreciation',
            description: 'Return to favorite viewpoints for final photos and quiet reflection on this geological marvel.',
            photographyTip: 'Afternoon light creates dramatic shadows in the canyon.',
            image: '[Photo: Afternoon shadows highlighting canyon texture]'
          }
        ],
        tips: [
          'Cedar Point can be windy - bring jacket',
          'Purchase geology books or maps as souvenirs',
          'Check road conditions for departure route',
          'Consider visiting nearby Curecanti National Recreation Area'
        ]
      }
    ]
  },

  'great-sand-dunes': {
    title: '3-4 Day Great Sand Dunes National Park Itinerary',
    subtitle: 'Complete off-season guide for September, October, April, May',
    description: 'Experience the tallest sand dunes in North America during the ideal off-season months. This itinerary covers sandboarding, hiking, and stargazing while avoiding summer heat and crowds.',
    totalDays: 4,
    bestMonths: ['September', 'October', 'April', 'May'],
    days: [
      {
        dayNumber: 1,
        title: 'Dunes Introduction & Medano Creek',
        subtitle: 'First dunes experience and seasonal creek play',
        activities: [
          {
            time: '9:00 AM - 11:00 AM',
            title: 'Visitor Center & Dunes Overview',
            description: 'Start at the visitor center to learn about the dunes formation and get oriented. Rent sand sleds or sandboards if desired.',
            offSeasonAdvantage: 'Perfect temperatures for sand activities!',
            image: '[Photo: Great Sand Dunes overview from visitor center]'
          },
          {
            time: '11:30 AM - 2:00 PM',
            title: 'Medano Creek Experience',
            description: 'Wade in the seasonal creek that flows at the base of the dunes (April-July peak flow). Perfect for cooling off and playing.',
            seasonalNote: 'Spring snowmelt creates the best creek conditions!',
            image: '[Photo: Families playing in Medano Creek]'
          },
          {
            time: '3:00 PM - 5:00 PM',
            title: 'First Dunes Hike',
            description: 'Hike up the lower dunes to get acclimated. Go as far as you\'re comfortable - there are no marked trails on the sand.',
            proTip: 'Sand temperature is perfect in off-season vs. 140°F in summer!',
            image: '[Photo: Hikers on lower dunes with mountains behind]'
          }
        ],
        accommodations: {
          title: 'Day 1 Accommodations',
          description: 'Stay near the park or in Alamosa:',
          options: [
            { name: 'Zapata Falls Campground', type: 'Camping', bookingLink: '#' },
            { name: 'Alamosa Hotels', type: 'Mid-range', bookingLink: '#' },
            { name: 'Great Sand Dunes Lodge', type: 'Premium', bookingLink: '#' }
          ]
        },
        tips: [
          'Bring plenty of water - high altitude dehydrates quickly',
          'Wear closed-toe shoes for sand hiking',
          'Pack lunch or eat in nearby Alamosa',
          'Check Medano Creek flow conditions at visitor center'
        ]
      },
      {
        dayNumber: 2,
        title: 'High Dune Challenge',
        subtitle: 'Climb to High Dune and sandboarding',
        activities: [
          {
            time: '7:00 AM - 11:00 AM',
            title: 'High Dune Summit Hike',
            description: 'Early morning hike to High Dune (750 feet tall). Allow 4+ hours round trip. Challenging but rewarding with 360-degree views.',
            difficulty: 'Strenuous - soft sand makes hiking difficult',
            image: '[Photo: Sunrise view from High Dune summit]'
          },
          {
            time: '1:00 PM - 3:00 PM',
            title: 'Sandboarding & Sand Sledding',
            description: 'Try sandboarding or sand sledding on the dunes. Rent equipment at the visitor center or local shops.',
            offSeasonAdvantage: 'Cool sand temperatures make this activity enjoyable!',
            image: '[Photo: Sandboarder on steep dune face]'
          },
          {
            time: '4:00 PM - 6:00 PM',
            title: 'Dunes Photography',
            description: 'Capture the changing light on the dunes as afternoon progresses. The contrast between sand and mountains is stunning.',
            photographyTip: 'Golden hour light creates amazing shadows and textures.',
            image: '[Photo: Dramatic dunes shadows at sunset]'
          }
        ],
        tips: [
          'Start High Dune hike very early to avoid afternoon fatigue',
          'Bring gaiters or tape shoes to keep sand out',
          'Take frequent breaks and drink water constantly',
          'Wax your sandboard/sled for better performance'
        ]
      },
      {
        dayNumber: 3,
        title: 'Mountain Hikes & Nature',
        subtitle: 'Zapata Falls and Montville Nature Trail',
        activities: [
          {
            time: '9:00 AM - 12:00 PM',
            title: 'Zapata Falls Hike',
            description: 'Short but steep 0.5-mile hike to a hidden waterfall behind the dunes. Wade through shallow creek to reach the falls.',
            difficulty: 'Moderate - rocky trail and creek crossing',
            image: '[Photo: Zapata Falls with dunes in background]'
          },
          {
            time: '1:00 PM - 3:00 PM',
            title: 'Montville Nature Trail',
            description: 'Easy 0.5-mile nature trail through wetlands and grasslands. Great for bird watching and mountain views.',
            wildlifeWatch: 'Look for elk, deer, and over 200 bird species.',
            image: '[Photo: Montville wetlands with Sangre Mountains]'
          },
          {
            time: '4:00 PM - 6:00 PM',
            title: 'Pinyon Flats Campground Area',
            description: 'Explore the piñon pine and juniper forests. Short trails and great views of the dunes from different angles.',
            relaxation: 'Perfect area for a peaceful afternoon.',
            image: '[Photo: Piñon pines with dunes behind]'
          }
        ],
        tips: [
          'Zapata Falls can be icy in spring - bring micro spikes',
          'Pack a picnic lunch for the mountain areas',
          'Montville trail can be muddy in spring snowmelt',
          'Evening is best for wildlife viewing'
        ]
      },
      {
        dayNumber: 4,
        title: 'Stargazing & Departure',
        subtitle: 'Dark sky astronomy and final dunes exploration',
        activities: [
          {
            time: '9:00 AM - 11:00 AM',
            title: 'Final Dunes Exploration',
            description: 'Return to the dunes for any activities you missed. Try different areas or attempt sandboarding again.',
            flexibility: 'Customize based on your favorite Day 1-2 activities.',
            image: '[Photo: Morning light on pristine dunes]'
          },
          {
            time: '12:00 PM - 2:00 PM',
            title: 'San Luis Valley Scenic Drive',
            description: 'Drive through the San Luis Valley for scenic views and stop at local restaurants in Alamosa.',
            culturalNote: 'Explore Hispanic culture and history of the valley.',
            image: '[Photo: San Luis Valley landscape]'
          },
          {
            time: '9:00 PM - 11:00 PM',
            title: 'Night Sky Program',
            description: 'Join ranger-led stargazing program or explore on your own. Great Sand Dunes has exceptional dark skies.',
            specialNote: 'International Dark Sky Park status - amazing stargazing!',
            image: '[Photo: Milky Way over sand dunes]'
          }
        ],
        tips: [
          'Book night sky programs in advance',
          'Bring red flashlight for stargazing',
          'Dress warmly - desert nights are cold',
          'Check park website for astronomy events'
        ]
      }
    ]
  },

  'hot-springs': {
    title: '2-3 Day Hot Springs National Park Itinerary',
    subtitle: 'Complete off-season guide for October, November, February, March',
    description: 'Experience America\'s oldest national park during the ideal off-season months. This itinerary covers historic bathhouses, mountain trails, and downtown Hot Springs attractions.',
    totalDays: 3,
    bestMonths: ['October', 'November', 'February', 'March'],
    days: [
      {
        dayNumber: 1,
        title: 'Historic Bathhouse Row',
        subtitle: 'Fordyce Bathhouse Museum and thermal springs exploration',
        activities: [
          {
            time: '9:00 AM - 11:00 AM',
            title: 'Fordyce Bathhouse Museum',
            description: 'Start your visit at the beautifully restored Fordyce Bathhouse, now serving as the park visitor center and museum. Learn about the "American Spa" era.',
            offSeasonAdvantage: 'Personal tours and detailed ranger talks without crowds!',
            image: '[Photo: Fordyce Bathhouse interior with historic fixtures]'
          },
          {
            time: '11:30 AM - 1:00 PM',
            title: 'Bathhouse Row Walking Tour',
            description: 'Walk along the historic row of eight bathhouses from the early 1900s. Each has unique architecture and fascinating history.',
            proTip: 'Cool weather makes the walk more comfortable than summer heat!',
            image: '[Photo: Bathhouse Row with fall colors]'
          },
          {
            time: '2:00 PM - 4:00 PM',
            title: 'Thermal Springs Experience',
            description: 'Visit the open thermal springs and fill jugs with the famous hot spring water. Experience the natural 143°F springs.',
            wildlifeWatch: 'Look for steam rising from springs in cool air.',
            image: '[Photo: Thermal spring with steam in cool weather]'
          }
        ],
        accommodations: {
          title: 'Day 1 Accommodations',
          description: 'Stay in historic downtown Hot Springs:',
          options: [
            { name: 'Historic Hotels Downtown' },
            { name: 'Spa Resorts' },
            { name: 'Budget Motels' }
          ]
        },
        tips: [
          'Start early for best parking near Bathhouse Row',
          'Bring containers to collect spring water',
          'Dress in layers - springs are warm but air is cool',
          'Many bathhouses offer self-guided tours'
        ]
      },
      {
        dayNumber: 2,
        title: 'Mountain Trails & Hot Springs Mountain',
        subtitle: 'Hiking trails and observation tower views',
        activities: [
          {
            time: '8:00 AM - 10:30 AM',
            title: 'Hot Springs Mountain Trail',
            description: 'Hike to the observation tower on Hot Springs Mountain for panoramic views of the Ouachita Mountains and downtown.',
            photographyTip: 'Morning light provides best views and comfortable hiking.',
            image: '[Photo: Mountain trail with fall foliage]'
          },
          {
            time: '11:00 AM - 1:00 PM',
            title: 'Sunset Trail',
            description: 'Easy to moderate trail offering scenic views and peaceful forest walking. Less crowded during off-season.',
            difficulty: 'Moderate - well-maintained trail.',
            image: '[Photo: Sunset Trail overlook]'
          },
          {
            time: '2:00 PM - 4:00 PM',
            title: 'Downtown Exploration',
            description: 'Explore the historic downtown area with shops, restaurants, and local attractions connected to the national park.',
            wildlifeWatch: 'Urban wildlife and historic architecture.',
            image: '[Photo: Historic downtown Hot Springs]'
          }
        ],
        tips: [
          'Trails can be slippery when wet - proper footwear essential',
          'Carry water even though hikes are shorter',
          'Check trail conditions at visitor center',
          'Downtown has plenty of dining options for lunch'
        ]
      },
      {
        dayNumber: 3,
        title: 'Lake Ouachita & Garvan Gardens',
        subtitle: 'Optional day trip to nearby attractions',
        activities: [
          {
            time: '9:00 AM - 12:00 PM',
            title: 'Lake Ouachita State Park',
            description: 'Arkansas\'s largest lake offers hiking, scenic drives, and peaceful lake views. 30 minutes from Hot Springs.',
            seasonalNote: 'Perfect weather for hiking without summer crowds.',
            image: '[Photo: Lake Ouachita with mountain backdrop]'
          },
          {
            time: '1:00 PM - 4:00 PM',
            title: 'Garvan Woodland Gardens',
            description: 'Beautiful botanical gardens featuring native Arkansas plants and stunning lake views. Especially beautiful in fall.',
            proTip: 'Fall colors and spring blooms are spectacular.',
            image: '[Photo: Garvan Gardens with seasonal colors]'
          }
        ],
        tips: [
          'Consider this a relaxing day after hiking',
          'Gardens have different seasonal highlights',
          'Lake Ouachita offers great photo opportunities',
          'Both locations less crowded during off-season'
        ]
      }
    ]
  },

  'gateway-arch': {
    title: '2 Day Gateway Arch National Park Itinerary',
    subtitle: 'Complete off-season guide for October, November, February, March',
    description: 'Experience America\'s newest national park during the ideal off-season months. This itinerary covers the Gateway Arch, downtown St. Louis attractions, and Mississippi riverfront.',
    totalDays: 2,
    bestMonths: ['October', 'November', 'February', 'March'],
    days: [
      {
        dayNumber: 1,
        title: 'Gateway Arch & Museum',
        subtitle: 'Tram to the top and Museum of Westward Expansion',
        activities: [
          {
            time: '9:00 AM - 10:30 AM',
            title: 'Gateway Arch Visitor Center',
            description: 'Start at the underground visitor center. Purchase tram tickets and explore the Museum of Westward Expansion.',
            offSeasonAdvantage: 'Shorter lines and more availability for tram tickets!',
            image: '[Photo: Gateway Arch Visitor Center underground]'
          },
          {
            time: '11:00 AM - 12:30 PM',
            title: 'Tram Ride to the Top',
            description: 'Unique tram system takes you 630 feet to the top of the Gateway Arch. Spectacular views of St. Louis and Mississippi River.',
            proTip: 'Clear fall and winter days offer incredible visibility!',
            image: '[Photo: View from top of Gateway Arch]'
          },
          {
            time: '1:30 PM - 4:00 PM',
            title: 'Mississippi Riverfront',
            description: 'Walk along the Mississippi River and explore the historic St. Louis riverfront area. Visit the Old Courthouse if time permits.',
            wildlifeWatch: 'River birds and urban wildlife along waterfront.',
            image: '[Photo: Gateway Arch from Mississippi riverfront]'
          }
        ],
        accommodations: {
          title: 'Day 1 Accommodations',
          description: 'Stay in downtown St. Louis:',
          options: [
            { name: 'Downtown Hotels' },
            { name: 'Riverfront Properties' },
            { name: 'Historic Districts' }
          ]
        },
        tips: [
          'Book tram tickets online in advance',
          'Security screening required - arrive early',
          'Dress in layers - can be windy at the top',
          'Riverfront can be breezy - bring jacket'
        ]
      },
      {
        dayNumber: 2,
        title: 'Historic St. Louis Exploration',
        subtitle: 'Forest Park, museums, and neighborhoods',
        activities: [
          {
            time: '9:00 AM - 12:00 PM',
            title: 'Forest Park & Museums',
            description: 'Visit one of America\'s largest urban parks. Choose from Saint Louis Art Museum, Missouri History Museum, or Saint Louis Zoo.',
            photographyTip: 'Beautiful park settings and historic architecture.',
            image: '[Photo: Forest Park in autumn]'
          },
          {
            time: '1:00 PM - 3:00 PM',
            title: 'Soulard or Lafayette Square',
            description: 'Explore historic St. Louis neighborhoods with Victorian architecture, local shops, and authentic restaurants.',
            difficulty: 'Easy walking - historic districts.',
            image: '[Photo: Historic St. Louis neighborhood]'
          },
          {
            time: '3:30 PM - 5:00 PM',
            title: 'Anheuser-Busch Brewery',
            description: 'Optional tour of the historic Budweiser brewery and Clydesdale stables. Classic St. Louis experience.',
            wildlifeWatch: 'Famous Clydesdale horses and brewery history.',
            image: '[Photo: Anheuser-Busch historic brewery]'
          }
        ],
        tips: [
          'Forest Park has multiple attractions - choose based on interests',
          'Historic neighborhoods great for walking',
          'Brewery tours require reservations',
          'Off-season means less crowded attractions'
        ]
      }
    ]
  },

  'mammoth-cave': {
    title: '2-3 Day Mammoth Cave National Park Itinerary',
    subtitle: 'Complete off-season guide for October, November, February, March',
    description: 'Explore the world\'s longest cave system during the ideal off-season months. This itinerary covers various cave tours, surface trails, and Green River activities.',
    totalDays: 3,
    bestMonths: ['October', 'November', 'February', 'March'],
    days: [
      {
        dayNumber: 1,
        title: 'Historic Cave Tour & Visitor Center',
        subtitle: 'Mammoth Cave Historic Tour and park orientation',
        activities: [
          {
            time: '9:00 AM - 10:00 AM',
            title: 'Visitor Center & Cave Tour Check-in',
            description: 'Start at the visitor center to learn about the cave system and check in for your Historic Tour. Reserve tours in advance.',
            offSeasonAdvantage: 'Smaller tour groups and more personal ranger attention!',
            image: '[Photo: Mammoth Cave Visitor Center]'
          },
          {
            time: '10:30 AM - 12:30 PM',
            title: 'Mammoth Cave Historic Tour',
            description: 'Two-hour guided tour through the historic entrance and main passages. Learn about cave formation and human history.',
            proTip: 'Cave temperature is constant 54°F - perfect in any season!',
            image: '[Photo: Historic entrance to Mammoth Cave]'
          },
          {
            time: '1:30 PM - 4:00 PM',
            title: 'Green River Nature Walk',
            description: 'Easy walk along the Green River with opportunities to see wildlife and learn about the surface ecosystem.',
            wildlifeWatch: 'River otters, various birds, and fall foliage reflections.',
            image: '[Photo: Green River with autumn reflections]'
          }
        ],
        accommodations: {
          title: 'Day 1 Accommodations',
          description: 'Stay near Mammoth Cave:',
          options: [
            { name: 'Mammoth Cave Hotel' },
            { name: 'Cave Country Lodging' },
            { name: 'Camping Options' }
          ]
        },
        tips: [
          'Reserve cave tours well in advance',
          'Wear sturdy shoes with good traction for cave tours',
          'Bring layers - cave is cool but surface varies',
          'Historic Tour is 2+ hours - use restroom first'
        ]
      },
      {
        dayNumber: 2,
        title: 'Advanced Cave Tours & Surface Trails',
        subtitle: 'Specialized cave experiences and hiking',
        activities: [
          {
            time: '9:00 AM - 11:30 AM',
            title: 'Frozen Niagara Tour',
            description: 'Shorter tour focusing on the cave\'s most beautiful formations including flowstone, stalactites, and stalagmites.',
            photographyTip: 'Bring camera - formations are spectacular (flash allowed).',
            image: '[Photo: Frozen Niagara cave formations]'
          },
          {
            time: '1:00 PM - 3:30 PM',
            title: 'Cedar Sink Trail',
            description: 'Moderate surface hike to a large sinkhole with 60-foot cliffs. Demonstrates the karst landscape above the caves.',
            difficulty: 'Moderate - 3 miles round trip.',
            image: '[Photo: Cedar Sink with fall foliage]'
          },
          {
            time: '4:00 PM - 5:00 PM',
            title: 'Sand Cave Trail',
            description: 'Easy walk to a small cave entrance where Floyd Collins was trapped in 1925, sparking national attention.',
            wildlifeWatch: 'Cave-adapted species and forest wildlife.',
            image: '[Photo: Sand Cave entrance and memorial]'
          }
        ],
        tips: [
          'Frozen Niagara Tour is easier than Historic Tour',
          'Surface trails can be muddy in wet weather',
          'Carry water for surface hiking',
          'Multiple cave tours in one day can be tiring'
        ]
      },
      {
        dayNumber: 3,
        title: 'Extended Cave Adventure or Surface Exploration',
        subtitle: 'Wild Cave Tour or extensive surface activities',
        activities: [
          {
            time: '9:00 AM - 1:00 PM',
            title: 'Wild Cave Tour (Advanced Option)',
            description: 'Challenging 6-hour crawling and climbing adventure through undeveloped cave passages. Must be physically fit.',
            seasonalNote: 'Limited availability - book far in advance.',
            image: '[Photo: Wild Cave Tour participants crawling]'
          },
          {
            time: 'Alternative: 9:00 AM - 12:00 PM',
            title: 'Big Woods Trail System',
            description: 'For those skipping Wild Cave Tour: extensive hiking through old-growth forest and along ridge tops.',
            proTip: 'Fall colors and peaceful winter hiking without crowds.',
            image: '[Photo: Big Woods Trail in autumn]'
          },
          {
            time: '2:00 PM - 4:00 PM',
            title: 'Nolin River or Green River Activities',
            description: 'Seasonal fishing, canoeing, or riverside relaxation depending on weather and water conditions.',
            wildlifeWatch: 'Excellent bird watching and possible wildlife sightings.',
            image: '[Photo: Nolin River peaceful scene]'
          }
        ],
        tips: [
          'Wild Cave Tour requires reservation and fitness assessment',
          'Surface alternatives equally rewarding',
          'River activities depend on seasonal conditions',
          'This can be a half-day if doing Wild Cave Tour'
        ]
      }
    ]
  },

  'cuyahoga-valley': {
    title: '2-3 Day Cuyahoga Valley National Park Itinerary',
    subtitle: 'Complete off-season guide for October, November, March, April',
    description: 'Experience Ohio\'s only national park during the ideal off-season months. This itinerary covers the Ohio & Erie Canal Towpath Trail, scenic railroad, and urban park features.',
    totalDays: 3,
    bestMonths: ['October', 'November', 'March', 'April'],
    days: [
      {
        dayNumber: 1,
        title: 'Towpath Trail & Canal Exploration',
        subtitle: 'Historic canal trail and visitor center orientation',
        activities: [
          {
            time: '9:00 AM - 10:30 AM',
            title: 'Canal Exploration Center',
            description: 'Start at the Canal Exploration Center in Valley View to learn about the Ohio & Erie Canal history and rent bikes if desired.',
            offSeasonAdvantage: 'Personal ranger talks and bike rental availability!',
            image: '[Photo: Canal Exploration Center with towpath]'
          },
          {
            time: '11:00 AM - 1:00 PM',
            title: 'Ohio & Erie Canal Towpath Trail',
            description: 'Bike or walk a section of the 20-mile towpath trail through the park. Peaceful and flat with beautiful Cuyahoga River views.',
            proTip: 'Perfect fall colors reflected in canal waters!',
            image: '[Photo: Towpath Trail with fall foliage]'
          },
          {
            time: '2:00 PM - 4:00 PM',
            title: 'Lock 29 and Boston Store',
            description: 'Visit restored canal lock and historic Boston Store. Experience how the canal operated in the 1800s.',
            wildlifeWatch: 'Great blue herons and beavers frequent canal areas.',
            image: '[Photo: Historic canal lock with demonstration]'
          }
        ],
        accommodations: {
          title: 'Day 1 Accommodations',
          description: 'Stay in nearby Cleveland or Akron areas:',
          options: [
            { name: 'Peninsula Hotels' },
            { name: 'Cleveland Airport Area' },
            { name: 'Stanford Campsites' }
          ]
        },
        tips: [
          'Towpath is perfect for families and all fitness levels',
          'Bike rentals available at multiple locations',
          'Fall foliage peaks in mid-October',
          'Download towpath trail app for self-guided tours'
        ]
      },
      {
        dayNumber: 2,
        title: 'Scenic Railroad & Ledges Trail',
        subtitle: 'Historic train ride and famous rock formations',
        activities: [
          {
            time: '10:00 AM - 12:00 PM',
            title: 'Cuyahoga Valley Scenic Railroad',
            description: 'Take the scenic railroad through the park. Fall foliage excursions and themed rides available during off-season.',
            photographyTip: 'Train windows offer unique perspective of valley views.',
            image: '[Photo: Scenic railroad train in autumn valley]'
          },
          {
            time: '1:00 PM - 3:30 PM',
            title: 'Ledges Trail',
            description: 'Moderate 2.2-mile hike through unique rock ledges and hemlock forests. Most popular trail in the park.',
            difficulty: 'Moderate - some steep sections and rock scrambling.',
            image: '[Photo: Ledges Trail rock formations with hikers]'
          },
          {
            time: '4:00 PM - 5:30 PM',
            title: 'Everett Covered Bridge',
            description: 'Visit the historic covered bridge and explore the surrounding area. Great for photography and peaceful walks.',
            wildlifeWatch: 'White-tailed deer and various bird species.',
            image: '[Photo: Everett Covered Bridge in fall colors]'
          }
        ],
        tips: [
          'Railroad reservations recommended during fall foliage season',
          'Ledges Trail can be slippery when wet',
          'Wear sturdy shoes for rock formations',
          'Covered bridge area has picnic facilities'
        ]
      },
      {
        dayNumber: 3,
        title: 'Waterfalls & Wildlife Areas',
        subtitle: 'Brandywine Falls and Beaver Marsh boardwalk',
        activities: [
          {
            time: '9:00 AM - 11:00 AM',
            title: 'Brandywine Falls',
            description: '60-foot waterfall accessible via easy 1.5-mile trail. Most photographed spot in the park.',
            seasonalNote: 'Spring snowmelt increases water flow dramatically.',
            image: '[Photo: Brandywine Falls with mist and surrounding forest]'
          },
          {
            time: '12:00 PM - 2:00 PM',
            title: 'Beaver Marsh Boardwalk',
            description: 'Easy accessible boardwalk through restored wetlands. Excellent bird watching and peaceful nature experience.',
            proTip: 'Early morning and evening best for wildlife viewing.',
            image: '[Photo: Beaver Marsh boardwalk with wetland views]'
          },
          {
            time: '2:30 PM - 4:00 PM',
            title: 'Hale Farm & Village',
            description: 'Optional visit to living history museum showcasing 1800s farm life. Connected to park\'s agricultural heritage.',
            wildlifeWatch: 'Historic breeds of farm animals and traditional farming.',
            image: '[Photo: Historic farm buildings at Hale Farm]'
          }
        ],
        tips: [
          'Brandywine Falls trail suitable for most ages',
          'Beaver Marsh has restroom facilities',
          'Hale Farm requires separate admission',
          'Perfect area for family-friendly activities'
        ]
      }
    ]
  },

  'new-river-gorge': {
    title: '3-4 Day New River Gorge National Park Itinerary',
    subtitle: 'Complete off-season guide for October, November, March, April',
    description: 'Explore America\'s newest national park during the ideal off-season months. This itinerary covers world-class rock climbing, whitewater rafting, and dramatic gorge overlooks.',
    totalDays: 4,
    bestMonths: ['October', 'November', 'March', 'April'],
    days: [
      {
        dayNumber: 1,
        title: 'New River Gorge Bridge & Visitor Center',
        subtitle: 'Iconic bridge views and park orientation',
        activities: [
          {
            time: '9:00 AM - 10:30 AM',
            title: 'Canyon Rim Visitor Center',
            description: 'Start at the Canyon Rim Visitor Center near the New River Gorge Bridge. Learn about climbing, rafting, and cultural history.',
            offSeasonAdvantage: 'Personal ranger consultations and uncrowded exhibits!',
            image: '[Photo: Canyon Rim Visitor Center with bridge view]'
          },
          {
            time: '11:00 AM - 1:00 PM',
            title: 'New River Gorge Bridge Views',
            description: 'Multiple viewpoints of the 876-foot high bridge. Walk the Catwalk beneath the bridge for unique perspective.',
            photographyTip: 'Morning light illuminates the gorge beautifully from bridge overlooks.',
            image: '[Photo: New River Gorge Bridge from multiple angles]'
          },
          {
            time: '2:00 PM - 4:30 PM',
            title: 'Long Point Trail',
            description: 'Moderate 3.2-mile hike to the most famous overlook in the park. Spectacular views of the New River and gorge.',
            difficulty: 'Moderate - well-maintained trail with some elevation.',
            image: '[Photo: Long Point overlook with New River far below]'
          }
        ],
        accommodations: {
          title: 'Day 1 Accommodations',
          description: 'Stay in Fayetteville or surrounding areas:',
          options: [
            { name: 'Historic Fayetteville B&Bs' },
            { name: 'Adventure Lodges' },
            { name: 'Camping at Babcock State Park' }
          ]
        },
        tips: [
          'Long Point Trail very popular - start early',
          'Bridge area can be very windy',
          'Fayetteville has climbing outfitters and restaurants',
          'Check weather - mountain conditions change quickly'
        ]
      },
      {
        dayNumber: 2,
        title: 'Rock Climbing & Adventure Activities',
        subtitle: 'World-class climbing or guided adventure tours',
        activities: [
          {
            time: '8:00 AM - 12:00 PM',
            title: 'Guided Rock Climbing (Beginners)',
            description: 'Join local outfitters for guided climbing on world-famous Nuttall Sandstone. Perfect off-season temperatures.',
            seasonalNote: 'Cooler temperatures ideal for climbing - no summer heat stress.',
            image: '[Photo: Rock climbers on sandstone cliffs]'
          },
          {
            time: 'Alternative: 9:00 AM - 1:00 PM',
            title: 'Endless Wall Trail',
            description: 'For non-climbers: 2.4-mile hike along cliff tops with multiple climbing area overlooks and Diamond Point view.',
            proTip: 'Watch climbers from above while enjoying spectacular views.',
            image: '[Photo: Endless Wall Trail overlooking climbing areas]'
          },
          {
            time: '2:00 PM - 5:00 PM',
            title: 'Grandview Area',
            description: 'Visit historic Grandview area with overlooks, visitor center, and trails. Former separate park now part of New River Gorge.',
            wildlifeWatch: 'Excellent hawk migration viewing in fall months.',
            image: '[Photo: Grandview overlook in autumn]'
          }
        ],
        tips: [
          'Book guided climbing in advance',
          'Endless Wall has multiple trail access points',
          'Grandview area less crowded than main gorge',
          'Perfect weather for outdoor activities'
        ]
      },
      {
        dayNumber: 3,
        title: 'Whitewater Rafting & River Access',
        subtitle: 'New River adventures and lower gorge exploration',
        activities: [
          {
            time: '9:00 AM - 3:00 PM',
            title: 'Whitewater Rafting (Seasonal)',
            description: 'Full-day or half-day rafting trip on the New River. Class I-V rapids available depending on experience level.',
            difficulty: 'Varies - from family-friendly to expert level rapids.',
            image: '[Photo: Whitewater rafting through gorge]'
          },
          {
            time: 'Alternative: 10:00 AM - 2:00 PM',
            title: 'Sandstone Falls Boardwalk',
            description: 'If not rafting: easy boardwalk to impressive sandstone falls and river access. Great for photography.',
            wildlifeWatch: 'Fish jumping at falls, various water birds.',
            image: '[Photo: Sandstone Falls with wide river view]'
          },
          {
            time: '4:00 PM - 6:00 PM',
            title: 'Thurmond Historic District',
            description: 'Explore the ghost town of Thurmond, former bustling railroad town. Visitor center and preserved buildings.',
            wildlifeWatch: 'Historic railroad depot and interesting local history.',
            image: '[Photo: Thurmond depot and historic buildings]'
          }
        ],
        tips: [
          'Rafting companies operate spring through fall',
          'Water temperatures cool in off-season - dress accordingly',
          'Sandstone Falls accessible year-round',
          'Thurmond requires short drive from main gorge area'
        ]
      },
      {
        dayNumber: 4,
        title: 'Babcock State Park & Glade Creek',
        subtitle: 'Grist mill photography and peaceful mountain streams',
        activities: [
          {
            time: '9:00 AM - 12:00 PM',
            title: 'Glade Creek Grist Mill',
            description: 'Visit the famous reconstructed grist mill at Babcock State Park. Most photographed site in West Virginia.',
            photographyTip: 'Fall foliage around the mill is absolutely spectacular.',
            image: '[Photo: Glade Creek Grist Mill with autumn colors]'
          },
          {
            time: '1:00 PM - 3:30 PM',
            title: 'Skyline Trail or Island-in-Sky',
            description: 'Moderate hiking trails with overlooks of the New River Valley and surrounding mountains.',
            seasonalNote: 'Perfect hiking weather and fewer crowds than summer.',
            image: '[Photo: Mountain overlook from Babcock State Park]'
          },
          {
            time: '4:00 PM - 5:30 PM',
            title: 'Reflection and Departure',
            description: 'Final views of the New River Gorge and reflection on this incredible adventure landscape.',
            reflection: 'Consider how this area transitioned from industrial to recreational use.',
            image: '[Photo: Peaceful New River reflection at sunset]'
          }
        ],
        tips: [
          'Grist mill requires separate Babcock State Park admission',
          'Fall colors peak in mid-October',
          'Trails can be muddy after rain',
          'Perfect ending to New River Gorge adventure'
        ]
      }
    ]
  },

  'shenandoah': {
    title: '3-4 Day Shenandoah National Park Itinerary',
    subtitle: 'Complete off-season guide for October, November, March, April',
    description: 'Experience Virginia\'s Blue Ridge Mountains during the ideal off-season months. This itinerary covers Skyline Drive, waterfalls, and mountain overlooks.',
    totalDays: 4,
    bestMonths: ['October', 'November', 'March', 'April'],
    days: [
      {
        dayNumber: 1,
        title: 'Skyline Drive North Section',
        subtitle: 'Front Royal entrance to Skyland area',
        activities: [
          {
            time: '9:00 AM - 10:00 AM',
            title: 'Dickey Ridge Visitor Center',
            description: 'Start at the Front Royal entrance and visit Dickey Ridge Visitor Center for park orientation and Skyline Drive planning.',
            offSeasonAdvantage: 'Personal ranger consultations and no traffic delays!',
            image: '[Photo: Dickey Ridge Visitor Center with mountain views]'
          },
          {
            time: '10:30 AM - 12:30 PM',
            title: 'Skyline Drive to Marys Rock',
            description: 'Scenic drive with stop at Marys Rock overlook. 1.7-mile hike to panoramic views of Shenandoah Valley.',
            photographyTip: 'Fall foliage views from Marys Rock are breathtaking!',
            image: '[Photo: Shenandoah Valley view from Marys Rock]'
          },
          {
            time: '1:30 PM - 4:00 PM',
            title: 'Skyland Resort Area',
            description: 'Visit historic Skyland Resort area with multiple overlooks and short trail options. Highest point on Skyline Drive.',
            wildlifeWatch: 'Excellent area for deer and black bear sightings.',
            image: '[Photo: Skyland area overlooks with Blue Ridge views]'
          }
        ],
        accommodations: {
          title: 'Day 1 Accommodations',
          description: 'Stay at Skyland or nearby Luray:',
          options: [
            { name: 'Skyland Resort (in-park)' },
            { name: 'Luray Caverns Area Hotels' },
            { name: 'Big Meadows Campground' }
          ]
        },
        tips: [
          'Marys Rock hike moderate but rewarding',
          'Skyland Resort may have limited off-season services',
          'Fall foliage peaks in mid-October',
          'Download Skyline Drive app for overlook information'
        ]
      },
      {
        dayNumber: 2,
        title: 'Central Shenandoah Waterfalls',
        subtitle: 'Dark Hollow Falls and Whiteoak Canyon',
        activities: [
          {
            time: '8:00 AM - 10:30 AM',
            title: 'Dark Hollow Falls Trail',
            description: 'Popular 1.4-mile round trip hike to 70-foot waterfall. Most crowded waterfall trail but stunning results.',
            difficulty: 'Moderate - steep descent, rocky trail.',
            image: '[Photo: Dark Hollow Falls cascading over rocks]'
          },
          {
            time: '11:30 AM - 2:30 PM',
            title: 'Whiteoak Canyon Falls',
            description: 'More challenging 5.2-mile hike to series of waterfalls. Six waterfalls total with the upper falls being 86 feet.',
            proTip: 'Spring snowmelt creates most impressive water flow.',
            image: '[Photo: Whiteoak Canyon upper falls]'
          },
          {
            time: '3:30 PM - 5:30 PM',
            title: 'Byrd Visitor Center Area',
            description: 'Visit Harry F. Byrd Visitor Center and explore Big Meadows area. Easy walks and wildlife viewing.',
            wildlifeWatch: 'Big Meadows excellent for deer at dawn and dusk.',
            image: '[Photo: Big Meadows with grazing deer]'
          }
        ],
        tips: [
          'Start Dark Hollow Falls very early to avoid crowds',
          'Whiteoak Canyon is strenuous - assess fitness level',
          'Waterfall trails can be very slippery when wet',
          'Big Meadows has restrooms and picnic facilities'
        ]
      },
      {
        dayNumber: 3,
        title: 'Southern Skyline Drive',
        subtitle: 'Swift Run Gap to Rockfish Gap',
        activities: [
          {
            time: '9:00 AM - 11:00 AM',
            title: 'Humpback Rocks Trail',
            description: 'Moderate 2-mile hike to spectacular rock outcropping with 360-degree views. One of the best vistas in the park.',
            photographyTip: 'Perfect spot for sunrise or sunset photography.',
            image: '[Photo: Humpback Rocks overlook panoramic view]'
          },
          {
            time: '12:00 PM - 2:00 PM',
            title: 'Craggy Pinnacle or Bearfence Rock',
            description: 'Choose between two excellent short hikes to rock scrambling destinations with outstanding views.',
            seasonalNote: 'Both offer excellent fall foliage viewing opportunities.',
            image: '[Photo: Rock scrambling with mountain vistas]'
          },
          {
            time: '3:00 PM - 5:00 PM',
            title: 'Loft Mountain Area',
            description: 'Visit Loft Mountain area with campground, overlooks, and easy walking trails. Less crowded southern section.',
            wildlifeWatch: 'Excellent bird watching and peaceful mountain environment.',
            image: '[Photo: Loft Mountain overlook with valley views]'
          }
        ],
        tips: [
          'Humpback Rocks very popular - start early',
          'Rock scrambling requires good balance and caution',
          'Southern section generally less crowded',
          'Loft Mountain good for peaceful reflection'
        ]
      },
      {
        dayNumber: 4,
        title: 'Old Rag Mountain or Relaxation Day',
        subtitle: 'Challenge hike or easy exploration options',
        activities: [
          {
            time: '7:00 AM - 3:00 PM',
            title: 'Old Rag Mountain (Advanced Option)',
            description: 'Strenuous 9-mile circuit hike with rock scrambling to Shenandoah\'s most famous peak. Advance reservations required.',
            difficulty: 'Very Strenuous - rock scrambling, long hike.',
            image: '[Photo: Old Rag Mountain rock scramble section]'
          },
          {
            time: 'Alternative: 9:00 AM - 12:00 PM',
            title: 'Limberlost Trail',
            description: 'Easy 1.3-mile accessible trail through hemlock forest. Perfect for families or relaxing mountain walk.',
            proTip: 'Peaceful alternative with interpretive exhibits.',
            image: '[Photo: Limberlost Trail boardwalk through forest]'
          },
          {
            time: '1:00 PM - 3:00 PM',
            title: 'Luray Caverns (Optional)',
            description: 'Visit famous Luray Caverns outside the park. Beautiful underground formations and interesting geology.',
            wildlifeWatch: 'Underground formations and cave ecosystem.',
            image: '[Photo: Luray Caverns formations]'
          },
          {
            time: '4:00 PM - 5:00 PM',
            title: 'Final Skyline Drive Views',
            description: 'Return to favorite overlooks for final mountain photography and reflection on Shenandoah experience.',
            reflection: 'Consider the conservation success that created this park.',
            image: '[Photo: Final Blue Ridge Mountain sunset view]'
          }
        ],
        tips: [
          'Old Rag requires advance reservations and parking passes',
          'Limberlost perfect for less strenuous day',
          'Luray Caverns requires separate admission',
          'Plan departure timing for traffic considerations'
        ]
      }
    ]
  },

  'saguaro': {
    title: '2-3 Day Saguaro National Park Itinerary',
    subtitle: 'Complete off-season guide for November, December, January, February',
    description: 'Explore Arizona\'s iconic Sonoran Desert during perfect winter weather. This itinerary covers both park districts, desert wildlife viewing, and scenic hiking trails with comfortable temperatures.',
    totalDays: 3,
    bestMonths: ['November', 'December', 'January', 'February'],
    days: [
      {
        dayNumber: 1,
        title: 'Saguaro East (Rincon Mountain District)',
        subtitle: 'Desert Discovery Trail and Cactus Forest Drive',
        activities: [
          {
            time: '8:00 AM - 9:30 AM',
            title: 'Visitor Center Orientation',
            description: 'Start at the visitor center to learn about Sonoran Desert ecology and saguaro cactus life cycles. Watch the orientation film and get trail maps.',
            offSeasonAdvantage: 'Cooler morning temperatures perfect for hiking preparation!',
            image: '[Photo: Saguaro East Visitor Center with desert backdrop]'
          },
          {
            time: '9:30 AM - 11:30 AM',
            title: 'Desert Discovery Trail',
            description: '0.5-mile paved nature trail showcasing desert plants and wildlife. Perfect introduction to Sonoran Desert ecosystem with interpretive signs.',
            proTip: 'Early morning is best for wildlife viewing - look for javelinas and desert birds!',
            image: '[Photo: Family on Desert Discovery Trail with saguaros]'
          },
          {
            time: '12:00 PM - 2:30 PM',
            title: 'Cactus Forest Drive',
            description: '8-mile scenic loop drive through dense saguaro forest. Stop at pullouts for photography and short walks among towering cacti.',
            wildlifeWatch: 'Watch for Gila monsters, desert tortoises, and various bird species.',
            image: '[Photo: Scenic drive through towering saguaro cacti]'
          },
          {
            time: '3:00 PM - 5:00 PM',
            title: 'Freeman Homestead Trail',
            description: 'Easy 1-mile round-trip hike to historic ranch site. Learn about desert homesteading while enjoying saguaro forest views.',
            historicalNote: 'Explore remnants of 1930s desert ranch life.',
            image: '[Photo: Historic Freeman Homestead ruins among saguaros]'
          }
        ],
        accommodations: {
          title: 'Day 1 Accommodations',
          description: 'Stay in Tucson for easy access to both park districts:',
          options: [
            { name: 'Arizona Inn', type: 'Historic luxury', bookingLink: '#' },
            { name: 'Hotel Congress', type: 'Downtown historic', bookingLink: '#' },
            { name: 'Desert Diamond Casino Hotel', type: 'Mid-range casino', bookingLink: '#' }
          ]
        },
        tips: [
          'Start early (by 8 AM) to avoid midday heat even in winter',
          'Bring layers - morning can be 40°F cooler than afternoon',
          'Pack extra water - desert air is very dehydrating',
          'Wear sturdy shoes and watch for cholla cactus'
        ]
      },
      {
        dayNumber: 2,
        title: 'Saguaro West (Tucson Mountain District)',
        subtitle: 'Valley View Trail and Bajada Loop Drive',
        activities: [
          {
            time: '7:30 AM - 9:00 AM',
            title: 'Sunrise at Gates Pass',
            description: 'Drive to Gates Pass for spectacular sunrise views over the Tucson Mountains and saguaro-dotted valleys below.',
            photographyTip: 'Golden hour lighting makes saguaros glow - bring your camera!',
            image: '[Photo: Sunrise over Tucson Mountains and saguaro forest]'
          },
          {
            time: '9:30 AM - 11:30 AM',
            title: 'Valley View Overlook Trail',
            description: '0.8-mile easy trail to panoramic viewpoint overlooking the entire Avra Valley and distant mountains.',
            accessibility: 'Relatively easy grade suitable for most fitness levels.',
            image: '[Photo: Panoramic valley view from overlook trail]'
          },
          {
            time: '12:00 PM - 2:00 PM',
            title: 'Bajada Loop Drive',
            description: '6-mile gravel road (accessible to most vehicles) through diverse desert landscapes with numerous hiking trail access points.',
            drivingTip: 'Take your time - road is gravel but passable in regular cars.',
            image: '[Photo: Gravel road winding through saguaro forest]'
          },
          {
            time: '2:30 PM - 4:30 PM',
            title: 'Desert Discovery Trail (West)',
            description: '0.5-mile paved interpretive trail highlighting different desert plants and their adaptations. Great for all ages.',
            educationalFocus: 'Learn about desert plant survival strategies.',
            image: '[Photo: Interpretive signs along desert trail]'
          }
        ],
        tips: [
          'Gates Pass sunrise requires early departure (7 AM) but worth it',
          'Bajada Loop is gravel - drive slowly and watch for wildlife',
          'Afternoon temperatures can reach 75°F even in winter',
          'Both districts offer different perspectives of Sonoran Desert'
        ]
      },
      {
        dayNumber: 3,
        title: 'Advanced Hiking and Tucson Exploration',
        subtitle: 'Douglas Spring Trail and Tucson Cultural Sites',
        activities: [
          {
            time: '8:00 AM - 12:00 PM',
            title: 'Douglas Spring Trail (Partial)',
            description: 'Hike 2-4 miles of this challenging trail that leads into the Rincon Wilderness. Turn around based on comfort and time.',
            difficulty: 'Moderate to strenuous - choose your distance wisely.',
            image: '[Photo: Hikers on Douglas Spring Trail with mountain views]'
          },
          {
            time: '1:00 PM - 3:00 PM',
            title: 'Arizona-Sonora Desert Museum',
            description: 'World-renowned desert museum combining zoo, botanical garden, and natural history museum. Perfect complement to park visit.',
            admission: 'Separate admission required - book online for discounts.',
            image: '[Photo: Desert Museum exhibits and live animal displays]'
          },
          {
            time: '3:30 PM - 5:00 PM',
            title: 'Tucson Mountain Park',
            description: 'Explore additional hiking trails and scenic drives in this Pima County park adjacent to Saguaro West.',
            parkingNote: 'Free alternative to national park with similar desert scenery.',
            image: '[Photo: Additional saguaro forest trails in Tucson Mountain Park]'
          }
        ],
        tips: [
          'Douglas Spring Trail gets steep quickly - know your limits',
          'Desert Museum is expensive but educational and worthwhile',
          'Afternoon wind can pick up - secure loose items',
          'Consider visiting Old Tucson Studios for Western movie history'
        ]
      }
    ]
  },

  'petrified-forest': {
    title: '1-2 Day Petrified Forest National Park Itinerary',
    subtitle: 'Complete off-season guide for November, December, January, February',
    description: 'Discover 225-million-year-old petrified logs and colorful badlands during comfortable winter weather. This itinerary covers the scenic drive, major fossil sites, and Painted Desert viewpoints.',
    totalDays: 2,
    bestMonths: ['November', 'December', 'January', 'February'],
    days: [
      {
        dayNumber: 1,
        title: 'Southern Section - Rainbow Forest',
        subtitle: 'Visitor Center, Giant Logs, and Crystal Forest',
        activities: [
          {
            time: '9:00 AM - 10:00 AM',
            title: 'Rainbow Forest Museum',
            description: 'Start at the south entrance visitor center to learn about petrification process and see fossil exhibits. Watch the orientation film.',
            offSeasonAdvantage: 'No crowds at exhibits - take your time learning!',
            image: '[Photo: Rainbow Forest Museum exterior with petrified log display]'
          },
          {
            time: '10:00 AM - 11:30 AM',
            title: 'Giant Logs Trail',
            description: '0.4-mile paved loop trail featuring some of the largest petrified logs in the park, including "Old Faithful" log.',
            accessibilityNote: 'Fully accessible paved trail suitable for all visitors.',
            image: '[Photo: Massive "Old Faithful" petrified log up close]'
          },
          {
            time: '12:00 PM - 1:30 PM',
            title: 'Crystal Forest Trail',
            description: '0.75-mile loop trail through area once rich in crystal-filled logs. Many specimens were collected before park protection.',
            historicalContext: 'Learn about early fossil collecting and park establishment.',
            image: '[Photo: Colorful petrified wood fragments scattered on desert floor]'
          },
          {
            time: '2:00 PM - 3:30 PM',
            title: 'Long Logs Trail',
            description: '1.6-mile loop showcasing some of the longest petrified logs, up to 170 feet in original length.',
            photographyTip: 'Afternoon light brings out the colors in petrified wood.',
            image: '[Photo: Long petrified logs stretching across badlands]'
          },
          {
            time: '4:00 PM - 5:00 PM',
            title: 'Agate House',
            description: '2-mile round-trip hike to 900-year-old Ancestral Puebloan structure built from petrified wood blocks.',
            culturalSignificance: 'See how ancient peoples used petrified wood for construction.',
            image: '[Photo: Ancient pueblo structure made of petrified wood blocks]'
          }
        ],
        accommodations: {
          title: 'Day 1 Accommodations',
          description: 'Stay in nearby gateway communities:',
          options: [
            { name: 'Holbrook Best Western', type: 'Chain hotel', bookingLink: '#' },
            { name: 'Historic Wigwam Motel', type: 'Route 66 nostalgia', bookingLink: '#' },
            { name: 'Homolovi State Park Camping', type: 'Desert camping', bookingLink: '#' }
          ]
        },
        tips: [
          'Start at south entrance (Rainbow Forest) for better orientation',
          'Wear warm layers - winter mornings can be very cold',
          'Bring plenty of water even though temperatures are moderate',
          'Never collect petrified wood - hefty fines and federal charges'
        ]
      },
      {
        dayNumber: 2,
        title: 'Northern Section - Painted Desert',
        subtitle: 'Blue Mesa, Newspaper Rock, and Painted Desert Overlooks',
        activities: [
          {
            time: '8:00 AM - 9:30 AM',
            title: 'Painted Desert Visitor Center',
            description: 'Begin at north entrance with exhibits about badlands geology and cultural history. Get oriented for scenic drive.',
            winterNote: 'Check for any weather-related closures before starting drive.',
            image: '[Photo: Painted Desert Visitor Center with colorful badlands backdrop]'
          },
          {
            time: '9:30 AM - 11:00 AM',
            title: 'Painted Desert Overlooks',
            description: 'Stop at Tataahoysa, Kachina, Chinde, and Pintado points for spectacular badlands views. Each offers different perspectives.',
            viewingTip: 'Winter light enhances the colors - reds, purples, and oranges.',
            image: '[Photo: Expansive Painted Desert badlands from Kachina Point]'
          },
          {
            time: '11:30 AM - 1:00 PM',
            title: 'Blue Mesa Trail',
            description: '1-mile loop trail descending into colorful badlands. Moderate difficulty with steep sections and loose footing.',
            difficulty: 'Use caution on steep, potentially icy sections in winter.',
            image: '[Photo: Hikers walking through blue and purple badland formations]'
          },
          {
            time: '1:30 PM - 2:30 PM',
            title: 'Newspaper Rock Petroglyph Site',
            description: 'View ancient petroglyphs from overlook (rock art is distant). Use binoculars or telephoto lens for best viewing.',
            culturalRespect: 'Observe from designated viewpoint only - no climbing on rocks.',
            image: '[Photo: Distant view of petroglyph rock with desert landscape]'
          },
          {
            time: '3:00 PM - 4:30 PM',
            title: 'Puerco Pueblo and Petroglyphs',
            description: '0.3-mile trail through 600-year-old pueblo ruins with over 650 petroglyphs along the nearby cliffs.',
            archaeologicalSite: 'Most accessible petroglyph site in the park.',
            image: '[Photo: Ancient pueblo ruins with petroglyph panels nearby]'
          }
        ],
        tips: [
          'Drive the full 28-mile park road from north to south',
          'Blue Mesa can be icy in winter - wear appropriate footwear',
          'Bring binoculars for distant petroglyph viewing',
          'Plan extra time - winter weather can slow travel'
        ]
      }
    ]
  },

  'north-cascades': {
    title: '3-4 Day North Cascades National Park Itinerary',
    subtitle: 'Complete off-season guide for September, October, April, May',
    description: 'Explore America\'s Alps during spectacular shoulder seasons. This itinerary covers scenic drives, alpine lakes, mountain peaks, and dramatic landscapes while avoiding summer crowds.',
    totalDays: 4,
    bestMonths: ['September', 'October', 'April', 'May'],
    days: [
      {
        dayNumber: 1,
        title: 'North Cascades Highway - Scenic Drive',
        subtitle: 'Washington Pass, Diablo Lake, and Ross Lake',
        activities: [
          {
            time: '8:00 AM - 9:30 AM',
            title: 'North Cascades Visitor Center',
            description: 'Start in Newhalem at the visitor center to learn about park geology and get current road conditions. Watch the orientation film about the park\'s ecosystem.',
            offSeasonAdvantage: 'No parking issues and personalized ranger interactions!',
            image: '[Photo: North Cascades Visitor Center with mountain backdrop]'
          },
          {
            time: '9:30 AM - 11:30 AM',
            title: 'Diablo Lake Overlook',
            description: 'Drive to the famous turquoise lake overlook. The glacial flour creates the stunning blue-green color that makes this one of the most photographed spots in Washington.',
            proTip: 'Morning light enhances the lake\'s incredible turquoise color!',
            image: '[Photo: Diablo Lake\'s turquoise waters from overlook]'
          },
          {
            time: '12:00 PM - 2:00 PM',
            title: 'Washington Pass Overlook',
            description: 'Drive to Washington Pass (5,477 ft) for spectacular views of Liberty Bell Mountain and Early Winters Spires. One of the most dramatic viewpoints in the Cascades.',
            elevationNote: 'Check for snow conditions - pass may be closed in off-season.',
            image: '[Photo: Liberty Bell Mountain from Washington Pass]'
          },
          {
            time: '2:30 PM - 4:30 PM',
            title: 'Ross Lake Trail (Easy Section)',
            description: 'Hike 1-2 miles of the Ross Lake Trail for peaceful lake views and old-growth forest. Turn around based on conditions and time.',
            difficulty: 'Easy to moderate depending on distance chosen.',
            image: '[Photo: Ross Lake surrounded by towering peaks]'
          }
        ],
        accommodations: {
          title: 'Day 1 Accommodations',
          description: 'Stay in nearby gateway communities:',
          options: [
            { name: 'Sun Mountain Lodge (Winthrop)', type: 'Luxury mountain resort', bookingLink: '#' },
            { name: 'Winthrop Palace Hotel', type: 'Historic western town', bookingLink: '#' },
            { name: 'Colonial Creek Campground', type: 'National park camping', bookingLink: '#' }
          ]
        },
        tips: [
          'Check Highway 20 closure status before departure',
          'Bring layers - mountain weather changes rapidly',
          'Start early to maximize daylight hours',
          'Fuel up in Winthrop or Marblemount - limited services in park'
        ]
      },
      {
        dayNumber: 2,
        title: 'Alpine Lakes and Waterfalls',
        subtitle: 'Blue Lake, Rainy Lake, and Thunder Creek',
        activities: [
          {
            time: '8:00 AM - 10:30 AM',
            title: 'Blue Lake Trail',
            description: '4.4-mile round-trip hike to pristine alpine lake surrounded by towering peaks. Moderate difficulty with steady elevation gain.',
            difficulty: 'Moderate - 1,000 feet elevation gain over 2.2 miles.',
            image: '[Photo: Blue Lake reflecting surrounding mountain peaks]'
          },
          {
            time: '11:00 AM - 12:30 PM',
            title: 'Rainy Lake Trail',
            description: '1.8-mile round-trip easy hike to beautiful alpine lake and waterfall. Paved trail suitable for most fitness levels.',
            accessibility: 'Nearly flat, paved trail - great for families.',
            image: '[Photo: Rainy Lake with waterfall cascading down granite cliffs]'
          },
          {
            time: '1:30 PM - 4:00 PM',
            title: 'Thunder Creek Trail',
            description: 'Hike 2-4 miles of this valley trail through old-growth forest along Thunder Creek. Distance depends on conditions and energy.',
            wildlifeWatch: 'Excellent area for spotting black bears and mountain goats.',
            image: '[Photo: Thunder Creek flowing through ancient forest]'
          }
        ],
        tips: [
          'Start with Blue Lake for best morning light',
          'Rainy Lake is perfect if weather turns bad',
          'Thunder Creek offers great wildlife viewing opportunities',
          'Carry bear spray - active bear habitat'
        ]
      },
      {
        dayNumber: 3,
        title: 'Cascade Pass and Sahale Arm',
        subtitle: 'Classic North Cascades High Country',
        activities: [
          {
            time: '7:00 AM - 11:00 AM',
            title: 'Cascade Pass Trail',
            description: '7.4-mile round-trip hike to historic mountain pass with 360-degree views. Moderate difficulty through subalpine meadows.',
            historicalNote: 'Native American trading route and early settler passage.',
            image: '[Photo: Cascade Pass with Johannesburg Mountain backdrop]'
          },
          {
            time: '11:00 AM - 1:00 PM',
            title: 'Sahale Arm Extension (Optional)',
            description: 'Advanced hikers can continue 1.5 miles to Sahale Arm for even more spectacular mountain views. Strenuous with loose rock.',
            difficulty: 'Strenuous - only for experienced hikers in good conditions.',
            image: '[Photo: Panoramic view from Sahale Arm lookout]'
          },
          {
            time: '2:00 PM - 4:00 PM',
            title: 'Stehekin Valley Exploration',
            description: 'Drive or take shuttle to explore the remote Stehekin Valley. Visit historic sites and enjoy the peaceful mountain community.',
            accessNote: 'Access via boat shuttle or plane only - plan transportation.',
            image: '[Photo: Historic Stehekin schoolhouse in mountain valley]'
          }
        ],
        tips: [
          'Cascade Pass requires early start and good weather',
          'Skip Sahale Arm if conditions are poor',
          'Stehekin requires advance planning for boat shuttle',
          'This is the most challenging day - assess abilities honestly'
        ]
      },
      {
        dayNumber: 4,
        title: 'Lower Valley and Departure',
        subtitle: 'Gorge Creek Falls and Newhalem Creek',
        activities: [
          {
            time: '9:00 AM - 10:30 AM',
            title: 'Gorge Creek Falls Trail',
            description: '0.3-mile easy walk to spectacular 242-foot waterfall viewpoint. Perfect final park experience with minimal effort required.',
            accessibilityNote: 'Short, easy trail suitable for all visitors.',
            image: '[Photo: Gorge Creek Falls plunging into narrow canyon]'
          },
          {
            time: '11:00 AM - 12:30 PM',
            title: 'Newhalem Creek Forest Trail',
            description: '1.8-mile loop through old-growth forest showcasing massive Douglas fir and western red cedar trees up to 500 years old.',
            educationalFocus: 'Interpretive signs explain old-growth forest ecosystem.',
            image: '[Photo: Massive old-growth trees along Newhalem Creek]'
          },
          {
            time: '1:00 PM - 3:00 PM',
            title: 'Skagit River and Final Views',
            description: 'Drive along the Skagit River for final mountain views and visit any missed viewpoints on your way out of the park.',
            reflection: 'Take time to reflect on your North Cascades alpine adventure.',
            image: '[Photo: Skagit River with mountain reflections]'
          }
        ],
        tips: [
          'Save energy for departure day with easier activities',
          'Check out times and plan departure accordingly',
          'Stop at local towns for final meals and souvenirs',
          'Consider visiting Deception Pass on drive home'
        ]
      }
    ]
  },

  'isle-royale': {
    title: '3-5 Day Isle Royale National Park Itinerary',
    subtitle: 'Complete off-season guide for September, October, April, May',
    description: 'Explore Lake Superior\'s pristine wilderness island during shoulder seasons. This itinerary covers backcountry hiking, wildlife observation, and the world\'s longest-running predator-prey study.',
    totalDays: 5,
    bestMonths: ['September', 'October', 'April', 'May'],
    days: [
      {
        dayNumber: 1,
        title: 'Ferry Arrival and Rock Harbor',
        subtitle: 'Island Orientation and Visitor Center',
        activities: [
          {
            time: '2:00 PM - 3:30 PM',
            title: 'Ferry Arrival at Rock Harbor',
            description: 'Arrive via ferry from Grand Portage, MN or Copper Harbor, MI. Check in with rangers and get oriented to island regulations and safety requirements.',
            offSeasonAdvantage: 'Peaceful arrival with personal attention from rangers!',
            image: '[Photo: Ferry approaching Rock Harbor dock with pristine wilderness]'
          },
          {
            time: '3:30 PM - 4:30 PM',
            title: 'Rock Harbor Visitor Center',
            description: 'Learn about the island\'s unique ecosystem, wolf and moose research, and pick up detailed trail maps. Watch orientation films about wilderness safety.',
            educationalFocus: 'Understand the famous predator-prey research project.',
            image: '[Photo: Rock Harbor Visitor Center with wilderness exhibits]'
          },
          {
            time: '4:30 PM - 6:00 PM',
            title: 'Stoll Memorial Trail',
            description: 'Easy 1-mile loop trail through mixed forest showcasing island ecology. Perfect introduction to Isle Royale\'s wilderness character.',
            accessibility: 'Easy introduction hike suitable for arrival day.',
            image: '[Photo: Boardwalk trail through dense island forest]'
          }
        ],
        accommodations: {
          title: 'Day 1 Accommodations',
          description: 'Backcountry camping options (advance permits required):',
          options: [
            { name: 'Rock Harbor Campground', type: 'Designated camping area', bookingLink: '#' },
            { name: 'Three Mile Campground', type: 'Wilderness camping', bookingLink: '#' },
            { name: 'Daisy Farm Campground', type: 'Lakeside camping', bookingLink: '#' }
          ]
        },
        tips: [
          'Ferry arrival times vary - plan accordingly',
          'Set up camp early and get familiar with bear-proof procedures',
          'Water must be treated - no safe drinking water sources',
          'Weather can change rapidly - prepare camp for storms'
        ]
      },
      {
        dayNumber: 2,
        title: 'Greenstone Ridge Trail',
        subtitle: 'Island Backbone Hiking and Scenic Overlooks',
        activities: [
          {
            time: '7:00 AM - 10:00 AM',
            title: 'Greenstone Ridge Trail (Partial)',
            description: 'Hike 4-6 miles of the 40-mile backbone trail that traverses the island. Offers the best interior views and wildlife observation opportunities.',
            difficulty: 'Moderate - rocky terrain with elevation changes.',
            image: '[Photo: Hikers on rocky ridge with Lake Superior views]'
          },
          {
            time: '10:30 AM - 12:00 PM',
            title: 'Mount Franklin Summit',
            description: 'Climb to 1,074-foot summit for panoramic views of Lake Superior and surrounding smaller islands. Highest point accessible by trail.',
            elevationNote: 'Highest accessible point on Isle Royale.',
            image: '[Photo: 360-degree view from Mount Franklin summit]'
          },
          {
            time: '1:00 PM - 4:00 PM',
            title: 'Suzy\'s Cave and Coastal Exploration',
            description: 'Explore unique rock formations and coastal features. Excellent area for wildlife watching and geological education.',
            geologicalFocus: 'Learn about Lake Superior\'s geological formation.',
            image: '[Photo: Unique rock formations along pristine shoreline]'
          }
        ],
        tips: [
          'Start early to maximize daylight hours',
          'Bring extra water - sources are limited on ridges',
          'Watch for moose and wolves - maintain safe distances',
          'Weather on ridges can be severe - be prepared to turn back'
        ]
      }
    ]
  },

  'voyageurs': {
    title: '2-4 Day Voyageurs National Park Itinerary',
    subtitle: 'Complete off-season guide for September, October, April, May',
    description: 'Explore America\'s waterway wilderness during spectacular shoulder seasons. This itinerary covers historic fur trade routes, pristine lakes, cultural sites, and excellent fishing opportunities.',
    totalDays: 4,
    bestMonths: ['September', 'October', 'April', 'May'],
    days: [
      {
        dayNumber: 1,
        title: 'Rainy Lake and Visitor Center',
        subtitle: 'Park Orientation and Cultural History',
        activities: [
          {
            time: '9:00 AM - 10:30 AM',
            title: 'Rainy Lake Visitor Center',
            description: 'Start at the main visitor center to learn about fur trade history, park waterways, and current conditions. Get oriented with maps and safety information.',
            offSeasonAdvantage: 'Personal attention from rangers and uncrowded exhibits!',
            image: '[Photo: Rainy Lake Visitor Center overlooking pristine waters]'
          },
          {
            time: '10:30 AM - 12:30 PM',
            title: 'Oberholtzer Trail',
            description: '2-mile round-trip hike to historic Rainy Lake. Learn about Ernest Oberholtzer and his role in wilderness conservation.',
            historicalFocus: 'Conservation pioneer and Boundary Waters advocate.',
            image: '[Photo: Historic cabin and Rainy Lake wilderness views]'
          },
          {
            time: '1:30 PM - 4:00 PM',
            title: 'Rainy Lake Boat Tour or Paddling',
            description: 'Take guided boat tour or rent canoe/kayak to explore historic fur trade routes. Visit Kettle Falls and historic sites.',
            waterActivity: 'Choose based on weather conditions and experience level.',
            image: '[Photo: Canoe on Rainy Lake with fall foliage reflections]'
          }
        ],
        accommodations: {
          title: 'Day 1 Accommodations',
          description: 'Stay in gateway communities:',
          options: [
            { name: 'Thunderbird Resort (International Falls)', type: 'Lakeside resort', bookingLink: '#' },
            { name: 'Kabetogama Lake Lodge', type: 'Historic lake lodge', bookingLink: '#' },
            { name: 'Ash River Visitor Center Camping', type: 'Park camping', bookingLink: '#' }
          ]
        },
        tips: [
          'Check water conditions and access before starting',
          'Wear proper flotation devices - water is cold even in shoulder seasons',
          'Bring warm layers - temperatures on water can be much cooler',
          'Book boat rentals in advance - limited off-season availability'
        ]
      }
    ]
  },

  'hawaii-volcanoes': {
    title: '6 Day Hawaii Volcanoes National Park & Big Island Itinerary',
    subtitle: 'Complete off-season guide for September, October, April, May',
    description: 'Experience active volcanism, diverse ecosystems, and Big Island culture during ideal weather conditions. This comprehensive itinerary covers volcanic craters, lava tubes, tropical rainforests, and island adventures.',
    totalDays: 6,
    bestMonths: ['September', 'October', 'April', 'May'],
    days: [
      {
        dayNumber: 1,
        title: 'Kilauea Summit and Crater Rim',
        subtitle: 'Visitor Center, Kilauea Overlook, and Steam Vents',
        activities: [
          {
            time: '8:00 AM - 9:30 AM',
            title: 'Kilauea Visitor Center',
            description: 'Start with park orientation and current volcanic activity briefing. Watch the film about Hawaiian volcanism and Native Hawaiian culture.',
            offSeasonAdvantage: 'No crowds at exhibits - take your time learning about volcanic processes!',
            image: '[Photo: Kilauea Visitor Center with smoking crater backdrop]'
          },
          {
            time: '9:30 AM - 11:30 AM',
            title: 'Kilauea Overlook and Steam Vents',
            description: 'View the active Kilauea crater from multiple overlooks. Explore the steam vents and sulfur banks area to see geothermal activity up close.',
            proTip: 'Morning light is best for crater photography - avoid midday harsh shadows!',
            image: '[Photo: Kilauea Crater with steam rising from active lava lake]'
          },
          {
            time: '12:00 PM - 2:00 PM',
            title: 'Crater Rim Drive',
            description: '11-mile scenic drive around Kilauea Caldera with stops at Jaggar Museum site, Halemaumau Overlook, and Chain of Craters Road junction.',
            volcanicActivity: 'Road may close due to volcanic activity - check current conditions.',
            image: '[Photo: Crater Rim Drive with volcanic landscape views]'
          },
          {
            time: '2:30 PM - 4:30 PM',
            title: 'Thurston Lava Tube',
            description: 'Walk through a 500-year-old lava tube formed by flowing molten lava. Easy 15-minute loop trail through native rainforest.',
            geologicalNote: 'Experience how lava tubes form and cool over time.',
            image: '[Photo: Inside Thurston Lava Tube with dramatic lighting]'
          }
        ],
        accommodations: {
          title: 'Day 1 Accommodations',
          description: 'Stay near the park for easy access:',
          options: [
            { name: 'Volcano House Hotel', type: 'Historic crater-rim lodge', bookingLink: '#' },
            { name: 'Kilauea Lodge', type: 'Cozy mountain inn', bookingLink: '#' },
            { name: 'Namakanipaio Campground', type: 'Park camping', bookingLink: '#' }
          ]
        },
        tips: [
          'Check volcanic activity status before visiting each day',
          'Bring warm layers - elevation creates cooler temperatures',
          'Stay on marked trails - volcanic gases can be dangerous',
          'Carry plenty of water and sun protection'
        ]
      },
      {
        dayNumber: 2,
        title: 'Chain of Craters Road and Coastal Area',
        subtitle: 'Lava Flows, Petroglyphs, and Ocean Entry',
        activities: [
          {
            time: '8:00 AM - 10:30 AM',
            title: 'Chain of Craters Road Drive',
            description: '19-mile scenic drive descending 3,700 feet to the coast. Stop at overlooks to see recent lava flows and volcanic craters.',
            elevation: 'Dramatic elevation change offers diverse volcanic landscapes.',
            image: '[Photo: Chain of Craters Road winding through lava fields]'
          },
          {
            time: '10:30 AM - 12:00 PM',
            title: 'Puʻu Loa Petroglyphs',
            description: '1.5-mile round-trip hike to over 23,000 ancient Hawaiian petroglyphs. Learn about Native Hawaiian culture and sacred sites.',
            culturalSignificance: 'Sacred Hawaiian site - treat with respect and stay on boardwalk.',
            image: '[Photo: Ancient Hawaiian petroglyphs carved in lava rock]'
          },
          {
            time: '1:00 PM - 3:00 PM',
            title: 'Holei Sea Arch',
            description: 'View dramatic sea arch formed by wave erosion of lava rock. Observe where lava meets the ocean (if active flows present).',
            safetyNote: 'Stay back from cliff edges - volcanic rock can be unstable.',
            image: '[Photo: Natural lava rock arch with crashing Pacific waves]'
          },
          {
            time: '3:30 PM - 5:00 PM',
            title: 'Mauna Ulu Trail (Partial)',
            description: 'Hike 1-2 miles of this trail across 1970s lava flows. See how the landscape recovers after volcanic eruptions.',
            difficulty: 'Moderate - walking on uneven lava rock surfaces.',
            image: '[Photo: Hikers on hardened lava flows with new plant growth]'
          }
        ],
        tips: [
          'Bring plenty of water - coastal area is hot and dry',
          'Wear sturdy shoes for walking on lava rock',
          'Check for active lava flows - viewing areas change frequently',
          'Respect cultural sites and stay on designated trails'
        ]
      },
      {
        dayNumber: 3,
        title: 'Mauna Loa Road and Rainforest',
        subtitle: 'High-Altitude Desert and Kipuka Forest',
        activities: [
          {
            time: '8:00 AM - 10:30 AM',
            title: 'Mauna Loa Road Drive',
            description: 'Drive up Mauna Loa Road to 6,662 feet for high-altitude desert views and Mauna Loa summit perspectives.',
            altitudeNote: 'Take it easy at elevation - drink water and rest if needed.',
            image: '[Photo: Mauna Loa Road with alpine desert and cinder cones]'
          },
          {
            time: '11:00 AM - 1:00 PM',
            title: 'Kipukapuaulu (Bird Park)',
            description: '1.2-mile loop trail through native forest "island" surrounded by lava. Excellent bird watching and native plant viewing.',
            wildlifeViewing: 'Best chance to see native Hawaiian forest birds.',
            image: '[Photo: Native ohia lehua forest with Hawaiian birds]'
          },
          {
            time: '2:00 PM - 4:00 PM',
            title: 'Devastation Trail',
            description: '1-mile round-trip paved trail through area devastated by 1959 Kilauea Iki eruption. See forest recovery after volcanic events.',
            accessibility: 'Paved trail suitable for most visitors.',
            image: '[Photo: Recovery forest growing through volcanic pumice]'
          },
          {
            time: '4:30 PM - 6:00 PM',
            title: 'Kilauea Iki Crater Trail (Optional)',
            description: '4-mile loop hike across the floor of Kilauea Iki crater. Walk on solidified 1959 lava lake (if time and energy permit).',
            difficulty: 'Strenuous - steep descent and ascent, uneven terrain.',
            image: '[Photo: Hikers crossing Kilauea Iki crater floor]'
          }
        ],
        tips: [
          'Start early for Kilauea Iki if attempting the full crater hike',
          'Bring warm layers for high-elevation areas',
          'Pack lunch - limited food options on Mauna Loa Road',
          'Allow extra time for high-altitude acclimatization'
        ]
      },
      {
        dayNumber: 4,
        title: 'Hilo and East Coast Exploration',
        subtitle: 'Waterfalls, Gardens, and Local Culture',
        activities: [
          {
            time: '8:00 AM - 10:00 AM',
            title: 'Rainbow Falls and Boiling Pots',
            description: 'Visit Rainbow Falls for morning rainbow viewing and explore Boiling Pots natural swimming holes. Experience Hilo\'s natural beauty.',
            offSeasonAdvantage: 'Better water flow and fewer crowds at popular swimming spots!',
            image: '[Photo: Rainbow Falls with morning rainbow effect]'
          },
          {
            time: '10:30 AM - 12:30 PM',
            title: 'Liliuokalani Gardens and Hilo Bay',
            description: 'Explore authentic Japanese gardens and walk along Hilo Bay. Learn about local history and multicultural heritage.',
            culturalNote: 'Experience Big Island\'s diverse cultural influences.',
            image: '[Photo: Japanese gardens with Mauna Kea backdrop]'
          },
          {
            time: '1:30 PM - 3:30 PM',
            title: 'Hilo Farmers Market and Local Food',
            description: 'Experience local produce, tropical fruits, and Hawaiian specialties at Hilo\'s famous farmers market (Wednesday/Saturday full market).',
            foodie: 'Try local specialties like lychee, rambutan, and malasadas.',
            image: '[Photo: Colorful tropical fruits at Hilo Farmers Market]'
          },
          {
            time: '4:00 PM - 6:00 PM',
            title: 'Akaka Falls State Park',
            description: '0.4-mile loop trail to spectacular 442-foot waterfall through lush tropical rainforest. Perfect for photography.',
            accessibility: 'Paved trail suitable for most visitors.',
            image: '[Photo: Akaka Falls through tropical vegetation]'
          }
        ],
        accommodations: {
          title: 'Day 4 Accommodations',
          description: 'Stay in Hilo for east side access:',
          options: [
            { name: 'Hilo Hawaiian Hotel', type: 'Oceanfront hotel', bookingLink: '#' },
            { name: 'Castle Hilo Hawaiian Hotel', type: 'Historic Hilo lodging', bookingLink: '#' },
            { name: 'Hilo Bay Hostel', type: 'Budget-friendly option', bookingLink: '#' }
          ]
        },
        tips: [
          'Visit farmers market early for best selection',
          'Bring rain jacket - east side gets more rainfall',
          'Try local Hawaiian plate lunch for authentic experience',
          'Check waterfall flow conditions after recent rains'
        ]
      },
      {
        dayNumber: 5,
        title: 'Mauna Kea Summit and Stargazing',
        subtitle: 'World\'s Best Astronomical Viewing',
        activities: [
          {
            time: '8:00 AM - 11:00 AM',
            title: 'Mauna Kea Visitor Information Station',
            description: 'Acclimatize at 9,200 feet visitor center. Learn about astronomy, Hawaiian culture, and high-altitude safety.',
            acclimatization: 'Mandatory stop for altitude adjustment - spend minimum 30 minutes.',
            image: '[Photo: Mauna Kea Visitor Center with observatory domes]'
          },
          {
            time: '11:30 AM - 2:00 PM',
            title: 'Summit Drive (4WD Required)',
            description: 'Drive to 13,803-foot summit with world-class observatories. Experience Mars-like landscape and incredible views.',
            requirement: '4WD vehicle required for summit access.',
            image: '[Photo: Mauna Kea summit observatories above clouds]'
          },
          {
            time: '3:00 PM - 5:00 PM',
            title: 'Lake Waiau and Alpine Desert',
            description: 'Hike to one of the world\'s highest alpine lakes. Experience unique high-altitude ecosystem.',
            difficulty: 'Moderate hike at extreme altitude - take frequent breaks.',
            image: '[Photo: Lake Waiau with cinder cones surrounding]'
          },
          {
            time: '6:00 PM - 9:00 PM',
            title: 'World-Class Stargazing',
            description: 'Experience some of the best stargazing on Earth from Mauna Kea. Join free stargazing program at visitor center.',
            worldClass: 'Considered the premier stargazing location globally.',
            image: '[Photo: Milky Way over Mauna Kea observatories]'
          }
        ],
        tips: [
          'Rent 4WD vehicle for summit access',
          'Bring extreme warm clothing - temperatures near freezing',
          'No driving to summit within 8 hours of scuba diving',
          'Download stargazing apps for constellation identification'
        ]
      },
      {
        dayNumber: 6,
        title: 'Kona Coast and Cultural Sites',
        subtitle: 'Coffee, History, and Snorkeling',
        activities: [
          {
            time: '8:00 AM - 10:00 AM',
            title: 'Kona Coffee Farm Tour',
            description: 'Tour working coffee farm to learn about world-famous Kona coffee production. Taste fresh coffee and learn processing methods.',
            offSeasonBenefit: 'Harvest season activities and personal attention from farmers.',
            image: '[Photo: Kona coffee cherries on trees with ocean views]'
          },
          {
            time: '10:30 AM - 12:30 PM',
            title: 'Pu\'uhonua o Hōnaunau National Historical Park',
            description: 'Explore ancient Hawaiian place of refuge with reconstructed temples and royal grounds. Learn about Native Hawaiian culture.',
            culturalSite: 'Sacred Hawaiian site - observe respectfully.',
            image: '[Photo: Reconstructed Hawaiian temple by ocean]'
          },
          {
            time: '1:30 PM - 4:00 PM',
            title: 'Two Step (Hōnaunau Bay) Snorkeling',
            description: 'Snorkel in pristine coral reef with tropical fish, sea turtles, and spinner dolphins. One of Big Island\'s best snorkel spots.',
            marineLife: 'High chance of seeing Hawaiian green sea turtles.',
            image: '[Photo: Underwater coral reef scene with sea turtle]'
          },
          {
            time: '4:30 PM - 6:30 PM',
            title: 'Kailua-Kona Historic Village and Sunset',
            description: 'Explore historic Kailua-Kona village, visit Hulihee Palace, and watch spectacular Kona Coast sunset.',
            history: 'Former residence of Hawaiian royalty.',
            image: '[Photo: Kailua-Kona pier with sunset over Pacific Ocean]'
          }
        ],
        tips: [
          'Book coffee farm tours in advance during harvest season',
          'Bring reef-safe sunscreen for snorkeling',
          'Respect cultural sites and follow all guidelines',
          'Try local poke bowls and Hawaiian plate lunch'
        ]
      }
    ]
  },

  'american-samoa': {
    title: '7 Day National Park of American Samoa Itinerary',
    subtitle: 'Complete off-season guide for May, June, September, October',
    description: 'Experience pristine coral reefs, authentic Polynesian culture, and remote Pacific island life. This comprehensive itinerary covers all three park units, cultural immersion, and tropical adventures.',
    totalDays: 7,
    bestMonths: ['May', 'June', 'September', 'October'],
    days: [
      {
        dayNumber: 1,
        title: 'Tutuila Island - Pago Pago Harbor Area',
        subtitle: 'Visitor Center, Rainmaker Mountain, and Cultural Sites',
        activities: [
          {
            time: '8:00 AM - 9:30 AM',
            title: 'National Park Visitor Center',
            description: 'Start at the visitor center in Pago Pago to learn about Samoan culture, marine ecosystems, and park logistics. Get oriented for island exploration.',
            offSeasonAdvantage: 'Personal attention from rangers and uncrowded cultural exhibits!',
            image: '[Photo: Visitor center with traditional Samoan architectural elements]'
          },
          {
            time: '9:30 AM - 11:30 AM',
            title: 'Mount Alava Trail',
            description: '3.2-mile round-trip hike through tropical rainforest to TV towers with panoramic harbor views. Moderate difficulty with steady elevation gain.',
            viewpoint: 'Best overview of Pago Pago Harbor and surrounding islands.',
            image: '[Photo: Panoramic view of Pago Pago Harbor from Mount Alava]'
          },
          {
            time: '12:30 PM - 2:30 PM',
            title: 'Fagatele Bay Snorkeling',
            description: 'Snorkel in pristine coral reef sanctuary with tropical fish, sea turtles, and vibrant corals. Best snorkeling in American Samoa.',
            marineLife: 'Look for parrotfish, angelfish, and green sea turtles.',
            image: '[Photo: Underwater coral reef scene with tropical fish]'
          },
          {
            time: '3:00 PM - 5:00 PM',
            title: 'Leone Village Cultural Visit',
            description: 'Visit traditional Samoan village to learn about fale (traditional houses), local customs, and community life.',
            culturalRespect: 'Dress modestly and ask permission before photographing people.',
            image: '[Photo: Traditional Samoan fale with village elders]'
          }
        ],
        accommodations: {
          title: 'Day 1 Accommodations',
          description: 'Limited options on Tutuila Island:',
          options: [
            { name: 'Tradewinds Hotel', type: 'Main hotel in Pago Pago', bookingLink: '#' },
            { name: 'Sadie Thompson Inn', type: 'Historic guesthouse', bookingLink: '#' },
            { name: 'Local Family Homestay', type: 'Cultural immersion', bookingLink: '#' }
          ]
        },
        tips: [
          'Bring reef-safe sunscreen to protect coral ecosystems',
          'Learn basic Samoan greetings - locals appreciate the effort',
          'Dress modestly when visiting villages and cultural sites',
          'Carry cash - limited ATM and credit card availability'
        ]
      },
      {
        dayNumber: 2,
        title: 'Ta\'ū Island Day Trip',
        subtitle: 'Remote Island Wilderness and Pristine Reefs',
        activities: [
          {
            time: '6:00 AM - 8:00 AM',
            title: 'Flight to Taʻū Island',
            description: 'Take small plane flight to remote Taʻū Island (weather permitting). Most pristine and least developed part of the park.',
            logistics: 'Flight dependent on weather - have backup plan for Tutuila activities.',
            image: '[Photo: Small plane approaching Taʻū Island airstrip]'
          },
          {
            time: '9:00 AM - 12:00 PM',
            title: 'Si\'utu Village and Coastline',
            description: 'Explore traditional village and hike coastal trails with dramatic cliffs and secluded beaches. Experience authentic island life.',
            remoteness: 'Very few tourists - authentic Polynesian experience.',
            image: '[Photo: Dramatic coastal cliffs and traditional village on Taʻū]'
          },
          {
            time: '1:00 PM - 3:30 PM',
            title: 'Pristine Reef Snorkeling',
            description: 'Snorkel in untouched coral reefs around Taʻū Island. Some of the healthiest coral ecosystems in the Pacific.',
            marineConservation: 'Pristine reefs - practice responsible snorkeling techniques.',
            image: '[Photo: Vibrant coral reef with minimal human impact]'
          },
          {
            time: '4:00 PM - 5:00 PM',
            title: 'Return Flight to Tutuila',
            description: 'Return flight to main island. Reflect on remote island experience and pristine natural environment.',
            weatherDependent: 'Flights can be delayed - build flexibility into schedule.',
            image: '[Photo: Aerial view of Taʻū Island from departing aircraft]'
          }
        ],
        tips: [
          'Book Taʻū flights well in advance - very limited capacity',
          'Bring all supplies needed - no services on Taʻū Island',
          'Have backup Tutuila activities if flights are cancelled',
          'Respect the remote nature - pack out all trash'
        ]
      },
      {
        dayNumber: 3,
        title: 'Ofu Island and Beach Paradise',
        subtitle: 'World-Class Snorkeling and Perfect Beaches',
        activities: [
          {
            time: '7:00 AM - 9:00 AM',
            title: 'Flight to Ofu Island',
            description: 'Morning flight to Ofu Island, home to some of the world\'s most beautiful beaches and coral reefs.',
            islandAccess: 'Another remote island accessible only by small aircraft.',
            image: '[Photo: Approaching Ofu Island with pristine beaches visible]'
          },
          {
            time: '9:30 AM - 12:30 PM',
            title: 'Ofu Beach Snorkeling',
            description: 'Snorkel at world-famous Ofu Beach with incredibly diverse coral reef ecosystem. Often rated among world\'s best snorkeling sites.',
            worldClass: 'Considered one of the top 10 snorkeling destinations globally.',
            image: '[Photo: Crystal clear water and vibrant coral reef at Ofu Beach]'
          },
          {
            time: '1:30 PM - 3:30 PM',
            title: 'Asaga Village and Coastal Exploration',
            description: 'Visit small village and explore pristine coastline. Experience traditional island life and perfect tropical beaches.',
            beachTime: 'Relax on some of the most beautiful beaches in the Pacific.',
            image: '[Photo: Perfect white sand beach with crystal blue water]'
          },
          {
            time: '4:00 PM - 5:30 PM',
            title: 'Return to Tutuila and Departure Prep',
            description: 'Return flight to main island. Final preparation for departure from American Samoa.',
            lastChance: 'Final opportunity for souvenir shopping in Pago Pago.',
            image: '[Photo: Sunset over Pago Pago Harbor from returning aircraft]'
          }
        ],
        tips: [
          'Ofu flights even more weather-dependent than Taʻū',
          'Bring underwater camera for world-class reef photography',
          'Pack light - strict weight limits on inter-island flights',
          'Confirm international flight connections with extra time buffer'
        ]
      },
      {
        dayNumber: 4,
        title: 'Tutuila Island West Coast Adventure',
        subtitle: 'Beaches, Hiking, and Cultural Sites',
        activities: [
          {
            time: '8:00 AM - 10:30 AM',
            title: 'Aunu\'u Island Day Trip',
            description: 'Take boat to small offshore island with red sand beaches, freshwater lake, and traditional village life.',
            remoteness: 'Authentic Polynesian island experience with few visitors.',
            image: '[Photo: Red sand beach on Aunu\'u Island]'
          },
          {
            time: '11:00 AM - 1:00 PM',
            title: 'Sliding Rock and Natural Pools',
            description: 'Experience natural water slide and swimming pools formed by volcanic rock. Perfect for cooling off.',
            adventure: 'Natural water slide carved by centuries of water flow.',
            image: '[Photo: Natural rock slide and clear pools]'
          },
          {
            time: '2:00 PM - 4:00 PM',
            title: 'Tia Seu Lupe Trail',
            description: 'Moderate 2-mile hike through tropical rainforest to scenic overlooks of Pago Pago Harbor.',
            difficulty: 'Moderate with steep sections - wear good hiking shoes.',
            image: '[Photo: Trail through lush tropical vegetation]'
          },
          {
            time: '4:30 PM - 6:30 PM',
            title: 'Traditional Samoan Cultural Evening',
            description: 'Participate in traditional Samoan cultural activities, learn about fa\'a Samoa (Samoan way of life), and enjoy local feast.',
            culturalImmersion: 'Deep dive into authentic Polynesian culture.',
            image: '[Photo: Traditional Samoan cultural demonstration]'
          }
        ],
        tips: [
          'Bring water shoes for natural pools and rocky areas',
          'Learn basic Samoan phrases to show respect',
          'Dress modestly for cultural activities',
          'Try traditional foods like palusami and fa\'i'
        ]
      },
      {
        dayNumber: 5,
        title: 'Manu\'a Islands Extended Stay',
        subtitle: 'Remote Island Wilderness and Pristine Reefs',
        activities: [
          {
            time: '7:00 AM - 9:00 AM',
            title: 'Flight to Manu\'a Islands',
            description: 'Fly to the most remote and traditional part of American Samoa. Experience authentic Polynesian island life.',
            logistics: 'Weather-dependent flights - have flexible schedule.',
            image: '[Photo: Small aircraft approaching remote island airstrip]'
          },
          {
            time: '9:30 AM - 12:30 PM',
            title: 'Saua Village Cultural Immersion',
            description: 'Spend time in traditional village, learn about subsistence living, and participate in daily activities.',
            authentic: 'Most traditional and unchanged Samoan communities.',
            image: '[Photo: Traditional Samoan village with elders]'
          },
          {
            time: '1:30 PM - 4:00 PM',
            title: 'Pristine Coral Reef Exploration',
            description: 'Snorkel in untouched coral reefs with incredible biodiversity. Some of the most pristine reefs in the Pacific.',
            conservation: 'Minimal human impact - practice responsible snorkeling.',
            image: '[Photo: Vibrant coral reef with abundant marine life]'
          },
          {
            time: '4:30 PM - 6:30 PM',
            title: 'Coastal Exploration and Tide Pools',
            description: 'Explore dramatic coastline, tide pools, and secluded beaches accessible only at low tide.',
            timing: 'Check tide schedules for best tide pool exploration.',
            image: '[Photo: Dramatic coastal cliffs with tide pools]'
          }
        ],
        accommodations: {
          title: 'Day 5 Accommodations',
          description: 'Stay with local families for cultural immersion:',
          options: [
            { name: 'Village Homestay', type: 'Cultural immersion', bookingLink: '#' },
            { name: 'Community Guesthouse', type: 'Simple local accommodation', bookingLink: '#' },
            { name: 'Traditional Fale', type: 'Authentic Samoan housing', bookingLink: '#' }
          ]
        },
        tips: [
          'Bring gifts for host families - small items from mainland US',
          'Be prepared for very basic accommodations',
          'Respect traditional customs and village rules',
          'Pack all necessary supplies - limited resources available'
        ]
      },
      {
        dayNumber: 6,
        title: 'Multi-Island Adventure Day',
        subtitle: 'Island Hopping and Marine Exploration',
        activities: [
          {
            time: '6:00 AM - 8:00 AM',
            title: 'Sunrise Boat Trip Between Islands',
            description: 'Charter boat for island-hopping adventure with sunrise over the Pacific. Visit multiple uninhabited islets.',
            adventure: 'Access remote areas only reachable by boat.',
            image: '[Photo: Sunrise over Pacific with island silhouettes]'
          },
          {
            time: '8:30 AM - 11:30 AM',
            title: 'World-Class Deep Water Snorkeling',
            description: 'Snorkel in deep, clear waters with pelagic fish, rays, and possible whale encounters (season dependent).',
            marineLife: 'Chance to see larger marine species in deep water.',
            image: '[Photo: Snorkeling with manta rays in clear water]'
          },
          {
            time: '12:30 PM - 3:00 PM',
            title: 'Remote Beach Exploration',
            description: 'Visit beaches accessible only by boat, collect shells, and experience complete solitude in paradise.',
            solitude: 'Often completely alone on pristine beaches.',
            image: '[Photo: Pristine white sand beach with no footprints]'
          },
          {
            time: '3:30 PM - 5:30 PM',
            title: 'Traditional Fishing and Sailing',
            description: 'Learn traditional Polynesian fishing techniques and sailing methods from local fishermen.',
            traditional: 'Ancient Polynesian maritime skills still practiced today.',
            image: '[Photo: Traditional Polynesian sailing vessel]'
          }
        ],
        tips: [
          'Charter boats need advance booking and depend on weather',
          'Bring seasickness medication if prone to motion sickness',
          'Pack waterproof bag for electronics and valuables',
          'Respect marine protected areas and fishing restrictions'
        ]
      },
      {
        dayNumber: 7,
        title: 'Cultural Farewell and Departure',
        subtitle: 'Final Island Experiences and Journey Home',
        activities: [
          {
            time: '8:00 AM - 10:00 AM',
            title: 'Return Flight to Tutuila',
            description: 'Morning flight back to main island for final day activities and departure preparations.',
            logistics: 'Allow extra time for weather delays.',
            image: '[Photo: Aerial view of Manu\'a Islands from departing aircraft]'
          },
          {
            time: '10:30 AM - 12:30 PM',
            title: 'Jean P. Haydon Museum',
            description: 'Learn comprehensive Samoan history, culture, and natural environment. Perfect synthesis of your island experience.',
            education: 'Excellent context for everything you\'ve experienced.',
            image: '[Photo: Museum displays of Samoan cultural artifacts]'
          },
          {
            time: '1:30 PM - 3:30 PM',
            title: 'Pago Pago Harbor Scenic Drive',
            description: 'Final scenic drive around dramatic harbor with stops for last photos and souvenir shopping.',
            farewell: 'Last chance for iconic American Samoa photos.',
            image: '[Photo: Pago Pago Harbor panoramic view]'
          },
          {
            time: '4:00 PM - 6:00 PM',
            title: 'Traditional Farewell Ceremony',
            description: 'Participate in traditional Samoan farewell ceremony with local community. Exchange of gifts and expressions of gratitude.',
            cultural: 'Beautiful way to conclude your Pacific island journey.',
            image: '[Photo: Traditional Samoan farewell ceremony]'
          }
        ],
        tips: [
          'Pack coral and shell souvenirs carefully for travel',
          'Exchange contact information with local friends made',
          'Leave extra time for international flight connections',
          'Reflect on unique Pacific island cultural experience'
        ]
      }
    ]
  },

  'haleakala': {
    title: '6 Day Haleakalā National Park & Maui Island Itinerary',
    subtitle: 'Complete off-season guide for September, October, April, May',
    description: 'Experience Maui\'s sacred sunrise crater, high-altitude wilderness, and diverse island ecosystems during ideal weather conditions. This comprehensive itinerary covers summit experiences, crater hiking, coastal adventures, and Hawaiian culture.',
    totalDays: 6,
    bestMonths: ['September', 'October', 'April', 'May'],
    days: [
      {
        dayNumber: 1,
        title: 'Summit Sunrise and Crater Exploration',
        subtitle: 'Haleakalā Sunrise, Visitor Center, and Crater Views',
        activities: [
          {
            time: '3:30 AM - 5:45 AM',
            title: 'Pre-Dawn Summit Drive',
            description: 'Drive 38 miles up winding Haleakalā Highway to 10,023-foot summit for sunrise viewing. Allow 1.5-2 hours from most Maui locations.',
            offSeasonAdvantage: 'Better sunrise reservation availability and less crowded viewpoints!',
            image: '[Photo: Pre-dawn drive up Haleakalā with starry sky]'
          },
          {
            time: '5:45 AM - 7:00 AM',
            title: 'Haleakalā Summit Sunrise',
            description: 'Watch legendary sunrise above the clouds from Haleakalā Crater rim. Experience why Native Hawaiians consider this sacred.',
            sacred: 'Sacred Hawaiian site - observe respectfully and quietly.',
            image: '[Photo: Sunrise over Haleakalā Crater with silhouetted visitors]'
          },
          {
            time: '7:00 AM - 9:00 AM',
            title: 'Haleakalā Visitor Center and Exhibits',
            description: 'Visit summit visitor center to learn about unique ecosystems, Native Hawaiian culture, and high-altitude environment.',
            education: 'Learn about endangered species like the Hawaiian silversword plant.',
            image: '[Photo: Haleakalā Visitor Center with crater backdrop]'
          },
          {
            time: '9:30 AM - 12:00 PM',
            title: 'Sliding Sands Trail',
            description: 'Hike 1-3 miles into Haleakalā Crater on this otherworldly trail. Distance depends on fitness and time available.',
            difficulty: 'Moderate descent, but remember you have to hike back UP!',
            image: '[Photo: Hikers on Sliding Sands Trail in crater desert]'
          },
          {
            time: '1:00 PM - 2:30 PM',
            title: 'Kalahaku Overlook and Silversword Loop',
            description: 'Stop at overlook for different crater perspective and walk short trail to see endangered Hawaiian silversword plants.',
            conservation: 'Rare plants found nowhere else on Earth - stay on boardwalks.',
            image: '[Photo: Hawaiian silversword plants with crater background]'
          }
        ],
        accommodations: {
          title: 'Day 1 Accommodations',
          description: 'Stay in Upcountry Maui for easier summit access:',
          options: [
            { name: 'Kula Lodge', type: 'Mountain lodge with crater views', bookingLink: '#' },
            { name: 'Upcountry Bed & Breakfast', type: 'Local hospitality', bookingLink: '#' },
            { name: 'Hosmer Grove Campground', type: 'High-altitude camping', bookingLink: '#' }
          ]
        },
        tips: [
          'Reserve sunrise viewing at recreation.gov well in advance',
          'Bring warm layers - summit can be near freezing at sunrise',
          'Start with full gas tank - no services on summit road',
          'Pack breakfast and hot drinks in thermos for summit'
        ]
      },
      {
        dayNumber: 2,
        title: 'Pipiwai Trail and Coastal Departure',
        subtitle: 'Kipahulu District Bamboo Forest and Seven Sacred Pools',
        activities: [
          {
            time: '8:00 AM - 10:00 AM',
            title: 'Drive to Kipahulu District',
            description: 'Scenic drive via Hana Highway to Kipahulu District (southeast Maui). Different ecosystem from summit - lush tropical rainforest.',
            scenicRoute: 'Consider taking Road to Hana if time permits - add 2-3 hours.',
            image: '[Photo: Winding Hana Highway through tropical landscape]'
          },
          {
            time: '10:30 AM - 1:30 PM',
            title: 'Pipiwai Trail to Waimoku Falls',
            description: '4-mile round-trip hike through bamboo forest to 400-foot waterfall. One of Maui\'s most spectacular and diverse trails.',
            difficulty: 'Moderate with stream crossings and muddy sections.',
            image: '[Photo: Massive bamboo forest cathedral on Pipiwai Trail]'
          },
          {
            time: '2:00 PM - 3:30 PM',
            title: 'Seven Sacred Pools (Ohe\'o Gulch)',
            description: 'Visit series of pools and waterfalls near the ocean. Swimming may be possible if conditions are safe.',
            safety: 'Check conditions - flash floods possible, ocean entry dangerous.',
            image: '[Photo: Tiered pools and waterfalls at Ohe\'o Gulch]'
          },
          {
            time: '4:00 PM - 6:00 PM',
            title: 'Coastal Drive and Departure',
            description: 'Scenic coastal drive back toward main Maui or continue Hana Highway loop. Reflect on diverse Haleakalā ecosystems experienced.',
            route: 'Consider time for full Hana Highway loop vs. backtracking.',
            image: '[Photo: Maui coastline views from Hana Highway]'
          }
        ],
        tips: [
          'Pipiwai Trail can be muddy - wear appropriate footwear',
          'Bring insect repellent for tropical forest sections',
          'Check Ohe\'o Gulch conditions before swimming',
          'Allow extra time if completing full Road to Hana loop'
        ]
      },
      {
        dayNumber: 3,
        title: 'Road to Hana Adventure',
        subtitle: 'Waterfalls, Tropical Landscapes, and Cultural Sites',
        activities: [
          {
            time: '7:00 AM - 9:30 AM',
            title: 'Early Road to Hana Departure',
            description: 'Begin the legendary 64-mile drive with 620 curves and 59 bridges. Stop at Twin Falls for short hike and swimming.',
            offSeasonAdvantage: 'Fewer cars on the road and better parking at popular stops!',
            image: '[Photo: Winding Road to Hana through tropical jungle]'
          },
          {
            time: '10:00 AM - 12:00 PM',
            title: 'Waianapanapa State Park',
            description: 'Explore dramatic black sand beach, lava tube caves, and coastal trail with stunning ocean views.',
            geological: 'Unique black sand formed by volcanic activity.',
            image: '[Photo: Black sand beach with turquoise waves]'
          },
          {
            time: '1:00 PM - 3:00 PM',
            title: 'Hana Town and Cultural Center',
            description: 'Visit historic Hana town, learn about Native Hawaiian culture at Hana Cultural Center, and enjoy local food.',
            cultural: 'Authentic Hawaiian community with strong cultural traditions.',
            image: '[Photo: Historic Hana town with traditional buildings]'
          },
          {
            time: '3:30 PM - 5:30 PM',
            title: 'Hamoa Beach and Hasegawa General Store',
            description: 'Relax at beautiful Hamoa Beach and visit famous Hasegawa General Store for local character and supplies.',
            beach: 'Often rated one of the world\'s most beautiful beaches.',
            image: '[Photo: Hamoa Beach with palm trees and pristine sand]'
          }
        ],
        accommodations: {
          title: 'Day 3 Accommodations',
          description: 'Stay in Hana area for authentic experience:',
          options: [
            { name: 'Travaasa Hana Resort', type: 'Luxury eco-resort', bookingLink: '#' },
            { name: 'Hana Kai Maui Resort', type: 'Oceanfront condos', bookingLink: '#' },
            { name: 'Hana Camping', type: 'Beach camping', bookingLink: '#' }
          ]
        },
        tips: [
          'Start very early to avoid traffic and get best parking',
          'Pack snacks and water - limited food options along route',
          'Take your time and pull over for oncoming traffic',
          'Check road conditions and weather before departing'
        ]
      },
      {
        dayNumber: 4,
        title: 'West Maui and Iao Valley',
        subtitle: 'Sacred Valley and Coastal Beauty',
        activities: [
          {
            time: '8:00 AM - 10:30 AM',
            title: 'Iao Valley State Monument',
            description: 'Explore sacred Iao Valley with the iconic Iao Needle. Learn about Hawaiian history and King Kamehameha\'s battles.',
            sacred: 'Sacred Hawaiian site - \'Valley of the Kings\' in Hawaiian culture.',
            image: '[Photo: Iao Needle surrounded by lush valley walls]'
          },
          {
            time: '11:00 AM - 1:00 PM',
            title: 'Maui Tropical Plantation',
            description: 'Learn about tropical agriculture, take tram tour through working farm, and taste fresh tropical fruits.',
            education: 'Learn about crops that thrive in Hawaiian climate.',
            image: '[Photo: Tropical plantation with diverse fruit trees]'
          },
          {
            time: '2:00 PM - 4:00 PM',
            title: 'Lahaina Historic Town',
            description: 'Explore former whaling capital with historic buildings, art galleries, and Front Street shopping.',
            history: 'Former capital of Hawaiian Kingdom and major whaling port.',
            image: '[Photo: Historic Lahaina Front Street with old buildings]'
          },
          {
            time: '4:30 PM - 6:30 PM',
            title: 'West Maui Sunset and Beach Time',
            description: 'Watch spectacular sunset from Kaanapali Beach or Napili Bay. Some of the world\'s best sunsets.',
            worldClass: 'West Maui sunsets are legendary worldwide.',
            image: '[Photo: Spectacular West Maui sunset over Pacific]'
          }
        ],
        tips: [
          'Visit Iao Valley early before afternoon clouds form',
          'Bring layers - valley can be cool and misty',
          'Try Hawaiian shave ice in Lahaina',
          'Book dinner reservations in advance for popular restaurants'
        ]
      },
      {
        dayNumber: 5,
        title: 'Snorkeling and Marine Adventures',
        subtitle: 'Underwater Paradise and Coastal Exploration',
        activities: [
          {
            time: '6:30 AM - 11:00 AM',
            title: 'Molokini Crater Snorkel Excursion',
            description: 'Boat trip to crescent-shaped volcanic crater for world-class snorkeling with tropical fish and coral reefs.',
            marine: 'Protected marine sanctuary with incredible visibility.',
            image: '[Photo: Molokini Crater from above with clear blue water]'
          },
          {
            time: '11:30 AM - 1:30 PM',
            title: 'Turtle Town Snorkeling',
            description: 'Continue snorkeling adventure at Turtle Town (Nahuna) with high probability of Hawaiian green sea turtles.',
            wildlife: 'Excellent chance to swim with endangered Hawaiian green turtles.',
            image: '[Photo: Snorkeling with Hawaiian green sea turtle]'
          },
          {
            time: '2:30 PM - 4:30 PM',
            title: 'Wailea Beach Walk and Luxury Resorts',
            description: 'Walk beautiful Wailea beach path connecting luxury resorts with pristine beaches and lava rock formations.',
            luxury: 'Experience Maui\'s most exclusive resort area.',
            image: '[Photo: Wailea beach with luxury resorts and palm trees]'
          },
          {
            time: '5:00 PM - 7:00 PM',
            title: 'Makena Beach (Big Beach) Sunset',
            description: 'Relax at Makena Beach, Maui\'s largest beach, for swimming, bodysurfing, and spectacular sunset views.',
            beach: 'Over half-mile of pristine white sand beach.',
            image: '[Photo: Makena Beach expansive shoreline at sunset]'
          }
        ],
        tips: [
          'Book snorkel tours in advance - weather can cancel trips',
          'Bring underwater camera for marine life photography',
          'Use reef-safe sunscreen to protect coral ecosystems',
          'Stay hydrated and take breaks from sun exposure'
        ]
      },
      {
        dayNumber: 6,
        title: 'Upcountry Maui and Cultural Experiences',
        subtitle: 'Agriculture, Art, and Mountain Views',
        activities: [
          {
            time: '8:00 AM - 10:30 AM',
            title: 'Surfing Goat Dairy Farm Tour',
            description: 'Visit working goat dairy in Upcountry Maui, learn about sustainable farming, and taste award-winning goat cheese.',
            sustainable: 'Learn about sustainable agriculture in Hawaii.',
            image: '[Photo: Goats grazing with Haleakalā in background]'
          },
          {
            time: '11:00 AM - 1:00 PM',
            title: 'Makawao Town and Paniolo Culture',
            description: 'Explore historic cowboy (paniolo) town with art galleries, local shops, and Hawaiian ranch culture.',
            culture: 'Experience unique Hawaiian cowboy (paniolo) heritage.',
            image: '[Photo: Historic Makawao town with paniolo heritage buildings]'
          },
          {
            time: '2:00 PM - 4:00 PM',
            title: 'Ali\'i Kula Lavender Farm',
            description: 'Tour beautiful lavender farm with panoramic views of central and west Maui. Learn about lavender cultivation.',
            scenic: 'Spectacular views across Maui with lavender in foreground.',
            image: '[Photo: Purple lavender fields with Maui landscape views]'
          },
          {
            time: '4:30 PM - 6:30 PM',
            title: 'Final Haleakalā Crater Overlook',
            description: 'Return to Haleakalā for different perspective in afternoon light. Reflect on your Maui adventures.',
            reflection: 'Perfect way to conclude your Maui experience.',
            image: '[Photo: Haleakalā Crater in golden afternoon light]'
          }
        ],
        tips: [
          'Upcountry can be cool - bring light jacket',
          'Try local Maui onions and other Upcountry produce',
          'Support local artists and craftspeople in Makawao',
          'Check lavender farm hours and tour availability'
        ]
      }
    ]
  },

  'indiana-dunes': {
    title: '4 Day Indiana Dunes National Park & Lake Michigan Itinerary',
    subtitle: 'Complete off-season guide for September, October, April, May',
    description: 'Experience the best of Indiana Dunes National Park during the ideal off-season months. This itinerary covers pristine beaches, diverse ecosystems, and Lake Michigan adventures while avoiding summer crowds.',
    totalDays: 4,
    bestMonths: ['September', 'October', 'April', 'May'],
    days: [
      {
        dayNumber: 1,
        title: 'Dune Exploration & Beach Discovery',
        subtitle: 'Mount Baldy, West Beach, and Lake Michigan shoreline',
        activities: [
          {
            time: '9:00 AM - 10:30 AM',
            title: 'West Beach Visitor Center',
            description: 'Start at the visitor center to get oriented and learn about the park\'s unique ecosystems. Pick up trail maps and check for ranger programs.',
            offSeasonAdvantage: 'Personalized attention from rangers!',
            image: '[Photo: West Beach visitor center with fall colors]'
          },
          {
            time: '11:00 AM - 1:00 PM',
            title: 'Mount Baldy Dune Hike',
            description: 'Hike the iconic 126-foot tall moving sand dune. Offers panoramic views of Lake Michigan and Chicago skyline on clear days.',
            proTip: 'Bring water - climbing sand dunes is strenuous!',
            image: '[Photo: Mount Baldy summit view of Lake Michigan]'
          },
          {
            time: '2:30 PM - 4:30 PM',
            title: 'West Beach Shoreline Walk',
            description: 'Explore 3 miles of pristine Lake Michigan beach. Look for unique driftwood and enjoy peaceful waves without summer crowds.',
            wildlifeWatch: 'Migrating birds and possible seal sightings.',
            image: '[Photo: West Beach shoreline in autumn]'
          }
        ],
        accommodations: {
          title: 'Day 1 Accommodations',
          description: 'Stay in nearby Michigan City or Chesterton:',
          options: [
            { name: 'Blue Chip Casino Hotel', type: 'Premium', bookingLink: '#' },
            { name: 'Hampton Inn Michigan City', type: 'Mid-range', bookingLink: '#' },
            { name: 'Comfort Suites Chesterton', type: 'Budget-friendly', bookingLink: '#' }
          ]
        },
        tips: [
          'Wear sturdy shoes with good grip for sand dune hiking',
          'Bring layers - Lake Michigan creates cool temperatures',
          'Pack snacks and water - limited concessions off-season',
          'Check wind conditions - strong lake winds are common'
        ]
      },
      {
        dayNumber: 2,
        title: 'Prairie & Wetland Ecosystems',
        subtitle: 'Great Marsh Trail, Cowles Bog, and bird watching',
        activities: [
          {
            time: '8:30 AM - 10:00 AM',
            title: 'Cowles Bog Trail',
            description: 'Hike through diverse ecosystems from beach to bog. 4.7-mile round trip through wetlands, prairie, and oak savanna.',
            offSeasonAdvantage: 'Fall colors and spring wildflowers!',
            image: '[Photo: Cowles Bog boardwalk in autumn]'
          },
          {
            time: '11:00 AM - 12:30 PM',
            title: 'Great Marsh Trail',
            description: 'Easy 1-mile loop through wetland habitat. Excellent bird watching opportunities with viewing platform.',
            birdWatch: 'Great Blue Herons, migrating warblers, and waterfowl.',
            image: '[Photo: Great Marsh viewing platform]'
          },
          {
            time: '2:00 PM - 4:00 PM',
            title: 'Succession Trail',
            description: 'Learn about plant succession from beach to forest. 1-mile trail shows how dunes become woodland over time.',
            educational: 'Perfect example of ecological succession!',
            image: '[Photo: Succession Trail forest section]'
          }
        ],
        dining: {
          title: 'Local Dining Recommendations',
          options: [
            { name: 'Bartlett\'s Gourmet Grill', cuisine: 'American', location: 'Michigan City' },
            { name: 'Lucrezia Cafe', cuisine: 'Italian', location: 'Chesterton' },
            { name: 'Shoreline Brewery', cuisine: 'Brewpub', location: 'Michigan City' }
          ]
        },
        tips: [
          'Bring binoculars for excellent bird watching',
          'Trails can be muddy in spring - waterproof boots recommended',
          'Download bird identification app for species spotting',
          'Early morning offers best wildlife viewing'
        ]
      },
      {
        dayNumber: 3,
        title: 'Historical Sites & Lighthouse',
        subtitle: 'Chellberg Farm, Bailly Homestead, and Michigan City lighthouse',
        activities: [
          {
            time: '9:00 AM - 10:30 AM',
            title: 'Chellberg Farm',
            description: 'Explore historic 1880s Swedish immigrant farm. See period buildings, farm animals, and traditional farming methods.',
            historical: 'Authentic glimpse into 19th century farming life.',
            image: '[Photo: Chellberg Farm buildings in autumn]'
          },
          {
            time: '11:00 AM - 12:00 PM',
            title: 'Bailly Homestead',
            description: 'Visit the 1830s fur trader homestead. Learn about early European settlement in the Indiana Dunes region.',
            cultural: 'Important French-Canadian trading post history.',
            image: '[Photo: Bailly Homestead historic buildings]'
          },
          {
            time: '1:30 PM - 3:30 PM',
            title: 'Michigan City East Pier Lighthouse',
            description: 'Historic red lighthouse at end of pier. Great for photography and storm watching (from safe distance).',
            photography: 'Dramatic lake views and lighthouse shots!',
            image: '[Photo: East Pier Lighthouse with waves]'
          },
          {
            time: '4:00 PM - 5:30 PM',
            title: 'Washington Park Beach',
            description: 'Large public beach adjacent to lighthouse. Perfect for sunset viewing and beach combing.',
            relaxation: 'Beautiful end-of-day lake views.',
            image: '[Photo: Washington Park Beach sunset]'
          }
        ],
        shopping: {
          title: 'Local Shopping & Attractions',
          options: [
            { name: 'Lighthouse Place Premium Outlets', type: 'Shopping', location: 'Michigan City' },
            { name: 'Blue Chip Casino', type: 'Entertainment', location: 'Michigan City' },
            { name: 'Historic Downtown Chesterton', type: 'Antiques & Arts', location: 'Chesterton' }
          ]
        },
        tips: [
          'Check lighthouse accessibility - pier can be closed in storms',
          'Bring camera for historic building photography',
          'Farm may have seasonal activities and demonstrations',
          'Dress warmly for pier walking in off-season'
        ]
      },
      {
        dayNumber: 4,
        title: 'Miller Woods & Chicago Skyline Views',
        subtitle: 'Miller Woods Trail, Paul H. Douglas Center, and departure',
        activities: [
          {
            time: '9:00 AM - 11:00 AM',
            title: 'Miller Woods Trail',
            description: '2.1-mile round trip through oak savanna and wetlands. Leads to secluded Lake Michigan beach with Chicago skyline views.',
            skylineView: 'Clear days offer stunning Chicago skyline!',
            image: '[Photo: Chicago skyline from Miller Woods beach]'
          },
          {
            time: '11:30 AM - 12:30 PM',
            title: 'Paul H. Douglas Center',
            description: 'Environmental education center with exhibits about Lake Michigan ecology and dune formation. Great rainy day backup.',
            educational: 'Interactive exhibits about dune ecosystems.',
            image: '[Photo: Paul H. Douglas Center exhibits]'
          },
          {
            time: '1:00 PM - 2:30 PM',
            title: 'Final Beach Walk & Reflection',
            description: 'Choose your favorite beach section for final exploration. Collect memories and perhaps some unique Lake Michigan stones.',
            souvenir: 'Beautiful beach glass and smooth stones.',
            image: '[Photo: Lake Michigan beach stones and driftwood]'
          }
        ],
        departure: {
          title: 'Departure Information',
          airportDistances: [
            { name: 'Chicago Midway Airport', distance: '45 minutes', direction: 'West' },
            { name: 'Chicago O\'Hare Airport', distance: '65 minutes', direction: 'Northwest' },
            { name: 'South Bend Airport', distance: '30 minutes', direction: 'East' }
          ]
        },
        tips: [
          'Allow extra time for Chicago traffic if flying out',
          'Miller Woods can be less crowded than other beach areas',
          'Visitor center gifts make great souvenirs',
          'Take final photos from dune overlooks'
        ]
      }
    ],
    packingList: {
      clothing: [
        'Waterproof jacket and pants',
        'Layered clothing system',
        'Warm hat and gloves',
        'Sturdy hiking boots',
        'Comfortable walking shoes',
        'Sun hat and sunglasses'
      ],
      gear: [
        'Daypack for hiking',
        'Water bottles (2 liters minimum)',
        'Binoculars for bird watching',
        'Camera with extra batteries',
        'Insect repellent',
        'Sunscreen',
        'Trail snacks',
        'First aid kit'
      ],
      optional: [
        'Beach towel for sitting',
        'Sand toys for kids',
        'Fishing license and gear',
        'Picnic supplies',
        'Bird identification guide',
        'Beach umbrella for wind protection'
      ]
    },
    transportation: {
      directions: 'Indiana Dunes National Park is located along Lake Michigan in Northwest Indiana, about 50 miles from downtown Chicago.',
      parking: 'Multiple parking areas available. West Beach ($6/vehicle), Mount Baldy (free), and various trailheads.',
      publicTransit: 'Limited. South Shore Line train stops in Michigan City and Beverly Shores, but park access requires additional transportation.',
      tips: [
        'GPS coordinates: 41.6533° N, 87.0853° W',
        'Park entrance fees required at some locations',
        'Download offline maps - cell service can be spotty',
        'Consider park annual pass if visiting multiple NPS sites'
      ]
    },
    budgetEstimate: {
      perPerson: {
        budget: '$85-120/day',
        midRange: '$150-200/day',
        luxury: '$250-350/day'
      },
      breakdown: {
        accommodation: 'Budget: $60-80, Mid-range: $120-150, Luxury: $200-300',
        food: 'Budget: $25-40, Mid-range: $50-75, Luxury: $80-120',
        activities: 'Park fees: $15/vehicle, Optional tours: $20-50',
        transportation: 'Gas: $30-50, Parking: $6/day at some areas'
      },
      savingsTips: [
        'Book accommodations in advance for off-season deals',
        'Pack lunches and snacks for trail days',
        'Free activities include all hiking trails and beach access',
        'Many ranger programs are free when available'
      ]
    },
    importantInfo: {
      emergencyContacts: [
        { service: 'Park Emergency', number: '911' },
        { service: 'Park Headquarters', number: '(219) 395-1882' },
        { service: 'Visitor Information', number: '(219) 395-1882' }
      ],
      facilities: {
        restrooms: 'Available at visitor centers and main beach areas',
        water: 'Potable water at visitor centers and some trailheads',
        food: 'Limited concessions off-season - bring snacks',
        medical: 'Nearest hospital: Franciscan Health Michigan City'
      },
      seasonalConsiderations: [
        'Some trails may be muddy or icy in shoulder seasons',
        'Lake Michigan can have dangerous conditions - check weather',
        'Visitor center hours reduced in off-season',
        'Some parking areas may have limited winter maintenance'
      ]
    }
  },

  'virgin-islands': {
    title: 'Virgin Islands National Park',
    subtitle: '5-Day Caribbean Paradise Adventure',
    description: 'Experience the pristine beaches, coral reefs, and tropical landscapes of St. John during the peaceful off-season months.',
    
    days: [
      {
        day: 1,
        title: 'Arrival & Cruz Bay Exploration',
        subtitle: 'Getting oriented in Caribbean paradise',
        activities: [
          {
            time: '9:00 AM',
            activity: 'Ferry from St. Thomas to Cruz Bay',
            description: 'Take the scenic 20-minute ferry ride from Red Hook, St. Thomas to Cruz Bay, St. John. Book tickets in advance during off-season.',
            duration: '30 minutes',
            difficulty: 'Easy',
            tips: ['Arrive 30 minutes early', 'Bring cash for ferry tickets', 'Sit on right side for best views']
          },
          {
            time: '10:00 AM',
            activity: 'Visitor Center & Permits',
            description: 'Stop at Virgin Islands National Park Visitor Center for maps, permits, and current trail conditions. Learn about the park\'s history.',
            duration: '45 minutes',
            difficulty: 'Easy',
            tips: ['Get park maps and snorkeling guides', 'Ask about turtle nesting locations', 'Check weather updates']
          },
          {
            time: '11:00 AM',
            activity: 'Cruz Bay Town Walk',
            description: 'Explore the charming town center, local shops, and historic sites. Visit Elaine Ione Sprauve Library and Museum.',
            duration: '2 hours',
            difficulty: 'Easy',
            tips: ['Try local fruit at the market', 'Exchange money at local banks', 'Ask locals for restaurant recommendations']
          },
          {
            time: '2:00 PM',
            activity: 'Virgin Islands National Park Headquarters Trail',
            description: 'Easy 0.9-mile loop trail with historical ruins and bay views. Perfect introduction to the island\'s cultural history.',
            duration: '1.5 hours',
            difficulty: 'Easy',
            tips: ['Wear comfortable walking shoes', 'Bring water and hat', 'Look for historical interpretation signs']
          },
          {
            time: '4:00 PM',
            activity: 'Frank Bay Beach',
            description: 'Relax at this local favorite beach near Cruz Bay. Great for swimming and watching sunset preparations.',
            duration: '2 hours',
            difficulty: 'Easy',
            tips: ['Less crowded than tourist beaches', 'Good for beginner snorkeling', 'Watch for sea turtles']
          }
        ]
      },
      {
        day: 2,
        title: 'Trunk Bay & Underwater Trail',
        subtitle: 'World-famous snorkeling paradise',
        activities: [
          {
            time: '8:00 AM',
            activity: 'Early Morning Trunk Bay Visit',
            description: 'Arrive early at world-renowned Trunk Bay to enjoy the underwater snorkel trail before crowds arrive.',
            duration: '4 hours',
            difficulty: 'Easy',
            tips: ['Arrive by 8 AM for best experience', 'Bring reef-safe sunscreen only', 'Follow underwater trail markers']
          },
          {
            time: '9:00 AM',
            activity: 'Underwater Snorkel Trail',
            description: 'Follow the 225-yard underwater trail with labeled coral formations and tropical fish. One of the world\'s first underwater trails.',
            duration: '1-2 hours',
            difficulty: 'Easy-Moderate',
            tips: ['Take your time reading underwater signs', 'Don\'t touch coral or marine life', 'Use biodegradable sunscreen only']
          },
          {
            time: '12:00 PM',
            activity: 'Trunk Bay Beach Time',
            description: 'Relax on the pristine white sand beach, consistently rated among world\'s most beautiful beaches.',
            duration: '2 hours',
            difficulty: 'Easy',
            tips: ['Shade is limited, bring umbrella', 'Beach has facilities and snack bar', 'Perfect for photography']
          },
          {
            time: '3:00 PM',
            activity: 'Cinnamon Bay Beach',
            description: 'Visit nearby Cinnamon Bay for different snorkeling experience and historical sugar mill ruins.',
            duration: '3 hours',
            difficulty: 'Easy',
            tips: ['Explore sugar mill ruins', 'Good for kayaking rentals', 'Less crowded than Trunk Bay']
          },
          {
            time: '6:00 PM',
            activity: 'Sunset at Peace Hill',
            description: 'Short hike to Peace Hill windmill ruins for panoramic sunset views over the Caribbean.',
            duration: '1 hour',
            difficulty: 'Easy',
            tips: ['Bring camera for sunset photos', 'Mosquito repellent recommended', 'Easy 10-minute walk from parking']
          }
        ]
      },
      {
        day: 3,
        title: 'Reef Bay Trail & Cultural History',
        subtitle: 'Rainforest hike with petroglyphs and sugar mill ruins',
        activities: [
          {
            time: '7:30 AM',
            activity: 'Early Start for Reef Bay Trail',
            description: 'Begin the challenging but rewarding 2.2-mile downhill hike through tropical rainforest to secluded beach.',
            duration: '6 hours total',
            difficulty: 'Moderate-Challenging',
            tips: ['Start early to avoid afternoon heat', 'Arrange return transportation', 'Bring plenty of water and snacks']
          },
          {
            time: '9:00 AM',
            activity: 'Petroglyphs Site Visit',
            description: 'Discover ancient Taíno petroglyphs carved into rocks near a freshwater pool. These are some of the Caribbean\'s best-preserved rock art.',
            duration: '30 minutes',
            difficulty: 'Easy',
            tips: ['Don\'t touch the ancient carvings', 'Bring camera with good zoom', 'Learn about Taíno culture before visiting']
          },
          {
            time: '10:30 AM',
            activity: 'Sugar Mill Ruins Exploration',
            description: 'Explore extensive ruins of 18th-century sugar plantation including mill, manager\'s house, and slave quarters.',
            duration: '1 hour',
            difficulty: 'Easy',
            tips: ['Respectful exploration of historical sites', 'Imagine the island\'s colonial history', 'Watch for interpretive signs']
          },
          {
            time: '12:00 PM',
            activity: 'Reef Bay Beach',
            description: 'Reach the secluded Reef Bay beach accessible only by boat or hiking trail. Perfect for swimming and snorkeling.',
            duration: '2 hours',
            difficulty: 'Easy',
            tips: ['Beach has no facilities', 'Great snorkeling on both sides', 'Usually completely empty']
          },
          {
            time: '2:30 PM',
            activity: 'Return Hike or Boat Pickup',
            description: 'Either hike back up the challenging trail or arrange boat pickup back to Cruz Bay (seasonal availability).',
            duration: '2-3 hours',
            difficulty: 'Challenging (if hiking)',
            tips: ['Boat pickup must be arranged in advance', 'Uphill return hike is strenuous', 'Pace yourself and take breaks']
          }
        ]
      },
      {
        day: 4,
        title: 'Coral World & East End Beaches',
        subtitle: 'Marine life and pristine eastern shores',
        activities: [
          {
            time: '8:30 AM',
            activity: 'Drive to Coral Bay',
            description: 'Scenic drive to the island\'s more remote eastern end. Rent a car or join organized tour to access eastern beaches.',
            duration: '45 minutes',
            difficulty: 'Easy',
            tips: ['Roads can be steep and winding', 'Fill up gas tank in Cruz Bay', 'Drive slowly and enjoy scenic views']
          },
          {
            time: '9:30 AM',
            activity: 'Salt Pond Bay',
            description: 'Snorkel at this protected bay with excellent coral reefs and calm, clear waters perfect for underwater photography.',
            duration: '3 hours',
            difficulty: 'Easy-Moderate',
            tips: ['Parking can be limited', 'Excellent coral formations', 'Bring underwater camera']
          },
          {
            time: '1:00 PM',
            activity: 'Drunk Bay Exploration',
            description: 'Unique beach covered in sea glass and coral fragments. Popular with beachcombers and photographers.',
            duration: '1.5 hours',
            difficulty: 'Easy',
            tips: ['Perfect for sea glass collecting', 'Rocky coastline, not for swimming', 'Great for photography']
          },
          {
            time: '3:00 PM',
            activity: 'Lameshur Bay Beaches',
            description: 'Visit both Little and Great Lameshur Bays, accessible via rough dirt road but offering pristine snorkeling.',
            duration: '3 hours',
            difficulty: 'Easy',
            tips: ['Road requires careful driving', 'Two beautiful bays to explore', 'Often completely deserted']
          },
          {
            time: '6:00 PM',
            activity: 'Coral Bay Sunset',
            description: 'Watch sunset from Coral Bay with views of British Virgin Islands in the distance.',
            duration: '1 hour',
            difficulty: 'Easy',
            tips: ['Stop at Skinny Legs Bar & Restaurant', 'Great views of BVI', 'More laid-back than Cruz Bay']
          }
        ]
      },
      {
        day: 5,
        title: 'Final Adventures & Departure',
        subtitle: 'Last-minute exploration and shopping',
        activities: [
          {
            time: '8:00 AM',
            activity: 'Catamaran Snorkel Tour (Optional)',
            description: 'Join half-day sailing trip to multiple snorkel sites around St. John and nearby cays (if available during off-season).',
            duration: '4 hours',
            difficulty: 'Easy',
            tips: ['Book in advance, limited off-season availability', 'Includes equipment and refreshments', 'Great way to see multiple sites']
          },
          {
            time: '8:30 AM',
            activity: 'Annaberg Sugar Plantation Ruins',
            description: 'Alternative land-based activity: explore the most complete sugar plantation ruins in the Virgin Islands.',
            duration: '1.5 hours',
            difficulty: 'Easy',
            tips: ['Self-guided tour with interpretive trail', 'Learn about colonial and slavery history', 'Beautiful views of Leinster Bay']
          },
          {
            time: '11:00 AM',
            activity: 'Leinster Bay Snorkeling',
            description: 'Snorkel at this calm, protected bay near Annaberg ruins with good coral and tropical fish.',
            duration: '2 hours',
            difficulty: 'Easy',
            tips: ['Calm waters perfect for beginners', 'Good coral formations', 'Often see sea turtles']
          },
          {
            time: '1:30 PM',
            activity: 'Mongoose Junction Shopping',
            description: 'Browse local art galleries, craft shops, and boutiques in this charming outdoor shopping complex.',
            duration: '2 hours',
            difficulty: 'Easy',
            tips: ['Unique local artwork and crafts', 'Climate-controlled shops', 'Good place for souvenirs']
          },
          {
            time: '4:00 PM',
            activity: 'Final Beach Time at Honeymoon Beach',
            description: 'Spend last hours at peaceful Honeymoon Beach, accessible by short trail from Caneel Bay area.',
            duration: '2 hours',
            difficulty: 'Easy',
            tips: ['Quiet beach perfect for relaxation', '10-minute walk from Caneel Bay', 'Good snorkeling on both ends']
          },
          {
            time: '6:30 PM',
            activity: 'Ferry Departure',
            description: 'Return ferry to St. Thomas for flights or continue Caribbean island hopping adventure.',
            duration: '30 minutes',
            difficulty: 'Easy',
            tips: ['Check ferry schedule in advance', 'Arrive 30 minutes early', 'Consider staying for sunset cruise']
          }
        ]
      }
    ]
  },

  'redwoods': {
    title: '4-Day Redwood National and State Parks Itinerary',
    subtitle: 'Complete off-season guide for September-November, April-May',
    description: 'Experience the world\'s tallest trees and pristine California coastline during ideal off-season months. This itinerary covers ancient groves, scenic coastal drives, and hidden forest gems while avoiding summer crowds.',
    totalDays: 4,
    bestMonths: ['September', 'October', 'November', 'April', 'May'],
    days: [
      {
        dayNumber: 1,
        title: 'Tall Trees Grove & Prairie Creek',
        subtitle: 'Ancient Giants and Roosevelt Elk',
        activities: [
          {
            time: '9:00 AM - 10:30 AM',
            title: 'Prairie Creek Visitor Center',
            description: 'Start at Prairie Creek Redwoods State Park visitor center. Get permits for Tall Trees Grove and current trail conditions.',
            offSeasonAdvantage: 'No permit reservations required during off-season!',
            image: '[Photo: Prairie Creek Visitor Center with elk in meadow]'
          },
          {
            time: '11:00 AM - 1:00 PM',
            title: 'Tall Trees Grove Hike',
            description: 'Hike to the former world\'s tallest tree location. 3-mile round trip through old-growth redwood forest to grove of giant trees.',
            proTip: 'Fog creates mystical lighting effects in fall and spring!',
            difficulty: 'Moderate - some steep sections',
            image: '[Photo: Tall Trees Grove with fog filtering through canopy]'
          },
          {
            time: '2:30 PM - 4:30 PM',
            title: 'Cathedral Trees Trail',
            description: 'Easy 1-mile loop through magnificent old-growth redwood cathedral. Perfect introduction to giant redwood ecosystem.',
            wildlifeWatch: 'Look for Roosevelt elk in nearby meadows.',
            difficulty: 'Easy - flat loop trail',
            image: '[Photo: Cathedral-like grove of giant redwoods]'
          },
          {
            time: '5:00 PM - 6:00 PM',
            title: 'Elk Prairie Sunset',
            description: 'Watch Roosevelt elk grazing in the prairie during golden hour. Excellent wildlife photography opportunity.',
            photographyTip: 'Bring telephoto lens - elk can be 100+ yards away.',
            image: '[Photo: Roosevelt elk silhouettes at sunset]'
          }
        ],
        accommodations: {
          title: 'Day 1 Accommodations',
          description: 'Book your first night near Prairie Creek or Eureka area:',
          options: [
            { name: 'Elk Meadow Cabins', type: 'Premium forest setting', bookingLink: '#' },
            { name: 'Eureka Historic Inn', type: 'Mid-range coastal town', bookingLink: '#' },
            { name: 'Prairie Creek Campground', type: 'Budget camping option', bookingLink: '#' }
          ]
        },
        tips: [
          'Arrive early to avoid any crowds at Tall Trees trailhead',
          'Bring waterproof boots - trails can be muddy after rain',
          'Pack layers - temperature varies significantly under canopy',
          'Download offline maps - cell service is very limited'
        ]
      },
      {
        dayNumber: 2,
        title: 'Fern Canyon & Gold Bluffs Beach',
        subtitle: 'Jurassic Landscapes and Coastal Beauty',
        activities: [
          {
            time: '8:00 AM - 10:00 AM',
            title: 'Drive to Gold Bluffs Beach',
            description: 'Scenic drive on Davison Road (gravel) to Gold Bluffs Beach. Road requires vehicle with good clearance but accessible to most cars.',
            drivingTip: 'Drive slowly - road can be rough and dusty.',
            image: '[Photo: Coastal drive through redwood forest]'
          },
          {
            time: '10:30 AM - 12:30 PM',
            title: 'Fern Canyon Hike',
            description: 'Walk through 30-foot-high walls covered in ferns. This narrow canyon was featured in Jurassic Park 2. Stream crossings required.',
            offSeasonAdvantage: 'Higher water levels create more dramatic scenery!',
            difficulty: 'Easy but involves stream crossings',
            image: '[Photo: Fern Canyon with lush green walls and stream]'
          },
          {
            time: '1:00 PM - 3:00 PM',
            title: 'Gold Bluffs Beach Exploration',
            description: 'Walk the wild, windswept beach where redwoods meet the Pacific Ocean. Look for Roosevelt elk on the beach.',
            wildlifeWatch: 'Elk often graze on beach grass and seaweed.',
            image: '[Photo: Roosevelt elk on Gold Bluffs Beach with redwoods behind]'
          },
          {
            time: '3:30 PM - 5:30 PM',
            title: 'James Irvine Trail',
            description: 'Hike part of the 4.4-mile trail connecting Fern Canyon to Prairie Creek through old-growth forest (can be done as partial hike).',
            difficulty: 'Moderate - can choose distance based on time',
            proTip: 'Trail showcases diverse forest ecosystems beyond just redwoods.',
            image: '[Photo: Mixed forest trail with redwoods and ferns]'
          }
        ],
        tips: [
          'Waterproof boots essential for Fern Canyon stream crossings',
          'Bring extra socks in case feet get wet',
          'Check Davison Road conditions - may close during heavy rain',
          'Pack lunch - no services available at Gold Bluffs Beach'
        ]
      },
      {
        dayNumber: 3,
        title: 'Avenue of the Giants & Humboldt Redwoods',
        subtitle: 'World\'s Most Famous Redwood Drive',
        activities: [
          {
            time: '9:00 AM - 10:30 AM',
            title: 'Drive-Through Tree Park',
            description: 'Drive through living redwood tree (if car fits) or walk through for photos. Classic roadside attraction with giant carved trees.',
            funFact: 'Trees were carved in the 1930s as tourist attractions.',
            image: '[Photo: Car driving through carved redwood tree]'
          },
          {
            time: '11:00 AM - 12:30 PM',
            title: 'Founders Grove Nature Trail',
            description: 'Easy 0.6-mile loop through magnificent old-growth redwoods, including fallen giants you can walk through.',
            accessibility: 'Wheelchair accessible boardwalk available.',
            difficulty: 'Easy - flat nature trail',
            image: '[Photo: Massive fallen redwood log with people for scale]'
          },
          {
            time: '1:30 PM - 3:30 PM',
            title: 'Avenue of the Giants Scenic Drive',
            description: '31-mile scenic drive through Humboldt Redwoods State Park. Stop at multiple groves and viewpoints along the route.',
            drivingTip: 'Allow 3+ hours with stops - don\'t rush this experience.',
            image: '[Photo: Classic Avenue of the Giants road with towering redwoods]'
          },
          {
            time: '4:00 PM - 5:30 PM',
            title: 'Rockefeller Forest Hike',
            description: 'Walk through the largest remaining old-growth redwood forest. Multiple trail options from easy strolls to longer hikes.',
            superlative: 'Contains some of the tallest trees on Earth!',
            difficulty: 'Easy to Moderate depending on trail choice',
            image: '[Photo: Cathedral-like grove in Rockefeller Forest]'
          }
        ],
        tips: [
          'Start early to maximize daylight for photography',
          'Bring camera with wide-angle lens for tree photography',
          'Many stops along Avenue of the Giants - plan extra time',
          'Gas up beforehand - limited services along scenic route'
        ]
      },
      {
        dayNumber: 4,
        title: 'Coastal Redwoods & Departure',
        subtitle: 'Newton B. Drury Scenic Parkway and Final Groves',
        activities: [
          {
            time: '8:30 AM - 10:00 AM',
            title: 'Newton B. Drury Scenic Parkway',
            description: 'Drive the 8-mile scenic parkway through Prairie Creek Redwoods State Park. Stop at multiple pullouts and short trails.',
            offSeasonAdvantage: 'Enhanced fog effects and minimal traffic!',
            image: '[Photo: Scenic parkway with morning fog through redwoods]'
          },
          {
            time: '10:30 AM - 12:00 PM',
            title: 'Lady Bird Johnson Grove',
            description: 'Walk the 1.4-mile loop trail dedicated to the former First Lady. Excellent representation of old-growth redwood forest.',
            historicalNote: 'Dedicated in 1969 by Lady Bird Johnson herself.',
            difficulty: 'Easy - well-maintained trail',
            image: '[Photo: Lady Bird Johnson Grove dedication plaque with trees]'
          },
          {
            time: '1:00 PM - 2:30 PM',
            title: 'Trillium Falls Trail',
            description: 'Hike to beautiful 10-foot waterfall through diverse forest ecosystem. 2.8-mile round trip with redwoods and creek crossings.',
            seasonalNote: 'Falls are at peak flow during off-season months!',
            difficulty: 'Moderate - some elevation gain',
            image: '[Photo: Trillium Falls with lush forest surroundings]'
          },
          {
            time: '3:00 PM - 4:30 PM',
            title: 'Crescent Beach & Battery Point Lighthouse',
            description: 'End your redwoods adventure at the coast. Walk Crescent Beach and see historic lighthouse (accessible at low tide).',
            finalPhoto: 'Perfect spot for farewell photos with Pacific Ocean.',
            tideTip: 'Check tide tables for lighthouse access.',
            image: '[Photo: Battery Point Lighthouse with Crescent Beach]'
          },
          {
            time: '5:00 PM',
            title: 'Departure from Crescent City',
            description: 'Begin journey home from Crescent City or continue to other Northern California destinations.',
            drivingNote: 'Allow extra time for winding coastal and mountain roads.',
            image: '[Photo: Sunset over Pacific from Crescent City]'
          }
        ],
        tips: [
          'Check tide tables for Battery Point Lighthouse access',
          'Allow extra driving time for departure day',
          'Consider extending trip to Oregon coast or Crater Lake',
          'Take final photos at coast with redwoods in background'
        ]
      }
    ]
  },
  
  'yosemite': {
    title: '4-5 Day Yosemite National Park Itinerary',
    subtitle: 'Complete off-season guide for April, May, September, October',
    description: 'Experience the majesty of Yosemite National Park during the ideal off-season months. This itinerary covers iconic waterfalls, granite domes, and peaceful valley experiences while avoiding summer crowds.',
    totalDays: 5,
    bestMonths: ['April', 'May', 'September', 'October'],
    days: [
      {
        dayNumber: 1,
        title: 'Valley Floor Introduction',
        subtitle: 'Yosemite Falls, Swinging Bridge, and Valley View',
        activities: [
          {
            time: '8:00 AM - 10:00 AM',
            title: 'Yosemite Falls Lower Trail',
            description: 'Start with the iconic 1-mile hike to the base of North America\'s tallest waterfall. Best views and flow during spring off-season.',
            offSeasonAdvantage: 'Peak waterfall flow with dramatically fewer crowds!',
            image: '[Photo: Yosemite Falls with mist and rainbow]'
          },
          {
            time: '10:30 AM - 12:00 PM',
            title: 'Swinging Bridge Views',
            description: 'Walk to Swinging Bridge for classic views of Yosemite Falls and the valley. Perfect for photography and understanding the park\'s scale.',
            proTip: 'Morning light provides excellent photography conditions!',
            image: '[Photo: Yosemite Falls from Swinging Bridge perspective]'
          },
          {
            time: '1:00 PM - 3:00 PM',
            title: 'Valley View and El Capitan Meadow',
            description: 'Drive to Valley View for panoramic vistas, then visit El Capitan Meadow to watch rock climbers on the famous granite monolith.',
            wildlifeWatch: 'Look for black bears in meadows, especially during fall months.',
            image: '[Photo: El Capitan with climbers visible on the face]'
          },
          {
            time: '3:30 PM - 5:00 PM',
            title: 'Tunnel View Sunset',
            description: 'End the day at Tunnel View for the classic Yosemite Valley vista including El Capitan, Half Dome, and Bridalveil Fall.',
            photographyTip: 'Golden hour lighting makes this the most spectacular time for the iconic view.',
            image: '[Photo: Tunnel View at sunset with dramatic lighting]'
          }
        ],
        accommodations: {
          title: 'Day 1 Accommodations',
          description: 'Stay in Yosemite Valley for easy access:',
          options: [
            { name: 'Ahwahnee Hotel (The Majestic)', type: 'Premium', bookingLink: '#' },
            { name: 'Yosemite Valley Lodge', type: 'Mid-range', bookingLink: '#' },
            { name: 'Upper Pines Campground', type: 'Camping', bookingLink: '#' }
          ]
        },
        tips: [
          'Arrive early (by 7 AM) for parking at popular trailheads',
          'Download NPS Yosemite app for current conditions and updates',
          'Pack layers - valley temperatures can vary significantly',
          'Bring bear spray and store food properly'
        ]
      },
      {
        dayNumber: 2,
        title: 'Waterfalls and Granite Domes',
        subtitle: 'Bridalveil Fall, Mirror Lake, and Half Dome Views',
        activities: [
          {
            time: '8:00 AM - 9:30 AM',
            title: 'Bridalveil Fall Trail',
            description: 'Easy 1.2-mile roundtrip hike to one of Yosemite\'s most accessible waterfalls. Spectacular flow during spring snowmelt.',
            seasonalNote: 'Fall offers different beauty with autumn colors framing the waterfall.',
            image: '[Photo: Bridalveil Fall with autumn colors]'
          },
          {
            time: '10:00 AM - 1:00 PM',
            title: 'Mirror Lake Loop',
            description: 'Peaceful 2-5 mile walk (depending on route chosen) to seasonal Mirror Lake with reflections of Half Dome and surrounding cliffs.',
            reflectionTip: 'Best reflections in early morning when water is still.',
            image: '[Photo: Half Dome reflection in Mirror Lake]'
          },
          {
            time: '2:00 PM - 4:00 PM',
            title: 'Glacier Point Road Scenic Drive',
            description: 'Drive partway up Glacier Point Road (conditions permitting) for elevated valley views and different perspectives of the waterfalls.',
            roadNote: 'Check road conditions - may be closed in winter/early spring.',
            image: '[Photo: Valley view from Glacier Point Road]'
          },
          {
            time: '4:30 PM - 6:00 PM',
            title: 'Happy Isles and Vernal Fall Bridge',
            description: 'Easy walk to the bridge below Vernal Fall for close-up waterfall views and mist experience.',
            mistWarning: 'Bring rain jacket - bridge gets soaked from waterfall mist!',
            image: '[Photo: Vernal Fall from footbridge with mist]'
          }
        ],
        tips: [
          'Check Glacier Point Road closure status before driving',
          'Mirror Lake may be more meadow than lake in fall',
          'Waterproof gear essential for Vernal Fall bridge',
          'Happy Isles shuttle stop provides easy access'
        ]
      },
      {
        dayNumber: 3,
        title: 'High Country Adventure',
        subtitle: 'Mariposa Grove and Wawona Area',
        activities: [
          {
            time: '8:00 AM - 11:00 AM',
            title: 'Mariposa Grove of Giant Sequoias',
            description: 'Walk among ancient giant sequoias including the famous Grizzly Giant and California Tunnel Tree. Multiple trail options available.',
            ancientWonder: 'Some trees are over 2,000 years old!',
            image: '[Photo: Grizzly Giant sequoia with people for scale]'
          },
          {
            time: '11:30 AM - 12:30 PM',
            title: 'Wawona Historic District',
            description: 'Explore the historic Wawona Hotel area and Pioneer Yosemite History Center with preserved buildings and exhibits.',
            historicalNote: 'Learn about early tourism and park development.',
            image: '[Photo: Historic Wawona Hotel with surrounding meadows]'
          },
          {
            time: '1:30 PM - 4:00 PM',
            title: 'Chilnualna Falls Trail (Lower Portion)',
            description: 'Moderate hike to lower cascades and pools along Chilnualna Creek. Beautiful granite pools and smaller waterfalls.',
            swimmingOption: 'Natural pools perfect for a refreshing dip in warmer weather.',
            image: '[Photo: Granite pools at Chilnualna Falls]'
          },
          {
            time: '4:30 PM - 6:00 PM',
            title: 'Wawona Meadow Loop',
            description: 'Easy evening walk through peaceful meadow with views of surrounding peaks and possible wildlife sightings.',
            wildlifeWatch: 'Deer and black bears often graze in meadows during early morning and evening.',
            image: '[Photo: Wawona Meadow at sunset with deer]'
          }
        ],
        tips: [
          'Mariposa Grove requires shuttle or long walk from parking',
          'Wawona area is cooler and at higher elevation than valley',
          'Bring swimwear for Chilnualna Falls pools',
          'Wildlife is most active during dawn and dusk hours'
        ]
      },
      {
        dayNumber: 4,
        title: 'Backcountry and Overlooks',
        subtitle: 'Glacier Point and Taft Point Adventures',
        activities: [
          {
            time: '8:00 AM - 10:00 AM',
            title: 'Glacier Point Sunrise',
            description: 'Drive to Glacier Point for the ultimate Yosemite Valley overlook with Half Dome, waterfalls, and the High Sierra spread below.',
            sunriseNote: 'Arrive early for sunrise - one of the most spectacular viewpoints in any national park.',
            image: '[Photo: Sunrise over Half Dome from Glacier Point]'
          },
          {
            time: '10:30 AM - 12:00 PM',
            title: 'Taft Point and Fissures',
            description: 'Short but dramatic 1.1-mile roundtrip hike to an unfenced cliff overlook with vertigo-inducing views of El Capitan and the valley.',
            vertigo: 'Not for those afraid of heights - completely unfenced cliff edge!',
            image: '[Photo: Taft Point overhang with El Capitan view]'
          },
          {
            time: '1:00 PM - 3:30 PM',
            title: 'Sentinel Dome Trail',
            description: 'Moderate 2.2-mile roundtrip hike to a granite dome summit with 360-degree views including Half Dome, El Capitan, and the High Sierra.',
            panoramicViews: 'One of the best panoramic viewpoints accessible by moderate hiking.',
            image: '[Photo: 360-degree view from Sentinel Dome summit]'
          },
          {
            time: '4:00 PM - 6:00 PM',
            title: 'Washburn Point Sunset',
            description: 'Alternative sunset viewpoint near Glacier Point with slightly different angle and often fewer crowds.',
            sunsetTip: 'Perfect ending to high country day with alpenglow on Half Dome.',
            image: '[Photo: Half Dome alpenglow from Washburn Point]'
          }
        ],
        tips: [
          'Check Glacier Point Road conditions - may close with snow',
          'Bring warm layers for high elevation locations',
          'Taft Point requires caution - no safety barriers',
          'Allow extra time for scenic driving on Glacier Point Road'
        ]
      },
      {
        dayNumber: 5,
        title: 'Extended Valley Exploration',
        subtitle: 'Hidden gems and peaceful departures',
        activities: [
          {
            time: '8:00 AM - 10:00 AM',
            title: 'Cook\'s Meadow Loop',
            description: 'Easy 1-mile boardwalk loop through peaceful meadow with classic views of Half Dome, Glacier Point, and Swinging Bridge.',
            birdwatching: 'Excellent birding location with meadow and riparian species.',
            image: '[Photo: Half Dome reflection in Cook\'s Meadow wetlands]'
          },
          {
            time: '10:30 AM - 12:30 PM',
            title: 'Valley View Beach and Merced River',
            description: 'Relax along the Merced River with views of El Capitan, Cathedral Rocks, and Bridalveil Fall. Perfect for reflection and photography.',
            relaxation: 'Peaceful spot for contemplating your Yosemite experience.',
            image: '[Photo: Merced River with El Capitan reflection]'
          },
          {
            time: '1:30 PM - 3:00 PM',
            title: 'Ansel Adams Gallery and Village',
            description: 'Visit the famous Ansel Adams Gallery, Yosemite Museum, and Indian Village to learn about park history and photography.',
            culturalLearning: 'Understand the indigenous Ahwahneechee people\'s connection to Yosemite.',
            image: '[Photo: Ansel Adams Gallery with iconic prints displayed]'
          },
          {
            time: '4:00 PM',
            title: 'Departure via Big Oak Flat or Wawona',
            description: 'Begin departure from Yosemite via your chosen exit route, taking final photos and memories.',
            departureNote: 'Allow extra time for final stops and photo opportunities.',
            image: '[Photo: Final valley view during departure]'
          }
        ],
        tips: [
          'Visit gallery early for better selection of prints and books',
          'Check museum hours before planning visit',
          'Allow buffer time for unexpected wildlife sightings',
          'Purchase souvenirs and final supplies in the village'
        ]
      }
    ]
  },

  'gates-of-the-arctic': {
    title: '7-10 Day Gates of the Arctic Expedition',
    subtitle: 'Complete off-season arctic wilderness guide for April, May, September, October',
    description: 'Experience America\'s ultimate wilderness during the off-season months. This expedition covers access logistics, safety protocols, and arctic wilderness survival in the nation\'s most remote national park.',
    totalDays: 7,
    bestMonths: ['April', 'May', 'September', 'October'],
    difficultyLevel: 'Expert - Technical wilderness skills required',
    specialRequirements: 'Professional wilderness experience, technical mountaineering skills, comprehensive emergency preparedness',
    days: [
      {
        dayNumber: 1,
        title: 'Fairbanks to Anaktuvuk Pass',
        subtitle: 'Journey to the gateway of the Arctic',
        activities: [
          {
            time: '6:00 AM - 8:00 AM',
            title: 'Fairbanks Departure and Final Preparations',
            description: 'Final gear check, weather briefing, and communication plan review in Fairbanks. Coordinate with bush pilot for weather-dependent flight.',
            criticalNote: 'Weather can delay flights for days - build flexibility into schedule.',
            image: '[Photo: Bush plane preparations in Fairbanks]'
          },
          {
            time: '9:00 AM - 11:00 AM',
            title: 'Bush Flight to Anaktuvuk Pass',
            description: 'Scenic flight over endless wilderness to Anaktuvuk Pass, the only permanent settlement within park boundaries.',
            flightExperience: 'Spectacular aerial views of Brooks Range and arctic tundra.',
            image: '[Photo: Aerial view of Brooks Range mountains]'
          },
          {
            time: '12:00 PM - 6:00 PM',
            title: 'Village Orientation and Cultural Learning',
            description: 'Meet with local Inupiat residents, learn about traditional arctic survival, and understand cultural protocols.',
            culturalRespect: 'Show respect for indigenous knowledge and traditional ways.',
            image: '[Photo: Anaktuvuk Pass village with traditional and modern buildings]'
          }
        ],
        accommodations: {
          title: 'Day 1 Accommodations',
          description: 'Anaktuvuk Pass has limited lodging options:',
          options: [
            { name: 'Nunamiut Lodge', type: 'Village accommodation', bookingAdvice: 'Book months in advance' },
            { name: 'Camping near village', type: 'Wilderness camping', permit: 'Coordinate with village council' }
          ]
        },
        tips: [
          'Carry comprehensive emergency communication devices',
          'Respect indigenous cultural sites and practices',
          'Weather can change rapidly - be prepared for delays',
          'Stock up on any forgotten supplies - last chance for resupply'
        ]
      },
      {
        dayNumber: 2,
        title: 'Entry into the Wilderness',
        subtitle: 'First steps into pristine arctic wilderness',
        activities: [
          {
            time: '7:00 AM - 9:00 AM',
            title: 'Final Preparations and Route Planning',
            description: 'Final weather check, route confirmation, and emergency communication test. Review evacuation procedures.',
            safety: 'Establish check-in schedule with emergency contacts.',
            image: '[Photo: Expedition members checking GPS and maps]'
          },
          {
            time: '9:00 AM - 4:00 PM',
            title: 'Trek to First Wilderness Camp',
            description: 'Begin hiking into trackless wilderness. Navigate using GPS and compass across tundra terrain toward first planned campsite.',
            navigationChallenge: 'No trails - pure wilderness navigation required.',
            image: '[Photo: Hikers crossing vast arctic tundra]'
          },
          {
            time: '4:00 PM - 8:00 PM',
            title: 'Wilderness Camp Setup',
            description: 'Establish secure wilderness camp with wind protection, bear safety protocols, and emergency shelter procedures.',
            campingSkills: 'Arctic camping requires specialized techniques and gear.',
            image: '[Photo: Arctic expedition camp with mountain backdrop]'
          }
        ],
        tips: [
          'Travel light but carry emergency backup for everything',
          'Set up camp with wind protection as priority',
          'Establish strict food storage and bear safety protocols',
          'Test all communication devices before losing cell coverage'
        ]
      },
      {
        dayNumber: 3,
        title: 'Deep Wilderness Exploration',
        subtitle: 'Brooks Range foothills and valley systems',
        activities: [
          {
            time: '6:00 AM - 8:00 AM',
            title: 'Alpine Start and Route Assessment',
            description: 'Early departure for maximum daylight hours. Assess weather conditions and route options for the day.',
            arcticConditions: 'Daylight hours vary dramatically by season.',
            image: '[Photo: Dawn over arctic mountains with expedition silhouettes]'
          },
          {
            time: '8:00 AM - 3:00 PM',
            title: 'Brooks Range Foothills Trek',
            description: 'Navigate through valleys and foothills of the Brooks Range, experiencing pristine wilderness without any human impact.',
            wildlifeWatch: 'Possible caribou, wolves, grizzly bears, and arctic birds.',
            image: '[Photo: Hikers in vast valley with Brooks Range peaks]'
          },
          {
            time: '3:00 PM - 7:00 PM',
            title: 'River Crossing and Camp Selection',
            description: 'Navigate river crossings safely and select optimal campsite with water access and weather protection.',
            riverSafety: 'Arctic rivers can be unpredictable - safety first.',
            image: '[Photo: Safe river crossing technique in arctic conditions]'
          }
        ],
        tips: [
          'River crossings require extreme caution and proper technique',
          'Weather can change from pleasant to dangerous rapidly',
          'Maintain constant situational awareness for wildlife',
          'Document location precisely for emergency evacuation if needed'
        ]
      },
      {
        dayNumber: 4,
        title: 'Arctic Wilderness Immersion',
        subtitle: 'Complete wilderness solitude and survival skills',
        activities: [
          {
            time: '7:00 AM - 10:00 AM',
            title: 'Wilderness Skills Practice',
            description: 'Practice emergency shelter construction, water purification, and navigation backup techniques.',
            skillBuilding: 'Reinforce critical survival skills in controlled environment.',
            image: '[Photo: Emergency shelter construction in arctic conditions]'
          },
          {
            time: '10:00 AM - 4:00 PM',
            title: 'Exploration of Pristine Valley',
            description: 'Explore untouched valley system with opportunities for wildlife observation and pristine wilderness photography.',
            solitudeExperience: 'Experience true wilderness solitude impossible to find elsewhere.',
            image: '[Photo: Untouched valley landscape with arctic wildlife]'
          },
          {
            time: '4:00 PM - 8:00 PM',
            title: 'Advanced Camp Techniques',
            description: 'Implement advanced arctic camping techniques and prepare for potential weather challenges.',
            weatherPrep: 'Arctic weather can deteriorate rapidly.',
            image: '[Photo: Secure arctic camp with storm protection]'
          }
        ],
        tips: [
          'Practice emergency procedures before you need them',
          'Maintain detailed log of locations and conditions',
          'Keep emergency gear accessible at all times',
          'Monitor weather patterns constantly for safety'
        ]
      },
      {
        dayNumber: 5,
        title: 'Peak Wilderness Experience',
        subtitle: 'Deepest penetration into arctic wilderness',
        activities: [
          {
            time: '6:00 AM - 9:00 AM',
            title: 'High-Value Target Location',
            description: 'Reach your expedition\'s primary wilderness destination - could be a specific peak, valley, or geographic feature.',
            achievement: 'Reaching goals in this wilderness is a significant accomplishment.',
            image: '[Photo: Expedition team at remote wilderness destination]'
          },
          {
            time: '9:00 AM - 3:00 PM',
            title: 'Extended Exploration and Documentation',
            description: 'Thorough exploration of your target area with scientific observation, photography, and personal reflection.',
            documentation: 'Document rare opportunity to experience pristine wilderness.',
            image: '[Photo: Detailed exploration of arctic landscape features]'
          },
          {
            time: '3:00 PM - 7:00 PM',
            title: 'Celebration and Preparation for Return',
            description: 'Celebrate reaching your wilderness goals while preparing for the return journey and changing weather.',
            milestone: 'Acknowledge the significance of your wilderness achievement.',
            image: '[Photo: Team celebration in remote arctic setting]'
          }
        ],
        tips: [
          'Take time to truly experience and appreciate the solitude',
          'Document your experience for sharing conservation message',
          'Begin planning return route with weather considerations',
          'Maintain high safety standards even when celebrating'
        ]
      },
      {
        dayNumber: 6,
        title: 'Return Journey Begins',
        subtitle: 'Strategic retreat from deep wilderness',
        activities: [
          {
            time: '6:00 AM - 8:00 AM',
            title: 'Weather Assessment and Route Planning',
            description: 'Thorough weather evaluation and route selection for return journey, accounting for changing conditions.',
            weatherStrategy: 'Return route may differ from entry route due to conditions.',
            image: '[Photo: Route planning with maps and GPS in arctic setting]'
          },
          {
            time: '8:00 AM - 4:00 PM',
            title: 'Strategic Wilderness Navigation',
            description: 'Navigate return route with emphasis on safety and efficiency, potentially using different valleys or passes.',
            navigationFocus: 'Return navigation can be more challenging than entry.',
            image: '[Photo: Navigation across trackless arctic terrain]'
          },
          {
            time: '4:00 PM - 8:00 PM',
            title: 'Intermediate Camp Establishment',
            description: 'Establish secure intermediate camp positioned for final push to extraction point.',
            strategicCamping: 'Camp location critical for successful extraction.',
            image: '[Photo: Strategic camp location with extraction considerations]'
          }
        ],
        tips: [
          'Don\'t rush the return - safety remains paramount',
          'Weather windows may be limited for extraction',
          'Maintain communication schedule with extraction coordination',
          'Keep extraction location GPS coordinates readily available'
        ]
      },
      {
        dayNumber: 7,
        title: 'Extraction and Departure',
        subtitle: 'Return to civilization and reflection',
        activities: [
          {
            time: '6:00 AM - 8:00 AM',
            title: 'Final Wilderness Morning',
            description: 'Last morning in the arctic wilderness. Final gear check and preparation for extraction.',
            reflection: 'Take time to absorb your wilderness experience.',
            image: '[Photo: Final sunrise over arctic wilderness]'
          },
          {
            time: '8:00 AM - 12:00 PM',
            title: 'Trek to Extraction Point',
            description: 'Navigate to predetermined extraction point for bush plane pickup. Weather permitting.',
            extractionRisk: 'Weather delays can extend expedition by days.',
            image: '[Photo: Approach to bush plane extraction point]'
          },
          {
            time: '12:00 PM - 2:00 PM',
            title: 'Bush Plane Extraction',
            description: 'Bush plane pickup from wilderness extraction point, weather and conditions permitting.',
            flightSafety: 'Pilot has final authority on flight safety decisions.',
            image: '[Photo: Bush plane extraction from remote wilderness]'
          },
          {
            time: '3:00 PM - 6:00 PM',
            title: 'Return to Fairbanks',
            description: 'Flight back to Fairbanks, gear decontamination, and expedition debrief.',
            reintegration: 'Gradual return to civilization after profound wilderness experience.',
            image: '[Photo: Aerial view departure from Gates of the Arctic]'
          }
        ],
        tips: [
          'Weather delays are common - remain flexible',
          'Decontaminate gear thoroughly before transport',
          'Document lessons learned for future expeditions',
          'Share conservation message from your experience'
        ]
      }
    ]
  },

  'acadia': {
    title: '4-5 Day Acadia National Park Itinerary',
    subtitle: 'Complete off-season guide for April, May, September, October',
    description: 'Experience the rugged beauty of Maine\'s coastal jewel during the ideal off-season months. This itinerary covers dramatic coastlines, mountain summits, and charming Bar Harbor while avoiding summer crowds.',
    totalDays: 5,
    bestMonths: ['April', 'May', 'September', 'October'],
    days: [
      {
        dayNumber: 1,
        title: 'Coastal Introduction & Bar Harbor',
        subtitle: 'Ocean Path and Cadillac Mountain Sunset',
        activities: [
          {
            time: '10:00 AM - 11:30 AM',
            title: 'Acadia Visitor Center',
            description: 'Start at Hulls Cove Visitor Center to get oriented, pick up maps, and check seasonal road closures. Watch the park film to understand Acadia\'s unique coastal ecosystem.',
            offSeasonAdvantage: 'No parking hassles and personalized ranger assistance!',
            image: '[Photo: Acadia Visitor Center with fall foliage]'
          },
          {
            time: '12:00 PM - 2:30 PM',
            title: 'Ocean Path Walk',
            description: 'Easy 2.2-mile round-trip walk along Acadia\'s famous rocky coastline. Experience crashing waves, tide pools, and dramatic granite cliffs between Sand Beach and Otter Cliffs.',
            proTip: 'Bring layers - coastal winds can be chilly even in warmer months!',
            image: '[Photo: Ocean Path rocky coastline with waves]'
          },
          {
            time: '3:00 PM - 5:00 PM',
            title: 'Bar Harbor Exploration',
            description: 'Explore charming Bar Harbor with its local shops, galleries, and waterfront. Perfect time to grab an early dinner at a local seafood restaurant.',
            offSeasonAdvantage: 'Restaurant reservations easier and local flavor more authentic!',
            image: '[Photo: Bar Harbor waterfront in off-season]'
          },
          {
            time: '5:30 PM - 7:00 PM',
            title: 'Cadillac Mountain Sunset',
            description: 'Drive up Cadillac Summit Road for panoramic sunset views. At 1,530 feet, it\'s the highest point on the East Coast and offers 360-degree views.',
            proTip: 'Check sunset time and arrive 30 minutes early for best positioning!',
            image: '[Photo: Sunset view from Cadillac Mountain summit]'
          }
        ],
        lodging: 'Bar Harbor area hotels or nearby campgrounds',
        meals: 'Lunch: Pack a picnic for Ocean Path. Dinner: Local seafood in Bar Harbor',
        tips: [
          'Dress in layers for changing coastal weather',
          'Tide pool exploration best at low tide',
          'Cadillac Summit Road may close in winter - check conditions'
        ]
      },
      {
        dayNumber: 2,
        title: 'Mountain Adventures & Historic Carriage Roads',
        subtitle: 'Precipice Trail and Carriage Road Cycling',
        activities: [
          {
            time: '8:00 AM - 10:00 AM',
            title: 'Cadillac Mountain Sunrise',
            description: 'Experience sunrise from the first place in the US to see daylight (October-March). Drive up early or hike the North Ridge Trail for a more adventurous approach.',
            offSeasonAdvantage: 'You might be the only ones there for this magical experience!',
            image: '[Photo: Sunrise over Frenchman Bay from Cadillac Mountain]'
          },
          {
            time: '10:30 AM - 2:00 PM',
            title: 'Precipice Trail (Seasonal)',
            description: 'Challenging 1.6-mile loop with iron rungs and ladders on Champlain Mountain\'s cliff face. Incredible views but closed March-August for falcon nesting.',
            proTip: 'If closed, try Great Head Trail for similar coastal mountain views!',
            image: '[Photo: Hiker on Precipice Trail iron rungs]'
          },
          {
            time: '2:30 PM - 5:30 PM',
            title: 'Carriage Roads Cycling',
            description: 'Explore John D. Rockefeller Jr.\'s historic carriage road system. Rent bikes in Bar Harbor and enjoy car-free cycling through forests and around ponds.',
            offSeasonAdvantage: 'Roads less crowded, fall foliage spectacular in September-October!',
            image: '[Photo: Cyclists on carriage road with stone bridge]'
          },
          {
            time: '6:00 PM - 7:00 PM',
            title: 'Jordan Pond House',
            description: 'Traditional ending spot for carriage road adventures. Famous for popovers and tea with views of the Bubbles mountains reflected in Jordan Pond.',
            proTip: 'Make reservations - this historic spot fills up even in off-season!',
            image: '[Photo: Jordan Pond with Bubbles mountains reflection]'
          }
        ],
        lodging: 'Continue Bar Harbor accommodations',
        meals: 'Early breakfast in Bar Harbor, packed lunch for trails, dinner at Jordan Pond House',
        tips: [
          'Check Precipice Trail closure status before planning',
          'Bike rentals available in Bar Harbor',
          'Carriage roads are also great for walking if not cycling'
        ]
      },
      {
        dayNumber: 3,
        title: 'Western Side Exploration',
        subtitle: 'Bass Harbor Head Light and Seawall',
        activities: [
          {
            time: '9:00 AM - 10:30 AM',
            title: 'Seawall Picnic Area',
            description: 'Explore the "quiet side" of Mount Desert Island. Walk along the natural seawall created by ocean storms, perfect for tide pooling at low tide.',
            offSeasonAdvantage: 'Peaceful solitude and amazing storm-watching opportunities!',
            image: '[Photo: Seawall coastline with tide pools]'
          },
          {
            time: '11:00 AM - 1:00 PM',
            title: 'Bass Harbor Head Light Station',
            description: 'Visit Maine\'s most photographed lighthouse perched on rocky cliffs. Short walk to viewing areas offers classic Maine coastal scenery.',
            proTip: 'Best light for photography is late afternoon, but morning visits avoid any crowds!',
            image: '[Photo: Bass Harbor Head lighthouse on rocky coast]'
          },
          {
            time: '2:00 PM - 4:30 PM',
            title: 'Wonderland & Ship Harbor Trails',
            description: 'Two easy trails near each other offering different coastal experiences. Wonderland leads to rocky shores, Ship Harbor to a peaceful inlet.',
            offSeasonAdvantage: 'Migrating birds and seals more visible in spring and fall!',
            image: '[Photo: Rocky shore at Wonderland trail end]'
          },
          {
            time: '5:00 PM - 6:30 PM',
            title: 'Southwest Harbor',
            description: 'Charming working fishing village with local restaurants and maritime character. Less touristy than Bar Harbor with authentic Maine atmosphere.',
            offSeasonAdvantage: 'Interact with locals and experience genuine fishing village life!',
            image: '[Photo: Southwest Harbor working waterfront]'
          }
        ],
        lodging: 'Consider Southwest Harbor for different perspective',
        meals: 'Breakfast in Bar Harbor, pack lunch for western side exploration, dinner in Southwest Harbor',
        tips: [
          'Low tide best for tide pooling at Seawall',
          'Western side more exposed to weather - dress warmly',
          'Less developed than eastern side - bring snacks and water'
        ]
      },
      {
        dayNumber: 4,
        title: 'Island Adventures Beyond the Park',
        subtitle: 'Schoodic Peninsula and Working Waterfront',
        activities: [
          {
            time: '9:00 AM - 10:30 AM',
            title: 'Drive to Schoodic Peninsula',
            description: 'Take scenic drive around Frenchman Bay to the less-visited Schoodic section of Acadia. One-way loop road offers dramatic coastal views.',
            offSeasonAdvantage: 'Often completely empty - your own private section of national park!',
            image: '[Photo: Schoodic Point waves crashing on granite]'
          },
          {
            time: '11:00 AM - 1:00 PM',
            title: 'Schoodic Point',
            description: 'Experience the raw power of the Atlantic Ocean crashing against massive granite slabs. Perfect spot for dramatic wave photography.',
            proTip: 'Storm seasons create spectacular wave action - but stay safe and back from edges!',
            image: '[Photo: Massive waves at Schoodic Point]'
          },
          {
            time: '2:00 PM - 4:00 PM',
            title: 'Winter Harbor & Lobster Experience',
            description: 'Visit authentic Maine lobster fishing community. Tour a lobster pound, learn about sustainable fishing practices, and enjoy fresh catch.',
            offSeasonAdvantage: 'Lobster season runs through fall - freshest catch and best prices!',
            image: '[Photo: Lobster boats in Winter Harbor]'
          },
          {
            time: '5:00 PM - 7:00 PM',
            title: 'Return Drive via Scenic Route 1',
            description: 'Take coastal Route 1 back to Bar Harbor, stopping at scenic overlooks and charming coastal towns along the way.',
            proTip: 'Stop in Prospect Harbor for iconic Maine lighthouse views!',
            image: '[Photo: Route 1 coastal scenery]'
          }
        ],
        lodging: 'Return to Bar Harbor base',
        meals: 'Early breakfast, lobster lunch in Winter Harbor, light dinner in Bar Harbor',
        tips: [
          'Schoodic Peninsula is 45 minutes from Bar Harbor',
          'Bring rain gear for coastal spray',
          'Local lobster pounds offer best value and experience'
        ]
      },
      {
        dayNumber: 5,
        title: 'Final Summits & Farewell',
        subtitle: 'Beehive Trail and Thunder Hole',
        activities: [
          {
            time: '8:00 AM - 11:00 AM',
            title: 'Beehive Trail Adventure',
            description: 'Challenging 1.4-mile loop with iron rungs up steep cliff faces. Offers incredible views over Sand Beach and the Atlantic Ocean.',
            offSeasonAdvantage: 'No crowds on narrow trail sections - safer and more enjoyable!',
            image: '[Photo: Hiker on Beehive Trail iron rungs with ocean view]'
          },
          {
            time: '11:30 AM - 12:30 PM',
            title: 'Sand Beach Visit',
            description: 'Acadia\'s famous pocket beach made of crushed shells and sea urchin fragments. Beautiful even when too cold for swimming.',
            proTip: 'Water temperature rarely exceeds 60°F even in summer - off-season is perfect for beach walks!',
            image: '[Photo: Sand Beach with Great Head in background]'
          },
          {
            time: '1:00 PM - 2:30 PM',
            title: 'Thunder Hole Finale',
            description: 'Natural rock formation where waves crash and create thunderous sounds. Timing with tide and wave conditions creates best effects.',
            offSeasonAdvantage: 'Storm seasons create most dramatic Thunder Hole experiences!',
            image: '[Photo: Thunder Hole wave action]'
          },
          {
            time: '3:00 PM - 5:00 PM',
            title: 'Final Bar Harbor Stroll',
            description: 'Last chance to explore Bar Harbor\'s shops, pick up Maine souvenirs, and reflect on your coastal Maine adventure over coffee or local beer.',
            offSeasonAdvantage: 'Relaxed pace, local conversations, and authentic Maine memories!',
            image: '[Photo: Bar Harbor main street in autumn]'
          }
        ],
        lodging: 'Departure day - check out times',
        meals: 'Hearty breakfast before Beehive Trail, lunch in Bar Harbor, early dinner before departure',
        tips: [
          'Beehive Trail requires good fitness and no fear of heights',
          'Thunder Hole best 2 hours before high tide',
          'Allow extra time for departure day packing and checkout'
        ]
      }
    ]
  }
};