import React, { useEffect } from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm.jsx';

const GrandTetonReactTemplate = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      {/* Header Section */}
      <header style={{
        background: 'linear-gradient(135deg, #1e3a8a, #3730a3)',
        color: 'white',
        padding: '2rem 0',
        textAlign: 'center',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem', margin: 0 }}>
          Grand Teton National Park: Off-Season Guide
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Experience America's most dramatic mountain range during fall and spring - pristine wilderness, incredible wildlife, perfect photography conditions
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
              color: '#1e3a8a',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #3730a3',
              paddingBottom: '0.5rem'
            }}>
              Off-Season Highlights
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Grand Teton National Park transforms into a photographer's paradise during fall and spring months. Here's why off-season travel offers the ultimate alpine adventure:
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              <div style={{
                background: '#eff6ff',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #1e3a8a'
              }}>
                <h3 style={{ color: '#3730a3', marginBottom: '1rem' }}>Pristine Wildlife Viewing</h3>
                <p>Experience elk bugling, moose sightings, and 300+ bird species without the summer crowds that can exceed 25,000 daily visitors.</p>
              </div>
              
              <div style={{
                background: '#eff6ff',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #1e3a8a'
              }}>
                <h3 style={{ color: '#3730a3', marginBottom: '1rem' }}>65% Cost Savings</h3>
                <p>Enjoy significant savings on lodging and activities. Jackson Lake Lodge rates drop from $600+ to under $200 per night during off-season.</p>
              </div>
              
              <div style={{
                background: '#eff6ff',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #1e3a8a'
              }}>
                <h3 style={{ color: '#3730a3', marginBottom: '1rem' }}>Perfect Mountain Photography</h3>
                <p>Capture stunning fall aspens and spring wildflowers with the iconic Teton Range. Clear, crisp air provides incredible visibility and lighting.</p>
              </div>
            </div>
          </section>

          {/* Activities Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#1e3a8a',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #3730a3',
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
                background: '#f0f9ff',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #0284c7'
              }}>
                <h3 style={{ color: '#3730a3', marginBottom: '1rem' }}>Jenny Lake & Cascade Canyon</h3>
                <p style={{ marginBottom: '1rem' }}>
                  Take the scenic boat shuttle across pristine Jenny Lake and hike into Cascade Canyon surrounded by towering 13,000-foot peaks.
                </p>
                <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#0369a1' }}>
                  Fall offers golden aspens and crisp reflections, spring brings wildflowers and powerful waterfalls.
                </p>
              </div>

              <div style={{
                background: '#f0f9ff',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #0284c7'
              }}>
                <h3 style={{ color: '#3730a3', marginBottom: '1rem' }}>Mormon Row Historic District</h3>
                <p style={{ marginBottom: '1rem' }}>
                  Photograph the iconic Moulton Barn with the Teton Range backdrop, and explore the preserved homesteads of early settlers.
                </p>
                <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#0369a1' }}>
                  Best photographed at sunrise with dramatic mountain silhouettes and golden light on weathered buildings.
                </p>
              </div>

              <div style={{
                background: '#f0f9ff',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #0284c7'
              }}>
                <h3 style={{ color: '#3730a3', marginBottom: '1rem' }}>Jackson Lake Scenic Drive</h3>
                <p style={{ marginBottom: '1rem' }}>
                  Drive the shoreline of massive Jackson Lake with continuous Teton Range views and wildlife viewing opportunities.
                </p>
                <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#0369a1' }}>
                  Stop at Oxbow Bend for moose sightings and Signal Mountain for panoramic valley views.
                </p>
              </div>

              <div style={{
                background: '#f0f9ff',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '1px solid #0284c7'
              }}>
                <h3 style={{ color: '#3730a3', marginBottom: '1rem' }}>Taggart Lake Trail</h3>
                <p style={{ marginBottom: '1rem' }}>
                  Moderate 3-mile hike to pristine alpine lake nestled directly beneath the towering Grand Teton massif.
                </p>
                <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: '#0369a1' }}>
                  Perfect off-season temperatures for hiking with fewer crowds and better wildlife encounters.
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
                  <li>Bear spray for all hiking activities</li>
                  <li>Layered clothing for temperature changes</li>
                  <li>Waterproof hiking boots</li>
                  <li>Binoculars for wildlife viewing</li>
                  <li>Camera with extra batteries (cold weather)</li>
                  <li>Headlamp for early morning photography</li>
                </ul>
              </div>

              <div style={{
                background: '#fef3c7',
                padding: '1.5rem',
                borderRadius: '0.5rem'
              }}>
                <h3 style={{ color: '#d97706', marginBottom: '1rem' }}>Best Times to Visit</h3>
                <div style={{ marginBottom: '1rem' }}>
                  <h4 style={{ color: '#b45309', marginBottom: '0.5rem' }}>Fall (September - October)</h4>
                  <p style={{ fontSize: '0.9rem', color: '#92400e' }}>Elk bugling season, golden aspens, perfect photography weather, and wildlife preparing for winter.</p>
                </div>
                <div>
                  <h4 style={{ color: '#b45309', marginBottom: '0.5rem' }}>Spring (April - May)</h4>
                  <p style={{ fontSize: '0.9rem', color: '#92400e' }}>Wildlife births, wildflower blooms, rushing waterfalls, and comfortable hiking temperatures.</p>
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
                  <p style={{ fontSize: '0.9rem', color: '#92400e' }}>Days: 40-65°F | Nights: 15-35°F<br/>Clear skies, perfect for stargazing and mountain photography</p>
                </div>
                <div>
                  <h4 style={{ color: '#b45309', marginBottom: '0.5rem' }}>Spring Weather</h4>
                  <p style={{ fontSize: '0.9rem', color: '#92400e' }}>Days: 45-70°F | Nights: 20-40°F<br/>Variable conditions, pack for all weather scenarios</p>
                </div>
              </div>
            </div>
          </section>

          {/* Sample Itinerary */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#1e3a8a',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #3730a3',
              paddingBottom: '0.5rem'
            }}>
              4-Day Off-Season Itinerary
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '1.5rem'
            }}>
              <div style={{
                background: '#f0f9ff',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '2px solid #0284c7'
              }}>
                <h3 style={{ color: '#3730a3', marginBottom: '1rem' }}>Day 1: Jackson Lake Exploration</h3>
                <ul style={{ paddingLeft: '1.2rem', color: '#0369a1' }}>
                  <li>Morning: Colter Bay Visitor Center & exhibits</li>
                  <li>Afternoon: Jackson Lake Dam scenic drive</li>  
                  <li>Evening: Signal Mountain summit for sunset</li>
                  <li>Night: Stargazing at Jackson Lake Lodge</li>
                </ul>
              </div>

              <div style={{
                background: '#f0f9ff',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '2px solid #0284c7'
              }}>
                <h3 style={{ color: '#3730a3', marginBottom: '1rem' }}>Day 2: Jenny Lake & Cascade Canyon</h3>
                <ul style={{ paddingLeft: '1.2rem', color: '#0369a1' }}>
                  <li>Morning: Jenny Lake boat shuttle</li>
                  <li>Midday: Cascade Canyon hike & Hidden Falls</li>
                  <li>Afternoon: Inspiration Point climb</li>
                  <li>Evening: Lakeside reflection photography</li>
                </ul>
              </div>

              <div style={{
                background: '#f0f9ff',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '2px solid #0284c7'
              }}>
                <h3 style={{ color: '#3730a3', marginBottom: '1rem' }}>Day 3: Mormon Row & Wildlife</h3>
                <ul style={{ paddingLeft: '1.2rem', color: '#0369a1' }}>
                  <li>Dawn: Sunrise at Moulton Barn</li>
                  <li>Morning: Antelope Flats wildlife drive</li>
                  <li>Afternoon: Taggart Lake trail hike</li>
                  <li>Evening: Oxbow Bend moose viewing</li>
                </ul>
              </div>

              <div style={{
                background: '#f0f9ff',
                padding: '1.5rem',
                borderRadius: '0.5rem',
                border: '2px solid #0284c7'
              }}>
                <h3 style={{ color: '#3730a3', marginBottom: '1rem' }}>Day 4: Teton Village & Reflection</h3>
                <ul style={{ paddingLeft: '1.2rem', color: '#0369a1' }}>
                  <li>Morning: Aerial tram (seasonal) or village explore</li>
                  <li>Midday: Menor's Ferry historic area</li>
                  <li>Afternoon: Final mountain photography</li>
                  <li>Evening: Jackson town dining & shopping</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Itinerary Link Section */}
          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{
              color: '#1e3a8a',
              fontSize: '1.8rem',
              marginBottom: '1.5rem',
              borderBottom: '3px solid #3730a3',
              paddingBottom: '0.5rem'
            }}>
              Complete 4-Day Itinerary
            </h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Ready to plan your perfect Grand Teton National Park off-season adventure? Our detailed itinerary covers everything from alpine lakes to wildlife viewing hotspots.
            </p>
            
            <a 
              href="/grand-teton-itinerary"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #1e3a8a, #3730a3)',
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
              📅 Get Your Complete 4-Day Itinerary
            </a>
          </section>

          {/* Call to Action */}
          <section style={{
            background: 'linear-gradient(135deg, #1e3a8a, #3730a3)',
            color: 'white',
            padding: '2rem',
            borderRadius: '0.75rem',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>
            <h2 style={{ marginBottom: '1rem' }}>Ready to Experience America's Alps?</h2>
            <p style={{ marginBottom: '1.5rem', opacity: '0.9' }}>
              Book your off-season Grand Teton adventure and discover why fall and spring offer the most spectacular mountain experiences.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="/grand-teton-itinerary"
                style={{
                  background: 'white',
                  color: '#3730a3',
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
                View Complete Grand Teton Itinerary →
              </a>
              <a
                href="https://www.nps.gov/grte/index.htm"
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
                Official NPS Grand Teton Site
              </a>
            </div>
          </section>
        </main>
      </div>

      {/* Feedback Form */}
      <FeedbackForm parkSlug="grand-teton" />
    </div>
  );
};

export default GrandTetonReactTemplate;
