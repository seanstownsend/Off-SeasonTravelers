import React, { useEffect, useState } from 'react';
import { itineraryData } from '../../lib/itineraryData.js';

const GenericItinerary = ({ parkSlug }) => {
  const [currentItinerary, setCurrentItinerary] = useState(null);
  
  useEffect(() => {
    // Load itinerary data based on parkSlug
    const parkItinerary = itineraryData[parkSlug];
    if (parkItinerary) {
      setCurrentItinerary(parkItinerary);
    } else {
      // Fallback for parks without detailed itinerary data
      setCurrentItinerary({
        title: `${parkSlug} National Park Itinerary`,
        subtitle: 'Off-season travel guide',
        description: 'Detailed itinerary coming soon! Contact us for personalized recommendations.',
        totalDays: 3,
        days: []
      });
    }
  }, [parkSlug]);

  if (!currentItinerary) {
    return (
      <div className="itinerary-loading">
        <div className="loading-spinner"></div>
        <p>Loading itinerary...</p>
      </div>
    );
  }

  return (
    <div className="generic-itinerary">
      {/* Header Section */}
      <div className="itinerary-header">
        <h1>{currentItinerary.title}</h1>
        {currentItinerary.subtitle && (
          <p className="itinerary-subtitle">{currentItinerary.subtitle}</p>
        )}
        <div className="itinerary-overview">
          <p className="description">{currentItinerary.description}</p>
          {currentItinerary.bestMonths && (
            <div className="best-months">
              <strong>Best Off-Season Months:</strong> {currentItinerary.bestMonths.join(', ')}
            </div>
          )}
          {currentItinerary.totalDays && (
            <div className="total-days">
              <strong>Recommended Duration:</strong> {currentItinerary.totalDays} days
            </div>
          )}
        </div>
      </div>

      {/* Days Section */}
      {currentItinerary.days && currentItinerary.days.length > 0 ? (
        <div className="itinerary-content">
          {currentItinerary.days.map((day, dayIndex) => (
            <section key={dayIndex} className="day-section">
              <div className="day-header">
                <h2 className="day-title">Day {day.dayNumber}: {day.title}</h2>
                {day.subtitle && <p className="day-subtitle">{day.subtitle}</p>}
              </div>
              
              <div className="day-content">
                {/* Activities */}
                {day.activities && day.activities.length > 0 && (
                  <div className="activity-grid">
                    {day.activities.map((activity, activityIndex) => (
                      <div key={activityIndex} className="activity-card">
                        <div className="activity-header">
                          <div className="activity-time">{activity.time}</div>
                          <h3 className="activity-title">{activity.title}</h3>
                        </div>
                        <div className="activity-content">
                          <p>{activity.description}</p>
                          {activity.image && (
                            <div className="activity-image">{activity.image}</div>
                          )}
                          {activity.offSeasonAdvantage && (
                            <p><strong>Off-season advantage:</strong> {activity.offSeasonAdvantage}</p>
                          )}
                          {activity.proTip && (
                            <p><strong>Pro tip:</strong> {activity.proTip}</p>
                          )}
                          {activity.wildlifeWatch && (
                            <p><strong>Wildlife watch:</strong> {activity.wildlifeWatch}</p>
                          )}
                          {activity.photographyTip && (
                            <p><strong>Photography tip:</strong> {activity.photographyTip}</p>
                          )}
                          {activity.difficulty && (
                            <p><strong>Difficulty:</strong> {activity.difficulty}</p>
                          )}
                          {activity.seasonalNote && (
                            <p><strong>Seasonal note:</strong> {activity.seasonalNote}</p>
                          )}
                          {activity.specialNote && (
                            <p><strong>Special note:</strong> {activity.specialNote}</p>
                          )}
                          {activity.culturalNote && (
                            <p><strong>Cultural note:</strong> {activity.culturalNote}</p>
                          )}
                          {activity.flexibility && (
                            <p><strong>Flexibility:</strong> {activity.flexibility}</p>
                          )}
                          {activity.relaxation && (
                            <p><strong>Perfect for:</strong> {activity.relaxation}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Accommodations */}
                {day.accommodations && (
                  <div className="booking-section">
                    <h4>{day.accommodations.title}</h4>
                    <p>{day.accommodations.description}</p>
                    {day.accommodations.options && (
                      <div className="booking-links">
                        {day.accommodations.options.map((option, optionIndex) => (
                          <a 
                            key={optionIndex} 
                            href={option.bookingLink} 
                            className={`book-btn ${option.type === 'Premium' ? 'primary' : ''}`}
                          >
                            {option.name}{option.type ? ` (${option.type})` : ''}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Tips */}
                {day.tips && day.tips.length > 0 && (
                  <div className="tips-section">
                    <h4>Day {day.dayNumber} Tips</h4>
                    <ul className="tips-list">
                      {day.tips.map((tip, tipIndex) => (
                        <li key={tipIndex}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="no-itinerary">
          <p>Detailed day-by-day itinerary coming soon for this park!</p>
          <p>In the meantime, check out our general park information and tips.</p>
        </div>
      )}

      {/* Footer CTA */}
      <div className="itinerary-footer">
        <div className="cta-section">
          <h3>Ready to Plan Your Trip?</h3>
          <p>Get personalized recommendations and book your off-season adventure today!</p>
          <a href="#" className="cta-button">Start Planning</a>
        </div>
      </div>
    </div>
  );
};

export default GenericItinerary;
