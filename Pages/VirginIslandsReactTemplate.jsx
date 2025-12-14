import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const VirginIslandsReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #0284c7, #0891b2)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Virgin Islands National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Discover the pristine beaches and coral reefs of Virgin Islands National Park during May-November - fewer crowds, lower costs, tropical paradise
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
              color: '#d97706',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #f59e0b',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Virgin Islands National Park like never before during May-November. Here's why off-season travel offers the ultimate Caribbean paradise adventure:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              margin: '1.5rem 0'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #f59e0b'
              }}>
                <h3 style={{ color: '#d97706', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🏖️ Perfect Beach Weather</h3>
                <p>Experience warm Caribbean waters and pristine beaches without the winter cruise ship crowds that can number over 5,000 visitors per day.</p>
              </div>
              <div style={{
                background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #f59e0b'
              }}>
                <h3 style={{ color: '#d97706', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>💰 Significant Savings</h3>
                <p>Save up to 50% on accommodations and discover local deals unavailable during peak winter season.</p>
              </div>
              <div style={{
                background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #f59e0b'
              }}>
                <h3 style={{ color: '#d97706', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🤿 Exceptional Snorkeling</h3>
                <p>Capture underwater photography and explore coral reefs with exceptional visibility - often the clearest waters of the year.</p>
              </div>
              <div style={{
                background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #f59e0b'
              }}>
                <h3 style={{ color: '#d97706', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🐢 Wildlife Activity</h3>
                <p>Sea turtle nesting season and lush tropical vegetation make summer the best time for nature lovers and wildlife viewing.</p>
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
              [Virgin Islands off-season beach photo]<br />
              <em>Trunk Bay with crystal clear water and no crowds</em>
            </div>
          </section>

          {/* Off-Season Trade-Offs Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#0284c7',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #0891b2',
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
                  <li>Dramatic cost savings on lodging (40-50% off peak rates)</li>
                  <li>Crystal clear water with exceptional visibility</li>
                  <li>Sea turtle nesting season and tropical wildlife</li>
                  <li>Peaceful beaches and snorkel sites</li>
                  <li>Lower ferry and accommodation costs</li>
                  <li>Authentic local Caribbean experiences</li>
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
                  <li>Hurricane season (June-November) brings weather risks</li>
                  <li>Higher humidity and occasional afternoon showers</li>
                  <li>Some tour operators may have reduced schedules</li>
                  <li>Ferry schedules may be limited</li>
                  <li>Afternoon storms possible (usually brief)</li>
                  <li>Need to monitor tropical weather forecasts</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Weather Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#0284c7',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #0891b2',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Weather
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Plan your visit with confidence using our detailed weather data for Virgin Islands National Park during May-November:
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
                  <tr style={{ backgroundColor: '#0284c7', color: 'white' }}>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Month</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Avg High (°F)</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Avg Low (°F)</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Precipitation</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Conditions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>May</td>
                    <td style={{ padding: '1rem' }}>85°F</td>
                    <td style={{ padding: '1rem' }}>78°F</td>
                    <td style={{ padding: '1rem' }}>3.2 inches</td>
                    <td style={{ padding: '1rem' }}>Warm, occasional showers</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>June-August</td>
                    <td style={{ padding: '1rem' }}>88°F</td>
                    <td style={{ padding: '1rem' }}>80°F</td>
                    <td style={{ padding: '1rem' }}>4.1 inches</td>
                    <td style={{ padding: '1rem' }}>Hot, humid, afternoon storms</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>September-October</td>
                    <td style={{ padding: '1rem' }}>86°F</td>
                    <td style={{ padding: '1rem' }}>79°F</td>
                    <td style={{ padding: '1rem' }}>5.8 inches</td>
                    <td style={{ padding: '1rem' }}>Peak hurricane season</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>November</td>
                    <td style={{ padding: '1rem' }}>83°F</td>
                    <td style={{ padding: '1rem' }}>77°F</td>
                    <td style={{ padding: '1rem' }}>3.7 inches</td>
                    <td style={{ padding: '1rem' }}>Pleasant, less humid</td>
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
              <em>Temperature and precipitation graphs for off-season months</em>
            </div>
          </section>

          {/* Off-Season Tips Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#0284c7',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #0891b2',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Tips
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Make the most of your Virgin Islands National Park off-season adventure with these essential tips:
            </p>
            
            <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Monitor Weather Forecasts</strong><br />
                Hurricane season requires staying informed. Check National Hurricane Center updates and have flexible travel plans during peak season (August-October).
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Book Ferry Tickets in Advance</strong><br />
                Ferry schedules may be reduced during off-season. Reserve tickets from St. Thomas to St. John ahead of time, especially during tropical weather.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Pack for Tropical Weather</strong><br />
                Bring quick-dry clothing, reef-safe sunscreen, and a light rain jacket for brief afternoon showers that are common during summer months.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Plan Morning Activities</strong><br />
                Schedule snorkeling and hiking for early morning hours when temperatures are cooler and afternoon storms are less likely.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Respect Marine Life</strong><br />
                Sea turtle nesting season requires extra care. Use only reef-safe sunscreen and maintain distance from nesting sites and marine wildlife.
              </li>
            </ol>
          </section>

          {/* Before You Go Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#0284c7',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #0891b2',
              paddingBottom: '0.5rem'
            }}>
              Before You Go
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Essential pre-trip checklist for your Virgin Islands National Park off-season adventure:
            </p>
            
            <h3 style={{ color: '#0369a1', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Travel & Transportation</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>No passport needed (U.S. territory)</li>
              <li>Ferry reservations from St. Thomas to St. John</li>
              <li>Rental car booking in St. Thomas (limited availability)</li>
              <li>Check ferry schedules for potential weather delays</li>
            </ul>

            <h3 style={{ color: '#0369a1', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Gear & Equipment</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Reef-safe sunscreen (required by law)</li>
              <li>Snorkeling gear or plan to rent on island</li>
              <li>Quick-dry clothing and water shoes</li>
              <li>Waterproof phone case and dry bags</li>
              <li>Light rain jacket for tropical showers</li>
            </ul>

            <h3 style={{ color: '#0369a1', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Safety Considerations</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Download offline maps (cell service can be limited)</li>
              <li>Monitor tropical weather and hurricane forecasts</li>
              <li>Inform someone of your daily activity plans</li>
              <li>Carry cash (many local vendors prefer cash payments)</li>
            </ul>
          </section>

          {/* Itinerary Link Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#0284c7',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #0891b2',
              paddingBottom: '0.5rem'
            }}>
              5-Day Itinerary
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Ready to plan your perfect Virgin Islands National Park off-season adventure? Our detailed itinerary covers everything from world-class snorkeling to hidden Caribbean gems.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <a 
                href="/virgin-islands-itinerary"
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #0284c7, #0891b2)',
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
                🏝️ Get Your Complete 5-Day Caribbean Itinerary
              </a>
              
              <a 
                href="https://www.nps.gov/viis/index.htm"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #0284c7, #0891b2)',
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
                🌐 Official Virgin Islands NPS Page
              </a>
            </div>
          </section>

          {/* User Feedback & Photos Section - React Component */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#0284c7',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #0891b2',
              paddingBottom: '0.5rem'
            }}>
              Share Your Virgin Islands Experience
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Have you visited Virgin Islands National Park during off-season? Share your experience, tips, and photos to help other travelers plan their Caribbean adventure!
            </p>
            <FeedbackForm parkSlug="virgin-islands" />
          </section>
        </main>
      </div>
    </div>
  );
};

export default VirginIslandsReactTemplate;