import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const DenaliReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #475569, #334155)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Denali National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Experience North America's tallest peak during April, May, September, October - northern lights, wildlife, and unmatched wilderness solitude
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
              Experience Denali National Park like never before during April, May, September, October. Here's why off-season travel offers the ultimate Alaska wilderness adventure:
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
                  🏔️ North America's Highest Peak
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Mount McKinley (Denali) at 20,310 feet offers incredible views during clear fall and spring days, with better visibility than summer months.
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
                  🌌 Northern Lights Viewing
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  September and October offer prime aurora borealis viewing opportunities with long dark nights and clear skies away from summer crowds.
                </p>
              </div>

              {/* Highlight 3 */}
              <div style={{
                background: 'linear-gradient(135deg, #f8fafc, #f1f5f9)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #cbd5e1'
              }}>
                <h3 style={{ color: '#475569', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🐻 Wildlife Migration
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Witness caribou migration, bears preparing for winter, and active wolf packs during shoulder seasons when wildlife is most concentrated.
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
                [Denali autumn tundra landscape with mountain views photo]<br />
                <em>Caption: Denali's vast wilderness during peak fall colors in late September</em>
              </div>
            </div>
          </section>

          {/* Weather Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#1e40af',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #3b82f6',
              paddingBottom: '0.5rem'
            }}>
              Weather Guide
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Plan your visit with confidence using our detailed weather data for Denali National Park during April, May, September, October:
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
                  <span style={{ color: '#451a03' }}> 35-55°F (2-13°C)</span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#92400e' }}>Conditions:</strong>
                  <span style={{ color: '#451a03' }}> Variable with snow possible, rapidly increasing daylight</span>
                </div>
                <div>
                  <strong style={{ color: '#92400e' }}>Best For:</strong>
                  <span style={{ color: '#451a03' }}> Aurora viewing, wildlife emergence, avalanche-safe hiking</span>
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
                  <span style={{ color: '#7f1d1d' }}> 25-45°F (-4-7°C)</span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#b91c1c' }}>Conditions:</strong>
                  <span style={{ color: '#7f1d1d' }}> Crisp and clear, early snowfall, aurora potential</span>
                </div>
                <div>
                  <strong style={{ color: '#b91c1c' }}>Best For:</strong>
                  <span style={{ color: '#7f1d1d' }}> Tundra colors, northern lights, wildlife photography</span>
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
              borderBottom: '3px solid #3b82f6',
              paddingBottom: '0.5rem'
            }}>
              Essential Tips
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Make the most of your Denali National Park off-season adventure with these essential tips:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                {
                  title: "Aurora Photography Setup",
                  content: "September-October offers excellent northern lights viewing. Bring a sturdy tripod, spare batteries, and download aurora apps for predictions."
                },
                {
                  title: "Wildlife Safety Protocol",
                  content: "Carry bear spray always. Wildlife is active during shoulder seasons. Maintain 25-yard distance from all animals, 100 yards from bears and wolves."
                },
                {
                  title: "Weather Preparedness",
                  content: "Weather changes rapidly in Denali. Layer clothing, carry emergency gear, and check conditions before venturing into backcountry areas."
                },
                {
                  title: "Transportation Planning",
                  content: "Limited shuttle service during shoulder seasons. Park road access beyond mile 30 typically closes after September. Plan accordingly."
                }
              ].map((tip, index) => (
                <div key={index} style={{
                  background: '#f1f5f9',
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                  borderLeft: '4px solid #3b82f6'
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
              borderBottom: '3px solid #3b82f6',
              paddingBottom: '0.5rem'
            }}>
              Planning Checklist
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Essential preparation checklist for your Denali National Park off-season adventure:
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
                  <li>Advance lodging reservations (extremely limited in shoulder seasons)</li>
                  <li>Backcountry permits if camping overnight</li>
                  <li>Aurora viewing tour reservations</li>
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
                  <li>Arctic-rated clothing and insulation layers</li>
                  <li>Bear spray and bear-proof food storage</li>
                  <li>Aurora photography equipment and tripod</li>
                  <li>Emergency communication device</li>
                </ul>
              </div>

              {/* Safety Considerations */}
              <div style={{
                background: '#fef2f2',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #ef4444'
              }}>
                <h3 style={{ color: '#b91c1c', fontSize: '1.2rem', marginBottom: '1rem' }}>
                  ⚠️ Safety Considerations
                </h3>
                <ul style={{ color: '#7f1d1d', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                  <li>Monitor weather constantly - conditions change rapidly</li>
                  <li>Inform rangers of backcountry plans</li>
                  <li>Carry emergency shelter and high-energy food</li>
                  <li>Know hypothermia signs and treatment</li>
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
              Ready to Plan Your Denali Adventure?
            </h2>
            <p style={{ color: '#475569', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Ready to plan your ultimate Denali National Park off-season adventure? Our detailed itinerary covers everything from aurora viewing to wildlife photography.
            </p>
            <a 
              href="/denali-itinerary"
              style={{
                background: 'linear-gradient(135deg, #475569, #64748b)',
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
              View Complete Denali Itinerary →
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
            <FeedbackForm parkSlug="denali" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default DenaliReactTemplate;
