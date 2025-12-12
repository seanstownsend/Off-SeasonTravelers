import React, { useEffect } from 'react';

const CarlsbadCavernsItinerary = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #374151, #6b7280)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Carlsbad Caverns: Complete Itinerary
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Your ultimate 2-3 day guide to exploring New Mexico's underground wonder and bat spectacle
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
            color: '#374151',
            fontSize: '1.8rem',
            marginBottom: '1.5rem',
            borderBottom: '3px solid #6b7280',
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
              background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              border: '1px solid #9ca3af'
            }}>
              <h3 style={{ color: '#374151', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                📅 Best Time to Visit
              </h3>
              <p style={{ color: '#111827', lineHeight: '1.6' }}>
                April-May and September-October for optimal bat flights and perfect surface weather. Cave stays 56°F year-round.
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              border: '1px solid #9ca3af'
            }}>
              <h3 style={{ color: '#374151', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                ⏱️ Suggested Duration
              </h3>
              <p style={{ color: '#111827', lineHeight: '1.6' }}>
                2-3 days to experience cave tours, bat flights, and explore nearby attractions like Guadalupe Mountains.
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              border: '1px solid #9ca3af'
            }}>
              <h3 style={{ color: '#374151', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                🎯 Top Highlights
              </h3>
              <p style={{ color: '#111827', lineHeight: '1.6' }}>
                Big Room tour, Natural Entrance route, evening bat flights, and specialized cave formations.
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
            color: '#374151',
            fontSize: '1.8rem',
            marginBottom: '1.5rem',
            borderBottom: '3px solid #6b7280',
            paddingBottom: '0.5rem'
          }}>
            Day-by-Day Itinerary
          </h2>

          {/* Day 1 */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{
              color: '#374151',
              fontSize: '1.4rem',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: '1px solid #9ca3af'
            }}>
              Day 1: Cave Exploration & Orientation
            </h3>
            
            <div style={{ paddingLeft: '1rem' }}>
              <h4 style={{ color: '#1f2937', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Morning (9:00 AM - 12:00 PM)</h4>
              <ul style={{ color: '#111827', lineHeight: '1.8', marginBottom: '1rem' }}>
                <li>Arrive at Carlsbad Caverns Visitor Center</li>
                <li>Purchase tickets and audio guide rental</li>
                <li>Natural Entrance route (1.25 miles, 1 hour) - descend 750 feet</li>
                <li>Experience the dramatic cave entrance explorer's used</li>
              </ul>

              <h4 style={{ color: '#1f2937', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Afternoon (1:00 PM - 5:00 PM)</h4>
              <ul style={{ color: '#111827', lineHeight: '1.8', marginBottom: '1rem' }}>
                <li>Lunch at underground restaurant (unique experience)</li>
                <li>Big Room self-guided tour (1.25 miles, 1.5 hours)</li>
                <li>Marvel at massive limestone formations</li>
                <li>Visit iconic formations: Bottomless Pit, Giant Dome, Rock of Ages</li>
              </ul>

              <h4 style={{ color: '#1f2937', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Evening (6:00 PM - 10:00 PM)</h4>
              <ul style={{ color: '#111827', lineHeight: '1.8' }}>
                <li>Return to surface via high-speed elevator</li>
                <li>Dinner in Carlsbad town (20 minutes away)</li>
                <li>Evening preparation for tomorrow's bat flight program</li>
                <li>Early rest to prepare for dawn activities</li>
              </ul>
            </div>
          </div>

          {/* Day 2 */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{
              color: '#374151',
              fontSize: '1.4rem',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: '1px solid #9ca3af'
            }}>
              Day 2: Specialized Tours & Bat Flight Spectacle
            </h3>
            
            <div style={{ paddingLeft: '1rem' }}>
              <h4 style={{ color: '#1f2937', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Morning (8:00 AM - 12:00 PM)</h4>
              <ul style={{ color: '#111827', lineHeight: '1.8', marginBottom: '1rem' }}>
                <li>King's Palace guided tour (1 hour) - advanced reservation required</li>
                <li>Explore decorated cave chambers 830 feet underground</li>
                <li>Learn about cave formation and conservation</li>
                <li>Experience total darkness demonstration</li>
              </ul>

              <h4 style={{ color: '#1f2937', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Afternoon (1:00 PM - 5:00 PM)</h4>
              <ul style={{ color: '#111827', lineHeight: '1.8', marginBottom: '1rem' }}>
                <li>Surface desert trails: Rattlesnake Canyon (0.5 miles)</li>
                <li>Visit nearby Slaughter Canyon Cave (if available)</li>
                <li>Alternatively: Old Guano Road Trail for desert views</li>
                <li>Rest and prepare for evening bat program</li>
              </ul>

              <h4 style={{ color: '#1f2937', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Evening (6:00 PM - 9:00 PM)</h4>
              <ul style={{ color: '#111827', lineHeight: '1.8' }}>
                <li>Arrive at bat flight amphitheater 30 minutes before sunset</li>
                <li>Ranger program about Brazilian free-tailed bats</li>
                <li>Witness 400,000+ bats emerge in spiraling formation</li>
                <li>Photography opportunity (no flash allowed)</li>
              </ul>
            </div>
          </div>

          {/* Optional Day 3 */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{
              color: '#374151',
              fontSize: '1.4rem',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: '1px solid #9ca3af'
            }}>
              Day 3: Extended Adventures (Optional)
            </h3>
            
            <div style={{ paddingLeft: '1rem' }}>
              <h4 style={{ color: '#1f2937', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Adventure Options</h4>
              <ul style={{ color: '#111827', lineHeight: '1.8', marginBottom: '1rem' }}>
                <li><strong>Lower Cave:</strong> 3-hour guided tour (moderate difficulty)</li>
                <li><strong>Spider Cave:</strong> 4-hour crawling adventure (advanced)</li>
                <li><strong>Left Hand Tunnel:</strong> Lantern tour experience</li>
                <li><strong>Guadalupe Mountains:</strong> Day trip to nearby national park</li>
              </ul>

              <h4 style={{ color: '#1f2937', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Family-Friendly Alternatives</h4>
              <ul style={{ color: '#111827', lineHeight: '1.8' }}>
                <li>Revisit Big Room at your own pace</li>
                <li>Junior Ranger program activities</li>
                <li>Desert Nature Walk Trail</li>
                <li>Visitor center exhibits and documentary films</li>
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
            color: '#374151',
            fontSize: '1.8rem',
            marginBottom: '1.5rem',
            borderBottom: '3px solid #6b7280',
            paddingBottom: '0.5rem'
          }}>
            Essential Planning Information
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {/* Tickets & Reservations */}
            <div style={{
              background: '#f1f5f9',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              borderLeft: '4px solid #6b7280'
            }}>
              <h3 style={{ color: '#374151', fontSize: '1.2rem', marginBottom: '1rem' }}>
                🎫 Tickets & Reservations
              </h3>
              <ul style={{ color: '#111827', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                <li><strong>General Admission:</strong> $15/adult, $7/senior</li>
                <li><strong>King's Palace:</strong> Additional $8 (reserve online)</li>
                <li><strong>Lower Cave:</strong> $20 extra (limited availability)</li>
                <li><strong>Bat Flight Program:</strong> Free, first-come basis</li>
              </ul>
            </div>

            {/* Where to Stay */}
            <div style={{
              background: '#f1f5f9',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              borderLeft: '4px solid #6b7280'
            }}>
              <h3 style={{ color: '#374151', fontSize: '1.2rem', marginBottom: '1rem' }}>
                🏨 Where to Stay
              </h3>
              <ul style={{ color: '#111827', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                <li><strong>Carlsbad:</strong> Full-service hotels and restaurants</li>
                <li><strong>White's City:</strong> Closest to park (7 miles)</li>
                <li><strong>Camping:</strong> No park camping, private RV parks available</li>
                <li><strong>Guadalupe Mountains:</strong> Combine with camping there</li>
              </ul>
            </div>

            {/* Cave Safety */}
            <div style={{
              background: '#f1f5f9',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              borderLeft: '4px solid #6b7280'
            }}>
              <h3 style={{ color: '#374151', fontSize: '1.2rem', marginBottom: '1rem' }}>
                ⚠️ Cave Safety & Etiquette
              </h3>
              <ul style={{ color: '#111827', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                <li>Bring jacket - cave temperature is constant 56°F</li>
                <li>Wear shoes with good traction (paths can be slippery)</li>
                <li>No touching formations - oils damage limestone</li>
                <li>No food, drinks, or flash photography in caves</li>
                <li>Stay on designated paths at all times</li>
              </ul>
            </div>
          </div>

          {/* Bat Flight Program Details */}
          <div style={{
            background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
            padding: '1.5rem',
            borderRadius: '0.75rem',
            border: '1px solid #f59e0b',
            marginTop: '1.5rem'
          }}>
            <h3 style={{ color: '#92400e', fontSize: '1.3rem', marginBottom: '1rem' }}>
              🦇 Bat Flight Program Tips
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1rem'
            }}>
              <div>
                <h4 style={{ color: '#451a03', fontSize: '1rem', marginBottom: '0.5rem' }}>Best Times</h4>
                <p style={{ color: '#451a03', fontSize: '0.9rem' }}>April-October, peak numbers in late summer. Bats emerge 20 minutes before sunset.</p>
              </div>
              <div>
                <h4 style={{ color: '#451a03', fontSize: '1rem', marginBottom: '0.5rem' }}>What to Bring</h4>
                <p style={{ color: '#451a03', fontSize: '0.9rem' }}>Folding chair, water, light jacket. NO flash photography or sudden movements.</p>
              </div>
              <div>
                <h4 style={{ color: '#451a03', fontSize: '1rem', marginBottom: '0.5rem' }}>Arrival Time</h4>
                <p style={{ color: '#451a03', fontSize: '0.9rem' }}>Arrive 30-45 minutes early for best seating. Amphitheater fills up quickly.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CarlsbadCavernsItinerary;
