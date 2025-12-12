import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const RockyMountainReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #7c2d12, #ea580c)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Rocky Mountain: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Experience Colorado's high country during April, May, September, October - alpine lakes, dramatic peaks, and golden aspen groves
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
              color: '#7c2d12',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #ea580c',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Rocky Mountain National Park like never before during April, May, September, October. Here's why off-season travel offers the ultimate high country adventure:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              {/* Highlight 1 */}
              <div style={{
                background: 'linear-gradient(135deg, #fff7ed, #fed7aa)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #fdba74'
              }}>
                <h3 style={{ color: '#7c2d12', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🍂 Golden Aspen Displays
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Witness spectacular fall aspen colors in late September through early October, creating golden corridors along mountain valleys.
                </p>
              </div>

              {/* Highlight 2 */}
              <div style={{
                background: 'linear-gradient(135deg, #fff7ed, #fed7aa)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #fdba74'
              }}>
                <h3 style={{ color: '#7c2d12', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🏔️ Alpine Lake Serenity
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Crystal-clear high-altitude lakes like Bear Lake and Dream Lake offer perfect reflections without summer crowds.
                </p>
              </div>

              {/* Highlight 3 */}
              <div style={{
                background: 'linear-gradient(135deg, #fff7ed, #fed7aa)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #fdba74'
              }}>
                <h3 style={{ color: '#7c2d12', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🦌 Wildlife Activity
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Elk bugling season in fall and active wildlife preparation for winter creates excellent viewing opportunities.
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
                [Rocky Mountain National Park with golden aspen and snow-capped peaks photo]<br />
                <em>Caption: Golden aspen groves beneath dramatic Rocky Mountain peaks during off-season</em>
              </div>
            </div>
          </section>

          {/* Weather Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#7c2d12',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #ea580c',
              paddingBottom: '0.5rem'
            }}>
              Weather Guide
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Plan your visit with confidence using our detailed weather data for Rocky Mountain National Park during April, May, September, October:
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
                  <span style={{ color: '#451a03' }}> 35-65°F (2-18°C)</span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#92400e' }}>Conditions:</strong>
                  <span style={{ color: '#451a03' }}> Variable weather, snow at high elevation, wildflower emergence</span>
                </div>
                <div>
                  <strong style={{ color: '#92400e' }}>Best For:</strong>
                  <span style={{ color: '#451a03' }}> Lower elevation trails, wildlife viewing, photography</span>
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
                  <span style={{ color: '#7f1d1d' }}> 30-60°F (-1-15°C)</span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#b91c1c' }}>Conditions:</strong>
                  <span style={{ color: '#7f1d1d' }}> Crisp mornings, peak aspen colors, early snow possible</span>
                </div>
                <div>
                  <strong style={{ color: '#b91c1c' }}>Best For:</strong>
                  <span style={{ color: '#7f1d1d' }}> Aspen viewing, elk bugling, fall photography</span>
                </div>
              </div>
            </div>
          </section>

          {/* Essential Tips Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#7c2d12',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #ea580c',
              paddingBottom: '0.5rem'
            }}>
              Essential Tips
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Make the most of your Rocky Mountain National Park off-season adventure with these essential tips:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                {
                  title: "Trail Ridge Road Planning",
                  content: "Trail Ridge Road typically closes by mid-October. Check current conditions and plan lower elevation alternatives when needed."
                },
                {
                  title: "Bear Lake Corridor Strategy",
                  content: "Popular Bear Lake area offers excellent off-season hiking. Early morning visits provide best wildlife viewing and photography opportunities."
                },
                {
                  title: "High Altitude Preparation",
                  content: "Elevation ranges from 7,500-12,000+ feet. Hydrate well, ascend gradually, and recognize altitude sickness symptoms."
                },
                {
                  title: "Elk Bugling Season",
                  content: "September brings elk rutting season. Listen for bugling calls early morning and evening, especially in Kawuneeche Valley."
                }
              ].map((tip, index) => (
                <div key={index} style={{
                  background: '#f1f5f9',
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                  borderLeft: '4px solid #ea580c'
                }}>
                  <h3 style={{ color: '#7c2d12', fontSize: '1.1rem', marginBottom: '0.75rem' }}>
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
              color: '#7c2d12',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #ea580c',
              paddingBottom: '0.5rem'
            }}>
              Planning Checklist
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Essential preparation checklist for your Rocky Mountain National Park off-season adventure:
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
                  <li>Timed entry permits (May-October) for Bear Lake area</li>
                  <li>America the Beautiful Annual Pass recommended</li>
                  <li>Campground reservations at Moraine Park or Glacier Basin</li>
                  <li>Lodging in Estes Park or Grand Lake communities</li>
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
                  <li>Sturdy hiking boots and microspikes for snow/ice</li>
                  <li>Layered clothing system for altitude changes</li>
                  <li>Sunglasses and sunscreen (intense UV at elevation)</li>
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
                  <li>Black bear and mountain lion habitat - store food properly</li>
                  <li>Weather changes rapidly at altitude - check forecasts</li>
                  <li>Stay minimum 25 yards from elk, especially during rutting</li>
                  <li>Inform others of hiking plans and expected return times</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section style={{
            background: 'linear-gradient(135deg, #fff7ed, #fed7aa)',
            padding: '2rem',
            borderRadius: '0.75rem',
            textAlign: 'center',
            border: '1px solid #fdba74'
          }}>
            <h2 style={{ color: '#7c2d12', fontSize: '1.8rem', marginBottom: '1rem' }}>
              Ready to Plan Your Rocky Mountain Adventure?
            </h2>
            <p style={{ color: '#475569', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Ready to plan your ultimate Rocky Mountain National Park off-season adventure? Our detailed itinerary covers everything from alpine lakes to aspen groves.
            </p>
            <a 
              href="/rocky-mountain-itinerary"
              style={{
                background: 'linear-gradient(135deg, #7c2d12, #ea580c)',
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
              View Complete Rocky Mountain Itinerary →
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
            <FeedbackForm parkSlug="rocky-mountain" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default RockyMountainReactTemplate;