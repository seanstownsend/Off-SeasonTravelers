import React, { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { supabase } from '../../lib/supabase';
import { getParkBySlug } from '../../lib/parkConfig';
import './ItineraryIntakeForm.css';

const ItineraryIntakeForm = ({ parkSlug, onSuccess, onCancel }) => {
  const { user } = useAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isAnimating, setIsAnimating] = useState(false);
  const [parks, setParks] = useState([]);
  const [isLoadingParks, setIsLoadingParks] = useState(true);
  const [airports, setAirports] = useState([]);
  const [isLoadingAirports, setIsLoadingAirports] = useState(true);
  const [departureSearch, setDepartureSearch] = useState('');
  const [arrivalSearch, setArrivalSearch] = useState('');
  const [showDepartureList, setShowDepartureList] = useState(false);
  const [showArrivalList, setShowArrivalList] = useState(false);

  // Form data state
  const [formData, setFormData] = useState({
    // Step 1: Trip Overview
    park_id: parkSlug || '',
    title: '',
    start_date: '',
    end_date: '',
    trip_duration: 1,
    month_visited: '',
    travel_group: 'solo',
    lodging_type: 'camping',
    transportation_method: 'car',
    departure_airport: '',
    arrival_airport: '',
    used_awards_points: 'no',
    total_budget_usd: '',
    booking_advance_days: '',
    overall_rating: 5,
    would_recommend: true,
    
    // Step 2: Bookings
    // Flight details
    airline: '',
    flight_number: '',
    departure_time: '',
    arrival_time: '',
    // Rental car details
    rental_car_company: '',
    // Rewards/Points details
    points_type: '',
    points_provider: '',
    // Accommodations
    accommodation_details: [],
    
    // Step 3: Daily Activities
    days: [],
    
    // Step 4: Photos & Details
    trip_highlights: [],
    tips_for_others: '',
    weather_summary: [],
    conditions: {
      closures: '',
      weather_limitations: '',
      wildlife_sightings: '',
      services_open: '',
      services_closed: '',
      road_conditions: '',
      accessibility_notes: ''
    },
    packing_items: [],
    
    // Metadata
    is_public: true,
    status: 'draft'
  });

  const park = getParkBySlug(formData.park_id);
  const totalSteps = 4;

  // Fetch all parks from Supabase
  useEffect(() => {
    const fetchParks = async () => {
      try {
        const { data, error } = await supabase
          .from('nationalparks')
          .select('id, name')
          .order('name');
        
        if (error) throw error;
        setParks(data || []);
      } catch (error) {
        console.error('Error fetching parks:', error);
      } finally {
        setIsLoadingParks(false);
      }
    };
    fetchParks();
  }, []);

  // Fetch all airports from Supabase
  useEffect(() => {
    const fetchAirports = async () => {
      try {
        const { data, error } = await supabase
          .from('airports')
          .select('code, name, city, state')
          .order('code');
        
        if (error) throw error;
        setAirports(data || []);
      } catch (error) {
        console.error('Error fetching airports:', error);
      } finally {
        setIsLoadingAirports(false);
      }
    };
    fetchAirports();
  }, []);

  // Calculate trip duration when dates change
  useEffect(() => {
    if (formData.start_date && formData.end_date) {
      const start = new Date(formData.start_date);
      const end = new Date(formData.end_date);
      const days = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;
      
      if (days > 0) {
        setFormData(prev => ({ 
          ...prev, 
          trip_duration: days,
          month_visited: start.toLocaleString('default', { month: 'long' }).toLowerCase()
        }));
        
        // Initialize days array if needed
        if (formData.days.length !== days) {
          const newDays = Array.from({ length: days }, (_, i) => ({
            day_number: i + 1,
            date: new Date(start.getTime() + i * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
            activities: i === 0 ? [{
              activity_name: 'Arrival',
              is_arrival: true,
              arrival_time: 'morning',
              arrival_conditions: 'sunny',
              arrival_temperature: '',
              airport_crowds: 3,
              plans_altered: 'no',
              alteration_reason: ''
            }] : i === days - 1 ? [{
              activity_name: 'Departure',
              is_departure: true,
              departure_time: 'afternoon',
              departure_conditions: 'sunny',
              departure_temperature: '',
              departure_airport_crowds: 3,
              departure_plans_altered: 'no',
              departure_alteration_reason: ''
            }] : [],
            weather: '',
            temp_high: '',
            temp_low: '',
            crowds_level: 3
          }));
          setFormData(prev => ({ ...prev, days: newDays }));
        }
      }
    }
  }, [formData.start_date, formData.end_date]);

  // Auto-save functionality
  const autoSave = async () => {
    if (!user) return;
    
    try {
      const savedData = {
        ...formData,
        last_saved: new Date().toISOString()
      };
      localStorage.setItem(`itinerary_draft_${user.id}`, JSON.stringify(savedData));
      setSaveMessage('Draft saved');
      setTimeout(() => setSaveMessage(''), 2000);
    } catch (error) {
      console.error('Auto-save error:', error);
    }
  };

  // Load draft on mount
  useEffect(() => {
    if (user) {
      const draft = localStorage.getItem(`itinerary_draft_${user.id}`);
      if (draft) {
        try {
          const parsed = JSON.parse(draft);
          setFormData(parsed);
        } catch (error) {
          console.error('Error loading draft:', error);
        }
      }
    }
  }, [user]);

  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 1) {
      if (!formData.park_id) newErrors.park_id = 'Please select a park';
      if (!formData.title) newErrors.title = 'Please enter a trip title';
      if (!formData.start_date) newErrors.start_date = 'Start date is required';
      if (!formData.end_date) newErrors.end_date = 'End date is required';
      if (new Date(formData.end_date) < new Date(formData.start_date)) {
        newErrors.end_date = 'End date must be after start date';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setIsAnimating(true);
      
      // When moving from Step 1 to Step 2, pre-populate accommodation with lodging_type
      if (currentStep === 1 && formData.accommodation_details.length === 0) {
        setFormData(prev => ({
          ...prev,
          accommodation_details: [
            { type: formData.lodging_type, name: '', nights: formData.trip_duration || 1, cost_per_night: 0 }
          ]
        }));
      }
      
      setTimeout(() => {
        setCurrentStep(prev => Math.min(prev + 1, totalSteps));
        setIsAnimating(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 300);
      autoSave();
    }
  };

  const handleBack = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentStep(prev => Math.max(prev - 1, 1));
      setIsAnimating(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 300);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: null }));
    }
  };

  const handleAccommodationAdd = () => {
    setFormData(prev => ({
      ...prev,
      accommodation_details: [
        ...prev.accommodation_details,
        { type: 'camping', name: '', nights: 1, cost_per_night: 0 }
      ]
    }));
  };

  const handleAccommodationChange = (index, field, value) => {
    const updated = [...formData.accommodation_details];
    updated[index] = { ...updated[index], [field]: value };
    setFormData(prev => ({ ...prev, accommodation_details: updated }));
  };

  const handleAccommodationRemove = (index) => {
    setFormData(prev => ({
      ...prev,
      accommodation_details: prev.accommodation_details.filter((_, i) => i !== index)
    }));
  };

  const handleDayActivityAdd = (dayIndex) => {
    const updatedDays = [...formData.days];
    const newActivity = {
      activity_name: '',
      activity_type: 'hiking',
      time_of_day: 'morning',
      duration_hours: 2,
      worth_it_rating: 5,
      off_season_notes: '',
      cost_usd: 0
    };
    
    // If this is the last day and there's a departure activity, insert before it
    const isLastDay = dayIndex === formData.days.length - 1;
    const hasDeparture = updatedDays[dayIndex].activities.some(act => act.is_departure);
    
    if (isLastDay && hasDeparture) {
      // Insert before the last item (departure)
      updatedDays[dayIndex].activities.splice(updatedDays[dayIndex].activities.length - 1, 0, newActivity);
    } else {
      updatedDays[dayIndex].activities.push(newActivity);
    }
    
    setFormData(prev => ({ ...prev, days: updatedDays }));
  };

  const handleActivityChange = (dayIndex, activityIndex, field, value) => {
    const updatedDays = [...formData.days];
    updatedDays[dayIndex].activities[activityIndex][field] = value;
    setFormData(prev => ({ ...prev, days: updatedDays }));
  };

  const handleSubmit = async (isDraft = false) => {
    if (!user) {
      alert('Please sign in to submit your itinerary');
      return;
    }

    setIsSaving(true);
    
    try {
      // Insert main itinerary
      const { data: itinerary, error: itineraryError } = await supabase
        .from('itineraries')
        .insert([{
          user_id: user.id,
          park_id: formData.park_id,
          title: formData.title,
          start_date: formData.start_date,
          end_date: formData.end_date,
          trip_duration: formData.trip_duration,
          month_visited: formData.month_visited,
          travel_group: formData.travel_group,
          lodging_type: formData.lodging_type,
          transportation_method: formData.transportation_method,
          departure_airport: formData.departure_airport || null,
          arrival_airport: formData.arrival_airport || null,
          used_awards_points: formData.used_awards_points === 'yes',
          total_budget_usd: formData.total_budget_usd || null,
          booking_advance_days: formData.booking_advance_days || null,
          // Flight details
          airline: formData.airline || null,
          flight_number: formData.flight_number || null,
          departure_time: formData.departure_time || null,
          arrival_time: formData.arrival_time || null,
          // Rental car details
          rental_car_company: formData.rental_car_company || null,
          // Points details
          points_type: formData.points_type || null,
          points_provider: formData.points_provider || null,
          // Ratings and highlights
          overall_rating: formData.overall_rating,
          would_recommend: formData.would_recommend,
          trip_highlights: formData.trip_highlights,
          tips_for_others: formData.tips_for_others,
          weather_summary: formData.weather_summary,
          accommodation_details: formData.accommodation_details,
          is_public: formData.is_public,
          status: isDraft ? 'draft' : 'submitted',
          approved: false
        }])
        .select()
        .single();

      if (itineraryError) throw itineraryError;

      // Insert days
      if (formData.days.length > 0) {
        const daysData = formData.days.map(day => ({
          itinerary_id: itinerary.id,
          date: day.date,
          weather: day.weather,
          temp_high: day.temp_high || null,
          temp_low: day.temp_low || null,
          crowds_level: day.crowds_level
        }));

        const { data: insertedDays, error: daysError } = await supabase
          .from('itinerary_days')
          .insert(daysData)
          .select();

        if (daysError) throw daysError;

        // Insert activities for each day
        const allActivities = [];
        formData.days.forEach((day, dayIndex) => {
          const dayId = insertedDays[dayIndex].id;
          day.activities.forEach((activity, actIndex) => {
            allActivities.push({
              day_id: dayId,
              activity_name: activity.activity_name,
              activity_type: activity.activity_type || null,
              time_of_day: activity.time_of_day || null,
              duration_hours: activity.duration_hours || null,
              worth_it_rating: activity.worth_it_rating || null,
              off_season_notes: activity.off_season_notes || null,
              cost_usd: activity.cost_usd || null,
              activity_order: actIndex + 1,
              // Arrival-specific fields
              is_arrival: activity.is_arrival || false,
              arrival_time: activity.arrival_time || null,
              arrival_conditions: activity.arrival_conditions || null,
              arrival_temperature: activity.arrival_temperature || null,
              airport_crowds: activity.airport_crowds || null,
              plans_altered: activity.plans_altered || null,
              alteration_reason: activity.alteration_reason || null,
              // Departure-specific fields
              is_departure: activity.is_departure || false,
              departure_time: activity.departure_time || null,
              departure_conditions: activity.departure_conditions || null,
              departure_temperature: activity.departure_temperature || null,
              departure_airport_crowds: activity.departure_airport_crowds || null,
              departure_plans_altered: activity.departure_plans_altered || null,
              departure_alteration_reason: activity.departure_alteration_reason || null
            });
          });
        });

        if (allActivities.length > 0) {
          const { error: activitiesError } = await supabase
            .from('itinerary_activities')
            .insert(allActivities);

          if (activitiesError) throw activitiesError;
        }
      }

      // Insert conditions
      const { error: conditionsError } = await supabase
        .from('itinerary_conditions')
        .insert([{
          itinerary_id: itinerary.id,
          ...formData.conditions
        }]);

      if (conditionsError) throw conditionsError;

      // Insert packing items
      if (formData.packing_items.length > 0) {
        const packingData = formData.packing_items.map(item => ({
          itinerary_id: itinerary.id,
          item_name: item.name,
          category: item.category,
          importance_rating: item.importance_rating,
          was_used: item.was_used
        }));

        const { error: packingError } = await supabase
          .from('itinerary_packing_items')
          .insert(packingData);

        if (packingError) throw packingError;
      }

      // Clear draft
      localStorage.removeItem(`itinerary_draft_${user.id}`);

      // Success!
      if (onSuccess) {
        onSuccess(itinerary);
      } else {
        alert(isDraft ? 'Draft saved successfully!' : 'Itinerary submitted for review!');
      }

    } catch (error) {
      console.error('Submission error:', error);
      alert('Error submitting itinerary: ' + error.message);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="itinerary-intake-container">
      {/* Animated Background Gradient */}
      <div className="gradient-bg"></div>
      
      <div className="intake-wrapper">
        {/* Header */}
        <div className="intake-header">
          <h1 className="intake-title">
            Share Your Off-Season Adventure
          </h1>
        </div>

        {/* Progress Steps */}
        <div className="progress-steps">
          {[
            { num: 1, label: 'Trip Info', icon: '📅' },
            { num: 2, label: 'Bookings', icon: '🎫' },
            { num: 3, label: 'Activities', icon: '🥾' },
            { num: 4, label: 'Share Tips', icon: '💡' }
          ].map((step) => (
            <div 
              key={step.num}
              className={`progress-step ${currentStep >= step.num ? 'active' : ''} ${currentStep === step.num ? 'current' : ''}`}
            >
              <div className="step-circle">
                {currentStep > step.num ? '✓' : step.icon}
              </div>
              <span className="step-label">{step.label}</span>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="progress-bar-container">
          <div className="progress-bar-bg">
            <div 
              className="progress-bar-fill"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
          <div className="progress-info">
            <span className="step-count">Step {currentStep} of {totalSteps}</span>
            {saveMessage && (
              <span className="save-indicator">
                <span className="pulse-dot"></span>
                {saveMessage}
              </span>
            )}
          </div>
        </div>

      {/* Step 1: Trip Overview */}
      {currentStep === 1 && (
        <div className={`form-card ${isAnimating ? 'animating' : ''}`}>
          <h2 className="section-header">
            <span className="section-icon">📅</span>
            Trip Overview
          </h2>

          <div className="form-grid">
            <div className="form-group">
              <label className="form-label form-label-required">
                Which Park Did You Visit?
              </label>
              <select
                className={`form-input ${errors.park_id ? 'error' : ''}`}
                value={formData.park_id}
                onChange={(e) => handleInputChange('park_id', e.target.value)}
                disabled={isLoadingParks}
              >
                <option value="">Select a National Park</option>
                {parks.map((park) => (
                  <option key={park.id} value={park.id}>
                    {park.name}
                  </option>
                ))}
              </select>
              {errors.park_id && <div className="error-message">{errors.park_id}</div>}
            </div>

            <div className="form-group">
              <label className="form-label form-label-required">
                Trip Title
              </label>
              <input
                type="text"
                className={`form-input ${errors.title ? 'error' : ''}`}
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                placeholder="e.g., March at Yellowstone"
              />
              {errors.title && <div className="error-message">{errors.title}</div>}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>
                  Start Date *
                </label>
                <input
                  type="date"
                  value={formData.start_date}
                  onChange={(e) => handleInputChange('start_date', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: errors.start_date ? '2px solid #ef4444' : '1px solid #d1d5db',
                    borderRadius: '6px'
                  }}
                />
                {errors.start_date && <span style={{ color: '#ef4444', fontSize: '0.875rem' }}>{errors.start_date}</span>}
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>
                  End Date *
                </label>
                <input
                  type="date"
                  value={formData.end_date}
                  onChange={(e) => handleInputChange('end_date', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: errors.end_date ? '2px solid #ef4444' : '1px solid #d1d5db',
                    borderRadius: '6px'
                  }}
                />
                {errors.end_date && <span style={{ color: '#ef4444', fontSize: '0.875rem' }}>{errors.end_date}</span>}
              </div>
            </div>

            {formData.trip_duration > 0 && (
              <div style={{ padding: '1rem', background: '#f0f9ff', borderRadius: '6px', color: '#0369a1' }}>
                📅 Trip Duration: {formData.trip_duration} day{formData.trip_duration !== 1 ? 's' : ''} in {formData.month_visited}
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>
                  Travel Group
                </label>
                <select
                  value={formData.travel_group}
                  onChange={(e) => handleInputChange('travel_group', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px'
                  }}
                >
                  <option value="solo">Solo</option>
                  <option value="couple">Couple</option>
                  <option value="family">Family</option>
                  <option value="friends">Friends</option>
                  <option value="group">Group</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>
                  Lodging Type
                </label>
                <select
                  value={formData.lodging_type}
                  onChange={(e) => handleInputChange('lodging_type', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px'
                  }}
                >
                  <option value="camping">Camping</option>
                  <option value="rv">RV/Camper</option>
                  <option value="lodge">Park Lodge</option>
                  <option value="hotel">Hotel/Motel</option>
                  <option value="airbnb">Airbnb/VRBO</option>
                  <option value="mixed">Mixed</option>
                </select>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>
                  Total Budget (USD)
                </label>
                <input
                  type="number"
                  value={formData.total_budget_usd}
                  onChange={(e) => handleInputChange('total_budget_usd', e.target.value)}
                  placeholder="Optional"
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>
                  Were awards points used for any portion of the trip?
                </label>
                <select
                  value={formData.used_awards_points}
                  onChange={(e) => handleInputChange('used_awards_points', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid #d1d5db',
                    borderRadius: '6px'
                  }}
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">
                Transportation
              </label>
              <select
                className="form-input"
                value={formData.transportation_method}
                onChange={(e) => handleInputChange('transportation_method', e.target.value)}
              >
                <option value="car">Personal Car</option>
                <option value="rv">RV/Motorhome</option>
                <option value="rental">Rental Car</option>
                <option value="motorcycle">Motorcycle</option>
                <option value="bus">Tour Bus</option>
                <option value="train">Train</option>
                <option value="flight">Flight + Rental</option>
                <option value="flight-rideshare">Flight + Rideshare</option>
              </select>
            </div>

            {(formData.transportation_method === 'flight' || formData.transportation_method === 'flight-rideshare') && (
              <>
                <div className="form-group" style={{ position: 'relative' }}>
                  <label className="form-label">
                    Departure Airport
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    value={departureSearch}
                    onChange={(e) => {
                      setDepartureSearch(e.target.value);
                      setShowDepartureList(true);
                    }}
                    onFocus={() => setShowDepartureList(true)}
                    placeholder="Type code or city (e.g., JFK)"
                  />
                  {showDepartureList && departureSearch && (
                    <div className="airport-dropdown">
                      {airports
                        .filter(airport => 
                          airport.code.toLowerCase().includes(departureSearch.toLowerCase()) ||
                          airport.name.toLowerCase().includes(departureSearch.toLowerCase()) ||
                          airport.city.toLowerCase().includes(departureSearch.toLowerCase())
                        )
                        .slice(0, 15)
                        .map(airport => (
                          <div
                            key={airport.code}
                            className="airport-option"
                            onClick={() => {
                              handleInputChange('departure_airport', airport.code);
                              setDepartureSearch(`${airport.code} - ${airport.name}`);
                              setShowDepartureList(false);
                            }}
                          >
                            <strong>{airport.code}</strong> - {airport.name}
                            <div className="airport-location">
                              {airport.city}, {airport.state}
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </div>

                <div className="form-group" style={{ position: 'relative' }}>
                  <label className="form-label">
                    Arrival Airport
                  </label>
                  <input
                    type="text"
                    className="form-input"
                    value={arrivalSearch}
                    onChange={(e) => {
                      setArrivalSearch(e.target.value);
                      setShowArrivalList(true);
                    }}
                    onFocus={() => setShowArrivalList(true)}
                    placeholder="Type code or city (e.g., DEN)"
                  />
                  {showArrivalList && arrivalSearch && (
                    <div className="airport-dropdown">
                      {airports
                        .filter(airport => 
                          airport.code.toLowerCase().includes(arrivalSearch.toLowerCase()) ||
                          airport.name.toLowerCase().includes(arrivalSearch.toLowerCase()) ||
                          airport.city.toLowerCase().includes(arrivalSearch.toLowerCase())
                        )
                        .slice(0, 15)
                        .map(airport => (
                          <div
                            key={airport.code}
                            className="airport-option"
                            onClick={() => {
                              handleInputChange('arrival_airport', airport.code);
                              setArrivalSearch(`${airport.code} - ${airport.name}`);
                              setShowArrivalList(false);
                            }}
                          >
                            <strong>{airport.code}</strong> - {airport.name}
                            <div className="airport-location">
                              {airport.city}, {airport.state}
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              </>
            )}

            <div>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>
                How far in advance did you book? (days)
              </label>
              <input
                type="number"
                value={formData.booking_advance_days}
                onChange={(e) => handleInputChange('booking_advance_days', e.target.value)}
                placeholder="e.g., 30"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem', textAlign: 'center' }}>
                Overall Trip Rating
              </label>
              <div style={{ display: 'flex', gap: '0.5rem', fontSize: '2rem', justifyContent: 'center' }}>
                {[1, 2, 3, 4, 5].map(star => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleInputChange('overall_rating', star)}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: star <= formData.overall_rating ? '#fbbf24' : '#d1d5db'
                    }}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', justifyContent: 'center' }}>
                <input
                  type="checkbox"
                  checked={formData.would_recommend}
                  onChange={(e) => handleInputChange('would_recommend', e.target.checked)}
                  style={{ width: '20px', height: '20px' }}
                />
                <span style={{ fontWeight: '600' }}>I would recommend this trip to others</span>
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Bookings */}
      {currentStep === 2 && (
        <div className="form-card">
          {/* Flight Details - Only show if flight transportation selected */}
          {(formData.transportation_method === 'flight' || formData.transportation_method === 'flight-rideshare') && (
            <div className="form-section">
              <h3 className="subsection-title">
                Flight Information
              </h3>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Airline</label>
                  <select
                    className="form-input"
                    value={formData.airline}
                    onChange={(e) => handleInputChange('airline', e.target.value)}
                  >
                    <option value="">Select Airline</option>
                    <option value="American Airlines">American Airlines</option>
                    <option value="Delta">Delta</option>
                    <option value="United">United</option>
                    <option value="Southwest">Southwest</option>
                    <option value="JetBlue">JetBlue</option>
                    <option value="Alaska Airlines">Alaska Airlines</option>
                    <option value="Spirit">Spirit</option>
                    <option value="Frontier">Frontier</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Flight Number</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.flight_number}
                    onChange={(e) => handleInputChange('flight_number', e.target.value)}
                    placeholder="e.g., UA1234"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Departure Time</label>
                  <input
                    type="time"
                    className="form-input"
                    value={formData.departure_time}
                    onChange={(e) => handleInputChange('departure_time', e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Arrival Time</label>
                  <input
                    type="time"
                    className="form-input"
                    value={formData.arrival_time}
                    onChange={(e) => handleInputChange('arrival_time', e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Accommodations */}
          <div className="form-section">
            <h3 className="subsection-title">
              Where You Stayed
            </h3>

            {formData.accommodation_details.map((accommodation, index) => (
              <div key={index} className="dynamic-item" style={{ marginBottom: '1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr 1fr 1fr', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label">Type</label>
                    <select
                      className="form-input"
                      value={accommodation.type}
                      onChange={(e) => handleAccommodationChange(index, 'type', e.target.value)}
                    >
                      <option value="camping">Camping</option>
                      <option value="rv">RV Site</option>
                      <option value="lodge">Lodge</option>
                      <option value="hotel">Hotel</option>
                      <option value="airbnb">Airbnb</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-input"
                      value={accommodation.name}
                      onChange={(e) => handleAccommodationChange(index, 'name', e.target.value)}
                      placeholder="e.g., Madison Campground"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Nights</label>
                    <input
                      type="number"
                      className="form-input"
                      value={accommodation.nights}
                      onChange={(e) => handleAccommodationChange(index, 'nights', parseInt(e.target.value) || 0)}
                      min="1"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">$/Night</label>
                    <input
                      type="number"
                      className="form-input"
                      value={accommodation.cost_per_night}
                      onChange={(e) => handleAccommodationChange(index, 'cost_per_night', parseFloat(e.target.value) || 0)}
                      min="0"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleAccommodationRemove(index)}
                  className="remove-button"
                >
                  Remove
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={handleAccommodationAdd}
              className="add-button"
            >
              + Add Accommodation
            </button>
          </div>

          {/* Rental Car Details - Show if rental or flight transportation */}
          {(formData.transportation_method === 'rental' || formData.transportation_method === 'flight' || formData.transportation_method === 'flight-rideshare') && (
            <div className="form-section">
              <h3 className="subsection-title">
                Rental Car
              </h3>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Rental Car Company</label>
                  <select
                    className="form-input"
                    value={formData.rental_car_company}
                    onChange={(e) => handleInputChange('rental_car_company', e.target.value)}
                  >
                    <option value="">Select Company</option>
                    <option value="Enterprise">Enterprise</option>
                    <option value="Hertz">Hertz</option>
                    <option value="Budget">Budget</option>
                    <option value="Avis">Avis</option>
                    <option value="National">National</option>
                    <option value="Alamo">Alamo</option>
                    <option value="Dollar">Dollar</option>
                    <option value="Thrifty">Thrifty</option>
                    <option value="Sixt">Sixt</option>
                    <option value="Turo">Turo</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Rewards Points Details - Only show if points were used */}
          {formData.used_awards_points === 'yes' && (
            <div className="form-section">
              <h3 className="subsection-title">
                Rewards & Points Used
              </h3>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">Type of Points Used</label>
                  <select
                    className="form-input"
                    value={formData.points_type}
                    onChange={(e) => handleInputChange('points_type', e.target.value)}
                  >
                    <option value="">Select Points Type</option>
                    <option value="airline">Airline Miles</option>
                    <option value="hotel">Hotel Points</option>
                    <option value="credit-card">Credit Card Points</option>
                  </select>
                </div>

                {formData.points_type && (
                  <div className="form-group">
                    <label className="form-label">Points Provider</label>
                    <select
                      className="form-input"
                      value={formData.points_provider}
                      onChange={(e) => handleInputChange('points_provider', e.target.value)}
                    >
                      <option value="">Select Provider</option>
                      
                      {formData.points_type === 'airline' && (
                        <>
                          <option value="United MileagePlus">United MileagePlus</option>
                          <option value="American AAdvantage">American AAdvantage</option>
                          <option value="Delta SkyMiles">Delta SkyMiles</option>
                          <option value="Southwest Rapid Rewards">Southwest Rapid Rewards</option>
                          <option value="Alaska Mileage Plan">Alaska Mileage Plan</option>
                          <option value="JetBlue TrueBlue">JetBlue TrueBlue</option>
                          <option value="Other">Other</option>
                        </>
                      )}
                      
                      {formData.points_type === 'hotel' && (
                        <>
                          <option value="Marriott Bonvoy">Marriott Bonvoy</option>
                          <option value="Hilton Honors">Hilton Honors</option>
                          <option value="World of Hyatt">World of Hyatt</option>
                          <option value="IHG Rewards">IHG Rewards</option>
                          <option value="Wyndham Rewards">Wyndham Rewards</option>
                          <option value="Choice Privileges">Choice Privileges</option>
                          <option value="Other">Other</option>
                        </>
                      )}
                      
                      {formData.points_type === 'credit-card' && (
                        <>
                          <option value="Chase Ultimate Rewards">Chase Ultimate Rewards</option>
                          <option value="American Express Membership Rewards">American Express Membership Rewards</option>
                          <option value="Capital One Miles">Capital One Miles</option>
                          <option value="Citi ThankYou Points">Citi ThankYou Points</option>
                          <option value="Bank of America Travel Rewards">Bank of America Travel Rewards</option>
                          <option value="Wells Fargo Rewards">Wells Fargo Rewards</option>
                          <option value="Other">Other</option>
                        </>
                      )}
                    </select>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Step 3: Daily Activities */}
      {currentStep === 3 && (
        <div style={{ 
          background: 'white', 
          padding: '2rem', 
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#1f2937' }}>
            Daily Activities
          </h2>

          {formData.days.map((day, dayIndex) => (
            <div key={dayIndex} style={{ 
              marginBottom: '2rem',
              padding: '1.5rem',
              border: '2px solid #9b6a3c',
              borderRadius: '12px',
              background: '#f5f0e8'
            }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#6f6349', fontWeight: '700' }}>
                Day {day.day_number} - {new Date(day.date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
              </h3>

              {day.activities.map((activity, actIndex) => (
                <div key={actIndex} style={{ 
                  padding: '1rem',
                  background: activity.is_arrival || activity.is_departure ? '#f0e8d9' : '#f5f0e8',
                  borderRadius: '8px',
                  marginBottom: '0.75rem',
                  border: activity.is_arrival || activity.is_departure ? '2px solid #b48a3f' : '1px solid #d4c5a9'
                }}>
                  {activity.is_arrival ? (
                    // Special Arrival Activity
                    <>
                      <div style={{ marginBottom: '1rem', fontSize: '1rem', fontWeight: '700', color: '#4e665a' }}>
                        🛬 Arrival
                      </div>
                      
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.25rem', color: '#78716c' }}>
                            Arrival Time
                          </label>
                          <select
                            value={activity.arrival_time || 'morning'}
                            onChange={(e) => handleActivityChange(dayIndex, actIndex, 'arrival_time', e.target.value)}
                            style={{
                              width: '100%',
                              padding: '0.5rem',
                              border: '1px solid #d1d5db',
                              borderRadius: '4px',
                              fontSize: '0.875rem'
                            }}
                          >
                            <option value="morning">Morning</option>
                            <option value="afternoon">Afternoon</option>
                            <option value="evening">Evening</option>
                          </select>
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.25rem', color: '#78716c' }}>
                            Arrival Conditions
                          </label>
                          <select
                            value={activity.arrival_conditions || 'sunny'}
                            onChange={(e) => handleActivityChange(dayIndex, actIndex, 'arrival_conditions', e.target.value)}
                            style={{
                              width: '100%',
                              padding: '0.5rem',
                              border: '1px solid #d1d5db',
                              borderRadius: '4px',
                              fontSize: '0.875rem'
                            }}
                          >
                            <option value="sunny">☀️ Sunny</option>
                            <option value="partly-cloudy">⛅ Partly Cloudy</option>
                            <option value="cloudy">☁️ Cloudy</option>
                            <option value="rain">🌧️ Rain</option>
                            <option value="snow">❄️ Snow</option>
                            <option value="fog">🌫️ Fog</option>
                            <option value="wind">💨 Windy</option>
                            <option value="after-dark">🌙 After Dark</option>
                          </select>
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.25rem', color: '#78716c' }}>
                            Temperature (°F)
                          </label>
                          <input
                            type="number"
                            value={activity.arrival_temperature || ''}
                            onChange={(e) => handleActivityChange(dayIndex, actIndex, 'arrival_temperature', e.target.value)}
                            placeholder="e.g., 45"
                            style={{
                              width: '100%',
                              padding: '0.5rem',
                              border: '1px solid #d1d5db',
                              borderRadius: '4px',
                              fontSize: '0.875rem'
                            }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.25rem', color: '#78716c' }}>
                            Airport Crowds (1-5)
                          </label>
                          <select
                            value={activity.airport_crowds || 3}
                            onChange={(e) => handleActivityChange(dayIndex, actIndex, 'airport_crowds', parseInt(e.target.value))}
                            style={{
                              width: '100%',
                              padding: '0.5rem',
                              border: '1px solid #d1d5db',
                              borderRadius: '4px',
                              fontSize: '0.875rem'
                            }}
                          >
                            <option value="1">1 - Empty</option>
                            <option value="2">2 - Light</option>
                            <option value="3">3 - Moderate</option>
                            <option value="4">4 - Busy</option>
                            <option value="5">5 - Packed</option>
                          </select>
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.25rem', color: '#78716c' }}>
                            Were Arrival Plans Altered?
                          </label>
                          <select
                            value={activity.plans_altered || 'no'}
                            onChange={(e) => handleActivityChange(dayIndex, actIndex, 'plans_altered', e.target.value)}
                            style={{
                              width: '100%',
                              padding: '0.5rem',
                              border: '1px solid #d1d5db',
                              borderRadius: '4px',
                              fontSize: '0.875rem'
                            }}
                          >
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                          </select>
                        </div>

                        {activity.plans_altered === 'yes' && (
                          <div>
                            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.25rem', color: '#78716c' }}>
                              Reason for Alteration
                            </label>
                            <select
                              value={activity.alteration_reason || ''}
                              onChange={(e) => handleActivityChange(dayIndex, actIndex, 'alteration_reason', e.target.value)}
                              style={{
                                width: '100%',
                                padding: '0.5rem',
                                border: '1px solid #d1d5db',
                                borderRadius: '4px',
                                fontSize: '0.875rem'
                              }}
                            >
                              <option value="">Select reason...</option>
                              <option value="weather-delay">Weather Delay</option>
                              <option value="flight-delay">Flight Delay</option>
                              <option value="flight-cancellation">Flight Cancellation</option>
                              <option value="personal-reasons">Personal Reasons</option>
                              <option value="family-reasons">Family Reasons</option>
                              <option value="road-conditions">Road Conditions</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                        )}
                      </div>
                    </>
                  ) : activity.is_departure ? (
                    // Special Departure Activity
                    <>
                      <div style={{ marginBottom: '1rem', fontSize: '1rem', fontWeight: '700', color: '#4e665a' }}>
                        🛫 Departure
                      </div>
                      
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.25rem', color: '#78716c' }}>
                            Departure Time
                          </label>
                          <select
                            value={activity.departure_time || 'afternoon'}
                            onChange={(e) => handleActivityChange(dayIndex, actIndex, 'departure_time', e.target.value)}
                            style={{
                              width: '100%',
                              padding: '0.5rem',
                              border: '1px solid #d1d5db',
                              borderRadius: '4px',
                              fontSize: '0.875rem'
                            }}
                          >
                            <option value="morning">Morning</option>
                            <option value="afternoon">Afternoon</option>
                            <option value="evening">Evening</option>
                          </select>
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.25rem', color: '#78716c' }}>
                            Departure Conditions
                          </label>
                          <select
                            value={activity.departure_conditions || 'sunny'}
                            onChange={(e) => handleActivityChange(dayIndex, actIndex, 'departure_conditions', e.target.value)}
                            style={{
                              width: '100%',
                              padding: '0.5rem',
                              border: '1px solid #d1d5db',
                              borderRadius: '4px',
                              fontSize: '0.875rem'
                            }}
                          >
                            <option value="sunny">☀️ Sunny</option>
                            <option value="partly-cloudy">⛅ Partly Cloudy</option>
                            <option value="cloudy">☁️ Cloudy</option>
                            <option value="rain">🌧️ Rain</option>
                            <option value="snow">❄️ Snow</option>
                            <option value="fog">🌫️ Fog</option>
                            <option value="wind">💨 Windy</option>
                            <option value="after-dark">🌙 After Dark</option>
                          </select>
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.25rem', color: '#78716c' }}>
                            Temperature (°F)
                          </label>
                          <input
                            type="number"
                            value={activity.departure_temperature || ''}
                            onChange={(e) => handleActivityChange(dayIndex, actIndex, 'departure_temperature', e.target.value)}
                            placeholder="e.g., 52"
                            style={{
                              width: '100%',
                              padding: '0.5rem',
                              border: '1px solid #d1d5db',
                              borderRadius: '4px',
                              fontSize: '0.875rem'
                            }}
                          />
                        </div>

                        <div>
                          <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.25rem', color: '#78716c' }}>
                            Airport Crowds (1-5)
                          </label>
                          <select
                            value={activity.departure_airport_crowds || 3}
                            onChange={(e) => handleActivityChange(dayIndex, actIndex, 'departure_airport_crowds', parseInt(e.target.value))}
                            style={{
                              width: '100%',
                              padding: '0.5rem',
                              border: '1px solid #d1d5db',
                              borderRadius: '4px',
                              fontSize: '0.875rem'
                            }}
                          >
                            <option value="1">1 - Empty</option>
                            <option value="2">2 - Light</option>
                            <option value="3">3 - Moderate</option>
                            <option value="4">4 - Busy</option>
                            <option value="5">5 - Packed</option>
                          </select>
                        </div>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                          <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.25rem', color: '#78716c' }}>
                            Were Departure Plans Altered?
                          </label>
                          <select
                            value={activity.departure_plans_altered || 'no'}
                            onChange={(e) => handleActivityChange(dayIndex, actIndex, 'departure_plans_altered', e.target.value)}
                            style={{
                              width: '100%',
                              padding: '0.5rem',
                              border: '1px solid #d1d5db',
                              borderRadius: '4px',
                              fontSize: '0.875rem'
                            }}
                          >
                            <option value="no">No</option>
                            <option value="yes">Yes</option>
                          </select>
                        </div>

                        {activity.departure_plans_altered === 'yes' && (
                          <div>
                            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: '600', marginBottom: '0.25rem', color: '#78716c' }}>
                              Reason for Alteration
                            </label>
                            <select
                              value={activity.departure_alteration_reason || ''}
                              onChange={(e) => handleActivityChange(dayIndex, actIndex, 'departure_alteration_reason', e.target.value)}
                              style={{
                                width: '100%',
                                padding: '0.5rem',
                                border: '1px solid #d1d5db',
                                borderRadius: '4px',
                                fontSize: '0.875rem'
                              }}
                            >
                              <option value="">Select reason...</option>
                              <option value="weather-delay">Weather Delay</option>
                              <option value="flight-delay">Flight Delay</option>
                              <option value="flight-cancellation">Flight Cancellation</option>
                              <option value="road-conditions">Road Conditions</option>
                              <option value="decided-to-extend">Decided to Extend Trip</option>
                              <option value="personal-reasons">Personal Reasons</option>
                            </select>
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    // Regular Activity
                    <>
                      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '0.75rem' }}>
                        <input
                          type="text"
                          value={activity.activity_name}
                          onChange={(e) => handleActivityChange(dayIndex, actIndex, 'activity_name', e.target.value)}
                          placeholder="Activity name (e.g., Old Faithful hike)"
                          style={{
                            padding: '0.5rem',
                            border: '1px solid #d1d5db',
                            borderRadius: '4px',
                            fontSize: '0.875rem'
                          }}
                        />

                    <select
                      value={activity.activity_type}
                      onChange={(e) => handleActivityChange(dayIndex, actIndex, 'activity_type', e.target.value)}
                      style={{
                        padding: '0.5rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        fontSize: '0.875rem'
                      }}
                    >
                      <option value="hiking">Hiking</option>
                      <option value="photography">Photography</option>
                      <option value="wildlife">Wildlife Viewing</option>
                      <option value="scenic-drive">Scenic Drive</option>
                      <option value="visitor-center">Visitor Center</option>
                      <option value="camping">Camping</option>
                      <option value="dining">Dining</option>
                      <option value="local-attraction">Local Attraction</option>
                      <option value="shopping">Shopping</option>
                      <option value="other">Other</option>
                    </select>

                    <select
                      value={activity.time_of_day}
                      onChange={(e) => handleActivityChange(dayIndex, actIndex, 'time_of_day', e.target.value)}
                      style={{
                        padding: '0.5rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        fontSize: '0.875rem'
                      }}
                    >
                      <option value="morning">Morning</option>
                      <option value="afternoon">Afternoon</option>
                      <option value="evening">Evening</option>
                      <option value="all-day">All Day</option>
                    </select>

                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <input
                        type="number"
                        value={activity.duration_hours}
                        onChange={(e) => handleActivityChange(dayIndex, actIndex, 'duration_hours', parseFloat(e.target.value) || 0)}
                        placeholder="Hours"
                        min="0.5"
                        step="0.5"
                        style={{
                          flex: 1,
                          padding: '0.5rem',
                          border: '1px solid #d1d5db',
                          borderRadius: '4px',
                          fontSize: '0.875rem'
                        }}
                      />
                      <span style={{ display: 'flex', alignItems: 'center', fontSize: '0.875rem', color: '#6b7280' }}>hrs</span>
                    </div>
                  </div>

                  <div style={{ marginTop: '0.75rem', display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.75rem' }}>
                    <textarea
                      value={activity.off_season_notes}
                      onChange={(e) => handleActivityChange(dayIndex, actIndex, 'off_season_notes', e.target.value)}
                      placeholder="Off-season notes (crowds, availability, weather impact, etc.)"
                      rows="2"
                      style={{
                        width: '100%',
                        padding: '0.5rem',
                        border: '1px solid #d1d5db',
                        borderRadius: '4px',
                        fontSize: '0.875rem',
                        resize: 'vertical'
                      }}
                    />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                      <label style={{ fontSize: '0.75rem', fontWeight: '600', color: '#6b7280' }}>
                        Worth it?
                      </label>
                      <div style={{ display: 'flex', gap: '0.25rem' }}>
                        {[1, 2, 3, 4, 5].map(star => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => handleActivityChange(dayIndex, actIndex, 'worth_it_rating', star)}
                            style={{
                              background: 'none',
                              border: 'none',
                              cursor: 'pointer',
                              fontSize: '1.25rem',
                              color: star <= activity.worth_it_rating ? '#fbbf24' : '#d1d5db',
                              padding: '0'
                            }}
                          >
                            ★
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                      {!activity.is_arrival && !activity.is_departure && (
                        <button
                          type="button"
                          onClick={() => {
                            const updatedDays = [...formData.days];
                            updatedDays[dayIndex].activities = updatedDays[dayIndex].activities.filter((_, i) => i !== actIndex);
                            setFormData(prev => ({ ...prev, days: updatedDays }));
                          }}
                          style={{
                            marginTop: '0.5rem',
                            padding: '12px 22px',
                            background: '#6f6349',
                            border: 'none',
                            borderRadius: '14px',
                            cursor: 'pointer',
                            fontSize: '0.85rem',
                            color: '#ffffff',
                            fontWeight: '700',
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            transition: 'transform 0.15s ease, opacity 0.15s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.opacity = '0.9';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'none';
                            e.currentTarget.style.opacity = '1';
                          }}
                        >
                          Remove Activity
                        </button>
                      )}
                    </>
                  )}
                </div>
              ))}

              <button
                type="button"
                onClick={() => handleDayActivityAdd(dayIndex)}
                style={{
                  padding: '12px 22px',
                  background: '#9b6a3c',
                  border: 'none',
                  borderRadius: '14px',
                  cursor: 'pointer',
                  width: '100%',
                  fontWeight: '700',
                  fontSize: '0.85rem',
                  color: '#ffffff',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  transition: 'transform 0.15s ease, opacity 0.15s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.opacity = '0.9';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.opacity = '1';
                }}
              >
                + Add Activity
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Step 4: Photos & Final Details */}
      {currentStep === 4 && (
        <div style={{ 
          background: 'white', 
          padding: '2rem', 
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#1f2937' }}>
            Details and Tips
          </h2>

          <div style={{ display: 'grid', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>
                Your Top Tips for Future Travelers
              </label>
              <textarea
                value={formData.tips_for_others}
                onChange={(e) => handleInputChange('tips_for_others', e.target.value)}
                placeholder="Share your best advice, things you wish you knew, money-saving tips, etc."
                rows="6"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={formData.is_public}
                  onChange={(e) => handleInputChange('is_public', e.target.checked)}
                  style={{ width: '20px', height: '20px' }}
                />
                <span style={{ fontWeight: '600' }}>Make this itinerary public (help other travelers!)</span>
              </label>
              <p style={{ fontSize: '0.875rem', color: '#6b7280', marginTop: '0.5rem', marginLeft: '1.75rem' }}>
                Your itinerary will be reviewed before appearing publicly. You can edit or delete it anytime.
              </p>
            </div>

            <div style={{ 
              padding: '1.5rem',
              background: '#fef3c7',
              border: '1px solid #fbbf24',
              borderRadius: '8px'
            }}>
              <h3 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#92400e' }}>
                🎁 Thank you for sharing!
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#78350f' }}>
                By submitting a detailed itinerary, you'll get <strong>1 month of premium access</strong> to view all itineraries and planning tools!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        marginTop: '2rem',
        paddingTop: '2rem',
        borderTop: '1px solid #e5e7eb'
      }}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          {currentStep > 1 && (
            <button
              onClick={handleBack}
              className="back-button"
            >
              ← Back
            </button>
          )}
          
          {onCancel && (
            <button
              onClick={onCancel}
              className="cancel-button"
            >
              Cancel
            </button>
          )}
        </div>

        <div style={{ display: 'flex', gap: '1rem' }}>
          {currentStep === totalSteps && (
            <button
              onClick={() => handleSubmit(true)}
              disabled={isSaving}
              className="draft-button"
            >
              Save as Draft
            </button>
          )}

          {currentStep < totalSteps ? (
            <button
              onClick={handleNext}
              className="next-button"
            >
              Next →
            </button>
          ) : (
            <button
              onClick={() => handleSubmit(false)}
              disabled={isSaving}
              className="submit-button"
            >
              {isSaving ? 'Submitting...' : '✓ Submit Itinerary'}
            </button>
          )}
        </div>
      </div>
      </div>
    </div>
  );
};

export default ItineraryIntakeForm;
