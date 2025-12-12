import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const CarlsbadCavernsReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #374151, #6b7280)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Carlsbad Caverns: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Explore New Mexico's underground wonder during April, May, September, October - limestone formations, bat flights, and cave adventures
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
              color: '#374151',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #6b7280',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Carlsbad Caverns National Park like never before during April, May, September, October. Here's why off-season travel offers the ultimate underground adventure:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              {/* Highlight 1 */}
              <div style={{
                background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #9ca3af'
              }}>
                <h3 style={{ color: '#374151', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🦇 Spectacular Bat Flights
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Witness 400,000+ Brazilian free-tailed bats emerge from the cave entrance during spring and fall migrations - nature's greatest spectacle.
                </p>
              </div>

              {/* Highlight 2 */}
              <div style={{
                background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #9ca3af'
              }}>
                <h3 style={{ color: '#374151', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  💎 Perfect Cave Conditions
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Constant 56°F underground temperature provides comfortable exploration year-round, with smaller crowds for intimate cave experiences.
                </p>
              </div>

              {/* Highlight 3 */}
              <div style={{
                background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #9ca3af'
              }}>
                <h3 style={{ color: '#374151', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🏜️ Desert Surface Exploration
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Explore Chihuahuan Desert trails above ground with perfect spring and fall weather for hiking and wildlife viewing.
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
                [Carlsbad Caverns with limestone formations and cave entrance photo]<br />
                <em>Caption: Magnificent limestone formations in the Big Room during off-season cave exploration</em>
              </div>
            </div>
          </section>

          {/* Weather Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#374151',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #6b7280',
              paddingBottom: '0.5rem'
            }}>
              Weather Guide
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Plan your visit with confidence using our detailed weather data for Carlsbad Caverns National Park during April, May, September, October:
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
                  <strong style={{ color: '#92400e' }}>Surface Temperature:</strong>
                  <span style={{ color: '#451a03' }}> 65-80°F (18-27°C)</span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#92400e' }}>Cave Temperature:</strong>
                  <span style={{ color: '#451a03' }}> 56°F (13°C) constant</span>
                </div>
                <div>
                  <strong style={{ color: '#92400e' }}>Best For:</strong>
                  <span style={{ color: '#451a03' }}> Bat flights, comfortable surface hiking, wildflowers</span>
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
                  <strong style={{ color: '#b91c1c' }}>Surface Temperature:</strong>
                  <span style={{ color: '#7f1d1d' }}> 60-75°F (15-24°C)</span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#b91c1c' }}>Cave Temperature:</strong>
                  <span style={{ color: '#7f1d1d' }}> 56°F (13°C) constant</span>
                </div>
                <div>
                  <strong style={{ color: '#b91c1c' }}>Best For:</strong>
                  <span style={{ color: '#7f1d1d' }}> Peak bat activity, clear skies, desert exploration</span>
                </div>
              </div>
            </div>
          </section>

          {/* Essential Tips Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#374151',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #6b7280',
              paddingBottom: '0.5rem'
            }}>
              Essential Tips
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Make the most of your Carlsbad Caverns National Park off-season adventure with these essential tips:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                {
                  title: "Bat Flight Program Timing",
                  content: "Arrive 30-45 minutes before sunset for best seating at the amphitheater. Peak bat flights occur April-October with largest numbers in late summer."
                },
                {
                  title: "Big Room Self-Guided Tour",
                  content: "The 1.25-mile Big Room trail showcases the cave's largest chamber. Bring a jacket - cave temperature stays at 56°F year-round."
                },
                {
                  title: "Natural Entrance Route",
                  content: "Walk the same path early explorers used to descend 750 feet into the cave. More challenging but incredibly rewarding experience."
                },
                {
                  title: "Photography Guidelines",
                  content: "No flash photography allowed in caves to protect formations and wildlife. Bring a tripod for low-light cave photography."
                }
              ].map((tip, index) => (
                <div key={index} style={{
                  background: '#f1f5f9',
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                  borderLeft: '4px solid #6b7280'
                }}>
                  <h3 style={{ color: '#374151', fontSize: '1.1rem', marginBottom: '0.75rem' }}>
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
              color: '#374151',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #6b7280',
              paddingBottom: '0.5rem'
            }}>
              Planning Checklist
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Essential preparation checklist for your Carlsbad Caverns National Park off-season adventure:
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
                  <li>General admission ($15/adult) for self-guided tours</li>
                  <li>Reserved cave tour tickets (Lower Cave, King's Palace)</li>
                  <li>Bat Flight Program (free, first-come-first-served)</li>
                  <li>Lodging reservations in Carlsbad or White's City</li>
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
                  <li>Comfortable walking shoes with good traction</li>
                  <li>Layered clothing (cave is cool, surface varies)</li>
                  <li>Camera with low-light capabilities (no flash)</li>
                  <li>Water bottle for surface trails and bat program</li>
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
                  <li>Cave paths can be slippery when wet - use handrails</li>
                  <li>Stay on designated trails to protect formations</li>
                  <li>No food, drinks, or touching formations in caves</li>
                  <li>Watch for rattlesnakes on surface desert trails</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section style={{
            background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
            padding: '2rem',
            borderRadius: '0.75rem',
            textAlign: 'center',
            border: '1px solid #9ca3af'
          }}>
            <h2 style={{ color: '#374151', fontSize: '1.8rem', marginBottom: '1rem' }}>
              Ready to Plan Your Carlsbad Caverns Adventure?
            </h2>
            <p style={{ color: '#475569', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Ready to plan your ultimate Carlsbad Caverns National Park off-season adventure? Our detailed itinerary covers everything from cave tours to bat flights.
            </p>
            <a 
              href="/carlsbad-caverns-itinerary"
              style={{
                background: 'linear-gradient(135deg, #374151, #6b7280)',
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
              View Complete Carlsbad Caverns Itinerary →
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
            <FeedbackForm parkSlug="carlsbad-caverns" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default CarlsbadCavernsReactTemplate;
