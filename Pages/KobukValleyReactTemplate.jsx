import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const KobukValleyReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #a16207, #d97706)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Kobuk Valley National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Experience Arctic sand dunes during April, May, September, October - massive sand dunes, caribou migration, and remote Arctic wilderness
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
              Experience Kobuk Valley National Park like never before during April, May, September, October. Here's why off-season travel offers the ultimate Arctic sand dune adventure:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              {/* Highlight 1 */}
              <div style={{
                background: 'linear-gradient(135deg, #fefbeb, #fef3c7)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #fbbf24'
              }}>
                <h3 style={{ color: '#a16207', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🏜️ Great Kobuk Sand Dunes
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Explore 25 square miles of massive Arctic sand dunes reaching 100 feet high - a surreal desert landscape within the Arctic Circle.
                </p>
              </div>

              {/* Highlight 2 */}
              <div style={{
                background: 'linear-gradient(135deg, #fefbeb, #fef3c7)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #fbbf24'
              }}>
                <h3 style={{ color: '#a16207', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🦌 Caribou Migration Routes
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Witness the Western Arctic Caribou Herd during spring and fall migrations across ancient routes through this remote wilderness.
                </p>
              </div>

              {/* Highlight 3 */}
              <div style={{
                background: 'linear-gradient(135deg, #fefbeb, #fef3c7)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #fbbf24'
              }}>
                <h3 style={{ color: '#a16207', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🌿 Boreal Forest Transitions
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Experience the transition from boreal forest to Arctic tundra with unique ecosystems and rare plant communities.
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
                [Great Kobuk Sand Dunes with Arctic landscape photo]<br />
                <em>Caption: Massive sand dunes in Arctic wilderness during off-season tranquility</em>
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
              Plan your visit with confidence using our detailed weather data for Kobuk Valley National Park during April, May, September, October:
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
                  <span style={{ color: '#451a03' }}> 5-25°F (-15 to -4°C)</span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#92400e' }}>Conditions:</strong>
                  <span style={{ color: '#451a03' }}> Snow cover, increasing daylight, early caribou movement</span>
                </div>
                <div>
                  <strong style={{ color: '#92400e' }}>Best For:</strong>
                  <span style={{ color: '#451a03' }}> Winter camping, solitude, northern lights</span>
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
                  <span style={{ color: '#7f1d1d' }}> -5-15°F (-21 to -9°C)</span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#b91c1c' }}>Conditions:</strong>
                  <span style={{ color: '#7f1d1d' }}> Clear Arctic air, caribou migration, early snow</span>
                </div>
                <div>
                  <strong style={{ color: '#b91c1c' }}>Best For:</strong>
                  <span style={{ color: '#7f1d1d' }}> Sand dune exploration, wildlife viewing, photography</span>
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
              Make the most of your Kobuk Valley National Park off-season adventure with these essential tips:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                {
                  title: "Remote Access Logistics",
                  content: "Access requires charter flights from Kotzebue. No roads, trails, or facilities exist. Plan completely self-sufficient expeditions with emergency contingencies."
                },
                {
                  title: "Extreme Cold Preparation",
                  content: "Temperatures far below freezing require expedition-grade arctic gear. Wind chill on open dunes can be life-threatening. Layer systems essential."
                },
                {
                  title: "Sand Dune Navigation",
                  content: "GPS essential as landmarks shift with blowing sand. Dunes can be disorienting in poor visibility. Practice desert navigation techniques."
                },
                {
                  title: "Wildlife Encounter Protocols",
                  content: "Potential encounters with caribou, wolves, and bears. Follow Leave No Trace principles strictly. Carry appropriate deterrents and know protocols."
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
              Essential preparation checklist for your Kobuk Valley National Park off-season adventure:
            </p>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '1.5rem' 
            }}>
              {/* Remote Access Planning */}
              <div style={{
                background: '#ecfdf5',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #10b981'
              }}>
                <h3 style={{ color: '#047857', fontSize: '1.2rem', marginBottom: '1rem' }}>
                  📋 Remote Access Planning
                </h3>
                <ul style={{ color: '#065f46', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                  <li>Charter flight arrangements from Kotzebue</li>
                  <li>Flexible schedule for weather-dependent flights</li>
                  <li>Detailed route planning with topographic maps</li>
                  <li>Emergency evacuation insurance essential</li>
                </ul>
              </div>

              {/* Arctic Expedition Gear */}
              <div style={{
                background: '#fef7ff',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #a855f7'
              }}>
                <h3 style={{ color: '#7c2d12', fontSize: '1.2rem', marginBottom: '1rem' }}>
                  🎒 Arctic Expedition Gear
                </h3>
                <ul style={{ color: '#451a03', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                  <li>Expedition-grade arctic camping equipment</li>
                  <li>Sand protection gear for equipment</li>
                  <li>Cold-weather photography protection</li>
                  <li>Emergency shelter and survival supplies</li>
                </ul>
              </div>

              {/* Extreme Environment Safety */}
              <div style={{
                background: '#fef2f2',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #ef4444'
              }}>
                <h3 style={{ color: '#b91c1c', fontSize: '1.2rem', marginBottom: '1rem' }}>
                  ⚠️ Extreme Environment Safety
                </h3>
                <ul style={{ color: '#7f1d1d', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                  <li>Satellite communication devices mandatory</li>
                  <li>Advanced wilderness survival skills required</li>
                  <li>File comprehensive expedition plans</li>
                  <li>Extreme cold and remote location risk assessment</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section style={{
            background: 'linear-gradient(135deg, #fefbeb, #fef3c7)',
            padding: '2rem',
            borderRadius: '0.75rem',
            textAlign: 'center',
            border: '1px solid #fbbf24'
          }}>
            <h2 style={{ color: '#a16207', fontSize: '1.8rem', marginBottom: '1rem' }}>
              Ready to Plan Your Arctic Sand Dune Adventure?
            </h2>
            <p style={{ color: '#475569', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Ready to plan your ultimate Kobuk Valley National Park off-season adventure? Our detailed expedition guide covers everything from Arctic logistics to sand dune exploration.
            </p>
            <a 
              href="/kobuk-valley-itinerary"
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
            <FeedbackForm parkSlug="kobuk-valley" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default KobukValleyReactTemplate;