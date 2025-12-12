import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const NewRiverGorgeReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #0891b2, #06b6d4)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          New River Gorge National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Explore America's newest national park during October, November, March, April - incredible climbing weather, stunning views, lower crowds
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
              color: '#0891b2',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #06b6d4',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience New River Gorge National Park and Preserve like never before during October, November, March, April. Here's why off-season travel offers the ultimate West Virginia adventure:
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
                <h3 style={{ color: '#0c7490', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🧗 World-Class Climbing</h3>
                <p>Perfect temperatures for rock climbing on the New River Gorge's legendary sandstone cliffs. Cooler weather means better grip and endurance.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#0c7490', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🍂 Autumn Spectacular</h3>
                <p>Witness incredible fall foliage from the New River Gorge Bridge and Grandview overlook without peak season crowds.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#0c7490', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🚣 River Adventures</h3>
                <p>Ideal conditions for whitewater rafting and kayaking on the New River - cooler air temperatures, fewer crowds on the water.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#0c7490', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>💰 Appalachian Savings</h3>
                <p>Save significantly on accommodations in Fayetteville and nearby areas. Off-season rates can be 50% lower than peak summer prices.</p>
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
              [New River Gorge off-season landscape photo]<br />
              <em>New River Gorge Bridge with fall foliage and morning mist</em>
            </div>
          </section>

          {/* Weather Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#0891b2',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #06b6d4',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Weather
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Plan your visit with confidence using our detailed weather data for New River Gorge during October, November, March, April:
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
                  <tr style={{ backgroundColor: '#0891b2', color: 'white' }}>
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
                    <td style={{ padding: '1rem' }}>56°F</td>
                    <td style={{ padding: '1rem' }}>34°F</td>
                    <td style={{ padding: '1rem' }}>3.8 inches</td>
                    <td style={{ padding: '1rem' }}>Cool, perfect for hiking</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>April</td>
                    <td style={{ padding: '1rem' }}>67°F</td>
                    <td style={{ padding: '1rem' }}>43°F</td>
                    <td style={{ padding: '1rem' }}>3.6 inches</td>
                    <td style={{ padding: '1rem' }}>Mild, wildflowers blooming</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>October</td>
                    <td style={{ padding: '1rem' }}>68°F</td>
                    <td style={{ padding: '1rem' }}>45°F</td>
                    <td style={{ padding: '1rem' }}>2.9 inches</td>
                    <td style={{ padding: '1rem' }}>Ideal, peak fall colors</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>November</td>
                    <td style={{ padding: '1rem' }}>56°F</td>
                    <td style={{ padding: '1rem' }}>35°F</td>
                    <td style={{ padding: '1rem' }}>3.2 inches</td>
                    <td style={{ padding: '1rem' }}>Crisp, great climbing weather</td>
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

          {/* 3-Day Off-Season Itinerary Overview */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#0891b2',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #06b6d4',
              paddingBottom: '0.5rem'
            }}>
              3-4 Day Off-Season Itinerary Overview
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience America's newest national park with this action-packed 3-4 day off-season adventure:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              margin: '1.5rem 0'
            }}>
              <div style={{
                background: '#f0f9ff',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #06b6d4'
              }}>
                <h3 style={{ color: '#0c7490', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🌉 Day 1: Iconic Bridge & Overlooks</h3>
                <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                  <li>Canyon Rim Visitor Center orientation</li>
                  <li>New River Gorge Bridge viewpoints</li>
                  <li>Long Point Trail dramatic overlook hike</li>
                  <li>Bridge Catwalk beneath the span</li>
                </ul>
              </div>
              <div style={{
                background: '#f0f9ff',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #06b6d4'
              }}>
                <h3 style={{ color: '#0c7490', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🧗 Day 2: Adventure Activities</h3>
                <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                  <li>Guided rock climbing on Nuttall Sandstone</li>
                  <li>Endless Wall Trail for non-climbers</li>
                  <li>Grandview area historic overlooks</li>
                  <li>Perfect fall foliage or spring climbing weather</li>
                </ul>
              </div>
              <div style={{
                background: '#f0f9ff',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #06b6d4'
              }}>
                <h3 style={{ color: '#0c7490', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🚣 Day 3: River & Historic Sites</h3>
                <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                  <li>Whitewater rafting adventure</li>
                  <li>Sandstone Falls boardwalk alternative</li>
                  <li>Thurmond ghost town exploration</li>
                  <li>Railroad history and heritage</li>
                </ul>
              </div>
              <div style={{
                background: '#f0f9ff',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #06b6d4'
              }}>
                <h3 style={{ color: '#0c7490', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🏞️ Day 4: Glade Creek Mill</h3>
                <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                  <li>Babcock State Park grist mill photography</li>
                  <li>Mountain overlook hiking trails</li>
                  <li>Most photographed site in West Virginia</li>
                  <li>Peaceful creek and forest exploration</li>
                </ul>
              </div>
            </div>

            <div style={{
              background: '#fef3c7',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              border: '1px solid #f59e0b',
              margin: '1.5rem 0'
            }}>
              <h3 style={{ color: '#92400e', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>💡 Off-Season Advantages</h3>
              <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                <li><strong>Perfect Climbing:</strong> Cool temperatures ideal for rock climbing without heat stress</li>
                <li><strong>Dramatic Colors:</strong> Spectacular fall foliage views from gorge overlooks</li>
                <li><strong>Lower Crowds:</strong> Peaceful trails and climbing routes without summer masses</li>
                <li><strong>Significant Savings:</strong> Up to 50% off peak accommodation rates in Fayetteville</li>
                <li><strong>Better Conditions:</strong> Cooler river temperatures, comfortable hiking weather</li>
              </ul>
            </div>
          </section>

          {/* Itinerary Link Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#0891b2',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #06b6d4',
              paddingBottom: '0.5rem'
            }}>
              2-3 Day Itinerary
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Ready to plan your perfect New River Gorge National Park off-season adventure? Our detailed itinerary covers climbing, hiking, and river activities.
            </p>
            
            <a 
              href="/new-river-gorge-itinerary"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #0891b2, #06b6d4)',
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
              color: '#0891b2',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #06b6d4',
              paddingBottom: '0.5rem'
            }}>
              Visitor Feedback & Reviews
            </h2>
            <FeedbackForm parkSlug="new-river-gorge" />
          </section>
        </main>
      </div>
    </div>
  );
};

export default NewRiverGorgeReactTemplate;