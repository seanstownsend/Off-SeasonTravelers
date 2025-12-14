import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const ShenandoahReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Shenandoah National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Discover Virginia's Blue Ridge Mountains during October, November, March, April - spectacular Skyline Drive, peaceful waterfalls, amazing hiking
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
              color: '#8b4513',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #a0522d',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Shenandoah National Park like never before during October, November, March, April. Here's why off-season travel offers the ultimate Blue Ridge Mountains adventure:
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
                <h3 style={{ color: '#6b21a8', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🚗 Skyline Drive Serenity</h3>
                <p>Experience the 105-mile Skyline Drive with minimal traffic and stunning fall foliage or spring wildflowers at every overlook.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#6b21a8', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🏔️ Blue Ridge Beauty</h3>
                <p>Witness the Blue Ridge Mountains in their full glory - dramatic fall colors in October or vibrant wildflowers in April.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#6b21a8', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>💦 Waterfall Wonder</h3>
                <p>Enjoy peaceful waterfall hikes to Dark Hollow Falls and Whiteoak Canyon without summer crowds blocking your photos.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#6b21a8', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>💰 Virginia Savings</h3>
                <p>Save substantially on Luray and Front Royal accommodations. Off-season rates can be 40-60% lower than peak summer prices.</p>
              </div>
            </div>

            <div style={{
              background: '#f3f4f6',
              border: '2px dashed #4b5563',
              borderRadius: '0.75rem',
              padding: '3rem',
              textAlign: 'center',
              color: '#4b5563',
              margin: '1.5rem 0'
            }}>
              [Shenandoah off-season landscape photo]<br />
              <em>Skyline Drive overlook with Blue Ridge Mountains and fall foliage</em>
            </div>
          </section>

          {/* Weather Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#7c3aed',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #a855f7',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Weather
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Plan your visit with confidence using our detailed weather data for Shenandoah National Park during October, November, March, April:
            </p>
            
            <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse',
                background: 'white',
                borderRadius: '0.75rem',
                overflow: 'hidden',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}>
                <thead>
                  <tr style={{ backgroundColor: '#7c3aed', color: 'white' }}>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Month</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Avg High (°F)</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Avg Low (°F)</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Precipitation</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Conditions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>March</td>
                    <td style={{ padding: '1rem' }}>54°F</td>
                    <td style={{ padding: '1rem' }}>31°F</td>
                    <td style={{ padding: '1rem' }}>3.5 inches</td>
                    <td style={{ padding: '1rem' }}>Cool, wildflowers emerging</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>April</td>
                    <td style={{ padding: '1rem' }}>64°F</td>
                    <td style={{ padding: '1rem' }}>39°F</td>
                    <td style={{ padding: '1rem' }}>3.2 inches</td>
                    <td style={{ padding: '1rem' }}>Pleasant, perfect hiking</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>October</td>
                    <td style={{ padding: '1rem' }}>66°F</td>
                    <td style={{ padding: '1rem' }}>42°F</td>
                    <td style={{ padding: '1rem' }}>3.1 inches</td>
                    <td style={{ padding: '1rem' }}>Ideal, peak fall colors</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>November</td>
                    <td style={{ padding: '1rem' }}>55°F</td>
                    <td style={{ padding: '1rem' }}>32°F</td>
                    <td style={{ padding: '1rem' }}>2.8 inches</td>
                    <td style={{ padding: '1rem' }}>Crisp, clear mountain views</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div style={{
              background: '#f3f4f6',
              border: '2px dashed #4b5563',
              borderRadius: '0.75rem',
              padding: '3rem',
              textAlign: 'center',
              color: '#4b5563',
              margin: '1.5rem 0'
            }}>
              [Weather chart showing seasonal temperature variations]<br />
              <em>Temperature and precipitation graphs for off-season months</em>
            </div>
          </section>

          {/* Off-Season Tips Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#7c3aed',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #a855f7',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Tips
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Make the most of your Shenandoah National Park off-season adventure with these essential tips:
            </p>
            
            <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Check Skyline Drive Conditions</strong><br />
                Weather can close sections of Skyline Drive. Check the park website and call ahead before traveling.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Layer Your Clothing</strong><br />
                Mountain temperatures can vary significantly by elevation. Bring layers and be prepared for 20+ degree differences.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Start Early for Best Light</strong><br />
                Fall and spring offer shorter days. Start hiking early to maximize daylight and capture the best photography light.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Pack Emergency Supplies</strong><br />
                Weather changes rapidly in the mountains. Carry extra food, water, and warm clothing for longer hikes.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Explore Less Crowded Areas</strong><br />
                Visit the quieter southern section of Skyline Drive and lesser-known waterfalls for true solitude.
              </li>
            </ol>
          </section>

          {/* Before You Go Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#7c3aed',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #a855f7',
              paddingBottom: '0.5rem'
            }}>
              Before You Go
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Essential pre-trip checklist for your Shenandoah National Park off-season adventure:
            </p>
            
            <h3 style={{ color: '#7c3aed', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Reservations & Permits</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Park entrance pass or America the Beautiful Annual Pass</li>
              <li>Reserve accommodations in Luray, Front Royal, or nearby gateway towns</li>
              <li>Check lodging availability (many park facilities close in off-season)</li>
              <li>Book Luray Caverns tours if interested in underground exploration</li>
            </ul>

            <h3 style={{ color: '#7c3aed', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Gear & Equipment</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Layered clothing system for mountain temperature changes</li>
              <li>Waterproof hiking boots with good ankle support</li>
              <li>Rain jacket and weather protection</li>
              <li>Camera with extra batteries for scenic overlooks</li>
              <li>Headlamp or flashlight for early morning/late evening hikes</li>
            </ul>

            <h3 style={{ color: '#7c3aed', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Safety Considerations</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Download offline maps (cell service is spotty along Skyline Drive)</li>
              <li>Check weather conditions and Skyline Drive closures before departure</li>
              <li>Inform someone of your hiking plans and expected return time</li>
              <li>Stay on marked trails, especially near waterfalls and cliff edges</li>
              <li>Carry bear spray and know proper food storage techniques</li>
            </ul>
          </section>

          {/* 3-4 Day Off-Season Itinerary Overview */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#7c3aed',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #a855f7',
              paddingBottom: '0.5rem'
            }}>
              3-4 Day Off-Season Itinerary Overview
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Virginia's Blue Ridge Mountains with this comprehensive 3-4 day off-season adventure:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              margin: '1.5rem 0'
            }}>
              <div style={{
                background: '#faf5ff',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #a855f7'
              }}>
                <h3 style={{ color: '#6b21a8', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🚗 Day 1: Skyline Drive North</h3>
                <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                  <li>Dickey Ridge Visitor Center start</li>
                  <li>Skyline Drive scenic mountain views</li>
                  <li>Marys Rock overlook hike</li>
                  <li>Skyland Resort area exploration</li>
                </ul>
              </div>
              <div style={{
                background: '#faf5ff',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #a855f7'
              }}>
                <h3 style={{ color: '#6b21a8', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>💦 Day 2: Central Waterfalls</h3>
                <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                  <li>Dark Hollow Falls 70-foot cascade</li>
                  <li>Whiteoak Canyon series of waterfalls</li>
                  <li>Big Meadows wildlife viewing</li>
                  <li>Byrd Visitor Center exhibits</li>
                </ul>
              </div>
              <div style={{
                background: '#faf5ff',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #a855f7'
              }}>
                <h3 style={{ color: '#6b21a8', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🏔️ Day 3: Southern Skyline</h3>
                <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                  <li>Humpback Rocks spectacular views</li>
                  <li>Rock scrambling adventures</li>
                  <li>Loft Mountain peaceful area</li>
                  <li>Less crowded southern section</li>
                </ul>
              </div>
              <div style={{
                background: '#faf5ff',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #a855f7'
              }}>
                <h3 style={{ color: '#6b21a8', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🥾 Day 4: Old Rag Challenge</h3>
                <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                  <li>Old Rag Mountain epic hike (advanced)</li>
                  <li>Limberlost Trail peaceful alternative</li>
                  <li>Optional Luray Caverns visit</li>
                  <li>Final Blue Ridge Mountain views</li>
                </ul>
              </div>
            </div>

          </section>

          {/* Off-Season Trade-Offs Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#7c3aed',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #a855f7',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Trade-Offs
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              While off-season travel offers incredible benefits, it's important to understand the potential challenges:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              margin: '1.5rem 0'
            }}>
              <div style={{
                background: '#faf5ff',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #a855f7'
              }}>
                <h3 style={{ color: '#7c3aed', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>✅ Advantages</h3>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li>Spectacular fall foliage and spring wildflowers throughout park</li>
                  <li>Peaceful Skyline Drive without summer traffic and crowds</li>
                  <li>Significant savings (40-60% lower) on Luray and Front Royal lodging</li>
                  <li>Perfect hiking temperatures for waterfall and mountain trails</li>
                  <li>Enhanced wildlife viewing opportunities (deer, bear, birds)</li>
                  <li>Dramatic mountain vistas with crisp, clear air</li>
                </ul>
              </div>
              <div style={{
                background: '#fef3c7',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #f59e0b'
              }}>
                <h3 style={{ color: '#92400e', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>⚠️ Considerations</h3>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li>Some facilities and lodges may be closed seasonally</li>
                  <li>Weather can change rapidly in the mountains</li>
                  <li>Some Skyline Drive sections may close during ice/snow</li>
                  <li>Shorter daylight hours limit hiking time</li>
                  <li>Some waterfalls may have reduced flow in late fall</li>
                  <li>Limited dining options within the park during off-season</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Itinerary Link Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#7c3aed',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #a855f7',
              paddingBottom: '0.5rem'
            }}>
              2-3 Day Itinerary
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Ready to plan your perfect Shenandoah National Park off-season adventure? Our detailed itinerary covers Skyline Drive, waterfalls, and scenic overlooks.
            </p>
            
            <a 
              href="/shenandoah-itinerary"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
                color: 'white',
                textDecoration: 'none',
                padding: '1rem 2rem',
                borderRadius: '0.75rem',
                fontWeight: '600',
                transition: 'transform 0.3s ease',
                margin: '1rem 0'
              }}
              onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
            >
              📅 Get Your Complete 2-3 Day Itinerary
            </a>
          </section>

          {/* User Feedback & Photos Section - React Component */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#7c3aed',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #a855f7',
              paddingBottom: '0.5rem'
            }}>
              Visitor Feedback & Reviews
            </h2>
            <FeedbackForm parkSlug="shenandoah" />
          </section>
        </main>
      </div>
    </div>
  );
};

export default ShenandoahReactTemplate;