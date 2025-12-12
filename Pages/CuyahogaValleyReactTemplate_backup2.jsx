import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const CuyahogaValleyReactTemplate = () => {
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
          Cuyahoga Valley National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Discover Ohio's only national park during October, November, March, April - incredible Towpath Trail biking, scenic railroad, peaceful waterfalls
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
              Experience Cuyahoga Valley National Park like never before during October, November, March, April. Here's why off-season travel offers the ultimate Ohio adventure:
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
                <h3 style={{ color: '#047857', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🚴 Towpath Trail Paradise</h3>
                <p>Enjoy the 20-mile Towpath Trail without summer crowds - perfect weather for biking and walking along the historic canal.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#047857', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🚂 Scenic Railroad Magic</h3>
                <p>Experience the Cuyahoga Valley Scenic Railroad with stunning fall foliage views and comfortable temperatures for outdoor seating.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#047857', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>💦 Brandywine Falls Serenity</h3>
                <p>Visit Ohio's most famous waterfall in peaceful solitude - perfect for photography without summer tourist crowds.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#047857', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>💰 Ohio Value</h3>
                <p>Save on accommodations in Akron and Peninsula. Off-season rates can be 30-50% lower than peak summer prices.</p>
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
              [Cuyahoga Valley off-season landscape photo]<br />
              <em>Towpath Trail with fall colors and Brandywine Falls</em>
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
              Off-Season Weather
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Plan your visit with confidence using our detailed weather data for Cuyahoga Valley during October, November, March, April:
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
                  <tr style={{ backgroundColor: '#059669', color: 'white' }}>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Month</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Avg High (°F)</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Avg Low (°F)</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Precipitation</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Conditions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>March</td>
                    <td style={{ padding: '1rem' }}>50°F</td>
                    <td style={{ padding: '1rem' }}>30°F</td>
                    <td style={{ padding: '1rem' }}>3.2 inches</td>
                    <td style={{ padding: '1rem' }}>Cool, great for hiking</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>April</td>
                    <td style={{ padding: '1rem' }}>62°F</td>
                    <td style={{ padding: '1rem' }}>40°F</td>
                    <td style={{ padding: '1rem' }}>3.4 inches</td>
                    <td style={{ padding: '1rem' }}>Perfect biking weather</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>October</td>
                    <td style={{ padding: '1rem' }}>64°F</td>
                    <td style={{ padding: '1rem' }}>43°F</td>
                    <td style={{ padding: '1rem' }}>2.8 inches</td>
                    <td style={{ padding: '1rem' }}>Ideal, peak fall colors</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>November</td>
                    <td style={{ padding: '1rem' }}>52°F</td>
                    <td style={{ padding: '1rem' }}>34°F</td>
                    <td style={{ padding: '1rem' }}>3.1 inches</td>
                    <td style={{ padding: '1rem' }}>Crisp, clear trail days</td>
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

          {/* 3-Day Off-Season Itinerary Overview */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#059669',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #22c55e',
              paddingBottom: '0.5rem'
            }}>
              3-Day Off-Season Itinerary Overview
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Ohio's only national park with this comprehensive 3-day off-season adventure:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              margin: '1.5rem 0'
            }}>
              <div style={{
                background: '#f0fdf4',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #22c55e'
              }}>
                <h3 style={{ color: '#047857', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🚴 Day 1: Towpath Trail Adventure</h3>
                <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                  <li>Canal Visitor Center orientation</li>
                  <li>Towpath Trail biking or walking</li>
                  <li>Historic Locks and canal history</li>
                  <li>Peninsula village exploration</li>
                </ul>
              </div>
              <div style={{
                background: '#f0fdf4',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #22c55e'
              }}>
                <h3 style={{ color: '#047857', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🚂 Day 2: Scenic Railroad & Falls</h3>
                <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                  <li>Cuyahoga Valley Scenic Railroad ride</li>
                  <li>Brandywine Falls 65-foot cascade</li>
                  <li>Stanford Trail easy hiking</li>
                  <li>Historic Boston Mills area</li>
                </ul>
              </div>
              <div style={{
                background: '#f0fdf4',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #22c55e'
              }}>
                <h3 style={{ color: '#047857', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🥾 Day 3: Ledges & Blue Hen Falls</h3>
                <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                  <li>The Ledges dramatic rock formations</li>
                  <li>Blue Hen Falls hidden waterfall</li>
                  <li>Buckeye Trail connections</li>
                  <li>Peaceful off-season forest walks</li>
                </ul>
              </div>
            </div>

            <div style={{
              background: '#fef3c7',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              border: '1px solid #f59e0b',
              margin: '1.5rem 0'
            }}>
              <h3 style={{ color: '#92400e', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>💡 Off-Season Advantages</h3>
              <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                <li><strong>Perfect Biking:</strong> Towpath Trail without summer heat and crowds</li>
                <li><strong>Railroad Views:</strong> Scenic railroad with fall foliage or spring wildflowers</li>
                <li><strong>Peaceful Waterfalls:</strong> Brandywine and Blue Hen Falls in solitude</li>
                <li><strong>Lower Costs:</strong> Significant savings on Akron and Peninsula accommodations</li>
                <li><strong>Better Weather:</strong> Comfortable temperatures for outdoor activities</li>
              </ul>
            </div>
          </section>

          {/* Itinerary Link Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#059669',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #22c55e',
              paddingBottom: '0.5rem'
            }}>
              2-3 Day Itinerary
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Ready to plan your perfect Cuyahoga Valley National Park off-season adventure? Our detailed itinerary covers the Towpath Trail, scenic railroad, and waterfalls.
            </p>
            
            <a 
              href="/cuyahoga-valley-itinerary"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #059669, #22c55e)',
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
              color: '#059669',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #22c55e',
              paddingBottom: '0.5rem'
            }}>
              Visitor Feedback & Reviews
            </h2>
            <FeedbackForm parkSlug="cuyahoga-valley" />
          </section>
        </main>
      </div>
    </div>
  );
};

export default CuyahogaValleyReactTemplate;