import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const EvergladesReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #0891b2, #06b6d4)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Everglades National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Discover the beauty of Everglades National Park during November, December, January, February - dry season, cooler weather, incredible wildlife
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
              color: '#0891b2',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #06b6d4',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Everglades National Park like never before during November, December, January, February. Here's why off-season travel offers the ultimate subtropical wilderness adventure:
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
                <h3 style={{ color: '#0c4a6e', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🦎 Peak Wildlife Season</h3>
                <p>Dry season concentrates wildlife around water sources, making it the best time for alligator, bird, and manatee viewing. Over 350 bird species are most active during these months.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#0c4a6e', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🌡️ Perfect Weather</h3>
                <p>Escape the summer humidity with comfortable 70-80°F days, low humidity, and minimal rainfall. No mosquitos or oppressive heat!</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#0c4a6e', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🚤 Optimal Boating</h3>
                <p>Calm waters and clear skies make this the perfect time for kayaking through mangrove tunnels and exploring Florida Bay.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#0c4a6e', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>📸 Crystal Clear Photography</h3>
                <p>Low humidity means better visibility for photographing wildlife, stunning sunsets, and the unique "River of Grass" landscape.</p>
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
              [Everglades dry season wildlife photo]<br />
              <em>Alligators basking in winter sunshine at Anhinga Trail</em>
            </div>
          </section>

          {/* Off-Season Trade-Offs Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#0891b2',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #06b6d4',
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
                background: '#f0fdff',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #06b6d4'
              }}>
                <h3 style={{ color: '#0c4a6e', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>✅ Advantages</h3>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li>Peak wildlife viewing - animals concentrate near water</li>
                  <li>Comfortable temperatures (70-80°F)</li>
                  <li>Low humidity and minimal rainfall</li>
                  <li>No mosquitos or biting insects</li>
                  <li>Clear skies perfect for photography</li>
                  <li>Ideal conditions for kayaking and boating</li>
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
                  <li>More crowded than summer (but for good reason!)</li>
                  <li>Higher accommodation prices during peak season</li>
                  <li>Some water levels may be lower</li>
                  <li>Need reservations for camping and tours</li>
                  <li>Cooler evenings require light layers</li>
                  <li>Popular trails fill up early in the day</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Weather Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#0891b2',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #06b6d4',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Weather
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Plan your visit with confidence using our detailed weather data for Everglades National Park during November, December, January, February:
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
                  <tr style={{ backgroundColor: '#0891b2', color: 'white' }}>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Month</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Avg High (°F)</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Avg Low (°F)</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Precipitation</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Conditions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>November</td>
                    <td style={{ padding: '1rem' }}>82°F</td>
                    <td style={{ padding: '1rem' }}>66°F</td>
                    <td style={{ padding: '1rem' }}>1.8 inches</td>
                    <td style={{ padding: '1rem' }}>Warm, dry, perfect</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>December</td>
                    <td style={{ padding: '1rem' }}>79°F</td>
                    <td style={{ padding: '1rem' }}>59°F</td>
                    <td style={{ padding: '1rem' }}>1.6 inches</td>
                    <td style={{ padding: '1rem' }}>Ideal conditions</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>January</td>
                    <td style={{ padding: '1rem' }}>76°F</td>
                    <td style={{ padding: '1rem' }}>55°F</td>
                    <td style={{ padding: '1rem' }}>1.9 inches</td>
                    <td style={{ padding: '1rem' }}>Cool, comfortable</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>February</td>
                    <td style={{ padding: '1rem' }}>79°F</td>
                    <td style={{ padding: '1rem' }}>58°F</td>
                    <td style={{ padding: '1rem' }}>2.1 inches</td>
                    <td style={{ padding: '1rem' }}>Peak wildlife season</td>
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
              [Weather chart showing dry season conditions]<br />
              <em>Temperature and rainfall patterns during peak season</em>
            </div>
          </section>

          {/* Off-Season Tips Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#0891b2',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #06b6d4',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Tips
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Make the most of your Everglades National Park off-season adventure with these essential tips:
            </p>
            
            <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Start Early for Wildlife Viewing</strong><br />
                Animals are most active in the cooler morning hours. Begin your Anhinga Trail walk at sunrise for the best wildlife photography.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Bring Layers for Temperature Changes</strong><br />
                While days are warm, early mornings and evenings can be cool. Pack a light jacket for boat tours and early morning hikes.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Book Kayak Tours in Advance</strong><br />
                This is peak season for Everglades activities. Reserve guided kayak tours and camping spots well ahead of time.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Bring Plenty of Water</strong><br />
                Even in the dry season, Florida sun can be intense. Carry more water than you think you'll need for hiking and kayaking.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Download the NPS App</strong><br />
                Cell service is limited. Download park maps and information before your visit for offline access to trail guides.
              </li>
            </ol>
          </section>

          {/* Before You Go Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#0891b2',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #06b6d4',
              paddingBottom: '0.5rem'
            }}>
              Before You Go
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Essential pre-trip checklist for your Everglades National Park off-season adventure:
            </p>
            
            <h3 style={{ color: '#0c4a6e', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Reservations & Permits</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Park entrance pass or America the Beautiful Annual Pass</li>
              <li>Camping reservations (book 3-6 months ahead for peak season)</li>
              <li>Kayak tour reservations</li>
              <li>Backcountry permits for overnight camping</li>
            </ul>

            <h3 style={{ color: '#0c4a6e', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Gear & Equipment</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Lightweight, quick-dry clothing</li>
              <li>Sun hat and polarized sunglasses</li>
              <li>Waterproof camera case or dry bag</li>
              <li>Binoculars for wildlife viewing</li>
              <li>Insect repellent (minimal bugs, but still useful)</li>
            </ul>

            <h3 style={{ color: '#0c4a6e', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Safety Considerations</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Respect wildlife - maintain 15+ feet from alligators</li>
              <li>Stay on designated trails to protect ecosystem</li>
              <li>Bring extra water and snacks</li>
              <li>Check tide times for coastal areas</li>
            </ul>
          </section>

          {/* Itinerary Link Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#0891b2',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #06b6d4',
              paddingBottom: '0.5rem'
            }}>
              3-4 Day Itinerary
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Ready to plan your perfect Everglades National Park off-season adventure? Our detailed itinerary covers everything from must-see wildlife spots to hidden gems.
            </p>
            
            <a 
              href="/everglades-itinerary"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #0891b2, #06b6d4)',
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
              📅 Get Your Complete 3-4 Day Itinerary
            </a>
          </section>

          {/* User Feedback & Photos Section - React Component */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#0891b2',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #06b6d4',
              paddingBottom: '0.5rem'
            }}>
              Visitor Feedback & Reviews
            </h2>
            <FeedbackForm parkSlug="everglades" />
          </section>
        </main>
      </div>
    </div>
  );
};

export default EvergladesReactTemplate;
