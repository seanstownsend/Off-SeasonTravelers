import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const ZionReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #dc2626, #ef4444)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Zion National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Experience red rock canyons during April, May, September, October - dramatic slot canyons, perfect weather, and stunning desert landscapes
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
              color: '#dc2626',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #ef4444',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Zion National Park like never before during April, May, September, October. Here's why off-season travel offers the ultimate red rock adventure:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              {/* Highlight 1 */}
              <div style={{
                background: 'linear-gradient(135deg, #fef2f2, #fee2e2)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #fca5a5'
              }}>
                <h3 style={{ color: '#dc2626', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🏜️ Perfect Hiking Weather
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Enjoy comfortable temperatures (60-75°F) ideal for slot canyon hikes without the extreme summer heat.
                </p>
              </div>

              {/* Highlight 2 */}
              <div style={{
                background: 'linear-gradient(135deg, #fef2f2, #fee2e2)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #fca5a5'
              }}>
                <h3 style={{ color: '#dc2626', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🌊 The Narrows Access
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Experience the famous slot canyon hike with optimal water levels and cooler temperatures for wading through the Virgin River.
                </p>
              </div>

              {/* Highlight 3 */}
              <div style={{
                background: 'linear-gradient(135deg, #fef2f2, #fee2e2)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #fca5a5'
              }}>
                <h3 style={{ color: '#dc2626', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🧗 Angels Landing Challenge
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Tackle the iconic chain section hike with fewer crowds and cooler conditions for this bucket-list adventure.
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
                [Zion Canyon with red rock walls and Virgin River photo]<br />
                <em>Caption: Zion Canyon's dramatic red rock formations during perfect off-season weather</em>
              </div>
            </div>
          </section>

          {/* Weather Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#dc2626',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #ef4444',
              paddingBottom: '0.5rem'
            }}>
              Weather Guide
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Plan your visit with confidence using our detailed weather data for Zion National Park during April, May, September, October:
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
                  <span style={{ color: '#451a03' }}> 60-75°F (16-24°C)</span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#92400e' }}>Conditions:</strong>
                  <span style={{ color: '#451a03' }}> Mild days, cool nights, wildflower blooms</span>
                </div>
                <div>
                  <strong style={{ color: '#92400e' }}>Best For:</strong>
                  <span style={{ color: '#451a03' }}> Canyon hiking, rock climbing, photography</span>
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
                  <span style={{ color: '#7f1d1d' }}> Clear skies, comfortable days, autumn colors</span>
                </div>
                <div>
                  <strong style={{ color: '#b91c1c' }}>Best For:</strong>
                  <span style={{ color: '#7f1d1d' }}> Slot canyons, backpacking, stargazing</span>
                </div>
              </div>
            </div>
          </section>

          {/* Essential Tips Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#dc2626',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #ef4444',
              paddingBottom: '0.5rem'
            }}>
              Essential Tips
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Make the most of your Zion National Park off-season adventure with these essential tips:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                {
                  title: "Shuttle System Navigation",
                  content: "Free shuttle operates year-round in Zion Canyon. Park at visitor center and ride to trailheads. Off-season offers shorter wait times."
                },
                {
                  title: "Water Hiking Preparation",
                  content: "For The Narrows, rent waterproof boots and dry pants. Water temperature stays around 50°F. Check flash flood conditions before entering."
                },
                {
                  title: "Angels Landing Permits",
                  content: "Timed entry permits required for Angels Landing chain section. Book in advance at recreation.gov. Arrive early for best conditions."
                },
                {
                  title: "Desert Safety Protocols",
                  content: "Carry plenty of water even in cooler months. Wear sun protection and sturdy footwear. Flash floods possible in slot canyons."
                }
              ].map((tip, index) => (
                <div key={index} style={{
                  background: '#f1f5f9',
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                  borderLeft: '4px solid #ef4444'
                }}>
                  <h3 style={{ color: '#dc2626', fontSize: '1.1rem', marginBottom: '0.75rem' }}>
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
              color: '#dc2626',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #ef4444',
              paddingBottom: '0.5rem'
            }}>
              Planning Checklist
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Essential preparation checklist for your Zion National Park off-season adventure:
            </p>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '1.5rem' 
            }}>
              {/* Permits & Reservations */}
              <div style={{
                background: '#ecfdf5',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #10b981'
              }}>
                <h3 style={{ color: '#047857', fontSize: '1.2rem', marginBottom: '1rem' }}>
                  📋 Permits & Reservations
                </h3>
                <ul style={{ color: '#065f46', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                  <li>Park entrance pass or America the Beautiful Annual Pass</li>
                  <li>Angels Landing timed entry permits (required)</li>
                  <li>Camping reservations at Watchman or South Campgrounds</li>
                  <li>Lodging reservations in Springdale (book early)</li>
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
                  <li>Waterproof hiking boots for river walks</li>
                  <li>Quick-dry clothing and layers</li>
                  <li>Camera with landscape lens for canyon views</li>
                  <li>Plenty of water and electrolyte supplements</li>
                </ul>
              </div>

              {/* Safety & Weather */}
              <div style={{
                background: '#fef2f2',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #ef4444'
              }}>
                <h3 style={{ color: '#b91c1c', fontSize: '1.2rem', marginBottom: '1rem' }}>
                  ⚠️ Safety & Weather
                </h3>
                <ul style={{ color: '#7f1d1d', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                  <li>Check flash flood warnings before slot canyon hikes</li>
                  <li>Stay on designated trails to protect fragile desert ecosystems</li>
                  <li>Carry first aid kit and emergency whistle</li>
                  <li>Download offline maps for backcountry areas</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section style={{
            background: 'linear-gradient(135deg, #fef2f2, #fee2e2)',
            padding: '2rem',
            borderRadius: '0.75rem',
            textAlign: 'center',
            border: '1px solid #fca5a5'
          }}>
            <h2 style={{ color: '#dc2626', fontSize: '1.8rem', marginBottom: '1rem' }}>
              Ready to Plan Your Zion Adventure?
            </h2>
            <p style={{ color: '#475569', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Ready to plan your ultimate Zion National Park off-season adventure? Our detailed itinerary covers everything from slot canyon hikes to red rock photography.
            </p>
            <a 
              href="/zion-itinerary"
              style={{
                background: 'linear-gradient(135deg, #dc2626, #ef4444)',
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
              View Complete Zion Itinerary →
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
            <FeedbackForm parkSlug="zion" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ZionReactTemplate;