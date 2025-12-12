import React, { useEffect } from 'react';

const BigBendItinerary = () => {
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
          Big Bend National Park: Complete Itinerary
        </h1>
        <p style={{ fontSize: '1.2rem', opacity: '0.9', margin: 0 }}>
          Your ultimate 3-5 day guide to exploring Texas's remote Chihuahuan Desert wilderness
        </p>
      </header>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {/* Overview Section */}
        <section style={{
          background: '#ffffff',
          borderRadius: '0.75rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          padding: '2.5rem',
          marginBottom: '2rem'
        }}>
          <h2 style={{
            color: '#a16207',
            fontSize: '1.8rem',
            marginBottom: '1.5rem',
            borderBottom: '3px solid #d97706',
            paddingBottom: '0.5rem'
          }}>
            Itinerary Overview
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              border: '1px solid #f59e0b'
            }}>
              <h3 style={{ color: '#a16207', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                📅 Best Time to Visit
              </h3>
              <p style={{ color: '#451a03', lineHeight: '1.6' }}>
                April-May and September-October offer perfect weather with 70-80°F days and cool nights ideal for camping and hiking.
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              border: '1px solid #f59e0b'
            }}>
              <h3 style={{ color: '#a16207', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                ⏱️ Suggested Duration
              </h3>
              <p style={{ color: '#451a03', lineHeight: '1.6' }}>
                3-5 days minimum to experience desert hiking, Rio Grande activities, and world-class stargazing.
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              border: '1px solid #f59e0b'
            }}>
              <h3 style={{ color: '#a16207', fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                🎯 Top Highlights
              </h3>
              <p style={{ color: '#451a03', lineHeight: '1.6' }}>
                Santa Elena Canyon, Chisos Mountains, Hot Springs, and some of the darkest skies in America.
              </p>
            </div>
          </div>
        </section>

        {/* Day-by-Day Itinerary */}
        <section style={{
          background: '#ffffff',
          borderRadius: '0.75rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          padding: '2.5rem',
          marginBottom: '2rem'
        }}>
          <h2 style={{
            color: '#a16207',
            fontSize: '1.8rem',
            marginBottom: '1.5rem',
            borderBottom: '3px solid #d97706',
            paddingBottom: '0.5rem'
          }}>
            Day-by-Day Itinerary
          </h2>

          {/* Day 1 */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{
              color: '#a16207',
              fontSize: '1.4rem',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: '1px solid #f59e0b'
            }}>
              Day 1: Arrival & Desert Orientation
            </h3>
            
            <div style={{ paddingLeft: '1rem' }}>
              <h4 style={{ color: '#7c2d12', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Morning (9:00 AM - 12:00 PM)</h4>
              <ul style={{ color: '#451a03', lineHeight: '1.8', marginBottom: '1rem' }}>
                <li>Enter park at Persimmon Gap entrance station</li>
                <li>Stop at Panther Junction Visitor Center for orientation and permits</li>
                <li>Set up camp at Rio Grande Village or Chisos Basin</li>
                <li>Easy hike: Fossil Discovery Trail (1.3 miles) to acclimate</li>
              </ul>

              <h4 style={{ color: '#7c2d12', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Afternoon (1:00 PM - 5:00 PM)</h4>
              <ul style={{ color: '#451a03', lineHeight: '1.8', marginBottom: '1rem' }}>
                <li>Drive scenic Ross Maxwell Parkway (30 miles)</li>
                <li>Stop at Sam Nail Ranch ruins</li>
                <li>Short hike: Tuff Canyon Trail (0.75 miles)</li>
                <li>Explore Castolon Historic District</li>
              </ul>

              <h4 style={{ color: '#7c2d12', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Evening (6:00 PM - 10:00 PM)</h4>
              <ul style={{ color: '#451a03', lineHeight: '1.8' }}>
                <li>Sunset at Santa Elena Canyon overlook</li>
                <li>Return to camp for dinner</li>
                <li>Stargazing program (check ranger schedule)</li>
                <li>Night photography of Milky Way (bring tripod)</li>
              </ul>
            </div>
          </div>

          {/* Day 2 */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{
              color: '#a16207',
              fontSize: '1.4rem',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: '1px solid #f59e0b'
            }}>
              Day 2: Santa Elena Canyon & Rio Grande
            </h3>
            
            <div style={{ paddingLeft: '1rem' }}>
              <h4 style={{ color: '#7c2d12', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Morning (7:00 AM - 12:00 PM)</h4>
              <ul style={{ color: '#451a03', lineHeight: '1.8', marginBottom: '1rem' }}>
                <li>Early start to beat heat and crowds</li>
                <li>Santa Elena Canyon Trail (1.7 miles) - park's crown jewel</li>
                <li>Wade into Rio Grande for classic canyon photos</li>
                <li>Pack lunch and plenty of water</li>
              </ul>

              <h4 style={{ color: '#7c2d12', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Afternoon (1:00 PM - 5:00 PM)</h4>
              <ul style={{ color: '#451a03', lineHeight: '1.8', marginBottom: '1rem' }}>
                <li>Drive to Boquillas Canyon area</li>
                <li>Boquillas Canyon Trail (1.4 miles)</li>
                <li>Visit historic Boquillas village across river (passport required)</li>
                <li>Hot Springs Historic Trail (1 mile) for natural hot springs</li>
              </ul>

              <h4 style={{ color: '#7c2d12', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Evening (6:00 PM - 10:00 PM)</h4>
              <ul style={{ color: '#451a03', lineHeight: '1.8' }}>
                <li>Soak in Rio Grande Village Hot Springs</li>
                <li>Sunset photography along river</li>
                <li>Dinner at campsite</li>
                <li>Listen for coyote calls and night sounds</li>
              </ul>
            </div>
          </div>

          {/* Day 3 */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{
              color: '#a16207',
              fontSize: '1.4rem',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: '1px solid #f59e0b'
            }}>
              Day 3: Chisos Mountains Adventure
            </h3>
            
            <div style={{ paddingLeft: '1rem' }}>
              <h4 style={{ color: '#7c2d12', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Morning (6:00 AM - 12:00 PM)</h4>
              <ul style={{ color: '#451a03', lineHeight: '1.8', marginBottom: '1rem' }}>
                <li>Very early start for Lost Mine Trail (4.8 miles)</li>
                <li>Spectacular views of Casa Grande and desert below</li>
                <li>Best hike in park for panoramic vistas</li>
                <li>Bring cameras and plenty of water</li>
              </ul>

              <h4 style={{ color: '#7c2d12', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Afternoon (1:00 PM - 5:00 PM)</h4>
              <ul style={{ color: '#451a03', lineHeight: '1.8', marginBottom: '1rem' }}>
                <li>Rest and lunch at Chisos Basin</li>
                <li>Easy Window View Trail (1.2 miles) for desert frames</li>
                <li>Visit Chisos Mountains Lodge for supplies</li>
                <li>Explore Oak Creek area for wildlife</li>
              </ul>

              <h4 style={{ color: '#7c2d12', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Evening (6:00 PM - 10:00 PM)</h4>
              <ul style={{ color: '#451a03', lineHeight: '1.8' }}>
                <li>Sunset from Chisos Basin overlook</li>
                <li>Mountain campfire programs</li>
                <li>Premium stargazing from high elevation</li>
                <li>Listen for Mexican jay calls</li>
              </ul>
            </div>
          </div>

          {/* Optional Day 4 */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{
              color: '#a16207',
              fontSize: '1.4rem',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #fef3c7, #fde68a)',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: '1px solid #f59e0b'
            }}>
              Day 4: Backcountry & Photography (Optional)
            </h3>
            
            <div style={{ paddingLeft: '1rem' }}>
              <h4 style={{ color: '#7c2d12', fontSize: '1.1rem', marginBottom: '0.5rem' }}>For Experienced Hikers</h4>
              <ul style={{ color: '#451a03', lineHeight: '1.8', marginBottom: '1rem' }}>
                <li>South Rim Trail (12-15 miles) - challenging but rewarding</li>
                <li>Alternatively: Outer Mountain Loop for backpacking</li>
                <li>Ernst Tinaja (1.5 miles) for desert water holes</li>
                <li>Photography workshop at golden hour</li>
              </ul>

              <h4 style={{ color: '#7c2d12', fontSize: '1.1rem', marginBottom: '0.5rem' }}>For Families</h4>
              <ul style={{ color: '#451a03', lineHeight: '1.8' }}>
                <li>Rio Grande Nature Trail (1.8 miles)</li>
                <li>Dugout Wells (0.75 miles) for bird watching</li>
                <li>Junior Ranger program activities</li>
                <li>Visitor center exhibits and films</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Essential Information */}
        <section style={{
          background: '#ffffff',
          borderRadius: '0.75rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          padding: '2.5rem'
        }}>
          <h2 style={{
            color: '#a16207',
            fontSize: '1.8rem',
            marginBottom: '1.5rem',
            borderBottom: '3px solid #d97706',
            paddingBottom: '0.5rem'
          }}>
            Essential Planning Information
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {/* Accommodation */}
            <div style={{
              background: '#f1f5f9',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              borderLeft: '4px solid #d97706'
            }}>
              <h3 style={{ color: '#a16207', fontSize: '1.2rem', marginBottom: '1rem' }}>
                🏕️ Where to Stay
              </h3>
              <ul style={{ color: '#451a03', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                <li><strong>Rio Grande Village:</strong> 100 sites, hookups available</li>
                <li><strong>Chisos Basin:</strong> 60 sites, mountain setting</li>
                <li><strong>Cottonwood:</strong> Primitive camping, 31 sites</li>
                <li><strong>Chisos Mountains Lodge:</strong> Indoor lodging option</li>
              </ul>
            </div>

            {/* What to Pack */}
            <div style={{
              background: '#f1f5f9',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              borderLeft: '4px solid #d97706'
            }}>
              <h3 style={{ color: '#a16207', fontSize: '1.2rem', marginBottom: '1rem' }}>
                🎒 What to Pack
              </h3>
              <ul style={{ color: '#451a03', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                <li>Minimum 1 gallon water per person per day</li>
                <li>Desert hiking boots and sun protection</li>
                <li>Layers for temperature swings</li>
                <li>Headlamp and red light for astronomy</li>
                <li>Camera with extra batteries</li>
              </ul>
            </div>

            {/* Safety Tips */}
            <div style={{
              background: '#f1f5f9',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              borderLeft: '4px solid #d97706'
            }}>
              <h3 style={{ color: '#a16207', fontSize: '1.2rem', marginBottom: '1rem' }}>
                ⚠️ Safety Essentials
              </h3>
              <ul style={{ color: '#451a03', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                <li>Inform others of your hiking plans</li>
                <li>Carry emergency communication device</li>
                <li>Watch for flash flood areas</li>
                <li>Respect international border regulations</li>
                <li>Stay hydrated in desert conditions</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BigBendItinerary;
