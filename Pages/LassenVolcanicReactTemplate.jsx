import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const LassenVolcanicReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #B91C1C, #DC2626)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Lassen Volcanic National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Experience volcanic wonders and geothermal features during October, November, April, May - dramatic thermal displays, pristine wilderness, and winter recreation opportunities
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
              color: '#ea580c',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #f97316',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Lassen Volcanic National Park like never before during October, November, April, May. Here's why off-season travel offers the ultimate volcanic adventure:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginTop: '2rem'
            }}>
              <div style={{
                background: '#FEF2F2',
                border: '1px solid #FECACA',
                borderRadius: '0.5rem',
                padding: '1.5rem'
              }}>
                <h3 style={{ color: '#B91C1C', fontWeight: '600', marginBottom: '0.75rem' }}>🌋 Active Volcanic Features</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Witness steaming fumaroles, bubbling mud pots, and sulfur springs in their full glory. Cool weather makes volcanic steam more visible and dramatic.
                </p>
              </div>
              
              <div style={{
                background: '#FFF7ED',
                border: '1px solid #FED7AA',
                borderRadius: '0.5rem',
                padding: '1.5rem'
              }}>
                <h3 style={{ color: '#EA580C', fontWeight: '600', marginBottom: '0.75rem' }}>❄️ Winter Recreation</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Cross-country skiing, snowshoeing, and winter photography opportunities in a pristine volcanic landscape covered in snow.
                </p>
              </div>
              
              <div style={{
                background: '#FFFBEB',
                border: '1px solid #FDE68A',
                borderRadius: '0.5rem',
                padding: '1.5rem'
              }}>
                <h3 style={{ color: '#F59E0B', fontWeight: '600', marginBottom: '0.75rem' }}>📸 Clear Visibility</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Crisp mountain air provides excellent visibility for photography and wildlife viewing. Snow-covered peaks create stunning contrasts.
                </p>
              </div>
              
              <div style={{
                background: '#F0FDF4',
                border: '1px solid #BBF7D0',
                borderRadius: '0.5rem',
                padding: '1.5rem'
              }}>
                <h3 style={{ color: '#16A34A', fontWeight: '600', marginBottom: '0.75rem' }}>🦌 Wildlife Activity</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Deer, black bears, and winter birds are more active and visible during cooler months. Track animals in snow-covered terrain.
                </p>
              </div>
            </div>
          </section>

          {/* Weather Guide Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#B91C1C',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #DC2626',
              paddingBottom: '0.5rem'
            }}>
              Weather Guide for Off-Season Months
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
              marginTop: '2rem'
            }}>
              <div style={{
                background: '#FFF1F2',
                border: '1px solid #FECDD3',
                borderRadius: '0.5rem',
                padding: '1.5rem'
              }}>
                <h3 style={{ color: '#BE123C', fontWeight: '600', marginBottom: '1rem' }}>October</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Temperature:</strong> 30-55°F (-1 to 13°C)</p>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Conditions:</strong> Early snow possible at elevation</p>
                <p style={{ fontSize: '0.9rem' }}><strong>Perfect for:</strong> Fall colors, thermal features, wildlife prep for winter</p>
              </div>
              
              <div style={{
                background: '#F0F9FF',
                border: '1px solid #BAE6FD',
                borderRadius: '0.5rem',
                padding: '1.5rem'
              }}>
                <h3 style={{ color: '#0369A1', fontWeight: '600', marginBottom: '1rem' }}>November</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Temperature:</strong> 20-45°F (-7 to 7°C)</p>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Conditions:</strong> Snow begins, road closures possible</p>
                <p style={{ fontSize: '0.9rem' }}><strong>Perfect for:</strong> Snow photography, thermal contrast viewing</p>
              </div>
              
              <div style={{
                background: '#F0FDF4',
                border: '1px solid #BBF7D0',
                borderRadius: '0.5rem',
                padding: '1.5rem'
              }}>
                <h3 style={{ color: '#15803D', fontWeight: '600', marginBottom: '1rem' }}>April</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Temperature:</strong> 25-50°F (-4 to 10°C)</p>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Conditions:</strong> Snow still present, gradual melting</p>
                <p style={{ fontSize: '0.9rem' }}><strong>Perfect for:</strong> Winter recreation, dramatic steam displays</p>
              </div>
              
              <div style={{
                background: '#FFFBEB',
                border: '1px solid #FDE68A',
                borderRadius: '0.5rem',
                padding: '1.5rem'
              }}>
                <h3 style={{ color: '#D97706', fontWeight: '600', marginBottom: '1rem' }}>May</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Temperature:</strong> 35-60°F (2 to 16°C)</p>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Conditions:</strong> Spring awakening, road reopening</p>
                <p style={{ fontSize: '0.9rem' }}><strong>Perfect for:</strong> Wildflower blooms, accessible hiking</p>
              </div>
            </div>
          </section>

          {/* Essential Tips Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#B91C1C',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #DC2626',
              paddingBottom: '0.5rem'
            }}>
              Essential Off-Season Tips
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginTop: '2rem'
            }}>
              <div style={{
                background: '#FEF2F2',
                border: '1px solid #FECACA',
                borderRadius: '0.5rem',
                padding: '1.5rem'
              }}>
                <h3 style={{ color: '#B91C1C', fontWeight: '600', marginBottom: '1rem' }}>🚗 Winter Driving Preparation</h3>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.6', paddingLeft: '1rem' }}>
                  <li>Carry tire chains and know how to install them</li>
                  <li>Check road conditions before departure</li>
                  <li>Fill up gas tank in Red Bluff or Redding</li>
                  <li>Pack emergency winter supplies</li>
                </ul>
              </div>
              
              <div style={{
                background: '#FFF7ED',
                border: '1px solid #FED7AA',
                borderRadius: '0.5rem',
                padding: '1.5rem'
              }}>
                <h3 style={{ color: '#EA580C', fontWeight: '600', marginBottom: '1rem' }}>🌡️ Volcanic Safety Protocols</h3>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.6', paddingLeft: '1rem' }}>
                  <li>Stay on designated trails near thermal features</li>
                  <li>Respect safety barriers around hot springs</li>
                  <li>Be aware of toxic gases near fumaroles</li>
                  <li>Never touch or test thermal water temperature</li>
                </ul>
              </div>
              
              <div style={{
                background: '#F0FDF4',
                border: '1px solid #BBF7D0',
                borderRadius: '0.5rem',
                padding: '1.5rem'
              }}>
                <h3 style={{ color: '#16A34A', fontWeight: '600', marginBottom: '1rem' }}>🎒 Essential Gear Checklist</h3>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.6', paddingLeft: '1rem' }}>
                  <li>Waterproof boots with good traction</li>
                  <li>Layered clothing for temperature changes</li>
                  <li>Headlamp and extra batteries</li>
                  <li>Emergency shelter and first aid kit</li>
                </ul>
              </div>
              
              <div style={{
                background: '#FEF3C7',
                border: '1px solid #FDE68A',
                borderRadius: '0.5rem',
                padding: '1.5rem'
              }}>
                <h3 style={{ color: '#D97706', fontWeight: '600', marginBottom: '1rem' }}>📷 Photography Excellence</h3>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.6', paddingLeft: '1rem' }}>
                  <li>Golden hour lighting on snow-covered peaks</li>
                  <li>Steam visibility enhanced in cold air</li>
                  <li>Protect camera equipment from moisture</li>
                  <li>Capture unique snow and thermal contrasts</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Planning Your Visit Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#B91C1C',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #DC2626',
              paddingBottom: '0.5rem'
            }}>
              Planning Your Off-Season Visit
            </h2>
            
            <div style={{
              background: '#FEF2F2',
              border: '1px solid #FECACA',
              borderRadius: '0.75rem',
              padding: '2rem',
              marginBottom: '2rem'
            }}>
              <h3 style={{ color: '#B91C1C', fontSize: '1.3rem', marginBottom: '1rem' }}>🗓️ Optimal Visit Timing</h3>
              <p style={{ marginBottom: '1rem' }}>
                <strong>Best Overall Experience:</strong> Late October through November for fall colors and early winter conditions, or April through May for spring emergence and excellent snow contrast photography.
              </p>
              <p>
                <strong>Peak Thermal Activity Viewing:</strong> November through March when cold air makes geothermal features most visible and dramatic.
              </p>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              <div style={{
                background: '#FFF7ED',
                border: '1px solid #FED7AA',
                borderRadius: '0.5rem',
                padding: '1.5rem'
              }}>
                <h3 style={{ color: '#EA580C', fontWeight: '600', marginBottom: '1rem' }}>🏨 Lodging Strategy</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                  <strong>In-Park:</strong> Manzanita Lake Campground (seasonal, check availability)
                </p>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                  <strong>Nearby Towns:</strong> Red Bluff, Redding, or Burney (40-60 miles)
                </p>
                <p style={{ fontSize: '0.9rem' }}>
                  <strong>Off-Season Rates:</strong> Up to 50% savings compared to summer peak
                </p>
              </div>
              
              <div style={{
                background: '#F0F9FF',
                border: '1px solid #BAE6FD',
                borderRadius: '0.5rem',
                padding: '1.5rem'
              }}>
                <h3 style={{ color: '#0369A1', fontWeight: '600', marginBottom: '1rem' }}>🚛 Access and Transportation</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                  <strong>Main Access:</strong> Highway 89 from Red Bluff (seasonal closures)
                </p>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                  <strong>Winter Access:</strong> Southwest entrance via Mineral
                </p>
                <p style={{ fontSize: '0.9rem' }}>
                  <strong>Road Conditions:</strong> Check NPS website before travel
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section style={{
            background: 'linear-gradient(135deg, #B91C1C, #DC2626)',
            color: 'white',
            borderRadius: '0.75rem',
            padding: '2.5rem',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Ready for Your Volcanic Adventure?</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: '0.9' }}>
              Experience the raw power of volcanic forces and pristine winter wilderness during the peaceful off-season months
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1rem'
            }}>
              <a 
                href="/lassen-volcanic-itinerary"
                style={{
                  background: 'white',
                  color: '#B91C1C',
                  padding: '0.75rem 2rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontWeight: '600',
                  transition: 'transform 0.2s',
                  display: 'inline-block'
                }}
                onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
              >
                View Complete 3-Day Itinerary
              </a>
              <a 
                href="/national-parks"
                style={{
                  background: 'transparent',
                  color: 'white',
                  padding: '0.75rem 2rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  fontWeight: '600',
                  border: '2px solid white',
                  transition: 'all 0.2s',
                  display: 'inline-block'
                }}
                onMouseOver={(e) => {
                  e.target.style.background = 'white';
                  e.target.style.color = '#B91C1C';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = 'white';
                }}
              >
                Explore More Parks
              </a>
            </div>
          </section>
        </main>
      </div>

      {/* Feedback Form */}
      <FeedbackForm parkName="Lassen Volcanic National Park" />
    </div>
  );
};

export default LassenVolcanicReactTemplate;