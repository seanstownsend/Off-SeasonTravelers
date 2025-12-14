import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const HotSpringsReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #6b7280, #4b5563)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Hot Springs National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Discover America's oldest national park during October, November, February, March - fewer crowds, lower costs, perfect weather
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
              color: '#6b7280',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #9ca3af',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Hot Springs National Park like never before during October, November, February, March. Here's why off-season travel offers the ultimate urban park adventure:
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
                <h3 style={{ color: '#6b7280', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>♨️ Peaceful Hot Springs</h3>
                <p>Enjoy the therapeutic thermal waters without summer crowds. The historic bathhouses and springs are most comfortable during cooler months.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#6b7280', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>💰 Significant Savings</h3>
                <p>Save up to 50% on accommodations and spa services. Downtown Hot Springs lodging is much more affordable during shoulder seasons.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#6b7280', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>📸 Perfect Weather</h3>
                <p>Ideal temperatures for hiking the mountain trails and exploring the historic downtown area without oppressive summer heat.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#6b7280', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🏦 Historic Downtown</h3>
                <p>Explore America's oldest national park and historic downtown Hot Springs without the summer tourist rush.</p>
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
              [Hot Springs off-season landscape photo]<br />
              <em>Historic Bathhouse Row with fall colors</em>
            </div>
          </section>

          {/* Off-Season Trade-Offs Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#059669',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #22c55e',
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
                background: '#f0fdf4',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #22c55e'
              }}>
                <h3 style={{ color: '#15803d', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>✅ Advantages</h3>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li>Dramatic cost savings on lodging (50% off peak rates)</li>
                  <li>Comfortable weather for hiking and exploring</li>
                  <li>Hot springs are more enjoyable in cooler weather</li>
                  <li>Peaceful bathhouse and spa experiences</li>
                  <li>Better parking and restaurant availability</li>
                  <li>Local attractions less crowded</li>
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
                  <li>Some outdoor events may be cancelled</li>
                  <li>Shorter daylight hours in winter</li>
                  <li>Possible rain during shoulder seasons</li>
                  <li>Some hiking trails may be muddy</li>
                  <li>Limited seasonal restaurant hours</li>
                  <li>Cooler evenings require layers</li>
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
              Off-Season Weather
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Plan your visit with confidence using our detailed weather data for Hot Springs National Park during October, November, February, March:
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
                    <td style={{ padding: '1rem', fontWeight: '600' }}>February</td>
                    <td style={{ padding: '1rem' }}>58°F</td>
                    <td style={{ padding: '1rem' }}>36°F</td>
                    <td style={{ padding: '1rem' }}>3.2 inches</td>
                    <td style={{ padding: '1rem' }}>Mild, perfect for hot springs</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>March</td>
                    <td style={{ padding: '1rem' }}>67°F</td>
                    <td style={{ padding: '1rem' }}>44°F</td>
                    <td style={{ padding: '1rem' }}>4.1 inches</td>
                    <td style={{ padding: '1rem' }}>Pleasant, spring emerging</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>October</td>
                    <td style={{ padding: '1rem' }}>73°F</td>
                    <td style={{ padding: '1rem' }}>50°F</td>
                    <td style={{ padding: '1rem' }}>3.8 inches</td>
                    <td style={{ padding: '1rem' }}>Ideal, fall colors</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>November</td>
                    <td style={{ padding: '1rem' }}>62°F</td>
                    <td style={{ padding: '1rem' }}>39°F</td>
                    <td style={{ padding: '1rem' }}>3.9 inches</td>
                    <td style={{ padding: '1rem' }}>Cool, comfortable</td>
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
              Ready to plan your perfect Hot Springs National Park off-season adventure? Our detailed itinerary covers historic bathhouses, mountain trails, and downtown attractions.
            </p>
            
            <a 
              href="/hot-springs-itinerary"
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
            <FeedbackForm parkSlug="hot-springs" />
          </section>
        </main>
      </div>
    </div>
  );
};

export default HotSpringsReactTemplate;