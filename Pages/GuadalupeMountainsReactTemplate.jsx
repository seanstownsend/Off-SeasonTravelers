import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const GuadalupeMountainsReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #c0703f, #d1814d)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Guadalupe Mountains: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Discover Texas's highest peak during April, May, September, October - desert mountains, fossil reefs, and rugged wilderness
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
              color: '#8b5cf6',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #a78bfa',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Guadalupe Mountains National Park like never before during April, May, September, October. Here's why off-season travel offers the ultimate Texas mountain adventure:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              {/* Highlight 1 */}
              <div style={{
                background: 'linear-gradient(135deg, #f3e8ff, #e9d5ff)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #c4b5fd'
              }}>
                <h3 style={{ color: '#8b5cf6', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🏔️ Guadalupe Peak Challenge
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Conquer Texas's highest point at 8,751 feet with perfect hiking weather and incredible views across the Chihuahuan Desert.
                </p>
              </div>

              {/* Highlight 2 */}
              <div style={{
                background: 'linear-gradient(135deg, #f3e8ff, #e9d5ff)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #c4b5fd'
              }}>
                <h3 style={{ color: '#8b5cf6', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🍂 McKittrick Canyon Colors
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Experience the most beautiful spot in Texas with spectacular fall foliage from bigtooth maples and chinkapin oaks.
                </p>
              </div>

              {/* Highlight 3 */}
              <div style={{
                background: 'linear-gradient(135deg, #f3e8ff, #e9d5ff)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #c4b5fd'
              }}>
                <h3 style={{ color: '#8b5cf6', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🪨 Ancient Fossil Reef
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Explore one of the finest examples of an ancient fossil reef from the Permian Period, 250 million years old.
                </p>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <div style={{
                borderRadius: '0.5rem',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}>
                <img 
                  src="/cactus GMNP.JPG" 
                  alt="Guadalupe Mountains with desert peaks and fall foliage" 
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
                <div style={{
                  padding: '0.75rem',
                  background: '#f8fafc',
                  borderTop: '1px solid #e2e8f0',
                  fontSize: '0.9rem',
                  color: '#64748b',
                  fontStyle: 'italic'
                }}>
                  Rugged desert peaks and autumn colors in McKittrick Canyon during off-season tranquility
                </div>
              </div>
            </div>
          </section>

          {/* Weather Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#8b5cf6',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #a78bfa',
              paddingBottom: '0.5rem'
            }}>
              Weather Guide
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Plan your visit with confidence using our detailed weather data for Guadalupe Mountains National Park during April, May, September, October:
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
                  <span style={{ color: '#451a03' }}> 60-75°F (15-24°C)</span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#92400e' }}>Conditions:</strong>
                  <span style={{ color: '#451a03' }}> Perfect hiking weather, wildflower blooms, clear skies</span>
                </div>
                <div>
                  <strong style={{ color: '#92400e' }}>Best For:</strong>
                  <span style={{ color: '#451a03' }}> Peak climbing, desert hikes, wildlife viewing</span>
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
                  <span style={{ color: '#7f1d1d' }}> 55-70°F (13-21°C)</span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#b91c1c' }}>Conditions:</strong>
                  <span style={{ color: '#7f1d1d' }}> Cool mornings, peak fall colors, excellent visibility</span>
                </div>
                <div>
                  <strong style={{ color: '#b91c1c' }}>Best For:</strong>
                  <span style={{ color: '#7f1d1d' }}> McKittrick Canyon, fall foliage, photography</span>
                </div>
              </div>
            </div>
          </section>

          {/* Essential Tips Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#8b5cf6',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #a78bfa',
              paddingBottom: '0.5rem'
            }}>
              Essential Tips
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Make the most of your Guadalupe Mountains National Park off-season adventure with these essential tips:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                {
                  title: "Guadalupe Peak Trail Strategy",
                  content: "Start early morning for the 8.5-mile round trip to Texas's highest point. Bring plenty of water and expect 3,000 feet of elevation gain."
                },
                {
                  title: "McKittrick Canyon Timing",
                  content: "Visit late October for peak fall colors. The 4.8-mile trail to Pratt Cabin showcases the most beautiful foliage in Texas."
                },
                {
                  title: "Devil's Hall Trail",
                  content: "This easier 4.2-mile hike leads through a natural staircase and narrow canyon perfect for families and photography."
                },
                {
                  title: "Wind and Weather Preparedness",
                  content: "High winds are common - bring windproof clothing. Weather can change rapidly at elevation, so layer appropriately."
                }
              ].map((tip, index) => (
                <div key={index} style={{
                  background: '#f1f5f9',
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                  borderLeft: '4px solid #a78bfa'
                }}>
                  <h3 style={{ color: '#8b5cf6', fontSize: '1.1rem', marginBottom: '0.75rem' }}>
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
              color: '#8b5cf6',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #a78bfa',
              paddingBottom: '0.5rem'
            }}>
              Planning Checklist
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Essential preparation checklist for your Guadalupe Mountains National Park off-season adventure:
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
                  <li>Guadalupe Mountains entrance pass ($15/vehicle)</li>
                  <li>Backcountry camping permits for overnight trips</li>
                  <li>No developed campgrounds - plan lodging in nearby towns</li>
                  <li>Pine Springs or Dog Canyon access points</li>
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
                  <li>Sturdy hiking boots and trekking poles</li>
                  <li>Windproof jacket and layered clothing</li>
                  <li>Plenty of water (1+ gallon per person per day)</li>
                  <li>Sun protection and emergency supplies</li>
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
                  <li>High elevation and sudden weather changes</li>
                  <li>Watch for rattlesnakes and mountain lions</li>
                  <li>No water sources on trails - carry plenty</li>
                  <li>Inform others of hiking plans and return times</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section style={{
            background: 'linear-gradient(135deg, #f3e8ff, #e9d5ff)',
            padding: '2rem',
            borderRadius: '0.75rem',
            textAlign: 'center',
            border: '1px solid #c4b5fd'
          }}>
            <h2 style={{ color: '#8b5cf6', fontSize: '1.8rem', marginBottom: '1rem' }}>
              Ready to Plan Your Guadalupe Mountains Adventure?
            </h2>
            <p style={{ color: '#475569', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Ready to plan your ultimate Guadalupe Mountains National Park off-season adventure? Our detailed itinerary covers everything from peak climbing to canyon exploration.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a 
                href="/guadalupe-mountains-itinerary"
                style={{
                  background: 'linear-gradient(135deg, #8b5cf6, #a78bfa)',
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
                View Complete Guadalupe Mountains Itinerary →
              </a>
              
              <a 
                href="https://www.nps.gov/gumo/index.htm"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(135deg, #8b5cf6, #a78bfa)',
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
                Official NPS Page ↗
              </a>
            </div>
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
            <FeedbackForm parkSlug="guadalupe-mountains" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default GuadalupeMountainsReactTemplate;
