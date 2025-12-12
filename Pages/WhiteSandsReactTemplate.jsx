import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const WhiteSandsReactTemplate = () => {
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
          White Sands National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Experience New Mexico's gypsum wonderland during April, May, September, October - pristine white dunes, unique wildlife, and endless adventures
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
              Experience White Sands National Park like never before during April, May, September, October. Here's why off-season travel offers the ultimate gypsum dune adventure:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              {/* Highlight 1 */}
              <div style={{
                background: 'linear-gradient(135deg, #ecfeff, #cffafe)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #67e8f9'
              }}>
                <h3 style={{ color: '#0891b2', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🏜️ Perfect Dune Weather
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Escape extreme summer heat with comfortable temperatures ideal for dune hiking, sledding, and exploring the world's largest gypsum dune field.
                </p>
              </div>

              {/* Highlight 2 */}
              <div style={{
                background: 'linear-gradient(135deg, #ecfeff, #cffafe)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #67e8f9'
              }}>
                <h3 style={{ color: '#0891b2', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🌸 Wildflower Blooms
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Spring brings spectacular wildflower displays across the dunes, creating stunning contrasts against the brilliant white gypsum sand.
                </p>
              </div>

              {/* Highlight 3 */}
              <div style={{
                background: 'linear-gradient(135deg, #ecfeff, #cffafe)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #67e8f9'
              }}>
                <h3 style={{ color: '#0891b2', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🦎 Unique Desert Wildlife
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Discover specialized desert animals adapted to the white gypsum environment, including the bleached earless lizard found nowhere else.
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
                [White Sands National Park with pristine white gypsum dunes photo]<br />
                <em>Caption: Pristine white gypsum dunes stretching endlessly during off-season tranquility</em>
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
              Weather Guide
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Plan your visit with confidence using our detailed weather data for White Sands National Park during April, May, September, October:
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
                  <span style={{ color: '#451a03' }}> 65-80°F (18-27°C)</span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#92400e' }}>Conditions:</strong>
                  <span style={{ color: '#451a03' }}> Perfect for hiking, wildflower blooms, gentle breezes</span>
                </div>
                <div>
                  <strong style={{ color: '#92400e' }}>Best For:</strong>
                  <span style={{ color: '#451a03' }}> Dune hiking, sand sledding, wildflower photography</span>
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
                  <span style={{ color: '#7f1d1d' }}> 60-75°F (15-24°C)</span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#b91c1c' }}>Conditions:</strong>
                  <span style={{ color: '#7f1d1d' }}> Cool mornings, warm days, excellent visibility</span>
                </div>
                <div>
                  <strong style={{ color: '#b91c1c' }}>Best For:</strong>
                  <span style={{ color: '#7f1d1d' }}> Photography, sunset viewing, longer hikes</span>
                </div>
              </div>
            </div>
          </section>

          {/* Essential Tips Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#0891b2',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #06b6d4',
              paddingBottom: '0.5rem'
            }}>
              Essential Tips
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Make the most of your White Sands National Park off-season adventure with these essential tips:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                {
                  title: "Dunes Drive Exploration",
                  content: "Take the 8-mile scenic drive through the heart of the dune field. Stop at designated areas for hiking and sand sledding activities."
                },
                {
                  title: "Sand Sledding Adventures",
                  content: "Bring sand sleds or disc sleds for thrilling rides down the dunes. Wax your sled for best performance on gypsum sand."
                },
                {
                  title: "Sunset Photography",
                  content: "Golden hour creates magical lighting on white dunes. Stay for ranger programs and stargazing after dark (with proper permits)."
                },
                {
                  title: "Backcountry Camping",
                  content: "Experience overnight camping in the dunes with advance reservations. Primitive camping offers unparalleled night sky viewing."
                }
              ].map((tip, index) => (
                <div key={index} style={{
                  background: '#f1f5f9',
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                  borderLeft: '4px solid #06b6d4'
                }}>
                  <h3 style={{ color: '#0891b2', fontSize: '1.1rem', marginBottom: '0.75rem' }}>
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
              color: '#0891b2',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #06b6d4',
              paddingBottom: '0.5rem'
            }}>
              Planning Checklist
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Essential preparation checklist for your White Sands National Park off-season adventure:
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
                  <li>White Sands entrance pass ($25/vehicle, valid 7 days)</li>
                  <li>Backcountry camping permits (advance reservations required)</li>
                  <li>Check missile range schedule (may affect access)</li>
                  <li>Lodging in nearby Alamogordo or Las Cruces</li>
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
                  <li>Sand sleds or discs for dune sledding</li>
                  <li>Sunglasses and sunscreen (high UV reflection)</li>
                  <li>Closed-toe shoes to protect from hot sand</li>
                  <li>Camera with lens protection from sand</li>
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
                  <li>Extremely bright sand - protect eyes and skin</li>
                  <li>Easy to get disoriented in dunes - stay on trails</li>
                  <li>Watch for rattlesnakes and other desert wildlife</li>
                  <li>Carry extra water - dehydration occurs quickly</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section style={{
            background: 'linear-gradient(135deg, #ecfeff, #cffafe)',
            padding: '2rem',
            borderRadius: '0.75rem',
            textAlign: 'center',
            border: '1px solid #67e8f9'
          }}>
            <h2 style={{ color: '#0891b2', fontSize: '1.8rem', marginBottom: '1rem' }}>
              Ready to Plan Your White Sands Adventure?
            </h2>
            <p style={{ color: '#475569', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Ready to plan your ultimate White Sands National Park off-season adventure? Our detailed itinerary covers everything from dune hiking to sand sledding.
            </p>
            <a 
              href="/white-sands-itinerary"
              style={{
                background: 'linear-gradient(135deg, #0891b2, #06b6d4)',
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
              View Complete White Sands Itinerary →
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
            <FeedbackForm parkSlug="white-sands" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhiteSandsReactTemplate;