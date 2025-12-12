import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const IndianaDunesReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #0369a1, #38bdf8)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Indiana Dunes National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Discover the beauty of Indiana Dunes National Park during September, October, April, May - fewer crowds, lower costs, unforgettable lakefront experiences
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
              color: '#0369a1',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #38bdf8',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Indiana Dunes National Park during the ideal shoulder seasons of September, October, April, May. Here's why off-season travel offers the ultimate Lake Michigan adventure:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              margin: '1.5rem 0'
            }}>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#0c4a6e', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🏖️ Pristine Beach Experience</h3>
                <p>Enjoy 15 miles of Lake Michigan shoreline with golden sand beaches all to yourself. Perfect for peaceful walks and storm watching without summer crowds.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#0c4a6e', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>💰 Significant Savings</h3>
                <p>Save up to 50% on nearby accommodations and discover local deals unavailable during peak summer season.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#0c4a6e', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>📸 Unique Photo Opportunities</h3>
                <p>Capture stunning fall colors in the prairie, dramatic Lake Michigan storms, and spring wildflower blooms - without photobombers.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#0c4a6e', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🦅 Enhanced Bird Watching</h3>
                <p>Fall migration brings hundreds of bird species, while spring offers excellent opportunities to see returning warblers and waterfowl.</p>
              </div>
            </div>

            <div style={{
              background: '#f3f4f6',
              border: '2px dashed #4b5563',
              borderRadius: '0.75rem',
              padding: '3rem',
              textAlign: 'center',
              color: '#4b5563',
              marginTop: '2rem'
            }}>
              <p style={{ fontSize: '1.1rem', margin: 0 }}>
                [Indiana Dunes off-season landscape photo]<br />
                <em>Caption: Peaceful Lake Michigan shoreline during off-season tranquility</em>
              </p>
            </div>
          </section>

          {/* Trade-offs Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#0369a1',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #38bdf8',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Trade-offs
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              While off-season travel offers incredible advantages, here's what to expect:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              <div style={{
                background: '#fef7cd',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #f59e0b'
              }}>
                <h4 style={{ color: '#92400e', margin: '0 0 1rem 0' }}>⚠️ Weather Considerations</h4>
                <ul style={{ margin: 0, color: '#451a03' }}>
                  <li>Cooler temperatures (40-65°F)</li>
                  <li>Potential rain and wind storms off Lake Michigan</li>
                  <li>Shorter daylight hours in fall</li>
                  <li>Some trails may be muddy or icy</li>
                </ul>
              </div>
              <div style={{
                background: '#fdf2f8',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #ec4899'
              }}>
                <h4 style={{ color: '#be185d', margin: '0 0 1rem 0' }}>🏢 Limited Services</h4>
                <ul style={{ margin: 0, color: '#831843' }}>
                  <li>Reduced visitor center hours</li>
                  <li>Some seasonal concessions closed</li>
                  <li>Limited ranger programs</li>
                  <li>Fewer food options nearby</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Weather Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#0369a1',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #38bdf8',
              paddingBottom: '0.5rem'
            }}>
              Weather & What to Pack
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Plan your visit with confidence using our detailed weather data for Indiana Dunes National Park during September, October, April, May:
            </p>

            <div style={{
              background: '#f8fafc',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              border: '1px solid #cbd5e1',
              marginBottom: '1.5rem'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <div style={{ textAlign: 'center' }}>
                  <h4 style={{ color: '#1e40af', margin: '0 0 0.5rem 0' }}>September</h4>
                  <p style={{ margin: 0, color: '#475569' }}>Highs: 72°F<br />Lows: 54°F<br />Rain: 3 days</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <h4 style={{ color: '#1e40af', margin: '0 0 0.5rem 0' }}>October</h4>
                  <p style={{ margin: 0, color: '#475569' }}>Highs: 61°F<br />Lows: 43°F<br />Rain: 4 days</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <h4 style={{ color: '#1e40af', margin: '0 0 0.5rem 0' }}>April</h4>
                  <p style={{ margin: 0, color: '#475569' }}>Highs: 59°F<br />Lows: 40°F<br />Rain: 5 days</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <h4 style={{ color: '#1e40af', margin: '0 0 0.5rem 0' }}>May</h4>
                  <p style={{ margin: 0, color: '#475569' }}>Highs: 69°F<br />Lows: 50°F<br />Rain: 4 days</p>
                </div>
              </div>
            </div>

            <div style={{
              background: '#eff6ff',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              border: '1px solid #3b82f6'
            }}>
              <h4 style={{ color: '#1d4ed8', margin: '0 0 1rem 0' }}>Essential Packing List</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                <div>
                  <strong style={{ color: '#1e40af' }}>Clothing:</strong>
                  <ul style={{ margin: '0.5rem 0 0 1rem', color: '#374151' }}>
                    <li>Waterproof jacket</li>
                    <li>Layered clothing system</li>
                    <li>Warm hat and gloves</li>
                    <li>Sturdy hiking boots</li>
                  </ul>
                </div>
                <div>
                  <strong style={{ color: '#1e40af' }}>Gear:</strong>
                  <ul style={{ margin: '0.5rem 0 0 1rem', color: '#374151' }}>
                    <li>Binoculars for bird watching</li>
                    <li>Camera with extra batteries</li>
                    <li>Daypack with snacks</li>
                    <li>Insect repellent</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Off-Season Tips Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#0369a1',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #38bdf8',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Tips
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Make the most of your Indiana Dunes National Park off-season adventure with these essential tips:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
              {[
                { icon: '🕐', title: 'Visit Timing', content: 'Arrive early morning for best light and wildlife activity. Sunset views over Lake Michigan are spectacular from the dunes.' },
                { icon: '🌊', title: 'Lake Michigan Safety', content: 'Lake conditions can be rough in off-season. Stay off piers during storms and be aware of strong currents.' },
                { icon: '🥾', title: 'Trail Conditions', content: 'Dune trails can be strenuous. The 3 Dune Challenge offers great views but requires good fitness level.' },
                { icon: '📱', title: 'Cell Service', content: 'Limited cell coverage in some areas. Download offline maps and inform others of your hiking plans.' },
                { icon: '🦆', title: 'Wildlife Watching', content: 'Bring binoculars for bird watching. Great Blue Herons, migrating warblers, and waterfowl are common.' }
              ].map((tip, index) => (
                <div key={index} style={{
                  background: '#f8fafc',
                  padding: '1rem',
                  borderRadius: '0.5rem',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem'
                }}>
                  <div style={{ fontSize: '1.5rem', flexShrink: 0 }}>{tip.icon}</div>
                  <div>
                    <h4 style={{ color: '#1e40af', margin: '0 0 0.5rem 0' }}>{tip.title}</h4>
                    <p style={{ margin: 0, color: '#475569' }}>{tip.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Before You Go Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#0369a1',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #38bdf8',
              paddingBottom: '0.5rem'
            }}>
              Before You Go
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Essential pre-trip checklist for your Indiana Dunes National Park off-season adventure:
            </p>

            <div style={{
              background: '#fef3c7',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              border: '1px solid #f59e0b',
              marginBottom: '1.5rem'
            }}>
              <h4 style={{ color: '#92400e', margin: '0 0 1rem 0' }}>📋 Essential Preparations</h4>
              <ul style={{ color: '#451a03', margin: 0 }}>
                <li>Check current park conditions and visitor center hours</li>
                <li>Review trail closures or weather warnings</li>
                <li>Book accommodations early - limited off-season options</li>
                <li>Plan indoor backup activities for stormy weather</li>
                <li>Bring cash - some vendors may be cash-only in off-season</li>
              </ul>
            </div>
          </section>

          {/* Itinerary Link Section */}
          <section style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <h2 style={{
              color: '#0369a1',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #38bdf8',
              paddingBottom: '0.5rem'
            }}>
              Complete Your Adventure
            </h2>
            <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
              Ready to plan your perfect Lake Michigan adventure? Our comprehensive 4-day itinerary covers Indiana Dunes National Park plus nearby attractions, local dining, and outdoor activities.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href="/indiana-dunes-itinerary"
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #0369a1, #38bdf8)',
                  color: 'white',
                  textDecoration: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '0.75rem',
                  fontWeight: '600',
                  transition: 'transform 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
              >
                🏖️ Get Your Complete 4-Day Itinerary
              </a>
              <a 
                href="https://www.nps.gov/indu/index.htm"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #0369a1, #38bdf8)',
                  color: 'white',
                  textDecoration: 'none',
                  padding: '1rem 2rem',
                  borderRadius: '0.75rem',
                  fontWeight: '600',
                  transition: 'transform 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
              >
                🏛️ Official NPS Website
              </a>
            </div>
          </section>

          {/* User Feedback & Photos Section - React Component */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#0369a1',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #38bdf8',
              paddingBottom: '0.5rem'
            }}>
              Visitor Feedback & Reviews
            </h2>
            <FeedbackForm parkSlug="indiana-dunes" />
          </section>
        </main>
      </div>
    </div>
  );
};

export default IndianaDunesReactTemplate;