import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const RedwoodsReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #166534, #15803d)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Redwood National and State Parks: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Discover the world's tallest trees during September-November, April-May - fewer crowds, lower costs, magical forest experiences
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
              color: '#166534',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #15803d',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Redwood National and State Parks like never before during September-November and April-May. Here's why off-season travel offers the ultimate ancient forest adventure:
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
                <h3 style={{ color: '#14532d', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🌲 Mystical Forest Atmosphere</h3>
                <p>Experience the cathedral-like groves with enhanced fog and mist effects. The cooler weather creates dramatic lighting through the ancient canopy without summer crowds.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#14532d', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>💰 Significant Savings</h3>
                <p>Save up to 50% on accommodations and discover local deals unavailable during peak season. Many coastal lodges offer special off-season packages.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#14532d', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>📸 Epic Photography</h3>
                <p>Capture stunning fall colors in deciduous areas, dramatic storm light on the coast, and iconic redwood photography without tourists in every shot.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#14532d', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🦌 Wildlife Activity</h3>
                <p>Fall migration season brings abundant birdlife, while Roosevelt elk are more active. Spring wildflowers bloom in meadows throughout the parks.</p>
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
              [Redwood forest photo with fog and fall colors]<br />
              <em>Towering coastal redwoods shrouded in mystical off-season fog</em>
            </div>
          </section>

          {/* Off-Season Trade-Offs Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#166534',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #15803d',
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
                background: '#ecfdf5',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #10b981'
              }}>
                <h3 style={{ color: '#047857', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>✅ Advantages</h3>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li>Dramatic savings on coastal accommodations (40-60% off peak rates)</li>
                  <li>Enhanced atmospheric conditions with fog and mist</li>
                  <li>Fall colors in mixed forests and spring wildflowers</li>
                  <li>Virtually empty trails and grove areas</li>
                  <li>Better wildlife viewing opportunities</li>
                  <li>Authentic peaceful forest experience</li>
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
                  <li>Increased rainfall and coastal storm potential</li>
                  <li>Some backcountry trails may be muddy or closed</li>
                  <li>Shorter daylight hours in fall months</li>
                  <li>Coastal fog can reduce visibility</li>
                  <li>Some visitor centers have reduced hours</li>
                  <li>Beach access may be limited during storm periods</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Weather Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#166534',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #15803d',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Weather
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Plan your visit with confidence using our detailed weather data for Redwood National and State Parks during off-season months:
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
                  <tr style={{ backgroundColor: '#166534', color: 'white' }}>
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
                    <td style={{ padding: '1rem' }}>62°F</td>
                    <td style={{ padding: '1rem' }}>45°F</td>
                    <td style={{ padding: '1rem' }}>3.8 inches</td>
                    <td style={{ padding: '1rem' }}>Cool, occasional showers</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>May</td>
                    <td style={{ padding: '1rem' }}>66°F</td>
                    <td style={{ padding: '1rem' }}>48°F</td>
                    <td style={{ padding: '1rem' }}>2.1 inches</td>
                    <td style={{ padding: '1rem' }}>Pleasant, some fog</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>September</td>
                    <td style={{ padding: '1rem' }}>72°F</td>
                    <td style={{ padding: '1rem' }}>52°F</td>
                    <td style={{ padding: '1rem' }}>1.2 inches</td>
                    <td style={{ padding: '1rem' }}>Warm, dry, ideal hiking</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>October</td>
                    <td style={{ padding: '1rem' }}>68°F</td>
                    <td style={{ padding: '1rem' }}>48°F</td>
                    <td style={{ padding: '1rem' }}>2.9 inches</td>
                    <td style={{ padding: '1rem' }}>Cool, fall colors</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>November</td>
                    <td style={{ padding: '1rem' }}>60°F</td>
                    <td style={{ padding: '1rem' }}>42°F</td>
                    <td style={{ padding: '1rem' }}>6.7 inches</td>
                    <td style={{ padding: '1rem' }}>Rainy season begins</td>
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
              [Weather chart showing seasonal temperature and rainfall patterns]<br />
              <em>Climate graph for Redwood National and State Parks off-season months</em>
            </div>
          </section>

          {/* Off-Season Tips Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#166534',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #15803d',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Tips
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Make the most of your Redwood National and State Parks off-season adventure with these essential tips:
            </p>
            
            <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Layer Up for Forest Microclimates</strong><br />
                Temperatures can vary dramatically between the foggy coast and inland groves. Bring moisture-wicking base layers, insulating mid-layers, and waterproof outer shells.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Waterproof Your Gear</strong><br />
                Invest in waterproof hiking boots and pack covers. The forest can be damp even without rain, and trails may have standing water or mud.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Check Trail Conditions</strong><br />
                Some backcountry trails may be temporarily closed due to fallen trees or flooding. Check with visitor centers for current conditions and alternate routes.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Embrace the Fog</strong><br />
                Coastal fog creates magical photography opportunities but can reduce visibility. Drive slowly on scenic routes and allow extra time for navigation.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Plan for Limited Daylight</strong><br />
                Fall and spring have shorter days. Start early and plan major activities during peak daylight hours (10 AM - 4 PM) for the best experience.
              </li>
            </ol>
          </section>

          {/* Before You Go Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#166534',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #15803d',
              paddingBottom: '0.5rem'
            }}>
              Before You Go
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Essential pre-trip checklist for your Redwood National and State Parks off-season adventure:
            </p>
            
            <h3 style={{ color: '#14532d', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Travel & Transportation</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Vehicle with good clearance for gravel roads</li>
              <li>Full gas tank (services can be sparse along scenic routes)</li>
              <li>Current road conditions from CalTrans and park service</li>
              <li>Backup transportation plans for storm closures</li>
            </ul>

            <h3 style={{ color: '#14532d', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Gear & Equipment</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Waterproof hiking boots with good traction</li>
              <li>Rain gear and warm layers for temperature swings</li>
              <li>Headlamp or flashlight for early/late photography</li>
              <li>Camera with weather protection and lens cloth</li>
              <li>First aid kit and emergency supplies</li>
            </ul>

            <h3 style={{ color: '#14532d', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Safety Considerations</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Download offline maps (cell service is very limited)</li>
              <li>Inform someone of your detailed itinerary and return plans</li>
              <li>Carry emergency food and water for unexpected delays</li>
              <li>Be aware of falling branch hazards in old-growth areas</li>
            </ul>
          </section>

          {/* Itinerary Link Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#166534',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #15803d',
              paddingBottom: '0.5rem'
            }}>
              4-Day Itinerary
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Ready to plan your perfect Redwood National and State Parks off-season adventure? Our detailed itinerary covers everything from ancient groves to scenic coastal drives.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <a 
                href="/redwoods-itinerary"
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #166534, #15803d)',
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
                🌲 Get Your Complete 4-Day Redwoods Itinerary
              </a>
              
              <a 
                href="https://www.nps.gov/redw/index.htm"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #166534, #15803d)',
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
                🌐 Official Redwood Parks NPS Page
              </a>
            </div>
          </section>

          {/* User Feedback & Photos Section - React Component */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#166534',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #15803d',
              paddingBottom: '0.5rem'
            }}>
              Share Your Redwoods Experience
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Have you visited Redwood National and State Parks during off-season? Share your experience, tips, and photos to help other travelers plan their ancient forest adventure!
            </p>
            <FeedbackForm parkSlug="redwoods" />
          </section>
        </main>
      </div>
    </div>
  );
};

export default RedwoodsReactTemplate;