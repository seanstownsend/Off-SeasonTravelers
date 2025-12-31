import React from 'react';
import ItineraryIntakeForm from '../Components/ui/ItineraryIntakeForm';

const ItineraryIntakeTest = () => {
  const handleSuccess = (data) => {
    console.log('Itinerary submitted successfully!', data);
    alert('🎉 Thank you! Your itinerary has been submitted for review.');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel? Your progress will be saved as a draft.')) {
      window.history.back();
    }
  };

  return (
    <div>
      <ItineraryIntakeForm 
        parkSlug="yellowstone"
        onSuccess={handleSuccess}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default ItineraryIntakeTest;
