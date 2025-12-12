import React from 'react';
import GenericItinerary from '../Components/ui/GenericItinerary.jsx';
import { itineraryData } from '../lib/itineraryData.js';

const RedwoodsItinerary = () => {
  const redwoodsItinerary = itineraryData['redwoods'];

  if (!redwoodsItinerary) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Itinerary Not Found</h1>
          <p className="text-gray-600">The Redwoods National and State Parks itinerary could not be loaded.</p>
        </div>
      </div>
    );
  }

  return <GenericItinerary itinerary={redwoodsItinerary} />;
};

export default RedwoodsItinerary;