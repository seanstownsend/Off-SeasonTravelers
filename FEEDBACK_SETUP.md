# Supabase Feedback System Setup

## 🗄️ Database Setup

To enable the feedback system, you need to run the SQL commands in your Supabase database.

### **Step 1: Access Supabase SQL Editor**
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project: `vevsotquweownzzjaivp`
3. Navigate to **SQL Editor** in the left sidebar

### **Step 2: Run Database Schema**
Copy and paste the entire contents of `database_schema.sql` into the SQL Editor and run it.

The schema will create:
- ✅ `park_feedback` table for storing user feedback
- ✅ Row Level Security policies for safe public access
- ✅ Indexes for better performance
- ✅ Triggers for automatic timestamps

### **Step 3: Create Storage Bucket (Optional)**
For photo uploads, create a storage bucket:

```sql
-- Create storage bucket for feedback photos
INSERT INTO storage.buckets (id, name, public)
VALUES ('feedback-photos', 'feedback-photos', true);

-- Allow public uploads to feedback photos bucket
CREATE POLICY "Anyone can upload feedback photos" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'feedback-photos');

-- Allow public access to feedback photos
CREATE POLICY "Anyone can view feedback photos" ON storage.objects
  FOR SELECT USING (bucket_id = 'feedback-photos');
```

## 🚀 Usage

### **User Feedback Form**
- **URL**: `http://localhost:5173/yellowstone-react`
- Users can submit feedback with rating, comment, and optional photo
- All feedback requires admin approval before appearing publicly

### **Admin Interface**
- **URL**: `http://localhost:5173/feedback-admin`
- View all feedback (pending/approved)
- Approve or delete feedback entries
- Moderate user-submitted content

### **Template Integration**
- **HTML Template**: `/yellowstone-template` (iframe version)
- **React Template**: `/yellowstone-react` (with live feedback system)

## 📊 Database Schema

### `park_feedback` Table Structure:
```sql
- id (UUID, Primary Key)
- park_name (VARCHAR, Required)
- visitor_name (VARCHAR, Required)
- visit_date (DATE)
- rating (INTEGER, 1-5, Required)
- comment (TEXT, Required)
- photo_url (TEXT, Optional)
- approved (BOOLEAN, Default: false)
- ip_address (INET)
- user_agent (TEXT)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

## 🔐 Security Features

- **Row Level Security**: Only approved feedback is publicly visible
- **Admin Controls**: All feedback requires approval
- **Data Validation**: Rating constraints, required fields
- **Audit Trail**: IP address and user agent tracking

## 🎯 Next Steps

1. **Run the SQL schema** in Supabase
2. **Test the feedback form** at `/yellowstone-react`
3. **Moderate feedback** using `/feedback-admin`
4. **Integrate with other parks** by replicating the React template

## 🔗 API Endpoints

The system uses these Supabase functions:
- `feedbackService.submitFeedback()` - Submit new feedback
- `feedbackService.getApprovedFeedback()` - Get public feedback
- `feedbackService.getAllFeedback()` - Admin: Get all feedback
- `feedbackService.approveFeedback()` - Admin: Approve feedback
- `feedbackService.deleteFeedback()` - Admin: Delete feedback