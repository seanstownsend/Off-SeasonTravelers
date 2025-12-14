import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const BiscayneReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #6e7f52, #7c8d60)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Biscayne National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Discover the beauty of Biscayne National Park during November, December, January, February - perfect diving, calm seas, amazing marine life
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
              color: '#0d9488',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #14b8a6',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Biscayne National Park like never before during November, December, January, February. Here's why off-season travel offers the ultimate underwater adventure:
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
                <h3 style={{ color: '#134e4a', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🤿 Prime Diving Conditions</h3>
                <p>Crystal clear waters with 80+ foot visibility, calm seas, and comfortable water temperatures make this the best time for snorkeling and diving.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#134e4a', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🐠 Incredible Marine Life</h3>
                <p>Peak season for coral activity, tropical fish, and manatee sightings. Water temperature stays around 75-78°F - perfect for extended underwater exploration.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#134e4a', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>⛵ Perfect Boating Weather</h3>
                <p>Minimal storms, calm winds, and sunny skies create ideal conditions for island hopping and exploring hidden coves around the keys.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#134e4a', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🏝️ Pristine Island Access</h3>
                <p>Explore Elliott Key and Boca Chita Key with perfect weather for camping, hiking, and beach exploration without summer heat.</p>
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
              [Biscayne crystal clear waters photo]<br />
              <em>Perfect visibility for underwater exploration in winter months</em>
            </div>
          </section>

          {/* Off-Season Trade-Offs Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#0d9488',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #14b8a6',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Trade-Offs
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              While off-season travel offers incredible benefits, it's important to understand the seasonal characteristics:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              margin: '1.5rem 0'
            }}>
              <div style={{
                background: '#f0fdfa',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #14b8a6'
              }}>
                <h3 style={{ color: '#134e4a', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>✅ Advantages</h3>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li>Excellent water visibility (80+ feet)</li>
                  <li>Comfortable air temperatures (75-80°F)</li>
                  <li>Calm seas perfect for small boats</li>
                  <li>Peak coral and marine life activity</li>
                  <li>Minimal chance of storms</li>
                  <li>Perfect conditions for underwater photography</li>
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
                  <li>More crowded than summer months</li>
                  <li>Higher prices for boat tours and accommodations</li>
                  <li>Need advance reservations for camping</li>
                  <li>Cooler morning/evening air temperatures</li>
                  <li>Busier marina and boat launch areas</li>
                  <li>Popular dive sites may be crowded</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Weather Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#0d9488',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #14b8a6',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Weather
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Plan your visit with confidence using our detailed weather data for Biscayne National Park during November, December, January, February:
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
                  <tr style={{ backgroundColor: '#0d9488', color: 'white' }}>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Month</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Air High (°F)</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Air Low (°F)</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Water Temp (°F)</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Conditions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>November</td>
                    <td style={{ padding: '1rem' }}>81°F</td>
                    <td style={{ padding: '1rem' }}>69°F</td>
                    <td style={{ padding: '1rem' }}>78°F</td>
                    <td style={{ padding: '1rem' }}>Perfect diving weather</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>December</td>
                    <td style={{ padding: '1rem' }}>78°F</td>
                    <td style={{ padding: '1rem' }}>64°F</td>
                    <td style={{ padding: '1rem' }}>76°F</td>
                    <td style={{ padding: '1rem' }}>Ideal conditions</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>January</td>
                    <td style={{ padding: '1rem' }}>76°F</td>
                    <td style={{ padding: '1rem' }}>61°F</td>
                    <td style={{ padding: '1rem' }}>75°F</td>
                    <td style={{ padding: '1rem' }}>Crystal clear waters</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>February</td>
                    <td style={{ padding: '1rem' }}>78°F</td>
                    <td style={{ padding: '1rem' }}>63°F</td>
                    <td style={{ padding: '1rem' }}>75°F</td>
                    <td style={{ padding: '1rem' }}>Peak marine life season</td>
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
              [Weather chart showing optimal marine conditions]<br />
              <em>Air and water temperature stability during peak season</em>
            </div>
          </section>

          {/* Off-Season Tips Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#0d9488',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #14b8a6',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Tips
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Make the most of your Biscayne National Park off-season adventure with these essential tips:
            </p>
            
            <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Book Boat Tours Early</strong><br />
                This is peak season for Biscayne. Reserve snorkel trips, island shuttles, and camping transportation well in advance.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Bring a Wetsuit for Extended Diving</strong><br />
                While water temperatures are comfortable, a 3mm wetsuit allows for longer underwater exploration and better buoyancy control.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Pack Layers for Temperature Changes</strong><br />
                Early mornings and boat rides can be cool. Bring a windbreaker and warm layers for pre-sunrise departures.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Protect Your Equipment</strong><br />
                Salt water and sun are harsh on gear. Bring protective cases for cameras and electronics, and rinse equipment thoroughly.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Check Marine Weather Conditions</strong><br />
                Even in perfect season, ocean conditions can change. Check marine forecasts and have backup indoor plans.
              </li>
            </ol>
          </section>

          {/* Before You Go Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#0d9488',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #14b8a6',
              paddingBottom: '0.5rem'
            }}>
              Before You Go
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Essential pre-trip checklist for your Biscayne National Park off-season adventure:
            </p>
            
            <h3 style={{ color: '#134e4a', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Reservations & Permits</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Park entrance pass (free, but required for boat access)</li>
              <li>Island camping reservations (book 3-6 months ahead)</li>
              <li>Boat tour and snorkel trip reservations</li>
              <li>Marina and boat launch permits if bringing your own vessel</li>
            </ul>

            <h3 style={{ color: '#134e4a', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Gear & Equipment</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Snorkel gear (mask, fins, snorkel)</li>
              <li>Waterproof camera and protective housing</li>
              <li>Reef-safe sunscreen (required to protect coral)</li>
              <li>Quick-dry clothing and windbreaker</li>
              <li>Water shoes for rocky shores</li>
            </ul>

            <h3 style={{ color: '#134e4a', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Safety Considerations</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Strong swimming skills required for most activities</li>
              <li>Marine VHF radio for boat operators</li>
              <li>First aid kit for island camping</li>
              <li>Check marine weather and tide conditions</li>
            </ul>
          </section>

          {/* Itinerary Link Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#0d9488',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #14b8a6',
              paddingBottom: '0.5rem'
            }}>
              2-3 Day Itinerary
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Ready to plan your perfect Biscayne National Park off-season adventure? Our detailed itinerary covers everything from the best dive sites to island camping.
            </p>
            
            <a 
              href="/biscayne-itinerary"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #0d9488, #14b8a6)',
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
              📅 Get Your Complete 2-3 Day Itinerary
            </a>
          </section>

          {/* User Feedback & Photos Section - React Component */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#0d9488',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #14b8a6',
              paddingBottom: '0.5rem'
            }}>
              Visitor Feedback & Reviews
            </h2>
            <FeedbackForm parkSlug="biscayne" />
          </section>
        </main>
      </div>
    </div>
  );
};

export default BiscayneReactTemplate;
