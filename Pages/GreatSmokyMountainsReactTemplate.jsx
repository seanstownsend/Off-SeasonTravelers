import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const GreatSmokyMountainsReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #b45309, #d97706)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Great Smoky Mountains: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Experience America's most visited park during April, May, September, October - misty mountains, stunning foliage, and peaceful forests
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
              color: '#b45309',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #d97706',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Great Smoky Mountains National Park like never before during April, May, September, October. Here's why off-season travel offers the ultimate Appalachian adventure:
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
                <h3 style={{ color: '#ea580c', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🍂 Spectacular Fall Foliage
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Witness world-famous autumn colors with peak foliage from mid-September through October across 6,000-foot elevation changes.
                </p>
              </div>

              {/* Highlight 2 */}
              <div style={{
                background: 'linear-gradient(135deg, #fff7ed, #ffedd5)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #fdba74'
              }}>
                <h3 style={{ color: '#ea580c', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🌸 Spring Wildflower Blooms
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Experience the world's greatest wildflower diversity with trilliums, violets, and mountain laurel in pristine forest settings.
                </p>
              </div>

              {/* Highlight 3 */}
              <div style={{
                background: 'linear-gradient(135deg, #fff7ed, #ffedd5)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #fdba74'
              }}>
                <h3 style={{ color: '#ea580c', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🐻 Wildlife Viewing Opportunities
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Spot black bears, elk, and abundant bird life during active foraging seasons with fewer crowds for better viewing.
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
                [Great Smoky Mountains with misty ridges and forest photo]<br />
                <em>Caption: Misty mountain ridges during off-season tranquility in the Smokies</em>
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
              Plan your visit with confidence using our detailed weather data for Great Smoky Mountains National Park during April, May, September, October:
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
                  <span style={{ color: '#451a03' }}> 55-70°F (13-21°C)</span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#92400e' }}>Conditions:</strong>
                  <span style={{ color: '#451a03' }}> Mild days, occasional rain, wildflower blooms</span>
                </div>
                <div>
                  <strong style={{ color: '#92400e' }}>Best For:</strong>
                  <span style={{ color: '#451a03' }}> Wildflower hikes, waterfalls, photography</span>
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
                  <span style={{ color: '#7f1d1d' }}> 50-65°F (10-18°C)</span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#b91c1c' }}>Conditions:</strong>
                  <span style={{ color: '#7f1d1d' }}> Cool mornings, warm afternoons, peak foliage</span>
                </div>
                <div>
                  <strong style={{ color: '#b91c1c' }}>Best For:</strong>
                  <span style={{ color: '#7f1d1d' }}> Scenic drives, hiking, foliage photography</span>
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
              Make the most of your Great Smoky Mountains National Park off-season adventure with these essential tips:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                {
                  title: "Cades Cove Early Morning",
                  content: "Visit the 11-mile loop road early morning for best wildlife viewing. Black bears and deer are most active during dawn hours."
                },
                {
                  title: "Trail Selection Strategy",
                  content: "Choose lower elevation trails in spring for wildflowers, higher elevations in fall for peak foliage. Laurel Falls offers easy access year-round."
                },
                {
                  title: "Weather Preparedness",
                  content: "Mountain weather changes quickly. Pack rain gear and layers. Temperatures drop 3-5°F per 1,000 feet of elevation gain."
                },
                {
                  title: "Photography Planning",
                  content: "Misty mornings create dramatic photography opportunities. Cataract Falls and Clingmans Dome offer stunning vistas during off-season."
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
              Essential preparation checklist for your Great Smoky Mountains National Park off-season adventure:
            </p>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
              gap: '1.5rem' 
            }}>
              {/* Free Entry & Reservations */}
              <div style={{
                background: '#ecfdf5',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #10b981'
              }}>
                <h3 style={{ color: '#047857', fontSize: '1.2rem', marginBottom: '1rem' }}>
                  📋 Free Entry & Reservations
                </h3>
                <ul style={{ color: '#065f46', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                  <li>No entrance fees required (free national park!)</li>
                  <li>Camping reservations at Elkmont or Smokemont</li>
                  <li>Lodging in Gatlinburg or Pigeon Forge (book early for fall)</li>
                  <li>Backcountry permits for overnight backpacking</li>
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
                  <li>Waterproof hiking boots and rain gear</li>
                  <li>Layered clothing for variable mountain weather</li>
                  <li>Camera with macro lens for wildflower photography</li>
                  <li>Bear spray for backcountry areas (optional but recommended)</li>
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
                  <li>Maintain 150 feet distance from bears and elk</li>
                  <li>Store food properly to avoid wildlife encounters</li>
                  <li>Check trail conditions for seasonal closures</li>
                  <li>Carry first aid kit and inform others of hiking plans</li>
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
              Ready to Plan Your Smoky Mountains Adventure?
            </h2>
            <p style={{ color: '#475569', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Ready to plan your ultimate Great Smoky Mountains National Park off-season adventure? Our detailed itinerary covers everything from wildflower hikes to scenic drives.
            </p>
            <a 
              href="/great-smoky-mountains-itinerary"
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
              View Complete Smoky Mountains Itinerary →
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
            <FeedbackForm parkSlug="great-smoky-mountains" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default GreatSmokyMountainsReactTemplate;