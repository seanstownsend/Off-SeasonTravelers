import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const GrandCanyonReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #c2410c, #ea580c)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Grand Canyon National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Experience the world's most famous canyon during April, May, September, October - stunning vistas, mild weather, and fewer crowds
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
              color: '#c2410c',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #ea580c',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Grand Canyon National Park like never before during April, May, September, October. Here's why off-season travel offers the ultimate Southwest adventure:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              {/* Highlight 1 */}
              <div style={{
                background: 'linear-gradient(135deg, #fff7ed, #ffedd5)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #fdba74'
              }}>
                <h3 style={{ color: '#c2410c', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🏜️ Perfect Weather Conditions
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Enjoy comfortable temperatures (50-70°F) with clear skies and excellent visibility for rim hiking and photography.
                </p>
              </div>

              {/* Highlight 2 */}
              <div style={{
                background: 'linear-gradient(135deg, #fff7ed, #ffedd5)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #fdba74'
              }}>
                <h3 style={{ color: '#c2410c', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  👥 Reduced Crowds
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Experience iconic viewpoints with 50% fewer visitors, allowing for peaceful contemplation and better photo opportunities.
                </p>
              </div>

              {/* Highlight 3 */}
              <div style={{
                background: 'linear-gradient(135deg, #fff7ed, #ffedd5)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #fdba74'
              }}>
                <h3 style={{ color: '#c2410c', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🌅 Spectacular Sunrise/Sunset
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Witness dramatic lighting changes across canyon walls with optimal photography conditions during golden hours.
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
                [Grand Canyon South Rim with desert landscape photo]<br />
                <em>Caption: South Rim vista during off-season tranquility with perfect weather</em>
              </div>
            </div>
          </section>

          {/* Weather Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#c2410c',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #ea580c',
              paddingBottom: '0.5rem'
            }}>
              Weather Guide
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Plan your visit with confidence using our detailed weather data for Grand Canyon National Park during April, May, September, October:
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
                  <span style={{ color: '#451a03' }}> 50-70°F (10-21°C)</span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#92400e' }}>Conditions:</strong>
                  <span style={{ color: '#451a03' }}> Mild days, cool nights, wildflower blooms</span>
                </div>
                <div>
                  <strong style={{ color: '#92400e' }}>Best For:</strong>
                  <span style={{ color: '#451a03' }}> Rim hiking, photography, camping</span>
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
                  <span style={{ color: '#7f1d1d' }}> 45-65°F (7-18°C)</span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#b91c1c' }}>Conditions:</strong>
                  <span style={{ color: '#7f1d1d' }}> Clear skies, crisp air, excellent visibility</span>
                </div>
                <div>
                  <strong style={{ color: '#b91c1c' }}>Best For:</strong>
                  <span style={{ color: '#7f1d1d' }}> Backpacking, stargazing, scenic drives</span>
                </div>
              </div>
            </div>
          </section>

          {/* Essential Tips Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#c2410c',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #ea580c',
              paddingBottom: '0.5rem'
            }}>
              Essential Tips
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Make the most of your Grand Canyon National Park off-season adventure with these essential tips:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                {
                  title: "Layered Clothing Strategy",
                  content: "Temperatures vary significantly between rim and canyon floor. Dress in layers with sun protection. Mornings and evenings can be quite cool."
                },
                {
                  title: "Early Morning Viewpoints",
                  content: "Visit popular viewpoints like Mather Point and Yavapai Observation Station early morning for best lighting and fewer crowds."
                },
                {
                  title: "Rim Trail Exploration",
                  content: "Walk sections of the 13-mile Rim Trail during comfortable off-season weather. Shuttle service operates year-round for easy access."
                },
                {
                  title: "Photography Golden Hours",
                  content: "Plan sunrise and sunset photography sessions. Off-season offers clearer skies and more dramatic lighting conditions."
                }
              ].map((tip, index) => (
                <div key={index} style={{
                  background: '#f1f5f9',
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                  borderLeft: '4px solid #ea580c'
                }}>
                  <h3 style={{ color: '#c2410c', fontSize: '1.1rem', marginBottom: '0.75rem' }}>
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
              color: '#c2410c',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #ea580c',
              paddingBottom: '0.5rem'
            }}>
              Planning Checklist
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Essential preparation checklist for your Grand Canyon National Park off-season adventure:
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
                  <li>Camping reservations at Mather or Desert View Campgrounds</li>
                  <li>Lodging reservations at South Rim (book early)</li>
                  <li>Backcountry permits for inner canyon hiking</li>
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
                  <li>Layered clothing for variable temperatures</li>
                  <li>Sturdy hiking boots with good traction</li>
                  <li>Camera equipment with extra batteries</li>
                  <li>Water bottles and snacks for day hiking</li>
                </ul>
              </div>

              {/* Safety & Planning */}
              <div style={{
                background: '#fef2f2',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #ef4444'
              }}>
                <h3 style={{ color: '#b91c1c', fontSize: '1.2rem', marginBottom: '1rem' }}>
                  ⚠️ Safety & Planning
                </h3>
                <ul style={{ color: '#7f1d1d', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                  <li>Check trail conditions and weather forecasts</li>
                  <li>Stay on designated trails and behind barriers</li>
                  <li>Bring sun protection and stay hydrated</li>
                  <li>Download offline maps for areas with poor cell service</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section style={{
            background: 'linear-gradient(135deg, #fff7ed, #ffedd5)',
            padding: '2rem',
            borderRadius: '0.75rem',
            textAlign: 'center',
            border: '1px solid #fdba74'
          }}>
            <h2 style={{ color: '#c2410c', fontSize: '1.8rem', marginBottom: '1rem' }}>
              Ready to Plan Your Grand Canyon Adventure?
            </h2>
            <p style={{ color: '#475569', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Ready to plan your ultimate Grand Canyon National Park off-season adventure? Our detailed itinerary covers everything from rim hiking to canyon photography.
            </p>
            <a 
              href="/grand-canyon-itinerary"
              style={{
                background: 'linear-gradient(135deg, #c2410c, #ea580c)',
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
              View Complete Grand Canyon Itinerary →
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
            <FeedbackForm parkSlug="grand-canyon" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default GrandCanyonReactTemplate;