import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const PetrifiedForestReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #9a623c, #ab734a)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Petrified Forest National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Discover ancient petrified wood and painted desert landscapes during November, December, January, February - mild weather, fewer crowds, stunning vistas
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
              color: '#a6763c',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #b8854a',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Petrified Forest National Park during the comfortable winter months of November through February. Here's why off-season travel offers the ultimate ancient landscape adventure:
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
                <h3 style={{ color: '#9a3412', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🪨 Ancient Wonders</h3>
                <p>Explore 225-million-year-old petrified logs and colorful badlands without summer's extreme heat. The Painted Desert's colors are enhanced in winter light.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#9a3412', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>💰 Winter Savings</h3>
                <p>Save up to 40% on nearby accommodations in Holbrook and Winslow during the off-season, plus enjoy lower gas prices for the scenic drive.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#9a3412', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>📸 Pristine Photography</h3>
                <p>Capture the Rainbow Forest and Blue Mesa without crowds, plus dramatic winter lighting that brings out the colors in petrified wood and painted badlands.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#9a3412', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🌌 Clear Skies</h3>
                <p>Perfect conditions for stargazing and astrophotography in this International Dark Sky Park, with crisp winter air and minimal atmospheric interference.</p>
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
              [Petrified Forest off-season landscape photo]<br />
              <em>Colorful petrified logs scattered across the Painted Desert badlands</em>
            </div>
          </section>

          {/* Off-Season Trade-Offs Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#7c2d12',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #ea580c',
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
                background: '#fef7ed',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #ea580c'
              }}>
                <h3 style={{ color: '#9a3412', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>✅ Advantages</h3>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li>Comfortable hiking temperatures (45-65°F vs. 100°F+ in summer)</li>
                  <li>Enhanced colors in winter light across Painted Desert</li>
                  <li>Savings on accommodations in Holbrook and Winslow</li>
                  <li>Peaceful trails and viewpoints without crowds</li>
                  <li>Perfect conditions for photography and stargazing</li>
                  <li>Clear, crisp air with excellent visibility</li>
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
                  <li>Shorter daylight hours limit exploration time</li>
                  <li>Cold mornings and evenings (can drop to 20°F)</li>
                  <li>Occasional snow or ice on trails and roads</li>
                  <li>Limited services in nearby gateway communities</li>
                  <li>Some backcountry areas may be inaccessible</li>
                  <li>Visitor center may have reduced hours</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Weather Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#7c2d12',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #ea580c',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Weather
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Plan your visit with confidence using our detailed weather data for Petrified Forest National Park during November, December, January, February:
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
                  <tr style={{ backgroundColor: '#7c2d12', color: 'white' }}>
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
                    <td style={{ padding: '1rem' }}>60°F</td>
                    <td style={{ padding: '1rem' }}>30°F</td>
                    <td style={{ padding: '1rem' }}>0.4 inches</td>
                    <td style={{ padding: '1rem' }}>Mild days, cool nights</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>December</td>
                    <td style={{ padding: '1rem' }}>50°F</td>
                    <td style={{ padding: '1rem' }}>22°F</td>
                    <td style={{ padding: '1rem' }}>0.5 inches</td>
                    <td style={{ padding: '1rem' }}>Cool, occasional snow</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>January</td>
                    <td style={{ padding: '1rem' }}>48°F</td>
                    <td style={{ padding: '1rem' }}>20°F</td>
                    <td style={{ padding: '1rem' }}>0.6 inches</td>
                    <td style={{ padding: '1rem' }}>Coldest month, possible snow</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>February</td>
                    <td style={{ padding: '1rem' }}>55°F</td>
                    <td style={{ padding: '1rem' }}>25°F</td>
                    <td style={{ padding: '1rem' }}>0.5 inches</td>
                    <td style={{ padding: '1rem' }}>Warming up, crisp air</td>
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
              color: '#7c2d12',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #ea580c',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Tips
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Make the most of your Petrified Forest National Park off-season adventure with these essential tips:
            </p>
            
            <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Dress in Layers</strong><br />
                High desert temperatures can vary 40+ degrees between morning and afternoon. Bring warm clothing for early morning and late evening visits.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Start with the Visitor Center</strong><br />
                Get oriented with the park layout and check current conditions. The Rainbow Forest Museum provides essential context for your visit.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Drive the Full Park Road</strong><br />
                Take the 28-mile scenic drive from south to north, stopping at all major viewpoints including Painted Desert overlooks and Crystal Forest.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Bring Water and Snacks</strong><br />
                Limited services inside the park. Pack plenty of water and food, especially for longer hikes in the backcountry areas.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Respect the Fossils</strong><br />
                Leave petrified wood where you find it - removing fossils is illegal and heavily enforced. Enjoy photography instead of collecting.
              </li>
            </ol>
          </section>

          {/* Before You Go Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#7c2d12',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #ea580c',
              paddingBottom: '0.5rem'
            }}>
              Before You Go
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Essential pre-trip checklist for your Petrified Forest National Park off-season adventure:
            </p>
            
            <h3 style={{ color: '#9a3412', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Reservations & Permits</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Park entrance pass or America the Beautiful Annual Pass</li>
              <li>Reserve accommodations in Holbrook or Winslow (no lodging in park)</li>
              <li>No camping inside park - book nearby state parks or private campgrounds</li>
              <li>Check visitor center hours (may be reduced in winter)</li>
            </ul>

            <h3 style={{ color: '#9a3412', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Gear & Equipment</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Warm layered clothing system including insulated jacket</li>
              <li>Sturdy walking shoes with good traction</li>
              <li>Sun protection (hat, sunglasses, sunscreen)</li>
              <li>Camera with extra batteries for fossil and landscape photography</li>
              <li>Binoculars for viewing distant badlands and wildlife</li>
              <li>Flashlight or headlamp for early morning/evening visits</li>
            </ul>

            <h3 style={{ color: '#9a3412', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Safety Considerations</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Check weather conditions and road closures before travel</li>
              <li>Carry extra water and warm clothing for emergencies</li>
              <li>Stay on designated trails to protect fragile desert ecosystem</li>
              <li>Be aware of rattlesnakes (less active but still present in winter)</li>
              <li>Never remove or disturb petrified wood or fossils</li>
            </ul>
          </section>

          {/* Itinerary Link Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#7c2d12',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #ea580c',
              paddingBottom: '0.5rem'
            }}>
              1-2 Day Itinerary
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Ready to plan your perfect Petrified Forest National Park off-season adventure? Our detailed itinerary covers the scenic drive, major fossil sites, and Painted Desert viewpoints.
            </p>
            
            <a 
              href="/petrified-forest-itinerary"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #7c2d12, #ea580c)',
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
              🪨 Get Your Complete 1-2 Day Itinerary
            </a>
          </section>

          {/* User Feedback & Photos Section - React Component */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#7c2d12',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #ea580c',
              paddingBottom: '0.5rem'
            }}>
              Visitor Feedback & Reviews
            </h2>
            <FeedbackForm parkSlug="petrified-forest" />
          </section>
        </main>
      </div>
    </div>
  );
};

export default PetrifiedForestReactTemplate;