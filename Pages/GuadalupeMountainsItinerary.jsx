import React, { useEffect } from 'react';

const GuadalupeMountainsItinerary = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #8b5cf6, #a78bfa)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Guadalupe Mountains: Complete Itinerary
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Your ultimate 2-3 day guide to conquering Texas's highest peak and most beautiful canyon
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
            color: '#8b5cf6',
            fontSize: '1.8rem',
            marginBottom: '1.5rem',
            borderBottom: '3px solid #a78bfa',
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
              background: 'linear-gradient(135deg, #f3e8ff, #e9d5ff)',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              border: '1px solid #c4b5fd'
            }}>
              <h3 style={{ color: '#8b5cf6', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                📅 Best Time to Visit
              </h3>
              <p style={{ color: '#581c87', lineHeight: '1.6' }}>
                April-May and September-October offer perfect hiking weather. Fall brings stunning colors to McKittrick Canyon.
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #f3e8ff, #e9d5ff)',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              border: '1px solid #c4b5fd'
            }}>
              <h3 style={{ color: '#8b5cf6', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                ⏱️ Suggested Duration
              </h3>
              <p style={{ color: '#581c87', lineHeight: '1.6' }}>
                2-3 days to experience peak climbing, canyon exploration, and desert hiking adventures.
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #f3e8ff, #e9d5ff)',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              border: '1px solid #c4b5fd'
            }}>
              <h3 style={{ color: '#8b5cf6', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                🎯 Top Highlights
              </h3>
              <p style={{ color: '#581c87', lineHeight: '1.6' }}>
                Guadalupe Peak summit, McKittrick Canyon fall colors, Devil's Hall, and ancient fossil reef.
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
            color: '#8b5cf6',
            fontSize: '1.8rem',
            marginBottom: '1.5rem',
            borderBottom: '3px solid #a78bfa',
            paddingBottom: '0.5rem'
          }}>
            Day-by-Day Itinerary
          </h2>

          {/* Day 1 */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{
              color: '#8b5cf6',
              fontSize: '1.4rem',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #f3e8ff, #e9d5ff)',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: '1px solid #c4b5fd'
            }}>
              Day 1: Guadalupe Peak Challenge
            </h3>
            
            <div style={{ paddingLeft: '1rem' }}>
              <h4 style={{ color: '#6b21a8', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Early Morning (5:30 AM - 12:00 PM)</h4>
              <ul style={{ color: '#581c87', lineHeight: '1.8', marginBottom: '1rem' }}>
                <li>Very early start from Pine Springs trailhead</li>
                <li>Guadalupe Peak Trail (8.5 miles round trip, 6-8 hours)</li>
                <li>3,000 feet elevation gain to Texas's highest point (8,751 feet)</li>
                <li>Bring 2+ gallons of water and high-energy snacks</li>
              </ul>

              <h4 style={{ color: '#6b21a8', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Afternoon (12:00 PM - 4:00 PM)</h4>
              <ul style={{ color: '#581c87', lineHeight: '1.8', marginBottom: '1rem' }}>
                <li>Summit celebration and panoramic photography</li>
                <li>360-degree views of Chihuahuan Desert</li>
                <li>Sign summit register and explore monument</li>
                <li>Careful descent - knees and ankles need protection</li>
              </ul>

              <h4 style={{ color: '#6b21a8', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Evening (5:00 PM - 9:00 PM)</h4>
              <ul style={{ color: '#581c87', lineHeight: '1.8' }}>
                <li>Return to Pine Springs for well-deserved rest</li>
                <li>Recovery meal and hydration</li>
                <li>Plan next day's easier activities</li>
                <li>Early sleep to recover from peak climb</li>
              </ul>
            </div>
          </div>

          {/* Day 2 */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{
              color: '#8b5cf6',
              fontSize: '1.4rem',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #f3e8ff, #e9d5ff)',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: '1px solid #c4b5fd'
            }}>
              Day 2: McKittrick Canyon & Devil's Hall
            </h3>
            
            <div style={{ paddingLeft: '1rem' }}>
              <h4 style={{ color: '#6b21a8', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Morning (8:00 AM - 12:00 PM)</h4>
              <ul style={{ color: '#581c87', lineHeight: '1.8', marginBottom: '1rem' }}>
                <li>McKittrick Canyon Trail to Pratt Cabin (4.8 miles)</li>
                <li>Experience "the most beautiful spot in Texas"</li>
                <li>Fall foliage photography (peak in late October)</li>
                <li>Learn about historic Pratt Lodge and conservation</li>
              </ul>

              <h4 style={{ color: '#6b21a8', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Afternoon (1:00 PM - 5:00 PM)</h4>
              <ul style={{ color: '#581c87', lineHeight: '1.8', marginBottom: '1rem' }}>
                <li>Devil's Hall Trail from Pine Springs (4.2 miles)</li>
                <li>Natural staircase through narrow canyon</li>
                <li>Perfect for families and photography</li>
                <li>Explore unique geological formations</li>
              </ul>

              <h4 style={{ color: '#6b21a8', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Evening (6:00 PM - 9:00 PM)</h4>
              <ul style={{ color: '#581c87', lineHeight: '1.8' }}>
                <li>Sunset viewing from Frijole Ranch area</li>
                <li>Historical museum at visitor center</li>
                <li>Plan optional third day activities</li>
                <li>Campfire and stargazing (if camping)</li>
              </ul>
            </div>
          </div>

          {/* Optional Day 3 */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{
              color: '#8b5cf6',
              fontSize: '1.4rem',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #f3e8ff, #e9d5ff)',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: '1px solid #c4b5fd'
            }}>
              Day 3: Extended Adventures (Optional)
            </h3>
            
            <div style={{ paddingLeft: '1rem' }}>
              <h4 style={{ color: '#6b21a8', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Adventure Options</h4>
              <ul style={{ color: '#581c87', lineHeight: '1.8', marginBottom: '1rem' }}>
                <li><strong>El Capitan Trail:</strong> 11.3 miles to base of iconic limestone cliff</li>
                <li><strong>Smith Spring Trail:</strong> Easy 2.3-mile family hike</li>
                <li><strong>Permian Reef Geology Trail:</strong> 0.8 miles of fossil exploration</li>
                <li><strong>Combine with Carlsbad Caverns:</strong> 30-minute drive</li>
              </ul>

              <h4 style={{ color: '#6b21a8', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Photography & Relaxation</h4>
              <ul style={{ color: '#581c87', lineHeight: '1.8' }}>
                <li>Sunrise photography at Pine Springs</li>
                <li>Wildlife viewing at Frijole Ranch</li>
                <li>Botanical exploration and desert plant identification</li>
                <li>Visitor center exhibits on Permian fossil reef</li>
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
            color: '#8b5cf6',
            fontSize: '1.8rem',
            marginBottom: '1.5rem',
            borderBottom: '3px solid #a78bfa',
            paddingBottom: '0.5rem'
          }}>
            Essential Planning Information
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {/* Preparation */}
            <div style={{
              background: '#f1f5f9',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              borderLeft: '4px solid #a78bfa'
            }}>
              <h3 style={{ color: '#8b5cf6', fontSize: '1.2rem', marginBottom: '1rem' }}>
                🏔️ Peak Preparation
              </h3>
              <ul style={{ color: '#581c87', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                <li>Start training weeks before - build endurance</li>
                <li>Bring 2+ gallons water for peak climb</li>
                <li>Sturdy hiking boots and trekking poles essential</li>
                <li>Start very early (5:30 AM) to avoid heat</li>
              </ul>
            </div>

            {/* Where to Stay */}
            <div style={{
              background: '#f1f5f9',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              borderLeft: '4px solid #a78bfa'
            }}>
              <h3 style={{ color: '#8b5cf6', fontSize: '1.2rem', marginBottom: '1rem' }}>
                🏕️ Where to Stay
              </h3>
              <ul style={{ color: '#581c87', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                <li><strong>Pine Springs:</strong> Backpacking camping only</li>
                <li><strong>Dog Canyon:</strong> 10 campsites (north side)</li>
                <li><strong>Carlsbad:</strong> Hotels 45 minutes away</li>
                <li><strong>El Paso:</strong> 110 miles for full services</li>
              </ul>
            </div>

            {/* Safety */}
            <div style={{
              background: '#f1f5f9',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              borderLeft: '4px solid #a78bfa'
            }}>
              <h3 style={{ color: '#8b5cf6', fontSize: '1.2rem', marginBottom: '1rem' }}>
                ⚠️ Mountain Safety
              </h3>
              <ul style={{ color: '#581c87', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                <li>Weather changes rapidly - bring layers</li>
                <li>No water sources on trails - carry plenty</li>
                <li>High winds common - secure gear</li>
                <li>Inform others of climbing plans</li>
                <li>Turn back if weather deteriorates</li>
              </ul>
            </div>
          </div>

          {/* Special Fall Section */}
          <div style={{
            background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
            padding: '1.5rem',
            borderRadius: '0.75rem',
            border: '1px solid #f59e0b',
            marginTop: '1.5rem'
          }}>
            <h3 style={{ color: '#92400e', fontSize: '1.3rem', marginBottom: '1rem' }}>
              🍂 McKittrick Canyon Fall Colors Guide
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem'
            }}>
              <div>
                <h4 style={{ color: '#451a03', fontSize: '1rem', marginBottom: '0.5rem' }}>Peak Season</h4>
                <p style={{ color: '#451a03', fontSize: '0.9rem' }}>Late October to early November. Bigtooth maples turn brilliant orange and red.</p>
              </div>
              <div>
                <h4 style={{ color: '#451a03', fontSize: '1rem', marginBottom: '0.5rem' }}>Best Photography</h4>
                <p style={{ color: '#451a03', fontSize: '0.9rem' }}>Morning light creates stunning contrast. Afternoon can be harsh and shadowy.</p>
              </div>
              <div>
                <h4 style={{ color: '#451a03', fontSize: '1rem', marginBottom: '0.5rem' }}>Trail Tips</h4>
                <p style={{ color: '#451a03', fontSize: '0.9rem' }}>Trail to Pratt Cabin showcases best colors. Grotto area offers intimate scenes.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GuadalupeMountainsItinerary;
