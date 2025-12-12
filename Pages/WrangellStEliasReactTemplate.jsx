import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const WrangellStEliasReactTemplate = () => {
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
          Wrangell-St. Elias National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Discover America's largest national park during September-May - world-class mountaineering, glacier exploration, ultimate wilderness
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
              Experience Wrangell-St. Elias National Park like never before during September-May. Here's why off-season travel offers the ultimate Alaska wilderness adventure:
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
                <h3 style={{ color: '#6b21a8', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🏔️ America's Largest Park</h3>
                <p>Explore 13.2 million acres of pristine wilderness - larger than Yellowstone, Yosemite, and Switzerland combined. Experience true solitude in untouched landscapes.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#6b21a8', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>⛰️ World-Class Mountaineering</h3>
                <p>Home to 9 of the 16 highest peaks in the US, including Mount St. Elias at 18,008 feet. Off-season offers serious mountaineering opportunities.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#6b21a8', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🧊 Massive Glacier Systems</h3>
                <p>Explore glacier systems including the Malaspina Glacier, larger than Rhode Island. Winter offers unique glacier travel and ice climbing opportunities.</p>
              </div>
              <div style={{
                background: '#f9fafb',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #e5e7eb'
              }}>
                <h3 style={{ color: '#6b21a8', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>🏛️ Historic Mining Heritage</h3>
                <p>Discover the preserved Kennecott Mill and other remnants of Alaska's copper mining boom. Winter access requires planning but offers authentic experiences.</p>
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
              [Wrangell-St. Elias winter mountain landscape photo]<br />
              <em>Mount St. Elias and surrounding peaks in pristine winter conditions</em>
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
              While off-season travel offers incredible benefits, it's important to understand the extreme challenges:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              margin: '1.5rem 0'
            }}>
              <div style={{
                background: '#f3e8ff',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #a855f7'
              }}>
                <h3 style={{ color: '#6b21a8', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>✅ Advantages</h3>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li>Ultimate wilderness solitude and pristine conditions</li>
                  <li>World-class mountaineering and technical climbing</li>
                  <li>Unique glacier travel and ice climbing opportunities</li>
                  <li>Incredible winter photography and northern lights</li>
                  <li>Authentic Alaska wilderness experience</li>
                  <li>Access to technical routes and remote areas</li>
                </ul>
              </div>
              <div style={{
                background: '#fef3c7',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: '1px solid #f59e0b'
              }}>
                <h3 style={{ color: '#92400e', fontSize: '1.3rem', margin: '0 0 1rem 0' }}>⚠️ Extreme Challenges</h3>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  <li>Severe weather: -40°F temperatures possible</li>
                  <li>Expert mountaineering skills absolutely required</li>
                  <li>Extremely expensive access and specialized gear</li>
                  <li>High avalanche and crevasse danger</li>
                  <li>Limited emergency rescue capabilities</li>
                  <li>Self-rescue and survival skills essential</li>
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
              Plan your expedition with confidence using our detailed weather data for Wrangell-St. Elias National Park during September-May:
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
                    <td style={{ padding: '1rem', fontWeight: '600' }}>September</td>
                    <td style={{ padding: '1rem' }}>45°F</td>
                    <td style={{ padding: '1rem' }}>25°F</td>
                    <td style={{ padding: '1rem' }}>3.2 inches</td>
                    <td style={{ padding: '1rem' }}>Cool, possible early snow</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb', backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>January</td>
                    <td style={{ padding: '1rem' }}>10°F</td>
                    <td style={{ padding: '1rem' }}>-20°F</td>
                    <td style={{ padding: '1rem' }}>2.8 inches</td>
                    <td style={{ padding: '1rem' }}>Extreme cold, heavy snow</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>March</td>
                    <td style={{ padding: '1rem' }}>25°F</td>
                    <td style={{ padding: '1rem' }}>-5°F</td>
                    <td style={{ padding: '1rem' }}>2.1 inches</td>
                    <td style={{ padding: '1rem' }}>Deep snow, avalanche season</td>
                  </tr>
                  <tr style={{ backgroundColor: '#f9fafb' }}>
                    <td style={{ padding: '1rem', fontWeight: '600' }}>May</td>
                    <td style={{ padding: '1rem' }}>50°F</td>
                    <td style={{ padding: '1rem' }}>30°F</td>
                    <td style={{ padding: '1rem' }}>1.8 inches</td>
                    <td style={{ padding: '1rem' }}>Spring conditions, unstable snow</td>
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
              [Weather chart showing extreme mountain conditions]<br />
              <em>Temperature extremes and precipitation patterns for expedition planning</em>
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
              Make the most of your Wrangell-St. Elias National Park off-season expedition with these essential tips:
            </p>
            
            <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Expert Mountaineering Training Required</strong><br />
                This is not a beginner park. Extensive experience with technical mountaineering, glacier travel, crevasse rescue, and avalanche safety is absolutely essential.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Professional Guide Services Recommended</strong><br />
                Consider hiring certified guides familiar with local conditions. The park's immense size and technical challenges require local expertise.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Comprehensive Emergency Preparedness</strong><br />
                Carry satellite communication devices, comprehensive first aid, and emergency shelter. Self-rescue capability is essential as help may be days away.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Specialized Polar Equipment</strong><br />
                Bring expedition-grade gear rated for extreme conditions: -40°F sleeping systems, mountaineering tents, and professional rescue equipment.
              </li>
              <li style={{ marginBottom: '1rem' }}>
                <strong>Extensive Route Planning</strong><br />
                Study topographic maps, weather patterns, and historical conditions. Plan multiple route options and contingency plans for weather delays.
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
              Essential pre-expedition checklist for your Wrangell-St. Elias National Park off-season adventure:
            </p>
            
            <h3 style={{ color: '#6b21a8', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Permits & Planning</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>No entrance fees but backcountry permits recommended</li>
              <li>Mountaineering registration with park service</li>
              <li>Emergency communication and evacuation plan</li>
              <li>Weather monitoring and route assessment</li>
            </ul>

            <h3 style={{ color: '#6b21a8', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Essential Equipment</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Professional mountaineering and glacier travel gear</li>
              <li>Expedition-grade cold weather clothing systems</li>
              <li>Satellite communicator and emergency beacon</li>
              <li>Technical rescue equipment and avalanche gear</li>
              <li>High-altitude expedition supplies</li>
            </ul>

            <h3 style={{ color: '#6b21a8', fontSize: '1.3rem', margin: '1.5rem 0 1rem 0' }}>Critical Safety Requirements</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Expert-level mountaineering and technical climbing skills</li>
              <li>Extensive glacier travel and crevasse rescue training</li>
              <li>Avalanche education and hazard assessment</li>
              <li>Wilderness first responder or higher medical training</li>
              <li>Self-rescue and emergency survival capabilities</li>
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
              Multi-Day Expedition Itinerary
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Ready to plan your ultimate Wrangell-St. Elias National Park off-season expedition? Our detailed itinerary covers everything from technical route planning to emergency protocols.
            </p>
            
            <a 
              href="/wrangell-st-elias-itinerary"
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
              📅 Get Your Complete Expedition Itinerary
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
            <FeedbackForm parkSlug="wrangell-st-elias" />
          </section>
        </main>
      </div>
    </div>
  );
};

export default WrangellStEliasReactTemplate;