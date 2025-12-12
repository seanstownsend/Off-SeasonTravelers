import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const MesaVerdeReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #059669, #0d9488)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Mesa Verde National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Discover ancient cliff dwellings and Ancestral Puebloan culture during fall and spring - intimate tours, fewer crowds, archaeological wonders
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
              color: '#059669',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #0d9488',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Experience Mesa Verde National Park like never before during fall and spring months. Here's why off-season travel offers the ultimate archaeological adventure:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              <div style={{
                background: '#ecfdf5',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #059669'
              }}>
                <h3 style={{ color: '#0d9488', marginBottom: '1rem' }}>Intimate Cliff Tours</h3>
                <p>Experience Cliff Palace and Balcony House with small groups and expert rangers, without the summer crowds of 2,000+ daily visitors.</p>
              </div>
              
              <div style={{
                background: '#ecfdf5',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #059669'
              }}>
                <h3 style={{ color: '#0d9488', marginBottom: '1rem' }}>70% Fewer Crowds</h3>
                <p>Experience the sacred silence of ancient sites with significantly fewer visitors. Have Cliff Palace and Balcony House almost to yourself.</p>
              </div>
              
              <div style={{
                background: '#ecfdf5',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #059669'
              }}>
                <h3 style={{ color: '#0d9488', marginBottom: '1rem' }}>Perfect Photography</h3>
                <p>Dramatic lighting on sandstone cliffs and ruins. Fall colors contrast beautifully with ancient architecture and canyon landscapes.</p>
              </div>
            </div>
          </section>

          {/* Activities Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#059669',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #0d9488',
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
                background: '#f0fdf4',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #22c55e'
              }}>
                <h3 style={{ color: '#0d9488', marginBottom: '1rem' }}>Cliff Palace Guided Tours</h3>
                <p style={{ marginBottom: '1rem' }}>
                  Explore the largest cliff dwelling in North America with expert rangers. Limited group sizes provide intimate experiences with ancient history.
                </p>
                <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#047857' }}>
                  Advance reservations required. Tours run spring through fall with perfect weather conditions.
                </p>
              </div>

              <div style={{
                background: '#f0fdf4',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #22c55e'
              }}>
                <h3 style={{ color: '#0d9488', marginBottom: '1rem' }}>Balcony House Adventure</h3>
                <p style={{ marginBottom: '1rem' }}>
                  Experience the most adventurous cliff dwelling tour with ladders and tunnels. Cool fall and spring temperatures make climbing comfortable.
                </p>
                <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#047857' }}>
                  Moderate difficulty. Not recommended for those with mobility issues or fear of heights.
                </p>
              </div>

              <div style={{
                background: '#f0fdf4',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #22c55e'
              }}>
                <h3 style={{ color: '#0d9488', marginBottom: '1rem' }}>Archaeological Museum</h3>
                <p style={{ marginBottom: '1rem' }}>
                  World-class museum showcasing Ancestral Puebloan artifacts, dioramas, and interactive exhibits about ancient culture and daily life.
                </p>
                <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#047857' }}>
                  Perfect activity for cooler weather days. Excellent introduction before cliff dwelling tours.
                </p>
              </div>

              <div style={{
                background: '#f0fdf4',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #22c55e'
              }}>
                <h3 style={{ color: '#0d9488', marginBottom: '1rem' }}>Mesa Top Loop Road</h3>
                <p style={{ marginBottom: '1rem' }}>
                  Self-guided drive with overlooks of cliff dwellings and pit houses. Stop at archaeological sites and scenic viewpoints.
                </p>
                <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#047857' }}>
                  6-mile loop with multiple stops. Best lighting for photography in morning and late afternoon.
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
              color: '#059669',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #0d9488',
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
                background: '#f0fdf4',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '2px solid #22c55e'
              }}>
                <h3 style={{ color: '#0d9488', marginBottom: '1rem' }}>Day 1: Archaeological Discovery</h3>
                <ul style={{ paddingLeft: '1.2rem', color: '#047857' }}>
                  <li>Morning: Chapin Mesa Museum & overlooks</li>
                  <li>Afternoon: Cliff Palace guided tour</li>  
                  <li>Evening: Mesa Top Loop Road sunset drive</li>
                  <li>Night: Far View Lodge stargazing</li>
                </ul>
              </div>

              <div style={{
                background: '#f0fdf4',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '2px solid #22c55e'
              }}>
                <h3 style={{ color: '#0d9488', marginBottom: '1rem' }}>Day 2: Adventure & Exploration</h3>
                <ul style={{ paddingLeft: '1.2rem', color: '#047857' }}>
                  <li>Morning: Balcony House adventure tour</li>
                  <li>Midday: Wetherill Mesa exploration</li>
                  <li>Afternoon: Long House guided tour</li>
                  <li>Evening: Cultural programs at visitor center</li>
                </ul>
              </div>

              <div style={{
                background: '#f0fdf4',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '2px solid #22c55e'
              }}>
                <h3 style={{ color: '#0d9488', marginBottom: '1rem' }}>Day 3: Cultural Immersion</h3>
                <ul style={{ paddingLeft: '1.2rem', color: '#047857' }}>
                  <li>Morning: Step House self-guided tour</li>
                  <li>Afternoon: Petroglyph Point Trail hike</li>
                  <li>Evening: Cortez Cultural Center visit</li>
                  <li>Night: Traditional pottery demonstration</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Itinerary Link Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#059669',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #0d9488',
              paddingBottom: '0.5rem'
            }}>
              Complete 3-Day Itinerary
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Ready to plan your perfect Mesa Verde National Park off-season adventure? Our detailed itinerary covers everything from must-see cliff dwellings to cultural sites.
            </p>
            
            <a 
              href="/mesa-verde-itinerary"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #059669, #0d9488)',
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
            background: 'linear-gradient(135deg, #059669, #0d9488)',
            color: 'white',
            padding: '2rem',
            borderRadius: '0.75rem',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <h2 style={{ marginBottom: '1rem' }}>Ready to Explore Ancient Civilizations?</h2>
            <p style={{ marginBottom: '1.5rem', opacity: '0.9' }}>
              Book your off-season Mesa Verde adventure and discover 700+ years of Ancestral Puebloan culture in intimate, uncrowded settings.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="/mesa-verde-itinerary"
                style={{
                  background: 'white',
                  color: '#0d9488',
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
                View Complete Mesa Verde Itinerary →
              </a>
              <a
                href="https://www.nps.gov/meve/index.htm"
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
                Official NPS Mesa Verde Site
              </a>
            </div>
          </section>
        </main>
      </div>

      {/* Feedback Form */}
      <FeedbackForm parkSlug="mesa-verde" />
    </div>
  );
};

export default MesaVerdeReactTemplate;