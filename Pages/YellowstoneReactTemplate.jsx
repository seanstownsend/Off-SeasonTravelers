import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const YellowstoneReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #a16207, #d97706)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Yellowstone National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Discover the beauty of Yellowstone National Park during September, October, April, May - fewer crowds, lower costs, unforgettable experiences
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
              color: '#a16207',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #d97706',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Yellowstone National Park like never before during September, October, April, May. Here's why off-season travel offers the ultimate national park adventure:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              margin: '1.5rem 0'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #fef3c7, #fbbf24)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #f59e0b'
              }}>
                <h3 style={{ color: '#a16207', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🌲 Peaceful Wilderness</h3>
                <p>Experience Yellowstone's iconic geysers, hot springs, and wildlife viewing areas without the summer crowds that can number over 30,000 visitors per day.</p>
              </div>
              <div style={{
                background: 'linear-gradient(135deg, #fef3c7, #fbbf24)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #f59e0b'
              }}>
                <h3 style={{ color: '#a16207', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>💰 Significant Savings</h3>
                <p>Save up to 60% on accommodations and discover local deals unavailable during peak season.</p>
              </div>
              <div style={{
                background: 'linear-gradient(135deg, #fef3c7, #fbbf24)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #f59e0b'
              }}>
                <h3 style={{ color: '#a16207', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>📸 Unique Photo Opportunities</h3>
                <p>Capture stunning fall colors and spring wildlife activity, plus steam rising from hot springs in crisp air - without photobombers.</p>
              </div>
              <div style={{
                background: 'linear-gradient(135deg, #fef3c7, #fbbf24)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #f59e0b'
              }}>
                <h3 style={{ color: '#a16207', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🦌 Enhanced Wildlife Viewing</h3>
                <p>Elk bugling season in fall, bear activity before hibernation, and spring births make wildlife viewing exceptional during off-season months.</p>
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
              [Yellowstone off-season landscape photo]<br />
              <em>Old Faithful with fall colors and no crowds</em>
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
                  <li>Dramatic cost savings on lodging (60% off peak rates)</li>
                  <li>Wildlife more active and visible</li>
                  <li>Fall colors and spring wildflowers</li>
                  <li>Peaceful hiking and geyser viewing</li>
                  <li>Lower accommodation costs</li>
                  <li>Authentic local experiences</li>
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
                  <li>Some roads may be closed (Dunraven Pass, etc.)</li>
                  <li>Limited dining options inside the park</li>
                  <li>Weather can change rapidly</li>
                  <li>Shorter daylight hours</li>
                  <li>Some facilities may be closed</li>
                  <li>Snow possible even in late spring</li>
                </ul>
              </div>
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
              Plan your visit with confidence using our detailed weather data for Yellowstone National Park during September, October, April, May:
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
                    <td style={{ padding: '1rem', fontWeight: '600' }}>April</td>
                    <td style={{ padding: '1rem' }}>50°F</td>
                    <td style={{ padding: '1rem' }}>25°F</td>
                    <td style={{ padding: '1rem' }}>1.8 inches</td>
                    <td style={{ padding: '1rem' }}>Cool, possible snow</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>May</td>
                    <td style={{ padding: '1rem' }}>62°F</td>
                    <td style={{ padding: '1rem' }}>35°F</td>
                    <td style={{ padding: '1rem' }}>2.1 inches</td>
                    <td style={{ padding: '1rem' }}>Mild, wildflowers emerging</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>September</td>
                    <td style={{ padding: '1rem' }}>70°F</td>
                    <td style={{ padding: '1rem' }}>38°F</td>
                    <td style={{ padding: '1rem' }}>1.4 inches</td>
                    <td style={{ padding: '1rem' }}>Pleasant, fall colors beginning</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>October</td>
                    <td style={{ padding: '1rem' }}>55°F</td>
                    <td style={{ padding: '1rem' }}>25°F</td>
                    <td style={{ padding: '1rem' }}>1.0 inches</td>
                    <td style={{ padding: '1rem' }}>Crisp, peak fall colors</td>
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
              Make the most of your Yellowstone National Park off-season adventure with these essential tips:
            </p>
            
            <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Layer Your Clothing</strong><br />
                Temperatures can vary 40+ degrees between morning and afternoon. Bring base layers, insulating layers, and waterproof outer shells.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Check Road Conditions Daily</strong><br />
                Some park roads close seasonally. Check the NPS website before departing each day for current conditions and closures.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Pack Emergency Supplies</strong><br />
                Weather can change rapidly. Carry extra food, water, warm clothing, and a first aid kit when hiking or driving remote areas.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Book Accommodations Early</strong><br />
                Limited lodging options are available during off-season. Reserve well in advance or consider staying in gateway towns.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Bring Bear Spray</strong><br />
                Fall is when bears are most active preparing for winter. Always carry EPA-approved bear spray when hiking.
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
              Essential pre-trip checklist for your Yellowstone National Park off-season adventure:
            </p>
            
            <h3 style={{ color: '#15803d', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Reservations & Permits</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Park entrance pass or America the Beautiful Annual Pass</li>
              <li>Lodging reservations (book 6+ months ahead)</li>
              <li>Book accommodations early (limited off-season options)</li>
              <li>Check park entrance requirements</li>
            </ul>

            <h3 style={{ color: '#15803d', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Gear & Equipment</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Layered clothing system (base, insulating, shell)</li>
              <li>Waterproof hiking boots with good traction</li>
              <li>EPA-approved bear spray</li>
              <li>Emergency supplies and first aid kit</li>
              <li>Headlamp with extra batteries</li>
            </ul>

            <h3 style={{ color: '#15803d', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Safety Considerations</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Download offline maps (cell service is limited)</li>
              <li>Check weather and road conditions before travel</li>
              <li>Check current park conditions and closures</li>
              <li>Inform someone of your travel plans</li>
            </ul>
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
              4-5 Day Itinerary
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Ready to plan your perfect Yellowstone National Park off-season adventure? Our detailed itinerary covers everything from must-see attractions to hidden gems.
            </p>
            
            <a 
              href="/yellowstone-itinerary"
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
              📅 Get Your Complete 4-5 Day Itinerary
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
            <FeedbackForm parkSlug="yellowstone" />
          </section>
        </main>
      </div>
    </div>
  );
};

export default YellowstoneReactTemplate;