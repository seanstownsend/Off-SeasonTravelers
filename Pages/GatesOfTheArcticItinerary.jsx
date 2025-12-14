import React, { useEffect, useState } from 'react'
import { itineraryData } from '../lib/itineraryData.js'

export default function GatesOfTheArcticItinerary() {
  const [currentItinerary, setCurrentItinerary] = useState(null);
  
  useEffect(() => {
    // Load itinerary data for gates-of-the-arctic
    const parkItinerary = itineraryData['gates-of-the-arctic'];
    if (parkItinerary) {
      setCurrentItinerary(parkItinerary);
    } else {
      // Fallback for parks without detailed itinerary data
      setCurrentItinerary({
        title: 'Gates of the Arctic National Park Itinerary',
        subtitle: 'Off-season arctic expedition guide',
        description: 'Detailed itinerary coming soon! Contact us for personalized recommendations.',
        totalDays: 7,
        days: []
      });
    }
  }, []);

  if (!currentItinerary) {
    return (
      <div className="itinerary-loading">
        <div className="loading-spinner"></div>
        <p>Loading itinerary...</p>
      </div>
    );
  }

  return (
    <div className="gates-arctic-itinerary">
      <style jsx>{`
        /* January Steel Blue-Gray Theme for Gates of the Arctic */
        .gates-arctic-itinerary {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #1f2937;
          background-color: #f9fafb;
          margin: 0;
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .itinerary-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 4rem;
          text-align: center;
        }

        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #e5e7eb;
          border-top: 4px solid #475569;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 1rem;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Header Section - January Steel Blue-Gray */
        .itinerary-header {
          background: linear-gradient(135deg, #475569, #64748b);
          color: white;
          padding: 3rem 2rem;
          text-align: center;
          border-radius: 12px;
          margin-bottom: 2rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .itinerary-header h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          line-height: 1.2;
        }

        .itinerary-subtitle {
          font-size: 1.25rem;
          opacity: 0.9;
          margin-bottom: 1.5rem;
        }

        .itinerary-overview {
          background: rgba(255, 255, 255, 0.1);
          padding: 1.5rem;
          border-radius: 8px;
          text-align: left;
          max-width: 800px;
          margin: 0 auto;
        }

        .itinerary-overview .description {
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }

        .best-months, .total-days, .difficulty-level, .special-requirements {
          margin: 0.5rem 0;
          font-size: 1rem;
        }

        /* Day Sections */
        .day-section {
          background: white;
          border-radius: 12px;
          margin-bottom: 2rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }

        .day-header {
          background: linear-gradient(135deg, #64748b, #475569);
          color: white;
          padding: 2rem;
          text-align: center;
        }

        .day-title {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .day-subtitle {
          font-size: 1.1rem;
          opacity: 0.9;
        }

        .day-content {
          padding: 2rem;
        }

        /* Activity Grid */
        .activity-grid {
          display: grid;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .activity-card {
          background: #f8fafc;
          border-radius: 8px;
          padding: 1.5rem;
          border: 1px solid #e2e8f0;
          transition: all 0.3s ease;
        }

        .activity-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .activity-header {
          margin-bottom: 1rem;
        }

        .activity-time {
          background: #475569;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
          display: inline-block;
          margin-bottom: 0.5rem;
        }

        .activity-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1f2937;
          margin: 0;
        }

        .activity-content p {
          margin-bottom: 0.75rem;
          color: #4b5563;
        }

        .activity-content p:last-child {
          margin-bottom: 0;
        }

        .activity-image {
          background: #e5e7eb;
          color: #6b7280;
          padding: 1rem;
          border-radius: 6px;
          font-style: italic;
          text-align: center;
          margin: 1rem 0;
          border: 2px dashed #d1d5db;
        }

        .activity-content strong {
          color: #475569;
        }

        /* Booking Section */
        .booking-section {
          background: rgba(71, 85, 105, 0.05);
          border: 1px solid rgba(71, 85, 105, 0.2);
          border-radius: 8px;
          padding: 1.5rem;
          margin: 1.5rem 0;
        }

        .booking-section h4 {
          color: #475569;
          margin-bottom: 0.5rem;
          font-size: 1.25rem;
        }

        .booking-links {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-top: 1rem;
        }

        .book-btn {
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          border: 2px solid #475569;
          color: #475569;
          background: white;
        }

        .book-btn:hover {
          background: #475569;
          color: white;
          transform: translateY(-1px);
        }

        .book-btn.primary {
          background: #475569;
          color: white;
        }

        .book-btn.primary:hover {
          background: #64748b;
          border-color: #64748b;
        }

        /* Tips Section */
        .tips-section {
          background: rgba(100, 116, 139, 0.05);
          border: 1px solid rgba(100, 116, 139, 0.2);
          border-radius: 8px;
          padding: 1.5rem;
          margin: 1.5rem 0;
        }

        .tips-section h4 {
          color: #64748b;
          margin-bottom: 1rem;
          font-size: 1.25rem;
        }

        .tips-list {
          list-style: none;
          padding: 0;
        }

        .tips-list li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
          color: #4b5563;
        }

        .tips-list li::before {
          content: "❄️";
          position: absolute;
          left: 0;
          top: 0;
        }

        /* No Itinerary Fallback */
        .no-itinerary {
          text-align: center;
          padding: 3rem;
          color: #4b5563;
        }

        /* Footer CTA */
        .itinerary-footer {
          background: linear-gradient(135deg, #475569, #64748b);
          color: white;
          padding: 3rem 2rem;
          text-align: center;
          border-radius: 12px;
          margin-top: 2rem;
        }

        .cta-section h3 {
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }

        .cta-section p {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .cta-button {
          background: white;
          color: #475569;
          padding: 1rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .gates-arctic-itinerary {
            padding: 1rem;
          }
          
          .itinerary-header {
            padding: 2rem 1rem;
          }
          
          .itinerary-header h1 {
            font-size: 2rem;
          }
          
          .day-content {
            padding: 1rem;
          }
        }
      `}</style>

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
          {currentItinerary.difficultyLevel && (
            <div className="difficulty-level">
              <strong>Difficulty Level:</strong> {currentItinerary.difficultyLevel}
            </div>
          )}
          {currentItinerary.specialRequirements && (
            <div className="special-requirements">
              <strong>Special Requirements:</strong> {currentItinerary.specialRequirements}
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
                          {/* Arctic-specific activity details */}
                          {activity.criticalNote && (
                            <p><strong>Critical note:</strong> {activity.criticalNote}</p>
                          )}
                          {activity.flightExperience && (
                            <p><strong>Flight experience:</strong> {activity.flightExperience}</p>
                          )}
                          {activity.culturalRespect && (
                            <p><strong>Cultural respect:</strong> {activity.culturalRespect}</p>
                          )}
                          {activity.safety && (
                            <p><strong>Safety:</strong> {activity.safety}</p>
                          )}
                          {activity.navigationChallenge && (
                            <p><strong>Navigation challenge:</strong> {activity.navigationChallenge}</p>
                          )}
                          {activity.campingSkills && (
                            <p><strong>Camping skills:</strong> {activity.campingSkills}</p>
                          )}
                          {activity.arcticConditions && (
                            <p><strong>Arctic conditions:</strong> {activity.arcticConditions}</p>
                          )}
                          {activity.wildlifeWatch && (
                            <p><strong>Wildlife watch:</strong> {activity.wildlifeWatch}</p>
                          )}
                          {activity.riverSafety && (
                            <p><strong>River safety:</strong> {activity.riverSafety}</p>
                          )}
                          {activity.skillBuilding && (
                            <p><strong>Skill building:</strong> {activity.skillBuilding}</p>
                          )}
                          {activity.solitudeExperience && (
                            <p><strong>Solitude experience:</strong> {activity.solitudeExperience}</p>
                          )}
                          {activity.weatherPrep && (
                            <p><strong>Weather prep:</strong> {activity.weatherPrep}</p>
                          )}
                          {activity.achievement && (
                            <p><strong>Achievement:</strong> {activity.achievement}</p>
                          )}
                          {activity.documentation && (
                            <p><strong>Documentation:</strong> {activity.documentation}</p>
                          )}
                          {activity.milestone && (
                            <p><strong>Milestone:</strong> {activity.milestone}</p>
                          )}
                          {activity.weatherStrategy && (
                            <p><strong>Weather strategy:</strong> {activity.weatherStrategy}</p>
                          )}
                          {activity.navigationFocus && (
                            <p><strong>Navigation focus:</strong> {activity.navigationFocus}</p>
                          )}
                          {activity.strategicCamping && (
                            <p><strong>Strategic camping:</strong> {activity.strategicCamping}</p>
                          )}
                          {activity.reflection && (
                            <p><strong>Reflection:</strong> {activity.reflection}</p>
                          )}
                          {activity.extractionRisk && (
                            <p><strong>Extraction risk:</strong> {activity.extractionRisk}</p>
                          )}
                          {activity.flightSafety && (
                            <p><strong>Flight safety:</strong> {activity.flightSafety}</p>
                          )}
                          {activity.reintegration && (
                            <p><strong>Reintegration:</strong> {activity.reintegration}</p>
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
                            href={option.bookingLink || '#'} 
                            className={`book-btn ${option.type === 'Premium' ? 'primary' : ''}`}
                          >
                            {option.name}{option.type ? ` (${option.type})` : ''}
                            {option.bookingAdvice && ` - ${option.bookingAdvice}`}
                            {option.permit && ` - ${option.permit}`}
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
          <h3>Ready to Plan Your Arctic Expedition?</h3>
          <p>Get expert guidance and prepare for America's ultimate wilderness adventure!</p>
          <a href="#" className="cta-button">Start Planning</a>
        </div>
      </div>
    </div>
  );
}