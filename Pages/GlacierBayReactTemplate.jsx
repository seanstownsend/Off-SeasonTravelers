import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const GlacierBayReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #4f6873, #5d7681)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Glacier Bay National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Experience pristine wilderness during April, May, September, October - glacier calving, humpback whales, and untouched Alaskan wilderness
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
              Experience Glacier Bay National Park like never before during April, May, September, October. Here's why off-season travel offers the ultimate Alaska wilderness adventure:
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
                  🏔️ Massive Glacier Calving
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Witness spectacular calving at Margerie and Grand Pacific Glaciers with dramatic ice movements during transition seasons.
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
                  🐋 Humpback Whale Migration
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Experience prime whale watching during migration periods with fewer vessels and more intimate wildlife encounters in the bay.
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
                  🌿 Pristine Wilderness Access
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Explore untouched wilderness areas with minimal crowds and crystal-clear views of the Fairweather Range mountains.
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
                [Glacier Bay calving glacier with wilderness backdrop photo]<br />
                <em>Caption: Margerie Glacier calving in pristine Glacier Bay wilderness during off-season</em>
              </div>
            </div>
          </section>

          {/* Weather Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#065f46',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #10b981',
              paddingBottom: '0.5rem'
            }}>
              Weather Guide
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Plan your visit with confidence using our detailed weather data for Glacier Bay National Park during April, May, September, October:
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
                  <span style={{ color: '#451a03' }}> 35-50°F (2-10°C)</span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#92400e' }}>Conditions:</strong>
                  <span style={{ color: '#451a03' }}> Cool and crisp, increasing daylight, active glaciers</span>
                </div>
                <div>
                  <strong style={{ color: '#92400e' }}>Best For:</strong>
                  <span style={{ color: '#451a03' }}> Glacier viewing, solitude, early wildlife activity</span>
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
                  <span style={{ color: '#7f1d1d' }}> 30-45°F (-1-7°C)</span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#b91c1c' }}>Conditions:</strong>
                  <span style={{ color: '#7f1d1d' }}> Clear mountain views, whale migration, dramatic glacier activity</span>
                </div>
                <div>
                  <strong style={{ color: '#b91c1c' }}>Best For:</strong>
                  <span style={{ color: '#7f1d1d' }}> Photography, whale watching, wilderness exploration</span>
                </div>
              </div>
            </div>
          </section>

          {/* Essential Tips Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#065f46',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #10b981',
              paddingBottom: '0.5rem'
            }}>
              Essential Tips
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Make the most of your Glacier Bay National Park off-season adventure with these essential tips:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                {
                  title: "Wilderness Permit Planning",
                  content: "Secure wilderness permits well in advance as access is strictly limited. Consider flexible dates for weather contingencies. Boat transportation requires advance booking."
                },
                {
                  title: "Cold Weather Marine Gear",
                  content: "Dress for arctic marine conditions with insulated waterproof layers. Temperatures on water drop significantly. Bring hand warmers and thermal gear."
                },
                {
                  title: "Wildlife Safety Protocol",
                  content: "Follow brown bear safety guidelines in wilderness areas. Store food properly and make noise while hiking. Carry bear spray and know proper protocols."
                },
                {
                  title: "Photography in Remote Conditions",
                  content: "Prepare for extreme weather photography. Protect equipment from salt spray and moisture. Battery life decreases in cold - bring extras and keep warm."
                }
              ].map((tip, index) => (
                <div key={index} style={{
                  background: '#f1f5f9',
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                  borderLeft: '4px solid #10b981'
                }}>
                  <h3 style={{ color: '#065f46', fontSize: '1.1rem', marginBottom: '0.75rem' }}>
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
              color: '#065f46',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #10b981',
              paddingBottom: '0.5rem'
            }}>
              Planning Checklist
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Essential preparation checklist for your Glacier Bay National Park off-season adventure:
            </p>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '1.5rem' 
            }}>
              {/* Permits & Access */}
              <div style={{
                background: '#ecfdf5',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #10b981'
              }}>
                <h3 style={{ color: '#047857', fontSize: '1.2rem', marginBottom: '1rem' }}>
                  📋 Permits & Access
                </h3>
                <ul style={{ color: '#065f46', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                  <li>Wilderness camping permits (required for backcountry)</li>
                  <li>Charter boat reservations from Gustavus or Juneau</li>
                  <li>Flight arrangements to Gustavus (limited schedules)</li>
                  <li>Park orientation and safety briefing requirement</li>
                </ul>
              </div>

              {/* Gear & Survival Equipment */}
              <div style={{
                background: '#fef7ff',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #a855f7'
              }}>
                <h3 style={{ color: '#7c2d12', fontSize: '1.2rem', marginBottom: '1rem' }}>
                  🎒 Gear & Survival Equipment
                </h3>
                <ul style={{ color: '#451a03', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                  <li>Arctic marine clothing and survival gear</li>
                  <li>Bear-proof food storage containers</li>
                  <li>Emergency communication devices (satellite)</li>
                  <li>Professional-grade camera with cold weather protection</li>
                </ul>
              </div>

              {/* Wilderness Safety */}
              <div style={{
                background: '#fef2f2',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #ef4444'
              }}>
                <h3 style={{ color: '#b91c1c', fontSize: '1.2rem', marginBottom: '1rem' }}>
                  ⚠️ Wilderness Safety
                </h3>
                <ul style={{ color: '#7f1d1d', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                  <li>File detailed wilderness travel plans with rangers</li>
                  <li>Understand tide schedules and glacier safety zones</li>
                  <li>Carry bear spray and know brown bear protocols</li>
                  <li>Prepare for rapid weather changes and emergency evacuation</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section style={{
            background: 'linear-gradient(135deg, #f0fdf4, #dcfce7)',
            padding: '2rem',
            borderRadius: '0.75rem',
            textAlign: 'center',
            border: '1px solid #86efac'
          }}>
            <h2 style={{ color: '#065f46', fontSize: '1.8rem', marginBottom: '1rem' }}>
              Ready to Plan Your Glacier Bay Adventure?
            </h2>
            <p style={{ color: '#475569', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Ready to plan your ultimate Glacier Bay National Park off-season adventure? Our detailed itinerary covers everything from wilderness access to glacier viewing strategies.
            </p>
            <a 
              href="/glacier-bay-itinerary"
              style={{
                background: 'linear-gradient(135deg, #065f46, #10b981)',
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
              View Complete Glacier Bay Itinerary →
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
            <FeedbackForm parkSlug="glacier-bay" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default GlacierBayReactTemplate;