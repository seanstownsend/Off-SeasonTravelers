import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const BigBendReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #a16207, #92400e)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Big Bend National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Experience Texas's remote wilderness during April, May, September, October - Chihuahuan Desert, Rio Grande, and star-filled skies
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
              color: '#a16207',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #d97706',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Big Bend National Park like never before during April, May, September, October. Here's why off-season travel offers the ultimate Chihuahuan Desert adventure:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              {/* Highlight 1 */}
              <div style={{
                background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #f59e0b'
              }}>
                <h3 style={{ color: '#a16207', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🏜️ Perfect Desert Weather
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Escape extreme summer heat with comfortable 70-80°F days ideal for hiking, camping, and exploring the vast Chihuahuan Desert landscape.
                </p>
              </div>

              {/* Highlight 2 */}
              <div style={{
                background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #f59e0b'
              }}>
                <h3 style={{ color: '#a16207', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🌌 World-Class Stargazing
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Experience some of the darkest skies in the United States. Fall and spring offer perfect conditions for astronomy and night photography.
                </p>
              </div>

              {/* Highlight 3 */}
              <div style={{
                background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #f59e0b'
              }}>
                <h3 style={{ color: '#a16207', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🌊 Rio Grande Adventures
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Explore the border with Mexico along the Rio Grande with excellent conditions for rafting, fishing, and riverside camping.
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
                [Big Bend National Park with desert landscape and Rio Grande photo]<br />
                <em>Caption: Dramatic Chihuahuan Desert landscape meets the Rio Grande during off-season tranquility</em>
              </div>
            </div>
          </section>

          {/* Weather Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#a16207',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #d97706',
              paddingBottom: '0.5rem'
            }}>
              Weather Guide
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Plan your visit with confidence using our detailed weather data for Big Bend National Park during April, May, September, October:
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
                  <span style={{ color: '#451a03' }}> 70-85°F (21-29°C)</span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#92400e' }}>Conditions:</strong>
                  <span style={{ color: '#451a03' }}> Perfect hiking weather, wildflower blooms, clear skies</span>
                </div>
                <div>
                  <strong style={{ color: '#92400e' }}>Best For:</strong>
                  <span style={{ color: '#451a03' }}> Desert hiking, camping, wildflower photography</span>
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
                  <span style={{ color: '#7f1d1d' }}> 65-80°F (18-27°C)</span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#b91c1c' }}>Conditions:</strong>
                  <span style={{ color: '#7f1d1d' }}> Cool mornings, warm days, excellent stargazing</span>
                </div>
                <div>
                  <strong style={{ color: '#b91c1c' }}>Best For:</strong>
                  <span style={{ color: '#7f1d1d' }}> Astronomy, river activities, long-distance hiking</span>
                </div>
              </div>
            </div>
          </section>

          {/* Essential Tips Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#a16207',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #d97706',
              paddingBottom: '0.5rem'
            }}>
              Essential Tips
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Make the most of your Big Bend National Park off-season adventure with these essential tips:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                {
                  title: "Santa Elena Canyon Exploration",
                  content: "The iconic Rio Grande canyon offers spectacular views and river access. Best visited early morning or late afternoon for optimal lighting and cooler temperatures."
                },
                {
                  title: "Desert Survival Preparedness",
                  content: "Carry plenty of water (1 gallon per person per day), sun protection, and emergency supplies. Cell service is extremely limited throughout the park."
                },
                {
                  title: "Hot Springs Historic Trail",
                  content: "This riverside trail leads to natural hot springs along the Rio Grande. Perfect for off-season soaking with stunning canyon views."
                },
                {
                  title: "Stargazing at Night",
                  content: "Big Bend offers Gold-tier Dark Sky status. Visit during new moon phases for optimal Milky Way photography and celestial observation."
                }
              ].map((tip, index) => (
                <div key={index} style={{
                  background: '#f1f5f9',
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                  borderLeft: '4px solid #d97706'
                }}>
                  <h3 style={{ color: '#a16207', fontSize: '1.1rem', marginBottom: '0.75rem' }}>
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
              color: '#a16207',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #d97706',
              paddingBottom: '0.5rem'
            }}>
              Planning Checklist
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Essential preparation checklist for your Big Bend National Park off-season adventure:
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
                  <li>Big Bend entrance pass ($30/vehicle, valid 7 days)</li>
                  <li>Campground reservations at Rio Grande Village or Chisos Basin</li>
                  <li>Backcountry permits for overnight desert camping</li>
                  <li>Lodging at Chisos Mountains Lodge (book early)</li>
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
                  <li>Desert hiking boots and sun protection (hat, sunglasses)</li>
                  <li>Plenty of water storage (hydration packs recommended)</li>
                  <li>Telescope or binoculars for stargazing</li>
                  <li>Emergency communication device (satellite messenger)</li>
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
                  <li>Watch for rattlesnakes, javelinas, and mountain lions</li>
                  <li>International border area - carry identification</li>
                  <li>Limited cell service - inform others of travel plans</li>
                  <li>Flash flood potential in washes and low areas</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section style={{
            background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
            padding: '2rem',
            borderRadius: '0.75rem',
            textAlign: 'center',
            border: '1px solid #f59e0b'
          }}>
            <h2 style={{ color: '#a16207', fontSize: '1.8rem', marginBottom: '1rem' }}>
              Ready to Plan Your Big Bend Adventure?
            </h2>
            <p style={{ color: '#475569', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Ready to plan your ultimate Big Bend National Park off-season adventure? Our detailed itinerary covers everything from desert hikes to stargazing.
            </p>
            <a 
              href="/big-bend-itinerary"
              style={{
                background: 'linear-gradient(135deg, #a16207, #d97706)',
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
              View Complete Big Bend Itinerary →
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
            <FeedbackForm parkSlug="big-bend" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default BigBendReactTemplate;
