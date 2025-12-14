import React, { useEffect, useState } from 'react';
import { itineraryData } from '../lib/itineraryData.js';

const YosemiteItinerary = () => {
  const [currentItinerary, setCurrentItinerary] = useState(null);
  
  useEffect(() => {
    const parkItinerary = itineraryData['yosemite'];
    if (parkItinerary) {
      setCurrentItinerary(parkItinerary);
    } else {
      setCurrentItinerary({
        title: 'Yosemite National Park Itinerary',
        subtitle: 'Off-season alpine adventure guide',
        description: 'Detailed itinerary coming soon! Contact us for personalized recommendations.',
        totalDays: 5,
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
    <div className="yosemite-itinerary">
      <style jsx>{`
        .yosemite-itinerary {
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
          border-top: 4px solid #d97706;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 1rem;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .itinerary-header {
          background: linear-gradient(135deg, #d97706, #f59e0b);
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
        .day-section {
          background: white;
          border-radius: 12px;
          margin-bottom: 2rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          overflow: hidden;
        }
        .day-header {
          background: linear-gradient(135deg, #f59e0b, #d97706);
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
        .activity-grid {
          display: grid;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .activity-card {
          background: #fefcf0;
          border-radius: 8px;
          padding: 1.5rem;
          border: 1px solid #fed7aa;
          transition: all 0.3s ease;
        }
        .activity-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }
        .activity-time {
          background: #d97706;
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
        .activity-content strong {
          color: #d97706;
        }
        .booking-section {
          background: rgba(217, 119, 6, 0.05);
          border: 1px solid rgba(217, 119, 6, 0.2);
          border-radius: 8px;
          padding: 1.5rem;
          margin: 1.5rem 0;
        }
        .booking-section h4 {
          color: #d97706;
          margin-bottom: 0.5rem;
          font-size: 1.25rem;
        }
        .tips-section {
          background: rgba(245, 158, 11, 0.05);
          border: 1px solid rgba(245, 158, 11, 0.2);
          border-radius: 8px;
          padding: 1.5rem;
          margin: 1.5rem 0;
        }
        .tips-section h4 {
          color: #f59e0b;
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
          content: "🍂";
          position: absolute;
          left: 0;
          top: 0;
        }
        .itinerary-footer {
          background: linear-gradient(135deg, #d97706, #f59e0b);
          color: white;
          padding: 3rem 2rem;
          text-align: center;
          border-radius: 12px;
          margin-top: 2rem;
        }
        .cta-button {
          background: white;
          color: #d97706;
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
      `}</style>

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

      {currentItinerary.days && currentItinerary.days.length > 0 ? (
        <div className="itinerary-content">
          {currentItinerary.days.map((day, dayIndex) => (
            <section key={dayIndex} className="day-section">
              <div className="day-header">
                <h2 className="day-title">Day {day.dayNumber}: {day.title}</h2>
                {day.subtitle && <p className="day-subtitle">{day.subtitle}</p>}
              </div>
              
              <div className="day-content">
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
                          {Object.keys(activity).filter(key => 
                            !['time', 'title', 'description', 'image'].includes(key)
                          ).map(key => (
                            <p key={key}><strong>{key.replace(/([A-Z])/g, ' $1').toLowerCase()}:</strong> {activity[key]}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {day.accommodations && (
                  <div className="booking-section">
                    <h4>{day.accommodations.title}</h4>
                    <p>{day.accommodations.description}</p>
                  </div>
                )}

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
        </div>
      )}

      <div className="itinerary-footer">
        <div className="cta-section">
          <h3>Ready to Plan Your Yosemite Adventure?</h3>
          <p>Experience iconic granite domes and alpine beauty!</p>
          <a href="#" className="cta-button">Start Planning</a>
        </div>
      </div>
    </div>
  );
};

export default YosemiteItinerary;