import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const VoyageursReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Voyageurs National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Discover America's waterway wilderness during September, October, April, May - pristine lakes, historic fur trade routes, incredible fishing and solitude
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
              color: '#1e3a8a',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #3b82f6',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Voyageurs National Park during the spectacular shoulder seasons of September, October, April, May. Here's why off-season travel offers the ultimate boundary waters adventure:
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
                <h3 style={{ color: '#1d4ed8', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🛶 Pristine Waterways</h3>
                <p>Navigate historic fur trade routes across four major lakes with virtually no boat traffic. Experience the wilderness as voyageurs did centuries ago.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#1d4ed8', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>💰 Exceptional Value</h3>
                <p>Save significantly on accommodations in International Falls and Kabetogama. Enjoy reduced rates at resorts and better availability for waterfront lodging.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#1d4ed8', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>📸 Spectacular Photography</h3>
                <p>Capture fall foliage reflections in crystal-clear lakes, dramatic skies, and wildlife without summer boat wakes disturbing the perfect shots.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#1d4ed8', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🐻 Enhanced Wildlife Viewing</h3>
                <p>Spot black bears, bald eagles, loons, and other wildlife preparing for seasonal changes. Spring and fall migrations offer incredible birding opportunities.</p>
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
              [Voyageurs off-season landscape photo]<br />
              <em>Pristine lake reflections with fall colors and historic canoe routes</em>
            </div>
          </section>

          {/* Off-Season Trade-Offs Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#1e3a8a',
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
                  <li>Peaceful waterways without summer boat traffic and crowds</li>
                  <li>Spectacular fall foliage and spring wildflower displays</li>
                  <li>Excellent fishing conditions with cooler water temperatures</li>
                  <li>Significant savings on lodging in gateway communities</li>
                  <li>Enhanced wildlife viewing during migration seasons</li>
                  <li>Perfect conditions for photography and stargazing</li>
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
                  <li>Cold water temperatures require proper safety equipment</li>
                  <li>Weather can change rapidly with sudden storms</li>
                  <li>Limited services and shortened operating hours</li>
                  <li>Some boat launches may be closed or have limited access</li>
                  <li>Shorter daylight hours limit paddling time</li>
                  <li>Early ice formation possible in late fall</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Weather Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#1e3a8a',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #3b82f6',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Weather
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Plan your visit with confidence using our detailed weather data for Voyageurs National Park during September, October, April, May:
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
                  <tr style={{ backgroundColor: '#1e3a8a', color: 'white' }}>
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
                    <td style={{ padding: '1rem' }}>52°F</td>
                    <td style={{ padding: '1rem' }}>30°F</td>
                    <td style={{ padding: '1rem' }}>1.8 inches</td>
                    <td style={{ padding: '1rem' }}>Cool, ice-out season</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>May</td>
                    <td style={{ padding: '1rem' }}>66°F</td>
                    <td style={{ padding: '1rem' }}>42°F</td>
                    <td style={{ padding: '1rem' }}>2.4 inches</td>
                    <td style={{ padding: '1rem' }}>Mild, perfect for paddling</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>September</td>
                    <td style={{ padding: '1rem' }}>68°F</td>
                    <td style={{ padding: '1rem' }}>48°F</td>
                    <td style={{ padding: '1rem' }}>3.1 inches</td>
                    <td style={{ padding: '1rem' }}>Pleasant, fall colors peak</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>October</td>
                    <td style={{ padding: '1rem' }}>54°F</td>
                    <td style={{ padding: '1rem' }}>36°F</td>
                    <td style={{ padding: '1rem' }}>2.2 inches</td>
                    <td style={{ padding: '1rem' }}>Cool, dramatic autumn</td>
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
              color: '#1e3a8a',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #3b82f6',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Tips
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Make the most of your Voyageurs National Park off-season adventure with these essential tips:
            </p>
            
            <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Prioritize Cold Water Safety</strong><br />
                Water temperatures remain dangerously cold even in shoulder seasons. Always wear proper flotation devices and dress for water temperature, not air temperature.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Check Ice Conditions and Access</strong><br />
                Spring ice-out and fall freeze-up can affect boat launches and paddling routes. Contact park rangers for current conditions before departure.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Plan for Weather Delays</strong><br />
                Sudden storms can make water travel dangerous. Build flexibility into your itinerary and have backup indoor activities planned.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Bring Layered Clothing</strong><br />
                Temperatures on the water can be 10-20 degrees cooler than on land. Pack warm layers, rain gear, and extra dry clothing in waterproof bags.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Experience the Cultural History</strong><br />
                Off-season is perfect for exploring the rich fur trade history. Visit interpretive centers and historical sites without summer crowds.
              </li>
            </ol>
          </section>

          {/* Before You Go Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#1e3a8a',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #3b82f6',
              paddingBottom: '0.5rem'
            }}>
              Before You Go
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Essential pre-trip checklist for your Voyageurs National Park off-season adventure:
            </p>
            
            <h3 style={{ color: '#1d4ed8', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Reservations & Permits</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Park entrance pass or America the Beautiful Annual Pass</li>
              <li>Reserve accommodations in International Falls or Kabetogama</li>
              <li>Book boat rentals or guided services well in advance</li>
              <li>Check current operating hours for visitor centers and services</li>
            </ul>

            <h3 style={{ color: '#1d4ed8', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Gear & Equipment</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Cold water safety gear (proper PFDs, immersion suits if available)</li>
              <li>Waterproof bags for all gear and clothing</li>
              <li>Layered clothing system including warm insulation and rain gear</li>
              <li>Navigation tools (waterproof maps, compass, GPS device)</li>
              <li>Emergency communication device (satellite communicator recommended)</li>
              <li>Fishing gear and licenses (excellent off-season fishing opportunities)</li>
            </ul>

            <h3 style={{ color: '#1d4ed8', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Safety Considerations</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>File float plans with park rangers or trusted contacts</li>
              <li>Understand cold water survival techniques and hypothermia prevention</li>
              <li>Check weather forecasts and have contingency plans for storms</li>
              <li>Carry emergency shelter and signaling devices</li>
              <li>Know your limits - conditions can deteriorate quickly on large lakes</li>
            </ul>
          </section>

          {/* Itinerary Link Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#1e3a8a',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #3b82f6',
              paddingBottom: '0.5rem'
            }}>
              2-4 Day Itinerary
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Ready to plan your perfect Voyageurs National Park off-season adventure? Our detailed itinerary covers historic waterways, cultural sites, and wilderness exploration.
            </p>
            
            <a 
              href="/voyageurs-itinerary"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
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
              🛶 Get Your Complete 2-4 Day Itinerary
            </a>
          </section>

          {/* User Feedback & Photos Section - React Component */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#1e3a8a',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #3b82f6',
              paddingBottom: '0.5rem'
            }}>
              Visitor Feedback & Reviews
            </h2>
            <FeedbackForm parkSlug="voyageurs" />
          </section>
        </main>
      </div>
    </div>
  );
};

export default VoyageursReactTemplate;
