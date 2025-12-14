import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const WindCaveReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #6b7280, #4b5563)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Wind Cave National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Discover one of the world's longest cave systems and pristine prairie during September, October, April, May - perfect cave touring weather and exceptional wildlife viewing
        </p>
      </header>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {/* Main Content Area */}
        <main style={{
          background: '#ffffff',
          borderRadius: '0.75rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          padding: '2.5rem'
        }}>
          {/* Off-Season Highlights Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#6b7280',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #9ca3af',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Wind Cave National Park like never before during September, October, April, May. Here's why off-season travel offers the ultimate cave and prairie adventure:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              {/* Highlight Cards */}
              <div style={{
                background: 'linear-gradient(135deg, #f9fafb, #f3f4f6)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #d1d5db'
              }}>
                <h3 style={{ color: '#6b7280', marginBottom: '0.5rem', fontSize: '1.2rem' }}>🌡️ Perfect Cave Conditions</h3>
                <p>Explore one of the world's most intricate cave systems with consistent 53°F temperatures year-round. No summer heat or winter cold concerns underground!</p>
              </div>
              
              <div style={{
                background: 'linear-gradient(135deg, #f9fafb, #f3f4f6)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #d1d5db'
              }}>
                <h3 style={{ color: '#6b7280', marginBottom: '0.5rem', fontSize: '1.2rem' }}>🦌 Wildlife Viewing Prime</h3>
                <p>Experience bison calving season in spring and elk bugling in fall. Prairie dogs are most active during comfortable off-season temperatures.</p>
              </div>
              
              <div style={{
                background: 'linear-gradient(135deg, #f9fafb, #f3f4f6)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #d1d5db'
              }}>
                <h3 style={{ color: '#6b7280', marginBottom: '0.5rem', fontSize: '1.2rem' }}>🌸 Prairie Seasons</h3>
                <p>Capture stunning wildflower blooms in spring and dramatic autumn colors across 33,000 acres of mixed-grass prairie without tourist crowds.</p>
              </div>
              
              <div style={{
                background: 'linear-gradient(135deg, #f9fafb, #f3f4f6)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #d1d5db'
              }}>
                <h3 style={{ color: '#6b7280', marginBottom: '0.5rem', fontSize: '1.2rem' }}>💰 Significant Savings</h3>
                <p>Save up to 40% on area accommodations compared to peak summer rates. Black Hills lodging is much more affordable during shoulder seasons.</p>
              </div>
            </div>

            {/* Photo Placeholder */}
            <div style={{
              background: '#f3f4f6',
              padding: '3rem',
              borderRadius: '0.75rem',
              textAlign: 'center',
              marginBottom: '2rem'
            }}>
              [Wind Cave off-season landscape photo]<br />
              <em>Wind Cave's boxwork formations and rolling prairie during perfect off-season conditions</em>
            </div>
          </section>

          {/* Trade-offs Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#059669',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #22c55e',
              paddingBottom: '0.5rem'
            }}>
              What to Expect: Honest Trade-offs
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              {/* Advantages */}
              <div>
                <h3 style={{ color: '#15803d', marginBottom: '1rem' }}>✅ Advantages</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0 }}>✓</span>
                    Cave tours available year-round with perfect 53°F temperatures
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0 }}>✓</span>
                    Bison calving season viewing in spring
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0 }}>✓</span>
                    Prairie wildflower blooms and autumn colors
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0 }}>✓</span>
                    Significant savings on area accommodations (40% off peak rates)
                  </li>
                </ul>
              </div>
              
              {/* Limitations */}
              <div>
                <h3 style={{ color: '#dc2626', marginBottom: '1rem' }}>⚠️ Considerations</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0 }}>•</span>
                    Some surface trails may have snow or ice
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0 }}>•</span>
                    Limited daylight hours for surface activities in winter
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0 }}>•</span>
                    Prairie weather can change quickly
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Weather Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#059669',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #22c55e',
              paddingBottom: '0.5rem'
            }}>
              Weather & Conditions
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Plan your visit with confidence using our detailed weather data for Wind Cave National Park during September, October, April, May:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', textAlign: 'center' }}>
                <h4 style={{ color: '#059669', marginBottom: '0.5rem' }}>April</h4>
                <p><strong>High:</strong> 58°F<br /><strong>Low:</strong> 35°F<br /><strong>Rain:</strong> 2.2"</p>
                <p style={{ fontSize: '0.9rem', color: '#6b7280' }}>Mild, wildflowers beginning</p>
              </div>
              <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', textAlign: 'center' }}>
                <h4 style={{ color: '#059669', marginBottom: '0.5rem' }}>May</h4>
                <p><strong>High:</strong> 69°F<br /><strong>Low:</strong> 45°F<br /><strong>Rain:</strong> 3.1"</p>
                <p style={{ fontSize: '0.9rem', color: '#6b7280' }}>Pleasant, peak wildflower season</p>
              </div>
              <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', textAlign: 'center' }}>
                <h4 style={{ color: '#059669', marginBottom: '0.5rem' }}>September</h4>
                <p><strong>High:</strong> 75°F<br /><strong>Low:</strong> 48°F<br /><strong>Rain:</strong> 1.8"</p>
                <p style={{ fontSize: '0.9rem', color: '#6b7280' }}>Warm days, cool nights</p>
              </div>
              <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', textAlign: 'center' }}>
                <h4 style={{ color: '#059669', marginBottom: '0.5rem' }}>October</h4>
                <p><strong>High:</strong> 62°F<br /><strong>Low:</strong> 36°F<br /><strong>Rain:</strong> 1.4"</p>
                <p style={{ fontSize: '0.9rem', color: '#6b7280' }}>Crisp, autumn colors</p>
              </div>
            </div>
          </section>

          {/* Essential Tips Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#059669',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #22c55e',
              paddingBottom: '0.5rem'
            }}>
              Essential Off-Season Tips
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Make the most of your Wind Cave National Park off-season adventure with these essential tips:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}>
              <div style={{ background: '#f0f9ff', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #0ea5e9' }}>
                <h3 style={{ color: '#0c4a6e', marginBottom: '0.75rem' }}>📅 Book Cave Tours Early</h3>
                <p>Popular cave tours fill up quickly even in off-season. Reserve online or arrive early for same-day availability.</p>
              </div>
              
              <div style={{ background: '#f0f9ff', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #0ea5e9' }}>
                <h3 style={{ color: '#0c4a6e', marginBottom: '0.75rem' }}>🧥 Layer for Cave Temps</h3>
                <p>Caves maintain 53°F year-round. Bring a light jacket even on hot days, and wear sturdy non-slip shoes.</p>
              </div>
              
              <div style={{ background: '#f0f9ff', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #0ea5e9' }}>
                <h3 style={{ color: '#0c4a6e', marginBottom: '0.75rem' }}>🦬 Wildlife Timing</h3>
                <p>Early morning and evening are best for wildlife viewing. Bison are most active during cooler parts of the day.</p>
              </div>
              
              <div style={{ background: '#f0f9ff', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #0ea5e9' }}>
                <h3 style={{ color: '#0c4a6e', marginBottom: '0.75rem' }}>⛅ Prairie Weather</h3>
                <p>Great Plains weather can change rapidly. Check conditions before heading out on longer surface trails.</p>
              </div>
            </div>
          </section>

          {/* Before You Go Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#059669',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #22c55e',
              paddingBottom: '0.5rem'
            }}>
              Before You Go Checklist
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Essential pre-trip checklist for your Wind Cave National Park off-season adventure:
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              <div>
                <h3 style={{ color: '#15803d', marginBottom: '1rem' }}>📋 Reservations & Permits</h3>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li>Park entrance pass or America the Beautiful Annual Pass</li>
                  <li>Cave tour reservations (recommended in advance)</li>
                  <li>Backcountry camping permits for overnight stays</li>
                  <li>Special photography permits for cave photography</li>
                </ul>
              </div>
              
              <div>
                <h3 style={{ color: '#15803d', marginBottom: '1rem' }}>🎒 Gear & Equipment</h3>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li>Sturdy non-slip shoes for cave touring</li>
                  <li>Light jacket or sweater for cave temperatures</li>
                  <li>Layered clothing for variable surface weather</li>
                  <li>Binoculars for wildlife and bird watching</li>
                  <li>Headlamp for early morning or evening activities</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section style={{
            background: 'linear-gradient(135deg, #1e40af, #0d9488)',
            color: 'white',
            padding: '2rem',
            borderRadius: '0.75rem',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Ready to Explore Wind Cave?</h3>
            <p style={{ marginBottom: '1.5rem', opacity: '0.9' }}>
              Ready to plan your perfect Wind Cave National Park off-season adventure? Our detailed itinerary covers everything from cave tours to prairie wildlife viewing.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a 
                href="/wind-cave-itinerary"
                style={{
                  display: 'inline-block',
                  background: 'white',
                  color: '#1e40af',
                  padding: '0.75rem 2rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'all 0.3s ease'
                }}
              >
                View Complete Itinerary →
              </a>
              <a 
                href="https://www.nps.gov/wica/index.htm"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  padding: '0.75rem 2rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontWeight: '600',
                  border: '2px solid white',
                  transition: 'all 0.3s ease'
                }}
              >
                Official NPS Site ↗
              </a>
            </div>
          </section>
        </main>

        {/* Feedback Section */}
        <section style={{
          background: '#ffffff',
          borderRadius: '0.75rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          padding: '2.5rem',
          marginTop: '2rem'
        }}>
          <FeedbackForm parkSlug="wind-cave" />
        </section>
      </div>
    </div>
  );
};

export default WindCaveReactTemplate;
