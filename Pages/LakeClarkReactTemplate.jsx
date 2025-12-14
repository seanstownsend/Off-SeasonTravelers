import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const LakeClarkReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #4e665a, #5c7468)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Lake Clark National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Experience volcanic landscapes and pristine lakes during April, May, September, October - active volcanoes, salmon runs, and wilderness solitude
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
              Experience Lake Clark National Park like never before during April, May, September, October. Here's why off-season travel offers the ultimate Alaska volcanic and wilderness adventure:
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
                  🌋 Active Volcanic Landscapes
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Witness active volcanic activity with steaming peaks and volcanic lakes across diverse landscapes from coast to interior wilderness.
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
                  🐟 Salmon Run Seasons
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Experience world-class salmon runs in pristine watersheds attracting brown bears and providing exceptional wildlife viewing opportunities.
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
                  🏞️ Pristine Lake Systems
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Explore crystal-clear lakes surrounded by dramatic mountains with world-class fishing and kayaking in complete wilderness settings.
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
                [Lake Clark with Mount Redoubt volcano backdrop photo]<br />
                <em>Caption: Pristine Lake Clark with active volcanic peaks during off-season tranquility</em>
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
              Plan your visit with confidence using our detailed weather data for Lake Clark National Park during April, May, September, October:
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
                  <span style={{ color: '#451a03' }}> 25-45°F (-4 to 7°C)</span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#92400e' }}>Conditions:</strong>
                  <span style={{ color: '#451a03' }}> Snow melt, ice breakup, increasing wildlife activity</span>
                </div>
                <div>
                  <strong style={{ color: '#92400e' }}>Best For:</strong>
                  <span style={{ color: '#451a03' }}> Volcanic viewing, solitude, early season fishing</span>
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
                  <span style={{ color: '#7f1d1d' }}> 20-40°F (-7 to 4°C)</span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#b91c1c' }}>Conditions:</strong>
                  <span style={{ color: '#7f1d1d' }}> Clear skies, salmon runs, bear activity, lake ice formation</span>
                </div>
                <div>
                  <strong style={{ color: '#b91c1c' }}>Best For:</strong>
                  <span style={{ color: '#7f1d1d' }}> Photography, bear viewing, prime fishing</span>
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
              Make the most of your Lake Clark National Park off-season adventure with these essential tips:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                {
                  title: "Float Plane Access Planning",
                  content: "Charter float plane access required as no roads exist. Weather conditions affect flight schedules. Book flexible operators and have backup dates for weather delays."
                },
                {
                  title: "Brown Bear Safety Protocols",
                  content: "High brown bear density requires strict food storage and safety protocols. Carry bear spray and know bear behavior. Fish cleaning requires special precautions."
                },
                {
                  title: "Cold Water Safety",
                  content: "Lake and river temperatures remain cold year-round. Wear proper immersion gear for water activities. Hypothermia risk is serious even in warmer months."
                },
                {
                  title: "Volcanic Activity Awareness",
                  content: "Monitor volcanic activity reports before visiting. Stay informed about air quality and ash conditions. Active volcanoes can affect weather and visibility."
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
              Essential preparation checklist for your Lake Clark National Park off-season adventure:
            </p>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minMax(280px, 1fr))', 
              gap: '1.5rem' 
            }}>
              {/* Access & Transportation */}
              <div style={{
                background: '#ecfdf5',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #10b981'
              }}>
                <h3 style={{ color: '#047857', fontSize: '1.2rem', marginBottom: '1rem' }}>
                  📋 Access & Transportation
                </h3>
                <ul style={{ color: '#065f46', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                  <li>Charter float plane reservations from Anchorage/Homer</li>
                  <li>Flexible flight dates due to weather dependencies</li>
                  <li>Air taxi operator recommendations and safety records</li>
                  <li>Alaska fishing license if planning to fish</li>
                </ul>
              </div>

              {/* Wilderness Camping Gear */}
              <div style={{
                background: '#fef7ff',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #a855f7'
              }}>
                <h3 style={{ color: '#7c2d12', fontSize: '1.2rem', marginBottom: '1rem' }}>
                  🎒 Wilderness Camping Gear
                </h3>
                <ul style={{ color: '#451a03', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                  <li>Cold-weather camping equipment and insulation</li>
                  <li>Bear-proof food storage containers</li>
                  <li>Waterproof gear for lake and river activities</li>
                  <li>Volcanic ash protection for equipment</li>
                </ul>
              </div>

              {/* Safety & Emergency */}
              <div style={{
                background: '#fef2f2',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #ef4444'
              }}>
                <h3 style={{ color: '#b91c1c', fontSize: '1.2rem', marginBottom: '1rem' }}>
                  ⚠️ Safety & Emergency
                </h3>
                <ul style={{ color: '#7f1d1d', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                  <li>Satellite communication devices for remote areas</li>
                  <li>Comprehensive first aid and emergency supplies</li>
                  <li>Bear spray and proper food storage protocols</li>
                  <li>Emergency evacuation insurance strongly recommended</li>
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
              Ready to Plan Your Lake Clark Adventure?
            </h2>
            <p style={{ color: '#475569', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Ready to plan your ultimate Lake Clark National Park off-season adventure? Our detailed itinerary covers everything from volcanic exploration to wilderness fishing.
            </p>
            <a 
              href="/lake-clark-itinerary"
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
              View Complete Lake Clark Itinerary →
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
            <FeedbackForm parkSlug="lake-clark" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default LakeClarkReactTemplate;