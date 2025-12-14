import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const GlacierReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #475569, #64748b)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Glacier National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Discover Montana's crown jewel during April, May, September, October - alpine wildflowers, pristine lakes, and dramatic mountain vistas
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
              color: '#475569',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #64748b',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Glacier National Park like never before during April, May, September, October. Here's why off-season travel offers the ultimate alpine adventure:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              {/* Highlight 1 */}
              <div style={{
                background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #cbd5e1'
              }}>
                <h3 style={{ color: '#475569', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🏔️ Pristine Alpine Wilderness
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Experience the park with minimal crowds and pristine conditions. Going-to-the-Sun Road sections offer incredible mountain vistas without summer traffic.
                </p>
              </div>

              {/* Highlight 2 */}
              <div style={{
                background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #cbd5e1'
              }}>
                <h3 style={{ color: '#475569', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  💎 Crystal Clear Lakes
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Lake McDonald and surrounding waters offer perfect reflections of mountain peaks with excellent fishing and peaceful kayaking opportunities.
                </p>
              </div>

              {/* Highlight 3 */}
              <div style={{
                background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #86efac'
              }}>
                <h3 style={{ color: '#059669', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🌸 Wildflower Meadows
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Spring brings glacier lilies and mountain wildflowers, while fall offers spectacular larch displays at higher elevations.
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
                [Glacier National Park with dramatic mountain peaks and pristine lake photo]<br />
                <em>Caption: Dramatic mountain reflections in Lake McDonald during off-season tranquility</em>
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
              Weather Guide
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Plan your visit with confidence using our detailed weather data for Glacier National Park during April, May, September, October:
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
                  <span style={{ color: '#451a03' }}> 40-60°F (4-15°C)</span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#92400e' }}>Conditions:</strong>
                  <span style={{ color: '#451a03' }}> Variable weather, snow at elevation, wildflower emergence</span>
                </div>
                <div>
                  <strong style={{ color: '#92400e' }}>Best For:</strong>
                  <span style={{ color: '#451a03' }}> Lower elevation hikes, wildlife viewing, photography</span>
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
                  <span style={{ color: '#7f1d1d' }}> 35-55°F (2-13°C)</span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#b91c1c' }}>Conditions:</strong>
                  <span style={{ color: '#7f1d1d' }}> Crisp air, golden larch displays, early snow possible</span>
                </div>
                <div>
                  <strong style={{ color: '#b91c1c' }}>Best For:</strong>
                  <span style={{ color: '#7f1d1d' }}> Larch viewing, crisp mountain air, stunning photography</span>
                </div>
              </div>
            </div>
          </section>

          {/* Essential Tips Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#1e3a8a',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #3b82f6',
              paddingBottom: '0.5rem'
            }}>
              Essential Tips
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Make the most of your Glacier National Park off-season adventure with these essential tips:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                {
                  title: "Going-to-the-Sun Road Planning",
                  content: "Check road status - full route typically closed until June/July. Lower sections offer incredible views and are accessible with proper preparation."
                },
                {
                  title: "Wildlife Viewing Strategy",
                  content: "Mountain goats and bighorn sheep are active during off-season. Lake McDonald area offers excellent moose and deer viewing opportunities."
                },
                {
                  title: "Alpine Weather Preparedness",
                  content: "Weather changes rapidly in mountains. Pack layers, waterproof gear, and be prepared for snow at any elevation above 4,000 feet."
                },
                {
                  title: "Photography Excellence",
                  content: "Golden hour lighting on peaks is spectacular. Reflection shots in calm lakes during early morning provide magazine-quality images."
                }
              ].map((tip, index) => (
                <div key={index} style={{
                  background: '#f1f5f9',
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                  borderLeft: '4px solid #3b82f6'
                }}>
                  <h3 style={{ color: '#1e3a8a', fontSize: '1.1rem', marginBottom: '0.75rem' }}>
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
              color: '#1e3a8a',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #3b82f6',
              paddingBottom: '0.5rem'
            }}>
              Planning Checklist
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Essential preparation checklist for your Glacier National Park off-season adventure:
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
                  <li>America the Beautiful Annual Pass ($80) recommended</li>
                  <li>Lodging in West Glacier or nearby communities</li>
                  <li>Campground reservations at Apgar or St. Mary</li>
                  <li>Backcountry permits for overnight backpacking</li>
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
                  <li>Winter-rated hiking boots and microspikes</li>
                  <li>Layered clothing system for alpine conditions</li>
                  <li>Bear spray (required in grizzly country)</li>
                  <li>Emergency shelter and first aid supplies</li>
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
                  <li>Grizzly and black bear country - carry bear spray</li>
                  <li>Check weather and avalanche conditions</li>
                  <li>Inform others of hiking plans and expected return</li>
                  <li>Stay on designated trails and respect wildlife distances</li>
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
            <h2 style={{ color: '#1e3a8a', fontSize: '1.8rem', marginBottom: '1rem' }}>
              Ready to Plan Your Glacier Adventure?
            </h2>
            <p style={{ color: '#475569', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Ready to plan your ultimate Glacier National Park off-season adventure? Our detailed itinerary covers everything from alpine hikes to pristine lake exploration.
            </p>
            <a 
              href="/glacier-itinerary"
              style={{
                background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)',
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
              View Complete Glacier Itinerary →
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
            <FeedbackForm parkSlug="glacier" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default GlacierReactTemplate;