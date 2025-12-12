import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const DryTortugasReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #0369a1, #0284c7)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Dry Tortugas National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Discover the beauty of Dry Tortugas National Park during November, December, January, February - calm seas, incredible history, pristine snorkeling
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
              color: '#0369a1',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #0284c7',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Dry Tortugas National Park like never before during November, December, January, February. Here's why off-season travel offers the ultimate remote island adventure:
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
                <h3 style={{ color: '#1e3a8a', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🏰 Fort Jefferson Exploration</h3>
                <p>Perfect weather for exploring the massive 19th-century fortress without summer heat and humidity. Comfortable temperatures for the self-guided tour and historical discovery.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#1e3a8a', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🐦 Prime Bird Watching</h3>
                <p>Peak migration season brings thousands of birds to this remote refuge. Over 100 species use the islands as a rest stop during winter migration.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#1e3a8a', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>⚓ Exceptional Snorkeling</h3>
                <p>Crystal clear waters and calm seas create perfect conditions for exploring the moat wall and coral reefs around the fort. Visibility often exceeds 100 feet.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#1e3a8a', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>⛵ Smooth Ferry Rides</h3>
                <p>Calm winter seas make the 2.5-hour ferry ride more comfortable, with better chances of spotting dolphins and flying fish en route.</p>
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
              [Fort Jefferson winter morning photo]<br />
              <em>Fort Jefferson basking in perfect winter sunshine</em>
            </div>
          </section>

          {/* Off-Season Trade-Offs Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#0369a1',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #0284c7',
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
                background: '#f0f9ff',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #0284c7'
              }}>
                <h3 style={{ color: '#1e3a8a', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>✅ Advantages</h3>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li>Comfortable temperatures (70-80°F)</li>
                  <li>Calm seas for ferry transport and snorkeling</li>
                  <li>Peak bird migration and wildlife viewing</li>
                  <li>Excellent water clarity and visibility</li>
                  <li>Perfect weather for fort exploration</li>
                  <li>Minimal crowds for an authentic experience</li>
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
                  <li>Ferry can sell out during peak season - book early</li>
                  <li>Cooler morning temperatures require layers</li>
                  <li>Limited camping spots available</li>
                  <li>Day trip is the most common option</li>
                  <li>Weather can still affect ferry operations</li>
                  <li>No food available - must bring everything</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Weather Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#0369a1',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #0284c7',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Weather
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Plan your visit with confidence using our detailed weather data for Dry Tortugas National Park during November, December, January, February:
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
                  <tr style={{ backgroundColor: '#0369a1', color: 'white' }}>
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
                    <td style={{ padding: '1rem' }}>82°F</td>
                    <td style={{ padding: '1rem' }}>73°F</td>
                    <td style={{ padding: '1rem' }}>79°F</td>
                    <td style={{ padding: '1rem' }}>Perfect conditions</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>December</td>
                    <td style={{ padding: '1rem' }}>79°F</td>
                    <td style={{ padding: '1rem' }}>68°F</td>
                    <td style={{ padding: '1rem' }}>77°F</td>
                    <td style={{ padding: '1rem' }}>Ideal visiting weather</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>January</td>
                    <td style={{ padding: '1rem' }}>76°F</td>
                    <td style={{ padding: '1rem' }}>65°F</td>
                    <td style={{ padding: '1rem' }}>75°F</td>
                    <td style={{ padding: '1rem' }}>Peak bird migration</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>February</td>
                    <td style={{ padding: '1rem' }}>78°F</td>
                    <td style={{ padding: '1rem' }}>67°F</td>
                    <td style={{ padding: '1rem' }}>75°F</td>
                    <td style={{ padding: '1rem' }}>Calm seas, clear skies</td>
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
              [Weather chart showing winter stability]<br />
              <em>Consistently mild temperatures and calm conditions</em>
            </div>
          </section>

          {/* Off-Season Tips Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#0369a1',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #0284c7',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Tips
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Make the most of your Dry Tortugas National Park off-season adventure with these essential tips:
            </p>
            
            <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Book Ferry Tickets Well in Advance</strong><br />
                Winter is peak season for Dry Tortugas. Ferry tickets can sell out weeks ahead, especially for weekends and holidays.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Pack Everything You Need</strong><br />
                No food, water, or supplies available on the island. Bring lunch, snacks, water, and snorkel gear for the day trip.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Dress in Layers</strong><br />
                Early morning ferry departures can be cool, but island temperatures warm up quickly. Pack a light jacket and sun protection.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Bring Snorkel Gear</strong><br />
                The moat wall offers incredible snorkeling. Rent gear in Key West or bring your own for the best underwater experience.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Take Motion Sickness Precautions</strong><br />
                Even in calm weather, the 2.5-hour ferry ride can cause seasickness. Bring medication and sit outside for fresh air.
              </li>
            </ol>
          </section>

          {/* Before You Go Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#0369a1',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #0284c7',
              paddingBottom: '0.5rem'
            }}>
              Before You Go
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Essential pre-trip checklist for your Dry Tortugas National Park off-season adventure:
            </p>
            
            <h3 style={{ color: '#1e3a8a', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Reservations & Permits</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Ferry tickets (book 2-4 weeks ahead for peak season)</li>
              <li>Park entrance fee included with ferry ticket</li>
              <li>Camping permits (very limited - book months ahead)</li>
              <li>Seaplane tours (alternative to ferry)</li>
            </ul>

            <h3 style={{ color: '#1e3a8a', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Gear & Equipment</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>All food and water for the day</li>
              <li>Snorkel gear (mask, fins, snorkel)</li>
              <li>Reef-safe sunscreen and sun protection</li>
              <li>Comfortable walking shoes for fort exploration</li>
              <li>Layers for temperature changes</li>
            </ul>

            <h3 style={{ color: '#1e3a8a', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Safety Considerations</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Strong swimming ability required for snorkeling</li>
              <li>Motion sickness medication for ferry ride</li>
              <li>No medical facilities on island</li>
              <li>Check weather conditions before departure</li>
            </ul>
          </section>

          {/* Itinerary Link Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#0369a1',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #0284c7',
              paddingBottom: '0.5rem'
            }}>
              Day Trip Itinerary
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Ready to plan your perfect Dry Tortugas National Park off-season adventure? Our detailed itinerary covers everything from fort exploration to snorkeling spots.
            </p>
            
            <a 
              href="/dry-tortugas-itinerary"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #0369a1, #0284c7)',
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
              📅 Get Your Complete Day Trip Itinerary
            </a>
          </section>

          {/* User Feedback & Photos Section - React Component */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#0369a1',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #0284c7',
              paddingBottom: '0.5rem'
            }}>
              Visitor Feedback & Reviews
            </h2>
            <FeedbackForm parkSlug="dry-tortugas" />
          </section>
        </main>
      </div>
    </div>
  );
};

export default DryTortugasReactTemplate;
