import React, { useState, useEffect } from 'react';
import { feedbackService, getVisitorInfo } from '../../lib/feedback.js';
import { getParkBySlug } from '../../lib/parkConfig.js';

const FeedbackForm = ({ parkSlug = "yellowstone" }) => {
  const [formData, setFormData] = useState({
    visitor_name: '',
    visit_date: '',
    rating: '',
    comment: '',
    photo: null
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [approvedFeedback, setApprovedFeedback] = useState([]);
  const [loadingFeedback, setLoadingFeedback] = useState(true);

  // Get park info from slug
  const park = getParkBySlug(parkSlug);
  const parkName = park ? park.name : "National Park";

  // Load approved feedback when component mounts
  useEffect(() => {
    loadApprovedFeedback();
  }, [parkSlug]);

  const loadApprovedFeedback = async () => {
    setLoadingFeedback(true);
    try {
      const { data, error } = await feedbackService.getApprovedFeedback(parkSlug, 5);
      if (error) {
        console.error('Error loading feedback:', error);
      } else {
        setApprovedFeedback(data || []);
      }
    } catch (err) {
      console.error('Exception loading feedback:', err);
    } finally {
      setLoadingFeedback(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      // Get visitor info
      const visitorInfo = getVisitorInfo();

      // Prepare feedback data
      const feedbackData = {
        visitor_name: formData.visitor_name,
        visit_date: formData.visit_date,
        rating: formData.rating,
        comment: formData.comment,
        ...visitorInfo
      };

      // Submit feedback with park slug
      const { data, error } = await feedbackService.submitFeedback(parkSlug, feedbackData);
      
      if (error) {
        throw error;
      }

      // Handle photo upload if provided
      if (formData.photo && data?.[0]?.id) {
        const { data: photoUrl, error: photoError } = await feedbackService.uploadFeedbackPhoto(
          parkSlug,
          formData.photo, 
          data[0].id
        );
        
        if (photoError) {
          console.error('Photo upload failed:', photoError);
          // Don't fail the whole submission for photo issues
        }
      }

      setSubmitted(true);
      setFormData({
        visitor_name: '',
        visit_date: '',
        rating: '',
        comment: '',
        photo: null
      });

      // Reload feedback after a short delay
      setTimeout(() => {
        loadApprovedFeedback();
      }, 1000);

    } catch (err) {
      setError(err.message || 'Failed to submit feedback. Please try again.');
      console.error('Feedback submission error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderStars = (rating) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="text-green-600 text-xl mb-2">✅ Thank you!</div>
        <p className="text-green-800 mb-4">
          Your feedback has been submitted and is pending approval. 
          It will appear on the site once reviewed by our team.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Submit Another Review
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Feedback Form */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Share Your Experience</h3>
        
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
            <p className="text-red-800">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="visitor_name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name *
            </label>
            <input
              type="text"
              id="visitor_name"
              name="visitor_name"
              value={formData.visitor_name}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label htmlFor="visit_date" className="block text-sm font-medium text-gray-700 mb-1">
              Date of Visit *
            </label>
            <input
              type="date"
              id="visit_date"
              name="visit_date"
              value={formData.visit_date}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
              Overall Rating *
            </label>
            <select
              id="rating"
              name="rating"
              value={formData.rating}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            >
              <option value="">Select Rating</option>
              <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
              <option value="4">⭐⭐⭐⭐ Very Good</option>
              <option value="3">⭐⭐⭐ Good</option>
              <option value="2">⭐⭐ Fair</option>
              <option value="1">⭐ Poor</option>
            </select>
          </div>

          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
              Your Experience *
            </label>
            <textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleInputChange}
              rows={4}
              required
              placeholder={`Tell us about your off-season visit to ${parkName}...`}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-1">
              Share a Photo (optional)
            </label>
            <input
              type="file"
              id="photo"
              name="photo"
              onChange={handleInputChange}
              accept="image/*"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
            <small className="text-gray-500">Max file size: 5MB. Formats: JPG, PNG, GIF</small>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {submitting ? 'Submitting...' : 'Submit Review'}
          </button>
        </form>
      </div>

      {/* Display Approved Feedback */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Recent Visitor Reviews</h3>
        
        {loadingFeedback ? (
          <div className="text-center py-8">
            <div className="text-gray-600">Loading reviews...</div>
          </div>
        ) : approvedFeedback.length === 0 ? (
          <div className="text-center py-8 bg-gray-50 rounded-lg">
            <div className="text-gray-600">No reviews yet. Be the first to share your experience!</div>
          </div>
        ) : (
          <div className="space-y-4">
            {approvedFeedback.map((feedback) => (
              <div key={feedback.id} className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <div className="font-semibold text-gray-900">{feedback.visitor_name}</div>
                  <div className="text-sm text-gray-500">{formatDate(feedback.created_at)}</div>
                </div>
                <div className="text-yellow-500 mb-2">{renderStars(feedback.rating)}</div>
                <p className="text-gray-700 mb-2">{feedback.comment}</p>
                {feedback.visit_date && (
                  <div className="text-sm text-gray-500">
                    Visited: {formatDate(feedback.visit_date)}
                  </div>
                )}
                {feedback.photo_url && (
                  <img 
                    src={feedback.photo_url} 
                    alt="Visitor photo" 
                    className="mt-3 max-w-sm h-48 object-cover rounded-lg"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;