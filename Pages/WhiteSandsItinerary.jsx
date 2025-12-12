import React, { useEffect } from 'react';

const WhiteSandsItinerary = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #0891b2, #06b6d4)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          White Sands National Park: Complete Itinerary
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Your ultimate 2-3 day guide to exploring the world's largest gypsum dune field
        </p>
      </header>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {/* Overview Section */}
        <section style={{
          background: '#ffffff',
          borderRadius: '0.75rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          padding: '2.5rem',
          marginBottom: '2rem'
        }}>
          <h2 style={{
            color: '#0891b2',
            fontSize: '1.8rem',
            marginBottom: '1.5rem',
            borderBottom: '3px solid #06b6d4',
            paddingBottom: '0.5rem'
          }}>
            Itinerary Overview
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #ecfeff, #cffafe)',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              border: '1px solid #67e8f9'
            }}>
              <h3 style={{ color: '#0891b2', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                📅 Best Time to Visit
              </h3>
              <p style={{ color: '#164e63', lineHeight: '1.6' }}>
                April-May and September-October offer perfect temperatures for dune activities and comfortable overnight camping.
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #ecfeff, #cffafe)',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              border: '1px solid #67e8f9'
            }}>
              <h3 style={{ color: '#0891b2', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                ⏱️ Suggested Duration
              </h3>
              <p style={{ color: '#164e63', lineHeight: '1.6' }}>
                2-3 days to experience dune hiking, sand sledding, ranger programs, and stunning sunset photography.
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #ecfeff, #cffafe)',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              border: '1px solid #67e8f9'
            }}>
              <h3 style={{ color: '#0891b2', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                🎯 Top Highlights
              </h3>
              <p style={{ color: '#164e63', lineHeight: '1.6' }}>
                Dunes Drive, sand sledding, backcountry camping, moonlight tours, and world-class sunset photography.
              </p>
            </div>
          </div>
        </section>

        {/* Day-by-Day Itinerary */}
        <section style={{
          background: '#ffffff',
          borderRadius: '0.75rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          padding: '2.5rem',
          marginBottom: '2rem'
        }}>
          <h2 style={{
            color: '#0891b2',
            fontSize: '1.8rem',
            marginBottom: '1.5rem',
            borderBottom: '3px solid #06b6d4',
            paddingBottom: '0.5rem'
          }}>
            Day-by-Day Itinerary
          </h2>

          {/* Day 1 */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{
              color: '#0891b2',
              fontSize: '1.4rem',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #ecfeff, #cffafe)',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: '1px solid #67e8f9'
            }}>
              Day 1: Dunes Exploration & Sand Sledding
            </h3>
            
            <div style={{ paddingLeft: '1rem' }}>
              <h4 style={{ color: '#155e75', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Morning (9:00 AM - 12:00 PM)</h4>
              <ul style={{ color: '#164e63', lineHeight: '1.8', marginBottom: '1rem' }}>
                <li>Arrive at White Sands Visitor Center</li>
                <li>Purchase entrance passes and sand sleds</li>
                <li>Begin 8-mile Dunes Drive scenic route</li>
                <li>Stop 1: Playa Trail (0.5 miles) - easy introduction</li>
              </ul>

              <h4 style={{ color: '#155e75', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Afternoon (1:00 PM - 5:00 PM)</h4>
              <ul style={{ color: '#164e63', lineHeight: '1.8', marginBottom: '1rem' }}>
                <li>Dune Life Nature Trail (1 mile) - learn about desert adaptations</li>
                <li>Interdune Boardwalk (0.4 miles) - perfect for families</li>
                <li>Sand sledding at designated areas - wax sleds for speed!</li>
                <li>Heart of Sands area for deepest dune experience</li>
              </ul>

              <h4 style={{ color: '#155e75', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Evening (6:00 PM - 9:00 PM)</h4>
              <ul style={{ color: '#164e63', lineHeight: '1.8' }}>
                <li>Position for sunset photography (arrive 1 hour early)</li>
                <li>Golden hour creates magical lighting on white dunes</li>
                <li>Rangers programs about gypsum geology</li>
                <li>Return to Alamogordo for lodging and dinner</li>
              </ul>
            </div>
          </div>

          {/* Day 2 */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{
              color: '#0891b2',
              fontSize: '1.4rem',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #ecfeff, #cffafe)',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: '1px solid #67e8f9'
            }}>
              Day 2: Backcountry Adventure & Moonlight Experience
            </h3>
            
            <div style={{ paddingLeft: '1rem' }}>
              <h4 style={{ color: '#155e75', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Morning (8:00 AM - 12:00 PM)</h4>
              <ul style={{ color: '#164e63', lineHeight: '1.8', marginBottom: '1rem' }}>
                <li>Backcountry Camping Loop (5 miles) - advanced hikers</li>
                <li>Alternatively: Alkali Flat Trail (5 miles) - challenging but rewarding</li>
                <li>GPS navigation essential - easy to get lost in dunes</li>
                <li>Experience pristine wilderness away from crowds</li>
              </ul>

              <h4 style={{ color: '#155e75', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Afternoon (1:00 PM - 5:00 PM)</h4>
              <ul style={{ color: '#164e63', lineHeight: '1.8', marginBottom: '1rem' }}>
                <li>Rest and prepare for evening activities</li>
                <li>Visitor center exhibits about local wildlife</li>
                <li>Advanced sand sledding techniques</li>
                <li>Photography workshop for night shots</li>
              </ul>

              <h4 style={{ color: '#155e75', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Evening (6:00 PM - 11:00 PM)</h4>
              <ul style={{ color: '#164e63', lineHeight: '1.8' }}>
                <li>Full Moon Tour (seasonal, advance reservations required)</li>
                <li>Moonlight illuminates dunes creating ethereal landscape</li>
                <li>Night photography of stars over white dunes</li>
                <li>Listen for coyote calls and night desert sounds</li>
              </ul>
            </div>
          </div>

          {/* Optional Day 3 */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{
              color: '#0891b2',
              fontSize: '1.4rem',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #ecfeff, #cffafe)',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: '1px solid #67e8f9'
            }}>
              Day 3: Camping & Extended Adventures (Optional)
            </h3>
            
            <div style={{ paddingLeft: '1rem' }}>
              <h4 style={{ color: '#155e75', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Backcountry Camping Experience</h4>
              <ul style={{ color: '#164e63', lineHeight: '1.8', marginBottom: '1rem' }}>
                <li>Overnight primitive camping in the dunes (permit required)</li>
                <li>Wake up to sunrise over white sand - photographer's dream</li>
                <li>Complete solitude in world's largest gypsum dune field</li>
                <li>Night sky viewing with minimal light pollution</li>
              </ul>

              <h4 style={{ color: '#155e75', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Day Visitor Alternatives</h4>
              <ul style={{ color: '#164e63', lineHeight: '1.8' }}>
                <li>Repeat favorite activities at different times of day</li>
                <li>Big Dune Trail for epic sledding hills</li>
                <li>Wildlife photography - specially adapted desert animals</li>
                <li>Visit nearby Valley of Fires for contrast</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Essential Information */}
        <section style={{
          background: '#ffffff',
          borderRadius: '0.75rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          padding: '2.5rem'
        }}>
          <h2 style={{
            color: '#0891b2',
            fontSize: '1.8rem',
            marginBottom: '1.5rem',
            borderBottom: '3px solid #06b6d4',
            paddingBottom: '0.5rem'
          }}>
            Essential Planning Information
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {/* Equipment */}
            <div style={{
              background: '#f1f5f9',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              borderLeft: '4px solid #06b6d4'
            }}>
              <h3 style={{ color: '#0891b2', fontSize: '1.2rem', marginBottom: '1rem' }}>
                🛷 Sand Sledding Gear
              </h3>
              <ul style={{ color: '#164e63', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                <li><strong>Rent at park:</strong> $20 for saucer sleds</li>
                <li><strong>Bring your own:</strong> Plastic discs or sand boards</li>
                <li><strong>Wax essential:</strong> Apply frequently for best speed</li>
                <li><strong>Safety tip:</strong> Test dune steepness before sledding</li>
              </ul>
            </div>

            {/* Where to Stay */}
            <div style={{
              background: '#f1f5f9',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              borderLeft: '4px solid #06b6d4'
            }}>
              <h3 style={{ color: '#0891b2', fontSize: '1.2rem', marginBottom: '1rem' }}>
                🏨 Where to Stay
              </h3>
              <ul style={{ color: '#164e63', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                <li><strong>Alamogordo:</strong> Closest city (15 miles) with hotels</li>
                <li><strong>Backcountry camping:</strong> In dunes (advance permit)</li>
                <li><strong>Las Cruces:</strong> 1 hour drive, more dining options</li>
                <li><strong>Roswell:</strong> 1.5 hours for UFO attractions</li>
              </ul>
            </div>

            {/* Safety */}
            <div style={{
              background: '#f1f5f9',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              borderLeft: '4px solid #06b6d4'
            }}>
              <h3 style={{ color: '#0891b2', fontSize: '1.2rem', marginBottom: '1rem' }}>
                ⚠️ Desert Safety
              </h3>
              <ul style={{ color: '#164e63', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                <li>Intense UV reflection - sunglasses and sunscreen essential</li>
                <li>Sand can reach 140°F - wear closed-toe shoes</li>
                <li>Easy to get disoriented - stay on marked trails</li>
                <li>Check missile range schedule (may affect park access)</li>
              </ul>
            </div>
          </div>

          {/* Special Programs */}
          <div style={{
            background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
            padding: '1.5rem',
            borderRadius: '0.75rem',
            border: '1px solid #f59e0b',
            marginTop: '1.5rem'
          }}>
            <h3 style={{ color: '#92400e', fontSize: '1.3rem', marginBottom: '1rem' }}>
              🌙 Special Programs & Events
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1rem'
            }}>
              <div>
                <h4 style={{ color: '#451a03', fontSize: '1rem', marginBottom: '0.5rem' }}>Full Moon Tours</h4>
                <p style={{ color: '#451a03', fontSize: '0.9rem' }}>Monthly ranger-guided tours. Advance reservations required. Magical moonlit dune experience.</p>
              </div>
              <div>
                <h4 style={{ color: '#451a03', fontSize: '1rem', marginBottom: '0.5rem' }}>Sunset Tours</h4>
                <p style={{ color: '#451a03', fontSize: '0.9rem' }}>Evening ranger programs about geology and wildlife. Perfect for photography.</p>
              </div>
              <div>
                <h4 style={{ color: '#451a03', fontSize: '1rem', marginBottom: '0.5rem' }}>Dark Sky Programs</h4>
                <p style={{ color: '#451a03', fontSize: '0.9rem' }}>Astronomy programs taking advantage of minimal light pollution for stargazing.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhiteSandsItinerary;