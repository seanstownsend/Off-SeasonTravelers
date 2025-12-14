import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const CuyahogaValleyReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #6b7280, #4b5563)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Cuyahoga Valley National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Discover Ohio's only national park during October, November, March, April - incredible Towpath Trail biking, scenic railroad, peaceful waterfalls
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
              color: '#6b7280',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #9ca3af',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Cuyahoga Valley National Park like never before during October, November, March, April. Here's why off-season travel offers the ultimate Ohio adventure:
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
                <h3 style={{ color: '#6b7280', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🚴 Towpath Trail Paradise</h3>
                <p>Enjoy the 20-mile Towpath Trail without summer crowds - perfect weather for biking and walking along the historic canal.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#6b7280', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🚂 Scenic Railroad Magic</h3>
                <p>Experience the Cuyahoga Valley Scenic Railroad with stunning fall foliage views and comfortable temperatures for outdoor seating.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#6b7280', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>💦 Brandywine Falls Serenity</h3>
                <p>Visit Ohio's most famous waterfall in peaceful solitude - perfect for photography without summer tourist crowds.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#6b7280', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>💰 Ohio Value</h3>
                <p>Save on accommodations in Akron and Peninsula. Off-season rates can be 30-50% lower than peak summer prices.</p>
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
              [Cuyahoga Valley off-season landscape photo]<br />
              <em>Towpath Trail with fall colors and Brandywine Falls</em>
            </div>
          </section>

          {/* Weather Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#059669',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #22c55e',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Weather
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Plan your visit with confidence using our detailed weather data for Cuyahoga Valley during October, November, March, April:
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
                  <tr style={{ backgroundColor: '#059669', color: 'white' }}>
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
                    <td style={{ padding: '1rem' }}>50°F</td>
                    <td style={{ padding: '1rem' }}>30°F</td>
                    <td style={{ padding: '1rem' }}>3.2 inches</td>
                    <td style={{ padding: '1rem' }}>Cool, great for hiking</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>April</td>
                    <td style={{ padding: '1rem' }}>62°F</td>
                    <td style={{ padding: '1rem' }}>40°F</td>
                    <td style={{ padding: '1rem' }}>3.4 inches</td>
                    <td style={{ padding: '1rem' }}>Perfect biking weather</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>October</td>
                    <td style={{ padding: '1rem' }}>64°F</td>
                    <td style={{ padding: '1rem' }}>43°F</td>
                    <td style={{ padding: '1rem' }}>2.8 inches</td>
                    <td style={{ padding: '1rem' }}>Ideal, peak fall colors</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>November</td>
                    <td style={{ padding: '1rem' }}>52°F</td>
                    <td style={{ padding: '1rem' }}>34°F</td>
                    <td style={{ padding: '1rem' }}>3.1 inches</td>
                    <td style={{ padding: '1rem' }}>Crisp, clear trail days</td>
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
              color: '#059669',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #22c55e',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Tips
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Make the most of your Cuyahoga Valley National Park off-season adventure with these essential tips:
            </p>
            
            <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Layer Your Clothing</strong><br />
                Ohio weather can be unpredictable. Bring layers for temperature changes and waterproof gear for potential rain.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Check Trail Conditions</strong><br />
                Some sections of the Towpath Trail may be closed for maintenance. Check the park website before your visit.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Rent or Bring Bikes</strong><br />
                The Towpath Trail is perfect for biking. Rent bikes in Peninsula or bring your own for the best experience.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Plan Your Railroad Experience</strong><br />
                The Cuyahoga Valley Scenic Railroad runs limited schedules in off-season. Book tickets in advance.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Explore Peninsula Village</strong><br />
                This charming village offers dining and shopping. It's the perfect base for your Towpath Trail adventures.
              </li>
            </ol>
          </section>

          {/* Before You Go Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#059669',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #22c55e',
              paddingBottom: '0.5rem'
            }}>
              Before You Go
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Essential pre-trip checklist for your Cuyahoga Valley National Park off-season adventure:
            </p>
            
            <h3 style={{ color: '#15803d', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Reservations & Permits</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Park entrance is free - no admission fee required</li>
              <li>Book scenic railroad tickets in advance online</li>
              <li>Reserve accommodations in Akron or Peninsula</li>
              <li>Check visitor center hours for off-season schedule</li>
            </ul>

            <h3 style={{ color: '#15803d', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Gear & Equipment</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Comfortable walking or hiking shoes with good traction</li>
              <li>Layered clothing system for changing weather</li>
              <li>Waterproof jacket and rain gear</li>
              <li>Bike or bike rental reservation</li>
              <li>Camera for waterfall and railroad photography</li>
            </ul>

            <h3 style={{ color: '#15803d', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Safety Considerations</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Download offline maps (cell service can be spotty on trails)</li>
              <li>Check weather forecast and dress appropriately</li>
              <li>Stay on designated trails, especially near waterfalls</li>
              <li>Inform someone of your hiking plans</li>
              <li>Carry water and snacks for longer trail excursions</li>
            </ul>
          </section>

          {/* 3-Day Off-Season Itinerary Overview */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#059669',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #22c55e',
              paddingBottom: '0.5rem'
            }}>
              3-Day Off-Season Itinerary Overview
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Ohio's only national park with this comprehensive 3-day off-season adventure:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              margin: '1.5rem 0'
            }}>
              <div style={{
                background: '#f0fdf4',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #22c55e'
              }}>
                <h3 style={{ color: '#047857', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🚴 Day 1: Towpath Trail Adventure</h3>
                <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                  <li>Canal Visitor Center orientation</li>
                  <li>Towpath Trail biking or walking</li>
                  <li>Historic Locks and canal history</li>
                  <li>Peninsula village exploration</li>
                </ul>
              </div>
              <div style={{
                background: '#f0fdf4',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #22c55e'
              }}>
                <h3 style={{ color: '#047857', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🚂 Day 2: Scenic Railroad & Falls</h3>
                <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                  <li>Cuyahoga Valley Scenic Railroad ride</li>
                  <li>Brandywine Falls 65-foot cascade</li>
                  <li>Stanford Trail easy hiking</li>
                  <li>Historic Boston Mills area</li>
                </ul>
              </div>
              <div style={{
                background: '#f0fdf4',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #22c55e'
              }}>
                <h3 style={{ color: '#047857', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🥾 Day 3: Ledges & Blue Hen Falls</h3>
                <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                  <li>The Ledges dramatic rock formations</li>
                  <li>Blue Hen Falls hidden waterfall</li>
                  <li>Buckeye Trail connections</li>
                  <li>Peaceful off-season forest walks</li>
                </ul>
              </div>
            </div>

          </section>

          {/* Off-Season Trade-Offs Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#059669',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #22c55e',
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
                background: '#f0fdf4',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #22c55e'
              }}>
                <h3 style={{ color: '#15803d', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>✅ Advantages</h3>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li>Perfect biking weather on Towpath Trail without summer heat</li>
                  <li>Scenic railroad with stunning fall foliage or spring wildflowers</li>
                  <li>Peaceful waterfall visits at Brandywine and Blue Hen Falls</li>
                  <li>Significant savings on Akron and Peninsula accommodations</li>
                  <li>Comfortable temperatures for hiking and outdoor activities</li>
                  <li>Authentic local experiences without tourist crowds</li>
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
                  <li>Some visitor center hours may be reduced</li>
                  <li>Weather can change rapidly, especially in spring</li>
                  <li>Shorter daylight hours in fall and early spring</li>
                  <li>Some seasonal activities may be unavailable</li>
                  <li>Trail conditions can vary with weather</li>
                  <li>Limited dining options in Peninsula during off-season</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Itinerary Link Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#059669',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #22c55e',
              paddingBottom: '0.5rem'
            }}>
              2-3 Day Itinerary
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Ready to plan your perfect Cuyahoga Valley National Park off-season adventure? Our detailed itinerary covers the Towpath Trail, scenic railroad, and waterfalls.
            </p>
            
            <a 
              href="/cuyahoga-valley-itinerary"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #059669, #22c55e)',
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
              color: '#059669',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #22c55e',
              paddingBottom: '0.5rem'
            }}>
              Visitor Feedback & Reviews
            </h2>
            <FeedbackForm parkSlug="cuyahoga-valley" />
          </section>
        </main>
      </div>
    </div>
  );
};

export default CuyahogaValleyReactTemplate;