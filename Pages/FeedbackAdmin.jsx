import React, { useState, useEffect } from 'react';
import { feedbackService } from '../lib/feedback.js';
import { getAllParkSlugs, getParkBySlug } from '../lib/parkConfig.js';

const FeedbackAdmin = () => {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('pending'); // 'pending', 'approved', 'all'
  const [parkFilter, setParkFilter] = useState('all'); // 'all' or specific park slug
  const [error, setError] = useState(null);

  const parkSlugs = getAllParkSlugs();

  useEffect(() => {
    loadFeedback();
  }, [filter, parkFilter]);

  const loadFeedback = async () => {
    setLoading(true);
    setError(null);
    try {
      const approvedFilter = filter === 'pending' ? false : filter === 'approved' ? true : null;
      
      let data, error;
      if (parkFilter === 'all') {
        // Get feedback for all parks
        ({ data, error } = await feedbackService.getAllFeedback(approvedFilter));
      } else {
        // Get feedback for specific park
        ({ data, error } = await feedbackService.getParkFeedback(parkFilter, approvedFilter));
      }
      
      if (error) {
        setError(error.message);
      } else {
        setFeedback(data || []);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleApprove = async (feedbackId) => {
    try {
      const { error } = await feedbackService.approveFeedback(feedbackId);
      if (error) {
        alert('Error approving feedback: ' + error.message);
      } else {
        alert('Feedback approved successfully!');
        loadFeedback(); // Reload the list
      }
    } catch (err) {
      alert('Error approving feedback: ' + err.message);
    }
  };

  const handleDelete = async (feedbackId) => {
    if (!confirm('Are you sure you want to delete this feedback? This action cannot be undone.')) {
      return;
    }
    
    try {
      const { error } = await feedbackService.deleteFeedback(feedbackId);
      if (error) {
        alert('Error deleting feedback: ' + error.message);
      } else {
        alert('Feedback deleted successfully!');
        loadFeedback(); // Reload the list
      }
    } catch (err) {
      alert('Error deleting feedback: ' + err.message);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const renderStars = (rating) => {
    return '⭐'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  const getStatusBadge = (approved) => {
    return approved ? (
      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
        Approved
      </span>
    ) : (
      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">
        Pending
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg">
          {/* Header */}
          <div className="bg-green-600 text-white p-6 rounded-t-lg">
            <h1 className="text-2xl font-bold">Feedback Management</h1>
            <p className="mt-2 opacity-90">Review and moderate user feedback for national parks</p>
          </div>

          {/* Filter Controls */}
          <div className="p-6 border-b border-gray-200">
            <div className="space-y-4">
              {/* Status Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status Filter</label>
                <div className="flex gap-4">
                  <button
                    onClick={() => setFilter('pending')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      filter === 'pending' 
                        ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Pending Review
                  </button>
                  <button
                    onClick={() => setFilter('approved')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      filter === 'approved' 
                        ? 'bg-green-100 text-green-800 border border-green-200' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Approved
                  </button>
                  <button
                    onClick={() => setFilter('all')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      filter === 'all' 
                        ? 'bg-blue-100 text-blue-800 border border-blue-200' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    All Feedback
                  </button>
                </div>
              </div>

              {/* Park Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Park Filter</label>
                <select 
                  value={parkFilter}
                  onChange={(e) => setParkFilter(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                >
                  <option value="all">All Parks</option>
                  {parkSlugs.map(slug => {
                    const park = getParkBySlug(slug);
                    return (
                      <option key={slug} value={slug}>
                        {park.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-800">Error: {error}</p>
                <button 
                  onClick={loadFeedback}
                  className="mt-2 text-red-600 hover:text-red-800 font-medium"
                >
                  Try Again
                </button>
              </div>
            )}

            {loading ? (
              <div className="text-center py-12">
                <div className="text-gray-600">Loading feedback...</div>
              </div>
            ) : feedback.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 rounded-lg">
                <div className="text-gray-600">
                  No feedback found for filter: {filter}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                {feedback.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-lg p-6 bg-gray-50">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {item.park_name || getParkBySlug(item.park_slug)?.name || 'Unknown Park'}
                        </h3>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-gray-600">by {item.visitor_name}</span>
                          {getStatusBadge(item.approved)}
                          {item.park_slug && (
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                              {item.park_slug}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-right text-sm text-gray-500">
                        <div>Submitted: {formatDate(item.created_at)}</div>
                        {item.visit_date && (
                          <div>Visited: {new Date(item.visit_date).toLocaleDateString()}</div>
                        )}
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="mb-3">
                      <span className="text-yellow-500 text-lg">{renderStars(item.rating)}</span>
                      <span className="text-gray-600 ml-2">({item.rating}/5)</span>
                    </div>

                    {/* Comment */}
                    <div className="bg-white p-4 rounded-lg mb-4">
                      <p className="text-gray-800 leading-relaxed">{item.comment}</p>
                    </div>

                    {/* Photo */}
                    {item.photo_url && (
                      <div className="mb-4">
                        <img 
                          src={item.photo_url} 
                          alt="Feedback photo" 
                          className="max-w-sm h-48 object-cover rounded-lg border border-gray-200"
                        />
                      </div>
                    )}

                    {/* Metadata */}
                    <div className="text-xs text-gray-500 mb-4 space-y-1">
                      <div>ID: {item.id}</div>
                      {item.user_agent && (
                        <div>User Agent: {item.user_agent.substring(0, 100)}...</div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      {!item.approved && (
                        <button
                          onClick={() => handleApprove(item.id)}
                          className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
                        >
                          Approve
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackAdmin;