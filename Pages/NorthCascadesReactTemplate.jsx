import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const NorthCascadesReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          North Cascades National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Discover America's Alps during September, October, April, May - dramatic peaks, alpine lakes, fewer crowds, unforgettable mountain experiences
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
              color: '#1e40af',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #3b82f6',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience North Cascades National Park during the spectacular shoulder seasons of September, October, April, May. Here's why off-season travel offers the ultimate alpine adventure:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              margin: '1.5rem 0'
            }}>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#1d4ed8', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🏔️ Dramatic Alpine Scenery</h3>
                <p>Experience rugged mountain peaks, pristine alpine lakes, and cascading waterfalls without summer crowds. Fall colors and spring wildflowers enhance the already stunning landscape.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#1d4ed8', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>💰 Significant Savings</h3>
                <p>Save up to 50% on lodging in nearby gateway towns like Winthrop and Concrete, plus find better availability at popular accommodations.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#1d4ed8', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>📸 Spectacular Photography</h3>
                <p>Capture mirror-like reflections in alpine lakes, dramatic mountain silhouettes, and seasonal colors without crowds blocking your shots.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#1d4ed8', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🦌 Enhanced Wildlife Viewing</h3>
                <p>Spot black bears preparing for winter, mountain goats on rocky slopes, and diverse bird species during migration seasons.</p>
              </div>
            </div>

            <div style={{
              background: '#f3f4f6',
              border: '2px dashed #4b5563',
              borderRadius: '0.75rem',
              padding: '3rem',
              textAlign: 'center',
              color: '#4b5563',
              margin: '1.5rem 0'
            }}>
              [North Cascades off-season landscape photo]<br />
              <em>Diablo Lake's turquoise waters surrounded by snow-capped peaks</em>
            </div>
          </section>

          {/* Off-Season Trade-Offs Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#1e40af',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #3b82f6',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Trade-Offs
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              While off-season travel offers incredible benefits, it's important to understand the potential challenges:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              margin: '1.5rem 0'
            }}>
              <div style={{
                background: '#eff6ff',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #3b82f6'
              }}>
                <h3 style={{ color: '#1d4ed8', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>✅ Advantages</h3>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li>Spectacular fall foliage and spring wildflower displays</li>
                  <li>Peaceful hiking trails and scenic drives without crowds</li>
                  <li>Significant savings (40-50% off) on nearby accommodations</li>
                  <li>Perfect photography conditions with dramatic lighting</li>
                  <li>Enhanced wildlife viewing during active seasons</li>
                  <li>Crisp, clear mountain air with excellent visibility</li>
                </ul>
              </div>
              <div style={{
                background: '#fef3c7',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #f59e0b'
              }}>
                <h3 style={{ color: '#92400e', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>⚠️ Considerations</h3>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li>Some high-elevation roads may be closed due to snow</li>
                  <li>Weather can change rapidly in mountain environments</li>
                  <li>Limited services and facilities during off-season</li>
                  <li>Shorter daylight hours limit hiking time</li>
                  <li>Some backcountry areas may be inaccessible</li>
                  <li>Potential for rain and early snow in shoulder seasons</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Weather Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#1e40af',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #3b82f6',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Weather
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Plan your visit with confidence using our detailed weather data for North Cascades National Park during September, October, April, May:
            </p>
            
            <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                background: 'white',
                borderRadius: '0.75rem',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}>
                <thead>
                  <tr style={{ backgroundColor: '#1e40af', color: 'white' }}>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Month</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Avg High (°F)</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Avg Low (°F)</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Precipitation</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Conditions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>April</td>
                    <td style={{ padding: '1rem' }}>58°F</td>
                    <td style={{ padding: '1rem' }}>38°F</td>
                    <td style={{ padding: '1rem' }}>3.2 inches</td>
                    <td style={{ padding: '1rem' }}>Cool, spring emergence</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>May</td>
                    <td style={{ padding: '1rem' }}>66°F</td>
                    <td style={{ padding: '1rem' }}>45°F</td>
                    <td style={{ padding: '1rem' }}>2.8 inches</td>
                    <td style={{ padding: '1rem' }}>Mild, wildflowers blooming</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>September</td>
                    <td style={{ padding: '1rem' }}>70°F</td>
                    <td style={{ padding: '1rem' }}>48°F</td>
                    <td style={{ padding: '1rem' }}>2.1 inches</td>
                    <td style={{ padding: '1rem' }}>Pleasant, fall colors starting</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>October</td>
                    <td style={{ padding: '1rem' }}>58°F</td>
                    <td style={{ padding: '1rem' }}>40°F</td>
                    <td style={{ padding: '1rem' }}>4.5 inches</td>
                    <td style={{ padding: '1rem' }}>Cool, peak fall colors</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{
              background: '#f3f4f6',
              border: '2px dashed #4b5563',
              borderRadius: '0.75rem',
              padding: '3rem',
              textAlign: 'center',
              color: '#4b5563',
              margin: '1.5rem 0'
            }}>
              [Weather chart showing seasonal temperature variations]<br />
              <em>Temperature and precipitation graphs for off-season months</em>
            </div>
          </section>

          {/* Off-Season Tips Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#1e40af',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #3b82f6',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Tips
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Make the most of your North Cascades National Park off-season adventure with these essential tips:
            </p>
            
            <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Check Road Conditions Daily</strong><br />
                Highway 20 (North Cascades Highway) closes seasonally, typically November through April. Check current conditions and plan alternate routes via Highway 2.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Layer Your Clothing</strong><br />
                Mountain weather changes rapidly. Bring base layers, insulating layers, and waterproof shells. Temperatures can vary 30+ degrees by elevation.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Start Early for Best Weather</strong><br />
                Mountain weather is typically most stable in morning hours. Start hikes early to avoid afternoon storms and maximize daylight.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Bring Emergency Supplies</strong><br />
                Remote mountain location requires self-sufficiency. Carry extra food, water, warm clothing, and navigation tools for all activities.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Plan for Limited Services</strong><br />
                Most park facilities operate seasonally. Book accommodations in gateway towns and bring all necessary supplies.
              </li>
            </ol>
          </section>

          {/* Before You Go Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#1e40af',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #3b82f6',
              paddingBottom: '0.5rem'
            }}>
              Before You Go
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Essential pre-trip checklist for your North Cascades National Park off-season adventure:
            </p>
            
            <h3 style={{ color: '#1d4ed8', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Reservations & Permits</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Park entrance pass or America the Beautiful Annual Pass</li>
              <li>Reserve accommodations in Winthrop, Concrete, or Sedro-Woolley</li>
              <li>Book camping reservations well in advance (limited off-season availability)</li>
              <li>Check current road closures and park accessibility</li>
            </ul>

            <h3 style={{ color: '#1d4ed8', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Gear & Equipment</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Layered clothing system for mountain weather changes</li>
              <li>Waterproof hiking boots with good ankle support</li>
              <li>Rain gear and warm insulating layers</li>
              <li>Navigation tools (map, compass, GPS device)</li>
              <li>Headlamp with extra batteries for shorter daylight hours</li>
              <li>Emergency supplies (first aid, whistle, emergency shelter)</li>
            </ul>

            <h3 style={{ color: '#1d4ed8', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Safety Considerations</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Check weather forecasts and road conditions before departure</li>
              <li>Inform someone of your hiking plans and expected return</li>
              <li>Carry bear spray and know proper food storage techniques</li>
              <li>Download offline maps (cell service is extremely limited)</li>
              <li>Be prepared for rapidly changing mountain weather conditions</li>
            </ul>
          </section>

          {/* Itinerary Link Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#1e40af',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #3b82f6',
              paddingBottom: '0.5rem'
            }}>
              3-4 Day Itinerary
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Ready to plan your perfect North Cascades National Park off-season adventure? Our detailed itinerary covers scenic drives, alpine lakes, and mountain peaks.
            </p>
            
            <a 
              href="/north-cascades-itinerary"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
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
              🏔️ Get Your Complete 3-4 Day Itinerary
            </a>
          </section>

          {/* User Feedback & Photos Section - React Component */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#1e40af',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #3b82f6',
              paddingBottom: '0.5rem'
            }}>
              Visitor Feedback & Reviews
            </h2>
            <FeedbackForm parkSlug="north-cascades" />
          </section>
        </main>
      </div>
    </div>
  );
};

export default NorthCascadesReactTemplate;
