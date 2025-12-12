import React from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm';

const PinnaclesReactTemplate = () => {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', lineHeight: '1.6', color: '#1f2937' }}>
      {/* Header Section */}
      <header style={{ 
        background: 'linear-gradient(135deg, #a16207, #d97706)', 
        color: 'white', 
        padding: '4rem 0 2rem 0', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3 
        }}></div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            fontWeight: '700', 
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Pinnacles National Park
          </h1>
          <p style={{ 
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', 
            maxWidth: '800px', 
            margin: '0 auto', 
            opacity: '0.95',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
          }}>
            Discover California's newest national park featuring towering rock spires, rare condors, and stunning wildflower displays during the perfect off-season months.
          </p>
        </div>
      </header>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        
        {/* Quick Info Cards */}
        <section style={{ padding: '3rem 0' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            <div style={{ 
              background: '#fefbf0', 
              padding: '1.5rem', 
              borderRadius: '1rem',
              border: '1px solid #fbbf24',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#a16207', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Best Off-Season</h3>
              <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#d97706', margin: '0.5rem 0' }}>Nov - Mar</p>
              <p style={{ fontSize: '0.9rem', color: '#92400e', margin: 0 }}>Perfect hiking weather & wildflowers</p>
            </div>
            <div style={{ 
              background: '#fefbf0', 
              padding: '1.5rem', 
              borderRadius: '1rem',
              border: '1px solid #fbbf24',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#a16207', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Crowd Level</h3>
              <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#d97706', margin: '0.5rem 0' }}>Low-Medium</p>
              <p style={{ fontSize: '0.9rem', color: '#92400e', margin: 0 }}>Peaceful trails & parking available</p>
            </div>
            <div style={{ 
              background: '#fefbf0', 
              padding: '1.5rem', 
              borderRadius: '1rem',
              border: '1px solid #fbbf24',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#a16207', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Weather</h3>
              <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#d97706', margin: '0.5rem 0' }}>60-75°F</p>
              <p style={{ fontSize: '0.9rem', color: '#92400e', margin: 0 }}>Cool, comfortable hiking conditions</p>
            </div>
            <div style={{ 
              background: '#fefbf0', 
              padding: '1.5rem', 
              borderRadius: '1rem',
              border: '1px solid #fbbf24',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#a16207', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Special Feature</h3>
              <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#d97706', margin: '0.5rem 0' }}>Condor Viewing</p>
              <p style={{ fontSize: '0.9rem', color: '#92400e', margin: 0 }}>California condors & wildflower blooms</p>
            </div>
          </div>
        </section>

        {/* Why Visit Off-Season */}
        <section style={{ 
          background: 'linear-gradient(135deg, #fefcf0, #fefbf0)', 
          padding: '3rem', 
          borderRadius: '1rem', 
          marginBottom: '3rem',
          border: '1px solid #fbbf24'
        }}>
          <h2 style={{ 
            color: '#a16207', 
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', 
            marginBottom: '2rem', 
            textAlign: 'center' 
          }}>
            Why Visit Pinnacles During Off-Season?
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            <div>
              <h3 style={{ color: '#d97706', fontSize: '1.3rem', marginBottom: '1rem' }}>🌡️ Perfect Weather</h3>
              <p style={{ color: '#92400e' }}>
                Avoid the scorching summer heat with comfortable 60-75°F temperatures. Cool mornings and pleasant afternoons make this the ideal time for rock climbing and hiking through the dramatic spires.
              </p>
            </div>
            <div>
              <h3 style={{ color: '#d97706', fontSize: '1.3rem', marginBottom: '1rem' }}>🌸 Wildflower Spectacle</h3>
              <p style={{ color: '#92400e' }}>
                February through April brings incredible wildflower displays throughout the park. Fields of California poppies, lupines, and other native wildflowers create stunning photography opportunities.
              </p>
            </div>
            <div>
              <h3 style={{ color: '#d97706', fontSize: '1.3rem', marginBottom: '1rem' }}>🦅 California Condor Viewing</h3>
              <p style={{ color: '#92400e' }}>
                Off-season months offer the best opportunities to spot the endangered California condor soaring above the pinnacles. These magnificent birds are more active during cooler months.
              </p>
            </div>
            <div>
              <h3 style={{ color: '#d97706', fontSize: '1.3rem', marginBottom: '1rem' }}>🥾 Accessible Trails</h3>
              <p style={{ color: '#92400e' }}>
                Popular trails like High Peaks and Condor Gulch are much more pleasant without summer heat. Rock climbing conditions are optimal, and cave exploration is comfortable year-round.
              </p>
            </div>
          </div>
        </section>

        {/* Activities & Experiences */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            color: '#a16207', 
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', 
            marginBottom: '2rem', 
            textAlign: 'center' 
          }}>
            Off-Season Activities & Experiences
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2rem' 
          }}>
            <div style={{ 
              background: '#ffffff', 
              padding: '2rem', 
              borderRadius: '1rem', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid #fbbf24'
            }}>
              <h3 style={{ color: '#d97706', fontSize: '1.4rem', marginBottom: '1rem' }}>🏔️ High Peaks Trail</h3>
              <p style={{ color: '#92400e', marginBottom: '1rem' }}>
                The park's most iconic trail offers breathtaking views of the towering rock spires. Cool weather makes this challenging hike much more enjoyable, with opportunities to spot rock climbers on the dramatic faces.
              </p>
              <div style={{ 
                background: '#fefcf0', 
                padding: '1rem', 
                borderRadius: '0.5rem', 
                borderLeft: '4px solid #d97706' 
              }}>
                <strong style={{ color: '#a16207' }}>Off-Season Tip:</strong> Start early for the best lighting on the rock formations and cooler temperatures on exposed sections.
              </div>
            </div>

            <div style={{ 
              background: '#ffffff', 
              padding: '2rem', 
              borderRadius: '1rem', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid #fbbf24'
            }}>
              <h3 style={{ color: '#d97706', fontSize: '1.4rem', marginBottom: '1rem' }}>🕳️ Cave Exploration</h3>
              <p style={{ color: '#92400e', marginBottom: '1rem' }}>
                Explore Balconies Cave and Bear Gulch Cave (seasonal closure check required). These talus caves formed by massive boulders create cool, dark passages perfect for adventure seekers.
              </p>
              <div style={{ 
                background: '#fefcf0', 
                padding: '1rem', 
                borderRadius: '0.5rem', 
                borderLeft: '4px solid #d97706' 
              }}>
                <strong style={{ color: '#a16207' }}>Off-Season Advantage:</strong> Caves maintain comfortable temperatures year-round, but off-season means fewer crowds in tight spaces.
              </div>
            </div>

            <div style={{ 
              background: '#ffffff', 
              padding: '2rem', 
              borderRadius: '1rem', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid #fbbf24'
            }}>
              <h3 style={{ color: '#d97706', fontSize: '1.4rem', marginBottom: '1rem' }}>🧗 Rock Climbing</h3>
              <p style={{ color: '#92400e', marginBottom: '1rem' }}>
                Pinnacles offers world-class rock climbing on unique volcanic rock formations. Off-season provides ideal conditions with cool temperatures and less crowded climbing areas.
              </p>
              <div style={{ 
                background: '#fefcf0', 
                padding: '1rem', 
                borderRadius: '0.5rem', 
                borderLeft: '4px solid #d97706' 
              }}>
                <strong style={{ color: '#a16207' }}>Winter Climbing:</strong> Perfect rock conditions and comfortable belaying weather make winter prime climbing season.
              </div>
            </div>

            <div style={{ 
              background: '#ffffff', 
              padding: '2rem', 
              borderRadius: '1rem', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid #fbbf24'
            }}>
              <h3 style={{ color: '#d97706', fontSize: '1.4rem', marginBottom: '1rem' }}>🌺 Wildflower Photography</h3>
              <p style={{ color: '#92400e', marginBottom: '1rem' }}>
                February through April transforms the park into a wildflower paradise. Photograph massive fields of California poppies, purple lupines, and other native species against dramatic rock backdrops.
              </p>
              <div style={{ 
                background: '#fefcf0', 
                padding: '1rem', 
                borderRadius: '0.5rem', 
                borderLeft: '4px solid #d97706' 
              }}>
                <strong style={{ color: '#a16207' }}>Peak Bloom:</strong> March typically offers the most spectacular wildflower displays, weather dependent.
              </div>
            </div>

            <div style={{ 
              background: '#ffffff', 
              padding: '2rem', 
              borderRadius: '1rem', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid #fbbf24'
            }}>
              <h3 style={{ color: '#d97706', fontSize: '1.4rem', marginBottom: '1rem' }}>🦅 Wildlife Watching</h3>
              <p style={{ color: '#92400e', marginBottom: '1rem' }}>
                Spot California condors, prairie falcons, and golden eagles soaring above the pinnacles. Ground wildlife includes bobcats, foxes, and various lizard species more active in cooler temperatures.
              </p>
              <div style={{ 
                background: '#fefcf0', 
                padding: '1rem', 
                borderRadius: '0.5rem', 
                borderLeft: '4px solid #d97706' 
              }}>
                <strong style={{ color: '#a16207' }}>Best Viewing:</strong> Early morning and late afternoon offer the best wildlife viewing opportunities.
              </div>
            </div>

            <div style={{ 
              background: '#ffffff', 
              padding: '2rem', 
              borderRadius: '1rem', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid #fbbf24'
            }}>
              <h3 style={{ color: '#d97706', fontSize: '1.4rem', marginBottom: '1rem' }}>⭐ Stargazing</h3>
              <p style={{ color: '#92400e', marginBottom: '1rem' }}>
                Clear winter nights offer exceptional stargazing opportunities away from city lights. The park's dark skies reveal the Milky Way and countless stars above the dramatic rock silhouettes.
              </p>
              <div style={{ 
                background: '#fefcf0', 
                padding: '1rem', 
                borderRadius: '0.5rem', 
                borderLeft: '4px solid #d97706' 
              }}>
                <strong style={{ color: '#a16207' }}>Dark Skies:</strong> New moon phases provide the darkest conditions for astronomy and astrophotography.
              </div>
            </div>
          </div>
        </section>

        {/* Planning Your Visit */}
        <section style={{ 
          background: '#ffffff', 
          padding: '3rem', 
          borderRadius: '1rem', 
          marginBottom: '3rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          border: '1px solid #fbbf24'
        }}>
          <h2 style={{ 
            color: '#a16207', 
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', 
            marginBottom: '2rem', 
            textAlign: 'center' 
          }}>
            Planning Your Off-Season Visit
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            <div>
              <h3 style={{ color: '#d97706', fontSize: '1.3rem', marginBottom: '1rem' }}>🏨 Where to Stay</h3>
              <ul style={{ color: '#92400e', lineHeight: '1.8' }}>
                <li><strong>Pinnacles Campground:</strong> Only in-park accommodation, reserve well in advance for weekend stays</li>
                <li><strong>Hollister:</strong> 30 minutes from East Entrance, full hotel amenities</li>
                <li><strong>Soledad:</strong> 25 minutes from West Entrance, budget-friendly options</li>
                <li><strong>King City:</strong> 45 minutes away, wider selection of accommodations</li>
              </ul>
            </div>
            
            <div>
              <h3 style={{ color: '#d97706', fontSize: '1.3rem', marginBottom: '1rem' }}>🍽️ Dining Options</h3>
              <ul style={{ color: '#92400e', lineHeight: '1.8' }}>
                <li><strong>Pinnacles Store:</strong> Limited snacks and drinks at campground</li>
                <li><strong>Pack Your Own:</strong> Recommended for full-day hiking</li>
                <li><strong>Hollister/Soledad:</strong> Restaurants and grocery stores in gateway towns</li>
                <li><strong>Picnic Areas:</strong> Several scenic spots throughout the park</li>
              </ul>
            </div>
            
            <div>
              <h3 style={{ color: '#d97706', fontSize: '1.3rem', marginBottom: '1rem' }}>🎯 What to Bring</h3>
              <ul style={{ color: '#92400e', lineHeight: '1.8' }}>
                <li><strong>Layers:</strong> Mornings can be cool, afternoons warm</li>
                <li><strong>Headlamp:</strong> Essential for cave exploration</li>
                <li><strong>Camera:</strong> For condors, wildflowers, and rock formations</li>
                <li><strong>Water:</strong> Bring plenty, limited sources in park</li>
                <li><strong>Sun Protection:</strong> Hat, sunscreen, sunglasses</li>
              </ul>
            </div>
            
            <div>
              <h3 style={{ color: '#d97706', fontSize: '1.3rem', marginBottom: '1rem' }}>⚠️ Important Notes</h3>
              <ul style={{ color: '#92400e', lineHeight: '1.8' }}>
                <li><strong>Two Entrances:</strong> East and West entrances are NOT connected by road through the park</li>
                <li><strong>Cave Closures:</strong> Bear Gulch Cave may close for bat protection (seasonal)</li>
                <li><strong>Weather:</strong> Check conditions, occasional winter rain</li>
                <li><strong>Climbing:</strong> Register at visitor center, follow Leave No Trace principles</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sample Itinerary */}
        <section style={{ 
          background: 'linear-gradient(135deg, #fefcf0, #fefbf0)', 
          padding: '3rem', 
          borderRadius: '1rem', 
          marginBottom: '3rem',
          border: '1px solid #fbbf24'
        }}>
          <h2 style={{ 
            color: '#a16207', 
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', 
            marginBottom: '2rem', 
            textAlign: 'center' 
          }}>
            Perfect 2-Day Off-Season Itinerary
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
            gap: '2rem' 
          }}>
            <div style={{ 
              background: '#ffffff', 
              padding: '2rem', 
              borderRadius: '1rem',
              border: '1px solid #fbbf24'
            }}>
              <h3 style={{ color: '#d97706', fontSize: '1.4rem', marginBottom: '1.5rem' }}>Day 1: East Entrance Exploration</h3>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#a16207', marginBottom: '0.5rem' }}>Morning (8:00 AM)</h4>
                <p style={{ color: '#92400e', fontSize: '0.95rem', marginBottom: '1rem' }}>
                  Start at East Entrance Visitor Center, then hike Condor Gulch Trail to High Peaks. Watch for California condors soaring overhead.
                </p>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#a16207', marginBottom: '0.5rem' }}>Afternoon (1:00 PM)</h4>
                <p style={{ color: '#92400e', fontSize: '0.95rem', marginBottom: '1rem' }}>
                  Explore Balconies Cave with headlamp, then hike Balconies Cliffs Trail for spectacular pinnacle views and photography.
                </p>
              </div>
              <div>
                <h4 style={{ color: '#a16207', marginBottom: '0.5rem' }}>Evening</h4>
                <p style={{ color: '#92400e', fontSize: '0.95rem' }}>
                  Set up camp at Pinnacles Campground or drive to Hollister for accommodation. Enjoy stargazing if staying in park.
                </p>
              </div>
            </div>
            
            <div style={{ 
              background: '#ffffff', 
              padding: '2rem', 
              borderRadius: '1rem',
              border: '1px solid #fbbf24'
            }}>
              <h3 style={{ color: '#d97706', fontSize: '1.4rem', marginBottom: '1.5rem' }}>Day 2: West Side Adventure</h3>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#a16207', marginBottom: '0.5rem' }}>Morning (8:00 AM)</h4>
                <p style={{ color: '#92400e', fontSize: '0.95rem', marginBottom: '1rem' }}>
                  Drive to West Entrance, hike Juniper Canyon Trail to High Peaks for different perspectives of the rock formations.
                </p>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#a16207', marginBottom: '0.5rem' }}>Afternoon (1:00 PM)</h4>
                <p style={{ color: '#92400e', fontSize: '0.95rem', marginBottom: '1rem' }}>
                  Explore Bear Gulch Cave (if open), then hike Moses Spring Trail. Look for wildflowers in season and wildlife.
                </p>
              </div>
              <div>
                <h4 style={{ color: '#a16207', marginBottom: '0.5rem' }}>Evening</h4>
                <p style={{ color: '#92400e', fontSize: '0.95rem' }}>
                  Sunset photography at Peaks View area, then departure or second night depending on schedule.
                </p>
              </div>
            </div>
          </div>
          
          <div style={{ 
            background: '#fefbf0', 
            padding: '1.5rem', 
            borderRadius: '0.75rem', 
            marginTop: '2rem',
            borderLeft: '4px solid #d97706'
          }}>
            <h4 style={{ color: '#a16207', marginBottom: '1rem' }}>🌸 Wildflower Season Bonus (Feb-Apr)</h4>
            <p style={{ color: '#92400e' }}>
              Add extra time for wildflower photography along park roads and trails. The best displays are typically found in open areas and grasslands throughout the park, creating stunning foregrounds for the dramatic rock spires.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ 
          background: 'linear-gradient(135deg, #a16207, #d97706)', 
          color: 'white', 
          padding: '3rem', 
          borderRadius: '1rem', 
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to Explore Pinnacles?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: '0.95' }}>
            Discover California's newest national park during its most beautiful and comfortable season. 
            Experience towering rock spires, rare condors, and spectacular wildflower displays without the summer crowds.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="/pinnacles-itinerary" 
              style={{ 
                background: '#ffffff', 
                color: '#a16207', 
                padding: '0.75rem 2rem', 
                borderRadius: '0.5rem', 
                textDecoration: 'none', 
                fontWeight: '600',
                border: '2px solid transparent',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#ffffff';
                e.target.style.borderColor = '#ffffff';
              }}
              onMouseOut={(e) => {
                e.target.style.background = '#ffffff';
                e.target.style.color = '#a16207';
                e.target.style.borderColor = 'transparent';
              }}
            >
              View Detailed Itinerary
            </a>
            <a 
              href="https://www.nps.gov/pinn/index.htm" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                background: 'transparent', 
                color: '#ffffff', 
                padding: '0.75rem 2rem', 
                borderRadius: '0.5rem', 
                textDecoration: 'none', 
                fontWeight: '600',
                border: '2px solid #ffffff',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.background = '#ffffff';
                e.target.style.color = '#dc2626';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#ffffff';
              }}
            >
              Official Park Website
            </a>
          </div>
        </section>
      </div>

      <FeedbackForm />
    </div>
  );
};

export default PinnaclesReactTemplate;
