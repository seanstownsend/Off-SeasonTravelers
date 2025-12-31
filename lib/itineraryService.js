import { supabase } from './supabase';

/**
 * Itinerary Service - Handles all itinerary-related database operations
 * Similar to AllTrails' trip tracking system
 */

export const itineraryService = {
  /**
   * Get public approved itineraries for a specific park
   */
  async getPublicItineraries(parkId, options = {}) {
    const { 
      month = null, 
      minRating = null, 
      limit = 20,
      offset = 0,
      sortBy = 'created_at'
    } = options;

    let query = supabase
      .from('itineraries')
      .select(`
        *,
        itinerary_days(count),
        itinerary_activities(count),
        itinerary_photos(count),
        itinerary_reviews(rating)
      `)
      .eq('park_id', parkId)
      .eq('is_public', true)
      .eq('approved', true)
      .order(sortBy, { ascending: false })
      .range(offset, offset + limit - 1);

    if (month) {
      query = query.eq('month_visited', month);
    }

    if (minRating) {
      query = query.gte('overall_rating', minRating);
    }

    const { data, error } = await query;
    return { data, error };
  },

  /**
   * Get a single itinerary with all details
   */
  async getItineraryById(itineraryId, incrementViews = false) {
    // Increment view count if requested
    if (incrementViews) {
      await supabase.rpc('increment_itinerary_views', { 
        itinerary_uuid: itineraryId 
      });
    }

    const { data, error } = await supabase
      .from('itineraries')
      .select(`
        *,
        itinerary_days (
          *,
          itinerary_activities (*)
        ),
        itinerary_photos (*),
        itinerary_conditions (*),
        itinerary_packing_items (*),
        itinerary_resources (*),
        itinerary_reviews (*)
      `)
      .eq('id', itineraryId)
      .single();

    return { data, error };
  },

  /**
   * Get user's own itineraries (including drafts)
   */
  async getUserItineraries(userId) {
    const { data, error } = await supabase
      .from('itineraries')
      .select(`
        *,
        itinerary_days(count),
        itinerary_activities(count)
      `)
      .eq('user_id', userId)
      .order('updated_at', { ascending: false });

    return { data, error };
  },

  /**
   * Create a new itinerary with all related data
   */
  async createItinerary(itineraryData) {
    const {
      mainData,
      days,
      accommodations,
      conditions,
      packingItems,
      resources
    } = itineraryData;

    try {
      // 1. Insert main itinerary
      const { data: itinerary, error: itineraryError } = await supabase
        .from('itineraries')
        .insert([mainData])
        .select()
        .single();

      if (itineraryError) throw itineraryError;

      const itineraryId = itinerary.id;

      // 2. Insert days and activities
      if (days && days.length > 0) {
        const daysData = days.map(day => ({
          itinerary_id: itineraryId,
          ...day
        }));

        const { data: insertedDays, error: daysError } = await supabase
          .from('itinerary_days')
          .insert(daysData)
          .select();

        if (daysError) throw daysError;

        // 3. Insert activities for each day
        const allActivities = [];
        days.forEach((day, dayIndex) => {
          if (day.activities && day.activities.length > 0) {
            const dayId = insertedDays[dayIndex].id;
            day.activities.forEach((activity, actIndex) => {
              allActivities.push({
                day_id: dayId,
                ...activity,
                activity_order: actIndex + 1
              });
            });
          }
        });

        if (allActivities.length > 0) {
          const { error: activitiesError } = await supabase
            .from('itinerary_activities')
            .insert(allActivities);

          if (activitiesError) throw activitiesError;
        }
      }

      // 4. Insert conditions
      if (conditions) {
        const { error: conditionsError } = await supabase
          .from('itinerary_conditions')
          .insert([{
            itinerary_id: itineraryId,
            ...conditions
          }]);

        if (conditionsError) throw conditionsError;
      }

      // 5. Insert packing items
      if (packingItems && packingItems.length > 0) {
        const packingData = packingItems.map(item => ({
          itinerary_id: itineraryId,
          ...item
        }));

        const { error: packingError } = await supabase
          .from('itinerary_packing_items')
          .insert(packingData);

        if (packingError) throw packingError;
      }

      // 6. Insert resources
      if (resources && resources.length > 0) {
        const resourcesData = resources.map(resource => ({
          itinerary_id: itineraryId,
          ...resource
        }));

        const { error: resourcesError } = await supabase
          .from('itinerary_resources')
          .insert(resourcesData);

        if (resourcesError) throw resourcesError;
      }

      return { data: itinerary, error: null };
    } catch (error) {
      console.error('Error creating itinerary:', error);
      return { data: null, error };
    }
  },

  /**
   * Update an existing itinerary
   */
  async updateItinerary(itineraryId, updates) {
    const { data, error } = await supabase
      .from('itineraries')
      .update(updates)
      .eq('id', itineraryId)
      .select()
      .single();

    return { data, error };
  },

  /**
   * Delete an itinerary (cascade deletes related data)
   */
  async deleteItinerary(itineraryId, userId) {
    const { data, error } = await supabase
      .from('itineraries')
      .delete()
      .eq('id', itineraryId)
      .eq('user_id', userId); // Ensure user owns it

    return { data, error };
  },

  /**
   * Upload photos for an itinerary
   */
  async uploadItineraryPhoto(itineraryId, file, metadata = {}) {
    try {
      // Upload to storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${itineraryId}/${Date.now()}.${fileExt}`;
      
      const { data: uploadData, error: uploadError } = await supabase
        .storage
        .from('itinerary-photos')
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: urlData } = supabase
        .storage
        .from('itinerary-photos')
        .getPublicUrl(fileName);

      // Insert photo record
      const { data: photoRecord, error: photoError } = await supabase
        .from('itinerary_photos')
        .insert([{
          itinerary_id: itineraryId,
          photo_url: urlData.publicUrl,
          caption: metadata.caption || '',
          category: metadata.category || 'general',
          is_cover_photo: metadata.isCover || false
        }])
        .select()
        .single();

      if (photoError) throw photoError;

      return { data: photoRecord, error: null };
    } catch (error) {
      console.error('Error uploading photo:', error);
      return { data: null, error };
    }
  },

  /**
   * Mark an itinerary as helpful
   */
  async markHelpful(itineraryId, userId) {
    const { data, error } = await supabase
      .from('itinerary_helpful_votes')
      .insert([{
        itinerary_id: itineraryId,
        user_id: userId
      }]);

    return { data, error };
  },

  /**
   * Remove helpful vote
   */
  async removeHelpful(itineraryId, userId) {
    const { data, error } = await supabase
      .from('itinerary_helpful_votes')
      .delete()
      .eq('itinerary_id', itineraryId)
      .eq('user_id', userId);

    return { data, error };
  },

  /**
   * Check if user has marked itinerary as helpful
   */
  async isMarkedHelpful(itineraryId, userId) {
    const { data, error } = await supabase
      .from('itinerary_helpful_votes')
      .select('id')
      .eq('itinerary_id', itineraryId)
      .eq('user_id', userId)
      .single();

    return { isHelpful: !!data, error };
  },

  /**
   * Add a review to an itinerary
   */
  async addReview(itineraryId, userId, reviewData) {
    const { data, error } = await supabase
      .from('itinerary_reviews')
      .insert([{
        itinerary_id: itineraryId,
        reviewer_user_id: userId,
        ...reviewData
      }])
      .select()
      .single();

    return { data, error };
  },

  /**
   * Get itinerary statistics
   */
  async getItineraryStats(parkId = null) {
    let query = supabase
      .from('itineraries')
      .select('month_visited, overall_rating, total_budget_usd, travel_group')
      .eq('is_public', true)
      .eq('approved', true);

    if (parkId) {
      query = query.eq('park_id', parkId);
    }

    const { data, error } = await query;

    if (error) return { data: null, error };

    // Calculate statistics
    const stats = {
      totalItineraries: data.length,
      averageRating: data.reduce((sum, it) => sum + (it.overall_rating || 0), 0) / data.length,
      averageBudget: data
        .filter(it => it.total_budget_usd)
        .reduce((sum, it) => sum + it.total_budget_usd, 0) / 
        data.filter(it => it.total_budget_usd).length,
      monthDistribution: data.reduce((acc, it) => {
        acc[it.month_visited] = (acc[it.month_visited] || 0) + 1;
        return acc;
      }, {}),
      groupTypeDistribution: data.reduce((acc, it) => {
        acc[it.travel_group] = (acc[it.travel_group] || 0) + 1;
        return acc;
      }, {})
    };

    return { data: stats, error: null };
  },

  /**
   * Search itineraries
   */
  async searchItineraries(searchParams) {
    const {
      parkId = null,
      month = null,
      minRating = null,
      maxBudget = null,
      travelGroup = null,
      keyword = null
    } = searchParams;

    let query = supabase
      .from('itineraries')
      .select('*')
      .eq('is_public', true)
      .eq('approved', true);

    if (parkId) query = query.eq('park_id', parkId);
    if (month) query = query.eq('month_visited', month);
    if (minRating) query = query.gte('overall_rating', minRating);
    if (maxBudget) query = query.lte('total_budget_usd', maxBudget);
    if (travelGroup) query = query.eq('travel_group', travelGroup);
    if (keyword) query = query.or(`title.ilike.%${keyword}%,tips_for_others.ilike.%${keyword}%`);

    query = query.order('helpful_count', { ascending: false });

    const { data, error } = await query;
    return { data, error };
  },

  /**
   * Get featured itineraries
   */
  async getFeaturedItineraries(limit = 6) {
    const { data, error } = await supabase
      .from('itineraries')
      .select(`
        *,
        itinerary_photos!inner(photo_url, is_cover_photo)
      `)
      .eq('is_public', true)
      .eq('approved', true)
      .eq('featured', true)
      .eq('itinerary_photos.is_cover_photo', true)
      .order('view_count', { ascending: false })
      .limit(limit);

    return { data, error };
  }
};

export default itineraryService;
