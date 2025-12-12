import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const IsleRoyaleReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #065f46, #059669)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Isle Royale National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Discover Lake Superior's pristine wilderness during September, October, April, May - isolated islands, wolf and moose studies, unparalleled solitude
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
              color: '#065f46',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #059669',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Isle Royale National Park during the spectacular shoulder seasons of September, October, April, May. Here's why off-season travel offers the ultimate wilderness island adventure:
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
                <h3 style={{ color: '#047857', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🏝️ Ultimate Wilderness Solitude</h3>
                <p>Experience one of America's least visited national parks with even fewer visitors. Perfect for backcountry camping, hiking, and wildlife observation in pristine conditions.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#047857', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>💰 Significant Savings</h3>
                <p>Save on ferry transportation and lodging in Grand Portage or Copper Harbor. Off-season rates and reduced crowds make this remote destination more accessible.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#047857', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>📸 Pristine Photography</h3>
                <p>Capture Lake Superior's moods, fall colors reflecting in pristine lakes, and wildlife behavior without human interference. Spring and fall offer dramatic lighting.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#047857', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🐺 World-Famous Wildlife Research</h3>
                <p>Visit during active research seasons for the world's longest-running predator-prey study featuring wolves and moose populations.</p>
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
              [Isle Royale off-season landscape photo]<br />
              <em>Pristine wilderness island surrounded by Lake Superior's crystal waters</em>
            </div>
          </section>

          {/* Off-Season Trade-Offs Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#065f46',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #059669',
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
                background: '#ecfdf5',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #059669'
              }}>
                <h3 style={{ color: '#047857', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>✅ Advantages</h3>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li>Unparalleled wilderness solitude and pristine conditions</li>
                  <li>Active wildlife research seasons for wolf and moose observation</li>
                  <li>Spectacular fall colors and spring wildflower displays</li>
                  <li>Reduced ferry costs and better mainland lodging availability</li>
                  <li>Perfect conditions for backcountry camping and hiking</li>
                  <li>Enhanced aurora viewing opportunities during darker months</li>
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
                  <li>Ferry service runs limited schedule (mid-April to October only)</li>
                  <li>Weather can be severe with sudden Lake Superior storms</li>
                  <li>No services or facilities available on the island</li>
                  <li>Must be completely self-sufficient for camping and emergencies</li>
                  <li>Cold temperatures and potential for early snow/ice</li>
                  <li>Limited communication options and emergency access</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Weather Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#065f46',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #059669',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Weather
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Plan your visit with confidence using our detailed weather data for Isle Royale National Park during September, October, April, May:
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
                  <tr style={{ backgroundColor: '#065f46', color: 'white' }}>
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
                    <td style={{ padding: '1rem' }}>48°F</td>
                    <td style={{ padding: '1rem' }}>32°F</td>
                    <td style={{ padding: '1rem' }}>2.1 inches</td>
                    <td style={{ padding: '1rem' }}>Cool, ice breakup season</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>May</td>
                    <td style={{ padding: '1rem' }}>58°F</td>
                    <td style={{ padding: '1rem' }}>42°F</td>
                    <td style={{ padding: '1rem' }}>2.8 inches</td>
                    <td style={{ padding: '1rem' }}>Mild, wildflowers emerging</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>September</td>
                    <td style={{ padding: '1rem' }}>65°F</td>
                    <td style={{ padding: '1rem' }}>50°F</td>
                    <td style={{ padding: '1rem' }}>3.2 inches</td>
                    <td style={{ padding: '1rem' }}>Pleasant, fall colors peak</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>October</td>
                    <td style={{ padding: '1rem' }}>52°F</td>
                    <td style={{ padding: '1rem' }}>40°F</td>
                    <td style={{ padding: '1rem' }}>2.9 inches</td>
                    <td style={{ padding: '1rem' }}>Cool, dramatic weather</td>
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
              color: '#065f46',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #059669',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Tips
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Make the most of your Isle Royale National Park off-season adventure with these essential tips:
            </p>
            
            <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Book Ferry Transportation Early</strong><br />
                Ferry service runs limited schedules from Grand Portage, MN and Copper Harbor, MI. Reserve well in advance as capacity is limited and weather-dependent.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Pack for Complete Self-Sufficiency</strong><br />
                No services exist on the island. Bring all food, water purification, camping gear, and emergency supplies. Pack as if for remote wilderness backpacking.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Prepare for Severe Weather</strong><br />
                Lake Superior creates its own weather systems. Bring high-quality rain gear, warm clothing, and be prepared for sudden temperature drops and storms.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Plan Flexible Itineraries</strong><br />
                Weather may delay ferry departures or extend your stay. Build buffer days into your schedule and inform employers/family of potential delays.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Respect the Research Environment</strong><br />
                This is an active research site for wolf and moose populations. Follow all guidelines, maintain distance from wildlife, and never interfere with research activities.
              </li>
            </ol>
          </section>

          {/* Before You Go Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#065f46',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #059669',
              paddingBottom: '0.5rem'
            }}>
              Before You Go
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Essential pre-trip checklist for your Isle Royale National Park off-season adventure:
            </p>
            
            <h3 style={{ color: '#047857', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Reservations & Permits</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Park entrance pass or America the Beautiful Annual Pass</li>
              <li>Ferry reservations from Grand Portage, MN or Copper Harbor, MI</li>
              <li>Backcountry camping permits (required for all overnight stays)</li>
              <li>Mainland accommodations for potential weather delays</li>
            </ul>

            <h3 style={{ color: '#047857', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Gear & Equipment</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Complete backpacking gear (tent, sleeping bag rated for cold weather)</li>
              <li>Water purification system (pumps, tablets, or UV sterilizer)</li>
              <li>High-quality rain gear and warm layered clothing system</li>
              <li>All food for entire stay (no services or resupply available)</li>
              <li>First aid kit and emergency communication device</li>
              <li>Navigation tools (map, compass, GPS device with extra batteries)</li>
            </ul>

            <h3 style={{ color: '#047857', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Safety Considerations</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>File detailed itinerary with park rangers and emergency contacts</li>
              <li>Understand that emergency evacuation may be delayed by weather</li>
              <li>Learn about hypothermia prevention and treatment</li>
              <li>Carry emergency shelter and signaling devices</li>
              <li>Respect wildlife viewing distances (wolves, moose, and other animals)</li>
            </ul>
          </section>

          {/* Itinerary Link Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#065f46',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #059669',
              paddingBottom: '0.5rem'
            }}>
              3-5 Day Itinerary
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Ready to plan your perfect Isle Royale National Park off-season adventure? Our detailed itinerary covers wilderness hiking, wildlife observation, and backcountry camping.
            </p>
            
            <a 
              href="/isle-royale-itinerary"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #065f46, #059669)',
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
              🏝️ Get Your Complete 3-5 Day Itinerary
            </a>
          </section>

          {/* User Feedback & Photos Section - React Component */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#065f46',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #059669',
              paddingBottom: '0.5rem'
            }}>
              Visitor Feedback & Reviews
            </h2>
            <FeedbackForm parkSlug="isle-royale" />
          </section>
        </main>
      </div>
    </div>
  );
};

export default IsleRoyaleReactTemplate;
