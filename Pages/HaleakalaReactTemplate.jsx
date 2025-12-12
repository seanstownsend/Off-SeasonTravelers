import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const HaleakalaReactTemplate = () => {
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
          Haleakalā National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Experience Maui's sacred sunrise crater during September, October, April, May - perfect weather, fewer crowds, spectacular high-altitude adventures
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
              color: '#7c3aed',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #a855f7',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Haleakalā National Park during the spectacular shoulder seasons of September, October, April, May. Here's why off-season travel offers the ultimate Maui summit adventure:
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
                <h3 style={{ color: '#7c3aed', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🌅 Legendary Sunrise Views</h3>
                <p>Watch the sun rise above the clouds from 10,023 feet without summer crowds. Off-season offers better sunrise reservations and clearer atmospheric conditions.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#7c3aed', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>💰 Maui Savings</h3>
                <p>Save up to 40% on Maui accommodations and car rentals during off-season months. Better availability at popular resorts and vacation rentals.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#7c3aed', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>📸 Crater Photography</h3>
                <p>Capture the otherworldly landscape of Haleakalā Crater without crowds. Perfect lighting conditions and clear skies for landscape and astrophotography.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#7c3aed', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🌺 Perfect Climate</h3>
                <p>Enjoy ideal conditions with less humidity and rain than summer months. Cooler temperatures make high-altitude hiking and crater exploration comfortable.</p>
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
              [Haleakalā off-season landscape photo]<br />
              <em>Sunrise over Haleakalā Crater with silversword plants in foreground</em>
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
                  <li>Better sunrise viewing reservations and parking availability</li>
                  <li>Clearer skies and less atmospheric haze for views</li>
                  <li>Significant savings (30-40% off) on Maui accommodations</li>
                  <li>Comfortable hiking temperatures at high elevation</li>
                  <li>Peaceful crater trails without summer crowds</li>
                  <li>Perfect conditions for stargazing and astrophotography</li>
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
                  <li>Summit temperatures can be very cold (near freezing at sunrise)</li>
                  <li>Weather changes rapidly at high elevation</li>
                  <li>Some backcountry areas may have limited access</li>
                  <li>Potential for clouds to obscure sunrise views</li>
                  <li>Altitude effects may be more noticeable for some visitors</li>
                  <li>Limited dining options on the road to summit</li>
                </ul>
              </div>
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
              Plan your visit with confidence using our detailed weather data for Haleakalā National Park during September, October, April, May:
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
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Summit High (°F)</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Summit Low (°F)</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Precipitation</th>
                    <th style={{ padding: '1rem', textAlign: 'left' }}>Conditions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>April</td>
                    <td style={{ padding: '1rem' }}>58°F</td>
                    <td style={{ padding: '1rem' }}>38°F</td>
                    <td style={{ padding: '1rem' }}>2.1 inches</td>
                    <td style={{ padding: '1rem' }}>Cool, clear mornings</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>May</td>
                    <td style={{ padding: '1rem' }}>60°F</td>
                    <td style={{ padding: '1rem' }}>40°F</td>
                    <td style={{ padding: '1rem' }}>1.8 inches</td>
                    <td style={{ padding: '1rem' }}>Ideal, dry conditions</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>September</td>
                    <td style={{ padding: '1rem' }}>64°F</td>
                    <td style={{ padding: '1rem' }}>44°F</td>
                    <td style={{ padding: '1rem' }}>1.9 inches</td>
                    <td style={{ padding: '1rem' }}>Warm, excellent visibility</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>October</td>
                    <td style={{ padding: '1rem' }}>62°F</td>
                    <td style={{ padding: '1rem' }}>42°F</td>
                    <td style={{ padding: '1rem' }}>2.5 inches</td>
                    <td style={{ padding: '1rem' }}>Perfect hiking weather</td>
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
              <em>Summit temperature and precipitation graphs for off-season months</em>
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
              Make the most of your Haleakalā National Park off-season adventure with these essential tips:
            </p>
            
            <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Reserve Sunrise Viewing in Advance</strong><br />
                Sunrise viewing requires reservations and can sell out weeks ahead. Book early at recreation.gov, even during off-season months.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Dress for Extreme Cold</strong><br />
                Summit temperatures can be near freezing at sunrise. Bring warm layers, hat, gloves, and blankets. It can be 40°F colder than at sea level.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Start Early and Allow Extra Time</strong><br />
                Drive to summit takes 1.5-2 hours from most Maui locations. Leave by 3:30 AM for sunrise and account for winding mountain roads.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Acclimate to Altitude</strong><br />
                Take it easy at 10,000+ feet elevation. Drink plenty of water and rest if you feel lightheaded or short of breath.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Bring Snacks and Water</strong><br />
                No food services at summit area. Pack breakfast, warm drinks in thermos, and plenty of water for the early morning adventure.
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
              Essential pre-trip checklist for your Haleakalā National Park off-season adventure:
            </p>
            
            <h3 style={{ color: '#7c3aed', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Reservations & Permits</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Sunrise viewing reservations at recreation.gov (required)</li>
              <li>Park entrance pass or America the Beautiful Annual Pass</li>
              <li>Reserve Maui accommodations and rental car well in advance</li>
              <li>Camping permits if planning backcountry overnight trips</li>
            </ul>

            <h3 style={{ color: '#7c3aed', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Gear & Equipment</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Warm layers including winter jacket, hat, gloves, and blankets</li>
              <li>Sturdy hiking boots with good grip for volcanic terrain</li>
              <li>High SPF sunscreen and sunglasses (intense UV at altitude)</li>
              <li>Camera with extra batteries and memory cards</li>
              <li>Headlamp or flashlight for pre-dawn summit drive</li>
              <li>Thermos for hot drinks and snacks for summit viewing</li>
            </ul>

            <h3 style={{ color: '#7c3aed', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Safety Considerations</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Check weather conditions before sunrise attempts</li>
              <li>Be aware of altitude effects - rest if experiencing symptoms</li>
              <li>Drive carefully on winding summit road, especially in pre-dawn darkness</li>
              <li>Stay on marked trails - crater terrain can be unstable</li>
              <li>Inform someone of your hiking plans and expected return time</li>
            </ul>
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
              6-Day Maui Island Adventure
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Ready to plan your ultimate Maui adventure? Our comprehensive 6-day itinerary covers Haleakalā National Park plus Road to Hana, snorkeling adventures, Upcountry farms, and cultural experiences.
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <a 
                href="/haleakala-itinerary"
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
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
                🌅 Get Your Complete 6-Day Itinerary
              </a>
              <a 
                href="https://www.nps.gov/hale/index.htm"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
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
              color: '#7c3aed',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #a855f7',
              paddingBottom: '0.5rem'
            }}>
              Visitor Feedback & Reviews
            </h2>
            <FeedbackForm parkSlug="haleakala" />
          </section>
        </main>
      </div>
    </div>
  );
};

export default HaleakalaReactTemplate;