import React from 'react';
import FeedbackForm from '../Components/ui/FeedbackForm';

const ChannelIslandsReactTemplate = () => {
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', lineHeight: '1.6', color: '#1f2937' }}>
      {/* Header Section */}
      <header style={{ 
        background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', 
        color: 'white', 
        padding: '4rem 0 2rem 0', 
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          bottom: 0, 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 0.3 
        }}></div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            fontWeight: '700', 
            marginBottom: '1rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            Channel Islands National Park
          </h1>
          <p style={{ 
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', 
            maxWidth: '800px', 
            margin: '0 auto', 
            opacity: '0.95',
            textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
          }}>
            Discover the "Galápagos of California" featuring pristine islands, marine wildlife, and incredible snorkeling during the perfect off-season months.
          </p>
        </div>
      </header>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        
        {/* Quick Info Cards */}
        <section style={{ padding: '3rem 0' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1.5rem',
            marginBottom: '2rem'
          }}>
            <div style={{ 
              background: '#f0f9ff', 
              padding: '1.5rem', 
              borderRadius: '1rem',
              border: '1px solid #bae6fd',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#0284c7', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Best Off-Season</h3>
              <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#0ea5e9', margin: '0.5rem 0' }}>Sep - Nov</p>
              <p style={{ fontSize: '0.9rem', color: '#075985', margin: 0 }}>Calm seas & marine wildlife</p>
            </div>
            <div style={{ 
              background: '#f0f9ff', 
              padding: '1.5rem', 
              borderRadius: '1rem',
              border: '1px solid #bae6fd',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#0284c7', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Crowd Level</h3>
              <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#0ea5e9', margin: '0.5rem 0' }}>Very Low</p>
              <p style={{ fontSize: '0.9rem', color: '#075985', margin: 0 }}>Pristine wilderness experience</p>
            </div>
            <div style={{ 
              background: '#f0f9ff', 
              padding: '1.5rem', 
              borderRadius: '1rem',
              border: '1px solid #bae6fd',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#0284c7', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Weather</h3>
              <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#0ea5e9', margin: '0.5rem 0' }}>65-75°F</p>
              <p style={{ fontSize: '0.9rem', color: '#075985', margin: 0 }}>Perfect for outdoor activities</p>
            </div>
            <div style={{ 
              background: '#f0f9ff', 
              padding: '1.5rem', 
              borderRadius: '1rem',
              border: '1px solid #bae6fd',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#0284c7', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Special Feature</h3>
              <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#0ea5e9', margin: '0.5rem 0' }}>Marine Life</p>
              <p style={{ fontSize: '0.9rem', color: '#075985', margin: 0 }}>Whales, dolphins & sea lions</p>
            </div>
          </div>
        </section>

        {/* Why Visit Off-Season */}
        <section style={{ 
          background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)', 
          padding: '3rem', 
          borderRadius: '1rem', 
          marginBottom: '3rem',
          border: '1px solid #bae6fd'
        }}>
          <h2 style={{ 
            color: '#0284c7', 
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', 
            marginBottom: '2rem', 
            textAlign: 'center' 
          }}>
            Why Visit Channel Islands During Off-Season?
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            <div>
              <h3 style={{ color: '#0ea5e9', fontSize: '1.3rem', marginBottom: '1rem' }}>🌊 Calmer Seas</h3>
              <p style={{ color: '#075985' }}>
                Fall and early winter bring much calmer ocean conditions, making boat trips more comfortable and reducing seasickness. Perfect for first-time visitors or those sensitive to rough seas.
              </p>
            </div>
            <div>
              <h3 style={{ color: '#0ea5e9', fontSize: '1.3rem', marginBottom: '1rem' }}>🐋 Marine Wildlife Peak</h3>
              <p style={{ color: '#075985' }}>
                Fall migration brings incredible whale watching opportunities including blue whales, humpback whales, and gray whales. Sea lions and dolphins are active year-round with peak activity in cooler months.
              </p>
            </div>
            <div>
              <h3 style={{ color: '#0ea5e9', fontSize: '1.3rem', marginBottom: '1rem' }}>🏝️ Island Solitude</h3>
              <p style={{ color: '#075985' }}>
                Experience these pristine islands with minimal crowds. Off-season means more wildlife encounters, better photography opportunities, and a true wilderness experience without summer tourist groups.
              </p>
            </div>
            <div>
              <h3 style={{ color: '#0ea5e9', fontSize: '1.3rem', marginBottom: '1rem' }}>🤿 Superior Snorkeling</h3>
              <p style={{ color: '#075985' }}>
                Fall offers the best underwater visibility and comfortable water temperatures. Marine life is most active, and you'll have the underwater kelp forests largely to yourself.
              </p>
            </div>
          </div>
        </section>

        {/* Activities & Experiences */}
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ 
            color: '#0284c7', 
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', 
            marginBottom: '2rem', 
            textAlign: 'center' 
          }}>
            Off-Season Activities & Experiences
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2rem' 
          }}>
            <div style={{ 
              background: '#ffffff', 
              padding: '2rem', 
              borderRadius: '1rem', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid #bae6fd'
            }}>
              <h3 style={{ color: '#0ea5e9', fontSize: '1.4rem', marginBottom: '1rem' }}>🚢 Island Hopping</h3>
              <p style={{ color: '#075985', marginBottom: '1rem' }}>
                Explore multiple islands including Santa Cruz, Anacapa, Santa Rosa, and San Miguel. Each offers unique landscapes, wildlife, and outdoor experiences accessible only by boat or plane.
              </p>
              <div style={{ 
                background: '#f0f9ff', 
                padding: '1rem', 
                borderRadius: '0.5rem', 
                borderLeft: '4px solid #0ea5e9' 
              }}>
                <strong style={{ color: '#0284c7' }}>Off-Season Tip:</strong> Calmer seas mean more reliable ferry schedules and comfortable crossings to all five islands.
              </div>
            </div>

            <div style={{ 
              background: '#ffffff', 
              padding: '2rem', 
              borderRadius: '1rem', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid #bae6fd'
            }}>
              <h3 style={{ color: '#0ea5e9', fontSize: '1.4rem', marginBottom: '1rem' }}>🐋 Whale Watching</h3>
              <p style={{ color: '#075985', marginBottom: '1rem' }}>
                Fall migration brings some of the world's best whale watching. Blue whales, the largest animals on Earth, feed in the channel along with humpbacks, grays, and occasionally orcas.
              </p>
              <div style={{ 
                background: '#f0f9ff', 
                padding: '1rem', 
                borderRadius: '0.5rem', 
                borderLeft: '4px solid #0ea5e9' 
              }}>
                <strong style={{ color: '#0284c7' }}>Peak Season:</strong> September through November offers the most consistent whale sightings with calm viewing conditions.
              </div>
            </div>

            <div style={{ 
              background: '#ffffff', 
              padding: '2rem', 
              borderRadius: '1rem', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid #bae6fd'
            }}>
              <h3 style={{ color: '#0ea5e9', fontSize: '1.4rem', marginBottom: '1rem' }}>🤿 Snorkeling & Diving</h3>
              <p style={{ color: '#075985', marginBottom: '1rem' }}>
                Explore underwater kelp forests teeming with marine life. Garibaldi fish, sea lions, harbor seals, and colorful nudibranchs create an underwater paradise with excellent visibility.
              </p>
              <div style={{ 
                background: '#f0f9ff', 
                padding: '1rem', 
                borderRadius: '0.5rem', 
                borderLeft: '4px solid #0ea5e9' 
              }}>
                <strong style={{ color: '#0284c7' }}>Best Spots:</strong> Landing Cove on Santa Barbara Island and Cathedral Cove on Anacapa offer world-class underwater experiences.
              </div>
            </div>

            <div style={{ 
              background: '#ffffff', 
              padding: '2rem', 
              borderRadius: '1rem', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid #bae6fd'
            }}>
              <h3 style={{ color: '#0ea5e9', fontSize: '1.4rem', marginBottom: '1rem' }}>🥾 Island Hiking</h3>
              <p style={{ color: '#075985', marginBottom: '1rem' }}>
                Discover unique flora and fauna found nowhere else on Earth. Each island offers distinct hiking experiences from coastal bluffs to interior valleys with endemic species and stunning views.
              </p>
              <div style={{ 
                background: '#f0f9ff', 
                padding: '1rem', 
                borderRadius: '0.5rem', 
                borderLeft: '4px solid #0ea5e9' 
              }}>
                <strong style={{ color: '#0284c7' }}>Island Fox:</strong> Off-season hiking offers better chances to spot the rare Channel Island fox and other endemic wildlife.
              </div>
            </div>

            <div style={{ 
              background: '#ffffff', 
              padding: '2rem', 
              borderRadius: '1rem', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid #bae6fd'
            }}>
              <h3 style={{ color: '#0ea5e9', fontSize: '1.4rem', marginBottom: '1rem' }}>🏕️ Island Camping</h3>
              <p style={{ color: '#075985', marginBottom: '1rem' }}>
                Experience true wilderness camping on pristine islands. Fall weather provides comfortable sleeping conditions and incredible stargazing opportunities away from mainland light pollution.
              </p>
              <div style={{ 
                background: '#f0f9ff', 
                padding: '1rem', 
                borderRadius: '0.5rem', 
                borderLeft: '4px solid #0ea5e9' 
              }}>
                <strong style={{ color: '#0284c7' }}>Dark Skies:</strong> Islands offer some of the darkest skies in Southern California for astronomy and astrophotography.
              </div>
            </div>

            <div style={{ 
              background: '#ffffff', 
              padding: '2rem', 
              borderRadius: '1rem', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              border: '1px solid #bae6fd'
            }}>
              <h3 style={{ color: '#0ea5e9', fontSize: '1.4rem', marginBottom: '1rem' }}>🦭 Wildlife Photography</h3>
              <p style={{ color: '#075985', marginBottom: '1rem' }}>
                Photograph sea lions, harbor seals, island foxes, and over 145 bird species. Off-season provides better wildlife encounters and dramatic lighting for nature photography.
              </p>
              <div style={{ 
                background: '#f0f9ff', 
                padding: '1rem', 
                borderRadius: '0.5rem', 
                borderLeft: '4px solid #0ea5e9' 
              }}>
                <strong style={{ color: '#0284c7' }}>Golden Hour:</strong> Island sunrises and sunsets offer spectacular photography opportunities with fewer crowds blocking views.
              </div>
            </div>
          </div>
        </section>

        {/* Planning Your Visit */}
        <section style={{ 
          background: '#ffffff', 
          padding: '3rem', 
          borderRadius: '1rem', 
          marginBottom: '3rem',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          border: '1px solid #bae6fd'
        }}>
          <h2 style={{ 
            color: '#0284c7', 
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', 
            marginBottom: '2rem', 
            textAlign: 'center' 
          }}>
            Planning Your Off-Season Visit
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '2rem' 
          }}>
            <div>
              <h3 style={{ color: '#0ea5e9', fontSize: '1.3rem', marginBottom: '1rem' }}>🚢 Getting There</h3>
              <ul style={{ color: '#075985', lineHeight: '1.8' }}>
                <li><strong>Island Packers:</strong> Primary ferry service from Ventura and Oxnard harbors</li>
                <li><strong>Channel Islands Aviation:</strong> Flights to Santa Rosa Island</li>
                <li><strong>Private Boats:</strong> Landing permits required, advanced planning essential</li>
                <li><strong>Reservations:</strong> Book ferry trips well in advance, especially weekends</li>
              </ul>
            </div>
            
            <div>
              <h3 style={{ color: '#0ea5e9', fontSize: '1.3rem', marginBottom: '1rem' }}>🏨 Where to Stay</h3>
              <ul style={{ color: '#075985', lineHeight: '1.8' }}>
                <li><strong>Island Camping:</strong> Primitive camping available on all islands (permits required)</li>
                <li><strong>Ventura:</strong> Full range of hotels and restaurants near ferry departure</li>
                <li><strong>Oxnard:</strong> Additional accommodation options with easy harbor access</li>
                <li><strong>Santa Barbara:</strong> Luxury option, 1 hour drive to Ventura Harbor</li>
              </ul>
            </div>
            
            <div>
              <h3 style={{ color: '#0ea5e9', fontSize: '1.3rem', marginBottom: '1rem' }}>🎯 What to Bring</h3>
              <ul style={{ color: '#075985', lineHeight: '1.8' }}>
                <li><strong>Layers:</strong> Ocean temperatures vary, dress in layers</li>
                <li><strong>Sea Sickness Remedy:</strong> Even in calm conditions, be prepared</li>
                <li><strong>Snorkel Gear:</strong> Rentals available or bring your own</li>
                <li><strong>Camping Gear:</strong> All camping is primitive, bring everything needed</li>
                <li><strong>Water & Food:</strong> Very limited services on islands</li>
              </ul>
            </div>
            
            <div>
              <h3 style={{ color: '#0ea5e9', fontSize: '1.3rem', marginBottom: '1rem' }}>⚠️ Important Notes</h3>
              <ul style={{ color: '#075985', lineHeight: '1.8' }}>
                <li><strong>Weather Dependent:</strong> Trips may be cancelled due to sea conditions</li>
                <li><strong>No Services:</strong> No food, water, or supplies available on most islands</li>
                <li><strong>Leave No Trace:</strong> Pack out all trash, protect fragile ecosystems</li>
                <li><strong>Permits Required:</strong> Camping, landing, and some activities need advance permits</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sample Itinerary */}
        <section style={{ 
          background: 'linear-gradient(135deg, #f0f9ff, #e0f2fe)', 
          padding: '3rem', 
          borderRadius: '1rem', 
          marginBottom: '3rem',
          border: '1px solid #bae6fd'
        }}>
          <h2 style={{ 
            color: '#0284c7', 
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', 
            marginBottom: '2rem', 
            textAlign: 'center' 
          }}>
            Perfect 3-Day Off-Season Island Adventure
          </h2>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2rem' 
          }}>
            <div style={{ 
              background: '#ffffff', 
              padding: '2rem', 
              borderRadius: '1rem',
              border: '1px solid #bae6fd'
            }}>
              <h3 style={{ color: '#0ea5e9', fontSize: '1.4rem', marginBottom: '1.5rem' }}>Day 1: Anacapa Island Discovery</h3>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#0284c7', marginBottom: '0.5rem' }}>Morning (8:00 AM)</h4>
                <p style={{ color: '#075985', fontSize: '0.95rem', marginBottom: '1rem' }}>
                  Ferry departure from Ventura Harbor to Anacapa Island. Enjoy whale watching during the 1.5-hour crossing.
                </p>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#0284c7', marginBottom: '0.5rem' }}>Afternoon (11:00 AM)</h4>
                <p style={{ color: '#075985', fontSize: '0.95rem', marginBottom: '1rem' }}>
                  Explore Anacapa's lighthouse, nature trail, and dramatic coastal cliffs. Snorkel at Cathedral Cove if conditions permit.
                </p>
              </div>
              <div>
                <h4 style={{ color: '#0284c7', marginBottom: '0.5rem' }}>Evening</h4>
                <p style={{ color: '#075985', fontSize: '0.95rem' }}>
                  Return ferry to Ventura with sunset views. Stay overnight in Ventura for easy Day 2 departure.
                </p>
              </div>
            </div>
            
            <div style={{ 
              background: '#ffffff', 
              padding: '2rem', 
              borderRadius: '1rem',
              border: '1px solid #bae6fd'
            }}>
              <h3 style={{ color: '#0ea5e9', fontSize: '1.4rem', marginBottom: '1.5rem' }}>Day 2: Santa Cruz Island Adventure</h3>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#0284c7', marginBottom: '0.5rem' }}>Morning (8:00 AM)</h4>
                <p style={{ color: '#075985', fontSize: '0.95rem', marginBottom: '1rem' }}>
                  Ferry to Santa Cruz Island (Scorpion Anchorage). Begin with coastal hiking and tide pool exploration.
                </p>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#0284c7', marginBottom: '0.5rem' }}>Afternoon (12:00 PM)</h4>
                <p style={{ color: '#075985', fontSize: '0.95rem', marginBottom: '1rem' }}>
                  Snorkel in the protected cove, then hike to Potato Harbor overlook for spectacular island views and wildlife photography.
                </p>
              </div>
              <div>
                <h4 style={{ color: '#0284c7', marginBottom: '0.5rem' }}>Evening</h4>
                <p style={{ color: '#075985', fontSize: '0.95rem' }}>
                  Return ferry with marine wildlife viewing. Option to camp on island for extended experience.
                </p>
              </div>
            </div>
            
            <div style={{ 
              background: '#ffffff', 
              padding: '2rem', 
              borderRadius: '1rem',
              border: '1px solid #bae6fd'
            }}>
              <h3 style={{ color: '#0ea5e9', fontSize: '1.4rem', marginBottom: '1.5rem' }}>Day 3: Whale Watching & Marine Wildlife</h3>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#0284c7', marginBottom: '0.5rem' }}>Morning (9:00 AM)</h4>
                <p style={{ color: '#075985', fontSize: '0.95rem', marginBottom: '1rem' }}>
                  Dedicated whale watching cruise focusing on fall migration patterns. Blue whales and humpbacks are frequently spotted.
                </p>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ color: '#0284c7', marginBottom: '0.5rem' }}>Afternoon (1:00 PM)</h4>
                <p style={{ color: '#075985', fontSize: '0.95rem', marginBottom: '1rem' }}>
                  Visit Channel Islands National Park Visitor Center in Ventura for interactive exhibits and marine life education.
                </p>
              </div>
              <div>
                <h4 style={{ color: '#0284c7', marginBottom: '0.5rem' }}>Evening</h4>
                <p style={{ color: '#075985', fontSize: '0.95rem' }}>
                  Ventura Harbor area dining with fresh seafood and sunset views over the channel toward the islands.
                </p>
              </div>
            </div>
          </div>
          
          <div style={{ 
            background: '#e0f2fe', 
            padding: '1.5rem', 
            borderRadius: '0.75rem', 
            marginTop: '2rem',
            borderLeft: '4px solid #0ea5e9'
          }}>
            <h4 style={{ color: '#0284c7', marginBottom: '1rem' }}>🐋 Marine Wildlife Season Guide</h4>
            <p style={{ color: '#075985' }}>
              <strong>September-November:</strong> Peak whale migration with blue whales, humpbacks, and gray whales. Sea lions and dolphins active year-round. 
              <strong>December-February:</strong> Gray whale migration, calmer seas, and excellent snorkeling visibility.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ 
          background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', 
          color: 'white', 
          padding: '3rem', 
          borderRadius: '1rem', 
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Ready to Explore the Channel Islands?</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: '0.95' }}>
            Experience California's "Galápagos" during the perfect off-season. 
            Discover pristine islands, incredible marine wildlife, and world-class snorkeling without the summer crowds.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="/channel-islands-itinerary" 
              style={{ 
                background: '#ffffff', 
                color: '#0284c7', 
                padding: '0.75rem 2rem', 
                borderRadius: '0.5rem', 
                textDecoration: 'none', 
                fontWeight: '600',
                border: '2px solid transparent',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#ffffff';
                e.target.style.borderColor = '#ffffff';
              }}
              onMouseOut={(e) => {
                e.target.style.background = '#ffffff';
                e.target.style.color = '#0284c7';
                e.target.style.borderColor = 'transparent';
              }}
            >
              View Detailed Itinerary
            </a>
            <a 
              href="https://www.nps.gov/chis/index.htm" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                background: 'transparent', 
                color: '#ffffff', 
                padding: '0.75rem 2rem', 
                borderRadius: '0.5rem', 
                textDecoration: 'none', 
                fontWeight: '600',
                border: '2px solid #ffffff',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.background = '#ffffff';
                e.target.style.color = '#0284c7';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#ffffff';
              }}
            >
              Official Park Website
            </a>
          </div>
        </section>
      </div>

      <FeedbackForm />
    </div>
  );
};

export default ChannelIslandsReactTemplate;
