import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const SaguaroReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #16a34a, #22c55e)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Saguaro National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Discover Arizona's iconic desert landscapes during November, December, January, February - perfect temperatures, fewer crowds, unforgettable experiences
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
              color: '#16a34a',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #22c55e',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Saguaro National Park during the perfect desert weather of November through February. Here's why off-season travel offers the ultimate Sonoran Desert adventure:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              margin: '1.5rem 0'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #dcfce7, #bbf7d0)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #4ade80'
              }}>
                <h3 style={{ color: '#16a34a', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🌵 Perfect Desert Weather</h3>
                <p>Enjoy ideal hiking temperatures (60-75°F) instead of summer's dangerous 115°F+ heat. Experience stunning sunrises and sunsets in comfortable conditions.</p>
              </div>
              <div style={{
                background: 'linear-gradient(135deg, #dcfce7, #bbf7d0)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #4ade80'
              }}>
                <h3 style={{ color: '#16a34a', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>💰 Significant Savings</h3>
                <p>Save up to 50% on Tucson area accommodations and discover local deals unavailable during peak spring season.</p>
              </div>
              <div style={{
                background: 'linear-gradient(135deg, #dcfce7, #bbf7d0)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #4ade80'
              }}>
                <h3 style={{ color: '#16a34a', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>📸 Stunning Photography</h3>
                <p>Capture the iconic saguaro cacti without crowds, plus amazing golden hour lighting and clear desert skies perfect for astrophotography.</p>
              </div>
              <div style={{
                background: 'linear-gradient(135deg, #dcfce7, #bbf7d0)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #4ade80'
              }}>
                <h3 style={{ color: '#16a34a', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🦎 Desert Wildlife Viewing</h3>
                <p>Active season for javelinas, coyotes, and desert birds. Morning hours offer the best wildlife viewing when animals are most active.</p>
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
              [Saguaro off-season landscape photo]<br />
              <em>Towering saguaro cacti silhouetted against desert mountains</em>
            </div>
          </section>

          {/* Off-Season Trade-Offs Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#dc2626',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #f59e0b',
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
                background: '#fef2f2',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #f59e0b'
              }}>
                <h3 style={{ color: '#b91c1c', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>✅ Advantages</h3>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li>Perfect hiking weather (60-75°F vs. 115°F+ in summer)</li>
                  <li>Clear, sunny skies ideal for photography and stargazing</li>
                  <li>Significant savings on Tucson and Phoenix area accommodations</li>
                  <li>Peaceful hiking trails without summer crowds</li>
                  <li>Active wildlife viewing opportunities in cooler temperatures</li>
                  <li>Comfortable desert camping conditions</li>
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
                  <li>Shorter daylight hours limit hiking time</li>
                  <li>Occasional cold fronts can bring cool weather</li>
                  <li>Some desert wildflowers may not be in bloom</li>
                  <li>Morning temperatures can be chilly (40-50°F)</li>
                  <li>Limited visitor center hours during off-season</li>
                  <li>Some desert camping areas may be closed</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Weather Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#dc2626',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #f59e0b',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Weather
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Plan your visit with confidence using our detailed weather data for Saguaro National Park during November, December, January, February:
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
                  <tr style={{ backgroundColor: '#dc2626', color: 'white' }}>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Month</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Avg High (°F)</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Avg Low (°F)</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Precipitation</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Conditions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>November</td>
                    <td style={{ padding: '1rem' }}>75°F</td>
                    <td style={{ padding: '1rem' }}>48°F</td>
                    <td style={{ padding: '1rem' }}>0.5 inches</td>
                    <td style={{ padding: '1rem' }}>Perfect hiking weather</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>December</td>
                    <td style={{ padding: '1rem' }}>65°F</td>
                    <td style={{ padding: '1rem' }}>40°F</td>
                    <td style={{ padding: '1rem' }}>0.8 inches</td>
                    <td style={{ padding: '1rem' }}>Cool, sunny days</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>January</td>
                    <td style={{ padding: '1rem' }}>68°F</td>
                    <td style={{ padding: '1rem' }}>42°F</td>
                    <td style={{ padding: '1rem' }}>0.9 inches</td>
                    <td style={{ padding: '1rem' }}>Mild winter days</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>February</td>
                    <td style={{ padding: '1rem' }}>72°F</td>
                    <td style={{ padding: '1rem' }}>45°F</td>
                    <td style={{ padding: '1rem' }}>0.7 inches</td>
                    <td style={{ padding: '1rem' }}>Warming up, ideal conditions</td>
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
              color: '#dc2626',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #f59e0b',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Tips
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Make the most of your Saguaro National Park off-season adventure with these essential tips:
            </p>
            
            <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Start Early for Best Light</strong><br />
                Begin hiking at sunrise for the best wildlife viewing and photography light. Desert animals are most active in the cooler morning hours.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Layer Your Clothing</strong><br />
                Morning temperatures can be 30+ degrees cooler than afternoon. Bring layers you can easily remove as the day warms up.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Pack Extra Water</strong><br />
                Even in winter, desert air is dry and dehydrating. Bring more water than you think you need, especially for longer hikes.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Explore Both Districts</strong><br />
                Visit both Saguaro East (Rincon Mountain) and Saguaro West (Tucson Mountain) districts for different desert experiences and landscapes.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Plan for Desert Safety</strong><br />
                Stick to marked trails, inform someone of your plans, and be aware that cell phone coverage is limited in remote areas.
              </li>
            </ol>
          </section>

          {/* Before You Go Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#dc2626',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #f59e0b',
              paddingBottom: '0.5rem'
            }}>
              Before You Go
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Essential pre-trip checklist for your Saguaro National Park off-season adventure:
            </p>
            
            <h3 style={{ color: '#b91c1c', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Reservations & Permits</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Park entrance pass or America the Beautiful Annual Pass</li>
              <li>Reserve accommodations in Tucson (no lodging inside the park)</li>
              <li>Book camping permits for nearby state parks if camping</li>
              <li>Check visitor center hours (may be reduced in off-season)</li>
            </ul>

            <h3 style={{ color: '#b91c1c', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Gear & Equipment</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Layered clothing system for temperature changes</li>
              <li>Sturdy hiking boots with ankle support</li>
              <li>Sun hat and high SPF sunscreen (desert sun is intense)</li>
              <li>Extra water bottles and electrolyte supplements</li>
              <li>Binoculars for wildlife and landscape viewing</li>
              <li>Camera with extra batteries for desert photography</li>
            </ul>

            <h3 style={{ color: '#b91c1c', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Safety Considerations</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Download offline maps (cell service can be spotty)</li>
              <li>Inform someone of your hiking plans and expected return</li>
              <li>Learn to identify desert hazards (cacti, rattlesnakes, javelinas)</li>
              <li>Carry a whistle and basic first aid supplies</li>
              <li>Check weather forecasts for cold fronts or storms</li>
            </ul>
          </section>

          {/* Itinerary Link Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#dc2626',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #f59e0b',
              paddingBottom: '0.5rem'
            }}>
              2-3 Day Itinerary
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Ready to plan your perfect Saguaro National Park off-season adventure? Our detailed itinerary covers both park districts and the best desert experiences.
            </p>
            
            <a 
              href="/saguaro-itinerary"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #dc2626, #f59e0b)',
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
              🌵 Get Your Complete 2-3 Day Itinerary
            </a>
          </section>

          {/* User Feedback & Photos Section - React Component */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#dc2626',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #f59e0b',
              paddingBottom: '0.5rem'
            }}>
              Visitor Feedback & Reviews
            </h2>
            <FeedbackForm parkSlug="saguaro" />
          </section>
        </main>
      </div>
    </div>
  );
};

export default SaguaroReactTemplate;