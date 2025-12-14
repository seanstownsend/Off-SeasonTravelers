import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const YosemiteReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #d97706, #f59e0b)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Yosemite National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Experience granite cliffs and waterfalls during Yosemite Off-Season - dramatic cascades, clear skies, and peaceful valleys
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
              color: '#d97706',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #f59e0b',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Yosemite National Park like never before during during the park's slower months. Here's why off-season travel offers the ultimate Sierra Nevada adventure:
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
                  💧 Peak Waterfall Season
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Witness Yosemite Falls, Bridalveil Fall, and Vernal Fall at their most dramatic with snowmelt creating thundering cascades.
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
                  🏔️ Clear Mountain Views
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Experience crystal-clear views of Half Dome and El Capitan with reduced summer haze and optimal photography conditions.
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
                  🌲 Peaceful Valley Floor
                </h3>
                <p style={{ color: '#475569', lineHeight: '1.6' }}>
                  Enjoy tranquil walks through Yosemite Valley with significantly fewer crowds and peaceful meadow experiences.
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
                [Yosemite Valley with Half Dome and waterfalls photo]<br />
                <em>Caption: Yosemite Valley during off-season with dramatic waterfalls and clear skies</em>
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
              Plan your visit with confidence using our detailed weather data for Yosemite National Park during April, May, September, October:
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
                  <span style={{ color: '#451a03' }}> 45-65°F (7-18°C)</span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#92400e' }}>Conditions:</strong>
                  <span style={{ color: '#451a03' }}> Cool mornings, mild days, peak waterfall flow</span>
                </div>
                <div>
                  <strong style={{ color: '#92400e' }}>Best For:</strong>
                  <span style={{ color: '#451a03' }}> Waterfall viewing, valley hiking, photography</span>
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
                  <span style={{ color: '#7f1d1d' }}> 40-60°F (4-16°C)</span>
                </div>
                <div style={{ marginBottom: '0.75rem' }}>
                  <strong style={{ color: '#b91c1c' }}>Conditions:</strong>
                  <span style={{ color: '#7f1d1d' }}> Crisp air, clear skies, autumn colors</span>
                </div>
                <div>
                  <strong style={{ color: '#b91c1c' }}>Best For:</strong>
                  <span style={{ color: '#7f1d1d' }}> Rock climbing, backpacking, stargazing</span>
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
              Make the most of your Yosemite National Park off-season adventure with these essential tips:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                {
                  title: "Tioga Pass Closures",
                  content: "High country roads may be closed due to snow. Check road conditions and plan valley floor activities as alternatives during early season visits."
                },
                {
                  title: "Waterfall Photography",
                  content: "Bring tripod for waterfall shots. Spring offers peak flows while fall provides golden hour lighting. Early morning visits avoid crowds."
                },
                {
                  title: "Wildlife Awareness",
                  content: "Bears are active during spring and fall. Store food properly and keep clean campsites. Carry bear spray for backcountry activities."
                },
                {
                  title: "Elevation Changes",
                  content: "Temperatures drop significantly with elevation. Pack layers for valley floor (4,000 ft) to high country (8,000+ ft) adventures."
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
              Essential preparation checklist for your Yosemite National Park off-season adventure:
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
                  <li>Park entrance reservations (required April-October)</li>
                  <li>Camping reservations at Upper Pines or Bridalveil Creek</li>
                  <li>Wilderness permits for backcountry hiking</li>
                  <li>Lodging reservations in Yosemite Valley (book months ahead)</li>
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
                  <li>Layered clothing for variable mountain weather</li>
                  <li>Waterproof hiking boots with good traction</li>
                  <li>Camera with telephoto lens for wildlife and landscapes</li>
                  <li>Bear canister for food storage (required in wilderness)</li>
                </ul>
              </div>

              {/* Safety & Weather */}
              <div style={{
                background: '#fef2f2',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #ef4444'
              }}>
                <h3 style={{ color: '#b91c1c', fontSize: '1.2rem', marginBottom: '1rem' }}>
                  ⚠️ Safety & Weather
                </h3>
                <ul style={{ color: '#7f1d1d', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                  <li>Check road closures and weather conditions before travel</li>
                  <li>Carry emergency supplies for sudden weather changes</li>
                  <li>Practice Leave No Trace principles in wilderness areas</li>
                  <li>Inform others of hiking plans and expected return times</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Articles to help You Plan Your Adventure Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#1e40af',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #3b82f6',
              paddingBottom: '0.5rem'
            }}>
              Articles to help You Plan Your Adventure
            </h2>
            <p style={{ marginBottom: '1.5rem', color: '#475569' }}>
              Discover expert insights and travel tips to enhance your Yosemite National Park experience:
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '1.5rem'
            }}>
              {/* Featured Article */}
              <div style={{
                background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)',
                border: '1px solid #0284c7',
                borderRadius: '0.75rem',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onClick={() => window.open('https://www.thetravel.com/skip-arches-and-zion-yosemite-national-park-best-to-visit-in-winter-according-to-someone-whos-been/', '_blank')}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 8px 25px -3px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              }}
              >
                {/* Article Header */}
                <div style={{
                  background: 'linear-gradient(135deg, #0284c7, #0369a1)',
                  color: 'white',
                  padding: '1.5rem',
                  position: 'relative'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.75rem'
                  }}>
                    <span style={{ fontSize: '1.2rem' }}>📰</span>
                    <span style={{
                      fontSize: '0.8rem',
                      background: 'rgba(255,255,255,0.2)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '1rem',
                      fontWeight: '500'
                    }}>
                      Featured Article
                    </span>
                  </div>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    margin: 0,
                    lineHeight: '1.4'
                  }}>
                    Skip Arches and Zion: Why Yosemite Should Be Your Next National Park Adventure
                  </h3>
                </div>

                {/* Article Content */}
                <div style={{ padding: '1.5rem' }}>
                  <p style={{
                    color: '#475569',
                    lineHeight: '1.6',
                    margin: '0 0 1rem 0',
                    fontSize: '0.95rem'
                  }}>
                    Discover why experienced park visitors recommend Yosemite over more crowded destinations. Learn insider tips about the best times to visit, hidden gems, and what makes this Sierra Nevada paradise truly special.
                  </p>
                  
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '1rem',
                    borderTop: '1px solid #e2e8f0'
                  }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#64748b',
                      fontSize: '0.85rem'
                    }}>
                      <span>🌐</span>
                      <span>TheTravel.com</span>
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#0284c7',
                      fontSize: '0.9rem',
                      fontWeight: '500'
                    }}>
                      <span>Read Article</span>
                      <span style={{ fontSize: '0.8rem' }}>↗</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call-to-action for more articles */}
            <div style={{
              marginTop: '1.5rem',
              textAlign: 'center',
              padding: '1.5rem',
              background: '#f8fafc',
              borderRadius: '0.5rem',
              border: '1px solid #e2e8f0'
            }}>
              <p style={{
                color: '#64748b',
                fontSize: '0.9rem',
                margin: '0 0 0.5rem 0'
              }}>
                More travel articles and guides coming soon to help you plan the perfect off-season adventure!
              </p>
              <div style={{
                color: '#3b82f6',
                fontSize: '0.85rem',
                fontWeight: '500'
              }}>
                📚 Stay tuned for expert tips and destination guides
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
              Ready to Plan Your Yosemite Adventure?
            </h2>
            <p style={{ color: '#475569', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
              Ready to plan your ultimate Yosemite National Park off-season adventure? Our detailed itinerary covers everything from waterfall hikes to granite dome climbing.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href="/yosemite-itinerary"
                style={{
                  background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
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
                Plan your itinerary →
              </a>
              <a 
                href="https://www.nps.gov/yose/index.htm"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(135deg, #1e40af, #3b82f6)',
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
                Official NPS Site ↗
              </a>
            </div>
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
            <FeedbackForm parkSlug="yosemite" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default YosemiteReactTemplate;