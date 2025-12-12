import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const BlackCanyonReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #1f2937, #374151)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Black Canyon of the Gunnison: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Experience Colorado's most dramatic canyon during fall and spring - spectacular views, fewer crowds, perfect photography conditions
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
              color: '#1f2937',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #374151',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Black Canyon of the Gunnison National Park offers a completely different experience during fall and spring months. Here's why off-season travel provides the ultimate canyon adventure:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              <div style={{
                background: '#f3f4f6',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #1f2937'
              }}>
                <h3 style={{ color: '#374151', marginBottom: '1rem' }}>Dramatic Photography</h3>
                <p>Experience perfect lighting on the canyon's dark walls without summer haze. Fall and spring provide ideal conditions for capturing the dramatic 2,250-foot cliff faces.</p>
              </div>
              
              <div style={{
                background: '#f3f4f6',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #1f2937'
              }}>
                <h3 style={{ color: '#374151', marginBottom: '1rem' }}>60% Fewer Visitors</h3>
                <p>Experience the profound silence and scale of the canyon with significantly fewer crowds. Have the overlooks almost entirely to yourself.</p>
              </div>
              
              <div style={{
                background: '#f3f4f6',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #1f2937'
              }}>
                <h3 style={{ color: '#374151', marginBottom: '1rem' }}>Perfect Hiking Weather</h3>
                <p>Cool, comfortable temperatures for rim trails and overlook walks. No summer heat to limit your exploration time along the canyon rim.</p>
              </div>
            </div>
          </section>

          {/* Activities Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#1f2937',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #374151',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Activities
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem'
            }}>
              <div style={{
                background: '#f8fafc',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #64748b'
              }}>
                <h3 style={{ color: '#374151', marginBottom: '1rem' }}>South Rim Drive & Overlooks</h3>
                <p style={{ marginBottom: '1rem' }}>
                  7-mile scenic drive with 12 dramatic overlooks including Tomichi Point, Chasm View, and the famous Painted Wall - Colorado's tallest cliff.
                </p>
                <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#475569' }}>
                  Each overlook offers unique perspectives of the 2-billion-year-old Precambrian rock formations.
                </p>
              </div>

              <div style={{
                background: '#f8fafc',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #64748b'
              }}>
                <h3 style={{ color: '#374151', marginBottom: '1rem' }}>Rim Rock Nature Trail</h3>
                <p style={{ marginBottom: '1rem' }}>
                  Easy 1-mile paved loop trail along the canyon rim with interpretive exhibits about geology, wildlife, and the forces that created this dramatic landscape.
                </p>
                <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#475569' }}>
                  Perfect introduction to the park's geology and natural history. Suitable for all fitness levels.
                </p>
              </div>

              <div style={{
                background: '#f8fafc',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #64748b'
              }}>
                <h3 style={{ color: '#374151', marginBottom: '1rem' }}>North Rim Adventure</h3>
                <p style={{ marginBottom: '1rem' }}>
                  Less developed but equally spectacular 5-mile North Rim Road offers different canyon perspectives and opportunities for solitude and wildlife viewing.
                </p>
                <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#475569' }}>
                  Gravel road requires careful driving but rewards with fewer crowds and unique viewpoints.
                </p>
              </div>

              <div style={{
                background: '#f8fafc',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #64748b'
              }}>
                <h3 style={{ color: '#374151', marginBottom: '1rem' }}>Cedar Point Nature Trail</h3>
                <p style={{ marginBottom: '1rem' }}>
                  Short 0.7-mile trail to one of the most spectacular overlooks in the park, featuring interpretive geology exhibits and dramatic canyon views.
                </p>
                <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#475569' }}>
                  Best spot to understand the geological story spanning 2 billion years of Earth's history.
                </p>
              </div>
            </div>
          </section>

          {/* Planning Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#f59e0b',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #d97706',
              paddingBottom: '0.5rem'
            }}>
              Planning Your Off-Season Visit
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              <div style={{
                background: '#fef3c7',
                padding: '1.5rem',
                borderRadius: '0.5rem'
              }}>
                <h3 style={{ color: '#d97706', marginBottom: '1rem' }}>Safety Considerations</h3>
                <ul style={{ paddingLeft: '1.2rem', color: '#92400e' }}>
                  <li>Stay well back from cliff edges - no barriers</li>
                  <li>Supervise children closely at all overlooks</li>
                  <li>Wear sturdy shoes with good grip</li>
                  <li>Check weather - afternoon storms possible</li>
                  <li>Bring layers - rim elevation over 8,000 feet</li>
                  <li>Carry plenty of water for hiking</li>
                </ul>
              </div>

              <div style={{
                background: '#fef3c7',
                padding: '1.5rem',
                borderRadius: '0.5rem'
              }}>
                <h3 style={{ color: '#d97706', marginBottom: '1rem' }}>Best Times to Visit</h3>
                <div style={{ marginBottom: '1rem' }}>
                  <h4 style={{ color: '#b45309', marginBottom: '0.5rem' }}>Fall (September - November)</h4>
                  <p style={{ fontSize: '0.9rem', color: '#92400e' }}>Perfect weather, clear skies, and excellent photography conditions. Aspen colors in surrounding areas.</p>
                </div>
                <div>
                  <h4 style={{ color: '#b45309', marginBottom: '0.5rem' }}>Spring (April - May)</h4>
                  <p style={{ fontSize: '0.9rem', color: '#92400e' }}>Comfortable temperatures, wildflowers bloom, and excellent wildlife viewing opportunities.</p>
                </div>
              </div>

              <div style={{
                background: '#fef3c7',
                padding: '1.5rem',
                borderRadius: '0.5rem'
              }}>
                <h3 style={{ color: '#d97706', marginBottom: '1rem' }}>Off-Season Weather</h3>
                <div style={{ marginBottom: '1rem' }}>
                  <h4 style={{ color: '#b45309', marginBottom: '0.5rem' }}>Fall Weather</h4>
                  <p style={{ fontSize: '0.9rem', color: '#92400e' }}>Days: 45-65°F | Nights: 20-35°F<br/>Clear skies, perfect for photography and hiking</p>
                </div>
                <div>
                  <h4 style={{ color: '#b45309', marginBottom: '0.5rem' }}>Spring Weather</h4>
                  <p style={{ fontSize: '0.9rem', color: '#92400e' }}>Days: 50-70°F | Nights: 25-40°F<br/>Mild temperatures, occasional afternoon storms</p>
                </div>
              </div>
            </div>
          </section>

          {/* Sample Itinerary */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#1f2937',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #374151',
              paddingBottom: '0.5rem'
            }}>
              3-Day Off-Season Itinerary
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              <div style={{
                background: '#f8fafc',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '2px solid #64748b'
              }}>
                <h3 style={{ color: '#374151', marginBottom: '1rem' }}>Day 1: South Rim Discovery</h3>
                <ul style={{ paddingLeft: '1.2rem', color: '#475569' }}>
                  <li>Morning: Visitor center & first overlooks</li>
                  <li>Afternoon: Tomichi Point & Pulpit Rock</li>  
                  <li>Late day: Chasm View & Painted Wall</li>
                  <li>Evening: Sunset at Warner Point</li>
                </ul>
              </div>

              <div style={{
                background: '#f8fafc',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '2px solid #64748b'
              }}>
                <h3 style={{ color: '#374151', marginBottom: '1rem' }}>Day 2: Trails & North Rim</h3>
                <ul style={{ paddingLeft: '1.2rem', color: '#475569' }}>
                  <li>Morning: Rim Rock Nature Trail</li>
                  <li>Midday: North Rim Road exploration</li>
                  <li>Afternoon: Exclamation Point hike</li>
                  <li>Evening: Wildlife viewing & photography</li>
                </ul>
              </div>

              <div style={{
                background: '#f8fafc',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '2px solid #64748b'
              }}>
                <h3 style={{ color: '#374151', marginBottom: '1rem' }}>Day 3: Geological Wonders</h3>
                <ul style={{ paddingLeft: '1.2rem', color: '#475569' }}>
                  <li>Morning: Cedar Point Nature Trail</li>
                  <li>Afternoon: High Point & final overlooks</li>
                  <li>Evening: Reflection & departure prep</li>
                  <li>Optional: Curecanti Recreation Area</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Itinerary Link Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#1f2937',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #374151',
              paddingBottom: '0.5rem'
            }}>
              Complete 3-Day Itinerary
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Ready to plan your perfect Black Canyon of the Gunnison off-season adventure? Our detailed itinerary covers everything from dramatic overlooks to geological discoveries.
            </p>
            
            <a 
              href="/black-canyon-itinerary"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #1f2937, #374151)',
                color: 'white',
                textDecoration: 'none',
                padding: '1rem 2rem',
                borderRadius: '0.75rem',
                fontWeight: '600',
                transition: 'transform 0.3s ease',
                margin: '1rem 0'
              }}
              onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
              📅 Get Your Complete 3-Day Itinerary
            </a>
          </section>

          {/* Call to Action */}
          <section style={{
            background: 'linear-gradient(135deg, #1f2937, #374151)',
            color: 'white',
            padding: '2rem',
            borderRadius: '0.75rem',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <h2 style={{ marginBottom: '1rem' }}>Ready to Experience Colorado's Grand Canyon?</h2>
            <p style={{ marginBottom: '1.5rem', opacity: '0.9' }}>
              Book your off-season Black Canyon adventure and discover why this is one of Colorado's most dramatic and awe-inspiring landscapes.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="/black-canyon-itinerary"
                style={{
                  background: 'white',
                  color: '#374151',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'transform 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
              >
                View Complete Black Canyon Itinerary →
              </a>
              <a
                href="https://www.nps.gov/blca/index.htm"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'transparent',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  border: '2px solid white',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'transform 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
              >
                Official NPS Black Canyon Site
              </a>
            </div>
          </section>
        </main>
      </div>

      {/* Feedback Form */}
      <FeedbackForm parkSlug="black-canyon" />
    </div>
  );
};

export default BlackCanyonReactTemplate;