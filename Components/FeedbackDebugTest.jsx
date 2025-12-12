import React, { useState } from 'react';
import { feedbackService } from '../lib/feedback.js';

const FeedbackDebugTest = () => {
  const [testResult, setTestResult] = useState('');
  const [loading, setLoading] = useState(false);

  const testSubmission = async () => {
    setLoading(true);
    setTestResult('Testing feedback submission...');
    
    try {
      console.log('Starting debug test...');
      
      const testData = {
        visitor_name: 'Debug Test User',
        visit_date: '2024-10-26',
        rating: '5',
        comment: 'This is a debug test submission to check if the feedback system works.',
        user_agent: navigator.userAgent,
        ip_address: null
      };

      console.log('Test data:', testData);
      
      const result = await feedbackService.submitFeedback('yellowstone', testData);
      
      console.log('Submission result:', result);
      
      if (result.error) {
        setTestResult(`❌ Error: ${result.error.message || JSON.stringify(result.error)}`);
      } else {
        setTestResult(`✅ Success! Feedback submitted with ID: ${result.data?.[0]?.id}`);
      }
      
    } catch (error) {
      console.error('Test error:', error);
      setTestResult(`💥 Exception: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const testRetrieval = async () => {
    setLoading(true);
    setTestResult('Testing feedback retrieval...');
    
    try {
      const result = await feedbackService.getAllFeedback(null, 10);
      
      if (result.error) {
        setTestResult(`❌ Retrieval Error: ${result.error.message}`);
      } else {
        setTestResult(`✅ Retrieved ${result.data?.length || 0} feedback records`);
        console.log('All feedback:', result.data);
      }
      
    } catch (error) {
      setTestResult(`💥 Retrieval Exception: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      padding: '2rem',
      maxWidth: '600px',
      margin: '2rem auto',
      border: '2px solid #ccc',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    }}>
      <h2>🔧 Feedback System Debug Test</h2>
      
      <div style={{ marginBottom: '1rem' }}>
        <button 
          onClick={testSubmission}
          disabled={loading}
          style={{
            padding: '10px 20px',
            marginRight: '10px',
            backgroundColor: '#059669',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {loading ? 'Testing...' : 'Test Submission'}
        </button>
        
        <button 
          onClick={testRetrieval}
          disabled={loading}
          style={{
            padding: '10px 20px',
            backgroundColor: '#0066cc',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {loading ? 'Testing...' : 'Test Retrieval'}
        </button>
      </div>
      
      <div style={{
        padding: '1rem',
        backgroundColor: '#fff',
        border: '1px solid #ddd',
        borderRadius: '4px',
        minHeight: '60px',
        fontFamily: 'monospace'
      }}>
        {testResult || 'Click a button to test the feedback system...'}
      </div>
      
      <div style={{ marginTop: '1rem', fontSize: '0.9em', color: '#666' }}>
        <p><strong>Instructions:</strong></p>
        <ul>
          <li>Open browser console (F12) to see detailed logs</li>
          <li>Test Submission: Tries to submit feedback to Yellowstone</li>
          <li>Test Retrieval: Tries to get all feedback from database</li>
        </ul>
      </div>
    </div>
  );
};

export default FeedbackDebugTest;