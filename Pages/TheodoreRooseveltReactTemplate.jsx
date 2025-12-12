import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const TheodoreRooseveltReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #059669, #22c55e)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Theodore Roosevelt National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Experience the rugged North Dakota badlands that shaped a president during September, October, April, May - comfortable weather and dramatic seasonal colors
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
              color: '#059669',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #22c55e',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Theodore Roosevelt National Park like never before during September, October, April, May. Here's why off-season travel offers the ultimate badlands adventure:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              {/* Highlight Cards */}
              <div style={{
                background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #bbf7d0'
              }}>
                <h3 style={{ color: '#15803d', marginBottom: '0.5rem', fontSize: '1.2rem' }}>🏔️ Badlands Solitude</h3>
                <p>Experience the same rugged badlands solitude that shaped Theodore Roosevelt's character and conservation vision, without summer crowds.</p>
              </div>
              
              <div style={{
                background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #bbf7d0'
              }}>
                <h3 style={{ color: '#15803d', marginBottom: '0.5rem', fontSize: '1.2rem' }}>🐎 Wild Horse Herds</h3>
                <p>Fall brings elk bugling and bison herds, while spring offers prairie dog activity, wild horse foaling, and exceptional bird migration.</p>
              </div>
              
              <div style={{
                background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #bbf7d0'
              }}>
                <h3 style={{ color: '#15803d', marginBottom: '0.5rem', fontSize: '1.2rem' }}>🌈 Seasonal Colors</h3>
                <p>Capture spectacular badlands autumn colors and spring wildflower blooms with dramatic Great Plains sunsets in pristine conditions.</p>
              </div>
              
              <div style={{
                background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #bbf7d0'
              }}>
                <h3 style={{ color: '#15803d', marginBottom: '0.5rem', fontSize: '1.2rem' }}>💰 Major Savings</h3>
                <p>Save up to 50% on regional accommodations compared to peak summer rates. North Dakota lodging is exceptionally affordable during shoulder seasons.</p>
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
              [Theodore Roosevelt badlands off-season landscape photo]<br />
              <em>Colorful badlands formations and wild horses during perfect off-season conditions</em>
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
                    Spectacular badlands autumn colors and spring wildflowers
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0 }}>✓</span>
                    Wild horse and bison herding behavior viewing
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0 }}>✓</span>
                    Comfortable hiking temperatures in shoulder seasons
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0 }}>✓</span>
                    Dramatic cost savings on regional accommodations (50% off peak rates)
                  </li>
                </ul>
              </div>
              
              {/* Limitations */}
              <div>
                <h3 style={{ color: '#dc2626', marginBottom: '1rem' }}>⚠️ Considerations</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0 }}>•</span>
                    Some trails may be icy or snow-covered
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0 }}>•</span>
                    Strong prairie winds can be challenging
                  </li>
                  <li style={{ marginBottom: '0.5rem', paddingLeft: '1.5rem', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0 }}>•</span>
                    Limited services in nearby gateway communities
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
              Plan your visit with confidence using our detailed weather data for Theodore Roosevelt National Park during September, October, April, May:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', textAlign: 'center' }}>
                <h4 style={{ color: '#059669', marginBottom: '0.5rem' }}>April</h4>
                <p><strong>High:</strong> 60°F<br /><strong>Low:</strong> 33°F<br /><strong>Rain:</strong> 1.5"</p>
                <p style={{ fontSize: '0.9rem', color: '#6b7280' }}>Mild, wildflowers emerging</p>
              </div>
              <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', textAlign: 'center' }}>
                <h4 style={{ color: '#059669', marginBottom: '0.5rem' }}>May</h4>
                <p><strong>High:</strong> 71°F<br /><strong>Low:</strong> 44°F<br /><strong>Rain:</strong> 2.4"</p>
                <p style={{ fontSize: '0.9rem', color: '#6b7280' }}>Pleasant, peak blooming season</p>
              </div>
              <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', textAlign: 'center' }}>
                <h4 style={{ color: '#059669', marginBottom: '0.5rem' }}>September</h4>
                <p><strong>High:</strong> 74°F<br /><strong>Low:</strong> 45°F<br /><strong>Rain:</strong> 1.3"</p>
                <p style={{ fontSize: '0.9rem', color: '#6b7280' }}>Warm days, crisp nights</p>
              </div>
              <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '0.5rem', textAlign: 'center' }}>
                <h4 style={{ color: '#059669', marginBottom: '0.5rem' }}>October</h4>
                <p><strong>High:</strong> 61°F<br /><strong>Low:</strong> 33°F<br /><strong>Rain:</strong> 0.9"</p>
                <p style={{ fontSize: '0.9rem', color: '#6b7280' }}>Cool, autumn badlands colors</p>
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
              Make the most of your Theodore Roosevelt National Park off-season adventure with these essential tips:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}>
              <div style={{ background: '#f0f9ff', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #0ea5e9' }}>
                <h3 style={{ color: '#0c4a6e', marginBottom: '0.75rem' }}>💨 Wind Protection</h3>
                <p>Badlands are extremely windy. Bring wind-resistant clothing and secure all loose items when hiking or photographing.</p>
              </div>
              
              <div style={{ background: '#f0f9ff', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #0ea5e9' }}>
                <h3 style={{ color: '#0c4a6e', marginBottom: '0.75rem' }}>📸 Wildlife Photography</h3>
                <p>Maintain safe distances from wild horses and bison. Use telephoto lenses for close-up photography without disturbing animals.</p>
              </div>
              
              <div style={{ background: '#f0f9ff', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #0ea5e9' }}>
                <h3 style={{ color: '#0c4a6e', marginBottom: '0.75rem' }}>🥾 Trail Selection</h3>
                <p>Choose shorter, more protected trails during windy conditions. Some backcountry areas may be inaccessible in winter.</p>
              </div>
              
              <div style={{ background: '#f0f9ff', padding: '1.5rem', borderRadius: '0.75rem', border: '1px solid #0ea5e9' }}>
                <h3 style={{ color: '#0c4a6e', marginBottom: '0.75rem' }}>🏛️ Roosevelt History</h3>
                <p>Visit the Maltese Cross Cabin and Elkhorn Ranch site to understand Roosevelt's personal connection to this landscape.</p>
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
              Essential pre-trip checklist for your Theodore Roosevelt National Park off-season adventure:
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              <div>
                <h3 style={{ color: '#15803d', marginBottom: '1rem' }}>📋 Reservations & Permits</h3>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li>Park entrance pass or America the Beautiful Annual Pass</li>
                  <li>Backcountry camping permits for overnight backpacking</li>
                  <li>Check road conditions for Elkhorn Ranch Unit access</li>
                  <li>Junior Ranger program materials for family visits</li>
                </ul>
              </div>
              
              <div>
                <h3 style={{ color: '#15803d', marginBottom: '1rem' }}>🎒 Gear & Equipment</h3>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li>Wind-resistant outer shell and layers</li>
                  <li>Sturdy hiking boots with ankle support</li>
                  <li>Wide-brimmed hat and sunglasses</li>
                  <li>Telephoto lens for wildlife photography</li>
                  <li>Plenty of water (limited sources in badlands)</li>
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
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Ready to Explore the Badlands?</h3>
            <p style={{ marginBottom: '1.5rem', opacity: '0.9' }}>
              Ready to plan your perfect Theodore Roosevelt National Park off-season adventure? Our detailed itinerary covers everything from badlands geology to Roosevelt's historic sites.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a 
                href="/theodore-roosevelt-itinerary"
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
                href="https://www.nps.gov/thro/index.htm"
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
          <FeedbackForm parkSlug="theodore-roosevelt" />
        </section>
      </div>
    </div>
  );
};

export default TheodoreRooseveltReactTemplate;
