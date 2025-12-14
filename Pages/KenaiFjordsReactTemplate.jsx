import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const KenaiFjordsReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #9b6a3c, #ac7b4a)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Kenai Fjords National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Experience dramatic glacial landscapes during April, May, September, October - glacier calving, marine wildlife, and pristine fjord exploration
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
              color: '#0ea5e9',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #06b6d4',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Kenai Fjords National Park like never before during April, May, September, October. Here's why off-season travel offers the ultimate Alaska glacial and marine adventure:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              {/* Highlight 1 */}
              <div style={{
                background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #7dd3fc'
              }}>
                <h3 style={{ color: '#0ea5e9', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🧊 Dramatic Glacier Calving
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Witness spectacular glacier calving at Exit and Aialik Glaciers during cooler months when ice activity is most dramatic and visible.
                </p>
              </div>

              {/* Highlight 2 */}
              <div style={{
                background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #7dd3fc'
              }}>
                <h3 style={{ color: '#0ea5e9', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🐋 Marine Wildlife Viewing
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Observe humpback whales, orcas, sea otters, and harbor seals during migration periods with fewer boats and more intimate wildlife encounters.
                </p>
              </div>

              {/* Highlight 3 */}
              <div style={{
                background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #7dd3fc'
              }}>
                <h3 style={{ color: '#0ea5e9', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🏔️ Harding Icefield Access
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Experience the vast Harding Icefield during optimal hiking conditions with spring snow stability and fall clarity for breathtaking views.
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
                [Kenai Fjords glacier calving with boat in foreground photo]<br />
                <em>Caption: Dramatic glacier calving at Exit Glacier during off-season boat tour</em>
              </div>
            </div>
          </section>

          {/* Weather Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#0ea5e9',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #06b6d4',
              paddingBottom: '0.5rem'
            }}>
              Weather Guide
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Plan your visit with confidence using our detailed weather data for Kenai Fjords National Park during April, May, September, October:
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
                  <span style={{ color: '#451a03' }}> 40-55°F (4-13°C)</span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#92400e' }}>Conditions:</strong>
                  <span style={{ color: '#451a03' }}> Cool marine climate, increasing daylight, calving activity</span>
                </div>
                <div>
                  <strong style={{ color: '#92400e' }}>Best For:</strong>
                  <span style={{ color: '#451a03' }}> Glacier viewing, wildlife emergence, boat tours</span>
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
                  <span style={{ color: '#7f1d1d' }}> 35-50°F (2-10°C)</span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#b91c1c' }}>Conditions:</strong>
                  <span style={{ color: '#7f1d1d' }}> Clear coastal days, active glaciers, marine wildlife migration</span>
                </div>
                <div>
                  <strong style={{ color: '#b91c1c' }}>Best For:</strong>
                  <span style={{ color: '#7f1d1d' }}> Photography, whale watching, icefield hiking</span>
                </div>
              </div>
            </div>
          </section>

          {/* Essential Tips Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#0ea5e9',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #06b6d4',
              paddingBottom: '0.5rem'
            }}>
              Essential Tips
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Make the most of your Kenai Fjords National Park off-season adventure with these essential tips:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                {
                  title: "Marine Weather Monitoring",
                  content: "Check marine forecasts before boat tours. Weather can change rapidly affecting glacier access. Book flexible tour operators who prioritize safety."
                },
                {
                  title: "Layered Marine Clothing",
                  content: "Dress in waterproof layers for boat tours. Temperatures on water are significantly cooler. Bring warm hat and gloves even in warmer months."
                },
                {
                  title: "Glacier Safety Awareness",
                  content: "Maintain safe distance from glacier faces during calving. Follow all boat captain instructions. Ice chunks can surface unexpectedly near glaciers."
                },
                {
                  title: "Photography Preparation",
                  content: "Protect camera equipment from salt spray and moisture. Bring extra batteries as cold reduces battery life. Use lens filters for glacier reflections."
                }
              ].map((tip, index) => (
                <div key={index} style={{
                  background: '#f1f5f9',
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                  borderLeft: '4px solid #06b6d4'
                }}>
                  <h3 style={{ color: '#0ea5e9', fontSize: '1.1rem', marginBottom: '0.75rem' }}>
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
              color: '#0ea5e9',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #06b6d4',
              paddingBottom: '0.5rem'
            }}>
              Planning Checklist
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Essential preparation checklist for your Kenai Fjords National Park off-season adventure:
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
                  <li>Glacier boat tour reservations (limited off-season schedules)</li>
                  <li>Park entrance pass or America the Beautiful Annual Pass</li>
                  <li>Seward lodging reservations well in advance</li>
                  <li>Rental car reservations for Seward access</li>
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
                  <li>Waterproof marine clothing and rain gear</li>
                  <li>Weather-sealed camera with telephoto lens</li>
                  <li>Warm layers and insulated gloves</li>
                  <li>Binoculars for wildlife and glacier viewing</li>
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
                  <li>Follow all boat safety instructions and wear provided life jackets</li>
                  <li>Be prepared for tour cancellations due to weather</li>
                  <li>Stay well back from glacier faces and floating ice</li>
                  <li>Inform others of hiking plans on Exit Glacier trails</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section style={{
            background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
            padding: '2rem',
            borderRadius: '0.75rem',
            textAlign: 'center',
            border: '1px solid #7dd3fc'
          }}>
            <h2 style={{ color: '#0ea5e9', fontSize: '1.8rem', marginBottom: '1rem' }}>
              Ready to Plan Your Kenai Fjords Adventure?
            </h2>
            <p style={{ color: '#475569', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Ready to plan your ultimate Kenai Fjords National Park off-season adventure? Our detailed itinerary covers everything from glacier boat tours to icefield hiking.
            </p>
            <a 
              href="/kenai-fjords-itinerary"
              style={{
                background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
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
              View Complete Kenai Fjords Itinerary →
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
            <FeedbackForm parkSlug="kenai-fjords" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default KenaiFjordsReactTemplate;