import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const HawaiiVolcanoesReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #dc2626, #f97316)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Hawaii Volcanoes National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Experience active volcanism on the Big Island during September, October, April, May - perfect weather, fewer crowds, incredible lava experiences
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
              color: '#dc2626',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #f97316',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Hawaii Volcanoes National Park during the ideal shoulder seasons of September, October, April, May. Here's why off-season travel offers the ultimate volcanic adventure:
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
                <h3 style={{ color: '#dc2626', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🌋 Active Volcanic Wonders</h3>
                <p>Witness Kilauea's ongoing eruption, explore lava tubes, and experience the raw power of volcanic creation without summer's intense crowds and heat.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#dc2626', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>💰 Island Savings</h3>
                <p>Save up to 40% on Big Island accommodations and car rentals during off-season months, plus enjoy better availability at popular resorts.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#dc2626', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>📸 Perfect Photography</h3>
                <p>Capture glowing lava flows, steam vents, and crater views without crowds blocking viewpoints. Cooler temperatures mean comfortable hiking to photography spots.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#dc2626', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🌺 Comfortable Climate</h3>
                <p>Enjoy ideal hiking temperatures (70-80°F) instead of summer's oppressive heat and humidity. Less rain and more sunshine for outdoor activities.</p>
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
              [Hawaii Volcanoes off-season landscape photo]<br />
              <em>Kilauea Crater glowing at sunset with minimal crowds</em>
            </div>
          </section>

          {/* Off-Season Trade-Offs Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#dc2626',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #f97316',
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
                border: '1px solid #f97316'
              }}>
                <h3 style={{ color: '#dc2626', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>✅ Advantages</h3>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li>Perfect hiking weather with comfortable temperatures (70-80°F)</li>
                  <li>Fewer crowds at popular volcanic viewpoints and trails</li>
                  <li>Significant savings (30-40% off) on Big Island accommodations</li>
                  <li>Better visibility for lava viewing and crater observation</li>
                  <li>More personalized ranger programs and tours</li>
                  <li>Ideal conditions for stargazing from Mauna Loa</li>
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
                  <li>Volcanic activity is unpredictable - areas may close suddenly</li>
                  <li>Trade winds can bring volcanic gases (vog) to some areas</li>
                  <li>Ocean conditions may be rougher during winter months</li>
                  <li>Some island tour operators may have reduced schedules</li>
                  <li>Occasional rain showers, especially in rainforest areas</li>
                  <li>Fewer flight options and higher airfares during some periods</li>
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
              borderBottom: '3px solid #f97316',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Weather
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Plan your visit with confidence using our detailed weather data for Hawaii Volcanoes National Park during September, October, April, May:
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
                    <td style={{ padding: '1rem', fontWeight: '600' }}>April</td>
                    <td style={{ padding: '1rem' }}>79°F</td>
                    <td style={{ padding: '1rem' }}>65°F</td>
                    <td style={{ padding: '1rem' }}>3.1 inches</td>
                    <td style={{ padding: '1rem' }}>Pleasant, less humid</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>May</td>
                    <td style={{ padding: '1rem' }}>81°F</td>
                    <td style={{ padding: '1rem' }}>67°F</td>
                    <td style={{ padding: '1rem' }}>2.8 inches</td>
                    <td style={{ padding: '1rem' }}>Dry, ideal hiking weather</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>September</td>
                    <td style={{ padding: '1rem' }}>83°F</td>
                    <td style={{ padding: '1rem' }}>69°F</td>
                    <td style={{ padding: '1rem' }}>3.5 inches</td>
                    <td style={{ padding: '1rem' }}>Warm, decreasing humidity</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>October</td>
                    <td style={{ padding: '1rem' }}>82°F</td>
                    <td style={{ padding: '1rem' }}>68°F</td>
                    <td style={{ padding: '1rem' }}>4.2 inches</td>
                    <td style={{ padding: '1rem' }}>Perfect temperatures, trade winds</td>
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
              borderBottom: '3px solid #f97316',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Tips
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Make the most of your Hawaii Volcanoes National Park off-season adventure with these essential tips:
            </p>
            
            <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Check Volcanic Activity Daily</strong><br />
                Kilauea's activity changes frequently. Check the park website and USGS volcano updates for current conditions and any area closures before visiting.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Respect Volcanic Hazards</strong><br />
                Stay on marked trails and respect all barriers. Volcanic gases can be dangerous, and lava surfaces are extremely hot and unstable.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Plan for Elevation Changes</strong><br />
                Temperatures drop significantly with elevation. Bring warm layers for Mauna Loa summit area where it can be 30°F cooler than sea level.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Bring Sun Protection</strong><br />
                High elevation and reflected heat from lava rock intensify UV exposure. Use high SPF sunscreen, hat, and sunglasses throughout your visit.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Stay Hydrated and Prepared</strong><br />
                Volcanic landscapes offer little shade and can be dehydrating. Carry extra water and snacks for longer hikes and lava viewing.
              </li>
            </ol>
          </section>

          {/* Before You Go Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#dc2626',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #f97316',
              paddingBottom: '0.5rem'
            }}>
              Before You Go
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Essential pre-trip checklist for your Hawaii Volcanoes National Park off-season adventure:
            </p>
            
            <h3 style={{ color: '#dc2626', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Reservations & Permits</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Park entrance pass or America the Beautiful Annual Pass</li>
              <li>Reserve Big Island accommodations in Hilo or Volcano Village</li>
              <li>Book rental car well in advance (limited availability on Big Island)</li>
              <li>No camping reservations needed (first-come, first-served)</li>
            </ul>

            <h3 style={{ color: '#dc2626', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Gear & Equipment</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Layered clothing for elevation changes (sea level to 13,000+ feet)</li>
              <li>Sturdy hiking boots with good grip for lava rock surfaces</li>
              <li>High SPF sunscreen and sun protection gear</li>
              <li>Headlamp or flashlight for early morning/evening crater viewing</li>
              <li>Camera with extra batteries and memory cards</li>
              <li>Reusable water bottles and electrolyte supplements</li>
            </ul>

            <h3 style={{ color: '#dc2626', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Safety Considerations</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Check current volcanic activity and park alerts before visiting</li>
              <li>Stay on marked trails - lava surfaces can be unstable and extremely hot</li>
              <li>Be aware of volcanic gases (SO2) that can cause breathing issues</li>
              <li>Carry extra water for volcanic desert conditions</li>
              <li>Inform someone of your hiking plans and expected return time</li>
            </ul>
          </section>

          {/* Itinerary Link Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#dc2626',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #f97316',
              paddingBottom: '0.5rem'
            }}>
              6-Day Big Island Adventure
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Ready to plan your perfect Big Island adventure? Our comprehensive 6-day itinerary covers Hawaii Volcanoes National Park plus Hilo waterfalls, Mauna Kea stargazing, Kona Coast, and cultural experiences.
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <a 
                href="/hawaii-volcanoes-itinerary"
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #dc2626, #f97316)',
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
                🌋 Get Your Complete 6-Day Itinerary
              </a>
              <a 
                href="https://www.nps.gov/havo/index.htm"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #dc2626, #f97316)',
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
              color: '#dc2626',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #f97316',
              paddingBottom: '0.5rem'
            }}>
              Visitor Feedback & Reviews
            </h2>
            <FeedbackForm parkSlug="hawaii-volcanoes" />
          </section>
        </main>
      </div>
    </div>
  );
};

export default HawaiiVolcanoesReactTemplate;