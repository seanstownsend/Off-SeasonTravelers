import React, { useEffect } from 'react';
import FeedbackForm from './FeedbackForm.jsx';
import { getParkTemplateData } from '../../lib/parkTemplateData.js';

const GenericParkTemplate = ({ parkSlug }) => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  // Get park data
  const parkData = getParkTemplateData(parkSlug);
  
  if (!parkData) {
    return (
      <div style={{ 
        padding: '2rem', 
        textAlign: 'center',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <h1>Park Not Found</h1>
        <p>Sorry, we don't have information for the park slug: {parkSlug}</p>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #6e7f52, #7c8d60)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          {parkData.name}: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Discover the beauty of {parkData.name} during {parkData.offSeasonMonths} - fewer crowds, lower costs, unforgettable experiences
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
              color: '#6e7f52',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #7c8d60',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience {parkData.name} like never before during {parkData.offSeasonMonths.toLowerCase()}. Here's why off-season travel offers the ultimate national park adventure:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              margin: '1.5rem 0'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #f7f9f5, #f1f5ed)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #d4d4aa'
              }}>
                <h3 style={{ color: '#6e7f52', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🌲 Peaceful Wilderness</h3>
                <p>{parkData.peacefulDescription}</p>
              </div>
              <div style={{
                background: 'linear-gradient(135deg, #f7f9f5, #f1f5ed)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #d4d4aa'
              }}>
                <h3 style={{ color: '#6e7f52', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>💰 Significant Savings</h3>
                <p>Save up to {parkData.savingsPercentage}% on accommodations and discover local deals unavailable during peak season.</p>
              </div>
              <div style={{
                background: 'linear-gradient(135deg, #f7f9f5, #f1f5ed)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #d4d4aa'
              }}>
                <h3 style={{ color: '#6e7f52', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>📸 Unique Photo Opportunities</h3>
                <p>{parkData.photoOpportunities}</p>
              </div>
              <div style={{
                background: 'linear-gradient(135deg, #f7f9f5, #f1f5ed)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #d4d4aa'
              }}>
                <h3 style={{ color: '#6e7f52', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🦌 Enhanced Wildlife Viewing</h3>
                <p>{parkData.wildlifeDescription}</p>
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
              [{parkData.name} off-season landscape photo]<br />
              <em>Stunning {parkData.name.toLowerCase()} scenery without crowds</em>
            </div>
          </section>

          {/* Off-Season Trade-Offs Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#6e7f52',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #7c8d60',
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
                background: 'linear-gradient(135deg, #f7f9f5, #f1f5ed)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #7c8d60'
              }}>
                <h3 style={{ color: '#6e7f52', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>✅ Advantages</h3>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  {parkData.advantages.map((advantage, index) => (
                    <li key={index}>{advantage}</li>
                  ))}
                  <li>Lower accommodation costs</li>
                  <li>Authentic local experiences</li>
                </ul>
              </div>
              <div style={{
                background: 'linear-gradient(135deg, #fef8f0, #fdf4e8)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #a6763c'
              }}>
                <h3 style={{ color: '#a6763c', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>⚠️ Considerations</h3>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  {parkData.limitations.map((limitation, index) => (
                    <li key={index}>{limitation}</li>
                  ))}
                  <li>Shorter daylight hours</li>
                  <li>Some facilities may be closed</li>
                  <li>Weather can be unpredictable</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Off-Season Weather Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#6e7f52',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #7c8d60',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Weather
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Plan your visit with confidence using our detailed weather data for {parkData.name} during {parkData.offSeasonMonths.toLowerCase()}:
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
                  {parkData.weatherData.map((weather, index) => (
                    <tr key={index} style={{ 
                      borderBottom: index < parkData.weatherData.length - 1 ? '1px solid #e5e7eb' : 'none',
                      backgroundColor: index % 2 === 1 ? '#f9fafb' : 'transparent'
                    }}>
                      <td style={{ padding: '1rem', fontWeight: '600' }}>{weather.month}</td>
                      <td style={{ padding: '1rem' }}>{weather.high}°F</td>
                      <td style={{ padding: '1rem' }}>{weather.low}°F</td>
                      <td style={{ padding: '1rem' }}>{weather.precipitation}</td>
                      <td style={{ padding: '1rem' }}>{weather.conditions}</td>
                    </tr>
                  ))}
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
              color: '#6e7f52',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #7c8d60',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Tips
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Make the most of your {parkData.name} off-season adventure with these essential tips:
            </p>
            
            <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              {parkData.tips.map((tip, index) => (
                <li key={index} style={{ marginBottom: '1rem' }}>
                  <strong>{tip.title}</strong><br />
                  {tip.description}
                </li>
              ))}
            </ol>
          </section>

          {/* Before You Go Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#6e7f52',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #7c8d60',
              paddingBottom: '0.5rem'
            }}>
              Before You Go
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Essential pre-trip checklist for your {parkData.name} off-season adventure:
            </p>
            
            <h3 style={{ color: '#6e7f52', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Reservations & Permits</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              {parkData.reservationsPermits.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3 style={{ color: '#6e7f52', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Gear & Equipment</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              {parkData.gearEquipment.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h3 style={{ color: '#6e7f52', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Safety Considerations</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              {parkData.safetyConsiderations.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Itinerary Link Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#6e7f52',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #7c8d60',
              paddingBottom: '0.5rem'
            }}>
              4-5 Day Itinerary
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Ready to plan your perfect {parkData.name} off-season adventure? Our detailed itinerary covers everything from must-see attractions to hidden gems.
            </p>
            
            <a 
              href={`/${parkSlug}-itinerary`}
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #6e7f52, #7c8d60)',
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

          {/* React Feedback Form Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#6e7f52',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #7c8d60',
              paddingBottom: '0.5rem'
            }}>
              Visitor Feedback & Reviews
            </h2>
            <FeedbackForm parkSlug={parkSlug} />
          </section>
        </main>
      </div>
    </div>
  );
};

export default GenericParkTemplate;