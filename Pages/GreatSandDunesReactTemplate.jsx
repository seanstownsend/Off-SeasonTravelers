import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const GreatSandDunesReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #f59e0b, #d97706)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Great Sand Dunes National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Experience North America's tallest sand dunes during fall and spring - perfect weather, fewer crowds, incredible stargazing
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
              color: '#f59e0b',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #d97706',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Great Sand Dunes National Park like never before during fall and spring months. Here's why off-season travel offers the ultimate sand dune adventure:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              <div style={{
                background: '#fef3c7',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #f59e0b'
              }}>
                <h3 style={{ color: '#d97706', marginBottom: '1rem' }}>Perfect Weather</h3>
                <p>Fall and spring temperatures (45-65°F) are ideal for hiking the dunes without scorching summer heat. Sand temperatures are comfortable for barefoot exploration.</p>
              </div>
              
              <div style={{
                background: '#fef3c7',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #f59e0b'
              }}>
                <h3 style={{ color: '#d97706', marginBottom: '1rem' }}>75% Fewer Crowds</h3>
                <p>Experience the magical silence of the dunes with significantly fewer visitors. Have popular spots like High Dune and Star Dune almost to yourself.</p>
              </div>
              
              <div style={{
                background: '#fef3c7',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #f59e0b'
              }}>
                <h3 style={{ color: '#d97706', marginBottom: '1rem' }}>Dark Sky Sanctuary</h3>
                <p>Longer nights and clearer skies make fall and spring perfect for astronomy. The park is recognized as an International Dark Sky Park.</p>
              </div>
            </div>
          </section>

          {/* Activities Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#f59e0b',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #d97706',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Activities
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem'
            }}>
              <div style={{
                background: '#fffbeb',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #fbbf24'
              }}>
                <h3 style={{ color: '#d97706', marginBottom: '1rem' }}>Sandboarding & Sand Sledding</h3>
                <p style={{ marginBottom: '1rem' }}>
                  Perfect conditions for sand sports without extreme summer heat. Rent boards in nearby Alamosa or bring cardboard for sledding.
                </p>
                <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#92400e' }}>
                  Best sandboarding is on steepest faces facing away from prevailing winds.
                </p>
              </div>

              <div style={{
                background: '#fffbeb',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #fbbf24'
              }}>
                <h3 style={{ color: '#d97706', marginBottom: '1rem' }}>Astrophotography</h3>
                <p style={{ marginBottom: '1rem' }}>
                  Capture the Milky Way rising over the dunes. Fall and spring offer ideal conditions with clear skies and comfortable nighttime temperatures.
                </p>
                <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#92400e' }}>
                  Best spots: High Dune summit or Point of No Return for dramatic compositions.
                </p>
              </div>

              <div style={{
                background: '#fffbeb',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #fbbf24'
              }}>
                <h3 style={{ color: '#d97706', marginBottom: '1rem' }}>Wildlife Viewing</h3>
                <p style={{ marginBottom: '1rem' }}>
                  Spot elk in Medano Creek area, great blue herons at wetlands, and numerous migratory birds during spring and fall migrations.
                </p>
                <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#92400e' }}>
                  Best times: Early morning and late afternoon when animals are most active.
                </p>
              </div>

              <div style={{
                background: '#fffbeb',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #fbbf24'
              }}>
                <h3 style={{ color: '#d97706', marginBottom: '1rem' }}>Photography Workshops</h3>
                <p style={{ marginBottom: '1rem' }}>
                  Capture dramatic sunrise/sunset light on dunes, unique patterns in sand, and spectacular mountain backdrops of the Sangre de Cristo range.
                </p>
                <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#92400e' }}>
                  Golden hour: 30 minutes after sunrise and before sunset create the most dramatic lighting.
                </p>
              </div>
            </div>
          </section>

          {/* Planning Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#f59e0b',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #d97706',
              paddingBottom: '0.5rem'
            }}>
              Planning Your Off-Season Visit
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              <div style={{
                background: '#fef3c7',
                padding: '1.5rem',
                borderRadius: '0.5rem'
              }}>
                <h3 style={{ color: '#d97706', marginBottom: '1rem' }}>What to Bring</h3>
                <ul style={{ paddingLeft: '1.2rem', color: '#92400e' }}>
                  <li>Layered clothing for temperature changes</li>
                  <li>Closed-toe shoes for dune hiking</li>
                  <li>Sunglasses and sunscreen (sand reflection)</li>
                  <li>Water bottles and electrolyte snacks</li>
                  <li>Red flashlight for stargazing</li>
                  <li>Camera with extra batteries (cold weather)</li>
                </ul>
              </div>

              <div style={{
                background: '#fef3c7',
                padding: '1.5rem',
                borderRadius: '0.5rem'
              }}>
                <h3 style={{ color: '#d97706', marginBottom: '1rem' }}>Best Times to Visit</h3>
                <div style={{ marginBottom: '1rem' }}>
                  <h4 style={{ color: '#b45309', marginBottom: '0.5rem' }}>Fall (September - November)</h4>
                  <p style={{ fontSize: '0.9rem', color: '#92400e' }}>Perfect temperatures, clear skies, and excellent wildlife viewing. Aspen colors in nearby mountains.</p>
                </div>
                <div>
                  <h4 style={{ color: '#b45309', marginBottom: '0.5rem' }}>Spring (March - May)</h4>
                  <p style={{ fontSize: '0.9rem', color: '#92400e' }}>Medano Creek flows for splashing fun, wildflowers bloom, and migratory birds return.</p>
                </div>
              </div>

              <div style={{
                background: '#fef3c7',
                padding: '1.5rem',
                borderRadius: '0.5rem'
              }}>
                <h3 style={{ color: '#d97706', marginBottom: '1rem' }}>Off-Season Weather</h3>
                <div style={{ marginBottom: '1rem' }}>
                  <h4 style={{ color: '#b45309', marginBottom: '0.5rem' }}>Fall Weather</h4>
                  <p style={{ fontSize: '0.9rem', color: '#92400e' }}>Days: 50-65°F | Nights: 25-40°F<br/>Perfect for hiking, clear skies for stargazing</p>
                </div>
                <div>
                  <h4 style={{ color: '#b45309', marginBottom: '0.5rem' }}>Spring Weather</h4>
                  <p style={{ fontSize: '0.9rem', color: '#92400e' }}>Days: 45-60°F | Nights: 20-35°F<br/>Medano Creek seasonal flow, wildflower blooms</p>
                </div>
              </div>
            </div>
          </section>

          {/* Sample Itinerary */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#f59e0b',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #d97706',
              paddingBottom: '0.5rem'
            }}>
              3-Day Off-Season Itinerary
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              <div style={{
                background: '#fffbeb',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '2px solid #fbbf24'
              }}>
                <h3 style={{ color: '#d97706', marginBottom: '1rem' }}>Day 1: Dune Exploration</h3>
                <ul style={{ paddingLeft: '1.2rem', color: '#92400e' }}>
                  <li>Morning: High Dune hike (3 miles RT)</li>
                  <li>Afternoon: Sandboarding on slip faces</li>  
                  <li>Evening: Sunset photography</li>
                  <li>Night: Stargazing at Pinyon Flats</li>
                </ul>
              </div>

              <div style={{
                background: '#fffbeb',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '2px solid #fbbf24'
              }}>
                <h3 style={{ color: '#d97706', marginBottom: '1rem' }}>Day 2: Ecosystems & Wildlife</h3>
                <ul style={{ paddingLeft: '1.2rem', color: '#92400e' }}>
                  <li>Morning: Medano Creek Trail</li>
                  <li>Midday: Visitor center exhibits</li>
                  <li>Afternoon: Wetlands wildlife viewing</li>
                  <li>Evening: Zapata Falls excursion</li>
                </ul>
              </div>

              <div style={{
                background: '#fffbeb',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '2px solid #fbbf24'
              }}>
                <h3 style={{ color: '#d97706', marginBottom: '1rem' }}>Day 3: Adventure & Relaxation</h3>
                <ul style={{ paddingLeft: '1.2rem', color: '#92400e' }}>
                  <li>Morning: Star Dune challenge hike</li>
                  <li>Afternoon: Sand sledding fun</li>
                  <li>Evening: Alamosa hot springs</li>
                  <li>Night: Final astrophotography session</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Itinerary Link Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#f59e0b',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #d97706',
              paddingBottom: '0.5rem'
            }}>
              Complete 3-Day Itinerary
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Ready to plan your perfect Great Sand Dunes National Park off-season adventure? Our detailed itinerary covers everything from sandboarding to stargazing.
            </p>
            
            <a 
              href="/great-sand-dunes-itinerary"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #f59e0b, #d97706)',
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
              📅 Get Your Complete 3-Day Itinerary
            </a>
          </section>

          {/* Call to Action */}
          <section style={{
            background: 'linear-gradient(135deg, #f59e0b, #d97706)',
            color: 'white',
            padding: '2rem',
            borderRadius: '0.75rem',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <h2 style={{ marginBottom: '1rem' }}>Ready to Experience the Magic of the Dunes?</h2>
            <p style={{ marginBottom: '1.5rem', opacity: '0.9' }}>
              Book your off-season Great Sand Dunes adventure and discover why fall and spring are the best times to visit North America's tallest sand dunes.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="/great-sand-dunes-itinerary"
                style={{
                  background: 'white',
                  color: '#d97706',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'transform 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
              >
                View Complete Sand Dunes Itinerary →
              </a>
              <a
                href="https://www.nps.gov/grsa/index.htm"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'transparent',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.5rem',
                  border: '2px solid white',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'transform 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
              >
                Official NPS Sand Dunes Site
              </a>
            </div>
          </section>
        </main>
      </div>

      {/* Feedback Form */}
      <FeedbackForm parkSlug="great-sand-dunes" />
    </div>
  );
};

export default GreatSandDunesReactTemplate;