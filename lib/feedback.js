import { supabase } from './supabase.js';
import { getParkBySlug, getStorageBucketName } from './parkConfig.js';

export const feedbackService = {
  // Submit new feedback for a specific park
  async submitFeedback(parkSlug, feedbackData) {
    try {
      // Validate park exists
      const park = getParkBySlug(parkSlug);
      if (!park) {
        throw new Error(`Invalid park slug: ${parkSlug}`);
      }
      
      const { data, error } = await supabase
        .from('park_feedback')
        .insert([{
          park_slug: parkSlug,
          park_name: park.name,
          visitor_name: feedbackData.visitor_name,
          visit_date: feedbackData.visit_date,
          rating: parseInt(feedbackData.rating),
          comment: feedbackData.comment,
          photo_url: feedbackData.photo_url || null,
          ip_address: feedbackData.ip_address || null,
          user_agent: feedbackData.user_agent || null
        }])
        .select();

      if (error) {
        throw error;
      }

      return { data, error: null };
    } catch (err) {
      console.error('Error in submitFeedback:', err);
      return { data: null, error: err };
    }
  },

  // Get approved feedback for a specific park
  async getApprovedFeedback(parkSlug, limit = 10) {
    try {
      const { data, error } = await supabase
        .from('park_feedback')
        .select('*')
        .eq('park_slug', parkSlug)
        .eq('approved', true)
        .order('created_at', { ascending: false })
        .limit(limit);

      if (error) {
        throw error;
      }

      return { data, error: null };
    } catch (err) {
      console.error('Error in getApprovedFeedback:', err);
      return { data: null, error: err };
    }
  },

  // Get all feedback for a specific park (for admin/moderation)
  async getParkFeedback(parkSlug, approved = null, limit = 50) {
    try {
      let query = supabase
        .from('park_feedback')
        .select('*')
        .eq('park_slug', parkSlug)
        .order('created_at', { ascending: false })
        .limit(limit);

      // Filter by approval status if specified
      if (approved !== null) {
        query = query.eq('approved', approved);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      return { data, error: null };
    } catch (err) {
      console.error('Error in getParkFeedback:', err);
      return { data: null, error: err };
    }
  },

  // Get all feedback across all parks (for admin/moderation)
  async getAllFeedback(approved = null, limit = 50) {
    try {
      let query = supabase
        .from('park_feedback')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(limit);

      // Filter by approval status if specified
      if (approved !== null) {
        query = query.eq('approved', approved);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      return { data, error: null };
    } catch (err) {
      console.error('Error in getAllFeedback:', err);
      return { data: null, error: err };
    }
  },

  // Approve feedback (admin function)
  async approveFeedback(feedbackId) {
    try {
      const { data, error } = await supabase
        .from('park_feedback')
        .update({ approved: true })
        .eq('id', feedbackId)
        .select();

      if (error) {
        throw error;
      }

      return { data, error: null };
    } catch (err) {
      console.error('Error in approveFeedback:', err);
      return { data: null, error: err };
    }
  },

  // Delete feedback (admin function)
  async deleteFeedback(feedbackId) {
    try {
      const { data, error } = await supabase
        .from('park_feedback')
        .delete()
        .eq('id', feedbackId)
        .select();

      if (error) {
        throw error;
      }

      return { data, error: null };
    } catch (err) {
      console.error('Error in deleteFeedback:', err);
      return { data: null, error: err };
    }
  },

  // Upload photo for feedback to park-specific bucket
  async uploadFeedbackPhoto(parkSlug, file, feedbackId) {
    try {
      // Validate park exists
      const park = getParkBySlug(parkSlug);
      if (!park) {
        throw new Error(`Invalid park slug: ${parkSlug}`);
      }
      
      const fileExt = file.name.split('.').pop();
      const fileName = `feedback-${feedbackId}-${Date.now()}.${fileExt}`;
      const filePath = `${park.storageFolder}/${fileName}`;
      const bucketName = getStorageBucketName(parkSlug);

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from(bucketName)
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from(bucketName)
        .getPublicUrl(filePath);

      return { data: urlData.publicUrl, error: null };
    } catch (err) {
      console.error('Error in uploadFeedbackPhoto:', err);
      return { data: null, error: err };
    }
  }
};

// Helper function to get visitor's IP address
export const getVisitorInfo = () => {
  return {
    user_agent: navigator.userAgent,
    // Note: Getting real IP requires server-side implementation
    // For now, we'll leave it null and handle on backend if needed
    ip_address: null
  };
};