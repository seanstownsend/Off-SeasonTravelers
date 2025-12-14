import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const GreatBasinReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #a6763c, #b8854a)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Great Basin National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Discover Nevada's hidden gem during fall and spring - ancient bristlecone pines, pristine caves, world-class stargazing
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
              borderBottom: '3px solid #8b5cf6',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Great Basin National Park offers an intimate wilderness experience during fall and spring months. Here's why off-season travel provides the ultimate high desert adventure:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              <div style={{
                background: '#f3e8ff',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #7c3aed'
              }}>
                <h3 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>Ancient Bristlecone Pines</h3>
                <p>Walk among trees over 4,000 years old in comfortable temperatures, without summer crowds. These living monuments predate the pyramids.</p>
              </div>
              
              <div style={{
                background: '#f3e8ff',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #7c3aed'
              }}>
                <h3 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>90% Fewer Visitors</h3>
                <p>Experience true solitude in America's least visited national park. Fall and spring see only 200-300 visitors per day compared to 1,000+ in summer.</p>
              </div>
              
              <div style={{
                background: '#f3e8ff',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #7c3aed'
              }}>
                <h3 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>Gold-Level Dark Skies</h3>
                <p>World-class stargazing under International Dark Sky designation. Fall and spring offer perfect temperatures for nighttime astronomy programs.</p>
              </div>
            </div>
          </section>

          {/* Activities Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#7c3aed',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #8b5cf6',
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
                background: '#faf5ff',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #a78bfa'
              }}>
                <h3 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>Lehman Caves Tours</h3>
                <p style={{ marginBottom: '1rem' }}>
                  Explore beautiful limestone caves with rare shield formations. Constant 50°F temperature provides comfortable year-round touring.
                </p>
                <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#7c2d92' }}>
                  Off-season tours are more intimate with smaller groups and extended ranger discussions.
                </p>
              </div>

              <div style={{
                background: '#faf5ff',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #a78bfa'
              }}>
                <h3 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>Bristlecone Pine Trail</h3>
                <p style={{ marginBottom: '1rem' }}>
                  Moderate 2.8-mile hike to ancient trees at 10,000+ feet elevation. Cool off-season temperatures make high-altitude hiking comfortable.
                </p>
                <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#7c2d92' }}>
                  Spring and fall provide perfect hiking conditions without summer heat or winter snow closures.
                </p>
              </div>

              <div style={{
                background: '#faf5ff',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #a78bfa'
              }}>
                <h3 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>Wheeler Peak Scenic Drive</h3>
                <p style={{ marginBottom: '1rem' }}>
                  12-mile drive to over 10,000 feet with spectacular desert and mountain views. Access higher elevations seasonally.
                </p>
                <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#7c2d92' }}>
                  Fall aspens and spring wildflowers add seasonal beauty to the dramatic high desert landscape.
                </p>
              </div>

              <div style={{
                background: '#faf5ff',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #a78bfa'
              }}>
                <h3 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>Astronomy Programs</h3>
                <p style={{ marginBottom: '1rem' }}>
                  Join ranger-led stargazing under some of the darkest skies in the country. Perfect fall and spring temperatures for night activities.
                </p>
                <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#7c2d92' }}>
                  International Dark Sky Gold designation ensures incredible views of Milky Way and deep space objects.
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
                  <li>Warm clothing for high elevation and night activities</li>
                  <li>Sturdy hiking boots for rocky terrain</li>
                  <li>Headlamp and red flashlight for stargazing</li>
                  <li>Plenty of water - high desert environment</li>
                  <li>Camera with extra batteries (cold weather)</li>
                  <li>Food supplies - limited park services</li>
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
                  <p style={{ fontSize: '0.9rem', color: '#92400e' }}>Perfect stargazing weather, comfortable hiking temperatures, and golden aspen colors at high elevations.</p>
                </div>
                <div>
                  <h4 style={{ color: '#b45309', marginBottom: '0.5rem' }}>Spring (April - May)</h4>
                  <p style={{ fontSize: '0.9rem', color: '#92400e' }}>Wildflower blooms, rushing mountain streams, and excellent cave touring conditions.</p>
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
                  <p style={{ fontSize: '0.9rem', color: '#92400e' }}>Days: 50-70°F | Nights: 25-45°F<br/>Clear skies perfect for stargazing and mountain photography</p>
                </div>
                <div>
                  <h4 style={{ color: '#b45309', marginBottom: '0.5rem' }}>Spring Weather</h4>
                  <p style={{ fontSize: '0.9rem', color: '#92400e' }}>Days: 45-65°F | Nights: 20-40°F<br/>Variable conditions, occasional snow at high elevations</p>
                </div>
              </div>
            </div>
          </section>

          {/* Sample Itinerary */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#7c3aed',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #8b5cf6',
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
                background: '#faf5ff',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '2px solid #a78bfa'
              }}>
                <h3 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>Day 1: Caves & Orientation</h3>
                <ul style={{ paddingLeft: '1.2rem', color: '#7c2d92' }}>
                  <li>Morning: Great Basin Visitor Center</li>
                  <li>Afternoon: Lehman Caves guided tour</li>  
                  <li>Evening: Mountain View Nature Trail</li>
                  <li>Night: Stargazing introduction</li>
                </ul>
              </div>

              <div style={{
                background: '#faf5ff',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '2px solid #a78bfa'
              }}>
                <h3 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>Day 2: Ancient Trees & High Country</h3>
                <ul style={{ paddingLeft: '1.2rem', color: '#7c2d92' }}>
                  <li>Morning: Wheeler Peak Scenic Drive</li>
                  <li>Midday: Bristlecone Pine Trail hike</li>
                  <li>Afternoon: Alpine Lakes Trail (optional)</li>
                  <li>Evening: High elevation photography</li>
                </ul>
              </div>

              <div style={{
                background: '#faf5ff',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '2px solid #a78bfa'
              }}>
                <h3 style={{ color: '#8b5cf6', marginBottom: '1rem' }}>Day 3: Cultural Sites & Dark Skies</h3>
                <ul style={{ paddingLeft: '1.2rem', color: '#7c2d92' }}>
                  <li>Morning: Baker Archaeological Site</li>
                  <li>Afternoon: Lexington Arch Trail</li>
                  <li>Evening: Ranger astronomy program</li>
                  <li>Night: Milky Way photography</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Itinerary Link Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#7c3aed',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #8b5cf6',
              paddingBottom: '0.5rem'
            }}>
              Complete 3-Day Itinerary
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Ready to plan your perfect Great Basin National Park off-season adventure? Our detailed itinerary covers everything from ancient trees to world-class stargazing.
            </p>
            
            <a 
              href="/great-basin-itinerary"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #7c3aed, #8b5cf6)',
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
            background: 'linear-gradient(135deg, #7c3aed, #8b5cf6)',
            color: 'white',
            padding: '2rem',
            borderRadius: '0.75rem',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <h2 style={{ marginBottom: '1rem' }}>Ready to Discover Nevada's Hidden Treasure?</h2>
            <p style={{ marginBottom: '1.5rem', opacity: '0.9' }}>
              Book your off-season Great Basin adventure and experience ancient forests, pristine caves, and world-class dark skies.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="/great-basin-itinerary"
                style={{
                  background: 'white',
                  color: '#8b5cf6',
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
                View Complete Great Basin Itinerary →
              </a>
              <a
                href="https://www.nps.gov/grba/index.htm"
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
                Official NPS Great Basin Site
              </a>
            </div>
          </section>
        </main>
      </div>

      {/* Feedback Form */}
      <FeedbackForm parkSlug="great-basin" />
    </div>
  );
};

export default GreatBasinReactTemplate;
