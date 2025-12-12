import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const GatesOfTheArcticReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #581c87, #7c3aed)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Gates of the Arctic National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Experience America's ultimate wilderness during April, May, September, October - untouched arctic landscapes and complete solitude
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
              color: '#581c87',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #7c3aed',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Gates of the Arctic National Park like never before during April, May, September, October. Here's why off-season travel offers the ultimate Arctic wilderness adventure:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              {/* Highlight 1 */}
              <div style={{
                background: 'linear-gradient(135deg, #faf5ff, #f3e8ff)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #c4b5fd'
              }}>
                <h3 style={{ color: '#581c87', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🏔️ Untouched Wilderness
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Experience 8.4 million acres of roadless wilderness with no trails, facilities, or services - pure, unaltered Arctic nature.
                </p>
              </div>

              {/* Highlight 2 */}
              <div style={{
                background: 'linear-gradient(135deg, #faf5ff, #f3e8ff)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #c4b5fd'
              }}>
                <h3 style={{ color: '#581c87', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🌌 Complete Solitude
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Achieve true isolation with fewer than 1,000 annual visitors. Experience silence and solitude impossible to find anywhere else.
                </p>
              </div>

              {/* Highlight 3 */}
              <div style={{
                background: 'linear-gradient(135deg, #faf5ff, #f3e8ff)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #c4b5fd'
              }}>
                <h3 style={{ color: '#581c87', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  ❄️ Arctic Tundra Transitions
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Witness dramatic seasonal transitions on the Arctic tundra with spring wildlife emergence or fall migration patterns.
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
                [Gates of the Arctic wilderness landscape with mountains photo]<br />
                <em>Caption: Pristine wilderness landscape in Gates of the Arctic during off-season solitude</em>
              </div>
            </div>
          </section>

          {/* Weather Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#581c87',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #7c3aed',
              paddingBottom: '0.5rem'
            }}>
              Weather Guide
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Plan your visit with confidence using our detailed weather data for Gates of the Arctic National Park during April, May, September, October:
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
                  <span style={{ color: '#451a03' }}> 10-30°F (-12 to -1°C)</span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#92400e' }}>Conditions:</strong>
                  <span style={{ color: '#451a03' }}> Snow transitions, increasing daylight, wildlife activity</span>
                </div>
                <div>
                  <strong style={{ color: '#92400e' }}>Best For:</strong>
                  <span style={{ color: '#451a03' }}> Winter camping, northern lights, solitude</span>
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
                  <span style={{ color: '#7f1d1d' }}> 0-25°F (-18 to -4°C)</span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#b91c1c' }}>Conditions:</strong>
                  <span style={{ color: '#7f1d1d' }}> Clear skies, tundra colors, early snow, aurora activity</span>
                </div>
                <div>
                  <strong style={{ color: '#b91c1c' }}>Best For:</strong>
                  <span style={{ color: '#7f1d1d' }}> Photography, wilderness trekking, northern lights</span>
                </div>
              </div>
            </div>
          </section>

          {/* Essential Tips Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#581c87',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #7c3aed',
              paddingBottom: '0.5rem'
            }}>
              Essential Tips
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Make the most of your Gates of the Arctic National Park off-season adventure with these essential tips:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                {
                  title: "Expert Wilderness Skills Required",
                  content: "This park requires advanced wilderness and survival skills. No trails, roads, or facilities exist. Plan self-sufficient expeditions with emergency contingencies."
                },
                {
                  title: "Arctic Survival Gear Essential",
                  content: "Bring expedition-grade arctic gear rated for extreme cold. Temperatures can drop suddenly. Multi-layer insulation systems and emergency shelters are critical."
                },
                {
                  title: "Emergency Communication Plans",
                  content: "Satellite communication devices are essential. File detailed travel plans with rangers and emergency contacts. Weather can change rapidly requiring evacuation."
                },
                {
                  title: "Leave No Trace Principles",
                  content: "Practice strict Leave No Trace ethics in this pristine environment. Pack out all waste. Minimal impact camping only. Preserve wilderness for future generations."
                }
              ].map((tip, index) => (
                <div key={index} style={{
                  background: '#f1f5f9',
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                  borderLeft: '4px solid #7c3aed'
                }}>
                  <h3 style={{ color: '#581c87', fontSize: '1.1rem', marginBottom: '0.75rem' }}>
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
              color: '#581c87',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #7c3aed',
              paddingBottom: '0.5rem'
            }}>
              Planning Checklist
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Essential preparation checklist for your Gates of the Arctic National Park off-season adventure:
            </p>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '1.5rem' 
            }}>
              {/* Access & Logistics */}
              <div style={{
                background: '#ecfdf5',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #10b981'
              }}>
                <h3 style={{ color: '#047857', fontSize: '1.2rem', marginBottom: '1rem' }}>
                  📋 Access & Logistics
                </h3>
                <ul style={{ color: '#065f46', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                  <li>Charter flight arrangements to remote landing areas</li>
                  <li>Detailed route planning with topographic maps</li>
                  <li>Weather monitoring and flexible departure dates</li>
                  <li>Emergency evacuation insurance recommended</li>
                </ul>
              </div>

              {/* Survival Equipment */}
              <div style={{
                background: '#fef7ff',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #a855f7'
              }}>
                <h3 style={{ color: '#7c2d12', fontSize: '1.2rem', marginBottom: '1rem' }}>
                  🎒 Survival Equipment
                </h3>
                <ul style={{ color: '#451a03', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                  <li>Expedition-grade arctic camping equipment</li>
                  <li>Emergency shelter and survival gear</li>
                  <li>Satellite communication devices (PLB/InReach)</li>
                  <li>Cold-weather photography protection</li>
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
                  <li>Advanced wilderness survival training required</li>
                  <li>File comprehensive travel plans with multiple contacts</li>
                  <li>Carry bear spray and know arctic wildlife protocols</li>
                  <li>Plan for complete self-sufficiency and emergency scenarios</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section style={{
            background: 'linear-gradient(135deg, #faf5ff, #f3e8ff)',
            padding: '2rem',
            borderRadius: '0.75rem',
            textAlign: 'center',
            border: '1px solid #c4b5fd'
          }}>
            <h2 style={{ color: '#581c87', fontSize: '1.8rem', marginBottom: '1rem' }}>
              Ready to Plan Your Arctic Wilderness Adventure?
            </h2>
            <p style={{ color: '#475569', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Ready to plan your ultimate Gates of the Arctic National Park off-season adventure? Our detailed expedition guide covers everything from access logistics to wilderness survival.
            </p>
            <a 
              href="/gates-of-the-arctic-itinerary"
              style={{
                background: 'linear-gradient(135deg, #581c87, #7c3aed)',
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
              View Complete Arctic Expedition Guide →
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
            <FeedbackForm parkSlug="gates-of-the-arctic" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default GatesOfTheArcticReactTemplate;