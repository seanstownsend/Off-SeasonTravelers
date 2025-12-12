import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const AcadiaReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #1e40af, #60a5fa)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Acadia National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Discover Maine's coastal jewel during April, May, September, October - rugged coastline, pristine forests, and dramatic ocean views
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
              borderBottom: '3px solid #60a5fa',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Acadia National Park like never before during April, May, September, October. Here's why off-season travel offers the ultimate coastal Maine adventure:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              {/* Highlight 1 */}
              <div style={{
                background: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #93c5fd'
              }}>
                <h3 style={{ color: '#1e40af', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🌊 Pristine Coastal Views
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Experience dramatic rocky coastlines and ocean vistas without summer crowds. Perfect for sunrise photography at Cadillac Mountain.
                </p>
              </div>

              {/* Highlight 2 */}
              <div style={{
                background: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #93c5fd'
              }}>
                <h3 style={{ color: '#1e40af', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🍂 Fall Foliage Splendor
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Witness spectacular autumn colors across forested mountains and along coastal paths, with peak colors in early October.
                </p>
              </div>

              {/* Highlight 3 */}
              <div style={{
                background: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #93c5fd'
              }}>
                <h3 style={{ color: '#1e40af', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🦞 Local Maine Culture
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Enjoy authentic Maine experiences in nearby Bar Harbor with fewer tourists and better access to local seafood and culture.
                </p>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <div style={{
                background: '#f8fafc',
                borderRadius: '0.5rem',
                padding: '1rem',
                border: '1px solid #e2e8f0',
                fontSize: '0.9rem',
                color: '#64748b'
              }}>
                [Acadia National Park with rocky coastline and fall foliage photo]<br />
                <em>Caption: Rugged Maine coastline meets autumn colors during off-season tranquility</em>
              </div>
            </div>
          </section>

          {/* Weather Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#1e40af',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #60a5fa',
              paddingBottom: '0.5rem'
            }}>
              Weather Guide
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Plan your visit with confidence using our detailed weather data for Acadia National Park during April, May, September, October:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}>
              {/* Spring Weather */}
              <div style={{
                background: '#fef3c7',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #f59e0b'
              }}>
                <h3 style={{ color: '#92400e', fontSize: '1.3rem', marginBottom: '1rem' }}>
                  🌸 Spring (April - May)
                </h3>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#92400e' }}>Temperature:</strong>
                  <span style={{ color: '#451a03' }}> 45-65°F (7-18°C)</span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#92400e' }}>Conditions:</strong>
                  <span style={{ color: '#451a03' }}> Cool and crisp, occasional rain, wildflower blooms</span>
                </div>
                <div>
                  <strong style={{ color: '#92400e' }}>Best For:</strong>
                  <span style={{ color: '#451a03' }}> Coastal hikes, tide pooling, wildflower photography</span>
                </div>
              </div>

              {/* Fall Weather */}
              <div style={{
                background: '#fef2f2',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #ef4444'
              }}>
                <h3 style={{ color: '#b91c1c', fontSize: '1.3rem', marginBottom: '1rem' }}>
                  🍂 Fall (September - October)
                </h3>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#b91c1c' }}>Temperature:</strong>
                  <span style={{ color: '#7f1d1d' }}> 40-60°F (4-15°C)</span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#b91c1c' }}>Conditions:</strong>
                  <span style={{ color: '#7f1d1d' }}> Crisp air, peak foliage, occasional nor'easters</span>
                </div>
                <div>
                  <strong style={{ color: '#b91c1c' }}>Best For:</strong>
                  <span style={{ color: '#7f1d1d' }}> Fall foliage, storm watching, photography</span>
                </div>
              </div>
            </div>
          </section>

          {/* Essential Tips Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#1e40af',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #60a5fa',
              paddingBottom: '0.5rem'
            }}>
              Essential Tips
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Make the most of your Acadia National Park off-season adventure with these essential tips:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                {
                  title: "Cadillac Mountain Sunrise",
                  content: "First place to see sunrise in US (October-March). Arrive early for best parking and dramatic coastal sunrise photography opportunities."
                },
                {
                  title: "Ocean Path Strategy",
                  content: "Popular coastal trail offers stunning views year-round. Early morning visits provide best lighting and fewer crowds for photography."
                },
                {
                  title: "Tide Pool Exploration",
                  content: "Spring low tides reveal excellent tide pool opportunities. Check tide charts and plan visits during optimal low tide periods."
                },
                {
                  title: "Bar Harbor Access",
                  content: "Many restaurants and shops close seasonally. Research open establishments and make reservations for peak foliage weekends."
                }
              ].map((tip, index) => (
                <div key={index} style={{
                  background: '#f1f5f9',
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                  borderLeft: '4px solid #60a5fa'
                }}>
                  <h3 style={{ color: '#1e40af', fontSize: '1.1rem', marginBottom: '0.75rem' }}>
                    {tip.title}
                  </h3>
                  <p style={{ color: '#475569', lineHeight: '1.6', margin: 0 }}>
                    {tip.content}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Planning Checklist Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#1e40af',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #60a5fa',
              paddingBottom: '0.5rem'
            }}>
              Planning Checklist
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Essential preparation checklist for your Acadia National Park off-season adventure:
            </p>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '1.5rem' 
            }}>
              {/* Passes & Reservations */}
              <div style={{
                background: '#ecfdf5',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #10b981'
              }}>
                <h3 style={{ color: '#047857', fontSize: '1.2rem', marginBottom: '1rem' }}>
                  📋 Passes & Reservations
                </h3>
                <ul style={{ color: '#065f46', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                  <li>Acadia National Park entrance pass ($30/vehicle)</li>
                  <li>Campground reservations at Blackwoods or Seawall</li>
                  <li>Lodging reservations in Bar Harbor or nearby areas</li>
                  <li>Cadillac Summit Road check for seasonal closures</li>
                </ul>
              </div>

              {/* Gear & Equipment */}
              <div style={{
                background: '#fef7ff',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #a855f7'
              }}>
                <h3 style={{ color: '#7c2d12', fontSize: '1.2rem', marginBottom: '1rem' }}>
                  🎒 Gear & Equipment
                </h3>
                <ul style={{ color: '#451a03', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                  <li>Waterproof hiking boots and rain gear</li>
                  <li>Warm layers for coastal winds and elevation</li>
                  <li>Camera with wide-angle lens for coastal vistas</li>
                  <li>Tide chart app for optimal tide pool timing</li>
                </ul>
              </div>

              {/* Safety & Wildlife */}
              <div style={{
                background: '#fef2f2',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #ef4444'
              }}>
                <h3 style={{ color: '#b91c1c', fontSize: '1.2rem', marginBottom: '1rem' }}>
                  ⚠️ Safety & Wildlife
                </h3>
                <ul style={{ color: '#7f1d1d', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                  <li>Coastal weather changes rapidly - check marine forecasts</li>
                  <li>Rocky coastline can be slippery when wet</li>
                  <li>Be aware of tide schedules near water</li>
                  <li>Stay on designated trails to protect fragile ecosystems</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section style={{
            background: 'linear-gradient(135deg, #eff6ff, #dbeafe)',
            padding: '2rem',
            borderRadius: '0.75rem',
            textAlign: 'center',
            border: '1px solid #93c5fd'
          }}>
            <h2 style={{ color: '#1e40af', fontSize: '1.8rem', marginBottom: '1rem' }}>
              Ready to Plan Your Acadia Adventure?
            </h2>
            <p style={{ color: '#475569', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Ready to plan your ultimate Acadia National Park off-season adventure? Our detailed itinerary covers everything from coastal hikes to fall foliage viewing.
            </p>
            <a 
              href="/acadia-itinerary"
              style={{
                background: 'linear-gradient(135deg, #1e40af, #60a5fa)',
                color: 'white',
                padding: '0.75rem 2rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                fontWeight: '600',
                display: 'inline-block',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 15px -3px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              }}
            >
              View Complete Acadia Itinerary →
            </a>
          </section>
        </main>

        {/* Feedback Section */}
        <section style={{ marginTop: '3rem' }}>
          <div style={{
            background: '#ffffff',
            borderRadius: '0.75rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            padding: '2rem'
          }}>
            <FeedbackForm parkSlug="acadia" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AcadiaReactTemplate;