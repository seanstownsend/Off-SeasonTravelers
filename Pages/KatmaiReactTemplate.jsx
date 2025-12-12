import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const KatmaiReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #b91c1c, #dc2626)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Katmai National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Experience the Valley of 10,000 Smokes during May, June, September, October - bear fishing, volcanic landscapes, and pristine wilderness
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
              color: '#b91c1c',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #dc2626',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Katmai National Park like never before during May, June, September, October. Here's why off-season travel offers the ultimate Alaska bear viewing and volcanic adventure:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              {/* Highlight 1 */}
              <div style={{
                background: 'linear-gradient(135deg, #fef2f2, #fee2e2)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #fca5a5'
              }}>
                <h3 style={{ color: '#b91c1c', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🐻 World's Best Bear Viewing
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Brooks Falls offers unparalleled brown bear salmon fishing views during June and September runs without summer's massive crowds.
                </p>
              </div>

              {/* Highlight 2 */}
              <div style={{
                background: 'linear-gradient(135deg, #fef2f2, #fee2e2)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #fca5a5'
              }}>
                <h3 style={{ color: '#b91c1c', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🌋 Valley of 10,000 Smokes
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Explore the dramatic volcanic landscape created by the 1912 Novarupta eruption with fewer visitors and cooler temperatures for hiking.
                </p>
              </div>

              {/* Highlight 3 */}
              <div style={{
                background: 'linear-gradient(135deg, #fef2f2, #fee2e2)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #fca5a5'
              }}>
                <h3 style={{ color: '#b91c1c', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                  🎣 Salmon Run Seasons
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Witness the spectacular salmon runs that attract hundreds of brown bears to Brooks River during peak fishing months.
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
                [Katmai brown bears fishing at Brooks Falls photo]<br />
                <em>Caption: Brown bears fishing for salmon at Brooks Falls during the fall run</em>
              </div>
            </div>
          </section>

          {/* Weather Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#b91c1c',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #dc2626',
              paddingBottom: '0.5rem'
            }}>
              Weather Guide
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Plan your visit with confidence using our detailed weather data for Katmai National Park during May, June, September, October:
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
                  🌸 Late Spring (May - June)
                </h3>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#92400e' }}>Temperature:</strong>
                  <span style={{ color: '#451a03' }}> 45-65°F (7-18°C)</span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#92400e' }}>Conditions:</strong>
                  <span style={{ color: '#451a03' }}> Cool and variable, increasing daylight, early salmon runs</span>
                </div>
                <div>
                  <strong style={{ color: '#92400e' }}>Best For:</strong>
                  <span style={{ color: '#451a03' }}> Bear emergence, volcanic hiking, fewer visitors</span>
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
                  <span style={{ color: '#7f1d1d' }}> 40-60°F (4-15°C)</span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#b91c1c' }}>Conditions:</strong>
                  <span style={{ color: '#7f1d1d' }}> Crisp and clear, peak salmon runs, optimal bear viewing</span>
                </div>
                <div>
                  <strong style={{ color: '#b91c1c' }}>Best For:</strong>
                  <span style={{ color: '#7f1d1d' }}> Bear photography, salmon fishing, fall colors</span>
                </div>
              </div>
            </div>
          </section>

          {/* Essential Tips Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#b91c1c',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #dc2626',
              paddingBottom: '0.5rem'
            }}>
              Essential Tips
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Make the most of your Katmai National Park off-season adventure with these essential tips:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                {
                  title: "Bear Safety Protocol",
                  content: "Always maintain 50-yard minimum distance from bears. Follow all ranger instructions at Brooks Falls platform. Carry bear spray and know how to use it."
                },
                {
                  title: "Brooks Falls Reservations",
                  content: "Reserve viewing platform times well in advance. September offers the best bear viewing with fewer crowds than peak summer months."
                },
                {
                  title: "Flight Weather Planning",
                  content: "Weather can change rapidly affecting floatplane access. Build flexibility into your schedule and consider weather delays for remote lodge access."
                },
                {
                  title: "Photography Equipment",
                  content: "Bring telephoto lenses for bear photography. Weather-sealed equipment recommended. Respect platform photography rules and time limits."
                }
              ].map((tip, index) => (
                <div key={index} style={{
                  background: '#f1f5f9',
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                  borderLeft: '4px solid #dc2626'
                }}>
                  <h3 style={{ color: '#b91c1c', fontSize: '1.1rem', marginBottom: '0.75rem' }}>
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
              color: '#b91c1c',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #dc2626',
              paddingBottom: '0.5rem'
            }}>
              Planning Checklist
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Essential preparation checklist for your Katmai National Park off-season adventure:
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
                  <li>Brooks Falls viewing platform reservations</li>
                  <li>Floatplane transportation to Brooks Lodge</li>
                  <li>Camping permits for backcountry areas</li>
                  <li>Fishing licenses for salmon fishing</li>
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
                  <li>Weather-sealed camera with telephoto lens</li>
                  <li>Bear spray and bear-proof food containers</li>
                  <li>Waterproof clothing and waders</li>
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
                  <li>Never approach or feed bears - observe from platforms only</li>
                  <li>Be prepared for sudden weather changes and flight delays</li>
                  <li>Inform others of backcountry hiking plans</li>
                  <li>Know bear encounter protocols and safety procedures</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section style={{
            background: 'linear-gradient(135deg, #fef2f2, #fee2e2)',
            padding: '2rem',
            borderRadius: '0.75rem',
            textAlign: 'center',
            border: '1px solid #fca5a5'
          }}>
            <h2 style={{ color: '#b91c1c', fontSize: '1.8rem', marginBottom: '1rem' }}>
              Ready to Plan Your Katmai Adventure?
            </h2>
            <p style={{ color: '#475569', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Ready to plan your ultimate Katmai National Park off-season adventure? Our detailed itinerary covers everything from bear viewing to volcanic exploration.
            </p>
            <a 
              href="/katmai-itinerary"
              style={{
                background: 'linear-gradient(135deg, #b91c1c, #dc2626)',
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
              View Complete Katmai Itinerary →
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
            <FeedbackForm parkSlug="katmai" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default KatmaiReactTemplate;