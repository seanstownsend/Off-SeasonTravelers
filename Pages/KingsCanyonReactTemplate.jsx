import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const KingsCanyonReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #059669, #10B981)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Kings Canyon National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Experience giant sequoias and deep granite canyons during October, November, April, May - majestic trees, pristine wilderness, and winter wonderlands
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
              color: '#059669',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #10B981',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Kings Canyon National Park like never before during October, November, April, May. Here's why off-season travel offers the ultimate giant sequoia and canyon adventure:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginTop: '2rem'
            }}>
              <div style={{
                background: '#F0FDF4',
                border: '1px solid #BBF7D0',
                borderRadius: '0.5rem',
                padding: '1.5rem'
              }}>
                <h3 style={{ color: '#059669', fontWeight: '600', marginBottom: '0.75rem' }}>🌲 Giant Sequoia Encounters</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Experience peaceful, crowd-free encounters with the world's largest trees. Snow-dusted sequoias create magical winter scenes perfect for photography.
                </p>
              </div>
              
              <div style={{
                background: '#F8FAFC',
                border: '1px solid #CBD5E1',
                borderRadius: '0.5rem',
                padding: '1.5rem'
              }}>
                <h3 style={{ color: '#6B7280', fontWeight: '600', marginBottom: '0.75rem' }}>🏔️ Granite Canyon Drama</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Witness the dramatic contrast of snow-covered granite walls rising from deep canyons. Winter lighting creates stunning photographic opportunities.
                </p>
              </div>
              
              <div style={{
                background: '#FFFBEB',
                border: '1px solid #FDE68A',
                borderRadius: '0.5rem',
                padding: '1.5rem'
              }}>
                <h3 style={{ color: '#F59E0B', fontWeight: '600', marginBottom: '0.75rem' }}>❄️ Winter Recreation</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Cross-country skiing and snowshoeing among giant trees. Winter camping and backcountry opportunities for the prepared adventurer.
                </p>
              </div>
              
              <div style={{
                background: '#FEF2F2',
                border: '1px solid #FECACA',
                borderRadius: '0.5rem',
                padding: '1.5rem'
              }}>
                <h3 style={{ color: '#DC2626', fontWeight: '600', marginBottom: '0.75rem' }}>🦌 Wildlife Watching</h3>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Black bears, deer, and mountain wildlife are more active and visible during cooler months. Track animals in snow-covered forest terrain.
                </p>
              </div>
            </div>
          </section>

          {/* Weather Guide Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#059669',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #10B981',
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
                background: '#FFF7ED',
                border: '1px solid #FED7AA',
                borderRadius: '0.5rem',
                padding: '1.5rem'
              }}>
                <h3 style={{ color: '#EA580C', fontWeight: '600', marginBottom: '1rem' }}>October</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Temperature:</strong> 35-60°F (2 to 16°C)</p>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Conditions:</strong> Fall colors, first snow at elevation</p>
                <p style={{ fontSize: '0.9rem' }}><strong>Perfect for:</strong> Photography, hiking accessible trails, autumn foliage</p>
              </div>
              
              <div style={{
                background: '#F0F9FF',
                border: '1px solid #BAE6FD',
                borderRadius: '0.5rem',
                padding: '1.5rem'
              }}>
                <h3 style={{ color: '#0369A1', fontWeight: '600', marginBottom: '1rem' }}>November</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Temperature:</strong> 25-50°F (-4 to 10°C)</p>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Conditions:</strong> Snow begins, road access may be limited</p>
                <p style={{ fontSize: '0.9rem' }}><strong>Perfect for:</strong> Snow photography among sequoias, winter prep</p>
              </div>
              
              <div style={{
                background: '#F0FDF4',
                border: '1px solid #BBF7D0',
                borderRadius: '0.5rem',
                padding: '1.5rem'
              }}>
                <h3 style={{ color: '#16A34A', fontWeight: '600', marginBottom: '1rem' }}>April</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Temperature:</strong> 30-55°F (-1 to 13°C)</p>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Conditions:</strong> Snow still present, spring emergence beginning</p>
                <p style={{ fontSize: '0.9rem' }}><strong>Perfect for:</strong> Winter recreation, dramatic canyon views</p>
              </div>
              
              <div style={{
                background: '#FFFBEB',
                border: '1px solid #FDE68A',
                borderRadius: '0.5rem',
                padding: '1.5rem'
              }}>
                <h3 style={{ color: '#D97706', fontWeight: '600', marginBottom: '1rem' }}>May</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Temperature:</strong> 40-65°F (4 to 18°C)</p>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}><strong>Conditions:</strong> Spring awakening, wildflower season begins</p>
                <p style={{ fontSize: '0.9rem' }}><strong>Perfect for:</strong> Accessible hiking, road reopening, spring photography</p>
              </div>
            </div>
          </section>

          {/* Essential Tips Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#059669',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #10B981',
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
                background: '#F8FAFC',
                border: '1px solid #CBD5E1',
                borderRadius: '0.5rem',
                padding: '1.5rem'
              }}>
                <h3 style={{ color: '#6B7280', fontWeight: '600', marginBottom: '1rem' }}>🚗 Winter Driving Essentials</h3>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.6', paddingLeft: '1rem' }}>
                  <li>Carry tire chains - required in winter conditions</li>
                  <li>Check road closures, especially to Cedar Grove</li>
                  <li>Fill gas tank in Fresno or Visalia before entering</li>
                  <li>Pack emergency winter supplies and food</li>
                </ul>
              </div>
              
              <div style={{
                background: '#F0FDF4',
                border: '1px solid #BBF7D0',
                borderRadius: '0.5rem',
                padding: '1.5rem'
              }}>
                <h3 style={{ color: '#059669', fontWeight: '600', marginBottom: '1rem' }}>🌲 Giant Sequoia Etiquette</h3>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.6', paddingLeft: '1rem' }}>
                  <li>Stay on designated trails to protect root systems</li>
                  <li>Do not climb on or carve into sequoia bark</li>
                  <li>Maintain respectful distance for photography</li>
                  <li>Pack out all trash - Leave No Trace principles</li>
                </ul>
              </div>
              
              <div style={{
                background: '#FEF3C7',
                border: '1px solid #FDE68A',
                borderRadius: '0.5rem',
                padding: '1.5rem'
              }}>
                <h3 style={{ color: '#D97706', fontWeight: '600', marginBottom: '1rem' }}>🎒 Essential Gear Checklist</h3>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.6', paddingLeft: '1rem' }}>
                  <li>Waterproof hiking boots with traction</li>
                  <li>Warm layers for temperature fluctuations</li>
                  <li>Headlamp and backup batteries</li>
                  <li>Camera with extra batteries (cold drains power)</li>
                </ul>
              </div>
              
              <div style={{
                background: '#FEF2F2',
                border: '1px solid #FECACA',
                borderRadius: '0.5rem',
                padding: '1.5rem'
              }}>
                <h3 style={{ color: '#DC2626', fontWeight: '600', marginBottom: '1rem' }}>📷 Photography Excellence</h3>
                <ul style={{ fontSize: '0.9rem', lineHeight: '1.6', paddingLeft: '1rem' }}>
                  <li>Golden hour lighting on granite canyon walls</li>
                  <li>Snow contrast enhances sequoia photography</li>
                  <li>Protect camera equipment from moisture</li>
                  <li>Capture scale using people or objects for reference</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cedar Grove Information */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#059669',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #10B981',
              paddingBottom: '0.5rem'
            }}>
              Cedar Grove Seasonal Access
            </h2>
            
            <div style={{
              background: '#FEF3C7',
              border: '1px solid #FDE68A',
              borderRadius: '0.75rem',
              padding: '2rem',
              marginBottom: '2rem'
            }}>
              <h3 style={{ color: '#D97706', fontSize: '1.3rem', marginBottom: '1rem' }}>🛣️ Kings Canyon Scenic Byway</h3>
              <p style={{ marginBottom: '1rem' }}>
                <strong>Winter Closure:</strong> The road to Cedar Grove (Kings Canyon Scenic Byway) typically closes from November through April due to snow conditions. This affects access to the deeper canyon areas and some of the most dramatic granite formations.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                <strong>Alternative Access:</strong> Grant Grove area remains accessible year-round and offers excellent giant sequoia experiences, including the famous General Grant Tree.
              </p>
              <p>
                <strong>Spring Reopening:</strong> Road typically reopens in late April or May, weather permitting. Check current conditions before traveling.
              </p>
            </div>
          </section>

          {/* Planning Your Visit Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#059669',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #10B981',
              paddingBottom: '0.5rem'
            }}>
              Planning Your Off-Season Visit
            </h2>
            
            <div style={{
              background: '#F0FDF4',
              border: '1px solid #BBF7D0',
              borderRadius: '0.75rem',
              padding: '2rem',
              marginBottom: '2rem'
            }}>
              <h3 style={{ color: '#059669', fontSize: '1.3rem', marginBottom: '1rem' }}>🗓️ Optimal Visit Timing</h3>
              <p style={{ marginBottom: '1rem' }}>
                <strong>Best Overall Experience:</strong> Late October through November for fall colors and accessible roads, or April through May for spring emergence and dramatic snow contrasts with sequoias.
              </p>
              <p>
                <strong>Peak Photography Season:</strong> November through March when snow creates dramatic contrasts against the giant sequoia bark and granite formations.
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
                  <strong>In-Park:</strong> Grant Grove Cabins (limited winter availability)
                </p>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                  <strong>Gateway Towns:</strong> Fresno, Visalia, or Three Rivers (45-70 miles)
                </p>
                <p style={{ fontSize: '0.9rem' }}>
                  <strong>Off-Season Rates:</strong> Significant savings compared to summer peak season
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
                  <strong>Main Access:</strong> Highway 180 from Fresno (year-round to Grant Grove)
                </p>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                  <strong>Cedar Grove:</strong> Seasonal access only (April-November typically)
                </p>
                <p style={{ fontSize: '0.9rem' }}>
                  <strong>Winter Access:</strong> Grant Grove area accessible, but prepare for snow conditions
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section style={{
            background: 'linear-gradient(135deg, #059669, #10B981)',
            color: 'white',
            borderRadius: '0.75rem',
            padding: '2.5rem',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Ready for Your Giant Sequoia Adventure?</h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: '0.9' }}>
              Experience the majesty of the world's largest trees and dramatic granite canyons during the peaceful off-season months
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1rem'
            }}>
              <a 
                href="/kings-canyon-itinerary"
                style={{
                  background: 'white',
                  color: '#059669',
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
                  e.target.style.color = '#059669';
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
      <FeedbackForm parkName="Kings Canyon National Park" />
    </div>
  );
};

export default KingsCanyonReactTemplate;